import "./css/main.scss"
import nav_bar from "./components/nav_bar/NavBar";
import StatsAndRemainders from "./components/stats_and_remainders/index.js";
import publichments from "./components/publishments/publishments";
import {home} from "./routes/constants";
import {home_route} from "./routes/home";

console.log(window.location.href, "window.location.href \n");
console.log(window.location.pathname, "pathanme");
let app = document.getElementById("root");

home_route(app)
// app.appendChild(nav_bar);
// const path_current = window.location.pathname;
//
// switch (path_current) {
//     case home:
//
//
// }

//
// const RenderStatsAndRemainders = async () => {
//     // const blockContainer = document.querySelector(".Tags-blocks");
//     const data = await (await fetch("src/components/stats_and_remainders/data.json")).json();
//     // .then(res=>res.json()).then(data=>console.log(data));
//     // console.log(data,"DaTA")
//     app.appendChild(StatsAndRemainders(data));
//     // data.map(block => blockContainer.appendChild(FeaturedTagsBlock(block)));
// };


// let publications = document.getElementsByClassName("publications_list")[0];


// const rootEl = document.createElement("div");
//
// rootEl.innerHTML = `<h1>Hello</h1>`;
// publications.appendChild(rootEl);

// RenderStatsAndRemainders();
