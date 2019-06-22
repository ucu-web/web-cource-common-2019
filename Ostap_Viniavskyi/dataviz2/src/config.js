import { scaleOrdinal, schemeSet1, schemeSet3 } from "d3";

const plotSizes = {
  svgWidth: 800,
  svgHeight: 600,
  width: 30,
  textMargin: 20
};

const margin = { top: 0, right: 250, bottom: 0, left: 200 };

const sourcesFill = scaleOrdinal(schemeSet1);
const targetsFill = scaleOrdinal(schemeSet3);

export { plotSizes, margin, sourcesFill, targetsFill };
