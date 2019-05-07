const Post = data => {
    const el = document.createElement("article");
    el.innerHTML = `
                <article class="Posts__post">
                <div class="Posts__post_votes">
                    <button type="submit" class="Posts__post_votes_up-arrow">
                    </button>
                    <p class="Posts__post_votes_number">
                        ${data.votes}
                    </p>
                    <button type="submit" class="Posts__post_votes_down-arrow">
                    </button>
                </div>
                <div class="Posts__post_content">
                    <header class="Posts__post_header">
                        <a>
                            <img class="Posts__post_header_channel-picture" 
                            alt="channel's picture" src="images/${data.channel_image}">
                        </a>
                        <a href="" class="Posts__post_header_channel-name">
                            ${data.channel}
                        </a>
                        <span class="Posts__post_header_dot">•</span>
                        <div class="Posts__post_header_text">
                            <span>Posted by</span>
                            <a href="" aria-label="post's author">${data.author}</a>
                            <a href="" aria-label="post's date">${data.time}</a>
                        </div>
                    </header>
                    <h2 class="Posts__post_text">
                        ${data.text}
                    </h2>
                    <${data.content_type} class="Posts__post_main-content" ${data.content_parameters} 
                        src="${data.content_src}">
                    </${data.content_type}>

                    <footer class="Posts__post_actions">
                        <a href="" class="Posts__post_actions_action">
                            <span class="Posts__post_action-icon Posts__post_action-comment"></span>
                            <span>${data.comments_number} comments</span>
                        </a>
                        <button class="Posts__post_actions_action">
                            <span class="Posts__post_action-icon Posts__post_action-award"></span>
                            <span>give award</span>
                        </button>
                        <div class="Posts__post_actions_action">
                            <span class="Posts__post_action-icon Posts__post_action-share"></span>
                            <span>share</span>
                        </div>
                        <button class="Posts__post_actions_action">
                            <span>...</span>
                        </button>
                    </footer>
                </div>
            </article>

    `;
    return el;
};

export default Post;
