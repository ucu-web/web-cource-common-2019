const renderBegRes = () => {
    const container = document.createElement("section");
    container.className = "Beginner-resources";
    container.innerHTML = `<section class="Beginner-resources__text-block">
            <h2 class="Beginner-resources__main-heading">New to Git?</h2>
            <p class="Beginner-resources__main-heading-extra">
                No problem. We have resources to get you up to speed,
                quickly.
            </p>
        </section>
        <div class="Beginner-resources__image-block-container">
            <section class="Beginner-resources__image-block">
                <img src="/images/07_Branches.png" alt="Git branch icon" style="height: 90px">
                <h3 class="Beginner-resources__sub-heading">Learn Git with interactive tutorials</h3>
                <p class="Beginner-resources__main-content">
                    Make Bitbucket your Git sandbox with tutorials that bring you up to speed with Git and help you
                    build
                    effective workflows.
                </p>
                <a href="#">Learn more
                    <svg width="11px" height="8px" viewBox="0 0 11 8" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g class="group-path" transform="translate(-138.000000, -586.000000)" fill="#0052CC">
                                <path d="M145.2803,586.507862 L144.2193,587.568863 L145.9393,589.287862 L138.7503,589.287862 C138.3363,589.287862 138.0003,589.623862 138.0003,590.037862 C138.0003,590.451862 138.3363,590.787862 138.7503,590.787862 L145.9393,590.787862 L144.2193,592.507862 L145.2803,593.568863 L148.8103,590.037862 L145.2803,586.507862 Z"
                                      id="Fill-1"></path>
                            </g>
                        </g>
                    </svg>
                </a>
            </section>
        </div>
        <div class="Beginner-resources__image-block-container">
            <section class="Beginner-resources__image-block">
                <img src="/images/08_Sourcetree.svg" alt="Sourcetree icon" style="height: 90px">
                <h3 class="Beginner-resources__sub-heading">Download Sourcetree, our free Git GUI</h3>
                <p class="Beginner-resources__main-content">
                    Say goodbye to the command line - Sourcetree simplifies how you interact with your Git repositories
                    so
                    you can focus on coding.
                </p>
                <a href="#">Learn more
                    <svg width="11px" height="8px" viewBox="0 0 11 8" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g class="group-path" transform="translate(-138.000000, -586.000000)" fill="#0052CC">
                                <path d="M145.2803,586.507862 L144.2193,587.568863 L145.9393,589.287862 L138.7503,589.287862 C138.3363,589.287862 138.0003,589.623862 138.0003,590.037862 C138.0003,590.451862 138.3363,590.787862 138.7503,590.787862 L145.9393,590.787862 L144.2193,592.507862 L145.2803,593.568863 L148.8103,590.037862 L145.2803,586.507862 Z"
                                      id="Fill-1"></path>
                            </g>
                        </g>
                    </svg>
                </a>
            </section>
        </div>`;
    return container;
};

export default renderBegRes;