const { Router } = require("express");

const apiRoute = new Router();

apiRoute.use("/users", require("./users"));
apiRoute.use("/repositories", require("./repositories"));

module.exports = apiRoute;
