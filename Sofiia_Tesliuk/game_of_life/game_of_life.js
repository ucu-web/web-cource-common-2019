function generateField(height, width){
    return new Array(height).fill(true).map((row) => {return new Array(width).fill(true)});
}

function randomizeField(field){
    return field.map((row) => {return row.map((cell) => {return Math.round(Math.random())})})
}

function willSurvive(alive, numNeighbours){
    return (numNeighbours === 3) || (alive && (numNeighbours === 2));
}

function countNeighbours(field, i, j){
    let neighbours = 0;
    for (let k = Math.max(0, i - 1); k < Math.min(field.length, i + 1); k++){
        for (let l = Math.max(0, j - 1); l < Math.min(field[0].length, j + 1); l++){
            if (field[k][l]){neighbours++}
        }
    }
    return neighbours - field[i][j];
}

function nextIteration(field){
    return field.map((row, i) => row.map((cell, j) => willSurvive(field[i][j], countNeighbours(field, i, j))));
}

function preview(field){
    let concate = (x, y) => {return x + y};
    let cellHTML = (cell) => {alive_class = cell ? 'field__cell_alive' : 'field__cell_dead'; return '<div class="field__cell ' + alive_class + '"></div>'};
    console.log(field);
    return field.map((row) => row.map((cell) => cellHTML(cell)).reduce(concate)).reduce(concate);
    // return field.map((row) => row.map((cell) => cellHTML(cell)));
}


let field = generateField(50, 50);
field = randomizeField(field);
setInterval(() => {
    field = nextIteration(field);
    document.getElementById("field").innerHTML = preview(field);
    console.log(preview(field));
}, 100);
