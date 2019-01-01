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

export class AST {
    constructor(private tokens: Token[]) { }

    offsetAt(text: string, start = 0): number {
        for (let i = start; i < this.tokens.length; i++) {
            if (this.tokens[i].type === 'heading_open' && this.tokens[i + 1].content === text) {
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

    findTags(tag: string, start = 0, end = -1): number[] {
        return this.finds(start, end, token => token.type.endsWith('_open') && token.tag === tag);
    }

    findTypes(type: string, start = 0, end = -1): number[] {
        return this.finds(start, end, token => token.type === type);
    }

    getText(index: number = 0): string {
        if (this.tokens[index].type === 'inline') {
            return this.tokens[index].content;
        }

        switch (this.tokens[index].type) {
            case 'heading_open':
            case 'paragraph_open':
                return this.tokens[index + 1].content;
            case 'bullet_list_open':
                return this.tokens
                    .slice(index, this.getCloseAt(index, 'bullet_list_close'))
                    .filter(i => i.type === 'inline')
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

    getTable(index: number): string[][] {
        const beginStart = this.offsetTagAt('tbody', index);
        const beginEnd = this.offsetTypeAt('tbody_close', beginStart + 1);
        if (beginStart === -1 || beginEnd === -1) return [];
        return this.findTags('tr', beginStart, beginEnd)
            .map(start =>
                this.findTypes('inline', start, this.offsetTypeAt('tr_close', start))
                    .map(idx => this.tokens[idx].content)
            );
    }
}