const field = document.getElementById("Field");
const ctx = field.getContext("2d");

const gap = 100;
const gravity = 1.5;
const width_between_pillars = 100;
let lower_pillar_pos;
let birdX = 10;
let birdY = 150;
let score = 0;

const bird = new Image();
const background = new Image();
const ground = new Image();
const pillarUpper = new Image();
const pillarLower = new Image();

bird.src = "images/bird.png";
background.src = "images/background.png";
ground.src = "images/ground.png";
pillarUpper.src = "images/pillarUpper.png";
pillarLower.src = "images/pillarLower.png";

document.addEventListener("keydown", moveUp);

function moveUp(){
    birdY -= 25;
}

const pillars = [];

pillars[0] = {
    x : field.width,
    y : 0
};

const outer_edge_crash = (pillar_index) => (birdX + bird.width === pillars[pillar_index].x)&&(birdY>pillars[pillar_index].y+lower_pillar_pos || birdY + bird.height<pillars[pillar_index].y + pillarUpper.height);

const inside_gap_crash = (pillar_index) => ((birdY <= pillars[pillar_index].y + pillarUpper.height && birdY >= pillars[pillar_index].y + pillarUpper.height - 2) ||
    (birdY + bird.height >= pillars[pillar_index].y+lower_pillar_pos) && (birdY + bird.height <= pillars[pillar_index].y+lower_pillar_pos + 2)) && (birdX + bird.width > pillars[pillar_index].x && birdX < pillars[pillar_index].x + pillarUpper.width);

const ground_crash = () => birdY + bird.height >= field.height - ground.height && birdY + bird.height <= field.height - ground.height + 2;


function draw(){

    ctx.drawImage(background,0,0);


    for(let i = 0; i < pillars.length; i++){

        lower_pillar_pos = pillarUpper.height+gap;
        ctx.drawImage(pillarUpper,pillars[i].x,pillars[i].y);
        ctx.drawImage(pillarLower,pillars[i].x,pillars[i].y+lower_pillar_pos);

        pillars[i].x--;

        if( pillars[i].x === field.width - width_between_pillars - 2*pillarUpper.width){
            pillars.push({
                x : field.width,
                y : Math.floor(Math.random()*pillarUpper.height)-pillarUpper.height
            });
        }


        if (outer_edge_crash(i) || inside_gap_crash(i) || ground_crash()){
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
    ctx.font = "20px PT Verdana";
    ctx.fillText("Score : "+score,10,field.height-20);

    requestAnimationFrame(draw);

}

window.onload = function (){
    draw();
};


