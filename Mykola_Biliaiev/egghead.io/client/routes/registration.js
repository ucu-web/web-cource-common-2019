import NavBar from "../components/NavBar/";
import Registration from "../components/Registration/Registration";
export const registration_route = app => {
  new NavBar(app);
  new Registration(app);
};
