"use strict";

let numberFrom = 1;
let numberTo = 20;
let num = 1;

function checkNumber(number) {
    for (let i = numberFrom; i <= numberTo; i++) {
        if ((num / i) % 1 !== 0) {
            return false;
        }
    }

    return true;
}

while (true) {
    if (checkNumber(num)) {
        console.log(num);
        break
    } else {
        num++;
    }
}