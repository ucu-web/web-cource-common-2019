export class MainControl {
    constructor(contacts, localNav, languages) {
        this.contactList = contacts;
        this.localNav = localNav;
        this.lang = languages;
    }

    renderContacts() {
        let el = document.querySelector(".main-control__contact-list");
        el.innerHTML = this.contactList.map(el =>
            `<div class="main-control__contact">${el.type}: <a class="main-control__contact-link" href="${el.link}">${el.name}</a></div>`).join('');
    }

    renderLocalNav() {
        let el = document.querySelector(".main-control__local-nav");
        el.innerHTML = this.localNav.map(el => `<a class="main-control__local-nav-link" href=${el.link}>${el.name}</a>`).join('')
    }

    renderLang() {
        let el = document.querySelector(".main-control__languages");
        el.innerHTML = this.lang.map(el =>
            `<a href="${el.link}" class="main-control__lang ${el.selected ? "main-control__lang_state_active" : "main-control__lang_state_inactive" }">${el.name}</a>`).join('');
    }

    render() {
        this.renderContacts();
        this.renderLang();
        this.renderLocalNav();
    }
}