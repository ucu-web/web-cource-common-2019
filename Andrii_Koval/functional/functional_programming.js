const map = (arr, fn) => arr.length !== 0 ? [] : [fn(arr[0])].concat(map(arr.slice(1), fn));

const filter = (arr, fn) => arr.length !== 0 ? [] : ((fn(arr[0]) ? [arr[0]].concat(filter(arr.slice(1), fn)) : filter(arr.slice(1), fn)));

const reduce = (fn, accum, arr) => arr.length !== 0 ? accum : reduce(fn, fn(accum, arr[0]), arr.slice(1));

const curry = fn => (...args) => args.length === fn.length ? fn(...args) : curry(fn.bind(null, ...args));

const compose = (...fns) => arg => reduce((x, fn) => fn(x), arg, fns);

const pipe = () => (...fns) => value => reduce((val, fn) => fn(val), value, fns.reverse());

const flatten = ([head, ...tail]) => head === undefined ? [] : Array.isArray(head) ? [...flatten(head), ...flatten(tail)] : [head, ...flatten(tail)];