const express = require('express');
const router = express.Router();
const {getAll, getFirst, add} = require("./dataStorage");
const {validateInputObject, addAutoIncrement, checkPermission} = require("./helperFunctions");
const {usersPath, friendsPath} = require("./constants");

const userRequestFields = ["name", "login", "password", "email", "country"];
const friendsRequestFields = ["login", "password", "friendId"];

router.post("/", (request, response, next) => {
    if (validateInputObject(request.body, userRequestFields))
        next();
    else
        response.status(422).send("Invalid json fields");
});

router.post("/", async (request, response) =>
    response.json(await addAutoIncrement(usersPath, request.body, "id")));

router.post("/:userId/friends", async (request, response, next) => {
    if (validateInputObject(request.body, friendsRequestFields))
        next();
    else
        response.status(422).send("Invalid json");
});

router.post("/:userId/friends", async (request, response, next) => {
    if (await checkPermission(usersPath, +request.params["userId"], request.body["login"], request.body["password"]))
        next();
    else
        response.status(422).send("Invalid login or password");
});

router.post("/:userId/friends", async (request, response, next) => {
    if (await getFirst(usersPath, user => user["id"] === request.body["friendId"]))
        next();
    else
        response.status(422).send("Invalid json");
});

router.post("/:userId/friends", async (request, response) => {
    const record = {"userId": +request.params["userId"], "friendId": request.body["friendId"]};
    add(friendsPath, record);
    response.json(record);
});

module.exports = router;
