import { interpolateSpectral } from "d3-scale-chromatic";

const CELL_SIZE = 5;
const MAX_TEMP = 100;

const range = size => new Array(size).fill(0);

export const generatePlate = (height, width) =>
  range(height).map(() => range(width).map(() => 0));

const displayOnCanvas = (canvas, field, arrX, arrY) => {
  canvas.height = field.length * CELL_SIZE;
  canvas.width = field[0].length * CELL_SIZE;
  const ctx = canvas.getContext("2d");

  map2D((x, y, value) => {
    const color = value === MAX_TEMP ? field[y][x - 1] : field[y][x];
    ctx.fillStyle = isInPoly(arrX, arrY, x, y)
      ? interpolateSpectral(1 - color / MAX_TEMP)
      : "#ffffff";
    ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
  }, field);
};

const isInPoly = (arrX, arrY, x, y) => {
  let j = arrX.length - 1;
  let flag = false;

  for (let i = 0; i < arrX.length; i++) {
    if (
      ((arrY[i] < y && arrY[j] >= y) || (arrY[j] < y && arrY[i] >= y)) &&
      (arrX[i] <= x || arrX[j] <= x)
    ) {
      if (
        arrX[i] + ((y - arrY[i]) / (arrY[j] - arrY[i])) * (arrX[j] - arrX[i]) <
        x
      ) {
        flag = !flag;
      }
    }
    j = i;
  }
  return flag;
};

const copyArray = arr => arr.map(e => (e instanceof Array ? copyArray(e) : e));

const map2D = (func, arr) =>
  arr.map((innerArr, y) => innerArr.map((value, x) => func(x, y, value)));

const onClick = (e, field) => {
  const X = Math.floor(e.offsetX / CELL_SIZE);
  const Y = Math.floor(e.offsetY / CELL_SIZE);
  field[Y][X] = MAX_TEMP;
};

export const addCoordinate = (e, polyX, polyY) => {
  const X = Math.floor(e.offsetX / CELL_SIZE);
  const Y = Math.floor(e.offsetY / CELL_SIZE);
  polyX.push(X);
  polyY.push(Y);
};

export const visualize = (field, temp, c, dt, dx) => {
  const canvas = document.querySelector("#canvas");
  const button = document.getElementsByClassName("render-button")[0];
  const polyX = [];
  const polyY = [];
  const event = e => addCoordinate(e, polyX, polyY);
  canvas.addEventListener("click", event);

  button.addEventListener("click", e => {
    e.preventDefault();
    canvas.removeEventListener("click", event);
    canvas.addEventListener("click", e => onClick(e, field));
  });

  setInterval(() => {
    const isMarginal = (x, y) =>
      field[x][y] === MAX_TEMP ||
      x === 0 ||
      y === 0 ||
      x === field[0].length - 1 ||
      y === field.length - 1;

    const getSideValuesSum = (x, y) =>
      field[x + 1][y] +
      field[x - 1][y] +
      field[x][y + 1] +
      field[x][y - 1] +
      field[x + 1][y + 1] +
      field[x - 1][y - 1] +
      field[x - 1][y + 1] +
      field[x + 1][y - 1];

    const calculateNewValue = (y, x, value) =>
      isInPoly(polyX, polyY, y, x)
        ? isMarginal(x, y)
          ? value
          : value + ((c * dt) / dx ** 2) * (getSideValuesSum(x, y) - 8 * value)
        : 1;
    field = map2D(calculateNewValue, field);

    const canvas = document.querySelector("#canvas");
    displayOnCanvas(canvas, field, polyX, polyY);
  }, 1);
};
