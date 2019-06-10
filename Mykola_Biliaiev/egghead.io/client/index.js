import {
  home_url,
  login_url,
  profile_url,
  registration_url
} from "./routes/routePaths";
import { home_route } from "./routes/home";
import { errorPage } from "./routes/errorPage";
import { registration_route } from "./routes/registration";
import { login_route } from "./routes/login";
import { get_token } from "./helpers/cookies";
import { profile_route } from "./routes/profile";
import "./css/main.scss";
import "./css/media.scss";

let app = document.getElementById("root");
const path_current = window.location.pathname;
const private_route = (component, app) =>
  get_token() ? component(app) : login_route(app);

const redirect_route = (component, app) =>
  get_token() ? home_route(app) : component(app);

switch (path_current) {
  case home_url:
    private_route(home_route, app);
    break;
  case login_url:
    redirect_route(login_route, app);
    break;
  case registration_url:
    redirect_route(registration_route, app);
    break;
  case profile_url:
    profile_route(app);
    break;
  default:
    errorPage(app);
}
