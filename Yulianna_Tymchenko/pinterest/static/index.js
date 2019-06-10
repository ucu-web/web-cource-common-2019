import './styles/button.css';
import './styles/common.css';
import './styles/footer.css';
import './styles/header.css';
import './styles/link.css';
import './styles/layout.css';
import './styles/logo.css';
import './styles/post.css';
import {generate} from "./postGenerator";
import {setupBlocks} from "./positioning";

const renderPosts = async (containersClass, data, htmlGenerator, number) => {
    const containers = document.querySelector(containersClass);
    const new_data = await (await fetch(data)).json();
    for (let i = 0; i < number; i++) {
        containers.appendChild(htmlGenerator(new_data[Math.floor(Math.random() * new_data.length)]));
    }
};

renderPosts('.Layout__main-block__home', 'posts', generate, 40).then(setupBlocks);

window.addEventListener('resize', setupBlocks);
window.onscroll = () => {
    let nodePosS = document.querySelector('.Layout__main-block__home').lastChild.style.top;
    let nodePos = parseInt(nodePosS, 10);
    let yOffset = window.pageYOffset;
    let y = yOffset + window.innerHeight;

    if (y >= nodePos) {
        renderPosts('.Layout__main-block__home', 'posts', generate, 20).then(setupBlocks);
    }
};