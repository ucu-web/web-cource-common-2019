import "./css/main.scss"
import nav_bar from "./components/nav_bar/NavBar";
import StatsAndRemainders from "./components/stats_and_remainders/index.js";
import publichments from "./components/publishments/publishments";
import {home} from "./routes/constants";
import {home_route} from "./routes/home";

console.log(window.location.href, "window.location.href \n");
console.log(window.location.pathname, "pathanme");
let app = document.getElementById("root");


const path_current = window.location.pathname;

switch (path_current) {
    case home:
        home_route(app);
        break

}
