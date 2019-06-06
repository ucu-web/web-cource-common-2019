const positionString = (v) => (typeof v === "number" || v instanceof Number) ? (v + "px") : v;

export default class Element {
    constructor(classNames, tag="div") {
        this.element = document.createElement(tag);
        if (classNames) this.addClasses(classNames);
    }

    addClasses(classNames) {
        if (classNames instanceof String || typeof(classNames) === "string")
            classNames = classNames.split(" ");
        classNames.map(className => this.addClass(className));
        return this;
    }

    addClass(className) {
        if (!this.element.classList.contains(className))
            this.element.classList.add(className);
        return this;
    }

    removeClass(className) {
        this.element.classList.remove(className);
        return this;
    }

    containsClass(className) {
        return this.element.classList.contains(className);
    }

    addChild(...children) {
        const add = (child) => {
            if (child instanceof Array) {
                child.map(c => add(c));
            } else if (child instanceof window.Element) {
                this.element.appendChild(child);
            } else if (child.element) {
                this.element.appendChild(child.element);
            }
        };

        children.map(c => add(c));
        return this;
    }

    insertInto(parent) {
        if (parent instanceof window.Element) {
            parent.appendChild(this.element);
        } else if (parent.element) {
            parent.element.appendChild(this.element);
        }

        return this;
    }

    rmParent() {
        const parent = this.element.parentElement;
        if (parent) parent.removeChild(this.element);

        return this;
    }

    dimensions(width, height) {
        this.element.style.width = positionString(width);
        this.element.style.height = positionString(height);

        return this;
    }

    absolutePosition(x, y) {
        this.element.style.position = "absolute";
        this.element.style.left = positionString(x);
        this.element.style.bottom = positionString(y);

        return this;
    }

    transition(v) {
        this.element.style.transition = v;
        return this;
    }

    transform(v) {
        this.element.style.transform = v;
        return this;
    }

    innerHTML(html) {
        this.element.innerHTML = html;
        return this;
    }

    innerText(text) {
        this.element.innerText = text;
        return this;
    }

    listener(type, callback, options) {
        this.element.addEventListener(type, callback, options);
        return this;
    }

    removeListener(type, callback, options) {
        if (callback) this.element.removeEventListener(type, callback, options);
        return this;
    }

    getRect() {
        return this.element.getBoundingClientRect();
    }

    get style() { return this.element.style; }
}
