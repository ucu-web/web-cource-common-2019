const express = require("express");
const { JsonTable, IdNotFoundError } = require("./helpers");
const repositories = express.Router();
const verificator = x => true;

let repositories_table = new JsonTable("../data/repositories.json", verificator);

repositories.get("/", async (req, res) => {
    res.end(JSON.stringify(await repositories_table.getAll()));
});

repositories.post("/", async (req, res) => {
    const response = await repositories_table.post(req.body);
    res.end(JSON.stringify(response));
});

repositories.get("/:fileId", async (req, res) => {
    try {
        res.end(JSON.stringify(await repositories_table.getById(req.params.fileId)));
    } catch (IdNotFoundError) {
        res.status(404).send("Not found");
    }
});

repositories.put("/", async (req, res) => {
    const response = await repositories_table.put(req.body);
    res.end(JSON.stringify(response));
});
repositories.delete("/:fileId", async (req, res) => {
    res.end(
        JSON.stringify(await repositories_table.delete(parseInt(req.params.fileId)))
    );
});

module.exports = {
    repositories: repositories
};

