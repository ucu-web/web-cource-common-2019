const carry = (func) => {
    return function carried(...fixedArgs) {
        return fixedArgs.length === func.length ? func(...fixedArgs) : (...args) => carried(...fixedArgs.concat(args));
    }
};


console.log("Carry test", carry((a, b, c) => a + b + c)(1)(2)(3));


const map = carry((func, array) => {
    const mapElementwise = (output, index = 0) => {
        return index !== array.length ? mapElementwise([...output, func(array[index])], index + 1) : output;
    };

    return mapElementwise([]);
});


console.log("Map test", map((a) => 2 * a, [1, 2, 3, 4]));


const filter = carry((predicat, array) => {
    const filterElementwise = (output, index = 0) => {
        return index !== array.length ? filterElementwise(predicat(array[index]) ?
            [...output, array[index]] : output, index + 1) : output;
    };

    return filterElementwise([]);
});


console.log("Map test", filter((a) => a % 2 === 0, [1, 2, 3, 4]));


const reduce = carry((func, accumulator, array) => {
    return array.length > 0 ?
        reduce(func, func(accumulator, array[0]), array.slice(1)) : accumulator;
});


console.log("Reduce test", reduce((a, b) => a + b, 0, [1, 2, 3, 4]));


const compose = (...args) => {
    return reduce((f1, f2) => x => f1(f2(x)), (x) => x, args);
};


console.log("Compose test", compose((a) => a * 2, (a) => a + 1)(2));


const flatten = (array) => {
    let res = [];

    const fill = (element) => {
        if (element instanceof Array) {
            map(fill, element);
        } else {
            res.push(element)
        }
    };

    fill(array);

    return res;
};


console.log("Flatten test", flatten([1, [2, [3, [4, 5]], [6]]]));


const flip = (func) => (...args) => func(args[1], args[0], ...args.slice(2));


console.log("Flip test", flip((a, b, c) => 2 * a + b + c)(1, 2, 3));


const pipe = (...args) => compose(...args.reverse());


console.log("Pipe test", pipe((a) => 2 * a, (a) => a + 1)(1));