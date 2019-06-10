export const loading = () => {
    let loader = document.createElement("div");
    loader.className = `loader`;
    loader.innerHTML = `
        <div class="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
`;
    return loader
};
export default loading;