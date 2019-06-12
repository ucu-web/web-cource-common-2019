import loadImage from "./loadImage"
import TileMap from "./TileMap";

function GameWindow(width, height) {

    this.fill = fill;
    this.loadImages = loadImages;
    this.printText = printText;
    this.drawImage = drawImage;
    this.drawTile = drawTile;
    this.createMap = createMap;
    this.isImagesLoaded = false;

    let canvas = createCanvas(width, height);
    const context = canvas.getContext('2d');
    let images = {};

    function createCanvas(width, height) {
        let elements = document.getElementsByTagName("canvas");
        let canvas = elements[0] || document.createElement('canvas');

        document.body.appendChild(canvas);
        canvas.width = width;
        canvas.height = height;
        return canvas;
    }

    function createMap(name, mapData, tileSet) {
        const mapImage = document.createElement("canvas");
        mapImage.width = mapData.width * mapData.tilewidth;
        mapImage.height= mapData.height * mapData.tileheight;
        const mapContext = mapImage.getContext('2d');
        let hitBoxes = [];
        let row, col;
        mapData.layers.forEach(layer => {
            if (layer.type === 'tilelayer') {
                [row, col] = [0, 0];
                layer.data.forEach(textureType => {
                    if (textureType > 0){
                        mapContext.drawImage(images[tileSet.imageName],
                            tileSet.getSourceX(textureType), tileSet.getSourceY(textureType),
                            mapData.tilewidth, mapData.tileheight,
                            col * mapData.tilewidth, row * mapData.tileheight,
                            mapData.tilewidth, mapData.tileheight
                        );}
                    col++;
                    if (col > (mapData.width - 1)) {
                        [col, row] = [0, row + 1];
                    }
                })
            }
            if (layer.type === 'objectgroup')
                hitBoxes.push(...layer.objects.map(obj => ({
                    x1: obj.x, x2: obj.x + obj.width, y1: obj.y, y2: obj.y + obj.height
                })))

        });
        images[name] = mapImage;
        return new TileMap(
            name,
            0,
            0,
            mapImage.width,
            mapImage.height,
            hitBoxes
        )
    }
    
    function fill(color) {
        context.fillStyle = color;
        context.fillRect(0, 0, width, height);
    }

    function loadImages(imageFiles) {
        Promise.all(
            Object
                .entries(imageFiles)
                .map(([key, value]) =>
                    loadImage(value).then((img) => images[key] = img)
                )
        ).then(() => this.isImagesLoaded = true)

    }

    function printText(x, y, text) {
        context.fillStyle = "#fff";
        context.font = "24px PT Mono";
        context.fillText(text, x, y);
    }

    function drawImage(x, y, imageName) {
        context.drawImage(images[imageName], x, y);
    }

    function drawTile(tile) {
        // console.log('Tile is', tile);
        context.drawImage(
            images[tile.imageName], tile.sourceX, tile.sourceY,
            tile.width, tile.height, tile.x, tile.y, tile.width, tile.height);
    }
}

export default GameWindow;
