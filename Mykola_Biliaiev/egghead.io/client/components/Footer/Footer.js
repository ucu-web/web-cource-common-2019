import bem from "../../helpers/bem";

const b = bem("footer");
const Footer = () => {
    const footer = document.createElement("footer");
    footer.className = `${b()}`;

    footer.innerHTML = `

        <div class="${b("wrapper")}">
            <div class="${b("logo-wrapper")}">
                <img class="${b("logo")}" src="/images/logo.svg"  alt="">
            </div>
            <div class="${b("content")}">
                <div class="${b("content-search-wrap")}">
                    <h2 class="${b("content-search-title")}">Search for Lessons and Courses</h2>
                    <div class="${b("content-search")}">
                        <input class="${b("content-search-input")}" placeholder="e.g JavaScript, React" type="text">
                        <button class="${b("content-search-button")}">
                            <img src="/images/search_icon.svg" alt="">
                        </button>
                    </div>
                </div>
                
                
                <div class="${b("content-information-wrap")}">
                    <div class="${b("content-ul-wrapper")}">
                        <h2 class="${b("content-ul-title")}">
                            Content
                        </h2>
                        <ul class="${b("content-ul")}">
                            <li class="${b("content-list-item")}">Browse</li>
                            <li class="${b("content-list-item")}">Courses</li>
                            <li class="${b("content-list-item")}">Lessons</li>
                            <li class="${b("content-list-item")}">Podcasts</li>
                        </ul>
                    </div>
                    <div class="${b("content-ul-wrapper")}">
                        <h2 class="${b("content-ul-title")}">
                            About
                        </h2>
                        <ul class="${b("content-ul")}">
                            <li class="${b("content-list-item")}">Pricing</li>
                            <li class="${b("content-list-item")}">Instructors</li>
                            <li class="${b("content-list-item")}">Stories</li>
                            <li class="${b("content-list-item")}">Team</li>
                        </ul>
                    </div>
                
                </div>
                
                
            </div>
            
            <div class="${b("extra-info")}">
                <ul class="${b("extra-info-ul")}">
                    <li class="${b("extra-info-li")}">Terms & Conditions</li>
                    <li class="${b("extra-info-li")}">© egghead.io</li>
                </ul>            
            </div>
        </div>
`;
    return footer;
};
export default Footer;
