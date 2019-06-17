import bem from "../../helpers/bem";


const b = bem("footer");
const AsideFooter = () => {
    let container = document.createElement("div");
    container.className = b();
    container.innerHTML =
        `<ul class='${b("list")}'>
                    <li class="${b("list-element")}"><a>Про нас</a></li>
                    <li class="${b("list-element")}"><a>Підтримка</a></li>
                    <li class="${b("list-element")}"><a>Преса</a></li>
                    <li class="${b("list-element")}"><a>API</a></li>
                    <li class="${b("list-element")}"><a>Вакансії</a></li>
                    <li class="${b("list-element")}"><a>Конфіденційність</a></li>
                    <li class="${b("list-element")}"><a>Умови</a></li>
                    <li class="${b("list-element")}"><a>Каталог</a></li>
                    <li class="${b("list-element")}"><a>Профілі</a></li>
                    <li class="${b("list-element")}"><a>Хештеги</a></li>
                    <li class="${b("list-element")}"><a>Мова</a></li>
                </ul>
                <span class='${b("title")}'>© Instagram, 2019</span>
        `;

    // const profileRoot = container.getElementsByClassName(b("profiles"))[0];
    // profiles.map(item => profileRoot.appendChild(item));


    return container;
};
export default AsideFooter;