import { delegateEvent, distance } from "./helpers";
import { generateCourse } from "./htmlGenerator";
import { CourseDetails } from "./courseDetails";

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

  showDetails() {
    if (!this.courseDetails) {
      const offset = 20;
      const courseRect = this.courseElement.getBoundingClientRect();
      const courseWidth = courseRect.right - courseRect.left;
      const center = Math.ceil(courseWidth / 2 + courseRect.left);

      const topOffset = courseRect.top - 150;
      const rightOffset =
        center > window.innerWidth / 2
          ? courseWidth - offset
          : offset - courseWidth;

      this.courseDetails = new CourseDetails(
        this.courseElement,
        this.data,
        topOffset,
        rightOffset
      );
    }
  }

  removeDetails() {
    if (this.courseDetails) {
      this.courseDetails.destroy();
      this.courseDetails = null;
    }
  }

  initHandlers() {
    delegateEvent(
      this.courseElement,
      ".course__provider-logo-container",
      "mouseover",
      () => {
        this.showDetails();
      }
    );

    delegateEvent(this.courseElement, ".course", "mouseleave", () => {
      this.removeDetails();
    });
  }
}
