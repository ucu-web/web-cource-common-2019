const { Router } = require("express");

const userRoute = new Router();

userRoute.get("/", (req, res) => res.send("All users"));
userRoute.post("/", (req, res) => res.send("User created"));

userRoute.get("/:id", (req, res) => res.send(`User ${req.params.id}`));

module.exports = userRoute;
