const head = arr => arr[0];
const arrWithoutHead = arr => arr.slice(1);
const isEmpty = arr => arr.length === 0;
const copy = arr => arr.slice(0);
const isNull = arg => arg === null;
const isEnd = (arr, index) => arr.length - 1 === index;

// add
// addIndex

const adjust = (index, fn, arr) => {
    let newArr = copy(arr); newArr[index] = fn(copy(arr)[index]); return newArr};

console.log("\tAdjust");
console.log( adjust(1, x => x + 1, [1, 2, 3]) ); // [1, 3, 4]
console.log();

const all = fn => arr => isEmpty(arr) ? true : (fn(head(arr)) ? all(fn)(arrWithoutHead(arr)) : false);

console.log("\tAll");
console.log( all(x => x === 3)([3, 3, 3, 3]) ); // true
console.log( all(x => x === 3)([3, 3, 1, 3]) ); // false
console.log();

// allPass

const always = arg => () => arg;

console.log("\tAlways");
console.log( always("tea")() ); // tea
console.log();

const and = (arg1, arg2) => arg1 && arg2;

console.log("\tAnd");
console.log( and(true, false) ); // false
console.log( and(true, true) ); // true
console.log();

const any = fn => arr => isEmpty(arr) ? false : fn(head(arr)) ? true : all(fn)(arrWithoutHead(arr));

console.log("\tAny");
console.log( any(x => x === 3)([3, 3, 3, 3]) ); // true
console.log( any(x => x === 3)([3, 3, 1, 3]) ); // true
console.log( any(x => x === 3)([1, 0, -3, 8]) ); // false
console.log();

// anyPass
// ap
// aperture

const append = (val, arr) => {new_arr = copy(arr); new_arr.push(val); return new_arr};

console.log("\tAppend");
console.log( append('tests', ['write', 'more']) ); //=> ['write', 'more', 'tests']
console.log( append('tests', []) ); //=> ['tests']
console.log( append(['tests'], ['write', 'more']) ); //=> ['write', 'more', ['tests']]
console.log();

const apply = (fn, arr) => fn(...arr);

console.log("\tApply");
console.log(apply( Math.max, [1, 2, 3, -99, 42, 6, 7] ));
console.log(); // 42

// applySpec

const applyTo = val => fn => fn(val);

console.log("\tApplyTo");
console.log( applyTo(42)(x => x + 1) ); // 43

// ascend
// assoc
// assocPath
// binary
// bind
// both
// call
// chain
// clamp
// clone
// comparator
// complement
// compose
// composeK
// composeP
// composeWith

const concat = (arg1, arg2) => arg1 + arg2;

console.log("\tConcat");
console.log( concat('ABC', 'DEF') ); // 'ABCDEF'
console.log( concat([4, 5, 6], [1, 2, 3]) ); //=> [4, 5, 6, 1, 2, 3]
console.log( concat([], []) ); //=> []
console.log();

// cond
// construct
// constructN
// contains
// converge
// countBy
// curry
// curryN

const dec = val => --val;

console.log("\tDec");
console.log( dec(42) ); // 41
console.log();

// defaultTo
// descend
// difference
// differenceWith
// dissoc
// dissocPath
// divide
// drop
// dporLast
// dropLastWhile
// dropRepeats
// dropRepeatsWith
// dropWhile
// either
// empty
// endsWith
// eqBy
// eqProps

const equals = (arg1, arg2) => (typeof arg1 === "object") ? arg1.toString() === arg2.toString() : arg1 === arg2;

console.log("\tEquals");
console.log( equals(1, 1) ); //=> true
console.log( equals(1, '1') ); //=> false
console.log( equals([1, 2, 3], [1, 2, 3]) ); //=> true
console.log();

// evolve
const F = () => false;

const filter = (fn, arr, result=[]) => isEmpty(arr) ? result :
    filter(fn, arrWithoutHead(arr), fn(head(arr)) ? [head(arr), ...result] : filter(fn, result));

console.log("\tFilter");
console.log( filter(x => x % 2 === 0, [1, 2, 3, 4]) ); // [2, 4]
console.log();

const find = fn => (arr, index=0) => isEnd(arr, index) ? undefined :
    fn(arr[index]) ? index : find(fn)(arr, ++index);
console.log("\tFind");
console.log( find(x => x % 2 === 0 )([1, 2, 3, 4]) ); // 1
console.log( find(x => x % 2 === 0 )([1, 3, 5, 7]) ); // undefined
console.log();

// findIndex
// findLast
// findLastIndex
// flatten
// flip
// forEach
// forEachObjIndexed
// fromPairs
