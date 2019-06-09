const {Router} = require("express");
const {getAll, getFirst, add, updateAll, deleteAll} = require("./dataStorage");
const {validateInputObject, addAutoIncrement, checkPermission, mapOnForeignKeys, getRecommendedRepositories} = require("./helper");
const {usersPath, friendsPath, repositoriesPath} = require("./constants");

const router = new Router();

const addUserFields = ["name", "login", "password", "email", "country"];
const addFriendFields = ["login", "password", "friendId"];
const deleteUserFields = ["login", "password"];
const deleteFriendFields = ["login", "password", "friendId"];

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

router.get("/:userId/repositories/recommended", async (req, res) =>
    res.json(await getRecommendedRepositories(+req.params["userId"], friendsPath, repositoriesPath)));

router.get("/:userId/friends", async (req, res) => {
    const userId = +req.params["userId"];
    const user = await getFirst(usersPath, (user) => user["id"] === userId);

    if (user) {
        const records = await getAll(friendsPath, record => record["userId"] === userId);
        res.status(200).send(await mapOnForeignKeys(records, "friendId", "id", usersPath));
    } else res.status(404).send("No user with such id");
});

const checkAddUserFields = (req, res, next) => {
    if (validateInputObject(req.body, addUserFields)) next();
    else res.status(422).send("Invalid json fields");
};

router.post("/", checkAddUserFields, async (req, res) =>
    res.json(await addAutoIncrement(usersPath, req.body, "id"))
);

const checkAddFriendFields = (req, res, next) => {
    if (validateInputObject(req.body, addFriendFields)) next();
    else res.status(422).send("Invalid json fields");
};

const checkPermissionWithoutId = async (req, res, next) => {
    if (await checkPermission(usersPath, +req.params["userId"], req.body["login"], req.body["password"])) next();
    else res.status(422).send("Invalid login or password");
};

router.post("/:userId/friends", checkAddFriendFields, checkPermissionWithoutId, async (req, res) => {
    const record = {userId: +req.params["userId"], friendId: req.body["friendId"]};
    add(friendsPath, record);
    res.json(record);
});

const checkUpdateUserFields = (req, res, next) => {
    if (validateInputObject(req.body, [...addUserFields, "id"])) next();
    else res.status(422).send("Invalid json fields");
};

const checkPermissionWithID = async (req, res, next) => {
    if (await checkPermission(usersPath, req.body["id"], req.body["login"], req.body["password"])) next();
    else res.status(422).send("Invalid login or password");
};

router.put("/", checkUpdateUserFields, checkPermissionWithID, async (req, res) => {
    await updateAll(usersPath, req.body, user => user["id"] === req.body["id"]);
    res.json(req.body);
});

const checkDeleteUserFields = (req, res, next) => {
    if (validateInputObject(req.body, deleteUserFields)) next();
    else res.status(422).send("Invalid json fields")
};

router.delete('/:userId', checkDeleteUserFields, checkPermissionWithoutId, async (req, res) => {
    await deleteAll(usersPath, user => user["id"] === +req.params["userId"]);
    res.send("Deleted if exists")
});

const checkDeleteFriendFields = (req, res, next) => {
    if (validateInputObject(req.body, deleteFriendFields)) next();
    else res.status(422).send("Invalid json fields")
};

router.delete("/:userId/friends", checkDeleteFriendFields, checkPermissionWithoutId, async (req, res) => {
    await deleteAll(friendsPath,
        record => record["userId"] === +req.params["userId"] && record["friendId"] === req.body["friendId"]);
    res.send("Deleted if exists")
});

module.exports = router;
