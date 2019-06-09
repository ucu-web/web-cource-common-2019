const { Router } = require("express");

const questionRouter = new Router();

questionRouter.get("/", (req, res) => res.send("Get all question"));

questionRouter.post("/", (req, res) => {
  console.log(req.body);
  return res.send(`Create new question: ${JSON.stringify(req.body)}`);
});
questionRouter.get("/:id", (req, res) =>
  res.send(`Get question with id: ${req.params.id}`)
);

module.exports = questionRouter;
