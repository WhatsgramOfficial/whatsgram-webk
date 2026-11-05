import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const publicDir = path.join(root, 'public');
const distDir = path.join(root, 'dist');

if(fs.existsSync(distDir)) {
  const assetsSrc = path.join(publicDir, 'assets');
  const assetsDest = path.join(distDir, 'assets');
  if(fs.existsSync(assetsSrc)) {
    fs.cpSync(assetsSrc, assetsDest, {recursive: true});
  }

  const changelogsSrc = path.join(publicDir, 'changelogs');
  const changelogsDest = path.join(distDir, 'changelogs');
  if(fs.existsSync(changelogsSrc)) {
    fs.cpSync(changelogsSrc, changelogsDest, {recursive: true});
  }
}

