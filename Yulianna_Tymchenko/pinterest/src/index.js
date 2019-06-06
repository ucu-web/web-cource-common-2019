import './styles/button.css';
import './styles/common.css';
import './styles/footer.css';
import './styles/header.css';
import './styles/link.css';
import './styles/layout.css';
import './styles/logo.css';
import './styles/post.css';
import {generateColumn, generatePost} from "./postGenerator";

const renderColumns = async (containerClass, htmlGenerator, number) => {
    const container = document.querySelector(containerClass);
    for (let i = 0; i < number; i++) {
        container.appendChild(htmlGenerator());
    }
};

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const renderPosts = async (containersClass, dataPath, htmlGenerator) => {
    const containers = document.querySelectorAll(containersClass);
    const data = await (await fetch(dataPath)).json();
    containers.forEach(container => shuffle(data).map(el => container.appendChild(htmlGenerator(el))));
};

renderColumns('.Layout__main-block__home', generateColumn, 5)
    .then(() => renderPosts('.Column', './src/data/posts.json', generatePost));