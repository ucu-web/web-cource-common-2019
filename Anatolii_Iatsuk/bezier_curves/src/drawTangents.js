import {lineGenerator} from "./functions";
import {interpolateLab} from "d3";

export function drawTangents(div, points, t, pointsNumber) {
    if (points.length === 1) return;

    let svg = div.select("svg");
    let tangents = svg.select(".tangents");

    if (points.length === pointsNumber) tangents.selectAll("path").remove();
    let newPoints = [];

    for (let p = 0; p < points.length - 1; p++) {
        let newX = points[p][0] * (1 - t) + points[p + 1][0] * t;
        let newY = points[p][1] * (1 - t) + points[p + 1][1] * t;

        newPoints.push([newX, newY]);
    }

    tangents.append("path")
        .attr("class", "tangents")
        .attr("d", lineGenerator(newPoints))
        .attr("stroke", interpolateLab("red", "blue")((newPoints.length - 1) / (pointsNumber - 1)));

    drawTangents(div, newPoints, t, pointsNumber)
}