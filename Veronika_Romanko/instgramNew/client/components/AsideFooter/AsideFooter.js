import bem from "../../helpers/bem";


const b = bem("footer");
const AsideFooter = () => {
    let container = document.createElement("div");
    container.className = b();
    container.innerHTML =
        `<ul class='${b("list")}'>
                    <li class="${b("list-element")}"><a href="#">Про нас</a></li>
                    <li class="${b("list-element")}"><a href="#">Підтримка</a></li>
                    <li class="${b("list-element")}"><a href="#">Преса</a></li>
                    <li class="${b("list-element")}"><a href="#">API</a></li>
                    <li class="${b("list-element")}"><a href="#">Вакансії</a></li>
                    <li class="${b("list-element")}"><a href="#">Конфіденційність</a></li>
                    <li class="${b("list-element")}"><a href="#">Умови</a></li>
                    <li class="${b("list-element")}"><a href="#">Каталог</a></li>
                    <li class="${b("list-element")}"><a href="#">Профілі</a></li>
                    <li class="${b("list-element")}"><a href="#">Хештеги</a></li>
                    <li class="${b("list-element")}"><a href="#">Мова</a></li>
                </ul>
                <span class='${b("title")}'>© Instagram, 2019</span>
        `;

    // const profileRoot = container.getElementsByClassName(b("profiles"))[0];
    // profiles.map(item => profileRoot.appendChild(item));


    return container;
};
export default AsideFooter;