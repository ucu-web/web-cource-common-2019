import StatsAndRemainders from "../components/stats_and_remainders";
import NavBar from "../components/nav_bar/NavBar";
import {fetch_and_add} from "../helpers/fetch_and_add";
import Publishments from "../components/publishments/";

export const home_route = (app) => {
    const view = [{"endpoint": "src/components/stats_and_remainders/data.json", "component": NavBar},
        {"endpoint": "src/components/stats_and_remainders/data.json", "component": StatsAndRemainders},
        {"endpoint": "src/components/stats_and_remainders/data.json", "component": Publishments}];
    view.map(data => fetch_and_add(app, data.endpoint, data.component));
};

