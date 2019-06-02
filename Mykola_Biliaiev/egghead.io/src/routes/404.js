import StatsAndRemainders from "../components/stats_and_remainders";
import NavBar from "../components/nav_bar/NavBar";
import {fetch_and_add} from "../helpers/fetch_and_add";
import Publishments from "../components/publishments/";
import CourseListsCart from "../components/course_list_cart/";
import CartListCombination from "../components/cart_lists_combination/";

export const f_0_f_route = (app) => {
    const view = [
        {"endpoint": "src/components/stats_and_remainders/data.json", "component": NavBar},
    ];
    view.map(data => fetch_and_add(app, data.endpoint, data.component));
};

