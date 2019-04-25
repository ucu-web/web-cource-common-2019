import Renderable from "../Renderable";

import "./LetterControls.scss";

class LetterControls extends Renderable {
    render() {
        this.element = this.elementCreateHTML("form", this.block(), `
            <div class="${this.block("selection-container")}">
				<input class="${this.block("checkbox")}" id="${this.block("select-all")}" type="checkbox">
				<label class="${this.block("square-button select-all")}" for="${this.block("select-all")}" aria-label="Select all"></label>
				<button type="button" class="${this.block("square-button narrow-button select-custom")}" aria-label="Custom select"> </button>
			</div>

			<button type="button" class="${this.block("round-button refresh")}" aria-label="Refresh"></button>
			<button type="button" class="${this.block("round-button options")}" aria-label="Options"></button>

			<div class="${this.block("splitter")}"> </div>

			<button type="button" class="${this.block("square-button text-container")}"> 1-50 of 994 </button>
			<button type="button" class="${this.block("round-button newer")}" aria-label="Newer" disabled></button>
			<button type="button" class="${this.block("round-button older")}" aria-label="Older"></button>

			<button type="button" class="${this.block("square-button text-container input-tools")}" aria-label="Input tools on/off (Ctrl-Shift-K)"> En </button>
			<button type="button" class="${this.block("square-button narrow-button input-tools-select")}" aria-label="Select input tool"></button>

			<button type="button" class="${this.block("round-button settings")}" aria-label="Settings"></button>
        `)
    }
}

export default LetterControls;
