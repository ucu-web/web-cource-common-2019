import {createComment} from "./createPopUp";

const getSelectionText = () => {
    let sel = window.getSelection ? window.getSelection() : document.selection;
    let text = sel.toString();
    if (sel) {
        if (sel.removeAllRanges) {
            sel.removeAllRanges(); // Firefox
        } else if (sel.empty) {
            sel.empty(); // Chrome
        }
    }
    return text;
};


const addQuote = () => {
    let selection = getSelectionText();
    let el = document.createElement("div");
    el.className = "Quote__wrapper";
    el.innerHTML = `
          <blockquote>${selection}</blockquote>
    `;
    document.getElementsByClassName("Text-area")[0].appendChild(el);
};


const addSpoiler = () => {
    let selection = getSelectionText();
    let el = document.createElement("div");
    el.className = "Spoiler";
    el.innerHTML = `
        <span class="Spoiler__wrapper">${selection}</span>
    `;
    document.getElementsByClassName("Text-area")[0].appendChild(el);
};


const addListenersToTextAreaIcons = async () => {
    let iconsContainer = Array.prototype.slice.call(await document.getElementsByClassName("Icons")[0].childNodes);
    let commands = {
        "bold": ["bold", null],
        "italic": ["italic", null],
        "undo": ["undo", null],
        "redo": ["redo", null],
        "underline": ["underline", null],
        "superscript": ["superscript", null],
        "subscript": ["subscript", null],
        "strikethrough": ["strikeThrough", null],
        "heading": ["fontSize", "4"],
        "list-ul": ["insertUnorderedList", null],
        "list-ol": ["insertOrderedList", null]
    };
    iconsContainer.map(icon => {
        if (icon.className !== undefined) {
            let command = icon.className.toString().split("_")[1];
            let operation = commands[command];

            if (operation !== undefined) {
                icon.addEventListener(
                    "click", () => document.execCommand(operation[0], false, operation[1])
                );
            } else {
                if (command === "quote") {
                    icon.addEventListener("click", () => addQuote());
                } else if (command === "spoiler") {
                    icon.addEventListener("click", () => addSpoiler());
                }
            }
        }
    });
};


const postComment = async (postId) => {
    let textArea = document.getElementsByClassName("Text-area")[0];
    let commentHTML = textArea.innerHTML;
    textArea.innerHTML = `<span class="Text-area__text">What are your thoughts?</span>`;
    let commentJson = {
        "post_id" : postId,
        "author": "AloneEcho",
        "text": commentHTML,
        "date": new Date().toISOString()
    };

    let allComments = document.getElementsByClassName("Comments")[0];
    const rawResponse = await fetch('/data/comments', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'json'
        },
        body: JSON.stringify(commentJson)
    });

    let response = await rawResponse;
    createComment(allComments, commentJson, allComments.firstChild);

    console.log(response);

};


const createTextArea = async (postId) => {
    await addListenersToTextAreaIcons();
    document.getElementsByClassName("Tools__comment-button")[0].addEventListener(
        "click", () => postComment(postId)
    )
};


export default createTextArea;