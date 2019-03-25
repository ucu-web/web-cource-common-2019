maxNumber = Math.ceil(10001 * 1000 / Math.log(10001));
let isPrime = new Array(maxNumber).fill(true);
isPrime[1] = false;
let numberOfPrimes = 0;
for (let i = 2; i < isPrime.length; i++) {
    if(isPrime[i]) {
        numberOfPrimes++;
        if (numberOfPrimes === 10001) {
            console.log(i);
            break;
        }
        for (let j = 2; j * i < isPrime.length; j++) {
            isPrime[i * j] = false;
        }
    }

}
