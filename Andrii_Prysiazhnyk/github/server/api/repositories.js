const {Router} = require('express');
const {getAll, getFirst, add, updateAll, deleteAll} = require("./dataStorage");
const {validateInputObject, addAutoIncrement, checkPermission, mapOnForeignKeys} = require("./helper");
const {usersPath, repositoriesPath, contributorsPath} = require("./constants");

const router = new Router();

const addRepositoryFields = ["name", "description", "creationTime", "updateTime", "language", "stars", "userId", "login", "password"];
const addContributorFields = ["login", "password", "contributorId"];
const deleteRepositoryFields = ["login", "password"];
const deleteContributorFields = ["login", "password", "contributorId"];

router.get("/", async (req, res) => res.json(await getAll(repositoriesPath)));

router.get('/:repositoryId', async (req, res) => {
    const repository = await getFirst(repositoriesPath, (e) => e["id"] === +req.params["repositoryId"]);

    if (repository) res.json(repository);
    else res.status(404).send("No repository with such id");
});

router.get("/:repositoryId/contributors", async (req, res) => {
    const repositoryId = +req.params["repositoryId"];
    const repository = await getFirst(repositoriesPath, e => e["id"] === repositoryId);

    if (repository) {
        const records = await getAll(contributorsPath, e => e["repositoryId"] === repositoryId);
        res.json(await mapOnForeignKeys(records, "contributorId", "id", usersPath));
    } else res.status(404).send("No repository with such id");
});

const checkAddRepositoryFields = (req, res, next) => {
    if (validateInputObject(req.body, addRepositoryFields)) next();
    else res.status(422).send("Invalid json fields");
};

const checkPermissionWithId = async (req, res, next) => {
    if (await checkPermission(usersPath, req.body["userId"], req.body["login"], req.body["password"])) next();
    else res.status(422).send("Invalid login or password");
};

router.post("/", checkAddRepositoryFields, checkPermissionWithId, async (req, res) => {
    delete req.body["login"];
    delete req.body["password"];
    return res.json(await addAutoIncrement(repositoriesPath, req.body, "id"))
});

const checkAddContributorFields = (req, res, next) => {
    if (validateInputObject(req.body, addContributorFields)) next();
    else res.status(422).send("Invalid json fields");
};

const checkPermissionWithoutId = async (req, res, next) => {
    const repository = await getFirst(repositoriesPath, (e) => e["id"] === +req.params["repositoryId"]);
    if (repository)
        if (await checkPermission(usersPath, repository["userId"], req.body["login"], req.body["password"])) next();
        else res.status(422).send("Invalid login or password");
    else res.status(404).send("No repository with such id");
};

router.post("/:repositoryId/contributors", checkAddContributorFields, checkPermissionWithoutId, async (request, response) => {
    const record = {"contributorId": request.body["contributorId"], "repositoryId": +request.params["repositoryId"]};
    add(contributorsPath, record);
    response.json(record);
});

const checkUpdateRepositoryFields = (req, res, next) => {
    if (validateInputObject(req.body, [...addRepositoryFields, "id"])) next();
    else res.status(422).send("invalid json fields");
};

router.put("/", checkUpdateRepositoryFields, checkPermissionWithId, async (req, res) => {
    delete req.body["login"];
    delete req.body["password"];
    await updateAll(repositoriesPath, req.body,
            repository => repository["id"] === req.body["id"] && repository["userId"] === req.body["userId"]);
    res.json(req.body);
});

const checkDeleteRepositoryFields = (req, res, next) => {
    if (validateInputObject(req.body, deleteRepositoryFields)) next();
    else res.status(422).send("Invalid json fields")
};

router.delete('/:repositoryId', checkDeleteRepositoryFields, checkPermissionWithoutId, async (req, res) => {
    await deleteAll(repositoriesPath, repository => repository["id"] === +req.params["repositoryId"]);
    res.send("Deleted if exists")
});

const checkDeleteContributorFields = (req, res, next) => {
    if (validateInputObject(req.body, deleteContributorFields)) next();
    else res.status(422).send("Invalid json fields")
};

router.delete("/:repositoryId/contributors", checkDeleteContributorFields, checkPermissionWithoutId, async (req, res) => {
    await deleteAll(contributorsPath,
        record => record["repositoryId"] === +req.params["repositoryId"] && record["contributorId"] === req.body["contributorId"]);
    res.send("Deleted if exists")
});

module.exports = router;
