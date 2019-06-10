import {line, select} from "d3"
import {connectPoints} from "./connectPoints";
import {drawCurve} from "./drawCurve";

export let lineGenerator = line().x(d => d[0]).y(d => d[1]);

export function renderNewPoints(svg, time = 1000) {
    let points = getPoints(svg);

    time = time * points.length;

    svg.call(connectPoints, points)
        .call(drawCurve, points, time);
}

export function getPoints(svg) {
    let points = [];

    svg.selectAll(".bezier-field__point").select("circle").each(function () {
        points.push([select(this).attr("cx"), select(this).attr("cy")]);
    });

    return points;
}