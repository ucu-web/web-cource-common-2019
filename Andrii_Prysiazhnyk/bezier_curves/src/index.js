import "./styles/Bezier-Visualization.scss"

const d3 = require("d3");
const {renderBezierCurve} = require("./bezierCurve.js");
const {renderPivotLines} = require("./pivotsLine");


const renderPoint = (point, container) =>
    container
        .append("circle")
        .attr("cx", point[0])
        .attr("cy", point[1])
        .attr("r", 5);

const renderStationaryLine = (points, container) => container.select(".Bezier-Visualization__stationary-line")
    .attr("d", d3.line()(points));

const start = () => {
    const width = 800, height = 500;
    let points = [];

    const field = d3.select(".Bezier-Visualization__drawing-field")
        .attr("width", width)
        .attr("height", height);

    field.append("path").attr("class", "Bezier-Visualization__curve");
    field.append("path").attr("class", "Bezier-Visualization__stationary-line");
    field.append("circle").attr("class", "Bezier-Visualization__leading-point");

    field.on("click", function () {
        const newPoint = d3.mouse(this);
        renderPoint(newPoint, field);

        points.push(newPoint);

        if (points.length > 2)
            renderPivotLines(points, field);

        if (points.length > 1) {
            renderStationaryLine(points, field);
            renderBezierCurve(points, field);
        }
    });
};

start();
