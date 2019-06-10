import CourseCart from "../CourseCart/";
import Component from "../../helpers/lib/component";
import store from "../../helpers/store";
import bem from "../../helpers/bem";

const b = bem("course-content-regular");

class CourseBigBlock extends Component {
    constructor(app, data) {
        let container = document.createElement("div");
        super({
            store,
            element: container
        });
        this.container = container;
        app.appendChild(this.container);
        this.data = data;
        this.render();
    }

    static addContent(item) {
        return `
        <li class="${b("list-item")}">
            <div class="${b("list-item-wrapper")}">
             <img class="${b("list-item-icon")}" src="images/react_mini.png" alt="">    
                <div class="${b("list-item-title")}">${item}</div>
            </div>
            <div class="${b("list-item-time")}">04:24</div>
        </li>`;
    }

    render() {
        this.container.className = "course-big-block__wrapper flex-join";
        this.container.innerHTML = ``;
        new CourseCart(this.container, this.data["_id"]);
        this.container.innerHTML += `
            <div class="course-content-regular">
                <ul class="${b("list")}">
                    ${store.state.allLessons.data
                    .filter(item => this.data.lessons.indexOf(item["_id"]))
                    .map(item => CourseBigBlock.addContent(item.name))
                    .join("")}
                </ul>
            </div>

            `
        ;
    }
}

export default CourseBigBlock;
