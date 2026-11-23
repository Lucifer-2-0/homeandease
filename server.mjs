import { createReadStream, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('.', import.meta.url)));
const port = Number(process.env.PORT || 4173);
const mimeTypes = new Map([
  ['.html', 'text/html; charset=utf-8'],
  ['.css', 'text/css; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.svg', 'image/svg+xml'],
  ['.png', 'image/png'],
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
  ['.webp', 'image/webp'],
  ['.avif', 'image/avif'],
  ['.ico', 'image/x-icon'],
  ['.txt', 'text/plain; charset=utf-8'],
  ['.xml', 'application/xml; charset=utf-8'],
]);

const headers = {
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'X-Frame-Options': 'DENY',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Content-Security-Policy': "default-src 'self'; img-src 'self' https://images.unsplash.com https://*.mailerlite.com data:; style-src 'self' https://fonts.googleapis.com https://*.mailerlite.com 'unsafe-inline'; font-src 'self' https://fonts.gstatic.com https://*.mailerlite.com; script-src 'self' https://cdn.jsdelivr.net https://assets.mailerlite.com 'sha256-MojnMlVAShAnMDqlduNnyvLw55GujvKKP5SdSlAypPw='; connect-src 'self' https://*.mailerlite.com; frame-src https://*.mailerlite.com; base-uri 'self'; form-action 'self' https://*.mailerlite.com; frame-ancestors 'none'",
};

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, { ...headers, 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
  response.end(JSON.stringify(payload));
}

const server = createServer((request, response) => {
  const url = new URL(request.url || '/', `http://${request.headers.host || 'localhost'}`);
  if (request.method === 'POST' && ['/api/contact', '/api/applications'].includes(url.pathname)) {
    request.resume();
    return sendJson(response, 503, {
      ok: false,
      code: 'form_delivery_not_configured',
      message: 'Form delivery is not configured. Your details have not been sent or saved.',
    });
  }

  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, { ...headers, Allow: 'GET, HEAD' });
    return response.end('Method not allowed');
  }

  let pathname;
  try {
    pathname = decodeURIComponent(url.pathname);
  } catch {
    response.writeHead(400, headers);
    return response.end('Bad request');
  }

  if (!pathname.endsWith('/') && !extname(pathname)) {
    response.writeHead(308, { ...headers, Location: `${pathname}/${url.search}`, 'Cache-Control': 'no-store' });
    return response.end();
  }

  if (pathname.endsWith('/')) pathname += 'index.html';
  const filePath = resolve(root, `.${pathname}`);
  if (filePath !== root && !filePath.startsWith(`${root}${sep}`)) {
    response.writeHead(403, headers);
    return response.end('Forbidden');
  }

  const contentType = mimeTypes.get(extname(filePath).toLowerCase());
  if (!contentType) {
    response.writeHead(404, { ...headers, 'Content-Type': 'text/plain; charset=utf-8' });
    return response.end('Not found');
  }

  try {
    if (!statSync(filePath).isFile()) throw new Error('Not a file');
    response.writeHead(200, { ...headers, 'Content-Type': contentType, 'Cache-Control': extname(filePath) === '.html' ? 'no-cache' : 'public, max-age=3600' });
    if (request.method === 'HEAD') return response.end();
    return createReadStream(filePath).pipe(response);
  } catch {
    response.writeHead(404, { ...headers, 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' });
    if (request.method === 'HEAD') return response.end();
    return createReadStream(resolve(root, '404.html')).pipe(response);
  }
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Home & Ease is available at http://127.0.0.1:${port}`);
  console.log('Form delivery is intentionally disabled until the owner selects a backend.');
});
