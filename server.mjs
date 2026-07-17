import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const root = path.resolve('dist');
const port = Number(process.env.PORT || 4173);
const types = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.txt':'text/plain; charset=utf-8'};
http.createServer((req,res)=>{
  const pathname = decodeURIComponent(new URL(req.url,'http://localhost').pathname);
  let target = path.join(root, pathname);
  if (pathname.endsWith('/')) target = path.join(target,'index.html');
  else if (!path.extname(target)) target = path.join(target,'index.html');
  if (!target.startsWith(root) || !fs.existsSync(target)) { res.writeHead(404); res.end('Not found'); return; }
  res.writeHead(200, {'Content-Type': types[path.extname(target)] || 'application/octet-stream'});
  fs.createReadStream(target).pipe(res);
}).listen(port,()=>console.log(`Carentix preview: http://localhost:${port}`));
