const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};

const cloneArray = arr => arr.slice();

const getRandomArray = (n, min = 0, max = 100) =>
  new Array(n).fill(0).map(() => getRandomInt(min, max));

const swap = (array, firstIndex, secondIndex) => {
  const temporary = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temporary;
};

module.exports = { cloneArray, getRandomArray, swap };
