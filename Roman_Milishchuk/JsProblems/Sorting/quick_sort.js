function partition(arr, p, r) {
    let x = arr[r], i = p - 1;
    for (let j = p; j < r; j++) {
        if (arr[j] < x) {
            i++;
            let tmp = arr[j];
            arr[j] = arr[i];
            arr[i] = tmp;
        }
    }
    let tmp = arr[r];
    arr[r] = arr[i + 1];
    arr[i + 1] = tmp;
    return i + 1;
}

function quick_sort(arr, p, r) {
    if (p == undefined) {
        p = 0;
        r = arr.length - 1;
    }
    if (p < r) {
        let q = partition(arr, p, r);
        quick_sort(arr, p, q - 1);
        quick_sort(arr, q + 1, r);
    }
}

function randomized_partition(arr, p, r) {
    let i = Math.floor(Math.random() * (r - p) + p);
    let tmp = arr[r];
    arr[r] = arr[i];
    arr[i] = tmp;
    return partition(arr, p, r);
}

function randomized_quick_sort(arr, p, r) {
    if (p == undefined) {
        p = 0;
        r = arr.length - 1;
    }
    if (p < r) {
        let q = randomized_partition(arr, p, r);
        randomized_quick_sort(arr, p, q - 1);
        randomized_quick_sort(arr, q + 1, r);
    }
}
