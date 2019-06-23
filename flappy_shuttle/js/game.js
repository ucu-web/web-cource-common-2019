var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

// Initializing images
var shuttle = new Image();
var background = new Image();
var footer = new Image();
var upperColumn = new Image();
var lowerColumn = new Image();

shuttle.src = "img/shuttle.png";
background.src = "img/background.png";
footer.src = "img/footer.png";
upperColumn.src = "img/upperColumn.png";
lowerColumn.src = "img/lowerColumn.png";

// Initializing audio
var jump = new Audio();
var score_audio = new Audio();

jump.src = "audio/jump.mp3";
score_audio.src = "audio/score.mp3";

var interval = setInterval(draw, 10);

var gap = 100; // gap between columns to jump through, can be game mode

// to jump
document.addEventListener("keydown", moveUp);

function moveUp() {
    yPos -= 30;   // jump up to n pixels (30), can be game mode
    jump.play();
}

var column = [];

column[0] = {
    x : cvs.width,
    y : 0
}

var score = 0;

// shuttle initial position
var xPos = 10;
var yPos = 150;

// shuttle go down
var gravity = 1.5;

function draw() {
    ctx.drawImage(background, 0, 0);

    for(var i = 0; i < column.length; i++) {
        ctx.drawImage(upperColumn, column[i].x, column[i].y);
        ctx.drawImage(lowerColumn, column[i].x, column[i].y + upperColumn.height + gap);

        column[i].x--;

        // Adding new columns
        if(column[i].x == 135) {
            column.push({
                x : cvs.width,
                y : Math.floor(Math.random() * upperColumn.height) - upperColumn.height
            });
        }

        //  Check collision
        if(xPos + shuttle.width >= column[i].x
            && xPos <= column[i].x + upperColumn.width
            && (yPos <= column[i].y + upperColumn.height
                || yPos + shuttle.height >= column[i].y + upperColumn.height + gap)
                || yPos + shuttle.height >= cvs.height - footer.height) {   // check collision withfooter
            location.reload();
            clearInterval(interval);
        }

        if(column[i].x == 5) {
            score++;
            score_audio.play();
        }
    }

    ctx.drawImage(footer, 0, cvs.height - footer.height);
    ctx.drawImage(shuttle, xPos, yPos);

    yPos += gravity;

    ctx.fillStyle = "#dd3838";
    ctx.font = "44px Space Mono";
    ctx.fillText("Score: " + score, 30, cvs.height - 40);

    requestAnimationFrame(draw);
}

lowerColumn.onload = draw;