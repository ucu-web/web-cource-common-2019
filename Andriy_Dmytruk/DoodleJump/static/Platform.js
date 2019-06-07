import "./styles/Platform.scss";

const createPlatformElement = (className) => {
    const element = document.createElement("div");
    element.classList.add(className);
    return element;
};
const createPlatform = (x, y, element) => ({
    x, y,
    width: 60,
    height: 10,
    canBeJumpedOntoTimes: Infinity,
    jumpedOntoTimes: 0,
    element
});


export const createPlatformStatic = (x, y) => ({
    ...createPlatform(x, y, createPlatformElement("platform__static"))
});


const createPlatformBreakingElement = () => {
    const element = document.createElement("div");
    element.classList.add("platform__breaking");
    element.innerHTML = `
            <div class="platform__breaking-left"></div>
            <div class="platform__breaking-right"></div>
        `;
    return element;
};
export const createPlatformBreaking = (x, y) => ({
    ...createPlatform(x, y, createPlatformBreakingElement()),
    canBeJumpedOntoTimes: 0
});


export const createPlatformDisappearing = (x, y) => ({
    ...createPlatform(x, y, createPlatformElement("platform__disappearing")),
    canBeJumpedOntoTimes: 1,
    updateElement: (platform) => {
        if (platform.jumpedOntoTimes > 0) {
            platform.element.classList.add("platform__disappeared");
        }
    }
});


export const createPlatformHorizontal = (x, y) => ({
    ...createPlatform(x, y, createPlatformElement("platform__horizontal")),
    velocityX: Math.round((20 + Math.random() * 60) * (Math.random > 0.5 ? 1 : -1))
});


export const createPlatformVertical = (x, y) => ({
    ...createPlatform(x, y, createPlatformElement("platform__vertical")),
    range: 100 + Math.random() * 200,
    velocityY: Math.round((20 + Math.random() * 20) * (Math.random > 0.5 ? 1 : -1)),
    initialY: y
});


export const createPlatformDestructing = (x, y) => ({
    ...createPlatform(x, y, createPlatformElement("platform__destructing")),
    timeBeforeDestroyed: (2 + Math.random() * 4),

    updateElement: (platform) => {
        if (platform.timeBeforeDestroyed < 1) {
            platform.element.classList.add("platform__destructing-alert");
        }
        if (platform.timeBeforeDestroyed <= 0) {
            platform.element.classList.add("platform__destroyed");
        }
    }
});


