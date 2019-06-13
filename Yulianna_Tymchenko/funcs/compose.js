const compose =(...func) => val => reduce((fn,x)=> fn(x), val, func);
