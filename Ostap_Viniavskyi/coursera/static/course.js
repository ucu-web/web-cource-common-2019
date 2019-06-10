import { delegateEvent } from "./helpers";
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
      this.courseDetailsStatus = {
        active: true,
        leftCourse: false,
        leftDetails: false
      };
      const offset = 20;
      const rect = this.courseElement.getBoundingClientRect();
      const courseWidth = rect.width;
      const center = Math.ceil(courseWidth / 2 + rect.left);
      const topOffset = rect.top - offset;
      const rightOffset =
        center > window.innerWidth / 2
          ? window.innerWidth - rect.right + rect.width - offset
          : window.innerWidth - rect.right - rect.width;

      this.courseDetails = new CourseDetails(
        this.container.parentNode,
        this.data,
        topOffset,
        rightOffset
      );

      delegateEvent(this.courseDetails.courseDetailsElement, ".course-details", "mouseleave", () => {
        if(this.courseDetailsStatus && this.courseDetailsStatus.active){
          console.log("leave details", this.courseDetailsStatus)
          this.courseDetailsStatus.leftDetails = true;
          const currentElement = getElementFromCurrentMousePosition();
          this.courseDetailsStatus.leftCourse = currentElement !== this.courseElement && !this.courseElement.contains(currentElement);
          this.removeDetailsIfMouseLeft();
        }
      });

      delegateEvent(this.courseDetails.courseDetailsElement, ".course-details", "mouseenter", () => {
        if(this.courseDetailsStatus && this.courseDetailsStatus.active){
          console.log("enter details", this.courseDetailsStatus)
          this.courseDetailsStatus.leftDetails = false;
        }
      });

    }
  }

  removeDetailsIfMouseLeft() {
    if (this.courseDetails && this.courseDetailsStatus.leftCourse && this.courseDetailsStatus.leftDetails) {
      this.courseDetailsStatus.active = false;
      this.courseDetails.destroy();
      this.courseDetails = null;
    }
  }

  setMargin(value){
    this.courseElement.style.margin = "0 " + value + "px";
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
      if(this.courseDetailsStatus && this.courseDetailsStatus.active){
        console.log("leave course", this.courseDetailsStatus)
        this.courseDetailsStatus.leftCourse = true;
        this.courseDetailsStatus.leftDetails = getElementFromCurrentMousePosition() !== this.courseDetails.courseDetailsElement;
        this.removeDetailsIfMouseLeft();
      }
    });

    delegateEvent(this.courseElement, ".course", "mouseenter", () => {
      if(this.courseDetailsStatus && this.courseDetailsStatus.active){
        console.log("enter course", this.courseDetailsStatus)
        this.courseDetailsStatus.leftCourse = false;
      }
    });

  }
}


const getElementFromCurrentMousePosition = () => {
  const x = event.clientX, y = event.clientY;
      return document.elementFromPoint(x, y);
} ;