(function(e){function t(t){for(var r,o,c=t[0],s=t[1],u=t[2],d=0,f=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},i=[];function o(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"a2f5b1a9"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=o(e);var u=new Error;i=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",u.name="ChunkLoadError",u.type=r,u.request=i,n[1](u)}a[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2395:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],o=(n("7c55"),n("2877")),c={},s=Object(o["a"])(c,a,i,!1,null,null,null),u=s.exports,d=(n("d3b7"),n("8c4f")),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{on:{click:function(t){return e.moveToCameraAVG()}}},[""!==e.imginfo?n("img",{attrs:{src:e.imginfo}}):e._e(),n("div",{staticClass:"warm_title2"},[e._v("点击自拍一张头像")])]),n("video",{staticClass:"pic_video",staticStyle:{"object-fit":"fill"},attrs:{id:"video",playsinline:"",autoplay:"","x5-video-player-type":"h5"}}),n("canvas",{staticClass:"canvas_pic",staticStyle:{margin:"0",padding:"0"},attrs:{id:"canvas"}}),n("div",{staticClass:"bottom_div"},[n("div",[e._v("拍照")]),n("img",{staticClass:"capture-btn",attrs:{src:"images/pic_btn.png"},on:{click:e.captureAvg}})])])},f=[];n("4160"),n("b0c0"),n("3ca3"),n("159b"),n("ddb0"),n("2b3d");n("7631"),n("65b5"),n("1526");var p={name:"login",data:function(){return{trackerTask:null,trackering:null,mediaStreamTrack:null}},mounted:function(){this.getCompetence()},methods:{moveToCameraAVG:function(){var e=this;void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),void 0===navigator.mediaDevices.getUserMedia&&(navigator.mediaDevices.getUserMedia=function(e){var t=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia||navigator.oGetUserMedia;return t?new Promise((function(n,r){t.call(navigator,e,n,r)})):Promise.reject(new Error("getUserMedia is not implemented in this browser"))}),window.stream&&window.stream.getTracks().forEach((function(e){e.stop()}));var t=window.constraints={audio:!1,video:{sourceId:"default",facingMode:{exact:"user"}}};navigator.mediaDevices.getUserMedia(t).then((function(t){var n=document.getElementById("video");try{window.stream=t,n.srcObject=t}catch(r){n.src=window.URL.createObjectURL(t)}e.localMediaStream=t,n.play()})).catch((function(e){alert(e.name+": "+e.message)}))},stopCapture:function(){var e=document.getElementById("video");if(e.srcObject){var t=e.srcObject,n=t.getTracks();n.forEach((function(e){e.stop()}))}},captureAvg:function(){var e=this,t=document.getElementById("video"),n=document.getElementById("canvas"),r=n.getContext("2d"),a=t.clientHeight,i=t.clientWidth;if(n.width=i,n.height=a,e.localMediaStream){r.drawImage(t,0,0,i,a);var o=n.toDataURL("image/jpeg");e.imginfo=o,t.pause(),this.stopCapture()}}}},v=p,m=Object(o["a"])(v,l,f,!1,null,"5b4168c8",null),g=m.exports;r["a"].use(d["a"]);var b=[{path:"/",name:"Home",component:g},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],h=new d["a"]({base:"",routes:b}),w=h;r["a"].config.productionTip=!1,new r["a"]({router:w,render:function(e){return e(u)}}).$mount("#app")},"7c55":function(e,t,n){"use strict";n("2395")}});
//# sourceMappingURL=app.ec6b6914.js.map