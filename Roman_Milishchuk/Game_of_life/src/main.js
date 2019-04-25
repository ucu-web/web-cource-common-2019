const generate_field_test = (generate_field, field_size) => {
    let field = generate_field(field_size);
    if (field.length !== field_size) {
        console.log("Error length");
    }
    field.map((v, i) => {
        if (v.length !== field_size) {
            console.log("Error length y");
        }
    });
    field.map((a, x) => {
        a.map((v, y) => {
            if (v !== 0) {
                console.log("Error not 0");
            }
        })
    });
    console.log("END");
};

const generate_life_test = (generate_life, field, num) => {
    if (num > field.length * field.length) {
        console.log("Invalid num");
    }
    let new_field = generate_life(field, num);
    let count = 0;
    for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field.length; j++) {
            count += field[i][j];
        }
    }
    if (count !== num) {
        console.log("Error num");
    }
};
const count_neighbours_test = (count_neighbours, field, x, y) => {
    let neighbours = count_neighbours(field, x, y);

    let count = 0;
    let coords = [-1, 0, 1];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let new_x = x + coords[i];
            let new_y = y + coords[j];
            if ((new_x > 0 && new_y > 0) && (new_x < field.length && new_y < field.length)) {
                count += (i !== 1 && j !== 1) ? field[new_x][new_y] : 0;
            }
        }
    }
    if (count !== neighbours) {
        console.log("Error number of neighbours");
    }
};

const new_field_test = (gen_new_field, field) => {
    let new_field = gen_new_field(field);

    field.map((a, x) => {
        a.map((v, y) => {
                let count = count_neighbours(field, x, y);
                if (count < 2 && new_field[x][y] === 1) {
                    console.log("Error: has to die");
                } else if (count < 4 && ((field[x][y] === 1 && new_field[x][y] === 1) || field[x][y] === 0)) {
                    console.log("Error: has to survive");
                } else if (count === 3 && ((field[x][y] === 0 && new_field[x][y] === 1) || field[x][y] === 1)) {
                    console.log("Error: should ressurect");
                } else if (count > 3 && ((field[x][y] === 1 && new_field[x][y] === 0) || field[x][y] === 0)) {
                    console.log("Error: should die");
                }
            }
        )
    })
};

const generate_field = (field_size) => {
    let arr = [];
    for (let i = 0; i < field_size; i++) {
        arr.push(new Array(field_size).fill(0));
    }
    console.log(arr);
    return arr;
};

const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

const generate_life = (field, num) => {
    for (let i = 0; i < num; i++) {
        let x = random(0, field.length - 1);
        let y = random(0, field.length - 1);
        while (field[x][y] !== 0) {
            let x = random(0, field.length - 1);
            let y = random(0, field.length - 1);
        }
        field[x][y] = 1;
    }
    return field;
};


const count_neighbours = (field, x, y) => {
    let number = 0;
    for (let i = x - 1; i <= x + 1; i++) {
        for (let j = y - 1; j <= y + 1; j++) {
            if (x < 0 || y < 0 || x > field.length - 1 || y > length - 1) {
                continue;
            }
            if (field[i][j] === 1) {
                number++;
            }
        }
    }
    return number - 1;
};


const new_field = (field) => {
    let new_field = generate_field(field.length);
    for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field[i].length; j++) {
            let neighbours = count_neighbours(field, i, j);
            if (neighbours < 2 && field[i][j] === 1) {
                new_field[i][j] = 0;
            } 
        }
    }
};


generate_field_test(generate_field, 5);
generate_life_test(generate_life, generate_field(5), 7);
count_neighbours_test(count_neighbours, generate_life(generate_field(5), 7), 2, 2);