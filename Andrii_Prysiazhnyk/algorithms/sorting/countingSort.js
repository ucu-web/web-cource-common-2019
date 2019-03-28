// Works only for array of non negative numbers.
const { getRandomArray, cloneArray } = require("./lib");

function countingSort(array) {
  const sorterArray = cloneArray(array);

  if (sorterArray.length === 0) return;

  let countingArray = new Array(Math.max(...sorterArray) + 1);
  countingArray.fill(0);

  for (let i = 0; i < sorterArray.length; ++i) {
    countingArray[sorterArray[i]]++;
  }

  let totalAdded = 0;
  for (let i = 0; i < countingArray.length; ++i) {
    for (let j = 0; j < countingArray[i]; ++j) {
      sorterArray[totalAdded++] = i;
    }
  }

  return sorterArray;
}

const a = getRandomArray(10); /*?*/
countingSort(a); /*?*/
