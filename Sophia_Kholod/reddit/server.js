const http = require('http');
const path = require('path');
const fs = require('fs');

let port = 3000;

let requestHandler = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    let filePath = '.' + request.url;
    if (filePath === './')
        filePath = './index.html';

    let extname = path.extname(filePath);
    let contentType = 'text/html';

    if (extname === '.js') {
        contentType = 'text/javascript';
    }
    if (request.method === "GET") {

        fs.readFile(filePath, function (error, content) {
            if (error) {
                if (error.code === 'ENOENT') {
                    response.writeHead(404);
                    response.end();
                } else {
                    response.writeHead(500);
                    response.end();
                }
            } else {
                response.writeHead(200, {'Content-Type': contentType});
                response.end(content, 'utf-8');
            }
        });
    } else if (request.method === "POST") {
        let postData = '';
        request.on('data', (chunk) => {
            postData += chunk;
        });

        request.on('end', () => {
            let postDataObject = JSON.parse(postData);
            let postDataJSONString = JSON.stringify(postDataObject);
            fs.exists(filePath, (exists) => {
                if (exists) {
                    fs.readFile(filePath, (err, data) => {
                        if (err) throw err;
                        let array = JSON.parse(data);
                        array.push(postDataJSONString);
                        let allPostData = JSON.stringify(array);

                        fs.writeFile(filePath, allPostData,
                            (err) => {
                                if (err) {
                                    response.writeHead(err);
                                    response.end();
                                } else {
                                    response.writeHead(201);
                                    response.end();
                                }

                            });
                    });
                } else {
                    fs.writeFile(filePath, postDataJSONString,
                        (err) => {
                            if (err) {
                                response.writeHead(err);
                                response.end();
                            } else {
                                response.writeHead(201);
                                response.end();
                            }
                        })
                }
            });
        });
    }
};

console.log("lisnening on " + "http://localhost:" + port.toString());
http.createServer(requestHandler).listen(port);
