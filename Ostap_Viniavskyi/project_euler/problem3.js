let maxPrimeFactor = (number) => {
    let maxFactor = -Infinity, temp = number;
    for (let i = 2; i * i < temp; ++i){
        if (number % i === 0){
            maxFactor = i;
        }
        while(number % i === 0){
            number /= i;
        }
    }
    return Math.max(maxFactor, number);
};

console.log(maxPrimeFactor(600851475143));