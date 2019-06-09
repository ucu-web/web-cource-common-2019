import {line} from "d3"

export var lineGenerator = line().x(d => d[0]).y(d => d[1]);
