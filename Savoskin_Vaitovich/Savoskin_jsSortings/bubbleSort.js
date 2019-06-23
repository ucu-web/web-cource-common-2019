const sort = (array) =>{
    const swap = (arr, i , j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    };
    const bigger = (inx) => array[inx] > array[inx+1];
    for (let i =0;  i< array.length; i++){
        array.forEach(function (el, inx) {
             bigger(inx) && swap(array, inx, inx + 1);
        });
    }
    return array;
};
console.log(sort([4,2,5,1,3,6]));