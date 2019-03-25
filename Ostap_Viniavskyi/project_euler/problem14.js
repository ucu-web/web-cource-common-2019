let memorizer = new Map();
memorizer[1] = 1;
let chainLength = (n) => {
    if (!memorizer[n] && n !== 1){
        if (n % 2) {
            memorizer[n] = chainLength(3 * n + 1) + 1;
        } else {
            memorizer[n] = chainLength(n / 2) + 1;
        }
    }
    return memorizer[n];
};
let maxLength = 0, maxNumber, current;
for (let i = 1; i < 1000000; i++) {
    current = chainLength(i);
    if (current > maxLength){
        maxLength = current;
        maxNumber = i;
    }
}
console.log(maxNumber);