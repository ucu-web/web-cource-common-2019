function selection_sort(array){
    array.forEach(function (el,inx) {
        if (el > Math.min(...array.slice(inx)))
            swap(array, inx,array.slice(inx).indexOf(Math.min(...array.slice(inx))) + inx);
    });
    return array;
}
const swap = (arr, left , right) => {
    [arr[left], arr[right]] = [arr[right], arr[left]];
};
console.log(selection_sort([11,4,6,2,8,2,4,5]))