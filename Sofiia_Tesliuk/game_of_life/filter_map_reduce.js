function filter(predicate, arr){
    return ((arr.length > 0) && predicate(arr[0]) ? [arr[0]] : []).concat(arr.length > 1 ? filter(predicate, arr.slice(1)) : []);
}


function map(change, arr){
        return [change(arr[0])].concat(arr.length > 1 ? map(change, arr.slice(1)) : []);
}


function reduce(fn, accum, arr){
    return (arr.length === 1 ? fn(accum, arr[0]) : reduce(fn, fn(arr[0], accum), arr.slice(1)))
}


const my_arr = [2, -4, 7, 6, -5];
let pred = (x) => {return x > 0};
console.log(filter(pred, my_arr));

let chan = (x) => {return x*x};
console.log(map(chan, my_arr));

let fn = (x, y) => {return x + y};
console.log(reduce(fn, 0, my_arr));

