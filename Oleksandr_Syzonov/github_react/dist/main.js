!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=19)}([function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n(1);function i(t){return function e(n){return 0===arguments.length||Object(r.a)(n)?e:t.apply(this,arguments)}}},function(t,e,n){"use strict";function r(t){return null!=t&&"object"==typeof t&&!0===t["@@functional/placeholder"]}n.d(e,"a",function(){return r})},function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n(0),i=n(1);function o(t){return function e(n,o){switch(arguments.length){case 0:return e;case 1:return Object(i.a)(n)?e:Object(r.a)(function(e){return t(n,e)});default:return Object(i.a)(n)&&Object(i.a)(o)?e:Object(i.a)(n)?Object(r.a)(function(e){return t(e,o)}):Object(i.a)(o)?Object(r.a)(function(e){return t(n,e)}):t(n,o)}}}},function(t,e,n){"use strict";function r(t,e){switch(t){case 0:return function(){return e.apply(this,arguments)};case 1:return function(t){return e.apply(this,arguments)};case 2:return function(t,n){return e.apply(this,arguments)};case 3:return function(t,n,r){return e.apply(this,arguments)};case 4:return function(t,n,r,i){return e.apply(this,arguments)};case 5:return function(t,n,r,i,o){return e.apply(this,arguments)};case 6:return function(t,n,r,i,o,a){return e.apply(this,arguments)};case 7:return function(t,n,r,i,o,a,c){return e.apply(this,arguments)};case 8:return function(t,n,r,i,o,a,c,s){return e.apply(this,arguments)};case 9:return function(t,n,r,i,o,a,c,s,u){return e.apply(this,arguments)};case 10:return function(t,n,r,i,o,a,c,s,u,l){return e.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}n.d(e,"a",function(){return r})},function(t,e,n){"use strict";e.a={init:function(){return this.xf["@@transducer/init"]()},result:function(t){return this.xf["@@transducer/result"](t)}}},function(t,e,n){"use strict";e.a=Array.isArray||function(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)}},function(t,e,n){"use strict";var r=n(0),i=n(5);var o=Object(r.a)(function(t){return!!Object(i.a)(t)||!!t&&("object"==typeof t&&(!function(t){return"[object String]"===Object.prototype.toString.call(t)}(t)&&(1===t.nodeType?!!t.length:0===t.length||t.length>0&&(t.hasOwnProperty(0)&&t.hasOwnProperty(t.length-1)))))}),a=function(){function t(t){this.f=t}return t.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},t.prototype["@@transducer/result"]=function(t){return t},t.prototype["@@transducer/step"]=function(t,e){return this.f(t,e)},t}();var c=n(3),s=n(2),u=Object(s.a)(function(t,e){return Object(c.a)(t.length,function(){return t.apply(e,arguments)})});function l(t,e,n){for(var r=n.next();!r.done;){if((e=t["@@transducer/step"](e,r.value))&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}r=n.next()}return t["@@transducer/result"](e)}function f(t,e,n,r){return t["@@transducer/result"](n[r](u(t["@@transducer/step"],t),e))}n.d(e,"a",function(){return d});var p="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";function d(t,e,n){if("function"==typeof t&&(t=function(t){return new a(t)}(t)),o(n))return function(t,e,n){for(var r=0,i=n.length;r<i;){if((e=t["@@transducer/step"](e,n[r]))&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}r+=1}return t["@@transducer/result"](e)}(t,e,n);if("function"==typeof n["fantasy-land/reduce"])return f(t,e,n,"fantasy-land/reduce");if(null!=n[p])return l(t,e,n[p]());if("function"==typeof n.next)return l(t,e,n);if("function"==typeof n.reduce)return f(t,e,n,"reduce");throw new TypeError("reduce: list must be array or iterable")}},function(t,e,n){"use strict";var r=n(0);function i(t,e){return Object.prototype.hasOwnProperty.call(e,t)}var o=Object.prototype.toString,a=function(){return"[object Arguments]"===o.call(arguments)?function(t){return"[object Arguments]"===o.call(t)}:function(t){return i("callee",t)}}(),c=!{toString:null}.propertyIsEnumerable("toString"),s=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],u=function(){return arguments.propertyIsEnumerable("length")}(),l=function(t,e){for(var n=0;n<t.length;){if(t[n]===e)return!0;n+=1}return!1},f="function"!=typeof Object.keys||u?Object(r.a)(function(t){if(Object(t)!==t)return[];var e,n,r=[],o=u&&a(t);for(e in t)!i(e,t)||o&&"length"===e||(r[r.length]=e);if(c)for(n=s.length-1;n>=0;)i(e=s[n],t)&&!l(r,e)&&(r[r.length]=e),n-=1;return r}):Object(r.a)(function(t){return Object(t)!==t?[]:Object.keys(t)});e.a=f},function(t,e,n){"use strict";var r=n(5);function i(t,e,n){return function(){if(0===arguments.length)return n();var i=Array.prototype.slice.call(arguments,0),o=i.pop();if(!Object(r.a)(o)){for(var a=0;a<t.length;){if("function"==typeof o[t[a]])return o[t[a]].apply(o,i);a+=1}if(function(t){return null!=t&&"function"==typeof t["@@transducer/step"]}(o))return e.apply(null,i)(o)}return n.apply(this,arguments)}}n.d(e,"a",function(){return i})},function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o});var r=n(11);const i=(t,e)=>{e.innerHTML+=`<p class="Repository__description-text">\n${t.description}\n          </p><ul class="Repository__tags">\n          </ul>`,e.querySelector(".Repository__tags"),Object(r.a)(t=>{e.querySelector(".Repository__tags").innerHTML+=`<li class="Repository__tag">\n              <a class="Repository__tag-link" href="#">${t}</a>\n            </li>`},t.topics)},o=(t,e)=>{let n=t.full_name.split("/");e.innerHTML+=`<a class="Repository-title__user-link" href="#">\n                  ${n[0]}\n                </a>\n                /\n                <a class="Repository-title__repository-link" href="#">\n                  ${n[1]}\n                </a>`}},,function(t,e,n){"use strict";var r=n(2),i=n(8);var o=n(6),a=n(4),c=function(){function t(t,e){this.xf=e,this.f=t}return t.prototype["@@transducer/init"]=a.a.init,t.prototype["@@transducer/result"]=a.a.result,t.prototype["@@transducer/step"]=function(t,e){return this.xf["@@transducer/step"](t,this.f(e))},t}(),s=Object(r.a)(function(t,e){return new c(t,e)}),u=n(3),l=n(0),f=n(1);var p=Object(r.a)(function(t,e){return 1===t?Object(l.a)(e):Object(u.a)(t,function t(e,n,r){return function(){for(var i=[],o=0,a=e,c=0;c<n.length||o<arguments.length;){var s;c<n.length&&(!Object(f.a)(n[c])||o>=arguments.length)?s=n[c]:(s=arguments[o],o+=1),i[c]=s,Object(f.a)(s)||(a-=1),c+=1}return a<=0?r.apply(this,i):Object(u.a)(a,t(e,i,r))}}(t,[],e))}),d=n(7),h=Object(r.a)(Object(i.a)(["fantasy-land/map","map"],s,function(t,e){switch(Object.prototype.toString.call(e)){case"[object Function]":return p(e.length,function(){return t.call(this,e.apply(this,arguments))});case"[object Object]":return Object(o.a)(function(n,r){return n[r]=t(e[r]),n},{},Object(d.a)(e));default:return function(t,e){for(var n=0,r=e.length,i=Array(r);n<r;)i[n]=t(e[n]),n+=1;return i}(t,e)}}));e.a=h},function(t,e,n){var r=n(13);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(15)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(14)(!1)).push([t.i,".File {\n  max-width: 980px;\n  margin: auto;\n  display: flex;\n  align-items: center;\n  max-height: 2rem;\n  border: 1px solid #e1e4e8;\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n.File__edited {\n  display: block;\n  width: 7rem;\n  max-height: 1.2rem;\n  color: #6a737d;\n  overflow: hidden;\n}\n.File__description {\n  width: 36rem;\n  max-height: 1.2rem;\n  color: #6a737d;\n  overflow: hidden;\n}\n.File__filename {\n  width: 14rem;\n  padding: 0.38rem 0.19rem;\n  max-height: 1.2rem;\n  overflow: hidden;\n}\n.File__icon {\n  padding-left: 0.65rem;\n  filter: invert(55%);\n}\n.File__link {\n  text-decoration: none;\n  color: #0366d6;\n  font-weight: 400;\n}\n",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(o).concat([i]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r,i,o={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),c=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),s=null,u=0,l=[],f=n(16);function p(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=o[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(v(r.parts[a],e))}else{var c=[];for(a=0;a<r.parts.length;a++)c.push(v(r.parts[a],e));o[r.id]={id:r.id,refs:1,parts:c}}}}function d(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=e.base?o[0]+e.base:o[0],c={css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(c):n.push(r[a]={id:a,parts:[c]})}return n}function h(t,e){var n=c(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),l.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=c(t.insertAt.before,n);n.insertBefore(e,i)}}function y(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=l.indexOf(t);e>=0&&l.splice(e,1)}function b(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return m(e,t.attrs),h(t,e),e}function m(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function v(t,e){var n,r,i,o;if(e.transform&&t.css){if(!(o="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=o}if(e.singleton){var a=u++;n=s||(s=b(e)),r=j.bind(null,n,a,!1),i=j.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",m(e,t.attrs),h(t,e),e}(e),r=function(t,e,n){var r=n.css,i=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(r=f(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([r],{type:"text/css"}),c=t.href;t.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}.bind(null,n,e),i=function(){y(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){y(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=d(t,e);return p(n,e),function(t){for(var r=[],i=0;i<n.length;i++){var a=n[i];(c=o[a.id]).refs--,r.push(c)}t&&p(d(t,e),e);for(i=0;i<r.length;i++){var c;if(0===(c=r[i]).refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete o[c.id]}}}};var g,_=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function j(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=_(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i,o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(t,e){t.exports={create_paragraph:t=>` <h1 class="Readme__h1">\n                        ${t.header}\n                    </h1>\n                    <p class="Readme__paragraph">\n                       ${t.description}\n                    </p>`}},,function(t,e,n){"use strict";n.r(e);const r="__",i="--";var o=t=>(e,n={})=>{let o,a;return"string"==typeof e?o=e:n=e||{},a=Array.isArray(n)?n:Object.keys(n).filter(t=>n[t])||[],function({b:t,e:e,m:n}){const o=e?[t,e].join(r):t;return[o,...n.map(t=>[o,t].join(i))].join(" ").trim()}({b:t,e:o,m:a})};n(12);const a=o("File"),c=t=>{const e=document.createElement("article");e.setAttribute("_id",t.id);const n=t.is_directory?"../icons/directory.svg":"../icons/file.svg";return e.className=a(),e.innerHTML=`<img alt="" class="File__icon" src="${n}">\n    <h4 class="File__filename"><a class="File__link" href="#">${t.name}</a></h4>\n    <p class="File__description">${t.latest_commit_text} </p>\n    <time class="File__edited">${t.latest_commit_time}</time>`,e},s=()=>{const t=document.createElement("article");return t.className=a(["previous"]),t.innerHTML='<img alt="" class="File__icon" src="../icons/directory.svg">\n    <h4 class="File__filename"><a class="File__link" href="#">...</a></h4>\n    <p class="File__description"></p>\n    <time class="File__edited"></time>',t.querySelector(".File__icon").style.visibility="hidden",t};n(17);var u=n(2),l=n(8);var f=n(6),p=n(4),d=function(){function t(t,e){this.xf=e,this.f=t}return t.prototype["@@transducer/init"]=p.a.init,t.prototype["@@transducer/result"]=p.a.result,t.prototype["@@transducer/step"]=function(t,e){return this.f(e)?this.xf["@@transducer/step"](t,e):t},t}(),h=Object(u.a)(function(t,e){return new d(t,e)}),y=n(7),b=Object(u.a)(Object(l.a)(["filter"],h,function(t,e){return n=e,"[object Object]"===Object.prototype.toString.call(n)?Object(f.a)(function(n,r){return t(e[r])&&(n[r]=e[r]),n},{},Object(y.a)(e)):function(t,e){for(var n=0,r=e.length,i=[];n<r;)t(e[n])&&(i[i.length]=e[n]),n+=1;return i}(t,e);var n})),m=n(11);class v{constructor(t){this.value=t,this.children=[],this.parent=null}setParentNode(t){this.parent=t}getParentNode(){return this.parent}addChild(t){t.setParentNode(this),this.children[this.children.length]=t}getChildren(){return this.children}removeChildren(){this.children=[]}clone(){let t=new v(this.value);return t.setParentNode(this.parent?this.parent:null),Object(m.a)(e=>t.addChild(e),this.children),t}}const g=t=>({name:t.name,latest_commit_text:t.latest_commit_text,latest_commit_time:t.latest_commit_time,is_directory:t.is_directory,id:t.id}),_=t=>{let e=[];return Object(m.a)(t=>{t.is_directory&&(t.contents=[],e.push(t))},t),Object(m.a)(e=>{e.contents=(e=>b(t=>t.parent_id===e,t))(e.id)},e),Object(m.a)(t=>{0!==t.parent_id||t.is_directory||e.push(t)},t),e},j=(t,e)=>{if(t.is_directory){let n=new v(g(t));Object(m.a)(t=>{j(t,n)},t.contents),e.addChild(n)}else e.addChild(new v(g(t)))};class O{constructor(t,e){this.tree=t,this.current=this.tree,this.container=e,this.renderCurrent(),this.initHandles(),console.log(this.tree)}renderCurrent(){this.container.innerHTML="",Object(m.a)(t=>{this.container.appendChild(c(t.value))},this.current.children)}setCurrentById(t){this.current=b(e=>e.value.id===t,this.current.children)[0].clone()}getById(t){return b(e=>e.value.id===t,this.current.children)[0].clone()}goToDirectory(t){this.setCurrentById(t),this.renderCurrent(),this.container.insertBefore(s(),this.container.firstChild),document.addEventListener("click",t=>{t.target.matches(".File--previous, .File--previous *")&&this.goToParentDirectory()}),console.log(this.getCurrentPath())}goToParentDirectory(){console.log(this.current.parent),this.current=this.current.parent.clone(),this.renderCurrent()}getCurrentPath(){let t="",e=this.current.clone();for(;null!==e.parent;)t+=`/${e.value.name}`,e=e.parent.clone();return t}initHandles(){document.addEventListener("click",t=>{let e;if((t.target.matches(".File__filename")||t.target.parentNode.matches(".File__filename"))&!t.target.matches(".File--previous, .File--previous *")){t.target.matches(".File__filename")?e=t.target.parentNode:t.target.parentNode.matches(".File__filename")&&(e=t.target.parentNode.parentNode);const n=parseInt(e.getAttribute("_id"));this.getById(n).value.is_directory&&this.goToDirectory(n)}})}}var w=n(9);(async()=>{const t=await(await fetch("http://127.0.0.1:5000/repositories/7")).json();Object(w.a)(t,document.querySelector(".Repository__description")),Object(w.b)(t,document.querySelector(".Repository-title"));new O((t=>{let e=new v("");return Object(m.a)(t=>{j(t,e)},t),e})(_(t.files)),document.querySelector(".Repository__files"))})()}]);