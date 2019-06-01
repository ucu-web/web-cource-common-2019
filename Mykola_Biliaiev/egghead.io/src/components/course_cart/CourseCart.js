export const CourseCart = data => {
    const result = document.createElement("div")


    result.className = "course_cart " + (data.space_between_inline ? "course_cart--space_between_inline" : "");

    result.style.width = data.width ? data.width : "100%";
    result.innerHTML = `

<div class="course_cart__shadow">
                        <div class="course_cart__wrapper">
                            <div class="course_cart__image-wrapper">

                                <img class="course_cart__image" src="src/images/react-big-img.png" alt="">

                            </div>

                            <div class="dotted-header">
                                <span>COURSE </span><span class="dotted-header__dot">•</span><span> REACT</span>
                            </div>

                            <div class="course_cart__header-wrapper">
                                <h3 class="course_cart__header">Test React With Enzum and JEST</h3>
                            </div>

                        </div>
                        <div>
                            <div class="mini-profile">
                                <div class="mini-profile__content-wrapper">
                                    <img class="icon icon--small" src="src/images/ari-avatar.jpg" alt="">
                                    <div class="mini-profile__content">
                                        <h3 class="mini-profile__content-header">Tyler Clark</h3>
                                        <span class="mini-profile__content-sub_header">15 lessons . 41m</span>
                                    </div>
                                </div>
                                <div>
                                    <svg fill="#e2e3e7" preserveAspectRatio="xMidYMid meet" height="1em"
                                         width="1em" viewBox="0 0 40 40" class="f3 gray-secondary" aria-label="icon"
                                         style="vertical-align: middle;">
                                        <g>
                                            <path d="m31.2 5.7h-22.8v27.7l11.4-10.9 2 1.9 9.4 9v-27.7z m0.3-2.8q0.5 0 1 0.2 0.7 0.2 1.1 0.9t0.5 1.4v28.7q0 0.8-0.5 1.4t-1.1 0.9q-0.5 0.2-1 0.2-1.1 0-1.9-0.7l-9.8-9.5-9.9 9.5q-0.8 0.7-1.8 0.7-0.5 0-1-0.2-0.7-0.3-1.2-0.9t-0.4-1.4v-28.7q0-0.8 0.4-1.4t1.2-0.9q0.5-0.2 1-0.2h23.4z"></path>
                                        </g>
                                    </svg>
                                </div>

                            </div>

                        </div>
                        </div>
    `
    return result


};