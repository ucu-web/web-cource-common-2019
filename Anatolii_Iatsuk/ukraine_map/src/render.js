let d3 = require("d3");


export function render(svg, json, column = 1, default_massage = "") {
    svg.selectAll("path[id^=p]").attr("fill", "gray");
    svg.selectAll("path").selectAll("title").remove();

    let min = 100000, max = 0;

    for (let code in json) {
        if (!json[code][column]) continue;
        min = Math.min(json[code][column], min);
        max = Math.max(json[code][column], max);
    }
    console.log(min, max);


    for (let code in json) {
        let color = Math.log(json[code][column] - min) / Math.log(max - min);
        if (column === 2) color = Math.log((json[code][column] - min) / 10000) / Math.log((max - min) / 10000);

        if (!isFinite(color)) color = 0;

        svg.select("#p" + code)
            .attr("fill", d3.interpolateLab("green", "red")(color))
            .attr("value", json[code][column])
            .on('click', function () {
                let message = default_massage + d3.select(this).select("title").text() + ": ";
                alert(message + d3.select(this).attr("value"))
            })
            .append("title").text(json[code][0])
    }

    // Add legend
    let w = 320, h = 50;

    d3.select("svg.legend").remove();

    let key = d3.select("body")
        .append("svg")
        .attr("class", "legend")
        .attr("width", w)
        .attr("height", h);

    let legend = key.append("defs")
        .append("svg:linearGradient")
        .attr("id", "gradient")
        .attr("x1", "0%")
        .attr("y1", "100%")
        .attr("x2", "100%")
        .attr("y2", "100%")
        .attr("spreadMethod", "pad");


    legend.append("stop")
        .attr("offset", "0%")
        .attr("stop-color", "green")
        .attr("stop-opacity", 1);

    legend.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", "red")
        .attr("stop-opacity", 1);

    key.append("rect")
        .attr("width", 300)
        .attr("height", h - 30)
        .style("fill", "url(#gradient)")
        .attr("transform", "translate(0,10)");

    let y = d3.scaleLinear()
        .range([0, 300])
        .domain([min, max]);

    let yAxis = d3.axisBottom()
        .scale(y)
        .ticks(5);

    key.append("g")
        .attr("transform", "translate(0,30)")
        .call(yAxis);
}