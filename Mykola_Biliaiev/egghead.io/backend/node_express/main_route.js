const express = require("express");
const path = require('path');
const main_router = express.Router();
main_router.get('/test', (req, res, next) => {
    console.log("test");
    next();
}, function (req, res) {
    let path_new = sub_path(__dirname, 3);
    res.sendFile(path.join(path_new + '/index.html'));
});

// module.exports(main_router);