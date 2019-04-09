import {swap} from "./bubble_sort.js";

function select_min_recursive(arr, start, min_ind) {
    return start === arr.length ? min_ind : arr[start] < arr[min_ind] ? select_min_recursive(arr, start + 1, start) :
        select_min_recursive(arr, start + 1, min_ind);
}

function select_min_ind(arr, start) {
    return select_min_recursive(arr, start + 1, start);
}

function min_ind_to_start(arr, start) {
    return swap(arr, select_min_ind(arr, start), start);
}

function selection_sort_recursive(arr, start) {
    return start === arr.length - 1 ? arr : selection_sort_recursive(min_ind_to_start(arr, start), start + 1);
}

function selection_sort(arr) {
    return selection_sort_recursive(arr, 0);
}

