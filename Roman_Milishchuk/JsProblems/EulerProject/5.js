function gcd(a, b) {
    if (b == 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}

function lcm(a, b) {
    return a * b / gcd(a, b);
}

res = 1;
for (let i = 2; i < 20; i++) {
    res = lcm(res, i);
}
console.log(res);