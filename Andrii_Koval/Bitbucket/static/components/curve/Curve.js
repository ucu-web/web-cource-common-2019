const renderCurve = () => {
    const container = document.createElement("section");
    container.className = "Layout__curve";
    container.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 68"
             enable-background="new 0 0 1440 68" class="Curve">
            <path d="m1622.3 1937.7c0 0-410.7 169.1-913.4 75.5-502.7-93.6-977.7 56.3-977.7 56.3v440h1891.1v-571.8"
                  fill="#F4F5F7" transform="translate(0-1977)" style="fill: #FFFFFF;"></path>
        </svg>
        <div class="Layout__curve-three-img">
            <section class="Curve__one-block">
                <div>
                    <img src="/images/01_Files.png" alt="Files logo" class="Curve__image" style="height: 140px;">
                </div>
                <div>
                    <h3 class="Curve__heading">Free unlimited private repositories</h3>
                    <p class="Curve__main-content">
                        Free for small teams under 5 and priced to scale with Standard ($2/user/mo) or Premium
                        ($5/user/mo) plans.
                    </p>
                </div>
            </section>
            <section class="Curve__one-block">
                <div>
                    <img src="/images/02_Integration.png" alt="Integration logo" class="Curve__image"
                         style="height: 132px;">
                </div>
                <div>
                    <h3 class="Curve__heading">Best-in-class Jira & Trello integration</h3>
                    <p class="Curve__main-content">
                        Keep your projects organized by creating Bitbucket branches right from Jira issues or Trello
                        cards.
                    </p>
                </div>
            </section>
            <section class="Curve__one-block">
                <div>
                    <img src="/images/03_Delivery.png" alt="Delivery logo" class="Curve__image" style="height: 140px">
                </div>
                <div>
                    <h3 class="Curve__heading">
                        Built-in Continuous
                        Delivery
                    </h3>
                    <p class="Curve__main-content">
                        Build, test and deploy with integrated CI/CD. Benefit from configuration as code and fast
                        feedback loops.
                    </p>
                </div>
            </section>
        </div>`;
    return container;
};

export default renderCurve;