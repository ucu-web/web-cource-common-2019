// Internal

_isArray = a => a != null && a.length >= 0 && Object.prototype.toString.call(a) === '[object Array]';

// Functions

const add = (a, b) => Number(a) + Number(b);
const addIndex = (arr) => arr.map((elem, i) => i + "-" + elem);
const adjust = (index, func, arr) => arr.map((elem, i) => index === i ? func(elem) : elem);
const all = () => null;
const allPass = () => null;
const always = () => null;
const and = () => null;
const any = () => null;
const anyPass = () => null;
const ap = () => null;
const aperture = () => null;
const append = () => null;
const apply = () => null;
const applySpec = () => null;
const applyTo = () => null;
const ascend = () => null;
const assoc = () => null;
const assocPath = () => null;
const binary = () => null;
const bind = () => null;
const both = () => null ;
const call = () => null ;
const chain = () => null ;
const clamp = (start, end, number) => number > end ? end : number < start ? start : number;
const clone = () => null ;
const comparator = () => null ;
const complement = () => null ;
const compose = () => null ;
const composeK = () => null ;
const composeP = () => null ;
const composeWith = () => null ;
const concat = (a, b) => _isArray(a) && _isArray(b) ? a.concat(b) : a + b;
const cond = () => null ;
const construct = () => null ;
const constructN = () => null ;
const contains = () => null ;
const converge = () => null ;
const countBy = () => null ;
const curry = () => null ;
const curryN = () => null ;
const dec = (a) => a - 1;
const defaultTo = () => null ;
const descent = () => null ;
const difference = () => null ;
const differenceWith = () => null ;
const dissoc = (prop, object) => null;
const dissocPath = () => null ;
const divide = (a, b) => Number(a) / Number(b);
const drop = (index, a) => typeof a == "string" ? a.split("").filter((elem, i) => i >= index).join("") : a.filter((elem, i) => i >= index);
const dropLast = (index, a) => typeof a == "string" ? a.split("").filter((elem, i) => a.length - i > index).join("") : a.filter((elem, i) => a.length - i > index);
const toUpper = (str) => str.toUpperCase();