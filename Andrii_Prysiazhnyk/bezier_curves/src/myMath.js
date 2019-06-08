export const multiplyPointByScalar = (point, scalar) =>
  point.map(x => scalar * x);

export const addPoints = (point1, point2) => [
  point1[0] + point2[0],
  point1[1] + point2[1]
];

let intermediateValues = {};

const factorial = n => {
  intermediateValues[n] =
    intermediateValues[n] || (n === 0 ? 1 : n * factorial(n - 1));
  return intermediateValues[n];
};

export const combination = (n, i) =>
  factorial(n) / (factorial(i) * factorial(n - i));
