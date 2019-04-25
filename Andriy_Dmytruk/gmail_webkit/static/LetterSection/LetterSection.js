import Renderable from "../Renderable";
import LetterControls from "./LetterControls";
import LetterContainer from "./LetterContainer";

import "./LetterSection.scss";

class LetterSection extends Renderable {
    render() {
        this.element = this.elementCreate("section", this.block());

        this.renderChildren(this.element, [new LetterControls(), new LetterContainer()])
    }
}

export default LetterSection;
