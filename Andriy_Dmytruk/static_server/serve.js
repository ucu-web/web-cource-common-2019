let http = require("http");
let fs = require("fs").promises;
let {last, split} = require("ramda");
const path = require('path');

const [, , PORT = 3000, INITIAL_DIRECTORY = __dirname] = process.argv;

const contentTypes = {
    "html": "text/html",
    "css": "text/css",
    "js": "application/javascript",
    "json": "application/json",
    "xml": "application/xml",
};

const getContentTypeBasedByFileExtension = (path) => {
    let extension = last(split(".", path));

    return contentTypes[extension] || "text/plain";
};

const getErrorResponse = (path, code, data) => ({
    contentType: contentTypes["html"],
    data: `<h1> ${code} </h1> <h2> ${data} </h2>`,
    status: code
});

const getFileResponse = async (relPath) => {
    try {
        const data = await fs.readFile(path.join(INITIAL_DIRECTORY, relPath));

        return {
            contentType: getContentTypeBasedByFileExtension(relPath),
            data,
            status: 200
        };
    } catch (error) {
        return getErrorResponse(relPath, 505, "Error retrieving resource");
    }
};

const getDirectoryResponse = async (relPath) => {
    let files = await fs.readdir(path.join(INITIAL_DIRECTORY, relPath));

    files = files.map(fileName => `<a href="${path.join(relPath, fileName)}"> ${fileName} </a>`);

    return {
        contentType: contentTypes["html"],
        data: `<h2> Directory Contents </h2> ${files.join("<br>")}`,
        status: 200
    }
};

const handleDirectoryRequest = async (relPath) => {
    // Checks if index.html exists and returns it
    const index = path.join(relPath, "index.html");
    try {
        const indexStats = await fs.stat(path.join(INITIAL_DIRECTORY, index));
        if (indexStats.isFile())
            return getFileResponse(index);
    } catch(e) {}

    return getDirectoryResponse(relPath);
};

const handleError = (path, error) => {
    switch (error.code) {
        case "EACESS":
            return getErrorResponse(path, 403, "Not permitted");
        case "ENOENT":
            return getErrorResponse(path, 404, "Not found");
        default:
            return getErrorResponse(path, 505, "Error retrieving resource");
    }
};

let server = http.createServer(async (req, res) => {
    let relPath = req.url;

    let result;

    try {
        const stats = await fs.stat(path.join(INITIAL_DIRECTORY, relPath));

        if (stats.isDirectory()) {
            result = await handleDirectoryRequest(relPath);
        } else if (stats.isFile()) {
            result = await getFileResponse(relPath);
        }
    } catch (error) {
        result = await handleError(relPath, error);
    }

    const {contentType, data, status} = result;

    res.writeHead(status, {"Content-Type": contentType});
    res.end(data);
    console.log(`[Server] ${req.url} - ${status}`);
});

server.listen(PORT, () => {
    console.log(`[Server] Started
    \tPort ${PORT}
    \tDirectory ${INITIAL_DIRECTORY}/
    \tLink http://localhost:${PORT}`);
});
