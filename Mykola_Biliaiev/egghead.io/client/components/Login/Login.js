import {login} from "../../helpers/actions/auth";
import Component from "../../helpers/lib/component";
import store from "../../helpers/store";
import {set_cookie} from "../../helpers/cookies";
import bem from "../../helpers/bem";

const b = bem("log-in");

class Login extends Component {
    constructor(app) {
        let container = document.createElement("div");
        super({
            store,
            element: container
        });
        this.container = container;
        app.appendChild(this.container);
        this.render();
    }

    handle_login(e) {
        e.preventDefault();
        let inputs = Array.prototype.slice.call(
            this.container.getElementsByTagName("input")
        );
        let data_collect = {};
        let data = {};
        inputs.map(input => console.log((data_collect[input.name] = input.value)));
        data["email"] = data_collect["email"];
        data["password"] = data_collect["password"];
        login(store, data);
    }

    onSuccessRegistration() {

        store.state.loggedUser.data.access_token ? set_cookie("access_token", store.state.loggedUser.data.access_token) : null;
        history.pushState(
            {
                id: "homepage"
            },
            "egghead",
            "/"
        );
        location.reload();
    }

    render() {
        store.state.loggedUser.loggedIn ? this.onSuccessRegistration() : null;
        this.container.innerHTML = `
        <section class="log-in">
                <h1 class="log-in__title">Sign in to your egghead account.</h1>
            <div class="log-in__grey-box">
                <form class="log-in__form">
                    <div class="log-in__input-block">
                        <label class="log-in__email-label">Email
                            <input name="email" class="log-in__email-text">
                        </label>
                    </div>
                    <div class="log-in__input-block">
                        <label class="log-in__email-label">Password
                            <input name="password" type="password" class="log-in__email-text">
                        </label>
                    </div>
                    <div class="log-in__input-block">
                        <label class="log-in__remember-label">
                            <input name ="checkbox" type="checkbox">
                            Remember me
                        </label>
                    </div>
                    <div class="log-in__input-block log-in__buttons">
                        <button  name="submit" type="submit"  class="sign_in_button log-in__btn-log-in">Sign In</button>
                        <a href="#" class="log-in__btn-log-in-github">
                            Sign in with Github
                        </a>
                    </div>
                    <br>
                       <div class="log-in__input-block log-in__input-block-info">
                        Need to create an
                        account? <a href="/registration">Sign up</a>
                    </div>
                    <div class="log-in__input-block log-in__input-block-info">
                        Forgot your
                        password? <a href="#">Recover it</a>
                    </div>
                    <div class="log-in__input-block log-in__input-block-info">
                        <a href="#">Enterprise Sign In</a>
                    </div>
                </form>
            </div>
        </section>
        </form>
    `;
        this.container
            .getElementsByClassName("sign_in_button")[0]
            .addEventListener("click", e => this.handle_login(e));
    }
}

export default Login;
