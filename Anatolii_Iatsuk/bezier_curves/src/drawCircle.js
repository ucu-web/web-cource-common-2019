export function drawCircle(svg, points, coordinates){
    let point = svg.append("g").attr("class", "bezier-field__point");

    point.append("circle")
        .attr("class", "point__circle")
        .attr("cx", coordinates[0])
        .attr("cy", coordinates[1]);

    point.append("text")
        .attr("x", coordinates[0] + 10)
        .attr("y", coordinates[1])
        .text("P" + points.length);

    point.append("text")
        .attr("x", coordinates[0] + 10)
        .attr("y", coordinates[1] + 15)
        .style("font-size", 10)
        .text("(" + coordinates + ")");
}

