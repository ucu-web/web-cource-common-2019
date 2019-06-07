import "./styles/Platform.scss";


export class StaticPlatform {
    width = 60;
    height = 10;
    canBeJumpedOntoTimes = Infinity;
    numberJumpedOnto = 0;
    element = this.createElement();

    createElement() {
        const element = document.createElement("div");
        element.classList.add("platform__static");
        return element;
    }

    updateElement = (element) => {}
}

export class BreakingPlatform {
    width = 60;
    height = 10;
    canBeJumpedOntoTimes = 0;
    numberJumpedOnto = 0;
    element = this.createElement();

    createElement() {
        const element = document.createElement("div");
        element.classList.add("platform__breaking");
        element.innerHTML = `
            <div class="platform__breaking-left"></div>
            <div class="platform__breaking-right"></div>
        `;
        return element;
    }

    updateElement = (element) => {
        if (this.numberJumpedOnto > 0) {
            this.gravity = -600;
            element.querySelector("platform__breaking-left").classList.add("platform__broken-left");
            element.querySelector("platform__breaking-right").classList.add("platform__broken-right");
        }
    }
}

export class PlatformDisappearing {
    width = 60;
    height = 10;
    canBeJumpedOntoTimes = 1;
    numberJumpedOnto = 0;
    element = this.createElement();

    createElement() {
        const element = document.createElement("div");
        element.classList.add("platform__disappearing");
        return element;
    }

    updateElement = (element) => {
        if (this.numberJumpedOnto > 0) {
            element.classList.add("platform__disappeared");
        }
    }
}

export class PlatformHorizontal {
    width = 60;
    height = 10;
    velocityX = Math.round((20 + Math.random() * 60) * (Math.random > 0.5 ? 1 : -1));

    canBeJumpedOntoTimes = Infinity;
    numberJumpedOnto = 0;
    element = this.createElement();

    createElement() {
        const element = document.createElement("div");
        element.classList.add("platform__horizontal");
        return element;
    }

    updateElement = (element) => {}
}

export class PlatformVertical {
    width = 60;
    height = 10;
    initialY = null;

    range = 100 + Math.random() * 200;
    velocityY = Math.round((20 + Math.random() * 20) * (Math.random > 0.5 ? 1 : -1));

    canBeJumpedOntoTimes = Infinity;
    numberJumpedOnto = 0;
    element = this.createElement();

    createElement() {
        const element = document.createElement("div");
        element.classList.add("platform__vertical");
        return element;
    }

    updateElement = (element) => {}
}

export class PlatformDestructing {
    width = 60;
    height = 10;
    timeBeforeDestroyed = (2 + Math.random() * 4);
    canBeJumpedOntoTimes = Infinity;
    numberJumpedOnto = 0;

    element = this.createElement();

    createElement() {
        const element = document.createElement("div");
        element.classList.add("platform__destructing");
        return element;
    }

    updateElement = (element) => {
        if (this.timeBeforeDestroyed < 1) {
            element.classList.add("platform__destructing-alert");
        }
        if (this.timeBeforeDestroyed <= 0) {
            element.classList.add("platform__destroyed");
        }
    }
}