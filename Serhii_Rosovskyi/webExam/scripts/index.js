let matrix = [[0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]];
let component = [];
let best = 0, score = 0;


document.getElementsByClassName('new-game__button')[0].addEventListener('click', function () {
    restoreField();
    init();
});

init();

function restoreField() {
    score = 0;
    document.getElementsByClassName('score__score-field')[0].innerHTML = score;
    matrix = [[0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]];
    component = [];
    document.getElementsByClassName(['tiles'])[0].remove();
    let tiles = document.createElement("div");
    tiles.classList.add('tiles');
    document.getElementsByClassName('Layout__container')[0].appendChild(tiles);

    let over = document.getElementsByClassName("over")[0];
    over.style.visibility = 'hidden';
    over.style.opacity = '0';
}

function random(min, max) {
    let x = Math.floor((Math.random() * max) + min);
    let y = Math.floor((Math.random() * max) + min);
    return {'x': x, 'y': y};
}

function getBlockNumber() {
    return (((Math.random() * 10) > 5) ? 4 : 2);
}

function init() {
    let i = 0;
    while (i < 2) {
        let coord = random(0, 4);

        if (matrix[coord['x']][coord['y']] === 0) {
            i++;
            matrix[coord['x']][coord['y']] = getBlockNumber();
            component.push({x: coord['x'], y: coord['y']});
            updateTile(12 * coord['x'], 12 * coord['y'], coord['x'], coord['y']);
            console.log(matrix);
        }
    }
}

function updateTile(trax, tray, x, y) {
    let row = document.getElementsByClassName('field__row_block')[x * 4 + y];
    let tile = document.createElement("div");
    tile.classList.add("tile", "tile-" + matrix[x][y], "tile-" + x + "-" + y + "");
    let tile_content = document.createElement("div");
    tile_content.classList.add('tile_content');
    let tile_span = document.createElement("span");
    tile_span.innerHTML = matrix[x][y];
    tile_content.appendChild(tile_span);
    tile.appendChild(tile_content);
    console.log(tile);
    row.appendChild(tile);
}

function moveDirection(code) {
    let change = 0;
    switch (code) {
        case 37:
            component.sort(function (a, b) {
                if (a.y < b.y) {
                    return -1;
                }
                if (a.y > b.y) {
                    return 1;
                }
                return 0;
            });
            change = move(0, -1);
            break;
        case 38:
            component.sort(function (a, b) {
                if (a.x < b.x) {
                    return -1;
                }
                if (a.x > b.x) {
                    return 1;
                }
                return 0;
            });
            change = move(-1, 0);
            break;
        case 39:
            component.sort(function (a, b) {
                if (a.x > b.x) {
                    return -1;
                }
                if (a.x < b.x) {
                    return 1;
                }
                return 0;
            });
            change = move(1, 0);
            break;
        case 40:
            component.sort(function (a, b) {
                if (a.y > b.y) {
                    return -1;
                }
                if (a.y < b.y) {
                    return 1;
                }
                return 0;
            });
            change = move(0, 1);
            break;
    }

    if (change > 0) {
        addTile();
    }

    if(checkDefeat()){
        let over = document.getElementsByClassName('over')[0];
        over.style.visibility = 'visible';
        over.style.opacity = '1';
    }
}

//
function checkDefeat(){
    if(component.length === 16){
        for(var i = 0; i < component.length; i++){
            for(var x = -1; x <= 1; x++){
                for(var y = -1; y <= 1; y++){
                    if(x !== y && Math.abs(x) !== Math.abs(y)){
                        if(isMovePossible(component[i].x, component[i].y, x, y, i)){
                            return false;
                        }
                    }
                }
            }
        }

        return true;
    }
}
//
// function won(){
//     $(".won").css("visibility", "visible").css("padding-top", "0px").css("opacity", 1);
// }
//

function addTile(){
    let i = 0;
    while(i < 1){
        let coord = random(0, 4);

        if(matrix[coord['x']][coord['y']] === 0){
            i++;
            matrix[coord['x']][coord['y']] = getBlockNumber();
            component.push({x: coord['x'], y: coord['y']});

            updateTile(12 * coord['x'], 12 * coord['y'], coord['x'], coord['y']);
        }
    }
}

function move(dx, dy) {
    let change = 0;
    for (let i = 0; i < component.length; i++) {
        while (isMovePossible(component[i].x, component[i].y, dx, dy, i)) {
            makeMove(component[i].x, component[i].y, dx, dy, i);
            change++;
            if (component[i].x !== -1 && component[i].y !== -1) {
                component[i].x += dx;
                component[i].y += dy;
            }
        }
    }
    checkTrash();
    return change;
}

function makeMove(x, y, dx, dy, i) {
    let newX = x + dx;
    let newY = y + dy;
    let newValue = matrix[x][y] + matrix[newX][newY];

    if (matrix[newX][newY] === matrix[x][y]) {
        component[i].x = -1;
        component[i].y = -1;
        score += newValue;
        document.getElementsByClassName("score__score-field")[0].innerHTML = score;
        // if (score > best) {
        //     best = score;
        //     $(".numbest").text(best);
        // }
    }

    matrix[newX][newY] = newValue;
    matrix[x][y] = 0;

    updateTile(12 * newX, 12 * newY, newX, newY);
    document.getElementsByClassName("tile-" + x + "-" + y +"")[0].remove();

    // if (newValue === 2048) {
    //     won();
    // }
}

function checkTrash() {
    for (let i = 0; i < component.length; i++) {
        if (component[i].x === -1 && component[i].y === -1) {
            component.splice(i, 1);
        }
    }
}

function isMovePossible(x, y, dx, dy, i) {
    let newX = x + dx;
    let newY = y + dy;

    if (newX < 4 && newX >= 0 && newY < 4 && newY >= 0) {
        if (matrix[newX][newY] === 0) {
            return true;
        } else if (matrix[newX][newY] === matrix[x][y]) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}


const onkeyup = (event) => {
    console.log(event.keyCode);
    switch (event.keyCode) {
        case 37:
            moveDirection(37);
            break;
        case 38:
            moveDirection(38);
            break;
        case 39:
            moveDirection(39);
            break;
        case 40:
            moveDirection(40);
            break;
    }
};

document.onkeyup = onkeyup;