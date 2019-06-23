function mergeSort (arr) {
    if (arr.length == 1)  return arr;
    return merge(
        mergeSort(arr.slice(0, Math.floor(arr.length / 2))),
        mergeSort(arr.slice(Math.floor(arr.length / 2)) )
    )
}

function merge (left, right) {
    let indexLeft = 0
    let indexRight = 0
    result = []

    while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft])
            indexLeft++
        } else {
            result.push(right[indexRight])
            indexRight++
        }
    }

    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}
console.log(mergeSort([2, 5, 1, 3, 7, 2, 3, 8, 6, 3]))