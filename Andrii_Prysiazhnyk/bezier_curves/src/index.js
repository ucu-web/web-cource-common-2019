import "./styles/Bezier-Visualization.scss";
import { select, mouse } from "d3";
import { renderBezierCurve } from "./bezierCurve";
import { renderPivotLines } from "./pivotsLine";
import { renderPoints, renderStationaryLine } from "./staticRender";

const bezierCurveVisualization = (el, options = {}) => {
  let { width, height } = options;

  if (!width || !height) {
    const elBBox = el.getBoundingClientRect();
    width = width || elBBox.width;
    height = height || elBBox.height;
  }

  const svgRoot = select(el)
    .attr("width", width)
    .attr("height", height);

  let initialLayout = [
    [137, 169.8000030517578],
    [563, 169.8000030517578],
    [308, 368.79998779296875],
    [87, 257.79998779296875],
    [469, 48.80000305175781]
  ];

  const render = () => {
    svgRoot
      .datum(initialLayout)
      .call(renderStationaryLine, initialLayout)
      .call(renderPivotLines, initialLayout)
      .call(renderBezierCurve, initialLayout)
      .call(renderPoints, initialLayout);
  };

  render();

  svgRoot.on("click", function() {
    initialLayout.push(mouse(this));
    render();
  });

};

const rootEl = document.querySelector(".Bezier-Visualization__drawing-field");
bezierCurveVisualization(rootEl);
