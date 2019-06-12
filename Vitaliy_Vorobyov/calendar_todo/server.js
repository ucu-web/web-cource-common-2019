let express = require('express');

let server = express();
server.use(express.static('public'));

server.get("/*", (request, response) => {
    if (request.url === "/") {
        response.statusCode = 200;
        response.setHeader("Location", `http://localhost:8050/${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`);
        response.end();
    } else {
        response.sendFile('./public/index.html', {root: __dirname});
    }
});
server.listen(8000);
console.log("http://localhost:8000/");