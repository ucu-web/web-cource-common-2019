import "./css/main.scss";
import {article_creator} from "./content.js"
//
const obj = document.querySelector(".inf-content");
console.log(obj)
// document.querySelector(".inf-content").appendChild(article);
// document.querySelector(".inf-content").appendChild(article);
obj.appendChild(article_creator());
obj.appendChild(article_creator());
obj.appendChild(article_creator());
obj.appendChild(article_creator());
