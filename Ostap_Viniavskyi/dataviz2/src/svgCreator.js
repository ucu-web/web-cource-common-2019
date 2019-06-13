import { select, scaleOrdinal, schemeSet1, schemeSet2, map, event } from "d3";
import { getCubicBezierCurve } from "./curvesGenerator";
import { drawNodesProportionsRects } from "./generateNodesProportionsRects";

export const createSankeyPlot = (container, sourceTargetRelationData) => {
  const plotSizes = {
    svgWidth: 800,
    svgHeight: 600,
    width: 30
  };
  const margin = { top: 0, right: 250, bottom: 0, left: 30};

  const svgContainer = select(container)
    .append("svg")
    .classed("plot", true)
    .attr("xmlns", "http://www.w3.org/2000/svg")
    .attr("height", plotSizes.svgHeight)
    .attr("width", plotSizes.svgWidth + margin.left + margin.right)
    .attr("viewBox", [
      -margin.right + 2 *  margin.left,
      0,
      plotSizes.svgWidth  + 2 * margin.right,
      plotSizes.svgHeight
    ]);

  svgContainer
      .append("defs")
      .append("style")
      .attr("font-family", "Arial")

  const sourcesFill = scaleOrdinal(schemeSet1),
    targetsFill = scaleOrdinal(schemeSet2);

  const sourcesRectsDescription = generateRectanglesDescription(
      sourceTargetRelationData.sourcesProp,
      plotSizes,
      margin.left,
      sourcesFill
    ),
    targetsRectsDescription = generateRectanglesDescription(
      sourceTargetRelationData.targetsProp,
      plotSizes,
      plotSizes.svgWidth + margin.left - plotSizes.width,
      targetsFill
    );

  svgContainer.call(
    renderLinks,
    sourceTargetRelationData,
    sourcesRectsDescription,
    targetsRectsDescription,
    plotSizes,
    sourcesFill,
    targetsFill
  );

  const sourceRectsGroup = drawNodes(
    svgContainer,
    sourcesRectsDescription,
    "plot__source-node-group",
    plotSizes
  );

  sourceRectsGroup.call(addNodesTitles, false, plotSizes, margin);

  const targetRectsGroup = drawNodes(
    svgContainer,
    targetsRectsDescription,

    "plot__target-node-group",
    plotSizes
  );

  targetRectsGroup.call(addNodesTitles, true, plotSizes, margin);
  svgContainer.call(
    drawNodesProportionsRects,
    sourceTargetRelationData,
    sourcesRectsDescription,
    targetsRectsDescription,
    plotSizes,
    sourcesFill,
    targetsFill
  );
};

const generateRectanglesDescription = (
  proportions,
  plotSizes,
  xOffset,
  fill
) => {
  let currentVerticalOffset = 0;
  const rectsDescription = [];
  proportions.forEach((d, i) => {
    rectsDescription.push({
      x: xOffset,
      y: currentVerticalOffset,
      height: d.value * plotSizes.svgHeight,
      color: fill(i),
      name: d.name
    });
    currentVerticalOffset += d.value * plotSizes.svgHeight;
  });
  return rectsDescription;
};

const drawNodes = (svgContainer, rectsInfo, className, plotSizes) => {
  const rectGroup = svgContainer
    .selectAll("rect." + className)
    .data(rectsInfo)
    .enter()
    .append("g");
  rectGroup
    .append("rect")
    .classed(className, true)
    .attr("width", plotSizes.width)
    .attr("height", d => d.height)
    .attr("x", d => d.x)
    .attr("y", d => d.y)
    .style("fill", d => d.color);
  return rectGroup;
};

const addNodesTitles = (context, isTarget, plotSizes, margin) => {
  const modifierClass = "plot__title_" +  (isTarget ? "target" : "source");
  context
    .append("text")
    .classed("plot__title noselect " + modifierClass, true)
    .attr("x", d => d.x + getTextHorizontalOffset(plotSizes, margin, isTarget))
    .attr("y", d => d.y + d.height / 2)

    .text(d => d.name);
};

const getTextHorizontalOffset = (plotSizes, margin, isTargetTitle) =>
  isTargetTitle ? plotSizes.width + 20 : -margin.left;

const getLinksHorizontalPosition = (
  rectInfo,
  verticalOffsetRatio,
  linkWidth
) => {
  return rectInfo.y + verticalOffsetRatio * rectInfo.height + linkWidth / 2;
};

const renderLinks = (
  container,
  data,
  sourcesDescription,
  targetsDescription,
  plotSizes,
  sourcesFill,
  targetsFill
) => {
  const nodesVerticalOffsetRatios = map();
  let currentHovered = null;
  return container
    .selectAll("path.plot__link")
    .data(data.links)
    .enter()
    .append("path")
    .classed("plot__link", true)
    .attr("d", link =>
      getLinksPath(
        link,
        nodesVerticalOffsetRatios,
        sourcesDescription,
        targetsDescription,
        plotSizes
      )
    )
    .call(colorateLinks, data, sourcesFill, targetsFill, sourcesDescription)
    .call(addClickBehaviour, currentHovered);
};

const addClickBehaviour = (links, currentHovered) => {
  links.on("mouseover", () => {
    if (currentHovered) {
      currentHovered.style.strokeOpacity = "0.4";
    }
    currentHovered = event.target;
    currentHovered.style.strokeOpacity = "1";
  });
};

const colorateLinks = (
  links,
  data,
  sourcesFill,
  targetsFill,
  sourcesDescription
) => {
  links
    .attr("fill", "transparent")
    .call(createLinkGradient, data, sourcesFill, targetsFill)
    .attr("stroke-width", d => {
      const sourceRect = sourcesDescription.filter(i => i.name === d.source)[0];
      return sourceRect.height * d.proportion;
    })
    .attr("stroke-opacity", 0.5);
};

const createLinkGradient = (links, data, sourcesFill, targetsFill) => {
  links
    .each(function(d) {
      const gradient = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "linearGradient"
      );
      gradient.id =
        data.sourceNameToIndex.get(d.source) +
        "_" +
        data.targetNameToIndex.get(d.target);
      gradient.innerHTML = `
    <stop offset="0%" stop-color="${targetsFill(
      data.targetNameToIndex.get(d.target)
    )}"></stop>
      <stop offset="100%" stop-color="${sourcesFill(
        data.sourceNameToIndex.get(d.source)
      )}"></stop>
    `;
      this.parentNode.appendChild(gradient);
    })
    .attr(
      "stroke",
      d =>
        `url(#${data.sourceNameToIndex.get(d.source) +
          "_" +
          data.targetNameToIndex.get(d.target)})`
    );
};

const getLinksPath = (
  link,
  nodesVerticalOffsetRatios,
  sourcesDescription,
  targetsDescription,
  plotSizes
) => {
  if (!nodesVerticalOffsetRatios.has(link.source))
    nodesVerticalOffsetRatios.set(link.source, 0);
  if (!nodesVerticalOffsetRatios.has(link.target))
    nodesVerticalOffsetRatios.set(link.target, 0);
  const sourceRect = sourcesDescription.filter(i => i.name === link.source)[0];
  const targetRect = targetsDescription.filter(i => i.name === link.target)[0];
  const linkWidth = sourceRect.height * link.proportion;
  const path = getCubicBezierCurve(
    {
      x: sourceRect.x + (5 * plotSizes.width) / 8,
      y: getLinksHorizontalPosition(
        sourceRect,
        nodesVerticalOffsetRatios.get(link.source),
        linkWidth
      )
    },
    {
      x: targetRect.x + plotSizes.width / 8,
      y: getLinksHorizontalPosition(
        targetRect,
        nodesVerticalOffsetRatios.get(link.target),
        linkWidth
      )
    }
  );
  nodesVerticalOffsetRatios.set(
    link.source,
    nodesVerticalOffsetRatios.get(link.source) + link.proportion
  );
  nodesVerticalOffsetRatios.set(
    link.target,
    nodesVerticalOffsetRatios.get(link.target) + linkWidth / targetRect.height
  );
  return path;
};
