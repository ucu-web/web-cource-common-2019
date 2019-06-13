import { select, interpolateLab, scaleLinear, axisBottom } from "d3";

export function renderFeaturesOnMap(
  rootElement,
  districtsFeatures,
  featureColumn = 1,
  defaultAlertMessage = ""
) {
  rootElement.selectAll("path").attr("fill", "gray");
  rootElement
    .selectAll("path")
    .selectAll("title")
    .remove();

  // get min and max value of feature
  let minFeature = Infinity,
    maxFeature = 0;
  for (let districtName in districtsFeatures) {
    if (!districtsFeatures[districtName][featureColumn]) continue;
    minFeature = Math.min(
      districtsFeatures[districtName][featureColumn],
      minFeature
    );
    maxFeature = Math.max(
      districtsFeatures[districtName][featureColumn],
      maxFeature
    );
  }

  // draw features
  for (let districtName in districtsFeatures) {
    let districtPathElement = getElementByName(rootElement, districtName);
    if (!districtPathElement) continue;

    districtPathElement
      .datum(districtsFeatures[districtName])
      .attr("fill", function(districtFeatures) {
        // calculate color for feature
        let color =
          Math.log(districtFeatures[featureColumn] - minFeature) /
          Math.log(maxFeature - minFeature);

        // normalizing for price feature
        if (featureColumn === 2)
          color =
            Math.log((districtFeatures[featureColumn] - minFeature) / 10000) /
            Math.log((maxFeature - minFeature) / 10000);

        // left only correct colors
        if (!isFinite(color)) color = 0;

        return interpolateLab("green", "red")(color);
      })
      .append("title")
      .text(districtFeatures => {
        let title = districtFeatures[0];
        if (districtFeatures[featureColumn])
          title +=
            ", " +
            districtFeatures[featureColumn].toFixed(0) +
            defaultAlertMessage[1];
        return title;
      });

    addLegend(minFeature, maxFeature, defaultAlertMessage[1]);
  }
}


// look for a path element that represent district with name districtName
function getElementByName(rootElement, districtName) {
  let pathElement = rootElement.select("path#" + districtName);

  // solve some errors in names of dataset
  if (pathElement.empty())
    pathElement = rootElement.select("path#" + districtName + "ska");

  // look for district with most same name
  if (pathElement.empty()) {
    let i = 1;
    do {
      pathElement = rootElement.select(
        "path[id^=" + districtName.slice(0, districtName.length - i) + "]"
      );
      i++;
    } while (pathElement.empty() && i < districtName.length);
  }

  return !pathElement.empty() ? pathElement : undefined;
}

// add legend to map
function addLegend(minFeature, maxFeature, legendMessage) {
  let width = 320,
    height = 50;

  select(".visualization-container__legend").remove();

  let key = select(".visualization-container")
    .append("svg")
    .attr("class", "visualization-container__legend")
    .attr("width", width)
    .attr("height", height + 50);

  let legend = key
    .append("defs")
    .append("svg:linearGradient")
    .attr("id", "gradient")
    .attr("x1", "0%")
    .attr("y1", "100%")
    .attr("x2", "100%")
    .attr("y2", "100%")
    .attr("spreadMethod", "pad");

  legend
    .append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "green")
    .attr("stop-opacity", 1);

  legend
    .append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "red")
    .attr("stop-opacity", 1);

  key
    .append("rect")
    .attr("width", 300)
    .attr("height", height - 30)
    .style("fill", "url(#gradient)")
    .attr("transform", "translate(0,10)");

  let y = scaleLinear()
    .range([0, 300])
    .domain([minFeature, maxFeature]);

  let yAxis = axisBottom()
    .scale(y)
    .ticks(5);

  key
    .append("g")
    .attr("transform", "translate(0,30)")
    .call(yAxis);

  key
    .append("text")
    .attr("transform", "translate(0,70)")
    .text(legendMessage)
    .attr("x", "50%")
    .attr("text-anchor", "middle");
}
