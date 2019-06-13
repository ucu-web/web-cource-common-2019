import { map } from "d3";

export const drawNodesProportionsRects = (
  svgContainer,
  sourceTargetRelationData,
  sourcesRectsDescriptions,
  targetsRectsDescriptions,
  plotSizes,
  sourcesFill,
  targetsFill
) => {
  const nodesVerticalOffsetRatios = map();
  svgContainer
    .call(
      drawOneSideProportionsRects,
      sourceTargetRelationData,
      "plot__source-proportions-rect",
      plotSizes,
      sourcesRectsDescriptions,
      targetsRectsDescriptions,
      nodesVerticalOffsetRatios,
      targetsFill,
      true
    )
    .call(
      drawOneSideProportionsRects,
      sourceTargetRelationData,
      "plot__target-proportions-rect",
      plotSizes,
      sourcesRectsDescriptions,
      targetsRectsDescriptions,
      nodesVerticalOffsetRatios,
      sourcesFill,
      false
    );
};

const drawOneSideProportionsRects = (
  svgContainer,
  sourceTargetRelationData,
  rectsClassName,
  plotSizes,
  sourcesRectsDescriptions,
  targetsRectsDescriptions,
  nodesVerticalOffsetRatios,
  fill,
  isSource
) => {
  svgContainer
    .selectAll("rect." + rectsClassName)
    .data(sourceTargetRelationData.links)
    .enter()
    .append("rect")
    .classed(rectsClassName, true)
    .attr("width", plotSizes.width / 2)
    .attr("height", link => {
      const fieldRectDescription = sourcesRectsDescriptions.filter(
        i => i.name === link.source
      )[0];
      return fieldRectDescription.height * link.proportion;
    })
    .attr("x", link =>
      isSource
        ? getSourceRectXCoordinate(link, sourcesRectsDescriptions, plotSizes)
        : getTargetRectXCoordinate(link, targetsRectsDescriptions)
    )
    .attr("y", link =>
      isSource
        ? getSourceRectYCoordinate(
            link,
            nodesVerticalOffsetRatios,
            sourcesRectsDescriptions
          )
        : getTargetRectYCoordinate(
            link,
            nodesVerticalOffsetRatios,
            sourcesRectsDescriptions,
            targetsRectsDescriptions
          )
    )
    .attr("fill", link =>
      fill(
        isSource
          ? sourceTargetRelationData.targetNameToIndex.get(link.target)
          : sourceTargetRelationData.sourceNameToIndex.get(link.source)
      )
    );
};

const getSourceRectYCoordinate = (
  link,
  nodesVerticalOffsetRatios,
  sourcesRectsDescriptions
) => {
  if (!nodesVerticalOffsetRatios.has(link.source))
    nodesVerticalOffsetRatios.set(link.source, 0);
  const sourceRect = sourcesRectsDescriptions.filter(
    i => i.name === link.source
  )[0];
  const y =
    sourceRect.y +
    sourceRect.height * nodesVerticalOffsetRatios.get(link.source);
  nodesVerticalOffsetRatios.set(
    link.source,
    nodesVerticalOffsetRatios.get(link.source) + link.proportion
  );
  return y;
};

const getTargetRectYCoordinate = (
  link,
  nodesVerticalOffsetRatios,
  sourcesRectsDescriptions,
  targetsRectsDescriptions
) => {
  if (!nodesVerticalOffsetRatios.has(link.target))
    nodesVerticalOffsetRatios.set(link.target, 0);
  const sourceRect = sourcesRectsDescriptions.filter(
    i => i.name === link.source
  )[0];
  const targetRect = targetsRectsDescriptions.filter(
    i => i.name === link.target
  )[0];
  const y =
    targetRect.y +
    targetRect.height * nodesVerticalOffsetRatios.get(link.target);
  nodesVerticalOffsetRatios.set(
    link.target,
    nodesVerticalOffsetRatios.get(link.target) +
      (sourceRect.height * link.proportion) / targetRect.height
  );
  return y;
};

const getTargetRectXCoordinate = (link, targetsRectsDescriptions) => {
  const targetRect = targetsRectsDescriptions.filter(
    i => i.name === link.target
  )[0];
  return targetRect.x;
};

const getSourceRectXCoordinate = (
  link,
  sourcesRectsDescriptions,
  plotSizes
) => {
  const sourceRect = sourcesRectsDescriptions.filter(
    i => i.name === link.source
  )[0];
  return sourceRect.x + plotSizes.width / 2;
};
