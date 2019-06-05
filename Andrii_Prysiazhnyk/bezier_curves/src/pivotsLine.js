import {line} from "d3";
import {multiplyPointByScalar, addPoints} from "./myMath"

const getPivotLine = (points, t) => {
    const pivotPoints = points.slice(0, -1);
    const directions = pivotPoints.map((point, i) => addPoints(points[i + 1], multiplyPointByScalar(point, -1)));

    return pivotPoints.map((point, i) => addPoints(point, multiplyPointByScalar(directions[i], t)));
};

const getPivotLines = (points, pathLength) => {
    let paths = [new Array(pathLength).fill(0).map((_, i) => getPivotLine(points, i / pathLength))];

    for (let i = 1; i < points.length - 2; ++i)
        paths.push(new Array(pathLength).fill(0)
            .map((_, j) => getPivotLine(paths[i - 1][j], j / pathLength)));

    return paths;
};

const colors = ["blueviolet", "springgreen", "lawngreen", "blue", "yellow", "green", "orangered", "deeppink", "orange"];
const endColor = "#bfbfbf";

export const renderPivotLines = (points, container) => {
    if (points.length > 2) {
        container.selectAll(".Bezier-Visualization__pivots").remove();

        const pathLength = points.length * 300;
        const paths = getPivotLines(points, pathLength);

        container.selectAll(".Bezier-Visualization__pivots").data(paths).enter().append("path")
            .attr("class", "Bezier-Visualization__pivots");

        container.selectAll(".Bezier-Visualization__pivots")
            .data(paths)
            .attr("d", (d) => line()(d[0]))
            .attr("stroke", (d, i) => colors[i % colors.length])
            .interrupt()
            .transition()
            .duration(points.length * 1000)
            .attrTween("d", (d) => (t) => line()(d[(Math.ceil((pathLength - 1) * t))]))
            .attrTween("stroke", (d, i) => (t) => t === 1 ? endColor : colors[i % colors.length]);
    }
};
