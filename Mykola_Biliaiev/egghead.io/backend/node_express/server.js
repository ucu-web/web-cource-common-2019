const express = require("express");
const port = 3000;
const app = express();
const api = require('./routes/api');

const bodyParser = require("body-parser")
const path = require('path');


const sub_path = (path, sub) => __dirname.split("/").slice(0, __dirname.split().length - sub).join("/");
app.use(express.static(path.join(sub_path(__dirname, 3))));


app.use('/api/', api);

app.listen(process.env.port || port);

console.log('Running at Port 3000');