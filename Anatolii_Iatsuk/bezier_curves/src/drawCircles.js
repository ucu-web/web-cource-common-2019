import {drag, event, select} from "d3"
import {render} from "./initializeBezierCurvesVisualization"


export function drawCircles(svg, points = []) {
    let dragHandler = drag().on("drag", function () {
        let number = +this.getElementsByClassName("point__number")[0].innerHTML.slice(1);
        points[number - 1] = [event.x, event.y]
        render(svg, points)
    });

    svg.selectAll(".bezier-field__point").remove();

    for (let p = 0; p < points.length; p++) {
        let point = svg.append("g").attr("class", "bezier-field__point point");

        dragHandler(point);

        point.append("circle")
            .attr("class", "point__circle")
            .attr("cx", points[p][0])
            .attr("cy", points[p][1]);

        point.append("text")
            .attr("class", "point__number")
            .attr("x", points[p][0] + 10)
            .attr("y", points[p][1])
            .text("P" + (p + 1));

        point.append("text")
            .attr("class", "point__coordinates")
            .attr("x", points[p][0] + 10)
            .attr("y", points[p][1] + 15)
            .style("font-size", 10)
            .text("(" + points[p] + ")");
    }
}

