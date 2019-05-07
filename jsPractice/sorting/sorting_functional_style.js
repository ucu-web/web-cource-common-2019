const swap = (a, i, j) => {
    [a[i], a[j]] = [a[j], a[i]];
};

const counting_sort = arr =>
    arr.reduce( (acc, v) => (acc[v] = (acc[v] || 0) + 1, acc), [] )
        .reduce( (acc, n, i) => acc.concat(Array(n).fill(i)), [] );




/*
function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}*/

let arr = [1,5,23,3];
swap(arr, 0,1);
console.log(arr);