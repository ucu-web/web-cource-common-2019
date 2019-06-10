import "./styles/carousel.css";
import "./styles/course.css";
import "./styles/feedback.css";
import "./styles/footer.css";
import "./styles/header.css";
import "./styles/layout.css";
import "./styles/offers.css";
import "./styles/common.css";
import "./styles/course-details.css";
import "./styles/explore-navigation.css";
import "./styles/column-grid-layout.css";
import "./styles/login-sidebar.css"
import "./styles/search-sidebar.css"
import { initMobileLoginMenu } from "./mobileLoginMenu";
import {initMobileSearchMenu} from "./mobileSearchMenu";
import { Carousel } from "./carousel";
import { ExploreMenu } from "./exploreMenu";

const renderCourses = async (containerClass, dataPath) => {
  const container = document.querySelector(containerClass);
  const coursesData = await (await fetch(dataPath)).json();
  coursesData.map(data => new Carousel(container, data));
};

const initExploreMenu = async containerClass => {
  const container = document.querySelector(containerClass);
  new ExploreMenu(container);
};

renderCourses(".courses-carousel", "http://localhost:5000/courses")
  .then(() => initExploreMenu(".header__explore-button"))
  .then(() => initMobileLoginMenu())
    // .then(() => initMobileSearchMenu())
  .catch(err => console.log(err));
