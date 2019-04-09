let curry = (func) => (...args) =>
    args.length === func.length ? func(args) : curry(func.bind(null, args));
let identical   = (a, b) => (a === b ||(a !== a && b !== b));
let isEmpty = (a) => (a[0] === undefined);
let head = (a) => (isEmpty(a) ? undefined : a[0]);
let not = (a) => (!a);
let negate = (a) => (-a);
function filter(arr, func, index = 0){
    return index === arr.length ? [] : func(arr[index]) ? [arr[index], ...filter(arr, func, index + 1)] : filter(arr, func, index + 1);
}
function map(arr, func, index = 0) {
    return index === arr.length ? [] : [func(arr[index]), ...map(arr,  func, index + 1)]
}
let none = (func, a) => (isEmpty(filter(a, func)));
