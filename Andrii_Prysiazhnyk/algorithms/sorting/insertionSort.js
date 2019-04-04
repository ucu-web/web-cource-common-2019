const { getRandomArray, cloneArray } = require("./lib");

function insertionSort(array, comparisonFunction = (a, b) => a - b) {
  let sortedArray = cloneArray(array);

  let currentElement, i, j;

  for (i = 1; i < sortedArray.length; ++i) {
    currentElement = sortedArray[i];
    j = i - 1;

    while (j >= 0 && comparisonFunction(sortedArray[j], currentElement) > 0) {
      sortedArray[j + 1] = sortedArray[j];
      --j;
    }

    sortedArray[j + 1] = currentElement;
  }
  return sortedArray;
}

const a = getRandomArray(10); /*?*/
insertionSort(a); /*?*/
