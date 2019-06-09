import Canvas from './Canvas.js';

const getRandomColor = () => {
    return "#" + ((1 << 24) * Math.random() | 0).toString(16);
};

const clamp = (min, max, num) => (num <= min ? min : num >= max ? max : num);

const distance = (x1, y1, x2, y2) => Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

const randomCoordinates = (canvas, radius) => ({
    x: clamp(radius, canvas.width - radius * 2, Math.random() * canvas.width),
    y: clamp(radius, canvas.height - radius * 2, Math.random() * canvas.height)
});

export {distance, randomCoordinates, getRandomColor};

const gameOne = new Canvas("main-canvas");
const gameSecond = new Canvas("second-canvas");