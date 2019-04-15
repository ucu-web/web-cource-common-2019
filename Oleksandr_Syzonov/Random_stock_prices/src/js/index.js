import {generateNormal} from "./normal_distribution";

const roundToDecimalPl = (x, precision) => (Number(x.toFixed(precision)));

function zip(arrays) {
    return arrays[0].map(function (_, i) {
        return arrays.map(function (array) {
            return array[i]
        })
    });
}

class StockPrices {
    constructor(stock_names, container) {
        this.prices = zip([stock_names, generateNormal(stock_names.length, 3.5, 0.6454972243679028).map((x) => (roundToDecimalPl(x, 1)))]);
        this.container = container;
        this.render();
    }

    render() {
        let stock_market = document.createElement('div');
        stock_market.className = 'Stock_price';
        this.prices.map((arr) => {
            console.log(arr);
            let htmlArticle = `<article class="Stock_price__stock">
        <img src="img/austin-chan-275638-unsplash.jpg" class="Stock_price__stock-logo" alt="Stock logo">
        <h1 class="Stock_price__name">
            ${arr[0]}
        </h1>
        <span class="Stock_price__price">
            ${arr[1]}
        </span>
    </article>`;
            let specialDiv = document.createElement('div');
            specialDiv.innerHTML = htmlArticle.trim();
            specialDiv = specialDiv.firstChild;
            stock_market.appendChild(specialDiv);
        });
        console.log(stock_market);
        this.container.appendChild(stock_market);
    }
}

const stock = new StockPrices(["Bear", 'Grills', 'chicken'], document.body);