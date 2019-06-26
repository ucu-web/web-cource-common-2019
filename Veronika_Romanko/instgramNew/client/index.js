import NavBar from "./components/NavBar";
import "./components/Icon";
import Post from "./components/Post/";
import "./Layout.scss"
import AsideProfile from "./components/AsideProfile";
import AsideStory from "./components/AsideStory";
import AsideRecomendation from "./components/AsideRecomendation";
import AsideFooter from "./components/AsideFooter";

const LayoutHeader = document.getElementsByClassName("Layout__header")[0];
const LayoutContent = document.getElementsByClassName("Layout__content")[0];
const LayoutAside = document.getElementsByClassName("Layout__aside")[0];
const LayoutFooter = document.getElementsByClassName("Layout__footer")[0];


LayoutHeader.appendChild(NavBar());
LayoutContent.appendChild(Post());
LayoutContent.appendChild(Post());
LayoutContent.appendChild(Post());
LayoutContent.appendChild(Post());
LayoutContent.appendChild(Post());
LayoutContent.appendChild(Post());
LayoutAside.appendChild(AsideProfile());
LayoutAside.appendChild(AsideStory());
//LayoutAside.appendChild(AsideStory());
LayoutAside.appendChild(AsideRecomendation());
LayoutAside.appendChild(AsideFooter());
