const renderPartners = () => {
    const container = document.createElement("section");
    container.className = "Partners";
    container.innerHTML = `<h2 class="Partners__heading">
            More than 1 million teams and 6 million developers love Bitbucket
        </h2>
        <div class="Partners__image">
            <img class="Partners__image-desktop" src="/images/12_Partners.png" alt="Customers icon" style="height: 75px;">
            <img class="Partners__image-mobile" src="/images/12_Partners_Mobile.png" alt="Customers icon">
        </div>
<div class="Horizontal-line">
    <hr>
</div>`;
    return container;
};

export default renderPartners;