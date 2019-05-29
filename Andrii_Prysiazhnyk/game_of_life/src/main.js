const generate_field = (field_size) => {
    return new Array(field_size).fill(0).map(
        () => new Array(field_size).fill(0).map(
            () => Math.random() < 0.5 ? 0 : 1));
};

const check_neighbor = (field, row, column) => {
    return (row >= 0 && row < field.length && column >= 0 && column < field.length) ? field[row][column] : 0;
};

const neighbors_amount = (field, row, column) => {
    let a = [-1, 0, 1], result = 0;
    a.map((v_1) => {
        a.map((v_2) => {
            result += check_neighbor(field, row + v_1, column + v_2);
        })
    });
    return result - field[row][column];
};

const get_next_state = (field, row, col) => {
    const n_neighbors = neighbors_amount(field, row, col);
    console.log(n_neighbors);
    return field[row][col] ? ((n_neighbors < 2) || n_neighbors >= 4 ? 0 : 1) : (n_neighbors === 3 ? 1 : 0);
};

const get_next_field = (field) => {
    return field.map((v, i) => {
        return v.map((v_1, j) => {
            return get_next_state(field, i, j);
        })
    });
};

const get_modifier = (number) => {
    return number ? "alive" : "dead";
};

const render = (field) => {
    return field.map((array) => {
        return array.map((number) => {
            return `<div class="Cell Cell__${get_modifier(number)}"></div>`
        }).join("")
    }).join("");
};

const start_game = (container) => {
    let field = generate_field(50);
    setInterval(()=>{
        container.innerHTML = render(field);
        field = get_next_field(field);
    }, 100);
};

let doc = document.getElementById("game");
start_game(doc);
