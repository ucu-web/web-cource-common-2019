let num = 100000000000;
primes = [...Array(Math.floor(Math.sqrt(num))).keys()];

sieve = function (num) {
    return primes.filter(function (value) {
        if (value != num && value % num == 0) {
            return false;
        }
        return true;
    });
};

let i = 2;
while (i < Math.floor(Math.sqrt(num))) {
    primes = sieve(i);
    i = primes[primes.indexOf(i) + 1];
}
console.log(primes[10001]);
