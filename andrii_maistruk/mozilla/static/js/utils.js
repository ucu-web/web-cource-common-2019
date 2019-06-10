let setPostLink = (post, link) => {
    post.childNodes[1].setAttribute("href", link);
};

let setPostImage = (post, imgSrc) => {
    post.childNodes[1].children[0].setAttribute("src", imgSrc);
};

let setPostNote = (post, note) => {
    post.childNodes[1].children[1].children[0].innerHTML = note;
};

let setPostHeading = (post, heading) => {
    post.childNodes[1].children[1].children[1].innerHTML = heading;
};

let setPostParagraph = (post, paragraph) => {
    post.childNodes[1].children[1].children[2].innerHTML = paragraph;
};

let setFeedPostLink = (post, link) => {
    post.children[0].setAttribute("href", link);
};

let setFeedPostImage = (post, imgSrc) => {
    post.children[0].children[0].setAttribute("src", imgSrc);
};

let setFeedPostNote = (post, note) => {
    post.children[0].children[1].innerHTML = note;
};

let setFeedPostHeading = (post, heading) => {
    post.children[0].children[2].innerHTML = heading;
};

export let loadPosts = (data) => {
    Array.from(document.getElementsByClassName("main-content__article")).forEach((post, i) => {
        setPostLink(post, data[i]["href"]);
        setPostImage(post, data[i]["img_src"]);
        setPostNote(post, data[i]["note"]);
        setPostHeading(post, data[i]["heading"]);
        setPostParagraph(post, data[i]["paragraph"]);
    });
};

export let loadReadings = (data) => {
    Array.from(document.getElementsByClassName("aside-pocket__post")).forEach((post, i) => {
        setFeedPostLink(post, data[i]["href"]);
        setFeedPostImage(post, data[i]["img_src"]);
        setFeedPostNote(post, data[i]["note"]);
        setFeedPostHeading(post, data[i]["heading"]);
    })
};
