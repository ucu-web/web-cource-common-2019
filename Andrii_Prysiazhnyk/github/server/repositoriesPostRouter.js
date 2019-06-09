const express = require('express');
const router = express.Router();
const {getAll, getFirst, add} = require("./dataStorage");
const {validateInputObject, addAutoIncrement, checkPermission} = require("./helper");
const {usersPath, repositoriesPath, contributorsPath} = require("./constants");

const repositoryRequestFields = ["name", "description", "creationTime", "updateTime", "language", "stars", "userId", "login", "password"];
const contributorRequestFields = ["login", "password", "contributorId"];


router.post("/", (request, response, next) => {
    if (validateInputObject(request.body, repositoryRequestFields))
        next();
    else
        response.status(422).send("Invalid json fields");
});

router.post("/", async (request, response, next) => {
    if (await checkPermission(usersPath, request.body["userId"], request.body["login"], request.body["password"]))
        next();
    else
        response.status(422).send("Invalid login or password");
});

router.post("/", async (request, response) => {
    delete request.body["login"];
    delete request.body["password"];
    return response.json(await addAutoIncrement(repositoriesPath, request.body, "id"))
});

router.post("/:repositoryId/contributors", (request, response, next) => {
    if (validateInputObject(request.body, contributorRequestFields))
        next();
    else
        response.status(422).send("Invalid json fields");
});

router.post("/:repositoryId/contributors", async (request, response, next) => {
    if (await getFirst(usersPath, user => user["id"] === request.body["contributorId"]))
        next();
    else
        response.status(422).send("Invalid contributorId.");
});

router.post("/:repositoryId/contributors", async (request, response, next) => {
    const repository = await getFirst(repositoriesPath, (e) => e["id"] === +request.params["repositoryId"]);
    if (repository) {
        if (await checkPermission(usersPath, repository["userId"], request.body["login"], request.body["password"]))
            next();
        else
            response.status(422).send("Invalid login or password")
    } else {
        response.status(404).send("No repository with such id")
    }
});

router.post("/:repositoryId/contributors", async (request, response) => {
    const record = {"contributorId": request.body["contributorId"], "repositoryId": +request.params["repositoryId"]};
    add(contributorsPath, record);
    response.json(record);
});

module.exports = router;
