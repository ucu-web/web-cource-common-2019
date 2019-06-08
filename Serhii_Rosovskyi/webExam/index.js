let matrix = [[0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]];
let component = [];
let best = 0, score = 0;

document.getElementsByClassName('new-game__button')[0].addEventListener('click', function () {
    console.log('clicked');
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
        }
    }
}

function updateTile(trax, tray, x, y) {
    let tile = document.createElement("div");
    tile.classList.add("tile", "tile-" + matrix[x][y], "tile-" + x + "-" + y);
    tile.style.transform = trax + "vh, " + tray + "vh";
    let tile_content = document.createElement("div");
    tile_content.classList.add('tile_content');
    let tile_span = document.createElement("span");
    tile_span.innerHTML = matrix[x][y];
    tile_content.appendChild(tile_span);
    tile.appendChild(tile_content);
    document.getElementsByClassName("tiles")[0].appendChild(tile);
}