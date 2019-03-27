const sum_of_multiples_of_3_and_5 = (n) => {
    // sum(3k to 333) + sum(5k to 199) - sum(15k to 66)
    return 3 * 0.5 * Math.floor((n - 1) / 3) * (Math.floor((n - 1) / 3) + 1)
            + 5 * 0.5 * (Math.floor((n - 1) / 5)) * Math.floor((n - 1) / 5 + 1)
            - 15 * 0.5 * (Math.floor((n - 1) / 15)) * Math.floor((n - 1) / 15 + 1);

};

const sum_of_even_fib = (n) => {
    let a = 0, b = 2;
    let total = 0;
    while (b < n){
        let temp = a;
        a = b;
        total += b;
        b = 4*b + temp;
    }
    return total;
};


console.log(sum_of_even_fib(4000000));
