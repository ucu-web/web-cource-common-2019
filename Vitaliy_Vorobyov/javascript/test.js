a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
b = [1, 2, [4, 5, 6, [7], 8], 9, [10]];
obj = {'name': 'Vitaliy'};

toSquare = (a) => {
    return a**2;
};
greaterThenFive = (a) => {
    return a > 5;
};
toUpperCase = (x) => { return x.toUpperCase()};
getName = (x) => { return x.name };
trimTo4 = (x) => { return x.slice(0, 4) };
multiplyBy = (arr, a) => {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr[i] = arr[i] * a;
    }

    return newArr;
};

newReduce = (func, accum, arr) => { if (arr.length === 0) {return accum} else {return newReduce(func, func(accum, arr[0]), arr.slice(1))}};
newMap = (func, arr) => {let newArr = []; if (arr.length === 0) { return newArr } else {newArr.push(func(arr[0])); return newArr.concat(newMap(func, arr.slice(1)))}};
newFilter = (func, arr) => { let newArr = []; if (arr.length === 0) { return newArr } else { func(arr[0]) ? newArr.push(arr[0]) : null; return newArr.concat(newFilter(func, arr.slice(1)));}};
newPipe = (...fns) => (x) => { return fns.reduce((v, f) => f(v), x) };
newCompose = (...fns) => (x) => { return fns.reverse().reduce((v, f) => f(v), x) };
newFlip = (func) => { return newFunc = (b, a, ...fns) => {return func(a, b, ...fns) }};
newFlatten = (arr) => {  };
newCurry = fn => (...args) => { args.length === fn.length ? fn(...args) : newCurry(fn.bind(null, ...args)) };



// Flip
console.log("Flip");
console.log(a);
console.log(multiplyBy(a, 2));
console.log(newFlip(multiplyBy)(2, a));
console.log();

// Map
console.log("Map");
console.log(a);
console.log(newMap(toSquare, a));
console.log();

// Filter
console.log("Filter");
console.log(a);
console.log(newFilter(greaterThenFive, a));
console.log();

// Pipe
console.log("Pipe");
console.log(newPipe(
    getName,
    toUpperCase,
    trimTo4
) (obj));
console.log();

// Compose
console.log("Compose");
console.log(newCompose(
    trimTo4,
    toUpperCase,
    getName
) (obj));
console.log();

// Flatten
console.log("Flatten");
console.log(b);
console.log(newFlatten(b));
console.log();