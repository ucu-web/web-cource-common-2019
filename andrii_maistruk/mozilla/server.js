let http = require("http");
let fs = require("fs");

let server = new http.Server();
const port_number = 5000;
server.listen(port_number, "127.0.0.1");

server.on("request", function (req, res) {
    if (req.url === "/") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        let file = new fs.ReadStream('index.html');
        sendFile(file, res);
    } else {
        let path = req.url.substr(1, req.url.length);
        fs.exists(path, (exists) => {
            if (exists) {
                if (path.endsWith("js")) {
                    res.writeHead(200, {'Content-Type': 'text/javascript'});
                }
                if (path.endsWith("css")) {
                    res.writeHead(200, {'Content-Type': 'text/css'});
                }
                if (path.endsWith("png")) {
                    res.writeHead(200, {'Content-Type': 'image/png'});
                }
                if (path.endsWith("jpeg") || path.endsWith("jpg")) {
                    res.writeHead(200, {'Content-Type': 'image/jpeg'});
                }
                if (path.endsWith("svg")) {
                    res.writeHead(200, {'Content-Type': 'image/svg+xml'});
                }

                let file = new fs.ReadStream(path);
                sendFile(file, res);
            } else {
                res.writeHead(404);

                res.write("404: NOT FOUND");
                res.end();
            }
        })
    }
});

function sendFile(file, res) {
    file.pipe(res);

    file.on('error', function (err) {
        console.err(err);
        file.destroy();
    });

    res.on('close', function () {
        file.destroy();
    });
}


process.stdout.write("Server is running.\nGo to http://localhost:" + port_number + ".\n");