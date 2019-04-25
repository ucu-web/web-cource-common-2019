import Renderable from "../Renderable";

import "./LetterContainer.scss";

class Letter extends Renderable {
    constructor(letter) {
        super();
        this.letter = letter;
    }
    
    render() {
        let letter = this.letter;
        let id = letter.id;

        this.element = this.elementCreateHTML("tr", this.block(0, {"unread": letter.unread}), `
            <td class="${this.block("select-col")}">
                <input class="${this.block("checkbox")}" id="${"Letter__select__" + id}" type="checkbox">
                <label class="${this.block("round-button select")}" for="${"Letter__select__" + id}" aria-label="select"> </label>
            </td>
            
            <td class="${this.block("favourite-col")}">
                <input class="${this.block("checkbox")}" id="${"Letter__favourite__" + id}" type="checkbox">
                <label class="${this.block("round-button favourite")}" for="${"Letter__favourite__" + id}" aria-label="favourite"> </label>
            </td>
        
            <td class="${this.block("title-col")}"> </td>
            <td class="${this.block("details-col")}"> </td>
            <td class="${this.block("time-col")}"> </td>
        `);

        this.element.getElementsByClassName(this.block("title-col"))[0].innerText = letter.title;
        this.element.getElementsByClassName(this.block("details-col"))[0].innerText = letter.details;
        this.element.getElementsByClassName(this.block("time-col"))[0].innerText = letter.time;
    }
    
}

class LetterContainer extends Renderable {
    addLetters(letters) {
        let table = this.element.getElementsByClassName(this.block("table"))[0];
        
        this.renderChildren(table, letters.map(l => new Letter(l)));
    }

    getLetters() {
        fetch("/data/letters.json")
            .then(response => response.json())
            .then(letters => this.addLetters(letters));
    }
    
    render() {
        this.element = this.elementCreateHTML("main", this.block(), `
            <table class="${this.block("table")}"></table>
        `);

        this.getLetters();
    }
}

export default LetterContainer;
