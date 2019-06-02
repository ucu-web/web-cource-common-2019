const express = require("express");
const main_router = express.Router();


const Course = require("../db").Course;
//     next();
main_router.get('/list_courses', (req, res) => {
    Course.find({}, (err, data) => {
        console.log(data, "DATA")


        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data));
    })
});
main_router.get('/new_content', (req, res) => {
    const data = [{width: "33.3%", "space_between_inline": true}, {
        width: "33.3%",
        "space_between_inline": true
    }, {width: "33.3%", "space_between_inline": true}
        , {width: "25%", "space_between_inline": true}, {
            width: "25%", "space_between_inline": true
        }, {width: "25%", "space_between_inline": true},
        {width: "25%", "space_between_inline": true},
        {width: "25%", "space_between_inline": true}, {
            width: "25%", "space_between_inline": true
        }, {width: "25%", "space_between_inline": true},
        {width: "25%", "space_between_inline": true}]


    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
});

module.exports = main_router;