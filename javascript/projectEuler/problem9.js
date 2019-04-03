"use strict";

let number = 1000;

for (let i = 1; i < number; i++) {
    for (let j = 1; j < number; j++) {
        for (let k = 1; k < number; k++) {
            if ((i**2 + j**2 === k**2) && (i + j + k === 1000)) {
                console.log(i*j*k);
            }
        }
    }
}