import BEM from "./BEM";


class Renderable {
    constructor(...children) {
        this.children = children;
        this.element = null;
        this.block = BEM(this.constructor.name);
    }

    renderSafe() {
        if (!this.render) {
            throw new Error("Each element should have a updateState function");
        }

        this.render();
    }

    renderChildren(element, children) {
        if (!element) element = this.element;
        if (!children) children = this.children;
        if (!children) return;

        for (let child of children) {
            if (child && child.render)
                child.render();

            if (child instanceof Node) {
                element.appendChild(child);
            } else if (child && child.element) {
                element.appendChild(child.element);
            } else {
                throw new Error("Each child should either be a DOM element or Renderable")
            }
        }
    }

    elementCreate(tagName, className, innerText) {
        // create Element
        let element = document.createElement(tagName);

        if (!className) {}
        else if (typeof className == "string" || className instanceof String) {
            className.split(" ").map(n => element.classList.add(n));
        } else if (className instanceof Array) {
            className.map(n => element.classList.add(n));
        } else {
            throw new Error("Class name " + className + " should be a String or Array.");
        }

        if (innerText) {
            element.innerText = innerText;
        }

        return element;
    }

    elementCreateHTML(tagName, className, innerHTML) {
        let element = this.elementCreate(tagName, className);
        element.innerHTML = innerHTML;
        return element;
    }
}

export default Renderable;
