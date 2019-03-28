function mergeSort(array, comparisonFunction) {
  if (array.length > 1) {
    let firstPart = array.slice(0, (array.length / 2) ^ 0),
      second_part = array.slice((array.length / 2) ^ 0);

    mergeSort(firstPart, comparisonFunction);
    mergeSort(second_part, comparisonFunction);

    merge(array, firstPart, second_part, comparisonFunction);
  }
}

function merge(destinationArray, first, second, comparisonFunction) {
  let firstArrayCounter = 0,
    secondArrayCounter = 0,
    totalAdded = 0;

  while (
    firstArrayCounter < first.length &&
    secondArrayCounter < second.length
  ) {
    if (
      comparisonFunction(first[firstArrayCounter], second[secondArrayCounter]) >
      0
    ) {
      destinationArray[totalAdded++] = second[secondArrayCounter++];
    } else {
      destinationArray[totalAdded++] = first[firstArrayCounter++];
    }
  }

  while (firstArrayCounter < first.length)
    destinationArray[totalAdded++] = first[firstArrayCounter++];
  while (secondArrayCounter < second.length)
    destinationArray[totalAdded++] = second[secondArrayCounter++];
}
