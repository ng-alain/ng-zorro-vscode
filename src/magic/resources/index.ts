import { env, MarkdownString, workspace, l10n } from "vscode";
import {
  Directive,
  DirectiveProperty,
  DirectiveType,
  DirectiveTypeDefinition,
  InputAttrType,
  NAME,
  Tag,
} from "../interfaces";
import { Notifier } from "../notifier";
import { DATA } from "./data";
import { enUS } from "./lang-en-US";
import { zhCN } from "./lang-zh-CN";
import { findUri, readFile } from "../fs";
const I18N = {
  document: l10n.t("OnLine Document"),
  github: l10n.t("Source"),
  whenToUse: l10n.t("When To Use:"),
  type: l10n.t("Type:"),
  optionalValue: l10n.t("Optional Value:"),
  defaultValue: l10n.t("Default Value:"),
  library: l10n.t("Library:"),
  standalone: l10n.t("(Standalone)"),
};
const defaultLangCode = "en-US";
const LANG_DATAS: Record<string, Record<string, string>> = {
  [defaultLangCode]: enUS,
  "zh-CN": zhCN,
};
const LANG = getLangData();

export const CONFIG = {
  language: "en",
  hover: true,
  inlineTemplate: true,
  /** 始终使用官方文档链接 */
  officialDocument: true,
  signal: false,
  isAntd: true,
  isAlain: true,
};

export const RESOURCES: Directive[] = [];

export const DIRECTIVE_NAMES: string[] = [];

function notNull(value: any, defaultValue: any = "") {
  if (value == null) return defaultValue;

  return value;
}

function getPure(value: string): string {
  return value.replace(/nz([A-Z])/g, (_raw: string, val: string) =>
    val.toLowerCase()
  );
}

function getFullDoc(item: Directive): string {
  if (item.doc?.startsWith("http")) return item.doc;
  const isEn = CONFIG.language === "en";
  const doc = isEn ? item.doc : item.doc?.replace("/en", "/zh");
  const ANTD_LINK = "https://ng.ant.design";
  const ALAIN_LINK = "https://ng-alain.com";
  const isANTD = item.lib === "ng-zorro-antd";
  if (CONFIG.officialDocument) {
    return (isANTD ? ANTD_LINK : ALAIN_LINK) + doc;
  }
  if (isANTD) {
    return (isEn ? ANTD_LINK : "https://ng-zorro.gitee.io") + doc;
  }
  return (
    (isEn ? "https://ng-alain-doc.surge.sh" : ALAIN_LINK) + doc
  );
}

function genComponentMarkdown(item: Directive): string {
  if (item == null) return "";

  let title = `**${item.title}**`;
  // (item.standalone ? ' `' + I18N.standalone + '`' : '')
  // if (CONFIG.isAlain) title += `, (${I18N.library}: ${item.lib})`;
  // if (CONFIG.isAlain) title += ` ![NG-ZORRO](https://dummyimage.com/90x22/1890ff/ffffff.png&text=NG-ZORRO)`;
  if (item.standalone)
    title += ` ![Standalone](https://cdn-images-1.medium.com/v2/resize:fit:80/1*yjYUfAD0P2osKAqHDnQIaQ.png)`;
  const rows: string[] = [title, item.description ?? ""];

  if (item.whenToUse && item.whenToUse.trim().length > 0) {
    rows.push(`**${I18N.whenToUse}**`);
    rows.push(item.whenToUse);
  }

  if (item.doc) {
    rows.push(
      `[${I18N.document}](${getFullDoc(item)})${item.github ? ` － [${I18N.github}](${item.github})` : ""
      }`
    );
  }

  return rows.filter((w) => !!w).join("\n\n");
}

function genPropertyMarkdown(property: DirectiveProperty): string {
  if (property == null) return "";

  const rows: string[] = [];

  if (
    Array.isArray(property.typeDefinition) &&
    property.typeDefinition.length > 0
  ) {
    rows.push(
      `**${I18N.optionalValue}** ${property.typeDefinition
        .map((i) => "`" + (i as DirectiveTypeDefinition).label + "`")
        .join(", ")}`
    );
  } else if (property.typeRaw && property.typeRaw.length > 0) {
    rows.push(`**${I18N.type}** ${property.typeRaw}`);
  }

  if (property.default && property.default.length > 0) {
    rows.push(`**${I18N.defaultValue}** ${property.default}`);
  }

  if (property.description) {
    rows.push(property.description);
  }

  return rows.join("\n\n");
}

function fixProperty(p: DirectiveProperty) {
  p.pureName = getPure(p.name);

  p.default = notNull(p.default, "-");
  if (p.default === "-") p.default = "";

  p.description = LANG[p.description ?? ""];
  p.isInputBoolean = notNull(p.isInputBoolean, true);
  p.type = notNull(p.type, "string");
  p.typeRaw = notNull(p.typeRaw, "").replace(/｜/g, "|");
  p.typeDefinition = notNull(p.typeDefinition, []);
  if (Array.isArray(p.typeDefinition)) {
    p.typeDefinition = p.typeDefinition.map((item: any) =>
      typeof item === "string" ? { value: item, label: item } : item
    );
    p.typeDefinitionSnippetStr = p.typeDefinition
      .map((i) => (i as DirectiveTypeDefinition).value)
      .join(",");
  } else {
    if (typeof p.typeDefinition === "object") {
      p.inputType = InputAttrType.Complex;
    }
    p.typeDefinitionSnippetStr = "";
  }
  p._doc = new MarkdownString(genPropertyMarkdown(p));
}

function getLangData(): Record<string, string> {
  const lang = env.language.toLowerCase();
  if (LANG_DATAS[lang]) return LANG_DATAS[lang];
  const envLangCode = lang.split("-").shift() ?? "en";
  for (const lang of Object.keys(LANG_DATAS)) {
    const curLangCode = lang.split("-").shift() ?? "en";
    if (envLangCode === curLangCode) return LANG_DATAS[lang];
  }
  return LANG_DATAS[defaultLangCode];
}

export async function INIT(notifier: Notifier) {
  const cog = workspace.getConfiguration(NAME);
  CONFIG.language = env.language.toLowerCase();
  CONFIG.hover = cog.hover;
  CONFIG.signal = cog.signal;
  CONFIG.inlineTemplate = cog.inlineTemplate;
  CONFIG.officialDocument = cog.officialDocument;
  if (
    workspace.workspaceFolders != null &&
    workspace.workspaceFolders.length > 0
  ) {
    CONFIG.isAntd = false;
    CONFIG.isAlain = false;
    const packageJsonUri = await findUri("package.json");
    if (packageJsonUri == null) {
      notifier.notify(`Not found package.json`);
      return null;
    }
    const packageStr = await readFile(packageJsonUri);
    if (packageStr == null) {
      notifier.notify(`Can't load package.json file`);
      return null;
    }
    const packageJson = JSON.parse(packageStr);
    const VERSIONS = [
      ...Object.keys(packageJson.dependencies),
      ...Object.keys(packageJson.devDependencies),
    ];
    if (~VERSIONS.indexOf(`ng-zorro-antd`)) {
      CONFIG.isAntd = true;
    }
    if (~VERSIONS.indexOf(`@delon/theme`)) {
      CONFIG.isAntd = true;
      CONFIG.isAlain = true;
    }
  }

  const data = DATA as Directive[];
  if (CONFIG.isAntd) {
    RESOURCES.push(...data.filter((i) => i.lib === "ng-zorro-antd"));
  }

  if (CONFIG.isAlain) {
    RESOURCES.push(...data.filter((i) => i.lib !== "ng-zorro-antd"));
  }

  RESOURCES.forEach((i) => {
    i.description = LANG[i.description];
    i.whenToUse = LANG[i.whenToUse];
    i.doc = notNull(i.doc);
    i.title = LANG[i.title];
    i.type = notNull(i.type, "component");
    i.snippet = notNull(i.snippet, "");
    if (i.snippet?.length === 0) {
      i.snippet =
        i.type === "component"
          ? i.selfClosingTag
            ? `<__$0 />`
            : `<__$1>$0</__>`
          : `<div __$1>$0</div>`;
    }
    i.snippet = i.snippet!.replace(/__/g, i.selector);

    i.properties = notNull(i.properties, []);
    i.properties.forEach((p) => fixProperty(p));
    if (i.types) {
      Object.keys(i.types).forEach((key) => {
        i.types[key].forEach((p) => fixProperty(p));
      });
    }
    if (~i.properties.findIndex((w) => w.name === i.selector)) {
      i.directiveNameIsOutput = true;
    }

    i._doc = new MarkdownString(genComponentMarkdown(i));

    DIRECTIVE_NAMES.push(i.selector);
  });
}

export function isComponent(text: string): boolean {
  return text.startsWith("nz-") || DIRECTIVE_NAMES.indexOf(text) !== -1;
}

export function getDirective(tag: Tag): Directive[] {
  const dict: { [key: string]: Directive | undefined } = {};
  if (isComponent(tag.name)) {
    dict[tag.name] = first(tag.name);
  }

  Object.keys(tag.attributes)
    .filter(
      (key) => DIRECTIVE_NAMES.indexOf(tag.attributes[key].name ?? "") !== -1
    )
    .forEach((key) => {
      const keyValue = tag.attributes[key].name ?? "";
      if (dict[keyValue]) return;
      dict[keyValue] = first(keyValue);
    });

  return Object.values(dict).filter((w) => !!w);
}

export function query(type: DirectiveType) {
  return [...RESOURCES].filter((i) => i.type === type);
}

export function first(selector: string) {
  return RESOURCES.find((w) => w.selector === selector);
}
