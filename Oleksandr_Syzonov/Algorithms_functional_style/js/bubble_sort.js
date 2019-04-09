export function swap(arr, from, to) {
    let new_arr = [...arr],
        temp = new_arr[from];
    new_arr[from] = new_arr[to];
    new_arr[to] = temp;
    return new_arr;
}

export function conditional_swap(arr, index) {
    return arr[index] > arr[index + 1] ? swap(arr, index, index + 1) : arr
}

let bubble_iteration = function (array, start, end) {
    return start === end ? array : bubble_iteration(conditional_swap(array, start), start + 1, end);
};

let bubble_sort_helper = function (array, start, end) {
    return end === 1 ? array : bubble_sort_helper(bubble_iteration(array, start, end), start, end - 1);
};

let bubble_sort = function (array) {
    return bubble_sort_helper(array, 0, array.length - 1)
};