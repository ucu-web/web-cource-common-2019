let x_direction = 0;
let y_direction = 0;
let score = 0;
let level = 1;
let x_food = 0;
let y_food = 0;
let speed = 150;
let level_step = 50;
let score_step = 10;
let level_passed = 0;
const base_width = 20;
const base_height = 20;
const start_position = base_width * 4;
let snake = [{x: start_position, y: start_position}];
document.addEventListener("keydown", rotate);
let gameCanvas = document.getElementById("field_canvas");
let ctx = gameCanvas.getContext("2d");

main();

function main() {
    if (check_lose()) return;
    setTimeout(function onTick() {
        create_canvas();
        draw_food();
        snake_management();
        draw_snake();
        check_level();
        document.getElementById('score').innerHTML = score;
        document.getElementById('level').innerHTML = level;
        document.getElementById('speed').innerHTML = 160 - speed;
        main();
    }, speed)
}

function check_level() {
    if(score % level_step === 0 && score !== 0 && speed > 20 && level_passed === 0){
        level = level + 1;
        speed -= 10;
        level_passed = 1;
    }
}

function create_canvas() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
    ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
}

function check_lose() {
    for (let i = 4; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y)
            return true;
    }
    return false;
}

function draw_food() {
    ctx.fillStyle = "#EA2027";
    ctx.fillRect(x_food, y_food, base_width, base_height);
}


function snake_management() {
    if(snake[0].x < 0) {
        snake[0].x = gameCanvas.width;
    }
    if(snake[0].y < 0) {
        snake[0].y = gameCanvas.height;
    }
    const head = {
        x: (snake[0].x + x_direction) % gameCanvas.width,
        y: (snake[0].y + y_direction) % gameCanvas.height
    };
    snake.unshift(head);
    if (snake[0].x === x_food && snake[0].y === y_food) {
        score += score_step;
        place_food();
    } else {
        snake.pop();
    }
}

function random_place(min, max) {
    return Math.round((Math.random() * (max - min) + min) / base_width) * base_width;
}

function place_food() {
    x_food = random_place(0, gameCanvas.width - base_width);
    y_food = random_place(0, gameCanvas.height - base_height);
    snake.forEach(function isOnSnake(part) {
        if (part.x === x_food && part.y === y_food)
            place_food();
    });
    level_passed = 0;
}

function draw_snake() {
    snake.forEach(make_snake_body_part)
}

function make_snake_body_part(snakePart) {
    ctx.fillStyle = '#009432';
    ctx.fillRect(snakePart.x, snakePart.y, base_width, base_height);
}

function rotate(event) {
    const keyPressed = event.keyCode;
    const goingUp = y_direction === -base_height;
    const goingDown = y_direction === base_height;
    const goingRight = x_direction === base_width;
    const goingLeft = x_direction === -base_width;
    if (keyPressed === 37 && !goingRight) {
        x_direction = -base_width;
        y_direction = 0;
    }else if (keyPressed === 38 && !goingDown) {
        x_direction = 0;
        y_direction = -base_height;
    }else if (keyPressed === 39 && !goingLeft) {
        x_direction = base_width;
        y_direction = 0;
    }else if (keyPressed === 40 && !goingUp) {
        x_direction = 0;
        y_direction = base_height;
    }
}
