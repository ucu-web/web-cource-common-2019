import { createSankeyPlot } from "./svgCreator";
import { json } from "d3";
import { transformData } from "./dataTransform";

const app = async () => {
  let data = await json("data.json");
  data = transformData(data);
  const container = document.querySelector(".plot-wrapper");
  createSankeyPlot(container, data);
};

app().catch(e => console.log(e));
