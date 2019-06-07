!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){let r=n(1);new class{constructor(e){this.current_market_waits=!0,this.waitForMarket=.1,this.marketTime=.05,this.container=e,this.render(),this.timer=null,this.timerSound=new Audio("beep-01a.mp3"),this.initHandlers()}render(){this.container.innerHTML='\n        <div class="Timer">\n            <span class="Timer__time"> Waiting for you to click</span>\n            <button class="Timer__start">Wait for market</button>\n        </div>'}setTime(e){this.container.getElementsByClassName("Timer__time")[0].innerHTML=e.toString()}setCurrentTime(){this.setTime(this.timer.getTimeValues())}startTimer(e){this.timer=new r.Timer,this.timer.start({countdown:!0,startValues:{seconds:60*e}}),this.setCurrentTime(),this.timer.addEventListener("secondsUpdated",this.setCurrentTime.bind(this)),this.timer.addEventListener("targetAchieved",e=>{this.timerSound.play.bind(this.timerSound),this.current_market_waits?(this.setTime("Bidding Time!!!"),this.container.getElementsByClassName("Timer__start")[0].innerHTML="Start market bidding"):(this.setTime("You have to wait until market opens"),this.container.getElementsByClassName("Timer__start")[0].innerHTML="Wait for market"),this.current_market_waits=!this.current_market_waits})}stopTimer(){this.timerSound.play(),this.setTime("00:00:00")}initHandlers(){this.container.addEventListener("click",e=>{e.target.matches(".Stock_price__reload")&&console.log("reloading...")})}}(document.body)},function(e,t,n){!function(t){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t,n){var r,i="";if(e.length>t)return e;for(r=0;r<t;r+=1)i+=String(n);return(i+e).slice(-i.length)}function o(){this.secondTenths=0,this.seconds=0,this.minutes=0,this.hours=0,this.days=0,this.toString=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["hours","minutes","seconds"],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:":",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;e=e||["hours","minutes","seconds"],t=t||":",n=n||2;var r,o=[];for(r=0;r<e.length;r+=1)void 0!==this[e[r]]&&("secondTenths"===e[r]?o.push(this[e[r]]):o.push(i(this[e[r]],n,"0")));return o.join(t)}}var s="undefined"!=typeof window?window.CustomEvent:void 0;"undefined"!=typeof window&&"function"!=typeof s&&((s=function(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}).prototype=window.Event.prototype,window.CustomEvent=s);var u=10,a=60,c=60,f=24,l=0,d=1,h=2,p=3,v=4,m="secondTenths",y="seconds",g="minutes",b="hours",w="days",_=[m,y,g,b,w],T={secondTenths:100,seconds:1e3,minutes:6e4,hours:36e5,days:864e5},L={secondTenths:u,seconds:a,minutes:c,hours:f},E=e.exports?n(2):void 0;function O(){return"undefined"!=typeof document}function j(){return E}function C(e,t){return(e%t+t)%t}function x(){var e,t,n,i,s,x,S,M,k,P,A=new o,R=new o,F=O()?document.createElement("span"):j()?new E.EventEmitter:void 0,N=!1,U=!1,V={},H={detail:{timer:this}};function B(e,t){var n=R[t];return function(e,t){R[e]=t,A[e]=e===w?t:t>=0?C(t,L[e]):L[e]-C(t,L[e])}(t,Q(e,T[t])),R[t]!==n}function D(){I(),function(){for(var e in A)A.hasOwnProperty(e)&&"number"==typeof A[e]&&(A[e]=0);for(var t in R)R.hasOwnProperty(t)&&"number"==typeof R[t]&&(R[t]=0)}()}function I(){clearInterval(e),e=void 0,N=!1,U=!1}function W(o){var u;ie()?(k=K(),x=X(s.target)):function(e){var o;t=function(e){if(t=e="string"==typeof e?e:y,!(_.indexOf(t)>=0))throw new Error("Error in precision parameter: ".concat(e," is not a valid value"));var t;return e}((e=e||{}).precision),i="function"==typeof e.callback?e.callback:function(){},M=!0===e.countdown,n=!0===M?-1:1,"object"===r(e.startValues)?(o=e.startValues,S=J(o),A.secondTenths=S[l],A.seconds=S[d],A.minutes=S[h],A.hours=S[p],A.days=S[v],R=Z(S,R)):S=null,k=K(),Y(),"object"===r(e.target)?x=X(e.target):M?(e.target={seconds:0},x=X(e.target)):x=null,V={precision:t,callback:i,countdown:"object"===r(e)&&!0===e.countdown,target:x,startValues:S},s=e}(o),u=T[t],G(q(Date.now()))||(e=setInterval(z,u),N=!0,U=!1)}function K(){return q(Date.now())-R.secondTenths*T[m]*n}function z(){var e=q(Date.now()),t=Y();!function(e){e[m]&&ne("secondTenthsUpdated",H),e[y]&&ne("secondsUpdated",H),e[g]&&ne("minutesUpdated",H),e[b]&&ne("hoursUpdated",H),e[w]&&ne("daysUpdated",H)}(t),i(H.detail.timer),G(e)&&($(),ne("targetAchieved",H))}function Y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q(Date.now()),t=n>0?e-k:k-e,r={};return r[m]=B(t,m),r[y]=function(e){return B(e,y)}(t),r[g]=function(e){return B(e,g)}(t),r[b]=function(e){return B(e,b)}(t),r[w]=function(e){return B(e,w)}(t),r}function q(e){return Math.floor(e/T[t])*T[t]}function G(e){return x instanceof Array&&e>=P}function J(e){var t,n,i,o,s,m;if("object"===r(e))if(e instanceof Array){if(5!==e.length)throw new Error("Array size not valid");m=e}else{for(var y in e)if(_.indexOf(y)<0)throw new Error("Error in startValues or target parameter: ".concat(y," is not a valid input value"));m=[e.secondTenths||0,e.seconds||0,e.minutes||0,e.hours||0,e.days||0]}return t=m[l],n=m[d]+Q(t,u),i=m[h]+Q(n,a),o=m[p]+Q(i,c),s=m[v]+Q(o,f),m[l]=t%u,m[d]=n%a,m[h]=i%c,m[p]=o%f,m[v]=s,m}function Q(e,t){var n=e/t;return n<0?Math.ceil(n):Math.floor(n)}function X(e){if(e){var t=Z(x=J(e));return P=k+t.secondTenths*T[m]*n,x}}function Z(e,t){var n=t||{};return n.days=e[v],n.hours=n.days*f+e[p],n.minutes=n.hours*c+e[h],n.seconds=n.minutes*a+e[d],n.secondTenths=n.seconds*u+e[[l]],n}function $(){D(),ne("stopped",H)}function ee(e,t){O()?F.addEventListener(e,t):j()&&F.on(e,t)}function te(e,t){O()?F.removeEventListener(e,t):j()&&F.removeListener(e,t)}function ne(e,t){O()?F.dispatchEvent(new CustomEvent(e,t)):j()&&F.emit(e,t)}function re(){return N}function ie(){return U}void 0!==this&&(this.start=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};re()||(W(e),ne("started",H))},this.pause=function(){I(),U=!0,ne("paused",H)},this.stop=$,this.reset=function(){D(),W(s),ne("reset",H)},this.isRunning=re,this.isPaused=ie,this.getTimeValues=function(){return A},this.getTotalTimeValues=function(){return R},this.getConfig=function(){return V},this.addEventListener=ee,this.on=ee,this.removeEventListener=te,this.off=te)}t.default=x,t.Timer=x,Object.defineProperty(t,"__esModule",{value:!0})}(t)},function(e,t,n){"use strict";var r,i="object"==typeof Reflect?Reflect:null,o=i&&"function"==typeof i.apply?i.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};r=i&&"function"==typeof i.ownKeys?i.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var s=Number.isNaN||function(e){return e!=e};function u(){u.init.call(this)}e.exports=u,u.EventEmitter=u,u.prototype._events=void 0,u.prototype._eventsCount=0,u.prototype._maxListeners=void 0;var a=10;function c(e){return void 0===e._maxListeners?u.defaultMaxListeners:e._maxListeners}function f(e,t,n,r){var i,o,s,u;if("function"!=typeof n)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof n);if(void 0===(o=e._events)?(o=e._events=Object.create(null),e._eventsCount=0):(void 0!==o.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),o=e._events),s=o[t]),void 0===s)s=o[t]=n,++e._eventsCount;else if("function"==typeof s?s=o[t]=r?[n,s]:[s,n]:r?s.unshift(n):s.push(n),(i=c(e))>0&&s.length>i&&!s.warned){s.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=e,a.type=t,a.count=s.length,u=a,console&&console.warn&&console.warn(u)}return e}function l(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=function(){for(var e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);this.fired||(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,o(this.listener,this.target,e))}.bind(r);return i.listener=n,r.wrapFn=i,i}function d(e,t,n){var r=e._events;if(void 0===r)return[];var i=r[t];return void 0===i?[]:"function"==typeof i?n?[i.listener||i]:[i]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(i):p(i,i.length)}function h(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function p(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}Object.defineProperty(u,"defaultMaxListeners",{enumerable:!0,get:function(){return a},set:function(e){if("number"!=typeof e||e<0||s(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");a=e}}),u.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},u.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||s(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},u.prototype.getMaxListeners=function(){return c(this)},u.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r="error"===e,i=this._events;if(void 0!==i)r=r&&void 0===i.error;else if(!r)return!1;if(r){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var u=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw u.context=s,u}var a=i[e];if(void 0===a)return!1;if("function"==typeof a)o(a,this,t);else{var c=a.length,f=p(a,c);for(n=0;n<c;++n)o(f[n],this,t)}return!0},u.prototype.addListener=function(e,t){return f(this,e,t,!1)},u.prototype.on=u.prototype.addListener,u.prototype.prependListener=function(e,t){return f(this,e,t,!0)},u.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.on(e,l(this,e,t)),this},u.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.prependListener(e,l(this,e,t)),this},u.prototype.removeListener=function(e,t){var n,r,i,o,s;if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);if(void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(i=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){s=n[o].listener,i=o;break}if(i<0)return this;0===i?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,i),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,s||t)}return this},u.prototype.off=u.prototype.removeListener,u.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var i,o=Object.keys(n);for(r=0;r<o.length;++r)"removeListener"!==(i=o[r])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},u.prototype.listeners=function(e){return d(this,e,!0)},u.prototype.rawListeners=function(e){return d(this,e,!1)},u.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):h.call(e,t)},u.prototype.listenerCount=h,u.prototype.eventNames=function(){return this._eventsCount>0?r(this._events):[]}}]);