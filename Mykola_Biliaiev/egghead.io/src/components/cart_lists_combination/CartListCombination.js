import CourseListsCart from "../course_list_cart/CourseListCart";
import bem from "../../helpers/bem";

const b = bem("cart_list_combination")
const CartListCombination = (data) => {
    const cart_list_combination = document.createElement("div");
    cart_list_combination.className = b();

    cart_list_combination.innerHTML = `
    <div class="${b('wrapper')} website-layout-width">
    <div class="${b('padding')}">
    ${data.map(item =>
        CourseListsCart(item).outerHTML
    ).join("")}
    </div>
      </div>
    `;
    return cart_list_combination
};

export default CartListCombination