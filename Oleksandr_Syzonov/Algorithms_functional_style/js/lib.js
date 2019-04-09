function filter(arr, func, index = 0){
    return index === arr.length ? [] : func(arr[index]) ? [arr[index], ...filter(arr, func, index + 1)] : filter(arr, func, index + 1);
}
function map(arr, func, index = 0) {
    return index === arr.length ? [] : [func(arr[index]), ...map(arr,  func, index + 1)]
}

function reduce_recursive(array, index, func) {
    return index === array.length - 1 ? array[index] : func(array[index], reduce_recursive(array, index + 1, func))
}

function reduce(array, func, acum, index = 0) {
    return index === array.length - 1 ? array[index] : func(array[index], reduce(array,  func, index + 1))
}

function flip(func) {
    return (a, b, ...args) => (func(b, a, ...args));
}
function compose(index = 0, ...functions){
    return index === functions.length ? (...args) => (args) : functions[index](compose(index + 1, ...functions));
}
function pipe_recursive(index, ...functions) {
    return index === -1 ? (...args) => (args) : functions[index](compose_recursive(index - 1, ...functions));
}
function pipe(...functions){
    return pipe_recursive(functions.length - 1, ...functions);
}
let is_arr = (item) => (typeof item === "object");

function flatten(arr, index = 0){
    return index === arr.length - 1 ? is_arr(arr[index]) ? arr[index] : flatten(arr[index], 0) : is_arr(arr[index]) ? [flatten(arr[index], 0), ...flatten(arr, index + 1)] : [arr[index], ...flatten(arr, index + 1)]

}
let curry = (func) => (...args) =>
    args.length === func.length ? func(args) : curry(func.bind(null, args));
let arr = Array.from({length: 40}, () => Math.floor(Math.random() * 40));
let func = (num1) => (num1 > 20);
let arr_flatten = [[[[[[[[[[[[38]]]]]]]]]]]];
console.log(flatten(arr_flatten));
console.log(filter(arr, func));
console.log(typeof arr);