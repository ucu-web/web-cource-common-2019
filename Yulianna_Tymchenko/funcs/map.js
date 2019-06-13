const map = (arr, fn) => arr.length !== 0 ? [fn(arr[0])].concat(map(arr.slice(1),fn)) : [];

a=[1,2,3];
console.log(map( a,x=> x-1));