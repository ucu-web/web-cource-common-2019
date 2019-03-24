myArray = [-77777,2,4,1,1,2,9,-4,-1,7,33,45,12,56,-484];

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