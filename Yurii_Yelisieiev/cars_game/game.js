let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let spawnRate = 300;

let fallRate = 0.50;

let lastSpawn = -1;

let killers = [];

let player = {
    x: 150,
    y: 110,
    speed: 3
};

let LEFT = false;
let RIGhT = false;

game();

function spawn_killer() {

    let object = {
        x: Math.random() * (canvas.width - 30) + 15,
        y: 0,
    };

    killers.push(object);
}


function fall() {

    let time = Date.now();
    if (time > (lastSpawn + spawnRate)) {
        lastSpawn = time;
        spawn_killer();
    }
    for (let i = 0; i < killers.length; i++) {
        let object = killers[i];
        //To many objects :=)
        if (object.y > 200) {
            killers.splice(killers.indexOf(object), 1);
            fallRate += 0.01;
            spawnRate -= 1;
            fallRate = Math.round(fallRate * 100)/100;
            spawnRate = Math.round(spawnRate * 100)/100;
        }
        object.y += fallRate;
        ctx.beginPath();
        ctx.arc(object.x, object.y, 2, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = "red";
        ctx.fill();
    }

}

function move_player(){
    place_player();
    move();
}

function  game() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if(check_failure()) {
        alert(`Your score is ${fallRate * 1000}`);
        return;
    }
    fall();
    move_player();
    requestAnimationFrame(game);
}

function check_failure(){
    for(let i= 0; i < killers.length; i++){
        if (killers[i].y > player.y - 6 && killers[i].y < player.y + 6 && Math.abs(player.x - killers[i].x) < 6){
            return true;
        }
    }
    return false;
}

function place_player(){
    ctx.beginPath();
    ctx.arc(player.x, player.y, 4, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = "blue";
    ctx.fill();
}

function move() {
    if (LEFT)
        player.x -= player.speed;
    if (RIGhT)
        player.x += player.speed;
}

document.onkeydown = function (e) {
    if (e.code === 'ArrowLeft')
        LEFT = true;
    if (e.code === 'ArrowRight')
        RIGhT = true;
};

document.onkeyup = function (e) {
    if (e.code === 'ArrowLeft')
        LEFT = false;
    if (e.code === 'ArrowRight')
        RIGhT = false;
};
