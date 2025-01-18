var vp=Object.defineProperty;var xp=(e,t,n)=>t in e?vp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Fa=(e,t,n)=>xp(e,typeof t!="symbol"?t+"":t,n);function wp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const i=Object.getOwnPropertyDescriptor(r,l);i&&Object.defineProperty(e,l,i.get?i:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function kp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var gc={exports:{}},ji={},yc={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qr=Symbol.for("react.element"),Sp=Symbol.for("react.portal"),Cp=Symbol.for("react.fragment"),Ep=Symbol.for("react.strict_mode"),jp=Symbol.for("react.profiler"),Pp=Symbol.for("react.provider"),_p=Symbol.for("react.context"),Np=Symbol.for("react.forward_ref"),$p=Symbol.for("react.suspense"),Ip=Symbol.for("react.memo"),zp=Symbol.for("react.lazy"),Aa=Symbol.iterator;function Rp(e){return e===null||typeof e!="object"?null:(e=Aa&&e[Aa]||e["@@iterator"],typeof e=="function"?e:null)}var vc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xc=Object.assign,wc={};function nr(e,t,n){this.props=e,this.context=t,this.refs=wc,this.updater=n||vc}nr.prototype.isReactComponent={};nr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};nr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function kc(){}kc.prototype=nr.prototype;function Rs(e,t,n){this.props=e,this.context=t,this.refs=wc,this.updater=n||vc}var Ts=Rs.prototype=new kc;Ts.constructor=Rs;xc(Ts,nr.prototype);Ts.isPureReactComponent=!0;var Ua=Array.isArray,Sc=Object.prototype.hasOwnProperty,Ls={current:null},Cc={key:!0,ref:!0,__self:!0,__source:!0};function Ec(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)Sc.call(t,r)&&!Cc.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];l.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:qr,type:e,key:i,ref:o,props:l,_owner:Ls.current}}function Tp(e,t){return{$$typeof:qr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Os(e){return typeof e=="object"&&e!==null&&e.$$typeof===qr}function Lp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ba=/\/+/g;function Zi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Lp(""+e.key):t.toString(36)}function zl(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case qr:case Sp:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Zi(o,0):r,Ua(l)?(n="",e!=null&&(n=e.replace(Ba,"$&/")+"/"),zl(l,t,n,"",function(u){return u})):l!=null&&(Os(l)&&(l=Tp(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Ba,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",Ua(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+Zi(i,s);o+=zl(i,t,n,a,l)}else if(a=Rp(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+Zi(i,s++),o+=zl(i,t,n,a,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ul(e,t,n){if(e==null)return e;var r=[],l=0;return zl(e,r,"","",function(i){return t.call(n,i,l++)}),r}function Op(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ve={current:null},Rl={transition:null},Mp={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:Rl,ReactCurrentOwner:Ls};L.Children={map:ul,forEach:function(e,t,n){ul(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ul(e,function(){t++}),t},toArray:function(e){return ul(e,function(t){return t})||[]},only:function(e){if(!Os(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=nr;L.Fragment=Cp;L.Profiler=jp;L.PureComponent=Rs;L.StrictMode=Ep;L.Suspense=$p;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mp;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=xc({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=Ls.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Sc.call(t,a)&&!Cc.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:qr,type:e.type,key:l,ref:i,props:r,_owner:o}};L.createContext=function(e){return e={$$typeof:_p,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Pp,_context:e},e.Consumer=e};L.createElement=Ec;L.createFactory=function(e){var t=Ec.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:Np,render:e}};L.isValidElement=Os;L.lazy=function(e){return{$$typeof:zp,_payload:{_status:-1,_result:e},_init:Op}};L.memo=function(e,t){return{$$typeof:Ip,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=Rl.transition;Rl.transition={};try{e()}finally{Rl.transition=t}};L.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};L.useCallback=function(e,t){return ve.current.useCallback(e,t)};L.useContext=function(e){return ve.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return ve.current.useDeferredValue(e)};L.useEffect=function(e,t){return ve.current.useEffect(e,t)};L.useId=function(){return ve.current.useId()};L.useImperativeHandle=function(e,t,n){return ve.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return ve.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return ve.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return ve.current.useMemo(e,t)};L.useReducer=function(e,t,n){return ve.current.useReducer(e,t,n)};L.useRef=function(e){return ve.current.useRef(e)};L.useState=function(e){return ve.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return ve.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return ve.current.useTransition()};L.version="18.2.0";yc.exports=L;var N=yc.exports;const M=kp(N),Dp=wp({__proto__:null,default:M},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp=N,Ap=Symbol.for("react.element"),Up=Symbol.for("react.fragment"),Bp=Object.prototype.hasOwnProperty,Wp=Fp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Hp={key:!0,ref:!0,__self:!0,__source:!0};function jc(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Bp.call(t,r)&&!Hp.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Ap,type:e,key:i,ref:o,props:l,_owner:Wp.current}}ji.Fragment=Up;ji.jsx=jc;ji.jsxs=jc;gc.exports=ji;var c=gc.exports,Pc={exports:{}},Le={},_c={exports:{}},Nc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,I){var z=P.length;P.push(I);e:for(;0<z;){var U=z-1>>>1,B=P[U];if(0<l(B,I))P[U]=I,P[z]=B,z=U;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var I=P[0],z=P.pop();if(z!==I){P[0]=z;e:for(var U=0,B=P.length,Jt=B>>>1;U<Jt;){var Ve=2*(U+1)-1,wt=P[Ve],_e=Ve+1,at=P[_e];if(0>l(wt,z))_e<B&&0>l(at,wt)?(P[U]=at,P[_e]=z,U=_e):(P[U]=wt,P[Ve]=z,U=Ve);else if(_e<B&&0>l(at,z))P[U]=at,P[_e]=z,U=_e;else break e}}return I}function l(P,I){var z=P.sortIndex-I.sortIndex;return z!==0?z:P.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var a=[],u=[],d=1,m=null,g=3,v=!1,x=!1,w=!1,j=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(P){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=P)r(u),I.sortIndex=I.expirationTime,t(a,I);else break;I=n(u)}}function y(P){if(w=!1,h(P),!x)if(n(a)!==null)x=!0,or(C);else{var I=n(u);I!==null&&Xt(y,I.startTime-P)}}function C(P,I){x=!1,w&&(w=!1,p($),$=-1),v=!0;var z=g;try{for(h(I),m=n(a);m!==null&&(!(m.expirationTime>I)||P&&!Pe());){var U=m.callback;if(typeof U=="function"){m.callback=null,g=m.priorityLevel;var B=U(m.expirationTime<=I);I=e.unstable_now(),typeof B=="function"?m.callback=B:m===n(a)&&r(a),h(I)}else r(a);m=n(a)}if(m!==null)var Jt=!0;else{var Ve=n(u);Ve!==null&&Xt(y,Ve.startTime-I),Jt=!1}return Jt}finally{m=null,g=z,v=!1}}var E=!1,k=null,$=-1,W=5,T=-1;function Pe(){return!(e.unstable_now()-T<W)}function Gt(){if(k!==null){var P=e.unstable_now();T=P;var I=!0;try{I=k(!0,P)}finally{I?Yt():(E=!1,k=null)}}else E=!1}var Yt;if(typeof f=="function")Yt=function(){f(Gt)};else if(typeof MessageChannel<"u"){var sl=new MessageChannel,Xi=sl.port2;sl.port1.onmessage=Gt,Yt=function(){Xi.postMessage(null)}}else Yt=function(){j(Gt,0)};function or(P){k=P,E||(E=!0,Yt())}function Xt(P,I){$=j(function(){P(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){x||v||(x=!0,or(C))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(P){switch(g){case 1:case 2:case 3:var I=3;break;default:I=g}var z=g;g=I;try{return P()}finally{g=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,I){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var z=g;g=P;try{return I()}finally{g=z}},e.unstable_scheduleCallback=function(P,I,z){var U=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?U+z:U):z=U,P){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=z+B,P={id:d++,callback:I,priorityLevel:P,startTime:z,expirationTime:B,sortIndex:-1},z>U?(P.sortIndex=z,t(u,P),n(a)===null&&P===n(u)&&(w?(p($),$=-1):w=!0,Xt(y,z-U))):(P.sortIndex=B,t(a,P),x||v||(x=!0,or(C))),P},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(P){var I=g;return function(){var z=g;g=I;try{return P.apply(this,arguments)}finally{g=z}}}})(Nc);_c.exports=Nc;var Vp=_c.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $c=N,Te=Vp;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ic=new Set,Rr={};function mn(e,t){Hn(e,t),Hn(e+"Capture",t)}function Hn(e,t){for(Rr[e]=t,e=0;e<t.length;e++)Ic.add(t[e])}var mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$o=Object.prototype.hasOwnProperty,Qp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wa={},Ha={};function Kp(e){return $o.call(Ha,e)?!0:$o.call(Wa,e)?!1:Qp.test(e)?Ha[e]=!0:(Wa[e]=!0,!1)}function Gp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Yp(e,t,n,r){if(t===null||typeof t>"u"||Gp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xe(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ce[t]=new xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ms=/[\-:]([a-z])/g;function Ds(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ms,Ds);ce[t]=new xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ms,Ds);ce[t]=new xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ms,Ds);ce[t]=new xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Fs(e,t,n,r){var l=ce.hasOwnProperty(t)?ce[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Yp(t,n,l,r)&&(n=null),r||l===null?Kp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var xt=$c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,cl=Symbol.for("react.element"),En=Symbol.for("react.portal"),jn=Symbol.for("react.fragment"),As=Symbol.for("react.strict_mode"),Io=Symbol.for("react.profiler"),zc=Symbol.for("react.provider"),Rc=Symbol.for("react.context"),Us=Symbol.for("react.forward_ref"),zo=Symbol.for("react.suspense"),Ro=Symbol.for("react.suspense_list"),Bs=Symbol.for("react.memo"),jt=Symbol.for("react.lazy"),Tc=Symbol.for("react.offscreen"),Va=Symbol.iterator;function ar(e){return e===null||typeof e!="object"?null:(e=Va&&e[Va]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,qi;function gr(e){if(qi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);qi=t&&t[1]||""}return`
`+qi+e}var bi=!1;function eo(e,t){if(!e||bi)return"";bi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var l=u.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,s=i.length-1;1<=o&&0<=s&&l[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(l[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||l[o]!==i[s]){var a=`
`+l[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=s);break}}}finally{bi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?gr(e):""}function Xp(e){switch(e.tag){case 5:return gr(e.type);case 16:return gr("Lazy");case 13:return gr("Suspense");case 19:return gr("SuspenseList");case 0:case 2:case 15:return e=eo(e.type,!1),e;case 11:return e=eo(e.type.render,!1),e;case 1:return e=eo(e.type,!0),e;default:return""}}function To(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case jn:return"Fragment";case En:return"Portal";case Io:return"Profiler";case As:return"StrictMode";case zo:return"Suspense";case Ro:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Rc:return(e.displayName||"Context")+".Consumer";case zc:return(e._context.displayName||"Context")+".Provider";case Us:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Bs:return t=e.displayName||null,t!==null?t:To(e.type)||"Memo";case jt:t=e._payload,e=e._init;try{return To(e(t))}catch{}}return null}function Jp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return To(t);case 8:return t===As?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Wt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Lc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zp(e){var t=Lc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fl(e){e._valueTracker||(e._valueTracker=Zp(e))}function Oc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Lc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Xl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Lo(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Qa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Wt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Mc(e,t){t=t.checked,t!=null&&Fs(e,"checked",t,!1)}function Oo(e,t){Mc(e,t);var n=Wt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Mo(e,t.type,n):t.hasOwnProperty("defaultValue")&&Mo(e,t.type,Wt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ka(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Mo(e,t,n){(t!=="number"||Xl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var yr=Array.isArray;function Dn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Wt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Do(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ga(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(yr(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Wt(n)}}function Dc(e,t){var n=Wt(t.value),r=Wt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ya(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Fc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Fc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var dl,Ac=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(dl=dl||document.createElement("div"),dl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=dl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Tr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qp=["Webkit","ms","Moz","O"];Object.keys(kr).forEach(function(e){qp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),kr[t]=kr[e]})});function Uc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||kr.hasOwnProperty(e)&&kr[e]?(""+t).trim():t+"px"}function Bc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Uc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var bp=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ao(e,t){if(t){if(bp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Uo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bo=null;function Ws(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wo=null,Fn=null,An=null;function Xa(e){if(e=tl(e)){if(typeof Wo!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Ii(t),Wo(e.stateNode,e.type,t))}}function Wc(e){Fn?An?An.push(e):An=[e]:Fn=e}function Hc(){if(Fn){var e=Fn,t=An;if(An=Fn=null,Xa(e),t)for(e=0;e<t.length;e++)Xa(t[e])}}function Vc(e,t){return e(t)}function Qc(){}var to=!1;function Kc(e,t,n){if(to)return e(t,n);to=!0;try{return Vc(e,t,n)}finally{to=!1,(Fn!==null||An!==null)&&(Qc(),Hc())}}function Lr(e,t){var n=e.stateNode;if(n===null)return null;var r=Ii(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Ho=!1;if(mt)try{var ur={};Object.defineProperty(ur,"passive",{get:function(){Ho=!0}}),window.addEventListener("test",ur,ur),window.removeEventListener("test",ur,ur)}catch{Ho=!1}function eh(e,t,n,r,l,i,o,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Sr=!1,Jl=null,Zl=!1,Vo=null,th={onError:function(e){Sr=!0,Jl=e}};function nh(e,t,n,r,l,i,o,s,a){Sr=!1,Jl=null,eh.apply(th,arguments)}function rh(e,t,n,r,l,i,o,s,a){if(nh.apply(this,arguments),Sr){if(Sr){var u=Jl;Sr=!1,Jl=null}else throw Error(S(198));Zl||(Zl=!0,Vo=u)}}function gn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Gc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ja(e){if(gn(e)!==e)throw Error(S(188))}function lh(e){var t=e.alternate;if(!t){if(t=gn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Ja(l),e;if(i===r)return Ja(l),t;i=i.sibling}throw Error(S(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Yc(e){return e=lh(e),e!==null?Xc(e):null}function Xc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Xc(e);if(t!==null)return t;e=e.sibling}return null}var Jc=Te.unstable_scheduleCallback,Za=Te.unstable_cancelCallback,ih=Te.unstable_shouldYield,oh=Te.unstable_requestPaint,q=Te.unstable_now,sh=Te.unstable_getCurrentPriorityLevel,Hs=Te.unstable_ImmediatePriority,Zc=Te.unstable_UserBlockingPriority,ql=Te.unstable_NormalPriority,ah=Te.unstable_LowPriority,qc=Te.unstable_IdlePriority,Pi=null,ot=null;function uh(e){if(ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(Pi,e,void 0,(e.current.flags&128)===128)}catch{}}var Je=Math.clz32?Math.clz32:dh,ch=Math.log,fh=Math.LN2;function dh(e){return e>>>=0,e===0?32:31-(ch(e)/fh|0)|0}var pl=64,hl=4194304;function vr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function bl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~l;s!==0?r=vr(s):(i&=o,i!==0&&(r=vr(i)))}else o=n&~l,o!==0?r=vr(o):i!==0&&(r=vr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Je(t),l=1<<n,r|=e[n],t&=~l;return r}function ph(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Je(i),s=1<<o,a=l[o];a===-1?(!(s&n)||s&r)&&(l[o]=ph(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function Qo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function bc(){var e=pl;return pl<<=1,!(pl&4194240)&&(pl=64),e}function no(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function br(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Je(t),e[t]=n}function mh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Je(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function Vs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var A=0;function ef(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var tf,Qs,nf,rf,lf,Ko=!1,ml=[],Rt=null,Tt=null,Lt=null,Or=new Map,Mr=new Map,_t=[],gh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qa(e,t){switch(e){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":Tt=null;break;case"mouseover":case"mouseout":Lt=null;break;case"pointerover":case"pointerout":Or.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mr.delete(t.pointerId)}}function cr(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=tl(t),t!==null&&Qs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function yh(e,t,n,r,l){switch(t){case"focusin":return Rt=cr(Rt,e,t,n,r,l),!0;case"dragenter":return Tt=cr(Tt,e,t,n,r,l),!0;case"mouseover":return Lt=cr(Lt,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Or.set(i,cr(Or.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Mr.set(i,cr(Mr.get(i)||null,e,t,n,r,l)),!0}return!1}function of(e){var t=tn(e.target);if(t!==null){var n=gn(t);if(n!==null){if(t=n.tag,t===13){if(t=Gc(n),t!==null){e.blockedOn=t,lf(e.priority,function(){nf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Tl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Go(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Bo=r,n.target.dispatchEvent(r),Bo=null}else return t=tl(n),t!==null&&Qs(t),e.blockedOn=n,!1;t.shift()}return!0}function ba(e,t,n){Tl(e)&&n.delete(t)}function vh(){Ko=!1,Rt!==null&&Tl(Rt)&&(Rt=null),Tt!==null&&Tl(Tt)&&(Tt=null),Lt!==null&&Tl(Lt)&&(Lt=null),Or.forEach(ba),Mr.forEach(ba)}function fr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ko||(Ko=!0,Te.unstable_scheduleCallback(Te.unstable_NormalPriority,vh)))}function Dr(e){function t(l){return fr(l,e)}if(0<ml.length){fr(ml[0],e);for(var n=1;n<ml.length;n++){var r=ml[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Rt!==null&&fr(Rt,e),Tt!==null&&fr(Tt,e),Lt!==null&&fr(Lt,e),Or.forEach(t),Mr.forEach(t),n=0;n<_t.length;n++)r=_t[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<_t.length&&(n=_t[0],n.blockedOn===null);)of(n),n.blockedOn===null&&_t.shift()}var Un=xt.ReactCurrentBatchConfig,ei=!0;function xh(e,t,n,r){var l=A,i=Un.transition;Un.transition=null;try{A=1,Ks(e,t,n,r)}finally{A=l,Un.transition=i}}function wh(e,t,n,r){var l=A,i=Un.transition;Un.transition=null;try{A=4,Ks(e,t,n,r)}finally{A=l,Un.transition=i}}function Ks(e,t,n,r){if(ei){var l=Go(e,t,n,r);if(l===null)po(e,t,r,ti,n),qa(e,r);else if(yh(l,e,t,n,r))r.stopPropagation();else if(qa(e,r),t&4&&-1<gh.indexOf(e)){for(;l!==null;){var i=tl(l);if(i!==null&&tf(i),i=Go(e,t,n,r),i===null&&po(e,t,r,ti,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else po(e,t,r,null,n)}}var ti=null;function Go(e,t,n,r){if(ti=null,e=Ws(r),e=tn(e),e!==null)if(t=gn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Gc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ti=e,null}function sf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sh()){case Hs:return 1;case Zc:return 4;case ql:case ah:return 16;case qc:return 536870912;default:return 16}default:return 16}}var $t=null,Gs=null,Ll=null;function af(){if(Ll)return Ll;var e,t=Gs,n=t.length,r,l="value"in $t?$t.value:$t.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Ll=l.slice(e,1<r?1-r:void 0)}function Ol(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function gl(){return!0}function eu(){return!1}function Oe(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?gl:eu,this.isPropagationStopped=eu,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=gl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=gl)},persist:function(){},isPersistent:gl}),t}var rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ys=Oe(rr),el=J({},rr,{view:0,detail:0}),kh=Oe(el),ro,lo,dr,_i=J({},el,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==dr&&(dr&&e.type==="mousemove"?(ro=e.screenX-dr.screenX,lo=e.screenY-dr.screenY):lo=ro=0,dr=e),ro)},movementY:function(e){return"movementY"in e?e.movementY:lo}}),tu=Oe(_i),Sh=J({},_i,{dataTransfer:0}),Ch=Oe(Sh),Eh=J({},el,{relatedTarget:0}),io=Oe(Eh),jh=J({},rr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ph=Oe(jh),_h=J({},rr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Nh=Oe(_h),$h=J({},rr,{data:0}),nu=Oe($h),Ih={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Th(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Rh[e])?!!t[e]:!1}function Xs(){return Th}var Lh=J({},el,{key:function(e){if(e.key){var t=Ih[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ol(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xs,charCode:function(e){return e.type==="keypress"?Ol(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ol(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Oh=Oe(Lh),Mh=J({},_i,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ru=Oe(Mh),Dh=J({},el,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xs}),Fh=Oe(Dh),Ah=J({},rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Uh=Oe(Ah),Bh=J({},_i,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wh=Oe(Bh),Hh=[9,13,27,32],Js=mt&&"CompositionEvent"in window,Cr=null;mt&&"documentMode"in document&&(Cr=document.documentMode);var Vh=mt&&"TextEvent"in window&&!Cr,uf=mt&&(!Js||Cr&&8<Cr&&11>=Cr),lu=" ",iu=!1;function cf(e,t){switch(e){case"keyup":return Hh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ff(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pn=!1;function Qh(e,t){switch(e){case"compositionend":return ff(t);case"keypress":return t.which!==32?null:(iu=!0,lu);case"textInput":return e=t.data,e===lu&&iu?null:e;default:return null}}function Kh(e,t){if(Pn)return e==="compositionend"||!Js&&cf(e,t)?(e=af(),Ll=Gs=$t=null,Pn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return uf&&t.locale!=="ko"?null:t.data;default:return null}}var Gh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ou(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Gh[e.type]:t==="textarea"}function df(e,t,n,r){Wc(r),t=ni(t,"onChange"),0<t.length&&(n=new Ys("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Er=null,Fr=null;function Yh(e){Cf(e,0)}function Ni(e){var t=$n(e);if(Oc(t))return e}function Xh(e,t){if(e==="change")return t}var pf=!1;if(mt){var oo;if(mt){var so="oninput"in document;if(!so){var su=document.createElement("div");su.setAttribute("oninput","return;"),so=typeof su.oninput=="function"}oo=so}else oo=!1;pf=oo&&(!document.documentMode||9<document.documentMode)}function au(){Er&&(Er.detachEvent("onpropertychange",hf),Fr=Er=null)}function hf(e){if(e.propertyName==="value"&&Ni(Fr)){var t=[];df(t,Fr,e,Ws(e)),Kc(Yh,t)}}function Jh(e,t,n){e==="focusin"?(au(),Er=t,Fr=n,Er.attachEvent("onpropertychange",hf)):e==="focusout"&&au()}function Zh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ni(Fr)}function qh(e,t){if(e==="click")return Ni(t)}function bh(e,t){if(e==="input"||e==="change")return Ni(t)}function em(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var be=typeof Object.is=="function"?Object.is:em;function Ar(e,t){if(be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!$o.call(t,l)||!be(e[l],t[l]))return!1}return!0}function uu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cu(e,t){var n=uu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=uu(n)}}function mf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?mf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function gf(){for(var e=window,t=Xl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Xl(e.document)}return t}function Zs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function tm(e){var t=gf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&mf(n.ownerDocument.documentElement,n)){if(r!==null&&Zs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=cu(n,i);var o=cu(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var nm=mt&&"documentMode"in document&&11>=document.documentMode,_n=null,Yo=null,jr=null,Xo=!1;function fu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xo||_n==null||_n!==Xl(r)||(r=_n,"selectionStart"in r&&Zs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jr&&Ar(jr,r)||(jr=r,r=ni(Yo,"onSelect"),0<r.length&&(t=new Ys("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=_n)))}function yl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Nn={animationend:yl("Animation","AnimationEnd"),animationiteration:yl("Animation","AnimationIteration"),animationstart:yl("Animation","AnimationStart"),transitionend:yl("Transition","TransitionEnd")},ao={},yf={};mt&&(yf=document.createElement("div").style,"AnimationEvent"in window||(delete Nn.animationend.animation,delete Nn.animationiteration.animation,delete Nn.animationstart.animation),"TransitionEvent"in window||delete Nn.transitionend.transition);function $i(e){if(ao[e])return ao[e];if(!Nn[e])return e;var t=Nn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in yf)return ao[e]=t[n];return e}var vf=$i("animationend"),xf=$i("animationiteration"),wf=$i("animationstart"),kf=$i("transitionend"),Sf=new Map,du="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vt(e,t){Sf.set(e,t),mn(t,[e])}for(var uo=0;uo<du.length;uo++){var co=du[uo],rm=co.toLowerCase(),lm=co[0].toUpperCase()+co.slice(1);Vt(rm,"on"+lm)}Vt(vf,"onAnimationEnd");Vt(xf,"onAnimationIteration");Vt(wf,"onAnimationStart");Vt("dblclick","onDoubleClick");Vt("focusin","onFocus");Vt("focusout","onBlur");Vt(kf,"onTransitionEnd");Hn("onMouseEnter",["mouseout","mouseover"]);Hn("onMouseLeave",["mouseout","mouseover"]);Hn("onPointerEnter",["pointerout","pointerover"]);Hn("onPointerLeave",["pointerout","pointerover"]);mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),im=new Set("cancel close invalid load scroll toggle".split(" ").concat(xr));function pu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,rh(r,t,void 0,e),e.currentTarget=null}function Cf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==i&&l.isPropagationStopped())break e;pu(l,s,u),i=a}else for(o=0;o<r.length;o++){if(s=r[o],a=s.instance,u=s.currentTarget,s=s.listener,a!==i&&l.isPropagationStopped())break e;pu(l,s,u),i=a}}}if(Zl)throw e=Vo,Zl=!1,Vo=null,e}function V(e,t){var n=t[es];n===void 0&&(n=t[es]=new Set);var r=e+"__bubble";n.has(r)||(Ef(t,e,2,!1),n.add(r))}function fo(e,t,n){var r=0;t&&(r|=4),Ef(n,e,r,t)}var vl="_reactListening"+Math.random().toString(36).slice(2);function Ur(e){if(!e[vl]){e[vl]=!0,Ic.forEach(function(n){n!=="selectionchange"&&(im.has(n)||fo(n,!1,e),fo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[vl]||(t[vl]=!0,fo("selectionchange",!1,t))}}function Ef(e,t,n,r){switch(sf(t)){case 1:var l=xh;break;case 4:l=wh;break;default:l=Ks}n=l.bind(null,t,n,e),l=void 0,!Ho||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function po(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;o=o.return}for(;s!==null;){if(o=tn(s),o===null)return;if(a=o.tag,a===5||a===6){r=i=o;continue e}s=s.parentNode}}r=r.return}Kc(function(){var u=i,d=Ws(n),m=[];e:{var g=Sf.get(e);if(g!==void 0){var v=Ys,x=e;switch(e){case"keypress":if(Ol(n)===0)break e;case"keydown":case"keyup":v=Oh;break;case"focusin":x="focus",v=io;break;case"focusout":x="blur",v=io;break;case"beforeblur":case"afterblur":v=io;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=tu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Ch;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Fh;break;case vf:case xf:case wf:v=Ph;break;case kf:v=Uh;break;case"scroll":v=kh;break;case"wheel":v=Wh;break;case"copy":case"cut":case"paste":v=Nh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=ru}var w=(t&4)!==0,j=!w&&e==="scroll",p=w?g!==null?g+"Capture":null:g;w=[];for(var f=u,h;f!==null;){h=f;var y=h.stateNode;if(h.tag===5&&y!==null&&(h=y,p!==null&&(y=Lr(f,p),y!=null&&w.push(Br(f,y,h)))),j)break;f=f.return}0<w.length&&(g=new v(g,x,null,n,d),m.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&n!==Bo&&(x=n.relatedTarget||n.fromElement)&&(tn(x)||x[gt]))break e;if((v||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,v?(x=n.relatedTarget||n.toElement,v=u,x=x?tn(x):null,x!==null&&(j=gn(x),x!==j||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=u),v!==x)){if(w=tu,y="onMouseLeave",p="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(w=ru,y="onPointerLeave",p="onPointerEnter",f="pointer"),j=v==null?g:$n(v),h=x==null?g:$n(x),g=new w(y,f+"leave",v,n,d),g.target=j,g.relatedTarget=h,y=null,tn(d)===u&&(w=new w(p,f+"enter",x,n,d),w.target=h,w.relatedTarget=j,y=w),j=y,v&&x)t:{for(w=v,p=x,f=0,h=w;h;h=Sn(h))f++;for(h=0,y=p;y;y=Sn(y))h++;for(;0<f-h;)w=Sn(w),f--;for(;0<h-f;)p=Sn(p),h--;for(;f--;){if(w===p||p!==null&&w===p.alternate)break t;w=Sn(w),p=Sn(p)}w=null}else w=null;v!==null&&hu(m,g,v,w,!1),x!==null&&j!==null&&hu(m,j,x,w,!0)}}e:{if(g=u?$n(u):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var C=Xh;else if(ou(g))if(pf)C=bh;else{C=Zh;var E=Jh}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(C=qh);if(C&&(C=C(e,u))){df(m,C,n,d);break e}E&&E(e,g,u),e==="focusout"&&(E=g._wrapperState)&&E.controlled&&g.type==="number"&&Mo(g,"number",g.value)}switch(E=u?$n(u):window,e){case"focusin":(ou(E)||E.contentEditable==="true")&&(_n=E,Yo=u,jr=null);break;case"focusout":jr=Yo=_n=null;break;case"mousedown":Xo=!0;break;case"contextmenu":case"mouseup":case"dragend":Xo=!1,fu(m,n,d);break;case"selectionchange":if(nm)break;case"keydown":case"keyup":fu(m,n,d)}var k;if(Js)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else Pn?cf(e,n)&&($="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&($="onCompositionStart");$&&(uf&&n.locale!=="ko"&&(Pn||$!=="onCompositionStart"?$==="onCompositionEnd"&&Pn&&(k=af()):($t=d,Gs="value"in $t?$t.value:$t.textContent,Pn=!0)),E=ni(u,$),0<E.length&&($=new nu($,e,null,n,d),m.push({event:$,listeners:E}),k?$.data=k:(k=ff(n),k!==null&&($.data=k)))),(k=Vh?Qh(e,n):Kh(e,n))&&(u=ni(u,"onBeforeInput"),0<u.length&&(d=new nu("onBeforeInput","beforeinput",null,n,d),m.push({event:d,listeners:u}),d.data=k))}Cf(m,t)})}function Br(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ni(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Lr(e,n),i!=null&&r.unshift(Br(e,i,l)),i=Lr(e,t),i!=null&&r.push(Br(e,i,l))),e=e.return}return r}function Sn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function hu(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,l?(a=Lr(n,i),a!=null&&o.unshift(Br(n,a,s))):l||(a=Lr(n,i),a!=null&&o.push(Br(n,a,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var om=/\r\n?/g,sm=/\u0000|\uFFFD/g;function mu(e){return(typeof e=="string"?e:""+e).replace(om,`
`).replace(sm,"")}function xl(e,t,n){if(t=mu(t),mu(e)!==t&&n)throw Error(S(425))}function ri(){}var Jo=null,Zo=null;function qo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bo=typeof setTimeout=="function"?setTimeout:void 0,am=typeof clearTimeout=="function"?clearTimeout:void 0,gu=typeof Promise=="function"?Promise:void 0,um=typeof queueMicrotask=="function"?queueMicrotask:typeof gu<"u"?function(e){return gu.resolve(null).then(e).catch(cm)}:bo;function cm(e){setTimeout(function(){throw e})}function ho(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Dr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Dr(t)}function Ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function yu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var lr=Math.random().toString(36).slice(2),it="__reactFiber$"+lr,Wr="__reactProps$"+lr,gt="__reactContainer$"+lr,es="__reactEvents$"+lr,fm="__reactListeners$"+lr,dm="__reactHandles$"+lr;function tn(e){var t=e[it];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[it]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=yu(e);e!==null;){if(n=e[it])return n;e=yu(e)}return t}e=n,n=e.parentNode}return null}function tl(e){return e=e[it]||e[gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function $n(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Ii(e){return e[Wr]||null}var ts=[],In=-1;function Qt(e){return{current:e}}function K(e){0>In||(e.current=ts[In],ts[In]=null,In--)}function H(e,t){In++,ts[In]=e.current,e.current=t}var Ht={},me=Qt(Ht),Ce=Qt(!1),cn=Ht;function Vn(e,t){var n=e.type.contextTypes;if(!n)return Ht;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Ee(e){return e=e.childContextTypes,e!=null}function li(){K(Ce),K(me)}function vu(e,t,n){if(me.current!==Ht)throw Error(S(168));H(me,t),H(Ce,n)}function jf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(S(108,Jp(e)||"Unknown",l));return J({},n,r)}function ii(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ht,cn=me.current,H(me,e),H(Ce,Ce.current),!0}function xu(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=jf(e,t,cn),r.__reactInternalMemoizedMergedChildContext=e,K(Ce),K(me),H(me,e)):K(Ce),H(Ce,n)}var ft=null,zi=!1,mo=!1;function Pf(e){ft===null?ft=[e]:ft.push(e)}function pm(e){zi=!0,Pf(e)}function Kt(){if(!mo&&ft!==null){mo=!0;var e=0,t=A;try{var n=ft;for(A=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ft=null,zi=!1}catch(l){throw ft!==null&&(ft=ft.slice(e+1)),Jc(Hs,Kt),l}finally{A=t,mo=!1}}return null}var zn=[],Rn=0,oi=null,si=0,De=[],Fe=0,fn=null,dt=1,pt="";function qt(e,t){zn[Rn++]=si,zn[Rn++]=oi,oi=e,si=t}function _f(e,t,n){De[Fe++]=dt,De[Fe++]=pt,De[Fe++]=fn,fn=e;var r=dt;e=pt;var l=32-Je(r)-1;r&=~(1<<l),n+=1;var i=32-Je(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,dt=1<<32-Je(t)+l|n<<l|r,pt=i+e}else dt=1<<i|n<<l|r,pt=e}function qs(e){e.return!==null&&(qt(e,1),_f(e,1,0))}function bs(e){for(;e===oi;)oi=zn[--Rn],zn[Rn]=null,si=zn[--Rn],zn[Rn]=null;for(;e===fn;)fn=De[--Fe],De[Fe]=null,pt=De[--Fe],De[Fe]=null,dt=De[--Fe],De[Fe]=null}var Re=null,ze=null,G=!1,Ye=null;function Nf(e,t){var n=Ae(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function wu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Re=e,ze=Ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Re=e,ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=fn!==null?{id:dt,overflow:pt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ae(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Re=e,ze=null,!0):!1;default:return!1}}function ns(e){return(e.mode&1)!==0&&(e.flags&128)===0}function rs(e){if(G){var t=ze;if(t){var n=t;if(!wu(e,t)){if(ns(e))throw Error(S(418));t=Ot(n.nextSibling);var r=Re;t&&wu(e,t)?Nf(r,n):(e.flags=e.flags&-4097|2,G=!1,Re=e)}}else{if(ns(e))throw Error(S(418));e.flags=e.flags&-4097|2,G=!1,Re=e}}}function ku(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Re=e}function wl(e){if(e!==Re)return!1;if(!G)return ku(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!qo(e.type,e.memoizedProps)),t&&(t=ze)){if(ns(e))throw $f(),Error(S(418));for(;t;)Nf(e,t),t=Ot(t.nextSibling)}if(ku(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ze=Ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ze=null}}else ze=Re?Ot(e.stateNode.nextSibling):null;return!0}function $f(){for(var e=ze;e;)e=Ot(e.nextSibling)}function Qn(){ze=Re=null,G=!1}function ea(e){Ye===null?Ye=[e]:Ye.push(e)}var hm=xt.ReactCurrentBatchConfig;function Ke(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ai=Qt(null),ui=null,Tn=null,ta=null;function na(){ta=Tn=ui=null}function ra(e){var t=ai.current;K(ai),e._currentValue=t}function ls(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Bn(e,t){ui=e,ta=Tn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function Be(e){var t=e._currentValue;if(ta!==e)if(e={context:e,memoizedValue:t,next:null},Tn===null){if(ui===null)throw Error(S(308));Tn=e,ui.dependencies={lanes:0,firstContext:e}}else Tn=Tn.next=e;return t}var nn=null;function la(e){nn===null?nn=[e]:nn.push(e)}function If(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,la(t)):(n.next=l.next,l.next=n),t.interleaved=n,yt(e,r)}function yt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Pt=!1;function ia(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Mt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,yt(e,n)}return l=r.interleaved,l===null?(t.next=t,la(r)):(t.next=l.next,l.next=t),r.interleaved=t,yt(e,n)}function Ml(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Vs(e,n)}}function Su(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ci(e,t,n,r){var l=e.updateQueue;Pt=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var a=s,u=a.next;a.next=null,o===null?i=u:o.next=u,o=a;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==o&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=a))}if(i!==null){var m=l.baseState;o=0,d=u=a=null,s=i;do{var g=s.lane,v=s.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,w=s;switch(g=t,v=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){m=x.call(v,m,g);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,g=typeof x=="function"?x.call(v,m,g):x,g==null)break e;m=J({},m,g);break e;case 2:Pt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=l.effects,g===null?l.effects=[s]:g.push(s))}else v={eventTime:v,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=v,a=m):d=d.next=v,o|=g;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;g=s,s=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);if(d===null&&(a=m),l.baseState=a,l.firstBaseUpdate=u,l.lastBaseUpdate=d,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);pn|=o,e.lanes=o,e.memoizedState=m}}function Cu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(S(191,l));l.call(r)}}}var Rf=new $c.Component().refs;function is(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ri={isMounted:function(e){return(e=e._reactInternals)?gn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ye(),l=Ft(e),i=ht(r,l);i.payload=t,n!=null&&(i.callback=n),t=Mt(e,i,l),t!==null&&(Ze(t,e,l,r),Ml(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ye(),l=Ft(e),i=ht(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Mt(e,i,l),t!==null&&(Ze(t,e,l,r),Ml(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ye(),r=Ft(e),l=ht(n,r);l.tag=2,t!=null&&(l.callback=t),t=Mt(e,l,r),t!==null&&(Ze(t,e,r,n),Ml(t,e,r))}};function Eu(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Ar(n,r)||!Ar(l,i):!0}function Tf(e,t,n){var r=!1,l=Ht,i=t.contextType;return typeof i=="object"&&i!==null?i=Be(i):(l=Ee(t)?cn:me.current,r=t.contextTypes,i=(r=r!=null)?Vn(e,l):Ht),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ri,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function ju(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ri.enqueueReplaceState(t,t.state,null)}function os(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs=Rf,ia(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Be(i):(i=Ee(t)?cn:me.current,l.context=Vn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(is(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Ri.enqueueReplaceState(l,l.state,null),ci(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function pr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=l.refs;s===Rf&&(s=l.refs={}),o===null?delete s[i]:s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function kl(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Pu(e){var t=e._init;return t(e._payload)}function Lf(e){function t(p,f){if(e){var h=p.deletions;h===null?(p.deletions=[f],p.flags|=16):h.push(f)}}function n(p,f){if(!e)return null;for(;f!==null;)t(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function l(p,f){return p=At(p,f),p.index=0,p.sibling=null,p}function i(p,f,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<f?(p.flags|=2,f):h):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,f,h,y){return f===null||f.tag!==6?(f=So(h,p.mode,y),f.return=p,f):(f=l(f,h),f.return=p,f)}function a(p,f,h,y){var C=h.type;return C===jn?d(p,f,h.props.children,y,h.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===jt&&Pu(C)===f.type)?(y=l(f,h.props),y.ref=pr(p,f,h),y.return=p,y):(y=Wl(h.type,h.key,h.props,null,p.mode,y),y.ref=pr(p,f,h),y.return=p,y)}function u(p,f,h,y){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=Co(h,p.mode,y),f.return=p,f):(f=l(f,h.children||[]),f.return=p,f)}function d(p,f,h,y,C){return f===null||f.tag!==7?(f=sn(h,p.mode,y,C),f.return=p,f):(f=l(f,h),f.return=p,f)}function m(p,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=So(""+f,p.mode,h),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case cl:return h=Wl(f.type,f.key,f.props,null,p.mode,h),h.ref=pr(p,null,f),h.return=p,h;case En:return f=Co(f,p.mode,h),f.return=p,f;case jt:var y=f._init;return m(p,y(f._payload),h)}if(yr(f)||ar(f))return f=sn(f,p.mode,h,null),f.return=p,f;kl(p,f)}return null}function g(p,f,h,y){var C=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return C!==null?null:s(p,f,""+h,y);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case cl:return h.key===C?a(p,f,h,y):null;case En:return h.key===C?u(p,f,h,y):null;case jt:return C=h._init,g(p,f,C(h._payload),y)}if(yr(h)||ar(h))return C!==null?null:d(p,f,h,y,null);kl(p,h)}return null}function v(p,f,h,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(h)||null,s(f,p,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case cl:return p=p.get(y.key===null?h:y.key)||null,a(f,p,y,C);case En:return p=p.get(y.key===null?h:y.key)||null,u(f,p,y,C);case jt:var E=y._init;return v(p,f,h,E(y._payload),C)}if(yr(y)||ar(y))return p=p.get(h)||null,d(f,p,y,C,null);kl(f,y)}return null}function x(p,f,h,y){for(var C=null,E=null,k=f,$=f=0,W=null;k!==null&&$<h.length;$++){k.index>$?(W=k,k=null):W=k.sibling;var T=g(p,k,h[$],y);if(T===null){k===null&&(k=W);break}e&&k&&T.alternate===null&&t(p,k),f=i(T,f,$),E===null?C=T:E.sibling=T,E=T,k=W}if($===h.length)return n(p,k),G&&qt(p,$),C;if(k===null){for(;$<h.length;$++)k=m(p,h[$],y),k!==null&&(f=i(k,f,$),E===null?C=k:E.sibling=k,E=k);return G&&qt(p,$),C}for(k=r(p,k);$<h.length;$++)W=v(k,p,$,h[$],y),W!==null&&(e&&W.alternate!==null&&k.delete(W.key===null?$:W.key),f=i(W,f,$),E===null?C=W:E.sibling=W,E=W);return e&&k.forEach(function(Pe){return t(p,Pe)}),G&&qt(p,$),C}function w(p,f,h,y){var C=ar(h);if(typeof C!="function")throw Error(S(150));if(h=C.call(h),h==null)throw Error(S(151));for(var E=C=null,k=f,$=f=0,W=null,T=h.next();k!==null&&!T.done;$++,T=h.next()){k.index>$?(W=k,k=null):W=k.sibling;var Pe=g(p,k,T.value,y);if(Pe===null){k===null&&(k=W);break}e&&k&&Pe.alternate===null&&t(p,k),f=i(Pe,f,$),E===null?C=Pe:E.sibling=Pe,E=Pe,k=W}if(T.done)return n(p,k),G&&qt(p,$),C;if(k===null){for(;!T.done;$++,T=h.next())T=m(p,T.value,y),T!==null&&(f=i(T,f,$),E===null?C=T:E.sibling=T,E=T);return G&&qt(p,$),C}for(k=r(p,k);!T.done;$++,T=h.next())T=v(k,p,$,T.value,y),T!==null&&(e&&T.alternate!==null&&k.delete(T.key===null?$:T.key),f=i(T,f,$),E===null?C=T:E.sibling=T,E=T);return e&&k.forEach(function(Gt){return t(p,Gt)}),G&&qt(p,$),C}function j(p,f,h,y){if(typeof h=="object"&&h!==null&&h.type===jn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case cl:e:{for(var C=h.key,E=f;E!==null;){if(E.key===C){if(C=h.type,C===jn){if(E.tag===7){n(p,E.sibling),f=l(E,h.props.children),f.return=p,p=f;break e}}else if(E.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===jt&&Pu(C)===E.type){n(p,E.sibling),f=l(E,h.props),f.ref=pr(p,E,h),f.return=p,p=f;break e}n(p,E);break}else t(p,E);E=E.sibling}h.type===jn?(f=sn(h.props.children,p.mode,y,h.key),f.return=p,p=f):(y=Wl(h.type,h.key,h.props,null,p.mode,y),y.ref=pr(p,f,h),y.return=p,p=y)}return o(p);case En:e:{for(E=h.key;f!==null;){if(f.key===E)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){n(p,f.sibling),f=l(f,h.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else t(p,f);f=f.sibling}f=Co(h,p.mode,y),f.return=p,p=f}return o(p);case jt:return E=h._init,j(p,f,E(h._payload),y)}if(yr(h))return x(p,f,h,y);if(ar(h))return w(p,f,h,y);kl(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(n(p,f.sibling),f=l(f,h),f.return=p,p=f):(n(p,f),f=So(h,p.mode,y),f.return=p,p=f),o(p)):n(p,f)}return j}var Kn=Lf(!0),Of=Lf(!1),nl={},st=Qt(nl),Hr=Qt(nl),Vr=Qt(nl);function rn(e){if(e===nl)throw Error(S(174));return e}function oa(e,t){switch(H(Vr,t),H(Hr,e),H(st,nl),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Fo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Fo(t,e)}K(st),H(st,t)}function Gn(){K(st),K(Hr),K(Vr)}function Mf(e){rn(Vr.current);var t=rn(st.current),n=Fo(t,e.type);t!==n&&(H(Hr,e),H(st,n))}function sa(e){Hr.current===e&&(K(st),K(Hr))}var Y=Qt(0);function fi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var go=[];function aa(){for(var e=0;e<go.length;e++)go[e]._workInProgressVersionPrimary=null;go.length=0}var Dl=xt.ReactCurrentDispatcher,yo=xt.ReactCurrentBatchConfig,dn=0,X=null,ne=null,ie=null,di=!1,Pr=!1,Qr=0,mm=0;function fe(){throw Error(S(321))}function ua(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!be(e[n],t[n]))return!1;return!0}function ca(e,t,n,r,l,i){if(dn=i,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Dl.current=e===null||e.memoizedState===null?xm:wm,e=n(r,l),Pr){i=0;do{if(Pr=!1,Qr=0,25<=i)throw Error(S(301));i+=1,ie=ne=null,t.updateQueue=null,Dl.current=km,e=n(r,l)}while(Pr)}if(Dl.current=pi,t=ne!==null&&ne.next!==null,dn=0,ie=ne=X=null,di=!1,t)throw Error(S(300));return e}function fa(){var e=Qr!==0;return Qr=0,e}function nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?X.memoizedState=ie=e:ie=ie.next=e,ie}function We(){if(ne===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=ie===null?X.memoizedState:ie.next;if(t!==null)ie=t,ne=e;else{if(e===null)throw Error(S(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},ie===null?X.memoizedState=ie=e:ie=ie.next=e}return ie}function Kr(e,t){return typeof t=="function"?t(e):t}function vo(e){var t=We(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=ne,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=o=null,a=null,u=i;do{var d=u.lane;if((dn&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=m,o=r):a=a.next=m,X.lanes|=d,pn|=d}u=u.next}while(u!==null&&u!==i);a===null?o=r:a.next=s,be(r,t.memoizedState)||(Se=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,X.lanes|=i,pn|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function xo(e){var t=We(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);be(i,t.memoizedState)||(Se=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Df(){}function Ff(e,t){var n=X,r=We(),l=t(),i=!be(r.memoizedState,l);if(i&&(r.memoizedState=l,Se=!0),r=r.queue,da(Bf.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ie!==null&&ie.memoizedState.tag&1){if(n.flags|=2048,Gr(9,Uf.bind(null,n,r,l,t),void 0,null),se===null)throw Error(S(349));dn&30||Af(n,t,l)}return l}function Af(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Uf(e,t,n,r){t.value=n,t.getSnapshot=r,Wf(t)&&Hf(e)}function Bf(e,t,n){return n(function(){Wf(t)&&Hf(e)})}function Wf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!be(e,n)}catch{return!0}}function Hf(e){var t=yt(e,1);t!==null&&Ze(t,e,1,-1)}function _u(e){var t=nt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Kr,lastRenderedState:e},t.queue=e,e=e.dispatch=vm.bind(null,X,e),[t.memoizedState,e]}function Gr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Vf(){return We().memoizedState}function Fl(e,t,n,r){var l=nt();X.flags|=e,l.memoizedState=Gr(1|t,n,void 0,r===void 0?null:r)}function Ti(e,t,n,r){var l=We();r=r===void 0?null:r;var i=void 0;if(ne!==null){var o=ne.memoizedState;if(i=o.destroy,r!==null&&ua(r,o.deps)){l.memoizedState=Gr(t,n,i,r);return}}X.flags|=e,l.memoizedState=Gr(1|t,n,i,r)}function Nu(e,t){return Fl(8390656,8,e,t)}function da(e,t){return Ti(2048,8,e,t)}function Qf(e,t){return Ti(4,2,e,t)}function Kf(e,t){return Ti(4,4,e,t)}function Gf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Yf(e,t,n){return n=n!=null?n.concat([e]):null,Ti(4,4,Gf.bind(null,t,e),n)}function pa(){}function Xf(e,t){var n=We();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ua(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Jf(e,t){var n=We();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ua(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Zf(e,t,n){return dn&21?(be(n,t)||(n=bc(),X.lanes|=n,pn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n)}function gm(e,t){var n=A;A=n!==0&&4>n?n:4,e(!0);var r=yo.transition;yo.transition={};try{e(!1),t()}finally{A=n,yo.transition=r}}function qf(){return We().memoizedState}function ym(e,t,n){var r=Ft(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},bf(e))ed(t,n);else if(n=If(e,t,n,r),n!==null){var l=ye();Ze(n,e,r,l),td(n,t,r)}}function vm(e,t,n){var r=Ft(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(bf(e))ed(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,n);if(l.hasEagerState=!0,l.eagerState=s,be(s,o)){var a=t.interleaved;a===null?(l.next=l,la(t)):(l.next=a.next,a.next=l),t.interleaved=l;return}}catch{}finally{}n=If(e,t,l,r),n!==null&&(l=ye(),Ze(n,e,r,l),td(n,t,r))}}function bf(e){var t=e.alternate;return e===X||t!==null&&t===X}function ed(e,t){Pr=di=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function td(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Vs(e,n)}}var pi={readContext:Be,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},xm={readContext:Be,useCallback:function(e,t){return nt().memoizedState=[e,t===void 0?null:t],e},useContext:Be,useEffect:Nu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Fl(4194308,4,Gf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Fl(4194308,4,e,t)},useInsertionEffect:function(e,t){return Fl(4,2,e,t)},useMemo:function(e,t){var n=nt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=nt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ym.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=nt();return e={current:e},t.memoizedState=e},useState:_u,useDebugValue:pa,useDeferredValue:function(e){return nt().memoizedState=e},useTransition:function(){var e=_u(!1),t=e[0];return e=gm.bind(null,e[1]),nt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,l=nt();if(G){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),se===null)throw Error(S(349));dn&30||Af(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Nu(Bf.bind(null,r,i,e),[e]),r.flags|=2048,Gr(9,Uf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=nt(),t=se.identifierPrefix;if(G){var n=pt,r=dt;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Qr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=mm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},wm={readContext:Be,useCallback:Xf,useContext:Be,useEffect:da,useImperativeHandle:Yf,useInsertionEffect:Qf,useLayoutEffect:Kf,useMemo:Jf,useReducer:vo,useRef:Vf,useState:function(){return vo(Kr)},useDebugValue:pa,useDeferredValue:function(e){var t=We();return Zf(t,ne.memoizedState,e)},useTransition:function(){var e=vo(Kr)[0],t=We().memoizedState;return[e,t]},useMutableSource:Df,useSyncExternalStore:Ff,useId:qf,unstable_isNewReconciler:!1},km={readContext:Be,useCallback:Xf,useContext:Be,useEffect:da,useImperativeHandle:Yf,useInsertionEffect:Qf,useLayoutEffect:Kf,useMemo:Jf,useReducer:xo,useRef:Vf,useState:function(){return xo(Kr)},useDebugValue:pa,useDeferredValue:function(e){var t=We();return ne===null?t.memoizedState=e:Zf(t,ne.memoizedState,e)},useTransition:function(){var e=xo(Kr)[0],t=We().memoizedState;return[e,t]},useMutableSource:Df,useSyncExternalStore:Ff,useId:qf,unstable_isNewReconciler:!1};function Yn(e,t){try{var n="",r=t;do n+=Xp(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function wo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ss(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Sm=typeof WeakMap=="function"?WeakMap:Map;function nd(e,t,n){n=ht(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){mi||(mi=!0,ys=r),ss(e,t)},n}function rd(e,t,n){n=ht(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){ss(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ss(e,t),typeof r!="function"&&(Dt===null?Dt=new Set([this]):Dt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function $u(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Sm;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Mm.bind(null,e,t,n),t.then(e,e))}function Iu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function zu(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ht(-1,1),t.tag=2,Mt(n,t,1))),n.lanes|=1),e)}var Cm=xt.ReactCurrentOwner,Se=!1;function ge(e,t,n,r){t.child=e===null?Of(t,null,n,r):Kn(t,e.child,n,r)}function Ru(e,t,n,r,l){n=n.render;var i=t.ref;return Bn(t,l),r=ca(e,t,n,r,i,l),n=fa(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,vt(e,t,l)):(G&&n&&qs(t),t.flags|=1,ge(e,t,r,l),t.child)}function Tu(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!ka(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,ld(e,t,i,r,l)):(e=Wl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ar,n(o,r)&&e.ref===t.ref)return vt(e,t,l)}return t.flags|=1,e=At(i,r),e.ref=t.ref,e.return=t,t.child=e}function ld(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Ar(i,r)&&e.ref===t.ref)if(Se=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,vt(e,t,l)}return as(e,t,n,r,l)}function id(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(On,$e),$e|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(On,$e),$e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,H(On,$e),$e|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,H(On,$e),$e|=r;return ge(e,t,l,n),t.child}function od(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function as(e,t,n,r,l){var i=Ee(n)?cn:me.current;return i=Vn(t,i),Bn(t,l),n=ca(e,t,n,r,i,l),r=fa(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,vt(e,t,l)):(G&&r&&qs(t),t.flags|=1,ge(e,t,n,l),t.child)}function Lu(e,t,n,r,l){if(Ee(n)){var i=!0;ii(t)}else i=!1;if(Bn(t,l),t.stateNode===null)Al(e,t),Tf(t,n,r),os(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Be(u):(u=Ee(n)?cn:me.current,u=Vn(t,u));var d=n.getDerivedStateFromProps,m=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||a!==u)&&ju(t,o,r,u),Pt=!1;var g=t.memoizedState;o.state=g,ci(t,r,o,l),a=t.memoizedState,s!==r||g!==a||Ce.current||Pt?(typeof d=="function"&&(is(t,n,d,r),a=t.memoizedState),(s=Pt||Eu(t,n,s,r,g,a,u))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=u,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,zf(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Ke(t.type,s),o.props=u,m=t.pendingProps,g=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Be(a):(a=Ee(n)?cn:me.current,a=Vn(t,a));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==m||g!==a)&&ju(t,o,r,a),Pt=!1,g=t.memoizedState,o.state=g,ci(t,r,o,l);var x=t.memoizedState;s!==m||g!==x||Ce.current||Pt?(typeof v=="function"&&(is(t,n,v,r),x=t.memoizedState),(u=Pt||Eu(t,n,u,r,g,x,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),o.props=r,o.state=x,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return us(e,t,n,r,i,l)}function us(e,t,n,r,l,i){od(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&xu(t,n,!1),vt(e,t,i);r=t.stateNode,Cm.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Kn(t,e.child,null,i),t.child=Kn(t,null,s,i)):ge(e,t,s,i),t.memoizedState=r.state,l&&xu(t,n,!0),t.child}function sd(e){var t=e.stateNode;t.pendingContext?vu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&vu(e,t.context,!1),oa(e,t.containerInfo)}function Ou(e,t,n,r,l){return Qn(),ea(l),t.flags|=256,ge(e,t,n,r),t.child}var cs={dehydrated:null,treeContext:null,retryLane:0};function fs(e){return{baseLanes:e,cachePool:null,transitions:null}}function ad(e,t,n){var r=t.pendingProps,l=Y.current,i=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),H(Y,l&1),e===null)return rs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Mi(o,r,0,null),e=sn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=fs(n),t.memoizedState=cs,e):ha(t,o));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return Em(e,t,o,r,s,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,s=l.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=At(l,a),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=At(s,i):(i=sn(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?fs(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=cs,r}return i=e.child,e=i.sibling,r=At(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ha(e,t){return t=Mi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Sl(e,t,n,r){return r!==null&&ea(r),Kn(t,e.child,null,n),e=ha(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Em(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=wo(Error(S(422))),Sl(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=Mi({mode:"visible",children:r.children},l,0,null),i=sn(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Kn(t,e.child,null,o),t.child.memoizedState=fs(o),t.memoizedState=cs,i);if(!(t.mode&1))return Sl(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(S(419)),r=wo(i,r,void 0),Sl(e,t,o,r)}if(s=(o&e.childLanes)!==0,Se||s){if(r=se,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,yt(e,l),Ze(r,e,l,-1))}return wa(),r=wo(Error(S(421))),Sl(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Dm.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,ze=Ot(l.nextSibling),Re=t,G=!0,Ye=null,e!==null&&(De[Fe++]=dt,De[Fe++]=pt,De[Fe++]=fn,dt=e.id,pt=e.overflow,fn=t),t=ha(t,r.children),t.flags|=4096,t)}function Mu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ls(e.return,t,n)}function ko(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function ud(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(ge(e,t,r.children,n),r=Y.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mu(e,n,t);else if(e.tag===19)Mu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(Y,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&fi(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ko(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&fi(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ko(t,!0,n,null,i);break;case"together":ko(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Al(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function vt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=At(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=At(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jm(e,t,n){switch(t.tag){case 3:sd(t),Qn();break;case 5:Mf(t);break;case 1:Ee(t.type)&&ii(t);break;case 4:oa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;H(ai,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(H(Y,Y.current&1),t.flags|=128,null):n&t.child.childLanes?ad(e,t,n):(H(Y,Y.current&1),e=vt(e,t,n),e!==null?e.sibling:null);H(Y,Y.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ud(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),H(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,id(e,t,n)}return vt(e,t,n)}var cd,ds,fd,dd;cd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ds=function(){};fd=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,rn(st.current);var i=null;switch(n){case"input":l=Lo(e,l),r=Lo(e,r),i=[];break;case"select":l=J({},l,{value:void 0}),r=J({},r,{value:void 0}),i=[];break;case"textarea":l=Do(e,l),r=Do(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ri)}Ao(n,r);var o;n=null;for(u in l)if(!r.hasOwnProperty(u)&&l.hasOwnProperty(u)&&l[u]!=null)if(u==="style"){var s=l[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Rr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(s=l!=null?l[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&s[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Rr.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&V("scroll",e),i||s===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};dd=function(e,t,n,r){n!==r&&(t.flags|=4)};function hr(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Pm(e,t,n){var r=t.pendingProps;switch(bs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(t),null;case 1:return Ee(t.type)&&li(),de(t),null;case 3:return r=t.stateNode,Gn(),K(Ce),K(me),aa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(wl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ye!==null&&(ws(Ye),Ye=null))),ds(e,t),de(t),null;case 5:sa(t);var l=rn(Vr.current);if(n=t.type,e!==null&&t.stateNode!=null)fd(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return de(t),null}if(e=rn(st.current),wl(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[it]=t,r[Wr]=i,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(l=0;l<xr.length;l++)V(xr[l],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":Qa(r,i),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},V("invalid",r);break;case"textarea":Ga(r,i),V("invalid",r)}Ao(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&xl(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&xl(r.textContent,s,e),l=["children",""+s]):Rr.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&V("scroll",r)}switch(n){case"input":fl(r),Ka(r,i,!0);break;case"textarea":fl(r),Ya(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ri)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Fc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[it]=t,e[Wr]=r,cd(e,t,!1,!1),t.stateNode=e;e:{switch(o=Uo(n,r),n){case"dialog":V("cancel",e),V("close",e),l=r;break;case"iframe":case"object":case"embed":V("load",e),l=r;break;case"video":case"audio":for(l=0;l<xr.length;l++)V(xr[l],e);l=r;break;case"source":V("error",e),l=r;break;case"img":case"image":case"link":V("error",e),V("load",e),l=r;break;case"details":V("toggle",e),l=r;break;case"input":Qa(e,r),l=Lo(e,r),V("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=J({},r,{value:void 0}),V("invalid",e);break;case"textarea":Ga(e,r),l=Do(e,r),V("invalid",e);break;default:l=r}Ao(n,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?Bc(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Ac(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Tr(e,a):typeof a=="number"&&Tr(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Rr.hasOwnProperty(i)?a!=null&&i==="onScroll"&&V("scroll",e):a!=null&&Fs(e,i,a,o))}switch(n){case"input":fl(e),Ka(e,r,!1);break;case"textarea":fl(e),Ya(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Wt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Dn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Dn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=ri)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return de(t),null;case 6:if(e&&t.stateNode!=null)dd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=rn(Vr.current),rn(st.current),wl(t)){if(r=t.stateNode,n=t.memoizedProps,r[it]=t,(i=r.nodeValue!==n)&&(e=Re,e!==null))switch(e.tag){case 3:xl(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xl(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[it]=t,t.stateNode=r}return de(t),null;case 13:if(K(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&ze!==null&&t.mode&1&&!(t.flags&128))$f(),Qn(),t.flags|=98560,i=!1;else if(i=wl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(S(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(S(317));i[it]=t}else Qn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;de(t),i=!1}else Ye!==null&&(ws(Ye),Ye=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?le===0&&(le=3):wa())),t.updateQueue!==null&&(t.flags|=4),de(t),null);case 4:return Gn(),ds(e,t),e===null&&Ur(t.stateNode.containerInfo),de(t),null;case 10:return ra(t.type._context),de(t),null;case 17:return Ee(t.type)&&li(),de(t),null;case 19:if(K(Y),i=t.memoizedState,i===null)return de(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)hr(i,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=fi(e),o!==null){for(t.flags|=128,hr(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(Y,Y.current&1|2),t.child}e=e.sibling}i.tail!==null&&q()>Xn&&(t.flags|=128,r=!0,hr(i,!1),t.lanes=4194304)}else{if(!r)if(e=fi(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),hr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!G)return de(t),null}else 2*q()-i.renderingStartTime>Xn&&n!==1073741824&&(t.flags|=128,r=!0,hr(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=q(),t.sibling=null,n=Y.current,H(Y,r?n&1|2:n&1),t):(de(t),null);case 22:case 23:return xa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?$e&1073741824&&(de(t),t.subtreeFlags&6&&(t.flags|=8192)):de(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function _m(e,t){switch(bs(t),t.tag){case 1:return Ee(t.type)&&li(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gn(),K(Ce),K(me),aa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return sa(t),null;case 13:if(K(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Qn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(Y),null;case 4:return Gn(),null;case 10:return ra(t.type._context),null;case 22:case 23:return xa(),null;case 24:return null;default:return null}}var Cl=!1,pe=!1,Nm=typeof WeakSet=="function"?WeakSet:Set,_=null;function Ln(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Z(e,t,r)}else n.current=null}function ps(e,t,n){try{n()}catch(r){Z(e,t,r)}}var Du=!1;function $m(e,t){if(Jo=ei,e=gf(),Zs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,s=-1,a=-1,u=0,d=0,m=e,g=null;t:for(;;){for(var v;m!==n||l!==0&&m.nodeType!==3||(s=o+l),m!==i||r!==0&&m.nodeType!==3||(a=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(v=m.firstChild)!==null;)g=m,m=v;for(;;){if(m===e)break t;if(g===n&&++u===l&&(s=o),g===i&&++d===r&&(a=o),(v=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=v}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zo={focusedElem:e,selectionRange:n},ei=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,j=x.memoizedState,p=t.stateNode,f=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ke(t.type,w),j);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(y){Z(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return x=Du,Du=!1,x}function _r(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&ps(t,n,i)}l=l.next}while(l!==r)}}function Li(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function hs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function pd(e){var t=e.alternate;t!==null&&(e.alternate=null,pd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[it],delete t[Wr],delete t[es],delete t[fm],delete t[dm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function hd(e){return e.tag===5||e.tag===3||e.tag===4}function Fu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ms(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ri));else if(r!==4&&(e=e.child,e!==null))for(ms(e,t,n),e=e.sibling;e!==null;)ms(e,t,n),e=e.sibling}function gs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(gs(e,t,n),e=e.sibling;e!==null;)gs(e,t,n),e=e.sibling}var ae=null,Ge=!1;function St(e,t,n){for(n=n.child;n!==null;)md(e,t,n),n=n.sibling}function md(e,t,n){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(Pi,n)}catch{}switch(n.tag){case 5:pe||Ln(n,t);case 6:var r=ae,l=Ge;ae=null,St(e,t,n),ae=r,Ge=l,ae!==null&&(Ge?(e=ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ae.removeChild(n.stateNode));break;case 18:ae!==null&&(Ge?(e=ae,n=n.stateNode,e.nodeType===8?ho(e.parentNode,n):e.nodeType===1&&ho(e,n),Dr(e)):ho(ae,n.stateNode));break;case 4:r=ae,l=Ge,ae=n.stateNode.containerInfo,Ge=!0,St(e,t,n),ae=r,Ge=l;break;case 0:case 11:case 14:case 15:if(!pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&ps(n,t,o),l=l.next}while(l!==r)}St(e,t,n);break;case 1:if(!pe&&(Ln(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Z(n,t,s)}St(e,t,n);break;case 21:St(e,t,n);break;case 22:n.mode&1?(pe=(r=pe)||n.memoizedState!==null,St(e,t,n),pe=r):St(e,t,n);break;default:St(e,t,n)}}function Au(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Nm),t.forEach(function(r){var l=Fm.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Qe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:ae=s.stateNode,Ge=!1;break e;case 3:ae=s.stateNode.containerInfo,Ge=!0;break e;case 4:ae=s.stateNode.containerInfo,Ge=!0;break e}s=s.return}if(ae===null)throw Error(S(160));md(i,o,l),ae=null,Ge=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(u){Z(l,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)gd(t,e),t=t.sibling}function gd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Qe(t,e),tt(e),r&4){try{_r(3,e,e.return),Li(3,e)}catch(w){Z(e,e.return,w)}try{_r(5,e,e.return)}catch(w){Z(e,e.return,w)}}break;case 1:Qe(t,e),tt(e),r&512&&n!==null&&Ln(n,n.return);break;case 5:if(Qe(t,e),tt(e),r&512&&n!==null&&Ln(n,n.return),e.flags&32){var l=e.stateNode;try{Tr(l,"")}catch(w){Z(e,e.return,w)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Mc(l,i),Uo(s,o);var u=Uo(s,i);for(o=0;o<a.length;o+=2){var d=a[o],m=a[o+1];d==="style"?Bc(l,m):d==="dangerouslySetInnerHTML"?Ac(l,m):d==="children"?Tr(l,m):Fs(l,d,m,u)}switch(s){case"input":Oo(l,i);break;case"textarea":Dc(l,i);break;case"select":var g=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?Dn(l,!!i.multiple,v,!1):g!==!!i.multiple&&(i.defaultValue!=null?Dn(l,!!i.multiple,i.defaultValue,!0):Dn(l,!!i.multiple,i.multiple?[]:"",!1))}l[Wr]=i}catch(w){Z(e,e.return,w)}}break;case 6:if(Qe(t,e),tt(e),r&4){if(e.stateNode===null)throw Error(S(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(w){Z(e,e.return,w)}}break;case 3:if(Qe(t,e),tt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Dr(t.containerInfo)}catch(w){Z(e,e.return,w)}break;case 4:Qe(t,e),tt(e);break;case 13:Qe(t,e),tt(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(ya=q())),r&4&&Au(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(pe=(u=pe)||d,Qe(t,e),pe=u):Qe(t,e),tt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(_=e,d=e.child;d!==null;){for(m=_=d;_!==null;){switch(g=_,v=g.child,g.tag){case 0:case 11:case 14:case 15:_r(4,g,g.return);break;case 1:Ln(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){Z(r,n,w)}}break;case 5:Ln(g,g.return);break;case 22:if(g.memoizedState!==null){Bu(m);continue}}v!==null?(v.return=g,_=v):Bu(m)}d=d.sibling}e:for(d=null,m=e;;){if(m.tag===5){if(d===null){d=m;try{l=m.stateNode,u?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=m.stateNode,a=m.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Uc("display",o))}catch(w){Z(e,e.return,w)}}}else if(m.tag===6){if(d===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(w){Z(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;d===m&&(d=null),m=m.return}d===m&&(d=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Qe(t,e),tt(e),r&4&&Au(e);break;case 21:break;default:Qe(t,e),tt(e)}}function tt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(hd(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Tr(l,""),r.flags&=-33);var i=Fu(e);gs(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Fu(e);ms(e,s,o);break;default:throw Error(S(161))}}catch(a){Z(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Im(e,t,n){_=e,yd(e)}function yd(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var l=_,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||Cl;if(!o){var s=l.alternate,a=s!==null&&s.memoizedState!==null||pe;s=Cl;var u=pe;if(Cl=o,(pe=a)&&!u)for(_=l;_!==null;)o=_,a=o.child,o.tag===22&&o.memoizedState!==null?Wu(l):a!==null?(a.return=o,_=a):Wu(l);for(;i!==null;)_=i,yd(i),i=i.sibling;_=l,Cl=s,pe=u}Uu(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,_=i):Uu(e)}}function Uu(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:pe||Li(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!pe)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Ke(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Cu(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Cu(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var m=d.dehydrated;m!==null&&Dr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}pe||t.flags&512&&hs(t)}catch(g){Z(t,t.return,g)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function Bu(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function Wu(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Li(4,t)}catch(a){Z(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(a){Z(t,l,a)}}var i=t.return;try{hs(t)}catch(a){Z(t,i,a)}break;case 5:var o=t.return;try{hs(t)}catch(a){Z(t,o,a)}}}catch(a){Z(t,t.return,a)}if(t===e){_=null;break}var s=t.sibling;if(s!==null){s.return=t.return,_=s;break}_=t.return}}var zm=Math.ceil,hi=xt.ReactCurrentDispatcher,ma=xt.ReactCurrentOwner,Ue=xt.ReactCurrentBatchConfig,O=0,se=null,ee=null,ue=0,$e=0,On=Qt(0),le=0,Yr=null,pn=0,Oi=0,ga=0,Nr=null,ke=null,ya=0,Xn=1/0,ut=null,mi=!1,ys=null,Dt=null,El=!1,It=null,gi=0,$r=0,vs=null,Ul=-1,Bl=0;function ye(){return O&6?q():Ul!==-1?Ul:Ul=q()}function Ft(e){return e.mode&1?O&2&&ue!==0?ue&-ue:hm.transition!==null?(Bl===0&&(Bl=bc()),Bl):(e=A,e!==0||(e=window.event,e=e===void 0?16:sf(e.type)),e):1}function Ze(e,t,n,r){if(50<$r)throw $r=0,vs=null,Error(S(185));br(e,n,r),(!(O&2)||e!==se)&&(e===se&&(!(O&2)&&(Oi|=n),le===4&&Nt(e,ue)),je(e,r),n===1&&O===0&&!(t.mode&1)&&(Xn=q()+500,zi&&Kt()))}function je(e,t){var n=e.callbackNode;hh(e,t);var r=bl(e,e===se?ue:0);if(r===0)n!==null&&Za(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Za(n),t===1)e.tag===0?pm(Hu.bind(null,e)):Pf(Hu.bind(null,e)),um(function(){!(O&6)&&Kt()}),n=null;else{switch(ef(r)){case 1:n=Hs;break;case 4:n=Zc;break;case 16:n=ql;break;case 536870912:n=qc;break;default:n=ql}n=jd(n,vd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function vd(e,t){if(Ul=-1,Bl=0,O&6)throw Error(S(327));var n=e.callbackNode;if(Wn()&&e.callbackNode!==n)return null;var r=bl(e,e===se?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=yi(e,r);else{t=r;var l=O;O|=2;var i=wd();(se!==e||ue!==t)&&(ut=null,Xn=q()+500,on(e,t));do try{Lm();break}catch(s){xd(e,s)}while(!0);na(),hi.current=i,O=l,ee!==null?t=0:(se=null,ue=0,t=le)}if(t!==0){if(t===2&&(l=Qo(e),l!==0&&(r=l,t=xs(e,l))),t===1)throw n=Yr,on(e,0),Nt(e,r),je(e,q()),n;if(t===6)Nt(e,r);else{if(l=e.current.alternate,!(r&30)&&!Rm(l)&&(t=yi(e,r),t===2&&(i=Qo(e),i!==0&&(r=i,t=xs(e,i))),t===1))throw n=Yr,on(e,0),Nt(e,r),je(e,q()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:bt(e,ke,ut);break;case 3:if(Nt(e,r),(r&130023424)===r&&(t=ya+500-q(),10<t)){if(bl(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=bo(bt.bind(null,e,ke,ut),t);break}bt(e,ke,ut);break;case 4:if(Nt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-Je(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zm(r/1960))-r,10<r){e.timeoutHandle=bo(bt.bind(null,e,ke,ut),r);break}bt(e,ke,ut);break;case 5:bt(e,ke,ut);break;default:throw Error(S(329))}}}return je(e,q()),e.callbackNode===n?vd.bind(null,e):null}function xs(e,t){var n=Nr;return e.current.memoizedState.isDehydrated&&(on(e,t).flags|=256),e=yi(e,t),e!==2&&(t=ke,ke=n,t!==null&&ws(t)),e}function ws(e){ke===null?ke=e:ke.push.apply(ke,e)}function Rm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!be(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Nt(e,t){for(t&=~ga,t&=~Oi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Je(t),r=1<<n;e[n]=-1,t&=~r}}function Hu(e){if(O&6)throw Error(S(327));Wn();var t=bl(e,0);if(!(t&1))return je(e,q()),null;var n=yi(e,t);if(e.tag!==0&&n===2){var r=Qo(e);r!==0&&(t=r,n=xs(e,r))}if(n===1)throw n=Yr,on(e,0),Nt(e,t),je(e,q()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,bt(e,ke,ut),je(e,q()),null}function va(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(Xn=q()+500,zi&&Kt())}}function hn(e){It!==null&&It.tag===0&&!(O&6)&&Wn();var t=O;O|=1;var n=Ue.transition,r=A;try{if(Ue.transition=null,A=1,e)return e()}finally{A=r,Ue.transition=n,O=t,!(O&6)&&Kt()}}function xa(){$e=On.current,K(On)}function on(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,am(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(bs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&li();break;case 3:Gn(),K(Ce),K(me),aa();break;case 5:sa(r);break;case 4:Gn();break;case 13:K(Y);break;case 19:K(Y);break;case 10:ra(r.type._context);break;case 22:case 23:xa()}n=n.return}if(se=e,ee=e=At(e.current,null),ue=$e=t,le=0,Yr=null,ga=Oi=pn=0,ke=Nr=null,nn!==null){for(t=0;t<nn.length;t++)if(n=nn[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}nn=null}return e}function xd(e,t){do{var n=ee;try{if(na(),Dl.current=pi,di){for(var r=X.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}di=!1}if(dn=0,ie=ne=X=null,Pr=!1,Qr=0,ma.current=null,n===null||n.return===null){le=1,Yr=t,ee=null;break}e:{var i=e,o=n.return,s=n,a=t;if(t=ue,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=s,m=d.tag;if(!(d.mode&1)&&(m===0||m===11||m===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Iu(o);if(v!==null){v.flags&=-257,zu(v,o,s,i,t),v.mode&1&&$u(i,u,t),t=v,a=u;var x=t.updateQueue;if(x===null){var w=new Set;w.add(a),t.updateQueue=w}else x.add(a);break e}else{if(!(t&1)){$u(i,u,t),wa();break e}a=Error(S(426))}}else if(G&&s.mode&1){var j=Iu(o);if(j!==null){!(j.flags&65536)&&(j.flags|=256),zu(j,o,s,i,t),ea(Yn(a,s));break e}}i=a=Yn(a,s),le!==4&&(le=2),Nr===null?Nr=[i]:Nr.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=nd(i,a,t);Su(i,p);break e;case 1:s=a;var f=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Dt===null||!Dt.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=rd(i,s,t);Su(i,y);break e}}i=i.return}while(i!==null)}Sd(n)}catch(C){t=C,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(!0)}function wd(){var e=hi.current;return hi.current=pi,e===null?pi:e}function wa(){(le===0||le===3||le===2)&&(le=4),se===null||!(pn&268435455)&&!(Oi&268435455)||Nt(se,ue)}function yi(e,t){var n=O;O|=2;var r=wd();(se!==e||ue!==t)&&(ut=null,on(e,t));do try{Tm();break}catch(l){xd(e,l)}while(!0);if(na(),O=n,hi.current=r,ee!==null)throw Error(S(261));return se=null,ue=0,le}function Tm(){for(;ee!==null;)kd(ee)}function Lm(){for(;ee!==null&&!ih();)kd(ee)}function kd(e){var t=Ed(e.alternate,e,$e);e.memoizedProps=e.pendingProps,t===null?Sd(e):ee=t,ma.current=null}function Sd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=_m(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,ee=null;return}}else if(n=Pm(n,t,$e),n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);le===0&&(le=5)}function bt(e,t,n){var r=A,l=Ue.transition;try{Ue.transition=null,A=1,Om(e,t,n,r)}finally{Ue.transition=l,A=r}return null}function Om(e,t,n,r){do Wn();while(It!==null);if(O&6)throw Error(S(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(mh(e,i),e===se&&(ee=se=null,ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||El||(El=!0,jd(ql,function(){return Wn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ue.transition,Ue.transition=null;var o=A;A=1;var s=O;O|=4,ma.current=null,$m(e,n),gd(n,e),tm(Zo),ei=!!Jo,Zo=Jo=null,e.current=n,Im(n),oh(),O=s,A=o,Ue.transition=i}else e.current=n;if(El&&(El=!1,It=e,gi=l),i=e.pendingLanes,i===0&&(Dt=null),uh(n.stateNode),je(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(mi)throw mi=!1,e=ys,ys=null,e;return gi&1&&e.tag!==0&&Wn(),i=e.pendingLanes,i&1?e===vs?$r++:($r=0,vs=e):$r=0,Kt(),null}function Wn(){if(It!==null){var e=ef(gi),t=Ue.transition,n=A;try{if(Ue.transition=null,A=16>e?16:e,It===null)var r=!1;else{if(e=It,It=null,gi=0,O&6)throw Error(S(331));var l=O;for(O|=4,_=e.current;_!==null;){var i=_,o=i.child;if(_.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(_=u;_!==null;){var d=_;switch(d.tag){case 0:case 11:case 15:_r(8,d,i)}var m=d.child;if(m!==null)m.return=d,_=m;else for(;_!==null;){d=_;var g=d.sibling,v=d.return;if(pd(d),d===u){_=null;break}if(g!==null){g.return=v,_=g;break}_=v}}}var x=i.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var j=w.sibling;w.sibling=null,w=j}while(w!==null)}}_=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,_=o;else e:for(;_!==null;){if(i=_,i.flags&2048)switch(i.tag){case 0:case 11:case 15:_r(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,_=p;break e}_=i.return}}var f=e.current;for(_=f;_!==null;){o=_;var h=o.child;if(o.subtreeFlags&2064&&h!==null)h.return=o,_=h;else e:for(o=f;_!==null;){if(s=_,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Li(9,s)}}catch(C){Z(s,s.return,C)}if(s===o){_=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,_=y;break e}_=s.return}}if(O=l,Kt(),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(Pi,e)}catch{}r=!0}return r}finally{A=n,Ue.transition=t}}return!1}function Vu(e,t,n){t=Yn(n,t),t=nd(e,t,1),e=Mt(e,t,1),t=ye(),e!==null&&(br(e,1,t),je(e,t))}function Z(e,t,n){if(e.tag===3)Vu(e,e,n);else for(;t!==null;){if(t.tag===3){Vu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Dt===null||!Dt.has(r))){e=Yn(n,e),e=rd(t,e,1),t=Mt(t,e,1),e=ye(),t!==null&&(br(t,1,e),je(t,e));break}}t=t.return}}function Mm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ye(),e.pingedLanes|=e.suspendedLanes&n,se===e&&(ue&n)===n&&(le===4||le===3&&(ue&130023424)===ue&&500>q()-ya?on(e,0):ga|=n),je(e,t)}function Cd(e,t){t===0&&(e.mode&1?(t=hl,hl<<=1,!(hl&130023424)&&(hl=4194304)):t=1);var n=ye();e=yt(e,t),e!==null&&(br(e,t,n),je(e,n))}function Dm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Cd(e,n)}function Fm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),Cd(e,n)}var Ed;Ed=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ce.current)Se=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Se=!1,jm(e,t,n);Se=!!(e.flags&131072)}else Se=!1,G&&t.flags&1048576&&_f(t,si,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Al(e,t),e=t.pendingProps;var l=Vn(t,me.current);Bn(t,n),l=ca(null,t,r,e,l,n);var i=fa();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ee(r)?(i=!0,ii(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,ia(t),l.updater=Ri,t.stateNode=l,l._reactInternals=t,os(t,r,e,n),t=us(null,t,r,!0,i,n)):(t.tag=0,G&&i&&qs(t),ge(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Al(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Um(r),e=Ke(r,e),l){case 0:t=as(null,t,r,e,n);break e;case 1:t=Lu(null,t,r,e,n);break e;case 11:t=Ru(null,t,r,e,n);break e;case 14:t=Tu(null,t,r,Ke(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ke(r,l),as(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ke(r,l),Lu(e,t,r,l,n);case 3:e:{if(sd(t),e===null)throw Error(S(387));r=t.pendingProps,i=t.memoizedState,l=i.element,zf(e,t),ci(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=Yn(Error(S(423)),t),t=Ou(e,t,r,n,l);break e}else if(r!==l){l=Yn(Error(S(424)),t),t=Ou(e,t,r,n,l);break e}else for(ze=Ot(t.stateNode.containerInfo.firstChild),Re=t,G=!0,Ye=null,n=Of(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qn(),r===l){t=vt(e,t,n);break e}ge(e,t,r,n)}t=t.child}return t;case 5:return Mf(t),e===null&&rs(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,qo(r,l)?o=null:i!==null&&qo(r,i)&&(t.flags|=32),od(e,t),ge(e,t,o,n),t.child;case 6:return e===null&&rs(t),null;case 13:return ad(e,t,n);case 4:return oa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Kn(t,null,r,n):ge(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ke(r,l),Ru(e,t,r,l,n);case 7:return ge(e,t,t.pendingProps,n),t.child;case 8:return ge(e,t,t.pendingProps.children,n),t.child;case 12:return ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,H(ai,r._currentValue),r._currentValue=o,i!==null)if(be(i.value,o)){if(i.children===l.children&&!Ce.current){t=vt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=ht(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),ls(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(S(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),ls(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ge(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Bn(t,n),l=Be(l),r=r(l),t.flags|=1,ge(e,t,r,n),t.child;case 14:return r=t.type,l=Ke(r,t.pendingProps),l=Ke(r.type,l),Tu(e,t,r,l,n);case 15:return ld(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ke(r,l),Al(e,t),t.tag=1,Ee(r)?(e=!0,ii(t)):e=!1,Bn(t,n),Tf(t,r,l),os(t,r,l,n),us(null,t,r,!0,e,n);case 19:return ud(e,t,n);case 22:return id(e,t,n)}throw Error(S(156,t.tag))};function jd(e,t){return Jc(e,t)}function Am(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ae(e,t,n,r){return new Am(e,t,n,r)}function ka(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Um(e){if(typeof e=="function")return ka(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Us)return 11;if(e===Bs)return 14}return 2}function At(e,t){var n=e.alternate;return n===null?(n=Ae(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Wl(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")ka(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case jn:return sn(n.children,l,i,t);case As:o=8,l|=8;break;case Io:return e=Ae(12,n,t,l|2),e.elementType=Io,e.lanes=i,e;case zo:return e=Ae(13,n,t,l),e.elementType=zo,e.lanes=i,e;case Ro:return e=Ae(19,n,t,l),e.elementType=Ro,e.lanes=i,e;case Tc:return Mi(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case zc:o=10;break e;case Rc:o=9;break e;case Us:o=11;break e;case Bs:o=14;break e;case jt:o=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Ae(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function sn(e,t,n,r){return e=Ae(7,e,r,t),e.lanes=n,e}function Mi(e,t,n,r){return e=Ae(22,e,r,t),e.elementType=Tc,e.lanes=n,e.stateNode={isHidden:!1},e}function So(e,t,n){return e=Ae(6,e,null,t),e.lanes=n,e}function Co(e,t,n){return t=Ae(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Bm(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=no(0),this.expirationTimes=no(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=no(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Sa(e,t,n,r,l,i,o,s,a){return e=new Bm(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ae(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ia(i),e}function Wm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:En,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Pd(e){if(!e)return Ht;e=e._reactInternals;e:{if(gn(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ee(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Ee(n))return jf(e,n,t)}return t}function _d(e,t,n,r,l,i,o,s,a){return e=Sa(n,r,!0,e,l,i,o,s,a),e.context=Pd(null),n=e.current,r=ye(),l=Ft(n),i=ht(r,l),i.callback=t??null,Mt(n,i,l),e.current.lanes=l,br(e,l,r),je(e,r),e}function Di(e,t,n,r){var l=t.current,i=ye(),o=Ft(l);return n=Pd(n),t.context===null?t.context=n:t.pendingContext=n,t=ht(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Mt(l,t,o),e!==null&&(Ze(e,l,o,i),Ml(e,l,o)),o}function vi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Qu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ca(e,t){Qu(e,t),(e=e.alternate)&&Qu(e,t)}var Nd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ea(e){this._internalRoot=e}Fi.prototype.render=Ea.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Di(e,t,null,null)};Fi.prototype.unmount=Ea.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;hn(function(){Di(null,e,null,null)}),t[gt]=null}};function Fi(e){this._internalRoot=e}Fi.prototype.unstable_scheduleHydration=function(e){if(e){var t=rf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<_t.length&&t!==0&&t<_t[n].priority;n++);_t.splice(n,0,e),n===0&&of(e)}};function ja(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ai(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ku(){}function Hm(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var u=vi(o);i.call(u)}}var o=_d(t,r,e,0,null,!1,!1,"",Ku);return e._reactRootContainer=o,e[gt]=o.current,Ur(e.nodeType===8?e.parentNode:e),hn(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var u=vi(a);s.call(u)}}var a=Sa(e,0,!1,null,null,!1,!1,"",Ku);return e._reactRootContainer=a,e[gt]=a.current,Ur(e.nodeType===8?e.parentNode:e),hn(function(){Di(t,a,n,r)}),a}function Ui(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var s=l;l=function(){var a=vi(o);s.call(a)}}Di(t,o,e,l)}else o=Hm(n,t,e,l,r);return vi(o)}tf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=vr(t.pendingLanes);n!==0&&(Vs(t,n|1),je(t,q()),!(O&6)&&(Xn=q()+500,Kt()))}break;case 13:hn(function(){var r=yt(e,1);if(r!==null){var l=ye();Ze(r,e,1,l)}}),Ca(e,1)}};Qs=function(e){if(e.tag===13){var t=yt(e,134217728);if(t!==null){var n=ye();Ze(t,e,134217728,n)}Ca(e,134217728)}};nf=function(e){if(e.tag===13){var t=Ft(e),n=yt(e,t);if(n!==null){var r=ye();Ze(n,e,t,r)}Ca(e,t)}};rf=function(){return A};lf=function(e,t){var n=A;try{return A=e,t()}finally{A=n}};Wo=function(e,t,n){switch(t){case"input":if(Oo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Ii(r);if(!l)throw Error(S(90));Oc(r),Oo(r,l)}}}break;case"textarea":Dc(e,n);break;case"select":t=n.value,t!=null&&Dn(e,!!n.multiple,t,!1)}};Vc=va;Qc=hn;var Vm={usingClientEntryPoint:!1,Events:[tl,$n,Ii,Wc,Hc,va]},mr={findFiberByHostInstance:tn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Qm={bundleType:mr.bundleType,version:mr.version,rendererPackageName:mr.rendererPackageName,rendererConfig:mr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Yc(e),e===null?null:e.stateNode},findFiberByHostInstance:mr.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jl.isDisabled&&jl.supportsFiber)try{Pi=jl.inject(Qm),ot=jl}catch{}}Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vm;Le.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ja(t))throw Error(S(200));return Wm(e,t,null,n)};Le.createRoot=function(e,t){if(!ja(e))throw Error(S(299));var n=!1,r="",l=Nd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Sa(e,1,!1,null,null,n,!1,r,l),e[gt]=t.current,Ur(e.nodeType===8?e.parentNode:e),new Ea(t)};Le.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Yc(t),e=e===null?null:e.stateNode,e};Le.flushSync=function(e){return hn(e)};Le.hydrate=function(e,t,n){if(!Ai(t))throw Error(S(200));return Ui(null,e,t,!0,n)};Le.hydrateRoot=function(e,t,n){if(!ja(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=Nd;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=_d(t,null,e,1,n??null,l,!1,i,o),e[gt]=t.current,Ur(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Fi(t)};Le.render=function(e,t,n){if(!Ai(t))throw Error(S(200));return Ui(null,e,t,!1,n)};Le.unmountComponentAtNode=function(e){if(!Ai(e))throw Error(S(40));return e._reactRootContainer?(hn(function(){Ui(null,null,e,!1,function(){e._reactRootContainer=null,e[gt]=null})}),!0):!1};Le.unstable_batchedUpdates=va;Le.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ai(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Ui(e,t,n,!1,r)};Le.version="18.2.0-next-9e3b772b8-20220608";function $d(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($d)}catch(e){console.error(e)}}$d(),Pc.exports=Le;var Km=Pc.exports,Id,Gu=Km;Id=Gu.createRoot,Gu.hydrateRoot;/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xr(){return Xr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xr.apply(this,arguments)}var zt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(zt||(zt={}));const Yu="popstate";function Gm(e){e===void 0&&(e={});function t(l,i){let{pathname:o="/",search:s="",hash:a=""}=yn(l.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),ks("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(l,i){let o=l.document.querySelector("base"),s="";if(o&&o.getAttribute("href")){let a=l.location.href,u=a.indexOf("#");s=u===-1?a:a.slice(0,u)}return s+"#"+(typeof i=="string"?i:xi(i))}function r(l,i){Bi(l.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return Xm(t,n,r,e)}function te(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Bi(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ym(){return Math.random().toString(36).substr(2,8)}function Xu(e,t){return{usr:e.state,key:e.key,idx:t}}function ks(e,t,n,r){return n===void 0&&(n=null),Xr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?yn(t):t,{state:n,key:t&&t.key||r||Ym()})}function xi(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function yn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Xm(e,t,n,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:i=!1}=r,o=l.history,s=zt.Pop,a=null,u=d();u==null&&(u=0,o.replaceState(Xr({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function m(){s=zt.Pop;let j=d(),p=j==null?null:j-u;u=j,a&&a({action:s,location:w.location,delta:p})}function g(j,p){s=zt.Push;let f=ks(w.location,j,p);n(f,j),u=d()+1;let h=Xu(f,u),y=w.createHref(f);try{o.pushState(h,"",y)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;l.location.assign(y)}i&&a&&a({action:s,location:w.location,delta:1})}function v(j,p){s=zt.Replace;let f=ks(w.location,j,p);n(f,j),u=d();let h=Xu(f,u),y=w.createHref(f);o.replaceState(h,"",y),i&&a&&a({action:s,location:w.location,delta:0})}function x(j){let p=l.location.origin!=="null"?l.location.origin:l.location.href,f=typeof j=="string"?j:xi(j);return te(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let w={get action(){return s},get location(){return e(l,o)},listen(j){if(a)throw new Error("A history only accepts one active listener");return l.addEventListener(Yu,m),a=j,()=>{l.removeEventListener(Yu,m),a=null}},createHref(j){return t(l,j)},createURL:x,encodeLocation(j){let p=x(j);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:v,go(j){return o.go(j)}};return w}var Ju;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ju||(Ju={}));function Jm(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?yn(t):t,l=Pa(r.pathname||"/",n);if(l==null)return null;let i=zd(e);Zm(i);let o=null;for(let s=0;o==null&&s<i.length;++s)o=og(i[s],ug(l));return o}function zd(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(i,o,s)=>{let a={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};a.relativePath.startsWith("/")&&(te(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=Ut([r,a.relativePath]),d=n.concat(a);i.children&&i.children.length>0&&(te(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),zd(i.children,t,d,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:lg(u,i.index),routesMeta:d})};return e.forEach((i,o)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))l(i,o);else for(let a of Rd(i.path))l(i,o,a)}),t}function Rd(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return l?[i,""]:[i];let o=Rd(r.join("/")),s=[];return s.push(...o.map(a=>a===""?i:[i,a].join("/"))),l&&s.push(...o),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function Zm(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ig(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const qm=/^:\w+$/,bm=3,eg=2,tg=1,ng=10,rg=-2,Zu=e=>e==="*";function lg(e,t){let n=e.split("/"),r=n.length;return n.some(Zu)&&(r+=rg),t&&(r+=eg),n.filter(l=>!Zu(l)).reduce((l,i)=>l+(qm.test(i)?bm:i===""?tg:ng),r)}function ig(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function og(e,t){let{routesMeta:n}=e,r={},l="/",i=[];for(let o=0;o<n.length;++o){let s=n[o],a=o===n.length-1,u=l==="/"?t:t.slice(l.length)||"/",d=sg({path:s.relativePath,caseSensitive:s.caseSensitive,end:a},u);if(!d)return null;Object.assign(r,d.params);let m=s.route;i.push({params:r,pathname:Ut([l,d.pathname]),pathnameBase:hg(Ut([l,d.pathnameBase])),route:m}),d.pathnameBase!=="/"&&(l=Ut([l,d.pathnameBase]))}return i}function sg(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ag(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let i=l[0],o=i.replace(/(.)\/+$/,"$1"),s=l.slice(1);return{params:r.reduce((u,d,m)=>{let{paramName:g,isOptional:v}=d;if(g==="*"){let w=s[m]||"";o=i.slice(0,i.length-w.length).replace(/(.)\/+$/,"$1")}const x=s[m];return v&&!x?u[g]=void 0:u[g]=cg(x||"",g),u},{}),pathname:i,pathnameBase:o,pattern:e}}function ag(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Bi(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(o,s,a)=>(r.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function ug(e){try{return decodeURI(e)}catch(t){return Bi(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function cg(e,t){try{return decodeURIComponent(e)}catch(n){return Bi(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Pa(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function fg(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?yn(e):e;return{pathname:n?n.startsWith("/")?n:dg(n,t):t,search:mg(r),hash:gg(l)}}function dg(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function Eo(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function pg(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Td(e,t){let n=pg(e);return t?n.map((r,l)=>l===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Ld(e,t,n,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=yn(e):(l=Xr({},e),te(!l.pathname||!l.pathname.includes("?"),Eo("?","pathname","search",l)),te(!l.pathname||!l.pathname.includes("#"),Eo("#","pathname","hash",l)),te(!l.search||!l.search.includes("#"),Eo("#","search","hash",l)));let i=e===""||l.pathname==="",o=i?"/":l.pathname,s;if(o==null)s=n;else{let m=t.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),m-=1;l.pathname=g.join("/")}s=m>=0?t[m]:"/"}let a=fg(l,s),u=o&&o!=="/"&&o.endsWith("/"),d=(i||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||d)&&(a.pathname+="/"),a}const Ut=e=>e.join("/").replace(/\/\/+/g,"/"),hg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),mg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,gg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function yg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Od=["post","put","patch","delete"];new Set(Od);const vg=["get",...Od];new Set(vg);/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jr(){return Jr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jr.apply(this,arguments)}const _a=N.createContext(null),xg=N.createContext(null),vn=N.createContext(null),Wi=N.createContext(null),xn=N.createContext({outlet:null,matches:[],isDataRoute:!1}),Md=N.createContext(null);function wg(e,t){let{relative:n}=t===void 0?{}:t;rl()||te(!1);let{basename:r,navigator:l}=N.useContext(vn),{hash:i,pathname:o,search:s}=Fd(e,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:Ut([r,o])),l.createHref({pathname:a,search:s,hash:i})}function rl(){return N.useContext(Wi)!=null}function ll(){return rl()||te(!1),N.useContext(Wi).location}function Dd(e){N.useContext(vn).static||N.useLayoutEffect(e)}function kg(){let{isDataRoute:e}=N.useContext(xn);return e?Lg():Sg()}function Sg(){rl()||te(!1);let e=N.useContext(_a),{basename:t,future:n,navigator:r}=N.useContext(vn),{matches:l}=N.useContext(xn),{pathname:i}=ll(),o=JSON.stringify(Td(l,n.v7_relativeSplatPath)),s=N.useRef(!1);return Dd(()=>{s.current=!0}),N.useCallback(function(u,d){if(d===void 0&&(d={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let m=Ld(u,JSON.parse(o),i,d.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:Ut([t,m.pathname])),(d.replace?r.replace:r.push)(m,d.state,d)},[t,r,o,i,e])}function Fd(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=N.useContext(vn),{matches:l}=N.useContext(xn),{pathname:i}=ll(),o=JSON.stringify(Td(l,r.v7_relativeSplatPath));return N.useMemo(()=>Ld(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function Cg(e,t){return Eg(e,t)}function Eg(e,t,n,r){rl()||te(!1);let{navigator:l}=N.useContext(vn),{matches:i}=N.useContext(xn),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let u=ll(),d;if(t){var m;let j=typeof t=="string"?yn(t):t;a==="/"||(m=j.pathname)!=null&&m.startsWith(a)||te(!1),d=j}else d=u;let g=d.pathname||"/",v=a==="/"?g:g.slice(a.length)||"/",x=Jm(e,{pathname:v}),w=$g(x&&x.map(j=>Object.assign({},j,{params:Object.assign({},s,j.params),pathname:Ut([a,l.encodeLocation?l.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?a:Ut([a,l.encodeLocation?l.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),i,n,r);return t&&w?N.createElement(Wi.Provider,{value:{location:Jr({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:zt.Pop}},w):w}function jg(){let e=Tg(),t=yg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},t),n?N.createElement("pre",{style:l},n):null,null)}const Pg=N.createElement(jg,null);class _g extends N.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?N.createElement(xn.Provider,{value:this.props.routeContext},N.createElement(Md.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ng(e){let{routeContext:t,match:n,children:r}=e,l=N.useContext(_a);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),N.createElement(xn.Provider,{value:t},r)}function $g(e,t,n,r){var l;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,s=(l=n)==null?void 0:l.errors;if(s!=null){let d=o.findIndex(m=>m.route.id&&(s==null?void 0:s[m.route.id]));d>=0||te(!1),o=o.slice(0,Math.min(o.length,d+1))}let a=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let m=o[d];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(u=d),m.route.id){let{loaderData:g,errors:v}=n,x=m.route.loader&&g[m.route.id]===void 0&&(!v||v[m.route.id]===void 0);if(m.route.lazy||x){a=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,m,g)=>{let v,x=!1,w=null,j=null;n&&(v=s&&m.route.id?s[m.route.id]:void 0,w=m.route.errorElement||Pg,a&&(u<0&&g===0?(x=!0,j=null):u===g&&(x=!0,j=m.route.hydrateFallbackElement||null)));let p=t.concat(o.slice(0,g+1)),f=()=>{let h;return v?h=w:x?h=j:m.route.Component?h=N.createElement(m.route.Component,null):m.route.element?h=m.route.element:h=d,N.createElement(Ng,{match:m,routeContext:{outlet:d,matches:p,isDataRoute:n!=null},children:h})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?N.createElement(_g,{location:n.location,revalidation:n.revalidation,component:w,error:v,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):f()},null)}var Ad=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Ad||{}),wi=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(wi||{});function Ig(e){let t=N.useContext(_a);return t||te(!1),t}function zg(e){let t=N.useContext(xg);return t||te(!1),t}function Rg(e){let t=N.useContext(xn);return t||te(!1),t}function Ud(e){let t=Rg(),n=t.matches[t.matches.length-1];return n.route.id||te(!1),n.route.id}function Tg(){var e;let t=N.useContext(Md),n=zg(wi.UseRouteError),r=Ud(wi.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Lg(){let{router:e}=Ig(Ad.UseNavigateStable),t=Ud(wi.UseNavigateStable),n=N.useRef(!1);return Dd(()=>{n.current=!0}),N.useCallback(function(l,i){i===void 0&&(i={}),n.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,Jr({fromRouteId:t},i)))},[e,t])}function Ie(e){te(!1)}function Og(e){let{basename:t="/",children:n=null,location:r,navigationType:l=zt.Pop,navigator:i,static:o=!1,future:s}=e;rl()&&te(!1);let a=t.replace(/^\/*/,"/"),u=N.useMemo(()=>({basename:a,navigator:i,static:o,future:Jr({v7_relativeSplatPath:!1},s)}),[a,s,i,o]);typeof r=="string"&&(r=yn(r));let{pathname:d="/",search:m="",hash:g="",state:v=null,key:x="default"}=r,w=N.useMemo(()=>{let j=Pa(d,a);return j==null?null:{location:{pathname:j,search:m,hash:g,state:v,key:x},navigationType:l}},[a,d,m,g,v,x,l]);return w==null?null:N.createElement(vn.Provider,{value:u},N.createElement(Wi.Provider,{children:n,value:w}))}function Bd(e){let{children:t,location:n}=e;return Cg(Ss(t),n)}new Promise(()=>{});function Ss(e,t){t===void 0&&(t=[]);let n=[];return N.Children.forEach(e,(r,l)=>{if(!N.isValidElement(r))return;let i=[...t,l];if(r.type===N.Fragment){n.push.apply(n,Ss(r.props.children,i));return}r.type!==Ie&&te(!1),!r.props.index||!r.props.children||te(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ss(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cs(){return Cs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Cs.apply(this,arguments)}function Mg(e,t){if(e==null)return{};var n={},r=Object.keys(e),l,i;for(i=0;i<r.length;i++)l=r[i],!(t.indexOf(l)>=0)&&(n[l]=e[l]);return n}function Dg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Fg(e,t){return e.button===0&&(!t||t==="_self")&&!Dg(e)}const Ag=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Ug="startTransition",qu=Dp[Ug];function Bg(e){let{basename:t,children:n,future:r,window:l}=e,i=N.useRef();i.current==null&&(i.current=Gm({window:l,v5Compat:!0}));let o=i.current,[s,a]=N.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=N.useCallback(m=>{u&&qu?qu(()=>a(m)):a(m)},[a,u]);return N.useLayoutEffect(()=>o.listen(d),[o,d]),N.createElement(Og,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}const Wg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Hg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Vg=N.forwardRef(function(t,n){let{onClick:r,relative:l,reloadDocument:i,replace:o,state:s,target:a,to:u,preventScrollReset:d,unstable_viewTransition:m}=t,g=Mg(t,Ag),{basename:v}=N.useContext(vn),x,w=!1;if(typeof u=="string"&&Hg.test(u)&&(x=u,Wg))try{let h=new URL(window.location.href),y=u.startsWith("//")?new URL(h.protocol+u):new URL(u),C=Pa(y.pathname,v);y.origin===h.origin&&C!=null?u=C+y.search+y.hash:w=!0}catch{}let j=wg(u,{relative:l}),p=Qg(u,{replace:o,state:s,target:a,preventScrollReset:d,relative:l,unstable_viewTransition:m});function f(h){r&&r(h),h.defaultPrevented||p(h)}return N.createElement("a",Cs({},g,{href:x||j,onClick:w||i?r:f,ref:n,target:a}))});var bu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(bu||(bu={}));var ec;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ec||(ec={}));function Qg(e,t){let{target:n,replace:r,state:l,preventScrollReset:i,relative:o,unstable_viewTransition:s}=t===void 0?{}:t,a=kg(),u=ll(),d=Fd(e,{relative:o});return N.useCallback(m=>{if(Fg(m,n)){m.preventDefault();let g=r!==void 0?r:xi(u)===xi(d);a(e,{replace:g,state:l,preventScrollReset:i,relative:o,unstable_viewTransition:s})}},[u,a,d,r,l,n,e,i,o,s])}const Ir=[{name:"NIGHTSKY",primary:"#000000",secondary:"#fec060",tertiary:"#2753bb",link:"#2753bb",linkInteraction:"#fec060"},{name:"PASTEL",primary:"#2753bb",secondary:"#ee7967",tertiary:"#3080f6",link:"#2753bb",linkInteraction:"#ee7967"},{name:"GRANDMA",primary:"#5b1734",secondary:"#669c4b",tertiary:"#f4b386",link:"#5b1734",linkInteraction:"#669c4b"},{name:"MARS",primary:"#590d1e",secondary:"#d9525b",tertiary:"#3080f6",link:"#590d1e",linkInteraction:"#d9525b"},{name:"PURPLY",primary:"#311b14",secondary:"#6cc4fa",tertiary:"#8368af",link:"#311b14",linkInteraction:"#6cc4fa"},{name:"VIVID",primary:"#0f3044",secondary:"#bc2619",tertiary:"#4f6baf",link:"#0f3044",linkInteraction:"#bc2619"},{name:"FOREST",primary:"#000232",secondary:"#395c39",tertiary:"#7a6739",link:"#000232",linkInteraction:"#395c39"},{name:"RHENIUM",primary:"#252c41",secondary:"#d79abe",tertiary:"#ec5a4d",link:"#252c41",linkInteraction:"#d79abe"},{name:"SEWERS",primary:"#0a1e35",secondary:"#72f9ff",tertiary:"#babbbd",link:"#0a1e35",linkInteraction:"#babbbd"},{name:"NIKAIDO",primary:"#1a1a0d",secondary:"#f19737",tertiary:"#3080f6",link:"#1a1a0d",linkInteraction:"#f19737"},{name:"SEPIA",primary:"#4f2108",secondary:"#7ca597",tertiary:"#314b6c",link:"#4f2108",linkInteraction:"#7ca597"},{name:"WETLAND",primary:"#265341",secondary:"#a47e45",tertiary:"#314b6c",link:"#265341",linkInteraction:"#a47e45"},{name:"NOSTALGIA",primary:"#3c5a77",secondary:"#e7a7a5",tertiary:"#b99bf7",link:"#3c5a77",linkInteraction:"#e7a7a5"}],Kg=Ir.NIGHTSKY,Wd=M.createContext(),Gg=e=>{const[t,n]=M.useState(Kg),[r,l]=M.useState(!1),[i,o]=M.useState(!1),s=M.useMemo(()=>r?"0":"-1",[r]),a=M.useCallback(d=>{i===!1&&o(!0),l(d)},[i]),u={currentPalette:t,handleBackgroundInteraction:a,backgroundInteraction:i,setPalette:n,setShowContent:l,showContent:r,tabIndex:s};return c.jsx(Wd.Provider,{value:u,children:e.children})},et=()=>{const e=M.useContext(Wd);if(!e)throw new Error("App context misconfigured");return e},en=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e),Hd=M.createContext(null),Yg=Ir[0],Xg=e=>{const[t,n]=M.useState(Yg),r=M.useCallback(()=>{const i=Ir.findIndex(u=>u===t),o=[...Ir];o.splice(i,1);const s=en(0,o.length),a=o[s];n(a)},[t,n]),l={currentPalette:t,palettes:Ir,pickRandomPalette:r,setPalette:n};return c.jsx(Hd.Provider,{value:l,children:e.children})},we=()=>{const e=M.useContext(Hd);if(!e)throw new Error("Palette context misconfigured");return e};var he=function(){return he=Object.assign||function(t){for(var n,r=1,l=arguments.length;r<l;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},he.apply(this,arguments)};function Jn(e,t,n){if(n||arguments.length===2)for(var r=0,l=t.length,i;r<l;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var Q="-ms-",zr="-moz-",D="-webkit-",Vd="comm",Hi="rule",Na="decl",Jg="@import",Qd="@keyframes",Zg="@layer",Kd=Math.abs,$a=String.fromCharCode,Es=Object.assign;function qg(e,t){return oe(e,0)^45?(((t<<2^oe(e,0))<<2^oe(e,1))<<2^oe(e,2))<<2^oe(e,3):0}function Gd(e){return e.trim()}function ct(e,t){return(e=t.exec(e))?e[0]:e}function R(e,t,n){return e.replace(t,n)}function Hl(e,t,n){return e.indexOf(t,n)}function oe(e,t){return e.charCodeAt(t)|0}function Zn(e,t,n){return e.slice(t,n)}function rt(e){return e.length}function Yd(e){return e.length}function wr(e,t){return t.push(e),e}function bg(e,t){return e.map(t).join("")}function tc(e,t){return e.filter(function(n){return!ct(n,t)})}var Vi=1,qn=1,Xd=0,He=0,b=0,ir="";function Qi(e,t,n,r,l,i,o,s){return{value:e,root:t,parent:n,type:r,props:l,children:i,line:Vi,column:qn,length:o,return:"",siblings:s}}function Et(e,t){return Es(Qi("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Cn(e){for(;e.root;)e=Et(e.root,{children:[e]});wr(e,e.siblings)}function ey(){return b}function ty(){return b=He>0?oe(ir,--He):0,qn--,b===10&&(qn=1,Vi--),b}function qe(){return b=He<Xd?oe(ir,He++):0,qn++,b===10&&(qn=1,Vi++),b}function an(){return oe(ir,He)}function Vl(){return He}function Ki(e,t){return Zn(ir,e,t)}function js(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ny(e){return Vi=qn=1,Xd=rt(ir=e),He=0,[]}function ry(e){return ir="",e}function jo(e){return Gd(Ki(He-1,Ps(e===91?e+2:e===40?e+1:e)))}function ly(e){for(;(b=an())&&b<33;)qe();return js(e)>2||js(b)>3?"":" "}function iy(e,t){for(;--t&&qe()&&!(b<48||b>102||b>57&&b<65||b>70&&b<97););return Ki(e,Vl()+(t<6&&an()==32&&qe()==32))}function Ps(e){for(;qe();)switch(b){case e:return He;case 34:case 39:e!==34&&e!==39&&Ps(b);break;case 40:e===41&&Ps(e);break;case 92:qe();break}return He}function oy(e,t){for(;qe()&&e+b!==57;)if(e+b===84&&an()===47)break;return"/*"+Ki(t,He-1)+"*"+$a(e===47?e:qe())}function sy(e){for(;!js(an());)qe();return Ki(e,He)}function ay(e){return ry(Ql("",null,null,null,[""],e=ny(e),0,[0],e))}function Ql(e,t,n,r,l,i,o,s,a){for(var u=0,d=0,m=o,g=0,v=0,x=0,w=1,j=1,p=1,f=0,h="",y=l,C=i,E=r,k=h;j;)switch(x=f,f=qe()){case 40:if(x!=108&&oe(k,m-1)==58){Hl(k+=R(jo(f),"&","&\f"),"&\f",Kd(u?s[u-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:k+=jo(f);break;case 9:case 10:case 13:case 32:k+=ly(x);break;case 92:k+=iy(Vl()-1,7);continue;case 47:switch(an()){case 42:case 47:wr(uy(oy(qe(),Vl()),t,n,a),a);break;default:k+="/"}break;case 123*w:s[u++]=rt(k)*p;case 125*w:case 59:case 0:switch(f){case 0:case 125:j=0;case 59+d:p==-1&&(k=R(k,/\f/g,"")),v>0&&rt(k)-m&&wr(v>32?rc(k+";",r,n,m-1,a):rc(R(k," ","")+";",r,n,m-2,a),a);break;case 59:k+=";";default:if(wr(E=nc(k,t,n,u,d,l,s,h,y=[],C=[],m,i),i),f===123)if(d===0)Ql(k,t,E,E,y,i,m,s,C);else switch(g===99&&oe(k,3)===110?100:g){case 100:case 108:case 109:case 115:Ql(e,E,E,r&&wr(nc(e,E,E,0,0,l,s,h,l,y=[],m,C),C),l,C,m,s,r?y:C);break;default:Ql(k,E,E,E,[""],C,0,s,C)}}u=d=v=0,w=p=1,h=k="",m=o;break;case 58:m=1+rt(k),v=x;default:if(w<1){if(f==123)--w;else if(f==125&&w++==0&&ty()==125)continue}switch(k+=$a(f),f*w){case 38:p=d>0?1:(k+="\f",-1);break;case 44:s[u++]=(rt(k)-1)*p,p=1;break;case 64:an()===45&&(k+=jo(qe())),g=an(),d=m=rt(h=k+=sy(Vl())),f++;break;case 45:x===45&&rt(k)==2&&(w=0)}}return i}function nc(e,t,n,r,l,i,o,s,a,u,d,m){for(var g=l-1,v=l===0?i:[""],x=Yd(v),w=0,j=0,p=0;w<r;++w)for(var f=0,h=Zn(e,g+1,g=Kd(j=o[w])),y=e;f<x;++f)(y=Gd(j>0?v[f]+" "+h:R(h,/&\f/g,v[f])))&&(a[p++]=y);return Qi(e,t,n,l===0?Hi:s,a,u,d,m)}function uy(e,t,n,r){return Qi(e,t,n,Vd,$a(ey()),Zn(e,2,-2),0,r)}function rc(e,t,n,r,l){return Qi(e,t,n,Na,Zn(e,0,r),Zn(e,r+1,-1),r,l)}function Jd(e,t,n){switch(qg(e,t)){case 5103:return D+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return D+e+e;case 4789:return zr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return D+e+zr+e+Q+e+e;case 5936:switch(oe(e,t+11)){case 114:return D+e+Q+R(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return D+e+Q+R(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return D+e+Q+R(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return D+e+Q+e+e;case 6165:return D+e+Q+"flex-"+e+e;case 5187:return D+e+R(e,/(\w+).+(:[^]+)/,D+"box-$1$2"+Q+"flex-$1$2")+e;case 5443:return D+e+Q+"flex-item-"+R(e,/flex-|-self/g,"")+(ct(e,/flex-|baseline/)?"":Q+"grid-row-"+R(e,/flex-|-self/g,""))+e;case 4675:return D+e+Q+"flex-line-pack"+R(e,/align-content|flex-|-self/g,"")+e;case 5548:return D+e+Q+R(e,"shrink","negative")+e;case 5292:return D+e+Q+R(e,"basis","preferred-size")+e;case 6060:return D+"box-"+R(e,"-grow","")+D+e+Q+R(e,"grow","positive")+e;case 4554:return D+R(e,/([^-])(transform)/g,"$1"+D+"$2")+e;case 6187:return R(R(R(e,/(zoom-|grab)/,D+"$1"),/(image-set)/,D+"$1"),e,"")+e;case 5495:case 3959:return R(e,/(image-set\([^]*)/,D+"$1$`$1");case 4968:return R(R(e,/(.+:)(flex-)?(.*)/,D+"box-pack:$3"+Q+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+D+e+e;case 4200:if(!ct(e,/flex-|baseline/))return Q+"grid-column-align"+Zn(e,t)+e;break;case 2592:case 3360:return Q+R(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,l){return t=l,ct(r.props,/grid-\w+-end/)})?~Hl(e+(n=n[t].value),"span",0)?e:Q+R(e,"-start","")+e+Q+"grid-row-span:"+(~Hl(n,"span",0)?ct(n,/\d+/):+ct(n,/\d+/)-+ct(e,/\d+/))+";":Q+R(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return ct(r.props,/grid-\w+-start/)})?e:Q+R(R(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return R(e,/(.+)-inline(.+)/,D+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(rt(e)-1-t>6)switch(oe(e,t+1)){case 109:if(oe(e,t+4)!==45)break;case 102:return R(e,/(.+:)(.+)-([^]+)/,"$1"+D+"$2-$3$1"+zr+(oe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Hl(e,"stretch",0)?Jd(R(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return R(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,l,i,o,s,a,u){return Q+l+":"+i+u+(o?Q+l+"-span:"+(s?a:+a-+i)+u:"")+e});case 4949:if(oe(e,t+6)===121)return R(e,":",":"+D)+e;break;case 6444:switch(oe(e,oe(e,14)===45?18:11)){case 120:return R(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+D+(oe(e,14)===45?"inline-":"")+"box$3$1"+D+"$2$3$1"+Q+"$2box$3")+e;case 100:return R(e,":",":"+Q)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return R(e,"scroll-","scroll-snap-")+e}return e}function ki(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function cy(e,t,n,r){switch(e.type){case Zg:if(e.children.length)break;case Jg:case Na:return e.return=e.return||e.value;case Vd:return"";case Qd:return e.return=e.value+"{"+ki(e.children,r)+"}";case Hi:if(!rt(e.value=e.props.join(",")))return""}return rt(n=ki(e.children,r))?e.return=e.value+"{"+n+"}":""}function fy(e){var t=Yd(e);return function(n,r,l,i){for(var o="",s=0;s<t;s++)o+=e[s](n,r,l,i)||"";return o}}function dy(e){return function(t){t.root||(t=t.return)&&e(t)}}function py(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Na:e.return=Jd(e.value,e.length,n);return;case Qd:return ki([Et(e,{value:R(e.value,"@","@"+D)})],r);case Hi:if(e.length)return bg(n=e.props,function(l){switch(ct(l,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Cn(Et(e,{props:[R(l,/:(read-\w+)/,":"+zr+"$1")]})),Cn(Et(e,{props:[l]})),Es(e,{props:tc(n,r)});break;case"::placeholder":Cn(Et(e,{props:[R(l,/:(plac\w+)/,":"+D+"input-$1")]})),Cn(Et(e,{props:[R(l,/:(plac\w+)/,":"+zr+"$1")]})),Cn(Et(e,{props:[R(l,/:(plac\w+)/,Q+"input-$1")]})),Cn(Et(e,{props:[l]})),Es(e,{props:tc(n,r)});break}return""})}}var hy={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ne={},bn=typeof process<"u"&&Ne!==void 0&&(Ne.REACT_APP_SC_ATTR||Ne.SC_ATTR)||"data-styled",Zd="active",qd="data-styled-version",Gi="6.1.6",Ia=`/*!sc*/
`,za=typeof window<"u"&&"HTMLElement"in window,my=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ne!==void 0&&Ne.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ne.REACT_APP_SC_DISABLE_SPEEDY!==""?Ne.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ne.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ne!==void 0&&Ne.SC_DISABLE_SPEEDY!==void 0&&Ne.SC_DISABLE_SPEEDY!==""&&Ne.SC_DISABLE_SPEEDY!=="false"&&Ne.SC_DISABLE_SPEEDY),gy={},Yi=Object.freeze([]),er=Object.freeze({});function bd(e,t,n){return n===void 0&&(n=er),e.theme!==n.theme&&e.theme||t||n.theme}var ep=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),yy=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,vy=/(^-|-$)/g;function lc(e){return e.replace(yy,"-").replace(vy,"")}var xy=/(a)(d)/gi,Pl=52,ic=function(e){return String.fromCharCode(e+(e>25?39:97))};function _s(e){var t,n="";for(t=Math.abs(e);t>Pl;t=t/Pl|0)n=ic(t%Pl)+n;return(ic(t%Pl)+n).replace(xy,"$1-$2")}var Po,tp=5381,Mn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},np=function(e){return Mn(tp,e)};function Ra(e){return _s(np(e)>>>0)}function wy(e){return e.displayName||e.name||"Component"}function _o(e){return typeof e=="string"&&!0}var rp=typeof Symbol=="function"&&Symbol.for,lp=rp?Symbol.for("react.memo"):60115,ky=rp?Symbol.for("react.forward_ref"):60112,Sy={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Cy={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ip={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ey=((Po={})[ky]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Po[lp]=ip,Po);function oc(e){return("type"in(t=e)&&t.type.$$typeof)===lp?ip:"$$typeof"in e?Ey[e.$$typeof]:Sy;var t}var jy=Object.defineProperty,Py=Object.getOwnPropertyNames,sc=Object.getOwnPropertySymbols,_y=Object.getOwnPropertyDescriptor,Ny=Object.getPrototypeOf,ac=Object.prototype;function op(e,t,n){if(typeof t!="string"){if(ac){var r=Ny(t);r&&r!==ac&&op(e,r,n)}var l=Py(t);sc&&(l=l.concat(sc(t)));for(var i=oc(e),o=oc(t),s=0;s<l.length;++s){var a=l[s];if(!(a in Cy||n&&n[a]||o&&a in o||i&&a in i)){var u=_y(t,a);try{jy(e,a,u)}catch{}}}}return e}function tr(e){return typeof e=="function"}function Ta(e){return typeof e=="object"&&"styledComponentId"in e}function ln(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Si(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Zr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ns(e,t,n){if(n===void 0&&(n=!1),!n&&!Zr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ns(e[r],t[r]);else if(Zr(t))for(var r in t)e[r]=Ns(e[r],t[r]);return e}function La(e,t){Object.defineProperty(e,"toString",{value:t})}function il(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var $y=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,l=r.length,i=l;t>=i;)if((i<<=1)<0)throw il(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var o=l;o<i;o++)this.groupSizes[o]=0}for(var s=this.indexOfGroup(t+1),a=(o=0,n.length);o<a;o++)this.tag.insertRule(s,n[o])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),l=r+n;this.groupSizes[t]=0;for(var i=r;i<l;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],l=this.indexOfGroup(t),i=l+r,o=l;o<i;o++)n+="".concat(this.tag.getRule(o)).concat(Ia);return n},e}(),Kl=new Map,Ci=new Map,Gl=1,_l=function(e){if(Kl.has(e))return Kl.get(e);for(;Ci.has(Gl);)Gl++;var t=Gl++;return Kl.set(e,t),Ci.set(t,e),t},Iy=function(e,t){Gl=t+1,Kl.set(e,t),Ci.set(t,e)},zy="style[".concat(bn,"][").concat(qd,'="').concat(Gi,'"]'),Ry=new RegExp("^".concat(bn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ty=function(e,t,n){for(var r,l=n.split(","),i=0,o=l.length;i<o;i++)(r=l[i])&&e.registerName(t,r)},Ly=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Ia),l=[],i=0,o=r.length;i<o;i++){var s=r[i].trim();if(s){var a=s.match(Ry);if(a){var u=0|parseInt(a[1],10),d=a[2];u!==0&&(Iy(d,u),Ty(e,d,a[3]),e.getTag().insertRules(u,l)),l.length=0}else l.push(s)}}};function Oy(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var sp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),l=function(s){var a=Array.from(s.querySelectorAll("style[".concat(bn,"]")));return a[a.length-1]}(n),i=l!==void 0?l.nextSibling:null;r.setAttribute(bn,Zd),r.setAttribute(qd,Gi);var o=Oy();return o&&r.setAttribute("nonce",o),n.insertBefore(r,i),r},My=function(){function e(t){this.element=sp(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,l=0,i=r.length;l<i;l++){var o=r[l];if(o.ownerNode===n)return o}throw il(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Dy=function(){function e(t){this.element=sp(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Fy=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),uc=za,Ay={isServer:!za,useCSSOMInjection:!my},Ei=function(){function e(t,n,r){t===void 0&&(t=er),n===void 0&&(n={});var l=this;this.options=he(he({},Ay),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&za&&uc&&(uc=!1,function(i){for(var o=document.querySelectorAll(zy),s=0,a=o.length;s<a;s++){var u=o[s];u&&u.getAttribute(bn)!==Zd&&(Ly(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),La(this,function(){return function(i){for(var o=i.getTag(),s=o.length,a="",u=function(m){var g=function(p){return Ci.get(p)}(m);if(g===void 0)return"continue";var v=i.names.get(g),x=o.getGroup(m);if(v===void 0||x.length===0)return"continue";var w="".concat(bn,".g").concat(m,'[id="').concat(g,'"]'),j="";v!==void 0&&v.forEach(function(p){p.length>0&&(j+="".concat(p,","))}),a+="".concat(x).concat(w,'{content:"').concat(j,'"}').concat(Ia)},d=0;d<s;d++)u(d);return a}(l)})}return e.registerId=function(t){return _l(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(he(he({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,l=n.target;return n.isServer?new Fy(l):r?new My(l):new Dy(l)}(this.options),new $y(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(_l(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(_l(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(_l(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Uy=/&/g,By=/^\s*\/\/.*$/gm;function ap(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=ap(n.children,t)),n})}function Wy(e){var t,n,r,l=er,i=l.options,o=i===void 0?er:i,s=l.plugins,a=s===void 0?Yi:s,u=function(g,v,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):g},d=a.slice();d.push(function(g){g.type===Hi&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(Uy,n).replace(r,u))}),o.prefix&&d.push(py),d.push(cy);var m=function(g,v,x,w){v===void 0&&(v=""),x===void 0&&(x=""),w===void 0&&(w="&"),t=w,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var j=g.replace(By,""),p=ay(x||v?"".concat(x," ").concat(v," { ").concat(j," }"):j);o.namespace&&(p=ap(p,o.namespace));var f=[];return ki(p,fy(d.concat(dy(function(h){return f.push(h)})))),f};return m.hash=a.length?a.reduce(function(g,v){return v.name||il(15),Mn(g,v.name)},tp).toString():"",m}var Hy=new Ei,$s=Wy(),up=M.createContext({shouldForwardProp:void 0,styleSheet:Hy,stylis:$s});up.Consumer;M.createContext(void 0);function Is(){return N.useContext(up)}var cp=function(){function e(t,n){var r=this;this.inject=function(l,i){i===void 0&&(i=$s);var o=r.name+i.hash;l.hasNameForId(r.id,o)||l.insertRules(r.id,o,i(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,La(this,function(){throw il(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=$s),this.name+t.hash},e}(),Vy=function(e){return e>="A"&&e<="Z"};function cc(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Vy(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var fp=function(e){return e==null||e===!1||e===""},dp=function(e){var t,n,r=[];for(var l in e){var i=e[l];e.hasOwnProperty(l)&&!fp(i)&&(Array.isArray(i)&&i.isCss||tr(i)?r.push("".concat(cc(l),":"),i,";"):Zr(i)?r.push.apply(r,Jn(Jn(["".concat(l," {")],dp(i),!1),["}"],!1)):r.push("".concat(cc(l),": ").concat((t=l,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in hy||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Bt(e,t,n,r){if(fp(e))return[];if(Ta(e))return[".".concat(e.styledComponentId)];if(tr(e)){if(!tr(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var l=e(t);return Bt(l,t,n,r)}var i;return e instanceof cp?n?(e.inject(n,r),[e.getName(r)]):[e]:Zr(e)?dp(e):Array.isArray(e)?Array.prototype.concat.apply(Yi,e.map(function(o){return Bt(o,t,n,r)})):[e.toString()]}function pp(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(tr(n)&&!Ta(n))return!1}return!0}var Qy=np(Gi),Ky=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&pp(t),this.componentId=n,this.baseHash=Mn(Qy,n),this.baseStyle=r,Ei.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var l=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))l=ln(l,this.staticRulesId);else{var i=Si(Bt(this.rules,t,n,r)),o=_s(Mn(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,o)){var s=r(i,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,s)}l=ln(l,o),this.staticRulesId=o}else{for(var a=Mn(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var m=this.rules[d];if(typeof m=="string")u+=m;else if(m){var g=Si(Bt(m,t,n,r));a=Mn(a,g+d),u+=g}}if(u){var v=_s(a>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(u,".".concat(v),void 0,this.componentId)),l=ln(l,v)}}return l},e}(),Oa=M.createContext(void 0);Oa.Consumer;var No={};function Gy(e,t,n){var r=Ta(e),l=e,i=!_o(e),o=t.attrs,s=o===void 0?Yi:o,a=t.componentId,u=a===void 0?function(y,C){var E=typeof y!="string"?"sc":lc(y);No[E]=(No[E]||0)+1;var k="".concat(E,"-").concat(Ra(Gi+E+No[E]));return C?"".concat(C,"-").concat(k):k}(t.displayName,t.parentComponentId):a,d=t.displayName,m=d===void 0?function(y){return _o(y)?"styled.".concat(y):"Styled(".concat(wy(y),")")}(e):d,g=t.displayName&&t.componentId?"".concat(lc(t.displayName),"-").concat(t.componentId):t.componentId||u,v=r&&l.attrs?l.attrs.concat(s).filter(Boolean):s,x=t.shouldForwardProp;if(r&&l.shouldForwardProp){var w=l.shouldForwardProp;if(t.shouldForwardProp){var j=t.shouldForwardProp;x=function(y,C){return w(y,C)&&j(y,C)}}else x=w}var p=new Ky(n,g,r?l.componentStyle:void 0);function f(y,C){return function(E,k,$){var W=E.attrs,T=E.componentStyle,Pe=E.defaultProps,Gt=E.foldedComponentIds,Yt=E.styledComponentId,sl=E.target,Xi=M.useContext(Oa),or=Is(),Xt=E.shouldForwardProp||or.shouldForwardProp,P=bd(k,Xi,Pe)||er,I=function(wt,_e,at){for(var sr,Zt=he(he({},_e),{className:void 0,theme:at}),Ji=0;Ji<wt.length;Ji+=1){var al=tr(sr=wt[Ji])?sr(Zt):sr;for(var kt in al)Zt[kt]=kt==="className"?ln(Zt[kt],al[kt]):kt==="style"?he(he({},Zt[kt]),al[kt]):al[kt]}return _e.className&&(Zt.className=ln(Zt.className,_e.className)),Zt}(W,k,P),z=I.as||sl,U={};for(var B in I)I[B]===void 0||B[0]==="$"||B==="as"||B==="theme"&&I.theme===P||(B==="forwardedAs"?U.as=I.forwardedAs:Xt&&!Xt(B,z)||(U[B]=I[B]));var Jt=function(wt,_e){var at=Is(),sr=wt.generateAndInjectStyles(_e,at.styleSheet,at.stylis);return sr}(T,I),Ve=ln(Gt,Yt);return Jt&&(Ve+=" "+Jt),I.className&&(Ve+=" "+I.className),U[_o(z)&&!ep.has(z)?"class":"className"]=Ve,U.ref=$,N.createElement(z,U)}(h,y,C)}f.displayName=m;var h=M.forwardRef(f);return h.attrs=v,h.componentStyle=p,h.displayName=m,h.shouldForwardProp=x,h.foldedComponentIds=r?ln(l.foldedComponentIds,l.styledComponentId):"",h.styledComponentId=g,h.target=r?l.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=r?function(C){for(var E=[],k=1;k<arguments.length;k++)E[k-1]=arguments[k];for(var $=0,W=E;$<W.length;$++)Ns(C,W[$],!0);return C}({},l.defaultProps,y):y}}),La(h,function(){return".".concat(h.styledComponentId)}),i&&op(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function fc(e,t){for(var n=[e[0]],r=0,l=t.length;r<l;r+=1)n.push(t[r],e[r+1]);return n}var dc=function(e){return Object.assign(e,{isCss:!0})};function ol(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(tr(e)||Zr(e))return dc(Bt(fc(Yi,Jn([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Bt(r):dc(Bt(fc(r,t)))}function zs(e,t,n){if(n===void 0&&(n=er),!t)throw il(1,t);var r=function(l){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return e(t,n,ol.apply(void 0,Jn([l],i,!1)))};return r.attrs=function(l){return zs(e,t,he(he({},n),{attrs:Array.prototype.concat(n.attrs,l).filter(Boolean)}))},r.withConfig=function(l){return zs(e,t,he(he({},n),l))},r}var hp=function(e){return zs(Gy,e)},F=hp;ep.forEach(function(e){F[e]=hp(e)});var Yy=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=pp(t),Ei.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,l){var i=l(Si(Bt(this.rules,n,r,l)),""),o=this.componentId+t;r.insertRules(o,o,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,l){t>2&&Ei.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,l)},e}();function Xy(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=ol.apply(void 0,Jn([e],t,!1)),l="sc-global-".concat(Ra(JSON.stringify(r))),i=new Yy(r,l),o=function(a){var u=Is(),d=M.useContext(Oa),m=M.useRef(u.styleSheet.allocateGSInstance(l)).current;return u.styleSheet.server&&s(m,a,u.styleSheet,d,u.stylis),M.useLayoutEffect(function(){if(!u.styleSheet.server)return s(m,a,u.styleSheet,d,u.stylis),function(){return i.removeStyles(m,u.styleSheet)}},[m,a,u.styleSheet,d,u.stylis]),null};function s(a,u,d,m,g){if(i.isStatic)i.renderStyles(a,gy,d,g);else{var v=he(he({},u),{theme:bd(u,m,o.defaultProps)});i.renderStyles(a,v,d,g)}}return M.memo(o)}function Jy(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Si(ol.apply(void 0,Jn([e],t,!1))),l=Ra(r);return new cp(l,r)}const Zy=F.header`
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
`;function qy(){const{handleBackgroundInteraction:e}=et(),t=n=>{n.stopPropagation(),e(!1)};return c.jsx(Zy,{onClick:t,children:c.jsx("h1",{onClick:n=>n.stopPropagation(),children:"Alec Cuccia"})})}const mp=M.createContext(),by=e=>{const[t,n]=M.useState(!1),r=M.useCallback(()=>{n(i=>!i)},[n]),l={showExplanation:t,toggleExplanation:r};return c.jsx(mp.Provider,{value:l,children:e.children})},Ma=()=>{const e=M.useContext(mp);if(!e)throw new Error("Challenges context misconfigured");return e},e0=F.a`
  &:link, &:visited {
    color: ${({$colors:e})=>e.link};
  }

  &:active, &:focus, &:hover {
    color: ${({$colors:e})=>e.linkInteraction};
  }
`;function un(e){const{children:t,className:n,tabIndex:r,to:l}=e,{tabIndex:i}=et(),{currentPalette:o}=we();let s={};return l.includes("mailto")===!1&&(s={rel:"noopener noreferrer",target:"_blank"}),c.jsx(e0,{className:n,href:l,onMouseUp:a=>a.currentTarget.blur(),tabIndex:r||i,...s,$colors:o,children:t})}const t0=F.div`
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
`;function n0(){return c.jsxs(t0,{children:[c.jsx(un,{to:"mailto:ajcuccia+dev@gmail.com",children:"Email"}),c.jsx(un,{to:"https://www.github.com/atomicretro",children:"GitHub"}),c.jsx(un,{to:"https://www.linkedin.com/in/alec-cuccia",children:"LinkedIn"})]})}const Da=F.button`
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
`,r0=F(Da)`
  color: ${({$colors:e})=>e.link};

  &:active, &:focus, &:hover {
    color: ${({$colors:e})=>e.linkInteraction};
  }
`;function gp(e){const{children:t,className:n,onClick:r}=e,{tabIndex:l}=et(),{currentPalette:i}=we();return c.jsx(r0,{className:n,onClick:r,onMouseUp:o=>o.currentTarget.blur(),tabIndex:l,$colors:i,children:t})}const l0=F(Vg)`
  &:link, &:visited {
    color: ${({$colors:e})=>e.link};
  }

  &:active, &:focus, &:hover {
    color: ${({$colors:e})=>e.linkInteraction};
  }
`;function Xe(e){const{children:t,className:n,to:r}=e,{tabIndex:l}=et(),{currentPalette:i}=we();return c.jsx(l0,{className:n,onMouseUp:o=>o.currentTarget.blur(),tabIndex:l,to:r,$colors:i,children:t})}const i0=F.div`
  ${({$blur:e})=>e&&"filter: blur(5px);"}
  transition: filter 0.5s ease;
`;function wn(e){const{children:t,className:n}=e,{showExplanation:r}=Ma();return c.jsx(i0,{className:n,$blur:r,children:t})}const o0=F.div`
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
`;function kn(e){const{children:t,number:n}=e,{showContent:r}=et(),{showExplanation:l}=Ma();return c.jsx(o0,{$show:l,children:c.jsxs("div",{className:"reading",children:[t,n&&c.jsx("p",{children:c.jsx(un,{tabIndex:r&&l?"0":"-1",to:`https://100dayscss.com/days/${n}`,children:"To the challenge!"})})]})})}const s0=F.div`
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
`,a0={129:!0,186:!0,212:!0,130:!0,187:!0,213:!0,148:!0,189:!0,228:!0,149:!0,190:!0,231:!0,150:!0,192:!0,247:!0,151:!0,193:!0,249:!0,167:!0,206:!0,250:!0,168:!0,207:!0,252:!0,169:!0,208:!0,266:!0,170:!0,209:!0,268:!0,171:!0,210:!0,271:!0,172:!0,211:!0,273:!0},u0=c.jsxs(c.Fragment,{children:[c.jsx("p",{children:"Click the squares to swap them on and off."}),c.jsx("div",{className:"explanation-line"}),c.jsx("p",{children:`At first I had no idea how I was going to complete this challenge, and walked away from it to do other things. Hours later, thinking about something else entirely, it hit me: "they're all checkboxes!"`}),c.jsx("p",{children:"Once I realized that, writing the code was straightforward. I used JS to create the series of checkboxes, but then used vanilla CSS to arrange them and style them into pixels."}),c.jsx("p",{children:`The default image was brute-forced by figuring out which pixels are white in the demo template, and simply marking them "unchecked" as they are generated. It's low-tech, but since the default image is static I don't mind cheesing it a bit.`})]});function c0(){const{currentPalette:e}=we();return c.jsxs(s0,{$colors:e,children:[c.jsx(kn,{number:"47",children:u0}),c.jsx(wn,{className:"alien",children:[...Array(400).keys()].map(t=>c.jsx("input",{className:"pixel",defaultChecked:!a0[t],onMouseUp:n=>n.target.blur(),type:"checkbox"},t))})]})}const f0=Jy`
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
`,Nl=ol`
  animation-name: ${f0};
  animation-iteration-count: infinite;
  animation-timing-function: steps(1, jump-end);
`,d0=F.div`
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
      ${Nl}
      animation-duration: 10000s;
    }

    &.hundreds {
      left: 32px;
      ${Nl}
      animation-duration: 1000s;
    }

    &.tens {
      left: 57px;
      ${Nl}
      animation-duration: 100s;
    }

    &.ones {
      left: 82px;
      ${Nl}
      animation-duration: 10s;
    }
  }
`,$l=({position:e})=>c.jsxs("div",{className:`ribbon ${e}`,children:[c.jsx("span",{children:"0"}),c.jsx("span",{children:"1"}),c.jsx("span",{children:"2"}),c.jsx("span",{children:"3"}),c.jsx("span",{children:"4"}),c.jsx("span",{children:"5"}),c.jsx("span",{children:"6"}),c.jsx("span",{children:"7"}),c.jsx("span",{children:"8"}),c.jsx("span",{children:"9"})]}),p0=c.jsxs(c.Fragment,{children:[c.jsx("p",{children:"Click the button to pause / continue the timer."}),c.jsx("div",{className:"explanation-line"}),c.jsx("p",{children:"Believe it or not, it was the pause button in this challenge that gave me the least amount of trouble. Once I figured out how to get the clock working, pausing the animation was super straight forward."}),c.jsx("p",{children:`But I'm getting ahead of myself! The counter works kind of like an old school flip clock: each digit is actually an absolutely positioned column of the numbers 0–9. The "counting" is simply each column ticking up one place independently of each other. This was accomplished with a CSS animation that changes the vertical positioning of each column. Once a column gets to the number 9, its animation resets. The speed of each column is controlled through its animation's duration.`}),c.jsx("p",{children:"To get the pause effect working I turned back to our good friend the checkbox. When you click on the pause button what you're actually doing is filling in an empty checkbox. Using the checkbox's :checked pseudo class and the CSS general sibling combinator I was able to set each column's animation-play-state to paused when the checkbox is checked."})]});function h0(){const{currentPalette:e}=we();return c.jsxs(d0,{$colors:e,children:[c.jsx(kn,{number:"51",children:p0}),c.jsxs(wn,{className:"clock",children:[c.jsx("input",{className:"input",type:"checkbox"}),c.jsx("div",{className:"pause"}),c.jsx("div",{className:"play"}),c.jsxs("div",{className:"display",children:[c.jsx($l,{position:"thousands"}),c.jsx($l,{position:"hundreds"}),c.jsx($l,{position:"tens"}),c.jsx($l,{position:"ones"})]})]})]})}const Me=e=>ol`
  animation-name: fade, move_${e};
  animation-duration: 0.7s, 0.7s;
  animation-delay: 0s, 0s;
  animation-iteration-count: 1, 1;
`,m0=F.div`
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
`,g0=c.jsxs(c.Fragment,{children:[c.jsx("p",{children:"Click the circle to watch a flower bloom."}),c.jsx("div",{className:"explanation-line"}),c.jsx("p",{children:"This one was deceptively easy."}),c.jsx("p",{children:"The main part of the flower — the circle — is simply a checkbox; unfilled is unchecked, filled is checked. The petals that fly off are just divs styled to be short lines. I got them to move using a series of animations that trigger when the checkbox gets clicked (thank you general sibling combinator!)."}),c.jsx("p",{children:"The hard part was all the trigonometry I had to do to get the petals in the right positions. Each petal is basically the same line rotated around the center of the flower; using trig I was able to plot their trajectories away from the center evenly. There might be a less math-heavy way of doing this, but because the animations are just moving along straight lines that I already calculated, this way is definitely efficient!"})]});function y0(){const{currentPalette:e}=we();return c.jsxs(m0,{$colors:e,children:[c.jsx(kn,{number:"66",children:g0}),c.jsxs(wn,{className:"flower",children:[c.jsx("input",{className:"stem",defaultChecked:!1,onMouseUp:t=>t.target.blur(),type:"checkbox"}),c.jsxs("div",{className:"petals",children:[c.jsx("div",{className:"petal n01"}),c.jsx("div",{className:"petal n02"}),c.jsx("div",{className:"petal n03"}),c.jsx("div",{className:"petal n04"}),c.jsx("div",{className:"petal n05"}),c.jsx("div",{className:"petal n06"}),c.jsx("div",{className:"petal n07"}),c.jsx("div",{className:"petal n08"}),c.jsx("div",{className:"petal n09"}),c.jsx("div",{className:"petal n10"}),c.jsx("div",{className:"petal n11"}),c.jsx("div",{className:"petal n12"})]})]})]})}const yp=200,pc=e=>{let t="";for(let n=1;n<=yp*2;n++)t+=`
      .slice.n${n}:focus ~ .overlay,
      .slice.n${n}:hover ~ .overlay {
        height: ${n*e}px;
        transition: none;
      }
    `;return t},v0=F.div`
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

  ${pc(1.5)}

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

    ${pc(2)}
  }
`,x0=c.jsxs(c.Fragment,{children:[c.jsx("p",{children:"Hover over the word to obfuscate the message."}),c.jsx("div",{className:"explanation-line"}),c.jsx("p",{children:"After going through some other challenges I've picked up on how to handle pure CSS interactivity."}),c.jsx("p",{children:"The background is a series of horizontal grey slivers which, when hovered, increase the height of the foreground orange overlay. The slivers are created with JS, but that's the only JS used. Each sliver gets an index number, and the height of the orange overlay is simply a multiple of whichever sliver is being hovered at the moment."}),c.jsx("p",{children:"To achieve the blur effect on the text I've stacked two spans on top of each other with different z-indices. The higher z-index text has a blur filter while the lower text does not. The order goes: grey background, non-blurred text, orange overlay, blurred text. This causes the non-blurred text to get hidden by the orange layer, leaving only the blurred effect."})]});function w0(){const{tabIndex:e}=et(),{currentPalette:t}=we();return c.jsxs(v0,{$colors:t,children:[c.jsx(kn,{number:"60",children:x0}),c.jsxs(wn,{className:"hover",children:[[...Array(yp).keys()].map(n=>c.jsx("div",{className:`slice n${n+1}`,onMouseUp:r=>r.target.blur(),tabIndex:e},n)),c.jsx("div",{className:"overlay"}),c.jsx("span",{className:"text one",children:"HOVER"}),c.jsx("span",{className:"text two",children:"HOVER"})]})]})}const re=12,lt=25,Ct=10,k0=e=>{let t="";for(let n=1;n<re;n++)for(let r=1;r<re;r++)t+=`
        .n${n*re}:checked {
          & ~ .n${n*re+r}::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            height: ${lt}px;
            width: ${lt}px;
            background: ${e};
            opacity: 0.6;
          }
        }
      `;return t},S0=e=>{let t="";for(let n=1;n<re;n++)for(let r=1;r<re;r++)t+=`
        .n${n}:checked {
          & ~ .n${r*re+n}::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            height: ${lt}px;
            width: ${lt}px;
            background: ${e};
            opacity: 0.6;
          }
        }
      `;return t},C0=F.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  .lights-out {
    height: ${re*lt+re*Ct+Ct}px;
    width: ${re*lt+re*Ct+Ct}px;
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
          top: ${Math.floor(t/re)*(lt+Ct)+Ct}px;
          left: ${t%re*(lt+Ct)+Ct}px;
        }
      `;return e}}

  .lights-out input {
    appearance: none;
    height: ${lt}px;
    width: ${lt}px;
    background: lightgray;
    border-radius: 0;
    margin: 0;
    cursor: pointer;

    &:checked {
      background: darkgray;
    }
  }

  ${({$colors:e})=>k0(e.secondary)}
  ${({$colors:e})=>S0(e.tertiary)}
`,E0=c.jsxs(c.Fragment,{children:[c.jsx("p",{children:"Click the edges to create a light show."}),c.jsx("div",{className:"explanation-line"}),c.jsx("p",{children:"I thought this up while trying to create a CSS-only game of battleship."}),c.jsxs("p",{children:['My original idea was to use the CSS sibling combinator to link checkbox "cells" together to make ships. That idea fell apart though after I realized that the sibling combinator is actually the ',c.jsx("strong",{children:"subsequent"})," sibling combinator — there's no way for a child element to affect its previous siblings in pure CSS. I still think the idea has merit, and using checkboxes and ::before and ::after pseudo-elements you can definitely make a low-JS battleship. But these aren't mostly-CSS challenges, they're only-CSS challenges! So that will have to wait."]}),c.jsx("p",{children:"As for the light board here in front of you, it's just a little bit of salvage from trying to make battleship. I liked the way that colors blended together when a not-fully-opaque ::before element overlapped with a not-fully-opaque ::after element. The only JavaScript used here is to bulk-create and position the elements that the pseudo-elements attach to; everything you actually see is pure CSS."})]});function j0(){const{currentPalette:e}=we(),t=[],n=l=>{t.push(l)},r=()=>{if(t[0].checked)for(const i of t)i.checked=!0;else for(const i of t)i.checked=!1};return c.jsxs(C0,{$colors:e,children:[c.jsx(kn,{children:E0}),c.jsx(wn,{className:"lights-out",children:[...Array(re*re).keys()].map(l=>l===0?c.jsx("input",{className:`square n${l} origin`,onClick:r,onMouseUp:i=>i.target.blur(),ref:n,type:"checkbox"},l):l<=re-1||l%re===0?c.jsx("input",{className:`square n${l}`,onMouseUp:i=>i.target.blur(),ref:n,type:"checkbox"},l):c.jsx("div",{className:`square n${l}`},l))})]})}const Yl=400,P0=F.div`
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

    ${()=>{let e="";for(let t=1;t<Yl;t++){let n=t%20*15-138,r=Math.floor(t/20)*15-138;n>140&&(n=n-15),r>140&&(r=r-15),e+=`
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

    ${()=>{let e="";for(let t=1;t<Yl;t++){let n=t%20*20-190,r=Math.floor(t/20)*20-190;n>180&&(n=n-5),r>180&&(r=r-5),e+=`
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

    ${()=>{let e="";for(let t=1;t<Yl;t++){let n=t%20*25-238,r=Math.floor(t/20)*25-238;e+=`
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
`,_0=c.jsxs(c.Fragment,{children:[c.jsx("p",{children:"Hover over the playing field to flee!"}),c.jsx("p",{children:"(works best in Chromium-based browsers)"}),c.jsx("div",{className:"explanation-line"}),c.jsx("p",{children:"This challenge was actually a lot simplier than I thought it would be."}),c.jsx("p",{children:"I racked my brain for a while trying to figure out how to pass the cursor position to the chasing circle. Eventually I decided to break the field into a grid of squares, then use CSS and math to loop through the grid and reverse engineer the coordinate positioning of each square."}),c.jsx("p",{children:"I thought this was cheating, but after looking at how the demo template was created I saw it was done in almost exactly the same way. So... if it is cheating, then teacher cheated too :)"}),c.jsx("p",{children:"The only JS used is to create the grid. All positioning data is calculated in CSS from the index number of each square."})]});function N0(){const{currentPalette:e}=we();return c.jsxs(P0,{$colors:e,children:[c.jsx(kn,{number:"49",children:_0}),c.jsxs(wn,{className:"maze",children:[[...Array(Yl).keys()].map(t=>c.jsx("div",{className:`cell n${t}`},t)),c.jsx("div",{className:"monster"})]})]})}const $0=F.div`
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
`,I0=c.jsxs(c.Fragment,{children:[c.jsx("p",{children:"Hover over the segments to watch them expand."}),c.jsx("div",{className:"explanation-line"}),c.jsx("p",{children:"I completed this challenge using flexbox and height manipulation on CSS events. Flexbox keeps the colored boxes organized and in place while :focus and :hover events increase the hovered box's dimensions."}),c.jsx("p",{children:"The animations are done entirely in CSS; the only JS used is to blur a box on mouse up to ensure wayward clicks don't cause two boxes to expand at once."}),c.jsx("p",{children:"The animations are fully responsive and work with both mouse and keyboard."})]}),Il=e=>{const{children:t,color:n}=e,{tabIndex:r}=et();return c.jsx("div",{className:`box ${n}`,onMouseUp:l=>l.target.blur(),tabIndex:r,children:c.jsx("span",{children:t})})};function z0(){const{currentPalette:e}=we();return c.jsxs($0,{$colors:e,children:[c.jsx(kn,{number:"80",children:I0}),c.jsxs(wn,{className:"segments",children:[c.jsx(Il,{color:"dark",children:"FIRST"}),c.jsx(Il,{color:"light",children:"SECOND"}),c.jsx(Il,{color:"dark",children:"THIRD"}),c.jsx(Il,{color:"light",children:"FOURTH"})]})]})}const R0=F.div`
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
`;function T0(){const{showExplanation:e,toggleExplanation:t}=Ma();return c.jsxs(R0,{$blur:e,children:[c.jsxs(Bd,{children:[c.jsx(Ie,{path:"/alien",element:c.jsx(c0,{})}),c.jsx(Ie,{path:"/clock",element:c.jsx(h0,{})}),c.jsx(Ie,{path:"/flower",element:c.jsx(y0,{})}),c.jsx(Ie,{path:"/hover",element:c.jsx(w0,{})}),c.jsx(Ie,{path:"/lights-out",element:c.jsx(j0,{})}),c.jsx(Ie,{path:"/monster",element:c.jsx(N0,{})}),c.jsx(Ie,{path:"/segments",element:c.jsx(z0,{})})]}),c.jsxs("div",{className:"buttons",children:[c.jsx(Xe,{className:"return-link",to:"/css-challenges",children:"Go back"}),c.jsxs(gp,{className:"explanation-button",onClick:t,children:[e?"Hide":"See"," Explanation"]})]})]})}const L0=F(Da)`
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
`;function O0(e){const{palette:t}=e,{tabIndex:n}=et(),{currentPalette:r,setPalette:l}=we(),i=M.useCallback(o=>{o.stopPropagation(),l(t)},[t,l]);return c.jsxs(L0,{onClick:i,onKeyDown:o=>o.stopPropagation(),onMouseUp:o=>o.currentTarget.blur(),tabIndex:n,$colors:t,$selected:t.name===r.name,children:[c.jsxs("div",{className:"swatch",children:[c.jsx("div",{className:"primary"}),c.jsx("div",{className:"secondary"})]}),c.jsx("span",{children:t.name})]})}const M0=F.div`
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
`;function D0(){const{palettes:e}=we();return c.jsxs(M0,{children:[c.jsx("h2",{children:"Paint the sky"}),c.jsx("div",{className:"paints",children:e.map(t=>c.jsx(O0,{palette:t},t.name))}),c.jsxs("span",{className:"acknowledgment",children:["Color palettes inspired by ",c.jsx(un,{to:"https://downwellgame.com/",children:"downwell"})]})]})}const F0=F.div`
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
`;function hc(e){const{children:t,link:n}=e;return n.includes("http")?c.jsx(un,{to:n,children:t}):c.jsx(Xe,{to:n,children:t})}function A0(e){const{desc:t,imgDesc:n,imgSrc:r,link:l,title:i}=e;return c.jsxs(F0,{children:[c.jsx(hc,{link:l,children:c.jsx("img",{alt:n,className:"project_card__img",src:`/projects/${r}`})}),c.jsxs("div",{className:"info",children:[c.jsx("h2",{className:"title",children:i}),c.jsxs("div",{className:"description",children:[t,c.jsx("p",{children:c.jsx(hc,{link:l,children:i})})]})]})]})}const U0=F.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`,B0=[{desc:c.jsxs(c.Fragment,{children:[c.jsx("p",{children:"Nonograms are puzzles that are kind of like a half-way point between sudoku and minesweeper. They are incredibly fun! While there are a lot of nonogram apps and websites out there, none played exactly how I wanted them to. Thus, I made my own."}),c.jsx("p",{children:"My nonograms web app is made entirely in React, leveraging the React component lifecycle to act a game engine. Why? No other reason than to see if I could. The results are pretty good, if I do say so myself!"})]}),imgDesc:"The word 'nonograms' in a pixelated font.",imgSrc:"nonograms.png",link:"https://scarygrapefruit.gitlab.io/nonograms/",title:"Nonograms"},{desc:c.jsxs(c.Fragment,{children:[c.jsx("p",{children:"Neon Circles is a claustrophobic shoot-em-up in the likeness of Space Invaders and Asteroids. You are stuck on the inside of a circle and can only point towards the center. To shoot the demons shooting you, you must aim through the circle and out the other side."}),c.jsx("p",{children:"Designed and built in a week, Neon Circles is both a love letter to the shoot-em-up genre and the first draft of a larger idea. It was coded solely in JS and is drawn on Canvas. All game mechanics and sprites were designed from scratch."})]}),imgDesc:`The words "Neon Circles" in an 80's style font, inside a thin circle`,imgSrc:"neon_circles.png",link:"https://atomicretro.github.io/neon_circles/",title:"Neon Circles"},{desc:c.jsx(c.Fragment,{children:c.jsxs("p",{children:["I like CSS. I like CSS ",c.jsx("strong",{children:"a lot"}),". I've found various CSS-only challenges across the Internet, and when one piques my interest I can't help but take a stab at it."]})}),imgDesc:"The CSS3 Logo",imgSrc:"css.png",link:"/css-challenges",title:"CSS-Only Challenges"}];function W0(){return c.jsx(U0,{children:B0.map(e=>c.jsx(A0,{...e},e.title))})}const H0=F.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "header"
    "column1"
    "column2";
  row-gap: 30px;

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
`;function V0(){return c.jsxs(H0,{children:[c.jsxs("div",{className:"header",children:[c.jsx("h2",{children:"CSS-Only Challenges"}),c.jsx("span",{children:"Each of the below images, animations, and interactions was made entirely in CSS, unless otherwise stated in its explanation."})]}),c.jsxs("div",{className:"column",children:[c.jsxs("span",{children:["From ",c.jsx(un,{to:"https://100dayscss.com/",children:"100 Days CSS Challenge"})]}),c.jsx(Xe,{to:"/css/alien",children:"alien"}),c.jsx(Xe,{to:"/css/clock",children:"clock"}),c.jsx(Xe,{to:"/css/flower",children:"flower"}),c.jsx(Xe,{to:"/css/hover",children:"hover"}),c.jsx(Xe,{to:"/css/monster",children:"monster"}),c.jsx(Xe,{to:"/css/segments",children:"segments"})]})]})}const Q0=F.div`
  display: flex;
  flex-direction: column;
`;function K0(){return c.jsx(Q0,{children:c.jsx(V0,{})})}const G0=F.section`
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
`;function Y0(){return c.jsx(G0,{tabIndex:"-1",children:c.jsxs(Bd,{children:[c.jsx(Ie,{element:c.jsx(n0,{}),path:"/contact"}),c.jsx(Ie,{element:c.jsx(by,{children:c.jsx(T0,{})}),path:"/css/*"}),c.jsx(Ie,{element:c.jsx(K0,{}),path:"/css-challenges"}),c.jsx(Ie,{element:c.jsx(W0,{}),path:"/projects"}),c.jsx(Ie,{element:c.jsx(D0,{}),path:"/"})]})})}const X0=F.nav`
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
`;function J0(){const{handleBackgroundInteraction:e}=et(),t=n=>{n.stopPropagation(),e(!1)};return c.jsx(X0,{children:c.jsxs("div",{children:[c.jsx(Xe,{to:"/",children:"Home"}),c.jsx(Xe,{to:"/projects",children:"Projects"}),c.jsx(Xe,{to:"/contact",children:"Contact"}),c.jsx(gp,{onClick:t,children:"Stargaze"})]})})}const Z0=F.section`
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
`;function q0(){const e=ll(),{backgroundInteraction:t,showContent:n,setShowContent:r}=et();return M.useEffect(()=>{e.pathname!=="/"&&r(!0)},[]),c.jsxs(Z0,{$backgroundInteraction:t,$hidden:!n,children:[c.jsx(qy,{}),c.jsx(J0,{}),c.jsx(Y0,{})]})}const b0=F(Da)`
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
`;function mc(e){const{children:t,className:n,onClick:r,tabIndex:l}=e,{currentPalette:i}=we();return c.jsx(b0,{className:n,onMouseUp:o=>o.currentTarget.blur(),onClick:r||null,tabIndex:l||"0",$colors:i,$hidden:l==="-1",children:t})}const ev=F.main`
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
`;function tv(){const{pickRandomPalette:e}=we(),{handleBackgroundInteraction:t,showContent:n}=et(),r=l=>{l.stopPropagation(),e()};return c.jsxs(ev,{onClick:()=>t(!0),tabIndex:n?"-1":"0",children:[c.jsx(q0,{}),c.jsx(mc,{className:"main-button random",onClick:r,children:"Random palette"}),c.jsx(mc,{className:"main-button enter",tabIndex:n?"-1":"0",children:"Click to enter"})]})}const nv=e=>{const t=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/t},rv=(e,t)=>{const n=nv(t),r=getComputedStyle(e).getPropertyValue("width").slice(0,-2),l=getComputedStyle(e).getPropertyValue("height").slice(0,-2);e.width=r*n,e.height=l*n,e.style.width=`${r}px`,e.style.height=`${l}px`},lv=1e3,iv=F.canvas`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -4;
`;class ov{constructor({alpha:t,alphaStep:n,size:r,x:l,y:i}){Fa(this,"updateAlpha",()=>{let t=this.alpha+this.alphaStep;t>=1?(t=1,this.alphaStep*=-1):t<=0&&(t=0,this.alphaStep*=-1),this.alpha=t});this.alpha=t,this.alphaStep=n,this.size=r,this.x=l,this.y=i}}function sv(e){const{currentPalette:t}=e,n=M.useRef(),[r,l]=M.useState([]);return M.useEffect(()=>{const i=n.current,o=i.getContext("2d");rv(i,o)},[]),M.useEffect(()=>{const i=n.current,o=[];for(let s=0;s<lv;s++){const a=en(1,5);let u=en(5,30/a)/3e3;u*=en(1,3)===1?-1:1;const d=new ov({alpha:Math.random(),alphaStep:u,size:en(1,5),x:en(1,i.width),y:en(1,i.height)});o.push(d)}l(o)},[]),M.useEffect(()=>{const o=n.current.getContext("2d");let s;const a=()=>{for(let u=0;u<r.length;u++){const d=r[u];o.clearRect(d.x,d.y,d.size,d.size),d.updateAlpha(),o.fillStyle=t.secondary,o.globalAlpha=d.alpha,o.fillRect(d.x,d.y,d.size,d.size)}s=requestAnimationFrame(a)};return a(),()=>{cancelAnimationFrame(s)}}),c.jsx(iv,{ref:n})}const av=F.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: ${({$colors:e})=>e.primary};
  z-index: -5;
`;function uv(){const{currentPalette:e}=we();return c.jsx(av,{$colors:e,children:c.jsx(sv,{currentPalette:e})})}const cv=Xy`
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
`,fv=Id(document.getElementById("root"));fv.render(c.jsx(Gg,{children:c.jsx(Xg,{children:c.jsxs(Bg,{children:[c.jsx(cv,{}),c.jsx(uv,{}),c.jsx(tv,{})]})})}));
