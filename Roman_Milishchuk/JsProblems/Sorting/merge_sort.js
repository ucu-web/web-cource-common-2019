function merge_sort(arr1, arr2) {
    merged = Array();
    let i = j = 0;
    while (i != arr1.length && j != arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i++]);
        } else {
            merged.push(arr2[j++]);
        }
    }
    while (i != arr1.length)
        merged.push(arr1[i++]);
    while (j != arr2.length)
        merged.push(arr2[j++]);
    return merged;
}

function merge_sort(arr) {
    if (arr.length < 2)
        return arr;
    let arr1 = merge_sort(arr.slice(0, arr.length / 2));
    let arr2 = merge_sort(arr.slice(arr.length / 2));

    return merge_sort(arr1, arr2);
}
