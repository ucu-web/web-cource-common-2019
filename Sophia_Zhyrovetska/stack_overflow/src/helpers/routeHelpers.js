const fs = require("fs").promises;
const { last } = require("ramda");

const getJson = pathToJson =>
  fs.readFile(pathToJson).then(data => JSON.parse(data.toString()));

const getItemById = (items, id) => items.filter(item => item["id"] == id)[0];

const getLargestItemId = items => (items.length === 0 ? 0 : last(items)["id"]);

module.exports = {
  getJson: getJson,
  getItemById: getItemById,
  getLargestItemId: getLargestItemId
};
