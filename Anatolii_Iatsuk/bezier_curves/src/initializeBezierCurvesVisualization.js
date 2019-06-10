import {mouse} from "d3"
import {drawCircles} from "./drawCircles";
import {connectPoints} from "./connectPoints";
import {drawCurve} from "./drawCurve";


export function initializeBezierCurvesVisualization(svg, points = []) {
    // create field for tangents
    svg.append("g").attr("class", "bezier-field__tangents");

    // create timer
    svg.append("text")
        .attr("class", "bezier-field__animation-time")
        .attr("x", 10)
        .attr("y", 30)
        .text("t=0");

    // create moving point
    svg.append("circle")
        .attr("class", "bezier-field__moving-point")
        .attr("cx", points ? points[0][0]: 0)
        .attr("cy", points ? points[0][1]: 0);


    // add handler for new point
    svg.on('click', function () {
        let coordinates = mouse(this);
        points.push(coordinates)
        render(svg, points)
    });

    render(svg, points);
}

export function render(svg, points) {
    let time = 1000 * points.length;

    svg.call(drawCircles, points)
        .call(connectPoints, points)
        .call(drawCurve, points, time);
}
