import {drag, event, select} from "d3"
import {render} from "./initializeBezierCurvesVisualization"


export function drawCircles(svg, points = []) {
    let dragHandler = drag().on("drag", function () {
        let number = +this.getElementsByClassName("point__number")[0].innerHTML.slice(1);
        points[number - 1] = [event.x, event.y]
        render(svg, points)
    });

    svg.selectAll(".bezier-field__point").remove();

    let svg_points = svg
        .selectAll(".bezier-field__point")
        .data(points)
        .enter()
        .append("g")
        .attr("class", "bezier-field__point");

    svg_points.append("circle")
        .attr("class", "point__circle")
        .attr("cx", d => d[0])
        .attr("cy", d => d[1]);

    svg_points.append("text")
        .attr("class", "point__number")
        .attr("x", d => d[0] + 10)
        .attr("y", d => d[1])
        .text((d, i) => "P" + (i + 1));

    svg_points.append("text")
        .attr("class", "point__coordinates")
        .attr("x", d => d[0] + 10)
        .attr("y", d => d[1] + 15)
        .style("font-size", 10)
        .text( d => "(" + d + ")");

    dragHandler(svg_points);
}

