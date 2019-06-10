import StatsAndRemainders from "../components/StatsAndRemainders";
import NavBar from "../components/NavBar/";
import Publishments from "../components/Publishments/";
import CartListCombination from "../components/ListOfCarts/";
import CourseBigBlock from "../components/CourseBigBlock/";
import Footer from "../components/Footer/";
import CoursesDifferentSizes from "../components/CoursesDifferentSizes/";

export const home_route = app => {


    new NavBar(app);
    new StatsAndRemainders(app);
    new Publishments(app);
    new CartListCombination(app);
    new CartListCombination(app, true,true);
    new CoursesDifferentSizes(app);
    app.appendChild(Footer());
};
