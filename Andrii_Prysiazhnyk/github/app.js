const fs = require('fs');
const express = require('express');
const app = express();

const returnFile = (fileName, response) => {
    const file = fs.readFile(fileName, function (err, fileContent) {
        if (err) {
            response.status = 500;
            response.end(err.toString())
        } else {
            response.end(fileContent);
        }
    });
};

const callback = (request, response) => {
    returnFile("github".concat(request.url), response);
};

const linkNames = ['/index.html', '/dist/bundle.js', '/src/data/friendsRepositories.json',
    '/src/data/recommendedRepositories.json', '/src/images/github_photo.png', '/src/images/user.jpg'];

linkNames.forEach((linkName) => { app.get(linkName, callback) });

app.listen(3000);
