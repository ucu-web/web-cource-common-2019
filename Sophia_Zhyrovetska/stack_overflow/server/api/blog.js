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
    "../../src/components/BlogBlock/data.json"
);

questionRouter.get("/", async (req, res) => {
    try {
        res.json(await getJson(pathToJsonFile));
    } catch (error) {
        res.statusCode = 500;
        res.send("Internal server error");
    }
});

questionRouter.get("/:id", async (req, res) => {
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
});

questionRouter.post("/", async (req, res) => {
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
            res.statusCode = 404;
            res.send("No such item");
        }
    } catch (error) {
        res.statusCode = 500;
        res.send("Internal server error");
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
            res.send("Item deleted");
        } else {
            res.statusCode = 404;
            res.send("No such item");
        }
    } catch (error) {
        res.statusCode = 500;
        res.send("Internal server error");
    }
});

module.exports = questionRouter;
