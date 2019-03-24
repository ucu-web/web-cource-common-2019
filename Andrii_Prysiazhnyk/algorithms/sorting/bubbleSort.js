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

function swap(array, first_index, second_index) {
    let temporary = array[first_index];
    array[first_index] = array[second_index];
    array[second_index] = temporary;
}
