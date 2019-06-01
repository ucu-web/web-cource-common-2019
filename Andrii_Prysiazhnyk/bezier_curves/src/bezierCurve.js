const d3 = require("d3");
const {multiplyPointByScalar, addPoints, combination} = require("./myMath.js");

const bezierPath = (points) => {
    let path = [], t = 0, delta = 0.005;

    while (t <= 1) {
        path.push(getPointOnBezierCurve(points, t));
        t += delta;
    }

    path.push(points[points.length - 1]);

    return path;
};

const getPointOnBezierCurve = (points, t) => {
    return points
        .map((point, i) => multiplyPointByScalar(point, bezierCoefficient(i, points.length - 1, t)))
        .reduce((p1, p2) => addPoints(p1, p2));
};

const bezierCoefficient = (i, n, t) => combination(n, i) * Math.pow(t, i) * Math.pow(1 - t, n - i);

module.exports.bezierPath = bezierPath;
