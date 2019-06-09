import {countries} from "./countries.js";


const httpGet = (url) => {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false );
    xmlHttp.send( null );
    return {"temperature": (Math.round((JSON.parse(xmlHttp.responseText)['list'][0]['main']['temp'] - 273.15)*10)/10).toFixed(1),
        'description': JSON.parse(xmlHttp.responseText)['list'][0]['weather'][0]['main']};};


const getWeather = (city, country) => httpGet(`http://api.openweathermap.org/data/2.5/find?q=${city},${country}&type=like&APPID=a9e60c69101afe2c8545d73448822110`);


const addImage = (element, desc_info) => {
    desc_info === "Cloud" ? element.style.backgroundImage = "url('https://media.giphy.com/media/qoRjmhkYJxP1K/giphy.gif')" :
        desc_info === "Rain" ? element.style.backgroundImage = "url('https://media.giphy.com/media/t7Qb8655Z1VfBGr5XB/giphy.gif')" :
            element.style.backgroundImage = "url('https://media.giphy.com/media/YrO44qhTllT3DZBS6o/giphy.gif')";
    return element;
};


const addCityName = (element, city) => {
    let h2 = document.createElement("h2");h2.innerText = city;element.appendChild(h2);
    addClassName(h2, "main-content__city");
    return element;
};


const addTemperature = (element, temp_info) => {
    let h2 = document.createElement("h2");h2.innerText = temp_info + " °C";element.appendChild(h2);
    addClassName(h2, "main-content__temp");
    return element;
};


const addClassName = (element, classname) => {
    element.className = classname;
    return element;
};


const addDeleteButton = (element) => {
    let button = document.createElement("button");
    button.addEventListener("click", ()=>
        {
            let timer = setInterval(() => {
                parseFloat(element.style.opacity) <= 0 ? clearInterval(timer) : draw_dissappear(element);
            }, 20);
            element.remove();
        }
    );
    button.innerText = "✖️";
    button.className = "main-content__delete-button-wrapper";
    element.appendChild(button);
    return element;
};

const getCountryID = (name) => countries[countries.indexOf(name) - 1];

const draw_appear = () => document.getElementsByClassName("main-content__child")[document.
getElementsByClassName("main-content__child").length - 1].style.opacity = (parseFloat(document.
getElementsByClassName("main-content__child")[document.
getElementsByClassName("main-content__child").length - 1].style.opacity) + 0.05).toString();


const draw_dissappear = (element) => element.style.opacity = (parseFloat(element.style.opacity) - 0.05).toString();


const create_block = (city, country) => {
    let child = document.createElement("div");
    child.style.opacity = 0;
    document.getElementById("info-blocks-container")
        .appendChild(addDeleteButton(addTemperature(addCityName(addImage(
            addClassName(child, "main-content__child"), getWeather(city, getCountryID(country)).description), city),
            getWeather(city, getCountryID(country)).temperature)));
    let timer = setInterval(() => {
        parseFloat(document.getElementsByClassName("main-content__child")[document.
        getElementsByClassName("main-content__child").length - 1].style.opacity) >= 1 ? clearInterval(timer) : draw_appear();
    }, 20);
};



window.onload = () => {
    document.getElementById("submit").addEventListener('click',
        () => create_block(document.getElementById("add_city_input").value,
            document.getElementById("add_country_input").value));
    document.getElementsByClassName("search-wrapper__input")[0].addEventListener("keyup", (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("submit").click();
        }
    });
    document.getElementsByClassName("search-wrapper__input")[1].addEventListener("keyup", (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("submit").click();
        }
    });
};