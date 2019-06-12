let d3 = require("d3");
let json = require('../data/data.json');
import {render} from "./render";

let svg = d3.select("svg");

const buttons = d3.selectAll('input');

buttons.on('change', function () {
    if (this.value === "price") {
        render(svg, json, 1, "Середня вартість квадратного метру у ")
    } else if (this.value === "population") {
        render(svg, json, 2, "Населення у ")
    } else if (this.value === "density") {
        render(svg, json, 3, "Густота населення у ")
    }
});

render(svg, json, 1, "Середня вартість квадратного метру у ")
