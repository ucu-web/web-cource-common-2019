import Renderable from "../Renderable";
import LetterControls from "./LetterControls";
import LetterContainer from "./LetterContainer";

import "./LetterSection.scss";
import LetterNavigation from "./LetterNavigation";
import Footer from "../Footer";

class LetterSection extends Renderable {
    render() {
        this.element = this.elementCreate("section", this.block());

        this.renderChildren(this.element, [
            new LetterNavigation(),
            new LetterControls(),
            new LetterContainer(),
            new Footer()
        ]);
    }
}

export default LetterSection;
