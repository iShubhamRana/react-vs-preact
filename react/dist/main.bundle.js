/*! For license information please see main.bundle.js.LICENSE.txt */
(()=>{"use strict";var t,e={540:(t,e,r)=>{var n=r(159),o=r(338);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(){a=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},u="function"==typeof Symbol?Symbol:{},l=u.iterator||"@@iterator",c=u.asyncIterator||"@@asyncIterator",f=u.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var i=e&&e.prototype instanceof g?e:g,a=Object.create(i.prototype),u=new A(n||[]);return o(a,"_invoke",{value:I(t,r,u)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var y="suspendedStart",v="suspendedYield",d="executing",m="completed",b={};function g(){}function w(){}function x(){}var _={};s(_,l,(function(){return this}));var k=Object.getPrototypeOf,E=k&&k(k(C([])));E&&E!==r&&n.call(E,l)&&(_=E);var L=x.prototype=g.prototype=Object.create(_);function O(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(o,a,u,l){var c=p(t[o],t,a);if("throw"!==c.type){var f=c.arg,s=f.value;return s&&"object"==i(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,u,l)}),(function(t){r("throw",t,u,l)})):e.resolve(s).then((function(t){f.value=t,u(f)}),(function(t){return r("throw",t,u,l)}))}l(c.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function I(e,r,n){var o=y;return function(i,a){if(o===d)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var l=P(u,n);if(l){if(l===b)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var c=p(e,r,n);if("normal"===c.type){if(o=n.done?m:v,c.arg===b)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(o=m,n.method="throw",n.arg=c.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var i=p(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,b;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,b):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function C(e){if(e||""===e){var r=e[l];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(i(e)+" is not iterable")}return w.prototype=x,o(L,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:w,configurable:!0}),w.displayName=s(x,f,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,s(t,f,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},O(j.prototype),s(j.prototype,c,(function(){return this})),e.AsyncIterator=j,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new j(h(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(L),s(L,f,"Generator"),s(L,l,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=C,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return u.type="throw",u.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,b):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:C(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),b}},e}function u(t){return function(t){if(Array.isArray(t))return h(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||s(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e,r,n,o,i,a){try{var u=t[i](a),l=u.value}catch(t){return void r(t)}u.done?e(l):Promise.resolve(l).then(n,o)}function c(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){l(i,n,o,a,u,"next",t)}function u(t){l(i,n,o,a,u,"throw",t)}a(void 0)}))}}function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],l=!0,c=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return u}}(t,e)||s(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){if(t){if("string"==typeof t)return h(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(t,e):void 0}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}const p=function(){var t=f((0,n.useState)([]),2),e=t[0],r=t[1],o=f((0,n.useState)(""),2),i=o[0],l=o[1];return(0,n.useEffect)(c(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://restcountries.com/v3.1/all").then((function(t){return t.json()})).then((function(t){for(var e=[],n=0;n<40;n++)e.push.apply(e,u(t));r(e)}));case 3:t.next=7;break;case 5:t.prev=5,t.t0=t.catch(0);case 7:case"end":return t.stop()}}),t,null,[[0,5]])}))),[]),n.createElement("div",null,n.createElement("ul",null,n.createElement("input",{value:i,onChange:function(t){return l(t.target.value)}}),n.createElement("button",{onClick:function(){r([].concat(u(e),[{name:{common:i}}])),l("")}},"Add"),e.map((function(t){return n.createElement("li",null,t.name.common)}))))};var y=document.getElementById("root");(0,o.H)(y).render(n.createElement(p,null))},463:(t,e)=>{function r(t,e){var r=t.length;t.push(e);t:for(;0<r;){var n=r-1>>>1,o=t[n];if(!(0<i(o,e)))break t;t[n]=e,t[r]=o,r=n}}function n(t){return 0===t.length?null:t[0]}function o(t){if(0===t.length)return null;var e=t[0],r=t.pop();if(r!==e){t[0]=r;t:for(var n=0,o=t.length,a=o>>>1;n<a;){var u=2*(n+1)-1,l=t[u],c=u+1,f=t[c];if(0>i(l,r))c<o&&0>i(f,l)?(t[n]=f,t[c]=r,n=c):(t[n]=l,t[u]=r,n=u);else{if(!(c<o&&0>i(f,r)))break t;t[n]=f,t[c]=r,n=c}}}return e}function i(t,e){var r=t.sortIndex-e.sortIndex;return 0!==r?r:t.id-e.id}if("object"==typeof performance&&"function"==typeof performance.now){var a=performance;e.unstable_now=function(){return a.now()}}else{var u=Date,l=u.now();e.unstable_now=function(){return u.now()-l}}var c=[],f=[],s=1,h=null,p=3,y=!1,v=!1,d=!1,m="function"==typeof setTimeout?setTimeout:null,b="function"==typeof clearTimeout?clearTimeout:null,g="undefined"!=typeof setImmediate?setImmediate:null;function w(t){for(var e=n(f);null!==e;){if(null===e.callback)o(f);else{if(!(e.startTime<=t))break;o(f),e.sortIndex=e.expirationTime,r(c,e)}e=n(f)}}function x(t){if(d=!1,w(t),!v)if(null!==n(c))v=!0,C(_);else{var e=n(f);null!==e&&N(x,e.startTime-t)}}function _(t,r){v=!1,d&&(d=!1,b(O),O=-1),y=!0;var i=p;try{for(w(r),h=n(c);null!==h&&(!(h.expirationTime>r)||t&&!P());){var a=h.callback;if("function"==typeof a){h.callback=null,p=h.priorityLevel;var u=a(h.expirationTime<=r);r=e.unstable_now(),"function"==typeof u?h.callback=u:h===n(c)&&o(c),w(r)}else o(c);h=n(c)}if(null!==h)var l=!0;else{var s=n(f);null!==s&&N(x,s.startTime-r),l=!1}return l}finally{h=null,p=i,y=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var k,E=!1,L=null,O=-1,j=5,I=-1;function P(){return!(e.unstable_now()-I<j)}function S(){if(null!==L){var t=e.unstable_now();I=t;var r=!0;try{r=L(!0,t)}finally{r?k():(E=!1,L=null)}}else E=!1}if("function"==typeof g)k=function(){g(S)};else if("undefined"!=typeof MessageChannel){var T=new MessageChannel,A=T.port2;T.port1.onmessage=S,k=function(){A.postMessage(null)}}else k=function(){m(S,0)};function C(t){L=t,E||(E=!0,k())}function N(t,r){O=m((function(){t(e.unstable_now())}),r)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(t){t.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,C(_))},e.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<t?Math.floor(1e3/t):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(t){switch(p){case 1:case 2:case 3:var e=3;break;default:e=p}var r=p;p=e;try{return t()}finally{p=r}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var r=p;p=t;try{return e()}finally{p=r}},e.unstable_scheduleCallback=function(t,o,i){var a=e.unstable_now();switch(i="object"==typeof i&&null!==i&&"number"==typeof(i=i.delay)&&0<i?a+i:a,t){case 1:var u=-1;break;case 2:u=250;break;case 5:u=1073741823;break;case 4:u=1e4;break;default:u=5e3}return t={id:s++,callback:o,priorityLevel:t,startTime:i,expirationTime:u=i+u,sortIndex:-1},i>a?(t.sortIndex=i,r(f,t),null===n(c)&&t===n(f)&&(d?(b(O),O=-1):d=!0,N(x,i-a))):(t.sortIndex=u,r(c,t),v||y||(v=!0,C(_))),t},e.unstable_shouldYield=P,e.unstable_wrapCallback=function(t){var e=p;return function(){var r=p;p=e;try{return t.apply(this,arguments)}finally{p=r}}}},982:(t,e,r)=>{t.exports=r(463)}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={exports:{}};return e[t](i,i.exports,n),i.exports}n.m=e,t=[],n.O=(e,r,o,i)=>{if(!r){var a=1/0;for(f=0;f<t.length;f++){for(var[r,o,i]=t[f],u=!0,l=0;l<r.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((t=>n.O[t](r[l])))?r.splice(l--,1):(u=!1,i<a&&(a=i));if(u){t.splice(f--,1);var c=o();void 0!==c&&(e=c)}}return e}i=i||0;for(var f=t.length;f>0&&t[f-1][2]>i;f--)t[f]=t[f-1];t[f]=[r,o,i]},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={792:0};n.O.j=e=>0===t[e];var e=(e,r)=>{var o,i,[a,u,l]=r,c=0;if(a.some((e=>0!==t[e]))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(l)var f=l(n)}for(e&&e(r);c<a.length;c++)i=a[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(f)},r=self.webpackChunkreact=self.webpackChunkreact||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var o=n.O(void 0,[587,644],(()=>n(540)));o=n.O(o)})();