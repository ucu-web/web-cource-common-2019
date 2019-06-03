export const article_creator = function () {
    const article = document.createElement("article");

    article.innerHTML = `<article class="inf-content__single">
            <div class="inf-content__single-wrapper">
                <header class="article-header">
                    <h3 class="article-header__about">FREELANCING</h3>
                    <h1 class="article-header__headline">Leaving Isn’t Failing Failing Failing ..</h1>
                    <small class="article-header__quote">When quitting is the answer</small>
                </header>

                <div class="inf-content__wrapper-options">
                    <div class="block-timestamp-auth">
                        <span>Colin Horgan</span>
                        <div>
                            <time class="block-timestamp-auth__font">Feb 15</time>
                            <span class="block-timestamp-auth__dot">.</span>
                            <span class="block-timestamp-auth__font">5 min read</span>
                            <span class="block-timestamp-auth__star">
                        <svg class="svgIcon-use" width="15" height="15"><path
                                d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0 .26-.19l1.2-3.52z"></path></svg>
                    </span>


                        </div>

                    </div>
                    <div class="inf-content__svg">
                        <svg class="svgIcon-use" width="25" height="25">
                            <path d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z"
                                  fill-rule="evenodd"></path>
                        </svg>
                        <svg class="svgIcon-use" width="25" height="25">
                            <path d="M5 12.5c0 .552.195 1.023.586 1.414.39.39.862.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414A1.927 1.927 0 0 0 7 10.5c-.552 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.617 0c0 .552.196 1.023.586 1.414.391.39.863.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414a1.927 1.927 0 0 0-1.414-.586c-.551 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.6 0c0 .552.195 1.023.586 1.414.39.39.868.586 1.432.586.551 0 1.023-.195 1.413-.586.391-.39.587-.862.587-1.414 0-.552-.196-1.023-.587-1.414a1.927 1.927 0 0 0-1.413-.586c-.565 0-1.042.195-1.432.586-.39.39-.586.862-.587 1.414z"
                                  fill-rule="evenodd"></path>
                        </svg>
                    </div>

                </div>
            </div>
            <a href="#" class="inf-content__img">
            </a>

        
`;
    return article;

};
