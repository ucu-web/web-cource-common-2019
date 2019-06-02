import {CourseCart} from "../course_cart/CourseCart";
import bem from "../../helpers/bem";

const b = bem("publications");
const Publishments = (data) => {
    const publichments = document.createElement("section");
    publichments.className = `${b()}`;
    publichments.innerHTML = `
        <div class="${b("wrapper")} website-layout-width website-layout-position">
            <div class="publications__header">
                <div class="publications__header-label">
                    <h2>
                        What's New
                    </h2>
                    <h4>
                        Latest Published Courses & Lessons
                    </h4>
                </div>

                <button class="publications__button">
                    <span>Browse All </span>
                    <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="1em" width="1em"
                         viewBox="0 0 24 24" class="f5 white" aria-label="icon" style="vertical-align:middle">
                        <g>
                            <g id="Symbols" stroke="none" stroke-width="1" fill-rule="evenodd">
                                <g id="👓Continue-Watching" transform="translate(-194.000000, -461.000000)">
                                    <g id="Group-2" transform="translate(49.000000, 461.000000)">
                                        <g id="ico-arrow-left" transform="translate(145.000000, 0.000000)">
                                            <polygon id="ico-arrow-right"
                                                     transform="translate(12.205000, 11.799987) rotate(-90.000000) translate(-12.205000, -11.799987) "
                                                     points="7.61499982 8.09498773 12.2049997 12.6749873 16.7949995 8.09498773 18.2049993 9.5049875 12.2049997 15.5049871 6.20500006 9.5049875"></polygon>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </button>
            </div>
        </div>
        <div class="${b("list")} website-layout-width website-layout-position">
            ${data.map(item => CourseCart(item).outerHTML).join("")}
        </div>
`;
    return publichments;
}
export default Publishments