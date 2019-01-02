import * as path from 'path';
import * as fs from 'fs';
import { getFiles } from './utils/files';
import { makeObject } from './utils/markdown';

const rootPath = path.join(__dirname, '../..');
const buildPath = path.join(rootPath, 'build');
const srcPath = path.join(rootPath, 'src', 'magic', 'resources');
const LANGS = ['en-US', 'zh-CN'];

const langFiles = getFiles(LANGS, buildPath);
Object.keys(langFiles).forEach(l => {
  const files = langFiles[l]; // .filter(w => w.includes('tooltip'));
  const res = makeObject(l, files);
  fs.writeFileSync(
    path.join(srcPath, l + '.json'),
    JSON.stringify(res, null, 2),
  );
});