// Internal

_isArray = a => a != null && a.length >= 0 && Object.prototype.toString.call(a) === '[object Array]';

// Functions

const add = (a, b) => Number(a) + Number(b);
const addIndex = (arr) => arr.map((elem, i) => i + "-" + elem);
const adjust = (index, func, arr) => arr.map((elem, i) => index === i ? func(elem) : elem);
const clamp = (start, end, number) => number > end ? end : number < start ? start : number;
const concat = (a, b) => _isArray(a) && _isArray(b) ? a.concat(b) : a + b;
const divide = (a, b) => Number(a) / Number(b);
const drop = (index, a) => typeof a == "string" ? a.split("").filter((elem, i) => i >= index).join("") : a.filter((elem, i) => i >= index);
const dropLast = (index, a) => typeof a == "string" ? a.split("").filter((elem, i) => a.length - i > index).join("") : a.filter((elem, i) => a.length - i > index);
const toUpper = (str) => str.toUpperCase();