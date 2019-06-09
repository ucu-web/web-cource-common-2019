const express = require("express");
const {
  JsonTable,
  IdNotFoundError,
  InvalidDataError
} = require("../../backend/helpers");
const { repository_validator } = require("../../backend/verificators");
const repositories = express.Router();
let repositories_table = new JsonTable(
  "database/data/repositories.json",
  repository_validator
);

repositories.get("/", async (req, res) => {
  res.json(await repositories_table.getAll());
});

repositories.post("/", async (req, res) => {
  try {
    const response = await repositories_table.post(req.body);
    res.json(response);
  } catch (err) {
    if (err === InvalidDataError) {
      res.status(422).send();
    }
  }
});

repositories.get("/:fileId", async (req, res) => {
  try {
    res.json(await repositories_table.getById(req.params.fileId));
  } catch (err) {
    if (err === IdNotFoundError) {
      res.status(404).send();
    }
  }
});

repositories.put("/:fileId", async (req, res) => {
  try {
    const id = parseInt(req.params.fileId);
    const response = await repositories_table.put(req.body, id);
    res.json(response);
  } catch (err) {
    if (err === IdNotFoundError) {
      res.status(404).send();
    } else if (err === InvalidDataError) {
      res.status(422).send();
    }
  }
});
repositories.delete("/:fileId", async (req, res) => {
  try {
    res.json(await repositories_table.delete(parseInt(req.params.fileId)));
  } catch (err) {
    if (err === IdNotFoundError) {
      res.status(404).send();
    }
  }
});

module.exports = {
  repositories
};
