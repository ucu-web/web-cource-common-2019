let RANGE = 255;

function count_sort(arr) {
    let count = Array(RANGE);
    for (let i = 0; i < count.length; i++) {
        count[i] = 0;
    }
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]] += 1;
    }
    console.log(count);
    let i = 0, j = 0;
    while (j != count.length) {
        if (count[j] == 0) {
            j++;
            continue;
        }
        arr[i++] = j;
        count[j]--;
    }
    return arr;
}

arr = [5, 2, 3, 1, 2, 8, 0, 16];
console.log(arr);
count_sort(arr);
console.log(arr);
