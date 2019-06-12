const { Router } = require("express");

const apiRouter = new Router();

apiRouter.use("/questions", require("./questions"));
apiRouter.use("/users", require("./users"));
apiRouter.use("/blog", require("./blog"));

module.exports = apiRouter;
