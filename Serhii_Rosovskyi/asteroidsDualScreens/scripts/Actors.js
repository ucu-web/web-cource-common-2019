export default class Actors {
  constructor(left, right, up, down) {
    this.keymapConfig = [left, right, up, down];
    this.actions = ["left", "right", "up", "down"];
    this.__subscribersDown = [];
    this.__subscribersUp = [];

    this.initialize();
  }

  initialize() {
    this.keyHandler = ev => {
      const actionIndex = this.keymapConfig.indexOf(ev.code);
      if (actionIndex >= 0) {
        ev.preventDefault();
        this.publish(this.actions[actionIndex], ev.type === "keydown");
      }
    };

    document.addEventListener("keyup", this.keyHandler);
    document.addEventListener("keydown", this.keyHandler);
  }

  publish(value, down) {
    (down ? this.__subscribersDown : this.__subscribersUp).forEach(fn =>
      fn(value)
    );
  }

  subscribe(subscribeFn, down) {
    let storeSubscribers = down ? this.__subscribersDown : this.__subscribersUp;
    storeSubscribers.push(subscribeFn);
    return () => {
      storeSubscribers = storeSubscribers.filter(fn => fn !== subscribeFn);
    };
  }
}
