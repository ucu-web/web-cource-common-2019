export const friendsRepository = (user, repository) => {
    const rootEl = document.createElement("article");
    rootEl.className = "News News--underscored";

    rootEl.innerHTML = `
                <a class="News__user-link" href="#">
                    <img class="News__user-photo" alt="User's photo" src="unknown.jpeg">
                </a>
                <div class="News__content">
                    <p class="News__post-info">
                        <a class="News__post-info-link" href="#">${user.login}</a> created a repository
                        <a class="News__post-info-link" href="#">${repository.name}</a>
                        <time class="News__post-time" datetime="10-01-2019">${repository.creationTime}</time>
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
                            <a class="Project__link" href="#">${repository.name}</a>
                        </h4>
                        <p class="Project__information">
                            ${repository.description}
                        </p>
                        <footer>
                            <time class="Project__creation-time" datetime="11-01-2019">Updated ${repository.updateTime}</time>
                        </footer>
                    </div>
                </div>
    `;

    return rootEl;
};

const getRandomColor = () => ["blue", "yellow", "orange"][(Math.random() * 3) ^ 0];

export const recommendedRepository = (repository) => {
    const rootEl = document.createElement("div");
    rootEl.className = "Sidebar__block";

    rootEl.innerHTML = `
                        <div class="Repository-block Repository-block--underscored">
                            <h5 class="Repository-block__title">
                                <a class="Repository-block__title-link" href="#">${repository.name}</a>
                            </h5>
                            <p class="Repository-block__description">
                                ${repository.description}
                            </p>
                            <footer>
                            <span class="Repository-block__language Repository-block__language--circle Repository-block__language--${getRandomColor()}-circle">
                                ${repository.language}
                            </span>
                                <span class="Repository-block__subscribers">
                                <svg class="Repository-block__star-icon" version="1.1">
                                    <path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path>
                                </svg>
                                ${repository.stars}
                            </span>
                            </footer>
                        </div>
    `;

    return rootEl;
};
