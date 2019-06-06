const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const coursesRouter = require('./courses');

const app = express();
const PORT = 5000;

console.log(path.resolve(__dirname, '..', 'dist'))

app.use(bodyParser.json());
app.use('/dist', express.static(path.resolve(__dirname, '..', 'dist')));
app.use('/static', express.static(path.resolve(__dirname, '..', 'static')));

app.use('/courses', coursesRouter);

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'index.html'));
});

app.listen(PORT, console.log(`Server successfully started at http://localhost:${PORT}`));