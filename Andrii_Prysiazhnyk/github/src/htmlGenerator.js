export const friendsRepository = (data) => {
    const rootEl = document.createElement("article");
    rootEl.className = "News News--underscored";

    rootEl.innerHTML = `
                <a class="News__user-link" href="#">
                    <img class="News__user-photo" alt="User's photo" src="unknown.jpeg">
                </a>
                <div class="News__content">
                    <p class="News__post-info">
                        <a class="News__post-info-link" href="#">${data.friendName}</a> created a repository
                        <a class="News__post-info-link" href="#">${data.repositoryName}</a>
                        <time class="News__post-time" datetime="10-01-2019">${data.createTime}</time>
                    </p>
                    <div class="Project">
                        <form class="Project__star-form">
                            <button class="Project__star-button" type="button">
                                <svg class="Project__star-icon" version="1.1">
                                    <path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path>
                                </svg>
                                <span class="Project__star-span">Star</span>
                            </button>
                        </form>
                        <h4 class="Project__name">
                            <a class="Project__link" href="#">${data.repositoryName}</a>
                        </h4>
                        <p class="Project__information">
                            ${data.description}
                        </p>
                        <footer>
                            <time class="Project__creation-time" datetime="11-01-2019">Updated ${data.updateTime}</time>
                        </footer>
                    </div>
                </div>
    `;

    return rootEl;
};

const getRandomColor = () => ["blue", "yellow", "orange"][(Math.random() * 3) ^ 0];

export const recommendedRepository = (data) => {
    const rootEl = document.createElement("div");
    rootEl.className = "Sidebar__block";

    rootEl.innerHTML = `
                        <div class="Repository-block Repository-block--underscored">
                            <h5 class="Repository-block__title">
                                <a class="Repository-block__title-link" href="#">${data.repositoryName}</a>
                            </h5>
                            <p class="Repository-block__description">
                                ${data.description}
                            </p>
                            <footer>
                            <span class="Repository-block__language Repository-block__language--circle Repository-block__language--${getRandomColor()}-circle">
                                ${data.language}
                            </span>
                                <span class="Repository-block__subscribers">
                                <svg class="Repository-block__star-icon" version="1.1">
                                    <path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path>
                                </svg>
                                ${data.stars}
                            </span>
                            </footer>
                        </div>
    `;

    return rootEl;
};