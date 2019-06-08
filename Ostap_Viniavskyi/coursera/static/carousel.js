import { delegateEvent } from "./helpers";
import { generateCarousel } from "./htmlGenerator";
import { Course } from "./course";

const courseWidth = 270;
const courseMinMargin = 10;

export class Carousel {
  constructor(container, data) {
    this.container = container;
    this.data = data;
    this.size = this.data.courses.length;
    this.currentPage = 0;
    this.currentX = 0;
    this.viewSize = 4;
    this.courses = [];
    this.render();
    this.initHandlers();
  }

  createCarouselElement() {
    this.carouselElement = generateCarousel(this.data);
    this.container.appendChild(this.carouselElement);
    this.coursesContainer = this.carouselElement.querySelector(
      ".carousel__courses-movable-wrapper"
    );
    this.createCourses();
    this.setCoursesMarginsAndViewSize();
  }

  render() {
    this.createCarouselElement();
    this.createNavigationButtonsBasedOnPagesNumber();
  }

  createCourses() {
    this.courses = this.data.courses.map(
      dataEl => new Course(this.coursesContainer, dataEl)
    );
  }

  getCourseMarginAndViewSize() {
    const coursesContainerWidth = this.coursesContainer.getBoundingClientRect()
      .width;
    const viewSize = Math.max(
      1,
      Math.floor(
        (coursesContainerWidth + courseMinMargin) /
          (courseWidth + courseMinMargin)
      )
    );
    if (viewSize === 1) {
      return {
        courseMargin: coursesContainerWidth - viewSize * courseWidth,
        viewSize
      };
    }
    return {
      courseMargin:
        (coursesContainerWidth - viewSize * courseWidth) / (viewSize - 1),
      viewSize
    };
  }

  setCoursesMarginsAndViewSize() {
    const { courseMargin, viewSize } = this.getCourseMarginAndViewSize();
    const prevFirstCourseIndex = this.getFirstCourseOnCurrentPageIndex();

    this.viewSize = viewSize;
    if (this.viewSize === 1) {
      this.courses.forEach(course => {
        course.courseElement.style.margin = "0 " + courseMargin / 2 + "px";
      });
    } else {
      this.courses.forEach(course => {
        course.courseElement.style.margin = null;
        course.courseElement.style.marginRight = courseMargin + "px";
      });
    }

    this.oneCourseScrollWidth = courseWidth + courseMargin;
    this.pagesNumber = Math.ceil(this.size / this.viewSize);
    this.currentPage = Math.floor(prevFirstCourseIndex / this.viewSize);

    const currentFirstCourseIndex = this.getFirstCourseOnCurrentPageIndex();
    this.currentX = -this.oneCourseScrollWidth * currentFirstCourseIndex;

    this.translateCoursesContainer(this.currentX, 0);
  }

  translateCoursesContainer(targetPosition, duration) {
    this.coursesContainer.style.transitionDuration = duration + "s";
    this.coursesContainer.style.transform =
      "translateX(" + targetPosition + "px)";
  }

  getFirstCourseOnCurrentPageIndex() {
    return (this.currentPage + 1) * this.viewSize <= this.size
      ? this.currentPage * this.viewSize
      : this.size - this.viewSize;
  }

  showNextPage(direction) {
    const currentFirstCourseIndex = this.getFirstCourseOnCurrentPageIndex();
    this.currentPage += direction;
    const nextFirstCourseIndex = this.getFirstCourseOnCurrentPageIndex();
    const offset =
      (nextFirstCourseIndex - currentFirstCourseIndex) *
      this.oneCourseScrollWidth;
    this.translateCoursesContainer(this.currentX - offset, 1);
    this.currentX -= offset;
    this.removeNavigationButtons();
    this.createNavigationButtonsBasedOnPagesNumber();
  }

  removeNavigationButtons() {
    const buttonContainer = this.carouselElement.querySelector(
      ".carousel__navigation"
    );
    while (buttonContainer.lastChild) {
      buttonContainer.removeChild(buttonContainer.lastChild);
    }
  }

  createNavigationButtonsBasedOnPagesNumber() {
    const buttonContainer = this.carouselElement.querySelector(
      ".carousel__navigation"
    );
    for (let i = 0; i < this.pagesNumber; i++) {
      const button = document.createElement("button");
      button.className = "carousel__navigation-button";
      buttonContainer.appendChild(button);
    }
    buttonContainer.childNodes[this.currentPage].classList.add(
      "carousel__navigation-button_active"
    );
  }

  spinRight() {
    if (this.currentPage !== this.getPagesNumber() - 1) {
      this.showNextPage(1);
    }
  }

  spinLeft() {
    if (this.currentPage !== 0) {
      this.showNextPage(-1);
    }
  }

  getPagesNumber() {
    return Math.ceil(this.size / this.viewSize);
  }

  initHandlers() {
    delegateEvent(
      this.carouselElement,
      ".carousel__swap-button_left",
      "click",
      () => {
        this.spinLeft();
      }
    );

    delegateEvent(
      this.carouselElement,
      ".carousel__swap-button_right",
      "click",
      () => {
        this.spinRight();
      }
    );

    delegateEvent(
      this.carouselElement,
      ".carousel__course",
      "mousedown",
      event => {
        const startPointXCoordinate = event.clientX;
        const threshold = 20;
        const unsubscribe = delegateEvent(
          this.carouselElement,
          ".carousel__courses-movable-wrapper",
          "mousemove",
          event => {
            if (Math.abs(event.clientX - startPointXCoordinate) > threshold) {
              Math.sign(event.clientX - startPointXCoordinate) < 0
                ? this.spinRight()
                : this.spinLeft();
              unsubscribe();
            }
          },
          true
        );
      },
      true
    );

    this.addResizeHandler();
  }

  addResizeHandler() {
    window.addEventListener("resize", () => {
      this.setCoursesMarginsAndViewSize();
      this.removeNavigationButtons();
      this.createNavigationButtonsBasedOnPagesNumber();
    });
  }
}
