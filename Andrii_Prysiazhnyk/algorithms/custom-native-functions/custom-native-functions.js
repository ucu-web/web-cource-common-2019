const map = (array, func) => {
    const mapElementwise = (outputArray, index = 0) => {
        return index === array.length ? outputArray : mapElementwise([...outputArray, func(array[index])], index + 1);
    };

    return mapElementwise([]);
};


const filter = (array, predicat) => {
    const filterElementwise = (outputArray, index = 0) => {
        return index === array.length ? outputArray : filterElementwise(predicat(array[index]) ?
            [...outputArray, array[index]] : outputArray, index + 1);
    };

    return filterElementwise([]);
};


const foreach = (array, func) => {
    if (array.length > 0) {
        func(array[0]);
        foreach(array.slice(1), func);
    }
};


const reduce = (array, func, initialValue) => {
    return initialValue === undefined ? reduce(array.slice(1), func, array[0]) : (array.length > 0 ?
        reduce(array.slice(1), func, func(initialValue, array[0])) : initialValue);
};


const compose = (...args) => {
    return reduce(args, (f, g) => x => f(g(x)));
};


const carry = (func) => {
    return function carried(...fixedArgs) {
        return fixedArgs.length === func.length ? func(...fixedArgs) : (...args) => carried(...fixedArgs.concat(args));
    }
};
