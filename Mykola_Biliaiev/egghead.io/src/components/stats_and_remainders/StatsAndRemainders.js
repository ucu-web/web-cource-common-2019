import course_big_block from "../course_big_block";
import bem from "../../helpers/bem";

const b = bem("stats_and_remainders");

const StatsAndRemainders = data => {


    const stats_and_remainders = document.createElement("section");
    stats_and_remainders.className = "stats_and_remainders";

    stats_and_remainders.innerHTML = `
        <div class="${b("wrapper )")} flex-join website-layout-width website-layout-position">
            <div class="course-big-block">
                <h2 class="${b("header)")} ">CONTINUE WATCHING</h2>
                ${course_big_block(data).outerHTML}
            </div>
            <div class="stats-block">
                <h2 class="${b("header)")} ">STATS</h2>
                <div class="stats-block-wrapper">

                    <div class="flex-join">
                        <div class="stats-block__single-stat">

                            <h3>880</h3>

                            <h4>Lessong completed</h4>

                        </div>
                        <div class="stats-block__single-stat">

                            <h3>880</h3>

                            <h4>Courses completed</h4>

                        </div>

                    </div>

                    <button class="stats-block__rect-stat">
                        <h4>
                            VIEW FULL HISTORY
                        </h4>
                        <span>back</span>
                    </button>

                </div>

            </div>
        </div>
`;
    return stats_and_remainders;
}
export default StatsAndRemainders;