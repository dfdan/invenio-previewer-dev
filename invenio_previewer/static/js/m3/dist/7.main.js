(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1182:function(e,t,n){"use strict";n.r(t);var r=n(16),o=n(11),i=n(1077),c=n(5),a=n(18),u=n(0),s=n.n(u);function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v(e);if(t){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return b(this,n)}}function b(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(i,e);var t,n,r,o=d(i);function i(){return f(this,i),o.apply(this,arguments)}return t=i,(n=[{key:"render",value:function(){var e=this.props,t=e.captions,n=e.classes,r=e.videoOptions,o=e.videoResources;return s.a.createElement("div",{className:n.container},s.a.createElement("video",Object.assign({className:n.video},r),o.map((function(e){return s.a.createElement(u.Fragment,{key:e.id},s.a.createElement("source",{src:e.id,type:e.getFormat()}))})),t.map((function(e){return s.a.createElement(u.Fragment,{key:e.id},s.a.createElement("track",{src:e.id,label:e.getDefaultLabel(),srcLang:e.getProperty("language")}))}))))}}])&&l(t.prototype,n),r&&l(t,r),i}(u.Component);y.defaultProps={captions:[],videoOptions:{},videoResources:[]};var w=n(44),O=n(87),m=Object(o.compose)(Object(i.a)(),Object(c.a)((function(){return{container:{alignItems:"center",display:"flex",width:"100%"},video:{maxHeight:"100%",width:"100%"}}})),Object(r.b)((function(e,t){var n=t.windowId;return{captions:Object(w.getVisibleCanvasCaptions)(e,{windowId:n})||[],videoOptions:Object(O.a)(e).videoOptions,videoResources:Object(w.getVisibleCanvasVideoResources)(e,{windowId:n})||[]}}),null),Object(a.a)("VideoViewer"));t.default=m(y)}}]);