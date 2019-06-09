const fs = require('fs').promises;

const getAll = (path, predicate = () => true) =>
    fs
        .readFile(path)
        .then(text => JSON.parse(text.toString()))
        .then(array => array.filter(predicate));

const getFirstSatisfied = (array, predicate) =>
    array.length === 0
        ? null
        : predicate(array[0])
        ? array[0]
        : getFirstSatisfied(array.slice(1), predicate);

const getFirst = (path, predicate) =>
    fs
        .readFile(path)
        .then(text => JSON.parse(text.toString()))
        .then(array => getFirstSatisfied(array, predicate));

const add = (path, element) =>
    getAll(path).then(data =>
        fs.writeFile(path, JSON.stringify([...data, element])),
    );

const updateAll = (path, newElement, predicate) => getAll(path)
    .then(data => data.map(d => predicate(d) ? newElement : d))
    .then(updatedData => fs.writeFile(path, JSON.stringify(updatedData)));

const deleteAll = (path, predicate) =>
    getAll(path)
        .then(data => data.filter(d => !predicate(d)))
        .then(filteredData => fs.writeFile(path, JSON.stringify(filteredData)));

module.exports.getAll = getAll;
module.exports.getFirst = getFirst;
module.exports.add = add;
module.exports.deleteAll = deleteAll;
module.exports.updateAll = updateAll;
