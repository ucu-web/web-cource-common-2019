import {visualize, generatePlate} from "./heatEquation";

const plate1 = generatePlate(100, 100);
const plate2 = generatePlate(100, 100);
const c = 80.4 / (7800 * 0.46);
const dt = 7;
const dx = 1;



visualize(plate1, plate2, c, dt, dx);