import {line, mouse, selectAll} from "d3";
import {renderBezierCurve, renderImmediately} from "./bezierCurve"
import {renderPivotLines} from "./pivotsLine"

export const renderPoints = (points, container) => {
    const className = "Bezier-Visualization__stationary-point";
    container.selectAll(".".concat(className)).remove();
    container.selectAll(".".concat(className)).data(points).enter().append("circle").attr("class", className);
    container.selectAll(".".concat(className)).data(points).attr("cx", (d) => d[0]).attr("cy", (d) => d[1]).attr("r", 5);

    initializeHandlers(points, container);
};

const initializeHandlers = (points, container) => {
    selectAll(".Bezier-Visualization__stationary-point")
        .on("mousedown", (_, i) => {
            container.on("mousemove", function () {
                container.selectAll(".Bezier-Visualization__pivots").remove();
                container.select(".Bezier-Visualization__leading-point").remove();
                points[i] = mouse(this);
                [renderStationaryLine, renderImmediately, renderPoints].forEach((f) => f(points, container));
            });

            container.on("mouseup", function () {
                points[i] = mouse(this);
                [renderStationaryLine, renderPivotLines, renderBezierCurve, renderPoints]
                    .forEach((f) => f(points, container));
                container.on("mousemove", null);
                container.on("mouseup", null);
            })
        })
};

export const renderStationaryLine = (points, container) => {
    container.select(".Bezier-Visualization__stationary-line").remove();
    container.append("path").attr("class", "Bezier-Visualization__stationary-line").attr("d", line()(points));
};
