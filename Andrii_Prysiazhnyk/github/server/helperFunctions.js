const fs = require('fs').promises;
const {last} = require("ramda");

const getJson = (pathToJson) => fs.readFile(pathToJson).then((data) => JSON.parse(data.toString()));

const getRepositoryById = (repositories, id) => repositories.filter((repository) => repository["id"] == id)[0];

const allFieldsPresent = (jsonObject, fields) => {
    return fields.map((field) => jsonObject[field]).reduce((result, current) => result && current, true);
};

const getLargestId = (repositories) => repositories.length === 0 ? 0 : last(repositories)["id"];

const writeResults = (response, statusCode, message) => {
    response.statusCode = statusCode;
    response.send(message);
};

const numberOfKeys = (jsonObject) => Object.keys(jsonObject).length;

module.exports = {
    getJson: getJson,
    getRepositoryById: getRepositoryById,
    allFieldsPresent: allFieldsPresent,
    getLargestId: getLargestId,
    writeResults: writeResults,
    numberOfKeys: numberOfKeys
};
