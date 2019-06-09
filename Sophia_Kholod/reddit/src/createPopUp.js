import {timeSince} from "../src/common.js";
import {kFormatter} from "./common";


export const createPopUp = (post) => {
    let el = document.createElement("div");
    let date = timeSince(new Date(post["date"])) + " ago";
    el.className = "Pop-up";
    el.innerHTML = `
    <article class="Pop-up__content">
        <header class="Pop-up__header">
            <div class="Pop-up__votes">
                <button type="submit" class="Votes__arrow_up"></button>
                <p class="Votes__number">
                    ${kFormatter(parseInt(post["votes"]))}
                </p>
                <button type="submit" class="Votes__arrow_down">
                </button>
            </div>
            <div class="Title">
                <span class="Title__icon"></span>
                <h2 class="Title__text">${post["text"]}</h2>
            </div>
            <button class="Close-button">
                <span class="Close-button__x">x</span>
                <span>close</span>
            </button>
        </header>

        <article class="Pop-up__main">
            <div class="Votes">
                <button type="submit" class="Votes__arrow_up"></button>
                <p class="Votes__number">
                    ${kFormatter(parseInt(post["votes"]))}
                </p>
                <button type="submit" class="Votes__arrow_down">
                </button>
            </div>
            <div class="Pop-up__post-wrapper">
                <header class="Post-header">
                    <a>
                        <img class="Post__channel-picture"
                             alt="channel's picture" src="images/default-picture.png">
                    </a>
                    <a href="" class="Post__channel-name">
                        ${post["channel"]}
                    </a>
                    <span class="Post-header__dot">•</span>
                    <div class="Post-header__text">
                        <span class="Post-header__text_posted">Posted by</span>
                        <a href="" aria-label="post's author">${post["author"]}</a>
                        <a href="" aria-label="post's date">${date}</a>
                    </div>
                </header>
                <h2 class="Post__text">
                    ${post["text"]}
                </h2>
                <a href="#">
                   <${post["content_type"]} class="Post__media-content" ${post["autoplay"]} ${post["loop"]}
                    src="${post["content_src"]}">
                </${post["content_type"]}>
                </a>
                <footer class="Actions">
                    <div class="Actions__item_votes">
                        <button type="submit" class="Votes__arrow_up"></button>
                        <span>${post["votes"]}</span>
                        <button type="submit" class="Votes__arrow_down"></button>
                    </div>
                    <div class="Actions__item_disabled">
                        <span class="Actions__icon_comment"><i class="fas fa-comment-alt"></i></span>
                        <span>${kFormatter(parseInt(post["comments_number"]))} comments</span>
                    </div>
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

                <section class="Write-comment">
                    <div class="Write-comment__head">
                        Comment as <a href="" class="Write-comment__author">AloneEcho</a>
                    </div>

                    <article class="Write-comment__editor">
                        <section class="Text-area" contenteditable spellcheck="true">
                            <span class="Text-area__text">What are your thoughts?</span>
                        </section>

                        <section class="Tools">
                            <div class="Icons">
                                <a href="#" class="Icon_bold hover" alt="Bold"><i class="fas fa-bold"></i></a>
                                <a href="#" class="Icon_italic hover" alt="Italics"><i
                                        class="fas fa-italic"></i></a>
                                <!--<a href="#" class="Icon_link" alt="Link"><i class='fas fa-link'></i></a>-->
                                <a href="#" class="Icon_list-ul hover" alt="Bulleted List"><i
                                        class='fas fa-list-ul'></i></a>
                                <a href="#" class="Icon_list-ol hover" alt="Numbered List"><i
                                        class='fas fa-list-ol'></i></a>
                                <a href="#" class="Icon_strikethrough hover" alt="Strikethrough"><i
                                        class='fas fa-strikethrough'></i></a>
                                <a href="#" class="Icon_quote hover" alt="Quote"><i
                                        class='fas fa-quote-right'></i></a>

                                <a href="#" class="Icon_spoiler hover" alt="Spoiler"><i
                                        class='fas fa-exclamation-circle'></i></a>
                                <a href="#" class="Icon_heading hover" alt="Heading"><i
                                        class='fas fa-heading'></i></a>
                                <a href="#" class="Icon_superscript hover" alt="Superscript"><i
                                        class='fas fa-superscript'></i></a>
                                <a href="#" class="Icon_subscript hover" alt="Subscript"><i
                                        class='fas fa-subscript'></i></a>
                                <a href="#" class="Icon_undo hover" alt="Undo"><i class='fas fa-undo-alt'></i></a>
                                <a href="#" class="Icon_redo hover" alt="Redo"><i class='fas fa-redo-alt'></i></a>
                            </div>
                            <button class="Tools__comment-button">comment</button>
                        </section>
                    </article>
                </section>
                
                <section class="Sort">
                    <span class="small-dark-gray-text">Sort by</span>
                    <button class="Sort__button">
                        <span class="Sort__text">
                            top (suggested)
                        </span>
                        <svg class="Sort__arrow" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"></path></svg>
                    </button>   
                    <div class="Sort__dropdown">
                        <button class="Dropdown__item_top Dropdown__item_selected">Top (Suggested)</button>
                        <button class="Dropdown__item_new">New</button>
                        <button class="Dropdown__item_old">Old</button>
                    </div>
                </section>
                    
        <section class="Comments">
        </section>
        </div>
        </article>
        <aside class="Pop-up__sidebar">
            <section class="Channel">
                <a>
                    <div class="Channel__wallpaper_blue"></div>
                </a>
                <section class="Channel__header">
                    <a>
                        <div class="Channel__info-main">
                            <svg class="Sidebar__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M15.8286,15.8998 C15.3466,16.3788 12.6326,15.5598 8.5516,11.4798 C4.4706,7.3968 3.6486,4.6858 4.1316,4.2038 C4.3566,3.9788 4.9286,3.9208 5.9126,4.3518 C5.6166,4.5678 5.3306,4.8008 5.0666,5.0658 C5.0536,5.0798 5.0416,5.0948 5.0266,5.1098 C5.5756,6.4268 6.8946,8.4088 9.2596,10.7728 C11.6206,13.1338 13.6046,14.4538 14.9246,15.0028 C14.9376,14.9898 14.9526,14.9778 14.9666,14.9638 C15.2316,14.6988 15.4646,14.4128 15.6786,14.1178 C16.1096,15.1028 16.0526,15.6748 15.8286,15.8998 M16.7526,11.8998 C17.4066,9.5458 16.8136,6.9138 14.9666,5.0658 C13.6436,3.7438 11.8866,3.0148 10.0166,3.0148 C9.3686,3.0148 8.7356,3.1078 8.1286,3.2768 C5.7306,1.7598 3.9176,1.5898 2.7176,2.7898 C1.4036,4.1028 2.0736,6.1918 3.2866,8.1688 C2.6446,10.5128 3.2276,13.1258 5.0666,14.9638 C6.3886,16.2868 8.1456,17.0148 10.0166,17.0148 C10.6536,17.0148 11.2746,16.9178 11.8736,16.7518 C13.0856,17.4938 14.3406,18.0318 15.4316,18.0318 C16.1156,18.0318 16.7366,17.8198 17.2426,17.3138 C18.4416,16.1138 18.2706,14.2988 16.7526,11.8998"></path>
                            </svg>
                            <a class="Channel__name">r/fakehistoryporn</a>
                        </div>
                        <div class="Channel__info_additional">
                            <div class="Channel__members">
                                        <span class="Channel__members_number">
                                            663k
                                        </span>
                                <span class="Channel__members_text">members</span>
                            </div>

                            <div class="Channel__members-online">
                                    <span class="Channel__members_number">
                                        6.3k
                                    </span>
                                <span class="Channel__members_text">online</span>
                            </div>
                        </div>
                    </a>
                </section>
                <section class="Channel__description"><a>
                    Fake History Porn : A subreddit dedicated to Fake History
                </a>
                </section>
                <button class="Channel__join">
                    <span class="Channel__join-text">joined</span>
                </button>
            </section>
            <section class="Trends">
                <p class="small-dark-gray-text">OTHER FAKE HISTORY SUBS</p>

                <section class="Trends__item">
                    <svg class="Sidebar__icon" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 20 20">
                        <path d="M15.8286,15.8998 C15.3466,16.3788 12.6326,15.5598 8.5516,11.4798 C4.4706,7.3968 3.6486,4.6858 4.1316,4.2038 C4.3566,3.9788 4.9286,3.9208 5.9126,4.3518 C5.6166,4.5678 5.3306,4.8008 5.0666,5.0658 C5.0536,5.0798 5.0416,5.0948 5.0266,5.1098 C5.5756,6.4268 6.8946,8.4088 9.2596,10.7728 C11.6206,13.1338 13.6046,14.4538 14.9246,15.0028 C14.9376,14.9898 14.9526,14.9778 14.9666,14.9638 C15.2316,14.6988 15.4646,14.4128 15.6786,14.1178 C16.1096,15.1028 16.0526,15.6748 15.8286,15.8998 M16.7526,11.8998 C17.4066,9.5458 16.8136,6.9138 14.9666,5.0658 C13.6436,3.7438 11.8866,3.0148 10.0166,3.0148 C9.3686,3.0148 8.7356,3.1078 8.1286,3.2768 C5.7306,1.7598 3.9176,1.5898 2.7176,2.7898 C1.4036,4.1028 2.0736,6.1918 3.2866,8.1688 C2.6446,10.5128 3.2276,13.1258 5.0666,14.9638 C6.3886,16.2868 8.1456,17.0148 10.0166,17.0148 C10.6536,17.0148 11.2746,16.9178 11.8736,16.7518 C13.0856,17.4938 14.3406,18.0318 15.4316,18.0318 C16.1156,18.0318 16.7366,17.8198 17.2426,17.3138 C18.4416,16.1138 18.2706,14.2988 16.7526,11.8998"></path>
                    </svg>
                    <div class="Trends__info">
                        <a href="" class="Trends__channel-name">r/fakeprehistoricporn</a>
                        <span class="Trends__channel-subscribers">148394 subscribers</span>
                    </div>
                    <a href="" class="Trends__button">
                        SUBSCRIBE
                    </a>
                </section>

                <section class="Trends__item">
                    <svg class="Sidebar__icon" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 20 20">
                        <path d="M15.8286,15.8998 C15.3466,16.3788 12.6326,15.5598 8.5516,11.4798 C4.4706,7.3968 3.6486,4.6858 4.1316,4.2038 C4.3566,3.9788 4.9286,3.9208 5.9126,4.3518 C5.6166,4.5678 5.3306,4.8008 5.0666,5.0658 C5.0536,5.0798 5.0416,5.0948 5.0266,5.1098 C5.5756,6.4268 6.8946,8.4088 9.2596,10.7728 C11.6206,13.1338 13.6046,14.4538 14.9246,15.0028 C14.9376,14.9898 14.9526,14.9778 14.9666,14.9638 C15.2316,14.6988 15.4646,14.4128 15.6786,14.1178 C16.1096,15.1028 16.0526,15.6748 15.8286,15.8998 M16.7526,11.8998 C17.4066,9.5458 16.8136,6.9138 14.9666,5.0658 C13.6436,3.7438 11.8866,3.0148 10.0166,3.0148 C9.3686,3.0148 8.7356,3.1078 8.1286,3.2768 C5.7306,1.7598 3.9176,1.5898 2.7176,2.7898 C1.4036,4.1028 2.0736,6.1918 3.2866,8.1688 C2.6446,10.5128 3.2276,13.1258 5.0666,14.9638 C6.3886,16.2868 8.1456,17.0148 10.0166,17.0148 C10.6536,17.0148 11.2746,16.9178 11.8736,16.7518 C13.0856,17.4938 14.3406,18.0318 15.4316,18.0318 C16.1156,18.0318 16.7366,17.8198 17.2426,17.3138 C18.4416,16.1138 18.2706,14.2988 16.7526,11.8998"></path>
                    </svg>
                    <div class="Trends__info">
                        <a href="" class="Trends__channel-name">r/fakeprehistoricporn</a>
                        <span class="Trends__channel-subscribers">148394 subscribers</span>
                    </div>
                    <a href="" class="Trends__button">
                        SUBSCRIBE
                    </a>
                </section>

            </section>
        </aside>
    </article>
  `;
    return el;
};


export const createComment = (parent, comment, child) => {
    // if (comment === undefined){return;}
    let el = document.createElement("article");
    el.className = "Comment";
    let commentDate = timeSince(new Date(comment["date"])) + " ago";
    el.innerHTML = `
                <div class="Comment__votes">
                    <button type="submit" class="Votes__arrow_up"></button>
                    <button type="submit" class="Votes__arrow_down"></button>
                    <div class="Comment__line"></div>

                </div>
                <section class="Comment__content">
                    <header class="Comment__header">
                        <a href="#" class="Comment__author">${comment["author"]}</a>
                        <span class="Comment__upvotes">${kFormatter(parseInt(comment["upvotes"]))} points</span>
                        <span class="Dot"> · </span>
                        <a class="Comment__time hover" alt="${new Date(comment["date"])}">${commentDate}</a>
                    </header>
                    <section class="Comment__text">
                        ${comment["text"]}
                    </section>
                    <section class="Comment__actions">
                        <button class="Action_reply">
                            <i class="fa fa-comment-alt"></i>
                            <a class="Action__link">Reply</a>
                        </button>
                        <a class="Action__link">Give Award</a>
                        <a class="Action__link">Share</a>
                        <a class="Action__link">Report</a>
                        <a class="Action__link">Safe</a>
                    </section>
                </section>
    `;
    parent.insertBefore(el, child);
    if (comment["replies"] !== undefined) {
        comment["replies"].map(reply => {
            createComment(el.children[1], reply)
        });
    }
};

