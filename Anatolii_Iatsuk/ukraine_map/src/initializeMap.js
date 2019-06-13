import { select, geoPath, geoMercator, json } from "d3";
import { feature } from "topojson";
import { renderFeaturesOnMap } from "./render";

export let initializeMap = async (mapPath, districtsFeaturesPath) => {
  let visualizationContainer = select(".visualization-container");

  // compute size of svg
  const width = window.innerWidth,
    height = window.innerHeight - 100;

  // create svg
  let svgContainer = visualizationContainer
    .append("svg")
    .attr("class", "visualization-container__map")
    .attr("width", width)
    .attr("viewBox", "0 0 " + width + " " + height)
    .attr("height", height);

  // load map
  const mapJson = await json(mapPath);

  // load features
  const districtsFeatures = await json(districtsFeaturesPath);

  // create buttons
  createButtons(visualizationContainer, districtsFeatures);

  // draw map from topojson
  drawMap(svgContainer, mapJson, [width, height]);

  // render features on map
  renderFeaturesOnMap(
    svgContainer,
    districtsFeatures,
    ...renderingInput["price"]
  );
};

// map type of feature to input of rendering function (renderFeaturesOnMap)
const renderingInput = {
  price: [1, ["Середня вартість квадратного метру у ", " грн./м.кв."]],
  population: [2, ["Населення у ", " осіб"]],
  density: [3, ["Густота населення у ", " осіб/га"]]
};

// create buttons to choose type of map
const createButtons = (visualizationContainer, districtsFeatures) => {
  const buttons = visualizationContainer.selectAll("input");
  buttons.on("change", function() {
    renderFeaturesOnMap(
      visualizationContainer.select(".visualization-container__map"),
      districtsFeatures,
      ...renderingInput[this.value]
    );
  });
};

// draw map from topojson
const drawMap = (svgContainer, districtsFeatures, svgSize) => {
  let path = geoPath().projection(
    geoMercator()
      .scale(1)
      .fitSize(
        svgSize,
        feature(districtsFeatures, districtsFeatures.objects.gadm36_UKR_2)
      )
  );

  svgContainer
    .selectAll("path")
    .data(
      feature(districtsFeatures, districtsFeatures.objects.gadm36_UKR_2)
        .features
    )
    .enter()
    .append("path")
    .attr("d", path)
    .attr("id", districtFeatures =>
      // get name of district and normalize it
      districtFeatures.properties.NAME_2.toLowerCase().replace(
        /[^a-zA-Z]+/g,
        ""
      )
    );
};
