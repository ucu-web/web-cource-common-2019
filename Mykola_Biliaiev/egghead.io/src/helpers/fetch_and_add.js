export const fetch_and_add = (app, endpoint, component) => {
    const tmp = document.createElement("div");
    app.appendChild(tmp);

    fetch(endpoint).then(res => res.json()).then(
        res => {
            setOuter(tmp, component(res).outerHTML);
        }
    ).catch(err => {
        tmp.outerHTML = `error `
    });
};

const setOuter = (elem, data) => {
    elem.outerHTML = data;
};