let curry = (func) => (...args) =>
    args.length === func.length ? func(args) : curry(func.bind(null, args));
let identical   = (a, b) => (a === b ||(a !== a && b !== b));
let isEmpty = (a) => (a[0] === undefined);
let head = (a) => (isEmpty(a) ? undefined : a[0]);
let not = (a) => (!a);
let negate = (a) => (-a);
