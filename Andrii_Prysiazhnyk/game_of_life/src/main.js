const generate_field = (field_size) =>
    new Array(field_size).fill(0).map(
        () => new Array(field_size).fill(0).map(
            () => Math.random() < 0.5 ? 0 : 1));

const check_neighbor = (field, row, column) => {
    return (row >= 0 && row < field.length && column >= 0 && column < field.length) ? field[row][column] : 0;
};

const neighbors_amount = (field, row, column) => {
    let deltas = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]], result = 0;
    deltas.forEach((delta) => {
        result += check_neighbor(field, row + delta[0], column + delta[1])
    });

    return result;
};

const get_next_state = (field, row, col) => {
    const n_neighbors = neighbors_amount(field, row, col);
    return field[row][col] ? ((n_neighbors < 2) || n_neighbors >= 4 ? 0 : 1) : (n_neighbors === 3 ? 1 : 0);
};

const get_next_field = (field) => field.map((v, i) => v.map((v_1, j) => get_next_state(field, i, j)));

const get_modifier = (number) => number ? "alive" : "dead";

const render = (field) => field.reduce((a, b) => [...a, ...b])
    .map((number) => `<div class="Cell Cell__${get_modifier(number)}"></div>`)
    .join("");

const start_game = (container) => {
    let field = generate_field(100);
    setInterval(() => {
        container.innerHTML = render(field);
        field = get_next_field(field);
    }, 100);
};

let doc = document.getElementById("game");
start_game(doc);
