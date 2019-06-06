const fs = require('fs').promises;
const {last} = require("ramda");

const getJson = (pathToJson) => fs.readFile(pathToJson).then((data) => JSON.parse(data.toString()));

const getQuestionById = (questions, id) => questions.filter((question) => question["id"] == id)[0];

const getLargestQuestionId = (questions) => questions.length === 0 ? 0 : last(questions)["id"];

module.exports = {
    getJson: getJson,
    getQuestionById: getQuestionById,
    getLargestQuestionId:getLargestQuestionId
};