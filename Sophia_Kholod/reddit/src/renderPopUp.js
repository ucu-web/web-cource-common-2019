import createTextArea from "../src/createTextArea.js";
import {createPopUp} from "../src/createPopUp.js";
import {createComment} from "../src/createPopUp.js";
import {readJSONFromFile} from "../src/common.js";
import $ from "jquery";


const showDropdown = (current) => {
    console.log(current);
    let dropdown = $(".Sort__dropdown")[0];
    let dropdownDisplay = dropdown.style.display;
    dropdown.style.display = dropdownDisplay === "none" ? "flex" : "none";
};

const sortNew =(json1, json2) => {
    let date1 = new Date(json1["date"]);
    let date2 = new Date(json2["date"]);
    if (date2 < date1) return -1;
    if (date2 > date1) return 1;
    return 0;
};

const sortOld =(json1, json2) => {
    let date1 = new Date(json1["date"]);
    let date2 = new Date(json2["date"]);
    if (date2 > date1) return -1;
    if (date2 < date1) return 1;
    return 0;
};

const sortTop =(json1, json2) => {
    let votes1 = json1["upvotes"];
    let votes2 = json2["upvotes"];
    if (votes2 < votes1) return -1;
    if (votes2 > votes1) return 1;
    return 0;
};

const reorderComments = async (clicked, postId) => {
    let dropdown = $(".Sort__dropdown")[0];
    let dropdownItems = dropdown.children;
    let actionList = clicked.className.split('_');
    let action = actionList[actionList.length - 1];
    let prevSelected = Array.prototype.find.call(
        dropdownItems, item => $(item).hasClass("Dropdown__item_selected"));

    $(prevSelected).removeClass("Dropdown__item_selected");
    $(clicked).addClass("Dropdown__item_selected");

    let commentsContainer = $(".Comments")[0];
    commentsContainer.innerHTML =``;
    let comments = await readJSONFromFile("../data/comments" + postId.toString() + ".json");

    if (action === "new")      comments.sort((a, b) => {return sortNew(a, b)});
    else if (action === "old") comments.sort((a, b) => {return sortOld(a, b)});
    else if (action === "top"){comments.sort((a, b) => {return sortTop(a, b)}); action="top(suggested)"}

    $(".Sort__text")[0].innerText = action;
    dropdown.style.display = "none";

    comments.map(comment => createComment(commentsContainer, comment));
};


const renderPopUp = async (postId) => {
    document.getElementsByClassName("Layout__pop-up")[0].style.gridRowEnd = "5";
    let posts = await readJSONFromFile("../data/posts.json");
    let comments = await readJSONFromFile("../data/comments" + postId.toString() + ".json");

    let post = posts.find(post => {return post["id"] === postId});
    let popUp = await createPopUp(post);
    let layout = $(".Layout__pop-up")[0];
    layout.appendChild(popUp);

    let commentsParent = $(".Comments")[0];
    $(".Pop-up")[0].style.display = "grid";

    comments.sort((a, b) => {return sortNew(a, b)});
    comments.map(comment => createComment(commentsParent, comment));

    $(".Close-button")[0].addEventListener(
        "click", () => {
            layout.innerHTML = "";
            layout.style.gridRowEnd = null;
        });

    let sortButton = $(".Sort__button")[0];
    sortButton.addEventListener(
        "click", () =>{ showDropdown(sortButton.childNodes[1].value) }
    );

    let dropdownChildren =
        $(".Sort__dropdown")[0].children;

    Array.prototype.forEach.call(dropdownChildren, child => child.addEventListener(
        "click", () => reorderComments(child, postId)
    ));

    createTextArea(postId);
};


export default renderPopUp;