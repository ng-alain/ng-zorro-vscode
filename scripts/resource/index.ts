import * as fs from "fs";
import * as path from "path";
import { Directive, DirectiveProperty } from "../../src/magic/interfaces";
import { getFiles } from "./utils/files";
import { makeObject } from "./utils/markdown";

const rootPath = path.join(__dirname, "../..");
const resourcePath = path.join(rootPath, "src", "magic", "resources");
const mergeLangData = {
  "en-US": {},
  "zh-CN": {},
};
const allLang = Object.keys(mergeLangData);
const result: { [key: string]: any[] } = {};
const langData: { [key: string]: { [key: string]: string } } = {};
enum LK {
  title,
  whenToUse,
  description,
}

function genLocalizeKey(
  directive: Directive,
  key: keyof typeof LK,
  property?: DirectiveProperty
): string {
  if (property != null) {
    return `${(directive as Directive).selector}.${property.name}.${key}`;
  }

  return `${(directive as Directive).selector}.${key}`;
}

function genObject(): void {
  const allFiles = getFiles(allLang, path.join(rootPath, "build"));
  Object.keys(allFiles).forEach((lang) => {
    const files = allFiles[lang];
    // const files = langFiles[l].filter((w) => w.includes('components/auto-complete'));
    result[lang] = JSON.parse(JSON.stringify(makeObject(lang, files)));

    // 生成国际化Key数据
    langData[lang] = {};
    result[lang].forEach((i: Directive) => {
      langData[lang][genLocalizeKey(i, "title")] = i.title!;
      i.title = genLocalizeKey(i, "title");
      langData[lang][genLocalizeKey(i, "whenToUse")] = i.whenToUse!;
      i.whenToUse = genLocalizeKey(i, "whenToUse");
      langData[lang][genLocalizeKey(i, "description")] = i.description!;
      i.description = genLocalizeKey(i, "description");

      (i.properties || []).forEach((p) => {
        langData[lang][genLocalizeKey(i, "description", p)] = p.description!;
        p.description = genLocalizeKey(i, "description", p);
      });

      if (i.types) {
        Object.keys(i.types).forEach((key) => {
          i.types![key].forEach((p) => {
            langData[lang][genLocalizeKey(i, "description", p)] =
              p.description!;
            p.description = genLocalizeKey(i, "description", p);
          });
        });
      }
    });
  });
}

function genData() {
  const firstKey = allLang[0];
  fs.writeFileSync(
    path.join(resourcePath, "data.ts"),
    `import type { Directive } from "../interfaces";

export const DATA: Directive[] = ${JSON.stringify(result[firstKey], null, 2)};`
  );
}

function genI18nFile(): void {
  allLang.forEach((lang) => {
    const json = { ...mergeLangData[lang], ...langData[lang] };
    const name = lang.replace("-", "");
    const str = JSON.stringify(json, null, 2);
    fs.writeFileSync(
      path.join(resourcePath, `lang-${lang}.ts`),
      `export const ${name}: Record<string, string> = ${str};`
    );
  });
}

genObject();
genData();
genI18nFile();
