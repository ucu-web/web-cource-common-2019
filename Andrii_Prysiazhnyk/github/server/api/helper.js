const {getAll, add, getFirst} = require("./dataStorage");

const allFieldsPresent = (jsonObject, fields) =>
    fields.map((field) => jsonObject[field]).reduce((result, current) => result && current, true);

const numberOfKeys = (jsonObject) => Object.keys(jsonObject).length;

const validateInputObject = (jsonObject, fields) =>
    allFieldsPresent(jsonObject, fields) && numberOfKeys(jsonObject) === fields.length;

const addAutoIncrement = async (pathToFile, element, autoIncrementField) => {
    element[autoIncrementField] = 1 +
        await getAll(pathToFile).then(data => Math.max(...data.map((d) => d[autoIncrementField]), 0));
    await add(pathToFile, element);
    return element;
};

const checkPermission = (pathToFile, id, login, password) => {
    return getFirst(pathToFile, (e) => e["id"] === id && e["login"] === login && e["password"] === password)
        .then(result => result !== null);
};

const mapOnForeignKeys = async (data, foreignKey, onKey, path) => {
    let res = [];

    for (let i = 0; i < data.length; ++i) {
        const current = await getFirst(path, e => e[onKey] === data[i][foreignKey]);
        if (current) res.push(current);
    }

    return res;
};

const getRecommendedRepositories = async (userId, friendsFilePath, repositoryFilePath) => {
    const friends = await getAll(friendsFilePath, record => record["userId"] === userId);

    let secondOrderFriends = [];

    for (let i = 0; i < friends.length; ++i)
        secondOrderFriends = secondOrderFriends
            .concat(await getAll(friendsFilePath, record => record["userId"] === friends[i]["friendId"]));

    return await mapOnForeignKeys(secondOrderFriends, "friendId", "userId", repositoryFilePath);
};

module.exports.validateInputObject = validateInputObject;
module.exports.addAutoIncrement = addAutoIncrement;
module.exports.checkPermission = checkPermission;
module.exports.mapOnForeignKeys = mapOnForeignKeys;
module.exports.getRecommendedRepositories = getRecommendedRepositories;
