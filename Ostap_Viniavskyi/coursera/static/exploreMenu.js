import { delegateEvent } from "./helpers";

const createExploreMenuElement = () => {
  const container = document.createElement("nav");
  container.className = "explore-navigation";
  container.innerHTML = `
    <div class="explore-navigation__topic-links">
        <a class="explore-navigation__link" href="#">Arts and Humanities</a>
        <a class="explore-navigation__link" href="#">Business</a>
        <a class="explore-navigation__link" href="#">Computer Science</a>
        <a class="explore-navigation__link" href="#">Data Science</a>
        <a class="explore-navigation__link" href="#">Information Technology</a>
        <a class="explore-navigation__link" href="#">Health</a>
        <a class="explore-navigation__link" href="#">Math and Logic</a>
        <a class="explore-navigation__link" href="#">Personal Development</a>
        <a class="explore-navigation__link" href="#">Physical Science and Engineering</a>
        <a class="explore-navigation__link" href="#">Social Science</a>
        <a class="explore-navigation__link" href="#">Language Learning</a>
        <a class="explore-navigation__link explore-navigation__link_last" href="#">Degrees and Certificates</a>
    </div>
    <a class="explore-navigation__main-page-link">Explore all of the Coursera</a>
    `;
  return container;
};

export class ExploreMenu {
  constructor(container) {
    this.exploreButtonElement = container;
    this.initHandlers();
  }
  initHandlers() {
    this.exploreButtonElement.addEventListener("mouseover", () => {
      if (!this.exploreMenuElement) {
        this.exploreMenuElement = createExploreMenuElement();
        this.exploreButtonElement.appendChild(this.exploreMenuElement);
      }
    });

    this.exploreButtonElement.addEventListener("mouseleave", () => {
      if (this.exploreMenuElement) {
        this.exploreButtonElement.removeChild(this.exploreMenuElement);
        this.exploreMenuElement = null;
      }
    });
  }
}
