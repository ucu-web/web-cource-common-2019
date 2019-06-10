export const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
export const range = n => new Array(n).fill();
export const clear = ctx =>
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

export const rotateMatrix = matrix =>
  matrix[0].map((_, i) => matrix.map(e => e[i]).reverse());

export const insertSubArray = (intoMatrix, [x, y], subMatrix) => {
  let newMatrix = intoMatrix.map(arr => arr.slice());
  subMatrix.forEach((row, indexY) => {
    row.forEach((element, indexX) => {
      if (element !== 0) newMatrix[indexY + y][indexX + x] = element;
    });
  });
  return newMatrix;
};
