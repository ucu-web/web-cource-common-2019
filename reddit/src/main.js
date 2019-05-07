import Post from "../src/createPost.js";

const RenderPosts = async (input) => {
    const questionContainer = document.querySelector(".Posts");
    const data = await (await fetch(input)).json();
    data.map(post_data => questionContainer.appendChild(Post(post_data)));
};

RenderPosts("src/posts_data.json");

/*
<video class="Posts__post_main-content" autoplay loop src="https://external-preview.redd.it/mp4/XEctr-sK2KHCf86ji0r5Cq4hxis2Ccj7pjP6REYFMs4-source.mp4?s=0bc40844788c27aa48ce41aad545900a21731f32">
    </video>
*/

