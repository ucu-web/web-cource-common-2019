const express = require("express");
const port = 8080;
const app = express();
const path = require('path');
const main_router = express.Router();
const sub_path = (path, sub) => __dirname.split("/").slice(0, __dirname.split().length - sub).join("/");


app.use(express.static(path.join(sub_path(__dirname, 3))));
app.use((req, res, next) => {
    console.log("request");
    next();
});


main_router.get('/test', (req, res, next) => {
    console.log("test");
    next();
}, function (req, res) {
    let path_new = sub_path(__dirname, 3);
    res.sendFile(path.join(path_new + '/index.html'));
});

app.use('/', main_router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');