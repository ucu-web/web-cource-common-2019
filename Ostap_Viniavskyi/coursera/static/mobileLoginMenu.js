import { delegateEvent } from "./helpers";

export const initMobileLoginMenu = async () => {
  const menuWidth = 16; // rem
  const mobileLoginMenuButton = document.querySelector(
    ".header__login-menu-button"
  );

  const createMobileLoginMenu = () => {
    const container = document.createElement("nav");
    container.className = "login-sidebar";
    container.innerHTML = `
    <a href="#" class="login-sidebar__link login-sidebar__link_bordered">
    Explore
  </a>
  <a href="#" class="login-sidebar__link">
    For enterprise
  </a>
  <a href="#" class="login-sidebar__link login-sidebar__link_register">
    Join for Free
  </a>
  <a href="#" class="login-sidebar__link login-sidebar__link_login">
    Log In
  </a>
   `;
    return container;
  };

  const translateElement = (menuEl, offset, units) => {
    menuEl.style.transform = "translateX(" + offset + units + ")";
  };

  const menuElement = createMobileLoginMenu();
  menuElement.style.width = menuWidth + "rem";
  menuElement.style.left = -menuWidth + "rem";
  document.body.appendChild(menuElement);

  let opened = false;

  delegateEvent(
    mobileLoginMenuButton,
    ".header__login-menu-button",
    "click",
    () => {
      translateElement(menuElement, menuWidth, 'rem');
      opened = true;
    }
  );

  delegateEvent(
      menuElement,
      '.login-sidebar',
      'click',
      () => {
        translateElement(menuElement, -menuWidth, 'rem');
        opened = false;
      },
      true
  );

  delegateEvent(
      window,
      'body',
      'resize',
      () => {
        translateElement(menuElement, -menuWidth, 'rem');
        opened = false;
      },
      true

  )

};
