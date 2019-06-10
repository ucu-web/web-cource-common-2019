import {lineGenerator} from "./functions";
import {easeLinear} from "d3";
import {drawTangents} from "./drawTangents";
import {changeFormula} from "./changeFormula"

export function drawBezierCurve(div, points, time) {
    let svg = div.select("svg");

    svg.selectAll(".bezierPath").remove();

    let path = getBezierPath(div, points);

    let line = svg.append("path")
        .attr("class", "bezierPath")
        .attr("d", lineGenerator(path));

    // point that will move
    let lineHead;

    if (points.length === 1) {
        lineHead = svg.append("g").attr("class", "lineHead").append("circle")
            .attr("class", "lineHead")
            .attr("cx", points[0][0])
            .attr("cy", points[0][1]);
    } else {
        lineHead = svg.select("g.lineHead").select("circle")
    }

    lineHead.transition()
        .duration(time)
        .ease(easeLinear)
        .attrTween("cx", translateAlong(div, line, "x", points, true))
        .attrTween("cy", translateAlong(div, line, "y", points, false));
}

function getBezierPath(div, points) {
    let pathData = [];
    for (let t = 0; t <= 1.001; t += .001) {
        pathData.push(bezierCurvePoint(div, points, t));
    }
    return pathData;
}

function bezierCurvePoint(div, points, t) {

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

function translateAlong(div, linePath, coordinate, points, tangents = true) {
    let l = linePath.node().getTotalLength();
    return function (d, i, a) {
        return function (t) {
            if (tangents) {
                drawTangents(div, points, t, points.length);
                changeFormula(div, points, t);
            }

            let p = linePath.node().getPointAtLength(t * l);
            if (coordinate === "x") {
                return p.x;
            } else {
                return p.y;
            }
        }
    }
}