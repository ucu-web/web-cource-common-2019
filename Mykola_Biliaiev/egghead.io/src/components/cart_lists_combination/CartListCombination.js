import CourseListsCart from "../course_list_cart/CourseListCart";

const CartListCombination = (data) => {
    const cart_list_combination = document.createElement("div");
    cart_list_combination.className = "cart_list_combination";

    cart_list_combination.innerHTML = `
    <div class="cart_list_combination__wrapper website-layout-width">
    <div class="cart_list_combination__padding">
    ${data.map(item =>
        CourseListsCart(item).outerHTML
    ).join("")}
    </div>
      </div>
    `;
    return cart_list_combination
};

export default CartListCombination