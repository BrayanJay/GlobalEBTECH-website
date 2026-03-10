const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('d:/DigiZone.lk/globalebtech/frontend/src');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // Match e.g. from "@radix-ui/react-slot@1.1.2"
  // $1: from "
  // $2: @radix-ui/react-slot
  // $3: @1.1.2 (or any version matching semver mostly)
  // $4: "
  const updated = content.replace(/(from\s+['"])(.+?)(@[0-9]+\.[0-9]+\.[0-9]+.*?)(['"])/g, '$1$2$4');
  if (content !== updated) {
    fs.writeFileSync(file, updated, 'utf8');
    console.log('Updated', file);
  }
});
