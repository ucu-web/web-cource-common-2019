import {lineGenerator} from "./functions";
import {easeLinear} from "d3";
import {drawTangents} from "./drawTangents";

export function drawCurve(svg, points, time) {
     if (points.length < 3) return;

    svg.selectAll(".bezier-field__bezier-path").remove();

    let path = getBezierPath(svg, points);

    let line = svg.append("path")
        .attr("class", "bezier-field__bezier-path")
        .attr("d", lineGenerator(path));

    // point that will move
    let lineHead = svg.select(".bezier-field__moving-point").attr("cx", points[0][0]).attr("cy", points[0][1]);;

    lineHead.transition()
        .duration(time)
        .ease(easeLinear)
        .attrTween("cx", translateAlong(svg, line, "x", points, true))
        .attrTween("cy", translateAlong(svg, line, "y", points, false));
}

function getBezierPath(svg, points) {
    let pathData = [];
    for (let t = 0; t <= 1.001; t += .001) {
        pathData.push(bezierCurvePoint(points, t));
    }
    return pathData;
}

function bezierCurvePoint(points, t) {

    let n = points.length - 1;
    let currentBinomialCoefficient = 1;
    let x = 0;
    let y = 0;

    for (let k = 0; k <= n; k++) {
        if (k !== 0) {
            currentBinomialCoefficient = currentBinomialCoefficient * (n + 1 - k) / k;
        }

        x += points[k][0] * currentBinomialCoefficient * Math.pow((1 - t), (n - k)) * Math.pow(t, k);
        y += points[k][1] * currentBinomialCoefficient * Math.pow((1 - t), (n - k)) * Math.pow(t, k);
    }
    return [x, y];
}

function translateAlong(svg, linePath, coordinate, points, info = true) {
    return function () {
        return function (t) {
            // draw tangents and print time
            if (info) {
                drawTangents(svg, points, t, points.length);
                svg.select(".bezier-field__animation-time").text("t=" + t);
            }

            let p = bezierCurvePoint(points, t);
            return coordinate === "x" ? p[0] : p[1];
        }
    }
}