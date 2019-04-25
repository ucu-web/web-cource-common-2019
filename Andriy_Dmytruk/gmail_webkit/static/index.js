import "../styles/main.scss"
import Renderable, {Body} from "./Renderable";
import Header from "./Header";
import InboxControls from "./InboxControls";
import LetterSection from "./LetterSection";


let root = new Body(
    new Header(),
    new InboxControls(),
    new LetterSection()
);


root.render();
