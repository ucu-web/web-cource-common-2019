// HELPER

const curryN = (numArgs, func) => {
    let result = (prevArgs, ...args) => {
        let newArgs = [];

        let i = 0;
        for (let prevArg of prevArgs) {
            if (prevArg === R.__ && args.length > i)
                newArgs.push(args[i++]);
            else
                newArgs.push(prevArg);
        }
        for (; i < args.length; ++i) {
            newArgs.push(args[i]);
        }

        return (newArgs.filter(a => a !== R.__).length >= numArgs) ?
            func(...newArgs) :
            result.bind(null, newArgs);
    };

    return result.bind(null, []);
};

const equals = (val1, val2) => typeof val1 === typeof val2 &&
    val1 instanceof Array ? val1.every((v, i) => equals(v, val2[i]), val1) :
    val1 instanceof Object ? everyObj((k, v) => equals(v, val2[k]), val1) :
    R.identical(val1, val2);

const callIf = (cond, f, v) => cond ? f(v) : v;
const s = start = (arr) => arr[0];
const e = end = (arr) => arr.filter((v, i) => i > 0);

const replaceFirst = (arr, value, replacement) => arr.length ?
    s(arr) === value ? [replacement, ...e(arr)] : [s(arr), ...replaceFirst(e(arr), value, replacement)] : [];

const subArray = (arr, startI, endI=Infinity) => arr.filter((v, i) => i >= startI && i < endI);
const subArrayBack = (arr, startI, endI=Infinity) =>
    arr.filter((v, i) => i < arr.length - startI && i >= arr.length - endI);

const zipObj = (arr) => arr.length > 0 ? {[start(arr)[0]]: start(arr)[1], ...zipObj(end(arr))} : {};

const mapObj = (func, obj) => zipObj(Object.keys(obj).map((key) => func(key, obj[key])));
const mapKeys = (func, obj) => mapObj((key, value) => [func(key), value], obj);
const mapValues = (func, obj) =>  mapObj((key, value) => [key, func(value)], obj);
const mapValuesRec = (func, obj) =>
    mapValues((v) => typeof v === "object" ? mapValuesRec(func, v) : func(v), obj);

const filterObj = (func, obj) => zipObj(Object.keys(obj)
    .filter(k => func(k, obj[k])).map(k => [k, obj[k]]));
const filterKeys = (func, obj) => filterObj((k) => func(k), obj);
const filterValues = (func, obj) => filterObj((k, v) => func(v), obj);

const everyObj = (func, obj) => Object.keys(obj).every(k => func(k, obj[k]));

const mapObjs = (func, o1, o2) => zipObj(Object.keys(o1).map((key) => func(key, o1[key], o2[key])));
const mapObjsRec = (func, o1, o2={}) =>
    mapObjs((k, v1, v2) => typeof v1 === "object" ? [k, mapObjsRec(func, v1, v2)] : func(k, v1, v2), o1, o2);

const containsWith = (cmp, arr, v) => arr.reduce((a, b) => a || cmp(b, v), false);
const contains = (arr, v) => containsWith(equals, arr, v);

const setWith = (cmp, arr, set=[]) => {
    arr.map(v => !containsWith(cmp, set, v) && set.push(v));
    return set;
};
const set = (arr) => setWith(equals, arr);

const applyIfPos = (func, val) => val >= 0 ? func(val) : val;
const indexOfWithPart = ([start, ...end], func) =>
    func(start) ? 0 : (end.length ? applyIfPos(x => x + 1, indexOfWith(end, func)) : -1);
const indexOfWith = (arr, func) => arr.length ? indexOfWithPart(arr, func) : -1;
const lastIndexOfWith = (arr, func) => applyIfPos(x => arr.length - x - 1, indexOfWith(arr.reverse(), func));

const arrayEq = (a, b) => a.length === b.length && a.length === a.filter((v, i) => v === b[i], 1).length;
const arrayEndsWith = (a, end) => (a.length < end.length) ? false : arrayEq(subArrayBack(a, 0, end.length), end);

const groupBy = (f, arr, acc={}) =>
    arr.length ? groupBy(f, e(arr), {...acc, [f(s(arr))]: [...(acc[f(s(arr))] || []), s(arr)]}) : acc;
const reduceBy = (f, arr, reducer, init, acc={}) => arr.length ?
    reduceBy(f, e(arr), reducer, init, {...acc, [f(s(arr))]: reducer(acc[f(s(arr))]||init(), s(arr))}) : acc;


const groupWith = (cmp, arr, acc=[]) => arr.length ? groupWith(cmp, e(arr),
    [...acc.filter(v => !cmp(v[0], s(arr))), [...(acc.filter(v => cmp(v[0], s(arr)))[0] || []), s(arr)]]) : acc;

/*
const reduceBy = (func, arr, reducer, init) => {
    let result = {};
    arr.forEach((value) => {
        let key = func(value);
        console.log(key, result);
        if (!result[key]) result[key] = init();
        result[key] = reducer(result[key], value);
    });
    return result;
};

const groupWith = (cmp, arr) => {
    let result = [];
    arr.forEach((val) => {
        let group = result[indexOfWith(result, (val2) => cmp(val2[0], val))];
        group ? group.push(val) : result.push([val]);
    });
    return result;
};
*/

// flatten up to 1 level
const joinArrays = (arr) => arr.length ?
    (([begin, ...end]) => (end.length === 0 ? [...begin] : [...begin, ...joinArrays(end)]))(arr) : [];


// RAMDA

const R = {};

R.__ = "__";

R.add = curryN(2, (x, y) => x + y);
R.addIndex = curryN(1, (iter) => curryN(2, (func, arr) => {
    let i = 0;
    return iter((...args) => func(...args, i++, arr), arr);
}));
R.adjust = curryN(3,(index, func, arr) => arr.map((v, i) => i === index ? func(v) : v));
R.all = curryN(2,(func, arr) => arr.reduce((a, b) => a && func(b), true));
R.allPass = curryN(1, funcs => (...args) => R.all((func) => func(...args), funcs));
R.always = curryN(1, (val) => () => val);
R.and = curryN(2, (x, y) => x && y);
R.any = curryN(2, (func, arr) => arr.reduce((a, b) => a || func(b), false));
R.anyPass = curryN(1, funcs => (...args) => R.any((func) => func(...args), func));
// what is going on here (acts like an S combinator: Sxyz = xz(yz))
R.ap = curryN(2, (funcs, arr) =>
    funcs instanceof Function ? (...args) => funcs(...args)(arr(...args)) :
    joinArrays(funcs.map(func => arr.map(func))));
const aperture = (num, [start, ...end]) => callIf(end.length !== num - 1,
    (val) => [...val, ...aperture(num, end)], [[start, ...subArray(end, 0, num - 1)]]);
R.aperture = curryN(2, (num, arr) => arr.length >= num ? aperture(num, arr) : []);
R.append = curryN(2, (value, arr) => [...arr, value]);
R.apply = curryN(2, (func, arr) => func(arr));
R.applySpec = curryN(1, (funcObj) =>
    (...args) => mapValuesRec((v) => v instanceof Function ? v(...args) : v, funcObj));
R.applyTo = curryN(2, (val, func) => func(val));
R.ascend = curryN(1, (key) => (a, b) => key(a) < key(b) ? -1 : key(b) > key(a) ? 1 : 0);
R.assoc = curryN(3, (key, value, obj) => ({...obj, [key]: value}));
// TODO should work with Arrays
const assocPath = ([start, ...end], value, obj) => end.length ?
    {...obj, [start]: assocPath(end, value, obj[start])} : {...obj, [start]: value};
R.assocPath = curryN(3, assocPath);
R.binary = curryN(1, (func) => (a, b) => func(a, b));
R.bind = curryN(2, (func, target) => func.bind(target));
R.both = curryN(2, (f, g) => f instanceof Function ?
    (...args) => f(...args) && g(...args) : R.lift(R.and)(f, g));
R.call = curryN(2, (f, ...args) => curryN(f.length, f)(...args));
const chain = (func, arr) => arr.length ? [...func(s(arr)), ...chain(func, e(arr))] : [];
R.chain = curryN(2, (f, g) => g instanceof Function ? curryN(1, (...args) => f(g(...args), ...args)) : chain(f, g));
R.clamp = curryN(3, (begin, end, value) => value > end ? end : value < begin ? begin : value);
R.clone = (value) => {
    if (!(value instanceof Object)) return value;
    if (value instanceof Function) return value;
    if (value instanceof Array) return value.map(R.clone);
    if (value instanceof String) return String(value);
    if (value instanceof Number) return Number(value);
    if (value instanceof Date) return new Date(value);
    if (value instanceof Boolean) return Boolean(value);
    if (value instanceof Object) {
        if (value.clone) return value.clone();
        return mapValues(R.clone, value);
    }
};
R.comparator = curryN(1, (func) => (a, b) => func(a, b) ? -1 : func(b, a) ? 1: 0);
R.complement = curryN(1, (func) => (...args) => !func(...args));
R.compose = (...funcs) => (...args) => funcs.reduceRight((a, func) => [func(...a)], args)[0];
R.concat = curryN(2,(a, b) => a instanceof Array ? [...a, ...b] : a + b);
const cond = (conds) => (...args) => conds.reduce((a, b) => a || (b[0](...args) && b[1](...args)));
R.cond = curryN(1, cond);
R.construct = curryN(1, (func) => (...args) => new func(...args));
R.converge = curryN(2, (conv, funcs) => (...args) => conv(...funcs.map(f => f(...args))));
R.countBy = curryN(2, (func, arr) => reduceBy(func, arr, (sum) => sum + 1, () => 0));
R.curry = curryN(1, (func) => curryN(func.length, func));
R.curryN = curryN(1, curryN);
R.dec = curryN(1, (val) => val - 1);
R.defaultTo = curryN(2, (def, val) => (Number.isNaN(val) || val === null || val === undefined) ? def : val);
R.descend = curryN(1, (key) => (a, b) => key(a) > key(b) ? -1 : key(a) < key(b) ? 1 : 0);
R.difference = curryN(2, (x, y) => set(x).filter(y.contains));
R.differenceWith = curryN(3, (cmp, x, y) => setWith(cmp, x).filter((v) => containsWith(cmp, y, v)));
R.dissoc = curryN(2, (key, obj) => filterKeys((k) => k !== key, obj));
const dissocPath = ([start, ...end], obj) => end.length ?
    {...obj, [start]: dissocPath(end, obj[start])} : filterKeys((k) => k !== start, obj);
R.dissocPath = curryN(2, dissocPath);
R.divide = curryN(2, (x, y) => x / y);
R.drop = curryN(2, (i, val) => val instanceof Array ? subArray(val, i) : val.substring(i));
R.dropLast = curryN(2, (i, val) =>
    val instanceof Array ? subArray(val, 0, val.length - i) : val.substring(0, val.length - i));
R.dropLastWhile = curryN(2, (func, arr) => R.dropWhile(func, arr.reverse()).reverse());
R.dropRepeats = curryN(1, (arr) => arr.filter((v, i, arr) => (i === 0 || arr[i - 1] !== v)));
R.dropRepeatsWith = curryN(1, (cmp, arr) => arr.filter((v, i, arr) => (i === 0 || !cmp(arr[i - 1], v))));
R.dropWhile = curryN(2, (func, arr) => arr.filter((v, i) => i >= indexOfWith(arr, R.not(func))));
R.either = curryN(2, (f, g) => f instanceof Function ?
    (...args) => f(...args) || g(...args) : R.lift(R.or)(f, g));
// R.empty
R.endsWith = curryN(2, (val, arr) => arr instanceof Array ? arrayEndsWith(arr, val) : arr.endsWith(val));
R.eqBy = curryN(3, (func, a, b) => R.equals(func(a), func(b)));
R.eqProps = curryN(3, (prop, a, b) => R.equals(a[prop], b[prop]));
R.equals = curryN(2, equals);
R.evolve = curryN(2, (trans, obj) => mapObjsRec((k, v1, v2) => [k, v2 ? v2(v1) : v1], obj, trans));
R.F = () => false;
R.filter = curryN(2, (func, arr) => arr instanceof Array ? arr.filter((v) => func(v)) : filterValues(func, arr));
R.find = curryN(2, (func, arr) => arr[indexOfWith(arr, func)]);
R.findIndex = curryN(2, (func, arr) => indexOfWith(arr, func));
R.findLast = curryN(2, (func, arr) => arr[lastIndexOfWith(arr, func)]);
R.findLastIndex = curryN(2, (func, arr) => lastIndexOfWith(arr, func));
const flatten = (arr) => arr.length ?
    s(arr) instanceof Array ? [...flatten(s(arr)), ...flatten(e(arr))] : [s(arr), ...flatten(e(arr))] : []
R.flatten = curryN(1, flatten); // or arr.flatten()
R.flip = curryN(1, (func) => (a, b, ...args) => func(b, a, ...args));
R.forEach = curryN(2, (func, arr) => arr.forEach((v) => func(v)));
R.forEachObjIndexed = curryN(2, (func, obj) => Object.keys(obj).forEach(k => func(obj[k], k, obj)));
R.fromPairs = curryN(2, zipObj);
R.groupBy = curryN(2, (func, arr) => groupBy(func, arr));
R.groupWith = curryN(2, groupWith);
R.gt = curryN(2, (a, b) => a > b);
R.gte = curryN(2, (a, b) => a >= b);
R.has = curryN(2, (key, obj) => obj.hasOwnProperty(key));
const hasPath = ([start, ...end], obj) =>
    end.length ? (obj[start] instanceof Object ? hasPath(end, obj[start]) : false) : obj.hasOwnProperty(start);
R.hasPath = curryN(2, (arr, obj) => (obj instanceof Object && arr.length) ? hasPath(arr, obj) : false);
R.head = curryN(1, (val) => val instanceof Array ? val[0] : val.charAt(0));
R.identical = curryN(2, (a, b) => (a === b) ? (a !== 0 || 1 / a === 1 / b) : (a !== a && b !== b));
R.identity = curryN(1, (val) => () => val);
R.ifElse = curryN(3, (cond, ifFunc, elseFunc) => (...args) => cond(...args) ? ifFunc(...args) : elseFunc(...args));
R.inc = curryN(1, (val) => val + 1);
R.includes = curryN(2, (val, arr) => contains(arr, val));
R.indexBy = curryN(2, (key, arr) => zipObj(arr.map((v) => [key(v), v])));
R.indexOf = curryN(2, (val, arr) => indexOfWith(arr, (val2) => equals(val, val2)));
R.init = curryN(1, (v) => v instanceof Array ? subArray(v, 0, v.length - 1) : v.substring(0, v.length - 1));
R.innerJoin = curryN(3, (pred, arr1, arr2) => arr1.filter(v => containsWith((v2) => pred(v, v2), arr2)));
const insertAll = (indx, val, arr) => [...arr.filter((v, i) => i < indx), ...val, ...arr.filter((v, i) => i >= indx)];
R.insert = curryN(3, (index, val, arr) => insertAll(index, [val], arr));
R.insertAll = curryN(3, (index, vals, arr) => insertAll(index, vals, arr));
R.intersection = curryN(2, (arr1, arr2) => set(arr1).filter(v => contains(arr2, v)));
const intersperse = (val, [start, ...end]) => end.length ? [start, val, ...intersperse(val, end)] : [start];
R.intersperse = curryN(2, (val, arr) => arr.length ? intersperse(val, arr) : []);
// R.into
R.invert = curryN(1, (obj) =>
    reduceBy((k) => obj[k], Object.keys(obj), (arr, k) => [...arr, k] , () => []));
R.invertObj = curryN(1, (obj) => mapObj((k, v) => [v, k], obj));
R.invoker = curryN(2, (numArgs, method) =>
    curryN(numArgs + 1, (...args) => args[args.length - 1][method](...subArray(args, 0, args.length - 1))));
R.is = curryN(2, (cls, obj) => obj !== null && obj instanceof cls);
R.isEmpty = curryN(1, (val) => (
    val instanceof String || typeof val === "string" || val instanceof Array) ? val.length > 0 :
    val instanceof Object ? Object.keys(val).length > 0 : false);
R.isNil = curryN(1, (val) => val === null || val === undefined);
R.join = curryN(2, (sep, arr) => arr.join(sep));
R.juxt = curryN(2, (funcs, ...args) => funcs.map(f => f(...args)));
R.keys = curryN(1, (obj) => [...Object.keys(obj)]);
// R.keysIn = curryN(1, obj => {let keys = []; for (let key in obj) keys.push(key); return keys; });
R.last = curryN(1, (arr) => arr[arr.length - 1]);
R.lastIndexOf = curryN(2, (val, arr) => lastIndexOfWith(arr, (val2) => equals(val, val2)));
R.length = (val) => val instanceof Array ? val.length : (val instanceof Object ? Object.keys(val).length : 1);
R.lens = curryN(2, (get, set) => ({get, set}));
R.lensIndex = curryN(1, (index) => ({get: R.nth(index), set: R.update(index) }));
R.lensPath = curryN(1, (path) => ({get: R.path(path), set: R.assocPath(path)} ));
R.lensProp = curryN(1, (key) => ({get: R.prop(key), set: obj => R.assoc(key) }));
const combinationsPart = ([start, ...end]) =>
    end.length ? joinArrays(start.map(v => combinations(end).map(v2 => [v, ...v2]))) : start.map(v => [v]);
const combinations = (arr) => arr.length ? combinationsPart(arr) : [];
const lift = (func, ...arr) => combinations(arr).map((values) => func(...values));
R.lift = curryN(2, lift);
R.liftN = curryN(2, (numArgs, func) => curryN(numArgs, (...arr) => lift(func, ...subArray(arr, 0, numArgs))));
R.lt = curryN(2, (a, b) => a < b);
R.lte = curryN(2, (a, b) => a <= b);
R.map = curryN(2, (func, val) => val instanceof Array ? val.map(func) : mapValues(func, val));
R.mapObjIndexed = curryN(2, (func, obj) => mapObj((k, v, o) => func(v, k, o), obj));
R.match = curryN(2, (regEx, str) => str.match(regEx));

R.negate = curryN(1, (val) => -val);
R.not = curryN(1, (func) => (...args) => !func(...args));
R.nth = curryN(2, (index, arr) => index < 0 ? arr[arr.length - index] : arr[index]);

R.over = curryN(3, (lens, func, obj) => lens.set(func(lens.get(obj)), obj));
const path = ([start, ...end], obj) =>
    obj instanceof Object ? (end.length ? path(end, obj[start]): obj[start] ) : undefined;
R.path = curryN(2, (arr, obj) => arr.length ? path(arr, obj) : undefined);
R.prop = curryN(2, (key, obj) => obj[key]);
R.propEq = curryN(3, (key, val, obj) => R.equals(obj[key], val));

R.reduce = curryN(3, (func, initialValue, arr) => arr.reduce(func, initialValue));

R.set = curryN(3, (lens, val, obj) => lens.set(val, obj));
R.sum = curryN(1, (arr) => arr.reduce((a, b) => a + b));

R.take = curryN(2, (num, val) => val instanceof Array ? subArray(val, 0, num) : val.substring(0, num));
R.toLower = curryN(1, (val) => (typeof val === "string" || val instanceof String) ? val.toLowerCase() : val);
R.toUpper = curryN(1, (val) => (typeof val === "string" || val instanceof String) ? val.toUpperCase() : val);

R.update = curryN(3, (index, val, arr) => { arr = [...arr]; arr[index] = val; return arr; });

R.view = curryN(2, (lens, obj) => lens.get(obj));

// export default R;
