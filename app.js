const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
import FileManager from './db/db'

const hostname = '127.0.0.1';
const port = 3000;

const app = express();
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.use(bodyParser.json());

app.use(express.static(path.join('./dist')));

app.get('/', (req, res, next) => res.render('db.js.html'));

let dbFile = new FileManager('todo');
app.get('/db', (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    res.end( dbFile.getData() )
});

app.post('/db', (req, res, next) => {
   // console.log(req);
   res.end('got it!', req.body);
   dbFile.dump(req.body);
});

http.createServer(app).listen(port, () => {

});
