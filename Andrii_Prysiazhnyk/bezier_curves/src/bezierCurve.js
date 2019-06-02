const d3 = require("d3");
const {multiplyPointByScalar, addPoints, combination} = require("./myMath.js");

const renderBezierCurve = (points, container) => {
    const path = bezierPath(points), line = d3.line();

    container.select(".Bezier-Visualization__curve")
        .attr("d", line([path[0]]))
        .transition()
        .duration(points.length * 1000)
        .attrTween("d", () => (t) => line(path.slice(0, Math.ceil(path.length * t))));

    renderLeadingPoint(points, path, container);
};

const renderLeadingPoint = (points, path, container)  => container.select(".Bezier-Visualization__leading-point")
    .attr("r", 3)
    .attr("cx", path[0][0])
    .attr("cy", path[0][1])
    .transition()
    .duration(points.length * 1000)
    .attrTween("cx", () => (t) => path[Math.ceil((path.length - 1) * t)][0])
    .attrTween("cy", () => (t) => path[Math.ceil((path.length - 1) * t)][1]);

const bezierPath = (points) =>
    new Array(points.length * 150)
        .fill(0)
        .map((_, i) => getPointOnBezierCurve(points, i / (points.length * 150)));

const getPointOnBezierCurve = (points, t) => {
    return points
        .map((point, i) => multiplyPointByScalar(point, bezierCoefficient(i, points.length - 1, t)))
        .reduce((p1, p2) => addPoints(p1, p2));
};

const bezierCoefficient = (i, n, t) => combination(n, i) * Math.pow(t, i) * Math.pow(1 - t, n - i);

module.exports.renderBezierCurve = renderBezierCurve;
