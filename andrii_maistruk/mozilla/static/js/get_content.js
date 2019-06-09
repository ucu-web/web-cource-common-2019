function load_posts(data) {
    let posts = Array.from(document.getElementsByClassName("main-content__article"));
    for (let i = 0; i < data.length; ++i) {
        posts[i].childNodes[1].setAttribute("href", data[i]["href"]);
        posts[i].childNodes[1].children[0].setAttribute("src", data[i]["img_src"]);
        posts[i].childNodes[1].children[1].children[0].innerHTML = data[i]["note"];
        posts[i].childNodes[1].children[1].children[1].innerHTML = data[i]["heading"];
        posts[i].childNodes[1].children[1].children[2].innerHTML = data[i]["paragraph"];
    }
}

fetch("http://localhost:1337/posts").then(res => res.json()).then(data => {
    load_posts(data);
}).catch((error) => {
    fetch("static/js/posts.json").then(res => res.json()).then(data => {
        load_posts(data);
    })
});
