const generateRow = (size) => new Array(size).fill(size).map(() => Math.round(Math.random()));
const generateField = (size) => new Array(size).fill(size).map(() => generateRow(size));
const getCellValue = (field, i, j) => !field[i] ? 0 : !field[i][j] ? 0 : field[i][j];
const updateField = field => field.map((row, i) => row.map((cell, j) => getNewCellStatus(field, i, j)));


const getNewCellStatus = (field, i, j) => getCellValue(field, i, j) ? sumOfNeighbors(field, i, j) < 2 ? 0 : sumOfNeighbors(field, i, j) > 3 ? 0 : 1 : sumOfNeighbors(field, i, j) === 3 ? 1 : 0 ;

const renderView = field =>
    field.map((row) =>
        row.map((cell) =>
            `<div class="Cell Cell--${cell ? "live" : "dead"}"></div>`).join("")).join("");

const updateView = (elementString) => document.getElementById("game").innerHTML = elementString;

const sumOfNeighbors = (field, i, j) =>
    getCellValue(field, i - 1, j - 1) +
    getCellValue(field, i - 1, j) +
    getCellValue(field, i - 1, j + 1) +
    getCellValue(field, i, j - 1) +
    getCellValue(field, i, j + 1) +
    getCellValue(field, i + 1, j - 1) +
    getCellValue(field, i + 1, j) +
    getCellValue(field, i + 1, j + 1);

let field = generateField(100);

setInterval(() => {
    updateView(renderView(field));
    field = updateField(field);
}, 50);