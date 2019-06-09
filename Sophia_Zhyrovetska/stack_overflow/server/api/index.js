const { Router } = require("express");

const apiRouter = new Router();

apiRouter.use("/questions", require("./questions"));

module.exports = apiRouter;
