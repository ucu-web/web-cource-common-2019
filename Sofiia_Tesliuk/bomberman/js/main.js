class Marks{
  constructor(){
    this.player1 = 'player1';
    this.player2 = 'player2';
    this.bomb = 'bomb';
    this.empty = 'empty';
    this.destructive = 'destructive';
    this.undestructive = 'undestructive';
  }
}

class Compositor {
    constructor() {
        this.layers = [];
    }

    draw(context) {
        this.layers.forEach(layer => {
            layer(context);
        });
    }
}

function createSpriteLayer(sprite, pos) {
    return function drawSpriteLayer(context) {
        sprite.draw('idle', context, pos.x, pos.y);
    };
}

class SpriteSheet {
    constructor(image, w = 16, h = 16) {
        this.image = image;
        this.width = w;
        this.height = h;
        this.tiles = new Map();
    }

    define(name, x, y) {
        const buffer = document.createElement('canvas');
        buffer.height = this.height;
        buffer.width = this.width;
        buffer
            .getContext('2d')
            .drawImage(
                this.image,
                x,
                y,
                this.width,
                this.height,
                0,
                0,
                this.width,
                this.height);
        this.tiles.set(name, buffer);
    }

    defineTile(name, x, y) {
    this.define(
        name,
        x * this.width,
        y * this.height,
        this.width,
        this.height);
    }

    draw(name, context, x, y) {
        const buffer = this.tiles.get(name);
        context.drawImage(buffer, x, y);
    }

    drawTile(name, context, x, y) {
        this.draw(name, context, x * this.width, y * this.height);
    }
}

function loadImage(url) {
    return new Promise(resolve => {
        const image = new Image();
        image.addEventListener('load', () => {
            resolve(image);
        });
        image.src = url;
    });
}

class Field{
  constructor(h, w){
    this.height = h;
    this.width = w;
    this.marks = new Marks();
    this.field = this._generateField();
    while (this._fieldIsValid(this.field)){
      this.field = this._generateField();
    }
  }

  _randomCell(){
    let v = Math.random();
    if (v < 0.2){
      return this.marks.undestructive;
    } else if (v < 0.6){
      return this.marks.destructive;
    } else{
      return this.marks.empty;
    }
  }

  // Checks if Player1 can reach Player2
  _fieldIsValid(field){
    let arr = new Array(this.height).fill(false).map((row) => new Array(this.width).fill(false));
    // Where Player1 starts
    arr[1][1] = true;
    for (let x = 2; x < this.width - 1; x++){
      arr[1][x] = arr[1][x - 1] && (field[1][x] != this.marks.undestructive);
    }
    for (let y = 2; y < this.height - 1; y++){
      for (let x = 1; x < this.width - 1; x++){
        arr[y][x] = (field[y][x] != this.marks.undestructive) &&
                    (arr[y][x - 1] || arr[y - 1][x]);
      }
    }
    // Player1 can reach Player2
    return arr[this.height - 1][this.width - 1];
  }

  _generateField(){
    let arr = new Array(this.height).fill(true).map((row) =>
    new Array(this.width).fill(true).map((cell) => this._randomCell()));

    // Undestructive borders
    for (let x = 0; x < this.width; x++){
      arr[0][x] = this.marks.undestructive;
      arr[this.height - 1][x] = this.marks.undestructive;
    }
    for (let y = 0; y < this.height; y++){
      arr[y][0] = this.marks.undestructive;
      arr[y][this.width - 1] = this.marks.undestructive;
    }

    // Empty cells for players initialization
    // Player 1
    arr[1][1] = this.marks.empty;
    arr[1][2] = this.marks.empty;
    arr[2][1] = this.marks.empty;

    // PLayer 2
    arr[this.height - 2][this.width - 2] = this.marks.empty;
    arr[this.height - 2][this.width - 3] = this.marks.empty;
    arr[this.height - 3][this.width - 2] = this.marks.empty;
    return arr;
  }
}

function drawBackground(background, context, sprites, height, width) {
  for (var y = 0; y < height; y++){
    for (var x = 0; x < width; x++){
      sprites.drawTile(background[y][x], context, x, y);
    }
  }
}

class Player{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.bombPower = 2;
    this.speed = 0.2;
    this.direction = 0;
  }

  actualX(){
    return Math.round(this.x);
  }

  actualY(){
    return Math.round(this.y);
  }

  move(direction, field){
      if (direction == 'up') this.y -= this.speed
      else if (direction == 'down') this.y += this.speed
      else if (direction == 'right') this.x += this.speed
      else if (direction == 'left') this.x -= this.speed;
  }
}

class Bomb{
  constructor(x, y, lifetime, power){
    this.timeLeft = lifetime;
    this.x = x;
    this.y = y;
  }

  nextTimeline(players, field){
    this.timeLeft -= 1;
    if (this.timeLeft == 0) this.fire(players, field);
  }

  fire(players, field){

  }
}


const canvas = document.getElementById("screen");
const context = canvas.getContext("2d");

marks = new Marks();
var field = new Field(20, 20);

var player1 = new Player(1, 1);
var player2 = new Player(19, 19);

document.addEventListener('keydown', (e) => {
  if (e.code === "ArrowUp")        player1.move('up', field.field)
  else if (e.code === "ArrowDown") player1.move('down', field.field)
  else if (e.code === 'ArrowLeft') player1.move('left', field.field)
  else if (e.code === 'ArrowRight') player1.move('right', field.field)
});

document.addEventListener('keyup', (e) => {
  if (e.code === "ArrowUp")        player1.move('up', field.field)
  else if (e.code === "ArrowDown") player1.move('down', field.field)
  else if (e.code === 'ArrowLeft') player1.move('left', field.field)
  else if (e.code === 'ArrowRight') player1.move('right', field.field)
});

loadImage("img/tileset.png")
.then(image => {
    const sprites = new SpriteSheet(image);
    sprites.defineTile(marks.destructive, 0, 0);
    sprites.defineTile(marks.empty, 3, 23);
    sprites.defineTile(marks.undestructive, 1, 0);
    sprites.defineTile(marks.player1, 4, 21);


    function update() {
        drawBackground(field.field, context, sprites, 20, 20);
        sprites.drawTile(marks.player1, context, player1.x, player1.y);
        requestAnimationFrame(update);
    }

    update();

});
