let num = 2000000;
primes = [...Array(num).keys()];

sieve = function (num) {
    return primes.filter(function (value) {
        if (value != num && value % num == 0) {
            return false;
        }
        return true;
    });
};

let i = 2;
while (i < num) {
    primes = sieve(i);
    i = primes[primes.indexOf(i) + 1];
}
let res = primes.reduce(function (prev, cur) {
    if (cur < num) {
        return prev + cur;
    } else {
        console.log("yeah, ");
        return prev;
    }
}, 0);
console.log(res - 1);
