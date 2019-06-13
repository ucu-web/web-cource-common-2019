export const generate = (data) => {
    const container = document.createElement('div');
    let ratio = data.height / data.width;
    container.classList.add('Post', 'temp');
    container.innerHTML = `
<div class="Post__image_container">
    <a class="Post__image">
        <img  class="Image"  style="height: ${data.small_height}px; width: 219px" src="${data.small_image_link}" alt="">
     </a>
    <form class="Post__form">
        <button class="Button Post__button_select">Home</button>
        <button class="Button Post__button_save">Save</button>
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
    <h4 aria-label="post-title" class="Post__title">${data.title}</h4>
    <button class="Button Post__button_more-info" aria-label="more information"></button>
</div>
`;
    return container;
};