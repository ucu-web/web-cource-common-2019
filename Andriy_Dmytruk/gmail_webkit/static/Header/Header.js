import Renderable from "../Renderable";

import "./Header.scss";

class Header extends Renderable {
    render() {
        this.element = this.elementCreateHTML("header", this.block(), `
            <button class="${this.block("round-button show-menu")}"></button>
            <a class="${this.block("logo")}" href="/" aria-label="Gmail logo">
                <img src="../../images/logo.png" alt="logo">
            </a>
    
            <form class="${this.block("search-container")}" action="/search" method="get">
                <button type="submit" class="${this.block("search-submit round-button")}" aria-label="Search"></button>
    
                <input class="${this.block("search-input")}" type="text" name="q" placeholder="Search mail">
    
                <button type="button" class="${this.block("search-clear round-button")}" aria-label="Clear search"></button>
                <button type="button" class="${this.block("search-options round-button")}" aria-label="Show search options"></button>
            </form>
    
            <div class="${this.block("menu")}">
                <button class="${this.block("google-apps round-button")}" aria-label="Google apps"> </button>
                <button class="${this.block("notifications round-button")}" aria-label="Notifications"> </button>
    
                <button class="${this.block("account round-button")}" aria-label="Account">
                    <img class="${this.block("account-image")}" alt="Account image" src="../../images/account-image.jpg">
                </button>
            </div>
        `)
    }
}

export default Header;
