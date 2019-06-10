export default class Actors {
  constructor(left, right, up, down) {
    const keymapConfig = [left, right, up, down];
    const actions = ["left", "right", "up", "down"];
    this.__subscribers = [];

    document.addEventListener("keydown", ev => {
      const actionIndex = keymapConfig.indexOf(ev.code);
      if (actionIndex >= 0) {
        ev.preventDefault();
        this.publish(actions[actionIndex]);
      }
    });
  }

  publish(value) {
    this.__subscribers.forEach(fn => fn(value));
  }
  subscribe(subscribeFn) {
    this.__subscribers.push(subscribeFn);
    return () => {
      this.__subscribers = this.__subscribers.filter(fn => fn !== subscribeFn);
    };
  }
}
