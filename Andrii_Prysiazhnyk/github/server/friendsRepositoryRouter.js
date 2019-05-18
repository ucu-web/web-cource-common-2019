const express = require('express');
const router = express.Router();
const fs = require('fs').promises;
const path = require('path');
const {getJson, allFieldsPresent, getLargestId, getRepositoryById, writeResults, numberOfKeys} = require('./common.js');

const pathToJsonFile = path.resolve(__dirname, '../', 'src', 'data', 'friendsRepositories.json');
const fields = ["friendName", "repositoryName", "createTime", "description", "updateTime"];

router.get('/', async (request, response) => {
    try {
        response.json(await getJson(pathToJsonFile));
    } catch (error) {
        writeResults(response, 500, "Internal server error");
    }
});

router.get('/:repositoryId', async (request, response) => {
    try {
        const repositories = await getJson(pathToJsonFile);
        const repository = getRepositoryById(repositories, request.params["repositoryId"]);

        if (repository) {
            response.json(repository);
        } else {
            writeResults(response, 404, "No repository with such id.");
        }

    } catch (error) {
        writeResults(response, 500, "Internal server error");
    }
});

router.post('/', (request, response, next) => {
    if (allFieldsPresent(request.body, fields) && numberOfKeys(request.body) === fields.length)
        next();
    else
        writeResults(response, 422, "Invalid object received.");
});

router.post('/', async (request, response) => {
    try {
        const repositories = await getJson(pathToJsonFile);
        request.body["id"] = getLargestId(repositories) + 1;
        repositories.push(request.body);

        await fs.writeFile(pathToJsonFile, JSON.stringify(repositories));
        response.json(request.body);
    } catch (error) {
        writeResults(response, 500, "Internal server error");
    }
});

router.put('/', (request, response, next) => {
    if (allFieldsPresent(request.body, [...fields], "id") && numberOfKeys(request.body) === fields.length + 1)
        next();
    else
        writeResults(response, 422, "Invalid object received.");
});

router.put('/', async (request, response) => {
    try {
        const repositories = await getJson(pathToJsonFile);
        const repository = getRepositoryById(repositories, request.body["id"]);

        if (repository) {
            const updatedRepositories = repositories.map((element) => element["id"] != request.body["id"] ?
                element : request.body);
            await fs.writeFile(pathToJsonFile, JSON.stringify(updatedRepositories));

            response.json(request.body);
        } else {
            writeResults(response, 404, "No repository with such id");
        }
    } catch (error) {
        writeResults(response, 500, "Internal server error");
    }
});

router.delete('/:repositoryId', async (request, response) => {
    try {
        const repositories = await getJson(pathToJsonFile);
        const filteredRepositories = repositories.filter((element) => element["id"] != request.params["repositoryId"]);

        if (filteredRepositories.length !== repositories.length) {
            await fs.writeFile(pathToJsonFile, JSON.stringify(filteredRepositories));
            response.send("Successfully deleted")
        } else {
            writeResults(response, 404, "No repository with such id");
        }
    } catch (error) {
        writeResults(response, 500, "Internal server error");
    }
});

module.exports = router;
