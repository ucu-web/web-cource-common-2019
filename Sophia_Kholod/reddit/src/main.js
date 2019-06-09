import {readJSONFromFile} from "../src/common.js";
import Post from "../src/createPost.js";
import renderPopUp from "../src/renderPopUp.js";

import "../styles/Header/Header.css";
import "../styles/initial.css";
import "../styles/common.css";

import "../styles/Header/Dropout-menu.css";
import "../styles/Header/Navigation-additional.css";
import "../styles/Header/Navigation.css";
import "../styles/Header/Logo.css";
import "../styles/Header/Search.css";

import "../styles/View-bar/View-bar.css";
import "../styles/Layout.css";

import "../styles/Posts/Post.css";
import "../styles/Posts/Posts.css";
import "../styles/Posts/Post-header.css";
import "../styles/Posts/Actions.css";
import "../styles/Posts/Votes.css";

import "../styles/Sidebar/Sidebar.css";
import "../styles/Sidebar/Home.css";
import "../styles/Sidebar/Premium.css";
import "../styles/Sidebar/Trends.css";
import "../styles/Sidebar/Footer.css";
import "../styles/layouts/flex-layout.css";

import "../styles/Popup/Icons.css";
import "../styles/Popup/Title.css";
import "../styles/Popup/Sort.css";
import "../styles/Popup/Pop-up__sidebar.css";
import "../styles/Popup/Write-comment.css";
import "../styles/Popup/Comments.css";
import "../styles/Popup/Pop-up.css";


const addListenersToPosts = () => {
    let posts = Array.prototype.slice.call(
        document.getElementsByClassName("Post"));
    let length = posts.length;

    posts.map((post, i) => post.addEventListener(
        "click", () => {
            renderPopUp(length - i);
        }));
};


const renderPosts = async (input) => {
    const questionContainer = document.querySelector(".Posts");
    const data = await readJSONFromFile(input);
    data.map(post_data => questionContainer.appendChild(Post(post_data)));
};


const main = async () => {
    await renderPosts("../data/posts.json");
    addListenersToPosts();
};

main();
