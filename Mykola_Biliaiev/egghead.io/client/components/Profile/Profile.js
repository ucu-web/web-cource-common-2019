import bem from "../../helpers/bem";
import {decode_token} from "../../helpers/cookies";
import Component from "../../helpers/lib/component";
import store from "../../helpers/store";
import {getUser} from "../../helpers/actions/auth";
import {addCourse, addLesson} from "../../helpers/actions/api";

const b = bem("profile");
const inp = bem("input-block");
export default class Profile extends Component {
    constructor(app) {
        super({
            store
        });
        this.container = document.createElement("div");
        this.container.className = `${b()}`;
        app.appendChild(this.container);
        this.tabId = 0;
        this.render();
        getUser(store, decode_token()["id"]);
        this.sendData = this.sendData.bind(this);
    }

    handleTabClick(e, id) {
        let old = this.tabId;
        this.tabId = id;
        this.render();
        this.container.getElementsByClassName(b("choice-panel-item"))[old].className = b("choice-panel-item");
        this.container.getElementsByClassName(b("choice-panel-item"))[id].className += " " + b("choice-panel-item--active");

    }

    initListeners() {
        [...this.container.getElementsByClassName(b("choice-panel-item"))].map((item, id) => item.addEventListener("click", (e) => this.handleTabClick(e, id)));
    }

    sendData() {
        let data = {};
        [...this.container.getElementsByTagName("input")].map(item => data[item.name] = item.value);

        if (this.tabId === 0) {
            getUser(store, decode_token()["id"], data)
        } else if (this.tabId === 2) {
            addCourse(data)
        } else if (this.tabId ===3) {
            addLesson(data)
        }


    }

    generateTab(title, labels_placeholders, header = false) {
        const tab = document.createElement("div");
        tab.className = b("tab");
        tab.innerHTML = `
                     <div class="${b("tab-header")}">
                         <span>
                         ${title}
                         </span>
                    </div>
                    ${header ?
            `<div class="${b("tab-icon-modification")}">
                        <img src="/images/headhock.png" class="${b("tab-avatar")}" alt="avatar">
                        <div class="${b("tab-load-file-wrapper")}">
                               <button>
                               Choose File
                                </button>
                                <span>We support Gravatar too</span>
                        </div>
                    </div>` : ""}
                    <div class="${b("tab-fields")}">
                    
                    ${labels_placeholders.map(item => `<div class="${inp()}">
                                                            <label  class="${inp("label")}">${item.label}</label>
                                                            <div class="${inp("input-wrapper")}">
                                                                 <input  class="${inp("input")}"  name=${item.label} type="text"  value="${item.value ? item.value : ""}" placeholder="${item.placeholder ? item.placeholder : ""}">
                                                            </div>
                                                        </div>`).join("")}
                    </div>
                    <div class="${b("tab-footer")}">
                    </div>

        `
        ;

        let tabFooter = tab.getElementsByClassName(b("tab-footer"))[0];
        let button = document.createElement("button");
        button.className = b("tab-footer-button");
        button.innerHTML = 'Send Data';
        button.addEventListener("click", this.sendData);
        tabFooter.appendChild(button);
        return tab;

    }

    getCurrentTab() {
        let user_data = store.state.loggedUser.data;

        let edit_course = this.generateTab("Add Course", [
            {"label": "courseName", "placeholder": "Learning async js ..."},
            {"label": "courseTech", "placeholder": "javascript ..."}
        ]);
        let edit_lesson = this.generateTab("Add Lesson", [
            {"label": "name", "placeholder": "Best Course in the world ..."},
            {"label": "time", "placeholder": "4:30 ..."},
            {"label": "video", "placeholder": "https://www.youtube.com/watch?v=bestVideo"}]);
        let edit_password = this.generateTab("Edit Password", [
            {"label": "password", "placeholder": ""},
            {"label": "Password confirmation", "placeholder": ""},
            {"label": "Current password", "placeholder": ""}]);
        let edit_profile = this.generateTab("Edit Profile", [
            {"label": "name", "value": user_data.name},
            {"label": "email", "value": user_data.email}
        ], true);
        if (this.tabId === 0) {
            return edit_profile
        } else if (this.tabId === 1) {
            return edit_password
        } else if (this.tabId === 2) {
            return edit_course;
        } else if (this.tabId === 3) {
            return edit_lesson;
        }
    }


    render() {
        this.container.innerHTML = ``;
        if (store.state.loggedUser.fetched) {
            let user_data = store.state.loggedUser.data;
            this.container.innerHTML += `
                </div>
            <div class="${b("wrapper")}">
            <div class="${b("greetings")}">
                  <h3 class="${b("greetings-content")}">Hi, <b>${user_data.name}</b>! Here is your account information.</h3>
            </div>
            <div class="${b("content")}">
                <aside class="${b("choice-panel")}">
                    <div class="${b("choice-panel-wrapper")}"> 
                        <div class="${b("choice-panel-item")}">
                           <span class="${b("choice-panel-item-content")}">
                           Edit Profile
                           </span>
                    </div>
                        <div class="${b("choice-panel-item")}">
                               <span class="${b("choice-panel-item-content")}">
                               Edit Password
                               </span>
                        </div>
                        <div class="${b("choice-panel-item")}">
                               Add Course
                        </div>
                        <div class="${b("choice-panel-item")}">
                               Add Lesson
                        </div>
                    </div>
                </aside>
                
                
           
            </div>        
        </div>
    `;
            this.container.getElementsByClassName(b("content"))[0].appendChild(this.getCurrentTab());
            this.container.getElementsByClassName(b("choice-panel-item"))[this.tabId].className += " " + b("choice-panel-item--active");
            this.initListeners();
        }


    }
}
