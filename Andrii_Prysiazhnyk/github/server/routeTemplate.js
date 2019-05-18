const fs = require('fs').promises;
const {getJson, allFieldsPresent, getLargestId, getRepositoryById, writeResults, numberOfKeys} = require('./common.js');

const getAllRepositories = async (pathToJsonFile, request, response) => {
    try {
        response.json(await getJson(pathToJsonFile));
    } catch (error) {
        writeResults(response, 500, "Internal server error");
    }
};

const getOneRepository = async (pathToJsonFile, request, response) => {
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
};

const postRepositoryValidator = (fields, request, response, next) => {
    if (allFieldsPresent(request.body, fields) && numberOfKeys(request.body) === fields.length)
        next();
    else
        writeResults(response, 422, "Invalid object received.");
};

const postRepository = async (pathToJsonFile, request, response) => {
    try {
        const repositories = await getJson(pathToJsonFile);
        request.body["id"] = getLargestId(repositories) + 1;
        repositories.push(request.body);

        await fs.writeFile(pathToJsonFile, JSON.stringify(repositories));
        response.json(request.body);
    } catch (error) {
        writeResults(response, 500, "Internal server error");
    }
};

const putRepositoryValidator = (fields, request, response, next) => {
    if (allFieldsPresent(request.body, [...fields], "id") && numberOfKeys(request.body) === fields.length + 1)
        next();
    else
        writeResults(response, 422, "Invalid object received.");
};

const putRepository = async (pathToJsonFile, request, response) => {
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
};

const deleteRepository = async (pathToJsonFile, request, response) => {
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
};
