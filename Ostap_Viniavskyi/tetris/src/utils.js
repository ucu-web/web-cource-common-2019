export const EMPTY = 'WHITE';
export const drawSquare = (x, y, size, color, context) => {
    context.fillStyle = color;
    context.fillRect(x * size, y * size, size, size);
    context.strokeStyle = "black";
    context.strokeRect(x * size, y * size, size, size);
};
export const rotateMatrix = (matrix) => {
    const N = matrix.length - 1;
    const result = matrix.map((row, i) =>
        row.map((val, j) => matrix[N - j][i])
    );
    return result;
};