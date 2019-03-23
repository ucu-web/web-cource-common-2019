function bubbleSort(array, comparisonFunction) {
    let alreadySorted, i, j;

    for (i = array.length - 1; i > 0; --i) {
        alreadySorted = true;

        for (j = 0; j < i; ++j) {
            if (comparisonFunction(array[j], array[j + 1]) > 0) {
                swap(array, j, j + 1);
                alreadySorted = false;
            }
        }

        if (alreadySorted) break;
    }
}

function selectionSort(array, comparisonFunction) {
    let minElementIndex, i, j;

    for (i = 0; i < array.length - 1; ++i) {
        minElementIndex = i;

        for (j = i + 1; j < array.length; ++j) {
            if (comparisonFunction(array[minElementIndex], array[j]) > 0) {
                minElementIndex = j;
            }
        }

        swap(array, i, minElementIndex)
    }
}

function insertionSort(array, comparisonFunction) {
    let currentElement, i, j;

    for (i = 1; i < array.length; ++i) {
        currentElement = array[i];
        j = i - 1;

        while (j >= 0 && comparisonFunction(array[j], currentElement) > 0) {
            array[j + 1] = array[j];
            --j;
        }

        array[j + 1] = currentElement;
    }
}

function swap(array, first_index, second_index) {
    let temporary = array[first_index];
    array[first_index] = array[second_index];
    array[second_index] = temporary;
}

function mergeSort(array, comparisonFunction) {
    if (array.length > 1) {

    }
}

let arr = [5, -1, 7, 10, 3, -10];
insertionSort(arr, function (a, b) {
    return a - b;
});
console.log(arr);