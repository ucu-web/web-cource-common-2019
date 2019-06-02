import {clock, green_flag, mark} from "./icons/icons";

const CourseListsCart = (data) => {
    const course_list_cart = document.createElement("div");
    course_list_cart.className = "course-list-cart";

    course_list_cart.innerHTML = `
    
    <div class="course-list-cart__wrapper">
    <div class="course-list-cart__description">
    
    <div class="course-list-cart__icon-wrapper">
        ${green_flag}
    </div>
    
    <div class="course-list-cart__title-author">
        <h1 class="course-list-cart__header">Setup up some stuff</h1>
    
    <div class="profile-minimal">
            <a class="profile-minimal__author">Alan Show</a> 
            <span class="profile-minimal__extra">LESSON</span>
        </div>
    </div>
    
    </div>


<div class="course-list-cart__time_script">
    <div class="course-list-cart__icon-text-share">${clock} 1:17</div>
    <div class="course-list-cart__icon-text-share">${mark} javascript</div>
</div>
    
    </div>
    
    `;
    return course_list_cart
};

export default CourseListsCart