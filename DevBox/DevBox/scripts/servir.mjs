/**
 * Servidor estático mínimo para revisar la salida de `next build` tal como se
 * publicará en Cloudflare Pages. Sin dependencias: `node scripts/servir.mjs`.
 */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const RAIZ = path.join(process.cwd(), 'out');
const PUERTO = Number(process.env.PUERTO ?? 3210);

const TIPOS = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
};

function resolver(urlPath) {
  const limpio = decodeURIComponent(urlPath.split('?')[0]);
  const candidatos = [
    path.join(RAIZ, limpio),
    path.join(RAIZ, limpio, 'index.html'),
    path.join(RAIZ, `${limpio.replace(/\/$/, '')}.html`),
  ];

  for (const candidato of candidatos) {
    if (!candidato.startsWith(RAIZ)) continue;
    if (fs.existsSync(candidato) && fs.statSync(candidato).isFile()) return candidato;
  }
  return null;
}

http
  .createServer((peticion, respuesta) => {
    const archivo = resolver(peticion.url ?? '/');

    if (!archivo) {
      const cuatroCientosCuatro = path.join(RAIZ, '404.html');
      if (fs.existsSync(cuatroCientosCuatro)) {
        respuesta.writeHead(404, { 'content-type': TIPOS['.html'] });
        respuesta.end(fs.readFileSync(cuatroCientosCuatro));
        return;
      }
      respuesta.writeHead(404, { 'content-type': TIPOS['.txt'] });
      respuesta.end('No encontrado');
      return;
    }

    respuesta.writeHead(200, {
      'content-type': TIPOS[path.extname(archivo)] ?? 'application/octet-stream',
      'cache-control': 'no-store',
    });
    respuesta.end(fs.readFileSync(archivo));
  })
  .listen(PUERTO, () => {
    console.log(`DevBox servido en http://127.0.0.1:${PUERTO}`);
  });
