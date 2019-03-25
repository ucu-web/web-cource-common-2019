let gcd = (a, b) => {
    if (b === 0){
        return a;
    }
    else{
        return gcd(b, a % b)
    }
};

let smallestMultiple = 1;
for (let i = 2; i <= 20; i++) {
        smallestMultiple *= i / gcd(i, smallestMultiple);
}
console.log(smallestMultiple);