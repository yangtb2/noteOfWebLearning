(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>r}),n=t(645),(n=t.n(n)()((function(e){return e[1]}))).push([e.id,"div {\r\n  height: 50px;\r\n  width: 500px;\r\n}\r\n#loading {\r\n  height: 100%;\r\n  width: 0%;\r\n  background-color: #3e0849;\r\n  text-align: center;\r\n  color: #ffffff;\r\n  line-height: 50px;\r\n  font-size: x-large;\r\n}\r\n",""]);const r=n},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},379:(e,n,t)=>{var r,o,i=(o={},function(e){if(void 0===o[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}o[e]=n}return o[e]}),a=[];function c(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},r=[],o=0;o<e.length;o++){var i=e[o],s=n.base?i[0]+n.base:i[0],u=t[s]||0,d="".concat(s," ").concat(u);t[s]=u+1,u=c(d),i={css:i[1],media:i[2],sourceMap:i[3]},-1!==u?(a[u].references++,a[u].updater(i)):a.push({identifier:d,updater:function(e,n){var t,r,o,i;return o=n.singleton?(i=p++,t=h=h||l(n),r=f.bind(null,t,i,!1),f.bind(null,t,i,!0)):(t=l(n),r=function(e,n,t){var r=t.css,o=t.media;if(t=t.sourceMap,o?e.setAttribute("media",o):e.removeAttribute("media"),t&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(t))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,t,n),function(){!function(e){null!==e.parentNode&&e.parentNode.removeChild(e)}(t)}),r(e),function(n){n?n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap||r(e=n):o()}}(i,n),references:1}),r.push(d)}return r}function l(e){var n,r=document.createElement("style"),o=e.attributes||{};if(void 0!==o.nonce||(n=t.nc)&&(o.nonce=n),Object.keys(o).forEach((function(e){r.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(r);else{if(!(e=i(e.insert||"head")))throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(r)}return r}var u,d=(u=[],function(e,n){return u[e]=n,u.filter(Boolean).join("\n")});function f(e,n,t,r){t=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css,e.styleSheet?e.styleSheet.cssText=d(n,t):(r=document.createTextNode(t),(t=e.childNodes)[n]&&e.removeChild(t[n]),t.length?e.insertBefore(r,t[n]):e.appendChild(r))}var h=null,p=0;e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r=void 0===r?Boolean(window&&document&&document.all&&!window.atob):r);var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=c(t[r]);a[o].references--}e=s(e,n);for(var i=0;i<t.length;i++){var l=c(t[i]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=e}}}}},n={};function t(r){var o=n[r];return void 0!==o||(o=n[r]={id:r,exports:{}},e[r](o,o.exports,t)),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),r=t(426);e={insert:"head",singleton:!1},n()(r.Z,e),r.Z.locals,async function(e,n,t){for(let o=0;o<e.length;o++){await t(e[o]);var r=(o+1)/e.length*100;n.style.width=r+"%",n.innerHTML=Math.round(r)+"%"}}([1,2,3,4,5],loading,(e=>new Promise((n=>{setTimeout((()=>{console.log(e),n()}),500+500*Math.random())}))))})()})();