import {renderNewPoints} from "./functions";
import {drag, event, select} from "d3"


export function drawCircle(svg, coordinates, number) {
    let point = svg.append("g").attr("class", "bezier-field__point point");
    dragHandler(point);

    point.append("circle")
        .attr("class", "point__circle")
        .attr("cx", coordinates[0])
        .attr("cy", coordinates[1]);

    point.append("text")
        .attr("class", "point__number")
        .attr("x", coordinates[0] + 10)
        .attr("y", coordinates[1])
        .text("P" + number);

    point.append("text")
        .attr("class", "point__coordinates")
        .attr("x", coordinates[0] + 10)
        .attr("y", coordinates[1] + 15)
        .style("font-size", 10)
        .text("(" + coordinates + ")");
}

export let dragHandler = drag()
    .on("drag", function () {
        let x = event.x;
        let y = event.y;

        select(this).select("circle")
            .attr("cx", x)
            .attr("cy", y);

        select(this).select(".point__number")
            .attr("x", x + 10)
            .attr("y", y);

        select(this).select(".point__coordinates")
            .attr("x", x + 10)
            .attr("y", y + 15)
            .text("(" + [x, y] + ")");

        renderNewPoints(select(".bezier-field"))
    });

