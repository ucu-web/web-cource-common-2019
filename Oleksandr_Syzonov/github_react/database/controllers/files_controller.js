const express = require("express");
const { JsonTable, IdNotFoundError } = require("./helpers");
const files = express.Router();

const verificator = x => true;

let files_table = new JsonTable("database/data/files.json", verificator);

files.get("/", async (req, res) => {
  res.end(JSON.stringify(await files_table.getAll()));
});

files.post("/", async (req, res) => {
  const response = await files_table.post(req.body);
  res.end(JSON.stringify(response));
});

files.get("/:fileId", async (req, res) => {
  try {
    res.end(JSON.stringify(await files_table.getById(req.params.fileId)));
  } catch (IdNotFoundError) {
    res.status(404).send("Not found");
  }
});

files.put("/", async (req, res) => {
  const response = await files_table.put(req.body);
  res.end(JSON.stringify(response));
});
files.delete("/:fileId", async (req, res) => {
  res.end(
    JSON.stringify(await files_table.delete(parseInt(req.params.fileId)))
  );
});

module.exports = {
  files: files
};
