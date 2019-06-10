const express = require("express");
const auth_router = express.Router();
const jwt = require("jsonwebtoken");
const passport = require('passport');
const User = require("../db").User;


auth_router.get("/users", passport.authenticate('jwt', (session = false)), async (req, res) => {
    try {
        let users = await User.find().exec();
        res.send(users);
    } catch (e) {
        res.status(500).send(e)
    }
});
auth_router.post("/users", async (req, res) => {
    try {
        let user = new User(req.body);
        let result = await user.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});
auth_router.get("/users/:user_id", passport.authenticate('jwt', (session = false)), async (req, res) => {
    if (req.params.user_id.toString() !== req.user["_id"].toString()) return res.status(500).send("You Can only update your profile");
    try {
        res.send(req.user);
    } catch (e) {
        res.status(500).send(e)
    }
});


auth_router.post("/users/:user_id", passport.authenticate('jwt', (session = false)), async (req, res) => {
    try {
        if (req.params.user_id.toString() !== req.user["_id"].toString()) return res.status(500).send("You Can only update your profile");
        const {email, name} = req.body;
        let user = await User.findById(req.params.user_id).exec();
        user.email = email;
        user.name = name;
        user.save();
        res.send(user);
    } catch (e) {
        res.status(500).send(e)
    }
});




auth_router.post("/login", async (req, res) => {
    const {password, email} = req.body;
    if (!password || !email) res.status(401).send("Fields Not Provided");
    try {
        let user = await User.findOne({password, email}).exec();
        const access_token = jwt.sign(
            {id: user["_id"]},
            process.env.SECRET_OR_KEY,
            {expiresIn: process.env.TOKEN_EXPIRATION}
        );
        return res.status(200).send({access_token, user});
    } catch (e) {
        res.status(500).send(e)
    }
});

module.exports = auth_router;
