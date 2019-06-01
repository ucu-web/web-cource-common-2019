const { swap } = require("./lib");
function randomizedQuickSort(array, comparisonFunction) {
  randomizedQuickSortWithBoundaries(
    array,
    comparisonFunction,
    0,
    array.length - 1
  );
}

function randomizedQuickSortWithBoundaries(
  array,
  comparisonFunction,
  start,
  end
) {
  if (start < end) {
    let correctPlacePosition = partition(array, comparisonFunction, start, end);

    randomizedQuickSortWithBoundaries(
      array,
      comparisonFunction,
      start,
      correctPlacePosition - 1
    );
    randomizedQuickSortWithBoundaries(
      array,
      comparisonFunction,
      correctPlacePosition + 1,
      end
    );
  }
}

function partition(array, comparisonFunction, start, end) {
  swap(array, end, ((Math.random() * (end - start + 1)) ^ 0) + start);
  let bound = start - 1,
    pivot = array[end];

  for (let i = start; i < end; ++i) {
    if (comparisonFunction(array[i], pivot) < 0) {
      swap(array, ++bound, i);
    }
  }

  swap(array, end, bound + 1);
  return bound + 1;
}
