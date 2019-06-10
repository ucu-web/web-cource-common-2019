const express = require('express');
const Course = require('../../db').Course;
const passport = require('passport');
const courses = express.Router();

courses.get('/', passport.authenticate('jwt', (session = false),), async (req, res) => {
        try {
            let data = await Course.find().exec();
            res.send(data)
        } catch (e) {
            res.status(500).send(e)
        }
    },
);

courses.post('/', passport.authenticate('jwt', (session = false)), async (req, res) => {
        try {
            req.body.author = req.user["_id"];
            let course = new Course(req.body);
            let result = await course.save();
            res.send(result);
        } catch (error) {
            res.status(500).send(error);
        }
    },
);
courses.delete('/', passport.authenticate('jwt', (session = false)), async (req, res) => {
        try {
            let course = await Course.findByIdAndRemove(req.user["_id"]);
            res.status(202).send(course);
        } catch (error) {
            res.status(500).send(error);
        }
    },
);


module.exports = courses;
