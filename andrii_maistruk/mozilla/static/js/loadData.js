import {loadPosts, loadReadings} from "./utils.js";

export let loadData = () => {
    fetch("http://localhost:1337/posts").then(res => res.json()).then(data => {
        loadPosts(data);
    }).catch(() => {
        fetch("static/js/posts.json").then(res => res.json()).then(data => {
            loadPosts(data);
        })
    });
    fetch("http://localhost:1337/readings").then(res => res.json()).then(data => {
        loadReadings(data);
    }).catch(() => {
        fetch("static/js/readings.json").then(res => res.json()).then(data => {
            loadReadings(data);
        })
    });
};