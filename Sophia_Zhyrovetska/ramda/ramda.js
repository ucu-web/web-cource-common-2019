const curry = fn =>(...args) => args.length === fn.length ? fn(...args) : curry(fn.bind(null, ...args));
const add = curry((a, b) => Number(a) + Number(b));
const subtract = curry((a, b) => Number(a) - Number(b));
const multiply = curry((a, b) => Number(a) * Number(b));
const divide = curry((a, b) => Number(a) / Number(b));
const adjust = curry((ind, fn, array) => array.slice(0, ind).concat([fn(array.slice(ind, ind+1))]).concat(array.slice(ind+1)));
const filter = curry((pred, [head, ...tail]) => head === undefined ? [] : (pred(head) ? [head, ...filter(pred, tail)] : [...filter(pred, tail)]));
const map = curry((func, [head, ...tail]) => (head === undefined ? [] : [func(head), ...map(func, tail)]));
const all = curry((pred, array) => array.length === filter(pred, array).length);
const any = curry((pred, array) => filter(pred, array).length !== 0);
const none = curry((pred, array) => !any(pred, array));
const always = curry((val)=>()=>val);
const and = curry((a, b) => a && b);
const or = curry((a, b) => a || b);
const not = curry((a) => !a);
const toUpper = curry((str) => str.toUpperCase());
const toLower = curry((str) => str.toLowerCase());
const ap = curry(([fn, ...fns], applyX) => fn === undefined ? [] : map(fn, applyX).concat(...ap(fns, applyX)));
const append = curry((element, array) => array.concat([element]));
const apply = curry((fn, args) => fn.apply(this, args));
const applyTo = curry((val, fn) => fn(val));
const head = curry(a => a===''? '' : a[0]);
const tail = curry(a => a.slice(1));

//TESTING

//curry
const curriedAddFourNumbers = curry((a, b, c, d) => a + b + c + d);
const f = curriedAddFourNumbers(1, 2);
const g = f(3);
console.log(g(4));

// add
console.log(add(5, 6));
console.log(add(1)(2));

// subtract
console.log(subtract(15, 6));
console.log(subtract(1)(2));

// multiply                
console.log(multiply(5, 6));
console.log(multiply(1)(2));

// divide
console.log(divide(30, 6));
console.log(divide(1)(2));

//adjust
console.log(adjust(3, add(10), [1,2,3,4]));
console.log(adjust(3)(add(10), [1,2,3,4]));

//filter
console.log(filter(n=>n===3, [2,3,4,3,5,3]));
console.log(filter(n=>n===3)([2,3,4,3,5,3]));

//map
console.log(map(add(2), [1,2,3]));
console.log(map(add(2))([1,2,3]));

//all
console.log(all(n=>n===3, [2,3,4,3,5,3]));
console.log(all(n=>n===3)([3,3,3,3]));

//any
console.log(any(n=>n===3, [2,3,4,3,5,3]));
console.log(any(n=>n===3)([4,5,6]));

//none
console.log(none(n=>n===3, [2,3,4,3,5,3]));
console.log(none(n=>n===3)([5,6,7]));

//always
const t = always("Hello");
console.log(t());

//and
console.log(and(true, true));
console.log(and(true, false));
console.log(and()(true, false));
console.log(and(false)(false));

//or                               
console.log(or(true, true));
console.log(or(true, false));
console.log(or()(true, false));
console.log(or(false)(false));

//not
console.log(not(true));
console.log(not()(false));
console.log(not(0));
console.log(not()(1));

//toUpper
console.log(toUpper("abc"));

//toLower
console.log(toLower("aBc"));

//ap
console.log(ap([multiply(2), add(3)], [1,2,3]));
console.log(ap([toLower, toUpper], ['piZZa', 'sAlAd']));

//ap
console.log(ap([multiply(2), add(3)], [1,2,3,5,6,]));
console.log(ap([toLower, toUpper], ['piZZa', 'sAlAd']));

//append
console.log(append([2,2], [3,4,5]));
console.log(append(4)([3,4,5]));

//apply
console.log(apply(Math.max, [2,3,4,5]));
console.log(apply(Math.max)([2,3,4,5]));

//applyTo
console.log(applyTo(42)(add(1)));

//head
console.log(head(['fi', 'fo', 'fum']));
console.log(head([]));
console.log(head('abc'));
console.log(head(''));


//tail
console.log(tail([1, 2, 3]));
console.log(tail([1, 2]));
console.log(tail([1]));
console.log(tail([]));
console.log(tail('abc'));
console.log(tail('ab'));
console.log(tail('a'));
console.log(tail(''));