const express = require("express");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(express.json());

console.log(path.resolve(__dirname, "..", "dist"));
const pathToIndexPage = path.resolve(__dirname, "../index.html");
const pathToUsersPage = path.resolve(__dirname, "../users.html");
app.use("/dist", express.static(path.resolve(__dirname, "../dist")));
app.use("/src", express.static(path.resolve(__dirname, "../src")));

app.use("/api", require("./api"));


app.get("/", (req, res) => {
  res.sendFile(pathToIndexPage);
});
app.get('/featured', (req, res) => {
  res.sendFile(pathToIndexPage);
});
app.get('/interesting', (req, res) => {
  res.sendFile(pathToIndexPage);
});
app.get('/hot', (req, res) => {
  res.sendFile(pathToIndexPage);
});
app.get('/week', (req, res) => {
  res.sendFile(pathToIndexPage);
});
app.get('/month', (req, res) => {
  res.sendFile(pathToIndexPage);
});
app.get("/users", (req, res) => {
  res.sendFile(pathToUsersPage);
});
app.get('/reputation', (req, res) => {
  res.sendFile(pathToUsersPage);
});
app.get('/new-users', (req, res) => {
  res.sendFile(pathToUsersPage);
});
app.get('/editors', (req, res) => {
  res.sendFile(pathToUsersPage);
});
app.get('/voters', (req, res) => {
  res.sendFile(pathToUsersPage);
});
app.get('/moderators', (req, res) => {
  res.sendFile(pathToUsersPage);
});
app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);
