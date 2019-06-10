import { delegateEvent } from "./helpers";
import { generateCarousel } from "./htmlGenerator";
import { Course } from "./course";
import {
  getVisibleCoursesNumber,
  getIndexOfFirstCourseOnPage,
  getCourseMargin,
  calculateOffset
} from "./carouselHelpers";

import {
  createNavigationButtons,
  removeNavigationButtons
} from "./navigationButtons";

const courseWidth = 270;
const courseMinDistance = 10;

export class Carousel {
  constructor(container, data) {
    this.container = container;
    this.data = data;
    this.coursesNumber = this.data.courses.length;
    this.currentPage = 0;
    this.carouselCoordinate = 0;
    this.visibleCoursesNumber = 0;
    this.courses = [];
    this.createCarousel();
    this.initHandlers();
  }

  createCarouselElement() {
    this.carouselElement = generateCarousel(this.data);
    this.container.appendChild(this.carouselElement);
    this.coursesContainer = this.carouselElement.querySelector(
      ".carousel__courses-movable-wrapper"
    );
    this.createCourses();
    this.resize();
  }

  createCarousel() {
    this.createCarouselElement();
    this.createNavigationButtonsBasedOnPagesNumber();
  }

  createCourses() {
    this.courses = this.data.courses.map(
      dataEl => new Course(this.coursesContainer, dataEl)
    );
  }

  getCourseMarginAndVisibleCoursesNumber() {
    const containerWidth = this.coursesContainer.getBoundingClientRect().width;
    const visibleCoursesNumber = getVisibleCoursesNumber(
      courseWidth,
      courseMinDistance,
      containerWidth
    );

    return {
      courseMargin: getCourseMargin(
        courseWidth,
        visibleCoursesNumber,
        containerWidth
      ),
      visibleCoursesNumber
    };
  }

  resize() {
    const {
      courseMargin,
      visibleCoursesNumber
    } = this.getCourseMarginAndVisibleCoursesNumber();

    const prevFirstCourseIndex = getIndexOfFirstCourseOnPage(
      this.currentPage,
      this.visibleCoursesNumber,
      this.coursesNumber
    );

    this.visibleCoursesNumber = visibleCoursesNumber;
    this.courses.forEach(course => course.setMargin(courseMargin));

    this.singleCourseOffset = courseWidth + courseMargin * 2;
    this.pagesNumber = Math.ceil(
      this.coursesNumber / this.visibleCoursesNumber
    );

    const nextPage = Math.floor(
      prevFirstCourseIndex / this.visibleCoursesNumber
    );
    this.showSlidingButton(nextPage);
    this.currentPage = nextPage;
    this.hideSlidingButtons();

    const newFirstCourseIndex = getIndexOfFirstCourseOnPage(
      this.currentPage,
      this.visibleCoursesNumber,
      this.coursesNumber
    );

    this.translateCoursesContainer(
      -this.singleCourseOffset * newFirstCourseIndex,
      0
    );
  }

  translateCoursesContainer(targetPosition, duration) {
    // translate container to currentPosition
    this.coursesContainer.style.transitionDuration = duration + "s";
    this.coursesContainer.style.transform =
      "translateX(" + targetPosition + "px)";
    // remember current position
    this.carouselCoordinate = targetPosition;
  }

  showNextPage(direction) {
    this.showSlidingButton(this.currentPage + direction);
    const currentFirstCourseIndex = getIndexOfFirstCourseOnPage(
      this.currentPage,
      this.visibleCoursesNumber,
      this.coursesNumber
    );
    this.currentPage += direction;
    const nextFirstCourseIndex = getIndexOfFirstCourseOnPage(
      this.currentPage,
      this.visibleCoursesNumber,
      this.coursesNumber
    );
    const offset = calculateOffset(
      currentFirstCourseIndex,
      nextFirstCourseIndex,
      this.singleCourseOffset
    );
    this.translateCoursesContainer(this.carouselCoordinate - offset, 1);
    this.updateNavigationButtons();
    this.hideSlidingButtons();
  }

  hideSlidingButtons() {
    let button;
    if (this.currentPage === 0) {
      button = this.carouselElement.querySelector(
        ".carousel__swap-button_left"
      );
      const coursesOuterContainer = this.carouselElement.querySelector(
        ".carousel__courses-wrapper"
      );
      coursesOuterContainer.classList.add("Grid__cell_push-1");
    } else if (this.currentPage === this.getPagesNumber() - 1) {
      button = this.carouselElement.querySelector(
        ".carousel__swap-button_right"
      );
    } else {
      return;
    }
    button.style.display = "none";
  }

  showSlidingButton(nextPage) {
    let button;
    if (this.currentPage === 0 && nextPage > this.currentPage) {
      button = this.carouselElement.querySelector(
        ".carousel__swap-button_left"
      );
      const coursesOuterContainer = this.carouselElement.querySelector(
        ".carousel__courses-wrapper"
      );
      coursesOuterContainer.classList.remove("Grid__cell_push-1");
    } else if (
      this.currentPage === this.getPagesNumber() - 1 &&
      nextPage < this.currentPage
    ) {
      button = this.carouselElement.querySelector(
        ".carousel__swap-button_right"
      );
    } else {
      return;
    }
    button.style.display = null;
  }

  removeNavigationButtons() {
    const buttonContainer = this.carouselElement.querySelector(
      ".carousel__navigation"
    );
    removeNavigationButtons(buttonContainer);
  }

  createNavigationButtonsBasedOnPagesNumber() {
    const buttonContainer = this.carouselElement.querySelector(
      ".carousel__navigation"
    );
    createNavigationButtons(
      this.pagesNumber,
      this.currentPage,
      buttonContainer
    );
  }

  updateNavigationButtons() {
    this.removeNavigationButtons();
    this.createNavigationButtonsBasedOnPagesNumber();
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
    return Math.ceil(this.coursesNumber / this.visibleCoursesNumber);
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

    this.addResizeHandler();
    this.addMouseBehaviour();
  }

  addMouseBehaviour() {
    this.startPointXCoordinate = 0;
    this.locked = false;
    this.threshold = 20;

    this.coursesContainer.addEventListener("mousemove", event => {
      if (this.locked) {
        if (
          Math.abs(event.clientX - this.startPointXCoordinate) > this.threshold
        ) {
          Math.sign(event.clientX - this.startPointXCoordinate) < 0
            ? this.spinRight()
            : this.spinLeft();
          this.locked = false;
        }
      }
    });

    this.coursesContainer.addEventListener("mousedown", ev => {
      this.locked = true;
      this.startPointXCoordinate = ev.clientX;
    });

    this.coursesContainer.addEventListener("mouseup", () => {
      this.locked = false;
    });
  }

  addResizeHandler() {
    window.addEventListener("resize", () => {
      this.resize();
      this.updateNavigationButtons();
    });
  }
}
