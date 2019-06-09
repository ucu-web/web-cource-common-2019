function filter(arr, filter_func) {
    const filter_arr = [];
    for(let i = 0; i < arr.length; i++) {
        const result = filter_func(arr[i], i, arr);
        if(result) filter_arr.push(arr[i]);
    }
    return filter_arr;
}

function map(arr, map_func) {
    const map_arr = [];
    for(let i = 0; i < arr.length; i++) {
        const result = map_func(arr[i], i, arr);
        map_arr.push(result);
    }
    return map_arr;
}

function reduce(arr, reducer, initial_value) {
    let accumulator = initial_value === undefined ? 1 : initial_value;
    for(let i = 0; i < arr.length; i++)
        accumulator = reducer(accumulator, arr[i], i, arr);
    return accumulator;
}

function flip(func) {
    return function() {
        return func(...Array.from(arguments).slice(0, 2).reverse(), ...Array.from(arguments).slice(2));
    }
}

let arr = [100, 201, 30, 4, 50];
console.log(arr);

const arr1 = filter(arr, num => num % 10 === 0);
console.log(arr1);

const arr2 = map(arr, num => num / 100);
console.log(arr2);

const arr3 = reduce(arr, (accumulator, currentValue) => accumulator * currentValue);
console.log(arr3);

flip(function (a, b, c, d) { console.log(a, b, c, d); })(1, 2, 3, 4);
