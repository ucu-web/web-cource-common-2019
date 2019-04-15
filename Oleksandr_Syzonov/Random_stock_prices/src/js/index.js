import {generateNormal} from "./normal_distribution";

class StockPrices {
    constructor(stock_names){
        this.prices = generateNormal(stock_names.length, 3.5, 0.6454972243679028);
    }
}