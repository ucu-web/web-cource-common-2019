const SIZE = 1000;
const CELL_SIZE = 25;
const UPDATE_RATE = 5;
const field = document.getElementsByClassName("field")[0];
[field.style.width, field.style.height] = [SIZE + "px", SIZE + "px"];


const fieldSize = SIZE / CELL_SIZE;
const allCombination = [[-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]];
const initialize = () =>
    new Array(fieldSize).fill(0).map(() =>
        new Array(fieldSize).fill(0).map(() => ({
            "cell": setSell(document.createElement("div")),
            "alive": Math.round(Math.random())
        })));
const setSell = (cell) => {
    [cell.style.width, cell.style.height] = [CELL_SIZE + "px", CELL_SIZE + "px"];
    field.appendChild(cell);
    return cell
};
const countNeighbours = (cells, cellX, cellY) => allCombination.filter(combination => {
    let [X, Y] = [cellX + combination[0], cellY + combination[1]];
    return ((X >= 0 && Y >= 0) && (fieldSize > X && fieldSize > Y)) ? cells[X][Y].alive : false
}).length;

const updateDom = (cells) =>
    cells.map(cellsX =>
        cellsX.map(cell => cell.cell.className = (cell.alive ? "field__square field__square--alive" : "field__square")));
const update = (cells) => cells.map((cellsX, cordX) => cellsX.map((cell, cordY) => updateCell(cells, cordX, cordY, countNeighbours(cells, cordX, cordY), cells[cordX][cordY].alive))).map((_, itemX) => _.map((_m, itemY) => cells[itemX][itemY].alive = _m))
const updateCell = (cells, cellX, cellY, neighbours, isAlive) => isAlive ? !((neighbours <= 1) || (neighbours >= 4)) : neighbours === 3;
let cells = initialize();


setInterval(() => {
    update(cells);
    updateDom(cells);
}, UPDATE_RATE);


