export interface Token {
    attrGet: (name: string) => string | null;
    attrIndex: (name: string) => number;
    attrJoin: (name: string, value: string) => void;
    attrPush: (attrData: string[]) => void;
    attrSet: (name: string, value: string) => void;
    attrs: string[][];
    block: boolean;
    children: Token[];
    content: string;
    hidden: boolean;
    info: string;
    level: number;
    map: number[];
    markup: string;
    meta: any;
    nesting: number;
    tag: string;
    type: string;
}

export const AST_KEYS = {
    Inline: 'inline',
    HeadingOpen: 'heading_open',
    HeadingClose: 'heading_close',
    ParagraphOpen: 'paragraph_open',
    UlListOpen: 'bullet_list_open',
    UlListClose: 'bullet_list_close',
};

export class AST {
    constructor(private tokens: Token[], private filePath: string, public zone: string) { }

    get length(): number {
        return this.tokens.length;
    }

    offsetAt(text: string, start = 0): number {
        for (let i = start; i < this.tokens.length; i++) {
            if (this.tokens[i].type === AST_KEYS.HeadingOpen && this.tokens[i + 1].content === text) {
                return i;
            }
        }
        return -1;
    }

    offsetTagAt(tag: string, start = 0): number {
        for (let i = start; i < this.tokens.length; i++) {
            if (this.tokens[i].type.endsWith('_open') && this.tokens[i].tag === tag) {
                return i;
            }
        }
        return -1;
    }

    offsetTypeAt(type: string, start = 0): number {
        for (let i = start; i < this.tokens.length; i++) {
            if (this.tokens[i].type === type) {
                return i;
            }
        }
        return -1;
    }

    offsetTagAndTypeAt(type: string, tag: string, start = 0): number {
        for (let i = start; i < this.tokens.length; i++) {
            if (this.tokens[i].type === type && this.tokens[i].tag === tag) {
                return i;
            }
        }
        return -1;
    }

    private finds(start: number, end: number, cb: (token: Token) => boolean): number[] {
        const list = [];
        this.tokens
            .slice(start, end === -1 ? this.tokens.length : end)
            .forEach((token, idx) => {
                if (cb(token)) {
                    list.push(start + idx);
                }
            });
        return list;
    }

    findTagAndTypes(type: string, tag: string, start = 0, end = -1): number[] {
        return this.finds(start, end, token => token.type === type && token.tag === tag);
    }

    findTags(tag: string, start = 0, end = -1): number[] {
        return this.finds(start, end, token => token.type.endsWith('_open') && token.tag === tag);
    }

    findTypes(type: string, start = 0, end = -1): number[] {
        return this.finds(start, end, token => token.type === type);
    }

    jumpNext(index: number): number {
        return index + 3;
    }

    isParagraph(index: number): boolean {
        return this.tokens[index].type === AST_KEYS.ParagraphOpen && this.tokens[index].tag === 'p';
    }

    getText(index: number = 0): string {
        if (this.tokens[index].type === AST_KEYS.Inline) {
            return this.tokens[index].content;
        }

        switch (this.tokens[index].type) {
            case AST_KEYS.HeadingOpen:
            case AST_KEYS.ParagraphOpen:
                return this.tokens[index + 1].content;
            case AST_KEYS.UlListOpen:
                return this.tokens
                    .slice(index, this.getCloseAt(index, AST_KEYS.UlListClose))
                    .filter(i => i.type === AST_KEYS.Inline)
                    .map(i => `- ${i.content}`)
                    .join('\n');
        }
        return '';
    }

    getCloseAt(start: number, type: string): number {
        const idx = this.tokens.slice(start).findIndex(w => w.type === type);
        return idx === -1 ? -1 : idx + start;
    }

    getParagraph(text: string): string {
        const idx = this.offsetAt(text);
        return idx === -1 ? '' : this.getText(idx + 3);
    }

    getTable(index: number, isSplit = false): string[][] {
        const beginStart = this.offsetTagAt('tbody', index);
        let beginEnd = -1;
        if (isSplit) {
            // 查找下一个标题，若标题不存在则至结尾
            const nextHeadingIdx = this.offsetTypeAt(AST_KEYS.HeadingOpen, beginStart + 1);
            if (nextHeadingIdx === -1) {
                beginEnd = this.tokens.length;
            } else {
                beginEnd = nextHeadingIdx;
            }
        } else {
            beginEnd = this.offsetTypeAt('tbody_close', beginStart + 1);
        }
        if (beginStart === -1 || beginEnd === -1) return [];
        return this.findTags('tr', beginStart, beginEnd)
            .map(start =>
                this.findTypes(AST_KEYS.Inline, start, this.offsetTypeAt('tr_close', start))
                    .map(idx => this.tokens[idx].content)
            );
    }
}