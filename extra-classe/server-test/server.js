const http=require('http');

http.createServer((req, resp)=>{
    resp.writeHead(200, {'Content-Type': 'text/plain'});
    resp.end('Resposta à requisição');
}).listen('8080');