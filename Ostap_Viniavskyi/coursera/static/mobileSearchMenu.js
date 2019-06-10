import { delegateEvent } from "./helpers";

export const initMobileSearchMenu = async () => {
    const menuHeight = 30; // rem
    const headerHight = 4; //rem
    const mobileSearchMenuButton = document.querySelector(
        ".header__search-menu-button"
    );

    const createMobileSearchMenu = () => {
        const container = document.createElement("nav");
        container.className = "search-sidebar";
        container.innerHTML = `
    <form class="search-sidebar__search-bar" action="#" aria-label="courses-search-bar">
    <input class="search-sidebar__search-input" type="search" placeholder="What do you want to learn?">
    <button class="search-sidebar__search-submit" aria-label="submit-search-query"></button>
  </form>

  <section class="search-sidebar__topics">
    <h2 class="search-sidebar__topics-header">Explore all Topics and Skills</h2>
    <a href="#" class="search-sidebar__topics-link">Arts and Humanities</a>
    <a href="#" class="search-sidebar__topics-link">Business</a>
    <a href="#" class="search-sidebar__topics-link">Computer Science</a>
    <a href="#" class="search-sidebar__topics-link">Data Science</a>
    <a href="#" class="search-sidebar__topics-link">Information Technology</a>
    <a href="#" class="search-sidebar__topics-link">Health</a>
    <a href="#" class="search-sidebar__topics-link">Math and Logic</a>
    <a href="#" class="search-sidebar__topics-link">Personal Development</a>
    <a href="#" class="search-sidebar__topics-link">Physical Science and Engineering</a>
    <a href="#" class="search-sidebar__topics-link">Social Sciences</a>
    <a href="#" class="search-sidebar__topics-link">Language Learning</a>
  </section>
   `;
        return container;
    };

    const translateElement = (menuEl, offset, units) => {
        menuEl.style.transform = "translateY(" + offset + units + ")";
    };

    const menuElement = createMobileSearchMenu();
    menuElement.style.height = menuHeight + "rem";
    menuElement.style.top = - (menuHeight + headerHight) +  "rem";
    document.body.appendChild(menuElement);

    let opened = false;

    delegateEvent(
        mobileSearchMenuButton,
        ".header__search-menu-button",
        "click",
        () => {
            translateElement(menuElement, menuHeight + headerHight, 'rem');
            opened = true;
        }
    );
    //
    // delegateEvent(
    //     menuElement,
    //     '.login-sidebar',
    //     'click',
    //     () => {
    //         translateElement(menuElement, -menuWidth, 'rem');
    //         opened = false;
    //     },
    //     true
    // );
    //
    // delegateEvent(
    //     window,
    //     'body',
    //     'resize',
    //     () => {
    //         translateElement(menuElement, -menuWidth, 'rem');
    //         opened = false;
    //     },
    //     true
    //
    // )

};
