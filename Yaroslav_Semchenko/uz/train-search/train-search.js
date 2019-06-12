
function makeDate(date) {
    return ("0" + date.getDate()).slice(-2) + "." + ("0" + (date.getMonth() + 1)).slice(-2) + "." + date.getFullYear().toString();
}

function process_trains(data) {
    if (data["warning"] !== undefined) {
        let res = document.querySelector(".train-search__error");
        res.innerHTML = data["warning"];
        res.style.display = "block";
        document.querySelector(".train-search__list").style.display = "none";
    } else {
        let res = document.querySelector(".train-search__list");
        res.innerHTML +=
         `
${data["list"].map(el => `<tr>
<td class="train-search__number">${el["num"]}</td>
<td class="train-search__stations">${el["from"]["stationTrain"]}<br/>${el["to"]["stationTrain"]}</td>
<td><div class="train-search__dates"><span>Відправлення</span><span>${el["from"]["date"]}</span><span>Прибуття</span><span>${el["to"]["date"]}</span></div></td>
<td class="train-search__times">${el["from"]["time"]}<br/>${el["to"]["time"]}</td>
<td class="train-search__travel-time">${el["travelTime"]}</td>
<td class="train-search__place-list">${el["types"].length ? el["types"].map(el => `<div class="train-search__place">
<div class="train-search__place-type">${el["letter"]}</div>
<div class="train-search__place-count">${el["places"]}</div>
<button class="train-search__place-select">Вибрати</button>
</div>`).join('') : "Немає вільних місць"}</td>
</tr>`).join('')}
`;
        document.querySelector(".train-search__error").style.display = "none";
        res.style.display = "table";
    }
}

export class TrainSearcher {
    constructor(popularDirs, popularStations) {
        this.directions = popularDirs;
        this.stations = popularStations;
        this.initCallbacks();
    }

    initCallbacks() {
        document.addEventListener('click', ev => {
            if (ev.target.matches(".train-search__popular-station")) {
                let station = ev.target.innerText;
                let el = ev.target.closest(".train-search__station").querySelector(".train-search__input");
                el.value = station;
            }
            if (ev.target.matches(".train-search__popular-train")) {
                let stations = ev.target.innerText.split(" ↔ ");
                let el = document.querySelectorAll(".train-search__input");
                stations.forEach((st, ind) => el[ind].value = st);
            }
            if (ev.target.matches(".train-search__reverse")) {
                let el = document.querySelectorAll(".train-search__input");
                [el[0].value, el[1].value] = [el[1].value, el[0].value];
            }
        });
        document.addEventListener('change', ev => {
            if (ev.target.matches(".train-search__input[type=date]")) {
                document.querySelector(".train-search__date-display").innerHTML = makeDate(new Date(ev.target.value));
            }
        });
        document.addEventListener('click', async ev => {
            if (ev.target.matches(".train-search__button") || ev.target.matches(".train-search__button *")) {
                if (![...document.querySelectorAll(".train-search__input")].every(el => el.value.length)) {
                    alert ("Введіть станції відправлення та призначення!");
                    return;
                }
                let data = new URLSearchParams(new FormData(document.querySelector(".train-search__form")));
                let result = await(await fetch("http://localhost:5000/", {
                    method: 'post',
                    body: data,
                })).json();
                process_trains(result["data"]);
            }
        });
    }

    renderPopular(){
        let el = document.querySelector(".train-search__popular-list");
        el.innerHTML = this.directions.map(el => `<div class="train-search__popular-train">${el[0] + " ↔ " + el[1]}</div>`).join('')
    }

    renderPopularStations() {
        return this.stations.map(el => `<span class="train-search__popular-station">${el}</span>`).join('');
    }

    renderStation(name, label) {
        return `<div class="train-search__station">
<div class="train-search__label">${label}</div>
<input type="text" name="${name}" class="train-search__input" autocomplete="off"/>
${this.renderPopularStations()}
</div>`;
    }

    renderDate() {
        let date = new Date();
        document.querySelector(".train-search__date-display").innerHTML = makeDate(date);
        return `<div class="train-search__date">
<div class="train-search__label">Дата відправлення</div>
<input type="date" name="date" class="train-search__input" value="${date.toISOString().split('T')[0]}"/>
</div>`;
    }

    renderForm() {
        let el = document.querySelector(".train-search__form");
        el.innerHTML = `${this.renderStation("from", "Звідки")}
<img class="train-search__reverse" src="https://booking.uz.gov.ua/i/img/desktop/ic-change-direction.svg"/>
${this.renderStation("to", "Куди")}
${this.renderDate()}`;
    }

    render() {
        this.renderPopular();
        this.renderForm();
    }
}