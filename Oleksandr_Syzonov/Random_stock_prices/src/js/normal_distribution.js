let Chance = require('chance');


export function generateNormal(n, mean, sd) {
    let chance = new Chance(),
        numbers = [];
    for(let  i = 0; i < n; i++){
        numbers.push(chance.normal({mean: mean, dev: sd}));
    }
    return numbers;
}

