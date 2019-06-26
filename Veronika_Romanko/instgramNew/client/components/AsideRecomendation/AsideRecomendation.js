import bem from "../../helpers/bem";
import MiniProfile from "../../componentParts/miniProfile/MiniProfile";


const b = bem("recomendation");
const AsideRecomendation = () => {
    let profiles = [
        MiniProfile(),
        MiniProfile(),
        MiniProfile()];
    let container = document.createElement("div");
    container.className = b();
    container.innerHTML =
        `
        <div class="${b("wrapper")}">
            <div class="${b("header")}">
            
            <span class="${b("header-title")}">Рекомендації для вас</span>
            <span class="${b("header-subtitle")}"><a href="#">Переглянути всіх</a></span>
            
            </div>
            
            
            <div class="${b("profiles")}">

            
            </div>
        </div>
        `;

    const profileRoot = container.getElementsByClassName(b("profiles"))[0];
    profiles.map(item => {
        let subskribe = document.createElement("button");
        subskribe.className = b("sub-button");
        subskribe.innerText = "Стежити";

        item.className = "mini-profile " + b("mini-profile");
        item.appendChild(subskribe);
        profileRoot.appendChild(item);
    });
    return container;
};
export default AsideRecomendation;