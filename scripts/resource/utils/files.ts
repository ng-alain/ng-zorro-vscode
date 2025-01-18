import * as path from "path";
const klawSync = require("klaw-sync");

const FILE_NAMES = ["index.md", "index.en-US.md", "index.zh-CN.md"];

export function getFiles(langs: string[], buildPath: string) {
  const files = [""];
  files.length = 0;
  [
    path.join(buildPath, "ng-zorro-antd", "components"),
    path.join(buildPath, "delon", "packages", "abc"),
    path.join(buildPath, "delon", "packages", "chart"),
  ].forEach((dir) => {
    files.push(
      ...klawSync(dir, {
        nodir: true,
        filter: (item) => {
          if (item.stats.isDirectory()) return true;
          return FILE_NAMES.includes(path.basename(item.path));
        },
      }).map((i) => i.path)
    );
  });
  // fix sf
  files.push(
    ...[
      path.join(
        buildPath,
        "delon",
        "packages",
        "form",
        "docs",
        "getting-started.en-US.md"
      ),
      path.join(
        buildPath,
        "delon",
        "packages",
        "form",
        "docs",
        "getting-started.zh-CN.md"
      ),
    ]
  );

  // split
  const res: { [key: string]: string[] } = {};
  langs.forEach((l) => {
    res[l] = [];
    files.forEach((p) => {
      if (p.endsWith(`${l}.md`) || p.endsWith("index.md")) {
        res[l].push(p);
      }
    });
  });

  return res;
}
