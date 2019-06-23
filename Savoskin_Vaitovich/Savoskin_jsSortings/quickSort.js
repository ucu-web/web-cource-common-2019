function partition(items, left, right) {
    while (left <= right) {
        while (items[left] < items[Math.floor((right + left) / 2)]) {
            left++;
        }
        while (items[right] > items[Math.floor((right + left) / 2)]) {
            right--;
        }
        (left <= right) && swap(items, left++, right--);
    }
    return left;
}
const swap = (arr, left , right) => {
    [arr[left], arr[right]] = [arr[right], arr[left]];
};
function quickSort(items, left = 0, right = items.length - 1) {
    if (items.length > 1) {
        let index = partition(items, left, right);
        (left < index - 1) && (quickSort(items, left, index - 1));
        (index < right) && quickSort(items, index, right);
    }
    return items;
}
console.log(quickSort([1,5,3,5,7,4,43,8,46,3,7,47,478]));