import CourseCart from "../CourseCart/";
import bem from "../../helpers/bem";
import Component from "../../helpers/lib/component";
import store from "../../helpers/store";
import {getAllCourses, getAllLessons} from "../../helpers/actions/api";
import {CheckAction} from "../../helpers/CheckAction";

const b = bem("publications");

class Publishments extends Component {
    constructor(app) {
        let container = document.createElement("section");
        super({store});
        this.container = container;
        this.container.className = b();
        app.appendChild(this.container);
        Publishments.dispatchAll();
        this.render();
    }

    static dispatchAll() {
        CheckAction(store.state.allCourses, getAllCourses, store);
        CheckAction(store.state.allLessons, getAllLessons, store);
    }

    render() {
        this.container.className = `${b()}`;
        this.container.innerHTML = `
        <div class="${b(
            "wrapper"
        )}">
            <div class="publications__header">
                <div class="publications__header-label">
                    <span class="${b("header-label-title")}">
                        What's New
                    </span>
                    <span class="${b("header-label-sub-title")}">
                        Latest Published Courses & Lessons
                    </span>
                </div>

                <button class="publications__button">
                    <span>Browse All </span>
                   <img src="/images/rightArrow.svg"  alt="">
                </button>
            </div>
        </div>
        <div class="${b("list")}">
        </div>
`;
        let allCourses = store.state.allCourses;
        let elem = this.container.getElementsByClassName(b("list"))[0];
        allCourses.fetched
            ? allCourses.data.map((item,index) => new CourseCart(elem, item["_id"], index))
            : null;
    }
}

export default Publishments;
