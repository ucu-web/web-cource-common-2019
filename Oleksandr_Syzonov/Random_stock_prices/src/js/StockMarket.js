import {generateNormal} from "./normal_distribution";
import {htmlToElement, roundToDecimalPl} from "./helper_functions";
import * as R from 'ramda';

function stockToArticle(name, price, image) {
    return htmlToElement(`<article class="Stock_price__stock">
        <img alt="Stock logo" class="Stock_price__stock-logo" src="${image}">
        <h1 class="Stock_price__name">
        ${name}
        </h1>
        <span class="Stock_price__price">
        ${price}
    </span>
    </article>`);
}

export class StockMarket {
    constructor(stocks) {
        this.prices = R.zip(stocks, generateNormal(stocks.length, 3.5, 0.6454972243679028).map((x) => (roundToDecimalPl(x, 1))));
    }

    changePrices() {
        const add_delta = (x) => {
            let result = roundToDecimalPl(generateNormal(1, 0, 0.5)[0] + x, 1);
            return result > 1 ? result : 1.0;
        };
        const addDeltaToSecond = (x) => ([x[0], add_delta(x[1])]);
        this.prices = this.prices.map(addDeltaToSecond);
    }

    toHtml(images) {
        console.log(this.prices);
        console.log(images);
        let base = htmlToElement(`<div class="Stock_price"></div>`);
        let button = htmlToElement(`<button class="Stock_price__reload">Reload</button>`);
        let stocksContainer = htmlToElement(`<div class="Stock_price__stocks">
           </div>`);
        let htmlArray = R.zip(this.prices, images).map((x) => (x.flat())).map((x) => (stockToArticle(...x)));
        htmlArray.map((x) => {stocksContainer.appendChild(x)});
        base.appendChild(stocksContainer);
        base.appendChild(button);
        console.log(base);
        return base;
    }
}