const create_paragraph = (paragraph) => {
    return ` <h1 class="Readme__h1">
                        ${paragraph.header}
                    </h1>
                    <p class="Readme__paragraph">
                       ${paragraph.description}
                    </p>`
};

module.exports = {
    create_paragraph: create_paragraph
};

