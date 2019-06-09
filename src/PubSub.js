class PubSub {
    constructor() {
        this.callbacks = [];
    }

    subscribe(callback) {
        this.callbacks.push(callback);

        return () =>
            (this.callbacks = this.callbacks.filter(fn => fn !== callback));
    }

    publish() {
        this.callbacks.forEach(fn => fn(...arguments));
    }
}

export default PubSub;
