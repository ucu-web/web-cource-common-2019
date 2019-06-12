import {getData} from "../../helper";

const renderFeature = async (root, endpoint) => {
    const container = document.createElement("div");
    root.appendChild(container);
    const data = await getData(endpoint);
    let text = (textData) => `<div class="Feature__text">
            <h5 class="Feature__extra-heading">${textData.title}</h5>
            <h2 class="Feature__main-heading">${textData.subtitle}</h2>
            <p class="Feature__main-content">
                ${textData.mainContent}
            </p>
        </div>`;

    let icon = (imgData) => `<div class="Feature__image">
            <img class="Feature__image-desktop" src=${imgData.desktop.src} alt=${imgData.alt}>
            <img class="Feature__image-mobile" src=${imgData.mobile.src} alt=${imgData.alt}>
        </div>`;
    let wrapper = (elem) => `<section class="Feature">${elem}</section>`;
    let correlation = {
        "text": (data) => text(data),
        "image": (data) => icon(data)
    };
    container.innerHTML = `${data.map(element => wrapper(element.map(item => correlation[item.type](item.data)).join(""))).join("")}`;
};

export default renderFeature;