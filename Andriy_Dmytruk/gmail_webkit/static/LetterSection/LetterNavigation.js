import Renderable from "../Renderable";

import "./LetterNavigation.scss"

class LetterNavigation extends Renderable {
    render() {
        this.element = this.elementCreateHTML("nav", this.block(), `
            <input class="${this.block("radio")}" id="${this.block("primary")}" name="${this.block()}" type="radio" checked role="tab">
            <label class="${this.block("item primary")}" for="${this.block("primary")}"> Primary </label>

            <input class="${this.block("radio")}" id="${this.block("social")}" name="${this.block()}" type="radio" role="tab">
            <label class="${this.block("item social")}" for="${this.block("social")}"> Social </label>

            <input class="${this.block("radio")}" id="${this.block("promotions")}" name="${this.block()}" type="radio" role="tab">
            <label class="${this.block("item promotions")}" for="${this.block("promotions")}"> Promotions </label>
        `);
    }
}

export default LetterNavigation;
