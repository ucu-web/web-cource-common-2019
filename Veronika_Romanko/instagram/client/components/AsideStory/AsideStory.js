import bem from "../../helpers/bem";
import MiniProfile from "../../componentParts/miniProfile/MiniProfile";


const b = bem("story");
const AsideStory = () => {
    let profiles = [
        MiniProfile(),
        MiniProfile(),
        MiniProfile(),
        MiniProfile(),
        MiniProfile(),
        MiniProfile(),
        MiniProfile(),
        MiniProfile(),
        MiniProfile(),
        MiniProfile(),
        MiniProfile()];
    let container = document.createElement("div");
    container.className = b();
    container.innerHTML =
        `
        <div class="${b("wrapper")}">
            <div class="${b("header")}">
            
            <span class="${b("header-title")}">Розповіді</span>
            <span class="${b("header-subtitle")}">Переглянути Все</span>
            
            </div>
            
            
            <div class="${b("profiles")}">

            
            </div>
        </div>
        `;

    const profileRoot = container.getElementsByClassName(b("profiles"))[0];
    profiles.map(item => profileRoot.appendChild(item));


    return container;
};
export default AsideStory;