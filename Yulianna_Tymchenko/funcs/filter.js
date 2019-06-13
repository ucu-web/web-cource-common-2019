const filter = (fn, arr) => {
    return arr.length !== 0 ? fn(arr[0]) ? [arr[0]].concat(filter(fn, arr.slice(1))) : filter(fn, arr.slice(1)) : [];
};

a=[1,2,3];
console.log(filter( x => x>1, a));
