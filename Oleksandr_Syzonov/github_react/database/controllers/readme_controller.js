const express = require("express");
const { JsonTable } = require("./helpers");
const readme = express.Router();

const verificator = x => true;

let files = new JsonTable("../data/readme_paragraphs.json", verificator);

readme.get("/", async (req, res) => {
  res.end(JSON.stringify(await files.getAll()));
});

readme.post("/", async (req, res) => {
  const response = await files.post(req.body);
  if (response.code !== 200) {
    res.status(response.code).send(`Code : ${response.code}\n`);
  } else {
    res.end(JSON.stringify(response));
  }
});

readme.get("/:readmeId", async (req, res) => {
  res.end(JSON.stringify(await files.getById(req.params.readmeId)));
});

readme.put("/", async (req, res) => {
  const response = await files.put(req.body);
  res.end(JSON.stringify(response));
});
readme.delete("/:readmeId", async (req, res) => {
  res.end(JSON.stringify(await files.delete(parseInt(req.params.readmeId))));
});
module.exports = {
  readme: readme
};
