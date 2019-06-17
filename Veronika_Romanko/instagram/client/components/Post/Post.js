import bem from "../../helpers/bem";
import MiniProfile from "../../componentParts/miniProfile/";


const b = bem("post");
const i = bem("icon");
const c = bem("button")
const NavBar = () => {
        let container = document.createElement("div");
        container.className = b();
        container.innerHTML =
            `
                <div class="${b("header")}">
                    
                    <div class="${b("profile-wrapper")}">
                    
                    
                    
                    
                    </div>
                     
                    
                   
                    <button class="${c(["dots-wrapper"])}">
                        <div class="${i(["dots"])}"></div>
                    </button>
                </div>
                
                <div class="${b("content")}">
                    <div class="${b("content-icon")}">
                        <img src="/images/veronikaromanko.jpg" class="${b("image")}">
                        <div class="${b("navigation")}">
                            <div class="${b("navigation-wrapper")}">
                                <button class="button--dots-wrapper">
                                    <span class="${i(["hart"])}"></span>
                                </button>
                                <button class="button--dots-wrapper">
                                    <span class="${i(["coment"])}"></span>
                                </button>
                                <button class="button--dots-wrapper">
                                    <span class="${i(["share"])}"></span>
                                </button>
                            </div>
                            <button class="button--dots-wrapper"><span class="${i(["save"])}"></span></button>
                        </div>
                    </div>
                    <section class="${b("feedback")}">
                             <a href="#" class="${b("feedback-icon-wrapper")}"><img class="${b("feedback-icon")}" src="images/logo.jpg"></a>
                             <span class="${b("feedback-text")}">Уподобали <b>yaryna.skrypets і ще 5004</b></span>
                    </section>
                </div>
                 <div class="${b("comments")}">
                    <ul class="${b("list")}">
                  
                        <li class="${b("list-element")}"><b>vromanko2</b> web is beautiful</li>
                        <li class="${b("list-element")}"><button class="${b('list-button')}">Переглянути всі коментарі</button></li>
                        <li class="${b("list-element")}"><b>vromanko2</b> web is beautiful</li>
                        <li class="${b("list-element")}"><b>vromanko2</b> web is beautiful</li>
                    </ul>
                    <a class ="${b('time')}" href="#"><time>19 год тому</time></a>
                    
                    <section class="${b("add")}">
                         <form class="${b("form")}" action="" method="post">
                            <textarea class="${b("textarea")}" aria-label="Додайте коментар..." placeholder="Додайте коментар..."></textarea>
                            <button class="${b("button")}" type="submit">Опублікувати</button>
                        </form>
                    </section>
                </div>
                
        `;


        container.getElementsByClassName(b("profile-wrapper"))[0].appendChild(MiniProfile());


        return container;
    }
;
export default NavBar;