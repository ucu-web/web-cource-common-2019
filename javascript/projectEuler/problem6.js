"use strict";

let sumOfSquares = 0;
let squareOfSums = 0;
let number = 100;

for (let i = 0; i <= number; i++) {
    sumOfSquares += i**2;
}

for (let i = 0; i <= number; i++) {
    squareOfSums += i;
}

let res = squareOfSums**2 - sumOfSquares;

console.log(res);