(function(e){function t(t){for(var r,a,c=t[0],l=t[1],i=t[2],f=0,d=[];f<c.length;f++)a=c[f],o[a]&&d.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);s&&s(t);while(d.length)d.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function c(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-2d0e145d":"36217316","chunk-2d0e4f96":"cf41cf6e","chunk-2d21d853":"d0fa87ea","chunk-2d0c22aa":"49193090","chunk-1a30f7f0":"15d0462f","chunk-3d75e0ca":"8396947a","chunk-66e16d51":"056fd8f5","chunk-d2abd3ec":"acd379d8","chunk-e7d542fa":"092b3154"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-1a30f7f0":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0e145d":"31d6cfe0","chunk-2d0e4f96":"31d6cfe0","chunk-2d21d853":"31d6cfe0","chunk-2d0c22aa":"31d6cfe0","chunk-1a30f7f0":"8028ac6a","chunk-3d75e0ca":"31d6cfe0","chunk-66e16d51":"31d6cfe0","chunk-d2abd3ec":"31d6cfe0","chunk-e7d542fa":"31d6cfe0"}[e]+".css",o=l.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var i=u[c],f=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(f===r||f===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){i=d[c],f=i.getAttribute("data-href");if(f===r||f===o)return t()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=t,s.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],s.parentNode.removeChild(s),n(u)},s.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(s)}).then(function(){a[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=u);var i,f=document.createElement("script");f.charset="utf-8",f.timeout=120,l.nc&&f.setAttribute("nonce",l.nc),f.src=c(e),i=function(t){f.onerror=f.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");u.type=r,u.request=a,n[1](u)}o[e]=void 0}};var d=setTimeout(function(){i({type:"timeout",target:f})},12e4);f.onerror=f.onload=i,document.head.appendChild(f)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/CinthiaKatiane.github.io/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var s=f;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2fa8":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=n("ce5b"),o=n.n(a);n("bf40");r["default"].use(o.a,{theme:{primary:"#D3C3BC",secondary:"#BFADA5",accent:"#D8EBF1",info:"#5B5C79"},iconfont:"fa"});var u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-btn",{attrs:{color:"secondary",rounded:""}},[e._t("default")],2)},c=[],l=n("2877"),i={},f=Object(l["a"])(i,u,c,!1,null,null,null),d=f.exports,s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.tag,{tag:"component",staticClass:"display-3 v-heading mb-3 font-weight-light"},[e._t("default")],2)},p=[],h={props:{tag:{type:String,default:"h1"}}},g=h,m=(n("fe7b"),Object(l["a"])(g,s,p,!1,null,null,null)),b=m.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.tag,{tag:"component",staticClass:"display-1 v-heading mb-3 font-weight-light"},[e._t("default")],2)},y=[],k={props:{tag:{type:String,default:"h1"}}},w=k,_=Object(l["a"])(w,v,y,!1,null,null,null),x=_.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"title font-weight-light",staticStyle:{"line-height":"1.7 !important"}},[e._t("default")],2)},j=[],O={},B=Object(l["a"])(O,C,j,!1,null,null,null),E=B.exports,S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-img",{staticClass:"grow hidden-sm-and-down",attrs:{contain:"","max-height":"200",width:"100%",position:"top right",src:n("94e0")}})},T=[],P={},A=Object(l["a"])(P,S,T,!1,null,null,null),$=A.exports,D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-img",{staticClass:"grow hidden-sm-and-down",attrs:{contain:"","max-height":"200",width:"100%",position:"bottom left",src:n("9af2")}})},N=[],F={},L=Object(l["a"])(F,D,N,!1,null,null,null),M=L.exports;r["default"].component("BaseBtn",d),r["default"].component("BaseHeading",b),r["default"].component("BaseSubheading",x),r["default"].component("BaseText",E),r["default"].component("BaseBubble1",$),r["default"].component("BaseBubble2",M);var q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("core-toolbar"),n("core-view"),n("core-footer")],1)},H=[],J={components:{CoreFooter:function(){return n.e("chunk-2d0e145d").then(n.bind(null,"7a74"))},CoreToolbar:function(){return n.e("chunk-2d21d853").then(n.bind(null,"d23b"))},CoreView:function(){return n.e("chunk-2d0e4f96").then(n.bind(null,"9306"))}}},K=J,I=Object(l["a"])(K,q,H,!1,null,null,null),U=I.exports,V=n("2f62");r["default"].use(V["a"]);var z=new V["a"].Store({state:{},mutations:{},actions:{}});r["default"].config.productionTip=!1,new r["default"]({store:z,render:function(e){return e(U)}}).$mount("#app")},"94e0":function(e,t,n){e.exports=n.p+"img/bubbles1.3c57343c.png"},"9af2":function(e,t,n){e.exports=n.p+"img/bubbles2.30136c7d.png"},fe7b:function(e,t,n){"use strict";var r=n("2fa8"),a=n.n(r);a.a}});
//# sourceMappingURL=app.b0fc0057.js.map