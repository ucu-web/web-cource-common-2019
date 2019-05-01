const isEmpty = (arr) => !(arr.length);

const filter = (arr, fn) => isEmpty(arr) ? [] : ((fn(arr[0]) ? [arr[0]].concat(filter(arr.slice(1), fn)) : filter(arr.slice(1), fn)));

const map = (arr, fn) => isEmpty(arr) ? [] : [fn(arr[0])].concat(map(arr.slice(1), fn));

const reduce = (fn, accum, arr) => isEmpty(arr) ? accum : reduce(fn, fn(accum, arr[0]), arr.slice(1));

const compose = (...fns) => arg => reduce((x, fn) => fn(x), arg, fns);

const flip = func => (first, second, ...tail) => func(second, first, ...tail);

const pipe = () => (...fns) => value => reduce ((val, fn) => fn(val), value, fns.reverse());

const curry = fn => (...args) =>
    args.length === fn.length ? fn(...args) : curry(fn.bind(null, ...args));

const isArray = a => Array.isArray(a);

const flatten =  arr => () =>
    reduce((a, b) => (isArray(b) ? [...a, ...flatten(b)] : [...a, b]), [], arr);
