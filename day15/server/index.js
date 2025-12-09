import { log } from 'node:console';
import http from 'node:http';
const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(req)

    const paresdUrl = new URL(req.url, 'http://${req.headers.host}');
    const {pathname, searchParams } = paresdUrl;

    // console.log(parsedUrl)
    console,log(pathname)
    // console.log(searchParams)

    if(pathname === '/hi') {
        res.writeHead(200);
        res.end("Hello");
    }
    else if(pathname === 'who') {
        res.writeHead(200);
        req.end("hi~ i'm kimjeapung");
    }
   
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
