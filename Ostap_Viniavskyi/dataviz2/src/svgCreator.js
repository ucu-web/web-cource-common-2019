import { select, map, event } from "d3";
import { getLinkPath } from "./curvesGenerator";
import { drawNodesProportionsRects } from "./propRectsDrawer";
import { plotSizes, margin, sourcesFill, targetsFill } from "./config";

export const createSankeyPlot = (container, sourceTargetRelationData) => {
  const svgContainer = select(container)
    .append("svg")
    .classed("plot", true)
    .attr("xmlns", "http://www.w3.org/2000/svg")
    .attr("height", plotSizes.svgHeight)
    .attr("width", plotSizes.svgWidth + margin.left + margin.right)
    .attr("viewBox", [
      0,
      0,
      plotSizes.svgWidth + margin.right + margin.left,
      plotSizes.svgHeight
    ])
    .attr("preserveAspectRatio", "xMidYMin meet");

  svgContainer
    .append("defs")
    .append("style")
    .attr("font-family", "Arial");

  const sourcesRectsDescription = generateRectanglesDescription(
      sourceTargetRelationData.sourcesProp,
      margin.left,
      sourcesFill
    ),
    targetsRectsDescription = generateRectanglesDescription(
      sourceTargetRelationData.targetsProp,
      plotSizes.svgWidth + margin.left - plotSizes.width,
      targetsFill
    );

  svgContainer.call(
    renderLinks,
    sourceTargetRelationData,
    sourcesRectsDescription,
    targetsRectsDescription
  );

  const sourceRectsGroup = drawNodes(
    svgContainer,
    sourcesRectsDescription,
    "plot__source-node-group"
  );

  sourceRectsGroup.call(addNodesTitles, false);

  const targetRectsGroup = drawNodes(
    svgContainer,
    targetsRectsDescription,
    "plot__target-node-group"
  );

  targetRectsGroup.call(addNodesTitles, true);
  svgContainer.call(
    drawNodesProportionsRects,
    sourceTargetRelationData,
    sourcesRectsDescription,
    targetsRectsDescription
  );
};

const generateRectanglesDescription = (proportions, xOffset, fill) => {
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

const drawNodes = (svgContainer, rectsInfo, className) => {
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

const addNodesTitles = (context, isTarget) => {
  const modifierClass = "plot__title_" + (isTarget ? "target" : "source");
  context
    .append("text")
    .classed("plot__title noselect " + modifierClass, true)
    .attr(
      "x",
      d =>
        d.x +
        (isTarget
          ? plotSizes.width + plotSizes.textMargin
          : -plotSizes.textMargin)
    )
    .attr("y", d => d.y + d.height / 2)

    .text(d => d.name);
};

const getLinksHorizontalPosition = (rectInfo, verticalOffsetRatio) => {
  return rectInfo.y + verticalOffsetRatio * rectInfo.height;
};

const renderLinks = (
  container,
  data,
  sourcesDescription,
  targetsDescription
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
    .call(colorateLinks, data, sourcesFill, targetsFill)
    .call(addClickBehaviour, currentHovered);
};

const addClickBehaviour = (links, currentHovered) => {
  links.on("mouseover", () => {
    if (currentHovered) {
      currentHovered.style.fillOpacity = "0.4";
    }
    currentHovered = event.target;
    currentHovered.style.fillOpacity = "1";
  });
};

const colorateLinks = (links, data, sourcesFill, targetsFill) => {
  links
    .call(createLinkGradient, data, sourcesFill, targetsFill)
    .attr("fill-opacity", 0.5);
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
      "fill",
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
  const path = getLinkPath(
    {
      x: sourceRect.x + plotSizes.width,
      y: getLinksHorizontalPosition(
        sourceRect,
        nodesVerticalOffsetRatios.get(link.source)
      )
    },
    {
      x: sourceRect.x + plotSizes.width,
      y:
        getLinksHorizontalPosition(
          sourceRect,
          nodesVerticalOffsetRatios.get(link.source)
        ) + linkWidth
    },
    {
      x: targetRect.x,
      y: getLinksHorizontalPosition(
        targetRect,
        nodesVerticalOffsetRatios.get(link.target)
      )
    },
    {
      x: targetRect.x,
      y:
        getLinksHorizontalPosition(
          targetRect,
          nodesVerticalOffsetRatios.get(link.target)
        ) + linkWidth
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
