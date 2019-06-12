const renderIntro = () => {
    const container = document.createElement('section');
    container.className = "Layout__intro";
    container.innerHTML = `<div class="Intro">
            <h1 class="Intro__heading">
                Built for professional teams
            </h1>
            <p class="Intro__sub-heading">
                Bitbucket is more than just Git code management. Bitbucket gives teams one
                place to plan projects, collaborate on code, test, and deploy.
            </p>
            <div>
                <a href="#" class="Intro__button">Get started for free</a>
            </div>
            <p class="Intro__proposition">Or host it yourself with <a href="#"> Bitbucket Enterprise
                <svg width="11px" height="8px" viewBox="0 0 11 8" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g class="group-path" transform="translate(-138.000000, -586.000000)" fill="#0052CC">
                            <path d="M145.2803,586.507862 L144.2193,587.568863 L145.9393,589.287862 L138.7503,589.287862 C138.3363,589.287862 138.0003,589.623862 138.0003,590.037862 C138.0003,590.451862 138.3363,590.787862 138.7503,590.787862 L145.9393,590.787862 L144.2193,592.507862 L145.2803,593.568863 L148.8103,590.037862 L145.2803,586.507862 Z"
                                  id="Fill-1"></path>
                        </g>
                    </g>
                </svg>
            </a></p>
            <img src="/images/00_HeroImage.png" alt="Hero Image" class="Intro__image">
        </div>`;
    return container;
};

export default renderIntro;