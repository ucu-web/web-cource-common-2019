import StatsAndRemainders from "../components/StatsAndRemainders";
import NavBar from "../components/NavBar/";
import Publishments from "../components/Publishments/";
import CartListCombination from "../components/ListOfCarts/";
import Profile from "../components/Profile";

export const profile_route = app => {
    new NavBar(app);
    new Profile(app);
};
