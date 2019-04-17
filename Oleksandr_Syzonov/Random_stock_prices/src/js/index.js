import {StockMarket} from "./StockMarket";

let a = new StockMarket(["A", "B"]);
document.body.appendChild(a.toHtml(["a", "c"]));
