"use strict";

let primes = [];
let counter = 2;
let number = 2;

while (counter !== 6) {

    number += 1;

    if ((number  7) && ((number % 2 === 0) || (number % 3 === 0) || (number % 5 === 0) || (number % 7 === 0))) {
        continue;
    } else {
        primes.push(number);
        counter++;
    }

}

console.log(primes);