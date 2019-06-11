const express = require('express');
const path = require('path');
const postRouter = require('./posts');

const app = express();

app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../dist")));
app.use('/static',express.static(path.resolve(__dirname, "../static")));
app.use("/posts", postRouter);

app.listen(8080, () =>
    console.log("Server started at http://localhost:8080")
);
