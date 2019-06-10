import {line} from "d3"

export let lineGenerator = line().x(d => d[0]).y(d => d[1]);