import {timeSince} from "../src/common.js";
import {kFormatter} from "./common";

const Post = data => {
    const el = document.createElement("article");
    el.className = "Post";
    let postDate = timeSince(new Date(data.date)) + " ago"; // "08.06.2019, 19:14:37"
    el.innerHTML = `
                <div class="Votes">
                    <button type="submit" class="Arrow-up"></button>
                    <p class="Votes__number">
                        ${kFormatter(parseInt(data.votes))}
                    </p>
                    <button type="submit" class="Arrow-down">
                    </button>
                </div>
                <div class="Post__content">
                    <header class="Post-header">
                        <a>
                            <img class="Post__channel-picture" 
                            alt="channel's picture" src="images/${data.channel_image}">
                        </a>
                        <a href="" class="Post__channel-name">
                            ${data.channel}
                        </a>
                        <span class="Post-header__dot">•</span>
                        <div class="Post-header__text">
                            <span class="Post-header__text_posted">Posted by</span>
                            <a href="" aria-label="post's author">${data.author}</a>
                            <a href="" aria-label="post's date">${postDate}</a>
                        </div>
                    </header>
                    <h2 class="Post__text">
                        ${data.text}
                    </h2>
                    <${data.content_type} class="Post__media-content" ${data.autoplay} ${data.loop}
                        src="${data.content_src}">
                    </${data.content_type}>

                    <footer class="Actions">
                        <div class="Actions__item_votes">
                            <button type="submit" class="Arrow-up"></button>
                            <span>${data.votes}</span>
                            <button type="submit" class="Arrow-down"></button>
                        </div>
                        <a href="" class="Actions__item">
                            <span class="Actions__icon_comment"><i class="fas fa-comment-alt"></i></span>
                        <span>${kFormatter(parseInt(data["comments_number"]))} <span class="Actions__icon_comment-word">comments</span></span>
                        </a>
                        <button class="Actions__item_award">
                            <span class="Actions__icon_award"></span>
                            <span>give award</span>
                        </button>
                        <div class="Actions__item_share">
                            <span class="Actions__icon_share"></span>
                            <span>share</span>
                        </div>
                        <button class="Actions__item">
                            <span>...</span>
                        </button>
                    </footer>
                </div>
    `;
    return el;
};

export default Post;
