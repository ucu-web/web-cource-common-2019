const swap_until = (arr, saved) => {
    arr.forEach(function (el, inx) {
        (inx != arr.length - 1) ? (arr[inx] = arr[inx + 1]) : arr[inx] = saved
    });
    return arr.reverse();
};
const bigger = (array,inx) => array[inx] > array[inx+1];
const sort = (array) =>{
    for (let i =0;  i< array.length; i++){
        array.forEach(function (el, inx) {
            bigger(array,inx) && (array = swap_until(array.slice(0,inx + 2).reverse(), array[inx + 1]).concat(array.slice(inx + 2)));
        });
    }
    return array;
};
console.log(sort([2,3,5,6,2,1]));