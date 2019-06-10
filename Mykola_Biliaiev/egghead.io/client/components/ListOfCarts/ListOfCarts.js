import CourseListsCart from "../CourseLitsCart";
import bem from "../../helpers/bem";
import Component from "../../helpers/lib/component";
import store from "../../helpers/store";
import {getAllCourses, getAllLessons} from "../../helpers/actions/api";
import {CheckAction} from "../../helpers/CheckAction";

const b = bem("cart-list-combination");

class ListOfCarts extends Component {
    constructor(app, darkTheme = false, title = "") {
        let container = document.createElement("div");
        super({
            store
        });
        this.container = container;
        this.darkTheme = darkTheme;
        this.title = title;
        app.appendChild(this.container);
        this.render();
        ListOfCarts.dispatchAll();
    }

    static dispatchAll() {
        CheckAction(store.state.allCourses, getAllCourses, store);
        CheckAction(store.state.allLessons, getAllLessons, store);
    }

    init() {
        let title = `Unreleased Courses`;
        let sub_title = `There are more courses being created for you. We will let you know as soon as they are complete and ready to watch.`;
        this.container.innerHTML = `
        <div class="${b("wrapper")}">
            
            ${this.title ? `
                <div class="${b("header")}">
                       <span class="${b("header-title")}">${title}</span>
                       <span class="${b("header-subtitle")}">${sub_title}</span>  
                </div>`
            : ""}
            
            <div class="${b("padding")}">
        
            </div>
        </div>`;
    }

    render() {
        this.container.className = this.darkTheme ? b(["bg-dark"]) : b();
        this.init();
        let body = this.container.getElementsByClassName(b("padding"))[0];
        store.state.allLessons.data.map(item =>
            body.appendChild(CourseListsCart(item))
        );
    }
}

export default ListOfCarts;
