/*! For license information please see rml_shortcode.pro.js.LICENSE.txt */
var rml_shortcode;(()=>{var t={8039:(t,r,e)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=a(e(4716)),o=a(e(8519)),i=function(t){if(t&&t.__esModule)return t;var r={};if(null!=t)for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(r[e]=t[e]);return r.default=t,r}(e(1594)),s=a(e(49)),u=a(e(8133));function a(t){return t&&t.__esModule?t:{default:t}}r.default=function(t){var r=t.type,e=t.className,a=void 0===e?"":e,l=t.spin,c=(0,s.default)((0,o.default)({anticon:!0,"anticon-spin":!!l||"loading"===r},"anticon-"+r,!0),a);return i.createElement("i",(0,n.default)({},(0,u.default)(t,["type","spin"]),{className:c}))},t.exports=r.default},2444:(t,r,e)=>{t.exports={default:e(3644),__esModule:!0}},734:(t,r,e)=>{t.exports={default:e(5806),__esModule:!0}},8519:(t,r,e)=>{"use strict";r.__esModule=!0;var n,o=(n=e(734))&&n.__esModule?n:{default:n};r.default=function(t,r,e){return r in t?(0,o.default)(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}},4716:(t,r,e)=>{"use strict";r.__esModule=!0;var n,o=(n=e(2444))&&n.__esModule?n:{default:n};r.default=o.default||function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t}},49:(t,r)=>{var e;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],r=0;r<arguments.length;r++){var e=arguments[r];if(e){var i=typeof e;if("string"===i||"number"===i)t.push(e);else if(Array.isArray(e)&&e.length){var s=o.apply(null,e);s&&t.push(s)}else if("object"===i)for(var u in e)n.call(e,u)&&e[u]&&t.push(u)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(e=function(){return o}.apply(r,[]))||(t.exports=e)}()},3644:(t,r,e)=>{e(1268),t.exports=e(5948).Object.assign},5806:(t,r,e)=>{e(294);var n=e(5948).Object;t.exports=function(t,r,e){return n.defineProperty(t,r,e)}},8401:t=>{t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},6718:(t,r,e)=>{var n=e(8603);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},4742:(t,r,e)=>{var n=e(4739),o=e(4151),i=e(9215);t.exports=function(t){return function(r,e,s){var u,a=n(r),l=o(a.length),c=i(s,l);if(t&&e!=e){for(;l>c;)if((u=a[c++])!=u)return!0}else for(;l>c;c++)if((t||c in a)&&a[c]===e)return t||c||0;return!t&&-1}}},8075:t=>{var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},5948:t=>{var r=t.exports={version:"2.6.12"};"number"==typeof __e&&(__e=r)},254:(t,r,e)=>{var n=e(8401);t.exports=function(t,r,e){if(n(t),void 0===r)return t;switch(e){case 1:return function(e){return t.call(r,e)};case 2:return function(e,n){return t.call(r,e,n)};case 3:return function(e,n,o){return t.call(r,e,n,o)}}return function(){return t.apply(r,arguments)}}},8438:t=>{t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},3465:(t,r,e)=>{t.exports=!e(6014)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},4288:(t,r,e)=>{var n=e(8603),o=e(6004).document,i=n(o)&&n(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},8430:t=>{t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},4633:(t,r,e)=>{var n=e(6004),o=e(5948),i=e(254),s=e(463),u=e(2847),a="prototype",l=function(t,r,e){var c,p,f,h=t&l.F,y=t&l.G,d=t&l.S,v=t&l.P,m=t&l.B,b=t&l.W,_=y?o:o[r]||(o[r]={}),g=_[a],x=y?n:d?n[r]:(n[r]||{})[a];for(c in y&&(e=r),e)(p=!h&&x&&void 0!==x[c])&&u(_,c)||(f=p?x[c]:e[c],_[c]=y&&"function"!=typeof x[c]?e[c]:m&&p?i(f,n):b&&x[c]==f?function(t){var r=function(r,e,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(r);case 2:return new t(r,e)}return new t(r,e,n)}return t.apply(this,arguments)};return r[a]=t[a],r}(f):v&&"function"==typeof f?i(Function.call,f):f,v&&((_.virtual||(_.virtual={}))[c]=f,t&l.R&&g&&!g[c]&&s(g,c,f)))};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,t.exports=l},6014:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},6004:t=>{var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},2847:t=>{var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}},463:(t,r,e)=>{var n=e(2557),o=e(6694);t.exports=e(3465)?function(t,r,e){return n.f(t,r,o(1,e))}:function(t,r,e){return t[r]=e,t}},5746:(t,r,e)=>{t.exports=!e(3465)&&!e(6014)((function(){return 7!=Object.defineProperty(e(4288)("div"),"a",{get:function(){return 7}}).a}))},511:(t,r,e)=>{var n=e(8075);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},8603:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},4448:t=>{t.exports=!0},8524:(t,r,e)=>{"use strict";var n=e(3465),o=e(3189),i=e(8062),s=e(595),u=e(8968),a=e(511),l=Object.assign;t.exports=!l||e(6014)((function(){var t={},r={},e=Symbol(),n="abcdefghijklmnopqrst";return t[e]=7,n.split("").forEach((function(t){r[t]=t})),7!=l({},t)[e]||Object.keys(l({},r)).join("")!=n}))?function(t,r){for(var e=u(t),l=arguments.length,c=1,p=i.f,f=s.f;l>c;)for(var h,y=a(arguments[c++]),d=p?o(y).concat(p(y)):o(y),v=d.length,m=0;v>m;)h=d[m++],n&&!f.call(y,h)||(e[h]=y[h]);return e}:l},2557:(t,r,e)=>{var n=e(6718),o=e(5746),i=e(8814),s=Object.defineProperty;r.f=e(3465)?Object.defineProperty:function(t,r,e){if(n(t),r=i(r,!0),n(e),o)try{return s(t,r,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[r]=e.value),t}},8062:(t,r)=>{r.f=Object.getOwnPropertySymbols},6799:(t,r,e)=>{var n=e(2847),o=e(4739),i=e(4742)(!1),s=e(284)("IE_PROTO");t.exports=function(t,r){var e,u=o(t),a=0,l=[];for(e in u)e!=s&&n(u,e)&&l.push(e);for(;r.length>a;)n(u,e=r[a++])&&(~i(l,e)||l.push(e));return l}},3189:(t,r,e)=>{var n=e(6799),o=e(8430);t.exports=Object.keys||function(t){return n(t,o)}},595:(t,r)=>{r.f={}.propertyIsEnumerable},6694:t=>{t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},284:(t,r,e)=>{var n=e(1086)("keys"),o=e(8573);t.exports=function(t){return n[t]||(n[t]=o(t))}},1086:(t,r,e)=>{var n=e(5948),o=e(6004),i="__core-js_shared__",s=o[i]||(o[i]={});(t.exports=function(t,r){return s[t]||(s[t]=void 0!==r?r:{})})("versions",[]).push({version:n.version,mode:e(4448)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},9215:(t,r,e)=>{var n=e(2113),o=Math.max,i=Math.min;t.exports=function(t,r){return(t=n(t))<0?o(t+r,0):i(t,r)}},2113:t=>{var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},4739:(t,r,e)=>{var n=e(511),o=e(8438);t.exports=function(t){return n(o(t))}},4151:(t,r,e)=>{var n=e(2113),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},8968:(t,r,e)=>{var n=e(8438);t.exports=function(t){return Object(n(t))}},8814:(t,r,e)=>{var n=e(8603);t.exports=function(t,r){if(!n(t))return t;var e,o;if(r&&"function"==typeof(e=t.toString)&&!n(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!n(o=e.call(t)))return o;if(!r&&"function"==typeof(e=t.toString)&&!n(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},8573:t=>{var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},1268:(t,r,e)=>{var n=e(4633);n(n.S+n.F,"Object",{assign:e(8524)})},294:(t,r,e)=>{var n=e(4633);n(n.S+n.F*!e(3465),"Object",{defineProperty:e(2557).f})},2506:function(t,r,e){"use strict";var n=this&&this.__rest||function(t,r){var e={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&r.indexOf(n)<0&&(e[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)r.indexOf(n[o])<0&&(e[n[o]]=t[n[o]])}return e};r.__esModule=!0;var o=e(1594),i=e(7208);function s(t){return"string"==typeof t||t instanceof String}function u(t){return"object"==typeof t}function a(t){return"function"==typeof t}function l(t,r){for(var e=r.split("."),n=0,o=e.length;n<o;n++){if(!t||!u(t))return;t=t[e[n]]}return t}var c=function(){function t(t,r,e){this.mdFlavor=t,this.inter=r,this.self=e}return t.prototype.M=function(t){if(!t)return null;var r=i.mdMatch(this.mdFlavor,t);if(!r)return t;var e=null;switch(r.tag){case"inter":e=this.inter&&this.inter(r.body);break;case"self":e=this.self&&this.self(r.body);break;case"literals":case"literal":e=r.body;break;default:e=o.createElement(r.tag,{key:r.tag+r.body},this.M(r.body))}return function(t){for(var r=[],e="",n=function(){return e&&(r.push(e),e="")},o=0,i=t;o<i.length;o++){var u=i[o];null!=u&&(s(u)?e+=u:(n(),r.push(u)))}return n(),r.length>1?r:r.length?r[0]:null}([this.M(r.head),e,this.M(r.tail)])},t}();function p(t,r,e,n){var o,i=e[r];return null!=i&&null!=n[i]&&null==(o=l(t,n[i].toString()))&&+n[i]===n[i]&&(o=function(t,r){for(var e in t)if(t.hasOwnProperty(e)){var n=e.match(/^(-?\d+)\.\.(-?\d+)$/);if(n&&+n[1]<=r&&r<=+n[2])return t[e]}}(t,+n[i])),null==o&&(o=t._),null==o&&(o=function(t){for(var r in t)if("__"!=r)return t[r]}(t)),null==o||s(o)?o:p(o,r+1,e,n)}var f=function(){function t(t,r){this.texts=t,this.MDFlavor=0,this.notFound=void 0,this.p=this.factory("p"),this.span=this.factory("span"),this.li=this.factory("li"),this.div=this.factory("div"),this.button=this.factory("button"),this.a=this.factory("a"),this.text=this.factory(null),this.setOpts(r)}return t.prototype.setTexts=function(t,r){this.texts=t,this.setOpts(r)},t.prototype.setOpts=function(t){t&&(void 0!==t.notFound&&(this.notFound=t.notFound),void 0!==t.MDFlavor&&(this.MDFlavor=t.MDFlavor))},t.prototype.interpolate=function(t,r){var e=t.split(","),n=e[0],i=e[1],s=l(r,n);return null==s?null:o.isValidElement(s)?o.cloneElement(s,{key:"r"}):i&&i.match(/l/)?s.toLocaleString():s.toString()},t.prototype.format=function(t,r){var e=this;return t?new c(i.mdFlavors[this.MDFlavor],(function(t){return e.interpolate(t,r)}),(function(t){return e.translate(t,r)})).M(t):t},t.prototype.translate=function(t,r){if(!t)return t;var e=l(this.texts,t),n=r&&r.context;return null==e||s(e)||a(e)||(e=function(t,r){if(null==r)return p(t,0,[],null);if(u(r)){var e=[];if(t.__)e=t.__.split(".");else for(var n in r)r.hasOwnProperty(n)&&e.push(n);return p(t,0,e,r)}return p(t,0,["_"],{_:r})}(e,n)),null==e&&(e=r&&void 0!==r.notFound?r.notFound:void 0!==this.notFound?this.notFound:t),a(e)&&(e=e(t,n)),this.format(e,r)},t.prototype.factory=function(t){var r=this;return function(e){var i,u,a=e.text,l=e.tag,c=n(e,["text","tag"]);null==a||s(a)?(i=a,u=e,c.notFound,c.context,c=n(c,["notFound","context"])):(i=a.key,u=a);var p=t||l,f=r.translate(i,u);return p?o.createElement(p,c,f):f}},t}();r.MDText=f;var h=new f(null);r.default=h},7208:(t,r)=>{"use strict";r.__esModule=!0;var e={"`` ":[/^(.*?(?:(?!`).|^))(``+)\s(.*?)\s\2(?!`)(.*)$/,[1,3,4]],"``":[/^(.*?(?:(?!`).|^))(``+)(?!`)(.*?(?!`).)\2(?!`)(.*)$/,[1,3,4]],"*":/^(|.*?\W)\*(\S.*?)\*(|\W.*)$/,"**":/^(|.*?\W)\*\*(\S.*?)\*\*(|\W.*)$/,_:/^(|.*?\W)_(\S.*?)_(|\W.*)$/,__:/^(|.*?\W)__(\S.*?)__(|\W.*)$/,"~":/^(|.*?\W)~(\S.*?)~(|\W.*)$/,"~~":/^(|.*?\W)~~(\S.*?)~~(|\W.*)$/,"[]":/^(.*?)\[(.*?)\](.*)$/,"#":/^(|.*?(?=\n))\n*\s*#([^#].*?)#*\s*\n+([\S\s]*)$/,"##":/^(|.*?(?=\n))\n*\s*##([^#].*?)#*\s*\n+([\S\s]*)$/,"###":/^(|.*?(?=\n))\n*\s*###([^#].*?)#*\s*\n+([\S\s]*)$/,"####":/^(|.*?(?=\n))\n*\s*####([^#].*?)#*\s*\n+([\S\s]*)$/,"\n":/^(.*?)[^\S\n]*\n()[^\S\n]*([\s\S]*)$/,"{{}}":/^(.*?)\{\{(.*?)\}\}(.*)$/,"{}":/^(.*?)\{(.*?)\}(.*)$/};r.mdFlavors=[{maybe:/[\*_\{\[\n]/,tags:{strong:e["*"],em:e._,p:e["[]"],h1:e["#"],h2:e["##"],h3:e["###"],h4:e["####"],br:e["\n"],self:e["{{}}"],inter:e["{}"]}},{maybe:/[`\*_~\{\[\n]/,tags:{literals:e["`` "],literal:e["``"],strong:e["**"],em:e["*"],b:e.__,i:e._,strike:e["~~"],u:e["~"],p:e["[]"],h1:e["#"],h2:e["##"],h3:e["###"],h4:e["####"],br:e["\n"],self:e["{{}}"],inter:e["{}"]}}],r.mdMatch=function(t,r){if(!r.match(t.maybe))return null;var e=t.tags,n=null;for(var o in e)if(e.hasOwnProperty(o)){var i=e[o],s=i instanceof RegExp?[i,[1,2,3]]:i,u=s[0],a=s[1],l=u.exec(r);l&&(null==n||l[a[0]].length<n.head.length)&&(n={tag:o,head:l[a[0]],body:l[a[1]],tail:l[a[2]]})}return n}},8319:function(t,r){var e,n;e=function(t){"use strict";var r=/^(?:([^:\/?#]+):\/\/)?((?:([^\/?#@]*)@)?([^\/?#:]*)(?:\:(\d*))?)?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n)*))?/i;function e(t){return"string"==typeof t}function n(t){try{return decodeURIComponent(t)}catch(r){return unescape(t)}}function o(t){var r={};if("string"==typeof t)return t.split("&").forEach((function(t){t=t.split("="),r.hasOwnProperty(t[0])?(r[t[0]]=Array.isArray(r[t[0]])?r[t[0]]:[r[t[0]]],r[t[0]].push(t[1])):r[t[0]]=t[1]})),r}function i(t){return function(r){return r?(this.parts[t]=e(r)?n(r):r,this):(this.parts=this.parse(this.build()),this.parts[t])}}function s(t){this.uri=t||null,e(t)&&t.length?this.parts=this.parse(t):this.parts={}}function u(t){return new s(t)}return s.prototype.parse=function(t){var e=n(t||"").match(r),i=(e[3]||"").split(":"),s=i.length?(e[2]||"").replace(/(.*\@)/,""):e[2];return{uri:e[0],protocol:e[1],host:s,hostname:e[4],port:e[5],auth:e[3],user:i[0],password:i[1],path:e[6],search:e[7],query:o(e[7]),hash:e[8]}},s.prototype.protocol=function(t){return i("protocol").call(this,t)},s.prototype.host=function(t){return i("host").call(this,t)},s.prototype.hostname=function(t){return i("hostname").call(this,t)},s.prototype.port=function(t){return i("port").call(this,t)},s.prototype.auth=function(t){return i("host").call(this,t)},s.prototype.user=function(t){return i("user").call(this,t)},s.prototype.password=function(t){return i("password").call(this,t)},s.prototype.path=function(t){return i("path").call(this,t)},s.prototype.search=function(t){return i("search").call(this,t)},s.prototype.query=function(t){return t&&"object"==typeof t?i("query").call(this,t):this.parts.query},s.prototype.hash=function(t){return i("hash").call(this,t)},s.prototype.get=function(t){return this.parts[t]||""},s.prototype.build=s.prototype.toString=s.prototype.valueOf=function(){var t=this.parts,r=[];return t.protocol&&r.push(t.protocol+"://"),t.auth?r.push(t.auth+"@"):t.user&&r.push(t.user+(t.password?":"+t.password:"")+"@"),t.host?r.push(t.host):(t.hostname&&r.push(t.hostname),t.port&&r.push(":"+t.port)),t.path&&r.push(t.path),t.query&&"object"==typeof t.query?(t.path||r.push("/"),r.push("?"+Object.keys(t.query).map((function(r){return Array.isArray(t.query[r])?t.query[r].map((function(t){return r+(t?"="+t:"")})).join("&"):r+(null!=t.query[r]?"="+t.query[r]:"")})).join("&"))):t.search&&r.push("?"+t.search),t.hash&&(t.path||r.push("/"),r.push("#"+t.hash)),this.url=r.filter((function(t){return e(t)})).join("")},u.VERSION="0.2.2",u.is=u.isURL=function(t){return"string"==typeof t&&r.test(t)},u.URI=s,t.uri=u},void 0===(n=e.apply(r,[r]))||(t.exports=n)},8133:(t,r,e)=>{"use strict";e.r(r),e.d(r,{default:()=>o});var n=e(4716);const o=function(t,r){for(var e=(0,n.default)({},t),o=0;o<r.length;o++)delete e[r[o]];return e}},5820:(t,r,e)=>{"use strict";var n=e(1594),o=Symbol.for("react.element"),i=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};r.jsx=function(t,r,e){var n,a={},l=null,c=null;for(n in void 0!==e&&(l=""+e),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(c=r.ref),r)i.call(r,n)&&!u.hasOwnProperty(n)&&(a[n]=r[n]);if(t&&t.defaultProps)for(n in r=t.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:o,type:t,key:l,ref:c,props:a,_owner:s.current}}},1568:(t,r,e)=>{"use strict";t.exports=e(5820)},1594:t=>{"use strict";t.exports=React}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return t[n].call(i.exports,i,i.exports,e),i.exports}e.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},e.d=(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},e.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),e.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};(()=>{"use strict";e.r(n);const t=tinymce;var r=e.n(t);const o=rmlOpts;var i=e.n(o);e(1568);e(1594);const s=jQuery;var u=e.n(s);const a={},l={register:(t,r)=>(t.split(" ").forEach((t=>{a[t]=a[t]||[],a[t].push(r)})),l),deregister(t,r){let e;return a[t]&&a[t].forEach((t=>{e=t.indexOf(r),e>-1&&t.splice(e,1)})),l},call:(t,r,e)=>(a[t]&&(r?"[object Array]"===Object.prototype.toString.call(r)?r.push(u()):r=[r,u()]:r=[u()],a[t].forEach((t=>!1!==t.apply(e,r)))),l),exists:t=>!!a[t]},c=l;var p=e(8039),f=e.n(p);e(2506),e(8319);const h=devowlWp_utils,{urlBuilder:y,request:d}=(u()("link#dark_mode-css").length,f(),f(),(0,h.createRequestFactory)({restNamespace:"realmedialibrary/v1",restNonce:i().restNonce,restQuery:i().restQuery,restRoot:i().restRoot})),v="folder-gallery";function m(t){let{data:r}=t;if(!r)return;const{fid:e,link:n,columns:o,orderby:i,size:s}=r;if(e>-1){let t=`[${v} fid="${e}"`;n&&"post"!==n&&(t+=` link="${n}"`),o&&3!=+o&&(t+=` columns="${o}"`),t+=!0===i?' orderby="rand"':' orderby="rml"',s&&"thumbnail"!==s&&(t+=` size="${s}"`);let u={shortcode:t};c.call("shortcode/dialog/insert",[u,r],this),u.shortcode+="]",this.insertContent(u.shortcode)}}r().PluginManager.add(v,(function(t){t.addCommand("folder_gallery_popup",(async(r,e)=>{t.setProgressState(!0);const{slugs:{names:n,slugs:o,types:s}}=await d({location:{path:"/tree"}});n.shift(),o.shift(),s.shift();const u=o.map(((t,r)=>({text:n[r],value:t,disabled:[1].indexOf(s[r])>-1})));t.setProgressState(!1);const{fid:a="",link:l="",columns:p="3",orderby:f="",size:h=""}=e||{},y=[1,2,3,4,5,6,7,8,9].map((t=>({text:`${t}`,value:`${t}`}))),{mce:v}=i().others;let b={title:v.mceButtonTooltip,onsubmit:m.bind(t),body:[{type:"listbox",name:"fid",label:v.mceBodyGallery,value:a,values:u,tooltip:v.mceListBoxDirsTooltip},{type:"listbox",name:"link",label:v.mceBodyLinkTo,value:l,values:v.mceBodyLinkToValues},{type:"listbox",name:"columns",label:v.mceBodyColumns,value:p,values:y},{type:"checkbox",name:"orderby",label:v.mceBodyRandomOrder,value:f},{type:"listbox",name:"size",label:v.mceBodySize,value:h,values:v.mceBodySizeValues}]};c.call("shortcode/dialog/open",[b,t]),t.windowManager.open(b)})),i()&&t.addButton(v,{icon:" rmlicon-gallery",tooltip:i().others.mce.mceButtonTooltip,cmd:"folder_gallery_popup"})}))})(),rml_shortcode=n})();
//# sourceMappingURL=https://sourcemap.devowl.io/real-media-library/4.22.20/aee1457c3e62179f315aa19d9f93582f/rml_shortcode.pro.js.map
