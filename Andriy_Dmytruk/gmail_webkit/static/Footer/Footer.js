import Renderable from "../Renderable";

import "./Footer.scss";

class Footer extends Renderable {
    render() {
        this.element = this.elementCreateHTML("footer", this.block(), `
            <div class="${this.block("item", "last")}">
                <p class="${this.block("text")}"> 8.42 GB (56%) of 15 GB used </p>
                <a class="${this.block("link")}" href=""> Manage </a>
            </div>

            <div class="${this.block("item")}">
                <a class="${this.block("link")}" href=""> Terms </a> <span> • </span>
                <a class="${this.block("link")}" href=""> Privacy </a> <span> • </span>
                <a class="${this.block("link")}" href=""> Programme Policies </a>
            </div>

            <div class="${this.block("item", "last")}">
                <p class="${this.block("text")}"> Last account activity: 24 minutes ago </p>
                <a class="${this.block("link")}" href=""> Details </a>
            </div>
        `)
    }
}

export default Footer;
