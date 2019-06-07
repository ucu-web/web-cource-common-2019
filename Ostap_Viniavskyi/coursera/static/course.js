import {delegateEvent} from "./helpers";
import {generateCourse, generateCourseDetails} from "./htmlGenerator";

export class Course {

    constructor(container, data) {
        this.container = container;
        this.data = data;
        this.render();
        this.initHandlers();
    }

    render() {
        this.courseElement = generateCourse(this.data);
        this.container.appendChild(this.courseElement);
    }

    destroy() {
        this.container.removeChild(this.courseElement);
    }

    showDetails() {
        if (!this.courseDetailsElement) {
            this.courseDetailsElement = generateCourseDetails(this.data);
            this.courseDetailsElement.style.position = 'absolute';

            const offset = 20;
            const courseRect = this.courseElement.getBoundingClientRect();
            const courseWidth = courseRect.right - courseRect.left;
            const center = Math.ceil(courseWidth / 2 + courseRect.left);

            this.courseDetailsElement.style.top = courseRect.top - 150 + 'px';
            if (center > window.innerWidth / 2) {
                this.courseDetailsElement.style.right = courseWidth - offset + 'px';
            } else {
                this.courseDetailsElement.style.left = courseWidth - offset + 'px';
            }

            this.courseElement.appendChild(this.courseDetailsElement);
        }
    }

    removeDetails() {
        if (this.courseDetailsElement) {
            this.courseElement.removeChild(this.courseDetailsElement);
            this.courseDetailsElement = null;
        }
    }

    initHandlers() {
        delegateEvent(this.courseElement, '.course__provider-logo-container',
            'mouseover', () => {
                this.showDetails();
            });

        delegateEvent(this.courseElement, '.course',
            'mouseleave', () => {
                this.removeDetails();
            })
    }

}