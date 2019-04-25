const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

const generatePopulation = (field, num) => {
    field[random(0, field.length)][random(0, field.length)] = 1;
    return num === 0 ? generatePopulation(field, num - 1) : true;
};

const draw = (ctx, cell_size, x, y) => ctx.fillRect(x * cell_size, y * cell_size, cell_size, cell_size);

const init = (field_size) => {
    let field = new Array(field_size).fill(0).map(() => new Array(field_size).fill(0));
    generatePopulation(field, 500);
    return field;
};

let canvas = document.getElementById("field");
let ctx = canvas.getContext("2d");
let field_size = 100;
let field = init(field_size);

field.map((a, y) => {
    a.map((v, x) => {
        if (v === 1) {
            draw(ctx, canvas.width / field_size, x, y);
        }
    })
});

const epoch = (field) => {
};

const calculate_cond = (field, x, y) => {
    let new_field = new Array(field_size).fill(0).map(() => new Array(field_size).fill(0));
    let coordinates = [-1, 0, 1];
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            // new_field =
        }
    }
};
