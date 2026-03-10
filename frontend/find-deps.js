const fs = require('fs');

const walk = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) results = results.concat(walk(file));
    else if (file.endsWith('.tsx') || file.endsWith('.ts')) results.push(file);
  });
  return results;
};

const files = walk('d:/DigiZone.lk/globalebtech/frontend/src');
const deps = new Set();
files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const matches = [...content.matchAll(/from\s+['"]([^./\\][^'"]*)['"]/g)];
  matches.forEach(m => {
    let pkg = m[1];
    if (pkg.startsWith('react') && pkg.length === 5) return;
    if (pkg.startsWith('next') && pkg.length === 4) return;
    
    // Extract base package name
    if (pkg.startsWith('@')) {
       pkg = pkg.split('/').slice(0, 2).join('/');
    } else {
       pkg = pkg.split('/')[0];
    }
    deps.add(pkg);
  });
});

console.log(Array.from(deps).sort().join('\n'));
