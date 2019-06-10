import bem from "../../helpers/bem";

const b = bem("course-list-cart");
const CourseListsCart = data => {
  const course_list_cart = document.createElement("div");

  course_list_cart.className = "course-list-cart";
  course_list_cart.innerHTML = `
    <div class="${b("wrapper")}">
        <div class="${b("description")}">
            <div class="${b("icon-wrapper")}">
                <img src="/images/greenFlag.svg" alt="">
            </div>
            <div class="${b("title-author")}">
                <h1 class="${b("header")}">${data.name}</h1>
                    <div class="profile-minimal">
                    <img class="profile-minimal__icon" src="/images/headhock.png" alt="">
                        <a class="profile-minimal__author">Alan Show</a> 
                        <span class="profile-minimal__extra">LESSON</span>
                   </div>
            </div>
        </div>

        <div class="${b("time_script")}">
            <div class="${b("icon-text-share")}">
                <img src="/images/clock.svg" alt="clock icon">
                <span class="${b("text-share-content")}">
                    ${data.time}
                </span>
            </div>
            <div class="${b("icon-text-share")}">
                <img src="/images/mark.svg" alt="mark icon">
                <span class="${b("text-share-content")}">javascript</span>
            </div>
        </div>
    </div>
    `;
  return course_list_cart;
};

export default CourseListsCart;
