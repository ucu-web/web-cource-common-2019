const express = require('express');
const router = express.Router();
const {getAll, getFirst} = require("./dataStorage");
const {usersPath, repositoriesPath, friendsPath} = require("./constants");

router.get("/", async (request, response) => response.json(await getAll(usersPath)
    .then(users => {
        users.forEach(user => delete user["password"]);
        return users;
    })));

router.get('/:userId', async (request, response) => {
    const user = await getFirst(usersPath, (user) => user["id"] === +request.params["userId"]);
    delete user["password"];

    if (user)
        response.json(user);
    else
        response.status(404).send("No user with such id");
});

router.get("/:userId/repositories", async (request, response) => {
    const userId = +request.params["userId"];
    const user = await getFirst(usersPath, (user) => user["id"] === +request.params["userId"]);

    if (user)
        response.json(await getAll(repositoriesPath, (repository) => repository["userId"] === userId));
    else
        response.status(404).send("No user with such id");
});

router.get("/:userId/friends", async (request, response) => {
    const userId = +request.params["userId"];
    const user = await getFirst(usersPath, (user) => user["id"] === userId);

    if (user)
        response.json(await getAll(friendsPath, (record) => record["userId"] === userId));
    else
        response.status(404).send("No user with such id");
});

router.get("/:userId/repositories/recommended", async (request, response) => {

});

module.exports = router;
