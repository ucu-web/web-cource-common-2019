function selection_sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        let tmp = arr[min];
        arr[min] = arr[i];
        arr[i] = tmp;
    }

    return arr;
}

function bubble_sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[j] < arr[j - 1]) {
                let tmp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = tmp;
            }
        }
    }
    return arr;
}

function insertion_sort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i;
        while (j != 0 && arr[j] < arr[j - 1]) {
            let tmp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = tmp;
            j--;
        }
    }
    return arr;
}
