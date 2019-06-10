// import course_big_block from "../CourseBigBlock";
import bem from "../../helpers/bem";
import Component from "../../helpers/lib/component";
import store from "../../helpers/store/index.js";
import CourseBigBlock from "../CourseBigBlock/CourseBigBlock";
import {getAllCourses, getAllLessons} from "../../helpers/actions/api";
import {CheckAction} from "../../helpers/CheckAction";
import {getAllUsers} from "../../helpers/actions/auth";

const b = bem("stats-and-remainders");

export default class StatsAndRemainders extends Component {
    constructor(app) {
        let container = document.createElement("section");
        super({
            store
        });
        this.container = container;
        this.container.className = b();
        app.appendChild(this.container);
        StatsAndRemainders.dispatchAll();
    }

    static dispatchAll() {
        CheckAction(store.state.allCourses, getAllCourses, store);
        CheckAction(store.state.allLessons, getAllLessons, store);
        CheckAction(store.state.allUsers, getAllUsers, store);
    }

    render() {
        let lessons = store.state.allLessons;
        let data = store.state.allCourses;
        this.container.innerHTML = "";
        if (data.fetched && lessons.fetched) {
            data = data.data[0];
            this.container.innerHTML += `<div class="${b(
                "wrapper"
            )} ">
                    <div class="course-big-block">
                    <span class="${b("header")}">
                    CONTINUE WATCHING
                    </span>
                </div>
                <div class="stats-block">
                <span class="${b("header")} ">STATS</span>
                <div class="stats-block-wrapper">
                    <div class="stats-block__wrapper-flex">
                        <div class="stats-block__single-stat stats-block__space">

                            <span class="stats-block__count">0</span>

                            <span class="stats-block__block-header">Lessons completed</span>

                        </div>
                        <div class="stats-block__single-stat">

                            <span class="stats-block__count">0</span>

                            <span class="stats-block__block-header">Courses completed</h4>

                        </div>

                    </div>

                    <button class="stats-block__rect-stat">
                        <span>
                            VIEW FULL HISTORY
                        </span>
                        <img src="/images/clockBack.svg" alt="">
                    </button>

                </div>

            </div>
        </div>
        `;
            const father = this.container.getElementsByClassName(
                "course-big-block"
            )[0];
            new CourseBigBlock(father, data);
        }
    }
}
