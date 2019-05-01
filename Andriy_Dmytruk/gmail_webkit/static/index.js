import "../styles/main.scss"
import {Body} from "./Renderable";
import Header from "./Header";
import InboxControls from "./InboxControls";
import LetterSection from "./LetterSection";
import Services from "./Services";


let root = new Body(
    new Header(),
    new InboxControls(),
    new LetterSection(),
    new Services()
);


root.render();
