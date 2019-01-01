import * as path from 'path';
import * as fs from 'fs';
import { getFiles } from './utils/files';
import { makeObject } from './utils/markdown';

const rootPath = path.join(__dirname, '../..');
const buildPath = path.join(rootPath, 'build');
const LANGS = ['en-US', 'zh-CN'];

const langFiles = getFiles(LANGS, buildPath);
Object.keys(langFiles).forEach(l => {
  // .filter(w => w.includes('anchor'))
  const res = makeObject(l, langFiles[l]);
  console.log(l, res);

});