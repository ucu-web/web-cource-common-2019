let isPalindrome = (number) => {
    let strNumber = String(number);
    let length = strNumber.length;
    for (let i = 0; i < length / 2; i++) {
        if (strNumber.charAt(i) !== strNumber.charAt(length - i - 1))
            return false;
    }
    return true;
};

let maxPalindrome = -Infinity;
for (let i = 999; i > 100; i--) {
    for (let j = 999; j > 100 ; j--) {
        if (i * j > maxPalindrome && isPalindrome(i * j))
            maxPalindrome = i * j;
    }
}
console.log(maxPalindrome);