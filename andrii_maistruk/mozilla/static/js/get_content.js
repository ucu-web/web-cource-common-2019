function load_posts(data) {
    Array.from(document.getElementsByClassName("main-content__article")).forEach((post, i) => {
        post.childNodes[1].setAttribute("href", data[i]["href"]);
        post.childNodes[1].children[0].setAttribute("src", data[i]["img_src"]);
        post.childNodes[1].children[1].children[0].innerHTML = data[i]["note"];
        post.childNodes[1].children[1].children[1].innerHTML = data[i]["heading"];
        post.childNodes[1].children[1].children[2].innerHTML = data[i]["paragraph"];
    });
}

fetch("http://localhost:1337/posts").then(res => res.json()).then(data => {
    load_posts(data);
}).catch((error) => {
    fetch("static/js/posts.json").then(res => res.json()).then(data => {
        load_posts(data);
    })
});
