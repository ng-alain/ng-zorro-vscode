import * as fs from 'fs';
import * as path from 'path';
import { Directive, DirectiveProperty } from '../../src/magic/interfaces';
import { getFiles } from './utils/files';
import { makeObject } from './utils/markdown';

const rootPath = path.join(__dirname, '../..');
const defaultLang = 'en-US';
const allLang = [defaultLang, 'zh-CN'];
const result: { [key: string]: any[] } = {};
const langData: { [key: string]: { [key: string]: string } } = {};
enum LK {
  title,
  whenToUse,
  description,
}

function genLocalizeKey(directive: Directive, key: keyof typeof LK, property?: DirectiveProperty): string {
  if (property != null) {
    return `${(directive as Directive).selector}.${property.name}.${key}`;
  }

  return `${(directive as Directive).selector}.${key}`;
}

function genObject(): void {
  const allFiles = getFiles(allLang, path.join(rootPath, 'build'));
  Object.keys(allFiles).forEach((lang) => {
    const files = allFiles[lang];
    // const files = langFiles[l].filter((w) => w.includes('components/auto-complete'));
    result[lang] = JSON.parse(JSON.stringify(makeObject(lang, files)));

    // 生成国际化Key数据
    langData[lang] = {};
    result[lang].forEach((i: Directive) => {
      langData[lang][genLocalizeKey(i, 'title')] = i.title;
      i.title = genLocalizeKey(i, 'title');
      langData[lang][genLocalizeKey(i, 'whenToUse')] = i.whenToUse;
      i.whenToUse = genLocalizeKey(i, 'whenToUse');
      langData[lang][genLocalizeKey(i, 'description')] = i.description;
      i.description = genLocalizeKey(i, 'description');

      if (i.selector === 'nz-button') {
        debugger;
      }
      (i.properties || []).forEach((p) => {
        langData[lang][genLocalizeKey(i, 'description', p)] = p.description;
        p.description = genLocalizeKey(i, 'description', p);
      });

      if (i.types) {
        Object.keys(i.types).forEach((key) => {
          i.types[key].forEach((p) => {
            langData[lang][genLocalizeKey(i, 'description', p)] = p.description;
            p.description = genLocalizeKey(i, 'description', p);
          });
        });
      }
    });
  });
}

function genDefaultJson(): void {
  const defaultJson = path.join(rootPath, 'src', 'magic', 'resources', 'default.ts');
  const defaultData = result[defaultLang];
  const langCode: string[] = Object.keys(langData[defaultLang]).map((key) => {
    const val = (langData[defaultLang][key] || '').replace(/'/g, "\\'").replace(/\n/g, '\\n').trim();
    return `'${key}': localize('${key}', '${val || ' '}')`;
  });
  // 保存
  fs.writeFileSync(
    defaultJson,
    `import * as nls from 'vscode-nls';
const localize = nls.config({ messageFormat: nls.MessageFormat.both })();

export const LANG = { ${langCode.join(',\n')} };
export const DATA = ${JSON.stringify(defaultData, null, 2)};`,
  );
}

function genI18nFile(): void {
  const prefix = path.join(rootPath, 'i18n');
  allLang
    .filter((w) => w !== defaultLang)
    .forEach((lang) => {
      const saveDir = path.join(prefix, lang, 'out', 'resources'); // .toLocaleLowerCase();
      const savePath = path.join(saveDir, 'default.i18n.json');
      // if (fs.existsSync(saveDir)) fs.rmdirSync(saveDir);
      fs.mkdirSync(saveDir, { recursive: true });
      fs.writeFileSync(
        savePath,
        JSON.stringify(langData[lang], (_key, val) => (val === undefined ? null : val), 2),
      );
    });
}

genObject();
genDefaultJson();
genI18nFile();
