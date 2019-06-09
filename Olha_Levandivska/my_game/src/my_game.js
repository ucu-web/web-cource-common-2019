let canvas = document.getElementById("game");
let ctx = canvas.getContext('2d');

const size = 4;
var cornerRadius = 20;
ctx.lineWidth = 25;
var colorCell = '#249484';
var colorEmptyCell = 'transparent';
var colorText = '#1C333D';
var stileText = 'px Herculanum';
var moveSpeed = 10;

ctx.lineJoin = "round";
const width_field = canvas.width;
const height_field = canvas.height;
const width_cell = Math.trunc( 0.8*width_field/4);
const height_cell = Math.trunc( 0.8*height_field/4);
const hor_space = Math.trunc((width_field-(width_cell*size))/(size+1));
const diag_space = Math.trunc((height_field-(height_cell*size))/(size+1));
var empty = {row: size-1, col: size-1};
var cells = [];
var finish = false;


StartGame();
document.addEventListener("keypress", makeStep, true);


function StartGame() {
    createCells();
    drawAllCells();
}

function makeStep(event) {
    if (!finish) {
        if (event.key === 'w' || event.key === 87) {
            moveUp();
        } else if (event.key === 'd' || event.key === 68) {
            moveRight();
        } else if (event.key === 's' || event.key === 83) {
            moveDown();
        } else if (event.key === 'a' || event.key === 65) {
            moveLeft();
        }
        if (finishGame()){ finish = true;}
    }

}

function makeCell(row, coll, value) {
    this.value = value;
    this.x = (diag_space + width_cell) * coll + diag_space;
    this.y = (hor_space + height_cell) * row  + hor_space;
}

function createCells() {
    var i, j;
    var values =[];
    for (var k = 1; k <= size*size; k++){values.push(k)}
    for(i = 0; i < size; i++) {
        cells.push([]);
        for(j = 0; j < size; j++) {
            var valueIndex = getRandomInt(0, values.length-1);
            var my_c = new makeCell(i, j , values[valueIndex]);
            cells[i].push(my_c);
            values.splice(valueIndex, 1);
        }
    }
}

function drawCell(cur_cell) {
    ctx.beginPath();
    if (cur_cell.value !== size*size ) {
        ctx.fillStyle = colorCell;
        ctx.strokeStyle = colorCell;
        ctx.strokeRect(cur_cell.x + (cornerRadius/2), cur_cell.y + (cornerRadius/2), width_cell - cornerRadius, height_cell-cornerRadius);
        ctx.rect(cur_cell.x+(cornerRadius/2), cur_cell.y+(cornerRadius/2), width_cell-cornerRadius, height_cell-cornerRadius);
        ctx.fill();
        ctx.font = Math.trunc(width_cell*0.7) +  stileText;
        ctx.fillStyle = colorText;
        ctx.textAlign = 'center';
        ctx.fillText(cur_cell.value, cur_cell.x + width_cell/2, cur_cell.y + height_cell/2 + height_cell/7 );
    }
    else{
        ctx.strokeStyle = colorEmptyCell;
        ctx.fillStyle = colorEmptyCell;
        ctx.strokeRect(cur_cell.x + (cornerRadius/2), cur_cell.y + (cornerRadius/2), width_cell - cornerRadius, height_cell-cornerRadius);
        ctx.rect(cur_cell.x+(cornerRadius/2), cur_cell.y+(cornerRadius/2), width_cell-cornerRadius, height_cell-cornerRadius);
        ctx.fill();
    }
    ctx.closePath();

}

function drawAllCells() {
    ctx.clearRect(0,0, width_field, height_field);
    var i, j;
    for(i = 0; i < size; i++) {
        for(j = 0; j < size; j++) {
            drawCell(cells[i][j]);
        }
    }

}

function finishGame(){
    var cur_values = [-1];
    for (var i = 0; i < cells.length; i++) {
        for (var j = 0; j < cells.length; j++) {
            if (cur_values[cur_values.length-1] > cells[i][j].value) return false;
            cur_values.push(cells[i][j].value);
        }
    }
    alert("Congratulations, you won! :)");
    return true;
}

function moveDown(){
    if (empty.row  >  0) {
        swapPuzzleAtFieldCol(cells[empty.row-1][empty.col] , cells[empty.row][empty.col]);
        swapPuzzleAtArray(-1, 0);
        drawAllCells();
    }
}

function moveUp(){
    if (empty.row  <  size - 1) {
        swapPuzzleAtFieldCol(cells[empty.row+1][empty.col] , cells[empty.row][empty.col]);
        swapPuzzleAtArray(1, 0);
        drawAllCells();
    }
}

function moveRight(){
    if (empty.col > 0 ) {
        swapPuzzleAtFieldRow(cells[empty.row][empty.col - 1] , cells[empty.row][empty.col]);
        swapPuzzleAtArray(0, -1);
        drawAllCells();
    }
}

function moveLeft(){
    if (empty.col < size - 1) {
        swapPuzzleAtFieldRow(cells[empty.row][empty.col + 1] , cells[empty.row][empty.col]);
        swapPuzzleAtArray(0, 1);
        drawAllCells();
    }
}

function swapPuzzleAtArray(rowDirect, colDirect) {
    var empty_cell = cells[empty.row][empty.col];
    cells[empty.row][empty.col] = cells[empty.row + rowDirect][empty.col + colDirect];
    cells[empty.row + rowDirect][empty.col + colDirect] = empty_cell;
    empty.col+= colDirect;
    empty.row += rowDirect;
}

function movePuzzley(cur_cell, shift_y, final_posy){
    cur_cell.y += shift_y;
    drawAllCells();
    if (final_posy - cur_cell.y !== 0){
        setTimeout(movePuzzley, 10, cur_cell, shift_y, final_posy);
    }
}

function movePuzzlex(cur_cell, shift_x, final_posx){
    cur_cell.x += shift_x;
    drawAllCells();
    if (final_posx - cur_cell.x !== 0){
        setTimeout(movePuzzlex, 10, cur_cell, shift_x, final_posx);
    }
}

function swapPuzzleAtFieldRow(cur_puzzle, empty_puzzle){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var shift_x;
    if (empty_puzzle.x - cur_puzzle.x > 0) { shift_x = 1}
    else{shift_x = -1}
    var final_posx = empty_puzzle.x;
    empty_puzzle.x = cur_puzzle.x;
    shift_x *= moveSpeed;
    setTimeout(movePuzzlex, 10,cur_puzzle, shift_x, final_posx);
}

function swapPuzzleAtFieldCol(cur_puzzle, empty_puzzle){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var shift_y;
    if (empty_puzzle.y - cur_puzzle.y > 0) { shift_y = 1}
    else{shift_y = -1}
    var final_posy = empty_puzzle.y;
    empty_puzzle.y = cur_puzzle.y;
    shift_y *= moveSpeed;
    setTimeout(movePuzzley, 10,cur_puzzle, shift_y, final_posy);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
