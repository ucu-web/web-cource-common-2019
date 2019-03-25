let numberOfDivisors = (n) => {
    let result = 1, temp, n_copy = n;
    for (let i = 2; i * i <= n_copy; i++) {
        temp = 0;
        while (n % i === 0) {
            temp++;
            n /= i;
        }
        result *= temp + 1;
    }
    if (n !== 1){
        result *= 2;
    }
    return result;
};

let divisors = 0, i = 1;
for (; divisors <= 500; i++) {
    divisors = numberOfDivisors(i * (i + 1) / 2);
    console.log(i * (i + 1) / 2, divisors);
}
