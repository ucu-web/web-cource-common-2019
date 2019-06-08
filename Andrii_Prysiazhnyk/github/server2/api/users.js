const express = require("express");
const router = express.Router();
const {getAll, getFirst, add, updateAll} = require("./dataStorage");
const {validateInputObject, addAutoIncrement, checkPermission} = require("./helper");
const {usersPath, friendsPath, repositoriesPath} = require("./constants");

const userRequestFields = ["name", "login", "password", "email", "country"];
const friendsRequestFields = ["login", "password", "friendId"];

router.get("/", async (req, res) => res.json(await getAll(usersPath)
    .then(users => {
        users.forEach(user => delete user["password"]);
        return users;
    })));

router.get('/:userId', async (req, res) => {
    const user = await getFirst(usersPath, user => user["id"] === +req.params["userId"]);
    delete user["password"];

    if (user) res.json(user);
    else res.status(404).send("No user with such id");
});

router.get("/:userId/repositories", async (req, res) => {
    const userId = +req.params["userId"];
    const user = await getFirst(usersPath, (user) => user["id"] === +req.params["userId"]);

    if (user) res.json(await getAll(repositoriesPath, repository => repository["userId"] === userId));
    else res.status(404).send("No user with such id");
});

router.get("/:userId/friends", async (req, res) => {
    const userId = +req.params["userId"];
    const user = await getFirst(usersPath, (user) => user["id"] === userId);

    if (user) res.json(await getAll(friendsPath, (record) => record["userId"] === userId));
    else res.status(404).send("No user with such id");
});

const validateUser = (req, res, next) => {
    if (validateInputObject(req.body, userRequestFields)) next();
    else res.status(422).send("Invalid json fields");
};

router.post("/", validateUser, async (req, res) =>
    res.json(await addAutoIncrement(usersPath, req.body, "id"))
);

const validateFriend = (req, res, next) => {
    if (validateInputObject(req.body, friendsRequestFields)) next();
    else res.status(422).send("Invalid json");
};

const userPermission = async (req, res, next) => {
    if (await checkPermission(usersPath, +req.params["userId"], req.body["login"], req.body["password"])) next();
    else res.status(422).send("Invalid login or password");
};

router.post("/:userId/friends", validateFriend, userPermission, async (req, res) => {
    const record = {userId: +req.params["userId"], friendId: req.body["friendId"]};
    add(friendsPath, record);
    res.json(record);
});

router.put("/users", (req, res) => {
    updateAll(usersPath, req.body, user => user["id"] === req.body["id"] && user["login"] === req.body["login"] && user["password"] === req.body["password"]);
    res.json(req.body);
});

module.exports = router;
