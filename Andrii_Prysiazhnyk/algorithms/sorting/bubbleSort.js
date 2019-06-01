const { cloneArray, getRandomArray, swap } = require("./lib");

function bubbleSort(array, comparisonFunction = (a, b) => a > b) {
  let sortedArray = cloneArray(array);
  let alreadySorted, i, j;

  for (i = sortedArray.length - 1; i > 0; --i) {
    alreadySorted = true;

    for (j = 0; j < i; ++j) {
      if (comparisonFunction(sortedArray[j], sortedArray[j + 1]) > 0) {
        swap(sortedArray, j, j + 1);
        alreadySorted = false;
      }
    }

    if (alreadySorted) return sortedArray;
  }

  return sortedArray;
}

const a = getRandomArray(10);
bubbleSort(a);
