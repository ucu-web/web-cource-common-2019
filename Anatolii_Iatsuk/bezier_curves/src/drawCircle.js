export function drawCircle(div, points, coordinates){
    let point = div.select("svg").append("g").attr("id", "point-" + (points.length));

    point.append("circle")
        .attr("class", "pointCircle")
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

