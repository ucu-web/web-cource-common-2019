let a = 0, b = 1, result = 0, temp;
for (let i = 0; b < 4000000; ++i){
    if (i % 3 === 2){
        result += b;
    }
    temp = a;
    a = b;
    b = temp + a;
}
console.log(result);