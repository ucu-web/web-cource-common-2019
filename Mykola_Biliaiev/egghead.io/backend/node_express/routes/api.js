const express = require("express");
const main_router = express.Router();


//     next();
main_router.get('/list_courses', (req, res) => {
    const data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];


    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
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