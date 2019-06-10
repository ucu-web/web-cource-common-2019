import {line, drag, event, select} from "d3"
import {render} from "./index"

export let lineGenerator = line().x(d => d[0]).y(d => d[1]);

export let dragHandler = drag()
    .on("drag", function () {
        let x = event.x;
        let y= event.y;

        select(this).select("circle")
            .attr("cx", x)
            .attr("cy", y);

        select(this).select(".point__number")
            .attr("x", x + 10)
            .attr("y", y);

        select(this).select(".point__coordinates")
            .attr("x", x + 10)
            .attr("y", y + 15)
            .text("(" + [x,y] + ")");

        render(select(".bezier-field"))
    });