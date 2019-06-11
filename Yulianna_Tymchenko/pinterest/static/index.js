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
let nodesArray = [];
window.addEventListener('resize', setupBlocks);
window.onscroll = () => {
    let nodePosS = document.querySelector('.Layout__main-block__home').lastElementChild.style.top;
    let nodePos = parseInt(nodePosS, 10);
    let yOffset = window.pageYOffset;
    let y = yOffset + window.innerHeight;
    let container = document.querySelector('.Layout__main-block__home');
    let childNodes = Array.from(container.children);
    let firstChild = container.firstElementChild;

// childNodes.forEach((el)=>{
//     // console.log(el.getBoundingClientRect().top);
//     if (el.getBoundingClientRect().top<-1000){
//         nodesArray.push(el);
//         el.remove();
//     }
// });
//
//
//
//     if (firstChild.getBoundingClientRect().top === 500){
//         container.append(nodesArray.reverse()[0]);
//         nodesArray.reverse().pop();
//     }



    if (y >= nodePos-500) {
        renderPosts('.Layout__main-block__home', 'posts', generate, 5).then(setupBlocks);
    }
};