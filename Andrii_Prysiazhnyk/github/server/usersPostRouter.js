const express = require("express");
const router = express.Router();
const { getFirst, add } = require("./dataStorage");
const {
  validateInputObject,
  addAutoIncrement,
  checkPermission
} = require("./helper");
const { usersPath, friendsPath } = require("./constants");

const userRequestFields = ["name", "login", "password", "email", "country"];
const friendsRequestFields = ["login", "password", "friendId"];

const validateUser = (req, res, next) => {
  if (validateInputObject(req.body, userRequestFields)) next();
  else res.status(422).send("Invalid json fields");
};

router.post("/", validateUser, async (req, res) =>
  res.json(await addAutoIncrement(usersPath, req.body, "id"))
);

const validateFriends = (request, response, next) => {
  if (validateInputObject(request.body, friendsRequestFields)) next();
  else response.status(422).send("Invalid json");
};

router.post(
  "/:userId/friends",
  validateFriends,
  async (request, response, next) => {
    if (
      await checkPermission(
        usersPath,
        +request.params["userId"],
        request.body["login"],
        request.body["password"]
      )
    )
      next();
    else response.status(422).send("Invalid login or password");
  }
);

router.post("/:userId/friends", async (request, response, next) => {
  if (
    await getFirst(usersPath, user => user["id"] === request.body["friendId"])
  )
    next();
  else response.status(422).send("Invalid json");
});

router.post("/:userId/friends", async (request, response) => {
  const record = {
    userId: +request.params["userId"],
    friendId: request.body["friendId"]
  };
  add(friendsPath, record);
  response.json(record);
});

module.exports = router;
