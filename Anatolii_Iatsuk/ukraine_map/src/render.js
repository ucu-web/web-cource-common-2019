let d3 = require("d3");


export function renderFeaturesOnMap(rootElement, districtFeatures, featureColumn = 1, defaultAlertMessage = "") {
    rootElement.selectAll("path").attr("fill", "gray");
    rootElement.selectAll("path").selectAll("title").remove();

    let min = 100000, max = 0;

    for (let code in districtFeatures) {
        if (!districtFeatures[code][featureColumn]) continue;
        min = Math.min(districtFeatures[code][featureColumn], min);
        max = Math.max(districtFeatures[code][featureColumn], max);
    }
    console.log(min, max);


    for (let districtName in districtFeatures) {

        let districtPathElement = getElementByName(rootElement, districtName);
        if (!districtPathElement) continue;

        let color = Math.log(districtFeatures[districtName][featureColumn] - min) / Math.log(max - min);
        if (featureColumn === 2) color = Math.log((districtFeatures[districtName][featureColumn] - min) / 10000) / Math.log((max - min) / 10000);

        if (!isFinite(color)) color = 0;

        let districtTitle = districtPathElement
            .attr("fill", d3.interpolateLab("green", "red")(color))
            .attr("value", districtFeatures[districtName][featureColumn])
            .on('mouseover', function (d, i) {
                d3.select(this).transition()
                    .duration('50')
                    .attr('opacity', '.6');
            })
            .on('mouseout', function (d, i) {
                d3.select(this).transition()
                    .duration('50')
                    .attr('opacity', '1');
            })
            .append("title");
        if (districtFeatures[districtName][featureColumn]) {
            districtTitle.text(districtFeatures[districtName][0] + ", " + (+districtFeatures[districtName][featureColumn]).toFixed(0) + defaultAlertMessage[1]);
        } else {
            districtTitle.text(districtFeatures[districtName][0]);
        }


        // Add legend
        let width = 320, height = 50;

        d3.select("svg.legend").remove();

        let key = d3.select(".container")
            .append("svg")
            .attr("class", "legend")
            .attr("width", width)
            .attr("height", height + 50);

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
            .attr("height", height - 30)
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

        key.append("text")
            .attr("transform", "translate(0,70)")
            .text(defaultAlertMessage[1])
            .attr("x", "50%")
            .attr("text-anchor", "middle");
    }
}


function getElementByName(rootElement, districtName) {
    let pathElement = rootElement.select("path#" + districtName);

    if (pathElement.empty()) pathElement = rootElement.select("path#" + districtName + "ska");

    if (pathElement.empty()) {
        let i = 1;
        do {
            pathElement = rootElement.select("path[id^=" + districtName.slice(0, districtName.length - i) + "]");
            i++;
        } while (pathElement.empty() && i < districtName.length);
    }
    return (!pathElement.empty()) ? pathElement : undefined;
}
