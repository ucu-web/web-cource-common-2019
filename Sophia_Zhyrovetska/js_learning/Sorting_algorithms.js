myArray = [-77777,2,4,1,1,2,9,-4,-1,7,33,45,12,56,-484];

function randint(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function bubbleSort(array) {
    let swapped = true;
    while (swapped) {
        swapped = false;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                swapped = true;
            }
        }
    }
    return array
}

function selectionSort(array){
    for (let i = 0; i < array.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[min] > array[j]){
                min = j;
            }
        }
        [array[i], array[min]] = [array[min], array[i]]
    }
    return array
}

function insertionSort(array){
    for (let i = 0; i < array.length; i++) {
        let pivot = array[i];
        let j = i-1;
        while (j >= 0 && pivot < array[j]){
            array[j+1] = array[j--];
        }
        array[j + 1] = pivot;
    }
    return array
}

function merge(left, right){
    let left_index = 0;
    let right_index = 0;
    const result = [];
    while(left_index < left.length && right_index < right.length){
        if (left[left_index] < right[right_index]){
            result.push(left[left_index++]);
        }else {
            result.push(right[right_index++]);
        }
    }
    return result.concat(left.slice(left_index)).concat(right.slice(right_index));
}


function mergeSort(array){
    length = array.length;
    if (length <= 1) {
        return array;
    }else {
        const mid = Math.floor(length / 2);
        const left = mergeSort(array.slice(0, mid));
        const right = mergeSort(array.slice(mid));
        return merge(left, right);
    }
}

function shellSort(array) {
    let len = array.length;
    let h = 1;
    while (h < len / 3) {
        h = 3 * h + 1;
    }
    while (h >= 1) {
        for (let i = h;i < len;i++){
            let element = array[i];
            let j = i;
            while (j >= h && element < array[j - h]) {
                array[j] = array[j - h];
                j -= h;
            }
            array[j] = element;
        }
        h = Math.floor(h/3)  ;
    }
    return array
}

function quickSort(array) {
    function partition(array, l, r){
        const k = randint(l, r);
        [array[r], array[k]] = [array[k], array[r]];
        const q = array[r];
        let i = l - 1;
        for (let j = l; j < r ; j++) {
            if (array[j] <= q){
                [array[i + 1], array[j]] = [array[j], array[i + 1]];
                i++;
            }
        }
        [array[i + 1], array[r]] = [array[r], array[i + 1]];
        return i + 1;
    }
    function sort(array, l, r){
        if (r <= l) return;
        let j = partition(array, l, r);
        sort(array, l, j-1);
        sort(array, j+1, r);
    }
    sort(array, 0, array.length - 1);
    return array;
}
