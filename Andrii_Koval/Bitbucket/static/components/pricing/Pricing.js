const renderPricing = () => {
    const container = document.createElement("section");
    container.className = "Pricing";
    container.innerHTML = `<div class="Pricing__container">
            <div class="Pricing__title">
                <h2 class="Pricing__title-text">Simple plans hosted in the cloud. Priced to scale.</h2>
            </div>
            <div class="Pricing__container-wrapper">
                <div class="Pricing__container-block">
                    <div class="Pricing__block">
                        <div class="Pricing__block-bg">
                            <div class="Pricing__block-text">
                                <h4 class="Pricing__block-name">Free</h4>
                                <p class="Pricing__block-subname">for small teams</p>
                            </div>
                            <div>
                                <h2 class="Pricing__block-price">$0</h2>
                            </div>
                            <div>
                                <p class="Pricing__block-subname">/ user / month</p>
                            </div>
                            <div>
                                <p class="Pricing__block-usability">Free for up to 5 users</p>
                            </div>
                        </div>
                    </div>
                    <div class="Pricing__features">
                        <div>
                            <ul class="Pricing__list">
                                <li class="Pricing__feature-active">Unlimited private repos</li>
                                <li class="Pricing__feature-active">Jira Software integration</li>
                                <li class="Pricing__feature-active">Projects</li>
                                <li class="Pricing__feature-active">Pipelines</li>
                                <li class="Pricing__feature-inactive">Unlimited users</li>
                                <li class="Pricing__feature-inactive">Merge checks</li>
                                <li class="Pricing__feature-inactive">Deployment permissions</li>
                                <li class="Pricing__feature-inactive">IP Whitelisting</li>
                                <li class="Pricing__feature-inactive">Required two-step verification</li>
                                <li class="Pricing__feature-inactive">Smart Mirroring</li>
                            </ul>
                        </div>
                    </div>
                    <div class="Pricing__separator">
                        <hr>
                    </div>
                    <div class="Pricing__extra">
                        <ul class="Pricing__list">
                            <li class="Pricing__extra-text"><i>Included with your account:</i></li>
                            <li class="Pricing__extra-text">*Build minutes: 50 mins/mo</li>
                            <li class="Pricing__extra-text">*File storage: 1GB/mo</li>
                        </ul>
                    </div>
                </div>
                <div class="Pricing__btn-container">
                    <a href="" class="Intro__button">Get started for free </a>
                </div>
            </div>
            <div class="Pricing__container-wrapper">
                <div class="Pricing__container-block">
                    <div class="Pricing__block">
                        <div class="Pricing__block-bg">
                            <div class="Pricing__block-text">
                                <h4 class="Pricing__block-name">Standard</h4>
                                <p class="Pricing__block-subname">for growing teams</p>
                            </div>
                            <div>
                                <h2 class="Pricing__block-price">$2</h2>
                            </div>
                            <div>
                                <p class="Pricing__block-subname">/ user / month</p>
                            </div>
                            <div>
                                <p class="Pricing__block-usability">Starts at $10 /month</p>
                            </div>
                        </div>
                    </div>
                    <div class="Pricing__features">
                        <div>
                            <ul class="Pricing__list">
                                <li class="Pricing__feature-active">Unlimited private repos</li>
                                <li class="Pricing__feature-active">Jira Software integration</li>
                                <li class="Pricing__feature-active">Projects</li>
                                <li class="Pricing__feature-active">Pipelines</li>
                                <li class="Pricing__feature-active">Unlimited users</li>
                                <li class="Pricing__feature-inactive">Merge checks</li>
                                <li class="Pricing__feature-inactive">Deployment permissions</li>
                                <li class="Pricing__feature-inactive">IP Whitelisting</li>
                                <li class="Pricing__feature-inactive">Required two-step verification</li>
                                <li class="Pricing__feature-inactive">Smart Mirroring</li>
                            </ul>
                        </div>
                    </div>
                    <div class="Pricing__separator">
                        <hr>
                    </div>
                    <div class="Pricing__extra">
                        <ul class="Pricing__list">
                            <li class="Pricing__extra-text"><i>Included with your account:</i></li>
                            <li class="Pricing__extra-text">*Build minutes: 500 mins/mo</li>
                            <li class="Pricing__extra-text">*File storage: 5GB/mo</li>
                        </ul>
                    </div>
                </div>
                <div class="Pricing__btn-container">
                    <a href="" class="Intro__button">Try it </a>
                </div>
            </div>
            <div class="Pricing__container-wrapper">
                <div class="Pricing__container-block">
                    <div class="Pricing__block">
                        <div class="Pricing__block-bg">
                            <div class="Pricing__block-text">
                                <h4 class="Pricing__block-name">Premium</h4>
                                <p class="Pricing__block-subname">for large teams</p>
                            </div>
                            <div>
                                <h2 class="Pricing__block-price">$5</h2>
                            </div>
                            <div>
                                <p class="Pricing__block-subname">/ user / month</p>
                            </div>
                            <div>
                                <p class="Pricing__block-usability">Starts at 25$ /month</p>
                            </div>
                        </div>
                    </div>
                    <div class="Pricing__features">
                        <div>
                            <ul class="Pricing__list">
                                <li class="Pricing__feature-active">Unlimited private repos</li>
                                <li class="Pricing__feature-active">Jira Software integration</li>
                                <li class="Pricing__feature-active">Projects</li>
                                <li class="Pricing__feature-active">Pipelines</li>
                                <li class="Pricing__feature-active">Unlimited users</li>
                                <li class="Pricing__feature-active">Merge checks</li>
                                <li class="Pricing__feature-active">Deployment permissions</li>
                                <li class="Pricing__feature-active">IP Whitelisting</li>
                                <li class="Pricing__feature-active">Required two-step verification</li>
                                <li class="Pricing__feature-active">Smart Mirroring</li>
                            </ul>
                        </div>
                    </div>
                    <div class="Pricing__separator">
                        <hr>
                    </div>
                    <div class="Pricing__extra">
                        <ul class="Pricing__list">
                            <li class="Pricing__extra-text"><i>Included with your account:</i></li>
                            <li class="Pricing__extra-text">*Build minutes: 1000 mins/mo</li>
                            <li class="Pricing__extra-text">*File storage: 10GB/mo</li>
                        </ul>
                    </div>
                </div>
                <div class="Pricing__btn-container">
                    <a href="" class="Intro__button">Get started for free </a>
                </div>
            </div>
            <div class="Pricing__container-remarks">
                <p>*Build minutes are for&nbsp;
                    <a href="#">Bitbucket Pipelines</a>
                    &nbsp;and File storage is for&nbsp;
                    <a href="#">Git
                        Large File Storage<br> (LFS)</a>.
                    Build minutes and file storage are shared among all users on
                    an account.&nbsp;
                </p>
            </div>
        </div>`;
    return container;
};

export default renderPricing;