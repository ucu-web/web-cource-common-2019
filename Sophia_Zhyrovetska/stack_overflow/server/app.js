const express = require("express");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(express.json());

console.log(path.resolve(__dirname, "..", "dist"));
app.use("/dist", express.static(path.resolve(__dirname, "../dist")));
app.use("/src", express.static(path.resolve(__dirname, "../src")));

app.use("/api", require("./api"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "index.html"));
});

app.get("/users", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "users.html"));
});

app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);
