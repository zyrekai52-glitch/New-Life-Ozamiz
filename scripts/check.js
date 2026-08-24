const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const must = [
  'web/index.html','web/styles.css','web/app.js','web/manifest.webmanifest','web/sw.js',
  'web/data/content.json','web/assets/icon-192.png','web/assets/icon-512.png',
  'capacitor.config.ts','package.json','.github/workflows/android.yml','.github/workflows/ios.yml'
];
let ok = true;
for (const f of must) { if(!fs.existsSync(path.join(root,f))){console.error('MISSING',f);ok=false;} }
for (const js of ['web/app.js','web/manage/manage.js']) {
  const txt=fs.readFileSync(path.join(root,js),'utf8');
  if(!txt.length){console.error('EMPTY',js);ok=false;}
}
const data=JSON.parse(fs.readFileSync(path.join(root,'web/data/content.json'),'utf8'));
if(!Array.isArray(data.schedules)||!data.schedules.length) {console.error('No schedules');ok=false;}
if(!Array.isArray(data.songs)||!data.songs.length) {console.error('No songs');ok=false;}
console.log(ok?'STRUCTURE CHECK PASSED':'STRUCTURE CHECK FAILED');
process.exit(ok?0:1);
