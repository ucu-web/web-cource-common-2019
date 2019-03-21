"use strict";

// Bubble Sort

const bubbleSort = (arr) => {

    for (let i = 0; i < arr.length - 1; i++) {
        let swapped = false;

        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapped = true;
            }
        }

        if (!swapped) {
            break;
        }
    }

};

// Merge Sort

const mergeSort = (arr) => {

    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    mergeSortMain(arr, leftIndex, rightIndex);

};

const mergeSortMain = (arr, leftIndex, rightIndex) => {

    if (leftIndex < rightIndex) {
        let middleIndex = Math.floor(leftIndex + (rightIndex - 1) / 2);

        mergeSortMain(arr, leftIndex, middleIndex);
        mergeSortMain(arr, middleIndex + 1, rightIndex);

        merge(arr, leftIndex, middleIndex, rightIndex);
    }

};

const merge = (arr, leftIndex, middleIndex, rightIndex) => {

    let n1 = middleIndex - leftIndex + 1;
    let n2 = rightIndex - middleIndex;

    let left = new arr(n1);
    let right = new arr(n2);

    for (let i = 0; i < n1; i++) {
        left[i] = arr[leftIndex + i];
    }

    for (let j = 0; j < n2; j++) {
        right[j] = arr[middleIndex + 1 + j];
    }

    let i = 0;
    let j = 0;
    let k = leftIndex;

    while (i < n1 && j < n2) {
        if (left[i] <= right[j]) {
            arr[k] = left[i];
            i++;
        } else {
            arr[k] = right[j];
            j++;
        }
        k++;
    }

    while (i < n1)
    {
        arr[k] = left[i];
        i++;
        k++;
    }

    while (j < n2)
    {
        arr[k] = right[j];
        j++;
        k++;
    }

};

// Insertion Sort

const insertionSort = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j = j - 1;
        }

        arr[j+1] = key;
    }

};

// Quicksort

const quickSort = (arr) => {

    let low = 0;
    let high = arr.length - 1;

    quicksortMain(arr, low, high);

};

const quicksortMain = (arr, low, high) => {

    if (low < high) {
        let pi = partition(arr, low, high,);

        quicksortMain(arr, low, pi-1);
        quicksortMain(arr, pi+1, high);
    }

};

const partition = (arr, low, high) => {

    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    let temp = arr[i+1];
    arr[i+1] = arr[high];
    arr[high] = temp;

    return i+1;

};

// Random Quicksort

const randomQuicksort = (arr) => {

    let low = 0;
    let high = arr.length - 1;

    randomQuicksortMain(arr, low, high);

};

const randomQuicksortMain = (arr, low, high) => {

    if (low < high) {
        let pi = randomizedPartition(arr, low, high);

        randomQuicksortMain(arr, low, pi-1);
        randomQuicksortMain(arr, pi+1, high);
    }

};

const randomizedPartition = (arr, low , high) => {

    let randomIndex = Math.floor(Math.random()*(high-low+1)+low);

    let temp = arr[randomIndex];
    arr[randomIndex] = arr[high];
    arr[high] = temp;

    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    temp = arr[i+1];
    arr[i+1] = arr[high];
    arr[high] = temp;

    return i+1;

};

// Heapsort

const heapsort = (arr) => {

};

// Shell Sort

const shellSort = (arr) => {

};

// Selection Sort

const selectionSort = (arr) => {

    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;

        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        if (min !== i) {
            let temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }
    }

};

// Counting Sort

const countingSort = (arr) => {

};

// Radix Sort

const radixSort = (arr) => {

};

let arr = [1, 5, 8, 2, 3, 4, 7, 6, 9, 0];

let arrBubbleSort      = [...arr];
let arrMergeSort       = [...arr];
let arrInsertionSort   = [...arr];
let arrQuicksort       = [...arr];
let arrRandomQuicksort = [...arr];
let arrHeapsort        = [...arr];
let arrShellSort       = [...arr];
let arrSelectionSort   = [...arr];
let arrCountingSort    = [...arr];
let arrRadixSort       = [...arr];

console.log("Start Array: ", arr);
console.log("\n");

bubbleSort(arrBubbleSort);
// mergeSort(arrMergeSort);
insertionSort(arrInsertionSort);
quickSort(arrQuicksort);
randomQuicksort(arrRandomQuicksort);
heapsort(arrHeapsort);
shellSort(arrShellSort);
selectionSort(arrSelectionSort);
countingSort(arrCountingSort);
radixSort(arrRadixSort);

console.log("Bubble Sort: ", arrBubbleSort);
console.log("Merge Sort: ", arrMergeSort);
console.log("Insertion Sort: ", arrInsertionSort);
console.log("Quicksort: ", arrQuicksort);
console.log("Random Quicksort: ", arrRandomQuicksort);
console.log("Heapsort: ", arrHeapsort);
console.log("Shell Sort: ", arrShellSort);
console.log("Selection Sort: ", arrSelectionSort);
console.log("Counting Sort: ", arrCountingSort);
console.log("Radix Sort: ", arrRadixSort);