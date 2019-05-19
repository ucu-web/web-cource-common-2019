const express = require('express');
const router = express.Router();
const path = require('path');
const routeTemplate = require('./routeTemplate');

const pathToJsonFile = path.resolve(__dirname, '../', 'src', 'data', 'recommendedRepositories.json');
const fields = ["repositoryName", "description", "stars", "language", "circleColor"];

router.get('/', (request, response) => {
    routeTemplate.getAllRepositories(pathToJsonFile, request, response);
});

router.get('/:repositoryId', (request, response) => {
    routeTemplate.getOneRepository(pathToJsonFile, request, response);
});

router.post('/', (request, response, next) => {
    routeTemplate.postRepositoryValidator(fields, request, response, next);
});

router.post('/', (request, response) => {
    routeTemplate.postRepository(pathToJsonFile, request, response);
});

router.put('/', (request, response, next) => {
    routeTemplate.putRepositoryValidator(fields, request, response, next);
});

router.put('/', (request, response) => {
    routeTemplate.putRepository(pathToJsonFile, request, response);
});

router.delete('/:repositoryId', (request, response) => {
    routeTemplate.deleteRepository(pathToJsonFile, request, response);
});

module.exports = router;
