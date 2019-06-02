const d3 = require("d3");
const {renderBezierCurve} = require("./bezierCurve.js");

const renderPoint = (point, container) => {
    container
        .append("circle")
        .attr("cx", point[0])
        .attr("cy", point[1])
        .attr("r", 5);
};

const renderPivotsLine = (points, container) => {
    container.select(".Bezier-Visualization__pivots")
        .attr("d", d3.line()(points.slice(0, -1)))
        .interrupt()
        .transition()
        .duration(points.length * 1000)
        .attr("d", d3.line()(points.slice(1)));
};

const renderStationaryLine = (points, container) => container.select(".Bezier-Visualization__stationary-line")
    .attr("d", d3.line()(points));

const start = () => {
    const width = 800, height = 500;
    let points = [];

    const field = d3.select(".Bezier-Visualization__drawing-field")
        .attr("width", width)
        .attr("height", height);

    field.append("path").attr("class", "Bezier-Visualization__curve");
    field.append("path").attr("class", "Bezier-Visualization__pivots");
    field.append("path").attr("class", "Bezier-Visualization__stationary-line");

    field.on("click", function () {
        const newPoint = d3.mouse(this);
        renderPoint(newPoint, field);

        points.push(newPoint);

        if (points.length > 1) {
            renderStationaryLine(points, field);
            renderBezierCurve(points, field);
            renderPivotsLine(points, field);
        }
    });
};

start();
