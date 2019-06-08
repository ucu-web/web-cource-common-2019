import { generateCourseDetails } from "./htmlGenerator";

export class CourseDetails {
  constructor(container, data, topOffset, rightOffset) {
    this.constainer = container;
    this.data = data;
    this.render(topOffset, rightOffset);
  }

  render(topOffset, rightOffset) {
    this.courseDetailsElement = generateCourseDetails(this.data);
    this.courseDetailsElement.style.position = "absolute";
    this.courseDetailsElement.style.top = topOffset + "px";
    this.courseDetailsElement.style.right = rightOffset + "px";
    this.constainer.appendChild(this.courseDetailsElement);
  }

  destroy() {
    this.constainer.removeChild(this.courseDetailsElement);
  }
}
