const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../dist")));
app.use(express.static(path.resolve(__dirname, "../src/images")));

app.use("/api", require("./api"));

app.listen(PORT, () =>
    console.log(`Server started at http://localhost:${PORT}`)
);
