const express = require('express');
const repositoryRouter = express.Router();
const {getAll, getFirst, add} = require("./dataStorage");
const {validateInputObject, addAutoIncrement, checkPermission} = require("./helper");
const {usersPath, repositoriesPath, contributorsPath} = require("./constants");

const repositoryRequestFields = ["name", "description", "creationTime", "updateTime", "language", "stars", "userId", "login", "password"];
const contributorRequestFields = ["login", "password", "contributorId"];

repositoryRouter.get("/", async (req, res) => res.json(await getAll(repositoriesPath)));

repositoryRouter.get('/:repositoryId', async (req, res) => {
    const repository = await getFirst(repositoriesPath, (e) => e["id"] === +req.params["repositoryId"]);

    if (repository) res.json(repository);
    else res.status(404).send("No repository with such id");
});

repositoryRouter.get("/:repositoryId/contributors", async (req, res) => {
    const repositoryId = +req.params["repositoryId"];
    const repository = await getFirst(repositoriesPath, e => e["id"] === repositoryId);

    if (repository) res.json(await getAll(contributorsPath, e => e["repositoryId"] === repositoryId));
    else res.status(404).send("No repository with such id");
});

const validateRepository = (req, res, next) => {
    if (validateInputObject(req.body, repositoryRequestFields)) next();
    else res.status(422).send("Invalid json fields");
};

const repositoryPermission = async (req, res, next) => {
    if (await checkPermission(usersPath, req.body["userId"], req.body["login"], req.body["password"])) next();
    else res.status(422).send("Invalid login or password");
};

repositoryRouter.post("/", validateRepository, repositoryPermission, async (request, response) => {
    delete request.body["login"];
    delete request.body["password"];
    return response.json(await addAutoIncrement(repositoriesPath, request.body, "id"))
});

const validateContributor = (req, res, next) => {
    if (validateInputObject(req.body, contributorRequestFields)) next();
    else res.status(422).send("Invalid json fields");
};

const contributorPermission = async (req, res, next) => {
    const repository = await getFirst(repositoriesPath, (e) => e["id"] === +req.params["repositoryId"]);
    if (repository)
        if (await checkPermission(usersPath, repository["userId"], req.body["login"], req.body["password"])) next();
        else res.status(422).send("Invalid login or password");
    else res.status(404).send("No repository with such id");
};

repositoryRouter.post("/:repositoryId/contributors", validateContributor, contributorPermission, async (request, response) => {
    const record = {"contributorId": request.body["contributorId"], "repositoryId": +request.params["repositoryId"]};
    add(contributorsPath, record);
    response.json(record);
});

module.exports = repositoryRouter;
