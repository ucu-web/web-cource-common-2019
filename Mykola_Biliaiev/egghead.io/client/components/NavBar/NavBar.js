import bem from "../../helpers/bem";
import { decode_token, get_token } from "../../helpers/cookies";
import Component from "../../helpers/lib/component";
import store from "../../helpers/store";
import { getUser } from "../../helpers/actions/auth";
import loading from "../Loading/Loading";

const b = bem("nav-bar");
export default class NavBar extends Component {
  constructor(app) {
    super({
      store
    });
    this.container = document.createElement("nav");
    this.container.className = `${b()}`;
    app.appendChild(this.container);
    this.logged = get_token();
    this.logged ? getUser(store, decode_token()["id"]) : null;
    this.container.appendChild(loading());
    this.render();
  }

  static getProfile() {
    return store.state.loggedUser.fetched
      ? `<button class="${b("feadback-button")}">Feedback</button>
            <a class="${b("profile")}" href="/profile">
            <span class="${b("profile-user")}">${
          store.state.loggedUser.data.name
        }</span>
            <img class="${b(
              "profile-avatar"
            )}" src="/images/headhock.png" alt="avatar">
            </a>`
      : `<a  class="${b("login-link")}" href="/login">login</a>`;
  }

  render() {
    if (store.state.loggedUser.fetched || store.state.loggedUser.error) {
      this.container.innerHTML = ``;
      this.container.innerHTML += `
               <div class="${b("wrapper")} ">
               <div class="${b("padding-wrapper")}">
                <div class="${b("headers")}">
                <a href="/">
                <img src="/images/logo.svg" class="${b(
                  "headers-logo"
                )}" alt="Egghead logo">
                                <img src="/images/logo-small.svg" class="${b(
                                  "headers-logo-small"
                                )}" alt="Egghead logo">
                </a>
        
                <div class="${b("headers-content")}">
                    <img src="/images/play_button.svg" alt="">
                    <a class="${b(
                      "headers-content-link"
                    )}" href="#">Learn to Code</a>
                </div>
            </div>
            <div class="${b("navigation")}">
                <form class="${b("form")}" action="">
                    <input class="${b(
                      "input"
                    )}" placeholder="Search ..." type="text">
                    <button class="${b(
                      "form-button"
                    )}" type="submit"><img src="images/search_icon.svg" alt=""></button>
                </form>
                ${NavBar.getProfile()}
            </div>
        </div>
    </div>
    `;
    }
  }
}
