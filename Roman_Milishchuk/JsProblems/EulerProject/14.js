let arr_len = Array(1000000000);
arr_len[1] = 1;

function len(n) {
    let l;
    if (arr_len[n] != undefined) {
        return arr_len[n];
    }
    if (n % 2 == 0) {
        l = len(n / 2) + 1;
    } else {
        l = len(3 * n + 1) + 1;
    }
    arr_len[n] = l;
    return l
}

let longest = 0;
let max = 0;
let i = 2;

while (i < 1000000) {
    l = len(i);
    if (l > longest) {
        max = i;
    }
}

console.log(len(i));