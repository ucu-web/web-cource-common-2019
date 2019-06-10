import createTextArea from "../src/createTextArea.js";
import {createPopUp} from "../src/createPopUp.js";
import {createComment} from "../src/createPopUp.js";
import {readJSONFromFile} from "../src/common.js";
import $ from "jquery";


const showDropdown = (current) => {
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

const sortOld = (json1, json2) => {
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

const hidePopUp = () => {
    let layout = $(".Layout__pop-up")[0];
    layout.innerHTML = "";
    layout.style.display = "none";
    layout.style.gridRowStart = null;
    layout.style.gridRowEnd = null;
    layout.style.gridColumnStart = null;
    layout.style.gridColumnEnd = null;

    let lay = document.getElementsByClassName("Layout__content-wrapper")[0];
    lay.style.position = "static";
    lay.style.gridRowStart = "2";
    lay.style.gridRowEnd = "3";
    lay.style.gridColumnStart = "1";
    lay.style.gridColumnEnd = "2";

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
    // document.getElementsByClassName("Layout__content-wrapper")[0].style.gridRow = null;
    document.getElementsByClassName("Layout__content-wrapper")[0].style.position = "fixed";
    // document.getElementsByClassName("Layout__pop-up")[0].style.gridRow = "2";
    document.getElementsByClassName("Layout__pop-up")[0].style.display = "grid";
    let layout = $(".Layout__pop-up")[0];
    // layout.style.display = "none";
    layout.style.gridRowStart = "2";
    layout.style.gridRowEnd = "3";
    layout.style.gridColumnStart = "1";
    layout.style.gridColumnEnd = "2";

    let comments = await readJSONFromFile("../data/comments" + postId.toString() + ".json");
    let posts = await readJSONFromFile("../data/posts.json");

    let post = posts.find(post => {return post["id"] === postId});
    let popUp = await createPopUp(post);
    // let layout = $(".Layout__pop-up")[0];
    layout.appendChild(popUp);

    let commentsParent = $(".Comments")[0];

    popUp.style.display = "grid";

    comments.sort((a, b) => {return sortTop(a, b)});
    comments.map(comment => createComment(commentsParent, comment));

    $(".Close-button")[0].addEventListener(
        "click", () => hidePopUp());

    popUp.addEventListener(
        "click", (event) =>{
            if (!event.path.includes($(".Pop-up__content")[0]))
                hidePopUp();
        }
    );

    $(document).on('keydown', function (e) {
        if (e.keyCode === 27) { // ESC
            hidePopUp();
        }
    });

    let sortButton = $(".Sort__button")[0];
    sortButton.addEventListener(
        "click", () =>{ showDropdown() }
    );

    sortButton.addEventListener(
        "focus", () =>{ showDropdown() }
    );


    let dropdownChildren =
        $(".Sort__dropdown")[0].children;

    Array.prototype.forEach.call(dropdownChildren, child => child.addEventListener(
        "click", () => reorderComments(child, postId)
    ));

    createTextArea(postId);
};


export default renderPopUp;