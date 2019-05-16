let http = require("http");
let fs = require("fs");

const PORT = 3000;

const contentTypes = {
    "html": "text/html",
    "css": "text/css",
    "js": "application/javascript",
    "json": "application/json",
    "xml": "application/xml",
};

const getContentType = (path) => {
    let contentType = "text/plain";
    let pathParts = path.split(".");
    let format = (pathParts.length ? pathParts[pathParts.length - 1] : "").toLowerCase();

    if (contentTypes[format])
        contentType = contentTypes[format];

    return contentType;
};

const returnError = (path, code, data, res) => {
    res.writeHead(code, {"Content-Type": contentTypes["html"]});
    res.end(`<h1> ${code} </h1> <h2> ${data} </h2>`);
    console.log(`[Server] ${path} - ${code}`);
};

const returnFile = (path, res) => {
    fs.readFile(path, (error, data) => {
        if (error) {
            returnError(path, 505, "Error retrieving resource", res);
        } else {
            res.writeHead(200, {"Content-Type": getContentType(path)});
            res.end(data);
            console.log(`[Server] ${path} - 200`);
        }
    });
};

const returnDirectory = (path, res) => {
    fs.readdir(path, (error, files) => {
        files = files.map(f => `<a href="${path}${f}"> ${f} </a>`);

        res.writeHead(200, {"Content-Type": contentTypes["html"]});
        res.end(`<h2> Directory Contents </h2> ${files.join("<br>")}`);
        console.log(`[Server] ${path} - 200`);
    });
};

const handleDirectoryRequest = (path, res) => {
    if (!path.endsWith("/")) {
        path = path + "/";
    }

    // Checks if index.html exists and returns it
    const index = `${path}index.html`;

    fs.stat(index, (error, indexStats) => {
        if (!error && indexStats.isFile()) {
            returnFile(index, res);
        } else {
            returnDirectory(path, res);
        }
    });
};

const handleError = (path, error, res) => {
    if (error.code === "EACCES")
        returnError(path, 403, "Not permitted", res);
    else if (error.code === "ENOENT")
        returnError(path, 404, "Not found", res);
    else
        returnError(path, 505, "Error retrieving resource", res);
};


let server = http.createServer((req, res) => {
    let path = "." + req.url;

    fs.stat(path, (error, stats) => {
        if (error) {
            handleError(path, error, res);
        }
        else if (stats.isDirectory()) {
            handleDirectoryRequest(path, res);
        }
        else if (stats.isFile()) {
            returnFile(path, res);
        }
    });

});

server.listen(3000, () => {
    console.log(`[Server] started on port ${PORT}`);
});
