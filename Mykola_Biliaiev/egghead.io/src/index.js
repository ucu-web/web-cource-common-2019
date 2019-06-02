import "./css/main.scss"
import nav_bar from "./components/nav_bar/NavBar";
import StatsAndRemainders from "./components/stats_and_remainders/index.js";
import publichments from "./components/publishments/publishments";
import {home_url, login_url, registration_url} from "./routes/constants";
import {home_route} from "./routes/home";
import {f_0_f_route} from "./routes/404";
import {registration_route} from "./routes/registration";
import {login_route} from "./routes/login";

console.log(window.location.href, "window.location.href \n");
console.log(window.location.pathname, "pathanme");
let app = document.getElementById("root");


const path_current = window.location.pathname;

switch (path_current) {
    case home_url:
        home_route(app);
        break;
    case login_url:
        login_route(app);
        break;
    case registration_url:
        registration_route(app);
        break;
    default:
        f_0_f_route(app)

}
