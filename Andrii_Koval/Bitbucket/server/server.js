const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, "../dist")));
app.use(express.static(path.resolve(__dirname, "../static")));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../index.html"))
});

app.listen(PORT, () => console.log(`Server successfully works at http://localhost:${PORT}`));