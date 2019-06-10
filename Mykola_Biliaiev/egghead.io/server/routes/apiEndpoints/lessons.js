const express = require('express');
const Lesson = require('../../db').Lesson;
const passport = require('passport');
const lessons = express.Router();



lessons.get('/', passport.authenticate('jwt', (session = false)), async (req, res) => {
    try {
        let data = await Lesson.find().exec();
        res.send(data)
    } catch (e) {
        res.status(500).send(e)
    }
});


lessons.post('/', passport.authenticate('jwt', (session = false)), async (req, res) => {
        try {
            req.body.author = req.user["_id"];
            let lesson = new Lesson(req.body);
            let result = await lesson.save();
            res.send(result);
        } catch (error) {
            res.status(500).send(error);
        }
    },
);

lessons.delete('/', passport.authenticate('jwt', (session = false)), async (req, res) => {
        try {
            let lesson = await Lesson.findByIdAndRemove(req.user["_id"]);
            res.status(202).send(lesson);
        } catch (error) {
            res.status(500).send(error);
        }
    },
);

module.exports = lessons;
