const d3 = require("d3");
const {bezierPath} = require("./bezierCurve.js");

const renderBezierCurve = (points, container) => {
    const path = bezierPath(points), line = d3.line();

    container.select(".Bezier-Visualization__curve")
        .attr("d", line([path[0]]))
        .transition()
        .duration(3000)
        .attrTween("d", () => (t) => line(path.slice(1, Math.ceil(path.length * t))));

    container.select(".Bezier-Visualization__pivots")
        .attr("d", line(points.slice(0, -1)))
        .transition()
        .duration(3000)
        .attr("d", line(points.slice(1)));

    container.select(".Bezier-Visualization__line")
        .attr("d", line(points));
};

const renderPoint = (point, container) => {
    container
        .append("circle")
        .attr("cx", point[0])
        .attr("cy", point[1])
        .attr("r", 5);
};

const start = () => {
    const width = 800, height = 500;
    let points = [];

    const field = d3.select(".Bezier-Visualization__drawing-field")
        .attr("width", width)
        .attr("height", height);

    field.append("path").attr("class", "Bezier-Visualization__curve");
    field.append("path").attr("class", "Bezier-Visualization__pivots");
    field.append("path").attr("class", "Bezier-Visualization__line");

    field.on("click", function () {
        const newPoint = d3.mouse(this);
        renderPoint(newPoint, field);

        points.push(newPoint);
        renderBezierCurve(points, field);
    });
};

start();

// var data = [1,9,4,2,6,2,5,0,5,9,7,2].map(function(d,i) {
//     return [i, d];
// });
//
// var w = 300,
//     h = 100;
//
// var x = d3.scaleLinear()
//     .domain([0, data.length-1])
//     .range([0, w]);
//
// var y = d3.scaleLinear()
//     .domain([0, 10])
//     .range([h, 0]);
//
// var line = d3.line()
//     .x(function(d) { return x(d[0]); })
//     .y(function(d) { return y(d[1]); });
//
// var svg = d3.select('body').append('svg')
//     .attr('w', w)
//     .attr('h', h);
//
// // add element and transition in
// var path = svg.append('path')
//     .attr('class', 'Bezier-Visualization__curve')
//     .attr('d', line(data[0]))
//     .transition()
//     .duration(3000)
//     .attrTween('d', pathTween);
//
// function pathTween() {
//     var interpolate = d3.scaleQuantile()
//         .domain([0,1])
//         .range(d3.range(1, data.length + 1));
//     return function(t) {
//         return line(data.slice(0, interpolate(t)));
//         // console.log(Math.ceil(t * data.length));
//         // return line(data.slice(0, Math.ceil(t * data.length)));
//     };
// }
