let is_palindome = function (num) {
    return num.toString() == num.toString().split("").reverse().join("");
};

largest = 0;
for (let i = 1000; i > 100; i--) {
    for (let j = 1000; j > 100; j--) {
        if (is_palindome(i * j) && i * j > largest) {
            largest = i * j;
        }
    }
}
console.log(largest);
