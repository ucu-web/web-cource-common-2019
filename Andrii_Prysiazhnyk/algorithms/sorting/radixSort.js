// Works only for array of non negative numbers.
function radixSort(array) {
  let maxElement = Math.max(...array),
    divider = 1;

  while ((maxElement / divider) ^ (0 > 0)) {
    countingSortByOneDigit(array, divider);
    divider *= 10;
  }
}

function countingSortByOneDigit(array, divider) {
  let countingArray = new Array(10),
    sortedArray = new Array(array.length);
  countingArray.fill(0);

  for (let i = 0; i < array.length; ++i) {
    countingArray[((array[i] / divider) ^ 0) % 10]++;
  }

  for (let i = 1; i < 10; ++i) {
    countingArray[i] += countingArray[i - 1];
  }

  let digit;
  for (let i = array.length - 1; i >= 0; --i) {
    digit = ((array[i] / divider) ^ 0) % 10;
    sortedArray[--countingArray[digit]] = array[i];
  }

  for (let i = 0; i < array.length; ++i) {
    array[i] = sortedArray[i];
  }
}
