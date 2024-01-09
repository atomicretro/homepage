var vp=Object.defineProperty;var xp=(e,t,n)=>t in e?vp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Da=(e,t,n)=>(xp(e,typeof t!="symbol"?t+"":t,n),n);function wp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function kp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var gc={exports:{}},Pi={},yc={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qr=Symbol.for("react.element"),Sp=Symbol.for("react.portal"),Cp=Symbol.for("react.fragment"),Ep=Symbol.for("react.strict_mode"),jp=Symbol.for("react.profiler"),Pp=Symbol.for("react.provider"),_p=Symbol.for("react.context"),Np=Symbol.for("react.forward_ref"),$p=Symbol.for("react.suspense"),Ip=Symbol.for("react.memo"),zp=Symbol.for("react.lazy"),Aa=Symbol.iterator;function Rp(e){return e===null||typeof e!="object"?null:(e=Aa&&e[Aa]||e["@@iterator"],typeof e=="function"?e:null)}var vc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xc=Object.assign,wc={};function nr(e,t,n){this.props=e,this.context=t,this.refs=wc,this.updater=n||vc}nr.prototype.isReactComponent={};nr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};nr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function kc(){}kc.prototype=nr.prototype;function Rs(e,t,n){this.props=e,this.context=t,this.refs=wc,this.updater=n||vc}var Ts=Rs.prototype=new kc;Ts.constructor=Rs;xc(Ts,nr.prototype);Ts.isPureReactComponent=!0;var Ua=Array.isArray,Sc=Object.prototype.hasOwnProperty,Ls={current:null},Cc={key:!0,ref:!0,__self:!0,__source:!0};function Ec(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Sc.call(t,r)&&!Cc.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:qr,type:e,key:i,ref:l,props:o,_owner:Ls.current}}function Tp(e,t){return{$$typeof:qr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Os(e){return typeof e=="object"&&e!==null&&e.$$typeof===qr}function Lp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ba=/\/+/g;function qi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Lp(""+e.key):t.toString(36)}function Ro(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case qr:case Sp:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+qi(l,0):r,Ua(o)?(n="",e!=null&&(n=e.replace(Ba,"$&/")+"/"),Ro(o,t,n,"",function(u){return u})):o!=null&&(Os(o)&&(o=Tp(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Ba,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Ua(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+qi(i,s);l+=Ro(i,t,n,a,o)}else if(a=Rp(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+qi(i,s++),l+=Ro(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function uo(e,t,n){if(e==null)return e;var r=[],o=0;return Ro(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Op(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ve={current:null},To={transition:null},Mp={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:To,ReactCurrentOwner:Ls};L.Children={map:uo,forEach:function(e,t,n){uo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return uo(e,function(){t++}),t},toArray:function(e){return uo(e,function(t){return t})||[]},only:function(e){if(!Os(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=nr;L.Fragment=Cp;L.Profiler=jp;L.PureComponent=Rs;L.StrictMode=Ep;L.Suspense=$p;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mp;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=xc({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Ls.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Sc.call(t,a)&&!Cc.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:qr,type:e.type,key:o,ref:i,props:r,_owner:l}};L.createContext=function(e){return e={$$typeof:_p,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Pp,_context:e},e.Consumer=e};L.createElement=Ec;L.createFactory=function(e){var t=Ec.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:Np,render:e}};L.isValidElement=Os;L.lazy=function(e){return{$$typeof:zp,_payload:{_status:-1,_result:e},_init:Op}};L.memo=function(e,t){return{$$typeof:Ip,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=To.transition;To.transition={};try{e()}finally{To.transition=t}};L.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};L.useCallback=function(e,t){return ve.current.useCallback(e,t)};L.useContext=function(e){return ve.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return ve.current.useDeferredValue(e)};L.useEffect=function(e,t){return ve.current.useEffect(e,t)};L.useId=function(){return ve.current.useId()};L.useImperativeHandle=function(e,t,n){return ve.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return ve.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return ve.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return ve.current.useMemo(e,t)};L.useReducer=function(e,t,n){return ve.current.useReducer(e,t,n)};L.useRef=function(e){return ve.current.useRef(e)};L.useState=function(e){return ve.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return ve.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return ve.current.useTransition()};L.version="18.2.0";yc.exports=L;var N=yc.exports;const M=kp(N),Fp=wp({__proto__:null,default:M},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp=N,Ap=Symbol.for("react.element"),Up=Symbol.for("react.fragment"),Bp=Object.prototype.hasOwnProperty,Wp=Dp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Hp={key:!0,ref:!0,__self:!0,__source:!0};function jc(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Bp.call(t,r)&&!Hp.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Ap,type:e,key:i,ref:l,props:o,_owner:Wp.current}}Pi.Fragment=Up;Pi.jsx=jc;Pi.jsxs=jc;gc.exports=Pi;var c=gc.exports,Pc={exports:{}},Le={},_c={exports:{}},Nc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,I){var z=P.length;P.push(I);e:for(;0<z;){var U=z-1>>>1,B=P[U];if(0<o(B,I))P[U]=I,P[z]=B,z=U;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var I=P[0],z=P.pop();if(z!==I){P[0]=z;e:for(var U=0,B=P.length,Zt=B>>>1;U<Zt;){var Qe=2*(U+1)-1,wt=P[Qe],_e=Qe+1,at=P[_e];if(0>o(wt,z))_e<B&&0>o(at,wt)?(P[U]=at,P[_e]=z,U=_e):(P[U]=wt,P[Qe]=z,U=Qe);else if(_e<B&&0>o(at,z))P[U]=at,P[_e]=z,U=_e;else break e}}return I}function o(P,I){var z=P.sortIndex-I.sortIndex;return z!==0?z:P.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],u=[],f=1,m=null,g=3,v=!1,x=!1,w=!1,j=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(P){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=P)r(u),I.sortIndex=I.expirationTime,t(a,I);else break;I=n(u)}}function y(P){if(w=!1,h(P),!x)if(n(a)!==null)x=!0,lr(C);else{var I=n(u);I!==null&&Jt(y,I.startTime-P)}}function C(P,I){x=!1,w&&(w=!1,p($),$=-1),v=!0;var z=g;try{for(h(I),m=n(a);m!==null&&(!(m.expirationTime>I)||P&&!Pe());){var U=m.callback;if(typeof U=="function"){m.callback=null,g=m.priorityLevel;var B=U(m.expirationTime<=I);I=e.unstable_now(),typeof B=="function"?m.callback=B:m===n(a)&&r(a),h(I)}else r(a);m=n(a)}if(m!==null)var Zt=!0;else{var Qe=n(u);Qe!==null&&Jt(y,Qe.startTime-I),Zt=!1}return Zt}finally{m=null,g=z,v=!1}}var E=!1,k=null,$=-1,W=5,T=-1;function Pe(){return!(e.unstable_now()-T<W)}function Yt(){if(k!==null){var P=e.unstable_now();T=P;var I=!0;try{I=k(!0,P)}finally{I?Xt():(E=!1,k=null)}}else E=!1}var Xt;if(typeof d=="function")Xt=function(){d(Yt)};else if(typeof MessageChannel<"u"){var so=new MessageChannel,Ji=so.port2;so.port1.onmessage=Yt,Xt=function(){Ji.postMessage(null)}}else Xt=function(){j(Yt,0)};function lr(P){k=P,E||(E=!0,Xt())}function Jt(P,I){$=j(function(){P(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){x||v||(x=!0,lr(C))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(P){switch(g){case 1:case 2:case 3:var I=3;break;default:I=g}var z=g;g=I;try{return P()}finally{g=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,I){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var z=g;g=P;try{return I()}finally{g=z}},e.unstable_scheduleCallback=function(P,I,z){var U=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?U+z:U):z=U,P){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=z+B,P={id:f++,callback:I,priorityLevel:P,startTime:z,expirationTime:B,sortIndex:-1},z>U?(P.sortIndex=z,t(u,P),n(a)===null&&P===n(u)&&(w?(p($),$=-1):w=!0,Jt(y,z-U))):(P.sortIndex=B,t(a,P),x||v||(x=!0,lr(C))),P},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(P){var I=g;return function(){var z=g;g=I;try{return P.apply(this,arguments)}finally{g=z}}}})(Nc);_c.exports=Nc;var Vp=_c.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $c=N,Te=Vp;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ic=new Set,Rr={};function hn(e,t){Hn(e,t),Hn(e+"Capture",t)}function Hn(e,t){for(Rr[e]=t,e=0;e<t.length;e++)Ic.add(t[e])}var mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$l=Object.prototype.hasOwnProperty,Qp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wa={},Ha={};function Kp(e){return $l.call(Ha,e)?!0:$l.call(Wa,e)?!1:Qp.test(e)?Ha[e]=!0:(Wa[e]=!0,!1)}function Gp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Yp(e,t,n,r){if(t===null||typeof t>"u"||Gp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xe(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ce[t]=new xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ms=/[\-:]([a-z])/g;function Fs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ms,Fs);ce[t]=new xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ms,Fs);ce[t]=new xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ms,Fs);ce[t]=new xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ds(e,t,n,r){var o=ce.hasOwnProperty(t)?ce[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Yp(t,n,o,r)&&(n=null),r||o===null?Kp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var xt=$c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,co=Symbol.for("react.element"),En=Symbol.for("react.portal"),jn=Symbol.for("react.fragment"),As=Symbol.for("react.strict_mode"),Il=Symbol.for("react.profiler"),zc=Symbol.for("react.provider"),Rc=Symbol.for("react.context"),Us=Symbol.for("react.forward_ref"),zl=Symbol.for("react.suspense"),Rl=Symbol.for("react.suspense_list"),Bs=Symbol.for("react.memo"),jt=Symbol.for("react.lazy"),Tc=Symbol.for("react.offscreen"),Va=Symbol.iterator;function ar(e){return e===null||typeof e!="object"?null:(e=Va&&e[Va]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,bi;function gr(e){if(bi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);bi=t&&t[1]||""}return`
`+bi+e}var el=!1;function tl(e,t){if(!e||el)return"";el=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{el=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?gr(e):""}function Xp(e){switch(e.tag){case 5:return gr(e.type);case 16:return gr("Lazy");case 13:return gr("Suspense");case 19:return gr("SuspenseList");case 0:case 2:case 15:return e=tl(e.type,!1),e;case 11:return e=tl(e.type.render,!1),e;case 1:return e=tl(e.type,!0),e;default:return""}}function Tl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case jn:return"Fragment";case En:return"Portal";case Il:return"Profiler";case As:return"StrictMode";case zl:return"Suspense";case Rl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Rc:return(e.displayName||"Context")+".Consumer";case zc:return(e._context.displayName||"Context")+".Provider";case Us:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Bs:return t=e.displayName||null,t!==null?t:Tl(e.type)||"Memo";case jt:t=e._payload,e=e._init;try{return Tl(e(t))}catch{}}return null}function Jp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tl(t);case 8:return t===As?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ht(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Lc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zp(e){var t=Lc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fo(e){e._valueTracker||(e._valueTracker=Zp(e))}function Oc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Lc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Jo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ll(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Qa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ht(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Mc(e,t){t=t.checked,t!=null&&Ds(e,"checked",t,!1)}function Ol(e,t){Mc(e,t);var n=Ht(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ml(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ml(e,t.type,Ht(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ka(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ml(e,t,n){(t!=="number"||Jo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var yr=Array.isArray;function Fn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ht(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Fl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ga(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(yr(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ht(n)}}function Fc(e,t){var n=Ht(t.value),r=Ht(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ya(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Dc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Dl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Dc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var po,Ac=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(po=po||document.createElement("div"),po.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=po.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Tr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qp=["Webkit","ms","Moz","O"];Object.keys(kr).forEach(function(e){qp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),kr[t]=kr[e]})});function Uc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||kr.hasOwnProperty(e)&&kr[e]?(""+t).trim():t+"px"}function Bc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Uc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var bp=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Al(e,t){if(t){if(bp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Ul(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bl=null;function Ws(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wl=null,Dn=null,An=null;function Xa(e){if(e=to(e)){if(typeof Wl!="function")throw Error(S(280));var t=e.stateNode;t&&(t=zi(t),Wl(e.stateNode,e.type,t))}}function Wc(e){Dn?An?An.push(e):An=[e]:Dn=e}function Hc(){if(Dn){var e=Dn,t=An;if(An=Dn=null,Xa(e),t)for(e=0;e<t.length;e++)Xa(t[e])}}function Vc(e,t){return e(t)}function Qc(){}var nl=!1;function Kc(e,t,n){if(nl)return e(t,n);nl=!0;try{return Vc(e,t,n)}finally{nl=!1,(Dn!==null||An!==null)&&(Qc(),Hc())}}function Lr(e,t){var n=e.stateNode;if(n===null)return null;var r=zi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Hl=!1;if(mt)try{var ur={};Object.defineProperty(ur,"passive",{get:function(){Hl=!0}}),window.addEventListener("test",ur,ur),window.removeEventListener("test",ur,ur)}catch{Hl=!1}function eh(e,t,n,r,o,i,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Sr=!1,Zo=null,qo=!1,Vl=null,th={onError:function(e){Sr=!0,Zo=e}};function nh(e,t,n,r,o,i,l,s,a){Sr=!1,Zo=null,eh.apply(th,arguments)}function rh(e,t,n,r,o,i,l,s,a){if(nh.apply(this,arguments),Sr){if(Sr){var u=Zo;Sr=!1,Zo=null}else throw Error(S(198));qo||(qo=!0,Vl=u)}}function mn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Gc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ja(e){if(mn(e)!==e)throw Error(S(188))}function oh(e){var t=e.alternate;if(!t){if(t=mn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Ja(o),e;if(i===r)return Ja(o),t;i=i.sibling}throw Error(S(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Yc(e){return e=oh(e),e!==null?Xc(e):null}function Xc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Xc(e);if(t!==null)return t;e=e.sibling}return null}var Jc=Te.unstable_scheduleCallback,Za=Te.unstable_cancelCallback,ih=Te.unstable_shouldYield,lh=Te.unstable_requestPaint,q=Te.unstable_now,sh=Te.unstable_getCurrentPriorityLevel,Hs=Te.unstable_ImmediatePriority,Zc=Te.unstable_UserBlockingPriority,bo=Te.unstable_NormalPriority,ah=Te.unstable_LowPriority,qc=Te.unstable_IdlePriority,_i=null,lt=null;function uh(e){if(lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(_i,e,void 0,(e.current.flags&128)===128)}catch{}}var Je=Math.clz32?Math.clz32:fh,ch=Math.log,dh=Math.LN2;function fh(e){return e>>>=0,e===0?32:31-(ch(e)/dh|0)|0}var ho=64,mo=4194304;function vr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ei(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=vr(s):(i&=l,i!==0&&(r=vr(i)))}else l=n&~o,l!==0?r=vr(l):i!==0&&(r=vr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Je(t),o=1<<n,r|=e[n],t&=~o;return r}function ph(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Je(i),s=1<<l,a=o[l];a===-1?(!(s&n)||s&r)&&(o[l]=ph(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function Ql(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function bc(){var e=ho;return ho<<=1,!(ho&4194240)&&(ho=64),e}function rl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function br(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Je(t),e[t]=n}function mh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Je(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Vs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var A=0;function ed(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var td,Qs,nd,rd,od,Kl=!1,go=[],Rt=null,Tt=null,Lt=null,Or=new Map,Mr=new Map,_t=[],gh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qa(e,t){switch(e){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":Tt=null;break;case"mouseover":case"mouseout":Lt=null;break;case"pointerover":case"pointerout":Or.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mr.delete(t.pointerId)}}function cr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=to(t),t!==null&&Qs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function yh(e,t,n,r,o){switch(t){case"focusin":return Rt=cr(Rt,e,t,n,r,o),!0;case"dragenter":return Tt=cr(Tt,e,t,n,r,o),!0;case"mouseover":return Lt=cr(Lt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Or.set(i,cr(Or.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Mr.set(i,cr(Mr.get(i)||null,e,t,n,r,o)),!0}return!1}function id(e){var t=tn(e.target);if(t!==null){var n=mn(t);if(n!==null){if(t=n.tag,t===13){if(t=Gc(n),t!==null){e.blockedOn=t,od(e.priority,function(){nd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Bl=r,n.target.dispatchEvent(r),Bl=null}else return t=to(n),t!==null&&Qs(t),e.blockedOn=n,!1;t.shift()}return!0}function ba(e,t,n){Lo(e)&&n.delete(t)}function vh(){Kl=!1,Rt!==null&&Lo(Rt)&&(Rt=null),Tt!==null&&Lo(Tt)&&(Tt=null),Lt!==null&&Lo(Lt)&&(Lt=null),Or.forEach(ba),Mr.forEach(ba)}function dr(e,t){e.blockedOn===t&&(e.blockedOn=null,Kl||(Kl=!0,Te.unstable_scheduleCallback(Te.unstable_NormalPriority,vh)))}function Fr(e){function t(o){return dr(o,e)}if(0<go.length){dr(go[0],e);for(var n=1;n<go.length;n++){var r=go[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Rt!==null&&dr(Rt,e),Tt!==null&&dr(Tt,e),Lt!==null&&dr(Lt,e),Or.forEach(t),Mr.forEach(t),n=0;n<_t.length;n++)r=_t[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<_t.length&&(n=_t[0],n.blockedOn===null);)id(n),n.blockedOn===null&&_t.shift()}var Un=xt.ReactCurrentBatchConfig,ti=!0;function xh(e,t,n,r){var o=A,i=Un.transition;Un.transition=null;try{A=1,Ks(e,t,n,r)}finally{A=o,Un.transition=i}}function wh(e,t,n,r){var o=A,i=Un.transition;Un.transition=null;try{A=4,Ks(e,t,n,r)}finally{A=o,Un.transition=i}}function Ks(e,t,n,r){if(ti){var o=Gl(e,t,n,r);if(o===null)pl(e,t,r,ni,n),qa(e,r);else if(yh(o,e,t,n,r))r.stopPropagation();else if(qa(e,r),t&4&&-1<gh.indexOf(e)){for(;o!==null;){var i=to(o);if(i!==null&&td(i),i=Gl(e,t,n,r),i===null&&pl(e,t,r,ni,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else pl(e,t,r,null,n)}}var ni=null;function Gl(e,t,n,r){if(ni=null,e=Ws(r),e=tn(e),e!==null)if(t=mn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Gc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ni=e,null}function ld(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sh()){case Hs:return 1;case Zc:return 4;case bo:case ah:return 16;case qc:return 536870912;default:return 16}default:return 16}}var $t=null,Gs=null,Oo=null;function sd(){if(Oo)return Oo;var e,t=Gs,n=t.length,r,o="value"in $t?$t.value:$t.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Oo=o.slice(e,1<r?1-r:void 0)}function Mo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function yo(){return!0}function eu(){return!1}function Oe(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?yo:eu,this.isPropagationStopped=eu,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=yo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=yo)},persist:function(){},isPersistent:yo}),t}var rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ys=Oe(rr),eo=J({},rr,{view:0,detail:0}),kh=Oe(eo),ol,il,fr,Ni=J({},eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fr&&(fr&&e.type==="mousemove"?(ol=e.screenX-fr.screenX,il=e.screenY-fr.screenY):il=ol=0,fr=e),ol)},movementY:function(e){return"movementY"in e?e.movementY:il}}),tu=Oe(Ni),Sh=J({},Ni,{dataTransfer:0}),Ch=Oe(Sh),Eh=J({},eo,{relatedTarget:0}),ll=Oe(Eh),jh=J({},rr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ph=Oe(jh),_h=J({},rr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Nh=Oe(_h),$h=J({},rr,{data:0}),nu=Oe($h),Ih={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Th(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Rh[e])?!!t[e]:!1}function Xs(){return Th}var Lh=J({},eo,{key:function(e){if(e.key){var t=Ih[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Mo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xs,charCode:function(e){return e.type==="keypress"?Mo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Oh=Oe(Lh),Mh=J({},Ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ru=Oe(Mh),Fh=J({},eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xs}),Dh=Oe(Fh),Ah=J({},rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Uh=Oe(Ah),Bh=J({},Ni,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wh=Oe(Bh),Hh=[9,13,27,32],Js=mt&&"CompositionEvent"in window,Cr=null;mt&&"documentMode"in document&&(Cr=document.documentMode);var Vh=mt&&"TextEvent"in window&&!Cr,ad=mt&&(!Js||Cr&&8<Cr&&11>=Cr),ou=" ",iu=!1;function ud(e,t){switch(e){case"keyup":return Hh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pn=!1;function Qh(e,t){switch(e){case"compositionend":return cd(t);case"keypress":return t.which!==32?null:(iu=!0,ou);case"textInput":return e=t.data,e===ou&&iu?null:e;default:return null}}function Kh(e,t){if(Pn)return e==="compositionend"||!Js&&ud(e,t)?(e=sd(),Oo=Gs=$t=null,Pn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ad&&t.locale!=="ko"?null:t.data;default:return null}}var Gh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Gh[e.type]:t==="textarea"}function dd(e,t,n,r){Wc(r),t=ri(t,"onChange"),0<t.length&&(n=new Ys("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Er=null,Dr=null;function Yh(e){Sd(e,0)}function $i(e){var t=$n(e);if(Oc(t))return e}function Xh(e,t){if(e==="change")return t}var fd=!1;if(mt){var sl;if(mt){var al="oninput"in document;if(!al){var su=document.createElement("div");su.setAttribute("oninput","return;"),al=typeof su.oninput=="function"}sl=al}else sl=!1;fd=sl&&(!document.documentMode||9<document.documentMode)}function au(){Er&&(Er.detachEvent("onpropertychange",pd),Dr=Er=null)}function pd(e){if(e.propertyName==="value"&&$i(Dr)){var t=[];dd(t,Dr,e,Ws(e)),Kc(Yh,t)}}function Jh(e,t,n){e==="focusin"?(au(),Er=t,Dr=n,Er.attachEvent("onpropertychange",pd)):e==="focusout"&&au()}function Zh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $i(Dr)}function qh(e,t){if(e==="click")return $i(t)}function bh(e,t){if(e==="input"||e==="change")return $i(t)}function em(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var be=typeof Object.is=="function"?Object.is:em;function Ar(e,t){if(be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!$l.call(t,o)||!be(e[o],t[o]))return!1}return!0}function uu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cu(e,t){var n=uu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=uu(n)}}function hd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?hd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function md(){for(var e=window,t=Jo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Jo(e.document)}return t}function Zs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function tm(e){var t=md(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&hd(n.ownerDocument.documentElement,n)){if(r!==null&&Zs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=cu(n,i);var l=cu(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var nm=mt&&"documentMode"in document&&11>=document.documentMode,_n=null,Yl=null,jr=null,Xl=!1;function du(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xl||_n==null||_n!==Jo(r)||(r=_n,"selectionStart"in r&&Zs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jr&&Ar(jr,r)||(jr=r,r=ri(Yl,"onSelect"),0<r.length&&(t=new Ys("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=_n)))}function vo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Nn={animationend:vo("Animation","AnimationEnd"),animationiteration:vo("Animation","AnimationIteration"),animationstart:vo("Animation","AnimationStart"),transitionend:vo("Transition","TransitionEnd")},ul={},gd={};mt&&(gd=document.createElement("div").style,"AnimationEvent"in window||(delete Nn.animationend.animation,delete Nn.animationiteration.animation,delete Nn.animationstart.animation),"TransitionEvent"in window||delete Nn.transitionend.transition);function Ii(e){if(ul[e])return ul[e];if(!Nn[e])return e;var t=Nn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in gd)return ul[e]=t[n];return e}var yd=Ii("animationend"),vd=Ii("animationiteration"),xd=Ii("animationstart"),wd=Ii("transitionend"),kd=new Map,fu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qt(e,t){kd.set(e,t),hn(t,[e])}for(var cl=0;cl<fu.length;cl++){var dl=fu[cl],rm=dl.toLowerCase(),om=dl[0].toUpperCase()+dl.slice(1);Qt(rm,"on"+om)}Qt(yd,"onAnimationEnd");Qt(vd,"onAnimationIteration");Qt(xd,"onAnimationStart");Qt("dblclick","onDoubleClick");Qt("focusin","onFocus");Qt("focusout","onBlur");Qt(wd,"onTransitionEnd");Hn("onMouseEnter",["mouseout","mouseover"]);Hn("onMouseLeave",["mouseout","mouseover"]);Hn("onPointerEnter",["pointerout","pointerover"]);Hn("onPointerLeave",["pointerout","pointerover"]);hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),im=new Set("cancel close invalid load scroll toggle".split(" ").concat(xr));function pu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,rh(r,t,void 0,e),e.currentTarget=null}function Sd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;pu(o,s,u),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;pu(o,s,u),i=a}}}if(qo)throw e=Vl,qo=!1,Vl=null,e}function V(e,t){var n=t[es];n===void 0&&(n=t[es]=new Set);var r=e+"__bubble";n.has(r)||(Cd(t,e,2,!1),n.add(r))}function fl(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xo="_reactListening"+Math.random().toString(36).slice(2);function Ur(e){if(!e[xo]){e[xo]=!0,Ic.forEach(function(n){n!=="selectionchange"&&(im.has(n)||fl(n,!1,e),fl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xo]||(t[xo]=!0,fl("selectionchange",!1,t))}}function Cd(e,t,n,r){switch(ld(t)){case 1:var o=xh;break;case 4:o=wh;break;default:o=Ks}n=o.bind(null,t,n,e),o=void 0,!Hl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function pl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=tn(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}Kc(function(){var u=i,f=Ws(n),m=[];e:{var g=kd.get(e);if(g!==void 0){var v=Ys,x=e;switch(e){case"keypress":if(Mo(n)===0)break e;case"keydown":case"keyup":v=Oh;break;case"focusin":x="focus",v=ll;break;case"focusout":x="blur",v=ll;break;case"beforeblur":case"afterblur":v=ll;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=tu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Ch;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Dh;break;case yd:case vd:case xd:v=Ph;break;case wd:v=Uh;break;case"scroll":v=kh;break;case"wheel":v=Wh;break;case"copy":case"cut":case"paste":v=Nh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=ru}var w=(t&4)!==0,j=!w&&e==="scroll",p=w?g!==null?g+"Capture":null:g;w=[];for(var d=u,h;d!==null;){h=d;var y=h.stateNode;if(h.tag===5&&y!==null&&(h=y,p!==null&&(y=Lr(d,p),y!=null&&w.push(Br(d,y,h)))),j)break;d=d.return}0<w.length&&(g=new v(g,x,null,n,f),m.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&n!==Bl&&(x=n.relatedTarget||n.fromElement)&&(tn(x)||x[gt]))break e;if((v||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,v?(x=n.relatedTarget||n.toElement,v=u,x=x?tn(x):null,x!==null&&(j=mn(x),x!==j||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=u),v!==x)){if(w=tu,y="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=ru,y="onPointerLeave",p="onPointerEnter",d="pointer"),j=v==null?g:$n(v),h=x==null?g:$n(x),g=new w(y,d+"leave",v,n,f),g.target=j,g.relatedTarget=h,y=null,tn(f)===u&&(w=new w(p,d+"enter",x,n,f),w.target=h,w.relatedTarget=j,y=w),j=y,v&&x)t:{for(w=v,p=x,d=0,h=w;h;h=kn(h))d++;for(h=0,y=p;y;y=kn(y))h++;for(;0<d-h;)w=kn(w),d--;for(;0<h-d;)p=kn(p),h--;for(;d--;){if(w===p||p!==null&&w===p.alternate)break t;w=kn(w),p=kn(p)}w=null}else w=null;v!==null&&hu(m,g,v,w,!1),x!==null&&j!==null&&hu(m,j,x,w,!0)}}e:{if(g=u?$n(u):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var C=Xh;else if(lu(g))if(fd)C=bh;else{C=Zh;var E=Jh}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(C=qh);if(C&&(C=C(e,u))){dd(m,C,n,f);break e}E&&E(e,g,u),e==="focusout"&&(E=g._wrapperState)&&E.controlled&&g.type==="number"&&Ml(g,"number",g.value)}switch(E=u?$n(u):window,e){case"focusin":(lu(E)||E.contentEditable==="true")&&(_n=E,Yl=u,jr=null);break;case"focusout":jr=Yl=_n=null;break;case"mousedown":Xl=!0;break;case"contextmenu":case"mouseup":case"dragend":Xl=!1,du(m,n,f);break;case"selectionchange":if(nm)break;case"keydown":case"keyup":du(m,n,f)}var k;if(Js)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else Pn?ud(e,n)&&($="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&($="onCompositionStart");$&&(ad&&n.locale!=="ko"&&(Pn||$!=="onCompositionStart"?$==="onCompositionEnd"&&Pn&&(k=sd()):($t=f,Gs="value"in $t?$t.value:$t.textContent,Pn=!0)),E=ri(u,$),0<E.length&&($=new nu($,e,null,n,f),m.push({event:$,listeners:E}),k?$.data=k:(k=cd(n),k!==null&&($.data=k)))),(k=Vh?Qh(e,n):Kh(e,n))&&(u=ri(u,"onBeforeInput"),0<u.length&&(f=new nu("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:u}),f.data=k))}Sd(m,t)})}function Br(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ri(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Lr(e,n),i!=null&&r.unshift(Br(e,i,o)),i=Lr(e,t),i!=null&&r.push(Br(e,i,o))),e=e.return}return r}function kn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function hu(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,o?(a=Lr(n,i),a!=null&&l.unshift(Br(n,a,s))):o||(a=Lr(n,i),a!=null&&l.push(Br(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var lm=/\r\n?/g,sm=/\u0000|\uFFFD/g;function mu(e){return(typeof e=="string"?e:""+e).replace(lm,`
`).replace(sm,"")}function wo(e,t,n){if(t=mu(t),mu(e)!==t&&n)throw Error(S(425))}function oi(){}var Jl=null,Zl=null;function ql(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bl=typeof setTimeout=="function"?setTimeout:void 0,am=typeof clearTimeout=="function"?clearTimeout:void 0,gu=typeof Promise=="function"?Promise:void 0,um=typeof queueMicrotask=="function"?queueMicrotask:typeof gu<"u"?function(e){return gu.resolve(null).then(e).catch(cm)}:bl;function cm(e){setTimeout(function(){throw e})}function hl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Fr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Fr(t)}function Ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function yu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var or=Math.random().toString(36).slice(2),it="__reactFiber$"+or,Wr="__reactProps$"+or,gt="__reactContainer$"+or,es="__reactEvents$"+or,dm="__reactListeners$"+or,fm="__reactHandles$"+or;function tn(e){var t=e[it];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[it]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=yu(e);e!==null;){if(n=e[it])return n;e=yu(e)}return t}e=n,n=e.parentNode}return null}function to(e){return e=e[it]||e[gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function $n(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function zi(e){return e[Wr]||null}var ts=[],In=-1;function Kt(e){return{current:e}}function K(e){0>In||(e.current=ts[In],ts[In]=null,In--)}function H(e,t){In++,ts[In]=e.current,e.current=t}var Vt={},me=Kt(Vt),Ce=Kt(!1),un=Vt;function Vn(e,t){var n=e.type.contextTypes;if(!n)return Vt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ee(e){return e=e.childContextTypes,e!=null}function ii(){K(Ce),K(me)}function vu(e,t,n){if(me.current!==Vt)throw Error(S(168));H(me,t),H(Ce,n)}function Ed(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(S(108,Jp(e)||"Unknown",o));return J({},n,r)}function li(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Vt,un=me.current,H(me,e),H(Ce,Ce.current),!0}function xu(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Ed(e,t,un),r.__reactInternalMemoizedMergedChildContext=e,K(Ce),K(me),H(me,e)):K(Ce),H(Ce,n)}var dt=null,Ri=!1,ml=!1;function jd(e){dt===null?dt=[e]:dt.push(e)}function pm(e){Ri=!0,jd(e)}function Gt(){if(!ml&&dt!==null){ml=!0;var e=0,t=A;try{var n=dt;for(A=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}dt=null,Ri=!1}catch(o){throw dt!==null&&(dt=dt.slice(e+1)),Jc(Hs,Gt),o}finally{A=t,ml=!1}}return null}var zn=[],Rn=0,si=null,ai=0,De=[],Ae=0,cn=null,ft=1,pt="";function bt(e,t){zn[Rn++]=ai,zn[Rn++]=si,si=e,ai=t}function Pd(e,t,n){De[Ae++]=ft,De[Ae++]=pt,De[Ae++]=cn,cn=e;var r=ft;e=pt;var o=32-Je(r)-1;r&=~(1<<o),n+=1;var i=32-Je(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,ft=1<<32-Je(t)+o|n<<o|r,pt=i+e}else ft=1<<i|n<<o|r,pt=e}function qs(e){e.return!==null&&(bt(e,1),Pd(e,1,0))}function bs(e){for(;e===si;)si=zn[--Rn],zn[Rn]=null,ai=zn[--Rn],zn[Rn]=null;for(;e===cn;)cn=De[--Ae],De[Ae]=null,pt=De[--Ae],De[Ae]=null,ft=De[--Ae],De[Ae]=null}var Re=null,ze=null,G=!1,Xe=null;function _d(e,t){var n=Ue(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function wu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Re=e,ze=Ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Re=e,ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=cn!==null?{id:ft,overflow:pt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ue(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Re=e,ze=null,!0):!1;default:return!1}}function ns(e){return(e.mode&1)!==0&&(e.flags&128)===0}function rs(e){if(G){var t=ze;if(t){var n=t;if(!wu(e,t)){if(ns(e))throw Error(S(418));t=Ot(n.nextSibling);var r=Re;t&&wu(e,t)?_d(r,n):(e.flags=e.flags&-4097|2,G=!1,Re=e)}}else{if(ns(e))throw Error(S(418));e.flags=e.flags&-4097|2,G=!1,Re=e}}}function ku(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Re=e}function ko(e){if(e!==Re)return!1;if(!G)return ku(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ql(e.type,e.memoizedProps)),t&&(t=ze)){if(ns(e))throw Nd(),Error(S(418));for(;t;)_d(e,t),t=Ot(t.nextSibling)}if(ku(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ze=Ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ze=null}}else ze=Re?Ot(e.stateNode.nextSibling):null;return!0}function Nd(){for(var e=ze;e;)e=Ot(e.nextSibling)}function Qn(){ze=Re=null,G=!1}function ea(e){Xe===null?Xe=[e]:Xe.push(e)}var hm=xt.ReactCurrentBatchConfig;function Ge(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ui=Kt(null),ci=null,Tn=null,ta=null;function na(){ta=Tn=ci=null}function ra(e){var t=ui.current;K(ui),e._currentValue=t}function os(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Bn(e,t){ci=e,ta=Tn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function We(e){var t=e._currentValue;if(ta!==e)if(e={context:e,memoizedValue:t,next:null},Tn===null){if(ci===null)throw Error(S(308));Tn=e,ci.dependencies={lanes:0,firstContext:e}}else Tn=Tn.next=e;return t}var nn=null;function oa(e){nn===null?nn=[e]:nn.push(e)}function $d(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,oa(t)):(n.next=o.next,o.next=n),t.interleaved=n,yt(e,r)}function yt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Pt=!1;function ia(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Id(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Mt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,yt(e,n)}return o=r.interleaved,o===null?(t.next=t,oa(r)):(t.next=o.next,o.next=t),r.interleaved=t,yt(e,n)}function Fo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Vs(e,n)}}function Su(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function di(e,t,n,r){var o=e.updateQueue;Pt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?i=u:l.next=u,l=a;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==l&&(s===null?f.firstBaseUpdate=u:s.next=u,f.lastBaseUpdate=a))}if(i!==null){var m=o.baseState;l=0,f=u=a=null,s=i;do{var g=s.lane,v=s.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,w=s;switch(g=t,v=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){m=x.call(v,m,g);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,g=typeof x=="function"?x.call(v,m,g):x,g==null)break e;m=J({},m,g);break e;case 2:Pt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[s]:g.push(s))}else v={eventTime:v,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(u=f=v,a=m):f=f.next=v,l|=g;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;g=s,s=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(f===null&&(a=m),o.baseState=a,o.firstBaseUpdate=u,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);fn|=l,e.lanes=l,e.memoizedState=m}}function Cu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(S(191,o));o.call(r)}}}var zd=new $c.Component().refs;function is(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ti={isMounted:function(e){return(e=e._reactInternals)?mn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ye(),o=Dt(e),i=ht(r,o);i.payload=t,n!=null&&(i.callback=n),t=Mt(e,i,o),t!==null&&(Ze(t,e,o,r),Fo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ye(),o=Dt(e),i=ht(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Mt(e,i,o),t!==null&&(Ze(t,e,o,r),Fo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ye(),r=Dt(e),o=ht(n,r);o.tag=2,t!=null&&(o.callback=t),t=Mt(e,o,r),t!==null&&(Ze(t,e,r,n),Fo(t,e,r))}};function Eu(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Ar(n,r)||!Ar(o,i):!0}function Rd(e,t,n){var r=!1,o=Vt,i=t.contextType;return typeof i=="object"&&i!==null?i=We(i):(o=Ee(t)?un:me.current,r=t.contextTypes,i=(r=r!=null)?Vn(e,o):Vt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ti,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function ju(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ti.enqueueReplaceState(t,t.state,null)}function ls(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=zd,ia(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=We(i):(i=Ee(t)?un:me.current,o.context=Vn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(is(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ti.enqueueReplaceState(o,o.state,null),di(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function pr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;s===zd&&(s=o.refs={}),l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function So(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Pu(e){var t=e._init;return t(e._payload)}function Td(e){function t(p,d){if(e){var h=p.deletions;h===null?(p.deletions=[d],p.flags|=16):h.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function o(p,d){return p=At(p,d),p.index=0,p.sibling=null,p}function i(p,d,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<d?(p.flags|=2,d):h):(p.flags|=2,d)):(p.flags|=1048576,d)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,d,h,y){return d===null||d.tag!==6?(d=Sl(h,p.mode,y),d.return=p,d):(d=o(d,h),d.return=p,d)}function a(p,d,h,y){var C=h.type;return C===jn?f(p,d,h.props.children,y,h.key):d!==null&&(d.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===jt&&Pu(C)===d.type)?(y=o(d,h.props),y.ref=pr(p,d,h),y.return=p,y):(y=Ho(h.type,h.key,h.props,null,p.mode,y),y.ref=pr(p,d,h),y.return=p,y)}function u(p,d,h,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=Cl(h,p.mode,y),d.return=p,d):(d=o(d,h.children||[]),d.return=p,d)}function f(p,d,h,y,C){return d===null||d.tag!==7?(d=sn(h,p.mode,y,C),d.return=p,d):(d=o(d,h),d.return=p,d)}function m(p,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Sl(""+d,p.mode,h),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case co:return h=Ho(d.type,d.key,d.props,null,p.mode,h),h.ref=pr(p,null,d),h.return=p,h;case En:return d=Cl(d,p.mode,h),d.return=p,d;case jt:var y=d._init;return m(p,y(d._payload),h)}if(yr(d)||ar(d))return d=sn(d,p.mode,h,null),d.return=p,d;So(p,d)}return null}function g(p,d,h,y){var C=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return C!==null?null:s(p,d,""+h,y);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case co:return h.key===C?a(p,d,h,y):null;case En:return h.key===C?u(p,d,h,y):null;case jt:return C=h._init,g(p,d,C(h._payload),y)}if(yr(h)||ar(h))return C!==null?null:f(p,d,h,y,null);So(p,h)}return null}function v(p,d,h,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(h)||null,s(d,p,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case co:return p=p.get(y.key===null?h:y.key)||null,a(d,p,y,C);case En:return p=p.get(y.key===null?h:y.key)||null,u(d,p,y,C);case jt:var E=y._init;return v(p,d,h,E(y._payload),C)}if(yr(y)||ar(y))return p=p.get(h)||null,f(d,p,y,C,null);So(d,y)}return null}function x(p,d,h,y){for(var C=null,E=null,k=d,$=d=0,W=null;k!==null&&$<h.length;$++){k.index>$?(W=k,k=null):W=k.sibling;var T=g(p,k,h[$],y);if(T===null){k===null&&(k=W);break}e&&k&&T.alternate===null&&t(p,k),d=i(T,d,$),E===null?C=T:E.sibling=T,E=T,k=W}if($===h.length)return n(p,k),G&&bt(p,$),C;if(k===null){for(;$<h.length;$++)k=m(p,h[$],y),k!==null&&(d=i(k,d,$),E===null?C=k:E.sibling=k,E=k);return G&&bt(p,$),C}for(k=r(p,k);$<h.length;$++)W=v(k,p,$,h[$],y),W!==null&&(e&&W.alternate!==null&&k.delete(W.key===null?$:W.key),d=i(W,d,$),E===null?C=W:E.sibling=W,E=W);return e&&k.forEach(function(Pe){return t(p,Pe)}),G&&bt(p,$),C}function w(p,d,h,y){var C=ar(h);if(typeof C!="function")throw Error(S(150));if(h=C.call(h),h==null)throw Error(S(151));for(var E=C=null,k=d,$=d=0,W=null,T=h.next();k!==null&&!T.done;$++,T=h.next()){k.index>$?(W=k,k=null):W=k.sibling;var Pe=g(p,k,T.value,y);if(Pe===null){k===null&&(k=W);break}e&&k&&Pe.alternate===null&&t(p,k),d=i(Pe,d,$),E===null?C=Pe:E.sibling=Pe,E=Pe,k=W}if(T.done)return n(p,k),G&&bt(p,$),C;if(k===null){for(;!T.done;$++,T=h.next())T=m(p,T.value,y),T!==null&&(d=i(T,d,$),E===null?C=T:E.sibling=T,E=T);return G&&bt(p,$),C}for(k=r(p,k);!T.done;$++,T=h.next())T=v(k,p,$,T.value,y),T!==null&&(e&&T.alternate!==null&&k.delete(T.key===null?$:T.key),d=i(T,d,$),E===null?C=T:E.sibling=T,E=T);return e&&k.forEach(function(Yt){return t(p,Yt)}),G&&bt(p,$),C}function j(p,d,h,y){if(typeof h=="object"&&h!==null&&h.type===jn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case co:e:{for(var C=h.key,E=d;E!==null;){if(E.key===C){if(C=h.type,C===jn){if(E.tag===7){n(p,E.sibling),d=o(E,h.props.children),d.return=p,p=d;break e}}else if(E.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===jt&&Pu(C)===E.type){n(p,E.sibling),d=o(E,h.props),d.ref=pr(p,E,h),d.return=p,p=d;break e}n(p,E);break}else t(p,E);E=E.sibling}h.type===jn?(d=sn(h.props.children,p.mode,y,h.key),d.return=p,p=d):(y=Ho(h.type,h.key,h.props,null,p.mode,y),y.ref=pr(p,d,h),y.return=p,p=y)}return l(p);case En:e:{for(E=h.key;d!==null;){if(d.key===E)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(p,d.sibling),d=o(d,h.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=Cl(h,p.mode,y),d.return=p,p=d}return l(p);case jt:return E=h._init,j(p,d,E(h._payload),y)}if(yr(h))return x(p,d,h,y);if(ar(h))return w(p,d,h,y);So(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(p,d.sibling),d=o(d,h),d.return=p,p=d):(n(p,d),d=Sl(h,p.mode,y),d.return=p,p=d),l(p)):n(p,d)}return j}var Kn=Td(!0),Ld=Td(!1),no={},st=Kt(no),Hr=Kt(no),Vr=Kt(no);function rn(e){if(e===no)throw Error(S(174));return e}function la(e,t){switch(H(Vr,t),H(Hr,e),H(st,no),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Dl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Dl(t,e)}K(st),H(st,t)}function Gn(){K(st),K(Hr),K(Vr)}function Od(e){rn(Vr.current);var t=rn(st.current),n=Dl(t,e.type);t!==n&&(H(Hr,e),H(st,n))}function sa(e){Hr.current===e&&(K(st),K(Hr))}var Y=Kt(0);function fi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var gl=[];function aa(){for(var e=0;e<gl.length;e++)gl[e]._workInProgressVersionPrimary=null;gl.length=0}var Do=xt.ReactCurrentDispatcher,yl=xt.ReactCurrentBatchConfig,dn=0,X=null,ne=null,ie=null,pi=!1,Pr=!1,Qr=0,mm=0;function de(){throw Error(S(321))}function ua(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!be(e[n],t[n]))return!1;return!0}function ca(e,t,n,r,o,i){if(dn=i,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Do.current=e===null||e.memoizedState===null?xm:wm,e=n(r,o),Pr){i=0;do{if(Pr=!1,Qr=0,25<=i)throw Error(S(301));i+=1,ie=ne=null,t.updateQueue=null,Do.current=km,e=n(r,o)}while(Pr)}if(Do.current=hi,t=ne!==null&&ne.next!==null,dn=0,ie=ne=X=null,pi=!1,t)throw Error(S(300));return e}function da(){var e=Qr!==0;return Qr=0,e}function nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?X.memoizedState=ie=e:ie=ie.next=e,ie}function He(){if(ne===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=ie===null?X.memoizedState:ie.next;if(t!==null)ie=t,ne=e;else{if(e===null)throw Error(S(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},ie===null?X.memoizedState=ie=e:ie=ie.next=e}return ie}function Kr(e,t){return typeof t=="function"?t(e):t}function vl(e){var t=He(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=ne,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,u=i;do{var f=u.lane;if((dn&f)===f)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=m,l=r):a=a.next=m,X.lanes|=f,fn|=f}u=u.next}while(u!==null&&u!==i);a===null?l=r:a.next=s,be(r,t.memoizedState)||(Se=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,X.lanes|=i,fn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function xl(e){var t=He(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);be(i,t.memoizedState)||(Se=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Md(){}function Fd(e,t){var n=X,r=He(),o=t(),i=!be(r.memoizedState,o);if(i&&(r.memoizedState=o,Se=!0),r=r.queue,fa(Ud.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ie!==null&&ie.memoizedState.tag&1){if(n.flags|=2048,Gr(9,Ad.bind(null,n,r,o,t),void 0,null),se===null)throw Error(S(349));dn&30||Dd(n,t,o)}return o}function Dd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ad(e,t,n,r){t.value=n,t.getSnapshot=r,Bd(t)&&Wd(e)}function Ud(e,t,n){return n(function(){Bd(t)&&Wd(e)})}function Bd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!be(e,n)}catch{return!0}}function Wd(e){var t=yt(e,1);t!==null&&Ze(t,e,1,-1)}function _u(e){var t=nt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Kr,lastRenderedState:e},t.queue=e,e=e.dispatch=vm.bind(null,X,e),[t.memoizedState,e]}function Gr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Hd(){return He().memoizedState}function Ao(e,t,n,r){var o=nt();X.flags|=e,o.memoizedState=Gr(1|t,n,void 0,r===void 0?null:r)}function Li(e,t,n,r){var o=He();r=r===void 0?null:r;var i=void 0;if(ne!==null){var l=ne.memoizedState;if(i=l.destroy,r!==null&&ua(r,l.deps)){o.memoizedState=Gr(t,n,i,r);return}}X.flags|=e,o.memoizedState=Gr(1|t,n,i,r)}function Nu(e,t){return Ao(8390656,8,e,t)}function fa(e,t){return Li(2048,8,e,t)}function Vd(e,t){return Li(4,2,e,t)}function Qd(e,t){return Li(4,4,e,t)}function Kd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gd(e,t,n){return n=n!=null?n.concat([e]):null,Li(4,4,Kd.bind(null,t,e),n)}function pa(){}function Yd(e,t){var n=He();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ua(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Xd(e,t){var n=He();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ua(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Jd(e,t,n){return dn&21?(be(n,t)||(n=bc(),X.lanes|=n,fn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n)}function gm(e,t){var n=A;A=n!==0&&4>n?n:4,e(!0);var r=yl.transition;yl.transition={};try{e(!1),t()}finally{A=n,yl.transition=r}}function Zd(){return He().memoizedState}function ym(e,t,n){var r=Dt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qd(e))bd(t,n);else if(n=$d(e,t,n,r),n!==null){var o=ye();Ze(n,e,r,o),ef(n,t,r)}}function vm(e,t,n){var r=Dt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qd(e))bd(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,be(s,l)){var a=t.interleaved;a===null?(o.next=o,oa(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=$d(e,t,o,r),n!==null&&(o=ye(),Ze(n,e,r,o),ef(n,t,r))}}function qd(e){var t=e.alternate;return e===X||t!==null&&t===X}function bd(e,t){Pr=pi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ef(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Vs(e,n)}}var hi={readContext:We,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},xm={readContext:We,useCallback:function(e,t){return nt().memoizedState=[e,t===void 0?null:t],e},useContext:We,useEffect:Nu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ao(4194308,4,Kd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ao(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ao(4,2,e,t)},useMemo:function(e,t){var n=nt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=nt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ym.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=nt();return e={current:e},t.memoizedState=e},useState:_u,useDebugValue:pa,useDeferredValue:function(e){return nt().memoizedState=e},useTransition:function(){var e=_u(!1),t=e[0];return e=gm.bind(null,e[1]),nt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,o=nt();if(G){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),se===null)throw Error(S(349));dn&30||Dd(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Nu(Ud.bind(null,r,i,e),[e]),r.flags|=2048,Gr(9,Ad.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=nt(),t=se.identifierPrefix;if(G){var n=pt,r=ft;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Qr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=mm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},wm={readContext:We,useCallback:Yd,useContext:We,useEffect:fa,useImperativeHandle:Gd,useInsertionEffect:Vd,useLayoutEffect:Qd,useMemo:Xd,useReducer:vl,useRef:Hd,useState:function(){return vl(Kr)},useDebugValue:pa,useDeferredValue:function(e){var t=He();return Jd(t,ne.memoizedState,e)},useTransition:function(){var e=vl(Kr)[0],t=He().memoizedState;return[e,t]},useMutableSource:Md,useSyncExternalStore:Fd,useId:Zd,unstable_isNewReconciler:!1},km={readContext:We,useCallback:Yd,useContext:We,useEffect:fa,useImperativeHandle:Gd,useInsertionEffect:Vd,useLayoutEffect:Qd,useMemo:Xd,useReducer:xl,useRef:Hd,useState:function(){return xl(Kr)},useDebugValue:pa,useDeferredValue:function(e){var t=He();return ne===null?t.memoizedState=e:Jd(t,ne.memoizedState,e)},useTransition:function(){var e=xl(Kr)[0],t=He().memoizedState;return[e,t]},useMutableSource:Md,useSyncExternalStore:Fd,useId:Zd,unstable_isNewReconciler:!1};function Yn(e,t){try{var n="",r=t;do n+=Xp(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function wl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ss(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Sm=typeof WeakMap=="function"?WeakMap:Map;function tf(e,t,n){n=ht(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){gi||(gi=!0,ys=r),ss(e,t)},n}function nf(e,t,n){n=ht(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ss(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ss(e,t),typeof r!="function"&&(Ft===null?Ft=new Set([this]):Ft.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function $u(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Sm;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Mm.bind(null,e,t,n),t.then(e,e))}function Iu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function zu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ht(-1,1),t.tag=2,Mt(n,t,1))),n.lanes|=1),e)}var Cm=xt.ReactCurrentOwner,Se=!1;function ge(e,t,n,r){t.child=e===null?Ld(t,null,n,r):Kn(t,e.child,n,r)}function Ru(e,t,n,r,o){n=n.render;var i=t.ref;return Bn(t,o),r=ca(e,t,n,r,i,o),n=da(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,vt(e,t,o)):(G&&n&&qs(t),t.flags|=1,ge(e,t,r,o),t.child)}function Tu(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!ka(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,rf(e,t,i,r,o)):(e=Ho(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ar,n(l,r)&&e.ref===t.ref)return vt(e,t,o)}return t.flags|=1,e=At(i,r),e.ref=t.ref,e.return=t,t.child=e}function rf(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Ar(i,r)&&e.ref===t.ref)if(Se=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,vt(e,t,o)}return as(e,t,n,r,o)}function of(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(On,$e),$e|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(On,$e),$e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,H(On,$e),$e|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,H(On,$e),$e|=r;return ge(e,t,o,n),t.child}function lf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function as(e,t,n,r,o){var i=Ee(n)?un:me.current;return i=Vn(t,i),Bn(t,o),n=ca(e,t,n,r,i,o),r=da(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,vt(e,t,o)):(G&&r&&qs(t),t.flags|=1,ge(e,t,n,o),t.child)}function Lu(e,t,n,r,o){if(Ee(n)){var i=!0;li(t)}else i=!1;if(Bn(t,o),t.stateNode===null)Uo(e,t),Rd(t,n,r),ls(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=We(u):(u=Ee(n)?un:me.current,u=Vn(t,u));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==u)&&ju(t,l,r,u),Pt=!1;var g=t.memoizedState;l.state=g,di(t,r,l,o),a=t.memoizedState,s!==r||g!==a||Ce.current||Pt?(typeof f=="function"&&(is(t,n,f,r),a=t.memoizedState),(s=Pt||Eu(t,n,s,r,g,a,u))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Id(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Ge(t.type,s),l.props=u,m=t.pendingProps,g=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=We(a):(a=Ee(n)?un:me.current,a=Vn(t,a));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==m||g!==a)&&ju(t,l,r,a),Pt=!1,g=t.memoizedState,l.state=g,di(t,r,l,o);var x=t.memoizedState;s!==m||g!==x||Ce.current||Pt?(typeof v=="function"&&(is(t,n,v,r),x=t.memoizedState),(u=Pt||Eu(t,n,u,r,g,x,a)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=a,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return us(e,t,n,r,i,o)}function us(e,t,n,r,o,i){lf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&xu(t,n,!1),vt(e,t,i);r=t.stateNode,Cm.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Kn(t,e.child,null,i),t.child=Kn(t,null,s,i)):ge(e,t,s,i),t.memoizedState=r.state,o&&xu(t,n,!0),t.child}function sf(e){var t=e.stateNode;t.pendingContext?vu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&vu(e,t.context,!1),la(e,t.containerInfo)}function Ou(e,t,n,r,o){return Qn(),ea(o),t.flags|=256,ge(e,t,n,r),t.child}var cs={dehydrated:null,treeContext:null,retryLane:0};function ds(e){return{baseLanes:e,cachePool:null,transitions:null}}function af(e,t,n){var r=t.pendingProps,o=Y.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),H(Y,o&1),e===null)return rs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Fi(l,r,0,null),e=sn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ds(n),t.memoizedState=cs,e):ha(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Em(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=At(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=At(s,i):(i=sn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?ds(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=cs,r}return i=e.child,e=i.sibling,r=At(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ha(e,t){return t=Fi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Co(e,t,n,r){return r!==null&&ea(r),Kn(t,e.child,null,n),e=ha(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Em(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=wl(Error(S(422))),Co(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Fi({mode:"visible",children:r.children},o,0,null),i=sn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Kn(t,e.child,null,l),t.child.memoizedState=ds(l),t.memoizedState=cs,i);if(!(t.mode&1))return Co(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(S(419)),r=wl(i,r,void 0),Co(e,t,l,r)}if(s=(l&e.childLanes)!==0,Se||s){if(r=se,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,yt(e,o),Ze(r,e,o,-1))}return wa(),r=wl(Error(S(421))),Co(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Fm.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,ze=Ot(o.nextSibling),Re=t,G=!0,Xe=null,e!==null&&(De[Ae++]=ft,De[Ae++]=pt,De[Ae++]=cn,ft=e.id,pt=e.overflow,cn=t),t=ha(t,r.children),t.flags|=4096,t)}function Mu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),os(e.return,t,n)}function kl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function uf(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ge(e,t,r.children,n),r=Y.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mu(e,n,t);else if(e.tag===19)Mu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(Y,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&fi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),kl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&fi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}kl(t,!0,n,null,i);break;case"together":kl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Uo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function vt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),fn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=At(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=At(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jm(e,t,n){switch(t.tag){case 3:sf(t),Qn();break;case 5:Od(t);break;case 1:Ee(t.type)&&li(t);break;case 4:la(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;H(ui,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(H(Y,Y.current&1),t.flags|=128,null):n&t.child.childLanes?af(e,t,n):(H(Y,Y.current&1),e=vt(e,t,n),e!==null?e.sibling:null);H(Y,Y.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return uf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),H(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,of(e,t,n)}return vt(e,t,n)}var cf,fs,df,ff;cf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fs=function(){};df=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,rn(st.current);var i=null;switch(n){case"input":o=Ll(e,o),r=Ll(e,r),i=[];break;case"select":o=J({},o,{value:void 0}),r=J({},r,{value:void 0}),i=[];break;case"textarea":o=Fl(e,o),r=Fl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=oi)}Al(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Rr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Rr.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&V("scroll",e),i||s===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};ff=function(e,t,n,r){n!==r&&(t.flags|=4)};function hr(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Pm(e,t,n){var r=t.pendingProps;switch(bs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(t),null;case 1:return Ee(t.type)&&ii(),fe(t),null;case 3:return r=t.stateNode,Gn(),K(Ce),K(me),aa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ko(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xe!==null&&(ws(Xe),Xe=null))),fs(e,t),fe(t),null;case 5:sa(t);var o=rn(Vr.current);if(n=t.type,e!==null&&t.stateNode!=null)df(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return fe(t),null}if(e=rn(st.current),ko(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[it]=t,r[Wr]=i,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(o=0;o<xr.length;o++)V(xr[o],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":Qa(r,i),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},V("invalid",r);break;case"textarea":Ga(r,i),V("invalid",r)}Al(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&wo(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&wo(r.textContent,s,e),o=["children",""+s]):Rr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&V("scroll",r)}switch(n){case"input":fo(r),Ka(r,i,!0);break;case"textarea":fo(r),Ya(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=oi)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Dc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[it]=t,e[Wr]=r,cf(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ul(n,r),n){case"dialog":V("cancel",e),V("close",e),o=r;break;case"iframe":case"object":case"embed":V("load",e),o=r;break;case"video":case"audio":for(o=0;o<xr.length;o++)V(xr[o],e);o=r;break;case"source":V("error",e),o=r;break;case"img":case"image":case"link":V("error",e),V("load",e),o=r;break;case"details":V("toggle",e),o=r;break;case"input":Qa(e,r),o=Ll(e,r),V("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=J({},r,{value:void 0}),V("invalid",e);break;case"textarea":Ga(e,r),o=Fl(e,r),V("invalid",e);break;default:o=r}Al(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?Bc(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Ac(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Tr(e,a):typeof a=="number"&&Tr(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Rr.hasOwnProperty(i)?a!=null&&i==="onScroll"&&V("scroll",e):a!=null&&Ds(e,i,a,l))}switch(n){case"input":fo(e),Ka(e,r,!1);break;case"textarea":fo(e),Ya(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ht(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Fn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Fn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=oi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return fe(t),null;case 6:if(e&&t.stateNode!=null)ff(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=rn(Vr.current),rn(st.current),ko(t)){if(r=t.stateNode,n=t.memoizedProps,r[it]=t,(i=r.nodeValue!==n)&&(e=Re,e!==null))switch(e.tag){case 3:wo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&wo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[it]=t,t.stateNode=r}return fe(t),null;case 13:if(K(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&ze!==null&&t.mode&1&&!(t.flags&128))Nd(),Qn(),t.flags|=98560,i=!1;else if(i=ko(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(S(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(S(317));i[it]=t}else Qn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;fe(t),i=!1}else Xe!==null&&(ws(Xe),Xe=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?oe===0&&(oe=3):wa())),t.updateQueue!==null&&(t.flags|=4),fe(t),null);case 4:return Gn(),fs(e,t),e===null&&Ur(t.stateNode.containerInfo),fe(t),null;case 10:return ra(t.type._context),fe(t),null;case 17:return Ee(t.type)&&ii(),fe(t),null;case 19:if(K(Y),i=t.memoizedState,i===null)return fe(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)hr(i,!1);else{if(oe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=fi(e),l!==null){for(t.flags|=128,hr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(Y,Y.current&1|2),t.child}e=e.sibling}i.tail!==null&&q()>Xn&&(t.flags|=128,r=!0,hr(i,!1),t.lanes=4194304)}else{if(!r)if(e=fi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),hr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!G)return fe(t),null}else 2*q()-i.renderingStartTime>Xn&&n!==1073741824&&(t.flags|=128,r=!0,hr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=q(),t.sibling=null,n=Y.current,H(Y,r?n&1|2:n&1),t):(fe(t),null);case 22:case 23:return xa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?$e&1073741824&&(fe(t),t.subtreeFlags&6&&(t.flags|=8192)):fe(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function _m(e,t){switch(bs(t),t.tag){case 1:return Ee(t.type)&&ii(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gn(),K(Ce),K(me),aa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return sa(t),null;case 13:if(K(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Qn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(Y),null;case 4:return Gn(),null;case 10:return ra(t.type._context),null;case 22:case 23:return xa(),null;case 24:return null;default:return null}}var Eo=!1,pe=!1,Nm=typeof WeakSet=="function"?WeakSet:Set,_=null;function Ln(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Z(e,t,r)}else n.current=null}function ps(e,t,n){try{n()}catch(r){Z(e,t,r)}}var Fu=!1;function $m(e,t){if(Jl=ti,e=md(),Zs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,u=0,f=0,m=e,g=null;t:for(;;){for(var v;m!==n||o!==0&&m.nodeType!==3||(s=l+o),m!==i||r!==0&&m.nodeType!==3||(a=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(v=m.firstChild)!==null;)g=m,m=v;for(;;){if(m===e)break t;if(g===n&&++u===o&&(s=l),g===i&&++f===r&&(a=l),(v=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=v}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zl={focusedElem:e,selectionRange:n},ti=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,j=x.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ge(t.type,w),j);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(y){Z(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return x=Fu,Fu=!1,x}function _r(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&ps(t,n,i)}o=o.next}while(o!==r)}}function Oi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function hs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function pf(e){var t=e.alternate;t!==null&&(e.alternate=null,pf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[it],delete t[Wr],delete t[es],delete t[dm],delete t[fm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function hf(e){return e.tag===5||e.tag===3||e.tag===4}function Du(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ms(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=oi));else if(r!==4&&(e=e.child,e!==null))for(ms(e,t,n),e=e.sibling;e!==null;)ms(e,t,n),e=e.sibling}function gs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(gs(e,t,n),e=e.sibling;e!==null;)gs(e,t,n),e=e.sibling}var ae=null,Ye=!1;function St(e,t,n){for(n=n.child;n!==null;)mf(e,t,n),n=n.sibling}function mf(e,t,n){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(_i,n)}catch{}switch(n.tag){case 5:pe||Ln(n,t);case 6:var r=ae,o=Ye;ae=null,St(e,t,n),ae=r,Ye=o,ae!==null&&(Ye?(e=ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ae.removeChild(n.stateNode));break;case 18:ae!==null&&(Ye?(e=ae,n=n.stateNode,e.nodeType===8?hl(e.parentNode,n):e.nodeType===1&&hl(e,n),Fr(e)):hl(ae,n.stateNode));break;case 4:r=ae,o=Ye,ae=n.stateNode.containerInfo,Ye=!0,St(e,t,n),ae=r,Ye=o;break;case 0:case 11:case 14:case 15:if(!pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&ps(n,t,l),o=o.next}while(o!==r)}St(e,t,n);break;case 1:if(!pe&&(Ln(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Z(n,t,s)}St(e,t,n);break;case 21:St(e,t,n);break;case 22:n.mode&1?(pe=(r=pe)||n.memoizedState!==null,St(e,t,n),pe=r):St(e,t,n);break;default:St(e,t,n)}}function Au(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Nm),t.forEach(function(r){var o=Dm.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ke(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:ae=s.stateNode,Ye=!1;break e;case 3:ae=s.stateNode.containerInfo,Ye=!0;break e;case 4:ae=s.stateNode.containerInfo,Ye=!0;break e}s=s.return}if(ae===null)throw Error(S(160));mf(i,l,o),ae=null,Ye=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(u){Z(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)gf(t,e),t=t.sibling}function gf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ke(t,e),tt(e),r&4){try{_r(3,e,e.return),Oi(3,e)}catch(w){Z(e,e.return,w)}try{_r(5,e,e.return)}catch(w){Z(e,e.return,w)}}break;case 1:Ke(t,e),tt(e),r&512&&n!==null&&Ln(n,n.return);break;case 5:if(Ke(t,e),tt(e),r&512&&n!==null&&Ln(n,n.return),e.flags&32){var o=e.stateNode;try{Tr(o,"")}catch(w){Z(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Mc(o,i),Ul(s,l);var u=Ul(s,i);for(l=0;l<a.length;l+=2){var f=a[l],m=a[l+1];f==="style"?Bc(o,m):f==="dangerouslySetInnerHTML"?Ac(o,m):f==="children"?Tr(o,m):Ds(o,f,m,u)}switch(s){case"input":Ol(o,i);break;case"textarea":Fc(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?Fn(o,!!i.multiple,v,!1):g!==!!i.multiple&&(i.defaultValue!=null?Fn(o,!!i.multiple,i.defaultValue,!0):Fn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Wr]=i}catch(w){Z(e,e.return,w)}}break;case 6:if(Ke(t,e),tt(e),r&4){if(e.stateNode===null)throw Error(S(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){Z(e,e.return,w)}}break;case 3:if(Ke(t,e),tt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fr(t.containerInfo)}catch(w){Z(e,e.return,w)}break;case 4:Ke(t,e),tt(e);break;case 13:Ke(t,e),tt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(ya=q())),r&4&&Au(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(pe=(u=pe)||f,Ke(t,e),pe=u):Ke(t,e),tt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(_=e,f=e.child;f!==null;){for(m=_=f;_!==null;){switch(g=_,v=g.child,g.tag){case 0:case 11:case 14:case 15:_r(4,g,g.return);break;case 1:Ln(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){Z(r,n,w)}}break;case 5:Ln(g,g.return);break;case 22:if(g.memoizedState!==null){Bu(m);continue}}v!==null?(v.return=g,_=v):Bu(m)}f=f.sibling}e:for(f=null,m=e;;){if(m.tag===5){if(f===null){f=m;try{o=m.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=m.stateNode,a=m.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Uc("display",l))}catch(w){Z(e,e.return,w)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(w){Z(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ke(t,e),tt(e),r&4&&Au(e);break;case 21:break;default:Ke(t,e),tt(e)}}function tt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(hf(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Tr(o,""),r.flags&=-33);var i=Du(e);gs(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Du(e);ms(e,s,l);break;default:throw Error(S(161))}}catch(a){Z(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Im(e,t,n){_=e,yf(e)}function yf(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var o=_,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Eo;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||pe;s=Eo;var u=pe;if(Eo=l,(pe=a)&&!u)for(_=o;_!==null;)l=_,a=l.child,l.tag===22&&l.memoizedState!==null?Wu(o):a!==null?(a.return=l,_=a):Wu(o);for(;i!==null;)_=i,yf(i),i=i.sibling;_=o,Eo=s,pe=u}Uu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,_=i):Uu(e)}}function Uu(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:pe||Oi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!pe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ge(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Cu(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Cu(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Fr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}pe||t.flags&512&&hs(t)}catch(g){Z(t,t.return,g)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function Bu(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function Wu(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Oi(4,t)}catch(a){Z(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){Z(t,o,a)}}var i=t.return;try{hs(t)}catch(a){Z(t,i,a)}break;case 5:var l=t.return;try{hs(t)}catch(a){Z(t,l,a)}}}catch(a){Z(t,t.return,a)}if(t===e){_=null;break}var s=t.sibling;if(s!==null){s.return=t.return,_=s;break}_=t.return}}var zm=Math.ceil,mi=xt.ReactCurrentDispatcher,ma=xt.ReactCurrentOwner,Be=xt.ReactCurrentBatchConfig,O=0,se=null,ee=null,ue=0,$e=0,On=Kt(0),oe=0,Yr=null,fn=0,Mi=0,ga=0,Nr=null,ke=null,ya=0,Xn=1/0,ut=null,gi=!1,ys=null,Ft=null,jo=!1,It=null,yi=0,$r=0,vs=null,Bo=-1,Wo=0;function ye(){return O&6?q():Bo!==-1?Bo:Bo=q()}function Dt(e){return e.mode&1?O&2&&ue!==0?ue&-ue:hm.transition!==null?(Wo===0&&(Wo=bc()),Wo):(e=A,e!==0||(e=window.event,e=e===void 0?16:ld(e.type)),e):1}function Ze(e,t,n,r){if(50<$r)throw $r=0,vs=null,Error(S(185));br(e,n,r),(!(O&2)||e!==se)&&(e===se&&(!(O&2)&&(Mi|=n),oe===4&&Nt(e,ue)),je(e,r),n===1&&O===0&&!(t.mode&1)&&(Xn=q()+500,Ri&&Gt()))}function je(e,t){var n=e.callbackNode;hh(e,t);var r=ei(e,e===se?ue:0);if(r===0)n!==null&&Za(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Za(n),t===1)e.tag===0?pm(Hu.bind(null,e)):jd(Hu.bind(null,e)),um(function(){!(O&6)&&Gt()}),n=null;else{switch(ed(r)){case 1:n=Hs;break;case 4:n=Zc;break;case 16:n=bo;break;case 536870912:n=qc;break;default:n=bo}n=jf(n,vf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function vf(e,t){if(Bo=-1,Wo=0,O&6)throw Error(S(327));var n=e.callbackNode;if(Wn()&&e.callbackNode!==n)return null;var r=ei(e,e===se?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=vi(e,r);else{t=r;var o=O;O|=2;var i=wf();(se!==e||ue!==t)&&(ut=null,Xn=q()+500,ln(e,t));do try{Lm();break}catch(s){xf(e,s)}while(!0);na(),mi.current=i,O=o,ee!==null?t=0:(se=null,ue=0,t=oe)}if(t!==0){if(t===2&&(o=Ql(e),o!==0&&(r=o,t=xs(e,o))),t===1)throw n=Yr,ln(e,0),Nt(e,r),je(e,q()),n;if(t===6)Nt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Rm(o)&&(t=vi(e,r),t===2&&(i=Ql(e),i!==0&&(r=i,t=xs(e,i))),t===1))throw n=Yr,ln(e,0),Nt(e,r),je(e,q()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:en(e,ke,ut);break;case 3:if(Nt(e,r),(r&130023424)===r&&(t=ya+500-q(),10<t)){if(ei(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=bl(en.bind(null,e,ke,ut),t);break}en(e,ke,ut);break;case 4:if(Nt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Je(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zm(r/1960))-r,10<r){e.timeoutHandle=bl(en.bind(null,e,ke,ut),r);break}en(e,ke,ut);break;case 5:en(e,ke,ut);break;default:throw Error(S(329))}}}return je(e,q()),e.callbackNode===n?vf.bind(null,e):null}function xs(e,t){var n=Nr;return e.current.memoizedState.isDehydrated&&(ln(e,t).flags|=256),e=vi(e,t),e!==2&&(t=ke,ke=n,t!==null&&ws(t)),e}function ws(e){ke===null?ke=e:ke.push.apply(ke,e)}function Rm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!be(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Nt(e,t){for(t&=~ga,t&=~Mi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Je(t),r=1<<n;e[n]=-1,t&=~r}}function Hu(e){if(O&6)throw Error(S(327));Wn();var t=ei(e,0);if(!(t&1))return je(e,q()),null;var n=vi(e,t);if(e.tag!==0&&n===2){var r=Ql(e);r!==0&&(t=r,n=xs(e,r))}if(n===1)throw n=Yr,ln(e,0),Nt(e,t),je(e,q()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,en(e,ke,ut),je(e,q()),null}function va(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(Xn=q()+500,Ri&&Gt())}}function pn(e){It!==null&&It.tag===0&&!(O&6)&&Wn();var t=O;O|=1;var n=Be.transition,r=A;try{if(Be.transition=null,A=1,e)return e()}finally{A=r,Be.transition=n,O=t,!(O&6)&&Gt()}}function xa(){$e=On.current,K(On)}function ln(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,am(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(bs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ii();break;case 3:Gn(),K(Ce),K(me),aa();break;case 5:sa(r);break;case 4:Gn();break;case 13:K(Y);break;case 19:K(Y);break;case 10:ra(r.type._context);break;case 22:case 23:xa()}n=n.return}if(se=e,ee=e=At(e.current,null),ue=$e=t,oe=0,Yr=null,ga=Mi=fn=0,ke=Nr=null,nn!==null){for(t=0;t<nn.length;t++)if(n=nn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}nn=null}return e}function xf(e,t){do{var n=ee;try{if(na(),Do.current=hi,pi){for(var r=X.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}pi=!1}if(dn=0,ie=ne=X=null,Pr=!1,Qr=0,ma.current=null,n===null||n.return===null){oe=1,Yr=t,ee=null;break}e:{var i=e,l=n.return,s=n,a=t;if(t=ue,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,f=s,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=Iu(l);if(v!==null){v.flags&=-257,zu(v,l,s,i,t),v.mode&1&&$u(i,u,t),t=v,a=u;var x=t.updateQueue;if(x===null){var w=new Set;w.add(a),t.updateQueue=w}else x.add(a);break e}else{if(!(t&1)){$u(i,u,t),wa();break e}a=Error(S(426))}}else if(G&&s.mode&1){var j=Iu(l);if(j!==null){!(j.flags&65536)&&(j.flags|=256),zu(j,l,s,i,t),ea(Yn(a,s));break e}}i=a=Yn(a,s),oe!==4&&(oe=2),Nr===null?Nr=[i]:Nr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=tf(i,a,t);Su(i,p);break e;case 1:s=a;var d=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ft===null||!Ft.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=nf(i,s,t);Su(i,y);break e}}i=i.return}while(i!==null)}Sf(n)}catch(C){t=C,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(!0)}function wf(){var e=mi.current;return mi.current=hi,e===null?hi:e}function wa(){(oe===0||oe===3||oe===2)&&(oe=4),se===null||!(fn&268435455)&&!(Mi&268435455)||Nt(se,ue)}function vi(e,t){var n=O;O|=2;var r=wf();(se!==e||ue!==t)&&(ut=null,ln(e,t));do try{Tm();break}catch(o){xf(e,o)}while(!0);if(na(),O=n,mi.current=r,ee!==null)throw Error(S(261));return se=null,ue=0,oe}function Tm(){for(;ee!==null;)kf(ee)}function Lm(){for(;ee!==null&&!ih();)kf(ee)}function kf(e){var t=Ef(e.alternate,e,$e);e.memoizedProps=e.pendingProps,t===null?Sf(e):ee=t,ma.current=null}function Sf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=_m(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{oe=6,ee=null;return}}else if(n=Pm(n,t,$e),n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);oe===0&&(oe=5)}function en(e,t,n){var r=A,o=Be.transition;try{Be.transition=null,A=1,Om(e,t,n,r)}finally{Be.transition=o,A=r}return null}function Om(e,t,n,r){do Wn();while(It!==null);if(O&6)throw Error(S(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(mh(e,i),e===se&&(ee=se=null,ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||jo||(jo=!0,jf(bo,function(){return Wn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Be.transition,Be.transition=null;var l=A;A=1;var s=O;O|=4,ma.current=null,$m(e,n),gf(n,e),tm(Zl),ti=!!Jl,Zl=Jl=null,e.current=n,Im(n),lh(),O=s,A=l,Be.transition=i}else e.current=n;if(jo&&(jo=!1,It=e,yi=o),i=e.pendingLanes,i===0&&(Ft=null),uh(n.stateNode),je(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(gi)throw gi=!1,e=ys,ys=null,e;return yi&1&&e.tag!==0&&Wn(),i=e.pendingLanes,i&1?e===vs?$r++:($r=0,vs=e):$r=0,Gt(),null}function Wn(){if(It!==null){var e=ed(yi),t=Be.transition,n=A;try{if(Be.transition=null,A=16>e?16:e,It===null)var r=!1;else{if(e=It,It=null,yi=0,O&6)throw Error(S(331));var o=O;for(O|=4,_=e.current;_!==null;){var i=_,l=i.child;if(_.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(_=u;_!==null;){var f=_;switch(f.tag){case 0:case 11:case 15:_r(8,f,i)}var m=f.child;if(m!==null)m.return=f,_=m;else for(;_!==null;){f=_;var g=f.sibling,v=f.return;if(pf(f),f===u){_=null;break}if(g!==null){g.return=v,_=g;break}_=v}}}var x=i.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var j=w.sibling;w.sibling=null,w=j}while(w!==null)}}_=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,_=l;else e:for(;_!==null;){if(i=_,i.flags&2048)switch(i.tag){case 0:case 11:case 15:_r(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,_=p;break e}_=i.return}}var d=e.current;for(_=d;_!==null;){l=_;var h=l.child;if(l.subtreeFlags&2064&&h!==null)h.return=l,_=h;else e:for(l=d;_!==null;){if(s=_,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Oi(9,s)}}catch(C){Z(s,s.return,C)}if(s===l){_=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,_=y;break e}_=s.return}}if(O=o,Gt(),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(_i,e)}catch{}r=!0}return r}finally{A=n,Be.transition=t}}return!1}function Vu(e,t,n){t=Yn(n,t),t=tf(e,t,1),e=Mt(e,t,1),t=ye(),e!==null&&(br(e,1,t),je(e,t))}function Z(e,t,n){if(e.tag===3)Vu(e,e,n);else for(;t!==null;){if(t.tag===3){Vu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ft===null||!Ft.has(r))){e=Yn(n,e),e=nf(t,e,1),t=Mt(t,e,1),e=ye(),t!==null&&(br(t,1,e),je(t,e));break}}t=t.return}}function Mm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ye(),e.pingedLanes|=e.suspendedLanes&n,se===e&&(ue&n)===n&&(oe===4||oe===3&&(ue&130023424)===ue&&500>q()-ya?ln(e,0):ga|=n),je(e,t)}function Cf(e,t){t===0&&(e.mode&1?(t=mo,mo<<=1,!(mo&130023424)&&(mo=4194304)):t=1);var n=ye();e=yt(e,t),e!==null&&(br(e,t,n),je(e,n))}function Fm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Cf(e,n)}function Dm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),Cf(e,n)}var Ef;Ef=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ce.current)Se=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Se=!1,jm(e,t,n);Se=!!(e.flags&131072)}else Se=!1,G&&t.flags&1048576&&Pd(t,ai,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Uo(e,t),e=t.pendingProps;var o=Vn(t,me.current);Bn(t,n),o=ca(null,t,r,e,o,n);var i=da();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ee(r)?(i=!0,li(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ia(t),o.updater=Ti,t.stateNode=o,o._reactInternals=t,ls(t,r,e,n),t=us(null,t,r,!0,i,n)):(t.tag=0,G&&i&&qs(t),ge(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Uo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Um(r),e=Ge(r,e),o){case 0:t=as(null,t,r,e,n);break e;case 1:t=Lu(null,t,r,e,n);break e;case 11:t=Ru(null,t,r,e,n);break e;case 14:t=Tu(null,t,r,Ge(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ge(r,o),as(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ge(r,o),Lu(e,t,r,o,n);case 3:e:{if(sf(t),e===null)throw Error(S(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Id(e,t),di(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Yn(Error(S(423)),t),t=Ou(e,t,r,n,o);break e}else if(r!==o){o=Yn(Error(S(424)),t),t=Ou(e,t,r,n,o);break e}else for(ze=Ot(t.stateNode.containerInfo.firstChild),Re=t,G=!0,Xe=null,n=Ld(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qn(),r===o){t=vt(e,t,n);break e}ge(e,t,r,n)}t=t.child}return t;case 5:return Od(t),e===null&&rs(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,ql(r,o)?l=null:i!==null&&ql(r,i)&&(t.flags|=32),lf(e,t),ge(e,t,l,n),t.child;case 6:return e===null&&rs(t),null;case 13:return af(e,t,n);case 4:return la(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Kn(t,null,r,n):ge(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ge(r,o),Ru(e,t,r,o,n);case 7:return ge(e,t,t.pendingProps,n),t.child;case 8:return ge(e,t,t.pendingProps.children,n),t.child;case 12:return ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,H(ui,r._currentValue),r._currentValue=l,i!==null)if(be(i.value,l)){if(i.children===o.children&&!Ce.current){t=vt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=ht(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?a.next=a:(a.next=f.next,f.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),os(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(S(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),os(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}ge(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Bn(t,n),o=We(o),r=r(o),t.flags|=1,ge(e,t,r,n),t.child;case 14:return r=t.type,o=Ge(r,t.pendingProps),o=Ge(r.type,o),Tu(e,t,r,o,n);case 15:return rf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ge(r,o),Uo(e,t),t.tag=1,Ee(r)?(e=!0,li(t)):e=!1,Bn(t,n),Rd(t,r,o),ls(t,r,o,n),us(null,t,r,!0,e,n);case 19:return uf(e,t,n);case 22:return of(e,t,n)}throw Error(S(156,t.tag))};function jf(e,t){return Jc(e,t)}function Am(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ue(e,t,n,r){return new Am(e,t,n,r)}function ka(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Um(e){if(typeof e=="function")return ka(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Us)return 11;if(e===Bs)return 14}return 2}function At(e,t){var n=e.alternate;return n===null?(n=Ue(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ho(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")ka(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case jn:return sn(n.children,o,i,t);case As:l=8,o|=8;break;case Il:return e=Ue(12,n,t,o|2),e.elementType=Il,e.lanes=i,e;case zl:return e=Ue(13,n,t,o),e.elementType=zl,e.lanes=i,e;case Rl:return e=Ue(19,n,t,o),e.elementType=Rl,e.lanes=i,e;case Tc:return Fi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case zc:l=10;break e;case Rc:l=9;break e;case Us:l=11;break e;case Bs:l=14;break e;case jt:l=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Ue(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function sn(e,t,n,r){return e=Ue(7,e,r,t),e.lanes=n,e}function Fi(e,t,n,r){return e=Ue(22,e,r,t),e.elementType=Tc,e.lanes=n,e.stateNode={isHidden:!1},e}function Sl(e,t,n){return e=Ue(6,e,null,t),e.lanes=n,e}function Cl(e,t,n){return t=Ue(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Bm(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rl(0),this.expirationTimes=rl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Sa(e,t,n,r,o,i,l,s,a){return e=new Bm(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ue(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ia(i),e}function Wm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:En,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Pf(e){if(!e)return Vt;e=e._reactInternals;e:{if(mn(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ee(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Ee(n))return Ed(e,n,t)}return t}function _f(e,t,n,r,o,i,l,s,a){return e=Sa(n,r,!0,e,o,i,l,s,a),e.context=Pf(null),n=e.current,r=ye(),o=Dt(n),i=ht(r,o),i.callback=t??null,Mt(n,i,o),e.current.lanes=o,br(e,o,r),je(e,r),e}function Di(e,t,n,r){var o=t.current,i=ye(),l=Dt(o);return n=Pf(n),t.context===null?t.context=n:t.pendingContext=n,t=ht(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Mt(o,t,l),e!==null&&(Ze(e,o,l,i),Fo(e,o,l)),l}function xi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Qu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ca(e,t){Qu(e,t),(e=e.alternate)&&Qu(e,t)}function Hm(){return null}var Nf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ea(e){this._internalRoot=e}Ai.prototype.render=Ea.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Di(e,t,null,null)};Ai.prototype.unmount=Ea.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;pn(function(){Di(null,e,null,null)}),t[gt]=null}};function Ai(e){this._internalRoot=e}Ai.prototype.unstable_scheduleHydration=function(e){if(e){var t=rd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<_t.length&&t!==0&&t<_t[n].priority;n++);_t.splice(n,0,e),n===0&&id(e)}};function ja(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ui(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ku(){}function Vm(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=xi(l);i.call(u)}}var l=_f(t,r,e,0,null,!1,!1,"",Ku);return e._reactRootContainer=l,e[gt]=l.current,Ur(e.nodeType===8?e.parentNode:e),pn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=xi(a);s.call(u)}}var a=Sa(e,0,!1,null,null,!1,!1,"",Ku);return e._reactRootContainer=a,e[gt]=a.current,Ur(e.nodeType===8?e.parentNode:e),pn(function(){Di(t,a,n,r)}),a}function Bi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=xi(l);s.call(a)}}Di(t,l,e,o)}else l=Vm(n,t,e,o,r);return xi(l)}td=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=vr(t.pendingLanes);n!==0&&(Vs(t,n|1),je(t,q()),!(O&6)&&(Xn=q()+500,Gt()))}break;case 13:pn(function(){var r=yt(e,1);if(r!==null){var o=ye();Ze(r,e,1,o)}}),Ca(e,1)}};Qs=function(e){if(e.tag===13){var t=yt(e,134217728);if(t!==null){var n=ye();Ze(t,e,134217728,n)}Ca(e,134217728)}};nd=function(e){if(e.tag===13){var t=Dt(e),n=yt(e,t);if(n!==null){var r=ye();Ze(n,e,t,r)}Ca(e,t)}};rd=function(){return A};od=function(e,t){var n=A;try{return A=e,t()}finally{A=n}};Wl=function(e,t,n){switch(t){case"input":if(Ol(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=zi(r);if(!o)throw Error(S(90));Oc(r),Ol(r,o)}}}break;case"textarea":Fc(e,n);break;case"select":t=n.value,t!=null&&Fn(e,!!n.multiple,t,!1)}};Vc=va;Qc=pn;var Qm={usingClientEntryPoint:!1,Events:[to,$n,zi,Wc,Hc,va]},mr={findFiberByHostInstance:tn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Km={bundleType:mr.bundleType,version:mr.version,rendererPackageName:mr.rendererPackageName,rendererConfig:mr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Yc(e),e===null?null:e.stateNode},findFiberByHostInstance:mr.findFiberByHostInstance||Hm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Po=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Po.isDisabled&&Po.supportsFiber)try{_i=Po.inject(Km),lt=Po}catch{}}Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qm;Le.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ja(t))throw Error(S(200));return Wm(e,t,null,n)};Le.createRoot=function(e,t){if(!ja(e))throw Error(S(299));var n=!1,r="",o=Nf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Sa(e,1,!1,null,null,n,!1,r,o),e[gt]=t.current,Ur(e.nodeType===8?e.parentNode:e),new Ea(t)};Le.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Yc(t),e=e===null?null:e.stateNode,e};Le.flushSync=function(e){return pn(e)};Le.hydrate=function(e,t,n){if(!Ui(t))throw Error(S(200));return Bi(null,e,t,!0,n)};Le.hydrateRoot=function(e,t,n){if(!ja(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Nf;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=_f(t,null,e,1,n??null,o,!1,i,l),e[gt]=t.current,Ur(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ai(t)};Le.render=function(e,t,n){if(!Ui(t))throw Error(S(200));return Bi(null,e,t,!1,n)};Le.unmountComponentAtNode=function(e){if(!Ui(e))throw Error(S(40));return e._reactRootContainer?(pn(function(){Bi(null,null,e,!1,function(){e._reactRootContainer=null,e[gt]=null})}),!0):!1};Le.unstable_batchedUpdates=va;Le.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ui(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Bi(e,t,n,!1,r)};Le.version="18.2.0-next-9e3b772b8-20220608";function $f(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($f)}catch(e){console.error(e)}}$f(),Pc.exports=Le;var Gm=Pc.exports,If,Gu=Gm;If=Gu.createRoot,Gu.hydrateRoot;/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xr(){return Xr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xr.apply(this,arguments)}var zt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(zt||(zt={}));const Yu="popstate";function Ym(e){e===void 0&&(e={});function t(o,i){let{pathname:l="/",search:s="",hash:a=""}=gn(o.location.hash.substr(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),ks("",{pathname:l,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(o,i){let l=o.document.querySelector("base"),s="";if(l&&l.getAttribute("href")){let a=o.location.href,u=a.indexOf("#");s=u===-1?a:a.slice(0,u)}return s+"#"+(typeof i=="string"?i:wi(i))}function r(o,i){Wi(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return Jm(t,n,r,e)}function te(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Wi(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Xm(){return Math.random().toString(36).substr(2,8)}function Xu(e,t){return{usr:e.state,key:e.key,idx:t}}function ks(e,t,n,r){return n===void 0&&(n=null),Xr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?gn(t):t,{state:n,key:t&&t.key||r||Xm()})}function wi(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function gn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Jm(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,s=zt.Pop,a=null,u=f();u==null&&(u=0,l.replaceState(Xr({},l.state,{idx:u}),""));function f(){return(l.state||{idx:null}).idx}function m(){s=zt.Pop;let j=f(),p=j==null?null:j-u;u=j,a&&a({action:s,location:w.location,delta:p})}function g(j,p){s=zt.Push;let d=ks(w.location,j,p);n&&n(d,j),u=f()+1;let h=Xu(d,u),y=w.createHref(d);try{l.pushState(h,"",y)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;o.location.assign(y)}i&&a&&a({action:s,location:w.location,delta:1})}function v(j,p){s=zt.Replace;let d=ks(w.location,j,p);n&&n(d,j),u=f();let h=Xu(d,u),y=w.createHref(d);l.replaceState(h,"",y),i&&a&&a({action:s,location:w.location,delta:0})}function x(j){let p=o.location.origin!=="null"?o.location.origin:o.location.href,d=typeof j=="string"?j:wi(j);return te(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let w={get action(){return s},get location(){return e(o,l)},listen(j){if(a)throw new Error("A history only accepts one active listener");return o.addEventListener(Yu,m),a=j,()=>{o.removeEventListener(Yu,m),a=null}},createHref(j){return t(o,j)},createURL:x,encodeLocation(j){let p=x(j);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:v,go(j){return l.go(j)}};return w}var Ju;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ju||(Ju={}));function Zm(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?gn(t):t,o=Pa(r.pathname||"/",n);if(o==null)return null;let i=zf(e);qm(i);let l=null;for(let s=0;l==null&&s<i.length;++s)l=s0(i[s],c0(o));return l}function zf(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,l,s)=>{let a={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};a.relativePath.startsWith("/")&&(te(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=Ut([r,a.relativePath]),f=n.concat(a);i.children&&i.children.length>0&&(te(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),zf(i.children,t,f,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:i0(u,i.index),routesMeta:f})};return e.forEach((i,l)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,l);else for(let a of Rf(i.path))o(i,l,a)}),t}function Rf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let l=Rf(r.join("/")),s=[];return s.push(...l.map(a=>a===""?i:[i,a].join("/"))),o&&s.push(...l),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function qm(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:l0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const bm=/^:\w+$/,e0=3,t0=2,n0=1,r0=10,o0=-2,Zu=e=>e==="*";function i0(e,t){let n=e.split("/"),r=n.length;return n.some(Zu)&&(r+=o0),t&&(r+=t0),n.filter(o=>!Zu(o)).reduce((o,i)=>o+(bm.test(i)?e0:i===""?n0:r0),r)}function l0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function s0(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let l=0;l<n.length;++l){let s=n[l],a=l===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",f=a0({path:s.relativePath,caseSensitive:s.caseSensitive,end:a},u);if(!f)return null;Object.assign(r,f.params);let m=s.route;i.push({params:r,pathname:Ut([o,f.pathname]),pathnameBase:m0(Ut([o,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(o=Ut([o,f.pathnameBase]))}return i}function a0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=u0(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((u,f,m)=>{let{paramName:g,isOptional:v}=f;if(g==="*"){let w=s[m]||"";l=i.slice(0,i.length-w.length).replace(/(.)\/+$/,"$1")}const x=s[m];return v&&!x?u[g]=void 0:u[g]=d0(x||"",g),u},{}),pathname:i,pathnameBase:l,pattern:e}}function u0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Wi(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(l,s,a)=>(r.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function c0(e){try{return decodeURI(e)}catch(t){return Wi(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function d0(e,t){try{return decodeURIComponent(e)}catch(n){return Wi(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Pa(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function f0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?gn(e):e;return{pathname:n?n.startsWith("/")?n:p0(n,t):t,search:g0(r),hash:y0(o)}}function p0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function El(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function h0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Tf(e,t){let n=h0(e);return t?n.map((r,o)=>o===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Lf(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=gn(e):(o=Xr({},e),te(!o.pathname||!o.pathname.includes("?"),El("?","pathname","search",o)),te(!o.pathname||!o.pathname.includes("#"),El("#","pathname","hash",o)),te(!o.search||!o.search.includes("#"),El("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,s;if(l==null)s=n;else{let m=t.length-1;if(!r&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),m-=1;o.pathname=g.join("/")}s=m>=0?t[m]:"/"}let a=f0(o,s),u=l&&l!=="/"&&l.endsWith("/"),f=(i||l===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||f)&&(a.pathname+="/"),a}const Ut=e=>e.join("/").replace(/\/\/+/g,"/"),m0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),g0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,y0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function v0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Of=["post","put","patch","delete"];new Set(Of);const x0=["get",...Of];new Set(x0);/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jr(){return Jr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jr.apply(this,arguments)}const _a=N.createContext(null),w0=N.createContext(null),yn=N.createContext(null),Hi=N.createContext(null),vn=N.createContext({outlet:null,matches:[],isDataRoute:!1}),Mf=N.createContext(null);function k0(e,t){let{relative:n}=t===void 0?{}:t;ro()||te(!1);let{basename:r,navigator:o}=N.useContext(yn),{hash:i,pathname:l,search:s}=Df(e,{relative:n}),a=l;return r!=="/"&&(a=l==="/"?r:Ut([r,l])),o.createHref({pathname:a,search:s,hash:i})}function ro(){return N.useContext(Hi)!=null}function oo(){return ro()||te(!1),N.useContext(Hi).location}function Ff(e){N.useContext(yn).static||N.useLayoutEffect(e)}function S0(){let{isDataRoute:e}=N.useContext(vn);return e?O0():C0()}function C0(){ro()||te(!1);let e=N.useContext(_a),{basename:t,future:n,navigator:r}=N.useContext(yn),{matches:o}=N.useContext(vn),{pathname:i}=oo(),l=JSON.stringify(Tf(o,n.v7_relativeSplatPath)),s=N.useRef(!1);return Ff(()=>{s.current=!0}),N.useCallback(function(u,f){if(f===void 0&&(f={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let m=Lf(u,JSON.parse(l),i,f.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:Ut([t,m.pathname])),(f.replace?r.replace:r.push)(m,f.state,f)},[t,r,l,i,e])}function Df(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=N.useContext(yn),{matches:o}=N.useContext(vn),{pathname:i}=oo(),l=JSON.stringify(Tf(o,r.v7_relativeSplatPath));return N.useMemo(()=>Lf(e,JSON.parse(l),i,n==="path"),[e,l,i,n])}function E0(e,t){return j0(e,t)}function j0(e,t,n,r){ro()||te(!1);let{navigator:o}=N.useContext(yn),{matches:i}=N.useContext(vn),l=i[i.length-1],s=l?l.params:{};l&&l.pathname;let a=l?l.pathnameBase:"/";l&&l.route;let u=oo(),f;if(t){var m;let j=typeof t=="string"?gn(t):t;a==="/"||(m=j.pathname)!=null&&m.startsWith(a)||te(!1),f=j}else f=u;let g=f.pathname||"/",v=a==="/"?g:g.slice(a.length)||"/",x=Zm(e,{pathname:v}),w=I0(x&&x.map(j=>Object.assign({},j,{params:Object.assign({},s,j.params),pathname:Ut([a,o.encodeLocation?o.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?a:Ut([a,o.encodeLocation?o.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),i,n,r);return t&&w?N.createElement(Hi.Provider,{value:{location:Jr({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:zt.Pop}},w):w}function P0(){let e=L0(),t=v0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},t),n?N.createElement("pre",{style:o},n):null,null)}const _0=N.createElement(P0,null);class N0 extends N.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?N.createElement(vn.Provider,{value:this.props.routeContext},N.createElement(Mf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function $0(e){let{routeContext:t,match:n,children:r}=e,o=N.useContext(_a);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),N.createElement(vn.Provider,{value:t},r)}function I0(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let l=e,s=(o=n)==null?void 0:o.errors;if(s!=null){let f=l.findIndex(m=>m.route.id&&(s==null?void 0:s[m.route.id]));f>=0||te(!1),l=l.slice(0,Math.min(l.length,f+1))}let a=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<l.length;f++){let m=l[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(u=f),m.route.id){let{loaderData:g,errors:v}=n,x=m.route.loader&&g[m.route.id]===void 0&&(!v||v[m.route.id]===void 0);if(m.route.lazy||x){a=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((f,m,g)=>{let v,x=!1,w=null,j=null;n&&(v=s&&m.route.id?s[m.route.id]:void 0,w=m.route.errorElement||_0,a&&(u<0&&g===0?(M0("route-fallback",!1),x=!0,j=null):u===g&&(x=!0,j=m.route.hydrateFallbackElement||null)));let p=t.concat(l.slice(0,g+1)),d=()=>{let h;return v?h=w:x?h=j:m.route.Component?h=N.createElement(m.route.Component,null):m.route.element?h=m.route.element:h=f,N.createElement($0,{match:m,routeContext:{outlet:f,matches:p,isDataRoute:n!=null},children:h})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?N.createElement(N0,{location:n.location,revalidation:n.revalidation,component:w,error:v,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):d()},null)}var Af=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Af||{}),ki=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ki||{});function z0(e){let t=N.useContext(_a);return t||te(!1),t}function R0(e){let t=N.useContext(w0);return t||te(!1),t}function T0(e){let t=N.useContext(vn);return t||te(!1),t}function Uf(e){let t=T0(),n=t.matches[t.matches.length-1];return n.route.id||te(!1),n.route.id}function L0(){var e;let t=N.useContext(Mf),n=R0(ki.UseRouteError),r=Uf(ki.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function O0(){let{router:e}=z0(Af.UseNavigateStable),t=Uf(ki.UseNavigateStable),n=N.useRef(!1);return Ff(()=>{n.current=!0}),N.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Jr({fromRouteId:t},i)))},[e,t])}const qu={};function M0(e,t,n){!t&&!qu[e]&&(qu[e]=!0)}function Ie(e){te(!1)}function F0(e){let{basename:t="/",children:n=null,location:r,navigationType:o=zt.Pop,navigator:i,static:l=!1,future:s}=e;ro()&&te(!1);let a=t.replace(/^\/*/,"/"),u=N.useMemo(()=>({basename:a,navigator:i,static:l,future:Jr({v7_relativeSplatPath:!1},s)}),[a,s,i,l]);typeof r=="string"&&(r=gn(r));let{pathname:f="/",search:m="",hash:g="",state:v=null,key:x="default"}=r,w=N.useMemo(()=>{let j=Pa(f,a);return j==null?null:{location:{pathname:j,search:m,hash:g,state:v,key:x},navigationType:o}},[a,f,m,g,v,x,o]);return w==null?null:N.createElement(yn.Provider,{value:u},N.createElement(Hi.Provider,{children:n,value:w}))}function Bf(e){let{children:t,location:n}=e;return E0(Ss(t),n)}new Promise(()=>{});function Ss(e,t){t===void 0&&(t=[]);let n=[];return N.Children.forEach(e,(r,o)=>{if(!N.isValidElement(r))return;let i=[...t,o];if(r.type===N.Fragment){n.push.apply(n,Ss(r.props.children,i));return}r.type!==Ie&&te(!1),!r.props.index||!r.props.children||te(!1);let l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Ss(r.props.children,i)),n.push(l)}),n}/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cs(){return Cs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Cs.apply(this,arguments)}function D0(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function A0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function U0(e,t){return e.button===0&&(!t||t==="_self")&&!A0(e)}const B0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],W0="startTransition",bu=Fp[W0];function H0(e){let{basename:t,children:n,future:r,window:o}=e,i=N.useRef();i.current==null&&(i.current=Ym({window:o,v5Compat:!0}));let l=i.current,[s,a]=N.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},f=N.useCallback(m=>{u&&bu?bu(()=>a(m)):a(m)},[a,u]);return N.useLayoutEffect(()=>l.listen(f),[l,f]),N.createElement(F0,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:l,future:r})}const V0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Q0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,K0=N.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:l,state:s,target:a,to:u,preventScrollReset:f,unstable_viewTransition:m}=t,g=D0(t,B0),{basename:v}=N.useContext(yn),x,w=!1;if(typeof u=="string"&&Q0.test(u)&&(x=u,V0))try{let h=new URL(window.location.href),y=u.startsWith("//")?new URL(h.protocol+u):new URL(u),C=Pa(y.pathname,v);y.origin===h.origin&&C!=null?u=C+y.search+y.hash:w=!0}catch{}let j=k0(u,{relative:o}),p=G0(u,{replace:l,state:s,target:a,preventScrollReset:f,relative:o,unstable_viewTransition:m});function d(h){r&&r(h),h.defaultPrevented||p(h)}return N.createElement("a",Cs({},g,{href:x||j,onClick:w||i?r:d,ref:n,target:a}))});var ec;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ec||(ec={}));var tc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(tc||(tc={}));function G0(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:l,unstable_viewTransition:s}=t===void 0?{}:t,a=S0(),u=oo(),f=Df(e,{relative:l});return N.useCallback(m=>{if(U0(m,n)){m.preventDefault();let g=r!==void 0?r:wi(u)===wi(f);a(e,{replace:g,state:o,preventScrollReset:i,relative:l,unstable_viewTransition:s})}},[u,a,f,r,o,n,e,i,l,s])}const Ir=[{name:"NIGHTSKY",primary:"#000000",secondary:"#fec060",tertiary:"#2753bb",link:"#2753bb",linkInteraction:"#fec060"},{name:"PASTEL",primary:"#2753bb",secondary:"#ee7967",tertiary:"#3080f6",link:"#2753bb",linkInteraction:"#ee7967"},{name:"GRANDMA",primary:"#5b1734",secondary:"#669c4b",tertiary:"#f4b386",link:"#5b1734",linkInteraction:"#669c4b"},{name:"MARS",primary:"#590d1e",secondary:"#d9525b",tertiary:"#3080f6",link:"#590d1e",linkInteraction:"#d9525b"},{name:"PURPLY",primary:"#311b14",secondary:"#6cc4fa",tertiary:"#8368af",link:"#311b14",linkInteraction:"#6cc4fa"},{name:"VIVID",primary:"#0f3044",secondary:"#bc2619",tertiary:"#4f6baf",link:"#0f3044",linkInteraction:"#bc2619"},{name:"FOREST",primary:"#000232",secondary:"#395c39",tertiary:"#7a6739",link:"#000232",linkInteraction:"#395c39"},{name:"RHENIUM",primary:"#252c41",secondary:"#d79abe",tertiary:"#ec5a4d",link:"#252c41",linkInteraction:"#d79abe"},{name:"SEWERS",primary:"#0a1e35",secondary:"#72f9ff",tertiary:"#babbbd",link:"#0a1e35",linkInteraction:"#babbbd"},{name:"NIKAIDO",primary:"#1a1a0d",secondary:"#f19737",tertiary:"#3080f6",link:"#1a1a0d",linkInteraction:"#f19737"},{name:"SEPIA",primary:"#4f2108",secondary:"#7ca597",tertiary:"#314b6c",link:"#4f2108",linkInteraction:"#7ca597"},{name:"WETLAND",primary:"#265341",secondary:"#a47e45",tertiary:"#314b6c",link:"#265341",linkInteraction:"#a47e45"},{name:"NOSTALGIA",primary:"#3c5a77",secondary:"#e7a7a5",tertiary:"#b99bf7",link:"#3c5a77",linkInteraction:"#e7a7a5"}],Y0=Ir.NIGHTSKY,Wf=M.createContext(),X0=e=>{const[t,n]=M.useState(Y0),[r,o]=M.useState(!1),[i,l]=M.useState(!1),s=M.useMemo(()=>r?"0":"-1",[r]),a=M.useCallback(f=>{i===!1&&l(!0),o(f)},[i]),u={currentPalette:t,handleBackgroundInteraction:a,backgroundInteraction:i,setPalette:n,setShowContent:o,showContent:r,tabIndex:s};return c.jsx(Wf.Provider,{value:u,children:e.children})},et=()=>{const e=M.useContext(Wf);if(!e)throw new Error("App context misconfigured");return e},Cn=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e),Hf=M.createContext(null),J0=Ir[0],Z0=e=>{const[t,n]=M.useState(J0),r=M.useCallback(()=>{const i=Ir.findIndex(u=>u===t),l=[...Ir];l.splice(i,1);const s=Cn(0,l.length),a=l[s];n(a)},[t,n]),o={currentPalette:t,palettes:Ir,pickRandomPalette:r,setPalette:n};return c.jsx(Hf.Provider,{value:o,children:e.children})},we=()=>{const e=M.useContext(Hf);if(!e)throw new Error("Palette context misconfigured");return e};var he=function(){return he=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},he.apply(this,arguments)};function Jn(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var Q="-ms-",zr="-moz-",F="-webkit-",Vf="comm",Vi="rule",Na="decl",q0="@import",Qf="@keyframes",b0="@layer",Kf=Math.abs,$a=String.fromCharCode,Es=Object.assign;function eg(e,t){return le(e,0)^45?(((t<<2^le(e,0))<<2^le(e,1))<<2^le(e,2))<<2^le(e,3):0}function Gf(e){return e.trim()}function ct(e,t){return(e=t.exec(e))?e[0]:e}function R(e,t,n){return e.replace(t,n)}function Vo(e,t,n){return e.indexOf(t,n)}function le(e,t){return e.charCodeAt(t)|0}function Zn(e,t,n){return e.slice(t,n)}function rt(e){return e.length}function Yf(e){return e.length}function wr(e,t){return t.push(e),e}function tg(e,t){return e.map(t).join("")}function nc(e,t){return e.filter(function(n){return!ct(n,t)})}var Qi=1,qn=1,Xf=0,Ve=0,b=0,ir="";function Ki(e,t,n,r,o,i,l,s){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Qi,column:qn,length:l,return:"",siblings:s}}function Et(e,t){return Es(Ki("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Sn(e){for(;e.root;)e=Et(e.root,{children:[e]});wr(e,e.siblings)}function ng(){return b}function rg(){return b=Ve>0?le(ir,--Ve):0,qn--,b===10&&(qn=1,Qi--),b}function qe(){return b=Ve<Xf?le(ir,Ve++):0,qn++,b===10&&(qn=1,Qi++),b}function an(){return le(ir,Ve)}function Qo(){return Ve}function Gi(e,t){return Zn(ir,e,t)}function js(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function og(e){return Qi=qn=1,Xf=rt(ir=e),Ve=0,[]}function ig(e){return ir="",e}function jl(e){return Gf(Gi(Ve-1,Ps(e===91?e+2:e===40?e+1:e)))}function lg(e){for(;(b=an())&&b<33;)qe();return js(e)>2||js(b)>3?"":" "}function sg(e,t){for(;--t&&qe()&&!(b<48||b>102||b>57&&b<65||b>70&&b<97););return Gi(e,Qo()+(t<6&&an()==32&&qe()==32))}function Ps(e){for(;qe();)switch(b){case e:return Ve;case 34:case 39:e!==34&&e!==39&&Ps(b);break;case 40:e===41&&Ps(e);break;case 92:qe();break}return Ve}function ag(e,t){for(;qe()&&e+b!==57;)if(e+b===84&&an()===47)break;return"/*"+Gi(t,Ve-1)+"*"+$a(e===47?e:qe())}function ug(e){for(;!js(an());)qe();return Gi(e,Ve)}function cg(e){return ig(Ko("",null,null,null,[""],e=og(e),0,[0],e))}function Ko(e,t,n,r,o,i,l,s,a){for(var u=0,f=0,m=l,g=0,v=0,x=0,w=1,j=1,p=1,d=0,h="",y=o,C=i,E=r,k=h;j;)switch(x=d,d=qe()){case 40:if(x!=108&&le(k,m-1)==58){Vo(k+=R(jl(d),"&","&\f"),"&\f",Kf(u?s[u-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:k+=jl(d);break;case 9:case 10:case 13:case 32:k+=lg(x);break;case 92:k+=sg(Qo()-1,7);continue;case 47:switch(an()){case 42:case 47:wr(dg(ag(qe(),Qo()),t,n,a),a);break;default:k+="/"}break;case 123*w:s[u++]=rt(k)*p;case 125*w:case 59:case 0:switch(d){case 0:case 125:j=0;case 59+f:p==-1&&(k=R(k,/\f/g,"")),v>0&&rt(k)-m&&wr(v>32?oc(k+";",r,n,m-1,a):oc(R(k," ","")+";",r,n,m-2,a),a);break;case 59:k+=";";default:if(wr(E=rc(k,t,n,u,f,o,s,h,y=[],C=[],m,i),i),d===123)if(f===0)Ko(k,t,E,E,y,i,m,s,C);else switch(g===99&&le(k,3)===110?100:g){case 100:case 108:case 109:case 115:Ko(e,E,E,r&&wr(rc(e,E,E,0,0,o,s,h,o,y=[],m,C),C),o,C,m,s,r?y:C);break;default:Ko(k,E,E,E,[""],C,0,s,C)}}u=f=v=0,w=p=1,h=k="",m=l;break;case 58:m=1+rt(k),v=x;default:if(w<1){if(d==123)--w;else if(d==125&&w++==0&&rg()==125)continue}switch(k+=$a(d),d*w){case 38:p=f>0?1:(k+="\f",-1);break;case 44:s[u++]=(rt(k)-1)*p,p=1;break;case 64:an()===45&&(k+=jl(qe())),g=an(),f=m=rt(h=k+=ug(Qo())),d++;break;case 45:x===45&&rt(k)==2&&(w=0)}}return i}function rc(e,t,n,r,o,i,l,s,a,u,f,m){for(var g=o-1,v=o===0?i:[""],x=Yf(v),w=0,j=0,p=0;w<r;++w)for(var d=0,h=Zn(e,g+1,g=Kf(j=l[w])),y=e;d<x;++d)(y=Gf(j>0?v[d]+" "+h:R(h,/&\f/g,v[d])))&&(a[p++]=y);return Ki(e,t,n,o===0?Vi:s,a,u,f,m)}function dg(e,t,n,r){return Ki(e,t,n,Vf,$a(ng()),Zn(e,2,-2),0,r)}function oc(e,t,n,r,o){return Ki(e,t,n,Na,Zn(e,0,r),Zn(e,r+1,-1),r,o)}function Jf(e,t,n){switch(eg(e,t)){case 5103:return F+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return F+e+e;case 4789:return zr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return F+e+zr+e+Q+e+e;case 5936:switch(le(e,t+11)){case 114:return F+e+Q+R(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return F+e+Q+R(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return F+e+Q+R(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return F+e+Q+e+e;case 6165:return F+e+Q+"flex-"+e+e;case 5187:return F+e+R(e,/(\w+).+(:[^]+)/,F+"box-$1$2"+Q+"flex-$1$2")+e;case 5443:return F+e+Q+"flex-item-"+R(e,/flex-|-self/g,"")+(ct(e,/flex-|baseline/)?"":Q+"grid-row-"+R(e,/flex-|-self/g,""))+e;case 4675:return F+e+Q+"flex-line-pack"+R(e,/align-content|flex-|-self/g,"")+e;case 5548:return F+e+Q+R(e,"shrink","negative")+e;case 5292:return F+e+Q+R(e,"basis","preferred-size")+e;case 6060:return F+"box-"+R(e,"-grow","")+F+e+Q+R(e,"grow","positive")+e;case 4554:return F+R(e,/([^-])(transform)/g,"$1"+F+"$2")+e;case 6187:return R(R(R(e,/(zoom-|grab)/,F+"$1"),/(image-set)/,F+"$1"),e,"")+e;case 5495:case 3959:return R(e,/(image-set\([^]*)/,F+"$1$`$1");case 4968:return R(R(e,/(.+:)(flex-)?(.*)/,F+"box-pack:$3"+Q+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+F+e+e;case 4200:if(!ct(e,/flex-|baseline/))return Q+"grid-column-align"+Zn(e,t)+e;break;case 2592:case 3360:return Q+R(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,ct(r.props,/grid-\w+-end/)})?~Vo(e+(n=n[t].value),"span",0)?e:Q+R(e,"-start","")+e+Q+"grid-row-span:"+(~Vo(n,"span",0)?ct(n,/\d+/):+ct(n,/\d+/)-+ct(e,/\d+/))+";":Q+R(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return ct(r.props,/grid-\w+-start/)})?e:Q+R(R(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return R(e,/(.+)-inline(.+)/,F+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(rt(e)-1-t>6)switch(le(e,t+1)){case 109:if(le(e,t+4)!==45)break;case 102:return R(e,/(.+:)(.+)-([^]+)/,"$1"+F+"$2-$3$1"+zr+(le(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Vo(e,"stretch",0)?Jf(R(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return R(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,l,s,a,u){return Q+o+":"+i+u+(l?Q+o+"-span:"+(s?a:+a-+i)+u:"")+e});case 4949:if(le(e,t+6)===121)return R(e,":",":"+F)+e;break;case 6444:switch(le(e,le(e,14)===45?18:11)){case 120:return R(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+F+(le(e,14)===45?"inline-":"")+"box$3$1"+F+"$2$3$1"+Q+"$2box$3")+e;case 100:return R(e,":",":"+Q)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return R(e,"scroll-","scroll-snap-")+e}return e}function Si(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function fg(e,t,n,r){switch(e.type){case b0:if(e.children.length)break;case q0:case Na:return e.return=e.return||e.value;case Vf:return"";case Qf:return e.return=e.value+"{"+Si(e.children,r)+"}";case Vi:if(!rt(e.value=e.props.join(",")))return""}return rt(n=Si(e.children,r))?e.return=e.value+"{"+n+"}":""}function pg(e){var t=Yf(e);return function(n,r,o,i){for(var l="",s=0;s<t;s++)l+=e[s](n,r,o,i)||"";return l}}function hg(e){return function(t){t.root||(t=t.return)&&e(t)}}function mg(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Na:e.return=Jf(e.value,e.length,n);return;case Qf:return Si([Et(e,{value:R(e.value,"@","@"+F)})],r);case Vi:if(e.length)return tg(n=e.props,function(o){switch(ct(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Sn(Et(e,{props:[R(o,/:(read-\w+)/,":"+zr+"$1")]})),Sn(Et(e,{props:[o]})),Es(e,{props:nc(n,r)});break;case"::placeholder":Sn(Et(e,{props:[R(o,/:(plac\w+)/,":"+F+"input-$1")]})),Sn(Et(e,{props:[R(o,/:(plac\w+)/,":"+zr+"$1")]})),Sn(Et(e,{props:[R(o,/:(plac\w+)/,Q+"input-$1")]})),Sn(Et(e,{props:[o]})),Es(e,{props:nc(n,r)});break}return""})}}var gg={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ne={},bn=typeof process<"u"&&Ne!==void 0&&(Ne.REACT_APP_SC_ATTR||Ne.SC_ATTR)||"data-styled",Zf="active",qf="data-styled-version",Yi="6.1.6",Ia=`/*!sc*/
`,za=typeof window<"u"&&"HTMLElement"in window,yg=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ne!==void 0&&Ne.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ne.REACT_APP_SC_DISABLE_SPEEDY!==""?Ne.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ne.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ne!==void 0&&Ne.SC_DISABLE_SPEEDY!==void 0&&Ne.SC_DISABLE_SPEEDY!==""&&Ne.SC_DISABLE_SPEEDY!=="false"&&Ne.SC_DISABLE_SPEEDY),vg={},Xi=Object.freeze([]),er=Object.freeze({});function bf(e,t,n){return n===void 0&&(n=er),e.theme!==n.theme&&e.theme||t||n.theme}var ep=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),xg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,wg=/(^-|-$)/g;function ic(e){return e.replace(xg,"-").replace(wg,"")}var kg=/(a)(d)/gi,_o=52,lc=function(e){return String.fromCharCode(e+(e>25?39:97))};function _s(e){var t,n="";for(t=Math.abs(e);t>_o;t=t/_o|0)n=lc(t%_o)+n;return(lc(t%_o)+n).replace(kg,"$1-$2")}var Pl,tp=5381,Mn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},np=function(e){return Mn(tp,e)};function Ra(e){return _s(np(e)>>>0)}function Sg(e){return e.displayName||e.name||"Component"}function _l(e){return typeof e=="string"&&!0}var rp=typeof Symbol=="function"&&Symbol.for,op=rp?Symbol.for("react.memo"):60115,Cg=rp?Symbol.for("react.forward_ref"):60112,Eg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},jg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ip={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Pg=((Pl={})[Cg]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Pl[op]=ip,Pl);function sc(e){return("type"in(t=e)&&t.type.$$typeof)===op?ip:"$$typeof"in e?Pg[e.$$typeof]:Eg;var t}var _g=Object.defineProperty,Ng=Object.getOwnPropertyNames,ac=Object.getOwnPropertySymbols,$g=Object.getOwnPropertyDescriptor,Ig=Object.getPrototypeOf,uc=Object.prototype;function lp(e,t,n){if(typeof t!="string"){if(uc){var r=Ig(t);r&&r!==uc&&lp(e,r,n)}var o=Ng(t);ac&&(o=o.concat(ac(t)));for(var i=sc(e),l=sc(t),s=0;s<o.length;++s){var a=o[s];if(!(a in jg||n&&n[a]||l&&a in l||i&&a in i)){var u=$g(t,a);try{_g(e,a,u)}catch{}}}}return e}function tr(e){return typeof e=="function"}function Ta(e){return typeof e=="object"&&"styledComponentId"in e}function on(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ci(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Zr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ns(e,t,n){if(n===void 0&&(n=!1),!n&&!Zr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ns(e[r],t[r]);else if(Zr(t))for(var r in t)e[r]=Ns(e[r],t[r]);return e}function La(e,t){Object.defineProperty(e,"toString",{value:t})}function io(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var zg=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw io(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var l=o;l<i;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(t+1),a=(l=0,n.length);l<a;l++)this.tag.insertRule(s,n[l])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,l=o;l<i;l++)n+="".concat(this.tag.getRule(l)).concat(Ia);return n},e}(),Go=new Map,Ei=new Map,Yo=1,No=function(e){if(Go.has(e))return Go.get(e);for(;Ei.has(Yo);)Yo++;var t=Yo++;return Go.set(e,t),Ei.set(t,e),t},Rg=function(e,t){Yo=t+1,Go.set(e,t),Ei.set(t,e)},Tg="style[".concat(bn,"][").concat(qf,'="').concat(Yi,'"]'),Lg=new RegExp("^".concat(bn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Og=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},Mg=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Ia),o=[],i=0,l=r.length;i<l;i++){var s=r[i].trim();if(s){var a=s.match(Lg);if(a){var u=0|parseInt(a[1],10),f=a[2];u!==0&&(Rg(f,u),Og(e,f,a[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(s)}}};function Fg(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var sp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(s){var a=Array.from(s.querySelectorAll("style[".concat(bn,"]")));return a[a.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(bn,Zf),r.setAttribute(qf,Yi);var l=Fg();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},Dg=function(){function e(t){this.element=sp(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var l=r[o];if(l.ownerNode===n)return l}throw io(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Ag=function(){function e(t){this.element=sp(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Ug=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),cc=za,Bg={isServer:!za,useCSSOMInjection:!yg},ji=function(){function e(t,n,r){t===void 0&&(t=er),n===void 0&&(n={});var o=this;this.options=he(he({},Bg),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&za&&cc&&(cc=!1,function(i){for(var l=document.querySelectorAll(Tg),s=0,a=l.length;s<a;s++){var u=l[s];u&&u.getAttribute(bn)!==Zf&&(Mg(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),La(this,function(){return function(i){for(var l=i.getTag(),s=l.length,a="",u=function(m){var g=function(p){return Ei.get(p)}(m);if(g===void 0)return"continue";var v=i.names.get(g),x=l.getGroup(m);if(v===void 0||x.length===0)return"continue";var w="".concat(bn,".g").concat(m,'[id="').concat(g,'"]'),j="";v!==void 0&&v.forEach(function(p){p.length>0&&(j+="".concat(p,","))}),a+="".concat(x).concat(w,'{content:"').concat(j,'"}').concat(Ia)},f=0;f<s;f++)u(f);return a}(o)})}return e.registerId=function(t){return No(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(he(he({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new Ug(o):r?new Dg(o):new Ag(o)}(this.options),new zg(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(No(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(No(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(No(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Wg=/&/g,Hg=/^\s*\/\/.*$/gm;function ap(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=ap(n.children,t)),n})}function Vg(e){var t,n,r,o=e===void 0?er:e,i=o.options,l=i===void 0?er:i,s=o.plugins,a=s===void 0?Xi:s,u=function(g,v,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):g},f=a.slice();f.push(function(g){g.type===Vi&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(Wg,n).replace(r,u))}),l.prefix&&f.push(mg),f.push(fg);var m=function(g,v,x,w){v===void 0&&(v=""),x===void 0&&(x=""),w===void 0&&(w="&"),t=w,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var j=g.replace(Hg,""),p=cg(x||v?"".concat(x," ").concat(v," { ").concat(j," }"):j);l.namespace&&(p=ap(p,l.namespace));var d=[];return Si(p,pg(f.concat(hg(function(h){return d.push(h)})))),d};return m.hash=a.length?a.reduce(function(g,v){return v.name||io(15),Mn(g,v.name)},tp).toString():"",m}var Qg=new ji,$s=Vg(),up=M.createContext({shouldForwardProp:void 0,styleSheet:Qg,stylis:$s});up.Consumer;M.createContext(void 0);function Is(){return N.useContext(up)}var cp=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=$s);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,La(this,function(){throw io(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=$s),this.name+t.hash},e}(),Kg=function(e){return e>="A"&&e<="Z"};function dc(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Kg(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var dp=function(e){return e==null||e===!1||e===""},fp=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!dp(i)&&(Array.isArray(i)&&i.isCss||tr(i)?r.push("".concat(dc(o),":"),i,";"):Zr(i)?r.push.apply(r,Jn(Jn(["".concat(o," {")],fp(i),!1),["}"],!1)):r.push("".concat(dc(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in gg||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Bt(e,t,n,r){if(dp(e))return[];if(Ta(e))return[".".concat(e.styledComponentId)];if(tr(e)){if(!tr(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return Bt(o,t,n,r)}var i;return e instanceof cp?n?(e.inject(n,r),[e.getName(r)]):[e]:Zr(e)?fp(e):Array.isArray(e)?Array.prototype.concat.apply(Xi,e.map(function(l){return Bt(l,t,n,r)})):[e.toString()]}function pp(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(tr(n)&&!Ta(n))return!1}return!0}var Gg=np(Yi),Yg=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&pp(t),this.componentId=n,this.baseHash=Mn(Gg,n),this.baseStyle=r,ji.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=on(o,this.staticRulesId);else{var i=Ci(Bt(this.rules,t,n,r)),l=_s(Mn(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,l)){var s=r(i,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,s)}o=on(o,l),this.staticRulesId=l}else{for(var a=Mn(this.baseHash,r.hash),u="",f=0;f<this.rules.length;f++){var m=this.rules[f];if(typeof m=="string")u+=m;else if(m){var g=Ci(Bt(m,t,n,r));a=Mn(a,g+f),u+=g}}if(u){var v=_s(a>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(u,".".concat(v),void 0,this.componentId)),o=on(o,v)}}return o},e}(),Oa=M.createContext(void 0);Oa.Consumer;var Nl={};function Xg(e,t,n){var r=Ta(e),o=e,i=!_l(e),l=t.attrs,s=l===void 0?Xi:l,a=t.componentId,u=a===void 0?function(y,C){var E=typeof y!="string"?"sc":ic(y);Nl[E]=(Nl[E]||0)+1;var k="".concat(E,"-").concat(Ra(Yi+E+Nl[E]));return C?"".concat(C,"-").concat(k):k}(t.displayName,t.parentComponentId):a,f=t.displayName,m=f===void 0?function(y){return _l(y)?"styled.".concat(y):"Styled(".concat(Sg(y),")")}(e):f,g=t.displayName&&t.componentId?"".concat(ic(t.displayName),"-").concat(t.componentId):t.componentId||u,v=r&&o.attrs?o.attrs.concat(s).filter(Boolean):s,x=t.shouldForwardProp;if(r&&o.shouldForwardProp){var w=o.shouldForwardProp;if(t.shouldForwardProp){var j=t.shouldForwardProp;x=function(y,C){return w(y,C)&&j(y,C)}}else x=w}var p=new Yg(n,g,r?o.componentStyle:void 0);function d(y,C){return function(E,k,$){var W=E.attrs,T=E.componentStyle,Pe=E.defaultProps,Yt=E.foldedComponentIds,Xt=E.styledComponentId,so=E.target,Ji=M.useContext(Oa),lr=Is(),Jt=E.shouldForwardProp||lr.shouldForwardProp,P=bf(k,Ji,Pe)||er,I=function(wt,_e,at){for(var sr,qt=he(he({},_e),{className:void 0,theme:at}),Zi=0;Zi<wt.length;Zi+=1){var ao=tr(sr=wt[Zi])?sr(qt):sr;for(var kt in ao)qt[kt]=kt==="className"?on(qt[kt],ao[kt]):kt==="style"?he(he({},qt[kt]),ao[kt]):ao[kt]}return _e.className&&(qt.className=on(qt.className,_e.className)),qt}(W,k,P),z=I.as||so,U={};for(var B in I)I[B]===void 0||B[0]==="$"||B==="as"||B==="theme"&&I.theme===P||(B==="forwardedAs"?U.as=I.forwardedAs:Jt&&!Jt(B,z)||(U[B]=I[B]));var Zt=function(wt,_e){var at=Is(),sr=wt.generateAndInjectStyles(_e,at.styleSheet,at.stylis);return sr}(T,I),Qe=on(Yt,Xt);return Zt&&(Qe+=" "+Zt),I.className&&(Qe+=" "+I.className),U[_l(z)&&!ep.has(z)?"class":"className"]=Qe,U.ref=$,N.createElement(z,U)}(h,y,C)}d.displayName=m;var h=M.forwardRef(d);return h.attrs=v,h.componentStyle=p,h.displayName=m,h.shouldForwardProp=x,h.foldedComponentIds=r?on(o.foldedComponentIds,o.styledComponentId):"",h.styledComponentId=g,h.target=r?o.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=r?function(C){for(var E=[],k=1;k<arguments.length;k++)E[k-1]=arguments[k];for(var $=0,W=E;$<W.length;$++)Ns(C,W[$],!0);return C}({},o.defaultProps,y):y}}),La(h,function(){return".".concat(h.styledComponentId)}),i&&lp(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function fc(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var pc=function(e){return Object.assign(e,{isCss:!0})};function lo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(tr(e)||Zr(e))return pc(Bt(fc(Xi,Jn([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Bt(r):pc(Bt(fc(r,t)))}function zs(e,t,n){if(n===void 0&&(n=er),!t)throw io(1,t);var r=function(o){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return e(t,n,lo.apply(void 0,Jn([o],i,!1)))};return r.attrs=function(o){return zs(e,t,he(he({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return zs(e,t,he(he({},n),o))},r}var hp=function(e){return zs(Xg,e)},D=hp;ep.forEach(function(e){D[e]=hp(e)});var Jg=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=pp(t),ji.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(Ci(Bt(this.rules,n,r,o)),""),l=this.componentId+t;r.insertRules(l,l,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&ji.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function Zg(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=lo.apply(void 0,Jn([e],t,!1)),o="sc-global-".concat(Ra(JSON.stringify(r))),i=new Jg(r,o),l=function(a){var u=Is(),f=M.useContext(Oa),m=M.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&s(m,a,u.styleSheet,f,u.stylis),M.useLayoutEffect(function(){if(!u.styleSheet.server)return s(m,a,u.styleSheet,f,u.stylis),function(){return i.removeStyles(m,u.styleSheet)}},[m,a,u.styleSheet,f,u.stylis]),null};function s(a,u,f,m,g){if(i.isStatic)i.renderStyles(a,vg,f,g);else{var v=he(he({},u),{theme:bf(u,m,l.defaultProps)});i.renderStyles(a,v,f,g)}}return M.memo(l)}function qg(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ci(lo.apply(void 0,Jn([e],t,!1))),o=Ra(r);return new cp(o,r)}const bg=D.header`
  height: 90px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  z-index: 3;

  h1 {
    font-size: 50px;
    color: #FFFFFF;
    line-height: 41px;
    cursor: default;
  }

  @media only screen and (min-width: 768px) {
    height: 100px;
  }
`;function ey(){const{handleBackgroundInteraction:e}=et(),t=n=>{n.stopPropagation(),e(!1)};return c.jsx(bg,{onClick:t,children:c.jsx("h1",{onClick:n=>n.stopPropagation(),children:"Alec Cuccia"})})}const mp=M.createContext(),ty=e=>{const[t,n]=M.useState(!1),r=M.useCallback(()=>{n(i=>!i)},[n]),o={showExplanation:t,toggleExplanation:r};return c.jsx(mp.Provider,{value:o,children:e.children})},Ma=()=>{const e=M.useContext(mp);if(!e)throw new Error("Challenges context misconfigured");return e},ny=D.a`
  &:link, &:visited {
    color: ${({$colors:e})=>e.link};
  }

  &:active, &:focus, &:hover {
    color: ${({$colors:e})=>e.linkInteraction};
  }
`;function Wt(e){const{children:t,className:n,tabIndex:r,to:o}=e,{tabIndex:i}=et(),{currentPalette:l}=we();let s={};return o.includes("mailto")===!1&&(s={rel:"noopener noreferrer",target:"_blank"}),c.jsx(ny,{className:n,href:o,onMouseUp:a=>a.currentTarget.blur(),tabIndex:r||i,...s,$colors:l,children:t})}const ry=D.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    font-size: 30px;
    margin: 0 0 60px 0;

    &:last-child {
      margin: 0;
    }
  }
`;function oy(){return c.jsxs(ry,{children:[c.jsx(Wt,{to:"mailto:ajcuccia+dev@gmail.com",children:"Email"}),c.jsx(Wt,{to:"https://www.github.com/atomicretro",children:"GitHub"}),c.jsx(Wt,{to:"https://www.linkedin.com/in/alec-cuccia",children:"LinkedIn"})]})}const Fa=D.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  margin: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  text-rendering: inherit;
  letter-spacing: inherit;
  word-spacing: inherit;
  text-indent: inherit;
  text-shadow: inherit;
  text-align: inherit;
`,iy=D(Fa)`
  color: ${({$colors:e})=>e.link};

  &:active, &:focus, &:hover {
    color: ${({$colors:e})=>e.linkInteraction};
  }
`;function gp(e){const{children:t,className:n,onClick:r}=e,{tabIndex:o}=et(),{currentPalette:i}=we();return c.jsx(iy,{className:n,onClick:r,onMouseUp:l=>l.currentTarget.blur(),tabIndex:o,$colors:i,children:t})}const ly=D(K0)`
  &:link, &:visited {
    color: ${({$colors:e})=>e.link};
  }

  &:active, &:focus, &:hover {
    color: ${({$colors:e})=>e.linkInteraction};
  }
`;function Fe(e){const{children:t,className:n,to:r}=e,{tabIndex:o}=et(),{currentPalette:i}=we();return c.jsx(ly,{className:n,onMouseUp:l=>l.currentTarget.blur(),tabIndex:o,to:r,$colors:i,children:t})}const sy=D.div`
  ${({$blur:e})=>e&&"filter: blur(5px);"}
  transition: filter 0.5s ease;
`;function xn(e){const{children:t,className:n}=e,{showExplanation:r}=Ma();return c.jsx(sy,{className:n,$blur:r,children:t})}const ay=D.div`
  position: absolute;
  top: -10px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 24px;
  background: rgba(255, 255, 255, 0.8);
  overflow: auto;
  opacity: 0;
  pointer-events: none;
  z-index: 10;
  transition: opacity 0.5s ease;

  .reading {
    width: 80%;
    font-size: 12px;
    text-align: center;
    overflow: auto;

    @media only screen and (min-width: 576px) {
      font-size: 16px;
    }
    @media only screen and (min-width: 768px) {
      font-size: 20px;
    }
  }

  ${({$show:e})=>e&&`
    opacity: 1;
    pointer-events: auto;
  `}

  a {
    font-size: 16px;
  }

  p {
    width: 100%;
    margin: 0 0 15px 0;

    &:first-of-type {
      margin: 0;
    }
  }

  .explanation-line {
    width: 60%;
    display: inline-block;
    min-height: 2px;
    background: black;
    margin: 20px 0;
  }
`;function wn(e){const{children:t,number:n}=e,{showContent:r}=et(),{showExplanation:o}=Ma();return c.jsx(ay,{$show:o,children:c.jsxs("div",{className:"reading",children:[t,n&&c.jsx("p",{children:c.jsx(Wt,{tabIndex:r&&o?"0":"-1",to:`https://100dayscss.com/days/${n}`,children:"To the challenge!"})})]})})}const uy=D.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  .alien {
    height: 300px;
    width: 300px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background: #ffffff;
    border: 1px solid ${({$colors:e})=>e.primary};
  }

  .pixel {
    appearance: none;
    outline: 0;
    height: 15px;
    width: 15px;
    background: #ffffff;
    margin: 0;
    cursor: pointer;

    &:checked {
      background: ${({$colors:e})=>e.secondary};
      border: 1px solid ${({$colors:e})=>e.primary};
    }
    &:focus {
      background: ${({$colors:e})=>e.tertiary};
      border: 1px solid ${({$colors:e})=>e.primary};
    }
  }

  @media only screen and (min-width: 768px) {
    .alien {
      height: 400px;
      width: 400px;
    }

    .pixel {
      height: 20px;
      width: 20px;
    }
  }
`,cy={129:!0,186:!0,212:!0,130:!0,187:!0,213:!0,148:!0,189:!0,228:!0,149:!0,190:!0,231:!0,150:!0,192:!0,247:!0,151:!0,193:!0,249:!0,167:!0,206:!0,250:!0,168:!0,207:!0,252:!0,169:!0,208:!0,266:!0,170:!0,209:!0,268:!0,171:!0,210:!0,271:!0,172:!0,211:!0,273:!0},dy=c.jsxs(c.Fragment,{children:[c.jsx("p",{children:"Click the squares to swap them on and off."}),c.jsx("div",{className:"explanation-line"}),c.jsx("p",{children:`At first I had no idea how I was going to complete this challenge, and walked away from it to do other things. Hours later, thinking about something else entirely, it hit me: "they're all checkboxes!"`}),c.jsx("p",{children:"Once I realized that, writing the code was straightforward. I used JS to create the series of checkboxes, but then used vanilla CSS to arrange them and style them into pixels."}),c.jsx("p",{children:`The default image was brute-forced by figuring out which pixels are white in the demo template, and simply marking them "unchecked" as they are generated. It's low-tech, but since the default image is static I don't mind cheesing it a bit.`})]});function fy(){const{currentPalette:e}=we();return c.jsxs(uy,{$colors:e,children:[c.jsx(wn,{number:"47",children:dy}),c.jsx(xn,{className:"alien",children:[...Array(400).keys()].map(t=>c.jsx("input",{className:"pixel",defaultChecked:!cy[t],onMouseUp:n=>n.target.blur(),type:"checkbox"},t))})]})}const py=qg`
  0%   { top: -6px; }
  10%  { top: -56px; }
  20%  { top: -106px; }
  30%  { top: -156px; }
  40%  { top: -206px; }
  50%  { top: -256px; }
  60%  { top: -306px; }
  70%  { top: -356px; }
  80%  { top: -406px; }
  90%  { top: -456px; }
  100% { top: -506px; }
`,$o=lo`
  animation-name: ${py};
  animation-iteration-count: infinite;
  animation-timing-function: steps(1, jump-end);
`,hy=D.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  .clock {
    position: relative;
    height: 400px;
    width: 400px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: ${({$colors:e})=>e.primary};
    border-radius: 3px;
    z-index: 1;
  }

  .display {
    position: relative;
    height: 40px;
    width: 110px;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.3);
    overflow: hidden;
    pointer-events: none;
    z-index: 0;
  }

  .input {
    position: absolute;
    top: 236px;
    left: calc(50% - 15px);
    width: 27px;
    height: 27px;
    opacity: 0;
    cursor: pointer;
    z-index: 5;

    &:checked ~ .pause {
      opacity: 0;
      transform: scale(0, 0);
    }
    &:checked ~ .play {
      opacity: 1;
      transform: scale(1, 1);
    }
    &:checked ~ .display {
      & .ribbon {
        animation-play-state: paused;
      }
    }
  }

  .pause {
    position: absolute;
    top: 240px;
    left: calc(50% - 11px);
    height: 25px;
    width: 9px;
    opacity: 1;
    transition:
      opacity 0.25s,
      transform 0.25s;

    border-style: solid;
    border-width: 0 8px 0 8px;
    border-color: ${({$colors:e})=>e.secondary};
  }

  .play {
    position: absolute;
    top: 240px;
    left: calc(50% - 11px);
    opacity: 0;
    transform: scale(0, 0);
    transition:
      opacity 0.25s,
      transform 0.25s;

    border-style: solid;
    border-width: 13px 0px 13px 25px;
    border-color: transparent transparent transparent ${({$colors:e})=>e.secondary};
  }

  .ribbon {
    position: absolute;
    top: -6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({$colors:e})=>e.primary};
    font-size: 32px;
    line-height: 50px;

    &.thousands {
      left: 7px;
      ${$o}
      animation-duration: 10000s;
    }

    &.hundreds {
      left: 32px;
      ${$o}
      animation-duration: 1000s;
    }

    &.tens {
      left: 57px;
      ${$o}
      animation-duration: 100s;
    }

    &.ones {
      left: 82px;
      ${$o}
      animation-duration: 10s;
    }
  }
`,Io=({position:e})=>c.jsxs("div",{className:`ribbon ${e}`,children:[c.jsx("span",{children:"0"}),c.jsx("span",{children:"1"}),c.jsx("span",{children:"2"}),c.jsx("span",{children:"3"}),c.jsx("span",{children:"4"}),c.jsx("span",{children:"5"}),c.jsx("span",{children:"6"}),c.jsx("span",{children:"7"}),c.jsx("span",{children:"8"}),c.jsx("span",{children:"9"})]}),my=c.jsxs(c.Fragment,{children:[c.jsx("p",{children:"Click the button to pause / continue the timer."}),c.jsx("div",{className:"explanation-line"}),c.jsx("p",{children:"Believe it or not, it was the pause button in this challenge that gave me the least amount of trouble. Once I figured out how to get the clock working, pausing the animation was super straight forward."}),c.jsx("p",{children:`But I'm getting ahead of myself! The counter works kind of like an old school flip clock: each digit is actually an absolutely positioned column of the numbers 0–9. The "counting" is simply each column ticking up one place independently of each other. This was accomplished with a CSS animation that changes the vertical positioning of each column. Once a column gets to the number 9, its animation resets. The speed of each column is controlled through its animation's duration.`}),c.jsx("p",{children:"To get the pause effect working I turned back to our good friend the checkbox. When you click on the pause button what you're actually doing is filling in an empty checkbox. Using the checkbox's :checked pseudo class and the CSS general sibling combinator I was able to set each column's animation-play-state to paused when the checkbox is checked."})]});function gy(){const{currentPalette:e}=we();return c.jsxs(hy,{$colors:e,children:[c.jsx(wn,{number:"51",children:my}),c.jsxs(xn,{className:"clock",children:[c.jsx("input",{className:"input",type:"checkbox"}),c.jsx("div",{className:"pause"}),c.jsx("div",{className:"play"}),c.jsxs("div",{className:"display",children:[c.jsx(Io,{position:"thousands"}),c.jsx(Io,{position:"hundreds"}),c.jsx(Io,{position:"tens"}),c.jsx(Io,{position:"ones"})]})]})]})}const Me=e=>lo`
  animation-name: fade, move_${e};
  animation-duration: 0.7s, 0.7s;
  animation-delay: 0s, 0s;
  animation-iteration-count: 1, 1;
`,yy=D.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  .flower {
    position: relative;
    height: 400px;
    width: 400px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: ${({$colors:e})=>e.primary};
    border-radius: 3px;
    z-index: 1;
  }

  @keyframes fade {
    0%   { opacity: 1; }
    100% { opacity: 0; }
  }

  @keyframes move_01 { // 0
    0%   { left: 0; bottom: 10px; }
    100% { left: 0; bottom: 60px; }
  }
  @keyframes move_02 { // 30
    0%   { left: 10px; bottom: 7px; }
    100% { left: 35px; bottom: 51px; }
  }
  @keyframes move_03 { // 60
    0%   { left: 17px; bottom: 0px; }
    100% { left: 61px; bottom: 25px; }
  }
  @keyframes move_04 { // 90
    0%   { left: 20px; bottom: -10px; }
    100% { left: 70px; bottom: -10px; }
  }
  @keyframes move_05 { // 120
    0%   { left: 17px; bottom: -20px; }
    100% { left: 61px; bottom: -45px; }
  }
  @keyframes move_06 { // 150
    0%   { left: 10px; bottom: -27px; }
    100% { left: 35px; bottom: -71px; }
  }
  @keyframes move_07 { // 180
    0%   { left: 0; bottom: -30px; }
    100% { left: 0; bottom: -80px; }
  }
  @keyframes move_08 { // 210
    0%   { left: -10px; bottom: -27px; }
    100% { left: -35px; bottom: -71px; }
  }
  @keyframes move_09 { // 240
    0%   { left: -17px; bottom: -20px; }
    100% { left: -61px; bottom: -45px; }
  }
  @keyframes move_10 { // 270
    0%   { left: -20px; bottom: -10px; }
    100% { left: -70px; bottom: -10px; }
  }
  @keyframes move_11 { // 300
    0%   { left: -17px; bottom: 0; }
    100% { left: -61px; bottom: 25px; }
  }
  @keyframes move_12 { // 330
    0%   { left: -10px; bottom: 7px; }
    100% { left: -35px; bottom: 51px; }
  }

  .stem {
    appearance: none;
    height: 50px;
    width: 50px;
    background: ${({$colors:e})=>e.secondary};
    border-radius: 50%;
    box-shadow: inset 0 0 0 3px ${({$colors:e})=>e.tertiary};
    cursor: pointer;
    z-index: 3;
    transition:
      background 0.3s,
      box-shadow 0.3s;

    &:checked {
      box-shadow: inset 0 0 0 18px ${({$colors:e})=>e.tertiary};
    }

    &:checked ~ .petals .n01 { ${Me("01")} }
    &:checked ~ .petals .n02 { ${Me("02")} }
    &:checked ~ .petals .n03 { ${Me("03")} }
    &:checked ~ .petals .n04 { ${Me("04")} }
    &:checked ~ .petals .n05 { ${Me("05")} }
    &:checked ~ .petals .n06 { ${Me("06")} }
    &:checked ~ .petals .n07 { ${Me("07")} }
    &:checked ~ .petals .n08 { ${Me("08")} }
    &:checked ~ .petals .n09 { ${Me("09")} }
    &:checked ~ .petals .n10 { ${Me("10")} }
    &:checked ~ .petals .n11 { ${Me("11")} }
    &:checked ~ .petals .n12 { ${Me("12")} }
  }

  .petals {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }

  .petal {
    height: 20px;
    width: 2px;
    position: absolute;
    background: ${({$colors:e})=>e.tertiary};

    &.n02 { transform: rotate(30deg); }
    &.n03 { transform: rotate(60deg); }
    &.n04 { transform: rotate(90deg); }
    &.n05 { transform: rotate(120deg); }
    &.n06 { transform: rotate(150deg); }
    &.n07 { transform: rotate(180deg); }
    &.n08 { transform: rotate(210deg); }
    &.n09 { transform: rotate(240deg); }
    &.n10 { transform: rotate(270deg); }
    &.n11 { transform: rotate(300deg); }
    &.n12 { transform: rotate(330deg); }
  }
`,vy=c.jsxs(c.Fragment,{children:[c.jsx("p",{children:"Click the circle to watch a flower bloom."}),c.jsx("div",{className:"explanation-line"}),c.jsx("p",{children:"This one was deceptively easy."}),c.jsx("p",{children:"The main part of the flower — the circle — is simply a checkbox; unfilled is unchecked, filled is checked. The petals that fly off are just divs styled to be short lines. I got them to move using a series of animations that trigger when the checkbox gets clicked (thank you general sibling combinator!)."}),c.jsx("p",{children:"The hard part was all the trigonometry I had to do to get the petals in the right positions. Each petal is basically the same line rotated around the center of the flower; using trig I was able to plot their trajectories away from the center evenly. There might be a less math-heavy way of doing this, but because the animations are just moving along straight lines that I already calculated, this way is definitely efficient!"})]});function xy(){const{currentPalette:e}=we();return c.jsxs(yy,{$colors:e,children:[c.jsx(wn,{number:"66",children:vy}),c.jsxs(xn,{className:"flower",children:[c.jsx("input",{className:"stem",defaultChecked:!1,onMouseUp:t=>t.target.blur(),type:"checkbox"}),c.jsxs("div",{className:"petals",children:[c.jsx("div",{className:"petal n01"}),c.jsx("div",{className:"petal n02"}),c.jsx("div",{className:"petal n03"}),c.jsx("div",{className:"petal n04"}),c.jsx("div",{className:"petal n05"}),c.jsx("div",{className:"petal n06"}),c.jsx("div",{className:"petal n07"}),c.jsx("div",{className:"petal n08"}),c.jsx("div",{className:"petal n09"}),c.jsx("div",{className:"petal n10"}),c.jsx("div",{className:"petal n11"}),c.jsx("div",{className:"petal n12"})]})]})]})}const yp=200,hc=e=>{let t="";for(let n=1;n<=yp*2;n++)t+=`
      .slice.n${n}:focus ~ .overlay,
      .slice.n${n}:hover ~ .overlay {
        height: ${n*e}px;
        transition: none;
      }
    `;return t},wy=D.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  .hover {
    position: relative;
    height: 300px;
    width: 300px;
    display: flex;
    flex-direction: column;
    background: ${({$colors:e})=>e.primary};
    border-radius: 3px;
    overflow: hidden;
  }

  .slice {
    outline: 0;
    height: 1.5px;
    width: 100%;
    cursor: pointer;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 150px;
    width: 100%;
    background: ${({$colors:e})=>e.secondary};
    pointer-events: none;
    z-index: 2;
    transition: height 1s ease;
  }

  ${hc(1.5)}

  .text {
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    color: white;
    font-family: sans-serif;
    font-size: 48px;
    font-weight: bold;
    letter-spacing: 3px;
    text-align: center;
    pointer-events: none;
    transform: translateY(-50%);

    &.one {
      z-index: 1;
    }

    &.two {
      filter: blur(5px);
      z-index: 3;
    }
  }

  @media only screen and (min-width: 768px) {
    .hover {
      height: 400px;
      width: 400px;
    }

    .slice {
      height: 2px;
      width: 100%;
      cursor: pointer;
    }

    .overlay {
      height: 200px;
    }

    ${hc(2)}
  }
`,ky=c.jsxs(c.Fragment,{children:[c.jsx("p",{children:"Hover over the word to obfuscate the message."}),c.jsx("div",{className:"explanation-line"}),c.jsx("p",{children:"After going through some other challenges I've picked up on how to handle pure CSS interactivity."}),c.jsx("p",{children:"The background is a series of horizontal grey slivers which, when hovered, increase the height of the foreground orange overlay. The slivers are created with JS, but that's the only JS used. Each sliver gets an index number, and the height of the orange overlay is simply a multiple of whichever sliver is being hovered at the moment."}),c.jsx("p",{children:"To achieve the blur effect on the text I've stacked two spans on top of each other with different z-indices. The higher z-index text has a blur filter while the lower text does not. The order goes: grey background, non-blurred text, orange overlay, blurred text. This causes the non-blurred text to get hidden by the orange layer, leaving only the blurred effect."})]});function Sy(){const{tabIndex:e}=et(),{currentPalette:t}=we();return c.jsxs(wy,{$colors:t,children:[c.jsx(wn,{number:"60",children:ky}),c.jsxs(xn,{className:"hover",children:[[...Array(yp).keys()].map(n=>c.jsx("div",{className:`slice n${n+1}`,onMouseUp:r=>r.target.blur(),tabIndex:e},n)),c.jsx("div",{className:"overlay"}),c.jsx("span",{className:"text one",children:"HOVER"}),c.jsx("span",{className:"text two",children:"HOVER"})]})]})}const re=12,ot=25,Ct=10,Cy=e=>{let t="";for(let n=1;n<re;n++)for(let r=1;r<re;r++)t+=`
        .n${n*re}:checked {
          & ~ .n${n*re+r}::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            height: ${ot}px;
            width: ${ot}px;
            background: ${e};
            opacity: 0.6;
          }
        }
      `;return t},Ey=e=>{let t="";for(let n=1;n<re;n++)for(let r=1;r<re;r++)t+=`
        .n${n}:checked {
          & ~ .n${r*re+n}::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            height: ${ot}px;
            width: ${ot}px;
            background: ${e};
            opacity: 0.6;
          }
        }
      `;return t},jy=D.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  .lights-out {
    height: ${re*ot+re*Ct+Ct}px;
    width: ${re*ot+re*Ct+Ct}px;
    position: relative;
    background: white;
    border: 2px solid lightgray;
    border-radius: 8px;
  }

  .square{
    position: absolute;
  }

  ${()=>{let e="";for(let t=0;t<=re*re;t++)e+=`
        .n${t} {
          top: ${Math.floor(t/re)*(ot+Ct)+Ct}px;
          left: ${t%re*(ot+Ct)+Ct}px;
        }
      `;return e}}

  .lights-out input {
    appearance: none;
    height: ${ot}px;
    width: ${ot}px;
    background: lightgray;
    border-radius: 0;
    margin: 0;
    cursor: pointer;

    &:checked {
      background: darkgray;
    }
  }

  ${({$colors:e})=>Cy(e.secondary)}
  ${({$colors:e})=>Ey(e.tertiary)}
`,Py=c.jsxs(c.Fragment,{children:[c.jsx("p",{children:"Click the edges to create a light show."}),c.jsx("div",{className:"explanation-line"}),c.jsx("p",{children:"I thought this up while trying to create a CSS-only game of battleship."}),c.jsxs("p",{children:['My original idea was to use the CSS sibling combinator to link checkbox "cells" together to make ships. That idea fell apart though after I realized that the sibling combinator is actually the ',c.jsx("strong",{children:"subsequent"})," sibling combinator — there's no way for a child element to affect its previous siblings in pure CSS. I still think the idea has merit, and using checkboxes and ::before and ::after pseudo-elements you can definitely make a low-JS battleship. But these aren't mostly-CSS challenges, they're only-CSS challenges! So that will have to wait."]}),c.jsx("p",{children:"As for the light board here in front of you, it's just a little bit of salvage from trying to make battleship. I liked the way that colors blended together when a not-fully-opaque ::before element overlapped with a not-fully-opaque ::after element. The only JavaScript used here is to bulk-create and position the elements that the pseudo-elements attach to; everything you actually see is pure CSS."})]});function _y(){const{currentPalette:e}=we(),t=[],n=o=>{t.push(o)},r=()=>{if(t[0].checked)for(const i of t)i.checked=!0;else for(const i of t)i.checked=!1};return c.jsxs(jy,{$colors:e,children:[c.jsx(wn,{children:Py}),c.jsx(xn,{className:"lights-out",children:[...Array(re*re).keys()].map(o=>o===0?c.jsx("input",{className:`square n${o} origin`,onClick:r,onMouseUp:i=>i.target.blur(),ref:n,type:"checkbox"},o):o<=re-1||o%re===0?c.jsx("input",{className:`square n${o}`,onMouseUp:i=>i.target.blur(),ref:n,type:"checkbox"},o):c.jsx("div",{className:`square n${o}`},o))})]})}const Xo=400,Ny=D.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  .maze {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background: ${({$colors:e})=>e.primary};
    border-radius: 3px;
    overflow: hidden;
  }

  .monster {
    position: absolute;
    background: ${({$colors:e})=>e.secondary};
    border-radius: 50%;
    z-index: 1;
    pointer-events: none;
    transition: all 0.5s ease-out;
  }

  .monster::after{
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    height: 25px;
    width: 25px;
    border: 1px solid ${({$colors:e})=>e.secondary};
    border-radius: 50%;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease;
    animation-name: ping;
  }

  @keyframes ping {
    from {
      transform: scale(1);
      opacity: 1;
    }

    to {
      transform: scale(3);
      opacity: 0;
    }
  }

  @media only screen and (max-width: 576px) {
    .maze {
      height: 300px;
      width: 300px;
    }

    .cell {
      height: 15px;
      width: 15px;
    }

    ${()=>{let e="";for(let t=1;t<Xo;t++){let n=t%20*15-138,r=Math.floor(t/20)*15-138;n>140&&(n=n-15),r>140&&(r=r-15),e+=`
          .cell.n${t}:hover ~ .monster {
            transform: translate(${n}px, ${r}px);
            transition: all 0.3s ease-out;
          }
        `}return e}}

    .monster {
      top: 138px;
      left: 138px;
      height: 30px;
      width: 30px;
    }

    .monster::after {
      top: -1px;
      left: -1px;
      height: 30px;
      width: 30px;
    }
  }

  @media only screen and (min-width: 577px) and (max-width: 767px) {
    .maze {
      height: 400px;
      width: 400px;
    }

    .cell {
      height: 20px;
      width: 20px;
    }

    ${()=>{let e="";for(let t=1;t<Xo;t++){let n=t%20*20-190,r=Math.floor(t/20)*20-190;n>180&&(n=n-5),r>180&&(r=r-5),e+=`
          .cell.n${t}:hover ~ .monster {
            transform: translate(${n}px, ${r}px);
            transition: all 0.3s ease-out;
          }
        `}return e}}

    .monster {
      top: 190px;
      left: 190px;
      height: 25px;
      width: 25px;
    }

    .monster::after {
      top: -1px;
      left: -1px;
      height: 25px;
      width: 25px;
    }
  }

  @media only screen and (min-width: 768px) {
    .maze {
      height: 500px;
      width: 500px;
    }

    .cell {
      height: 25px;
      width: 25px;
    }

    ${()=>{let e="";for(let t=1;t<Xo;t++){let n=t%20*25-238,r=Math.floor(t/20)*25-238;e+=`
          .cell.n${t}:hover ~ .monster {
            transform: translate(${n}px, ${r}px);
            transition: all 0.3s ease-out;
          }
        `}return e}}

    .monster {
      top: 238px;
      left: 238px;
      height: 25px;
      width: 25px;
    }

    .monster::after {
      top: -1px;
      left: -1px;
      height: 25px;
      width: 25px;
    }
  }
`,$y=c.jsxs(c.Fragment,{children:[c.jsx("p",{children:"Hover over the playing field to flee!"}),c.jsx("p",{children:"(works best in Chromium-based browsers)"}),c.jsx("div",{className:"explanation-line"}),c.jsx("p",{children:"This challenge was actually a lot simplier than I thought it would be."}),c.jsx("p",{children:"I racked my brain for a while trying to figure out how to pass the cursor position to the chasing circle. Eventually I decided to break the field into a grid of squares, then use CSS and math to loop through the grid and reverse engineer the coordinate positioning of each square."}),c.jsx("p",{children:"I thought this was cheating, but after looking at how the demo template was created I saw it was done in almost exactly the same way. So... if it is cheating, then teacher cheated too :)"}),c.jsx("p",{children:"The only JS used is to create the grid. All positioning data is calculated in CSS from the index number of each square."})]});function Iy(){const{currentPalette:e}=we();return c.jsxs(Ny,{$colors:e,children:[c.jsx(wn,{number:"49",children:$y}),c.jsxs(xn,{className:"maze",children:[[...Array(Xo).keys()].map(t=>c.jsx("div",{className:`cell n${t}`},t)),c.jsx("div",{className:"monster"})]})]})}const zy=D.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  .segments {
    position: relative;
    height: 300px;
    width: 300px;
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    overflow: hidden;
  }

  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
    font-size: 12px;
    font-weight: bold;
    color: rgba(255, 255, 255, 0);
    cursor: pointer;
    outline: 0;
    transition:
      height 0.75s ease,
      font-size 0.75s ease,
      color 0.75s ease;
    user-select: none;

    &.dark {
      height: 25%;
      width: 100%;
      background: ${({$colors:e})=>e.primary};
    }

    &.light {
      height: 25%;
      width: 100%;
      background: ${({$colors:e})=>e.secondary};
    }

    &:focus,
    &:hover {
      height: 75%;
      font-size: 26px;
      color: #ffffff;
      transition:
        height 0.75s ease,
        font-size 0.75s ease,
        color 0.75s ease;
    }
  }

  @media only screen and (min-width: 768px) {
    .segments {
      height: 400px;
      width: 400px;
    }

    .box {
      &:focus,
      &:hover {
        font-size: 30px;
      }
    }
  }
`,Ry=c.jsxs(c.Fragment,{children:[c.jsx("p",{children:"Hover over the segments to watch them expand."}),c.jsx("div",{className:"explanation-line"}),c.jsx("p",{children:"I completed this challenge using flexbox and height manipulation on CSS events. Flexbox keeps the colored boxes organized and in place while :focus and :hover events increase the hovered box's dimensions."}),c.jsx("p",{children:"The animations are done entirely in CSS; the only JS used is to blur a box on mouse up to ensure wayward clicks don't cause two boxes to expand at once."}),c.jsx("p",{children:"The animations are fully responsive and work with both mouse and keyboard."})]}),zo=e=>{const{children:t,color:n}=e,{tabIndex:r}=et();return c.jsx("div",{className:`box ${n}`,onMouseUp:o=>o.target.blur(),tabIndex:r,children:c.jsx("span",{children:t})})};function Ty(){const{currentPalette:e}=we();return c.jsxs(zy,{$colors:e,children:[c.jsx(wn,{number:"80",children:Ry}),c.jsxs(xn,{className:"segments",children:[c.jsx(zo,{color:"dark",children:"FIRST"}),c.jsx(zo,{color:"light",children:"SECOND"}),c.jsx(zo,{color:"dark",children:"THIRD"}),c.jsx(zo,{color:"light",children:"FOURTH"})]})]})}const Ly=D.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .buttons {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #ffffff;
    margin: 0 0 10px 0;
    z-index: 20;
  }

  .return-link {
    font-size: 16px;
    margin: 0 0 0 10px;
  }

  .explanation-button {
    font-size: 16px;
    margin: 0 10px 0 0;
  }

  @media only screen and (min-width: 576px) {
    .return-link,
    .explanation-button {
      font-size: 20px;
    }
  }

  @media only screen and (min-width: 768px) {
    .return-link,
    .explanation-button {
      font-size: 24px;
    }
  }
`;function Oy(){const{showExplanation:e,toggleExplanation:t}=Ma();return c.jsxs(Ly,{$blur:e,children:[c.jsxs(Bf,{children:[c.jsx(Ie,{path:"/alien",element:c.jsx(fy,{})}),c.jsx(Ie,{path:"/clock",element:c.jsx(gy,{})}),c.jsx(Ie,{path:"/flower",element:c.jsx(xy,{})}),c.jsx(Ie,{path:"/hover",element:c.jsx(Sy,{})}),c.jsx(Ie,{path:"/lights-out",element:c.jsx(_y,{})}),c.jsx(Ie,{path:"/monster",element:c.jsx(Iy,{})}),c.jsx(Ie,{path:"/segments",element:c.jsx(Ty,{})})]}),c.jsxs("div",{className:"buttons",children:[c.jsx(Fe,{className:"return-link",to:"/odds-and-ends",children:"Go back"}),c.jsxs(gp,{className:"explanation-button",onClick:t,children:[e?"Hide":"See"," Explanation"]})]})]})}const My=D(Fa)`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${({$colors:e,$selected:t})=>t?e.linkInteraction:"#000000"};

  &:focus, &:hover {
    color: ${({$colors:e})=>e.linkInteraction};
  }

  .swatch {
    height: 50px;
    width: 50px;
    display: flex;
    flex-direction: column;
    margin: 0 10px 0 0;

    div {
      height: 50%;
      width: 100%;
    }
    .primary {
      background-color: ${({$colors:e})=>e.primary};
    }
    .secondary {
      background-color: ${({$colors:e})=>e.secondary};
    }
  }

  span {
    font-size: 24px;
  }
`;function Fy(e){const{palette:t}=e,{tabIndex:n}=et(),{currentPalette:r,setPalette:o}=we(),i=M.useCallback(l=>{l.stopPropagation(),o(t)},[t,o]);return c.jsxs(My,{onClick:i,onKeyDown:l=>l.stopPropagation(),onMouseUp:l=>l.currentTarget.blur(),tabIndex:n,$colors:t,$selected:t.name===r.name,children:[c.jsxs("div",{className:"swatch",children:[c.jsx("div",{className:"primary"}),c.jsx("div",{className:"secondary"})]}),c.jsx("span",{children:t.name})]})}const Dy=D.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  &::after {
    content: 'buffer zone';
    height: 10px;
    width: 100%;
    background: #ffffff;
    opacity: 0;
  }

  h2 {
    font-size: 30px;
    text-align: center;
  }

  .paints {
    display: grid;
    grid-template-columns: auto;
    grid-row-gap: 30px;
    margin: 40px 0 0 0;
  }

  .acknowledgment {
    align-self: flex-end;
    font-size: 12px;
    margin: 30px 0 0 0;
  }

  @media only screen and (min-width: 768px) {
    .paints {
      grid-template-columns: repeat(2, auto);
      grid-column-gap: 60px;
    }

    .acknowledgment {
      margin: 20px 0 0 0;
    }
  }

  @media only screen and (min-width: 992px) {
    .paints {
      grid-template-columns: repeat(3, auto);
      grid-row-gap: 40px;
    }
  }

  @media only screen and (min-width: 1200px) {
    .paints {
      grid-template-columns: repeat(4, auto);
      grid-row-gap: 50px;
    }
  }

  @media only screen and (min-width: 1440px) {
    .paints {
      grid-template-columns: repeat(5, auto);
      grid-row-gap: 60px;
    }
  }
`;function Ay(){const{palettes:e}=we();return c.jsxs(Dy,{children:[c.jsx("h2",{children:"Paint the sky"}),c.jsx("div",{className:"paints",children:e.map(t=>c.jsx(Fy,{palette:t},t.name))}),c.jsxs("span",{className:"acknowledgment",children:["Color palettes inspired by ",c.jsx(Wt,{to:"https://downwellgame.com/",children:"downwell"})]})]})}const Uy=D.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 40px 0;

  img {
    max-width: 100%;
    object-fit: contain;
    margin: 0 0 10px 0;
  }

  .info {
    display: flex;
    flex-direction: column;
  }

  .title {
    font-size: 28px;
    margin: 0 0 10px 0;
  }

  .description p {
    font-size: 16px;
    margin: 0 0 10px 0;
  }
  .description p:last-child {
    margin: 0;
  }

  @media only screen and (min-width: 768px) {
    img {
      max-width: 400px;
    }
  }

  @media only screen and (min-width: 992px) {
    flex-direction: row;

    img {
      max-width: 300px;
      margin: 0 20px 0 0;
    }
  }
`;function By(e){const{desc:t,imgDesc:n,imgSrc:r,link:o,title:i}=e;return c.jsxs(Uy,{children:[c.jsx(Wt,{to:o,children:c.jsx("img",{alt:n,className:"project_card__img",src:`/projects/${r}`})}),c.jsxs("div",{className:"info",children:[c.jsx("h2",{className:"title",children:i}),c.jsxs("div",{className:"description",children:[t,c.jsxs("p",{children:["Live link: ",c.jsx(Wt,{to:o,children:i})]})]})]})]})}const Wy=D.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`,Hy=[{desc:c.jsxs(c.Fragment,{children:[c.jsx("p",{children:"Neon Circles is a claustrophobic shoot-em-up in the likeness of Space Invaders and Asteroids. You are stuck on the inside of a circle and can only point towards the center. To shoot the demons shooting you, you must aim through the circle and out the other side."}),c.jsx("p",{children:"Designed and built in a week, Neon Circles is both a love letter to the shoot-em-up genre and the first draft of a larger idea. It was coded solely in JS and is drawn on Canvas. All game mechanics and sprites were designed from scratch."})]}),imgDesc:`The words "Neon Circles" in an 80's style font, inside a thin circle`,imgSrc:"neon_circles.png",link:"https://atomicretro.github.io/neon_circles/",title:"Neon Circles"}];function Vy(){return c.jsx(Wy,{children:Hy.map(e=>c.jsx(By,{...e},e.title))})}const Qy=D.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "header"
    "column1"
    "column2";
  row-gap: 30px;

  @media only screen and (min-width: 768px) {
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    grid-template-areas:
      "header header"
      "column1 column2";
    row-gap: 25px;
  }

  .header {
    grid-area: header;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 28px;
      margin: 0 0 10px 0;
    }

    span {
      width: 60%;
      font-size: 14px;
      line-height: 18px;
      text-align: center;
    }
  }

  .column {
    display: flex;
    flex-direction: column;
    align-items: center;

    &.c1 { grid-area: column1; }
    &.c2 { grid-area: column2; }

    span {
      font-size: 10px;
      margin: 0 0 20px 0;

      a {
        font-size: 10px;
      }
    }

    a {
      font-size: 30px;
      margin: 0 0 20px 0;
    }
  }
`;function Ky(){return c.jsxs(Qy,{children:[c.jsxs("div",{className:"header",children:[c.jsx("h2",{children:"CSS-Only Challenges"}),c.jsx("span",{children:"Each of the below images, animations, and interactions was made entirely in CSS, unless otherwise stated in its explanation."})]}),c.jsxs("div",{className:"column c1",children:[c.jsxs("span",{children:["From ",c.jsx(Wt,{to:"https://100dayscss.com/",children:"100 Days CSS Challenge"})]}),c.jsx(Fe,{to:"/css/alien",children:"alien"}),c.jsx(Fe,{to:"/css/clock",children:"clock"}),c.jsx(Fe,{to:"/css/flower",children:"flower"}),c.jsx(Fe,{to:"/css/hover",children:"hover"}),c.jsx(Fe,{to:"/css/monster",children:"monster"}),c.jsx(Fe,{to:"/css/segments",children:"segments"})]}),c.jsxs("div",{className:"column c2",children:[c.jsx("span",{children:"From my brain"}),c.jsx(Fe,{to:"/css/lights-out",children:"light board"})]})]})}const Gy=D.div`
  display: flex;
  flex-direction: column;
`;function Yy(){return c.jsx(Gy,{children:c.jsx(Ky,{})})}const Xy=D.section`
  position: relative;
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-grow: 1;
  background-color: #ffffff;
  padding: 25px 0 0 0;
  overflow: auto;
  z-index: 1;
`;function Jy(){return c.jsx(Xy,{tabIndex:"-1",children:c.jsxs(Bf,{children:[c.jsx(Ie,{element:c.jsx(oy,{}),path:"/contact"}),c.jsx(Ie,{element:c.jsx(ty,{children:c.jsx(Oy,{})}),path:"/css/*"}),c.jsx(Ie,{element:c.jsx(Yy,{}),path:"/odds-and-ends"}),c.jsx(Ie,{element:c.jsx(Vy,{}),path:"/projects"}),c.jsx(Ie,{element:c.jsx(Ay,{}),path:"/"})]})})}const Zy=D.nav`
  height: 40px;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index: 2;

  div {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  a:link, a:visited, button {
    font-size: 13px;
  }

  @media only screen and (min-width: 576px) {
    div {
      width: 90%;
    }

    a:link, a:visited, button {
      font-size: 15px;
    }
  }

  @media only screen and (min-width: 768px) {
    a:link, a:visited, button {
      font-size: 18px;
    }
  }
`;function qy(){const{handleBackgroundInteraction:e}=et(),t=n=>{n.stopPropagation(),e(!1)};return c.jsx(Zy,{children:c.jsxs("div",{children:[c.jsx(Fe,{to:"/",children:"Home"}),c.jsx(Fe,{to:"/projects",children:"Projects"}),c.jsx(Fe,{to:"/odds-and-ends",children:"Odds and Ends"}),c.jsx(Fe,{to:"/contact",children:"Contact"}),c.jsx(gp,{onClick:t,children:"Stargaze"})]})})}const by=D.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  ${({$backgroundInteraction:e})=>e&&`
    transition: transform 0.5s ease-out;
  `}

  ${({$hidden:e})=>e&&`
    transform: translate(0, calc(100vh - 100px));
    pointer-events: none;
  `}

  @media only screen and (min-width: 768px) {
    ${({$hidden:e})=>e&&`
      transform: translate(0, calc(100vh - 110px));
    `}
  }
`;function e1(){const e=oo(),{backgroundInteraction:t,showContent:n,setShowContent:r}=et();return M.useEffect(()=>{e.pathname!=="/"&&r(!0)},[]),c.jsxs(by,{$backgroundInteraction:t,$hidden:!n,children:[c.jsx(ey,{}),c.jsx(qy,{}),c.jsx(Jy,{})]})}const t1=D(Fa)`
  position: absolute;
  top: 10px;
  color: #ffffff;
  font-size: 16px;
  z-index: 100;
  opacity: 1;
  transition: opacity 0.5s ease-in-out;

  ${({$hidden:e})=>e&&`
    opacity: 0;
    pointer-events: none;
  `}

  &:focus, &:hover {
    color: ${({$colors:e})=>e.secondary};
  }
`;function mc(e){const{children:t,className:n,onClick:r,tabIndex:o}=e,{currentPalette:i}=we();return c.jsx(t1,{className:n,onMouseUp:l=>l.currentTarget.blur(),onClick:r||null,tabIndex:o||"0",$colors:i,$hidden:o==="-1",children:t})}const n1=D.main`
  outline: 0;
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  .main-button {
    position: absolute;
    top: 10px;

    &.random { left: 10px; }
    &.enter { right: 10px; }
  }

  @media only screen and (min-width: 768px) {
    .main-button {
      top: 12px;
      font-size: 18px;

      &.random { left: 12px; }
      &.enter { right: 12px; }
    }
  }
`;function r1(){const{pickRandomPalette:e}=we(),{handleBackgroundInteraction:t,showContent:n}=et(),r=o=>{o.stopPropagation(),e()};return c.jsxs(n1,{onClick:()=>t(!0),tabIndex:n?"-1":"0",children:[c.jsx(e1,{}),c.jsx(mc,{className:"main-button random",onClick:r,children:"Random palette"}),c.jsx(mc,{className:"main-button enter",tabIndex:n?"-1":"0",children:"Click to enter"})]})}const o1=e=>{const t=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/t},i1=(e,t)=>{const n=o1(t),r=getComputedStyle(e).getPropertyValue("width").slice(0,-2),o=getComputedStyle(e).getPropertyValue("height").slice(0,-2);e.width=r*n,e.height=o*n,e.style.width=`${r}px`,e.style.height=`${o}px`},l1=1e3,s1=D.canvas`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -4;
`;class a1{constructor({alpha:t,alphaStep:n,size:r,x:o,y:i}){Da(this,"updateAlpha",()=>{let t=this.alpha+this.alphaStep;t>=1?(t=1,this.alphaStep=this.alphaStep*-1):t<=0&&(t=0,this.alphaStep=this.alphaStep*-1),this.alpha=t});this.x=o,this.y=i,this.size=r,this.alpha=t,this.alphaStep=n}}function u1(e){const{currentPalette:t}=e,n=M.useRef(),[r,o]=M.useState([]);return M.useEffect(()=>{const i=n.current,l=i.getContext("2d");i1(i,l)},[]),M.useEffect(()=>{const i=n.current,l=[];for(let s=0;s<l1;s++){let a=Cn(5,12)/3e3;a*=Cn(1,3)===1?-1:1;const u=new a1({alpha:Math.random(),alphaStep:a,size:Cn(1,5),x:Cn(1,i.width),y:Cn(1,i.height)});l.push(u)}o(l)},[]),M.useEffect(()=>{const l=n.current.getContext("2d");let s;const a=()=>{for(let u=0;u<r.length;u++){const f=r[u];l.fillStyle=t.primary,l.fillRect(f.x,f.y,f.size,f.size),l.fill(),f.updateAlpha(),l.fillStyle=t.secondary,l.globalAlpha=f.alpha,l.fillRect(f.x,f.y,f.size,f.size),l.fill()}s=requestAnimationFrame(a)};return a(),()=>{cancelAnimationFrame(s)}}),c.jsx(s1,{className:"stars",ref:n})}const c1=D.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: ${({$colors:e})=>e.primary};
  z-index: -5;
`;function d1(){const{currentPalette:e}=we();return c.jsx(c1,{$colors:e,children:c.jsx(u1,{currentPalette:e})})}const f1=Zg`
  body {
    font-family: 'Alata', sans-serif;
  }

  strong {
    font-weight: bold;
  }

  .root {
    height: 100vh;
    width: 100vw;
  }
`,p1=If(document.getElementById("root"));p1.render(c.jsx(X0,{children:c.jsx(Z0,{children:c.jsxs(H0,{children:[c.jsx(f1,{}),c.jsx(d1,{}),c.jsx(r1,{})]})})}));
