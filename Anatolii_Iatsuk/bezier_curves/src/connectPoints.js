import {lineGenerator} from "./functions.js"

export function connectPoints(svg, points) {
    svg.select(".bezier-field__point-connector").remove();

    svg.append("path")
        .attr("class", "bezier-field__point-connector")
        .attr("d", lineGenerator(points));
}