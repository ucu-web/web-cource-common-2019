import NavBar from "../components/nav_bar/";
import {fetch_and_add} from "../helpers/fetch_and_add";

export const f_0_f_route = (app) => {
    const view = [
        {"endpoint": "src/components/stats_and_remainders/data.json", "component": NavBar},
    ];
    view.map(data => fetch_and_add(app, data.endpoint, data.component));
};

