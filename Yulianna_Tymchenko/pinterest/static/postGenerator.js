var cloudinary = require("cloudinary-core");

const width = 220;
let cl = new cloudinary.Cloudinary({
    cloud_name: "ppinterest",
    api_key: "976639956262745",
    api_secret: "lESNBY6s2h6EIw9k0hTgQFYgTDI"
});


export const generate = data => {
    const container = document.createElement("div");
    container.classList.add("Post", "temp");
    container.innerHTML = `
<div class="Post__image_container">
    <a class="Post__image">
        ${cl.imageTag('pinterest/images/' + data.image_name, {
        width: width,
        height: width * data.ratio,
        crop: "scale"
    }).toHtml()}
     </a>
    <form class="Post__form">
        <button class="Button Post__button_select" onclick="{return false}">Home</button>
        <button class="Button Post__button_save" onclick="{return false}">Save</button>
    </form>
    <div class="Post__link-container">
        <a class="Link Post__link" href='#' aria-label="go to">Some link</a>
        <a class="Link Post__link" href='#' aria-label="send">
            <svg viewBox="0 0 24 24" class="Link Link__post-svg" aria-hidden="true" aria-label="" role="img" id="send-svg">
                <title>Send</title>
                <path d="M21 14c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2s2 .9 2 2v4h14v-4c0-1.1.9-2 2-2zM8.82 8.84c-.78.78-2.05.79-2.83 0-.78-.78-.79-2.04-.01-2.82L11.99 0l6.02 6.01c.78.78.79 2.05.01 2.83-.78.78-2.05.79-2.83 0l-1.2-1.19v6.18a2 2 0 1 1-4 0V7.66L8.82 8.84z"></path>
            </svg>
        </a>
    </div>
</div>
<div class="Post__title_container">
    <h5 aria-label="post-title" class="Post__title">${data.title}</h5>
    <button class="Button Post__button_more-info" aria-label="more information"></button>
</div>
`;
    return container;
};
