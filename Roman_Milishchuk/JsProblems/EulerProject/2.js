let fibs = new Array(2);
fibs[0] = 1;
fibs[1] = 2;
while (fibs[fibs.length - 1] <= 4000000) {
    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2])
}

fibs.pop();

console.log(fibs.reduce(function (prev, cur, i) {
    if (fibs[i] % 2 == 0) {
        return prev + cur;
    } else {
        return prev;
    }
}, 0));
