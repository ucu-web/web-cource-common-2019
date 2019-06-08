const express = require("express");
const path = require("path");
const usersGetRouter = require("./usersGetRouter");
const usersPostRouter = require("./usersPostRouter");
const repositoriesGetRouter = require("./repositoriesGetRouter");
const repositoriesPostRouter = require("./repositoriesPostRouter");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../dist")));
app.use(express.static(path.resolve(__dirname, "../src/images")));

app.use("/api/v0", require("./api"));

app.use("/api/users", usersGetRouter);
app.use("/api/users", usersPostRouter);
app.use("/api/repositories", repositoriesGetRouter);
app.use("/api/repositories", repositoriesPostRouter);

app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);
