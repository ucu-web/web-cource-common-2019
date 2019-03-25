maxNumber = 2000000;
let isPrime = new Array(maxNumber).fill(true);
isPrime[1] = false;
let sumOfPrimes = 0;
for (let i = 2; i < isPrime.length; i++) {
    if(isPrime[i]) {
        sumOfPrimes += i;
        for (let j = 2; j * i < isPrime.length; j++) {
            isPrime[i * j] = false;
        }
    }
}
console.log(sumOfPrimes);