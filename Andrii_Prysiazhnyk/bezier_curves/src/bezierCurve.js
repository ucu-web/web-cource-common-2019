import { line } from "d3";
import { multiplyPointByScalar, addPoints, combination } from "./myMath";

export const renderBezierCurve = (container, points) => {
  if (points.length === 1) return;

  container.select(".Bezier-Visualization__curve").remove();
  const curve = container
    .append("path")
    .attr("class", "Bezier-Visualization__curve");

  const path = bezierPath(points);
  const lineFn = line();
  curve
    .attr("d", lineFn([path[0]]))
    .transition()
    .duration(points.length * 1000)
    .attrTween("d", () => t =>
      lineFn(path.slice(0, Math.ceil(path.length * t)))
    );

  renderLeadingPoint(points, path, container);

};

export const renderImmediately = (points, container) => {
  container.select(".Bezier-Visualization__curve").remove();
  container
    .append("path")
    .attr("class", "Bezier-Visualization__curve")
    .attr("d", line()(bezierPath(points)));
};

const renderLeadingPoint = (points, path, container) => {
  container.select(".Bezier-Visualization__leading-point").remove();

  container
    .append("circle")
    .attr("class", "Bezier-Visualization__leading-point")
    .attr("r", 4)
    .attr("cx", path[0][0])
    .attr("cy", path[0][1])
    .transition()
    .duration(points.length * 1000)
    .attrTween("cx", () => t => path[Math.ceil((path.length - 1) * t)][0])
    .attrTween("cy", () => t => path[Math.ceil((path.length - 1) * t)][1]);
};

const bezierPath = points =>
  new Array(points.length * 150 + 1)
    .fill(0)
    .map((_, i) => getPointOnBezierCurve(points, i / (points.length * 150)));

const getPointOnBezierCurve = (points, t) => {
  return points
    .map((point, i) =>
      multiplyPointByScalar(point, bezierCoefficient(i, points.length - 1, t))
    )
    .reduce((p1, p2) => addPoints(p1, p2));
};

const bezierCoefficient = (i, n, t) =>
  combination(n, i) * Math.pow(t, i) * Math.pow(1 - t, n - i);
