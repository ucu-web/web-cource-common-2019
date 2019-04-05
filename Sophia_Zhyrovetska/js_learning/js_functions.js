const map = (func, [head, ...tail]) => (head === undefined ? [] : [func(head), ...map(func, tail)]);

const filter = (func, [head, ...tail]) => head === undefined ? [] : (func(head) ? [head, ...filter(func, tail)] : [...filter(func, tail)]);

const reduce = (fn, accum, [head, ...tail]) => tail.length !== 0 ? reduce(fn, fn(accum, head), tail) : fn(accum, head);

const flatten = ([head, ...tail]) => head===undefined ?[] :Array.isArray(head)? [...flatten(head), ...flatten(tail)] : [head, ...flatten(tail)];

const compose = (...fns) => value => reduce((fn, val) => fn(val),value, fns);

const pipe = () => (...fns) => value => reduce((fn, val) => fn(val),value, fns.reverse());

const flip = func =>(a, b, ...args) => func(b, a, ...args);

const сurry = fn =>(...args) => args.length === fn.length ? fn(...args) : curry(fn.bind(null, ...args));
