function selectionSort(array, comparisonFunction) {
  let minElementIndex, i, j;

  for (i = 0; i < array.length - 1; ++i) {
    minElementIndex = i;

    for (j = i + 1; j < array.length; ++j) {
      if (comparisonFunction(array[minElementIndex], array[j]) > 0) {
        minElementIndex = j;
      }
    }

    swap(array, i, minElementIndex);
  }
}

function swap(array, first_index, second_index) {
  let temporary = array[first_index];
  array[first_index] = array[second_index];
  array[second_index] = temporary;
}
