!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r={OPTED_OUT_COOKIES:"wovn-optedOutCookies",CLICK_PLACES:"wap-click-places",LAST_EVENT:"wap_last_event",USER:"wap_user",WAPID:"WAPID"},o=function(){function t(){this.isDisabled=!1,this.str="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",this.len=35,this.cookieStr="",-1!==document.cookie.indexOf(r.OPTED_OUT_COOKIES)&&this.disable()}return t.prototype.read=function(t){if(!this.isDisabled){var e=new RegExp("(?:^|; )"+encodeURIComponent(t)+"=([^;]*)").exec(document.cookie);return e?decodeURIComponent(e[1]):null}},t.prototype.write=function(t,e,n){if(void 0===n&&(n=7300),!this.isDisabled){var r=new Date;r.setTime(r.getTime()+24*n*60*60*1e3);var o="; expires="+r.toUTCString();document.cookie=t+"="+e+o+"; path=/"}},t.prototype.remove=function(t){this.write(t,"",-1)},t.prototype.generate=function(){for(var t=0;t<this.len;t+=1)this.cookieStr+=this.str[Math.floor(Math.random()*this.str.length)];return this.cookieStr},t.prototype.disable=function(){this.removeAll(),this.write(r.OPTED_OUT_COOKIES,"true"),this.isDisabled=!0},t.prototype.removeAll=function(){for(var t=0,e=Object.keys(r);t<e.length;t++){var n=e[t],o=r[n];o!==r.OPTED_OUT_COOKIES&&this.remove(o)}},t}();e.b=new o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),o=n(6),i=n(0);window.addEventListener("wovn-wap-optOutCookies",function(t){"wovn-wap-optOutCookies"===t.type&&i.b.disable()}),r.a.showWidgetPage();var a=[];window.addEventListener("click",function(t){if(a.push(o.a.getWithDom(t.target)),window.localStorage)try{window.localStorage.setItem(i.a.CLICK_PLACES,a.join("\t"))}catch(t){i.b.write(i.a.CLICK_PLACES,a.join("\t"))}})},function(t,e,n){"use strict";var r=n(3),o=function(){function t(){}return t.prototype.showWidgetPage=function(){var t={event:"showWidgetPage",property:{loadTime:0,projectTokenStatus:!0}};r.a.propertyInfo(t)},t}();e.a=new o},function(t,e,n){"use strict";var r=n(0),o=n(4),i=n(5),a=function(){function t(){this.CLICK_PLACES_KEY=r.a.CLICK_PLACES,this.WAPID=r.a.WAPID}return t.prototype.propertyInfo=function(t){var e=document.title,n=document.referrer,a=window.location.href,c=navigator.language,u=window.innerWidth||document.body.clientWidth,s=window.innerHeight||document.body.clientHeight,p=this.setWapCookie(),f=o.a.getSelectedLang(),l=o.a.getProjectToken(),h=o.a.getInsertType(),d=o.a.getDefaultLang(),v=r.b.read(r.a.USER),g=t.event,w=this.getClickPlaces();this.info={title:e,referer:n,url:a,lang:c,width:u,height:s,id:p,selectedLang:f,projectToken:l,insertType:h,event:g,wapUser:v,defaultLang:d,clickPlace:w};var y;if(t&&t.property)for(y in t.property)this.info[y]=t.property[y];this.info=this.stringify(this.info),r.b.write(r.a.LAST_EVENT,t.event),i.a.post(this.info)},t.prototype.getClickPlaces=function(){var t=null;return window.localStorage&&(t=window.localStorage.getItem(this.CLICK_PLACES_KEY)),t?(window.localStorage.removeItem(this.CLICK_PLACES_KEY),t.split("\t")):(r.b.read(this.CLICK_PLACES_KEY)&&(t=r.b.read(this.CLICK_PLACES_KEY)),t?(r.b.remove(this.CLICK_PLACES_KEY),t.split("\t")):[])},t.prototype.setWapCookie=function(){if(r.b.read(this.WAPID))return r.b.read(this.WAPID);var t=r.b.generate();return r.b.write(this.WAPID,t),t},t.prototype.stringify=function(t){switch(typeof t){case"string":return this.quote(t);case"number":case"boolean":return String(t);case"object":if(!t)return"null";var e=Object.prototype.toString.apply(t);if("[object Array]"===e){for(var n=[],r=0;r<t.length;++r)n[r]=this.stringify(t[r]);return"["+n.join(",")+"]"}if("[object Object]"===e){var n=[];for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var i=t[o];if(void 0===i)continue;n.push(this.quote(o)+":"+this.stringify(i))}return"{"+n.join(",")+"}"}return this.quote(String(t));default:return this.quote(String(t))}},t.prototype.quote=function(t){var e={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"},n=function(t){return e[t]||"\\u"+(t.charCodeAt(0)+65536).toString(16).substr(1)},r=/[\\"\u0000-\u001F\u2028\u2029]/g;return'"'+t.replace(r,n)+'"'},t}();e.a=new a},function(t,e,n){"use strict";var r=n(0),o=function(){function t(){}return t.prototype.getWovnScriptTag=function(){var t=document.querySelector("[data-wovnio]");return t?(this.wovnScript=t,this.wovnScript):null},t.prototype.getProjectToken=function(){if(this.getWovnScriptTag()){return this.wovnScript.getAttribute("data-wovnio").match(/key=([^&]*)/)[1]}return null},t.prototype.getInsertType=function(){if(this.getWovnScriptTag()){var t=this.wovnScript.getAttribute("data-wovnio");return t.match(/backend=([^&]*)/)&&t.match(/backend=([^&]*)/)[1]?"backend":"script"}return null},t.prototype.getSelectedLang=function(){if(r.b.read("wovn_selected_lang"))return r.b.read("wovn_selected_lang")},t.prototype.getDefaultLang=function(){try{return window.WOVN.io._private.widget.c("Lang").defaultCode()}catch(t){return"(none)"}},t}();e.a=new o},function(t,e,n){"use strict";var r=function(){function t(){}return t.prototype.post=function(t){var e=this.newXhr();e.open("POST","https://wap.wovn.io/post",!0),e.onreadystaposttechange=function(){4===e.readyState&&(e=null)},e.send(t)},t.prototype.newXhr=function(){if(window.XMLHttpRequest)return new XMLHttpRequest;try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(t){return new ActiveXObject("Microsoft.XMLHTTP")}},t}();e.a=new r},function(t,e,n){"use strict";var r=function(){function t(){}return t.prototype.getWithDom=function(t){try{return" "+this.traversal(t,[]).reverse().join(" ")+" "}catch(t){return"@ "+t.toString()}},t.prototype.count=function(t){for(var e=-1;t;)++e,t=t.previousElementSibling;return e},t.prototype.traversal=function(t,e){if(!t)return e;var n=t.parentElement;if(!n)return e;var r=t.tagName.toLowerCase();if("html"===r||"body"===r)return e;var o=t.className?" ."+t.className.replace(" "," ."):"",i=t.id?" #"+t.id:"",a=" "+this.count(t);return e.push("/"+r+a+i+o),this.traversal(n,e)},t}();e.a=new r}]);