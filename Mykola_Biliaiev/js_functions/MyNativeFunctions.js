Array.prototype.myMap = function (f, i = 0) {
    this[i] = f(this[i]);
    return this.length === (i + 1) ? this : this.myMap(f, ++i);
};

Array.prototype.myFilter = function (f, i = 0) {
    f(this[i]) ? this.splice(i, 1) : null;
    return this.length === (i + 1) ? this : this.myFilter(f, ++i);
};




const map = (arr, f) => {
    const MappingThrough = (arr_new, i = 0) => arr.length === i ? arr_new : MappingThrough([...arr_new, f(arr[i])], ++i);
    return MappingThrough([])
};
const filter = (arr, f) => {
    const MappingThrough = (arr_new, i = 0) => arr.length === i ? arr_new : f(arr[i]) ? MappingThrough([...arr_new], ++i) : MappingThrough([...arr_new, arr[i]], ++i);
    return MappingThrough([])
}
const forEach = (arr, f) => {
    if (arr.length) {
        f(arr[0]);
        forEach(arr.slice(1), f)
    }
};


const reduce = (arr, reducer, initValue) => {

    const MappingThrough = (res, arr_inner) => arr_inner.length === 0 ? res : MappingThrough(reducer(res, arr_inner[0]), arr_inner.slice(1));
    return initValue === undefined ? MappingThrough(arr[0], arr.slice(1)) : MappingThrough(initValue, arr)
};

const compose = (...fns) => {
    return reduce(fns, (a, b) => x => (b(a(x))))
};


const carry = (fn) => {
    return function f1(...args) {
        return (args.length >= fn.length) ? fn(...args) : (...argsMore) => (f1(...args.concat(argsMore)))
    }
};


