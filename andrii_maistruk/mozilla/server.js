let http = require("http");
let fs = require("fs");

let server = new http.Server();

server.listen(5000, "127.0.0.1");

let data_index = fs.readFileSync('index.html', 'utf8');

server.on("request", function (req, response) {
    if (req.url === "/") {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data_index);
        response.end();
    } else {
        let path = req.url.substr(1, req.url.length);
        fs.exists(path, (exists) => {
            if (exists) {
                fs.readFile(path, function (error, data) {
                    if (error) {
                        response.writeHead(404);
                        response.write(error);
                        response.end();
                    } else {
                        response.writeHead(200);
                        response.write(data);
                        response.end();
                    }
                })
            } else {
                response.writeHead(404);
                response.write("404: NOT FOUND");
                response.end();
            }
        })
    }
});