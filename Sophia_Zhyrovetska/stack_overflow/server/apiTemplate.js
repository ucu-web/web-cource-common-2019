const fs = require("fs").promises;
const {
  getJson,
  getLargestItemId,
  getItemById
} = require("./../src/helpers/routeHelpers.js");

const getAllItems = async (pathToJsonFile, req, res) => {
  try {
    res.json(await getJson(pathToJsonFile));
  } catch (error) {
    res.statusCode = 500;
    res.send("Internal server error");
  }
};

const getOneItem = async (pathToJsonFile, req, res) => {
  try {
    const allItems = await getJson(pathToJsonFile);
    const item = getItemById(allItems, req.params["id"]);

    if (item) {
      res.json(item);
    } else {
      res.statusCode = 404;
      res.send("No such item");
    }
  } catch (error) {
    res.statusCode = 500;
    res.send("Internal server error");
  }
};

const postItem = async (pathToJsonFile, req, res) => {
  try {
    const items = await getJson(pathToJsonFile);
    req.body["id"] = getLargestItemId(items) + 1;
    items.push(req.body);

    await fs.writeFile(pathToJsonFile, JSON.stringify(items));
    res.json(req.body);
  } catch (error) {
    res.statusCode = 500;
    res.send("Internal server error");
  }
};

const putItem = async (pathToJsonFile, req, res) => {
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
      res.statusCode = 404;
      res.send("No such item");
    }
  } catch (error) {
    res.statusCode = 500;
    res.send("Internal server error");
  }
};

const deleteItem = async (pathToJsonFile, req, res) => {
  try {
    const items = await getJson(pathToJsonFile);
    const filteredItems = items.filter(
      element => element["id"] != req.params["id"]
    );

    if (filteredItems.length !== items.length) {
      await fs.writeFile(pathToJsonFile, JSON.stringify(filteredItems));
      res.send("Item deleted");
    } else {
      res.statusCode = 404;
      res.send("No such item");
    }
  } catch (error) {
    res.statusCode = 500;
    res.send("Internal server error");
  }
};

module.exports.getAllItems = getAllItems;
module.exports.getOneItem = getOneItem;
module.exports.postItem = postItem;
module.exports.putItem = putItem;
module.exports.deleteItem = deleteItem;
