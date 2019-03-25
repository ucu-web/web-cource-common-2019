let factorial = (n) => {
    if (n === 1)
        return 1;
    else
        return n * factorial(n  - 1);
};

let numberOfWays = (m, n) => {
    return factorial(n + m) / factorial(n) / factorial(m);
};

console.log(numberOfWays(20, 20));