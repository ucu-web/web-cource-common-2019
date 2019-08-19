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
                this.width * x,
                this.height * y,
                this.width,
                this.height,
                0,
                0,
                this.width,
                this.height);
        this.tiles.set(name, buffer);
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


const canvas = document.getElementById("screen");
const context = canvas.getContext("2d");

function drawBackground(background, context, sprites, height, width) {
  for (var y = 0; y < height; y++){
    for (var x = 0; x < width; x++){
      sprites.drawTile(background[y][x], context, x, y);
    }
  }
}

loadImage("img/tileset.png")
.then(image => {
    marks = new Marks();
    const sprites = new SpriteSheet(image);
    sprites.define(marks.destructive, 0, 0);
    sprites.define(marks.empty, 3, 23);
    sprites.define(marks.undestructive, 1, 0);
    var field = new Field(20, 20);
    drawBackground(field.field, context, sprites, 20, 20);
});
;
