import { generateCourseDetails } from "./htmlGenerator";
import {delegateEvent} from "./helpers";

export class CourseDetails {
  constructor(container, data, topOffset, rightOffset) {
    this.container = container;
    this.data = data;
    this.render(topOffset, rightOffset);
  }

  render(topOffset, rightOffset) {
    this.courseDetailsElement = generateCourseDetails(this.data);
    this.courseDetailsElement.style.top = topOffset + "px";
    this.courseDetailsElement.style.right = rightOffset + "px";
    this.container.appendChild(this.courseDetailsElement);
  }

  destroy() {
    this.container.removeChild(this.courseDetailsElement);
  }

}
