function map(change, arr){
    return [change(arr[0])].concat(arr.length > 1 ? map(change, arr.slice(1)) : []);
}


function reduce(fn, accum, arr){
    return (arr.length === 1 ? fn(accum, arr[0]) : reduce(fn, fn(arr[0], accum), arr.slice(1)))
}


function generateField(height, width){
    let field = [];
    for (let i = 0; i < height; i ++){
        field.push(new Array(width).fill(false));
    }
    return field;
}

function randomizeField(field){
    let newField = field;
    for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field[0].length; j++) {
            newField[i][j] = Math.round(Math.random());
        }
    }
    return newField;
}

function willSurvive(alive, numNeighbours){
    if (alive){
        return (numNeighbours >= 2) || (numNeighbours <= 3);
    } else{
        return numNeighbours === 3;
    }
}

function nextIteration(field){
    let height = field.length, width = field[0].length;
    let newField = generateField(height, width);
    for (let i = 0; i < height; i++){
        for (let j = 0; j < width; j++){
            let neighbours = 0;
            for (let k = Math.max(0, i - 1); k < Math.min(height, i + 1); k++){
                for (let l = Math.max(0, j - 1); l < Math.min(width, j + 1); l++){
                    if (field[k][l]){neighbours++}
                }
            }
            newField[i][j] = willSurvive(field[i][j], neighbours - field[i][j]);
        }
    }
    return newField;
}


let field = generateField(50, 50);
field = randomizeField(field);
let makeHTMLelement = (x) => {color = x ? 'white' : 'blue'; return '<div class="field__cell" style="background: ' + color + '"></div>'};
let makeHTMLrow = (x) => {return reduce((x, y) => {return x + y}, '', map(makeHTMLelement, x))};
console.log(field);
// document.getElementById("field").innerHTML = reduce((x, y) => {return x + y}, '', map(makeHTMLrow, field));
setInterval(() => {
    field = nextIteration(field);
    document.getElementById("field").innerHTML = reduce((x, y) => {return x + y}, '', map(makeHTMLrow, field));
}, 50);
