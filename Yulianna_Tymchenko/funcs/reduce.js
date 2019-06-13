const reduce = (fn, accum, arr) => arr.length === 0 ? accum : reduce(fn, fn(accum, arr[0]), arr.slice(1));


a=[1,2,3];
console.log(reduce( (x,y) => x+y, 0, a));
