import {drawCircle} from "./drawCircle.js"
import {connectPoints} from "./connectPoints"
import {drawBezierCurve} from "./drawBezierCurve"
import {select, mouse} from "d3"

let div = select("body").append("div").attr("class", "bezierCurves");
createBezierCurves(div);

function createBezierCurves(div) {
    let w = 800,
        h = 500,
        padding = 30,
        points = [];

    let svg = div.append("svg").attr("class", "bezierField");

    svg.attr("width", w + 2 * padding).attr("height", h + 2 * padding)
        .on('click', function () {
            let coordinates = mouse(this);
            points.push([+coordinates[0], +coordinates[1]])

            let time = points.length * 1000;

            div.call(drawCircle, points, coordinates);

            div.call(connectPoints, points)
                .call(drawBezierCurve, points, time)
        });

    svg.append("g").attr("class", "tangents");

    div.append("div").attr("class", "xForm").style("font-size", 14);
    div.append("div").attr("class", "yForm").style("font-size", 14);

    svg.append("text")
        .attr("class", "timeLabel")
        .attr("x", w - padding)
        .attr("y", h - padding)
        .text("t=0");
}