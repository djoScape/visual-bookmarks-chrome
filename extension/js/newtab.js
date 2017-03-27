!function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};t.m=e,t.c=o,t.i=function(e){return e},t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=7)}([function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e){var t="";switch(e.name){case"QuotaExceededError":t="QuotaExceededError";break;case"NotFoundError":t="NotFoundError";break;case"SecurityError":t="SecurityError";break;case"InvalidModificationError":t="InvalidModificationError";break;case"InvalidStateError":t="InvalidStateError";break;default:t="Unknown Error"}console.error(t)}var t=null;return{init:function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500,n=arguments[1];navigator.webkitPersistentStorage.requestQuota(1048576*o,function(o){window.webkitRequestFileSystem(window.PERSISTENT,o,function(e){t=e,n&&n()},e)},e)},usedAndRemaining:function(e){navigator.webkitPersistentStorage.queryUsageAndQuota(function(t,o){e&&e(t,o)})},createDir:function(o,n){t.root.getDirectory(o,{create:!0},function(e){n&&n(e)},e)},getDir:function(o,n){t.root.getDirectory(o,{},function(e){n&&n(e)},e)},deleteDir:function(o,n,r){var n=n||{};void 0===n.recursive&&(n.recursive=!1),t.root.getDirectory(o,{},function(t){n.recursive?t.removeRecursively(function(){r&&r()},e):t.remove(function(){r&&r()},e)},e)},createFile:function(e,o,n){t.root.getFile(e,{create:!0},function(e){e.createWriter(function(t){t.onwriteend=function(){n&&n(e)},t.onerror=function(e){console.log(e)};var r=new Blob([o.file],{type:o.fileType});t.write(r)})})},deleteFile:function(o,n){t.root.getFile(o,{create:!1},function(t){t.remove(function(){n&&n()},e)},e)},purge:function(){t.root.createReader().readEntries(function(t){for(var o,n=0;o=t[n];++n)o.isDirectory?o.removeRecursively(function(){},e):o.remove(function(){},e);console.info("Local storage emptied.")},e)}}}();t.default=n},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={transitionEnd:function(){var e={transition:"transitionend",webkitTransition:"webkitTransitionEnd"},t=document.createElement("fake");for(var o in e)if(void 0!==t.style[o])return e[o];return!1},debounce:function(e,t,o){var n=null;return function(){var r=this,i=arguments,a=function(){n=null,o||e.apply(r,i)},l=o&&!n;clearTimeout(n),n=setTimeout(a,t),l&&e.apply(r,i)}},trigger:function(e,t){var o=document.createEvent("HTMLEvents");o.initEvent(e,!0,!1),t.dispatchEvent(o)},templater:function(e,t){return e.replace(/\{(.*?)\}/g,function(e,o){return t[o]||""})},notifications:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5e3;window.timerNotice&&(chrome.notifications.clear(e),clearTimeout(window.timerNotice)),chrome.notifications.create(e,{type:"basic",iconUrl:"icons/icon128.png",title:"Visual bookmarks",message:e},function(){window.timerNotice=setTimeout(function(){chrome.notifications.clear(e)},t)})},base64ToBlob:function(e,t,o){for(var n=e,r=t||"",i=atob(n.split(",")[1]),a=(n.split(",")[0].split(":")[1].split(";")[0],new ArrayBuffer(i.length)),l=new Uint8Array(a),s=0;s<i.length;s++)l[s]=i.charCodeAt(s);var c=new Blob([a],{type:r});return o?o(c):c},resizeScreen:function(e,t){var o=new Image;o.onload=function(){300<o.height&&(o.width*=300/o.height,o.height=300);var e=document.createElement("canvas"),n=e.getContext("2d");e.width=o.width,e.height=o.height,n.drawImage(o,0,0,o.width,o.height),t(e.toDataURL("image/jpg"))},o.src=e},rand:function(e,t){return Math.round(e-.5+Math.random()*(t-e+1))},getDomain:function(e){return e.replace(/https?:\/\/(www.)?/i,"").replace(/\/.*/i,"")}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Element.prototype.matches=Element.prototype.matches||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return!!o[n]},Element.prototype.closest=Element.prototype.closest||function(e){for(var t=this;t;){if(t.matches(e))return t;t=t.parentElement}return null}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){Object.keys(r).forEach(function(e){null===localStorage.getItem(e)&&localStorage.setItem(e,r[e])}),"true"===localStorage.getItem("enable_sync")&&chrome.storage.onChanged.addListener(function(e,t){n.restoreFromSync(),window.location.reload()})}function t(e){chrome.storage.sync.get(function(t){Object.keys(t).forEach(function(e){localStorage.setItem(e,t[e])}),e&&e()})}function o(){var e={};Object.keys(r).forEach(function(t){localStorage[t]&&(e[t]=localStorage[t])}),chrome.storage.sync.set(e)}var r={background_color:"#f7f7f7",background_image:"background_color",background_external:"",default_folder_id:1,dial_columns:5,drag_and_drop:"true",enable_sync:"false",show_toolbar:"true",show_favicon:"true",thumbnailing_service:"http://api.webthumbnail.org/?width=500&height=400&screen=1280&url=[URL]"};return{init:e,restoreFromSync:t,syncToStorage:o}}();t.default=n},function(e,t){},function(e,t,o){var n,r;/**!
 * Sortable
 * @author	RubaXa   <trash@rubaxa.org>
 * @license MIT
 */
!function(i){"use strict";n=i,void 0!==(r="function"==typeof n?n.call(t,o,t,e):n)&&(e.exports=r)}(function(){"use strict";function e(e,t){if(!e||!e.nodeType||1!==e.nodeType)throw"Sortable: `el` must be HTMLElement, and not "+{}.toString.call(e);this.el=e,this.options=t=_({},t),e[W]=this;var o={group:Math.random(),sort:!0,disabled:!1,store:null,handle:null,scroll:!0,scrollSensitivity:30,scrollSpeed:10,draggable:/[uo]l/i.test(e.nodeName)?"li":">*",ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,setData:function(e,t){e.setData("Text",t.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0}};for(var n in o)!(n in t)&&(t[n]=o[n]);ae(t);for(var r in this)"_"===r.charAt(0)&&"function"==typeof this[r]&&(this[r]=this[r].bind(this));this.nativeDraggable=!t.forceFallback&&$,i(e,"mousedown",this._onTapStart),i(e,"touchstart",this._onTapStart),i(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(i(e,"dragover",this),i(e,"dragenter",this)),re.push(this._onDragOver),t.store&&this.sort(t.store.get(this))}function t(e,t){"clone"!==e.lastPullMode&&(t=!0),D&&D.state!==t&&(s(D,"display",t?"none":""),t||D.state&&(e.options.group.revertClone?(T.insertBefore(D,I),e._animate(w,D)):T.insertBefore(D,w)),D.state=t)}function o(e,t,o){if(e){o=o||z;do{if(">*"===t&&e.parentNode===o||p(e,t))return e}while(e=n(e))}return null}function n(e){var t=e.host;return t&&t.nodeType?t:e.parentNode}function r(e){e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.preventDefault()}function i(e,t,o){e.addEventListener(t,o,Z)}function a(e,t,o){e.removeEventListener(t,o,Z)}function l(e,t,o){if(e)if(e.classList)e.classList[o?"add":"remove"](t);else{var n=(" "+e.className+" ").replace(X," ").replace(" "+t+" "," ");e.className=(n+(o?" "+t:"")).replace(X," ")}}function s(e,t,o){var n=e&&e.style;if(n){if(void 0===o)return z.defaultView&&z.defaultView.getComputedStyle?o=z.defaultView.getComputedStyle(e,""):e.currentStyle&&(o=e.currentStyle),void 0===t?o:o[t];t in n||(t="-webkit-"+t),n[t]=o+("string"==typeof o?"":"px")}}function c(e,t,o){if(e){var n=e.getElementsByTagName(t),r=0,i=n.length;if(o)for(;r<i;r++)o(n[r],r);return n}return[]}function d(e,t,o,n,r,i,a){e=e||t[W];var l=z.createEvent("Event"),s=e.options,c="on"+o.charAt(0).toUpperCase()+o.substr(1);l.initEvent(o,!0,!0),l.to=t,l.from=r||t,l.item=n||t,l.clone=D,l.oldIndex=i,l.newIndex=a,t.dispatchEvent(l),s[c]&&s[c].call(e,l)}function u(e,t,o,n,r,i,a){var l,s,c=e[W],d=c.options.onMove;return l=z.createEvent("Event"),l.initEvent("move",!0,!0),l.to=t,l.from=e,l.dragged=o,l.draggedRect=n,l.related=r||t,l.relatedRect=i||t.getBoundingClientRect(),e.dispatchEvent(l),d&&(s=d.call(c,l,a)),s}function f(e){e.draggable=!1}function h(){ee=!1}function g(e,t){var o=e.lastElementChild,n=o.getBoundingClientRect();return(t.clientY-(n.top+n.height)>5||t.clientX-(n.right+n.width)>5)&&o}function m(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,o=t.length,n=0;o--;)n+=t.charCodeAt(o);return n.toString(36)}function v(e,t){var o=0;if(!e||!e.parentNode)return-1;for(;e&&(e=e.previousElementSibling);)"TEMPLATE"===e.nodeName.toUpperCase()||">*"!==t&&!p(e,t)||o++;return o}function p(e,t){if(e){t=t.split(".");var o=t.shift().toUpperCase(),n=new RegExp("\\s("+t.join("|")+")(?=\\s)","g");return!(""!==o&&e.nodeName.toUpperCase()!=o||t.length&&((" "+e.className+" ").match(n)||[]).length!=t.length)}return!1}function b(e,t){var o,n;return function(){void 0===o&&(o=arguments,n=this,setTimeout(function(){1===o.length?e.call(n,o[0]):e.apply(n,o),o=void 0},t))}}function _(e,t){if(e&&t)for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);return e}function y(e){return V?V(e).clone(!0)[0]:J&&J.dom?J.dom(e).cloneNode(!0):e.cloneNode(!0)}function k(e){for(var t=e.getElementsByTagName("input"),o=t.length;o--;){var n=t[o];n.checked&&ne.push(n)}}if("undefined"==typeof window||!window.document)return function(){throw new Error("Sortable.js requires a window with a document")};var w,E,S,D,T,I,C,B,x,A,L,M,N,O,R,P,Y,q,F,U,j={},X=/\s+/g,H=/left|right|inline/,W="Sortable"+(new Date).getTime(),Q=window,z=Q.document,G=Q.parseInt,V=Q.jQuery||Q.Zepto,J=Q.Polymer,Z=!1,$=!!("draggable"in z.createElement("div")),K=function(e){return!navigator.userAgent.match(/Trident.*rv[ :]?11\./)&&(e=z.createElement("x"),e.style.cssText="pointer-events:auto","auto"===e.style.pointerEvents)}(),ee=!1,te=Math.abs,oe=Math.min,ne=[],re=[],ie=b(function(e,t,o){if(o&&t.scroll){var n,r,i,a,l,s,c=o[W],d=t.scrollSensitivity,u=t.scrollSpeed,f=e.clientX,h=e.clientY,g=window.innerWidth,m=window.innerHeight;if(x!==o&&(B=t.scroll,x=o,A=t.scrollFn,B===!0)){B=o;do{if(B.offsetWidth<B.scrollWidth||B.offsetHeight<B.scrollHeight)break}while(B=B.parentNode)}B&&(n=B,r=B.getBoundingClientRect(),i=(te(r.right-f)<=d)-(te(r.left-f)<=d),a=(te(r.bottom-h)<=d)-(te(r.top-h)<=d)),i||a||(i=(g-f<=d)-(f<=d),a=(m-h<=d)-(h<=d),(i||a)&&(n=Q)),j.vx===i&&j.vy===a&&j.el===n||(j.el=n,j.vx=i,j.vy=a,clearInterval(j.pid),n&&(j.pid=setInterval(function(){if(s=a?a*u:0,l=i?i*u:0,"function"==typeof A)return A.call(c,l,s,e);n===Q?Q.scrollTo(Q.pageXOffset+l,Q.pageYOffset+s):(n.scrollTop+=s,n.scrollLeft+=l)},24)))}},30),ae=function(e){function t(e,t){return void 0!==e&&e!==!0||(e=o.name),"function"==typeof e?e:function(o,n){var r=n.options.group.name;return t?e:e&&(e.join?e.indexOf(r)>-1:r==e)}}var o={},n=e.group;n&&"object"==typeof n||(n={name:n}),o.name=n.name,o.checkPull=t(n.pull,!0),o.checkPut=t(n.put),o.revertClone=n.revertClone,e.group=o};e.prototype={constructor:e,_onTapStart:function(e){var t,n=this,r=this.el,i=this.options,a=i.preventOnFilter,l=e.type,s=e.touches&&e.touches[0],c=(s||e).target,u=e.target.shadowRoot&&e.path[0]||c,f=i.filter;if(k(r),!w&&!("mousedown"===l&&0!==e.button||i.disabled)&&(c=o(c,i.draggable,r))&&C!==c){if(t=v(c,i.draggable),"function"==typeof f){if(f.call(this,e,c,this))return d(n,u,"filter",c,r,t),void(a&&e.preventDefault())}else if(f&&(f=f.split(",").some(function(e){if(e=o(u,e.trim(),r))return d(n,e,"filter",c,r,t),!0})))return void(a&&e.preventDefault());i.handle&&!o(u,i.handle,r)||this._prepareDragStart(e,s,c,t)}},_prepareDragStart:function(e,t,o,n){var r,a=this,s=a.el,u=a.options,h=s.ownerDocument;o&&!w&&o.parentNode===s&&(q=e,T=s,w=o,E=w.parentNode,I=w.nextSibling,C=o,P=u.group,O=n,this._lastX=(t||e).clientX,this._lastY=(t||e).clientY,w.style["will-change"]="transform",r=function(){a._disableDelayedDrag(),w.draggable=a.nativeDraggable,l(w,u.chosenClass,!0),a._triggerDragStart(e,t),d(a,T,"choose",w,T,O)},u.ignore.split(",").forEach(function(e){c(w,e.trim(),f)}),i(h,"mouseup",a._onDrop),i(h,"touchend",a._onDrop),i(h,"touchcancel",a._onDrop),i(h,"pointercancel",a._onDrop),i(h,"selectstart",a),u.delay?(i(h,"mouseup",a._disableDelayedDrag),i(h,"touchend",a._disableDelayedDrag),i(h,"touchcancel",a._disableDelayedDrag),i(h,"mousemove",a._disableDelayedDrag),i(h,"touchmove",a._disableDelayedDrag),i(h,"pointermove",a._disableDelayedDrag),a._dragStartTimer=setTimeout(r,u.delay)):r())},_disableDelayedDrag:function(){var e=this.el.ownerDocument;clearTimeout(this._dragStartTimer),a(e,"mouseup",this._disableDelayedDrag),a(e,"touchend",this._disableDelayedDrag),a(e,"touchcancel",this._disableDelayedDrag),a(e,"mousemove",this._disableDelayedDrag),a(e,"touchmove",this._disableDelayedDrag),a(e,"pointermove",this._disableDelayedDrag)},_triggerDragStart:function(e,t){t=t||("touch"==e.pointerType?e:null),t?(q={target:w,clientX:t.clientX,clientY:t.clientY},this._onDragStart(q,"touch")):this.nativeDraggable?(i(w,"dragend",this),i(T,"dragstart",this._onDragStart)):this._onDragStart(q,!0);try{z.selection?setTimeout(function(){z.selection.empty()}):window.getSelection().removeAllRanges()}catch(e){}},_dragStarted:function(){if(T&&w){var t=this.options;l(w,t.ghostClass,!0),l(w,t.dragClass,!1),e.active=this,d(this,T,"start",w,T,O)}else this._nulling()},_emulateDragOver:function(){if(F){if(this._lastX===F.clientX&&this._lastY===F.clientY)return;this._lastX=F.clientX,this._lastY=F.clientY,K||s(S,"display","none");var e=z.elementFromPoint(F.clientX,F.clientY),t=e,o=re.length;if(t)do{if(t[W]){for(;o--;)re[o]({clientX:F.clientX,clientY:F.clientY,target:e,rootEl:t});break}e=t}while(t=t.parentNode);K||s(S,"display","")}},_onTouchMove:function(t){if(q){var o=this.options,n=o.fallbackTolerance,r=o.fallbackOffset,i=t.touches?t.touches[0]:t,a=i.clientX-q.clientX+r.x,l=i.clientY-q.clientY+r.y,c=t.touches?"translate3d("+a+"px,"+l+"px,0)":"translate("+a+"px,"+l+"px)";if(!e.active){if(n&&oe(te(i.clientX-this._lastX),te(i.clientY-this._lastY))<n)return;this._dragStarted()}this._appendGhost(),U=!0,F=i,s(S,"webkitTransform",c),s(S,"mozTransform",c),s(S,"msTransform",c),s(S,"transform",c),t.preventDefault()}},_appendGhost:function(){if(!S){var e,t=w.getBoundingClientRect(),o=s(w),n=this.options;S=w.cloneNode(!0),l(S,n.ghostClass,!1),l(S,n.fallbackClass,!0),l(S,n.dragClass,!0),s(S,"top",t.top-G(o.marginTop,10)),s(S,"left",t.left-G(o.marginLeft,10)),s(S,"width",t.width),s(S,"height",t.height),s(S,"opacity","0.8"),s(S,"position","fixed"),s(S,"zIndex","100000"),s(S,"pointerEvents","none"),n.fallbackOnBody&&z.body.appendChild(S)||T.appendChild(S),e=S.getBoundingClientRect(),s(S,"width",2*t.width-e.width),s(S,"height",2*t.height-e.height)}},_onDragStart:function(e,t){var o=e.dataTransfer,n=this.options;this._offUpEvents(),P.checkPull(this,this,w,e)&&(D=y(w),D.draggable=!1,D.style["will-change"]="",s(D,"display","none"),l(D,this.options.chosenClass,!1),T.insertBefore(D,w),d(this,T,"clone",w)),l(w,n.dragClass,!0),t?("touch"===t?(i(z,"touchmove",this._onTouchMove),i(z,"touchend",this._onDrop),i(z,"touchcancel",this._onDrop),i(z,"pointermove",this._onTouchMove),i(z,"pointerup",this._onDrop)):(i(z,"mousemove",this._onTouchMove),i(z,"mouseup",this._onDrop)),this._loopId=setInterval(this._emulateDragOver,50)):(o&&(o.effectAllowed="move",n.setData&&n.setData.call(this,o,w)),i(z,"drop",this),setTimeout(this._dragStarted,0))},_onDragOver:function(n){var r,i,a,l,c=this.el,d=this.options,f=d.group,m=e.active,v=P===f,p=!1,b=d.sort;if(void 0!==n.preventDefault&&(n.preventDefault(),!d.dragoverBubble&&n.stopPropagation()),!w.animated&&(U=!0,m&&!d.disabled&&(v?b||(l=!T.contains(w)):Y===this||(m.lastPullMode=P.checkPull(this,m,w,n))&&f.checkPut(this,m,w,n))&&(void 0===n.rootEl||n.rootEl===this.el))){if(ie(n,d,this.el),ee)return;if(r=o(n.target,d.draggable,c),i=w.getBoundingClientRect(),Y!==this&&(Y=this,p=!0),l)return t(m,!0),E=T,void(D||I?T.insertBefore(w,D||I):b||T.appendChild(w));if(0===c.children.length||c.children[0]===S||c===n.target&&(r=g(c,n))){if(r){if(r.animated)return;a=r.getBoundingClientRect()}t(m,v),u(T,c,w,i,r,a,n)!==!1&&(w.contains(c)||(c.appendChild(w),E=c),this._animate(i,w),r&&this._animate(a,r))}else if(r&&!r.animated&&r!==w&&void 0!==r.parentNode[W]){L!==r&&(L=r,M=s(r),N=s(r.parentNode)),a=r.getBoundingClientRect();var _=a.right-a.left,y=a.bottom-a.top,k=H.test(M.cssFloat+M.display)||"flex"==N.display&&0===N["flex-direction"].indexOf("row"),C=r.offsetWidth>w.offsetWidth,B=r.offsetHeight>w.offsetHeight,x=(k?(n.clientX-a.left)/_:(n.clientY-a.top)/y)>.5,A=r.nextElementSibling,O=u(T,c,w,i,r,a,n),R=!1;if(O!==!1){if(ee=!0,setTimeout(h,30),t(m,v),1===O||O===-1)R=1===O;else if(k){var q=w.offsetTop,F=r.offsetTop;R=q===F?r.previousElementSibling===w&&!C||x&&C:r.previousElementSibling===w||w.previousElementSibling===r?(n.clientY-a.top)/y>.5:F>q}else p||(R=A!==w&&!B||x&&B);w.contains(c)||(R&&!A?c.appendChild(w):r.parentNode.insertBefore(w,R?A:r)),E=w.parentNode,this._animate(i,w),this._animate(a,r)}}}},_animate:function(e,t){var o=this.options.animation;if(o){var n=t.getBoundingClientRect();1===e.nodeType&&(e=e.getBoundingClientRect()),s(t,"transition","none"),s(t,"transform","translate3d("+(e.left-n.left)+"px,"+(e.top-n.top)+"px,0)"),t.offsetWidth,s(t,"transition","all "+o+"ms"),s(t,"transform","translate3d(0,0,0)"),clearTimeout(t.animated),t.animated=setTimeout(function(){s(t,"transition",""),s(t,"transform",""),t.animated=!1},o)}},_offUpEvents:function(){var e=this.el.ownerDocument;a(z,"touchmove",this._onTouchMove),a(z,"pointermove",this._onTouchMove),a(e,"mouseup",this._onDrop),a(e,"touchend",this._onDrop),a(e,"pointerup",this._onDrop),a(e,"touchcancel",this._onDrop),a(e,"selectstart",this)},_onDrop:function(t){var o=this.el,n=this.options;clearInterval(this._loopId),clearInterval(j.pid),clearTimeout(this._dragStartTimer),a(z,"mousemove",this._onTouchMove),this.nativeDraggable&&(a(z,"drop",this),a(o,"dragstart",this._onDragStart)),this._offUpEvents(),t&&(U&&(t.preventDefault(),!n.dropBubble&&t.stopPropagation()),S&&S.parentNode.removeChild(S),T!==E&&"clone"===e.active.lastPullMode||D&&D.parentNode.removeChild(D),w&&(this.nativeDraggable&&a(w,"dragend",this),f(w),w.style["will-change"]="",l(w,this.options.ghostClass,!1),l(w,this.options.chosenClass,!1),T!==E?(R=v(w,n.draggable))>=0&&(d(null,E,"add",w,T,O,R),d(this,T,"remove",w,T,O,R),d(null,E,"sort",w,T,O,R),d(this,T,"sort",w,T,O,R)):w.nextSibling!==I&&(R=v(w,n.draggable))>=0&&(d(this,T,"update",w,T,O,R),d(this,T,"sort",w,T,O,R)),e.active&&(null!=R&&R!==-1||(R=O),d(this,T,"end",w,T,O,R),this.save()))),this._nulling()},_nulling:function(){T=w=E=S=I=D=C=B=x=q=F=U=R=L=M=Y=P=e.active=null,ne.forEach(function(e){e.checked=!0}),ne.length=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragover":case"dragenter":w&&(this._onDragOver(e),r(e));break;case"selectstart":e.preventDefault()}},toArray:function(){for(var e,t=[],n=this.el.children,r=0,i=n.length,a=this.options;r<i;r++)e=n[r],o(e,a.draggable,this.el)&&t.push(e.getAttribute(a.dataIdAttr)||m(e));return t},sort:function(e){var t={},n=this.el;this.toArray().forEach(function(e,r){var i=n.children[r];o(i,this.options.draggable,n)&&(t[e]=i)},this),e.forEach(function(e){t[e]&&(n.removeChild(t[e]),n.appendChild(t[e]))})},save:function(){var e=this.options.store;e&&e.set(this)},closest:function(e,t){return o(e,t||this.options.draggable,this.el)},option:function(e,t){var o=this.options;if(void 0===t)return o[e];o[e]=t,"group"===e&&ae(o)},destroy:function(){var e=this.el;e[W]=null,a(e,"mousedown",this._onTapStart),a(e,"touchstart",this._onTapStart),a(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(a(e,"dragover",this),a(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(e){e.removeAttribute("draggable")}),re.splice(re.indexOf(this._onDragOver),1),this._onDrop(),this.el=e=null}},i(z,"touchmove",function(t){e.active&&t.preventDefault()});try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){Z={capture:!1,passive:!1}}}))}catch(e){}return e.utils={on:i,off:a,css:s,find:c,is:function(e,t){return!!o(e,t,e)},extend:_,throttle:b,closest:o,toggleClass:l,clone:y,index:v},e.create=function(t,o){return new e(t,o)},e.version="1.5.1",e})},,function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var r=o(4);n(r);o(2);var i=o(5),a=n(i),l=o(3),s=n(l),c=o(0),d=n(c),u=o(1),f=n(u);localStorage.getItem("custom_dials")||localStorage.setItem("custom_dials","{}"),d.default.init(500),d.default.usedAndRemaining(function(e){0===e&&(localStorage.setItem("custom_dials","{}"),localStorage.setItem("background_local",""))});var h=function(){function e(){if(k){s.default.init(),"false"===localStorage.getItem("show_toolbar")?document.getElementById("header").style.display="none":o(),l(t()),k.addEventListener("click",function(e){if(e.target.matches(".bookmark__del--bookmark"))h(e);else if(e.target.matches(".bookmark__del--folder"))m(e);else if(e.target.matches(".bookmark__edit")){e.preventDefault();var t=e.target.closest(".bookmark"),o=t.querySelector(".bookmark__title").textContent,n=t.querySelector(".bookmark__link").getAttribute("href");"#"===n.charAt(0)&&(n="");var r=e.target.getAttribute("data-id");g.show(r,o,n)}else if(e.target.matches(".bookmark__screen")){e.preventDefault();var i=e.target.closest(".bookmark"),a=i.getAttribute("data-sort"),l=i.querySelector(".bookmark__link").href;c(i,a,l)}else e.target.matches("#add")&&g.show("New","","")},!1),document.getElementById("closeModal").addEventListener("click",function(){g.hide()},!1),document.body.addEventListener("keydown",function(e){27===e.which&&f.default.trigger("click",document.getElementById("closeModal"))},!1),document.getElementById("formBookmark").addEventListener("submit",function(e){e.preventDefault();var t=this.getAttribute("data-action"),o=document.getElementById("title").value,n=document.getElementById("url").value;"New"!==t?_(t,o,n)&&g.hide():b(o,n)&&g.hide()},!1);var e=f.default.debounce(function(e){d(e)},500);document.getElementById("bookmarkSearch").addEventListener("input",e,!1),window.addEventListener("hashchange",function(e){l(t()),o()},!1),"true"===localStorage.getItem("drag_and_drop")&&(w=a.default.create(k,{animation:200,filter:".bookmark__control",draggable:".column",onUpdate:function(){Array.prototype.slice.call(k.querySelectorAll(".bookmark")).forEach(function(e,t){y.move(e.getAttribute("data-sort"),{parentId:k.getAttribute("data-folder"),index:t})})}}))}}function t(){var e=localStorage.getItem("default_folder_id");return""!==window.location.hash&&(e=window.location.hash.slice(1)),e}function o(){var e=document.getElementById("selectFolder");e.innerHTML="",e.removeEventListener("change",u,!1),y.getTree(function(o){var n=[],r=[],i=void 0,a=void 0;for(r.push(o[0].children[0]),r.push(o[0].children[1]);void 0!==(i=r.pop());)if(void 0!==i.children){for("0"===i.parentId&&(i.path=""),i.path+=i.title;void 0!==(a=i.children.pop());)void 0!==a.children&&(a.path=i.path+"/",r.push(a));n.push(i)}n.sort(function(e,t){return e.path.localeCompare(t.path)});var l=[];n.forEach(function(e){l.push("<option"+(e.id===t()?" selected":"")+' value="'+e.id+'">'+e.path+"</option>")}),e.innerHTML=l.join(""),e.addEventListener("change",u,!1)})}function n(e,t){var o="true"===localStorage.getItem("show_favicon")?'<img class="bookmark__favicon" width="16" height="16" src="chrome://favicon/{url}">':"",n=void 0;t&&(n=t[e.id]);var r=n?n:"{thumbnailing_service}",i='<div class="column">\n        <div class="bookmark" data-sort="{id}">\n          <div class="bookmark__img" style="background-image: url(\''+r+'\')"></div>\n          <div class="bookmark__control bookmark__control--left">\n          <div class="bookmark__edit" data-bookmark="bookmark" data-title="{title}" data-url="{url}" data-id="{id}"></div>\n          <div class="bookmark__divider"></div>\n          <div class="bookmark__screen" data-id="{id}"></div>\n          </div>\n          <div class="bookmark__control bookmark__control--right">\n          <div class="bookmark__del--bookmark" data-id="{id}"></div>\n          </div>\n          <div class="bookmark__caption">\n          <div class="bookmark__title">'+o+'{title}</div>\n          </div>\n          <a class="bookmark__link" href="{url}" title="{title}"></a>\n        </div>\n      </div>';return f.default.templater(i,{id:e.id,url:e.url,thumbnailing_service:localStorage.getItem("thumbnailing_service").replace("[URL]",encodeURIComponent(e.url)),title:e.title})}function r(e){return f.default.templater('<div class="column">\n        <div class="bookmark" data-sort="{id}">\n          <div class="bookmark__img--folder"></div>\n          <div class="bookmark__control bookmark__control--left">\n          <div class="bookmark__edit" data-bookmark="folder" data-title="{title}" data-id="{id}"></div>\n          </div>\n          <div class="bookmark__control bookmark__control--right">\n          <div class="bookmark__del--folder" data-id="{id}"></div>\n          </div>\n          <div class="bookmark__caption">\n          <div class="bookmark__title">{title}</div>\n          </div>\n          <a class="bookmark__link" href="#{url}" title="{title}"></a>\n        </div>\n      </div>',{id:e.id,url:e.id,title:e.title})}function i(e){var t=[];k.innerHTML='<div class="dial-loading"><div class="loading"></div></div>';var o=JSON.parse(localStorage.getItem("custom_dials"));e.forEach(function(e){void 0!==e.url&&t.push(n(e,o)),void 0!==e.children&&t.push(r(e))}),setTimeout(function(){k.innerHTML=t.join("")+'\n        <div class="column--nosort">\n          <div class="bookmark--create">\n            <div class="bookmark__img--add"></div>\n            <a class="bookmark__link--create" id="add"></a>\n          </div>\n        </div>'},20)}function l(e){y.getSubTree(e,function(t){void 0!==t?(i(t[0].children),k.setAttribute("data-folder",e)):f.default.notifications("Can't find folder by id. Maybe you have not synced bookmarks",15e3)})}function c(e,t,o){var n=void 0;e.innerHTML+='<div id="overlay_id_'+t+'" class="bookmark__overlay"><div class="loading"></div></div>',chrome.runtime.sendMessage({captureUrl:o,id:t},function(o){if(o.warning)return console.warn(o.warning),(n=document.getElementById("overlay_id_"+t))&&e.removeChild(n),!1;e.querySelector(".bookmark__img").style.backgroundImage="url('"+o+"?refresh="+f.default.rand(1,9999)+"')",(n=document.getElementById("overlay_id_"+t))&&e.removeChild(n)})}function d(e){var o=e.target.value.trim().toLowerCase();y.search(o,function(e){e.length>0?("true"===localStorage.getItem("drag_and_drop")&&w.option("disabled",!0),i(e)):("true"===localStorage.getItem("drag_and_drop")&&w.option("disabled",!1),l(t()))})}function u(e){var t=this.value;window.location.hash="#"+t,l(t)}function h(e){e.preventDefault();var t=e.target,o=t.closest(".column");if(confirm("Are you sure you want to delete the bookmark ?","")){var n=t.getAttribute("data-id");y.remove(n,function(){k.removeChild(o),f.default.notifications("Bookmark removed.")})}}function m(e){e.preventDefault();var t=e.target,n=t.closest(".column");if(confirm("Are you sure you want to delete the folder and all its contents ?","")){var r=t.getAttribute("data-id");y.removeTree(r,function(){k.removeChild(n),o(),f.default.notifications("Folder removed.")})}}function v(e){return!!/^(http|https|ftp|file|chrome|chrome-extension):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/.test(e)}function p(e,t){if(0!==e.length)return v(t)||0===t.length||(t="http://"+t),{title:e,url:t}}function b(e,t){var o=p(e,t);return void 0!==o?(o.parentId=k.getAttribute("data-folder"),y.create(o,function(e){var t=void 0;t=e.url?n(e):r(e),k.querySelector(".column--nosort").insertAdjacentHTML("beforeBegin",t)}),!0):(alert("- Adding a new Folder only requires a Title \n- Adding a new Bookmark requires both a Title and a URL"),!1)}function _(e,t,o){var n=p(t,o),r=document.querySelector('[data-sort="'+e+'"]');r.querySelector(".bookmark__edit");return 0===o.length||v(o)||(n=void 0),void 0!==n?(y.update(e,n,function(e){r.querySelector(".bookmark__link").href=e.url?e.url:"#"+e.id,r.querySelector(".bookmark__title").textContent=e.title,r.querySelector(".bookmark__link").title=e.title,f.default.notifications("Bookmark updated")}),!0):(alert("Editing an existing Bookmark requires both a Title and a valid URL in Chrome\n\nFor example, valid URL's start with: \n - http:// \n - https:// \n - ftp://"),!1)}var y=chrome.bookmarks,k=document.getElementById("includeThree"),w=null;return{init:e}}(),g=function(){var e=null,t=(document.getElementById("modal-overlay"),document.getElementById("modal"),document.getElementById("formBookmark")),o=document.getElementById("modalHead"),n=document.getElementById("title"),r=document.getElementById("url"),i=document.getElementById("main"),a=document.body,l=void 0;return{show:function(s,c,d){e||("New"!==s?(o.textContent="Edit bookmark - "+c,n.value=c,d?(r.style.display="",r.value=d):r.style.display="none"):(setTimeout(function(){n.focus()},100),o.textContent="Add bookmark",r.style.display="",n.value="",r.value=""),t.setAttribute("data-action",s),l=window.pageYOffset,i.style.top=-l+"px",i.classList.add("fixed"),a.classList.add("modal--show"),e=!0)},hide:function(){e&&(a.classList.remove("modal--show"),setTimeout(function(){i.classList.remove("fixed"),i.style.top="",window.scrollTo(0,l),l=null},300),e=null)}}}(),m=function(){return{setBG:function(){var e=document.getElementById("bg"),t=localStorage.getItem("background_image");if("background_color"===t)return e.style.backgroundColor=localStorage.getItem("background_color"),void setTimeout(function(){e.style.opacity=1},20);var o="background_local"===t?localStorage.getItem("background_local"):localStorage.getItem("background_external");if(o&&""!==o){var n=new Image;n.onload=function(){e.style.backgroundImage="url('"+o+"')",e.style.opacity=1},n.onerror=function(t){console.warn("Local background image resource problem: "+t.type),e.style.opacity=1},n.src=o}},calculateStyles:function(){if(window.innerWidth<768)return document.getElementById("generateStyles").innerHTML="";var e=Math.floor(document.getElementById("includeThree").offsetWidth),t=document.getElementById("generateStyles"),o=Math.floor(e/localStorage.getItem("dial_columns")),n=o/(4/3);t.innerHTML=".column, .column--nosort {width: "+o+"px; height: "+n+"px}"}}}();m.calculateStyles(),m.setBG(),h.init(),window.addEventListener("resize",function(){m.calculateStyles()},!1)}]);