let sumOfSquaresToN = (n) => {
    return n * (n + 1) * (2 * n + 1) / 6;
};
let squareOfSumToN = (n) => {
    return Math.pow(n * (n + 1) / 2, 2)
};
console.log(squareOfSumToN(100) - sumOfSquaresToN(100));