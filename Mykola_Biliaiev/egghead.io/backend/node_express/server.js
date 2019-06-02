const key = require('./key').key;

const express = require("express");
const port = 3000;
const app = express();
const api = require('./routes/api');
const auth = require('./routes/auth');
const express_jwt = require('express-jwt')
const bodyParser = require("body-parser")
const path = require('path');

const jwtCheck = express_jwt({
    secret: key
});
const sub_path = (path, sub) => __dirname.split("/").slice(0, __dirname.split().length - sub).join("/");
app.use(express.static(path.join(sub_path(__dirname, 3))));
app.use(bodyParser.json());
app.use('/api/', api);
app.use('/auth/', auth);

app.get('/*', (req, res) => {
    res.sendfile(path.join(sub_path(__dirname, 3)) + '/index.html');
});

app.listen(process.env.port || port);

console.log('Running at Port 3000');