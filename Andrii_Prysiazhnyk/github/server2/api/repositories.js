const { Router } = require("express");

const repositoryRoute = new Router();

repositoryRoute.get("/", (req, res) => res.send("All users"));
repositoryRoute.post("/", () => res.send("User created"));

repositoryRoute.get("/:id", (req, res) => res.send(`User ${req.params.id}`));

module.exports = repositoryRoute;
