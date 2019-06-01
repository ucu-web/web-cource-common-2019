const multiplyPointByScalar = (point, scalar) => point.map((x) => scalar * x);

const addPoints = (point1, point2) => [point1[0] + point2[0], point1[1] + point2[1]];

const factorial = (n) => n === 0 ? 1 : n * factorial(n - 1);

const combination = (n, i) => factorial(n) / (factorial(i) * factorial(n - i));

module.exports.multiplyPointByScalar = multiplyPointByScalar;
module.exports.addPoints = addPoints;
module.exports.combination = combination;
