const curry = fn => (...args) => args.length === 0 ? fn(...args) : curry(fn.bind(null, ...args));


const add = curry((a, b) => Number(a) + Number(b));
const subtract = curry((a, b) => Number(a) - Number(b));
