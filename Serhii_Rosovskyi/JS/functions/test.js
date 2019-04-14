const curry = fn => (...args) =>
    args.length  === fn.length ? fn(...args) : curry(fn.bind(null, ...args));

const reduce = (fn, accus, [head, ...tail]) =>
    tail.length !== 0 ? reduce(fn, fn(accus, head), tail) : fn(accus, head);

const filter = (fn, arr) => reduce((acc, el) => (fn(el) ? [...acc, el] : acc), [], arr);

const map = (fn, arr) => reduce((acc, el) => [...acc, fn(el)], [], arr);

const compose = (...fns) => value => reduce((fn, val) => fn(val), value, fns);

const pipe = () => (...fns) => value => reduce((fn, val) => fn(val), value, fns.reverse());

const isArray = a => Array.isArray(a);

const flatten = arr => reduce((a, y) => (isArray(y) ? [...a, ...flatten(y)] : [...a, y]), [], arr);

const flip = fn => (a, b, ...aros) => fn(b, a, ...aros);

const arr = [1, 2, 3, 4, 5];
console.log(map(a => a + 2, arr));
console.log(flatten([1, [[[[2, 3,]]]], [4]]));
console.log(filter(a => a > 3, arr));
console.log(flip(map)(arr, el => el +1));
console.log(reduce((acc, el) => acc * el, 1, arr));