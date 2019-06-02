import {clock, green_flag, mark} from "./icons/icons";
import bem from "../../helpers/bem";
const b = bem("course-list-cart")
const CourseListsCart = (data) => {
    const course_list_cart = document.createElement("div");
    course_list_cart.className = "course-list-cart";

    course_list_cart.innerHTML = `
    
    <div class="${b("wrapper")}">
    <div class="${b("description")}">
    
    <div class="${b("icon-wrapper")}">
        ${green_flag}
    </div>
    
    <div class="${b("title-author")}">
        <h1 class="${b("header")}">Setup up some stuff</h1>
    
    <div class="profile-minimal">
            <a class="profile-minimal__author">Alan Show</a> 
            <span class="profile-minimal__extra">LESSON</span>
        </div>
    </div>
    
    </div>


<div class="${b("time_script")}">
    <div class="${b("icon-text-share")}">${clock} 1:17</div>
    <div class="${b("icon-text-share")}">${mark} javascript</div>
</div>
    
    </div>
    
    `;
    return course_list_cart
};

export default CourseListsCart