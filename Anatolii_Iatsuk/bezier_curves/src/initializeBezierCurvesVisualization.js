import {mouse} from "d3"
import {drawCircle} from "./drawCircle";
import {renderNewPoints} from "./functions";


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

    // add default points
    for (let p = 0; p < points.length; p++) {
        drawCircle(svg, points[p], p + 1);
    }

    // add animation
    renderNewPoints(svg);

    // add handler for new point
    svg.on('click', function () {
        let coordinates = mouse(this);
        points.push(coordinates)

        drawCircle(svg, coordinates, points.length);
        renderNewPoints(svg)
    });
}

