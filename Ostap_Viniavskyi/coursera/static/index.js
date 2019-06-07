import './styles/carousel.css';
import './styles/course.css';
import './styles/feedback.css';
import './styles/footer.css';
import './styles/header.css';
import './styles/layout.css';
import './styles/offers.css';
import './styles/common.css';
import './styles/course-details.css'
import {Carousel} from "./carousel";

const renderCourses = async (containerClass, dataPath) => {
    const container = document.querySelector(containerClass);
    const coursesData = await ( await fetch(dataPath)).json();
    coursesData.map(data => new Carousel(container, data));
};

renderCourses('.courses-carousel', 'http://localhost:5000/courses').
catch((err) => console.log(err));