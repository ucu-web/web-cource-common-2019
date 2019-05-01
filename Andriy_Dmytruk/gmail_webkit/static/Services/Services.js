import Renderable from "../Renderable";

import "./Services.scss";

class Services extends Renderable {
    render() {
        this.element = this.elementCreateHTML("nav", this.block(), `
        <a class="${this.block("round-button calendar")}" href="" aria-label="Calendar"></a>
        <a class="${this.block("round-button keep")}" href="" aria-label="Keep"></a>
        <a class="${this.block("round-button tasks")}" href="" aria-label="Tasks"></a>

        <hr class="${this.block("line")}">

        <button class="${this.block("round-button get")}" aria-label="Get add-ons"></button>
        `)
    }
}

export default Services;
