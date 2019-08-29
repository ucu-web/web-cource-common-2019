function loadImage(url) {
    return new Promise(resolve => {
        const image = new Image();
        image.addEventListener('load', () => {
            resolve(image);
        });
        image.src = url;
    });
}


class Marks{
  constructor(){
    this.player1 = 'player1';
    this.player2 = 'player2';
    this.bomb = 'bomb';
    this.empty = 'empty';
    this.destructive = 'destructive';
    this.undestructive = 'undestructive';
    this.fire = 'fire';
  }
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
  constructor(name, x, y){
    this.name = name;
    this.x = x;
    this.y = y;
    this.bombPower = 1;
    this.speed = 0.15;
    this.error = 2 * this.speed;
    this.alive = true;
  }

  actualX(){ return Math.round(this.x);}

  actualY(){ return Math.round(this.y);}

  move(marks, direction, field){
    // Can move vertically
    if ((Math.abs(this.x - this.actualX()) <= this.error) && ((direction == 'up') || (direction == 'down'))){
      this.x = this.actualX();
      if ((direction == 'up') && (field[Math.floor(this.y)][this.actualX()] == marks.empty)) this.y -= this.speed
      else if ((direction == 'down') && (field[Math.ceil(this.y)][this.actualX()] == marks.empty)) this.y += this.speed
    }
    // Can move horizontally
    if ((Math.abs(this.y - this.actualY()) <= this.error) && ((direction == 'right') || (direction == 'left'))){
      this.y = this.actualY();
      if ((direction == 'right') && (field[this.actualY()][Math.ceil(this.x)] == marks.empty)) this.x += this.speed
      else if ((direction == 'left') && (field[this.actualY()][Math.floor(this.x)] == marks.empty)) this.x -= this.speed;
    }
  }

  placeBomb(){
    return new Bomb(this.actualX(), this.actualY(), this.bombPower);
  }
}

class Bomb{
  constructor(x, y, power){
    this.timeLeft = 300;
    this.x = x;
    this.y = y;
    this.power = power;
  }

  checkState(players, field, marks){
    this.timeLeft -= 1;
    if (this.timeLeft == 50) this._fire(players, field, marks)
    else if (this.timeLeft == 0){
      this._cleanFire(field, marks);
      return true;
    };
    return false;
  }

  _burnCell(x, y, players, field, marks){
      players.forEach(player => {if ((player.actualX() == x) && (player.actualY() == y)) player.alive = false});
      if (field[y][x] != marks.empty){
        if (field[y][x] == marks.destructive) field[y][x] = marks.fire;
        return true;
      }
      field[y][x] = marks.fire;
      return false;

  }

  _fire(players, field, marks){
    this._burnCell(this.x, this.y, players, field, marks);
    for (let i = 1; i <= this.power; i++){
      if (this._burnCell(this.x + i, this.y, players, field, marks)) break;
    }
    for (let i = 1; i <= this.power; i++){
      if (this._burnCell(this.x - i, this.y, players, field, marks)) break;
    }
    for (let i = 1; i <= this.power; i++){
      if (this._burnCell(this.x, this.y + i, players, field, marks)) break;
    }
    for (let i = 1; i <= this.power; i++){
      if (this._burnCell(this.x, this.y - i, players, field, marks)) break;
    }
  }

  _cleanFire(field, marks){
    field[this.y][this.x] = marks.empty;
    let i = 1;
    while (field[this.y][this.x + i] == marks.fire){
      field[this.y][this.x + i] = marks.empty;
      i++;
    }
    i = 1;
    while (field[this.y][this.x - i] == marks.fire){
      field[this.y][this.x - i] = marks.empty;
      i++;
    }
    i = 1;
    while (field[this.y + i][this.x] == marks.fire){
      field[this.y + i][this.x] = marks.empty;
      i++;
    }
    i = 1;
    while (field[this.y - i][this.x] == marks.fire){
      field[this.y - i][this.x] = marks.empty;
      i++;
    }
  }
}


const canvas = document.getElementById("screen");
const context = canvas.getContext("2d");

var backgroundHeight = 20;
var backgroundWidth = 30;

marks = new Marks();
var field = new Field(backgroundHeight, backgroundWidth);
var bombs = new Array();

var player1 = new Player('player1', 1, 1);
var player2 = new Player('player2', backgroundWidth - 2, backgroundHeight - 2);
var players = [player1, player2];

document.addEventListener('keydown', (e) => {
  if (e.code === "ArrowUp")        player2.move(marks, 'up', field.field)
  else if (e.code === "ArrowDown") player2.move(marks, 'down', field.field)
  else if (e.code === 'ArrowLeft') player2.move(marks, 'left', field.field)
  else if (e.code === 'ArrowRight') player2.move(marks, 'right', field.field)
  else if (e.code === 'ShiftRight') bombs.push(player2.placeBomb())
  else if (e.code === 'KeyW') player1.move(marks, 'up', field.field)
  else if (e.code === 'KeyS') player1.move(marks, 'down', field.field)
  else if (e.code === 'KeyA') player1.move(marks, 'left', field.field)
  else if (e.code === 'KeyD') player1.move(marks, 'right', field.field)
  else if (e.code === 'ShiftLeft') bombs.push(player1.placeBomb())
});

loadImage("img/tileset.png")
.then(image => {
    const sprites = new SpriteSheet(image);
    sprites.defineTile(marks.destructive, 0, 0);
    sprites.defineTile(marks.empty, 3, 23);
    sprites.defineTile(marks.undestructive, 1, 0);
    sprites.defineTile(player1.name, 4, 21);
    sprites.defineTile(player2.name, 4, 27);
    sprites.defineTile(marks.bomb, 16, 18);
    sprites.defineTile(marks.fire, 3, 24);

    function update() {
        bombs = bombs.filter(el => !el.checkState(players, field.field, marks));
        drawBackground(field.field, context, sprites, backgroundHeight, backgroundWidth);
        players = players.filter(player => player.alive);
        players.forEach(player => sprites.drawTile(player.name, context, player.x, player.y));
        bombs.forEach(bomb => sprites.drawTile(marks.bomb, context, bomb.x, bomb.y));
        if (players.length == 1){
          document.getElementById("end_game_label").innerHTML = `You won, ${players[0].name}!`;
          return;
        } else if (players.length == 0){
          document.getElementById("end_game_label").innerHTML = 'Game over!';
          players.forEach(player => sprites.drawTile(marks.empty, context, player.x, player.y));
          return;
        }
        requestAnimationFrame(update);
    }
    update();
});
