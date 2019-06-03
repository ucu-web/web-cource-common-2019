const key = require('../key').key;
// const key = "super secure"
const express = require("express");
const main_router = express.Router();
const jwt = require("jsonwebtoken")


const User = require("../db").User;
//     next();
main_router.post('/registration', (req, res) => {
    const user = req.body;
    console.log(user);
    User.insertMany(
        user
        , (err, result) => {
            let data = err ? {"error": err, status: 422} : {user: result, status: 200};
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(data));
        })
});


main_router.post('/login', (req, res) => {
    const user = req.body;
    let password = user.password;
    let email = user.email;
    User.find({password: password, email: email}, function (err, user) {
        if (err) {
            res.send(err);
        }
        const token = jwt.sign({
            username: user.name,

        }, key , {expiresIn: "3 hours"});

        res
            .status(200)
            .send({"access_token": token})

    })
});


module.exports = main_router;