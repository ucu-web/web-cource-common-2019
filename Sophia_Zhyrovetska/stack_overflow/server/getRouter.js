const {Router} = require("express");
const apiTemplate = require("./apiTemplate");

const getRouter = pathToJsonFile => {
  const router = Router();
  router.get("/", (request, response) => {
    apiTemplate.getAllItems(pathToJsonFile, request, response);
  });

  router.get("/:id", (request, response) => {
    apiTemplate.getOneItem(pathToJsonFile, request, response);
  });

  router.post("/", (request, response) => {
    apiTemplate.postItem(pathToJsonFile, request, response);
  });

  router.put("/", (request, response) => {
    apiTemplate.putItem(pathToJsonFile, request, response);
  });

  router.delete("/:id", (request, response) => {
    apiTemplate.deleteItem(pathToJsonFile, request, response);
  });
  return router;
};

module.exports = getRouter;
