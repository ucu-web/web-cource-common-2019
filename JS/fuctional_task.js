var a = [1,2,3,4,5,6,-2,1];

filter = (fn, arr) => {
    let res = [];
    if (arr.length==0) return res;
    if (fn(arr[0])) {
        res.push(arr[0]);
    }
    return res.concat(filter(fn, arr.slice(1)));
};

map = (fn, arr) => {
    let res = [];
    if (arr.length==0) return res;
    res.push(fn(arr[0]));
    return res.concat(map(fn, arr.slice(1)));
};

reduce = (fn, accum, arr) => {
    if (arr.length==0) return accum;
    return reduce(fn,fn(accum, arr[0]), arr.slice(1));
};

flip = (f) => {
    return (a,b, ...oth) => {f(b,a, ...oth)}
};

compose = (fns, a) => {
    return  fns.length === 0 ? a : compose(fns.slice(1),fns[0](a));
};

pipe = (fns, a) => {return fns.length === 0 ? a : compose(fns.slice(0, fns.length-1),fns[fns.length-1](a))};

curry = (fn) => {
    let arg_num = fn.length;
    return fn2 = (...args) => {
        if (args.length >= arg_num) {
            return fn(...args);
        } else {
            return (...moreArgs) => {
                let newArgs = args.concat(moreArgs);
                return fn2(...newArgs);
            }
        }
    }
};

flatten = (arr) => {
    if (arr.length===0) return arr;
   if (typeof (arr[0])==="object") {
       return flatten(arr[0]).concat(arr.slice(1))
   }
    return [arr[0]].concat(flatten(arr.slice(1)));
};


curry = (fn) => {
    return fn2 = (...args) => {
        if (args.length >= fn.length) {
            return fn(...args);
        } else {
            return (...moreArgs) => {
                return fn2(...args.concat(moreArgs));
            }
        }
    }
};