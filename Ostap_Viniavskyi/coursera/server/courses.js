const express = require('express');
const path = require('path');
const sanitizeHtml = require('google-caja-sanitizer').sanitize;
const {fetchJSON, saveJSON} = require('./helpers');

coursesRouter = express.Router();

coursesRouter.get('/', async (req, res) => {
    try {
        const data = await fetchJSON('./data/courses.json');
        res.json(data);
    } catch (e) {
        res.status(404)
            .send("Not Found");
    }
});

coursesRouter.get('/:id', async (req, res) => {
    try {
        const id  = req.params.id;
        const data = (await fetchJSON('./data/courses.json'))[id];
        data ? res.json(data) : res.status(404).send("Wrong courses id");
    } catch (e) {
        res.status(404)
            .send("Not Found");
    }
});

coursesRouter.post('/:id', async (req, res) => {
    const dataPath = path.resolve('.', 'data', 'courses.json');
    try {
        const data = await fetchJSON(dataPath);
        const name = sanitizeHtml(req.body.name);
        const organization = sanitizeHtml(req.body.organization);
        const type = sanitizeHtml(req.body.type);
        // const {name, organization, type} = req.body;
        data[req.params.id].courses.push({name, organization, type});
        await saveJSON(dataPath, data);
        res.status(201).json(data);
    } catch (e) {
        console.log(e)
        res.status(422)
            .send("Wrong data provided");
    }
});

module.exports = coursesRouter;