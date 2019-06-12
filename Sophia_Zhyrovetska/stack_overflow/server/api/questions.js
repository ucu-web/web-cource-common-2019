const { Router } = require("express");
const fs = require("fs").promises;
const {
  getJson,
  getLargestItemId,
  getItemById
} = require("./../routeHelpers.js");
const path = require("path");

const questionRouter = new Router();
const pathToJsonFile =  path.resolve(
    __dirname,
    "../../src/components/QuestionPost/data.json"
);

questionRouter.get('/', async (req, res)=> {
  try {
    let questions = await getJson(pathToJsonFile);
    let params = req.query;
    Object.entries(params).forEach(entry => {
      let key = entry[0];
      let value = entry[1];
      value === 'true'? value = true: value;
      value === 'false'? value = false: value;
      questions = questions.filter((el)=>{return el[key] == value})
    });
    res.json(questions);
  } catch (error) {
    res.status(500).json({ status: 500, errorMessage: 'Internal server error' });
  }
});

questionRouter.get("/:id", async (req, res) => {
  try {
    const allItems = await getJson(pathToJsonFile);
    const item = getItemById(allItems, req.params["id"]);

    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ status: 404, errorMessage: 'No such question' })
    }
  } catch (error) {
    res.status(500).json({ status: 500, errorMessage: 'Internal server error' });
  }
});


questionRouter.post("/", async (req, res) => {
  try {
    const items = await getJson(pathToJsonFile);
    req.body["id"] = getLargestItemId(items) + 1;
    items.push(req.body);

    await fs.writeFile(pathToJsonFile, JSON.stringify(items));
    res.json(req.body);
  } catch (error) {
    res.status(500).json({ status: 500, errorMessage: 'Internal server error' });
  }
});

questionRouter.put("/", async (req, res) => {
  try {
    const items = await getJson(pathToJsonFile);
    const item = getItemById(items, req.body["id"]);

    if (item) {
      const updatedItems = items.map(element =>
          element["id"] != req.body["id"] ? element : req.body
      );
      await fs.writeFile(pathToJsonFile, JSON.stringify(updatedItems));

      res.json(req.body);
    } else {
      res.status(404).json({ status: 404, errorMessage: 'No such question' })
    }
  } catch (error) {
    res.status(500).json({ status: 500, errorMessage: 'Internal server error' });
  }
});

questionRouter.delete("/:id", async (req, res) => {
  try {
    const items = await getJson(pathToJsonFile);
    const filteredItems = items.filter(
        element => element["id"] != req.params["id"]
    );

    if (filteredItems.length !== items.length) {
      await fs.writeFile(pathToJsonFile, JSON.stringify(filteredItems));
      res.status(200).json({ status: 200, message: 'Question deleted' })
    } else {
      res.status(404).json({ status: 404, errorMessage: 'No such question' })
    }
  } catch (error) {
    res.status(500).json({ status: 500, errorMessage: 'Internal server error' });
  }
});


module.exports = questionRouter;
