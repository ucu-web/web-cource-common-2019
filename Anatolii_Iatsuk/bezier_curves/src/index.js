import {select} from "d3"
import {initializeBezierCurvesVisualization} from "./initializeBezierCurvesVisualization";


let default_points = [[50, 50], [50, 400], [400, 400], [400, 50], [200, 200]];
let svg = select("body").append("svg").attr("class", "bezier-field");

initializeBezierCurvesVisualization(svg, default_points);