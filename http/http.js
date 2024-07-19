import { createServer } from "http";
import fs from 'fs';
import path from "path";

const mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript"
};

function fileMiddleware(req, res, next) {
    let url = req.url;
    if (url === "/") {
        url = "/http.html"
    }
    else if (url === "/hello"){
        url = "/hello.html"
    }
    else if (url === "/bye"){
        url = "/bye.html"
    }

    const filePath = path.resolve("http" + url);
    fs.promises.access(filePath)
        .then(() => {
            const ext = path.extname(filePath);
            res.writeHead(200, { "Content-Type": mimeTypes[ext] || "text/plain" });
            fs.createReadStream(filePath).pipe(res);
        })
        .catch(() => {
            next();
        });
}

const server = createServer((req, res) => {
    fileMiddleware(req, res, () => {
        if (req.url === "/hello") {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("HELLO HTTP JS");
        } else {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("bye");
        }
    });
});

server.listen(4001, () => {
    console.log("Server is running on port 4001");
});
