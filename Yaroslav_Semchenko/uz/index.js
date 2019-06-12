import {MainControl} from "./main-control/main-control.js";
import {GlobalNav} from "./global-menu/global-menu.js";
import {Authorization} from "./authorization/authorization.js";
import {TrainSearcher} from "./train-search/train-search.js"

let globalNav = new GlobalNav([
    {name: "Про УЗ", link: "#", sublist: [
        {link:"#", text: "Загальна інформація"}
        ]},
    {name: "Пасажирам", link: "#", sublist: [
            {link:"#", text: "Загальна інформація"}
        ]},
    {name: "Вантажні перевезення", link: "#", sublist: [
            {link:"#", text: "Нормативно-правова база"},
            {link:"#", text: "Загальна інформація"}
        ]},
    {name: "Прес-центр", link: "#", sublist: [
            {link:"#", text: "Загальна інформація"}
        ]},
    {name: "Контакти", link: "#", sublist: [
            {link:"#", text: "Загальна інформація"}
        ]},
]);
let auth = new Authorization();
let maincontrol = new MainControl(
    [{type: "Skype", name: "uz_booking", link: "#"},
        {type: "Email", name: "booking@uz.gov.ua", link: "#"},
        {type: "Технічна підтримка", name: "+380 (44) 591-1988", link: "#"},
        {type: "Довідкова служба", name: "+380 (44) 309-7005", link: "#"},
    ],
    [{name: "Замовлення квитків", link: "#"},
        {name: "Договір оферти", link: "#"},
        {name: "Приклади бланків", link: "#"},
        {name: "Порядок надання послуг", link: "#"},
        {name: "Перевірка ЕПД", link: "#"},
        {name: "Повернення квитків", link: "#"},
    ], [ {name:"UA", link:"#", selected: true}, {name:"EN", link:"#", selected: false}]);
let searcher = new TrainSearcher([["Київ", "Харків"], ["Київ", "Львів"], ["Козятин", "Жмеринка"]], ["Київ", "Львів", "Харків", "Одеса"]);

maincontrol.render();
globalNav.render(document.querySelector(".main-control__global-nav"));
auth.render(document.querySelector(".main-control__auth"));
searcher.render();