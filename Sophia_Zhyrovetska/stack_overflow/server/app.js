const express = require("express");
const routers = require("./routers");
const path = require("path");

const app = express();
const PORT = 5000;


app.use(express.json());

console.log(path.resolve(__dirname, "..", "dist"));
app.use("/dist", express.static(path.resolve(__dirname, "../dist")));
app.use("/src", express.static(path.resolve(__dirname, "../src")));

app.use("/api/v0", require("./api"));


app.use("/api/questions", routers.questionsListRouter);
app.use("/api/users", routers.usersRouter);
app.use("/api/blog", routers.blogBlockRouter);
app.use("/api/watched_tags", routers.featuredTagsWatchedRouter);
app.use("/api/ignored_tags", routers.featuredTagsIgnoredRouter);
app.use("/api/hot_network_questions", routers.hotNetworkQuestionsRouter);

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "index.html"));
});

app.get("/users", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "users.html"));
});

app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);
