import {lineGenerator} from "./functions";
import {easeLinear} from "d3";
import {drawTangents} from "./drawTangents";

export function drawBezierCurve(div, points, time) {
    let svg = div.select("svg");

    svg.selectAll(".bezierPath").remove();

    let [path, debug] = getBezierPath(div, points);

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
        .attrTween("cx", translateAlong(div, line, "x", points, debug, true))
        .attrTween("cy", translateAlong(div, line, "y", points, false));
}

function getBezierPath(div, points) {
    let coordinates,
        pathData = [],
        debug = [],
        xFormula,
        yFormula;

    for (let t = 0; t <= 1.001; t += .01) {
        [coordinates, xFormula, yFormula] = bezierCurvePoint(div, points, t);
        pathData.push(coordinates);
        debug.push([xFormula, yFormula, t])
    }

    return [pathData, debug];
}

function bezierCurvePoint(div, points, t) {

    let n = points.length - 1;
    let xFormula = "";
    let yFormula = "";
    let currentBinomialCoefficient = 1;
    let x = 0;
    let y = 0;

    for (let k = 0; k <= n; k++) {
        if (k !== 0) {
            currentBinomialCoefficient = currentBinomialCoefficient * (n + 1 - k) / k;
        }

        x += points[k][0] * currentBinomialCoefficient * Math.pow((1 - t), (n - k)) * Math.pow(t, k);
        y += points[k][1] * currentBinomialCoefficient * Math.pow((1 - t), (n - k)) * Math.pow(t, k);

        // add plus sign
        if (k !== 0) {
            xFormula += " + ";
            yFormula += " + ";
        }

        // add binomial coefficient
        if (currentBinomialCoefficient !== 1) {
            xFormula += currentBinomialCoefficient + "*";
            yFormula += currentBinomialCoefficient + "*";
        }

        // add (1-t)^(n-k)
        if (k !== n) {
            let s = "(1 - " + t.toFixed(2) + ")";

            // add power
            if (n - k > 1) s += "^" + n - k;

            xFormula += s + "*";
            yFormula += s + "*";
        }

        // add t^k
        if (k !== 0) {
            let s = "" + t.toFixed(2) + "";

            if (k > 1) s += "^" + k;

            xFormula += s + "*";
            yFormula += s + "*";
        }

        xFormula += points[k][0];
        yFormula += points[k][1];
    }

    div.select("svg").selectAll(".timeLabel").text("t=" + t.toFixed(2));
    // console.log(t);

    xFormula = x.toFixed(2) + " = " + xFormula;
    yFormula = y.toFixed(2) + " = " + yFormula;

    return [[x, y], xFormula, yFormula];
}

function translateAlong(div, linePath, coordinate, points, debug, tangents = true) {
    let l = linePath.node().getTotalLength();
    return function (d, i, a) {
        return function (t) {
            if (tangents) {
                drawTangents(div, points, t, points.length);
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