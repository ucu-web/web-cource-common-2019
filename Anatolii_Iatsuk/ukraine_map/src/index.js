let d3 = require("d3");
let topojson = require("topojson");
import { renderFeaturesOnMap } from "./render";

let districtFeatures = require("../data/data.json");

let svg = d3
  .select(".container")
  .append("svg")
  .attr("class", "map");

initializeMap(svg, districtFeatures);

function initializeMap(rootContainer, districtFeatures) {
  // create svg
  let width = window.innerWidth,
    height = window.innerHeight - 100;
  svg
    .attr("width", width)
    .attr("preserveAspectRatio", "xMidYMid")
    .attr("viewBox", "0 0 " + width + " " + height)
    .attr("height", height);

  d3.json("../data/gadm36_UKR_2.json").then(function(data) {
    let path = d3.geoPath().projection(
      d3
        .geoMercator()
        .scale(1)
        .fitSize(
          [width, height],
          topojson.feature(data, data.objects.gadm36_UKR_2)
        )
    );

    svg
      .selectAll("path")
      .data(topojson.feature(data, data.objects.gadm36_UKR_2).features)
      .enter()
      .append("path")
      .attr("d", path)
      .attr("id", data =>
        data.properties.NAME_2.toLowerCase().replace(/[^a-zA-Z]+/g, "")
      );

    renderFeaturesOnMap(svg, districtFeatures, 1, [
      "Середня вартість квадратного метру у ",
      " грн./м.кв."
    ]);
  });

  // create buttons
  const buttons = d3.selectAll("input");
  buttons.on("change", function() {
    if (this.value === "price") {
      renderFeaturesOnMap(svg, districtFeatures, 1, [
        "Середня вартість квадратного метру у ",
        " грн./м.кв."
      ]);
    } else if (this.value === "population") {
      renderFeaturesOnMap(svg, districtFeatures, 2, ["Населення у ", " осіб"]);
    } else if (this.value === "density") {
      renderFeaturesOnMap(svg, districtFeatures, 3, [
        "Густота населення у ",
        " осіб/га"
      ]);
    }
  });
}
