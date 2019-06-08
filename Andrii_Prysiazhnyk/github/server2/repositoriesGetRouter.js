const express = require('express');
const router = express.Router();
const {getAll, getFirst} = require("./dataStorage");
const {repositoriesPath, contributorsPath} = require("./constants");

router.get("/", async (request, response) => response.json(await getAll(repositoriesPath)));

router.get('/:repositoryId', async (request, response) => {
    const repository = await getFirst(repositoriesPath, (e) => e["id"] === +request.params["repositoryId"]);

    if (repository)
        response.json(repository);
    else
        response.status(404).send("No repository with such id");
});

router.get("/:repositoryId/contributors", async (request, response) => {
    const repositoryId = +request.params["repositoryId"];
    const repository = await getFirst(repositoriesPath, e => e["id"] === repositoryId);

    if (repository)
        response.json(await getAll(contributorsPath, e => e["repositoryId"] === repositoryId));
    else
        response.status(404).send("No repository with such id");
});

module.exports = router;
