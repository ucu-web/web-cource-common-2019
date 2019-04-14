function swap(arr, fst, scnd) {
    let temp = arr[scnd];
    arr[scnd] = arr[fst];
    arr[fst] = temp;
}


function bubbleSort(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length - 1; j++) {
            if (numbers[j] > numbers[j + 1]) {
                swap(numbers, j + 1, j);
            }
        }
    }
    return numbers;
}


function selectionSort(numbers) {
    for (let i = 0; i < numbers.length - 1; i++) {
        let smallest = i;
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[j] < numbers[smallest]) {
                smallest = j;
            }
        }
        swap(numbers, smallest, i);
    }
}


function insertionSort(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let value = numbers[i];
        for (var j = i - 1; j > -1 && numbers[j] > value; j--) {
            numbers[j + 1] = numbers[j];
        }
        numbers[j + 1] = value;
    }
    return numbers;
}


function mergeSort(numbers) {
    if (numbers.length > 1) {
        let mid = Math.floor(numbers.length / 2);
        let left = numbers.slice(0, mid);
        let right = numbers.slice(mid);

        mergeSort(left);
        mergeSort(right);

        let i = 0, j = 0, k = 0;

        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                numbers[k] = left[i];
                i++;
            } else {
                numbers[k] = right[j];
                j++;
            }
            k++;
        }

        while (i < left.length) {
            numbers[k] = left[i];
            i++;
            k++;
        }

        while (j < right.length) {
            numbers[k] = right[j];
            j++;
            k++;
        }
    }
    return numbers;
}


function countingSort(arr, min, max)
{
    var i, z = 0, count = Array(max+1).fill(0);

    for (i=0; i < arr.length; i++) {
        count[arr[i]]++;
    }

    for (i = min; i <= max; i++) {
        while (count[i]-- > 0) {
            arr[z++] = i;
        }
    }
    return arr;
}


function partition(numbers, low, high) {
    let i = low - 1;
    let pivot = numbers[high];

    for (let j = low; j < high; j++) {
        if (numbers[j] <= pivot) {
            i++;
            swap(numbers, i, j);
        }
    }

    swap(numbers, i + 1, high);
    return i + 1;
}


function quickSort(numbers, low = 0, high = numbers.length - 1) {
    if (low < high) {
        let pi = partition(numbers, low, high);

        quickSort(numbers, low, pi - 1);
        quickSort(numbers, pi + 1, high);
    }
    return numbers;
}


function partition_r(numbers, low, high) {
    let random = Math.floor(Math.random() * (high - low)) + low;
    swap(numbers, random, high);

    return partition(numbers, low, high);
}


function randomizedQuickSort(numbers, low = 0, high = numbers.length - 1) {
    if (low < high) {
        let pi = partition(numbers, low, high);

        randomizedQuickSort(numbers, low, pi - 1);
        randomizedQuickSort(numbers, pi + 1, high);
    }
    return numbers;
}


var numbers = [1, 5, 2, 3, -2];
var sortedArray = randomizedQuickSort(numbers);
console.log(sortedArray);