!function(t){var n={};function r(e){if(n[e])return n[e].exports;var u=n[e]={i:e,l:!1,exports:{}};return t[e].call(u.exports,u,u.exports,r),u.l=!0,u.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var u in t)r.d(e,u,function(n){return t[n]}.bind(null,u));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=18)}([function(t,n,r){"use strict";r.d(n,"a",function(){return u});var e=r(1);function u(t){return function n(r){return 0===arguments.length||Object(e.a)(r)?n:t.apply(this,arguments)}}},function(t,n,r){"use strict";function e(t){return null!=t&&"object"==typeof t&&!0===t["@@functional/placeholder"]}r.d(n,"a",function(){return e})},function(t,n,r){"use strict";r.d(n,"a",function(){return o});var e=r(0),u=r(1);function o(t){return function n(r,o){switch(arguments.length){case 0:return n;case 1:return Object(u.a)(r)?n:Object(e.a)(function(n){return t(r,n)});default:return Object(u.a)(r)&&Object(u.a)(o)?n:Object(u.a)(r)?Object(e.a)(function(n){return t(n,o)}):Object(u.a)(o)?Object(e.a)(function(n){return t(r,n)}):t(r,o)}}}},function(t,n,r){"use strict";function e(t,n){switch(t){case 0:return function(){return n.apply(this,arguments)};case 1:return function(t){return n.apply(this,arguments)};case 2:return function(t,r){return n.apply(this,arguments)};case 3:return function(t,r,e){return n.apply(this,arguments)};case 4:return function(t,r,e,u){return n.apply(this,arguments)};case 5:return function(t,r,e,u,o){return n.apply(this,arguments)};case 6:return function(t,r,e,u,o,c){return n.apply(this,arguments)};case 7:return function(t,r,e,u,o,c,i){return n.apply(this,arguments)};case 8:return function(t,r,e,u,o,c,i,a){return n.apply(this,arguments)};case 9:return function(t,r,e,u,o,c,i,a,s){return n.apply(this,arguments)};case 10:return function(t,r,e,u,o,c,i,a,s,f){return n.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}r.d(n,"a",function(){return e})},function(t,n,r){"use strict";n.a={init:function(){return this.xf["@@transducer/init"]()},result:function(t){return this.xf["@@transducer/result"](t)}}},function(t,n,r){"use strict";n.a=Array.isArray||function(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)}},function(t,n,r){"use strict";var e=r(0),u=r(5);var o=Object(e.a)(function(t){return!!Object(u.a)(t)||!!t&&("object"==typeof t&&(!function(t){return"[object String]"===Object.prototype.toString.call(t)}(t)&&(1===t.nodeType?!!t.length:0===t.length||t.length>0&&(t.hasOwnProperty(0)&&t.hasOwnProperty(t.length-1)))))}),c=function(){function t(t){this.f=t}return t.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},t.prototype["@@transducer/result"]=function(t){return t},t.prototype["@@transducer/step"]=function(t,n){return this.f(t,n)},t}();var i=r(3),a=r(2),s=Object(a.a)(function(t,n){return Object(i.a)(t.length,function(){return t.apply(n,arguments)})});function f(t,n,r){for(var e=r.next();!e.done;){if((n=t["@@transducer/step"](n,e.value))&&n["@@transducer/reduced"]){n=n["@@transducer/value"];break}e=r.next()}return t["@@transducer/result"](n)}function l(t,n,r,e){return t["@@transducer/result"](r[e](s(t["@@transducer/step"],t),n))}r.d(n,"a",function(){return y});var p="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";function y(t,n,r){if("function"==typeof t&&(t=function(t){return new c(t)}(t)),o(r))return function(t,n,r){for(var e=0,u=r.length;e<u;){if((n=t["@@transducer/step"](n,r[e]))&&n["@@transducer/reduced"]){n=n["@@transducer/value"];break}e+=1}return t["@@transducer/result"](n)}(t,n,r);if("function"==typeof r["fantasy-land/reduce"])return l(t,n,r,"fantasy-land/reduce");if(null!=r[p])return f(t,n,r[p]());if("function"==typeof r.next)return f(t,n,r);if("function"==typeof r.reduce)return l(t,n,r,"reduce");throw new TypeError("reduce: list must be array or iterable")}},function(t,n,r){"use strict";var e=r(0);function u(t,n){return Object.prototype.hasOwnProperty.call(n,t)}var o=Object.prototype.toString,c=function(){return"[object Arguments]"===o.call(arguments)?function(t){return"[object Arguments]"===o.call(t)}:function(t){return u("callee",t)}}(),i=!{toString:null}.propertyIsEnumerable("toString"),a=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],s=function(){return arguments.propertyIsEnumerable("length")}(),f=function(t,n){for(var r=0;r<t.length;){if(t[r]===n)return!0;r+=1}return!1},l="function"!=typeof Object.keys||s?Object(e.a)(function(t){if(Object(t)!==t)return[];var n,r,e=[],o=s&&c(t);for(n in t)!u(n,t)||o&&"length"===n||(e[e.length]=n);if(i)for(r=a.length-1;r>=0;)u(n=a[r],t)&&!f(e,n)&&(e[e.length]=n),r-=1;return e}):Object(e.a)(function(t){return Object(t)!==t?[]:Object.keys(t)});n.a=l},function(t,n,r){"use strict";var e=r(5);function u(t,n,r){return function(){if(0===arguments.length)return r();var u=Array.prototype.slice.call(arguments,0),o=u.pop();if(!Object(e.a)(o)){for(var c=0;c<t.length;){if("function"==typeof o[t[c]])return o[t[c]].apply(o,u);c+=1}if(function(t){return null!=t&&"function"==typeof t["@@transducer/step"]}(o))return n.apply(null,u)(o)}return r.apply(this,arguments)}}r.d(n,"a",function(){return u})},function(t,n,r){"use strict";r.d(n,"a",function(){return u}),r.d(n,"b",function(){return o});var e=r(11);const u=(t,n)=>{n.innerHTML+=`<p class="Repository__description-text">\n${t.description}\n          </p><ul class="Repository__tags">\n          </ul>`,n.querySelector(".Repository__tags"),Object(e.a)(t=>{n.querySelector(".Repository__tags").innerHTML+=`<li class="Repository__tag">\n              <a class="Repository__tag-link" href="#">${t}</a>\n            </li>`},t.topics)},o=(t,n)=>{let r=t.full_name.split("/");n.innerHTML+=`<a class="Repository-title__user-link" href="#">\n                  ${r[0]}\n                </a>\n                /\n                <a class="Repository-title__repository-link" href="#">\n                  ${r[1]}\n                </a>`}},,function(t,n,r){"use strict";var e=r(2),u=r(8);var o=r(6),c=r(4),i=function(){function t(t,n){this.xf=n,this.f=t}return t.prototype["@@transducer/init"]=c.a.init,t.prototype["@@transducer/result"]=c.a.result,t.prototype["@@transducer/step"]=function(t,n){return this.xf["@@transducer/step"](t,this.f(n))},t}(),a=Object(e.a)(function(t,n){return new i(t,n)}),s=r(3),f=r(0),l=r(1);var p=Object(e.a)(function(t,n){return 1===t?Object(f.a)(n):Object(s.a)(t,function t(n,r,e){return function(){for(var u=[],o=0,c=n,i=0;i<r.length||o<arguments.length;){var a;i<r.length&&(!Object(l.a)(r[i])||o>=arguments.length)?a=r[i]:(a=arguments[o],o+=1),u[i]=a,Object(l.a)(a)||(c-=1),i+=1}return c<=0?e.apply(this,u):Object(s.a)(c,t(n,u,e))}}(t,[],n))}),y=r(7),b=Object(e.a)(Object(u.a)(["fantasy-land/map","map"],a,function(t,n){switch(Object.prototype.toString.call(n)){case"[object Function]":return p(n.length,function(){return t.call(this,n.apply(this,arguments))});case"[object Object]":return Object(o.a)(function(r,e){return r[e]=t(n[e]),r},{},Object(y.a)(n));default:return function(t,n){for(var r=0,e=n.length,u=Array(e);r<e;)u[r]=t(n[r]),r+=1;return u}(t,n)}}));n.a=b},,,,,,,function(t,n,r){"use strict";r.r(n);var e=r(9);(async()=>{const t=await(await fetch("http://127.0.0.1:5000/repositories/8")).json();console.log(t),Object(e.b)(t,document.querySelector(".Repository-title"))})()}]);