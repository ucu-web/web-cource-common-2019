import {generateNormal} from "./normal_distribution";
import {htmlToElement, roundToDecimalPl} from "./helper_functions";
import {flatten, map, zip} from 'ramda';

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
    constructor(stocks, parent, images) {
        this.prices = zip(stocks, generateNormal(stocks.length, 3.5, 0.6454972243679028).map((x) => (roundToDecimalPl(x, 1))));
        this.parent = parent;
        this.images = images;
        this.render();
        this.initHandlers();
    }

    changePrices() {
        const add_delta = (x) => {
            let result = roundToDecimalPl(generateNormal(1, 0, 0.5)[0] + x, 1);
            return result > 1 ? result : 1.0;
        };
        const addDeltaToSecond = (x) => ([x[0], add_delta(x[1])]);
        this.prices = this.prices.map(addDeltaToSecond);
    }

    toHtml() {
        let base = htmlToElement(`<div class="Stock_price">
            <div class="Stock_price__stocks"></div>
            <button class="Stock_price__reload">Reload</button>
        </div>`);
        let prices = this.prices;
        prices = zip(prices, this.images);
        prices = map((x) => (flatten(x)), prices);
        prices = map((x) => (stockToArticle(...x)), prices);
        map((x) => {
            base.querySelector(".Stock_price__stocks").appendChild(x)
        }, prices);
        return base;
    }

    reload() {
        this.changePrices();
        let elements = this.parent.querySelectorAll(".Stock_price__price");
        for (let i = 0; i < elements.length; i++) {
            elements[i].innerHTML = this.prices[i][1];
        }
    }

    render() {
        this.parent.appendChild(this.toHtml(["a", "c"]));
    }

    initHandlers() {
        this.parent.addEventListener('click', ev => {
            if (ev.target.matches('.Stock_price__reload')) {
                this.reload();
            }
        })
    }
}