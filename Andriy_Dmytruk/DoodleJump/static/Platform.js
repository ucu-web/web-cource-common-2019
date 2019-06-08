import "./styles/Platform.scss";

const createPlatformElement = className => {
  const element = document.createElement("div");
  element.classList.add(className);
  return element;
};

const createBasicPlatform = (x, y, type) => ({
  x,
  y,
  width: 60,
  height: 10,
  canBeJumpedOntoTimes: Infinity,
  jumpedOntoTimes: 0,
  element: createPlatformElement(`platform__${type}`),
  setPosition: (platform, x, y) => {
    platform.element.style.bottom = y + "px";
    platform.element.style.left = x + "px";
  },
  deleteElement: (platform) => platform.element.parentNode && platform.element.parentNode.removeChild(platform.element)
});

export const createPlatform = (x, y, type) => {
  const platform = createBasicPlatform(x, y, type);

  switch (type) {
    case "static":
      return platform;

    case "breaking":
      platform.element.innerHTML = `<div class="platform__breaking-left"></div><div class="platform__breaking-right"></div>`;
      return {
        ...platform,
        canBeJumpedOntoTimes: 0,
        updateElement: platform => {
          if (platform.jumpedOntoTimes > 0) {
            platform.element
              .querySelector(".platform__breaking-left")
              .classList.add("platform__broken-left");
            platform.element
              .querySelector(".platform__breaking-right")
              .classList.add("platform__broken-right");
          }
        }
      };

    case "disappearing":
      return {
        ...platform,
        canBeJumpedOntoTimes: 1,
        updateElement: platform => {
          if (platform.jumpedOntoTimes > 0) {
            platform.element.classList.add("platform__disappeared");
          }
        }
      };

    case "horizontal":
      return {
        ...platform,
        velocityX: (0.02 + Math.random() * 0.06) * (Math.random > 0.5 ? 1 : -1)
      };

    case "vertical":
      return {
        ...platform,
        range: 100 + Math.random() * 200,
        velocityY: (0.02 + Math.random() * 0.02) * (Math.random > 0.5 ? 1 : -1),
        initialY: y
      };

    case "destructing":
      return {
        ...platform,
        timeBeforeDestroyed: 2000 + Math.random() * 4000,

        updateElement: platform => {
          if (platform.timeBeforeDestroyed < 1000) {
            platform.element.classList.add("platform__destructing_alert");
          }
          if (platform.timeBeforeDestroyed <= 0) {
            platform.element.classList.add("platform__destroyed");
          }
        }
      };
  }
};
