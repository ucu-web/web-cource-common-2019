import './styles/carousel.css';
import './styles/course.css';
import './styles/feedback.css';
import './styles/footer.css';
import './styles/header.css';
import './styles/layout.css';
import './styles/offers.css';
import './styles/common.css';
import {generateCourse, generateCarousel} from './coursesGenerator.js'

const renderCarousels = async (containerClass, dataPath, htmlGenerator) => {
    const container = document.querySelector(containerClass);
    const data = await (await fetch(dataPath)).json();
    data.map(el => container.appendChild(htmlGenerator(el)));
};

const renderCourses = async (containersClass, dataPath, htmlGenerator) => {
    const containers = document.querySelectorAll(containersClass);
    const data = await (await fetch(dataPath)).json();
    containers.forEach(container => data.map(el => container.appendChild(htmlGenerator(el))));
};
renderCarousels('.courses-carousel', './src/data/carousels.json', generateCarousel)
    .then(() => renderCourses('.carousel__courses-wrapper', './src/data/courses.json', generateCourse));