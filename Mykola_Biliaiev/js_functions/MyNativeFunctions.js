const map = (arr, f) => reduce([], (a, b) => [...a, f(b)], arr);
const reduce = (initValue, reducer, [head, ...tail]) => tail.length !== 0 ? reduce(reducer(initValue, head), reducer, tail) : reducer(initValue, head);
const filter = (arr, f) => reduce([], (a, b) => f(b) ? [...a, b] : a, arr);
const compose = (...fns) => val => reduce(val, (a, b) => b(a), fns);
const carry = (fn) => function f1(...args) {
    return (args.length >= fn.length) ? fn(...args) : (...argsMore) => (f1(...args.concat(argsMore)))
};
const flip = (fn) => (a, b, ...rest) => fn(b, a, rest);
const flatten = (arr) => reduce([], (a, b) => (Array.isArray(b)) ? a.concat(flatten(b)) : [...a, b], arr);
const pipe = (...fns) => val => reduce(val, (a, b) => b(a), fns.reverse());
console.log("map test", map([1, 2, 3], x => x + 1));
console.log("filter test", filter([1, 2, 3], x => x === 1));
console.log("reduce test", reduce(0, (a, b) => a + b, [1, 2, 4]));
console.log("compose test", compose((x) => x + 1, (x) => x * 2)(2));
console.log("carry test", carry((a, b) => a + b)(4)(5));
console.log("flip test", flip((a, b) => a + b * 2)(4, 5));
console.log("flatten test", flatten([1, 2, [[5], 6, 7]]));
console.log("reduce test", reduce(0, (a, b) => a + b, [1, 2, 4]));
console.log("pipe test", pipe((x) => x + 1, (x) => x * 2)(2));