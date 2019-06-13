import {select} from "d3"
import {initializeBezierCurvesVisualization} from "./initializeBezierCurvesVisualization";


const defaultPoints = [[50, 50], [50, 400], [400, 400], [400, 50], [200, 200]];
const svg = select("body").append("svg").attr("class", "bezier-field");

initializeBezierCurvesVisualization(svg, defaultPoints);