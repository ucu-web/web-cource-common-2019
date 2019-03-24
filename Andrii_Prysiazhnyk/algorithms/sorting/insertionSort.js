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
