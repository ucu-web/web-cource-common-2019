import * as d3 from "d3";

export const createSvgContainer = (
  containerSelector,
  height,
  width,
  outerRadius
) => {
  return d3
    .select(containerSelector)
    .append("svg")
    .attr("height", height)
    .attr("width", width)
    .classed("chord-plot", true)
    .append("g")
    .classed("chord-plot__group", true)
    .attr("transform", "translate(" + outerRadius + "," + outerRadius + ")");
};