import CourseCart from "../course_cart/index";

const course_big_block = (data) => {

    const course_big_block = document.createElement("div");

    const single_lst_item = (name) => `  <li class="course-content-regular__list-item">${name}</li>`;
    course_big_block.className = "course-big-block__wrapper flex-join";
    // course-big-block__course-overview course_cart
    //course-big-block__wrap-content course_cart__wrapper
    course_big_block.innerHTML = `

                    ${CourseCart(data).outerHTML}

                    <div class="course-content-regular">
                        <ul class="course-content-regular__list">
                            ${data.map(item => single_lst_item(item.name)).join("")}
                        </ul>
                    </div>


    `;
    return course_big_block
}
export default course_big_block;