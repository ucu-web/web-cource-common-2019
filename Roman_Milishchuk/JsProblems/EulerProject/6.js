let res = 0;
for (let i = 1; i < 101; i++) {
    for (let j = i + 1; j < 101; j++) {
        res += 2 * i * j;
    }
}
console.log(res);