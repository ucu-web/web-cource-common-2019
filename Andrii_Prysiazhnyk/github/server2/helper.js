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

module.exports.validateInputObject = validateInputObject;
module.exports.addAutoIncrement = addAutoIncrement;
module.exports.checkPermission = checkPermission;
