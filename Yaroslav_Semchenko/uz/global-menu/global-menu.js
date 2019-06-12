export class GlobalNav {
    constructor(list) {
        this.list = list;
    }

    render(el) {
        el.classList.add("global-menu");
        el.innerHTML = this.list.map(el => `<div class="global-menu__item">
<a class="global-menu__header" href="${el.link}">${el.name}</a>
<ul class="global-menu__sublist">
${el.sublist.map(link => `<li class="global-menu__subitem"><a class="global-menu__link" href="${link.link}">${link.text}</a></li>`).join('')}
</ul></div>`).join('');
    }
}