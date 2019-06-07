import {delegateEvent} from "./helpers";
import {generateCarousel} from "./htmlGenerator";
import {Course} from "./course";

const tabletVersionMaxWidth = 1250;
const mobileVersionMaxWidth = 1000;
const smallMobileVersionMaxWidth = 660;


export class Carousel {

    constructor(container, data) {
        this.container = container;
        this.data = data;
        this.viewSize = Carousel.getViewSizeBasedOnWindowSize();
        this.size = this.data.courses.length;
        this.pagesNumber = Math.ceil(this.size / this.viewSize);
        this.currentPage = 0;
        this.courses = [];
        this.render();
        this.initHandlers();
    }

    static getViewSizeBasedOnWindowSize() {
        if (window.innerWidth > tabletVersionMaxWidth) {
            return 4;
        } else if (window.innerWidth > mobileVersionMaxWidth) {
            return 3;
        } else if (window.innerWidth > smallMobileVersionMaxWidth) {
            return 2;
        } else {
            return 1;
        }
    }

    render() {
        if (!this.carouselElement) {
            this.carouselElement = generateCarousel(this.data);
            this.container.appendChild(this.carouselElement);
            this.coursesContainer = this.carouselElement.querySelector('.carousel__courses-wrapper');
        } else {
            this.removeAllCourses();
            this.removeNavigationButtons();
        }
        this.createCoursesBasedOnViewSize();
        this.createNavigationButtonsBasedOnPagesNumber()
    }

    removeAllCourses() {
        this.courses.forEach((course) => course.destroy());
        this.courses = [];
    }

    createCoursesBasedOnViewSize() {
        this.data.courses
            .filter((dataEl, i) => {
                return (this.currentPage + 1) * this.viewSize - 1 < this.size ?
                    i >= this.currentPage * this.viewSize && i < (this.currentPage + 1) * this.viewSize :
                    i >= this.size - this.viewSize && i < this.size;
            })
            .forEach((dataEl) => {
                const course = new Course(this.coursesContainer, dataEl);
                this.courses.push(course);
            })
    }

    removeNavigationButtons() {
        const buttonContainer = this.carouselElement.querySelector('.carousel__navigation');
        while (buttonContainer.lastChild) {
            buttonContainer.removeChild(buttonContainer.lastChild);
        }
    }

    createNavigationButtonsBasedOnPagesNumber() {
        const buttonContainer = this.carouselElement.querySelector('.carousel__navigation');
        for (let i = 0; i < this.pagesNumber; i++) {
            const button = document.createElement('button');
            button.className = 'carousel__navigation-button';
            buttonContainer.appendChild(button);
        }
        buttonContainer.childNodes[this.currentPage].classList.add('carousel__navigation-button_active')
    }

    spinRight() {
        this.currentPage = ++this.currentPage % this.pagesNumber;
        this.render();
    }

    spinLeft() {
        this.currentPage = this.currentPage ? --this.currentPage : this.pagesNumber - 1;
        this.render();
    }

    initHandlers() {
        delegateEvent(this.carouselElement, '.carousel__swap-button_left', 'click', () => {
            this.spinLeft();
        });

        delegateEvent(this.carouselElement, '.carousel__swap-button_right', 'click', () => {
            this.spinRight();
        });

        this.addResizeHandler();

    }

    addResizeHandler() {
        window.addEventListener('resize', () => {
            const newViewSize = Carousel.getViewSizeBasedOnWindowSize();
            if (newViewSize !== this.viewSize) {
                this.pagesNumber = Math.ceil(this.size / newViewSize);
                this.currentPage = Math.floor(this.currentPage * this.viewSize / newViewSize);
                this.viewSize = newViewSize;
                this.render();
            }
        })
    }
}

