import "./styles/Bezier-Visualization.scss"
import {select, mouse} from "d3";
import {renderBezierCurve} from "./bezierCurve"
import {renderPivotLines} from "./pivotsLine"
import {renderPoints, renderStationaryLine} from "./staticRender"


const start = () => {
    const width = 800, height = 500;

    const field = select(".Bezier-Visualization__drawing-field")
        .attr("width", width)
        .attr("height", height);

    let initialLayout = [];

    field.on("click", function () {
        initialLayout.push(mouse(this));
        renderStationaryLine(initialLayout, field);
        renderPivotLines(initialLayout, field);
        renderBezierCurve(initialLayout, field);
        renderPoints(initialLayout, field);
    });
};

start();
