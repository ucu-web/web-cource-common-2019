const express = require('express');
const courses = require("./apiEndpoints/courses");
const lessons = require("./apiEndpoints/lessons");
const api = express.Router();

api.use("/courses", courses);
api.use("/lessons", lessons);

module.exports = api;
