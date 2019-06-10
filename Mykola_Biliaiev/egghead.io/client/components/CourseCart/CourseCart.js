import bem from "../../helpers/bem";
import Component from "../../helpers/lib/component";
import store from "../../helpers/store";

const b = bem("course-cart");
const prof = bem("mini-profile");
class CourseCart extends Component {
    constructor(app, course_id, index = -1, display_as_half = false) {
        let container = document.createElement("div");
        super({
            store,
            element: container
        });
        this.course_id = course_id;
        this.index = index;
        this.inline = index !== -1;
        this.display_as_half = display_as_half;
        this.container = container;
        app.appendChild(this.container);
        this.render();
    }

    randomImg() {
        let min = 1;
        let max = 7;
        return Math.floor(Math.random() * (+max - +min)) + +min
    }

    render() {
        let users = store.state.allUsers;
        let courses = store.state.allCourses;
        let imgId = this.randomImg();
        if (courses.fetched && users.fetched) {

            let data = store.state.allCourses.data.filter(
                course => course["_id"] === this.course_id
            )[0];
            let course_author = users.data.filter(
                user => user["_id"] === data.author
            )[0];
            this.container.className = (this.inline ? ` ${b(["space_between_inline"])} ` : " ");
            this.container.className += this.display_as_half ? b(["full-width"]) : this.inline ? this.index > 2 ? b(["small"]) : b(["medium"]) : b(["large"]);
            this.container.innerHTML = `
            <div class="${b("shadow")} ${this.display_as_half ?b("shadow--half"):""}">
                       <div class="${b("wrapper")}">
                       ${this.display_as_half?"":
                            `<div class="${b("image-wrapper")}">
                                <img class="${b("image")}" src="/images/bigCourseImage${imgId}.png" alt="">
                            </div>`}
                            <div class="dotted-header">
                                <span>COURSE </span><span class="dotted-header__dot">•</span><span>${data.courseTech}</span>
                            </div>
                            <div class="${b("header-wrapper")}">
                                <h3 class="${b("header")}">${data.courseName}</h3>
                            </div>
                        </div>
                       <div class="mini-profile">
                            <div class="mini-profile__wrapper">
                                <div class="mini-profile__content-wrapper">
                                    <img class="icon icon--small" src="/images/ari-avatar.jpg" alt="">
                                    <div class="mini-profile__content">
                                        <h3 class="mini-profile__content-header">${course_author.name}</h3>
                                        <span class="mini-profile__content-sub-header">${data.lessons.length} lessons . 41m</span>
                                    </div>
                                </div>
                                <img src="/images/profileMiniFolder.svg" alt="profileMiniFolder">
                                </div>
                                    <div class="mini-profile__course-progress ${this.inline ? "mini-profile__course-progress--active" : ""}">
                                    <div class="mini-profile__course-progress-progresed"></div>
                                </div>
                        </div>
                        
            
             </div>
                `;
        }
    }
}

export default CourseCart;
