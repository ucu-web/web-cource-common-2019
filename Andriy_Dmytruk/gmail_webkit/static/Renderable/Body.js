import Renderable from "./Renderable";

class Body extends Renderable {
    constructor(...children) {
        super(...children);
    }

    render () {
        this.element = document.querySelector("body");
        if (!this.element) throw Error("Failed to create body element");
        this.renderChildren();
    }
}

export default Body;
