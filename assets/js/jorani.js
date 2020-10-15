/*! For license information please see jorani.js.LICENSE.txt */
var jorani;jorani=(()=>{var t={152:function(t){var e;e=function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var i=window.getSelection(),r=document.createRange();r.selectNodeContents(t),i.removeAllRanges(),i.addRange(r),e=i.toString()}return e}},function(t,e){function n(){}n.prototype={on:function(t,e,n){var i=this.e||(this.e={});return(i[t]||(i[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var i=this;function r(){i.off(t,r),e.apply(n,arguments)}return r._=e,this.on(t,r,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),i=0,r=n.length;i<r;i++)n[i].fn.apply(n[i].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),i=n[t],r=[];if(i&&e)for(var o=0,s=i.length;o<s;o++)i[o].fn!==e&&i[o].fn._!==e&&r.push(i[o]);return r.length?n[t]=r:delete n[t],this}},t.exports=n,t.exports.TinyEmitter=n},function(t,e,n){var i=n(3),r=n(4);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!i.string(e))throw new TypeError("Second argument must be a String");if(!i.fn(n))throw new TypeError("Third argument must be a Function");if(i.node(t))return function(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}(t,e,n);if(i.nodeList(t))return function(t,e,n){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,n)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,n)}))}}}(t,e,n);if(i.string(t))return function(t,e,n){return r(document.body,t,e,n)}(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e,n){var i=n(5);function r(t,e,n,i,r){var s=o.apply(this,arguments);return t.addEventListener(n,s,r),{destroy:function(){t.removeEventListener(n,s,r)}}}function o(t,e,n,r){return function(n){n.delegateTarget=i(n.target,e),n.delegateTarget&&r.call(t,n)}}t.exports=function(t,e,n,i,o){return"function"==typeof t.addEventListener?r.apply(null,arguments):"function"==typeof n?r.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return r(t,e,n,i,o)})))}},function(t,e){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},function(t,e,n){"use strict";n.r(e);var i=n(0),r=n.n(i),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.resolveOptions(e),this.initSelection()}return s(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=r()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=r()(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":o(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}(),u=n(1),c=n.n(u),l=n(2),h=n.n(l),f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),d=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var i=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return i.resolveOptions(n),i.listenClick(t),i}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),p(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===f(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=h()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new a({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return v("action",t)}},{key:"defaultTarget",value:function(t){var e=v("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return v("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach((function(t){n=n&&!!document.queryCommandSupported(t)})),n}}]),e}(c.a);function v(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}e.default=d}]).default},t.exports=e()},840:(t,e,n)=>{var i;!function(r,o,s,a){"use strict";var u,c=["","webkit","Moz","MS","ms","o"],l=o.createElement("div"),h=Math.round,f=Math.abs,p=Date.now;function d(t,e,n){return setTimeout(b(t,n),e)}function v(t,e,n){return!!Array.isArray(t)&&(m(t,n[e],n),!0)}function m(t,e,n){var i;if(t)if(t.forEach)t.forEach(e,n);else if(t.length!==a)for(i=0;i<t.length;)e.call(n,t[i],i,t),i++;else for(i in t)t.hasOwnProperty(i)&&e.call(n,t[i],i,t)}function y(t,e,n){var i="DEPRECATED METHOD: "+e+"\n"+n+" AT \n";return function(){var e=new Error("get-stack-trace"),n=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",o=r.console&&(r.console.warn||r.console.log);return o&&o.call(r.console,i,n),t.apply(this,arguments)}}u="function"!=typeof Object.assign?function(t){if(t===a||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1;n<arguments.length;n++){var i=arguments[n];if(i!==a&&null!==i)for(var r in i)i.hasOwnProperty(r)&&(e[r]=i[r])}return e}:Object.assign;var g=y((function(t,e,n){for(var i=Object.keys(e),r=0;r<i.length;)(!n||n&&t[i[r]]===a)&&(t[i[r]]=e[i[r]]),r++;return t}),"extend","Use `assign`."),T=y((function(t,e){return g(t,e,!0)}),"merge","Use `assign`.");function E(t,e,n){var i,r=e.prototype;(i=t.prototype=Object.create(r)).constructor=t,i._super=r,n&&u(i,n)}function b(t,e){return function(){return t.apply(e,arguments)}}function S(t,e){return"function"==typeof t?t.apply(e&&e[0]||a,e):t}function x(t,e){return t===a?e:t}function w(t,e,n){m(I(e),(function(e){t.addEventListener(e,n,!1)}))}function A(t,e,n){m(I(e),(function(e){t.removeEventListener(e,n,!1)}))}function k(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function C(t,e){return t.indexOf(e)>-1}function I(t){return t.trim().split(/\s+/g)}function O(t,e,n){if(t.indexOf&&!n)return t.indexOf(e);for(var i=0;i<t.length;){if(n&&t[i][n]==e||!n&&t[i]===e)return i;i++}return-1}function P(t){return Array.prototype.slice.call(t,0)}function _(t,e,n){for(var i=[],r=[],o=0;o<t.length;){var s=e?t[o][e]:t[o];O(r,s)<0&&i.push(t[o]),r[o]=s,o++}return n&&(i=e?i.sort((function(t,n){return t[e]>n[e]})):i.sort()),i}function R(t,e){for(var n,i,r=e[0].toUpperCase()+e.slice(1),o=0;o<c.length;){if((i=(n=c[o])?n+r:e)in t)return i;o++}return a}var D=1;function N(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||r}var M="ontouchstart"in r,L=R(r,"PointerEvent")!==a,j=M&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),Y="touch",F="mouse",z=["x","y"],H=["clientX","clientY"];function X(t,e){var n=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){S(t.options.enable,[t])&&n.handler(e)},this.init()}function U(t,e,n){var i=n.pointers.length,r=n.changedPointers.length,o=1&e&&i-r==0,s=12&e&&i-r==0;n.isFirst=!!o,n.isFinal=!!s,o&&(t.session={}),n.eventType=e,function(t,e){var n=t.session,i=e.pointers,r=i.length;n.firstInput||(n.firstInput=B(e)),r>1&&!n.firstMultiple?n.firstMultiple=B(e):1===r&&(n.firstMultiple=!1);var o=n.firstInput,s=n.firstMultiple,u=s?s.center:o.center,c=e.center=q(i);e.timeStamp=p(),e.deltaTime=e.timeStamp-o.timeStamp,e.angle=G(u,c),e.distance=K(u,c),function(t,e){var n=e.center,i=t.offsetDelta||{},r=t.prevDelta||{},o=t.prevInput||{};1!==e.eventType&&4!==o.eventType||(r=t.prevDelta={x:o.deltaX||0,y:o.deltaY||0},i=t.offsetDelta={x:n.x,y:n.y}),e.deltaX=r.x+(n.x-i.x),e.deltaY=r.y+(n.y-i.y)}(n,e),e.offsetDirection=V(e.deltaX,e.deltaY);var l,h,d=W(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=d.x,e.overallVelocityY=d.y,e.overallVelocity=f(d.x)>f(d.y)?d.x:d.y,e.scale=s?(l=s.pointers,K((h=i)[0],h[1],H)/K(l[0],l[1],H)):1,e.rotation=s?function(t,e){return G(e[1],e[0],H)+G(t[1],t[0],H)}(s.pointers,i):0,e.maxPointers=n.prevInput?e.pointers.length>n.prevInput.maxPointers?e.pointers.length:n.prevInput.maxPointers:e.pointers.length,function(t,e){var n,i,r,o,s=t.lastInterval||e,u=e.timeStamp-s.timeStamp;if(8!=e.eventType&&(u>25||s.velocity===a)){var c=e.deltaX-s.deltaX,l=e.deltaY-s.deltaY,h=W(u,c,l);i=h.x,r=h.y,n=f(h.x)>f(h.y)?h.x:h.y,o=V(c,l),t.lastInterval=e}else n=s.velocity,i=s.velocityX,r=s.velocityY,o=s.direction;e.velocity=n,e.velocityX=i,e.velocityY=r,e.direction=o}(n,e);var v=t.element;k(e.srcEvent.target,v)&&(v=e.srcEvent.target),e.target=v}(t,n),t.emit("hammer.input",n),t.recognize(n),t.session.prevInput=n}function B(t){for(var e=[],n=0;n<t.pointers.length;)e[n]={clientX:h(t.pointers[n].clientX),clientY:h(t.pointers[n].clientY)},n++;return{timeStamp:p(),pointers:e,center:q(e),deltaX:t.deltaX,deltaY:t.deltaY}}function q(t){var e=t.length;if(1===e)return{x:h(t[0].clientX),y:h(t[0].clientY)};for(var n=0,i=0,r=0;r<e;)n+=t[r].clientX,i+=t[r].clientY,r++;return{x:h(n/e),y:h(i/e)}}function W(t,e,n){return{x:e/t||0,y:n/t||0}}function V(t,e){return t===e?1:f(t)>=f(e)?t<0?2:4:e<0?8:16}function K(t,e,n){n||(n=z);var i=e[n[0]]-t[n[0]],r=e[n[1]]-t[n[1]];return Math.sqrt(i*i+r*r)}function G(t,e,n){n||(n=z);var i=e[n[0]]-t[n[0]],r=e[n[1]]-t[n[1]];return 180*Math.atan2(r,i)/Math.PI}X.prototype={handler:function(){},init:function(){this.evEl&&w(this.element,this.evEl,this.domHandler),this.evTarget&&w(this.target,this.evTarget,this.domHandler),this.evWin&&w(N(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&A(this.element,this.evEl,this.domHandler),this.evTarget&&A(this.target,this.evTarget,this.domHandler),this.evWin&&A(N(this.element),this.evWin,this.domHandler)}};var Z={mousedown:1,mousemove:2,mouseup:4},J="mousedown",$="mousemove mouseup";function Q(){this.evEl=J,this.evWin=$,this.pressed=!1,X.apply(this,arguments)}E(Q,X,{handler:function(t){var e=Z[t.type];1&e&&0===t.button&&(this.pressed=!0),2&e&&1!==t.which&&(e=4),this.pressed&&(4&e&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:F,srcEvent:t}))}});var tt={pointerdown:1,pointermove:2,pointerup:4,pointercancel:8,pointerout:8},et={2:Y,3:"pen",4:F,5:"kinect"},nt="pointerdown",it="pointermove pointerup pointercancel";function rt(){this.evEl=nt,this.evWin=it,X.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}r.MSPointerEvent&&!r.PointerEvent&&(nt="MSPointerDown",it="MSPointerMove MSPointerUp MSPointerCancel"),E(rt,X,{handler:function(t){var e=this.store,n=!1,i=t.type.toLowerCase().replace("ms",""),r=tt[i],o=et[t.pointerType]||t.pointerType,s=o==Y,a=O(e,t.pointerId,"pointerId");1&r&&(0===t.button||s)?a<0&&(e.push(t),a=e.length-1):12&r&&(n=!0),a<0||(e[a]=t,this.callback(this.manager,r,{pointers:e,changedPointers:[t],pointerType:o,srcEvent:t}),n&&e.splice(a,1))}});var ot={touchstart:1,touchmove:2,touchend:4,touchcancel:8},st="touchstart",at="touchstart touchmove touchend touchcancel";function ut(){this.evTarget=st,this.evWin=at,this.started=!1,X.apply(this,arguments)}function ct(t,e){var n=P(t.touches),i=P(t.changedTouches);return 12&e&&(n=_(n.concat(i),"identifier",!0)),[n,i]}E(ut,X,{handler:function(t){var e=ot[t.type];if(1===e&&(this.started=!0),this.started){var n=ct.call(this,t,e);12&e&&n[0].length-n[1].length==0&&(this.started=!1),this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:Y,srcEvent:t})}}});var lt={touchstart:1,touchmove:2,touchend:4,touchcancel:8},ht="touchstart touchmove touchend touchcancel";function ft(){this.evTarget=ht,this.targetIds={},X.apply(this,arguments)}function pt(t,e){var n=P(t.touches),i=this.targetIds;if(3&e&&1===n.length)return i[n[0].identifier]=!0,[n,n];var r,o,s=P(t.changedTouches),a=[],u=this.target;if(o=n.filter((function(t){return k(t.target,u)})),1===e)for(r=0;r<o.length;)i[o[r].identifier]=!0,r++;for(r=0;r<s.length;)i[s[r].identifier]&&a.push(s[r]),12&e&&delete i[s[r].identifier],r++;return a.length?[_(o.concat(a),"identifier",!0),a]:void 0}function dt(){X.apply(this,arguments);var t=b(this.handler,this);this.touch=new ft(this.manager,t),this.mouse=new Q(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function vt(t,e){1&t?(this.primaryTouch=e.changedPointers[0].identifier,mt.call(this,e)):12&t&&mt.call(this,e)}function mt(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var n={x:e.clientX,y:e.clientY};this.lastTouches.push(n);var i=this.lastTouches;setTimeout((function(){var t=i.indexOf(n);t>-1&&i.splice(t,1)}),2500)}}function yt(t){for(var e=t.srcEvent.clientX,n=t.srcEvent.clientY,i=0;i<this.lastTouches.length;i++){var r=this.lastTouches[i],o=Math.abs(e-r.x),s=Math.abs(n-r.y);if(o<=25&&s<=25)return!0}return!1}E(ft,X,{handler:function(t){var e=lt[t.type],n=pt.call(this,t,e);n&&this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:Y,srcEvent:t})}}),E(dt,X,{handler:function(t,e,n){var i=n.pointerType==Y,r=n.pointerType==F;if(!(r&&n.sourceCapabilities&&n.sourceCapabilities.firesTouchEvents)){if(i)vt.call(this,e,n);else if(r&&yt.call(this,n))return;this.callback(t,e,n)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var gt=R(l.style,"touchAction"),Tt=gt!==a,Et="compute",bt="auto",St="manipulation",xt="none",wt="pan-x",At="pan-y",kt=function(){if(!Tt)return!1;var t={},e=r.CSS&&r.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach((function(n){t[n]=!e||r.CSS.supports("touch-action",n)})),t}();function Ct(t,e){this.manager=t,this.set(e)}Ct.prototype={set:function(t){t==Et&&(t=this.compute()),Tt&&this.manager.element.style&&kt[t]&&(this.manager.element.style[gt]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return m(this.manager.recognizers,(function(e){S(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))})),function(t){if(C(t,xt))return xt;var e=C(t,wt),n=C(t,At);return e&&n?xt:e||n?e?wt:At:C(t,St)?St:bt}(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,n=t.offsetDirection;if(this.manager.session.prevented)e.preventDefault();else{var i=this.actions,r=C(i,xt)&&!kt.none,o=C(i,At)&&!kt["pan-y"],s=C(i,wt)&&!kt["pan-x"];if(r){var a=1===t.pointers.length,u=t.distance<2,c=t.deltaTime<250;if(a&&u&&c)return}if(!s||!o)return r||o&&6&n||s&&24&n?this.preventSrc(e):void 0}},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var It=32;function Ot(t){this.options=u({},this.defaults,t||{}),this.id=D++,this.manager=null,this.options.enable=x(this.options.enable,!0),this.state=1,this.simultaneous={},this.requireFail=[]}function Pt(t){return 16&t?"cancel":8&t?"end":4&t?"move":2&t?"start":""}function _t(t){return 16==t?"down":8==t?"up":2==t?"left":4==t?"right":""}function Rt(t,e){var n=e.manager;return n?n.get(t):t}function Dt(){Ot.apply(this,arguments)}function Nt(){Dt.apply(this,arguments),this.pX=null,this.pY=null}function Mt(){Dt.apply(this,arguments)}function Lt(){Ot.apply(this,arguments),this._timer=null,this._input=null}function jt(){Dt.apply(this,arguments)}function Yt(){Dt.apply(this,arguments)}function Ft(){Ot.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function zt(t,e){return(e=e||{}).recognizers=x(e.recognizers,zt.defaults.preset),new Ht(t,e)}function Ht(t,e){this.options=u({},zt.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=new(this.options.inputClass||(L?rt:j?ft:M?dt:Q))(this,U),this.touchAction=new Ct(this,this.options.touchAction),Xt(this,!0),m(this.options.recognizers,(function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])}),this)}function Xt(t,e){var n,i=t.element;i.style&&(m(t.options.cssProps,(function(r,o){n=R(i.style,o),e?(t.oldCssProps[n]=i.style[n],i.style[n]=r):i.style[n]=t.oldCssProps[n]||""})),e||(t.oldCssProps={}))}Ot.prototype={defaults:{},set:function(t){return u(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(v(t,"recognizeWith",this))return this;var e=this.simultaneous;return e[(t=Rt(t,this)).id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return v(t,"dropRecognizeWith",this)||(t=Rt(t,this),delete this.simultaneous[t.id]),this},requireFailure:function(t){if(v(t,"requireFailure",this))return this;var e=this.requireFail;return-1===O(e,t=Rt(t,this))&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(v(t,"dropRequireFailure",this))return this;t=Rt(t,this);var e=O(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){var e=this,n=this.state;function i(n){e.manager.emit(n,t)}n<8&&i(e.options.event+Pt(n)),i(e.options.event),t.additionalEvent&&i(t.additionalEvent),n>=8&&i(e.options.event+Pt(n))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=It},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(33&this.requireFail[t].state))return!1;t++}return!0},recognize:function(t){var e=u({},t);if(!S(this.options.enable,[this,e]))return this.reset(),void(this.state=It);56&this.state&&(this.state=1),this.state=this.process(e),30&this.state&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}},E(Dt,Ot,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,n=t.eventType,i=6&e,r=this.attrTest(t);return i&&(8&n||!r)?16|e:i||r?4&n?8|e:2&e?4|e:2:It}}),E(Nt,Dt,{defaults:{event:"pan",threshold:10,pointers:1,direction:30},getTouchAction:function(){var t=this.options.direction,e=[];return 6&t&&e.push(At),24&t&&e.push(wt),e},directionTest:function(t){var e=this.options,n=!0,i=t.distance,r=t.direction,o=t.deltaX,s=t.deltaY;return r&e.direction||(6&e.direction?(r=0===o?1:o<0?2:4,n=o!=this.pX,i=Math.abs(t.deltaX)):(r=0===s?1:s<0?8:16,n=s!=this.pY,i=Math.abs(t.deltaY))),t.direction=r,n&&i>e.threshold&&r&e.direction},attrTest:function(t){return Dt.prototype.attrTest.call(this,t)&&(2&this.state||!(2&this.state)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=_t(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),E(Mt,Dt,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[xt]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||2&this.state)},emit:function(t){if(1!==t.scale){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}}),E(Lt,Ot,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[bt]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,r=t.deltaTime>e.time;if(this._input=t,!i||!n||12&t.eventType&&!r)this.reset();else if(1&t.eventType)this.reset(),this._timer=d((function(){this.state=8,this.tryEmit()}),e.time,this);else if(4&t.eventType)return 8;return It},reset:function(){clearTimeout(this._timer)},emit:function(t){8===this.state&&(t&&4&t.eventType?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=p(),this.manager.emit(this.options.event,this._input)))}}),E(jt,Dt,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[xt]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||2&this.state)}}),E(Yt,Dt,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:30,pointers:1},getTouchAction:function(){return Nt.prototype.getTouchAction.call(this)},attrTest:function(t){var e,n=this.options.direction;return 30&n?e=t.overallVelocity:6&n?e=t.overallVelocityX:24&n&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&n&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&f(e)>this.options.velocity&&4&t.eventType},emit:function(t){var e=_t(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),E(Ft,Ot,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[St]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,r=t.deltaTime<e.time;if(this.reset(),1&t.eventType&&0===this.count)return this.failTimeout();if(i&&r&&n){if(4!=t.eventType)return this.failTimeout();var o=!this.pTime||t.timeStamp-this.pTime<e.interval,s=!this.pCenter||K(this.pCenter,t.center)<e.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,s&&o?this.count+=1:this.count=1,this._input=t,0==this.count%e.taps)return this.hasRequireFailures()?(this._timer=d((function(){this.state=8,this.tryEmit()}),e.interval,this),2):8}return It},failTimeout:function(){return this._timer=d((function(){this.state=It}),this.options.interval,this),It},reset:function(){clearTimeout(this._timer)},emit:function(){8==this.state&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),zt.VERSION="2.0.7",zt.defaults={domEvents:!1,touchAction:Et,enable:!0,inputTarget:null,inputClass:null,preset:[[jt,{enable:!1}],[Mt,{enable:!1},["rotate"]],[Yt,{direction:6}],[Nt,{direction:6},["swipe"]],[Ft],[Ft,{event:"doubletap",taps:2},["tap"]],[Lt]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},Ht.prototype={set:function(t){return u(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var e=this.session;if(!e.stopped){var n;this.touchAction.preventDefaults(t);var i=this.recognizers,r=e.curRecognizer;(!r||r&&8&r.state)&&(r=e.curRecognizer=null);for(var o=0;o<i.length;)n=i[o],2===e.stopped||r&&n!=r&&!n.canRecognizeWith(r)?n.reset():n.recognize(t),!r&&14&n.state&&(r=e.curRecognizer=n),o++}},get:function(t){if(t instanceof Ot)return t;for(var e=this.recognizers,n=0;n<e.length;n++)if(e[n].options.event==t)return e[n];return null},add:function(t){if(v(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(v(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,n=O(e,t);-1!==n&&(e.splice(n,1),this.touchAction.update())}return this},on:function(t,e){if(t!==a&&e!==a){var n=this.handlers;return m(I(t),(function(t){n[t]=n[t]||[],n[t].push(e)})),this}},off:function(t,e){if(t!==a){var n=this.handlers;return m(I(t),(function(t){e?n[t]&&n[t].splice(O(n[t],e),1):delete n[t]})),this}},emit:function(t,e){this.options.domEvents&&function(t,e){var n=o.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e,e.target.dispatchEvent(n)}(t,e);var n=this.handlers[t]&&this.handlers[t].slice();if(n&&n.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var i=0;i<n.length;)n[i](e),i++}},destroy:function(){this.element&&Xt(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},u(zt,{INPUT_START:1,INPUT_MOVE:2,INPUT_END:4,INPUT_CANCEL:8,STATE_POSSIBLE:1,STATE_BEGAN:2,STATE_CHANGED:4,STATE_ENDED:8,STATE_RECOGNIZED:8,STATE_CANCELLED:16,STATE_FAILED:It,DIRECTION_NONE:1,DIRECTION_LEFT:2,DIRECTION_RIGHT:4,DIRECTION_UP:8,DIRECTION_DOWN:16,DIRECTION_HORIZONTAL:6,DIRECTION_VERTICAL:24,DIRECTION_ALL:30,Manager:Ht,Input:X,TouchAction:Ct,TouchInput:ft,MouseInput:Q,PointerEventInput:rt,TouchMouseInput:dt,SingleTouchInput:ut,Recognizer:Ot,AttrRecognizer:Dt,Tap:Ft,Pan:Nt,Swipe:Yt,Pinch:Mt,Rotate:jt,Press:Lt,on:w,off:A,each:m,merge:T,extend:g,assign:u,inherit:E,bindFn:b,prefixed:R}),(void 0!==r?r:"undefined"!=typeof self?self:{}).Hammer=zt,(i=function(){return zt}.call(e,n,e,t))===a||(t.exports=i)}(window,document)},808:(t,e,n)=>{var i,r,o;void 0===(r="function"==typeof(i=o=function(){function t(){for(var t=0,e={};t<arguments.length;t++){var n=arguments[t];for(var i in n)e[i]=n[i]}return e}function e(t){return t.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(i){function r(){}function o(e,n,o){if("undefined"!=typeof document){"number"==typeof(o=t({path:"/"},r.defaults,o)).expires&&(o.expires=new Date(1*new Date+864e5*o.expires)),o.expires=o.expires?o.expires.toUTCString():"";try{var s=JSON.stringify(n);/^[\{\[]/.test(s)&&(n=s)}catch(t){}n=i.write?i.write(n,e):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var a="";for(var u in o)o[u]&&(a+="; "+u,!0!==o[u]&&(a+="="+o[u].split(";")[0]));return document.cookie=e+"="+n+a}}function s(t,n){if("undefined"!=typeof document){for(var r={},o=document.cookie?document.cookie.split("; "):[],s=0;s<o.length;s++){var a=o[s].split("="),u=a.slice(1).join("=");n||'"'!==u.charAt(0)||(u=u.slice(1,-1));try{var c=e(a[0]);if(u=(i.read||i)(u,c)||e(u),n)try{u=JSON.parse(u)}catch(t){}if(r[c]=u,t===c)break}catch(t){}}return t?r[t]:r}}return r.set=o,r.get=function(t){return s(t,!1)},r.getJSON=function(t){return s(t,!0)},r.remove=function(e,n){o(e,"",t(n,{expires:-1}))},r.defaults={},r.withConverter=n,r}((function(){}))})?i.call(e,n,e,t):i)||(t.exports=r),t.exports=o()},203:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});const i=window.crypto||window.msCrypto,r={name:"RSA-OAEP",hash:{name:"SHA-1"}};class o{arrayBufferToBase64String(t){var e=new Uint8Array(t),n="";for(let t=0;t<e.byteLength;t++)n+=String.fromCharCode(e[t]);return btoa(n)}base64StringToArrayBuffer(t){var e=atob(t),n=new Uint8Array(e.length);for(let t=0;t<e.length;t++)n[t]=e.charCodeAt(t);return n.buffer}textToArrayBuffer(t){var e=unescape(encodeURIComponent(t)),n=new Uint8Array(e.length);for(let t=0;t<e.length;t++)n[t]=e.charCodeAt(t);return n}convertPemToBinary(t){var e=t.split("\n"),n="";for(let t=0;t<e.length;t++)e[t].trim().length>0&&e[t].indexOf("-BEGIN RSA PRIVATE KEY-")<0&&e[t].indexOf("-BEGIN RSA PUBLIC KEY-")<0&&e[t].indexOf("-BEGIN PUBLIC KEY-")<0&&e[t].indexOf("-END PUBLIC KEY-")<0&&e[t].indexOf("-END RSA PRIVATE KEY-")<0&&e[t].indexOf("-END RSA PUBLIC KEY-")<0&&(n+=e[t].trim());return this.base64StringToArrayBuffer(n)}importPublicKey(t){return new Promise((e=>{i.subtle.importKey("spki",this.convertPemToBinary(t),r,!1,["encrypt"]).then((t=>{e(t)}))}))}encrypt(t,e){return new Promise((n=>{this.importPublicKey(t).then((t=>{i.subtle.encrypt(r,t,this.textToArrayBuffer(e)).then((t=>{let e=this.arrayBufferToBase64String(t);n(e)}))}))}))}}},138:(t,e,n)=>{window.CryptoTools=n(203).Z,window.Cookies=n(808),window.ClipboardJS=n(152),window.Hammer=n(840)}},e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}return n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n(138)})();