import {lineGenerator} from "./functions.js"

export function connectPoints(div, points) {
    let svg = div.select("svg");
    svg.select(".pointsConnector").remove();

    svg.append("path")
        .attr("class", "pointsConnector")
        .attr("d", lineGenerator(points));
}