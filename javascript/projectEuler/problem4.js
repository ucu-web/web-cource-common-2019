"use strict";

const reverseString = (str) => {
    str = str.split("");
    str = str.reverse();
    str = str.join("");

    return str;
};

let num = 0;

for (let i = 0; i < 1000; i++) {
    for (let j = 0; j < 1000; j++) {

        let strNum = toString(i * j);

        if ( strNum == reverseString(strNum) && i*j > num) {
            num = i * j;
        }

    }
}

console.log(num);