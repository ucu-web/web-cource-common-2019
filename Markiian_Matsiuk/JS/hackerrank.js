// Day 0
function greeting(parameterVariable) {
    console.log('Hello, World!\n'+parameterVariable);
    }

function performOperation(secondInteger, secondDecimal, secondString) {
    const firstInteger = 4;
    const firstDecimal = 4.0;
    const firstString = 'HackerRank ';
    console.log(firstInteger + parseInt(secondInteger));
    console.log(firstDecimal + parseFloat(secondDecimal));
    console.log(firstString + secondString);
}

// Day 1

function getArea(length, width) {
    return length*width;
}

function getPerimeter(length, width) {
    return 2*(length+width);
}

function factorial(n) {
    let res = 1;
    for (let i = n; i > 1; i--) {
        res *= i;
    }
    return res;
}

function main() {
    const PI = Math.PI;
    let r = parseFloat(readLine());
    console.log(PI * r ** 2);
    console.log(2 * PI * r);
    try {    
        PI = 0;
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}

// Day 2
function getGrade(score) {
    if (25 < score && score <= 30) return 'A';
    if (20 < score && score <= 25) return 'B';
    if (15 < score && score <= 20) return 'C';
    if (10 < score && score <= 15) return 'D';
    if (5 < score && score <= 10) return 'E';
    if (0 < score && score <= 5) return 'F';
}



function vowelsAndConsonants(s) {
    const vowels = ["a", "e", "i", "o", "u"];

    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s.charAt(i))) {
            console.log(s.charAt(i));
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (!vowels.includes(s.charAt(i))) {
            console.log(s.charAt(i));
        }
    }   
}

function getLetter(s) {
    let letter = s.charAt(0);

    switch (true) {
        case 'aeiou'.includes(letter): return 'A';
        case 'bcdfg'.includes(letter): return 'B';
        case 'hjklm'.includes(letter): return 'C';
        case 'npqrstvwxyz'.includes(letter): return 'D';
    }
}

// Day 3

// Day 4
// Day 5
// Day 6
// Day 7
// Day 8
// Day 9