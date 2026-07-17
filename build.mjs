import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

const routes = {
  'Carentix Homepage.dc.html': '',
  'HIPAA Compliance.dc.html': 'compliance',
  'Careers.dc.html': 'careers',
  'Privacy Policy.dc.html': 'privacy',
  'Terms of Service.dc.html': 'terms',
  'Business Associate Agreement.dc.html': 'baa',
  'Accessibility.dc.html': 'accessibility',
};

const replacements = [
  [/Carentix%20Homepage\.dc\.html/g, '/'],
  [/Carentix Homepage\.dc\.html/g, '/'],
  [/HIPAA%20Compliance\.dc\.html/g, '/compliance'],
  [/HIPAA Compliance\.dc\.html/g, '/compliance'],
  [/Careers\.dc\.html/g, '/careers'],
  [/Privacy%20Policy\.dc\.html/g, '/privacy'],
  [/Privacy Policy\.dc\.html/g, '/privacy'],
  [/Terms%20of%20Service\.dc\.html/g, '/terms'],
  [/Terms of Service\.dc\.html/g, '/terms'],
  [/Business%20Associate%20Agreement\.dc\.html/g, '/baa'],
  [/Business Associate Agreement\.dc\.html/g, '/baa'],
  [/Accessibility\.dc\.html/g, '/accessibility'],
  [/src="\.\/support\.js"/g, 'src="/support.js"'],
  [/src="\.\/image-slot\.js"/g, ''],
  [/src="assets\//g, 'src="/images/'],
  [/href="assets\//g, 'href="/images/'],
];

for (const [file, route] of Object.entries(routes)) {
  let html = fs.readFileSync(path.join(root, 'source-pages', file), 'utf8');
  for (const [pattern, value] of replacements) html = html.replace(pattern, value);
  html = html.replace(/<script data-cfasync="false"[^>]*><\/script>/g, '');
  const outDir = route ? path.join(dist, route) : dist;
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html);
}

fs.cpSync(path.join(root, 'public'), dist, { recursive: true });
console.log('Built Carentix static site into dist/');
