import bem from "../../helpers/bem";
import Component from "../../helpers/lib/component";
import store from "../../helpers/store";
import {CheckAction} from "../../helpers/CheckAction";
import {getAllCourses, getAllLessons} from "../../helpers/actions/api";
import {getAllUsers} from "../../helpers/actions/auth";
import CourseCart from "../CourseCart";

const b = bem("courses-differ-sizes");

class CoursesDifferentSizes extends Component {
    constructor(app) {
        let container = document.createElement("div");
        super({
            store
        });
        this.container = container;
        app.appendChild(this.container);
        this.render();
    }


    render() {
        if (store.state.allCourses.fetched) {
            this.container.className = b();
            this.container.innerHTML =
                `
            <h2 class="${b("heading")}">What's Hot</h2>
            <div class="${b("wrapper")}">
            </div>
             `;
            let wrapper = this.container.getElementsByClassName(b("wrapper"))[0];
            store.state.allCourses.data.map(
                (item, index) => {
                    let action = index % 3;
                    action ? (() => {
                        let wrapper_inner = document.getElementsByClassName(b("double-cart-wrapper"));
                        new CourseCart(wrapper_inner[wrapper_inner.length - 1], item["_id"], -1, true);
                    })() : (() => {
                        new CourseCart(wrapper, item["_id"], 3);
                        let wrapper_inner = document.createElement("div");
                        wrapper_inner.className = b("double-cart-wrapper");
                        let wrapper_inner_inline = document.createElement("div");
                        wrapper_inner_inline.className = b("double-cart-wrapper-inline");
                        wrapper_inner_inline.appendChild(wrapper_inner);
                        wrapper.appendChild(wrapper_inner_inline)
                    })()

                })
        }
    }
}

export default CoursesDifferentSizes;
