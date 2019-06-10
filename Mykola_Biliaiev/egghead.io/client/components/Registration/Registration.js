import store from "../../helpers/store";
import Component from "../../helpers/lib/component";
import {registrate} from "../../helpers/actions/auth";

class Registration extends Component {
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

    handle_registration(e) {
        e.preventDefault();
        let inputs = Array.prototype.slice.call(
            this.container.getElementsByTagName("input")
        );
        let data_collect = {};
        let data = {};
        inputs.map(input => (data_collect[input.name] = input.value));
        data["email"] = data_collect["email"];
        data["password"] = data_collect["password"];
        data["name"] = data_collect["name"];
        registrate(store, data);
    }

    static onSuccessRegistration() {
        history.pushState(
            {
                id: "homepage"
            },
            "egghead",
            "/login"
        );
        location.reload();
    }

    render() {
        store.state.registrationState.fetched
            ? Registration.onSuccessRegistration()
            : null;

        this.container.className = "registration";
        this.container.innerHTML = `
              <section class="log-in">
                    <h1 class="log-in__title">
                        Create your egghead account.
                    </h1>
                <div class="log-in__grey-box">
                    <form class="log-in__form">
                        <div class="log-in__input-block log-in__buttons">
                            <a href="#" class="log-in__btn-log-in-github">
                                Sign up with Github
                            </a>
                        </div>
                        <div class="log-in__input-block">
                            <em>or</em>
                        </div>
                        <div class="log-in__input-block">
                            <label class="log-in__email-label">First Name
                                <input name="name" class="log-in__email-text">
                            </label>
                        </div>
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
                        <div class="log-in__input-block log-in__buttons">
                            <button  class="log-in__btn-log-in button">Create account</button>
                        </div>
                        <br>
                        <div class="log-in__input-block log-in__input-block-info">
                            Have an account <a href="/login">Sign in</a>
                        </div>
                        <div class="log-in__input-block log-in__input-block-info">
                            Forgot your
                            password? <a href="#">Recover it</a>
                        </div>
                    </form>
                </div>
            </section>
                `;

        this.container
            .getElementsByClassName("button")[0]
            .addEventListener("click", e => this.handle_registration(e));
    }
}

export default Registration;
