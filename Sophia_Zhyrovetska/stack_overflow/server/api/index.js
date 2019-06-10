const { Router } = require("express");

const apiRouter = new Router();

apiRouter.use("/questions", require("./questions"));
apiRouter.use("/users", require("./users"));
apiRouter.use("/hot_network_questions", require("./hot_network_questions"));
apiRouter.use("/blog", require("./blog"));

module.exports = apiRouter;
