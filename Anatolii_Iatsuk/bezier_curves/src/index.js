import {drawCircle} from "./drawCircle.js"
import {connectPoints} from "./connectPoints"
import {drawBezierCurve} from "./drawBezierCurve"
import {select, mouse} from "d3"

let div = select("body").append("svg").attr("class", "bezier-field");
createBezierCurves(div);

function createBezierCurves(svg) {
    let w = 800,
        h = 500,
        padding = 30,
        points = [];

    svg.attr("width", w + 2 * padding).attr("height", h + 2 * padding)
        .on('click', function () {
            let coordinates = mouse(this);
            points.push([+coordinates[0], +coordinates[1]])

            let time = points.length * 1000;

            svg.call(drawCircle, points, coordinates);

            svg.call(connectPoints, points)
                .call(drawBezierCurve, points, time)
        });

    svg.append("g").attr("class", "bezier-field__tangents");


    svg.append("text")
        .attr("class", "bezier-field__animation-time")
        .attr("x", w - padding)
        .attr("y", h - padding)
        .text("t=0");
}