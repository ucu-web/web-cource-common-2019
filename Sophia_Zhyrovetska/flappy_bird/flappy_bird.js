let field = document.getElementById("Field");
let ctx = field.getContext("2d");



let bird = new Image();
let background = new Image();
let ground = new Image();
let pillarUpper = new Image();
let pillarLower = new Image();

bird.src = "images/bird.png";
background.src = "images/background.png";
ground.src = "images/ground.png";
pillarUpper.src = "images/pillarUpper.png";
pillarLower.src = "images/pillarLower.png";


let gap = 100;
let lpillar_pos;

let birdX = 10;
let birdY = 150;

let gravity = 1.5;
let score = 0;



document.addEventListener("keydown",moveUp);

function moveUp(){
    birdY -= 25;
}

let pillars = [];

pillars[0] = {
    x : field.width,
    y : 0
};


function draw(){

    ctx.drawImage(background,0,0);


    for(let i = 0; i < pillars.length; i++){

        lpillar_pos = pillarUpper.height+gap;
        ctx.drawImage(pillarUpper,pillars[i].x,pillars[i].y);
        ctx.drawImage(pillarLower,pillars[i].x,pillars[i].y+lpillar_pos);

        pillars[i].x--;

        if( pillars[i].x === 50 ){
            pillars.push({
                x : field.width,
                y : Math.floor(Math.random()*pillarUpper.height)-pillarUpper.height
            });
        };

        const outer_edge_crash = (birdX + bird.width === pillars[i].x)&&(birdY>pillars[i].y+lpillar_pos || birdY + bird.height<pillars[i].y + pillarUpper.height);

        const inside_gap_crash = ((birdY <= pillars[i].y + pillarUpper.height && birdY >= pillars[i].y + pillarUpper.height - 2) ||
            (birdY + bird.height >= pillars[i].y+lpillar_pos) && (birdY + bird.height <= pillars[i].y+lpillar_pos + 2)) && (birdX + bird.width > pillars[i].x && birdX < pillars[i].x + pillarUpper.width);
        
        if (outer_edge_crash || inside_gap_crash){
            location.reload();
        }

        if(pillars[i].x === 5){
            score++;

        }


    }

    ctx.drawImage(ground,0,field.height - ground.height);

    ctx.drawImage(bird,birdX,birdY);

    birdY += gravity;

    ctx.fillStyle = "#000";
    ctx.font = "20px Verdana";
    ctx.fillText("Score : "+score,10,field.height-20);

    requestAnimationFrame(draw);

}


window.onload = function (){
    draw();
};


