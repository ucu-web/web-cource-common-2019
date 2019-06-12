const renderIntegration = () => {
    const container = document.createElement("section");
    container.className = "Integration";
    container.innerHTML = `
        <div class="Integration__heading">
            <h2 class="Integration__heading-main">
                Integrations: Bitbucket, but better
            </h2>
            <p class="Integration__heading-extra">
                Start with Bitbucket, then bring in the tools you already use to build better software
            </p>
        </div>
        <section class="Integration__feature">
            <section class="Integration__feature-block Curve__one-block">
                <img src="/images/09_Software.png" alt="Jira Software" style="height: 90px">
                <h3 class="Integration__feature-heading">Jira Software</h3>
                <p class="Integration__feature-content">
                    Improve efficiency by connecting branches, commits, and pull requests to Jira Software issues.
                </p>
                <a href="#">See all integrations
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
            <section class="Integration__feature-block Curve__one-block">
                <img src="/images/10_IntegratioPuzzle.png" alt="Connect framework (puzzle image)" style="height: 90px">
                <h3 class="Integration__feature-heading">Connect framework</h3>
                <p class="Integration__feature-content">
                    Customize Bitbucket your way with apps that embed right in Bitbucket’s UI, built with Bitbucket
                    Connect.
                </p>
            </section>
            <section class="Integration__feature-block Curve__one-block">
                <img src="/images/11_Connection.png" alt="Trigger Webhooks" style="height: 90px">
                <h3 class="Integration__feature-heading">Trigger Webhooks</h3>
                <p class="Integration__feature-content">
                    Integrate easily with systems you already use in your day-to-day using Bitbucket webhooks.
                </p>
            </section>
        </section>`;
    return container;
};

export default renderIntegration;