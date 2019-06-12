import * as d3 from "d3";
import {
  assignIndices,
  transformDataToRelationMatrix,
    generateSourceTargetInfo
} from "./dataTransformation";
import {detailsGenerator} from "./subjectDetailsInfoGenerator";
import { createSvgContainer } from "./svgCreation";
import { wrapText } from "./textWrapping";

const renderChart = (data, relationMatrix, container, indexToName) => {
  const arcsPadding = 0.03;
  const height =  Math.min(window.innerHeight, window.innerWidth) - 100;
  const width = height,
    textSpace = 100,
    outerRadius = height / 2,
    innerRadius = outerRadius - textSpace,
    chartBorderSize = 20,
    textMargin = 2;

  const svgContainer = createSvgContainer(
    container,
    height,
    width,
    outerRadius
  );

  const chord = d3
    .chord()
    .padAngle(arcsPadding)
    .sortSubgroups(d3.descending)
    .sortChords(d3.descending);

  const ribbon = d3.ribbon().radius(innerRadius);

  const arc = d3
    .arc()
    .innerRadius(innerRadius)
    .outerRadius(innerRadius + chartBorderSize);

  const fill = d3.scaleOrdinal(d3.schemeSet1);

  const groups = svgContainer
    .selectAll("g.chord-plot__outer-text-wrapper")
    .data(chord(relationMatrix).groups)
    .enter()
    .append("g")
    .classed("chord-plot__outer-text-wrapper", true);

  // create arcs
  groups
    .append("path")
    .style("fill", d => fill(d.index))
    .style("stroke", d => fill(d.index))
    .attr("d", arc);

  // add text beside each arc
  groups
    .append("text")
    .classed("chord-plot__outer-text noselect", true)
    .each(d => {
      d.angle = (d.startAngle + d.endAngle) / 2;
    })
    .attr("dy", "0.4rem")
    .attr(
      "transform",
      d =>
        "rotate(" +
        ((d.angle * 180) / Math.PI - 90) +
        ")" +
        "translate(" +
        (innerRadius + chartBorderSize + textMargin) +
        ")" +
        (d.angle > Math.PI ? "rotate(180)" : "")
    )
    .style("text-anchor", d => {
      return d.angle > Math.PI ? "end" : null;
    })
    .each(d => {
      wrapText(
        indexToName.get(d.index),
        outerRadius - innerRadius - chartBorderSize,
        d3.select(groups.selectAll("text").nodes()[d.index])
      );
    });

  // draw chords
  const chords = svgContainer
    .selectAll("path.chord-plot__chord")
    .data(chord(relationMatrix))
    .enter()
    .append("path")
    .classed("chord-plot__chord", true)
    .style("stroke", d => {
      return d3.rgb(fill(d.source.index)).darker();
    })
    .style("fill", d => {
      return fill(d.source.index);
    })
    .attr("d", ribbon);

  chords.on("click", (d) => {
     const detailsData = generateSourceTargetInfo(data, d.source.index, d.target.index, indexToName);
     const detailsContainer = document.querySelector(".chord-plot-wrapper");
     let details;
     if (details = document.querySelector('.chord-plot__details')){
         detailsContainer.removeChild(details);
     } else{
         detailsContainer.style.justifyContent = "space-around";
     }
     detailsGenerator(indexToName.get( d.source.index), detailsData, detailsContainer)
  })
};

const app = async () => {
  const data = await d3.json("data.json");
  const { indexToName, nameToIndex } = assignIndices(data);
  const relationMatrix = transformDataToRelationMatrix(data, nameToIndex);
  renderChart(data, relationMatrix, ".chord-plot-wrapper", indexToName);
};

app().catch(e => console.log(e));
