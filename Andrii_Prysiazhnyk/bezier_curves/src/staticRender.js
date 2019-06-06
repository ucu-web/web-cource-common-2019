import { line, mouse, selectAll } from "d3";
import { renderBezierCurve, renderImmediately } from "./bezierCurve";
import { renderPivotLines } from "./pivotsLine";

export const renderPoints = (container, points) => {
  const className = "Bezier-Visualization__stationary-point";
  container.selectAll("." + className).remove();

  container
    .selectAll("." + className)
    .data(points)

    .enter()
    .append("circle")
    .attr("class", className)

    .attr("cx", ([x]) => x)
    .attr("cy", ([, y]) => y)
    .attr("r", 5);

  initializeHandlers(container, points);
};

const initializeHandlers = (selection, points) => {
  selectAll(".Bezier-Visualization__stationary-point").on(
    "mousedown",
    (_, i) => {
      selection.on("mousemove", function() {
        selection.selectAll(".Bezier-Visualization__pivots").remove();
        selection.select(".Bezier-Visualization__leading-point").remove();

        points[i] = mouse(this);

        selection
          .call(renderStationaryLine, points)
          .call(selections => {
            renderImmediately(points, selections);
          })
          .call(renderPoints, points);
      });

      selection.on("mouseup", function() {
        points[i] = mouse(this);

        renderStationaryLine(selection, points);
        renderPivotLines(selection, points);
        renderBezierCurve(selection, points);
        renderPoints(selection, points);

        selection.on("mousemove", null);
        selection.on("mouseup", null);
      });
    }
  );
};

export const renderStationaryLine = function(selection, points) {
  selection.select(".Bezier-Visualization__stationary-line").remove();
  selection
    .append("path")
    .attr("class", "Bezier-Visualization__stationary-line")
    .attr("d", line()(points));
};
