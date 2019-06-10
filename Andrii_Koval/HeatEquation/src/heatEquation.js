import { interpolateSpectral } from "d3-scale-chromatic";

const CELL_SIZE = 5;

export const generatePlate = size =>
  new Array(size)
    .fill(0)
    .map((_, i) =>
      new Array(size)
        .fill(0)
        .map((_, j) =>
          i === 0 || j === 0 || i === size - 1 || j === size - 1 ? 100 : 0
        )
    );

const render = field =>
  field
    .reduce((a, b) => [...a, ...b])
    .map(
      number =>
        `<div class="Point" style="background: ${interpolateSpectral(
          1 - number / 100
        )}"></div>`
    )
    .join("");

const displayOnCanvas = (canvas, field) => {
  canvas.height = field.length * CELL_SIZE;
  canvas.width = field[0].length * CELL_SIZE;
  const ctx = canvas.getContext("2d");

  map2D((x, y, value) => {
    ctx.fillStyle = interpolateSpectral(1 - value / 100);
    ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
  }, field);
};

const copyArray = arr => arr.map(e => (e instanceof Array ? copyArray(e) : e));

const map2D = (func, arr) =>
  arr.map((innerArr, y) => innerArr.map((value, x) => func(x, y, value)));

export const visualize = (field, temp, c, dt, dx) => {
  // const container = document.getElementById("Visualization");
  setInterval(() => {
    const isMarginal = (x, y) =>
      x === 0 || y === 0 || x === field[0].length - 1 || y === field.length - 1;

    const getSideValuesSum = (x, y) =>
      field[x + 1][y] + field[x - 1][y] + field[x][y + 1] + field[x][y - 1];

    const calculateNewValue = (x, y, value) =>
      isMarginal(x, y)
        ? value
        : value + ((c * dt) / dx ** 2) * (getSideValuesSum(x, y) - 4 * value);

    field = map2D(calculateNewValue, field);

    const canvas = document.querySelector("#canvas");
    displayOnCanvas(canvas, field);

    // container.innerHTML = render(field);
  }, 1);
};
