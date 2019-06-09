const map = (arr, fn) =>
    reduce((acc, el) => fn(el), [], arr);

const filter = (fn, arr) =>
    reduce((acc, el) => (fn(el) ? [...acc, el] : acc), [], arr);

const flip = fn => function(first, second) {
    return fn.apply(null, [second, first].concat([].slice.call(arguments, 2)))
};

const reduce = (reducer, initialValue, [head, ...tail]) =>
    tail.length === 0 ? reducer(initialValue, head) : reduce(reducer, reducer(initialValue, head), tail);

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x, fns);
/*
const pipe = () => (...fns) =>
    value => reduce((fn, val) => fn(val), value, fns.reverse());
*/

const compose = () => (...fns) =>
    value => reduce((fn, val) => fn(val), value, fns);

const flatten = arr =>
    reduce((acc, val) =>
    Array.isArray(val) ? [...acc, ...flatten(val)] : [...acc, ...val], [], arr);

const curry2 = function (fn) {
    let len = fn.length;
    return function f1(...args) {
        if (args.length >= len) {
            return fn(...args)
        } else {
            return function f2(...moreArgs) {
                let args2 = args.concat(moreArgs);
                return f1(...args2);
            }
        }
    }
};

const curry = fn => (...args) => args.length === 0 ? fn(...args) : curry(fn.bind(null, ...args));

const summy = (acc, red) => acc + red;
let str = "bffff";
let arr = [2, 4, -4, -1, 20, -5];
const double = (x) => 2*x;
const positive = (x) => x > 0;
console.log(reduce(summy,0, arr));
let x = pipe(double, positive);
console.log(pipe(double, positive, double)(-2));
console.log(x(-3));
let ex = curry(summy);
// console.log(x(3)(5));
let y = compose( double, positive);
console.log(y(3));
let xyr = flip((a, b) => a**2 + 4*b);
console.log(xyr(1, 5));