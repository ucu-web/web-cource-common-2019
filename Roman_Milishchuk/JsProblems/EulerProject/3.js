let largest_prime = function (num) {
    let primes = [...Array(Math.floor(Math.sqrt(num))).keys()];

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
    res = primes.filter(function (value) {
        if (num % value == 0) {
            return true;
        }
    });
    return res[res.length - 1];
};
console.log(largest_prime(600851475143));
