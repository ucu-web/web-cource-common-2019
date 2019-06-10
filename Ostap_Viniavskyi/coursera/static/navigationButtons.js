const buttonClassName = "carousel__navigation-button";
const activeButtonClassName = "carousel__navigation-button_active";

export const createNavigationButtons = (buttonsNumber, activeButtonIndex, container) => {
    for (let i = 0; i < buttonsNumber; i++) {
        const button = document.createElement("button");
        button.className = buttonClassName;
        container.appendChild(button);
    }
    container.childNodes[activeButtonIndex].classList.add(
        activeButtonClassName
    );
};

export const removeNavigationButtons = (container) => {
    while (container.lastChild) {
        container.removeChild(container.lastChild);
    }
};