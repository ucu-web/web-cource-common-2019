const express = require('express');
const path = require("path");

const start = express();

const bodyParser = require("body-parser");
start.use(bodyParser.urlencoded({ extended: false }));

PORT = 3000;

start.use(express.json());
start.use(express.static(path.resolve(__dirname, "../images")));
start.use(express.static(path.resolve(__dirname, "../styles")));

start.get('/', function (req, res){
    res.sendFile(__dirname + '/templates/index.html')
});

start.get('/log-in', function (req, res){
    res.sendFile(__dirname + '/templates/log-in.html')
});

start.get('/sign-up', function (req, res){
    res.sendFile(__dirname + '/templates/sign-up.html')
});

start.get('/profile', function (req, res) {
    res.sendFile(__dirname + '/templates/profile_page.html')
});

start.post('/submit_log-in_data', function (req, res) {
   if ((req.body.email ===  "jb@gmail.com") && (req.body.password === "123")){
        res.redirect('/profile');
   } else{
        res.redirect('/');
   }
});

start.post('/submit_sign-up_data', function (req, res) {
    res.sendFile(__dirname + '/templates/index.html')
});

start.listen(PORT, (err) => {
    if (err) {
        return console.log('Something bad happened', err)
    }
    console.log(`Server is listening on localhost:${PORT}`)
});
