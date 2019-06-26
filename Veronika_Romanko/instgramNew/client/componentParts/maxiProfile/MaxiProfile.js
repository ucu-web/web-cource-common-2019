import bem from "../../helpers/bem";
import "./MaxiProfile.scss"

const b = bem("maxi-profile");
const NavBar = () => {
    let data = {
        icon: "/images/logo.jpg",
        title: "vromanko2",
        subTitle: "Veronika",
        modifications: []
    };


    let container = document.createElement("div");
    container.className = b();
    container.innerHTML =

        `       <a class="${b("icon-wrapper")}">
                    <img  class="${b("icon")}" src=${data.icon} alt="">
                </a>
                <div class="${b("content")}">
                    <div class="${b("content-title")}">
                        ${data.title}
                    </div>
                    <div class="${b("content-sub-title")}">
                        ${data.subTitle}
                    </div>
                </div>
                
        `;
    container.className = b();
    return container;
};
export default NavBar;