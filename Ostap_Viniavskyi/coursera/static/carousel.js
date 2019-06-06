import {delegateEvent} from "./helpers";
import {generateCourse, generateCarousel} from "./htmlGenerator";


export class Carousel {

    constructor(container, data, viewSize) {
        this.container = container;
        this.data = data;
        this.viewSize = viewSize;
        this.size = this.data.courses.length;
        this.currentFirst = 0;
        this.render();
        this.initHandlers();
    }

    render() {
        this.carousel = generateCarousel(this.data);
        this.container.appendChild(this.carousel);
        this.coursesContainer = this.carousel.querySelector('.carousel__courses-wrapper');
        this.data.courses
            .filter((dataEl, i) =>  {
                return this.currentFirst + this.viewSize - 1 < this.size ?
                    i >= this.currentFirst && i < this.currentFirst + this.viewSize :
                    i >= this.currentFirst && i < (this.currentFirst + this.viewSize) % this.size
            })
            .forEach((dataEl) => this.coursesContainer.appendChild(generateCourse(dataEl)))
    }

    spinRight() {
        const courses = this.coursesContainer.querySelectorAll('.course.carousel__course');
        this.coursesContainer.removeChild(courses[courses.length - 1]);
        const newCourse = generateCourse(this.data.courses[this.currentFirst ? this.currentFirst - 1 : this.size - 1]);
        this.coursesContainer.insertBefore(newCourse, courses[0]);
        this.currentFirst = this.currentFirst ? --this.currentFirst : this.size - 1;
    }

    spinLeft() {
        const courses = this.coursesContainer.querySelectorAll('.course.carousel__course');
        this.coursesContainer.removeChild(courses[0]);
        const newCourse = generateCourse(this.data.courses[(this.currentFirst + this.viewSize) % this.size]);
        this.coursesContainer.appendChild(newCourse);
        this.currentFirst = ++this.currentFirst % this.size;
    }

    initHandlers() {
        delegateEvent(this.carousel, '.carousel__swap-button_left', 'click', () => {
            this.spinLeft();
        });

        delegateEvent(this.carousel, '.carousel__swap-button_right', 'click', () => {
            this.spinRight();
        });
    }
}

