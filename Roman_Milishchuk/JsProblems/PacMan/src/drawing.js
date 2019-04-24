const roundedRect = (ctx, x, y, width, height, radius) => {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.lineTo(x, y + height - radius);
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.lineTo(x + width - radius, y + height);
    ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
    ctx.lineTo(x + width, y + radius);
    ctx.arcTo(x + width, y, x + width - radius, y, radius);
    ctx.lineTo(x + radius, y);
    ctx.arcTo(x, y, x, y + radius, radius);
    ctx.stroke();
};

export const drawGhost = (ctx, x, y, width, height) => {
    y = y + height;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y - height / 2);
    ctx.bezierCurveTo(x, y - height * 1.7 / 2, x + width / 4, y - height, x + width / 2, y - height);
    ctx.bezierCurveTo(x + width, y - height, x + width, y - height / 2, x + width, y - height / 2);
    ctx.lineTo(x + width, y);
    ctx.lineTo(x, y);
    ctx.fill();
};

export const drawPacman = (ctx, x, y, width, height) => {
    y = y + height;
    ctx.beginPath();
    ctx.arc(x + width / 2, y - height / 2, width / 2, Math.PI / 7, -Math.PI / 7, false);
    ctx.lineTo(x + width / 2, y - width / 2);
    ctx.fill();
};

export const drawApple = (ctx, x, y, width, height) => {
    ctx.fillRect(x + width / 3, y + height / 3, width / 3, height / 3);
};

export const drawField = (ctx, field_size, cell_size) => {
    roundedRect(ctx, 0, 0, field_size, field_size, 15);
    roundedRect(ctx, cell_size / 4, cell_size / 4, field_size - cell_size / 2, field_size - cell_size / 2, 9);
};
