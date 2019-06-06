const express = require('express');
const router = express.Router();
const path = require('path');
const apiTemplate = require('./apiTemplate');

const pathToJsonFile = path.resolve(__dirname, '../', 'src', 'components', 'QuestionPost', 'data.json');

router.get('/', (request, response) => {
    apiTemplate.getAllQuestions(pathToJsonFile, request, response);
});

router.get('/:id', (request, response) => {
    apiTemplate.getOneQuestion(pathToJsonFile, request, response);
});

router.post('/', (request, response) => {
    apiTemplate.postQuestion(pathToJsonFile, request, response);
});

router.put('/', (request, response) => {
    apiTemplate.putQuestion(pathToJsonFile, request, response);
});

router.delete('/:id', (request, response) => {
    apiTemplate.deleteQuestion(pathToJsonFile, request, response);
});

module.exports = router;