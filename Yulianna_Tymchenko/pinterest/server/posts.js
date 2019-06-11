const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const download = require('image-downloader');
const sizeOf = require('buffer-image-size');

const postRouter = express.Router();
const pathToPosts = path.resolve(__dirname, "../static/data/posts.json");
const pathToImages = path.resolve(__dirname, "../static/images");

postRouter.get("/", async (req, res) => res.json(await fs.readFile(pathToPosts)
    .then(data => JSON.parse(data))));

const getImageLink = fileName =>  {
    const splited = fileName.split("\\");
    return "static/images/" + splited[splited.length - 1];
};

const validation = (req, res, next) => {
    if (req.body["url"] && req.body["title"])
        next();
    else
        res.status(422).json({"error-message": "Incorrect arguments"});
};

postRouter.post("/", validation,  async (req, res) => {
    try {
        const {filename, image} = await download.image({"url": req.body["url"], "dest": pathToImages});
        const {width, height} = sizeOf(image);

        const post = {"width": width, "height": height, "image_link": getImageLink(filename), "go_to_link": "#", "send_link": "#", "title": req.body["title"]};
        const posts = await fs.readFile(pathToPosts).then(data => JSON.parse(data));
        posts.push(post);

        await fs.writeFile(pathToPosts, JSON.stringify(posts));
        res.json(post);
    } catch(e) {
        res.status(422).json({"error-message": e.message});
    }
});

module.exports = postRouter;
