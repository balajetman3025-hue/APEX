(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function H0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Ju={exports:{}},Xa={},Qu={exports:{}},_t={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm;function bv(){if(gm)return _t;gm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),S=Symbol.iterator;function _(M){return M===null||typeof M!="object"?null:(M=S&&M[S]||M["@@iterator"],typeof M=="function"?M:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,C={};function x(M,H,xe){this.props=M,this.context=H,this.refs=C,this.updater=xe||E}x.prototype.isReactComponent={},x.prototype.setState=function(M,H){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,H,"setState")},x.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function v(){}v.prototype=x.prototype;function T(M,H,xe){this.props=M,this.context=H,this.refs=C,this.updater=xe||E}var D=T.prototype=new v;D.constructor=T,b(D,x.prototype),D.isPureReactComponent=!0;var P=Array.isArray,U=Object.prototype.hasOwnProperty,O={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function I(M,H,xe){var G,te={},fe=null,ge=null;if(H!=null)for(G in H.ref!==void 0&&(ge=H.ref),H.key!==void 0&&(fe=""+H.key),H)U.call(H,G)&&!w.hasOwnProperty(G)&&(te[G]=H[G]);var he=arguments.length-2;if(he===1)te.children=xe;else if(1<he){for(var Ee=Array(he),et=0;et<he;et++)Ee[et]=arguments[et+2];te.children=Ee}if(M&&M.defaultProps)for(G in he=M.defaultProps,he)te[G]===void 0&&(te[G]=he[G]);return{$$typeof:s,type:M,key:fe,ref:ge,props:te,_owner:O.current}}function $(M,H){return{$$typeof:s,type:M.type,key:H,ref:M.ref,props:M.props,_owner:M._owner}}function z(M){return typeof M=="object"&&M!==null&&M.$$typeof===s}function K(M){var H={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(xe){return H[xe]})}var ee=/\/+/g;function de(M,H){return typeof M=="object"&&M!==null&&M.key!=null?K(""+M.key):H.toString(36)}function V(M,H,xe,G,te){var fe=typeof M;(fe==="undefined"||fe==="boolean")&&(M=null);var ge=!1;if(M===null)ge=!0;else switch(fe){case"string":case"number":ge=!0;break;case"object":switch(M.$$typeof){case s:case e:ge=!0}}if(ge)return ge=M,te=te(ge),M=G===""?"."+de(ge,0):G,P(te)?(xe="",M!=null&&(xe=M.replace(ee,"$&/")+"/"),V(te,H,xe,"",function(et){return et})):te!=null&&(z(te)&&(te=$(te,xe+(!te.key||ge&&ge.key===te.key?"":(""+te.key).replace(ee,"$&/")+"/")+M)),H.push(te)),1;if(ge=0,G=G===""?".":G+":",P(M))for(var he=0;he<M.length;he++){fe=M[he];var Ee=G+de(fe,he);ge+=V(fe,H,xe,Ee,te)}else if(Ee=_(M),typeof Ee=="function")for(M=Ee.call(M),he=0;!(fe=M.next()).done;)fe=fe.value,Ee=G+de(fe,he++),ge+=V(fe,H,xe,Ee,te);else if(fe==="object")throw H=String(M),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return ge}function oe(M,H,xe){if(M==null)return M;var G=[],te=0;return V(M,G,"","",function(fe){return H.call(xe,fe,te++)}),G}function Q(M){if(M._status===-1){var H=M._result;H=H(),H.then(function(xe){(M._status===0||M._status===-1)&&(M._status=1,M._result=xe)},function(xe){(M._status===0||M._status===-1)&&(M._status=2,M._result=xe)}),M._status===-1&&(M._status=0,M._result=H)}if(M._status===1)return M._result.default;throw M._result}var Y={current:null},j={transition:null},q={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:j,ReactCurrentOwner:O};function L(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:oe,forEach:function(M,H,xe){oe(M,function(){H.apply(this,arguments)},xe)},count:function(M){var H=0;return oe(M,function(){H++}),H},toArray:function(M){return oe(M,function(H){return H})||[]},only:function(M){if(!z(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},_t.Component=x,_t.Fragment=t,_t.Profiler=o,_t.PureComponent=T,_t.StrictMode=r,_t.Suspense=p,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,_t.act=L,_t.cloneElement=function(M,H,xe){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var G=b({},M.props),te=M.key,fe=M.ref,ge=M._owner;if(H!=null){if(H.ref!==void 0&&(fe=H.ref,ge=O.current),H.key!==void 0&&(te=""+H.key),M.type&&M.type.defaultProps)var he=M.type.defaultProps;for(Ee in H)U.call(H,Ee)&&!w.hasOwnProperty(Ee)&&(G[Ee]=H[Ee]===void 0&&he!==void 0?he[Ee]:H[Ee])}var Ee=arguments.length-2;if(Ee===1)G.children=xe;else if(1<Ee){he=Array(Ee);for(var et=0;et<Ee;et++)he[et]=arguments[et+2];G.children=he}return{$$typeof:s,type:M.type,key:te,ref:fe,props:G,_owner:ge}},_t.createContext=function(M){return M={$$typeof:u,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:l,_context:M},M.Consumer=M},_t.createElement=I,_t.createFactory=function(M){var H=I.bind(null,M);return H.type=M,H},_t.createRef=function(){return{current:null}},_t.forwardRef=function(M){return{$$typeof:h,render:M}},_t.isValidElement=z,_t.lazy=function(M){return{$$typeof:y,_payload:{_status:-1,_result:M},_init:Q}},_t.memo=function(M,H){return{$$typeof:m,type:M,compare:H===void 0?null:H}},_t.startTransition=function(M){var H=j.transition;j.transition={};try{M()}finally{j.transition=H}},_t.unstable_act=L,_t.useCallback=function(M,H){return Y.current.useCallback(M,H)},_t.useContext=function(M){return Y.current.useContext(M)},_t.useDebugValue=function(){},_t.useDeferredValue=function(M){return Y.current.useDeferredValue(M)},_t.useEffect=function(M,H){return Y.current.useEffect(M,H)},_t.useId=function(){return Y.current.useId()},_t.useImperativeHandle=function(M,H,xe){return Y.current.useImperativeHandle(M,H,xe)},_t.useInsertionEffect=function(M,H){return Y.current.useInsertionEffect(M,H)},_t.useLayoutEffect=function(M,H){return Y.current.useLayoutEffect(M,H)},_t.useMemo=function(M,H){return Y.current.useMemo(M,H)},_t.useReducer=function(M,H,xe){return Y.current.useReducer(M,H,xe)},_t.useRef=function(M){return Y.current.useRef(M)},_t.useState=function(M){return Y.current.useState(M)},_t.useSyncExternalStore=function(M,H,xe){return Y.current.useSyncExternalStore(M,H,xe)},_t.useTransition=function(){return Y.current.useTransition()},_t.version="18.3.1",_t}var xm;function Mf(){return xm||(xm=1,Qu.exports=bv()),Qu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm;function Tv(){if(vm)return Xa;vm=1;var s=Mf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(h,p,m){var y,S={},_=null,E=null;m!==void 0&&(_=""+m),p.key!==void 0&&(_=""+p.key),p.ref!==void 0&&(E=p.ref);for(y in p)r.call(p,y)&&!l.hasOwnProperty(y)&&(S[y]=p[y]);if(h&&h.defaultProps)for(y in p=h.defaultProps,p)S[y]===void 0&&(S[y]=p[y]);return{$$typeof:e,type:h,key:_,ref:E,props:S,_owner:o.current}}return Xa.Fragment=t,Xa.jsx=u,Xa.jsxs=u,Xa}var _m;function Av(){return _m||(_m=1,Ju.exports=Tv()),Ju.exports}var d=Av(),rt=Mf();const Rv=H0(rt);var vl={},ed={exports:{}},Wn={},td={exports:{}},nd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym;function Cv(){return ym||(ym=1,(function(s){function e(j,q){var L=j.length;j.push(q);e:for(;0<L;){var M=L-1>>>1,H=j[M];if(0<o(H,q))j[M]=q,j[L]=H,L=M;else break e}}function t(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var q=j[0],L=j.pop();if(L!==q){j[0]=L;e:for(var M=0,H=j.length,xe=H>>>1;M<xe;){var G=2*(M+1)-1,te=j[G],fe=G+1,ge=j[fe];if(0>o(te,L))fe<H&&0>o(ge,te)?(j[M]=ge,j[fe]=L,M=fe):(j[M]=te,j[G]=L,M=G);else if(fe<H&&0>o(ge,L))j[M]=ge,j[fe]=L,M=fe;else break e}}return q}function o(j,q){var L=j.sortIndex-q.sortIndex;return L!==0?L:j.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,h=u.now();s.unstable_now=function(){return u.now()-h}}var p=[],m=[],y=1,S=null,_=3,E=!1,b=!1,C=!1,x=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(j){for(var q=t(m);q!==null;){if(q.callback===null)r(m);else if(q.startTime<=j)r(m),q.sortIndex=q.expirationTime,e(p,q);else break;q=t(m)}}function P(j){if(C=!1,D(j),!b)if(t(p)!==null)b=!0,Q(U);else{var q=t(m);q!==null&&Y(P,q.startTime-j)}}function U(j,q){b=!1,C&&(C=!1,v(I),I=-1),E=!0;var L=_;try{for(D(q),S=t(p);S!==null&&(!(S.expirationTime>q)||j&&!K());){var M=S.callback;if(typeof M=="function"){S.callback=null,_=S.priorityLevel;var H=M(S.expirationTime<=q);q=s.unstable_now(),typeof H=="function"?S.callback=H:S===t(p)&&r(p),D(q)}else r(p);S=t(p)}if(S!==null)var xe=!0;else{var G=t(m);G!==null&&Y(P,G.startTime-q),xe=!1}return xe}finally{S=null,_=L,E=!1}}var O=!1,w=null,I=-1,$=5,z=-1;function K(){return!(s.unstable_now()-z<$)}function ee(){if(w!==null){var j=s.unstable_now();z=j;var q=!0;try{q=w(!0,j)}finally{q?de():(O=!1,w=null)}}else O=!1}var de;if(typeof T=="function")de=function(){T(ee)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,oe=V.port2;V.port1.onmessage=ee,de=function(){oe.postMessage(null)}}else de=function(){x(ee,0)};function Q(j){w=j,O||(O=!0,de())}function Y(j,q){I=x(function(){j(s.unstable_now())},q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(j){j.callback=null},s.unstable_continueExecution=function(){b||E||(b=!0,Q(U))},s.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<j?Math.floor(1e3/j):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return t(p)},s.unstable_next=function(j){switch(_){case 1:case 2:case 3:var q=3;break;default:q=_}var L=_;_=q;try{return j()}finally{_=L}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(j,q){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var L=_;_=j;try{return q()}finally{_=L}},s.unstable_scheduleCallback=function(j,q,L){var M=s.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?M+L:M):L=M,j){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=L+H,j={id:y++,callback:q,priorityLevel:j,startTime:L,expirationTime:H,sortIndex:-1},L>M?(j.sortIndex=L,e(m,j),t(p)===null&&j===t(m)&&(C?(v(I),I=-1):C=!0,Y(P,L-M))):(j.sortIndex=H,e(p,j),b||E||(b=!0,Q(U))),j},s.unstable_shouldYield=K,s.unstable_wrapCallback=function(j){var q=_;return function(){var L=_;_=q;try{return j.apply(this,arguments)}finally{_=L}}}})(nd)),nd}var Sm;function Nv(){return Sm||(Sm=1,td.exports=Cv()),td.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mm;function Pv(){if(Mm)return Wn;Mm=1;var s=Mf(),e=Nv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},S={};function _(n){return p.call(S,n)?!0:p.call(y,n)?!1:m.test(n)?S[n]=!0:(y[n]=!0,!1)}function E(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function b(n,i,a,c){if(i===null||typeof i>"u"||E(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(n,i,a,c,f,g,R){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=R}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new C(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new C(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new C(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new C(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new C(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new C(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new C(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new C(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new C(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function T(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,T);x[i]=new C(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,T);x[i]=new C(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,T);x[i]=new C(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new C(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new C(n,1,!1,n.toLowerCase(),null,!0,!0)});function D(n,i,a,c){var f=x.hasOwnProperty(i)?x[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(b(i,a,f,c)&&(a=null),c||f===null?_(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):f.mustUseProperty?n[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,c=f.attributeNamespace,a===null?n.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),O=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),$=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),K=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),de=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),oe=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),j=Symbol.iterator;function q(n){return n===null||typeof n!="object"?null:(n=j&&n[j]||n["@@iterator"],typeof n=="function"?n:null)}var L=Object.assign,M;function H(n){if(M===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);M=i&&i[1]||""}return`
`+M+n}var xe=!1;function G(n,i){if(!n||xe)return"";xe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(pe){var c=pe}Reflect.construct(n,[],i)}else{try{i.call()}catch(pe){c=pe}n.call(i.prototype)}else{try{throw Error()}catch(pe){c=pe}n()}}catch(pe){if(pe&&c&&typeof pe.stack=="string"){for(var f=pe.stack.split(`
`),g=c.stack.split(`
`),R=f.length-1,B=g.length-1;1<=R&&0<=B&&f[R]!==g[B];)B--;for(;1<=R&&0<=B;R--,B--)if(f[R]!==g[B]){if(R!==1||B!==1)do if(R--,B--,0>B||f[R]!==g[B]){var X=`
`+f[R].replace(" at new "," at ");return n.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",n.displayName)),X}while(1<=R&&0<=B);break}}}finally{xe=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?H(n):""}function te(n){switch(n.tag){case 5:return H(n.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return n=G(n.type,!1),n;case 11:return n=G(n.type.render,!1),n;case 1:return n=G(n.type,!0),n;default:return""}}function fe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case w:return"Fragment";case O:return"Portal";case $:return"Profiler";case I:return"StrictMode";case de:return"Suspense";case V:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case K:return(n.displayName||"Context")+".Consumer";case z:return(n._context.displayName||"Context")+".Provider";case ee:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case oe:return i=n.displayName||null,i!==null?i:fe(n.type)||"Memo";case Q:i=n._payload,n=n._init;try{return fe(n(i))}catch{}}return null}function ge(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fe(i);case 8:return i===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function he(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ee(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function et(n){var i=Ee(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(R){c=""+R,g.call(this,R)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(R){c=""+R},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Ue(n){n._valueTracker||(n._valueTracker=et(n))}function tt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ee(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function st(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ke(n,i){var a=i.checked;return L({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Et(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=he(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function wt(n,i){i=i.checked,i!=null&&D(n,"checked",i,!1)}function It(n,i){wt(n,i);var a=he(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Kt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Kt(n,i.type,he(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function gt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Kt(n,i,a){(i!=="number"||st(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var pt=Array.isArray;function Zt(n,i,a,c){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&c&&(n[a].defaultSelected=!0)}else{for(a=""+he(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function cn(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return L({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function an(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(pt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:he(a)}}function Z(n,i){var a=he(i.value),c=he(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function fn(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Lt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rt(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Lt(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Pe,kt=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,f){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Pe=Pe||document.createElement("div"),Pe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Pe.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function We(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var it={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},F=["Webkit","ms","Moz","O"];Object.keys(it).forEach(function(n){F.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),it[i]=it[n]})});function A(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||it.hasOwnProperty(n)&&it[n]?(""+i).trim():i+"px"}function re(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=A(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,f):n[a]=f}}var Te=L({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ye(n,i){if(i){if(Te[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ne(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var De=null;function ve(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var se=null,Se=null,k=null;function _e(n){if(n=Pa(n)){if(typeof se!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Lo(i),se(n.stateNode,n.type,i))}}function me(n){Se?k?k.push(n):k=[n]:Se=n}function we(){if(Se){var n=Se,i=k;if(k=Se=null,_e(n),i)for(n=0;n<i.length;n++)_e(i[n])}}function Ce(n,i){return n(i)}function Ie(){}var Ze=!1;function ht(n,i,a){if(Ze)return n(i,a);Ze=!0;try{return Ce(n,i,a)}finally{Ze=!1,(Se!==null||k!==null)&&(Ie(),we())}}function Ae(n,i){var a=n.stateNode;if(a===null)return null;var c=Lo(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var nt=!1;if(h)try{var ut={};Object.defineProperty(ut,"passive",{get:function(){nt=!0}}),window.addEventListener("test",ut,ut),window.removeEventListener("test",ut,ut)}catch{nt=!1}function ze(n,i,a,c,f,g,R,B,X){var pe=Array.prototype.slice.call(arguments,3);try{i.apply(a,pe)}catch(be){this.onError(be)}}var Ct=!1,Jt=null,Kn=!1,us=null,da={onError:function(n){Ct=!0,Jt=n}};function Mc(n,i,a,c,f,g,R,B,X){Ct=!1,Jt=null,ze.apply(da,arguments)}function po(n,i,a,c,f,g,R,B,X){if(Mc.apply(this,arguments),Ct){if(Ct){var pe=Jt;Ct=!1,Jt=null}else throw Error(t(198));Kn||(Kn=!0,us=pe)}}function Ri(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Ci(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ds(n){if(Ri(n)!==n)throw Error(t(188))}function mo(n){var i=n.alternate;if(!i){if(i=Ri(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var f=a.return;if(f===null)break;var g=f.alternate;if(g===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===a)return ds(f),n;if(g===c)return ds(f),i;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=f,c=g;else{for(var R=!1,B=f.child;B;){if(B===a){R=!0,a=f,c=g;break}if(B===c){R=!0,c=f,a=g;break}B=B.sibling}if(!R){for(B=g.child;B;){if(B===a){R=!0,a=g,c=f;break}if(B===c){R=!0,c=g,a=f;break}B=B.sibling}if(!R)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function fa(n){return n=mo(n),n!==null?Gr(n):null}function Gr(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Gr(n);if(i!==null)return i;n=n.sibling}return null}var ha=e.unstable_scheduleCallback,pa=e.unstable_cancelCallback,Hr=e.unstable_shouldYield,Ec=e.unstable_requestPaint,Xt=e.unstable_now,go=e.unstable_getCurrentPriorityLevel,ma=e.unstable_ImmediatePriority,xo=e.unstable_UserBlockingPriority,fs=e.unstable_NormalPriority,vo=e.unstable_LowPriority,N=e.unstable_IdlePriority,W=null,ce=null;function ae(n){if(ce&&typeof ce.onCommitFiberRoot=="function")try{ce.onCommitFiberRoot(W,n,void 0,(n.current.flags&128)===128)}catch{}}var ne=Math.clz32?Math.clz32:Oe,Fe=Math.log,Ve=Math.LN2;function Oe(n){return n>>>=0,n===0?32:31-(Fe(n)/Ve|0)|0}var Be=64,Xe=4194304;function lt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function mt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,f=n.suspendedLanes,g=n.pingedLanes,R=a&268435455;if(R!==0){var B=R&~f;B!==0?c=lt(B):(g&=R,g!==0&&(c=lt(g)))}else R=a&~f,R!==0?c=lt(R):g!==0&&(c=lt(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,g=i&-i,f>=g||f===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-ne(i),f=1<<a,c|=n[a],i&=~f;return c}function Ye(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vt(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,g=n.pendingLanes;0<g;){var R=31-ne(g),B=1<<R,X=f[R];X===-1?((B&a)===0||(B&c)!==0)&&(f[R]=Ye(B,i)):X<=i&&(n.expiredLanes|=B),g&=~B}}function Yt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Bt(){var n=Be;return Be<<=1,(Be&4194240)===0&&(Be=64),n}function Ot(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function rn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ne(i),n[i]=a}function qe(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var f=31-ne(a),g=1<<f;i[f]=0,c[f]=-1,n[f]=-1,a&=~g}}function hn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-ne(a),f=1<<c;f&i|n[c]&i&&(n[c]|=i),a&=~f}}var Je=0;function Ni(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var pn,ur,xi,Pi,bt,on=!1,Cn=[],Dt=null,Gt=null,yn=null,dr=new Map,ga=new Map,fr=[],Yg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qf(n,i){switch(n){case"focusin":case"focusout":Dt=null;break;case"dragenter":case"dragleave":Gt=null;break;case"mouseover":case"mouseout":yn=null;break;case"pointerover":case"pointerout":dr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ga.delete(i.pointerId)}}function xa(n,i,a,c,f,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[f]},i!==null&&(i=Pa(i),i!==null&&ur(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function qg(n,i,a,c,f){switch(i){case"focusin":return Dt=xa(Dt,n,i,a,c,f),!0;case"dragenter":return Gt=xa(Gt,n,i,a,c,f),!0;case"mouseover":return yn=xa(yn,n,i,a,c,f),!0;case"pointerover":var g=f.pointerId;return dr.set(g,xa(dr.get(g)||null,n,i,a,c,f)),!0;case"gotpointercapture":return g=f.pointerId,ga.set(g,xa(ga.get(g)||null,n,i,a,c,f)),!0}return!1}function eh(n){var i=Vr(n.target);if(i!==null){var a=Ri(i);if(a!==null){if(i=a.tag,i===13){if(i=Ci(a),i!==null){n.blockedOn=i,bt(n.priority,function(){xi(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function _o(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=bc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);De=c,a.target.dispatchEvent(c),De=null}else return i=Pa(a),i!==null&&ur(i),n.blockedOn=a,!1;i.shift()}return!0}function th(n,i,a){_o(n)&&a.delete(i)}function $g(){on=!1,Dt!==null&&_o(Dt)&&(Dt=null),Gt!==null&&_o(Gt)&&(Gt=null),yn!==null&&_o(yn)&&(yn=null),dr.forEach(th),ga.forEach(th)}function va(n,i){n.blockedOn===i&&(n.blockedOn=null,on||(on=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,$g)))}function _a(n){function i(f){return va(f,n)}if(0<Cn.length){va(Cn[0],n);for(var a=1;a<Cn.length;a++){var c=Cn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Dt!==null&&va(Dt,n),Gt!==null&&va(Gt,n),yn!==null&&va(yn,n),dr.forEach(i),ga.forEach(i),a=0;a<fr.length;a++)c=fr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<fr.length&&(a=fr[0],a.blockedOn===null);)eh(a),a.blockedOn===null&&fr.shift()}var hs=P.ReactCurrentBatchConfig,yo=!0;function Kg(n,i,a,c){var f=Je,g=hs.transition;hs.transition=null;try{Je=1,wc(n,i,a,c)}finally{Je=f,hs.transition=g}}function Zg(n,i,a,c){var f=Je,g=hs.transition;hs.transition=null;try{Je=4,wc(n,i,a,c)}finally{Je=f,hs.transition=g}}function wc(n,i,a,c){if(yo){var f=bc(n,i,a,c);if(f===null)Hc(n,i,c,So,a),Qf(n,c);else if(qg(f,n,i,a,c))c.stopPropagation();else if(Qf(n,c),i&4&&-1<Yg.indexOf(n)){for(;f!==null;){var g=Pa(f);if(g!==null&&pn(g),g=bc(n,i,a,c),g===null&&Hc(n,i,c,So,a),g===f)break;f=g}f!==null&&c.stopPropagation()}else Hc(n,i,c,null,a)}}var So=null;function bc(n,i,a,c){if(So=null,n=ve(c),n=Vr(n),n!==null)if(i=Ri(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Ci(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return So=n,null}function nh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(go()){case ma:return 1;case xo:return 4;case fs:case vo:return 16;case N:return 536870912;default:return 16}default:return 16}}var hr=null,Tc=null,Mo=null;function ih(){if(Mo)return Mo;var n,i=Tc,a=i.length,c,f="value"in hr?hr.value:hr.textContent,g=f.length;for(n=0;n<a&&i[n]===f[n];n++);var R=a-n;for(c=1;c<=R&&i[a-c]===f[g-c];c++);return Mo=f.slice(n,1<c?1-c:void 0)}function Eo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function wo(){return!0}function rh(){return!1}function Zn(n){function i(a,c,f,g,R){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=g,this.target=R,this.currentTarget=null;for(var B in n)n.hasOwnProperty(B)&&(a=n[B],this[B]=a?a(g):g[B]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?wo:rh,this.isPropagationStopped=rh,this}return L(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=wo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=wo)},persist:function(){},isPersistent:wo}),i}var ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ac=Zn(ps),ya=L({},ps,{view:0,detail:0}),Jg=Zn(ya),Rc,Cc,Sa,bo=L({},ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Sa&&(Sa&&n.type==="mousemove"?(Rc=n.screenX-Sa.screenX,Cc=n.screenY-Sa.screenY):Cc=Rc=0,Sa=n),Rc)},movementY:function(n){return"movementY"in n?n.movementY:Cc}}),sh=Zn(bo),Qg=L({},bo,{dataTransfer:0}),ex=Zn(Qg),tx=L({},ya,{relatedTarget:0}),Nc=Zn(tx),nx=L({},ps,{animationName:0,elapsedTime:0,pseudoElement:0}),ix=Zn(nx),rx=L({},ps,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),sx=Zn(rx),ax=L({},ps,{data:0}),ah=Zn(ax),ox={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ux(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=cx[n])?!!i[n]:!1}function Pc(){return ux}var dx=L({},ya,{key:function(n){if(n.key){var i=ox[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Eo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?lx[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pc,charCode:function(n){return n.type==="keypress"?Eo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Eo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),fx=Zn(dx),hx=L({},bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),oh=Zn(hx),px=L({},ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pc}),mx=Zn(px),gx=L({},ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),xx=Zn(gx),vx=L({},bo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),_x=Zn(vx),yx=[9,13,27,32],Ic=h&&"CompositionEvent"in window,Ma=null;h&&"documentMode"in document&&(Ma=document.documentMode);var Sx=h&&"TextEvent"in window&&!Ma,lh=h&&(!Ic||Ma&&8<Ma&&11>=Ma),ch=" ",uh=!1;function dh(n,i){switch(n){case"keyup":return yx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ms=!1;function Mx(n,i){switch(n){case"compositionend":return fh(i);case"keypress":return i.which!==32?null:(uh=!0,ch);case"textInput":return n=i.data,n===ch&&uh?null:n;default:return null}}function Ex(n,i){if(ms)return n==="compositionend"||!Ic&&dh(n,i)?(n=ih(),Mo=Tc=hr=null,ms=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return lh&&i.locale!=="ko"?null:i.data;default:return null}}var wx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!wx[n.type]:i==="textarea"}function ph(n,i,a,c){me(c),i=No(i,"onChange"),0<i.length&&(a=new Ac("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Ea=null,wa=null;function bx(n){Ih(n,0)}function To(n){var i=ys(n);if(tt(i))return n}function Tx(n,i){if(n==="change")return i}var mh=!1;if(h){var Lc;if(h){var Dc="oninput"in document;if(!Dc){var gh=document.createElement("div");gh.setAttribute("oninput","return;"),Dc=typeof gh.oninput=="function"}Lc=Dc}else Lc=!1;mh=Lc&&(!document.documentMode||9<document.documentMode)}function xh(){Ea&&(Ea.detachEvent("onpropertychange",vh),wa=Ea=null)}function vh(n){if(n.propertyName==="value"&&To(wa)){var i=[];ph(i,wa,n,ve(n)),ht(bx,i)}}function Ax(n,i,a){n==="focusin"?(xh(),Ea=i,wa=a,Ea.attachEvent("onpropertychange",vh)):n==="focusout"&&xh()}function Rx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return To(wa)}function Cx(n,i){if(n==="click")return To(i)}function Nx(n,i){if(n==="input"||n==="change")return To(i)}function Px(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var vi=typeof Object.is=="function"?Object.is:Px;function ba(n,i){if(vi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!p.call(i,f)||!vi(n[f],i[f]))return!1}return!0}function _h(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function yh(n,i){var a=_h(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=_h(a)}}function Sh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Sh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Mh(){for(var n=window,i=st();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=st(n.document)}return i}function Uc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Ix(n){var i=Mh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Sh(a.ownerDocument.documentElement,a)){if(c!==null&&Uc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=a.textContent.length,g=Math.min(c.start,f);c=c.end===void 0?g:Math.min(c.end,f),!n.extend&&g>c&&(f=c,c=g,g=f),f=yh(a,g);var R=yh(a,c);f&&R&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==R.node||n.focusOffset!==R.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(R.node,R.offset)):(i.setEnd(R.node,R.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Lx=h&&"documentMode"in document&&11>=document.documentMode,gs=null,Oc=null,Ta=null,Fc=!1;function Eh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Fc||gs==null||gs!==st(c)||(c=gs,"selectionStart"in c&&Uc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ta&&ba(Ta,c)||(Ta=c,c=No(Oc,"onSelect"),0<c.length&&(i=new Ac("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=gs)))}function Ao(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var xs={animationend:Ao("Animation","AnimationEnd"),animationiteration:Ao("Animation","AnimationIteration"),animationstart:Ao("Animation","AnimationStart"),transitionend:Ao("Transition","TransitionEnd")},kc={},wh={};h&&(wh=document.createElement("div").style,"AnimationEvent"in window||(delete xs.animationend.animation,delete xs.animationiteration.animation,delete xs.animationstart.animation),"TransitionEvent"in window||delete xs.transitionend.transition);function Ro(n){if(kc[n])return kc[n];if(!xs[n])return n;var i=xs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in wh)return kc[n]=i[a];return n}var bh=Ro("animationend"),Th=Ro("animationiteration"),Ah=Ro("animationstart"),Rh=Ro("transitionend"),Ch=new Map,Nh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(n,i){Ch.set(n,i),l(i,[n])}for(var Bc=0;Bc<Nh.length;Bc++){var zc=Nh[Bc],Dx=zc.toLowerCase(),Ux=zc[0].toUpperCase()+zc.slice(1);pr(Dx,"on"+Ux)}pr(bh,"onAnimationEnd"),pr(Th,"onAnimationIteration"),pr(Ah,"onAnimationStart"),pr("dblclick","onDoubleClick"),pr("focusin","onFocus"),pr("focusout","onBlur"),pr(Rh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ox=new Set("cancel close invalid load scroll toggle".split(" ").concat(Aa));function Ph(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,po(c,i,void 0,n),n.currentTarget=null}function Ih(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],f=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var R=c.length-1;0<=R;R--){var B=c[R],X=B.instance,pe=B.currentTarget;if(B=B.listener,X!==g&&f.isPropagationStopped())break e;Ph(f,B,pe),g=X}else for(R=0;R<c.length;R++){if(B=c[R],X=B.instance,pe=B.currentTarget,B=B.listener,X!==g&&f.isPropagationStopped())break e;Ph(f,B,pe),g=X}}}if(Kn)throw n=us,Kn=!1,us=null,n}function Vt(n,i){var a=i[qc];a===void 0&&(a=i[qc]=new Set);var c=n+"__bubble";a.has(c)||(Lh(i,n,2,!1),a.add(c))}function Gc(n,i,a){var c=0;i&&(c|=4),Lh(a,n,c,i)}var Co="_reactListening"+Math.random().toString(36).slice(2);function Ra(n){if(!n[Co]){n[Co]=!0,r.forEach(function(a){a!=="selectionchange"&&(Ox.has(a)||Gc(a,!1,n),Gc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Co]||(i[Co]=!0,Gc("selectionchange",!1,i))}}function Lh(n,i,a,c){switch(nh(i)){case 1:var f=Kg;break;case 4:f=Zg;break;default:f=wc}a=f.bind(null,i,a,n),f=void 0,!nt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function Hc(n,i,a,c,f){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var R=c.tag;if(R===3||R===4){var B=c.stateNode.containerInfo;if(B===f||B.nodeType===8&&B.parentNode===f)break;if(R===4)for(R=c.return;R!==null;){var X=R.tag;if((X===3||X===4)&&(X=R.stateNode.containerInfo,X===f||X.nodeType===8&&X.parentNode===f))return;R=R.return}for(;B!==null;){if(R=Vr(B),R===null)return;if(X=R.tag,X===5||X===6){c=g=R;continue e}B=B.parentNode}}c=c.return}ht(function(){var pe=g,be=ve(a),Re=[];e:{var Me=Ch.get(n);if(Me!==void 0){var He=Ac,$e=n;switch(n){case"keypress":if(Eo(a)===0)break e;case"keydown":case"keyup":He=fx;break;case"focusin":$e="focus",He=Nc;break;case"focusout":$e="blur",He=Nc;break;case"beforeblur":case"afterblur":He=Nc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":He=sh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":He=ex;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":He=mx;break;case bh:case Th:case Ah:He=ix;break;case Rh:He=xx;break;case"scroll":He=Jg;break;case"wheel":He=_x;break;case"copy":case"cut":case"paste":He=sx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":He=oh}var Ke=(i&4)!==0,ln=!Ke&&n==="scroll",le=Ke?Me!==null?Me+"Capture":null:Me;Ke=[];for(var J=pe,ue;J!==null;){ue=J;var Le=ue.stateNode;if(ue.tag===5&&Le!==null&&(ue=Le,le!==null&&(Le=Ae(J,le),Le!=null&&Ke.push(Ca(J,Le,ue)))),ln)break;J=J.return}0<Ke.length&&(Me=new He(Me,$e,null,a,be),Re.push({event:Me,listeners:Ke}))}}if((i&7)===0){e:{if(Me=n==="mouseover"||n==="pointerover",He=n==="mouseout"||n==="pointerout",Me&&a!==De&&($e=a.relatedTarget||a.fromElement)&&(Vr($e)||$e[Wi]))break e;if((He||Me)&&(Me=be.window===be?be:(Me=be.ownerDocument)?Me.defaultView||Me.parentWindow:window,He?($e=a.relatedTarget||a.toElement,He=pe,$e=$e?Vr($e):null,$e!==null&&(ln=Ri($e),$e!==ln||$e.tag!==5&&$e.tag!==6)&&($e=null)):(He=null,$e=pe),He!==$e)){if(Ke=sh,Le="onMouseLeave",le="onMouseEnter",J="mouse",(n==="pointerout"||n==="pointerover")&&(Ke=oh,Le="onPointerLeave",le="onPointerEnter",J="pointer"),ln=He==null?Me:ys(He),ue=$e==null?Me:ys($e),Me=new Ke(Le,J+"leave",He,a,be),Me.target=ln,Me.relatedTarget=ue,Le=null,Vr(be)===pe&&(Ke=new Ke(le,J+"enter",$e,a,be),Ke.target=ue,Ke.relatedTarget=ln,Le=Ke),ln=Le,He&&$e)t:{for(Ke=He,le=$e,J=0,ue=Ke;ue;ue=vs(ue))J++;for(ue=0,Le=le;Le;Le=vs(Le))ue++;for(;0<J-ue;)Ke=vs(Ke),J--;for(;0<ue-J;)le=vs(le),ue--;for(;J--;){if(Ke===le||le!==null&&Ke===le.alternate)break t;Ke=vs(Ke),le=vs(le)}Ke=null}else Ke=null;He!==null&&Dh(Re,Me,He,Ke,!1),$e!==null&&ln!==null&&Dh(Re,ln,$e,Ke,!0)}}e:{if(Me=pe?ys(pe):window,He=Me.nodeName&&Me.nodeName.toLowerCase(),He==="select"||He==="input"&&Me.type==="file")var Qe=Tx;else if(hh(Me))if(mh)Qe=Nx;else{Qe=Rx;var at=Ax}else(He=Me.nodeName)&&He.toLowerCase()==="input"&&(Me.type==="checkbox"||Me.type==="radio")&&(Qe=Cx);if(Qe&&(Qe=Qe(n,pe))){ph(Re,Qe,a,be);break e}at&&at(n,Me,pe),n==="focusout"&&(at=Me._wrapperState)&&at.controlled&&Me.type==="number"&&Kt(Me,"number",Me.value)}switch(at=pe?ys(pe):window,n){case"focusin":(hh(at)||at.contentEditable==="true")&&(gs=at,Oc=pe,Ta=null);break;case"focusout":Ta=Oc=gs=null;break;case"mousedown":Fc=!0;break;case"contextmenu":case"mouseup":case"dragend":Fc=!1,Eh(Re,a,be);break;case"selectionchange":if(Lx)break;case"keydown":case"keyup":Eh(Re,a,be)}var ot;if(Ic)e:{switch(n){case"compositionstart":var dt="onCompositionStart";break e;case"compositionend":dt="onCompositionEnd";break e;case"compositionupdate":dt="onCompositionUpdate";break e}dt=void 0}else ms?dh(n,a)&&(dt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(dt="onCompositionStart");dt&&(lh&&a.locale!=="ko"&&(ms||dt!=="onCompositionStart"?dt==="onCompositionEnd"&&ms&&(ot=ih()):(hr=be,Tc="value"in hr?hr.value:hr.textContent,ms=!0)),at=No(pe,dt),0<at.length&&(dt=new ah(dt,n,null,a,be),Re.push({event:dt,listeners:at}),ot?dt.data=ot:(ot=fh(a),ot!==null&&(dt.data=ot)))),(ot=Sx?Mx(n,a):Ex(n,a))&&(pe=No(pe,"onBeforeInput"),0<pe.length&&(be=new ah("onBeforeInput","beforeinput",null,a,be),Re.push({event:be,listeners:pe}),be.data=ot))}Ih(Re,i)})}function Ca(n,i,a){return{instance:n,listener:i,currentTarget:a}}function No(n,i){for(var a=i+"Capture",c=[];n!==null;){var f=n,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=Ae(n,a),g!=null&&c.unshift(Ca(n,g,f)),g=Ae(n,i),g!=null&&c.push(Ca(n,g,f))),n=n.return}return c}function vs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Dh(n,i,a,c,f){for(var g=i._reactName,R=[];a!==null&&a!==c;){var B=a,X=B.alternate,pe=B.stateNode;if(X!==null&&X===c)break;B.tag===5&&pe!==null&&(B=pe,f?(X=Ae(a,g),X!=null&&R.unshift(Ca(a,X,B))):f||(X=Ae(a,g),X!=null&&R.push(Ca(a,X,B)))),a=a.return}R.length!==0&&n.push({event:i,listeners:R})}var Fx=/\r\n?/g,kx=/\u0000|\uFFFD/g;function Uh(n){return(typeof n=="string"?n:""+n).replace(Fx,`
`).replace(kx,"")}function Po(n,i,a){if(i=Uh(i),Uh(n)!==i&&a)throw Error(t(425))}function Io(){}var Vc=null,jc=null;function Wc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Xc=typeof setTimeout=="function"?setTimeout:void 0,Bx=typeof clearTimeout=="function"?clearTimeout:void 0,Oh=typeof Promise=="function"?Promise:void 0,zx=typeof queueMicrotask=="function"?queueMicrotask:typeof Oh<"u"?function(n){return Oh.resolve(null).then(n).catch(Gx)}:Xc;function Gx(n){setTimeout(function(){throw n})}function Yc(n,i){var a=i,c=0;do{var f=a.nextSibling;if(n.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){n.removeChild(f),_a(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);_a(i)}function mr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Fh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var _s=Math.random().toString(36).slice(2),Ii="__reactFiber$"+_s,Na="__reactProps$"+_s,Wi="__reactContainer$"+_s,qc="__reactEvents$"+_s,Hx="__reactListeners$"+_s,Vx="__reactHandles$"+_s;function Vr(n){var i=n[Ii];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Wi]||a[Ii]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Fh(n);n!==null;){if(a=n[Ii])return a;n=Fh(n)}return i}n=a,a=n.parentNode}return null}function Pa(n){return n=n[Ii]||n[Wi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ys(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Lo(n){return n[Na]||null}var $c=[],Ss=-1;function gr(n){return{current:n}}function jt(n){0>Ss||(n.current=$c[Ss],$c[Ss]=null,Ss--)}function Ht(n,i){Ss++,$c[Ss]=n.current,n.current=i}var xr={},Nn=gr(xr),zn=gr(!1),jr=xr;function Ms(n,i){var a=n.type.contextTypes;if(!a)return xr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in a)f[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Gn(n){return n=n.childContextTypes,n!=null}function Do(){jt(zn),jt(Nn)}function kh(n,i,a){if(Nn.current!==xr)throw Error(t(168));Ht(Nn,i),Ht(zn,a)}function Bh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(t(108,ge(n)||"Unknown",f));return L({},a,c)}function Uo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||xr,jr=Nn.current,Ht(Nn,n),Ht(zn,zn.current),!0}function zh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Bh(n,i,jr),c.__reactInternalMemoizedMergedChildContext=n,jt(zn),jt(Nn),Ht(Nn,n)):jt(zn),Ht(zn,a)}var Xi=null,Oo=!1,Kc=!1;function Gh(n){Xi===null?Xi=[n]:Xi.push(n)}function jx(n){Oo=!0,Gh(n)}function vr(){if(!Kc&&Xi!==null){Kc=!0;var n=0,i=Je;try{var a=Xi;for(Je=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Xi=null,Oo=!1}catch(f){throw Xi!==null&&(Xi=Xi.slice(n+1)),ha(ma,vr),f}finally{Je=i,Kc=!1}}return null}var Es=[],ws=0,Fo=null,ko=0,ai=[],oi=0,Wr=null,Yi=1,qi="";function Xr(n,i){Es[ws++]=ko,Es[ws++]=Fo,Fo=n,ko=i}function Hh(n,i,a){ai[oi++]=Yi,ai[oi++]=qi,ai[oi++]=Wr,Wr=n;var c=Yi;n=qi;var f=32-ne(c)-1;c&=~(1<<f),a+=1;var g=32-ne(i)+f;if(30<g){var R=f-f%5;g=(c&(1<<R)-1).toString(32),c>>=R,f-=R,Yi=1<<32-ne(i)+f|a<<f|c,qi=g+n}else Yi=1<<g|a<<f|c,qi=n}function Zc(n){n.return!==null&&(Xr(n,1),Hh(n,1,0))}function Jc(n){for(;n===Fo;)Fo=Es[--ws],Es[ws]=null,ko=Es[--ws],Es[ws]=null;for(;n===Wr;)Wr=ai[--oi],ai[oi]=null,qi=ai[--oi],ai[oi]=null,Yi=ai[--oi],ai[oi]=null}var Jn=null,Qn=null,qt=!1,_i=null;function Vh(n,i){var a=di(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function jh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Jn=n,Qn=mr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Jn=n,Qn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Wr!==null?{id:Yi,overflow:qi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=di(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Jn=n,Qn=null,!0):!1;default:return!1}}function Qc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function eu(n){if(qt){var i=Qn;if(i){var a=i;if(!jh(n,i)){if(Qc(n))throw Error(t(418));i=mr(a.nextSibling);var c=Jn;i&&jh(n,i)?Vh(c,a):(n.flags=n.flags&-4097|2,qt=!1,Jn=n)}}else{if(Qc(n))throw Error(t(418));n.flags=n.flags&-4097|2,qt=!1,Jn=n}}}function Wh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Jn=n}function Bo(n){if(n!==Jn)return!1;if(!qt)return Wh(n),qt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Wc(n.type,n.memoizedProps)),i&&(i=Qn)){if(Qc(n))throw Xh(),Error(t(418));for(;i;)Vh(n,i),i=mr(i.nextSibling)}if(Wh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Qn=mr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Qn=null}}else Qn=Jn?mr(n.stateNode.nextSibling):null;return!0}function Xh(){for(var n=Qn;n;)n=mr(n.nextSibling)}function bs(){Qn=Jn=null,qt=!1}function tu(n){_i===null?_i=[n]:_i.push(n)}var Wx=P.ReactCurrentBatchConfig;function Ia(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var f=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(R){var B=f.refs;R===null?delete B[g]:B[g]=R},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function zo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Yh(n){var i=n._init;return i(n._payload)}function qh(n){function i(le,J){if(n){var ue=le.deletions;ue===null?(le.deletions=[J],le.flags|=16):ue.push(J)}}function a(le,J){if(!n)return null;for(;J!==null;)i(le,J),J=J.sibling;return null}function c(le,J){for(le=new Map;J!==null;)J.key!==null?le.set(J.key,J):le.set(J.index,J),J=J.sibling;return le}function f(le,J){return le=Tr(le,J),le.index=0,le.sibling=null,le}function g(le,J,ue){return le.index=ue,n?(ue=le.alternate,ue!==null?(ue=ue.index,ue<J?(le.flags|=2,J):ue):(le.flags|=2,J)):(le.flags|=1048576,J)}function R(le){return n&&le.alternate===null&&(le.flags|=2),le}function B(le,J,ue,Le){return J===null||J.tag!==6?(J=Xu(ue,le.mode,Le),J.return=le,J):(J=f(J,ue),J.return=le,J)}function X(le,J,ue,Le){var Qe=ue.type;return Qe===w?be(le,J,ue.props.children,Le,ue.key):J!==null&&(J.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===Q&&Yh(Qe)===J.type)?(Le=f(J,ue.props),Le.ref=Ia(le,J,ue),Le.return=le,Le):(Le=ul(ue.type,ue.key,ue.props,null,le.mode,Le),Le.ref=Ia(le,J,ue),Le.return=le,Le)}function pe(le,J,ue,Le){return J===null||J.tag!==4||J.stateNode.containerInfo!==ue.containerInfo||J.stateNode.implementation!==ue.implementation?(J=Yu(ue,le.mode,Le),J.return=le,J):(J=f(J,ue.children||[]),J.return=le,J)}function be(le,J,ue,Le,Qe){return J===null||J.tag!==7?(J=es(ue,le.mode,Le,Qe),J.return=le,J):(J=f(J,ue),J.return=le,J)}function Re(le,J,ue){if(typeof J=="string"&&J!==""||typeof J=="number")return J=Xu(""+J,le.mode,ue),J.return=le,J;if(typeof J=="object"&&J!==null){switch(J.$$typeof){case U:return ue=ul(J.type,J.key,J.props,null,le.mode,ue),ue.ref=Ia(le,null,J),ue.return=le,ue;case O:return J=Yu(J,le.mode,ue),J.return=le,J;case Q:var Le=J._init;return Re(le,Le(J._payload),ue)}if(pt(J)||q(J))return J=es(J,le.mode,ue,null),J.return=le,J;zo(le,J)}return null}function Me(le,J,ue,Le){var Qe=J!==null?J.key:null;if(typeof ue=="string"&&ue!==""||typeof ue=="number")return Qe!==null?null:B(le,J,""+ue,Le);if(typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case U:return ue.key===Qe?X(le,J,ue,Le):null;case O:return ue.key===Qe?pe(le,J,ue,Le):null;case Q:return Qe=ue._init,Me(le,J,Qe(ue._payload),Le)}if(pt(ue)||q(ue))return Qe!==null?null:be(le,J,ue,Le,null);zo(le,ue)}return null}function He(le,J,ue,Le,Qe){if(typeof Le=="string"&&Le!==""||typeof Le=="number")return le=le.get(ue)||null,B(J,le,""+Le,Qe);if(typeof Le=="object"&&Le!==null){switch(Le.$$typeof){case U:return le=le.get(Le.key===null?ue:Le.key)||null,X(J,le,Le,Qe);case O:return le=le.get(Le.key===null?ue:Le.key)||null,pe(J,le,Le,Qe);case Q:var at=Le._init;return He(le,J,ue,at(Le._payload),Qe)}if(pt(Le)||q(Le))return le=le.get(ue)||null,be(J,le,Le,Qe,null);zo(J,Le)}return null}function $e(le,J,ue,Le){for(var Qe=null,at=null,ot=J,dt=J=0,En=null;ot!==null&&dt<ue.length;dt++){ot.index>dt?(En=ot,ot=null):En=ot.sibling;var Ut=Me(le,ot,ue[dt],Le);if(Ut===null){ot===null&&(ot=En);break}n&&ot&&Ut.alternate===null&&i(le,ot),J=g(Ut,J,dt),at===null?Qe=Ut:at.sibling=Ut,at=Ut,ot=En}if(dt===ue.length)return a(le,ot),qt&&Xr(le,dt),Qe;if(ot===null){for(;dt<ue.length;dt++)ot=Re(le,ue[dt],Le),ot!==null&&(J=g(ot,J,dt),at===null?Qe=ot:at.sibling=ot,at=ot);return qt&&Xr(le,dt),Qe}for(ot=c(le,ot);dt<ue.length;dt++)En=He(ot,le,dt,ue[dt],Le),En!==null&&(n&&En.alternate!==null&&ot.delete(En.key===null?dt:En.key),J=g(En,J,dt),at===null?Qe=En:at.sibling=En,at=En);return n&&ot.forEach(function(Ar){return i(le,Ar)}),qt&&Xr(le,dt),Qe}function Ke(le,J,ue,Le){var Qe=q(ue);if(typeof Qe!="function")throw Error(t(150));if(ue=Qe.call(ue),ue==null)throw Error(t(151));for(var at=Qe=null,ot=J,dt=J=0,En=null,Ut=ue.next();ot!==null&&!Ut.done;dt++,Ut=ue.next()){ot.index>dt?(En=ot,ot=null):En=ot.sibling;var Ar=Me(le,ot,Ut.value,Le);if(Ar===null){ot===null&&(ot=En);break}n&&ot&&Ar.alternate===null&&i(le,ot),J=g(Ar,J,dt),at===null?Qe=Ar:at.sibling=Ar,at=Ar,ot=En}if(Ut.done)return a(le,ot),qt&&Xr(le,dt),Qe;if(ot===null){for(;!Ut.done;dt++,Ut=ue.next())Ut=Re(le,Ut.value,Le),Ut!==null&&(J=g(Ut,J,dt),at===null?Qe=Ut:at.sibling=Ut,at=Ut);return qt&&Xr(le,dt),Qe}for(ot=c(le,ot);!Ut.done;dt++,Ut=ue.next())Ut=He(ot,le,dt,Ut.value,Le),Ut!==null&&(n&&Ut.alternate!==null&&ot.delete(Ut.key===null?dt:Ut.key),J=g(Ut,J,dt),at===null?Qe=Ut:at.sibling=Ut,at=Ut);return n&&ot.forEach(function(wv){return i(le,wv)}),qt&&Xr(le,dt),Qe}function ln(le,J,ue,Le){if(typeof ue=="object"&&ue!==null&&ue.type===w&&ue.key===null&&(ue=ue.props.children),typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case U:e:{for(var Qe=ue.key,at=J;at!==null;){if(at.key===Qe){if(Qe=ue.type,Qe===w){if(at.tag===7){a(le,at.sibling),J=f(at,ue.props.children),J.return=le,le=J;break e}}else if(at.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===Q&&Yh(Qe)===at.type){a(le,at.sibling),J=f(at,ue.props),J.ref=Ia(le,at,ue),J.return=le,le=J;break e}a(le,at);break}else i(le,at);at=at.sibling}ue.type===w?(J=es(ue.props.children,le.mode,Le,ue.key),J.return=le,le=J):(Le=ul(ue.type,ue.key,ue.props,null,le.mode,Le),Le.ref=Ia(le,J,ue),Le.return=le,le=Le)}return R(le);case O:e:{for(at=ue.key;J!==null;){if(J.key===at)if(J.tag===4&&J.stateNode.containerInfo===ue.containerInfo&&J.stateNode.implementation===ue.implementation){a(le,J.sibling),J=f(J,ue.children||[]),J.return=le,le=J;break e}else{a(le,J);break}else i(le,J);J=J.sibling}J=Yu(ue,le.mode,Le),J.return=le,le=J}return R(le);case Q:return at=ue._init,ln(le,J,at(ue._payload),Le)}if(pt(ue))return $e(le,J,ue,Le);if(q(ue))return Ke(le,J,ue,Le);zo(le,ue)}return typeof ue=="string"&&ue!==""||typeof ue=="number"?(ue=""+ue,J!==null&&J.tag===6?(a(le,J.sibling),J=f(J,ue),J.return=le,le=J):(a(le,J),J=Xu(ue,le.mode,Le),J.return=le,le=J),R(le)):a(le,J)}return ln}var Ts=qh(!0),$h=qh(!1),Go=gr(null),Ho=null,As=null,nu=null;function iu(){nu=As=Ho=null}function ru(n){var i=Go.current;jt(Go),n._currentValue=i}function su(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Rs(n,i){Ho=n,nu=As=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Hn=!0),n.firstContext=null)}function li(n){var i=n._currentValue;if(nu!==n)if(n={context:n,memoizedValue:i,next:null},As===null){if(Ho===null)throw Error(t(308));As=n,Ho.dependencies={lanes:0,firstContext:n}}else As=As.next=n;return i}var Yr=null;function au(n){Yr===null?Yr=[n]:Yr.push(n)}function Kh(n,i,a,c){var f=i.interleaved;return f===null?(a.next=a,au(i)):(a.next=f.next,f.next=a),i.interleaved=a,$i(n,c)}function $i(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var _r=!1;function ou(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ki(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function yr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Pt&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,$i(n,a)}return f=c.interleaved,f===null?(i.next=i,au(c)):(i.next=f.next,f.next=i),c.interleaved=i,$i(n,a)}function Vo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,hn(n,a)}}function Jh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var R={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?f=g=R:g=g.next=R,a=a.next}while(a!==null);g===null?f=g=i:g=g.next=i}else f=g=i;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function jo(n,i,a,c){var f=n.updateQueue;_r=!1;var g=f.firstBaseUpdate,R=f.lastBaseUpdate,B=f.shared.pending;if(B!==null){f.shared.pending=null;var X=B,pe=X.next;X.next=null,R===null?g=pe:R.next=pe,R=X;var be=n.alternate;be!==null&&(be=be.updateQueue,B=be.lastBaseUpdate,B!==R&&(B===null?be.firstBaseUpdate=pe:B.next=pe,be.lastBaseUpdate=X))}if(g!==null){var Re=f.baseState;R=0,be=pe=X=null,B=g;do{var Me=B.lane,He=B.eventTime;if((c&Me)===Me){be!==null&&(be=be.next={eventTime:He,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var $e=n,Ke=B;switch(Me=i,He=a,Ke.tag){case 1:if($e=Ke.payload,typeof $e=="function"){Re=$e.call(He,Re,Me);break e}Re=$e;break e;case 3:$e.flags=$e.flags&-65537|128;case 0:if($e=Ke.payload,Me=typeof $e=="function"?$e.call(He,Re,Me):$e,Me==null)break e;Re=L({},Re,Me);break e;case 2:_r=!0}}B.callback!==null&&B.lane!==0&&(n.flags|=64,Me=f.effects,Me===null?f.effects=[B]:Me.push(B))}else He={eventTime:He,lane:Me,tag:B.tag,payload:B.payload,callback:B.callback,next:null},be===null?(pe=be=He,X=Re):be=be.next=He,R|=Me;if(B=B.next,B===null){if(B=f.shared.pending,B===null)break;Me=B,B=Me.next,Me.next=null,f.lastBaseUpdate=Me,f.shared.pending=null}}while(!0);if(be===null&&(X=Re),f.baseState=X,f.firstBaseUpdate=pe,f.lastBaseUpdate=be,i=f.shared.interleaved,i!==null){f=i;do R|=f.lane,f=f.next;while(f!==i)}else g===null&&(f.shared.lanes=0);Kr|=R,n.lanes=R,n.memoizedState=Re}}function Qh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var La={},Li=gr(La),Da=gr(La),Ua=gr(La);function qr(n){if(n===La)throw Error(t(174));return n}function lu(n,i){switch(Ht(Ua,i),Ht(Da,n),Ht(Li,La),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Rt(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Rt(i,n)}jt(Li),Ht(Li,i)}function Cs(){jt(Li),jt(Da),jt(Ua)}function ep(n){qr(Ua.current);var i=qr(Li.current),a=Rt(i,n.type);i!==a&&(Ht(Da,n),Ht(Li,a))}function cu(n){Da.current===n&&(jt(Li),jt(Da))}var Qt=gr(0);function Wo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var uu=[];function du(){for(var n=0;n<uu.length;n++)uu[n]._workInProgressVersionPrimary=null;uu.length=0}var Xo=P.ReactCurrentDispatcher,fu=P.ReactCurrentBatchConfig,$r=0,en=null,mn=null,Sn=null,Yo=!1,Oa=!1,Fa=0,Xx=0;function Pn(){throw Error(t(321))}function hu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!vi(n[a],i[a]))return!1;return!0}function pu(n,i,a,c,f,g){if($r=g,en=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Xo.current=n===null||n.memoizedState===null?Kx:Zx,n=a(c,f),Oa){g=0;do{if(Oa=!1,Fa=0,25<=g)throw Error(t(301));g+=1,Sn=mn=null,i.updateQueue=null,Xo.current=Jx,n=a(c,f)}while(Oa)}if(Xo.current=Ko,i=mn!==null&&mn.next!==null,$r=0,Sn=mn=en=null,Yo=!1,i)throw Error(t(300));return n}function mu(){var n=Fa!==0;return Fa=0,n}function Di(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Sn===null?en.memoizedState=Sn=n:Sn=Sn.next=n,Sn}function ci(){if(mn===null){var n=en.alternate;n=n!==null?n.memoizedState:null}else n=mn.next;var i=Sn===null?en.memoizedState:Sn.next;if(i!==null)Sn=i,mn=n;else{if(n===null)throw Error(t(310));mn=n,n={memoizedState:mn.memoizedState,baseState:mn.baseState,baseQueue:mn.baseQueue,queue:mn.queue,next:null},Sn===null?en.memoizedState=Sn=n:Sn=Sn.next=n}return Sn}function ka(n,i){return typeof i=="function"?i(n):i}function gu(n){var i=ci(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=mn,f=c.baseQueue,g=a.pending;if(g!==null){if(f!==null){var R=f.next;f.next=g.next,g.next=R}c.baseQueue=f=g,a.pending=null}if(f!==null){g=f.next,c=c.baseState;var B=R=null,X=null,pe=g;do{var be=pe.lane;if(($r&be)===be)X!==null&&(X=X.next={lane:0,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null}),c=pe.hasEagerState?pe.eagerState:n(c,pe.action);else{var Re={lane:be,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null};X===null?(B=X=Re,R=c):X=X.next=Re,en.lanes|=be,Kr|=be}pe=pe.next}while(pe!==null&&pe!==g);X===null?R=c:X.next=B,vi(c,i.memoizedState)||(Hn=!0),i.memoizedState=c,i.baseState=R,i.baseQueue=X,a.lastRenderedState=c}if(n=a.interleaved,n!==null){f=n;do g=f.lane,en.lanes|=g,Kr|=g,f=f.next;while(f!==n)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function xu(n){var i=ci(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,f=a.pending,g=i.memoizedState;if(f!==null){a.pending=null;var R=f=f.next;do g=n(g,R.action),R=R.next;while(R!==f);vi(g,i.memoizedState)||(Hn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function tp(){}function np(n,i){var a=en,c=ci(),f=i(),g=!vi(c.memoizedState,f);if(g&&(c.memoizedState=f,Hn=!0),c=c.queue,vu(sp.bind(null,a,c,n),[n]),c.getSnapshot!==i||g||Sn!==null&&Sn.memoizedState.tag&1){if(a.flags|=2048,Ba(9,rp.bind(null,a,c,f,i),void 0,null),Mn===null)throw Error(t(349));($r&30)!==0||ip(a,i,f)}return f}function ip(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=en.updateQueue,i===null?(i={lastEffect:null,stores:null},en.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function rp(n,i,a,c){i.value=a,i.getSnapshot=c,ap(i)&&op(n)}function sp(n,i,a){return a(function(){ap(i)&&op(n)})}function ap(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!vi(n,a)}catch{return!0}}function op(n){var i=$i(n,1);i!==null&&Ei(i,n,1,-1)}function lp(n){var i=Di();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:n},i.queue=n,n=n.dispatch=$x.bind(null,en,n),[i.memoizedState,n]}function Ba(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=en.updateQueue,i===null?(i={lastEffect:null,stores:null},en.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function cp(){return ci().memoizedState}function qo(n,i,a,c){var f=Di();en.flags|=n,f.memoizedState=Ba(1|i,a,void 0,c===void 0?null:c)}function $o(n,i,a,c){var f=ci();c=c===void 0?null:c;var g=void 0;if(mn!==null){var R=mn.memoizedState;if(g=R.destroy,c!==null&&hu(c,R.deps)){f.memoizedState=Ba(i,a,g,c);return}}en.flags|=n,f.memoizedState=Ba(1|i,a,g,c)}function up(n,i){return qo(8390656,8,n,i)}function vu(n,i){return $o(2048,8,n,i)}function dp(n,i){return $o(4,2,n,i)}function fp(n,i){return $o(4,4,n,i)}function hp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function pp(n,i,a){return a=a!=null?a.concat([n]):null,$o(4,4,hp.bind(null,i,n),a)}function _u(){}function mp(n,i){var a=ci();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&hu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function gp(n,i){var a=ci();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&hu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function xp(n,i,a){return($r&21)===0?(n.baseState&&(n.baseState=!1,Hn=!0),n.memoizedState=a):(vi(a,i)||(a=Bt(),en.lanes|=a,Kr|=a,n.baseState=!0),i)}function Yx(n,i){var a=Je;Je=a!==0&&4>a?a:4,n(!0);var c=fu.transition;fu.transition={};try{n(!1),i()}finally{Je=a,fu.transition=c}}function vp(){return ci().memoizedState}function qx(n,i,a){var c=wr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},_p(n))yp(i,a);else if(a=Kh(n,i,a,c),a!==null){var f=kn();Ei(a,n,c,f),Sp(a,i,c)}}function $x(n,i,a){var c=wr(n),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(_p(n))yp(i,f);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var R=i.lastRenderedState,B=g(R,a);if(f.hasEagerState=!0,f.eagerState=B,vi(B,R)){var X=i.interleaved;X===null?(f.next=f,au(i)):(f.next=X.next,X.next=f),i.interleaved=f;return}}catch{}finally{}a=Kh(n,i,f,c),a!==null&&(f=kn(),Ei(a,n,c,f),Sp(a,i,c))}}function _p(n){var i=n.alternate;return n===en||i!==null&&i===en}function yp(n,i){Oa=Yo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Sp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,hn(n,a)}}var Ko={readContext:li,useCallback:Pn,useContext:Pn,useEffect:Pn,useImperativeHandle:Pn,useInsertionEffect:Pn,useLayoutEffect:Pn,useMemo:Pn,useReducer:Pn,useRef:Pn,useState:Pn,useDebugValue:Pn,useDeferredValue:Pn,useTransition:Pn,useMutableSource:Pn,useSyncExternalStore:Pn,useId:Pn,unstable_isNewReconciler:!1},Kx={readContext:li,useCallback:function(n,i){return Di().memoizedState=[n,i===void 0?null:i],n},useContext:li,useEffect:up,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,qo(4194308,4,hp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return qo(4194308,4,n,i)},useInsertionEffect:function(n,i){return qo(4,2,n,i)},useMemo:function(n,i){var a=Di();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Di();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=qx.bind(null,en,n),[c.memoizedState,n]},useRef:function(n){var i=Di();return n={current:n},i.memoizedState=n},useState:lp,useDebugValue:_u,useDeferredValue:function(n){return Di().memoizedState=n},useTransition:function(){var n=lp(!1),i=n[0];return n=Yx.bind(null,n[1]),Di().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=en,f=Di();if(qt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Mn===null)throw Error(t(349));($r&30)!==0||ip(c,i,a)}f.memoizedState=a;var g={value:a,getSnapshot:i};return f.queue=g,up(sp.bind(null,c,g,n),[n]),c.flags|=2048,Ba(9,rp.bind(null,c,g,a,i),void 0,null),a},useId:function(){var n=Di(),i=Mn.identifierPrefix;if(qt){var a=qi,c=Yi;a=(c&~(1<<32-ne(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Fa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Xx++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Zx={readContext:li,useCallback:mp,useContext:li,useEffect:vu,useImperativeHandle:pp,useInsertionEffect:dp,useLayoutEffect:fp,useMemo:gp,useReducer:gu,useRef:cp,useState:function(){return gu(ka)},useDebugValue:_u,useDeferredValue:function(n){var i=ci();return xp(i,mn.memoizedState,n)},useTransition:function(){var n=gu(ka)[0],i=ci().memoizedState;return[n,i]},useMutableSource:tp,useSyncExternalStore:np,useId:vp,unstable_isNewReconciler:!1},Jx={readContext:li,useCallback:mp,useContext:li,useEffect:vu,useImperativeHandle:pp,useInsertionEffect:dp,useLayoutEffect:fp,useMemo:gp,useReducer:xu,useRef:cp,useState:function(){return xu(ka)},useDebugValue:_u,useDeferredValue:function(n){var i=ci();return mn===null?i.memoizedState=n:xp(i,mn.memoizedState,n)},useTransition:function(){var n=xu(ka)[0],i=ci().memoizedState;return[n,i]},useMutableSource:tp,useSyncExternalStore:np,useId:vp,unstable_isNewReconciler:!1};function yi(n,i){if(n&&n.defaultProps){i=L({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function yu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:L({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Zo={isMounted:function(n){return(n=n._reactInternals)?Ri(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=kn(),f=wr(n),g=Ki(c,f);g.payload=i,a!=null&&(g.callback=a),i=yr(n,g,f),i!==null&&(Ei(i,n,f,c),Vo(i,n,f))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=kn(),f=wr(n),g=Ki(c,f);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=yr(n,g,f),i!==null&&(Ei(i,n,f,c),Vo(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=kn(),c=wr(n),f=Ki(a,c);f.tag=2,i!=null&&(f.callback=i),i=yr(n,f,c),i!==null&&(Ei(i,n,c,a),Vo(i,n,c))}};function Mp(n,i,a,c,f,g,R){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,R):i.prototype&&i.prototype.isPureReactComponent?!ba(a,c)||!ba(f,g):!0}function Ep(n,i,a){var c=!1,f=xr,g=i.contextType;return typeof g=="object"&&g!==null?g=li(g):(f=Gn(i)?jr:Nn.current,c=i.contextTypes,g=(c=c!=null)?Ms(n,f):xr),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Zo,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=g),i}function wp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Zo.enqueueReplaceState(i,i.state,null)}function Su(n,i,a,c){var f=n.stateNode;f.props=a,f.state=n.memoizedState,f.refs={},ou(n);var g=i.contextType;typeof g=="object"&&g!==null?f.context=li(g):(g=Gn(i)?jr:Nn.current,f.context=Ms(n,g)),f.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(yu(n,i,g,a),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Zo.enqueueReplaceState(f,f.state,null),jo(n,a,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function Ns(n,i){try{var a="",c=i;do a+=te(c),c=c.return;while(c);var f=a}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:f,digest:null}}function Mu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Eu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Qx=typeof WeakMap=="function"?WeakMap:Map;function bp(n,i,a){a=Ki(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){rl||(rl=!0,ku=c),Eu(n,i)},a}function Tp(n,i,a){a=Ki(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;a.payload=function(){return c(f)},a.callback=function(){Eu(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Eu(n,i),typeof c!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var R=i.stack;this.componentDidCatch(i.value,{componentStack:R!==null?R:""})}),a}function Ap(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Qx;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(a)||(f.add(a),n=hv.bind(null,n,i,a),i.then(n,n))}function Rp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Cp(n,i,a,c,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Ki(-1,1),i.tag=2,yr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var ev=P.ReactCurrentOwner,Hn=!1;function Fn(n,i,a,c){i.child=n===null?$h(i,null,a,c):Ts(i,n.child,a,c)}function Np(n,i,a,c,f){a=a.render;var g=i.ref;return Rs(i,f),c=pu(n,i,a,c,g,f),a=mu(),n!==null&&!Hn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Zi(n,i,f)):(qt&&a&&Zc(i),i.flags|=1,Fn(n,i,c,f),i.child)}function Pp(n,i,a,c,f){if(n===null){var g=a.type;return typeof g=="function"&&!Wu(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,Ip(n,i,g,c,f)):(n=ul(a.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&f)===0){var R=g.memoizedProps;if(a=a.compare,a=a!==null?a:ba,a(R,c)&&n.ref===i.ref)return Zi(n,i,f)}return i.flags|=1,n=Tr(g,c),n.ref=i.ref,n.return=i,i.child=n}function Ip(n,i,a,c,f){if(n!==null){var g=n.memoizedProps;if(ba(g,c)&&n.ref===i.ref)if(Hn=!1,i.pendingProps=c=g,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Hn=!0);else return i.lanes=n.lanes,Zi(n,i,f)}return wu(n,i,a,c,f)}function Lp(n,i,a){var c=i.pendingProps,f=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ht(Is,ei),ei|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ht(Is,ei),ei|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,Ht(Is,ei),ei|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,Ht(Is,ei),ei|=c;return Fn(n,i,f,a),i.child}function Dp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function wu(n,i,a,c,f){var g=Gn(a)?jr:Nn.current;return g=Ms(i,g),Rs(i,f),a=pu(n,i,a,c,g,f),c=mu(),n!==null&&!Hn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Zi(n,i,f)):(qt&&c&&Zc(i),i.flags|=1,Fn(n,i,a,f),i.child)}function Up(n,i,a,c,f){if(Gn(a)){var g=!0;Uo(i)}else g=!1;if(Rs(i,f),i.stateNode===null)Qo(n,i),Ep(i,a,c),Su(i,a,c,f),c=!0;else if(n===null){var R=i.stateNode,B=i.memoizedProps;R.props=B;var X=R.context,pe=a.contextType;typeof pe=="object"&&pe!==null?pe=li(pe):(pe=Gn(a)?jr:Nn.current,pe=Ms(i,pe));var be=a.getDerivedStateFromProps,Re=typeof be=="function"||typeof R.getSnapshotBeforeUpdate=="function";Re||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(B!==c||X!==pe)&&wp(i,R,c,pe),_r=!1;var Me=i.memoizedState;R.state=Me,jo(i,c,R,f),X=i.memoizedState,B!==c||Me!==X||zn.current||_r?(typeof be=="function"&&(yu(i,a,be,c),X=i.memoizedState),(B=_r||Mp(i,a,B,c,Me,X,pe))?(Re||typeof R.UNSAFE_componentWillMount!="function"&&typeof R.componentWillMount!="function"||(typeof R.componentWillMount=="function"&&R.componentWillMount(),typeof R.UNSAFE_componentWillMount=="function"&&R.UNSAFE_componentWillMount()),typeof R.componentDidMount=="function"&&(i.flags|=4194308)):(typeof R.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=X),R.props=c,R.state=X,R.context=pe,c=B):(typeof R.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{R=i.stateNode,Zh(n,i),B=i.memoizedProps,pe=i.type===i.elementType?B:yi(i.type,B),R.props=pe,Re=i.pendingProps,Me=R.context,X=a.contextType,typeof X=="object"&&X!==null?X=li(X):(X=Gn(a)?jr:Nn.current,X=Ms(i,X));var He=a.getDerivedStateFromProps;(be=typeof He=="function"||typeof R.getSnapshotBeforeUpdate=="function")||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(B!==Re||Me!==X)&&wp(i,R,c,X),_r=!1,Me=i.memoizedState,R.state=Me,jo(i,c,R,f);var $e=i.memoizedState;B!==Re||Me!==$e||zn.current||_r?(typeof He=="function"&&(yu(i,a,He,c),$e=i.memoizedState),(pe=_r||Mp(i,a,pe,c,Me,$e,X)||!1)?(be||typeof R.UNSAFE_componentWillUpdate!="function"&&typeof R.componentWillUpdate!="function"||(typeof R.componentWillUpdate=="function"&&R.componentWillUpdate(c,$e,X),typeof R.UNSAFE_componentWillUpdate=="function"&&R.UNSAFE_componentWillUpdate(c,$e,X)),typeof R.componentDidUpdate=="function"&&(i.flags|=4),typeof R.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof R.componentDidUpdate!="function"||B===n.memoizedProps&&Me===n.memoizedState||(i.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&Me===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=$e),R.props=c,R.state=$e,R.context=X,c=pe):(typeof R.componentDidUpdate!="function"||B===n.memoizedProps&&Me===n.memoizedState||(i.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&Me===n.memoizedState||(i.flags|=1024),c=!1)}return bu(n,i,a,c,g,f)}function bu(n,i,a,c,f,g){Dp(n,i);var R=(i.flags&128)!==0;if(!c&&!R)return f&&zh(i,a,!1),Zi(n,i,g);c=i.stateNode,ev.current=i;var B=R&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&R?(i.child=Ts(i,n.child,null,g),i.child=Ts(i,null,B,g)):Fn(n,i,B,g),i.memoizedState=c.state,f&&zh(i,a,!0),i.child}function Op(n){var i=n.stateNode;i.pendingContext?kh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&kh(n,i.context,!1),lu(n,i.containerInfo)}function Fp(n,i,a,c,f){return bs(),tu(f),i.flags|=256,Fn(n,i,a,c),i.child}var Tu={dehydrated:null,treeContext:null,retryLane:0};function Au(n){return{baseLanes:n,cachePool:null,transitions:null}}function kp(n,i,a){var c=i.pendingProps,f=Qt.current,g=!1,R=(i.flags&128)!==0,B;if((B=R)||(B=n!==null&&n.memoizedState===null?!1:(f&2)!==0),B?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Ht(Qt,f&1),n===null)return eu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(R=c.children,n=c.fallback,g?(c=i.mode,g=i.child,R={mode:"hidden",children:R},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=R):g=dl(R,c,0,null),n=es(n,c,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=Au(a),i.memoizedState=Tu,n):Ru(i,R));if(f=n.memoizedState,f!==null&&(B=f.dehydrated,B!==null))return tv(n,i,R,c,B,f,a);if(g){g=c.fallback,R=i.mode,f=n.child,B=f.sibling;var X={mode:"hidden",children:c.children};return(R&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=X,i.deletions=null):(c=Tr(f,X),c.subtreeFlags=f.subtreeFlags&14680064),B!==null?g=Tr(B,g):(g=es(g,R,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,R=n.child.memoizedState,R=R===null?Au(a):{baseLanes:R.baseLanes|a,cachePool:null,transitions:R.transitions},g.memoizedState=R,g.childLanes=n.childLanes&~a,i.memoizedState=Tu,c}return g=n.child,n=g.sibling,c=Tr(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Ru(n,i){return i=dl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Jo(n,i,a,c){return c!==null&&tu(c),Ts(i,n.child,null,a),n=Ru(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function tv(n,i,a,c,f,g,R){if(a)return i.flags&256?(i.flags&=-257,c=Mu(Error(t(422))),Jo(n,i,R,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,f=i.mode,c=dl({mode:"visible",children:c.children},f,0,null),g=es(g,f,R,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&Ts(i,n.child,null,R),i.child.memoizedState=Au(R),i.memoizedState=Tu,g);if((i.mode&1)===0)return Jo(n,i,R,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var B=c.dgst;return c=B,g=Error(t(419)),c=Mu(g,c,void 0),Jo(n,i,R,c)}if(B=(R&n.childLanes)!==0,Hn||B){if(c=Mn,c!==null){switch(R&-R){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|R))!==0?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,$i(n,f),Ei(c,n,f,-1))}return ju(),c=Mu(Error(t(421))),Jo(n,i,R,c)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=pv.bind(null,n),f._reactRetry=i,null):(n=g.treeContext,Qn=mr(f.nextSibling),Jn=i,qt=!0,_i=null,n!==null&&(ai[oi++]=Yi,ai[oi++]=qi,ai[oi++]=Wr,Yi=n.id,qi=n.overflow,Wr=i),i=Ru(i,c.children),i.flags|=4096,i)}function Bp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),su(n.return,i,a)}function Cu(n,i,a,c,f){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=f)}function zp(n,i,a){var c=i.pendingProps,f=c.revealOrder,g=c.tail;if(Fn(n,i,c.children,a),c=Qt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Bp(n,a,i);else if(n.tag===19)Bp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ht(Qt,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&Wo(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),Cu(i,!1,f,a,g);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Wo(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}Cu(i,!0,a,null,g);break;case"together":Cu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Qo(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Zi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Kr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Tr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Tr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function nv(n,i,a){switch(i.tag){case 3:Op(i),bs();break;case 5:ep(i);break;case 1:Gn(i.type)&&Uo(i);break;case 4:lu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Ht(Go,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Ht(Qt,Qt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?kp(n,i,a):(Ht(Qt,Qt.current&1),n=Zi(n,i,a),n!==null?n.sibling:null);Ht(Qt,Qt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return zp(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ht(Qt,Qt.current),c)break;return null;case 22:case 23:return i.lanes=0,Lp(n,i,a)}return Zi(n,i,a)}var Gp,Nu,Hp,Vp;Gp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Nu=function(){},Hp=function(n,i,a,c){var f=n.memoizedProps;if(f!==c){n=i.stateNode,qr(Li.current);var g=null;switch(a){case"input":f=ke(n,f),c=ke(n,c),g=[];break;case"select":f=L({},f,{value:void 0}),c=L({},c,{value:void 0}),g=[];break;case"textarea":f=cn(n,f),c=cn(n,c),g=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Io)}ye(a,c);var R;a=null;for(pe in f)if(!c.hasOwnProperty(pe)&&f.hasOwnProperty(pe)&&f[pe]!=null)if(pe==="style"){var B=f[pe];for(R in B)B.hasOwnProperty(R)&&(a||(a={}),a[R]="")}else pe!=="dangerouslySetInnerHTML"&&pe!=="children"&&pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&pe!=="autoFocus"&&(o.hasOwnProperty(pe)?g||(g=[]):(g=g||[]).push(pe,null));for(pe in c){var X=c[pe];if(B=f!=null?f[pe]:void 0,c.hasOwnProperty(pe)&&X!==B&&(X!=null||B!=null))if(pe==="style")if(B){for(R in B)!B.hasOwnProperty(R)||X&&X.hasOwnProperty(R)||(a||(a={}),a[R]="");for(R in X)X.hasOwnProperty(R)&&B[R]!==X[R]&&(a||(a={}),a[R]=X[R])}else a||(g||(g=[]),g.push(pe,a)),a=X;else pe==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,B=B?B.__html:void 0,X!=null&&B!==X&&(g=g||[]).push(pe,X)):pe==="children"?typeof X!="string"&&typeof X!="number"||(g=g||[]).push(pe,""+X):pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&(o.hasOwnProperty(pe)?(X!=null&&pe==="onScroll"&&Vt("scroll",n),g||B===X||(g=[])):(g=g||[]).push(pe,X))}a&&(g=g||[]).push("style",a);var pe=g;(i.updateQueue=pe)&&(i.flags|=4)}},Vp=function(n,i,a,c){a!==c&&(i.flags|=4)};function za(n,i){if(!qt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function In(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function iv(n,i,a){var c=i.pendingProps;switch(Jc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return In(i),null;case 1:return Gn(i.type)&&Do(),In(i),null;case 3:return c=i.stateNode,Cs(),jt(zn),jt(Nn),du(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Bo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,_i!==null&&(Gu(_i),_i=null))),Nu(n,i),In(i),null;case 5:cu(i);var f=qr(Ua.current);if(a=i.type,n!==null&&i.stateNode!=null)Hp(n,i,a,c,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return In(i),null}if(n=qr(Li.current),Bo(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[Ii]=i,c[Na]=g,n=(i.mode&1)!==0,a){case"dialog":Vt("cancel",c),Vt("close",c);break;case"iframe":case"object":case"embed":Vt("load",c);break;case"video":case"audio":for(f=0;f<Aa.length;f++)Vt(Aa[f],c);break;case"source":Vt("error",c);break;case"img":case"image":case"link":Vt("error",c),Vt("load",c);break;case"details":Vt("toggle",c);break;case"input":Et(c,g),Vt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Vt("invalid",c);break;case"textarea":an(c,g),Vt("invalid",c)}ye(a,g),f=null;for(var R in g)if(g.hasOwnProperty(R)){var B=g[R];R==="children"?typeof B=="string"?c.textContent!==B&&(g.suppressHydrationWarning!==!0&&Po(c.textContent,B,n),f=["children",B]):typeof B=="number"&&c.textContent!==""+B&&(g.suppressHydrationWarning!==!0&&Po(c.textContent,B,n),f=["children",""+B]):o.hasOwnProperty(R)&&B!=null&&R==="onScroll"&&Vt("scroll",c)}switch(a){case"input":Ue(c),gt(c,g,!0);break;case"textarea":Ue(c),fn(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Io)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{R=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Lt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=R.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=R.createElement(a,{is:c.is}):(n=R.createElement(a),a==="select"&&(R=n,c.multiple?R.multiple=!0:c.size&&(R.size=c.size))):n=R.createElementNS(n,a),n[Ii]=i,n[Na]=c,Gp(n,i,!1,!1),i.stateNode=n;e:{switch(R=Ne(a,c),a){case"dialog":Vt("cancel",n),Vt("close",n),f=c;break;case"iframe":case"object":case"embed":Vt("load",n),f=c;break;case"video":case"audio":for(f=0;f<Aa.length;f++)Vt(Aa[f],n);f=c;break;case"source":Vt("error",n),f=c;break;case"img":case"image":case"link":Vt("error",n),Vt("load",n),f=c;break;case"details":Vt("toggle",n),f=c;break;case"input":Et(n,c),f=ke(n,c),Vt("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=L({},c,{value:void 0}),Vt("invalid",n);break;case"textarea":an(n,c),f=cn(n,c),Vt("invalid",n);break;default:f=c}ye(a,f),B=f;for(g in B)if(B.hasOwnProperty(g)){var X=B[g];g==="style"?re(n,X):g==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,X!=null&&kt(n,X)):g==="children"?typeof X=="string"?(a!=="textarea"||X!=="")&&We(n,X):typeof X=="number"&&We(n,""+X):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?X!=null&&g==="onScroll"&&Vt("scroll",n):X!=null&&D(n,g,X,R))}switch(a){case"input":Ue(n),gt(n,c,!1);break;case"textarea":Ue(n),fn(n);break;case"option":c.value!=null&&n.setAttribute("value",""+he(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?Zt(n,!!c.multiple,g,!1):c.defaultValue!=null&&Zt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=Io)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return In(i),null;case 6:if(n&&i.stateNode!=null)Vp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=qr(Ua.current),qr(Li.current),Bo(i)){if(c=i.stateNode,a=i.memoizedProps,c[Ii]=i,(g=c.nodeValue!==a)&&(n=Jn,n!==null))switch(n.tag){case 3:Po(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Po(c.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Ii]=i,i.stateNode=c}return In(i),null;case 13:if(jt(Qt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(qt&&Qn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Xh(),bs(),i.flags|=98560,g=!1;else if(g=Bo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Ii]=i}else bs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;In(i),g=!1}else _i!==null&&(Gu(_i),_i=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Qt.current&1)!==0?gn===0&&(gn=3):ju())),i.updateQueue!==null&&(i.flags|=4),In(i),null);case 4:return Cs(),Nu(n,i),n===null&&Ra(i.stateNode.containerInfo),In(i),null;case 10:return ru(i.type._context),In(i),null;case 17:return Gn(i.type)&&Do(),In(i),null;case 19:if(jt(Qt),g=i.memoizedState,g===null)return In(i),null;if(c=(i.flags&128)!==0,R=g.rendering,R===null)if(c)za(g,!1);else{if(gn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(R=Wo(n),R!==null){for(i.flags|=128,za(g,!1),c=R.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,n=c,g.flags&=14680066,R=g.alternate,R===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=R.childLanes,g.lanes=R.lanes,g.child=R.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=R.memoizedProps,g.memoizedState=R.memoizedState,g.updateQueue=R.updateQueue,g.type=R.type,n=R.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ht(Qt,Qt.current&1|2),i.child}n=n.sibling}g.tail!==null&&Xt()>Ls&&(i.flags|=128,c=!0,za(g,!1),i.lanes=4194304)}else{if(!c)if(n=Wo(R),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),za(g,!0),g.tail===null&&g.tailMode==="hidden"&&!R.alternate&&!qt)return In(i),null}else 2*Xt()-g.renderingStartTime>Ls&&a!==1073741824&&(i.flags|=128,c=!0,za(g,!1),i.lanes=4194304);g.isBackwards?(R.sibling=i.child,i.child=R):(a=g.last,a!==null?a.sibling=R:i.child=R,g.last=R)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Xt(),i.sibling=null,a=Qt.current,Ht(Qt,c?a&1|2:a&1),i):(In(i),null);case 22:case 23:return Vu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(ei&1073741824)!==0&&(In(i),i.subtreeFlags&6&&(i.flags|=8192)):In(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function rv(n,i){switch(Jc(i),i.tag){case 1:return Gn(i.type)&&Do(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Cs(),jt(zn),jt(Nn),du(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return cu(i),null;case 13:if(jt(Qt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));bs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return jt(Qt),null;case 4:return Cs(),null;case 10:return ru(i.type._context),null;case 22:case 23:return Vu(),null;case 24:return null;default:return null}}var el=!1,Ln=!1,sv=typeof WeakSet=="function"?WeakSet:Set,je=null;function Ps(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){sn(n,i,c)}else a.current=null}function Pu(n,i,a){try{a()}catch(c){sn(n,i,c)}}var jp=!1;function av(n,i){if(Vc=yo,n=Mh(),Uc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var R=0,B=-1,X=-1,pe=0,be=0,Re=n,Me=null;t:for(;;){for(var He;Re!==a||f!==0&&Re.nodeType!==3||(B=R+f),Re!==g||c!==0&&Re.nodeType!==3||(X=R+c),Re.nodeType===3&&(R+=Re.nodeValue.length),(He=Re.firstChild)!==null;)Me=Re,Re=He;for(;;){if(Re===n)break t;if(Me===a&&++pe===f&&(B=R),Me===g&&++be===c&&(X=R),(He=Re.nextSibling)!==null)break;Re=Me,Me=Re.parentNode}Re=He}a=B===-1||X===-1?null:{start:B,end:X}}else a=null}a=a||{start:0,end:0}}else a=null;for(jc={focusedElem:n,selectionRange:a},yo=!1,je=i;je!==null;)if(i=je,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,je=n;else for(;je!==null;){i=je;try{var $e=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if($e!==null){var Ke=$e.memoizedProps,ln=$e.memoizedState,le=i.stateNode,J=le.getSnapshotBeforeUpdate(i.elementType===i.type?Ke:yi(i.type,Ke),ln);le.__reactInternalSnapshotBeforeUpdate=J}break;case 3:var ue=i.stateNode.containerInfo;ue.nodeType===1?ue.textContent="":ue.nodeType===9&&ue.documentElement&&ue.removeChild(ue.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Le){sn(i,i.return,Le)}if(n=i.sibling,n!==null){n.return=i.return,je=n;break}je=i.return}return $e=jp,jp=!1,$e}function Ga(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var g=f.destroy;f.destroy=void 0,g!==void 0&&Pu(i,a,g)}f=f.next}while(f!==c)}}function tl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Iu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Wp(n){var i=n.alternate;i!==null&&(n.alternate=null,Wp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ii],delete i[Na],delete i[qc],delete i[Hx],delete i[Vx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Xp(n){return n.tag===5||n.tag===3||n.tag===4}function Yp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Xp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Lu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Io));else if(c!==4&&(n=n.child,n!==null))for(Lu(n,i,a),n=n.sibling;n!==null;)Lu(n,i,a),n=n.sibling}function Du(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Du(n,i,a),n=n.sibling;n!==null;)Du(n,i,a),n=n.sibling}var Tn=null,Si=!1;function Sr(n,i,a){for(a=a.child;a!==null;)qp(n,i,a),a=a.sibling}function qp(n,i,a){if(ce&&typeof ce.onCommitFiberUnmount=="function")try{ce.onCommitFiberUnmount(W,a)}catch{}switch(a.tag){case 5:Ln||Ps(a,i);case 6:var c=Tn,f=Si;Tn=null,Sr(n,i,a),Tn=c,Si=f,Tn!==null&&(Si?(n=Tn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Tn.removeChild(a.stateNode));break;case 18:Tn!==null&&(Si?(n=Tn,a=a.stateNode,n.nodeType===8?Yc(n.parentNode,a):n.nodeType===1&&Yc(n,a),_a(n)):Yc(Tn,a.stateNode));break;case 4:c=Tn,f=Si,Tn=a.stateNode.containerInfo,Si=!0,Sr(n,i,a),Tn=c,Si=f;break;case 0:case 11:case 14:case 15:if(!Ln&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var g=f,R=g.destroy;g=g.tag,R!==void 0&&((g&2)!==0||(g&4)!==0)&&Pu(a,i,R),f=f.next}while(f!==c)}Sr(n,i,a);break;case 1:if(!Ln&&(Ps(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(B){sn(a,i,B)}Sr(n,i,a);break;case 21:Sr(n,i,a);break;case 22:a.mode&1?(Ln=(c=Ln)||a.memoizedState!==null,Sr(n,i,a),Ln=c):Sr(n,i,a);break;default:Sr(n,i,a)}}function $p(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new sv),i.forEach(function(c){var f=mv.bind(null,n,c);a.has(c)||(a.add(c),c.then(f,f))})}}function Mi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var g=n,R=i,B=R;e:for(;B!==null;){switch(B.tag){case 5:Tn=B.stateNode,Si=!1;break e;case 3:Tn=B.stateNode.containerInfo,Si=!0;break e;case 4:Tn=B.stateNode.containerInfo,Si=!0;break e}B=B.return}if(Tn===null)throw Error(t(160));qp(g,R,f),Tn=null,Si=!1;var X=f.alternate;X!==null&&(X.return=null),f.return=null}catch(pe){sn(f,i,pe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Kp(i,n),i=i.sibling}function Kp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Mi(i,n),Ui(n),c&4){try{Ga(3,n,n.return),tl(3,n)}catch(Ke){sn(n,n.return,Ke)}try{Ga(5,n,n.return)}catch(Ke){sn(n,n.return,Ke)}}break;case 1:Mi(i,n),Ui(n),c&512&&a!==null&&Ps(a,a.return);break;case 5:if(Mi(i,n),Ui(n),c&512&&a!==null&&Ps(a,a.return),n.flags&32){var f=n.stateNode;try{We(f,"")}catch(Ke){sn(n,n.return,Ke)}}if(c&4&&(f=n.stateNode,f!=null)){var g=n.memoizedProps,R=a!==null?a.memoizedProps:g,B=n.type,X=n.updateQueue;if(n.updateQueue=null,X!==null)try{B==="input"&&g.type==="radio"&&g.name!=null&&wt(f,g),Ne(B,R);var pe=Ne(B,g);for(R=0;R<X.length;R+=2){var be=X[R],Re=X[R+1];be==="style"?re(f,Re):be==="dangerouslySetInnerHTML"?kt(f,Re):be==="children"?We(f,Re):D(f,be,Re,pe)}switch(B){case"input":It(f,g);break;case"textarea":Z(f,g);break;case"select":var Me=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var He=g.value;He!=null?Zt(f,!!g.multiple,He,!1):Me!==!!g.multiple&&(g.defaultValue!=null?Zt(f,!!g.multiple,g.defaultValue,!0):Zt(f,!!g.multiple,g.multiple?[]:"",!1))}f[Na]=g}catch(Ke){sn(n,n.return,Ke)}}break;case 6:if(Mi(i,n),Ui(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,g=n.memoizedProps;try{f.nodeValue=g}catch(Ke){sn(n,n.return,Ke)}}break;case 3:if(Mi(i,n),Ui(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{_a(i.containerInfo)}catch(Ke){sn(n,n.return,Ke)}break;case 4:Mi(i,n),Ui(n);break;case 13:Mi(i,n),Ui(n),f=n.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(Fu=Xt())),c&4&&$p(n);break;case 22:if(be=a!==null&&a.memoizedState!==null,n.mode&1?(Ln=(pe=Ln)||be,Mi(i,n),Ln=pe):Mi(i,n),Ui(n),c&8192){if(pe=n.memoizedState!==null,(n.stateNode.isHidden=pe)&&!be&&(n.mode&1)!==0)for(je=n,be=n.child;be!==null;){for(Re=je=be;je!==null;){switch(Me=je,He=Me.child,Me.tag){case 0:case 11:case 14:case 15:Ga(4,Me,Me.return);break;case 1:Ps(Me,Me.return);var $e=Me.stateNode;if(typeof $e.componentWillUnmount=="function"){c=Me,a=Me.return;try{i=c,$e.props=i.memoizedProps,$e.state=i.memoizedState,$e.componentWillUnmount()}catch(Ke){sn(c,a,Ke)}}break;case 5:Ps(Me,Me.return);break;case 22:if(Me.memoizedState!==null){Qp(Re);continue}}He!==null?(He.return=Me,je=He):Qp(Re)}be=be.sibling}e:for(be=null,Re=n;;){if(Re.tag===5){if(be===null){be=Re;try{f=Re.stateNode,pe?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(B=Re.stateNode,X=Re.memoizedProps.style,R=X!=null&&X.hasOwnProperty("display")?X.display:null,B.style.display=A("display",R))}catch(Ke){sn(n,n.return,Ke)}}}else if(Re.tag===6){if(be===null)try{Re.stateNode.nodeValue=pe?"":Re.memoizedProps}catch(Ke){sn(n,n.return,Ke)}}else if((Re.tag!==22&&Re.tag!==23||Re.memoizedState===null||Re===n)&&Re.child!==null){Re.child.return=Re,Re=Re.child;continue}if(Re===n)break e;for(;Re.sibling===null;){if(Re.return===null||Re.return===n)break e;be===Re&&(be=null),Re=Re.return}be===Re&&(be=null),Re.sibling.return=Re.return,Re=Re.sibling}}break;case 19:Mi(i,n),Ui(n),c&4&&$p(n);break;case 21:break;default:Mi(i,n),Ui(n)}}function Ui(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Xp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(We(f,""),c.flags&=-33);var g=Yp(n);Du(n,g,f);break;case 3:case 4:var R=c.stateNode.containerInfo,B=Yp(n);Lu(n,B,R);break;default:throw Error(t(161))}}catch(X){sn(n,n.return,X)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function ov(n,i,a){je=n,Zp(n)}function Zp(n,i,a){for(var c=(n.mode&1)!==0;je!==null;){var f=je,g=f.child;if(f.tag===22&&c){var R=f.memoizedState!==null||el;if(!R){var B=f.alternate,X=B!==null&&B.memoizedState!==null||Ln;B=el;var pe=Ln;if(el=R,(Ln=X)&&!pe)for(je=f;je!==null;)R=je,X=R.child,R.tag===22&&R.memoizedState!==null?em(f):X!==null?(X.return=R,je=X):em(f);for(;g!==null;)je=g,Zp(g),g=g.sibling;je=f,el=B,Ln=pe}Jp(n)}else(f.subtreeFlags&8772)!==0&&g!==null?(g.return=f,je=g):Jp(n)}}function Jp(n){for(;je!==null;){var i=je;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Ln||tl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Ln)if(a===null)c.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:yi(i.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&Qh(i,g,c);break;case 3:var R=i.updateQueue;if(R!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Qh(i,R,a)}break;case 5:var B=i.stateNode;if(a===null&&i.flags&4){a=B;var X=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":X.autoFocus&&a.focus();break;case"img":X.src&&(a.src=X.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var pe=i.alternate;if(pe!==null){var be=pe.memoizedState;if(be!==null){var Re=be.dehydrated;Re!==null&&_a(Re)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ln||i.flags&512&&Iu(i)}catch(Me){sn(i,i.return,Me)}}if(i===n){je=null;break}if(a=i.sibling,a!==null){a.return=i.return,je=a;break}je=i.return}}function Qp(n){for(;je!==null;){var i=je;if(i===n){je=null;break}var a=i.sibling;if(a!==null){a.return=i.return,je=a;break}je=i.return}}function em(n){for(;je!==null;){var i=je;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{tl(4,i)}catch(X){sn(i,a,X)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(X){sn(i,f,X)}}var g=i.return;try{Iu(i)}catch(X){sn(i,g,X)}break;case 5:var R=i.return;try{Iu(i)}catch(X){sn(i,R,X)}}}catch(X){sn(i,i.return,X)}if(i===n){je=null;break}var B=i.sibling;if(B!==null){B.return=i.return,je=B;break}je=i.return}}var lv=Math.ceil,nl=P.ReactCurrentDispatcher,Uu=P.ReactCurrentOwner,ui=P.ReactCurrentBatchConfig,Pt=0,Mn=null,un=null,An=0,ei=0,Is=gr(0),gn=0,Ha=null,Kr=0,il=0,Ou=0,Va=null,Vn=null,Fu=0,Ls=1/0,Ji=null,rl=!1,ku=null,Mr=null,sl=!1,Er=null,al=0,ja=0,Bu=null,ol=-1,ll=0;function kn(){return(Pt&6)!==0?Xt():ol!==-1?ol:ol=Xt()}function wr(n){return(n.mode&1)===0?1:(Pt&2)!==0&&An!==0?An&-An:Wx.transition!==null?(ll===0&&(ll=Bt()),ll):(n=Je,n!==0||(n=window.event,n=n===void 0?16:nh(n.type)),n)}function Ei(n,i,a,c){if(50<ja)throw ja=0,Bu=null,Error(t(185));rn(n,a,c),((Pt&2)===0||n!==Mn)&&(n===Mn&&((Pt&2)===0&&(il|=a),gn===4&&br(n,An)),jn(n,c),a===1&&Pt===0&&(i.mode&1)===0&&(Ls=Xt()+500,Oo&&vr()))}function jn(n,i){var a=n.callbackNode;vt(n,i);var c=mt(n,n===Mn?An:0);if(c===0)a!==null&&pa(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&pa(a),i===1)n.tag===0?jx(nm.bind(null,n)):Gh(nm.bind(null,n)),zx(function(){(Pt&6)===0&&vr()}),a=null;else{switch(Ni(c)){case 1:a=ma;break;case 4:a=xo;break;case 16:a=fs;break;case 536870912:a=N;break;default:a=fs}a=um(a,tm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function tm(n,i){if(ol=-1,ll=0,(Pt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Ds()&&n.callbackNode!==a)return null;var c=mt(n,n===Mn?An:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=cl(n,c);else{i=c;var f=Pt;Pt|=2;var g=rm();(Mn!==n||An!==i)&&(Ji=null,Ls=Xt()+500,Jr(n,i));do try{dv();break}catch(B){im(n,B)}while(!0);iu(),nl.current=g,Pt=f,un!==null?i=0:(Mn=null,An=0,i=gn)}if(i!==0){if(i===2&&(f=Yt(n),f!==0&&(c=f,i=zu(n,f))),i===1)throw a=Ha,Jr(n,0),br(n,c),jn(n,Xt()),a;if(i===6)br(n,c);else{if(f=n.current.alternate,(c&30)===0&&!cv(f)&&(i=cl(n,c),i===2&&(g=Yt(n),g!==0&&(c=g,i=zu(n,g))),i===1))throw a=Ha,Jr(n,0),br(n,c),jn(n,Xt()),a;switch(n.finishedWork=f,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Qr(n,Vn,Ji);break;case 3:if(br(n,c),(c&130023424)===c&&(i=Fu+500-Xt(),10<i)){if(mt(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){kn(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=Xc(Qr.bind(null,n,Vn,Ji),i);break}Qr(n,Vn,Ji);break;case 4:if(br(n,c),(c&4194240)===c)break;for(i=n.eventTimes,f=-1;0<c;){var R=31-ne(c);g=1<<R,R=i[R],R>f&&(f=R),c&=~g}if(c=f,c=Xt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*lv(c/1960))-c,10<c){n.timeoutHandle=Xc(Qr.bind(null,n,Vn,Ji),c);break}Qr(n,Vn,Ji);break;case 5:Qr(n,Vn,Ji);break;default:throw Error(t(329))}}}return jn(n,Xt()),n.callbackNode===a?tm.bind(null,n):null}function zu(n,i){var a=Va;return n.current.memoizedState.isDehydrated&&(Jr(n,i).flags|=256),n=cl(n,i),n!==2&&(i=Vn,Vn=a,i!==null&&Gu(i)),n}function Gu(n){Vn===null?Vn=n:Vn.push.apply(Vn,n)}function cv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],g=f.getSnapshot;f=f.value;try{if(!vi(g(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function br(n,i){for(i&=~Ou,i&=~il,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-ne(i),c=1<<a;n[a]=-1,i&=~c}}function nm(n){if((Pt&6)!==0)throw Error(t(327));Ds();var i=mt(n,0);if((i&1)===0)return jn(n,Xt()),null;var a=cl(n,i);if(n.tag!==0&&a===2){var c=Yt(n);c!==0&&(i=c,a=zu(n,c))}if(a===1)throw a=Ha,Jr(n,0),br(n,i),jn(n,Xt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Qr(n,Vn,Ji),jn(n,Xt()),null}function Hu(n,i){var a=Pt;Pt|=1;try{return n(i)}finally{Pt=a,Pt===0&&(Ls=Xt()+500,Oo&&vr())}}function Zr(n){Er!==null&&Er.tag===0&&(Pt&6)===0&&Ds();var i=Pt;Pt|=1;var a=ui.transition,c=Je;try{if(ui.transition=null,Je=1,n)return n()}finally{Je=c,ui.transition=a,Pt=i,(Pt&6)===0&&vr()}}function Vu(){ei=Is.current,jt(Is)}function Jr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Bx(a)),un!==null)for(a=un.return;a!==null;){var c=a;switch(Jc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Do();break;case 3:Cs(),jt(zn),jt(Nn),du();break;case 5:cu(c);break;case 4:Cs();break;case 13:jt(Qt);break;case 19:jt(Qt);break;case 10:ru(c.type._context);break;case 22:case 23:Vu()}a=a.return}if(Mn=n,un=n=Tr(n.current,null),An=ei=i,gn=0,Ha=null,Ou=il=Kr=0,Vn=Va=null,Yr!==null){for(i=0;i<Yr.length;i++)if(a=Yr[i],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,g=a.pending;if(g!==null){var R=g.next;g.next=f,c.next=R}a.pending=c}Yr=null}return n}function im(n,i){do{var a=un;try{if(iu(),Xo.current=Ko,Yo){for(var c=en.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}Yo=!1}if($r=0,Sn=mn=en=null,Oa=!1,Fa=0,Uu.current=null,a===null||a.return===null){gn=1,Ha=i,un=null;break}e:{var g=n,R=a.return,B=a,X=i;if(i=An,B.flags|=32768,X!==null&&typeof X=="object"&&typeof X.then=="function"){var pe=X,be=B,Re=be.tag;if((be.mode&1)===0&&(Re===0||Re===11||Re===15)){var Me=be.alternate;Me?(be.updateQueue=Me.updateQueue,be.memoizedState=Me.memoizedState,be.lanes=Me.lanes):(be.updateQueue=null,be.memoizedState=null)}var He=Rp(R);if(He!==null){He.flags&=-257,Cp(He,R,B,g,i),He.mode&1&&Ap(g,pe,i),i=He,X=pe;var $e=i.updateQueue;if($e===null){var Ke=new Set;Ke.add(X),i.updateQueue=Ke}else $e.add(X);break e}else{if((i&1)===0){Ap(g,pe,i),ju();break e}X=Error(t(426))}}else if(qt&&B.mode&1){var ln=Rp(R);if(ln!==null){(ln.flags&65536)===0&&(ln.flags|=256),Cp(ln,R,B,g,i),tu(Ns(X,B));break e}}g=X=Ns(X,B),gn!==4&&(gn=2),Va===null?Va=[g]:Va.push(g),g=R;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var le=bp(g,X,i);Jh(g,le);break e;case 1:B=X;var J=g.type,ue=g.stateNode;if((g.flags&128)===0&&(typeof J.getDerivedStateFromError=="function"||ue!==null&&typeof ue.componentDidCatch=="function"&&(Mr===null||!Mr.has(ue)))){g.flags|=65536,i&=-i,g.lanes|=i;var Le=Tp(g,B,i);Jh(g,Le);break e}}g=g.return}while(g!==null)}am(a)}catch(Qe){i=Qe,un===a&&a!==null&&(un=a=a.return);continue}break}while(!0)}function rm(){var n=nl.current;return nl.current=Ko,n===null?Ko:n}function ju(){(gn===0||gn===3||gn===2)&&(gn=4),Mn===null||(Kr&268435455)===0&&(il&268435455)===0||br(Mn,An)}function cl(n,i){var a=Pt;Pt|=2;var c=rm();(Mn!==n||An!==i)&&(Ji=null,Jr(n,i));do try{uv();break}catch(f){im(n,f)}while(!0);if(iu(),Pt=a,nl.current=c,un!==null)throw Error(t(261));return Mn=null,An=0,gn}function uv(){for(;un!==null;)sm(un)}function dv(){for(;un!==null&&!Hr();)sm(un)}function sm(n){var i=cm(n.alternate,n,ei);n.memoizedProps=n.pendingProps,i===null?am(n):un=i,Uu.current=null}function am(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=iv(a,i,ei),a!==null){un=a;return}}else{if(a=rv(a,i),a!==null){a.flags&=32767,un=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{gn=6,un=null;return}}if(i=i.sibling,i!==null){un=i;return}un=i=n}while(i!==null);gn===0&&(gn=5)}function Qr(n,i,a){var c=Je,f=ui.transition;try{ui.transition=null,Je=1,fv(n,i,a,c)}finally{ui.transition=f,Je=c}return null}function fv(n,i,a,c){do Ds();while(Er!==null);if((Pt&6)!==0)throw Error(t(327));a=n.finishedWork;var f=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(qe(n,g),n===Mn&&(un=Mn=null,An=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||sl||(sl=!0,um(fs,function(){return Ds(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=ui.transition,ui.transition=null;var R=Je;Je=1;var B=Pt;Pt|=4,Uu.current=null,av(n,a),Kp(a,n),Ix(jc),yo=!!Vc,jc=Vc=null,n.current=a,ov(a),Ec(),Pt=B,Je=R,ui.transition=g}else n.current=a;if(sl&&(sl=!1,Er=n,al=f),g=n.pendingLanes,g===0&&(Mr=null),ae(a.stateNode),jn(n,Xt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)f=i[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(rl)throw rl=!1,n=ku,ku=null,n;return(al&1)!==0&&n.tag!==0&&Ds(),g=n.pendingLanes,(g&1)!==0?n===Bu?ja++:(ja=0,Bu=n):ja=0,vr(),null}function Ds(){if(Er!==null){var n=Ni(al),i=ui.transition,a=Je;try{if(ui.transition=null,Je=16>n?16:n,Er===null)var c=!1;else{if(n=Er,Er=null,al=0,(Pt&6)!==0)throw Error(t(331));var f=Pt;for(Pt|=4,je=n.current;je!==null;){var g=je,R=g.child;if((je.flags&16)!==0){var B=g.deletions;if(B!==null){for(var X=0;X<B.length;X++){var pe=B[X];for(je=pe;je!==null;){var be=je;switch(be.tag){case 0:case 11:case 15:Ga(8,be,g)}var Re=be.child;if(Re!==null)Re.return=be,je=Re;else for(;je!==null;){be=je;var Me=be.sibling,He=be.return;if(Wp(be),be===pe){je=null;break}if(Me!==null){Me.return=He,je=Me;break}je=He}}}var $e=g.alternate;if($e!==null){var Ke=$e.child;if(Ke!==null){$e.child=null;do{var ln=Ke.sibling;Ke.sibling=null,Ke=ln}while(Ke!==null)}}je=g}}if((g.subtreeFlags&2064)!==0&&R!==null)R.return=g,je=R;else e:for(;je!==null;){if(g=je,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Ga(9,g,g.return)}var le=g.sibling;if(le!==null){le.return=g.return,je=le;break e}je=g.return}}var J=n.current;for(je=J;je!==null;){R=je;var ue=R.child;if((R.subtreeFlags&2064)!==0&&ue!==null)ue.return=R,je=ue;else e:for(R=J;je!==null;){if(B=je,(B.flags&2048)!==0)try{switch(B.tag){case 0:case 11:case 15:tl(9,B)}}catch(Qe){sn(B,B.return,Qe)}if(B===R){je=null;break e}var Le=B.sibling;if(Le!==null){Le.return=B.return,je=Le;break e}je=B.return}}if(Pt=f,vr(),ce&&typeof ce.onPostCommitFiberRoot=="function")try{ce.onPostCommitFiberRoot(W,n)}catch{}c=!0}return c}finally{Je=a,ui.transition=i}}return!1}function om(n,i,a){i=Ns(a,i),i=bp(n,i,1),n=yr(n,i,1),i=kn(),n!==null&&(rn(n,1,i),jn(n,i))}function sn(n,i,a){if(n.tag===3)om(n,n,a);else for(;i!==null;){if(i.tag===3){om(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Mr===null||!Mr.has(c))){n=Ns(a,n),n=Tp(i,n,1),i=yr(i,n,1),n=kn(),i!==null&&(rn(i,1,n),jn(i,n));break}}i=i.return}}function hv(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=kn(),n.pingedLanes|=n.suspendedLanes&a,Mn===n&&(An&a)===a&&(gn===4||gn===3&&(An&130023424)===An&&500>Xt()-Fu?Jr(n,0):Ou|=a),jn(n,i)}function lm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Xe,Xe<<=1,(Xe&130023424)===0&&(Xe=4194304)));var a=kn();n=$i(n,i),n!==null&&(rn(n,i,a),jn(n,a))}function pv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),lm(n,a)}function mv(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),lm(n,a)}var cm;cm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||zn.current)Hn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Hn=!1,nv(n,i,a);Hn=(n.flags&131072)!==0}else Hn=!1,qt&&(i.flags&1048576)!==0&&Hh(i,ko,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Qo(n,i),n=i.pendingProps;var f=Ms(i,Nn.current);Rs(i,a),f=pu(null,i,c,n,f,a);var g=mu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Gn(c)?(g=!0,Uo(i)):g=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,ou(i),f.updater=Zo,i.stateNode=f,f._reactInternals=i,Su(i,c,n,a),i=bu(null,i,c,!0,g,a)):(i.tag=0,qt&&g&&Zc(i),Fn(null,i,f,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Qo(n,i),n=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=xv(c),n=yi(c,n),f){case 0:i=wu(null,i,c,n,a);break e;case 1:i=Up(null,i,c,n,a);break e;case 11:i=Np(null,i,c,n,a);break e;case 14:i=Pp(null,i,c,yi(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:yi(c,f),wu(n,i,c,f,a);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:yi(c,f),Up(n,i,c,f,a);case 3:e:{if(Op(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,f=g.element,Zh(n,i),jo(i,c,null,a);var R=i.memoizedState;if(c=R.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:R.cache,pendingSuspenseBoundaries:R.pendingSuspenseBoundaries,transitions:R.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){f=Ns(Error(t(423)),i),i=Fp(n,i,c,a,f);break e}else if(c!==f){f=Ns(Error(t(424)),i),i=Fp(n,i,c,a,f);break e}else for(Qn=mr(i.stateNode.containerInfo.firstChild),Jn=i,qt=!0,_i=null,a=$h(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(bs(),c===f){i=Zi(n,i,a);break e}Fn(n,i,c,a)}i=i.child}return i;case 5:return ep(i),n===null&&eu(i),c=i.type,f=i.pendingProps,g=n!==null?n.memoizedProps:null,R=f.children,Wc(c,f)?R=null:g!==null&&Wc(c,g)&&(i.flags|=32),Dp(n,i),Fn(n,i,R,a),i.child;case 6:return n===null&&eu(i),null;case 13:return kp(n,i,a);case 4:return lu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Ts(i,null,c,a):Fn(n,i,c,a),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:yi(c,f),Np(n,i,c,f,a);case 7:return Fn(n,i,i.pendingProps,a),i.child;case 8:return Fn(n,i,i.pendingProps.children,a),i.child;case 12:return Fn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,g=i.memoizedProps,R=f.value,Ht(Go,c._currentValue),c._currentValue=R,g!==null)if(vi(g.value,R)){if(g.children===f.children&&!zn.current){i=Zi(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var B=g.dependencies;if(B!==null){R=g.child;for(var X=B.firstContext;X!==null;){if(X.context===c){if(g.tag===1){X=Ki(-1,a&-a),X.tag=2;var pe=g.updateQueue;if(pe!==null){pe=pe.shared;var be=pe.pending;be===null?X.next=X:(X.next=be.next,be.next=X),pe.pending=X}}g.lanes|=a,X=g.alternate,X!==null&&(X.lanes|=a),su(g.return,a,i),B.lanes|=a;break}X=X.next}}else if(g.tag===10)R=g.type===i.type?null:g.child;else if(g.tag===18){if(R=g.return,R===null)throw Error(t(341));R.lanes|=a,B=R.alternate,B!==null&&(B.lanes|=a),su(R,a,i),R=g.sibling}else R=g.child;if(R!==null)R.return=g;else for(R=g;R!==null;){if(R===i){R=null;break}if(g=R.sibling,g!==null){g.return=R.return,R=g;break}R=R.return}g=R}Fn(n,i,f.children,a),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,Rs(i,a),f=li(f),c=c(f),i.flags|=1,Fn(n,i,c,a),i.child;case 14:return c=i.type,f=yi(c,i.pendingProps),f=yi(c.type,f),Pp(n,i,c,f,a);case 15:return Ip(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:yi(c,f),Qo(n,i),i.tag=1,Gn(c)?(n=!0,Uo(i)):n=!1,Rs(i,a),Ep(i,c,f),Su(i,c,f,a),bu(null,i,c,!0,n,a);case 19:return zp(n,i,a);case 22:return Lp(n,i,a)}throw Error(t(156,i.tag))};function um(n,i){return ha(n,i)}function gv(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(n,i,a,c){return new gv(n,i,a,c)}function Wu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function xv(n){if(typeof n=="function")return Wu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ee)return 11;if(n===oe)return 14}return 2}function Tr(n,i){var a=n.alternate;return a===null?(a=di(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function ul(n,i,a,c,f,g){var R=2;if(c=n,typeof n=="function")Wu(n)&&(R=1);else if(typeof n=="string")R=5;else e:switch(n){case w:return es(a.children,f,g,i);case I:R=8,f|=8;break;case $:return n=di(12,a,i,f|2),n.elementType=$,n.lanes=g,n;case de:return n=di(13,a,i,f),n.elementType=de,n.lanes=g,n;case V:return n=di(19,a,i,f),n.elementType=V,n.lanes=g,n;case Y:return dl(a,f,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case z:R=10;break e;case K:R=9;break e;case ee:R=11;break e;case oe:R=14;break e;case Q:R=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=di(R,a,i,f),i.elementType=n,i.type=c,i.lanes=g,i}function es(n,i,a,c){return n=di(7,n,c,i),n.lanes=a,n}function dl(n,i,a,c){return n=di(22,n,c,i),n.elementType=Y,n.lanes=a,n.stateNode={isHidden:!1},n}function Xu(n,i,a){return n=di(6,n,null,i),n.lanes=a,n}function Yu(n,i,a){return i=di(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function vv(n,i,a,c,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ot(0),this.expirationTimes=Ot(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ot(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function qu(n,i,a,c,f,g,R,B,X){return n=new vv(n,i,a,B,X),i===1?(i=1,g===!0&&(i|=8)):i=0,g=di(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},ou(g),n}function _v(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function dm(n){if(!n)return xr;n=n._reactInternals;e:{if(Ri(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Gn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Gn(a))return Bh(n,a,i)}return i}function fm(n,i,a,c,f,g,R,B,X){return n=qu(a,c,!0,n,f,g,R,B,X),n.context=dm(null),a=n.current,c=kn(),f=wr(a),g=Ki(c,f),g.callback=i??null,yr(a,g,f),n.current.lanes=f,rn(n,f,c),jn(n,c),n}function fl(n,i,a,c){var f=i.current,g=kn(),R=wr(f);return a=dm(a),i.context===null?i.context=a:i.pendingContext=a,i=Ki(g,R),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=yr(f,i,R),n!==null&&(Ei(n,f,R,g),Vo(n,f,R)),R}function hl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function hm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function $u(n,i){hm(n,i),(n=n.alternate)&&hm(n,i)}function yv(){return null}var pm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ku(n){this._internalRoot=n}pl.prototype.render=Ku.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));fl(n,i,null,null)},pl.prototype.unmount=Ku.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Zr(function(){fl(null,n,null,null)}),i[Wi]=null}};function pl(n){this._internalRoot=n}pl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Pi();n={blockedOn:null,target:n,priority:i};for(var a=0;a<fr.length&&i!==0&&i<fr[a].priority;a++);fr.splice(a,0,n),a===0&&eh(n)}};function Zu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ml(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function mm(){}function Sv(n,i,a,c,f){if(f){if(typeof c=="function"){var g=c;c=function(){var pe=hl(R);g.call(pe)}}var R=fm(i,c,n,0,null,!1,!1,"",mm);return n._reactRootContainer=R,n[Wi]=R.current,Ra(n.nodeType===8?n.parentNode:n),Zr(),R}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var B=c;c=function(){var pe=hl(X);B.call(pe)}}var X=qu(n,0,!1,null,null,!1,!1,"",mm);return n._reactRootContainer=X,n[Wi]=X.current,Ra(n.nodeType===8?n.parentNode:n),Zr(function(){fl(i,X,a,c)}),X}function gl(n,i,a,c,f){var g=a._reactRootContainer;if(g){var R=g;if(typeof f=="function"){var B=f;f=function(){var X=hl(R);B.call(X)}}fl(i,R,n,f)}else R=Sv(a,i,n,f,c);return hl(R)}pn=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=lt(i.pendingLanes);a!==0&&(hn(i,a|1),jn(i,Xt()),(Pt&6)===0&&(Ls=Xt()+500,vr()))}break;case 13:Zr(function(){var c=$i(n,1);if(c!==null){var f=kn();Ei(c,n,1,f)}}),$u(n,1)}},ur=function(n){if(n.tag===13){var i=$i(n,134217728);if(i!==null){var a=kn();Ei(i,n,134217728,a)}$u(n,134217728)}},xi=function(n){if(n.tag===13){var i=wr(n),a=$i(n,i);if(a!==null){var c=kn();Ei(a,n,i,c)}$u(n,i)}},Pi=function(){return Je},bt=function(n,i){var a=Je;try{return Je=n,i()}finally{Je=a}},se=function(n,i,a){switch(i){case"input":if(It(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var f=Lo(c);if(!f)throw Error(t(90));tt(c),It(c,f)}}}break;case"textarea":Z(n,a);break;case"select":i=a.value,i!=null&&Zt(n,!!a.multiple,i,!1)}},Ce=Hu,Ie=Zr;var Mv={usingClientEntryPoint:!1,Events:[Pa,ys,Lo,me,we,Hu]},Wa={findFiberByHostInstance:Vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ev={bundleType:Wa.bundleType,version:Wa.version,rendererPackageName:Wa.rendererPackageName,rendererConfig:Wa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=fa(n),n===null?null:n.stateNode},findFiberByHostInstance:Wa.findFiberByHostInstance||yv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xl.isDisabled&&xl.supportsFiber)try{W=xl.inject(Ev),ce=xl}catch{}}return Wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mv,Wn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zu(i))throw Error(t(200));return _v(n,i,null,a)},Wn.createRoot=function(n,i){if(!Zu(n))throw Error(t(299));var a=!1,c="",f=pm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=qu(n,1,!1,null,null,a,!1,c,f),n[Wi]=i.current,Ra(n.nodeType===8?n.parentNode:n),new Ku(i)},Wn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=fa(i),n=n===null?null:n.stateNode,n},Wn.flushSync=function(n){return Zr(n)},Wn.hydrate=function(n,i,a){if(!ml(i))throw Error(t(200));return gl(null,n,i,!0,a)},Wn.hydrateRoot=function(n,i,a){if(!Zu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,f=!1,g="",R=pm;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(R=a.onRecoverableError)),i=fm(i,null,n,1,a??null,f,!1,g,R),n[Wi]=i.current,Ra(n),c)for(n=0;n<c.length;n++)a=c[n],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new pl(i)},Wn.render=function(n,i,a){if(!ml(i))throw Error(t(200));return gl(null,n,i,!1,a)},Wn.unmountComponentAtNode=function(n){if(!ml(n))throw Error(t(40));return n._reactRootContainer?(Zr(function(){gl(null,null,n,!1,function(){n._reactRootContainer=null,n[Wi]=null})}),!0):!1},Wn.unstable_batchedUpdates=Hu,Wn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!ml(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return gl(n,i,a,!1,c)},Wn.version="18.3.1-next-f1338f8080-20240426",Wn}var Em;function Iv(){if(Em)return ed.exports;Em=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),ed.exports=Pv(),ed.exports}var wm;function Lv(){if(wm)return vl;wm=1;var s=Iv();return vl.createRoot=s.createRoot,vl.hydrateRoot=s.hydrateRoot,vl}var Dv=Lv();const Uv=H0(Dv);function Ov(){const s=rt.useRef(null),e=rt.useRef(null),[t,r]=rt.useState(""),[o,l]=rt.useState(!1),[u,h]=rt.useState(!1),[p,m]=rt.useState(!1),[y,S]=rt.useState(!1);return rt.useEffect(()=>{if(window.matchMedia("(pointer: coarse)").matches){S(!0);return}let _=-100,E=-100,b=-100,C=-100,x;const v=O=>{_=O.clientX,E=O.clientY,p||m(!0);const w=O.target.closest("[data-cursor]"),I=O.target.closest('button, a, input, textarea, [role="button"]');if(w){const $=w.getAttribute("data-cursor");$&&$!=="pointer"?(r($),l(!0)):(r(""),l(!0))}else I?(r(""),l(!0)):(r(""),l(!1))},T=()=>h(!0),D=()=>h(!1),P=()=>m(!1);window.addEventListener("mousemove",v,{passive:!0}),window.addEventListener("mousedown",T),window.addEventListener("mouseup",D),document.addEventListener("mouseleave",P);const U=()=>{s.current&&(s.current.style.transform=`translate3d(${_}px, ${E}px, 0) translate(-50%, -50%)`),b+=(_-b)*.16,C+=(E-C)*.16,e.current&&(e.current.style.transform=`translate3d(${b}px, ${C}px, 0) translate(-50%, -50%)`),x=requestAnimationFrame(U)};return x=requestAnimationFrame(U),()=>{window.removeEventListener("mousemove",v),window.removeEventListener("mousedown",T),window.removeEventListener("mouseup",D),document.removeEventListener("mouseleave",P),cancelAnimationFrame(x)}},[p]),y?null:d.jsxs("div",{className:`pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-300 ${p?"opacity-100":"opacity-0"}`,children:[d.jsx("div",{ref:s,className:`fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#00f0ff] transition-transform duration-75 ${t?"opacity-0":"opacity-100"} ${u?"scale-50":"scale-100"}`,style:{willChange:"transform"}}),d.jsx("div",{ref:e,className:`fixed top-0 left-0 flex items-center justify-center rounded-full transition-all duration-200 backdrop-blur-sm ${t?"px-4 py-2 w-auto h-auto min-w-[85px] rounded-full bg-cyan-950/80 border border-cyan-400 text-cyan-300 font-mono text-[10px] tracking-widest font-bold uppercase shadow-[0_0_25px_rgba(0,240,255,0.4)]":o?"w-12 h-12 border border-cyan-400/80 bg-cyan-500/10 shadow-[0_0_20px_rgba(0,240,255,0.25)]":"w-8 h-8 border border-slate-500/50 bg-transparent"} ${u?"scale-90":"scale-100"}`,style:{willChange:"transform"},children:t&&d.jsx("span",{className:"whitespace-nowrap animate-fadeIn",children:t})})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ef="187",Fv=0,bm=1,kv=2,$l=1,Bv=2,Qa=3,ss=0,$n=1,pi=2,qs=0,to=1,Tm=2,Am=3,Rm=4,zv=5,Ys=100,Gv=101,Hv=102,Vv=103,jv=104,Wv=200,Xv=201,Yv=202,qv=203,V0=204,j0=205,$v=206,Kv=207,Zv=208,Jv=209,Qv=210,e_=211,t_=212,n_=213,i_=214,Id=0,Ld=1,Dd=2,io=3,Ud=4,Od=5,Fd=6,kd=7,W0=0,r_=1,s_=2,ar=0,X0=1,Y0=2,q0=3,mc=4,$0=5,K0=6,Z0=7,J0=300,Qs=301,ro=302,id=303,rd=304,Bd=1e3,sr=1001,zd=1002,Rn=1003,a_=1004,_l=1005,qn=1006,sd=1007,Or=1008,si=1009,Q0=1010,eg=1011,so=1012,wf=1013,Vi=1014,Bi=1015,ji=1016,bf=1017,Tf=1018,ea=1020,tg=35902,ng=35899,ig=1021,rg=1022,zi=1023,kr=1026,Fr=1027,sg=1028,Af=1029,as=1030,Rf=1031,Cf=1033,Kl=33776,Zl=33777,Jl=33778,Ql=33779,Gd=35840,Hd=35841,Vd=35842,jd=35843,Wd=36196,Xd=37492,Yd=37496,qd=37488,$d=37489,nc=37490,Kd=37491,Zd=37808,Jd=37809,Qd=37810,ef=37811,tf=37812,nf=37813,rf=37814,sf=37815,af=37816,of=37817,lf=37818,cf=37819,uf=37820,df=37821,ff=36492,hf=36494,pf=36495,mf=36283,gf=36284,ic=36285,xf=36286,o_=3200,vf=0,l_=1,Ur="",hi="srgb",rc="srgb-linear",sc="linear",zt="srgb",ad=7680,c_=519,u_=512,d_=513,f_=514,ag=515,h_=516,p_=517,og=518,lg=519,m_=35044,Cm="300 es",Ai=2e3,ao=2001;function g_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ac(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function x_(){const s=ac("canvas");return s.style.display="block",s}const Nm={};function Pm(...s){const e="THREE."+s.shift();console.log(e,...s)}function cg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ct(...s){s=cg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ft(...s){s=cg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function ec(...s){const e=s.join(" ");e in Nm||(Nm[e]=!0,ct(...s))}function v_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const __={[Id]:Id,[Dd]:Fd,[Ud]:Ud,[io]:Od,[Ld]:Ld,[Fd]:Dd,[kd]:kd,[Od]:io};class ls{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Im=1234567;const $s=Math.PI/180,oo=180/Math.PI;function oa(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Dn[s&255]+Dn[s>>8&255]+Dn[s>>16&255]+Dn[s>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[t&63|128]+Dn[t>>8&255]+"-"+Dn[t>>16&255]+Dn[t>>24&255]+Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]).toLowerCase()}function Tt(s,e,t){return Math.max(e,Math.min(t,s))}function Nf(s,e){return(s%e+e)%e}function y_(s,e,t,r,o){return r+(s-e)*(o-r)/(t-e)}function S_(s,e,t){return s!==e?(t-s)/(e-s):0}function no(s,e,t){return(1-t)*s+t*e}function M_(s,e,t,r){return no(s,e,1-Math.exp(-t*r))}function E_(s,e=1){return e-Math.abs(Nf(s,e*2)-e)}function w_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function b_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function T_(s,e){return s+Math.floor(Math.random()*(e-s+1))}function A_(s,e){return s+Math.random()*(e-s)}function R_(s){return s*(.5-Math.random())}function C_(s){s!==void 0&&(Im=s);let e=Im+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function N_(s){return s*$s}function P_(s){return s*oo}function I_(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function L_(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ug(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function D_(s,e,t,r,o){const l=Math.cos,u=Math.sin,h=l(t/2),p=u(t/2),m=l((e+r)/2),y=u((e+r)/2),S=l((e-r)/2),_=u((e-r)/2),E=l((r-e)/2),b=u((r-e)/2);switch(o){case"XYX":s.set(h*y,p*S,p*_,h*m);break;case"YZY":s.set(p*_,h*y,p*S,h*m);break;case"ZXZ":s.set(p*S,p*_,h*y,h*m);break;case"XZX":s.set(h*y,p*b,p*E,h*m);break;case"YXY":s.set(p*E,h*y,p*b,h*m);break;case"ZYZ":s.set(p*b,p*E,h*y,h*m);break;default:ct("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Pf(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function dg(s,e){if(e.constructor===Float32Array)return s;const t=Pf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function fg(s,e){if(e.constructor===Float32Array)return s;const t=Pf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const Lm={DEG2RAD:$s,RAD2DEG:oo,generateUUID:oa,clamp:Tt,euclideanModulo:Nf,mapLinear:y_,inverseLerp:S_,lerp:no,damp:M_,pingpong:E_,smoothstep:w_,smootherstep:b_,randInt:T_,randFloat:A_,randFloatSpread:R_,seededRandom:C_,degToRad:N_,radToDeg:P_,isPowerOfTwo:I_,ceilPowerOfTwo:L_,floorPowerOfTwo:ug,setQuaternionFromProperEuler:D_,normalize:fg,denormalize:dg},$f=class $f{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Tt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};$f.prototype.isVector2=!0;let St=$f;class la{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,h){let p=r[o+0],m=r[o+1],y=r[o+2],S=r[o+3],_=l[u+0],E=l[u+1],b=l[u+2],C=l[u+3];if(S!==C||p!==_||m!==E||y!==b){let x=p*_+m*E+y*b+S*C;x<0&&(_=-_,E=-E,b=-b,C=-C,x=-x);let v=1-h;if(x<.9995){const T=Math.acos(x),D=Math.sin(T);v=Math.sin(v*T)/D,h=Math.sin(h*T)/D,p=p*v+_*h,m=m*v+E*h,y=y*v+b*h,S=S*v+C*h}else{p=p*v+_*h,m=m*v+E*h,y=y*v+b*h,S=S*v+C*h;const T=1/Math.sqrt(p*p+m*m+y*y+S*S);p*=T,m*=T,y*=T,S*=T}}e[t]=p,e[t+1]=m,e[t+2]=y,e[t+3]=S}static multiplyQuaternionsFlat(e,t,r,o,l,u){const h=r[o],p=r[o+1],m=r[o+2],y=r[o+3],S=l[u],_=l[u+1],E=l[u+2],b=l[u+3];return e[t]=h*b+y*S+p*E-m*_,e[t+1]=p*b+y*_+m*S-h*E,e[t+2]=m*b+y*E+h*_-p*S,e[t+3]=y*b-h*S-p*_-m*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,h=Math.cos,p=Math.sin,m=h(r/2),y=h(o/2),S=h(l/2),_=p(r/2),E=p(o/2),b=p(l/2);switch(u){case"XYZ":this._x=_*y*S+m*E*b,this._y=m*E*S-_*y*b,this._z=m*y*b+_*E*S,this._w=m*y*S-_*E*b;break;case"YXZ":this._x=_*y*S+m*E*b,this._y=m*E*S-_*y*b,this._z=m*y*b-_*E*S,this._w=m*y*S+_*E*b;break;case"ZXY":this._x=_*y*S-m*E*b,this._y=m*E*S+_*y*b,this._z=m*y*b+_*E*S,this._w=m*y*S-_*E*b;break;case"ZYX":this._x=_*y*S-m*E*b,this._y=m*E*S+_*y*b,this._z=m*y*b-_*E*S,this._w=m*y*S+_*E*b;break;case"YZX":this._x=_*y*S+m*E*b,this._y=m*E*S+_*y*b,this._z=m*y*b-_*E*S,this._w=m*y*S-_*E*b;break;case"XZY":this._x=_*y*S-m*E*b,this._y=m*E*S-_*y*b,this._z=m*y*b+_*E*S,this._w=m*y*S+_*E*b;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],h=t[5],p=t[9],m=t[2],y=t[6],S=t[10],_=r+h+S;if(_>0){const E=.5/Math.sqrt(_+1);this._w=.25/E,this._x=(y-p)*E,this._y=(l-m)*E,this._z=(u-o)*E}else if(r>h&&r>S){const E=2*Math.sqrt(1+r-h-S);this._w=(y-p)/E,this._x=.25*E,this._y=(o+u)/E,this._z=(l+m)/E}else if(h>S){const E=2*Math.sqrt(1+h-r-S);this._w=(l-m)/E,this._x=(o+u)/E,this._y=.25*E,this._z=(p+y)/E}else{const E=2*Math.sqrt(1+S-r-h);this._w=(u-o)/E,this._x=(l+m)/E,this._y=(p+y)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,h=t._x,p=t._y,m=t._z,y=t._w;return this._x=r*y+u*h+o*m-l*p,this._y=o*y+u*p+l*h-r*m,this._z=l*y+u*m+r*p-o*h,this._w=u*y-r*h-o*p-l*m,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,h=this.dot(e);h<0&&(r=-r,o=-o,l=-l,u=-u,h=-h);let p=1-t;if(h<.9995){const m=Math.acos(h),y=Math.sin(m);p=Math.sin(p*m)/y,t=Math.sin(t*m)/y,this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+u*t,this._onChangeCallback()}else this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Kf=class Kf{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,h=e.z,p=e.w,m=2*(u*o-h*r),y=2*(h*t-l*o),S=2*(l*r-u*t);return this.x=t+p*m+u*S-h*y,this.y=r+p*y+h*m-l*S,this.z=o+p*S+l*y-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,h=t.y,p=t.z;return this.x=o*p-l*h,this.y=l*u-r*p,this.z=r*h-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return od.copy(this).projectOnVector(e),this.sub(od)}reflect(e){return this.sub(od.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Tt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Kf.prototype.isVector3=!0;let ie=Kf;const od=new ie,Dm=new la,Zf=class Zf{constructor(e,t,r,o,l,u,h,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,h,p,m)}set(e,t,r,o,l,u,h,p,m){const y=this.elements;return y[0]=e,y[1]=o,y[2]=h,y[3]=t,y[4]=l,y[5]=p,y[6]=r,y[7]=u,y[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],h=r[3],p=r[6],m=r[1],y=r[4],S=r[7],_=r[2],E=r[5],b=r[8],C=o[0],x=o[3],v=o[6],T=o[1],D=o[4],P=o[7],U=o[2],O=o[5],w=o[8];return l[0]=u*C+h*T+p*U,l[3]=u*x+h*D+p*O,l[6]=u*v+h*P+p*w,l[1]=m*C+y*T+S*U,l[4]=m*x+y*D+S*O,l[7]=m*v+y*P+S*w,l[2]=_*C+E*T+b*U,l[5]=_*x+E*D+b*O,l[8]=_*v+E*P+b*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],h=e[5],p=e[6],m=e[7],y=e[8];return t*u*y-t*h*m-r*l*y+r*h*p+o*l*m-o*u*p}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],h=e[5],p=e[6],m=e[7],y=e[8],S=y*u-h*m,_=h*p-y*l,E=m*l-u*p,b=t*S+r*_+o*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=S*C,e[1]=(o*m-y*r)*C,e[2]=(h*r-o*u)*C,e[3]=_*C,e[4]=(y*t-o*p)*C,e[5]=(o*l-h*t)*C,e[6]=E*C,e[7]=(r*p-m*t)*C,e[8]=(u*t-r*l)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,h){const p=Math.cos(l),m=Math.sin(l);return this.set(r*p,r*m,-r*(p*u+m*h)+u+e,-o*m,o*p,-o*(-m*u+p*h)+h+t,0,0,1),this}scale(e,t){return ec("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ld.makeScale(e,t)),this}rotate(e){return ec("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ld.makeRotation(-e)),this}translate(e,t){return ec("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ld.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Zf.prototype.isMatrix3=!0;let ft=Zf;const ld=new ft,Um=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Om=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function U_(){const s={enabled:!0,workingColorSpace:rc,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===zt&&(o.r=or(o.r),o.g=or(o.g),o.b=or(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===zt&&(o.r=Ks(o.r),o.g=Ks(o.g),o.b=Ks(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ur?sc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[u].fromXYZ).multiply(this.spaces[l].toXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[rc]:{primaries:e,whitePoint:r,transfer:sc,toXYZ:Um,fromXYZ:Om,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:e,whitePoint:r,transfer:zt,toXYZ:Um,fromXYZ:Om,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),s}const Nt=U_();function or(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ks(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Us;class O_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Us===void 0&&(Us=ac("canvas")),Us.width=e.width,Us.height=e.height;const o=Us.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Us}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ac("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=or(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(or(t[r]/255)*255):t[r]=or(t[r]);return{data:t,width:e.width,height:e.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let F_=0;class If{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:F_++}),this.uuid=oa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?l.push(cd(o[u].image)):l.push(cd(o[u]))}else l=cd(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function cd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?O_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}let k_=0;const ud=new ie;class On extends ls{constructor(e=On.DEFAULT_IMAGE,t=On.DEFAULT_MAPPING,r=sr,o=sr,l=qn,u=Or,h=zi,p=si,m=On.DEFAULT_ANISOTROPY,y=Ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=oa(),this.name="",this.source=new If(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=y,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ud).x}get height(){return this.source.getSize(ud).y}get depth(){return this.source.getSize(ud).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){ct(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ct(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==J0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bd:e.x=e.x-Math.floor(e.x);break;case sr:e.x=e.x<0?0:1;break;case zd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bd:e.y=e.y-Math.floor(e.y);break;case sr:e.y=e.y<0?0:1;break;case zd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=J0;On.DEFAULT_ANISOTROPY=1;const Jf=class Jf{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const p=e.elements,m=p[0],y=p[4],S=p[8],_=p[1],E=p[5],b=p[9],C=p[2],x=p[6],v=p[10];if(Math.abs(y-_)<.01&&Math.abs(S-C)<.01&&Math.abs(b-x)<.01){if(Math.abs(y+_)<.1&&Math.abs(S+C)<.1&&Math.abs(b+x)<.1&&Math.abs(m+E+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(m+1)/2,P=(E+1)/2,U=(v+1)/2,O=(y+_)/4,w=(S+C)/4,I=(b+x)/4;return D>P&&D>U?D<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(D),o=O/r,l=w/r):P>U?P<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(P),r=O/o,l=I/o):U<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(U),r=w/l,o=I/l),this.set(r,o,l,t),this}let T=Math.sqrt((x-b)*(x-b)+(S-C)*(S-C)+(_-y)*(_-y));return Math.abs(T)<.001&&(T=1),this.x=(x-b)/T,this.y=(S-C)/T,this.z=(_-y)/T,this.w=Math.acos((m+E+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this.w=Tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this.w=Tt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Jf.prototype.isVector4=!0;let tn=Jf;class B_ extends ls{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new tn(0,0,e,t),this.scissorTest=!1,this.viewport=new tn(0,0,e,t),this.textures=[];const o=r.count;for(let l=0;l<o;l++)this.textures[l]=new On({width:e,height:t,depth:r.depth}),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:qn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new If(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends B_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class hg extends On{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class z_ extends On{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const pc=class pc{constructor(e,t,r,o,l,u,h,p,m,y,S,_,E,b,C,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,h,p,m,y,S,_,E,b,C,x)}set(e,t,r,o,l,u,h,p,m,y,S,_,E,b,C,x){const v=this.elements;return v[0]=e,v[4]=t,v[8]=r,v[12]=o,v[1]=l,v[5]=u,v[9]=h,v[13]=p,v[2]=m,v[6]=y,v[10]=S,v[14]=_,v[3]=E,v[7]=b,v[11]=C,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Os.setFromMatrixColumn(e,0).length(),l=1/Os.setFromMatrixColumn(e,1).length(),u=1/Os.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),h=Math.sin(r),p=Math.cos(o),m=Math.sin(o),y=Math.cos(l),S=Math.sin(l);if(e.order==="XYZ"){const _=u*y,E=u*S,b=h*y,C=h*S;t[0]=p*y,t[4]=-p*S,t[8]=m,t[1]=E+b*m,t[5]=_-C*m,t[9]=-h*p,t[2]=C-_*m,t[6]=b+E*m,t[10]=u*p}else if(e.order==="YXZ"){const _=p*y,E=p*S,b=m*y,C=m*S;t[0]=_+C*h,t[4]=b*h-E,t[8]=u*m,t[1]=u*S,t[5]=u*y,t[9]=-h,t[2]=E*h-b,t[6]=C+_*h,t[10]=u*p}else if(e.order==="ZXY"){const _=p*y,E=p*S,b=m*y,C=m*S;t[0]=_-C*h,t[4]=-u*S,t[8]=b+E*h,t[1]=E+b*h,t[5]=u*y,t[9]=C-_*h,t[2]=-u*m,t[6]=h,t[10]=u*p}else if(e.order==="ZYX"){const _=u*y,E=u*S,b=h*y,C=h*S;t[0]=p*y,t[4]=b*m-E,t[8]=_*m+C,t[1]=p*S,t[5]=C*m+_,t[9]=E*m-b,t[2]=-m,t[6]=h*p,t[10]=u*p}else if(e.order==="YZX"){const _=u*p,E=u*m,b=h*p,C=h*m;t[0]=p*y,t[4]=C-_*S,t[8]=b*S+E,t[1]=S,t[5]=u*y,t[9]=-h*y,t[2]=-m*y,t[6]=E*S+b,t[10]=_-C*S}else if(e.order==="XZY"){const _=u*p,E=u*m,b=h*p,C=h*m;t[0]=p*y,t[4]=-S,t[8]=m*y,t[1]=_*S+C,t[5]=u*y,t[9]=E*S-b,t[2]=b*S-E,t[6]=h*y,t[10]=C*S+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(G_,e,H_)}lookAt(e,t,r){const o=this.elements;return ti.subVectors(e,t),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Rr.crossVectors(r,ti),Rr.lengthSq()===0&&(Math.abs(r.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Rr.crossVectors(r,ti)),Rr.normalize(),yl.crossVectors(ti,Rr),o[0]=Rr.x,o[4]=yl.x,o[8]=ti.x,o[1]=Rr.y,o[5]=yl.y,o[9]=ti.y,o[2]=Rr.z,o[6]=yl.z,o[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],h=r[4],p=r[8],m=r[12],y=r[1],S=r[5],_=r[9],E=r[13],b=r[2],C=r[6],x=r[10],v=r[14],T=r[3],D=r[7],P=r[11],U=r[15],O=o[0],w=o[4],I=o[8],$=o[12],z=o[1],K=o[5],ee=o[9],de=o[13],V=o[2],oe=o[6],Q=o[10],Y=o[14],j=o[3],q=o[7],L=o[11],M=o[15];return l[0]=u*O+h*z+p*V+m*j,l[4]=u*w+h*K+p*oe+m*q,l[8]=u*I+h*ee+p*Q+m*L,l[12]=u*$+h*de+p*Y+m*M,l[1]=y*O+S*z+_*V+E*j,l[5]=y*w+S*K+_*oe+E*q,l[9]=y*I+S*ee+_*Q+E*L,l[13]=y*$+S*de+_*Y+E*M,l[2]=b*O+C*z+x*V+v*j,l[6]=b*w+C*K+x*oe+v*q,l[10]=b*I+C*ee+x*Q+v*L,l[14]=b*$+C*de+x*Y+v*M,l[3]=T*O+D*z+P*V+U*j,l[7]=T*w+D*K+P*oe+U*q,l[11]=T*I+D*ee+P*Q+U*L,l[15]=T*$+D*de+P*Y+U*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],h=e[5],p=e[9],m=e[13],y=e[2],S=e[6],_=e[10],E=e[14],b=e[3],C=e[7],x=e[11],v=e[15],T=p*E-m*_,D=h*E-m*S,P=h*_-p*S,U=u*E-m*y,O=u*_-p*y,w=u*S-h*y;return t*(C*T-x*D+v*P)-r*(b*T-x*U+v*O)+o*(b*D-C*U+v*w)-l*(b*P-C*O+x*w)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[1],u=e[5],h=e[9],p=e[2],m=e[6],y=e[10];return t*(u*y-h*m)-r*(l*y-h*p)+o*(l*m-u*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],h=e[5],p=e[6],m=e[7],y=e[8],S=e[9],_=e[10],E=e[11],b=e[12],C=e[13],x=e[14],v=e[15],T=t*h-r*u,D=t*p-o*u,P=t*m-l*u,U=r*p-o*h,O=r*m-l*h,w=o*m-l*p,I=y*C-S*b,$=y*x-_*b,z=y*v-E*b,K=S*x-_*C,ee=S*v-E*C,de=_*v-E*x,V=T*de-D*ee+P*K+U*z-O*$+w*I;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const oe=1/V;return e[0]=(h*de-p*ee+m*K)*oe,e[1]=(o*ee-r*de-l*K)*oe,e[2]=(C*w-x*O+v*U)*oe,e[3]=(_*O-S*w-E*U)*oe,e[4]=(p*z-u*de-m*$)*oe,e[5]=(t*de-o*z+l*$)*oe,e[6]=(x*P-b*w-v*D)*oe,e[7]=(y*w-_*P+E*D)*oe,e[8]=(u*ee-h*z+m*I)*oe,e[9]=(r*z-t*ee-l*I)*oe,e[10]=(b*O-C*P+v*T)*oe,e[11]=(S*P-y*O-E*T)*oe,e[12]=(h*$-u*K-p*I)*oe,e[13]=(t*K-r*$+o*I)*oe,e[14]=(C*D-b*U-x*T)*oe,e[15]=(y*U-S*D+_*T)*oe,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,h=e.y,p=e.z,m=l*u,y=l*h;return this.set(m*u+r,m*h-o*p,m*p+o*h,0,m*h+o*p,y*h+r,y*p-o*u,0,m*p-o*h,y*p+o*u,l*p*p+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,h=t._z,p=t._w,m=l+l,y=u+u,S=h+h,_=l*m,E=l*y,b=l*S,C=u*y,x=u*S,v=h*S,T=p*m,D=p*y,P=p*S,U=r.x,O=r.y,w=r.z;return o[0]=(1-(C+v))*U,o[1]=(E+P)*U,o[2]=(b-D)*U,o[3]=0,o[4]=(E-P)*O,o[5]=(1-(_+v))*O,o[6]=(x+T)*O,o[7]=0,o[8]=(b+D)*w,o[9]=(x-T)*w,o[10]=(1-(_+C))*w,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let u=Os.set(o[0],o[1],o[2]).length();const h=Os.set(o[4],o[5],o[6]).length(),p=Os.set(o[8],o[9],o[10]).length();l<0&&(u=-u),wi.copy(this);const m=1/u,y=1/h,S=1/p;return wi.elements[0]*=m,wi.elements[1]*=m,wi.elements[2]*=m,wi.elements[4]*=y,wi.elements[5]*=y,wi.elements[6]*=y,wi.elements[8]*=S,wi.elements[9]*=S,wi.elements[10]*=S,t.setFromRotationMatrix(wi),r.x=u,r.y=h,r.z=p,this}makePerspective(e,t,r,o,l,u,h=Ai,p=!1){const m=this.elements,y=2*l/(t-e),S=2*l/(r-o),_=(t+e)/(t-e),E=(r+o)/(r-o);let b,C;if(p)b=l/(u-l),C=u*l/(u-l);else if(h===Ai)b=-(u+l)/(u-l),C=-2*u*l/(u-l);else if(h===ao)b=-u/(u-l),C=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=y,m[4]=0,m[8]=_,m[12]=0,m[1]=0,m[5]=S,m[9]=E,m[13]=0,m[2]=0,m[6]=0,m[10]=b,m[14]=C,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,r,o,l,u,h=Ai,p=!1){const m=this.elements,y=2/(t-e),S=2/(r-o),_=-(t+e)/(t-e),E=-(r+o)/(r-o);let b,C;if(p)b=1/(u-l),C=u/(u-l);else if(h===Ai)b=-2/(u-l),C=-(u+l)/(u-l);else if(h===ao)b=-1/(u-l),C=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=y,m[4]=0,m[8]=0,m[12]=_,m[1]=0,m[5]=S,m[9]=0,m[13]=E,m[2]=0,m[6]=0,m[10]=b,m[14]=C,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};pc.prototype.isMatrix4=!0;let Wt=pc;const Os=new ie,wi=new Wt,G_=new ie(0,0,0),H_=new ie(1,1,1),Rr=new ie,yl=new ie,ti=new ie,Fm=new Wt,km=new la;class Br{constructor(e=0,t=0,r=0,o=Br.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],h=o[8],p=o[1],m=o[5],y=o[9],S=o[2],_=o[6],E=o[10];switch(t){case"XYZ":this._y=Math.asin(Tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-y,E),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(_,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(h,E),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-S,l),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-S,E),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Tt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(_,E),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(Tt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-y,m),this._y=Math.atan2(-S,l)):(this._x=0,this._y=Math.atan2(h,E));break;case"XZY":this._z=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,m),this._y=Math.atan2(h,l)):(this._x=Math.atan2(-y,E),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Fm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return km.setFromEuler(this),this.setFromQuaternion(km,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Br.DEFAULT_ORDER="XYZ";let pg=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},V_=0;const Bm=new ie,Fs=new la,Qi=new Wt,Sl=new ie,Ya=new ie,j_=new ie,W_=new la,zm=new ie(1,0,0),Gm=new ie(0,1,0),Hm=new ie(0,0,1),Vm={type:"added"},X_={type:"removed"},ks={type:"childadded",child:null},dd={type:"childremoved",child:null};class bn extends ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=oa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const e=new ie,t=new Br,r=new la,o=new ie(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Wt},normalMatrix:{value:new ft}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(zm,e)}rotateY(e){return this.rotateOnAxis(Gm,e)}rotateZ(e){return this.rotateOnAxis(Hm,e)}translateOnAxis(e,t){return Bm.copy(e).applyQuaternion(this.quaternion),this.position.add(Bm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zm,e)}translateY(e){return this.translateOnAxis(Gm,e)}translateZ(e){return this.translateOnAxis(Hm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Sl.copy(e):Sl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ya.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Ya,Sl,this.up):Qi.lookAt(Sl,Ya,this.up),this.quaternion.setFromRotationMatrix(Qi),o&&(Qi.extractRotation(o.matrixWorld),Fs.setFromRotationMatrix(Qi),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vm),ks.child=e,this.dispatchEvent(ks),ks.child=null):Ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(X_),dd.child=e,this.dispatchEvent(dd),dd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vm),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ya,e,j_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ya,W_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,y=p.length;m<y;m++){const S=p[m];l(e.shapes,S)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(l(e.materials,this.material[p]));o.material=h}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];o.animations.push(l(e.animations,p))}}if(t){const h=u(e.geometries),p=u(e.materials),m=u(e.textures),y=u(e.images),S=u(e.shapes),_=u(e.skeletons),E=u(e.animations),b=u(e.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),y.length>0&&(r.images=y),S.length>0&&(r.shapes=S),_.length>0&&(r.skeletons=_),E.length>0&&(r.animations=E),b.length>0&&(r.nodes=b)}return r.object=o,r;function u(h){const p=[];for(const m in h){const y=h[m];delete y.metadata,p.push(y)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}bn.DEFAULT_UP=new ie(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Gi extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Y_={type:"move"};class fd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const C of e.hand.values()){const x=t.getJointPose(C,r),v=this._getHandJoint(m,C);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const y=m.joints["index-finger-tip"],S=m.joints["thumb-tip"],_=y.position.distanceTo(S.position),E=.02,b=.005;m.inputState.pinching&&_>E+b?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&_<=E-b&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Y_)))}return h!==null&&(h.visible=o!==null),p!==null&&(p.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Gi;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const mg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cr={h:0,s:0,l:0},Ml={h:0,s:0,l:0};function hd(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class At{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Nt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Nt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Nt.workingColorSpace){if(e=Nf(e,1),t=Tt(t,0,1),r=Tt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=hd(u,l,e+1/3),this.g=hd(u,l,e),this.b=hd(u,l,e-1/3)}return Nt.colorSpaceToWorking(this,o),this}setStyle(e,t=hi){function r(l){l!==void 0&&parseFloat(l)<1&&ct("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(h))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(h))return r(l[4]),this.setRGB(Math.min(100,parseFloat(l[1]))/100,Math.min(100,parseFloat(l[2]))/100,Math.min(100,parseFloat(l[3]))/100,t);break;case"hsl":case"hsla":if(l=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(h))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:ct("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);ct("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hi){const r=mg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):ct("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}copyLinearToSRGB(e){return this.r=Ks(e.r),this.g=Ks(e.g),this.b=Ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return Nt.workingToColorSpace(Un.copy(this),e),Math.round(Tt(Un.r*255,0,255))*65536+Math.round(Tt(Un.g*255,0,255))*256+Math.round(Tt(Un.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Nt.workingColorSpace){Nt.workingToColorSpace(Un.copy(this),t);const r=Un.r,o=Un.g,l=Un.b,u=Math.max(r,o,l),h=Math.min(r,o,l);let p,m;const y=(h+u)/2;if(h===u)p=0,m=0;else{const S=u-h;switch(m=y<=.5?S/(u+h):S/(2-u-h),u){case r:p=(o-l)/S+(o<l?6:0);break;case o:p=(l-r)/S+2;break;case l:p=(r-o)/S+4;break}p/=6}return e.h=p,e.s=m,e.l=y,e}getRGB(e,t=Nt.workingColorSpace){return Nt.workingToColorSpace(Un.copy(this),t),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=hi){Nt.workingToColorSpace(Un.copy(this),e);const t=Un.r,r=Un.g,o=Un.b;return e!==hi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Cr),this.setHSL(Cr.h+e,Cr.s+t,Cr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Cr),e.getHSL(Ml);const r=no(Cr.h,Ml.h,t),o=no(Cr.s,Ml.s,t),l=no(Cr.l,Ml.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new At;At.NAMES=mg;class Lf{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new At(e),this.density=t}clone(){return new Lf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Df extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Br,this.environmentIntensity=1,this.environmentRotation=new Br,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const bi=new ie,er=new ie,pd=new ie,tr=new ie,Bs=new ie,zs=new ie,jm=new ie,md=new ie,gd=new ie,xd=new ie,vd=new tn,_d=new tn,yd=new tn;class mi{constructor(e=new ie,t=new ie,r=new ie){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),bi.subVectors(e,t),o.cross(bi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){bi.subVectors(o,t),er.subVectors(r,t),pd.subVectors(e,t);const u=bi.dot(bi),h=bi.dot(er),p=bi.dot(pd),m=er.dot(er),y=er.dot(pd),S=u*m-h*h;if(S===0)return l.set(0,0,0),null;const _=1/S,E=(m*p-h*y)*_,b=(u*y-h*p)*_;return l.set(1-E-b,b,E)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,tr)===null?!1:tr.x>=0&&tr.y>=0&&tr.x+tr.y<=1}static getInterpolation(e,t,r,o,l,u,h,p){return this.getBarycoord(e,t,r,o,tr)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,tr.x),p.addScaledVector(u,tr.y),p.addScaledVector(h,tr.z),p)}static getInterpolatedAttribute(e,t,r,o,l,u){return vd.setScalar(0),_d.setScalar(0),yd.setScalar(0),vd.fromBufferAttribute(e,t),_d.fromBufferAttribute(e,r),yd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(vd,l.x),u.addScaledVector(_d,l.y),u.addScaledVector(yd,l.z),u}static isFrontFacing(e,t,r,o){return bi.subVectors(r,t),er.subVectors(e,t),bi.cross(er).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),er.subVectors(this.a,this.b),bi.cross(er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return mi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,h;Bs.subVectors(o,r),zs.subVectors(l,r),md.subVectors(e,r);const p=Bs.dot(md),m=zs.dot(md);if(p<=0&&m<=0)return t.copy(r);gd.subVectors(e,o);const y=Bs.dot(gd),S=zs.dot(gd);if(y>=0&&S<=y)return t.copy(o);const _=p*S-y*m;if(_<=0&&p>=0&&y<=0&&p-y>0)return u=p/(p-y),t.copy(r).addScaledVector(Bs,u);xd.subVectors(e,l);const E=Bs.dot(xd),b=zs.dot(xd);if(b>=0&&E<=b)return t.copy(l);const C=E*m-p*b;if(C<=0&&m>=0&&b<=0)return h=m/(m-b),t.copy(r).addScaledVector(zs,h);const x=y*b-E*S;if(x<=0&&S-y>=0&&E-b>=0)return jm.subVectors(l,o),h=(S-y)/(S-y+(E-b)),t.copy(o).addScaledVector(jm,h);const v=1/(x+C+_);return u=C*v,h=_*v,t.copy(r).addScaledVector(Bs,u).addScaledVector(zs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class uo{constructor(e=new ie(1/0,1/0,1/0),t=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let u=0,h=l.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,Ti):Ti.fromBufferAttribute(l,u),Ti.applyMatrix4(e.matrixWorld),this.expandByPoint(Ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),El.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),El.copy(r.boundingBox)),El.applyMatrix4(e.matrixWorld),this.union(El)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qa),wl.subVectors(this.max,qa),Gs.subVectors(e.a,qa),Hs.subVectors(e.b,qa),Vs.subVectors(e.c,qa),Nr.subVectors(Hs,Gs),Pr.subVectors(Vs,Hs),ts.subVectors(Gs,Vs);let t=[0,-Nr.z,Nr.y,0,-Pr.z,Pr.y,0,-ts.z,ts.y,Nr.z,0,-Nr.x,Pr.z,0,-Pr.x,ts.z,0,-ts.x,-Nr.y,Nr.x,0,-Pr.y,Pr.x,0,-ts.y,ts.x,0];return!Sd(t,Gs,Hs,Vs,wl)||(t=[1,0,0,0,1,0,0,0,1],!Sd(t,Gs,Hs,Vs,wl))?!1:(bl.crossVectors(Nr,Pr),t=[bl.x,bl.y,bl.z],Sd(t,Gs,Hs,Vs,wl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const nr=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],Ti=new ie,El=new uo,Gs=new ie,Hs=new ie,Vs=new ie,Nr=new ie,Pr=new ie,ts=new ie,qa=new ie,wl=new ie,bl=new ie,ns=new ie;function Sd(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){ns.fromArray(s,l);const h=o.x*Math.abs(ns.x)+o.y*Math.abs(ns.y)+o.z*Math.abs(ns.z),p=e.dot(ns),m=t.dot(ns),y=r.dot(ns);if(Math.max(-Math.max(p,m,y),Math.min(p,m,y))>h)return!1}return!0}const dn=new ie,Tl=new St;let q_=0;class gi extends ls{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:q_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=m_,this.updateRanges=[],this.gpuType=Bi,this.version=0,this._normalizationScale=e!==void 0?Pf(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Tl.fromBufferAttribute(this,t),Tl.applyMatrix3(e),this.setXY(t,Tl.x,Tl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix3(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,t,r){return this.normalized&&(r=this._normalize(r)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o),l=this._normalize(l)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):dg(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):fg(e,this.array)}}class gg extends gi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class xg extends gi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class $t extends gi{constructor(e,t,r){super(new Float32Array(e),t,r)}}const $_=new uo,$a=new ie,Md=new ie;class fo{constructor(e=new ie,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):$_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$a.subVectors(e,this.center);const t=$a.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector($a,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Md.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($a.copy(e.center).add(Md)),this.expandByPoint($a.copy(e.center).sub(Md))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let K_=0;const fi=new Wt,Ed=new bn,js=new ie,ni=new uo,Ka=new uo,wn=new ie;class xn extends ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=oa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(g_(e)?xg:gg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ft().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,t,r){return fi.makeTranslation(e,t,r),this.applyMatrix4(fi),this}scale(e,t,r){return fi.makeScale(e,t,r),this.applyMatrix4(fi),this}lookAt(e){return Ed.lookAt(e),Ed.updateMatrix(),this.applyMatrix4(Ed.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new $t(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new uo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];ni.setFromBufferAttribute(l),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const r=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const h=t[l];Ka.setFromBufferAttribute(h),this.morphTargetsRelative?(wn.addVectors(ni.min,Ka.min),ni.expandByPoint(wn),wn.addVectors(ni.max,Ka.max),ni.expandByPoint(wn)):(ni.expandByPoint(Ka.min),ni.expandByPoint(Ka.max))}ni.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)wn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(wn));if(t)for(let l=0,u=t.length;l<u;l++){const h=t[l],p=this.morphTargetsRelative;for(let m=0,y=h.count;m<y;m++)wn.fromBufferAttribute(h,m),p&&(js.fromBufferAttribute(e,m),wn.add(js)),o=Math.max(o,r.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new gi(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const h=[],p=[],m=new Uint8Array(r.count);for(let $=0;$<r.count;$++)h[$]=new ie,p[$]=new ie;const y=new ie,S=new ie,_=new ie,E=new St,b=new St,C=new St,x=new ie,v=new ie;function T($,z,K){m[$]=m[z]=m[K]=1,y.fromBufferAttribute(r,$),S.fromBufferAttribute(r,z),_.fromBufferAttribute(r,K),E.fromBufferAttribute(l,$),b.fromBufferAttribute(l,z),C.fromBufferAttribute(l,K),S.sub(y),_.sub(y),b.sub(E),C.sub(E);const ee=1/(b.x*C.y-C.x*b.y);isFinite(ee)&&(x.copy(S).multiplyScalar(C.y).addScaledVector(_,-b.y).multiplyScalar(ee),v.copy(_).multiplyScalar(b.x).addScaledVector(S,-C.x).multiplyScalar(ee),h[$].add(x),h[z].add(x),h[K].add(x),p[$].add(v),p[z].add(v),p[K].add(v))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let $=0,z=D.length;$<z;++$){const K=D[$],ee=K.start,de=K.count;for(let V=ee,oe=ee+de;V<oe;V+=3)T(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const P=new ie,U=new ie,O=new ie,w=new ie;function I($){O.fromBufferAttribute(o,$),w.copy(O);const z=h[$];P.copy(z),P.sub(O.multiplyScalar(O.dot(z))).normalize(),U.crossVectors(w,z);const ee=U.dot(p[$])<0?-1:1;u.setXYZW($,P.x,P.y,P.z,ee)}for(let $=0,z=r.count;$<z;++$)m[$]&&I($);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new gi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let _=0,E=r.count;_<E;_++)r.setXYZ(_,0,0,0);const o=new ie,l=new ie,u=new ie,h=new ie,p=new ie,m=new ie,y=new ie,S=new ie;if(e)for(let _=0,E=e.count;_<E;_+=3){const b=e.getX(_+0),C=e.getX(_+1),x=e.getX(_+2);o.fromBufferAttribute(t,b),l.fromBufferAttribute(t,C),u.fromBufferAttribute(t,x),y.subVectors(u,l),S.subVectors(o,l),y.cross(S),h.fromBufferAttribute(r,b),p.fromBufferAttribute(r,C),m.fromBufferAttribute(r,x),h.add(y),p.add(y),m.add(y),r.setXYZ(b,h.x,h.y,h.z),r.setXYZ(C,p.x,p.y,p.z),r.setXYZ(x,m.x,m.y,m.z)}else for(let _=0,E=t.count;_<E;_+=3)o.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),y.subVectors(u,l),S.subVectors(o,l),y.cross(S),r.setXYZ(_+0,y.x,y.y,y.z),r.setXYZ(_+1,y.x,y.y,y.z),r.setXYZ(_+2,y.x,y.y,y.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)wn.fromBufferAttribute(e,t),wn.normalize(),e.setXYZ(t,wn.x,wn.y,wn.z)}toNonIndexed(){function e(h,p){const m=h.array,y=h.itemSize,S=h.normalized,_=new m.constructor(p.length*y);let E=0,b=0;for(let C=0,x=p.length;C<x;C++){h.isInterleavedBufferAttribute?E=p[C]*h.data.stride+h.offset:E=p[C]*y;for(let v=0;v<y;v++)_[b++]=m[E++]}return new gi(_,y,S)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xn,r=this.index.array,o=this.attributes;for(const h in o){const p=o[h],m=e(p,r);t.setAttribute(h,m)}const l=this.morphAttributes;for(const h in l){const p=[],m=l[h];for(let y=0,S=m.length;y<S;y++){const _=m[y],E=e(_,r);p.push(E)}t.morphAttributes[h]=p}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,p=u.length;h<p;h++){const m=u[h];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],y=[];for(let S=0,_=m.length;S<_;S++){const E=m[S];y.push(E.toJSON(e.data))}y.length>0&&(o[p]=y,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const y=o[m];this.setAttribute(m,y.clone(t))}const l=e.morphAttributes;for(const m in l){const y=[],S=l[m];for(let _=0,E=S.length;_<E;_++)y.push(S[_].clone(t));this.morphAttributes[m]=y}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,y=u.length;m<y;m++){const S=u[m];this.addGroup(S.start,S.count,S.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wd=new ie,Z_=new ie,J_=new ft;class Lr{constructor(e=new ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=wd.subVectors(r,t).cross(Z_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(wd),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||J_.getNormalMatrix(e),o=this.coplanarPoint(wd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Q_=0;class cs extends ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=oa(),this.name="",this.type="Material",this.blending=to,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=V0,this.blendDst=j0,this.blendEquation=Ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=c_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ad,this.stencilZFail=ad,this.stencilZPass=ad,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){ct(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ct(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(r.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(r.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(r.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(r.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const h in l){const p=l[h];delete p.metadata,u.push(p)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new At().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Lr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new St().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new St().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ir=new ie,bd=new ie,Al=new ie,Rl=new ie;class Uf{constructor(e=new ie,t=new ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ir)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ir.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ir.copy(this.origin).addScaledVector(this.direction,t),ir.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){bd.copy(e).add(t).multiplyScalar(.5),Al.copy(t).sub(e).normalize(),Rl.copy(this.origin).sub(bd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Al),h=Rl.dot(this.direction),p=-Rl.dot(Al),m=Rl.lengthSq(),y=Math.abs(1-u*u);let S,_,E,b;if(y>0)if(S=u*p-h,_=u*h-p,b=l*y,S>=0)if(_>=-b)if(_<=b){const C=1/y;S*=C,_*=C,E=S*(S+u*_+2*h)+_*(u*S+_+2*p)+m}else _=l,S=Math.max(0,-(u*_+h)),E=-S*S+_*(_+2*p)+m;else _=-l,S=Math.max(0,-(u*_+h)),E=-S*S+_*(_+2*p)+m;else _<=-b?(S=Math.max(0,-(-u*l+h)),_=S>0?-l:Math.min(Math.max(-l,-p),l),E=-S*S+_*(_+2*p)+m):_<=b?(S=0,_=Math.min(Math.max(-l,-p),l),E=_*(_+2*p)+m):(S=Math.max(0,-(u*l+h)),_=S>0?l:Math.min(Math.max(-l,-p),l),E=-S*S+_*(_+2*p)+m);else _=u>0?-l:l,S=Math.max(0,-(u*_+h)),E=-S*S+_*(_+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,S),o&&o.copy(bd).addScaledVector(Al,_),E}intersectSphere(e,t){if(e.radius<0)return null;ir.subVectors(e.center,this.origin);const r=ir.dot(this.direction),o=ir.dot(ir)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),h=r-u,p=r+u;return p<0?null:h<0?this.at(p,t):this.at(h,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,h,p;const m=1/this.direction.x,y=1/this.direction.y,S=1/this.direction.z,_=this.origin;return m>=0?(r=(e.min.x-_.x)*m,o=(e.max.x-_.x)*m):(r=(e.max.x-_.x)*m,o=(e.min.x-_.x)*m),y>=0?(l=(e.min.y-_.y)*y,u=(e.max.y-_.y)*y):(l=(e.max.y-_.y)*y,u=(e.min.y-_.y)*y),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),S>=0?(h=(e.min.z-_.z)*S,p=(e.max.z-_.z)*S):(h=(e.max.z-_.z)*S,p=(e.min.z-_.z)*S),r>p||h>o)||((h>r||r!==r)&&(r=h),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,ir)!==null}intersectTriangle(e,t,r,o,l){const u=this.origin,h=this.direction,p=h.x,m=h.y,y=h.z,S=e.x-u.x,_=e.y-u.y,E=e.z-u.z,b=t.x-u.x,C=t.y-u.y,x=t.z-u.z,v=r.x-u.x,T=r.y-u.y,D=r.z-u.z,P=Math.abs(p),U=Math.abs(m),O=Math.abs(y);let w,I,$,z,K,ee,de,V,oe,Q,Y,j;if(P>=U&&P>=O?($=p,ee=S,oe=b,j=v,p>=0?(w=m,I=y,z=_,K=E,de=C,V=x,Q=T,Y=D):(w=y,I=m,z=E,K=_,de=x,V=C,Q=D,Y=T)):U>=O?($=m,ee=_,oe=C,j=T,m>=0?(w=y,I=p,z=E,K=S,de=x,V=b,Q=D,Y=v):(w=p,I=y,z=S,K=E,de=b,V=x,Q=v,Y=D)):($=y,ee=E,oe=x,j=D,y>=0?(w=p,I=m,z=S,K=_,de=b,V=C,Q=v,Y=T):(w=m,I=p,z=_,K=S,de=C,V=b,Q=T,Y=v)),$===0)return null;const q=w/$,L=I/$,M=1/$,H=z-q*ee,xe=K-L*ee,G=de-q*oe,te=V-L*oe,fe=Q-q*j,ge=Y-L*j,he=fe*te-ge*G,Ee=H*ge-xe*fe,et=G*xe-te*H;if(o){if(he<0||Ee<0||et<0)return null}else if((he<0||Ee<0||et<0)&&(he>0||Ee>0||et>0))return null;const Ue=he+Ee+et;if(Ue===0)return null;const tt=M*(he*ee+Ee*oe+et*j);return(Ue>0?tt<0:tt>0)?null:this.at(tt/Ue,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ri extends cs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Br,this.combine=W0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wm=new Wt,is=new Uf,Cl=new fo,Xm=new ie,Nl=new ie,Pl=new ie,Il=new ie,Td=new ie,Ll=new ie,Ym=new ie,Dl=new ie;class yt extends bn{constructor(e=new xn,t=new ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const h=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(l&&h){Ll.set(0,0,0);for(let p=0,m=l.length;p<m;p++){const y=h[p],S=l[p];y!==0&&(Td.fromBufferAttribute(S,e),u?Ll.addScaledVector(Td,y):Ll.addScaledVector(Td.sub(t),y))}t.add(Ll)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Cl.copy(r.boundingSphere),Cl.applyMatrix4(l),is.copy(e.ray).recast(e.near),!(Cl.containsPoint(is.origin)===!1&&(is.intersectSphere(Cl,Xm)===null||is.origin.distanceToSquared(Xm)>(e.far-e.near)**2))&&(Wm.copy(l).invert(),is.copy(e.ray).applyMatrix4(Wm),!(r.boundingBox!==null&&is.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,is)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,h=l.index,p=l.attributes.position,m=l.attributes.uv,y=l.attributes.uv1,S=l.attributes.normal,_=l.groups,E=l.drawRange;if(h!==null)if(Array.isArray(u))for(let b=0,C=_.length;b<C;b++){const x=_[b],v=u[x.materialIndex],T=Math.max(x.start,E.start),D=Math.min(h.count,Math.min(x.start+x.count,E.start+E.count));for(let P=T,U=D;P<U;P+=3){const O=h.getX(P),w=h.getX(P+1),I=h.getX(P+2);o=Ul(this,v,e,r,m,y,S,O,w,I),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const b=Math.max(0,E.start),C=Math.min(h.count,E.start+E.count);for(let x=b,v=C;x<v;x+=3){const T=h.getX(x),D=h.getX(x+1),P=h.getX(x+2);o=Ul(this,u,e,r,m,y,S,T,D,P),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let b=0,C=_.length;b<C;b++){const x=_[b],v=u[x.materialIndex],T=Math.max(x.start,E.start),D=Math.min(p.count,Math.min(x.start+x.count,E.start+E.count));for(let P=T,U=D;P<U;P+=3){const O=P,w=P+1,I=P+2;o=Ul(this,v,e,r,m,y,S,O,w,I),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const b=Math.max(0,E.start),C=Math.min(p.count,E.start+E.count);for(let x=b,v=C;x<v;x+=3){const T=x,D=x+1,P=x+2;o=Ul(this,u,e,r,m,y,S,T,D,P),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function ey(s,e,t,r,o,l,u,h){let p;if(e.side===$n?p=r.intersectTriangle(u,l,o,!0,h):p=r.intersectTriangle(o,l,u,e.side===ss,h),p===null)return null;Dl.copy(h),Dl.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(Dl);return m<t.near||m>t.far?null:{distance:m,point:Dl.clone(),object:s}}function Ul(s,e,t,r,o,l,u,h,p,m){s.getVertexPosition(h,Nl),s.getVertexPosition(p,Pl),s.getVertexPosition(m,Il);const y=ey(s,e,t,r,Nl,Pl,Il,Ym);if(y){const S=new ie;mi.getBarycoord(Ym,Nl,Pl,Il,S),o&&(y.uv=mi.getInterpolatedAttribute(o,h,p,m,S,new St)),l&&(y.uv1=mi.getInterpolatedAttribute(l,h,p,m,S,new St)),u&&(y.normal=mi.getInterpolatedAttribute(u,h,p,m,S,new ie),y.normal.dot(r.direction)>0&&y.normal.multiplyScalar(-1));const _={a:h,b:p,c:m,normal:new ie,materialIndex:0};mi.getNormal(Nl,Pl,Il,_.normal),y.face=_,y.barycoord=S}return y}class ty extends On{constructor(e=null,t=1,r=1,o,l,u,h,p,m=Rn,y=Rn,S,_){super(null,u,h,p,m,y,o,l,S,_),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rs=new fo,ny=new St(.5,.5),Ol=new ie;class lo{constructor(e=new Lr,t=new Lr,r=new Lr,o=new Lr,l=new Lr,u=new Lr){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(r),h[3].copy(o),h[4].copy(l),h[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ai,r=!1){const o=this.planes,l=e.elements,u=l[0],h=l[1],p=l[2],m=l[3],y=l[4],S=l[5],_=l[6],E=l[7],b=l[8],C=l[9],x=l[10],v=l[11],T=l[12],D=l[13],P=l[14],U=l[15];if(o[0].setComponents(m-u,E-y,v-b,U-T).normalize(),o[1].setComponents(m+u,E+y,v+b,U+T).normalize(),o[2].setComponents(m+h,E+S,v+C,U+D).normalize(),o[3].setComponents(m-h,E-S,v-C,U-D).normalize(),r)o[4].setComponents(p,_,x,P).normalize(),o[5].setComponents(m-p,E-_,v-x,U-P).normalize();else if(o[4].setComponents(m-p,E-_,v-x,U-P).normalize(),t===Ai)o[5].setComponents(m+p,E+_,v+x,U+P).normalize();else if(t===ao)o[5].setComponents(p,_,x,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(e){rs.center.set(0,0,0);const t=ny.distanceTo(e.center);return rs.radius=.7071067811865476+t,rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Ol.x=o.normal.x>0?e.max.x:e.min.x,Ol.y=o.normal.y>0?e.max.y:e.min.y,Ol.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ol)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const qm=new Wt;class Of{constructor(){this.coordinateSystem=Ai,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,r=this._frustums;for(let o=0;o<t.length;o++){const l=t[o];qm.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse),r[o]===void 0&&(r[o]=new lo),r[o].setFromProjectionMatrix(qm,l.coordinateSystem,l.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,r=e._frustums;for(let o=0;o<e._count;o++)t[o]===void 0&&(t[o]=new lo),t[o].copy(r[o]);return this._count=e._count,this}clone(){return new Of().copy(this)}}class ta extends cs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new At(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const oc=new ie,lc=new ie,$m=new Wt,Za=new Uf,Fl=new fo,Ad=new ie,Km=new ie;class iy extends bn{constructor(e=new xn,t=new ta){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)oc.fromBufferAttribute(t,o-1),lc.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=oc.distanceTo(lc);e.setAttribute("lineDistance",new $t(r,1))}else ct("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Fl.copy(r.boundingSphere),Fl.applyMatrix4(o),Fl.radius+=l,e.ray.intersectsSphere(Fl)===!1)return;$m.copy(o).invert(),Za.copy(e.ray).applyMatrix4($m);const h=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=this.isLineSegments?2:1,y=r.index,_=r.attributes.position;if(y!==null){const E=Math.max(0,u.start),b=Math.min(y.count,u.start+u.count);for(let C=E,x=b-1;C<x;C+=m){const v=y.getX(C),T=y.getX(C+1),D=kl(this,e,Za,p,v,T,C);D&&t.push(D)}if(this.isLineLoop){const C=y.getX(b-1),x=y.getX(E),v=kl(this,e,Za,p,C,x,b-1);v&&t.push(v)}}else{const E=Math.max(0,u.start),b=Math.min(_.count,u.start+u.count);for(let C=E,x=b-1;C<x;C+=m){const v=kl(this,e,Za,p,C,C+1,C);v&&t.push(v)}if(this.isLineLoop){const C=kl(this,e,Za,p,b-1,E,b-1);C&&t.push(C)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const h=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}}function kl(s,e,t,r,o,l,u){const h=s.geometry.attributes.position;if(oc.fromBufferAttribute(h,o),lc.fromBufferAttribute(h,l),t.distanceSqToSegment(oc,lc,Ad,Km)>r)return;Ad.applyMatrix4(s.matrixWorld);const m=e.ray.origin.distanceTo(Ad);if(!(m<e.near||m>e.far))return{distance:m,point:Km.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}const Zm=new ie,Jm=new ie;class rr extends iy{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,l=t.count;o<l;o+=2)Zm.fromBufferAttribute(t,o),Jm.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+Zm.distanceTo(Jm);e.setAttribute("lineDistance",new $t(r,1))}else ct("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gc extends cs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Qm=new Wt,_f=new Uf,Bl=new fo,zl=new ie;class Ff extends bn{constructor(e=new xn,t=new gc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Bl.copy(r.boundingSphere),Bl.applyMatrix4(o),Bl.radius+=l,e.ray.intersectsSphere(Bl)===!1)return;Qm.copy(o).invert(),_f.copy(e.ray).applyMatrix4(Qm);const h=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=r.index,S=r.attributes.position;if(m!==null){const _=Math.max(0,u.start),E=Math.min(m.count,u.start+u.count);for(let b=_,C=E;b<C;b++){const x=m.getX(b);zl.fromBufferAttribute(S,x),e0(zl,x,p,o,e,t,this)}}else{const _=Math.max(0,u.start),E=Math.min(S.count,u.start+u.count);for(let b=_,C=E;b<C;b++)zl.fromBufferAttribute(S,b),e0(zl,b,p,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const h=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}}function e0(s,e,t,r,o,l,u){const h=_f.distanceSqToPoint(s);if(h<t){const p=new ie;_f.closestPointToPoint(s,p),p.applyMatrix4(r);const m=o.ray.origin.distanceTo(p);if(m<o.near||m>o.far)return;l.push({distance:m,distanceToRay:Math.sqrt(h),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class vg extends On{constructor(e=[],t=Qs,r,o,l,u,h,p,m,y){super(e,t,r,o,l,u,h,p,m,y),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gl extends On{constructor(e,t,r,o,l,u,h,p,m){super(e,t,r,o,l,u,h,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class na extends On{constructor(e,t,r=Vi,o,l,u,h=Rn,p=Rn,m,y=kr,S=1){if(y!==kr&&y!==Fr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:S};super(_,o,l,u,h,p,y,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new If(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class _g extends na{constructor(e,t=Vi,r=Qs,o,l,u=Rn,h=Rn,p,m=kr){const y={width:e,height:e,depth:1},S=[y,y,y,y,y,y];super(e,e,t,r,o,l,u,h,p,m),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class yg extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class zr extends xn{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const h=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const p=[],m=[],y=[],S=[];let _=0,E=0;b("z","y","x",-1,-1,r,t,e,u,l,0),b("z","y","x",1,-1,r,t,-e,u,l,1),b("x","z","y",1,1,e,r,t,o,u,2),b("x","z","y",1,-1,e,r,-t,o,u,3),b("x","y","z",1,-1,e,t,r,o,l,4),b("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(p),this.setAttribute("position",new $t(m,3)),this.setAttribute("normal",new $t(y,3)),this.setAttribute("uv",new $t(S,2));function b(C,x,v,T,D,P,U,O,w,I,$){const z=P/w,K=U/I,ee=P/2,de=U/2,V=O/2,oe=w+1,Q=I+1;let Y=0,j=0;const q=new ie;for(let L=0;L<Q;L++){const M=L*K-de;for(let H=0;H<oe;H++){const xe=H*z-ee;q[C]=xe*T,q[x]=M*D,q[v]=V,m.push(q.x,q.y,q.z),q[C]=0,q[x]=0,q[v]=O>0?1:-1,y.push(q.x,q.y,q.z),S.push(H/w),S.push(1-L/I),Y+=1}}for(let L=0;L<I;L++)for(let M=0;M<w;M++){const H=_+M+oe*L,xe=_+M+oe*(L+1),G=_+(M+1)+oe*(L+1),te=_+(M+1)+oe*L;p.push(H,xe,te),p.push(xe,G,te),j+=6}h.addGroup(E,j,$),E+=j,_+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ca extends xn{constructor(e=[],t=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:o};const l=[],u=[];h(o),m(r),y(),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(l.slice(),3)),this.setAttribute("uv",new $t(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function h(T){const D=new ie,P=new ie,U=new ie;for(let O=0;O<t.length;O+=3)E(t[O+0],D),E(t[O+1],P),E(t[O+2],U),p(D,P,U,T)}function p(T,D,P,U){const O=U+1,w=[];for(let I=0;I<=O;I++){w[I]=[];const $=T.clone().lerp(P,I/O),z=D.clone().lerp(P,I/O),K=O-I;for(let ee=0;ee<=K;ee++)ee===0&&I===O?w[I][ee]=$:w[I][ee]=$.clone().lerp(z,ee/K)}for(let I=0;I<O;I++)for(let $=0;$<2*(O-I)-1;$++){const z=Math.floor($/2);$%2===0?(_(w[I][z+1]),_(w[I+1][z]),_(w[I][z])):(_(w[I][z+1]),_(w[I+1][z+1]),_(w[I+1][z]))}}function m(T){const D=new ie;for(let P=0;P<l.length;P+=3)D.x=l[P+0],D.y=l[P+1],D.z=l[P+2],D.normalize().multiplyScalar(T),l[P+0]=D.x,l[P+1]=D.y,l[P+2]=D.z}function y(){const T=new ie;for(let D=0;D<l.length;D+=3){T.x=l[D+0],T.y=l[D+1],T.z=l[D+2];const P=x(T)/2/Math.PI+.5,U=v(T)/Math.PI+.5;u.push(P,1-U)}b(),S()}function S(){for(let T=0;T<u.length;T+=6){const D=u[T+0],P=u[T+2],U=u[T+4],O=Math.max(D,P,U),w=Math.min(D,P,U);O>.9&&w<.1&&(D<.2&&(u[T+0]+=1),P<.2&&(u[T+2]+=1),U<.2&&(u[T+4]+=1))}}function _(T){l.push(T.x,T.y,T.z)}function E(T,D){const P=T*3;D.x=e[P+0],D.y=e[P+1],D.z=e[P+2]}function b(){const T=new ie,D=new ie,P=new ie,U=new ie,O=new St,w=new St,I=new St;for(let $=0,z=0;$<l.length;$+=9,z+=6){T.set(l[$+0],l[$+1],l[$+2]),D.set(l[$+3],l[$+4],l[$+5]),P.set(l[$+6],l[$+7],l[$+8]),O.set(u[z+0],u[z+1]),w.set(u[z+2],u[z+3]),I.set(u[z+4],u[z+5]),U.copy(T).add(D).add(P).divideScalar(3);const K=x(U);C(O,z+0,T,K),C(w,z+2,D,K),C(I,z+4,P,K)}}function C(T,D,P,U){U<0&&T.x===1&&(u[D]=T.x-1),P.x===0&&P.z===0&&(u[D]=U/2/Math.PI+.5)}function x(T){return Math.atan2(T.z,-T.x)}function v(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ca(e.vertices,e.indices,e.radius,e.detail)}}class cc extends ca{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,o=1/r,l=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-o,-r,0,-o,r,0,o,-r,0,o,r,-o,-r,0,-o,r,0,o,-r,0,o,r,0,-r,0,-o,r,0,-o,-r,0,o,r,0,o],u=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(l,u,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new cc(e.radius,e.detail)}}const Hl=new ie,Vl=new ie,Rd=new ie,jl=new mi;class Dr extends xn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const o=Math.pow(10,4),l=Math.cos($s*t),u=e.getIndex(),h=e.getAttribute("position"),p=u?u.count:h.count,m=[0,0,0],y=["a","b","c"],S=new Array(3),_=new Map,E=[];for(let b=0;b<p;b+=3){u?(m[0]=u.getX(b),m[1]=u.getX(b+1),m[2]=u.getX(b+2)):(m[0]=b,m[1]=b+1,m[2]=b+2);const{a:C,b:x,c:v}=jl;if(C.fromBufferAttribute(h,m[0]),x.fromBufferAttribute(h,m[1]),v.fromBufferAttribute(h,m[2]),jl.getNormal(Rd),S[0]=`${Math.round(C.x*o)},${Math.round(C.y*o)},${Math.round(C.z*o)}`,S[1]=`${Math.round(x.x*o)},${Math.round(x.y*o)},${Math.round(x.z*o)}`,S[2]=`${Math.round(v.x*o)},${Math.round(v.y*o)},${Math.round(v.z*o)}`,!(S[0]===S[1]||S[1]===S[2]||S[2]===S[0]))for(let T=0;T<3;T++){const D=(T+1)%3,P=S[T],U=S[D],O=jl[y[T]],w=jl[y[D]],I=`${P}_${U}`,$=`${U}_${P}`,z=_.get($);z?(Rd.dot(z.normal)<=l&&(E.push(O.x,O.y,O.z),E.push(w.x,w.y,w.z)),_.set($,null)):_.has(I)||_.set(I,{index0:m[T],index1:m[D],normal:Rd.clone()})}}for(const b of _.values())if(b){const{index0:C,index1:x}=b;Hl.fromBufferAttribute(h,C),Vl.fromBufferAttribute(h,x),E.push(Hl.x,Hl.y,Hl.z),E.push(Vl.x,Vl.y,Vl.z)}this.setAttribute("position",new $t(E,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class xc extends ca{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,o=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],l=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,l,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new xc(e.radius,e.detail)}}class ia extends ca{constructor(e=1,t=0){const r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,o,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ia(e.radius,e.detail)}}class ii extends xn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,h=Math.floor(r),p=Math.floor(o),m=h+1,y=p+1,S=e/h,_=t/p,E=[],b=[],C=[],x=[];for(let v=0;v<y;v++){const T=v*_-u;for(let D=0;D<m;D++){const P=D*S-l;b.push(P,-T,0),C.push(0,0,1),x.push(D/h),x.push(1-v/p)}}for(let v=0;v<p;v++)for(let T=0;T<h;T++){const D=T+m*v,P=T+m*(v+1),U=T+1+m*(v+1),O=T+1+m*v;E.push(D,P,O),E.push(P,U,O)}this.setIndex(E),this.setAttribute("position",new $t(b,3)),this.setAttribute("normal",new $t(C,3)),this.setAttribute("uv",new $t(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ii(e.width,e.height,e.widthSegments,e.heightSegments)}}class kf extends xn{constructor(e=.5,t=1,r=32,o=1,l=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:o,thetaStart:l,thetaLength:u},r=Math.max(3,r),o=Math.max(1,o);const h=[],p=[],m=[],y=[];let S=e;const _=(t-e)/o,E=new ie,b=new St;for(let C=0;C<=o;C++){for(let x=0;x<=r;x++){const v=l+x/r*u;E.x=S*Math.cos(v),E.y=S*Math.sin(v),p.push(E.x,E.y,E.z),m.push(0,0,1),b.x=(E.x/t+1)/2,b.y=(E.y/t+1)/2,y.push(b.x,b.y)}S+=_}for(let C=0;C<o;C++){const x=C*(r+1);for(let v=0;v<r;v++){const T=v+x,D=T,P=T+r+1,U=T+r+2,O=T+1;h.push(D,P,O),h.push(P,U,O)}}this.setIndex(h),this.setAttribute("position",new $t(p,3)),this.setAttribute("normal",new $t(m,3)),this.setAttribute("uv",new $t(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Bf extends xn{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:h},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const p=Math.min(u+h,Math.PI);let m=0;const y=[],S=new ie,_=new ie,E=[],b=[],C=[],x=[];for(let v=0;v<=r;v++){const T=[],D=v/r,P=u+D*h,U=e*Math.cos(P),O=Math.sqrt(e*e-U*U);let w=0;v===0&&u===0?w=.5/t:v===r&&p===Math.PI&&(w=-.5/t);for(let I=0;I<=t;I++){const $=I/t,z=o+$*l;S.x=-O*Math.cos(z),S.y=U,S.z=O*Math.sin(z),b.push(S.x,S.y,S.z),_.copy(S).normalize(),C.push(_.x,_.y,_.z),x.push($+w,1-D),T.push(m++)}y.push(T)}for(let v=0;v<r;v++)for(let T=0;T<t;T++){const D=y[v][T+1],P=y[v][T],U=y[v+1][T],O=y[v+1][T+1];(v!==0||u>0)&&E.push(D,P,O),(v!==r-1||p<Math.PI)&&E.push(P,U,O)}this.setIndex(E),this.setAttribute("position",new $t(b,3)),this.setAttribute("normal",new $t(C,3)),this.setAttribute("uv",new $t(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ra extends ca{constructor(e=1,t=0){const r=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],o=[2,1,0,0,3,2,1,3,0,2,3,1];super(r,o,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ra(e.radius,e.detail)}}class lr extends xn{constructor(e=1,t=.4,r=12,o=48,l=Math.PI*2,u=0,h=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:o,arc:l,thetaStart:u,thetaLength:h},r=Math.floor(r),o=Math.floor(o);const p=[],m=[],y=[],S=[],_=new ie,E=new ie,b=new ie;for(let C=0;C<=r;C++){const x=u+C/r*h;for(let v=0;v<=o;v++){const T=v/o*l;E.x=(e+t*Math.cos(x))*Math.cos(T),E.y=(e+t*Math.cos(x))*Math.sin(T),E.z=t*Math.sin(x),m.push(E.x,E.y,E.z),_.x=e*Math.cos(T),_.y=e*Math.sin(T),b.subVectors(E,_).normalize(),y.push(b.x,b.y,b.z),S.push(v/o),S.push(C/r)}}for(let C=1;C<=r;C++)for(let x=1;x<=o;x++){const v=(o+1)*C+x-1,T=(o+1)*(C-1)+x-1,D=(o+1)*(C-1)+x,P=(o+1)*C+x;p.push(v,T,P),p.push(T,D,P)}this.setIndex(p),this.setAttribute("position",new $t(m,3)),this.setAttribute("normal",new $t(y,3)),this.setAttribute("uv",new $t(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function sa(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(t0(o))o.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(t0(o[0])){const l=[];for(let u=0,h=o.length;u<h;u++)l[u]=o[u].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Bn(s){const e={};for(let t=0;t<s.length;t++){const r=sa(s[t]);for(const o in r)e[o]=r[o]}return e}function t0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function ry(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Sg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Nt.workingColorSpace}const sy={clone:sa,merge:Bn};var ay=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class os extends cs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ay,this.fragmentShader=oy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sa(e.uniforms),this.uniformsGroups=ry(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new At().setHex(o.value);break;case"v2":this.uniforms[r].value=new St().fromArray(o.value);break;case"v3":this.uniforms[r].value=new ie().fromArray(o.value);break;case"v4":this.uniforms[r].value=new tn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new ft().fromArray(o.value);break;case"m4":this.uniforms[r].value=new Wt().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class ly extends os{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xn extends cs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vf,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Br,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cy extends cs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=o_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uy extends cs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class zf extends bn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new At(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Cd=new Wt,n0=new ie,i0=new ie;class Mg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.mapType=si,this.map=null,this.mapPass=null,this.matrix=new Wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lo,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;n0.setFromMatrixPosition(e.matrixWorld),t.position.copy(n0),i0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(i0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,o){Cd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(Cd,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,u=o?o.z/l.x:1,h=o?o.w/l.y:1,p=o?o.x/l.x:0,m=o?o.y/l.y:0;e.coordinateSystem===ao||e.reversedDepth?t.set(.5*u,0,0,.5*u+p,0,.5*h,0,.5*h+m,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+p,0,.5*h,0,.5*h+m,0,0,.5,.5,0,0,0,1),t.multiply(Cd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Wl=new ie,Xl=new la,Oi=new ie;class Eg extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=Ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Wl,Xl,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wl,Xl,Oi.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(Wl,Xl,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wl,Xl,Oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ir=new ie,r0=new St,s0=new St;class Yn extends Eg{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=oo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($s*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oo*2*Math.atan(Math.tan($s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z),Ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z)}getViewSize(e,t){return this.getViewBounds(e,r0,s0),t.subVectors(s0,r0)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($s*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,m=u.fullHeight;l+=u.offsetX*o/p,t-=u.offsetY*r/m,o*=u.width/p,r*=u.height/m}const h=this.filmOffset;h!==0&&(l+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class dy extends Mg{constructor(){super(new Yn(90,1,.5,500)),this.isPointLightShadow=!0}}class aa extends zf{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new dy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class wg extends Eg{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,h=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,y=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,h-=y*this.view.offsetY,p=h-y*this.view.height}this.projectionMatrix.makeOrthographic(l,u,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class fy extends Mg{constructor(){super(new wg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hy extends zf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.shadow=new fy}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Gf extends zf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ws=-90,Xs=1;class yf extends bn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Yn(Ws,Xs,e,t);o.layers=this.layers,this.add(o);const l=new Yn(Ws,Xs,e,t);l.layers=this.layers,this.add(l);const u=new Yn(Ws,Xs,e,t);u.layers=this.layers,this.add(u);const h=new Yn(Ws,Xs,e,t);h.layers=this.layers,this.add(h);const p=new Yn(Ws,Xs,e,t);p.layers=this.layers,this.add(p);const m=new Yn(Ws,Xs,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,h,p]=t;for(const m of t)this.remove(m);if(e===Ai)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===ao)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,h,p,m,y]=this.children,S=e.getRenderTarget(),_=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.mipmapsAutoUpdate;r.texture.mipmapsAutoUpdate=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,3,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(r,4,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),r.texture.mipmapsAutoUpdate=C,e.setRenderTarget(r,5,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,y),e.setRenderTarget(S,_,E),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class py extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class Hf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ct("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function a0(s,e,t,r){const o=my(r);switch(t){case ig:return s*e;case sg:return s*e/o.components*o.byteLength;case Af:return s*e/o.components*o.byteLength;case as:return s*e*2/o.components*o.byteLength;case Rf:return s*e*2/o.components*o.byteLength;case rg:return s*e*3/o.components*o.byteLength;case zi:return s*e*4/o.components*o.byteLength;case Cf:return s*e*4/o.components*o.byteLength;case Kl:case Zl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Jl:case Ql:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Hd:case jd:return Math.max(s,16)*Math.max(e,8)/4;case Gd:case Vd:return Math.max(s,8)*Math.max(e,8)/2;case Wd:case Xd:case qd:case $d:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Yd:case nc:case Kd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Jd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Qd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ef:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case tf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case nf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case rf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case sf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case af:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case of:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case lf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case cf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case uf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case df:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ff:case hf:case pf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case mf:case gf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ic:case xf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function my(s){switch(s){case si:case Q0:return{byteLength:1,components:1};case so:case eg:case ji:return{byteLength:2,components:1};case bf:case Tf:return{byteLength:2,components:4};case Vi:case wf:case Bi:return{byteLength:4,components:1};case tg:case ng:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ef}}));typeof window<"u"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ef);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function bg(){let s=null,e=!1,t=null,r=null;function o(l,u){r=s.requestAnimationFrame(o),t(l,u)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function gy(s){const e=new WeakMap;function t(h,p){const m=h.array,y=h.usage,S=m.byteLength,_=s.createBuffer();s.bindBuffer(p,_),s.bufferData(p,m,y),h.onUploadCallback();let E;if(m instanceof Float32Array)E=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)E=s.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?E=s.HALF_FLOAT:E=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)E=s.SHORT;else if(m instanceof Uint32Array)E=s.UNSIGNED_INT;else if(m instanceof Int32Array)E=s.INT;else if(m instanceof Int8Array)E=s.BYTE;else if(m instanceof Uint8Array)E=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)E=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:_,type:E,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:S}}function r(h,p,m){const y=p.array,S=p.updateRanges;if(s.bindBuffer(m,h),S.length===0)s.bufferSubData(m,0,y);else{S.sort((E,b)=>E.start-b.start);let _=0;for(let E=1;E<S.length;E++){const b=S[_],C=S[E];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++_,S[_]=C)}S.length=_+1;for(let E=0,b=S.length;E<b;E++){const C=S[E];s.bufferSubData(m,C.start*y.BYTES_PER_ELEMENT,y,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function l(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(s.deleteBuffer(p.buffer),e.delete(h))}function u(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const y=e.get(h);(!y||y.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,t(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,h,p),m.version=h.version}}return{get:o,remove:l,update:u}}var xy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_y=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,My=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ey=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,by=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ty=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ay=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ry=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ny=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Py=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Iy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ly=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Oy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Fy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ky=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,By=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,zy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Gy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Hy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,$y=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Ky=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Qy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,aS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,cS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,pS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vS=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,_S=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ES=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,TS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,RS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,CS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,NS=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,PS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,LS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,US=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,OS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,BS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,GS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,HS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,VS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,WS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,XS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$S=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,QS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,e1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,t1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,n1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,i1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,r1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,s1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,a1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,o1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,l1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,c1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,u1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,d1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,f1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,h1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,p1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,m1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const g1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,x1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_1=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,E1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,w1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,b1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,T1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,C1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,N1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,P1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,U1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,F1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,k1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,G1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,W1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,X1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Y1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,q1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xt={alphahash_fragment:xy,alphahash_pars_fragment:vy,alphamap_fragment:_y,alphamap_pars_fragment:yy,alphatest_fragment:Sy,alphatest_pars_fragment:My,aomap_fragment:Ey,aomap_pars_fragment:wy,batching_pars_vertex:by,batching_vertex:Ty,begin_vertex:Ay,beginnormal_vertex:Ry,bsdfs:Cy,iridescence_fragment:Ny,bumpmap_pars_fragment:Py,clipping_planes_fragment:Iy,clipping_planes_pars_fragment:Ly,clipping_planes_pars_vertex:Dy,clipping_planes_vertex:Uy,color_fragment:Oy,color_pars_fragment:Fy,color_pars_vertex:ky,color_vertex:By,common:zy,defaultnormal_vertex:Gy,displacementmap_pars_vertex:Hy,displacementmap_vertex:Vy,emissivemap_fragment:jy,emissivemap_pars_fragment:Wy,colorspace_fragment:Xy,colorspace_pars_fragment:Yy,envmap_fragment:qy,envmap_common_pars_fragment:$y,envmap_pars_fragment:Ky,envmap_pars_vertex:Zy,envmap_physical_pars_fragment:lS,envmap_vertex:Jy,fog_vertex:Qy,fog_pars_vertex:eS,fog_fragment:tS,fog_pars_fragment:nS,gradientmap_pars_fragment:iS,lightmap_pars_fragment:rS,lights_lambert_fragment:sS,lights_lambert_pars_fragment:aS,lights_pars_begin:oS,lights_toon_fragment:cS,lights_toon_pars_fragment:uS,lights_phong_fragment:dS,lights_phong_pars_fragment:fS,lights_physical_fragment:hS,lights_physical_pars_fragment:pS,lights_fragment_begin:mS,lights_fragment_maps:gS,lights_fragment_end:xS,lightprobes_pars_fragment:vS,logdepthbuf_fragment:_S,logdepthbuf_pars_fragment:yS,logdepthbuf_pars_vertex:SS,logdepthbuf_vertex:MS,map_fragment:ES,map_pars_fragment:wS,map_particle_fragment:bS,map_particle_pars_fragment:TS,metalnessmap_fragment:AS,metalnessmap_pars_fragment:RS,morphinstance_vertex:CS,morphcolor_vertex:NS,morphnormal_vertex:PS,morphtarget_pars_vertex:IS,morphtarget_vertex:LS,normal_fragment_begin:DS,normal_fragment_maps:US,normal_pars_fragment:OS,normal_pars_vertex:FS,normal_vertex:kS,normalmap_pars_fragment:BS,clearcoat_normal_fragment_begin:zS,clearcoat_normal_fragment_maps:GS,clearcoat_pars_fragment:HS,iridescence_pars_fragment:VS,opaque_fragment:jS,packing:WS,premultiplied_alpha_fragment:XS,project_vertex:YS,dithering_fragment:qS,dithering_pars_fragment:$S,roughnessmap_fragment:KS,roughnessmap_pars_fragment:ZS,shadowmap_pars_fragment:JS,shadowmap_pars_vertex:QS,shadowmap_vertex:e1,shadowmask_pars_fragment:t1,skinbase_vertex:n1,skinning_pars_vertex:i1,skinning_vertex:r1,skinnormal_vertex:s1,specularmap_fragment:a1,specularmap_pars_fragment:o1,tonemapping_fragment:l1,tonemapping_pars_fragment:c1,transmission_fragment:u1,transmission_pars_fragment:d1,uv_pars_fragment:f1,uv_pars_vertex:h1,uv_vertex:p1,worldpos_vertex:m1,background_vert:g1,background_frag:x1,backgroundCube_vert:v1,backgroundCube_frag:_1,cube_vert:y1,cube_frag:S1,depth_vert:M1,depth_frag:E1,distance_vert:w1,distance_frag:b1,equirect_vert:T1,equirect_frag:A1,linedashed_vert:R1,linedashed_frag:C1,meshbasic_vert:N1,meshbasic_frag:P1,meshlambert_vert:I1,meshlambert_frag:L1,meshmatcap_vert:D1,meshmatcap_frag:U1,meshnormal_vert:O1,meshnormal_frag:F1,meshphong_vert:k1,meshphong_frag:B1,meshphysical_vert:z1,meshphysical_frag:G1,meshtoon_vert:H1,meshtoon_frag:V1,points_vert:j1,points_frag:W1,shadow_vert:X1,shadow_frag:Y1,sprite_vert:q1,sprite_frag:$1},Ge={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},ki={basic:{uniforms:Bn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:Bn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new At(0)},envMapIntensity:{value:1}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:Bn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:Bn([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:Bn([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new At(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:Bn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:Bn([Ge.points,Ge.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:Bn([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:Bn([Ge.common,Ge.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:Bn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:Bn([Ge.sprite,Ge.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distance:{uniforms:Bn([Ge.common,Ge.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distance_vert,fragmentShader:xt.distance_frag},shadow:{uniforms:Bn([Ge.lights,Ge.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};ki.physical={uniforms:Bn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ft},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const Yl={r:0,b:0,g:0},K1=new Wt,Tg=new ft;Tg.set(-1,0,0,0,1,0,0,0,1);function Z1(s,e,t,r,o,l){const u=new At(0);let h=o===!0?0:1,p,m,y=null,S=0,_=null;function E(T){let D=T.isScene===!0?T.background:null;if(D&&D.isTexture){const P=T.backgroundBlurriness>0;D=e.get(D,P)}return D}function b(T){let D=!1;const P=E(T);P===null?x(u,h):P&&P.isColor&&(x(P,1),D=!0);const U=s.xr.getEnvironmentBlendMode();U==="additive"?t.buffers.color.setClear(0,0,0,1,l):U==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||D)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(T,D){const P=E(D);P&&P.isCubeTexture?(m===void 0&&(m=new yt(new zr(1,1,1),new os({name:"BackgroundCubeMaterial",uniforms:sa(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(U,O,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=P,m.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(K1.makeRotationFromEuler(D.backgroundRotation)).transpose(),P.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(Tg),m.material.toneMapped=Nt.getTransfer(P.colorSpace)!==zt,(y!==P||S!==P.version||_!==s.toneMapping)&&(m.material.needsUpdate=!0,y=P,S=P.version,_=s.toneMapping),m.layers.enableAll(),T.unshift(m,m.geometry,m.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new yt(new ii(2,2),new os({name:"BackgroundMaterial",uniforms:sa(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Nt.getTransfer(P.colorSpace)!==zt,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(y!==P||S!==P.version||_!==s.toneMapping)&&(p.material.needsUpdate=!0,y=P,S=P.version,_=s.toneMapping),p.layers.enableAll(),T.unshift(p,p.geometry,p.material,0,0,null))}function x(T,D){T.getRGB(Yl,Sg(s)),t.buffers.color.setClear(Yl.r,Yl.g,Yl.b,D,l)}function v(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return u},setClearColor:function(T,D=1){u.set(T),h=D,x(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(T){h=T,x(u,h)},render:b,addToRenderList:C,dispose:v}}function J1(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=_(null);let l=o,u=!1;function h(K,ee,de,V,oe){let Q=!1;const Y=S(K,V,de,ee);l!==Y&&(l=Y,m(l.object)),Q=E(K,V,de,oe),Q&&b(K,V,de,oe),oe!==null&&e.update(oe,s.ELEMENT_ARRAY_BUFFER),(Q||u)&&(u=!1,P(K,ee,de,V),oe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function p(){return s.createVertexArray()}function m(K){return s.bindVertexArray(K)}function y(K){return s.deleteVertexArray(K)}function S(K,ee,de,V){const oe=V.wireframe===!0;let Q=r[ee.id];Q===void 0&&(Q={},r[ee.id]=Q);const Y=K.isInstancedMesh===!0?K.id:0;let j=Q[Y];j===void 0&&(j={},Q[Y]=j);let q=j[de.id];q===void 0&&(q={},j[de.id]=q);let L=q[oe];return L===void 0&&(L=_(p()),q[oe]=L),L}function _(K){const ee=[],de=[],V=[];for(let oe=0;oe<t;oe++)ee[oe]=0,de[oe]=0,V[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:de,attributeDivisors:V,object:K,attributes:{},index:null}}function E(K,ee,de,V){const oe=l.attributes,Q=ee.attributes;let Y=0;const j=de.getAttributes();for(const q in j)if(j[q].location>=0){const M=oe[q];let H=Q[q];if(H===void 0&&(q==="instanceMatrix"&&K.instanceMatrix&&(H=K.instanceMatrix),q==="instanceColor"&&K.instanceColor&&(H=K.instanceColor)),M===void 0||M.attribute!==H||H&&M.data!==H.data)return!0;Y++}return l.attributesNum!==Y||l.index!==V}function b(K,ee,de,V){const oe={},Q=ee.attributes;let Y=0;const j=de.getAttributes();for(const q in j)if(j[q].location>=0){let M=Q[q];M===void 0&&(q==="instanceMatrix"&&K.instanceMatrix&&(M=K.instanceMatrix),q==="instanceColor"&&K.instanceColor&&(M=K.instanceColor));const H={};H.attribute=M,M&&M.data&&(H.data=M.data),oe[q]=H,Y++}l.attributes=oe,l.attributesNum=Y,l.index=V}function C(){const K=l.newAttributes;for(let ee=0,de=K.length;ee<de;ee++)K[ee]=0}function x(K){v(K,0)}function v(K,ee){const de=l.newAttributes,V=l.enabledAttributes,oe=l.attributeDivisors;de[K]=1,V[K]===0&&(s.enableVertexAttribArray(K),V[K]=1),oe[K]!==ee&&(s.vertexAttribDivisor(K,ee),oe[K]=ee)}function T(){const K=l.newAttributes,ee=l.enabledAttributes;for(let de=0,V=ee.length;de<V;de++)ee[de]!==K[de]&&(s.disableVertexAttribArray(de),ee[de]=0)}function D(K,ee,de,V,oe,Q,Y){Y===!0?s.vertexAttribIPointer(K,ee,de,oe,Q):s.vertexAttribPointer(K,ee,de,V,oe,Q)}function P(K,ee,de,V){C();const oe=V.attributes,Q=de.getAttributes(),Y=ee.defaultAttributeValues;for(const j in Q){const q=Q[j];if(q.location>=0){let L=oe[j];if(L===void 0&&(j==="instanceMatrix"&&K.instanceMatrix&&(L=K.instanceMatrix),j==="instanceColor"&&K.instanceColor&&(L=K.instanceColor)),L!==void 0){const M=L.normalized,H=L.itemSize,xe=e.get(L);if(xe===void 0)continue;const G=xe.buffer,te=xe.type,fe=xe.bytesPerElement,ge=te===s.INT||te===s.UNSIGNED_INT||L.gpuType===wf;if(L.isInterleavedBufferAttribute){const he=L.data,Ee=he.isInterleavedBuffer===!0?he.stride:he.itemSize,et=L.offset;if(he.isInstancedInterleavedBuffer||he.isInstancedBufferAttribute){for(let Ue=0;Ue<q.locationSize;Ue++)v(q.location+Ue,he.meshPerAttribute);K.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ue=0;Ue<q.locationSize;Ue++)x(q.location+Ue);s.bindBuffer(s.ARRAY_BUFFER,G);for(let Ue=0;Ue<q.locationSize;Ue++)D(q.location+Ue,H/q.locationSize,te,M,Ee*fe,(et+H/q.locationSize*Ue)*fe,ge)}else{if(L.isInstancedBufferAttribute){for(let he=0;he<q.locationSize;he++)v(q.location+he,L.meshPerAttribute);K.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let he=0;he<q.locationSize;he++)x(q.location+he);s.bindBuffer(s.ARRAY_BUFFER,G);for(let he=0;he<q.locationSize;he++)D(q.location+he,H/q.locationSize,te,M,H*fe,H/q.locationSize*he*fe,ge)}}else if(Y!==void 0){const M=Y[j];if(M!==void 0)switch(M.length){case 2:s.vertexAttrib2fv(q.location,M);break;case 3:s.vertexAttrib3fv(q.location,M);break;case 4:s.vertexAttrib4fv(q.location,M);break;default:s.vertexAttrib1fv(q.location,M)}}}}T()}function U(){$();for(const K in r){const ee=r[K];for(const de in ee){const V=ee[de];for(const oe in V){const Q=V[oe];for(const Y in Q)y(Q[Y].object),delete Q[Y];delete V[oe]}}delete r[K]}}function O(K){if(r[K.id]===void 0)return;const ee=r[K.id];for(const de in ee){const V=ee[de];for(const oe in V){const Q=V[oe];for(const Y in Q)y(Q[Y].object),delete Q[Y];delete V[oe]}}delete r[K.id]}function w(K){for(const ee in r){const de=r[ee];for(const V in de){const oe=de[V];if(oe[K.id]===void 0)continue;const Q=oe[K.id];for(const Y in Q)y(Q[Y].object),delete Q[Y];delete oe[K.id]}}}function I(K){for(const ee in r){const de=r[ee],V=K.isInstancedMesh===!0?K.id:0,oe=de[V];if(oe!==void 0){for(const Q in oe){const Y=oe[Q];for(const j in Y)y(Y[j].object),delete Y[j];delete oe[Q]}delete de[V],Object.keys(de).length===0&&delete r[ee]}}}function $(){z(),u=!0,l!==o&&(l=o,m(l.object))}function z(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:$,resetDefaultState:z,dispose:U,releaseStatesOfGeometry:O,releaseStatesOfObject:I,releaseStatesOfProgram:w,initAttributes:C,enableAttribute:x,disableUnusedAttributes:T}}function Q1(s,e,t){let r;function o(p){r=p}function l(p,m){s.drawArrays(r,p,m),t.update(m,r,1)}function u(p,m,y){y!==0&&(s.drawArraysInstanced(r,p,m,y),t.update(m,r,y))}function h(p,m,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,m,0,y);let _=0;for(let E=0;E<y;E++)_+=m[E];t.update(_,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=h}function eM(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(w){return!(w!==zi&&r.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(w){const I=w===ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==si&&w!==Bi&&!I&&r.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function p(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const y=p(m);y!==m&&(ct("WebGLRenderer:",m,"not supported, using",y,"instead."),m=y);const S=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),_=t.logarithmicDepthBuffer===!0&&S===!1;t.reversedDepthBuffer===!0&&S===!1&&ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&S===!0&&ct("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const E=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),T=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=s.getParameter(s.MAX_SAMPLES),O=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:_,reversedDepthBuffer:S,maxTextures:E,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:T,maxVaryings:D,maxFragmentUniforms:P,maxSamples:U,samples:O}}function tM(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new Lr,h=new ft,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(S,_){const E=S.length!==0||_||r!==0||o;return o=_,r=S.length,E},this.beginShadows=function(){l=!0,y(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(S,_){t=y(S,_,0)},this.setState=function(S,_,E){const b=S.clippingPlanes,C=S.clipIntersection,x=S.clipShadows,v=s.get(S);if(!o||b===null||b.length===0||l&&!x)l?y(null):m();else{const T=l?0:r,D=T*4;let P=v.clippingState||null;p.value=P,P=y(b,_,D,E);for(let U=0;U!==D;++U)P[U]=t[U];v.clippingState=P,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=T}};function m(){p.value!==t&&(p.value=t,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function y(S,_,E,b){const C=S!==null?S.length:0;let x=null;if(C!==0){if(x=p.value,b!==!0||x===null){const v=E+C*4,T=_.matrixWorldInverse;h.getNormalMatrix(T),(x===null||x.length<v)&&(x=new Float32Array(v));for(let D=0,P=E;D!==C;++D,P+=4)u.copy(S[D]).applyMatrix4(T,h),u.normal.toArray(x,P),x[P+3]=u.constant}p.value=x,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,x}}class Vf extends Hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new vg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new zr(5,5,5),l=new os({name:"CubemapFromEquirect",uniforms:sa(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:$n,blending:qs});l.uniforms.tEquirect.value=t;const u=new yt(o,l),h=t.minFilter;return t.minFilter===Or&&(t.minFilter=qn),new yf(1,10,this).update(e,u),t.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}const o0=256,nM=3,iM=20,Ag=256,Rg=16,rM=3,sM=new ie,aM=new At;class uc{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new yf(1,10,null),this._boxMesh=new yt(new zr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:h=sM}=l,p=this._renderer;this._setSize(u);const m=this._allocateTarget(),y=this._getSourceTarget(!0);t>0&&(y.texture.mipmapsAutoUpdate=!1);const S=p.autoClear,_=p.autoClearColor,E=p.autoClearDepth,b=p.autoClearStencil,C=e.background;p.autoClear=!0,p.autoClearColor=!0,p.autoClearDepth=!0,p.autoClearStencil=!0,C===null&&(e.background=p.getClearColor(aM));const x=new yf(r,o,y);return x.position.copy(h),x.update(p,e),p.autoClear=S,p.autoClearColor=_,p.autoClearDepth=E,p.autoClearStencil=b,e.background=C,t>0&&(y.texture.mipmapsAutoUpdate=!0,this._blur(m,t)),this._applyPMREM(m),m}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=u0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=c0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(o0,ug(e))}_fromTexture(e,t){e.mapping===Qs||e.mapping===ro?this._setSize(e.image.length===0?o0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const r=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(r),r}_allocateTarget(){const e=this._cubeSize,t=l0(e,!1,!1),r=Math.log2(e)-nM;for(let o=0;o<=r;o++)t.texture.mipmaps.push({width:e>>o,height:e>>o});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==t||e&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=l0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,r){const o=this._boxMesh,l=this._cubeCamera;o.material=r,l.renderTarget=e,l.activeMipmapLevel=t;const u=e.width>>t;e.viewport.set(0,0,u,u),l.update(this._renderer,o),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Qs||e.mapping===ro?(this._cubemapMaterial===null&&(this._cubemapMaterial=u0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=c0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=oM(),this._integrationMaterial=lM());const t=this._cubeSize,r=e.texture.mipmaps.length-1,o=this._ggxMaterial.uniforms;o.envMap.value=this._sourceTarget.texture;const l=this._integrationMaterial.uniforms;l.envMap.value=this._sourceTarget.texture,l.sourceLod.value=Math.log2(t/Rg);for(let u=0;u<=r;u++){const h=uc.lodToRoughness(u,r);if(u>r-rM)l.roughness.value=h,this._renderCube(e,u,this._integrationMaterial);else{const p=h>0?Math.log2(t)+.5*Math.log2(6/(Ag*Math.pow(h,4)))+.5:0;o.roughness.value=h,o.lodBias.value=p,this._renderCube(e,u,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=cM());const r=this._blurMaterial,o=r.uniforms,l=this._sourceTarget;o.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,o.envMap.value=l.texture,this._renderCube(e,0,r),o.envMap.value=e.texture,this._renderCube(l,0,r)}}function l0(s,e,t){return new Vf(s,{minFilter:Or,generateMipmaps:e,type:ji,colorSpace:rc,depthBuffer:t})}function ho(s,e,t){return new os({name:s,uniforms:e,vertexShader:xt.cube_vert,fragmentShader:t,side:$n,blending:qs,depthTest:!1,depthWrite:!1})}function oM(){return ho("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ag}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function lM(){return ho("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Rg}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function cM(){return ho("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${iM}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function c0(){return ho("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function u0(){return ho("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function uM(s){let e=new WeakMap,t=new WeakMap,r=null;function o(_,E=!1){return _==null?null:E?u(_):l(_)}function l(_){if(_&&_.isTexture){const E=_.mapping;if(E===id||E===rd)if(e.has(_)){const b=e.get(_).texture;return h(b,_.mapping)}else{const b=_.image;if(b&&b.height>0){const C=new Vf(b.height);return C.fromEquirectangularTexture(s,_),e.set(_,C),_.addEventListener("dispose",m),h(C.texture,_.mapping)}else return null}}return _}function u(_){if(_&&_.isTexture&&_.isPMREMTexture!==!0){const E=_.mapping,b=E===id||E===rd,C=E===Qs||E===ro;if(b||C){let x=t.get(_);const v=x!==void 0?x.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==v)return r===null&&(r=new uc(s)),x=b?r.fromEquirectangular(_,x):r.fromCubemap(_,x),x.texture.pmremVersion=_.pmremVersion,t.set(_,x),x.texture;if(x!==void 0)return x.texture;{const T=_.image;return b&&T&&T.height>0||C&&T&&p(T)?(r===null&&(r=new uc(s)),x=b?r.fromEquirectangular(_):r.fromCubemap(_),x.texture.pmremVersion=_.pmremVersion,t.set(_,x),_.addEventListener("dispose",y),x.texture):null}}}return _}function h(_,E){return E===id?_.mapping=Qs:E===rd&&(_.mapping=ro),_}function p(_){let E=0;const b=6;for(let C=0;C<b;C++)_[C]!==void 0&&E++;return E===b}function m(_){const E=_.target;E.removeEventListener("dispose",m);const b=e.get(E);b!==void 0&&(e.delete(E),b.dispose())}function y(_){const E=_.target;E.removeEventListener("dispose",y);const b=t.get(E);b!==void 0&&(t.delete(E),b.dispose())}function S(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:S}}function dM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&ec("WebGLRenderer: "+r+" extension not supported."),o}}}function fM(s,e,t,r){const o={},l=new WeakMap,u=new FinalizationRegistry(b=>delete o[b]);function h(b){p(b.target)}function p(b){b.index!==null&&e.remove(b.index);for(const x in b.attributes)e.remove(b.attributes[x]);b.removeEventListener("dispose",h),delete o[b.id],u.unregister(b);const C=l.get(b);C&&(e.remove(C),l.delete(b)),r.releaseStatesOfGeometry(b),b.isInstancedBufferGeometry===!0&&delete b._maxInstanceCount,t.memory.geometries--}function m(b,C){return o[C.id]!==void 0||(C.addEventListener("dispose",h),o[C.id]=new WeakRef(C),u.register(C,C.id,C),t.memory.geometries++),C}function y(b){const C=b.attributes;for(const x in C)e.update(C[x],s.ARRAY_BUFFER)}function S(b){const C=b.index,x=b.attributes.position;let v=0;if(x===void 0)return;const T=C!==null?C.array.length:x.array.length/3-1,D=x.count>=65535?xg:gg,P=new D(Math.ceil(T/3)*6,1),U=P.array;if(C!==null){const w=C.array;v=C.version;for(let I=0,$=0;I<T;I+=3){const z=w[I+0],K=w[I+1],ee=w[I+2];U[$++]=z,U[$++]=K,U[$++]=K,U[$++]=ee,U[$++]=ee,U[$++]=z}}else{v=x.version;for(let w=0,I=0;w<T;w+=3){const $=w+0,z=w+1,K=w+2;U[I++]=$,U[I++]=z,U[I++]=z,U[I++]=K,U[I++]=K,U[I++]=$}}P.version=v;const O=l.get(b);O&&e.remove(O),l.set(b,P)}function _(b){const C=l.get(b);if(C){const x=b.index;x!==null&&C.version<x.version&&S(b)}else S(b);return l.get(b)}function E(){for(const b in o){const C=o[b].deref();C!==void 0&&p(C)}}return{get:m,update:y,getWireframeAttribute:_,dispose:E}}function hM(s,e,t){let r;function o(S){r=S}let l,u;function h(S){l=S.type,u=S.bytesPerElement}function p(S,_){s.drawElements(r,_,l,S*u),t.update(_,r,1)}function m(S,_,E){E!==0&&(s.drawElementsInstanced(r,_,l,S*u,E),t.update(_,r,E))}function y(S,_,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,_,0,l,S,0,E);let C=0;for(let x=0;x<E;x++)C+=_[x];t.update(C,r,1)}this.setMode=o,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=y}function pM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,h){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=h*(l/3);break;case s.LINES:t.lines+=h*(l/2);break;case s.LINE_STRIP:t.lines+=h*(l-1);break;case s.LINE_LOOP:t.lines+=h*l;break;case s.POINTS:t.points+=h*l;break;default:Ft("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function mM(s,e,t){const r=new WeakMap,o=new tn;function l(u,h,p){const m=u.morphTargetInfluences,y=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,S=y!==void 0?y.length:0;let _=r.get(h);if(_===void 0||_.count!==S){let z=function(){I.dispose(),r.delete(h),h.removeEventListener("dispose",z)};var E=z;_!==void 0&&_.texture.dispose();const b=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,x=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let P=0;b===!0&&(P=1),C===!0&&(P=2),x===!0&&(P=3);let U=h.attributes.position.count*P,O=1;U>e.maxTextureSize&&(O=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const w=new Float32Array(U*O*4*S),I=new hg(w,U,O,S);I.type=Bi,I.needsUpdate=!0;const $=P*4;for(let K=0;K<S;K++){const ee=v[K],de=T[K],V=D[K],oe=U*O*4*K;for(let Q=0;Q<ee.count;Q++){const Y=Q*$;b===!0&&(o.fromBufferAttribute(ee,Q),w[oe+Y+0]=o.x,w[oe+Y+1]=o.y,w[oe+Y+2]=o.z,w[oe+Y+3]=0),C===!0&&(o.fromBufferAttribute(de,Q),w[oe+Y+4]=o.x,w[oe+Y+5]=o.y,w[oe+Y+6]=o.z,w[oe+Y+7]=0),x===!0&&(o.fromBufferAttribute(V,Q),w[oe+Y+8]=o.x,w[oe+Y+9]=o.y,w[oe+Y+10]=o.z,w[oe+Y+11]=V.itemSize===4?o.w:1)}}_={count:S,texture:I,size:new St(U,O)},r.set(h,_),h.addEventListener("dispose",z)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let b=0;for(let x=0;x<m.length;x++)b+=m[x];const C=h.morphTargetsRelative?1:1-b;p.getUniforms().setValue(s,"morphTargetBaseInfluence",C),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:l}}function gM(s,e,t,r,o){let l=new WeakMap;function u(m){const y=o.render.frame,S=m.geometry,_=e.get(m,S);if(l.get(_)!==y&&(e.update(_),l.set(_,y)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),l.get(m)!==y&&(t.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&t.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,y))),m.isSkinnedMesh){const E=m.skeleton;l.get(E)!==y&&(E.update(),l.set(E,y))}return _}function h(){l=new WeakMap}function p(m){const y=m.target;y.removeEventListener("dispose",p),r.releaseStatesOfObject(y),t.remove(y.instanceMatrix),y.instanceColor!==null&&t.remove(y.instanceColor)}return{update:u,dispose:h}}const xM={[X0]:"LINEAR_TONE_MAPPING",[Y0]:"REINHARD_TONE_MAPPING",[q0]:"CINEON_TONE_MAPPING",[mc]:"ACES_FILMIC_TONE_MAPPING",[K0]:"AGX_TONE_MAPPING",[Z0]:"NEUTRAL_TONE_MAPPING",[$0]:"CUSTOM_TONE_MAPPING"};function vM(s,e,t,r,o,l){const u=new Hi(e,t,{type:s,depthBuffer:o,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,p=null,m=null;const y=new xn;y.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),y.setAttribute("uv",new $t([0,2,0,0,2,0],2));const S=new ly({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),_=new yt(y,S),E=new wg(-1,1,1,-1,0,1);let b=null,C=null,x=!1,v,T=null,D=[],P=!1;this.setSize=function(U,O){u.setSize(U,O),h!==null&&h.setSize(U,O),p!==null&&p.setSize(U,O);for(let w=0;w<D.length;w++){const I=D[w];I.setSize&&I.setSize(U,O)}},this.setEffects=function(U){D=U,P=D.length>0&&D[0].isRenderPass===!0;const O=u.width,w=u.height;D.length>0&&h===null&&(h=new Hi(O,w,{type:ji,depthBuffer:!1,stencilBuffer:!1}),p=new Hi(O,w,{type:ji,depthBuffer:!1,stencilBuffer:!1}));const I=o===!0&&D.some($=>$.needsDepthTexture===!0);I!==(u.depthTexture!==null)&&(I===!0&&m===null&&(m=new na(O,w),l===!0&&(m.format=Fr,m.type=ea)),u.dispose(),u.depthTexture=I?m:null,u.resolveDepthBuffer=I,u.storeMultisampledDepthBuffer=I);for(let $=0;$<D.length;$++){const z=D[$];z.setSize&&z.setSize(O,w),I&&z.needsDepthTexture===!0&&z.setDepthTexture&&z.setDepthTexture(m)}},this.begin=function(U,O){if(x||U.toneMapping===ar&&D.length===0)return!1;if(T=O,O!==null){const w=O.width,I=O.height;(u.width!==w||u.height!==I)&&this.setSize(w,I)}return P===!1&&U.setRenderTarget(u),v=U.toneMapping,U.toneMapping=ar,!0},this.hasRenderPass=function(){return P},this.end=function(U,O){U.toneMapping=v,x=!0;let w=u,I=h;for(let $=0;$<D.length;$++){const z=D[$];z.enabled!==!1&&(z.render(U,I,w,O),z.needsSwap!==!1&&(w=I,I=I===h?p:h))}if(b!==U.outputColorSpace||C!==U.toneMapping){b=U.outputColorSpace,C=U.toneMapping,S.defines={},Nt.getTransfer(b)===zt&&(S.defines.SRGB_TRANSFER="");const $=xM[C];$&&(S.defines[$]=""),S.needsUpdate=!0}S.uniforms.tDiffuse.value=w.texture,U.setRenderTarget(T),U.render(_,E),T=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){u.dispose(),h!==null&&h.dispose(),p!==null&&p.dispose(),y.dispose(),S.dispose()}}const Cg=new On,Ng=new na(1,1),Pg=new _g(1),Ig=new hg,Lg=new z_,Dg=new vg,d0=[],f0=[],h0=new Float32Array(16),p0=new Float32Array(9),m0=new Float32Array(4);function ua(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=d0[o];if(l===void 0&&(l=new Float32Array(o),d0[o]=l),e!==0){r.toArray(l,0);for(let u=1,h=0;u!==e;++u)h+=t,s[u].toArray(l,h)}return l}function vn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function _n(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function vc(s,e){let t=f0[e];t===void 0&&(t=new Int32Array(e),f0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function _M(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function yM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;s.uniform2fv(this.addr,e),_n(t,e)}}function SM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vn(t,e))return;s.uniform3fv(this.addr,e),_n(t,e)}}function MM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;s.uniform4fv(this.addr,e),_n(t,e)}}function EM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(vn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),_n(t,e)}else{if(vn(t,r))return;m0.set(r),s.uniformMatrix2fv(this.addr,!1,m0),_n(t,r)}}function wM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(vn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),_n(t,e)}else{if(vn(t,r))return;p0.set(r),s.uniformMatrix3fv(this.addr,!1,p0),_n(t,r)}}function bM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(vn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),_n(t,e)}else{if(vn(t,r))return;h0.set(r),s.uniformMatrix4fv(this.addr,!1,h0),_n(t,r)}}function TM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function AM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;s.uniform2iv(this.addr,e),_n(t,e)}}function RM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;s.uniform3iv(this.addr,e),_n(t,e)}}function CM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;s.uniform4iv(this.addr,e),_n(t,e)}}function NM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function PM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;s.uniform2uiv(this.addr,e),_n(t,e)}}function IM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;s.uniform3uiv(this.addr,e),_n(t,e)}}function LM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;s.uniform4uiv(this.addr,e),_n(t,e)}}function _c(s){return s.version===0&&(s.compareFunction=lg,s.needsUpdate=!0),s}function DM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?l=_c(Ng):l=Cg,t.setTexture2D(e||l,o)}function UM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Lg,o)}function OM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_CUBE_SHADOW?l=_c(Pg):l=Dg,t.setTextureCube(e||l,o)}function FM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Ig,o)}function kM(s){switch(s){case 5126:return _M;case 35664:return yM;case 35665:return SM;case 35666:return MM;case 35674:return EM;case 35675:return wM;case 35676:return bM;case 5124:case 35670:return TM;case 35667:case 35671:return AM;case 35668:case 35672:return RM;case 35669:case 35673:return CM;case 5125:return NM;case 36294:return PM;case 36295:return IM;case 36296:return LM;case 35678:case 36198:case 36298:case 36306:case 35682:return DM;case 35679:case 36299:case 36307:return UM;case 35680:case 36300:case 36308:case 36293:return OM;case 36289:case 36303:case 36311:case 36292:return FM}}function BM(s,e){s.uniform1fv(this.addr,e)}function zM(s,e){const t=ua(e,this.size,2);s.uniform2fv(this.addr,t)}function GM(s,e){const t=ua(e,this.size,3);s.uniform3fv(this.addr,t)}function HM(s,e){const t=ua(e,this.size,4);s.uniform4fv(this.addr,t)}function VM(s,e){const t=ua(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function jM(s,e){const t=ua(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function WM(s,e){const t=ua(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function XM(s,e){s.uniform1iv(this.addr,e)}function YM(s,e){s.uniform2iv(this.addr,e)}function qM(s,e){s.uniform3iv(this.addr,e)}function $M(s,e){s.uniform4iv(this.addr,e)}function KM(s,e){s.uniform1uiv(this.addr,e)}function ZM(s,e){s.uniform2uiv(this.addr,e)}function JM(s,e){s.uniform3uiv(this.addr,e)}function QM(s,e){s.uniform4uiv(this.addr,e)}function eE(s,e,t){const r=this.cache,o=e.length,l=vc(t,o);vn(r,l)||(s.uniform1iv(this.addr,l),_n(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=_c(Ng):u=Cg;for(let h=0;h!==o;++h)t.setTexture2D(e[h]||u,l[h])}function tE(s,e,t){const r=this.cache,o=e.length,l=vc(t,o);vn(r,l)||(s.uniform1iv(this.addr,l),_n(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Lg,l[u])}function nE(s,e,t){const r=this.cache,o=e.length,l=vc(t,o);vn(r,l)||(s.uniform1iv(this.addr,l),_n(r,l));let u;this.type===s.SAMPLER_CUBE_SHADOW?u=_c(Pg):u=Dg;for(let h=0;h!==o;++h)t.setTextureCube(e[h]||u,l[h])}function iE(s,e,t){const r=this.cache,o=e.length,l=vc(t,o);vn(r,l)||(s.uniform1iv(this.addr,l),_n(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Ig,l[u])}function rE(s){switch(s){case 5126:return BM;case 35664:return zM;case 35665:return GM;case 35666:return HM;case 35674:return VM;case 35675:return jM;case 35676:return WM;case 5124:case 35670:return XM;case 35667:case 35671:return YM;case 35668:case 35672:return qM;case 35669:case 35673:return $M;case 5125:return KM;case 36294:return ZM;case 36295:return JM;case 36296:return QM;case 35678:case 36198:case 36298:case 36306:case 35682:return eE;case 35679:case 36299:case 36307:return tE;case 35680:case 36300:case 36308:case 36293:return nE;case 36289:case 36303:case 36311:case 36292:return iE}}class sE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=kM(t.type)}}class aE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rE(t.type)}}class oE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const h=o[l];h.setValue(e,t[h.id],r)}}}const Nd=/(\w+)(\])?(\[|\.)?/g;function g0(s,e){s.seq.push(e),s.map[e.id]=e}function lE(s,e,t){const r=s.name,o=r.length;for(Nd.lastIndex=0;;){const l=Nd.exec(r),u=Nd.lastIndex;let h=l[1];const p=l[2]==="]",m=l[3];if(p&&(h=h|0),m===void 0||m==="["&&u+2===o){g0(t,m===void 0?new sE(h,s,e):new aE(h,s,e));break}else{let S=t.map[h];S===void 0&&(S=new oE(h),g0(t,S)),t=S}}}class tc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const h=e.getActiveUniform(t,u),p=e.getUniformLocation(t,h.name);lE(h,p,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const h=t[l],p=r[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function x0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const cE=37297;let uE=0;function dE(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const h=u+1;r.push(`${h===e?">":" "} ${h}: ${t[u]}`)}return r.join(`
`)}const v0=new ft;function fE(s){Nt._getMatrix(v0,Nt.workingColorSpace,s);const e=`mat3( ${v0.elements.map(t=>t.toFixed(4))} )`;switch(Nt.getTransfer(s)){case sc:return[e,"LinearTransferOETF"];case zt:return[e,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function _0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+dE(s.getShaderSource(e),h)}else return l}function hE(s,e){const t=fE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const pE={[X0]:"Linear",[Y0]:"Reinhard",[q0]:"Cineon",[mc]:"ACESFilmic",[K0]:"AgX",[Z0]:"Neutral",[$0]:"Custom"};function mE(s,e){const t=pE[e];return t===void 0?(ct("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ql=new ie;function gE(){Nt.getLuminanceCoefficients(ql);const s=ql.x.toFixed(4),e=ql.y.toFixed(4),t=ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(eo).join(`
`)}function vE(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function _E(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let h=1;l.type===s.FLOAT_MAT2&&(h=2),l.type===s.FLOAT_MAT3&&(h=3),l.type===s.FLOAT_MAT4&&(h=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:h}}return t}function eo(s){return s!==""}function y0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function S0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sf(s){return s.replace(yE,SE)}function SE(s,e){const t=xt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Sf(t)}const ME=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function M0(s){return s.replace(ME,EE)}function EE(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function E0(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const wE={[$l]:"SHADOWMAP_TYPE_PCF",[Qa]:"SHADOWMAP_TYPE_VSM"};function bE(s){return wE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const TE={[ro]:"ENVMAP_MODE_REFRACTION"};function AE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":TE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const RE={[W0]:"ENVMAP_BLENDING_MULTIPLY",[r_]:"ENVMAP_BLENDING_MIX",[s_]:"ENVMAP_BLENDING_ADD"};function CE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":RE[s.combine]||"ENVMAP_BLENDING_NONE"}function NE(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,h=t.fragmentShader;const p=bE(t),m=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",y=AE(t),S=CE(t),_=xE(t),E=vE(l),b=o.createProgram();let C,x,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(C=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(eo).join(`
`),C.length>0&&(C+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(eo).join(`
`),x.length>0&&(x+=`
`)):(C=[E0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+y:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(eo).join(`
`),x=[E0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+y:"",t.envMap?"#define "+S:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ar?"#define TONE_MAPPING":"",t.toneMapping!==ar?xt.tonemapping_pars_fragment:"",t.toneMapping!==ar?mE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,hE("linearToOutputTexel",t.outputColorSpace),gE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(eo).join(`
`)),u=Sf(u),u=y0(u,t),u=S0(u,t),h=Sf(h),h=y0(h,t),h=S0(h,t),u=M0(u),h=M0(h),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,C=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+C,x=["#define varying in",t.glslVersion===Cm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const T=v+C+u,D=v+x+h,P=x0(o,o.VERTEX_SHADER,T),U=x0(o,o.FRAGMENT_SHADER,D);o.attachShader(b,P),o.attachShader(b,U),t.index0AttributeName!==void 0?o.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(b,0,"position"),o.linkProgram(b);function O(z){if(s.debug.checkShaderErrors){const K=o.getProgramInfoLog(b)||"",ee=o.getShaderInfoLog(P)||"",de=o.getShaderInfoLog(U)||"",V=K.trim(),oe=ee.trim(),Q=de.trim();let Y=!0,j=!0;if(o.getProgramParameter(b,o.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,b,P,U);else{const q=_0(o,P,"vertex"),L=_0(o,U,"fragment");Ft("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(b,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+V+`
`+q+`
`+L)}else V!==""?ct("WebGLProgram: Program Info Log:",V):(oe===""||Q==="")&&(j=!1);j&&(z.diagnostics={runnable:Y,programLog:V,vertexShader:{log:oe,prefix:C},fragmentShader:{log:Q,prefix:x}})}o.deleteShader(P),o.deleteShader(U),w=new tc(o,b),I=_E(o,b)}let w;this.getUniforms=function(){return w===void 0&&O(this),w};let I;this.getAttributes=function(){return I===void 0&&O(this),I};let $=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return $===!1&&($=o.getProgramParameter(b,cE)),$},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=uE++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=P,this.fragmentShader=U,this}let PE=0;class IE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new LE(e),t.set(e,r)),r}}class LE{constructor(e){this.id=PE++,this.code=e,this.usedTimes=0}}function DE(s){return s===as||s===nc||s===ic}function UE(s,e,t,r,o,l){const u=new pg,h=new IE,p=new Set,m=[],y=new Map,S=r.logarithmicDepthBuffer,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(w){return p.add(w),w===0?"uv":`uv${w}`}function b(w,I,$,z,K,ee){const de=z.fog,V=K.geometry,oe=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?z.environment:null,Q=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,Y=e.get(w.envMap||oe,Q),j=_[w.type];let q=r.precision;w.precision!==null&&(q=r.getMaxPrecision(w.precision),q!==w.precision&&ct("WebGLProgram.getParameters:",w.precision,"not supported, using",q,"instead."));const L=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,M=L!==void 0?L.length:0;let H=0;V.morphAttributes.position!==void 0&&(H=1),V.morphAttributes.normal!==void 0&&(H=2),V.morphAttributes.color!==void 0&&(H=3);let xe,G,te,fe;if(j){const ze=ki[j];xe=ze.vertexShader,G=ze.fragmentShader}else{xe=w.vertexShader,G=w.fragmentShader;const ze=h.getVertexShaderStage(w),Ct=h.getFragmentShaderStage(w);h.update(w,ze,Ct),te=ze.id,fe=Ct.id}const ge=s.getRenderTarget(),he=s.state.buffers.depth.getReversed(),Ee=K.isInstancedMesh===!0,et=K.isBatchedMesh===!0,Ue=!!w.map,tt=!!w.matcap,st=!!Y,ke=st&&Y.isPMREMTexture===!0,Et=!!w.aoMap,wt=!!w.lightMap,It=!!w.bumpMap&&w.wireframe===!1,gt=!!w.normalMap,Kt=!!w.displacementMap,pt=!!w.emissiveMap,Zt=!!w.metalnessMap,cn=!!w.roughnessMap,an=w.anisotropy>0,Z=w.clearcoat>0,fn=w.diffuseRoughness>0,Lt=w.dispersion>0,Rt=w.retroreflectivity>0,Pe=w.iridescence>0,kt=w.sheen>0,We=w.transmission>0,it=an&&!!w.anisotropyMap,F=Z&&!!w.clearcoatMap,A=Z&&!!w.clearcoatNormalMap,re=Z&&!!w.clearcoatRoughnessMap,Te=fn&&!!w.diffuseRoughnessMap,ye=Pe&&!!w.iridescenceMap,Ne=Pe&&!!w.iridescenceThicknessMap,De=kt&&!!w.sheenColorMap,ve=kt&&!!w.sheenRoughnessMap,se=!!w.specularMap,Se=!!w.specularColorMap,k=!!w.specularIntensityMap,_e=We&&!!w.transmissionMap,me=We&&!!w.thicknessMap,we=!!w.gradientMap,Ce=!!w.alphaMap,Ie=w.alphaTest>0,Ze=!!w.alphaHash,ht=!!w.extensions;let Ae=ar;w.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Ae=s.toneMapping);const nt=ke?Y.isCompressedCubeTexture?Y.image[0].mipmaps:Y.mipmaps:null,ut={shaderID:j,shaderType:w.type,shaderName:w.name,vertexShader:xe,fragmentShader:G,defines:w.defines,customVertexShaderID:te,customFragmentShaderID:fe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:q,batching:et,batchingColor:et&&K._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&K.instanceColor!==null,instancingMorph:Ee&&K.morphTexture!==null,outputColorSpace:ge===null?s.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Nt.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:Ue,matcap:tt,envMap:st,envMapMode:st&&Y.mapping,envMapPMREM:ke,envMapMaxLod:ke?nt.length-1:null,envMapSize:ke?nt[0].width:null,aoMap:Et,lightMap:wt,bumpMap:It,normalMap:gt,displacementMap:Kt,emissiveMap:pt,normalMapObjectSpace:gt&&w.normalMapType===l_,normalMapTangentSpace:gt&&w.normalMapType===vf,packedNormalMap:gt&&w.normalMapType===vf&&DE(w.normalMap.format),metalnessMap:Zt,roughnessMap:cn,anisotropy:an,anisotropyMap:it,clearcoat:Z,clearcoatMap:F,clearcoatNormalMap:A,clearcoatRoughnessMap:re,diffuseRoughness:fn,diffuseRoughnessMap:Te,dispersion:Lt,retroreflection:Rt,iridescence:Pe,iridescenceMap:ye,iridescenceThicknessMap:Ne,sheen:kt,sheenColorMap:De,sheenRoughnessMap:ve,specularMap:se,specularColorMap:Se,specularIntensityMap:k,transmission:We,transmissionMap:_e,thicknessMap:me,gradientMap:we,opaque:w.transparent===!1&&w.blending===to&&w.alphaToCoverage===!1,alphaMap:Ce,alphaTest:Ie,alphaHash:Ze,combine:w.combine,mapUv:Ue&&E(w.map.channel),aoMapUv:Et&&E(w.aoMap.channel),lightMapUv:wt&&E(w.lightMap.channel),bumpMapUv:It&&E(w.bumpMap.channel),normalMapUv:gt&&E(w.normalMap.channel),displacementMapUv:Kt&&E(w.displacementMap.channel),emissiveMapUv:pt&&E(w.emissiveMap.channel),metalnessMapUv:Zt&&E(w.metalnessMap.channel),roughnessMapUv:cn&&E(w.roughnessMap.channel),anisotropyMapUv:it&&E(w.anisotropyMap.channel),clearcoatMapUv:F&&E(w.clearcoatMap.channel),clearcoatNormalMapUv:A&&E(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&E(w.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Te&&E(w.diffuseRoughnessMap.channel),iridescenceMapUv:ye&&E(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&E(w.iridescenceThicknessMap.channel),sheenColorMapUv:De&&E(w.sheenColorMap.channel),sheenRoughnessMapUv:ve&&E(w.sheenRoughnessMap.channel),specularMapUv:se&&E(w.specularMap.channel),specularColorMapUv:Se&&E(w.specularColorMap.channel),specularIntensityMapUv:k&&E(w.specularIntensityMap.channel),transmissionMapUv:_e&&E(w.transmissionMap.channel),thicknessMapUv:me&&E(w.thicknessMap.channel),alphaMapUv:Ce&&E(w.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(gt||an),vertexNormals:!!V.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!V.attributes.uv&&(Ue||Ce),fog:!!de,useFog:w.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||V.attributes.normal===void 0&&gt===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:he,skinning:K.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:M,morphTextureStride:H,numSunLights:I.sun.length,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numSunLightShadows:I.sunShadowMap.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:ee.filter(ze=>ze.texture!==null).length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&$.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ae,decodeVideoTexture:Ue&&w.map.isVideoTexture===!0&&Nt.getTransfer(w.map.colorSpace)===zt,decodeVideoTextureEmissive:pt&&w.emissiveMap.isVideoTexture===!0&&Nt.getTransfer(w.emissiveMap.colorSpace)===zt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===pi,flipSided:w.side===$n,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ht&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&w.extensions.multiDraw===!0||et)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ut.vertexUv1s=p.has(1),ut.vertexUv2s=p.has(2),ut.vertexUv3s=p.has(3),p.clear(),ut}function C(w){const I=[];if(w.shaderID?I.push(w.shaderID):(I.push(w.customVertexShaderID),I.push(w.customFragmentShaderID)),w.defines!==void 0)for(const $ in w.defines)I.push($),I.push(w.defines[$]);return w.isRawShaderMaterial===!1&&(x(I,w),v(I,w),I.push(s.outputColorSpace)),I.push(w.customProgramCacheKey),I.join()}function x(w,I){w.push(I.precision),w.push(I.outputColorSpace),w.push(I.envMapMode),w.push(I.envMapPMREM),w.push(I.envMapMaxLod),w.push(I.envMapSize),w.push(I.mapUv),w.push(I.alphaMapUv),w.push(I.lightMapUv),w.push(I.aoMapUv),w.push(I.bumpMapUv),w.push(I.normalMapUv),w.push(I.displacementMapUv),w.push(I.emissiveMapUv),w.push(I.metalnessMapUv),w.push(I.roughnessMapUv),w.push(I.anisotropyMapUv),w.push(I.clearcoatMapUv),w.push(I.clearcoatNormalMapUv),w.push(I.clearcoatRoughnessMapUv),w.push(I.diffuseRoughnessMapUv),w.push(I.iridescenceMapUv),w.push(I.iridescenceThicknessMapUv),w.push(I.sheenColorMapUv),w.push(I.sheenRoughnessMapUv),w.push(I.specularMapUv),w.push(I.specularColorMapUv),w.push(I.specularIntensityMapUv),w.push(I.transmissionMapUv),w.push(I.thicknessMapUv),w.push(I.combine),w.push(I.fogExp2),w.push(I.sizeAttenuation),w.push(I.morphTargetsCount),w.push(I.numSunLights),w.push(I.numDirLights),w.push(I.numPointLights),w.push(I.numSpotLights),w.push(I.numSpotLightMaps),w.push(I.numHemiLights),w.push(I.numRectAreaLights),w.push(I.numSunLightShadows),w.push(I.numDirLightShadows),w.push(I.numPointLightShadows),w.push(I.numSpotLightShadows),w.push(I.numSpotLightShadowsWithMaps),w.push(I.numLightProbes),w.push(I.numLightProbeGrids),w.push(I.shadowMapType),w.push(I.toneMapping),w.push(I.numClippingPlanes),w.push(I.numClipIntersection),w.push(I.depthPacking)}function v(w,I){u.disableAll(),I.instancing&&u.enable(0),I.instancingColor&&u.enable(1),I.instancingMorph&&u.enable(2),I.matcap&&u.enable(3),I.envMap&&u.enable(4),I.normalMapObjectSpace&&u.enable(5),I.normalMapTangentSpace&&u.enable(6),I.clearcoat&&u.enable(7),I.iridescence&&u.enable(8),I.alphaTest&&u.enable(9),I.vertexColors&&u.enable(10),I.vertexAlphas&&u.enable(11),I.vertexUv1s&&u.enable(12),I.vertexUv2s&&u.enable(13),I.vertexUv3s&&u.enable(14),I.vertexTangents&&u.enable(15),I.anisotropy&&u.enable(16),I.alphaHash&&u.enable(17),I.batching&&u.enable(18),I.dispersion&&u.enable(19),I.retroreflection&&u.enable(24),I.diffuseRoughness&&u.enable(25),I.batchingColor&&u.enable(20),I.gradientMap&&u.enable(21),I.packedNormalMap&&u.enable(22),I.vertexNormals&&u.enable(23),w.push(u.mask),u.disableAll(),I.fog&&u.enable(0),I.useFog&&u.enable(1),I.flatShading&&u.enable(2),I.logarithmicDepthBuffer&&u.enable(3),I.reversedDepthBuffer&&u.enable(4),I.skinning&&u.enable(5),I.morphTargets&&u.enable(6),I.morphNormals&&u.enable(7),I.morphColors&&u.enable(8),I.premultipliedAlpha&&u.enable(9),I.shadowMapEnabled&&u.enable(10),I.doubleSided&&u.enable(11),I.flipSided&&u.enable(12),I.useDepthPacking&&u.enable(13),I.dithering&&u.enable(14),I.transmission&&u.enable(15),I.sheen&&u.enable(16),I.opaque&&u.enable(17),I.pointsUvs&&u.enable(18),I.decodeVideoTexture&&u.enable(19),I.decodeVideoTextureEmissive&&u.enable(20),I.alphaToCoverage&&u.enable(21),I.numLightProbeGrids>0&&u.enable(22),I.hasPositionAttribute&&u.enable(23),w.push(u.mask)}function T(w){const I=_[w.type];let $;if(I){const z=ki[I];$=sy.clone(z.uniforms)}else $=w.uniforms;return $}function D(w,I){let $=y.get(I);return $!==void 0?++$.usedTimes:($=new NE(s,I,w,o),m.push($),y.set(I,$)),$}function P(w){if(--w.usedTimes===0){const I=m.indexOf(w);m[I]=m[m.length-1],m.pop(),y.delete(w.cacheKey),w.destroy()}}function U(w){h.remove(w)}function O(){h.dispose()}return{getParameters:b,getProgramCacheKey:C,getUniforms:T,acquireProgram:D,releaseProgram:P,releaseShaderCache:U,programs:m,dispose:O}}function OE(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let h=s.get(u);return h===void 0&&(h={},s.set(u,h)),h}function r(u){s.delete(u)}function o(u,h,p){s.get(u)[h]=p}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function FE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function w0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function b0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(_){let E=0;return _.isInstancedMesh&&(E+=2),_.isSkinnedMesh&&(E+=1),E}function h(_,E,b,C,x,v){let T=s[e];return T===void 0?(T={id:_.id,object:_,geometry:E,material:b,materialVariant:u(_),groupOrder:C,renderOrder:_.renderOrder,z:x,group:v},s[e]=T):(T.id=_.id,T.object=_,T.geometry=E,T.material=b,T.materialVariant=u(_),T.groupOrder=C,T.renderOrder=_.renderOrder,T.z=x,T.group=v),e++,T}function p(_,E,b,C,x,v,T){T.reversedDepth===!0&&(x=-x);const D=h(_,E,b,C,x,v);b.transmission>0?r.push(D):b.transparent===!0?o.push(D):t.push(D)}function m(_,E,b,C,x,v){const T=h(_,E,b,C,x,v);b.transmission>0?r.unshift(T):b.transparent===!0?o.unshift(T):t.unshift(T)}function y(_,E){t.length>1&&t.sort(_||FE),r.length>1&&r.sort(E||w0),o.length>1&&o.sort(E||w0)}function S(){for(let _=e,E=s.length;_<E;_++){const b=s[_];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:p,unshift:m,finish:S,sort:y}}function kE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new b0,s.set(r,[u])):o>=l.length?(u=new b0,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function BE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new ie,color:new At};break;case"SpotLight":t={position:new ie,direction:new ie,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ie,color:new At,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ie,skyColor:new At,groundColor:new At};break;case"RectAreaLight":t={color:new At,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return s[e.id]=t,t}}}function zE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let GE=0;function HE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function VE(s){const e=new BE,t=zE(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ie);const o=new ie,l=new Wt,u=new Wt;function h(m){let y=0,S=0,_=0;for(let ee=0;ee<9;ee++)r.probe[ee].set(0,0,0);let E=0,b=0,C=0,x=0,v=0,T=0,D=0,P=0,U=0,O=0,w=0,I=0,$=0,z=0;m.sort(HE);for(let ee=0,de=m.length;ee<de;ee++){const V=m[ee],oe=V.color,Q=V.intensity,Y=V.distance;let j=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===as?j=V.shadow.map.texture:j=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)y+=oe.r*Q,S+=oe.g*Q,_+=oe.b*Q;else if(V.isLightProbe){for(let q=0;q<9;q++)r.probe[q].addScaledVector(V.sh.coefficients[q],Q);z++}else if(V.isSunLight){const q=e.get(V);if(q.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const L=V.shadow,M=t.get(V);M.shadowIntensity=L.intensity,M.shadowBias=L.bias,M.shadowNormalBias=L.normalBias,M.shadowRadius=L.radius,M.shadowMapSize.copy(L.mapSize).multiply(L.getFrameExtents()),r.sunShadow[b]=M,r.sunShadowMap[b]=j;const H=L.getViewportCount();for(let xe=0;xe<H;xe++)r.sunShadowMatrix[C+xe]=L.getMatrix(xe),r.sunShadowCascade[C+xe]=L._cascadeData[xe];C+=H,b++}r.sun[E]=q,E++}else if(V.isDirectionalLight){const q=e.get(V);if(q.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const L=V.shadow,M=t.get(V);M.shadowIntensity=L.intensity,M.shadowBias=L.bias,M.shadowNormalBias=L.normalBias,M.shadowRadius=L.radius,M.shadowMapSize=L.mapSize,r.directionalShadow[x]=M,r.directionalShadowMap[x]=j,r.directionalShadowMatrix[x]=V.shadow.matrix,U++}r.directional[x]=q,x++}else if(V.isSpotLight){const q=e.get(V);q.position.setFromMatrixPosition(V.matrixWorld),q.color.copy(oe).multiplyScalar(Q),q.distance=Y,q.coneCos=Math.cos(V.angle),q.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),q.decay=V.decay,r.spot[T]=q;const L=V.shadow;if(V.map&&(r.spotLightMap[I]=V.map,I++,L.updateMatrices(V),V.castShadow&&$++),r.spotLightMatrix[T]=L.matrix,V.castShadow){const M=t.get(V);M.shadowIntensity=L.intensity,M.shadowBias=L.bias,M.shadowNormalBias=L.normalBias,M.shadowRadius=L.radius,M.shadowMapSize=L.mapSize,r.spotShadow[T]=M,r.spotShadowMap[T]=j,w++}T++}else if(V.isRectAreaLight){const q=e.get(V);q.color.copy(oe).multiplyScalar(Q),q.halfWidth.set(V.width*.5,0,0),q.halfHeight.set(0,V.height*.5,0),r.rectArea[D]=q,D++}else if(V.isPointLight){const q=e.get(V);if(q.color.copy(V.color).multiplyScalar(V.intensity),q.distance=V.distance,q.decay=V.decay,V.castShadow){const L=V.shadow,M=t.get(V);M.shadowIntensity=L.intensity,M.shadowBias=L.bias,M.shadowNormalBias=L.normalBias,M.shadowRadius=L.radius,M.shadowMapSize=L.mapSize,M.shadowCameraNear=L.camera.near,M.shadowCameraFar=L.camera.far,r.pointShadow[v]=M,r.pointShadowMap[v]=j,r.pointShadowMatrix[v]=V.shadow.matrix,O++}r.point[v]=q,v++}else if(V.isHemisphereLight){const q=e.get(V);q.skyColor.copy(V.color).multiplyScalar(Q),q.groundColor.copy(V.groundColor).multiplyScalar(Q),r.hemi[P]=q,P++}}D>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ge.LTC_FLOAT_1,r.rectAreaLTC2=Ge.LTC_FLOAT_2):(r.rectAreaLTC1=Ge.LTC_HALF_1,r.rectAreaLTC2=Ge.LTC_HALF_2)),r.ambient[0]=y,r.ambient[1]=S,r.ambient[2]=_;const K=r.hash;(K.sunLength!==E||K.directionalLength!==x||K.pointLength!==v||K.spotLength!==T||K.rectAreaLength!==D||K.hemiLength!==P||K.numSunShadows!==b||K.numDirectionalShadows!==U||K.numPointShadows!==O||K.numSpotShadows!==w||K.numSpotMaps!==I||K.numLightProbes!==z)&&(r.sun.length=E,r.directional.length=x,r.spot.length=T,r.rectArea.length=D,r.point.length=v,r.hemi.length=P,r.sunShadow.length=b,r.sunShadowMap.length=b,r.sunShadowMatrix.length=C,r.sunShadowCascade.length=C,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.directionalShadowMatrix.length=U,r.pointShadow.length=O,r.pointShadowMap.length=O,r.pointShadowMatrix.length=O,r.spotShadow.length=w,r.spotShadowMap.length=w,r.spotLightMatrix.length=w+I-$,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=$,r.numLightProbes=z,K.sunLength=E,K.directionalLength=x,K.pointLength=v,K.spotLength=T,K.rectAreaLength=D,K.hemiLength=P,K.numSunShadows=b,K.numDirectionalShadows=U,K.numPointShadows=O,K.numSpotShadows=w,K.numSpotMaps=I,K.numLightProbes=z,r.version=GE++)}function p(m,y){let S=0,_=0,E=0,b=0,C=0,x=0;const v=y.matrixWorldInverse;for(let T=0,D=m.length;T<D;T++){const P=m[T];if(P.isSunLight){const U=r.sun[S];U.direction.setFromMatrixPosition(P.matrixWorld),U.direction.transformDirection(v),S++}else if(P.isDirectionalLight){const U=r.directional[_];U.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(v),_++}else if(P.isSpotLight){const U=r.spot[b];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(v),U.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(v),b++}else if(P.isRectAreaLight){const U=r.rectArea[C];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(v),u.identity(),l.copy(P.matrixWorld),l.premultiply(v),u.extractRotation(l),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),U.halfWidth.applyMatrix4(u),U.halfHeight.applyMatrix4(u),C++}else if(P.isPointLight){const U=r.point[E];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(v),E++}else if(P.isHemisphereLight){const U=r.hemi[x];U.direction.setFromMatrixPosition(P.matrixWorld),U.direction.transformDirection(v),x++}}}return{setup:h,setupView:p,state:r}}function T0(s){const e=new VE(s),t=[],r=[],o=[];function l(S){y.camera=S,t.length=0,r.length=0,o.length=0}function u(S){S.isLightProbeGrid?o.push(S):t.push(S)}function h(S){r.push(S)}function p(){e.setup(t),o.sort((S,_)=>S.priority-_.priority||S.id-_.id)}function m(S){e.setupView(t,S)}const y={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:y,setupLights:p,setupLightsView:m,pushLight:u,pushShadow:h}}function jE(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let h;return u===void 0?(h=new T0(s),e.set(o,[h])):l>=u.length?(h=new T0(s),u.push(h)):h=u[l],h}function r(){e=new WeakMap}return{get:t,dispose:r}}const WE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,YE=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],qE=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],A0=new Wt,Ja=new ie,Pd=new ie;function $E(s,e,t){let r=new lo;const o=new St,l=new St,u=new tn,h=new cy,p=new uy,m={},y=t.maxTextureSize,S={[ss]:$n,[$n]:ss,[pi]:pi},_=new os({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:WE,fragmentShader:XE}),E=_.clone();E.defines.HORIZONTAL_PASS=1;const b=new xn;b.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new yt(b,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$l;let v=this.type;this.render=function(O,w,I){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||O.length===0)return;this.type===Bv&&(ct("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=$l);const $=s.getRenderTarget(),z=s.getActiveCubeFace(),K=s.getActiveMipmapLevel(),ee=s.state;ee.setBlending(qs),ee.buffers.depth.getReversed()===!0?ee.buffers.color.setClear(0,0,0,0):ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const de=v!==this.type;de&&w.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(oe=>oe.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,oe=O.length;V<oe;V++){const Q=O[V],Y=Q.shadow;if(Y===void 0){ct("WebGLShadowMap:",Q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;o.copy(Y.mapSize);const j=Y.getFrameExtents();o.multiply(j),l.copy(Y.mapSize),(o.x>y||o.y>y)&&(o.x>y&&(l.x=Math.floor(y/j.x),o.x=l.x*j.x,Y.mapSize.x=l.x),o.y>y&&(l.y=Math.floor(y/j.y),o.y=l.y*j.y,Y.mapSize.y=l.y));const q=s.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=q,Y.map===null||de===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Qa){if(Q.isPointLight){ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Hi(o.x,o.y,{format:as,type:ji,minFilter:qn,magFilter:qn,generateMipmaps:!1}),Y.map.texture.name=Q.name+".shadowMap",Y.map.depthTexture=new na(o.x,o.y,Bi),Y.map.depthTexture.name=Q.name+".shadowMapDepth",Y.map.depthTexture.format=kr,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Rn,Y.map.depthTexture.magFilter=Rn}else Q.isPointLight?(Y.map=new Vf(o.x),Y.map.depthTexture=new _g(o.x,Vi)):(Y.map=new Hi(o.x,o.y),Y.map.depthTexture=new na(o.x,o.y,Vi)),Y.map.depthTexture.name=Q.name+".shadowMap",Y.map.depthTexture.format=kr,this.type===$l?(Y.map.depthTexture.compareFunction=q?og:ag,Y.map.depthTexture.minFilter=qn,Y.map.depthTexture.magFilter=qn):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Rn,Y.map.depthTexture.magFilter=Rn);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==o.x||Y.map.height!==o.y)&&Y.map.setSize(o.x,o.y);const L=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();Q.isPointLight!==!0&&Y.updateMatrices(Q,I);const M=(Y.camera.layers.mask&4294967294)!==0?Y.camera.layers:I.layers;for(let H=0;H<L;H++){const xe=Y.getCamera(H);if(Q.isPointLight){const G=Y.camera,te=Y.matrix,fe=Q.distance||G.far;fe!==G.far&&(G.far=fe,G.updateProjectionMatrix()),Ja.setFromMatrixPosition(Q.matrixWorld),G.position.copy(Ja),Pd.copy(G.position),Pd.add(YE[H]),G.up.copy(qE[H]),G.lookAt(Pd),G.updateMatrixWorld(),te.makeTranslation(-Ja.x,-Ja.y,-Ja.z),A0.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(A0,G.coordinateSystem,G.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)s.setRenderTarget(Y.map,H),s.clear();else{H===0&&(s.setRenderTarget(Y.map),s.clear());const G=Y.getViewport(H);u.set(l.x*G.x,l.y*G.y,l.x*G.z,l.y*G.w),ee.viewport(u)}r=Y.getFrustum(H),P(w,I,xe,Q,M,this.type)}Y.isPointLightShadow!==!0&&this.type===Qa&&T(Y,I),Y.needsUpdate=!1}v=this.type,x.needsUpdate=!1,s.setRenderTarget($,z,K)};function T(O,w){const I=e.update(C);_.defines.VSM_SAMPLES!==O.blurSamples&&(_.defines.VSM_SAMPLES=O.blurSamples,E.defines.VSM_SAMPLES=O.blurSamples,_.needsUpdate=!0,E.needsUpdate=!0),O.mapPass===null?O.mapPass=new Hi(o.x,o.y,{format:as,type:ji}):(O.mapPass.width!==O.map.width||O.mapPass.height!==O.map.height)&&O.mapPass.setSize(O.map.width,O.map.height),_.uniforms.shadow_pass.value=O.map.depthTexture,_.uniforms.resolution.value.set(O.map.width,O.map.height),_.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(w,null,I,_,C,null),E.uniforms.shadow_pass.value=O.mapPass.texture,E.uniforms.resolution.value.set(O.map.width,O.map.height),E.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(w,null,I,E,C,null)}function D(O,w,I,$){let z=null;const K=I.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(K!==void 0)z=K;else if(z=I.isPointLight===!0?p:h,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const ee=z.uuid,de=w.uuid;let V=m[ee];V===void 0&&(V={},m[ee]=V);let oe=V[de];oe===void 0&&(oe=z.clone(),V[de]=oe,w.addEventListener("dispose",U)),z=oe}if(z.visible=w.visible,z.wireframe=w.wireframe,$===Qa?z.side=w.shadowSide!==null?w.shadowSide:w.side:z.side=w.shadowSide!==null?w.shadowSide:S[w.side],z.alphaMap=w.alphaMap,z.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,z.map=w.map,z.clipShadows=w.clipShadows,z.clippingPlanes=w.clippingPlanes,z.clipIntersection=w.clipIntersection,z.displacementMap=w.displacementMap,z.displacementScale=w.displacementScale,z.displacementBias=w.displacementBias,z.wireframeLinewidth=w.wireframeLinewidth,z.linewidth=w.linewidth,I.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const ee=s.properties.get(z);ee.light=I}return z}function P(O,w,I,$,z,K){if(O.visible===!1)return;if(O.layers.test(z)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&K===Qa)&&(!O.frustumCulled||O.intersectsFrustum(r))){O.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,O.matrixWorld);const V=e.update(O),oe=O.material;if(Array.isArray(oe)){const Q=V.groups;for(let Y=0,j=Q.length;Y<j;Y++){const q=Q[Y],L=oe[q.materialIndex];if(L&&L.visible){const M=D(O,L,$,K);O.onBeforeShadow(s,O,w,I,V,M,q),s.renderBufferDirect(I,null,V,M,O,q),O.onAfterShadow(s,O,w,I,V,M,q)}}}else if(oe.visible){const Q=D(O,oe,$,K);O.onBeforeShadow(s,O,w,I,V,Q,null),s.renderBufferDirect(I,null,V,Q,O,null),O.onAfterShadow(s,O,w,I,V,Q,null)}}const de=O.children;for(let V=0,oe=de.length;V<oe;V++)P(de[V],w,I,$,z,K)}function U(O){O.target.removeEventListener("dispose",U);for(const I in m){const $=m[I],z=O.target.uuid;z in $&&($[z].dispose(),delete $[z])}}}function KE(s,e){function t(){let k=!1;const _e=new tn;let me=null;const we=new tn(0,0,0,0);return{setMask:function(Ce){me!==Ce&&!k&&(s.colorMask(Ce,Ce,Ce,Ce),me=Ce)},setLocked:function(Ce){k=Ce},setClear:function(Ce,Ie,Ze,ht,Ae){Ae===!0&&(Ce*=ht,Ie*=ht,Ze*=ht),_e.set(Ce,Ie,Ze,ht),we.equals(_e)===!1&&(s.clearColor(Ce,Ie,Ze,ht),we.copy(_e))},reset:function(){k=!1,me=null,we.set(-1,0,0,0)}}}function r(){let k=!1,_e=!1,me=null,we=null,Ce=null;return{setReversed:function(Ie){if(_e!==Ie){const Ze=e.get("EXT_clip_control");Ie?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT),_e=Ie;const ht=Ce;Ce=null,this.setClear(ht)}},getReversed:function(){return _e},setTest:function(Ie){Ie?he(s.DEPTH_TEST):Ee(s.DEPTH_TEST)},setMask:function(Ie){me!==Ie&&!k&&(s.depthMask(Ie),me=Ie)},setFunc:function(Ie){if(_e&&(Ie=__[Ie]),we!==Ie){switch(Ie){case Id:s.depthFunc(s.NEVER);break;case Ld:s.depthFunc(s.ALWAYS);break;case Dd:s.depthFunc(s.LESS);break;case io:s.depthFunc(s.LEQUAL);break;case Ud:s.depthFunc(s.EQUAL);break;case Od:s.depthFunc(s.GEQUAL);break;case Fd:s.depthFunc(s.GREATER);break;case kd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}we=Ie}},setLocked:function(Ie){k=Ie},setClear:function(Ie){Ce!==Ie&&(Ce=Ie,_e&&(Ie=1-Ie),s.clearDepth(Ie))},reset:function(){k=!1,me=null,we=null,Ce=null,_e=!1}}}function o(){let k=!1,_e=null,me=null,we=null,Ce=null,Ie=null,Ze=null,ht=null,Ae=null;return{setTest:function(nt){k||(nt?he(s.STENCIL_TEST):Ee(s.STENCIL_TEST))},setMask:function(nt){_e!==nt&&!k&&(s.stencilMask(nt),_e=nt)},setFunc:function(nt,ut,ze){(me!==nt||we!==ut||Ce!==ze)&&(s.stencilFunc(nt,ut,ze),me=nt,we=ut,Ce=ze)},setOp:function(nt,ut,ze){(Ie!==nt||Ze!==ut||ht!==ze)&&(s.stencilOp(nt,ut,ze),Ie=nt,Ze=ut,ht=ze)},setLocked:function(nt){k=nt},setClear:function(nt){Ae!==nt&&(s.clearStencil(nt),Ae=nt)},reset:function(){k=!1,_e=null,me=null,we=null,Ce=null,Ie=null,Ze=null,ht=null,Ae=null}}}const l=new t,u=new r,h=new o;let p={};const m=new WeakMap;let y={},S={},_={},E=new WeakMap,b=[],C=null,x=!1,v=null,T=null,D=null,P=null,U=null,O=null,w=null,I=new At(0,0,0),$=0,z=!1,K=null,ee=null,de=null,V=null,oe=null;const Q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,j=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=j>=1):q.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=j>=2);let L=null,M={};const H=s.getParameter(s.SCISSOR_BOX),xe=s.getParameter(s.VIEWPORT),G=new tn().fromArray(H),te=new tn().fromArray(xe);function fe(k,_e,me,we){const Ce=new Uint8Array(4),Ie=s.createTexture();s.bindTexture(k,Ie),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ze=0;Ze<me;Ze++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(_e,0,s.RGBA,1,1,we,0,s.RGBA,s.UNSIGNED_BYTE,Ce):s.texImage2D(_e+Ze,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ce);return Ie}const ge={};ge[s.TEXTURE_2D]=fe(s.TEXTURE_2D,s.TEXTURE_2D,1),ge[s.TEXTURE_CUBE_MAP]=fe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[s.TEXTURE_2D_ARRAY]=fe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ge[s.TEXTURE_3D]=fe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),h.setClear(0),he(s.DEPTH_TEST),u.setFunc(io),It(!1),gt(bm),he(s.CULL_FACE),Et(qs);function he(k){y[k]!==!0&&(s.enable(k),y[k]=!0)}function Ee(k){y[k]!==!1&&(s.disable(k),y[k]=!1)}function et(k,_e){return _[k]!==_e?(s.bindFramebuffer(k,_e),_[k]=_e,k===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=_e),k===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=_e),!0):!1}function Ue(k,_e){let me=b,we=!1;if(k){me=E.get(_e),me===void 0&&(me=[],E.set(_e,me));const Ce=k.textures;if(me.length!==Ce.length||me[0]!==s.COLOR_ATTACHMENT0){for(let Ie=0,Ze=Ce.length;Ie<Ze;Ie++)me[Ie]=s.COLOR_ATTACHMENT0+Ie;me.length=Ce.length,we=!0}}else me[0]!==s.BACK&&(me[0]=s.BACK,we=!0);we&&s.drawBuffers(me)}function tt(k){return C!==k?(s.useProgram(k),C=k,!0):!1}const st={[Ys]:s.FUNC_ADD,[Gv]:s.FUNC_SUBTRACT,[Hv]:s.FUNC_REVERSE_SUBTRACT};st[Vv]=s.MIN,st[jv]=s.MAX;const ke={[Wv]:s.ZERO,[Xv]:s.ONE,[Yv]:s.SRC_COLOR,[V0]:s.SRC_ALPHA,[Qv]:s.SRC_ALPHA_SATURATE,[Zv]:s.DST_COLOR,[$v]:s.DST_ALPHA,[qv]:s.ONE_MINUS_SRC_COLOR,[j0]:s.ONE_MINUS_SRC_ALPHA,[Jv]:s.ONE_MINUS_DST_COLOR,[Kv]:s.ONE_MINUS_DST_ALPHA,[e_]:s.CONSTANT_COLOR,[t_]:s.ONE_MINUS_CONSTANT_COLOR,[n_]:s.CONSTANT_ALPHA,[i_]:s.ONE_MINUS_CONSTANT_ALPHA};function Et(k,_e,me,we,Ce,Ie,Ze,ht,Ae,nt){if(k===qs){x===!0&&(Ee(s.BLEND),x=!1);return}if(x===!1&&(he(s.BLEND),x=!0),k!==zv){if(k!==v||nt!==z){if((T!==Ys||U!==Ys)&&(s.blendEquation(s.FUNC_ADD),T=Ys,U=Ys),nt)switch(k){case to:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Tm:s.blendFunc(s.ONE,s.ONE);break;case Am:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Rm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ft("WebGLState: Invalid blending: ",k);break}else switch(k){case to:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Tm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Am:Ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rm:Ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ft("WebGLState: Invalid blending: ",k);break}D=null,P=null,O=null,w=null,I.set(0,0,0),$=0,v=k,z=nt}return}Ce=Ce||_e,Ie=Ie||me,Ze=Ze||we,(_e!==T||Ce!==U)&&(s.blendEquationSeparate(st[_e],st[Ce]),T=_e,U=Ce),(me!==D||we!==P||Ie!==O||Ze!==w)&&(s.blendFuncSeparate(ke[me],ke[we],ke[Ie],ke[Ze]),D=me,P=we,O=Ie,w=Ze),(ht.equals(I)===!1||Ae!==$)&&(s.blendColor(ht.r,ht.g,ht.b,Ae),I.copy(ht),$=Ae),v=k,z=!1}function wt(k,_e){k.side===pi?Ee(s.CULL_FACE):he(s.CULL_FACE);let me=k.side===$n;_e&&(me=!me),It(me),k.blending===to&&k.transparent===!1?Et(qs):Et(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),u.setFunc(k.depthFunc),u.setTest(k.depthTest),u.setMask(k.depthWrite),l.setMask(k.colorWrite);const we=k.stencilWrite;h.setTest(we),we&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),pt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?he(s.SAMPLE_ALPHA_TO_COVERAGE):Ee(s.SAMPLE_ALPHA_TO_COVERAGE)}function It(k){K!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),K=k)}function gt(k){k!==Fv?(he(s.CULL_FACE),k!==ee&&(k===bm?s.cullFace(s.BACK):k===kv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ee(s.CULL_FACE),ee=k}function Kt(k){k!==de&&(Y&&s.lineWidth(k),de=k)}function pt(k,_e,me){k?(he(s.POLYGON_OFFSET_FILL),(V!==_e||oe!==me)&&(V=_e,oe=me,u.getReversed()&&(_e=-_e,me=-me),s.polygonOffset(_e,me))):Ee(s.POLYGON_OFFSET_FILL)}function Zt(k){k?he(s.SCISSOR_TEST):Ee(s.SCISSOR_TEST)}function cn(k){k===void 0&&(k=s.TEXTURE0+Q-1),L!==k&&(s.activeTexture(k),L=k)}function an(k,_e,me){me===void 0&&(L===null?me=s.TEXTURE0+Q-1:me=L);let we=M[me];we===void 0&&(we={type:void 0,texture:void 0},M[me]=we),(we.type!==k||we.texture!==_e)&&(L!==me&&(s.activeTexture(me),L=me),s.bindTexture(k,_e||ge[k]),we.type=k,we.texture=_e)}function Z(){const k=M[L];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function fn(){try{s.compressedTexImage2D(...arguments)}catch(k){Ft("WebGLState:",k)}}function Lt(){try{s.compressedTexImage3D(...arguments)}catch(k){Ft("WebGLState:",k)}}function Rt(){try{s.texSubImage2D(...arguments)}catch(k){Ft("WebGLState:",k)}}function Pe(){try{s.texSubImage3D(...arguments)}catch(k){Ft("WebGLState:",k)}}function kt(){try{s.compressedTexSubImage2D(...arguments)}catch(k){Ft("WebGLState:",k)}}function We(){try{s.compressedTexSubImage3D(...arguments)}catch(k){Ft("WebGLState:",k)}}function it(){try{s.texStorage2D(...arguments)}catch(k){Ft("WebGLState:",k)}}function F(){try{s.texStorage3D(...arguments)}catch(k){Ft("WebGLState:",k)}}function A(){try{s.texImage2D(...arguments)}catch(k){Ft("WebGLState:",k)}}function re(){try{s.texImage3D(...arguments)}catch(k){Ft("WebGLState:",k)}}function Te(k){return S[k]!==void 0?S[k]:s.getParameter(k)}function ye(k,_e){S[k]!==_e&&(s.pixelStorei(k,_e),S[k]=_e)}function Ne(k){G.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),G.copy(k))}function De(k){te.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),te.copy(k))}function ve(k,_e){let me=m.get(_e);me===void 0&&(me=new WeakMap,m.set(_e,me));let we=me.get(k);we===void 0&&(we=s.getUniformBlockIndex(_e,k.name),s.uniformBlockBinding(_e,we,we),me.set(k,we))}function se(k,_e,me){const Ce=m.get(_e).get(k);p[Ce]!==me&&(s.bindBufferBase(s.UNIFORM_BUFFER,Ce,me),p[Ce]=me)}function Se(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),y={},S={},L=null,M={},_={},p={},E=new WeakMap,b=[],C=null,x=!1,v=null,T=null,D=null,P=null,U=null,O=null,w=null,I=new At(0,0,0),$=0,z=!1,K=null,ee=null,de=null,V=null,oe=null,G.set(0,0,s.canvas.width,s.canvas.height),te.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),h.reset()}return{buffers:{color:l,depth:u,stencil:h},enable:he,disable:Ee,bindFramebuffer:et,drawBuffers:Ue,useProgram:tt,setBlending:Et,setMaterial:wt,setFlipSided:It,setCullFace:gt,setLineWidth:Kt,setPolygonOffset:pt,setScissorTest:Zt,activeTexture:cn,bindTexture:an,unbindTexture:Z,compressedTexImage2D:fn,compressedTexImage3D:Lt,texImage2D:A,texImage3D:re,pixelStorei:ye,getParameter:Te,updateUBOMapping:ve,uniformBlockBinding:se,texStorage2D:it,texStorage3D:F,texSubImage2D:Rt,texSubImage3D:Pe,compressedTexSubImage2D:kt,compressedTexSubImage3D:We,scissor:Ne,viewport:De,reset:Se}}function ZE(s,e,t,r,o,l,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new St,y=new WeakMap,S=new Set;let _;const E=new WeakMap,b=new Set,C=new FinalizationRegistry(F=>b.delete(F));let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(F,A){return x?new OffscreenCanvas(F,A):ac("canvas")}function T(F,A,re){let Te=1;const ye=it(F);if((ye.width>re||ye.height>re)&&(Te=re/Math.max(ye.width,ye.height)),Te<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const Ne=Math.floor(Te*ye.width),De=Math.floor(Te*ye.height);_===void 0&&(_=v(Ne,De));const ve=A?v(Ne,De):_;return ve.width=Ne,ve.height=De,ve.getContext("2d").drawImage(F,0,0,Ne,De),ct("WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+Ne+"x"+De+")."),ve}else return"data"in F&&ct("WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),F;return F}function D(F){return F.generateMipmaps}function P(F){s.generateMipmap(F)}function U(F){return F.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?s.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function O(F,A,re,Te,ye,Ne=!1){if(F!==null){if(s[F]!==void 0)return s[F];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let De;Te&&(De=e.get("EXT_texture_norm16"),De||ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ve=A;if(A===s.RED&&(re===s.FLOAT&&(ve=s.R32F),re===s.HALF_FLOAT&&(ve=s.R16F),re===s.UNSIGNED_BYTE&&(ve=s.R8),re===s.UNSIGNED_SHORT&&De&&(ve=De.R16_EXT),re===s.SHORT&&De&&(ve=De.R16_SNORM_EXT)),A===s.RED_INTEGER&&(re===s.UNSIGNED_BYTE&&(ve=s.R8UI),re===s.UNSIGNED_SHORT&&(ve=s.R16UI),re===s.UNSIGNED_INT&&(ve=s.R32UI),re===s.BYTE&&(ve=s.R8I),re===s.SHORT&&(ve=s.R16I),re===s.INT&&(ve=s.R32I)),A===s.RG&&(re===s.FLOAT&&(ve=s.RG32F),re===s.HALF_FLOAT&&(ve=s.RG16F),re===s.UNSIGNED_BYTE&&(ve=s.RG8),re===s.UNSIGNED_SHORT&&De&&(ve=De.RG16_EXT),re===s.SHORT&&De&&(ve=De.RG16_SNORM_EXT)),A===s.RG_INTEGER&&(re===s.UNSIGNED_BYTE&&(ve=s.RG8UI),re===s.UNSIGNED_SHORT&&(ve=s.RG16UI),re===s.UNSIGNED_INT&&(ve=s.RG32UI),re===s.BYTE&&(ve=s.RG8I),re===s.SHORT&&(ve=s.RG16I),re===s.INT&&(ve=s.RG32I)),A===s.RGB_INTEGER&&(re===s.UNSIGNED_BYTE&&(ve=s.RGB8UI),re===s.UNSIGNED_SHORT&&(ve=s.RGB16UI),re===s.UNSIGNED_INT&&(ve=s.RGB32UI),re===s.BYTE&&(ve=s.RGB8I),re===s.SHORT&&(ve=s.RGB16I),re===s.INT&&(ve=s.RGB32I)),A===s.RGBA_INTEGER&&(re===s.UNSIGNED_BYTE&&(ve=s.RGBA8UI),re===s.UNSIGNED_SHORT&&(ve=s.RGBA16UI),re===s.UNSIGNED_INT&&(ve=s.RGBA32UI),re===s.BYTE&&(ve=s.RGBA8I),re===s.SHORT&&(ve=s.RGBA16I),re===s.INT&&(ve=s.RGBA32I)),A===s.RGB&&(re===s.UNSIGNED_SHORT&&De&&(ve=De.RGB16_EXT),re===s.SHORT&&De&&(ve=De.RGB16_SNORM_EXT),re===s.UNSIGNED_INT_5_9_9_9_REV&&(ve=s.RGB9_E5),re===s.UNSIGNED_INT_10F_11F_11F_REV&&(ve=s.R11F_G11F_B10F)),A===s.RGBA){const se=Ne?sc:Nt.getTransfer(ye);re===s.FLOAT&&(ve=s.RGBA32F),re===s.HALF_FLOAT&&(ve=s.RGBA16F),re===s.UNSIGNED_BYTE&&(ve=se===zt?s.SRGB8_ALPHA8:s.RGBA8),re===s.UNSIGNED_SHORT&&De&&(ve=De.RGBA16_EXT),re===s.SHORT&&De&&(ve=De.RGBA16_SNORM_EXT),re===s.UNSIGNED_SHORT_4_4_4_4&&(ve=s.RGBA4),re===s.UNSIGNED_SHORT_5_5_5_1&&(ve=s.RGB5_A1)}return(ve===s.R16F||ve===s.R32F||ve===s.RG16F||ve===s.RG32F||ve===s.RGBA16F||ve===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ve}function w(F,A){let re;return F?A===null||A===Vi||A===ea?re=s.DEPTH24_STENCIL8:A===Bi?re=s.DEPTH32F_STENCIL8:A===so&&(re=s.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Vi||A===ea?re=s.DEPTH_COMPONENT24:A===Bi?re=s.DEPTH_COMPONENT32F:A===so&&(re=s.DEPTH_COMPONENT16),re}function I(F,A){return D(F)===!0||F.isFramebufferTexture&&F.minFilter!==Rn&&F.minFilter!==qn?Math.log2(Math.max(A.width,A.height))+1:F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?A.mipmaps.length:1}function $(F){const A=new WeakRef(F);r.get(F).__ref=A,b.add(A),C.register(F,A,A)}function z(F){const A=r.get(F).__ref;A!==void 0&&(b.delete(A),C.unregister(A))}function K(F){de(F.target)}function ee(F){V(F.target)}function de(F){F.removeEventListener("dispose",K),z(F),Q(F),F.isVideoTexture&&y.delete(F),F.isHTMLTexture&&S.delete(F)}function V(F){F.removeEventListener("dispose",ee),z(F),j(F)}function oe(){for(const F of b){const A=F.deref();A!==void 0&&(A.isRenderTarget===!0?V(A):de(A))}b.clear(),S.clear()}function Q(F){const A=r.get(F);if(A.__webglInit===void 0)return;const re=F.source,Te=E.get(re);if(Te){const ye=Te[A.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&Y(F),Object.keys(Te).length===0&&E.delete(re)}r.remove(F)}function Y(F){const A=r.get(F);s.deleteTexture(A.__webglTexture);const re=F.source,Te=E.get(re);delete Te[A.__cacheKey],u.memory.textures--}function j(F){const A=r.get(F);A.__depthDisposeCallback&&A.__depthDisposeCallback();const re=F.depthTexture;if(re&&re.renderTarget===F&&de(re),F.isWebGLCubeRenderTarget)for(let ye=0;ye<6;ye++){if(Array.isArray(A.__webglFramebuffer[ye]))for(let Ne=0;Ne<A.__webglFramebuffer[ye].length;Ne++)s.deleteFramebuffer(A.__webglFramebuffer[ye][Ne]);else s.deleteFramebuffer(A.__webglFramebuffer[ye]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[ye])}else{if(Array.isArray(A.__webglFramebuffer))for(let ye=0;ye<A.__webglFramebuffer.length;ye++)s.deleteFramebuffer(A.__webglFramebuffer[ye]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ye=0;ye<A.__webglColorRenderbuffer.length;ye++)A.__webglColorRenderbuffer[ye]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[ye]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Te=F.textures;for(let ye=0,Ne=Te.length;ye<Ne;ye++){const De=r.get(Te[ye]);De.__webglTexture&&(s.deleteTexture(De.__webglTexture),u.memory.textures--),r.remove(Te[ye])}r.remove(F)}let q=0;function L(){q=0}function M(){return q}function H(F){q=F}function xe(){const F=q;return F>=o.maxTextures&&ct("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+o.maxTextures),q+=1,F}function G(F){const A=[];return A.push(F.wrapS),A.push(F.wrapT),A.push(F.wrapR||0),A.push(F.magFilter),A.push(F.minFilter),A.push(F.anisotropy),A.push(F.internalFormat),A.push(F.format),A.push(F.type),A.push(F.generateMipmaps),A.push(F.mipmapsAutoUpdate),A.push(F.premultiplyAlpha),A.push(F.flipY),A.push(F.unpackAlignment),A.push(F.colorSpace),A.join()}function te(F,A){const re=r.get(F);if(F.isVideoTexture&&kt(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&re.__version!==F.version){const Te=F.image;if(Te===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(Te.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{wt(re,F,A);return}}else F.isExternalTexture&&(re.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,re.__webglTexture,s.TEXTURE0+A)}function fe(F,A){const re=r.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&re.__version!==F.version){wt(re,F,A);return}else F.isExternalTexture&&(re.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,re.__webglTexture,s.TEXTURE0+A)}function ge(F,A){const re=r.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&re.__version!==F.version){wt(re,F,A);return}t.bindTexture(s.TEXTURE_3D,re.__webglTexture,s.TEXTURE0+A)}function he(F,A){const re=r.get(F);if(F.version>0&&re.__version!==F.version){It(re,F,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture,s.TEXTURE0+A)}const Ee={[Bd]:s.REPEAT,[sr]:s.CLAMP_TO_EDGE,[zd]:s.MIRRORED_REPEAT},et={[Rn]:s.NEAREST,[a_]:s.NEAREST_MIPMAP_NEAREST,[_l]:s.NEAREST_MIPMAP_LINEAR,[qn]:s.LINEAR,[sd]:s.LINEAR_MIPMAP_NEAREST,[Or]:s.LINEAR_MIPMAP_LINEAR},Ue={[u_]:s.NEVER,[lg]:s.ALWAYS,[d_]:s.LESS,[ag]:s.LEQUAL,[f_]:s.EQUAL,[og]:s.GEQUAL,[h_]:s.GREATER,[p_]:s.NOTEQUAL};function tt(F,A){if(A.type===Bi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===qn||A.magFilter===sd||A.magFilter===_l||A.magFilter===Or||A.minFilter===qn||A.minFilter===sd||A.minFilter===_l||A.minFilter===Or)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(F,s.TEXTURE_WRAP_S,Ee[A.wrapS]),s.texParameteri(F,s.TEXTURE_WRAP_T,Ee[A.wrapT]),(F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY)&&s.texParameteri(F,s.TEXTURE_WRAP_R,Ee[A.wrapR]),s.texParameteri(F,s.TEXTURE_MAG_FILTER,et[A.magFilter]),s.texParameteri(F,s.TEXTURE_MIN_FILTER,et[A.minFilter]),A.compareFunction&&(s.texParameteri(F,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(F,s.TEXTURE_COMPARE_FUNC,Ue[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Rn||A.minFilter!==_l&&A.minFilter!==Or||A.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const re=e.get("EXT_texture_filter_anisotropic");s.texParameterf(F,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function st(F,A){let re=!1;F.__webglInit===void 0&&(F.__webglInit=!0,A.addEventListener("dispose",K),$(A));const Te=A.source;let ye=E.get(Te);ye===void 0&&(ye={},E.set(Te,ye));const Ne=G(A);if(Ne!==F.__cacheKey){ye[Ne]===void 0&&(ye[Ne]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,re=!0),ye[Ne].usedTimes++;const De=ye[F.__cacheKey];De!==void 0&&(ye[F.__cacheKey].usedTimes--,De.usedTimes===0&&Y(A)),F.__cacheKey=Ne,F.__webglTexture=ye[Ne].texture}return re}function ke(F,A,re){return Math.floor(Math.floor(F/re)/A)}function Et(F,A,re,Te){const Ne=F.updateRanges;if(Ne.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,re,Te,A.data);else{Ne.sort((k,_e)=>k.start-_e.start);let De=0;for(let k=1;k<Ne.length;k++){const _e=Ne[De],me=Ne[k],we=_e.start+_e.count,Ce=ke(me.start,A.width,4),Ie=ke(_e.start,A.width,4);me.start<=we+1&&Ce===Ie&&ke(me.start+me.count-1,A.width,4)===Ce?_e.count=Math.max(_e.count,me.start+me.count-_e.start):(++De,Ne[De]=me)}Ne.length=De+1;const ve=t.getParameter(s.UNPACK_ROW_LENGTH),se=t.getParameter(s.UNPACK_SKIP_PIXELS),Se=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let k=0,_e=Ne.length;k<_e;k++){const me=Ne[k],we=Math.floor(me.start/4),Ce=Math.ceil(me.count/4),Ie=we%A.width,Ze=Math.floor(we/A.width),ht=Ce,Ae=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Ie),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ze),t.texSubImage2D(s.TEXTURE_2D,0,Ie,Ze,ht,Ae,re,Te,A.data)}F.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ve),t.pixelStorei(s.UNPACK_SKIP_PIXELS,se),t.pixelStorei(s.UNPACK_SKIP_ROWS,Se)}}function wt(F,A,re){let Te=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Te=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Te=s.TEXTURE_3D);const ye=st(F,A),Ne=A.source;t.bindTexture(Te,F.__webglTexture,s.TEXTURE0+re);const De=r.get(Ne);if(Ne.version!==De.__version||ye===!0){if(t.activeTexture(s.TEXTURE0+re),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const Ae=Nt.getPrimaries(Nt.workingColorSpace),nt=A.colorSpace===Ur?null:Nt.getPrimaries(A.colorSpace),ut=A.colorSpace===Ur||Ae===nt?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut)}t.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment);let se=T(A.image,!1,o.maxTextureSize);se=We(A,se);const Se=l.convert(A.format,A.colorSpace),k=l.convert(A.type);let _e=O(A.internalFormat,Se,k,A.normalized,A.colorSpace,A.isVideoTexture);tt(Te,A);let me;const we=A.mipmaps,Ce=A.isVideoTexture!==!0,Ie=De.__version===void 0||ye===!0,Ze=Ne.dataReady,ht=I(A,se);if(A.isDepthTexture)_e=w(A.format===Fr,A.type),Ie&&(Ce?t.texStorage2D(s.TEXTURE_2D,1,_e,se.width,se.height):t.texImage2D(s.TEXTURE_2D,0,_e,se.width,se.height,0,Se,k,null));else if(A.isDataTexture)if(we.length>0){Ce&&Ie&&t.texStorage2D(s.TEXTURE_2D,ht,_e,we[0].width,we[0].height);for(let Ae=0,nt=we.length;Ae<nt;Ae++)me=we[Ae],Ce?Ze&&t.texSubImage2D(s.TEXTURE_2D,Ae,0,0,me.width,me.height,Se,k,me.data):t.texImage2D(s.TEXTURE_2D,Ae,_e,me.width,me.height,0,Se,k,me.data);A.generateMipmaps=!1}else Ce?(Ie&&t.texStorage2D(s.TEXTURE_2D,ht,_e,se.width,se.height),Ze&&Et(A,se,Se,k)):t.texImage2D(s.TEXTURE_2D,0,_e,se.width,se.height,0,Se,k,se.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ce&&Ie&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ht,_e,we[0].width,we[0].height,se.depth);for(let Ae=0,nt=we.length;Ae<nt;Ae++)if(me=we[Ae],A.format!==zi)if(Se!==null)if(Ce){if(Ze)if(A.layerUpdates.size>0){const ut=a0(me.width,me.height,A.format,A.type);for(const ze of A.layerUpdates){const Ct=me.data.subarray(ze*ut/me.data.BYTES_PER_ELEMENT,(ze+1)*ut/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,ze,me.width,me.height,1,Se,Ct)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,0,me.width,me.height,se.depth,Se,me.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ae,_e,me.width,me.height,se.depth,0,me.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ce?Ze&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,0,me.width,me.height,se.depth,Se,k,me.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Ae,_e,me.width,me.height,se.depth,0,Se,k,me.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{Ce&&Ie&&t.texStorage2D(s.TEXTURE_2D,ht,_e,we[0].width,we[0].height);for(let Ae=0,nt=we.length;Ae<nt;Ae++)me=we[Ae],A.format!==zi?Se!==null?Ce?Ze&&t.compressedTexSubImage2D(s.TEXTURE_2D,Ae,0,0,me.width,me.height,Se,me.data):t.compressedTexImage2D(s.TEXTURE_2D,Ae,_e,me.width,me.height,0,me.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?Ze&&t.texSubImage2D(s.TEXTURE_2D,Ae,0,0,me.width,me.height,Se,k,me.data):t.texImage2D(s.TEXTURE_2D,Ae,_e,me.width,me.height,0,Se,k,me.data)}else if(A.isDataArrayTexture)if(Ce){if(Ie&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ht,_e,se.width,se.height,se.depth),Ze)if(A.layerUpdates.size>0){const Ae=a0(se.width,se.height,A.format,A.type);for(const nt of A.layerUpdates){const ut=se.data.subarray(nt*Ae/se.data.BYTES_PER_ELEMENT,(nt+1)*Ae/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,nt,se.width,se.height,1,Se,k,ut)}A.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Se,k,se.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,_e,se.width,se.height,se.depth,0,Se,k,se.data);else if(A.isData3DTexture)Ce?(Ie&&t.texStorage3D(s.TEXTURE_3D,ht,_e,se.width,se.height,se.depth),Ze&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Se,k,se.data)):t.texImage3D(s.TEXTURE_3D,0,_e,se.width,se.height,se.depth,0,Se,k,se.data);else if(A.isFramebufferTexture){if(Ie)if(Ce)t.texStorage2D(s.TEXTURE_2D,ht,_e,se.width,se.height);else{let Ae=se.width,nt=se.height;for(let ut=0;ut<ht;ut++)t.texImage2D(s.TEXTURE_2D,ut,_e,Ae,nt,0,Se,k,null),Ae>>=1,nt>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in s){const Ae=s.canvas;if(Ae.hasAttribute("layoutsubtree")||Ae.setAttribute("layoutsubtree","true"),se.parentNode!==Ae){Ae.appendChild(se),S.add(A),Ae.onpaint=nt=>{const ut=nt.changedElements;for(const ze of S)ut.includes(ze.image)&&(ze.needsUpdate=!0)},Ae.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,se);else{const ut=s.RGBA,ze=s.RGBA,Ct=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,ut,ze,Ct,se)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(we.length>0){if(Ce&&Ie){const Ae=it(we[0]);t.texStorage2D(s.TEXTURE_2D,ht,_e,Ae.width,Ae.height)}for(let Ae=0,nt=we.length;Ae<nt;Ae++)me=we[Ae],Ce?Ze&&t.texSubImage2D(s.TEXTURE_2D,Ae,0,0,Se,k,me):t.texImage2D(s.TEXTURE_2D,Ae,_e,Se,k,me);A.generateMipmaps=!1}else if(Ce){if(Ie){const Ae=it(se);t.texStorage2D(s.TEXTURE_2D,ht,_e,Ae.width,Ae.height)}Ze&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Se,k,se)}else t.texImage2D(s.TEXTURE_2D,0,_e,Se,k,se);D(A)&&A.mipmapsAutoUpdate===!0&&P(Te),De.__version=Ne.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function It(F,A,re){if(A.image.length!==6)return;const Te=st(F,A),ye=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+re);const Ne=r.get(ye);if(ye.version!==Ne.__version||Te===!0){t.activeTexture(s.TEXTURE0+re);const De=Nt.getPrimaries(Nt.workingColorSpace),ve=A.colorSpace===Ur?null:Nt.getPrimaries(A.colorSpace),se=A.colorSpace===Ur||De===ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const Se=A.isCompressedTexture||A.image[0].isCompressedTexture,k=A.image[0]&&A.image[0].isDataTexture,_e=[];for(let ze=0;ze<6;ze++)!Se&&!k?_e[ze]=T(A.image[ze],!0,o.maxCubemapSize):_e[ze]=k?A.image[ze].image:A.image[ze],_e[ze]=We(A,_e[ze]);const me=_e[0],we=l.convert(A.format,A.colorSpace),Ce=l.convert(A.type);let Ie=O(A.internalFormat,we,Ce,A.normalized,A.colorSpace);const Ze=A.isVideoTexture!==!0,ht=Ne.__version===void 0||Te===!0,Ae=ye.dataReady;let nt=I(A,me);tt(s.TEXTURE_CUBE_MAP,A);let ut;if(A.isDepthTexture){if(Ie=w(A.format===Fr,A.type),ht)if(Ze)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,Ie,me.width,me.height);else for(let ze=0;ze<6;ze++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,Ie,me.width,me.height,0,we,Ce,null)}else if(Se){Ze&&ht&&t.texStorage2D(s.TEXTURE_CUBE_MAP,nt,Ie,me.width,me.height);for(let ze=0;ze<6;ze++){ut=_e[ze].mipmaps;for(let Ct=0;Ct<ut.length;Ct++){const Jt=ut[Ct];A.format!==zi?we!==null?Ze?Ae&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ze,Ct,0,0,Jt.width,Jt.height,we,Jt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ze,Ct,Ie,Jt.width,Jt.height,0,Jt.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ze,Ct,0,0,Jt.width,Jt.height,we,Ce,Jt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ze,Ct,Ie,Jt.width,Jt.height,0,we,Ce,Jt.data)}}}else{if(ut=A.mipmaps,Ze&&ht){ut.length>0&&nt++;const ze=it(_e[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,nt,Ie,ze.width,ze.height)}for(let ze=0;ze<6;ze++)if(k){Ze?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,0,0,_e[ze].width,_e[ze].height,we,Ce,_e[ze].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,Ie,_e[ze].width,_e[ze].height,0,we,Ce,_e[ze].data);for(let Ct=0;Ct<ut.length;Ct++){const Kn=ut[Ct].image[ze].image;Ze?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ze,Ct+1,0,0,Kn.width,Kn.height,we,Ce,Kn.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ze,Ct+1,Ie,Kn.width,Kn.height,0,we,Ce,Kn.data)}}else{Ze?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,0,0,we,Ce,_e[ze]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,Ie,we,Ce,_e[ze]);for(let Ct=0;Ct<ut.length;Ct++){const Jt=ut[Ct];Ze?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ze,Ct+1,0,0,we,Ce,Jt.image[ze]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ze,Ct+1,Ie,we,Ce,Jt.image[ze])}}}D(A)&&A.mipmapsAutoUpdate===!0&&P(s.TEXTURE_CUBE_MAP),Ne.__version=ye.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function gt(F,A,re,Te,ye,Ne){const De=l.convert(re.format,re.colorSpace),ve=l.convert(re.type),se=O(re.internalFormat,De,ve,re.normalized,re.colorSpace),Se=r.get(A),k=r.get(re);if(k.__renderTarget=A,!Se.__hasExternalTextures){const _e=Math.max(1,A.width>>Ne),me=Math.max(1,A.height>>Ne);ye===s.TEXTURE_3D||ye===s.TEXTURE_2D_ARRAY?t.texImage3D(ye,Ne,se,_e,me,A.depth,0,De,ve,null):t.texImage2D(ye,Ne,se,_e,me,0,De,ve,null)}t.bindFramebuffer(s.FRAMEBUFFER,F),Pe(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Te,ye,k.__webglTexture,0,Rt(A)):(ye===s.TEXTURE_2D||ye>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Te,ye,k.__webglTexture,Ne),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Kt(F,A,re){if(s.bindRenderbuffer(s.RENDERBUFFER,F),A.depthBuffer){const Te=A.depthTexture,ye=Te&&Te.isDepthTexture?Te.type:null,Ne=w(A.stencilBuffer,ye),De=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Pe(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Rt(A),Ne,A.width,A.height):re?s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt(A),Ne,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Ne,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,De,s.RENDERBUFFER,F)}else{const Te=A.textures;for(let ye=0;ye<Te.length;ye++){const Ne=Te[ye],De=l.convert(Ne.format,Ne.colorSpace),ve=l.convert(Ne.type),se=O(Ne.internalFormat,De,ve,Ne.normalized,Ne.colorSpace);Pe(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Rt(A),se,A.width,A.height):re?s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt(A),se,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,se,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function pt(F,A,re){const Te=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,F),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ye=r.get(A.depthTexture);ye.__renderTarget=A;const Ne=Te?A.depthTexture.image[0]:A.depthTexture.image;(!ye.__webglTexture||Ne.width!==A.width||Ne.height!==A.height)&&(Ne.width=A.width,Ne.height=A.height,A.depthTexture.needsUpdate=!0),Te?he(A.depthTexture,0):te(A.depthTexture,0);const De=ye.__webglTexture,ve=Rt(A),se=Te?s.TEXTURE_CUBE_MAP_POSITIVE_X+re:s.TEXTURE_2D,Se=A.depthTexture.format===Fr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(A.depthTexture.format===kr)Pe(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Se,se,De,0,ve):s.framebufferTexture2D(s.FRAMEBUFFER,Se,se,De,0);else if(A.depthTexture.format===Fr)Pe(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Se,se,De,0,ve):s.framebufferTexture2D(s.FRAMEBUFFER,Se,se,De,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Zt(F){const A=r.get(F),re=F.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==F.depthTexture){const Te=F.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Te){const ye=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Te.removeEventListener("dispose",ye)};Te.addEventListener("dispose",ye),A.__depthDisposeCallback=ye}A.__boundDepthTexture=Te}if(F.depthTexture&&!A.__autoAllocateDepthBuffer)if(re)for(let Te=0;Te<6;Te++)pt(A.__webglFramebuffer[Te],F,Te);else F.texture.mipmaps.length>0?pt(A.__webglFramebuffer[0],F,0):pt(A.__webglFramebuffer,F,0);else if(re){A.__webglDepthbuffer=[];for(let Te=0;Te<6;Te++)if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[Te]),A.__webglDepthbuffer[Te]===void 0)A.__webglDepthbuffer[Te]=s.createRenderbuffer(),Kt(A.__webglDepthbuffer[Te],F,!1);else{const ye=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=A.__webglDepthbuffer[Te];s.bindRenderbuffer(s.RENDERBUFFER,Ne),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,Ne)}}else if(F.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),Kt(A.__webglDepthbuffer,F,!1);else{const ye=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ne),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,Ne)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function cn(F,A,re){const Te=r.get(F);A!==void 0&&gt(Te.__webglFramebuffer,F,F.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),re!==void 0&&Zt(F)}function an(F){const A=F.texture,re=r.get(F),Te=r.get(A);F.addEventListener("dispose",ee),$(F);const ye=F.textures,Ne=F.isWebGLCubeRenderTarget===!0,De=ye.length>1;if(De||(Te.__webglTexture===void 0&&(Te.__webglTexture=s.createTexture()),Te.__version=A.version,u.memory.textures++),Ne){re.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(A.mipmaps.length>0){re.__webglFramebuffer[ve]=[];for(let se=0;se<A.mipmaps.length;se++)re.__webglFramebuffer[ve][se]=s.createFramebuffer()}else re.__webglFramebuffer[ve]=s.createFramebuffer()}else{if(A.mipmaps.length>0){re.__webglFramebuffer=[];for(let ve=0;ve<A.mipmaps.length;ve++)re.__webglFramebuffer[ve]=s.createFramebuffer()}else re.__webglFramebuffer=s.createFramebuffer();if(De)for(let ve=0,se=ye.length;ve<se;ve++){const Se=r.get(ye[ve]);Se.__webglTexture===void 0&&(Se.__webglTexture=s.createTexture(),u.memory.textures++)}if(F.samples>0&&Pe(F)===!1){re.__webglMultisampledFramebuffer=s.createFramebuffer(),re.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let ve=0;ve<ye.length;ve++){const se=ye[ve];re.__webglColorRenderbuffer[ve]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,re.__webglColorRenderbuffer[ve]);const Se=l.convert(se.format,se.colorSpace),k=l.convert(se.type),_e=O(se.internalFormat,Se,k,se.normalized,se.colorSpace,F.isXRRenderTarget===!0),me=Rt(F);s.renderbufferStorageMultisample(s.RENDERBUFFER,me,_e,F.width,F.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,re.__webglColorRenderbuffer[ve])}s.bindRenderbuffer(s.RENDERBUFFER,null),F.depthBuffer&&(re.__webglDepthRenderbuffer=s.createRenderbuffer(),Kt(re.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ne){t.bindTexture(s.TEXTURE_CUBE_MAP,Te.__webglTexture),tt(s.TEXTURE_CUBE_MAP,A);for(let ve=0;ve<6;ve++)if(A.mipmaps.length>0)for(let se=0;se<A.mipmaps.length;se++)gt(re.__webglFramebuffer[ve][se],F,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,se);else gt(re.__webglFramebuffer[ve],F,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);D(A)?P(s.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}else if(De){for(let ve=0,se=ye.length;ve<se;ve++){const Se=ye[ve],k=r.get(Se);let _e=s.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(_e=F.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(_e,k.__webglTexture),tt(_e,Se),gt(re.__webglFramebuffer,F,Se,s.COLOR_ATTACHMENT0+ve,_e,0),D(Se)&&P(_e)}t.unbindTexture()}else{let ve=s.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(ve=F.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ve,Te.__webglTexture),tt(ve,A),A.mipmaps.length>0)for(let se=0;se<A.mipmaps.length;se++)gt(re.__webglFramebuffer[se],F,A,s.COLOR_ATTACHMENT0,ve,se);else gt(re.__webglFramebuffer,F,A,s.COLOR_ATTACHMENT0,ve,0);D(A)?P(ve):A.mipmaps.length>0&&s.texParameteri(ve,s.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}F.depthBuffer&&Zt(F)}function Z(F){const A=F.textures;for(let re=0,Te=A.length;re<Te;re++){const ye=A[re];if(D(ye)&&ye.mipmapsAutoUpdate===!0){const Ne=U(F),De=r.get(ye).__webglTexture;t.bindTexture(Ne,De),P(Ne),t.unbindTexture()}}}const fn=[];function Lt(F){if(F.samples>0){if(Pe(F)===!1){const A=F.textures,re=F.width,Te=F.height;let ye=s.COLOR_BUFFER_BIT;const Ne=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,De=r.get(F),ve=A.length>1;if(ve)for(let Se=0;Se<A.length;Se++)t.bindFramebuffer(s.FRAMEBUFFER,De.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,De.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),F.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Se=0;Se<A.length;Se++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(ye|=s.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(ye|=s.STENCIL_BUFFER_BIT)),ve){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,De.__webglColorRenderbuffer[Se]);const k=r.get(A[Se]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,k,0)}s.blitFramebuffer(0,0,re,Te,0,0,re,Te,ye,s.NEAREST),p===!0&&(fn.length=0,fn.push(s.COLOR_ATTACHMENT0+Se),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&fn.push(Ne),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,fn))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ve)for(let Se=0;Se<A.length;Se++){t.bindFramebuffer(s.FRAMEBUFFER,De.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.RENDERBUFFER,De.__webglColorRenderbuffer[Se]);const k=r.get(A[Se]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,De.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.TEXTURE_2D,k,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&p){const A=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function Rt(F){return Math.min(o.maxSamples,F.samples)}function Pe(F){const A=r.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function kt(F){const A=u.render.frame;y.get(F)!==A&&(y.set(F,A),F.update())}function We(F,A){const re=F.colorSpace,Te=F.format,ye=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||re!==rc&&re!==Ur&&(Nt.getTransfer(re)===zt?(Te!==zi||ye!==si)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ft("WebGLTextures: Unsupported texture color space:",re)),A}function it(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(m.width=F.naturalWidth||F.width,m.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(m.width=F.displayWidth,m.height=F.displayHeight):(m.width=F.width,m.height=F.height),m}this.allocateTextureUnit=xe,this.resetTextureUnits=L,this.getTextureUnits=M,this.setTextureUnits=H,this.setTexture2D=te,this.setTexture2DArray=fe,this.setTexture3D=ge,this.setTextureCube=he,this.rebindTextures=cn,this.setupRenderTarget=an,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Zt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Pe,this.dispose=oe}function JE(s,e){function t(r,o=Ur){let l;const u=Nt.getTransfer(o);if(r===si)return s.UNSIGNED_BYTE;if(r===bf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Tf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===tg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===ng)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Q0)return s.BYTE;if(r===eg)return s.SHORT;if(r===so)return s.UNSIGNED_SHORT;if(r===wf)return s.INT;if(r===Vi)return s.UNSIGNED_INT;if(r===Bi)return s.FLOAT;if(r===ji)return s.HALF_FLOAT;if(r===ig)return s.ALPHA;if(r===rg)return s.RGB;if(r===zi)return s.RGBA;if(r===kr)return s.DEPTH_COMPONENT;if(r===Fr)return s.DEPTH_STENCIL;if(r===sg)return s.RED;if(r===Af)return s.RED_INTEGER;if(r===as)return s.RG;if(r===Rf)return s.RG_INTEGER;if(r===Cf)return s.RGBA_INTEGER;if(r===Kl||r===Zl||r===Jl||r===Ql)if(u===zt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Kl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Zl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Jl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ql)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Kl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Zl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Jl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ql)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Gd||r===Hd||r===Vd||r===jd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Gd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Hd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Vd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===jd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Wd||r===Xd||r===Yd||r===qd||r===$d||r===nc||r===Kd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Wd||r===Xd)return u===zt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Yd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===qd)return l.COMPRESSED_R11_EAC;if(r===$d)return l.COMPRESSED_SIGNED_R11_EAC;if(r===nc)return l.COMPRESSED_RG11_EAC;if(r===Kd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Zd||r===Jd||r===Qd||r===ef||r===tf||r===nf||r===rf||r===sf||r===af||r===of||r===lf||r===cf||r===uf||r===df)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Zd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Jd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Qd)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ef)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===tf)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===nf)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===rf)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===sf)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===af)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===of)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===lf)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===cf)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===uf)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===df)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ff||r===hf||r===pf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===ff)return u===zt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===hf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===pf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===mf||r===gf||r===ic||r===xf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===mf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===gf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ic)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===xf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ea?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const QE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ew=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new yg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new os({vertexShader:QE,fragmentShader:ew,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new yt(new ii(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nw extends ls{constructor(e,t){super();const r=this;let o=null,l=1,u=null,h="local-floor",p=1,m=null,y=null,S=null,_=null,E=null,b=null;const C=typeof XRWebGLBinding<"u",x=new tw,v={},T=t.getContextAttributes();let D=null,P=null;const U=[],O=[],w=new St;let I=null,$=null;const z=new Yn;z.viewport=new tn;const K=new Yn;K.viewport=new tn;const ee=[z,K],de=new py;let V=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let te=U[G];return te===void 0&&(te=new fd,U[G]=te),te.getTargetRaySpace()},this.getControllerGrip=function(G){let te=U[G];return te===void 0&&(te=new fd,U[G]=te),te.getGripSpace()},this.getHand=function(G){let te=U[G];return te===void 0&&(te=new fd,U[G]=te),te.getHandSpace()};function Q(G){const te=O.indexOf(G.inputSource);if(te===-1)return;const fe=U[te];fe!==void 0&&(fe.update(G.inputSource,G.frame,m||u),fe.dispatchEvent({type:G.type,data:G.inputSource}))}function Y(){o.removeEventListener("select",Q),o.removeEventListener("selectstart",Q),o.removeEventListener("selectend",Q),o.removeEventListener("squeeze",Q),o.removeEventListener("squeezestart",Q),o.removeEventListener("squeezeend",Q),o.removeEventListener("end",Y),o.removeEventListener("inputsourceschange",j);for(let G=0;G<U.length;G++){const te=O[G];te!==null&&(O[G]=null,U[G].disconnect(te))}V=null,oe=null,x.reset();for(const G in v)delete v[G];if(e.setRenderTarget(D),E=null,_=null,S=null,o=null,P=null,xe.stop(),r.isPresenting=!1,e.setPixelRatio(I),e.setSize(w.width,w.height,!1),$!==null){const G=$.camera;G.fov=$.fov,G.zoom=$.zoom,G.updateProjectionMatrix(),$=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){l=G,r.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){h=G,r.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(G){m=G},this.getBaseLayer=function(){return _!==null?_:E},this.getBinding=function(){return S===null&&C&&(S=new XRWebGLBinding(o,t)),S},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(G){if(o=G,o!==null){if(D=e.getRenderTarget(),o.addEventListener("select",Q),o.addEventListener("selectstart",Q),o.addEventListener("selectend",Q),o.addEventListener("squeeze",Q),o.addEventListener("squeezestart",Q),o.addEventListener("squeezeend",Q),o.addEventListener("end",Y),o.addEventListener("inputsourceschange",j),T.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(w),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,ge=null,he=null;T.depth&&(he=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=T.stencil?Fr:kr,ge=T.stencil?ea:Vi);const Ee={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:l};S=this.getBinding(),_=S.createProjectionLayer(Ee),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),P=new Hi(_.textureWidth,_.textureHeight,{format:zi,type:si,depthTexture:new na(_.textureWidth,_.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{const fe={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:l};E=new XRWebGLLayer(o,t,fe),o.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),P=new Hi(E.framebufferWidth,E.framebufferHeight,{format:zi,type:si,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1,storeMultisampledDepthBuffer:E.ignoreDepthValues===!1,storeMultisampledStencilBuffer:E.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,u=await o.requestReferenceSpace(h),xe.setContext(o),xe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function j(G){for(let te=0;te<G.removed.length;te++){const fe=G.removed[te],ge=O.indexOf(fe);ge>=0&&(O[ge]=null,U[ge].disconnect(fe))}for(let te=0;te<G.added.length;te++){const fe=G.added[te];let ge=O.indexOf(fe);if(ge===-1){for(let Ee=0;Ee<U.length;Ee++)if(Ee>=O.length){O.push(fe),ge=Ee;break}else if(O[Ee]===null){O[Ee]=fe,ge=Ee;break}if(ge===-1)break}const he=U[ge];he&&he.connect(fe)}}function q(G,te){te===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(te.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(o===null)return;let te=G.near,fe=G.far;x.texture!==null&&(x.depthNear>0&&(te=x.depthNear),x.depthFar>0&&(fe=x.depthFar)),de.near=K.near=z.near=te,de.far=K.far=z.far=fe,(V!==de.near||oe!==de.far)&&(o.updateRenderState({depthNear:de.near,depthFar:de.far}),V=de.near,oe=de.far),de.layers.mask=G.layers.mask|6,z.layers.mask=de.layers.mask&-5,K.layers.mask=de.layers.mask&-3;const ge=G.parent,he=de.cameras;q(de,ge);for(let Ee=0;Ee<he.length;Ee++)q(he[Ee],ge);de.projectionMatrix.copy(z.projectionMatrix),de.projectionMatrixInverse.copy(z.projectionMatrixInverse),$===null&&G.isPerspectiveCamera&&($={camera:G,fov:G.fov,zoom:G.zoom}),L(G,de,ge)};function L(G,te,fe){fe===null?G.matrix.copy(te.matrixWorld):(G.matrix.copy(fe.matrixWorld),G.matrix.invert(),G.matrix.multiply(te.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(te.projectionMatrix),G.projectionMatrixInverse.copy(te.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=oo*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return de},this.getFoveation=function(){if(!(_===null&&E===null))return p},this.setFoveation=function(G){p=G,_!==null&&(_.fixedFoveation=G),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=G)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(de)},this.getCameraTexture=function(G){return v[G]};let M=null;function H(G,te){if(y=te.getViewerPose(m||u),b=te,y!==null){const fe=y.views;E!==null&&(e.setRenderTargetFramebuffer(P,E.framebuffer),e.setRenderTarget(P));let ge=!1;fe.length!==de.cameras.length&&(de.cameras.length=0,ge=!0);for(let Ue=0;Ue<fe.length;Ue++){const tt=fe[Ue];let st=null;if(E!==null)st=E.getViewport(tt);else{const Et=S.getViewSubImage(_,tt);st=Et.viewport,Ue===0&&(e.setRenderTargetTextures(P,Et.colorTexture,Et.depthStencilTexture),e.setRenderTarget(P))}let ke=ee[Ue];ke===void 0&&(ke=new Yn,ke.layers.enable(Ue),ke.viewport=new tn,ee[Ue]=ke),ke.matrix.fromArray(tt.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(tt.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(st.x,st.y,st.width,st.height),Ue===0&&(de.matrix.copy(ke.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale)),ge===!0&&de.cameras.push(ke)}const he=o.enabledFeatures;if(he&&he.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){S=r.getBinding();const Ue=S.getDepthInformation(fe[0]);Ue&&Ue.isValid&&Ue.texture&&x.init(Ue,o.renderState)}if(he&&he.includes("camera-access")&&C){e.state.unbindTexture(),S=r.getBinding();for(let Ue=0;Ue<fe.length;Ue++){const tt=fe[Ue].camera;if(tt){let st=v[tt];st||(st=new yg,v[tt]=st);const ke=S.getCameraImage(tt);st.sourceTexture=ke}}}}for(let fe=0;fe<U.length;fe++){const ge=O[fe],he=U[fe];ge!==null&&he!==void 0&&he.update(ge,te,m||u)}M&&M(G,te),te.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:te}),b=null}const xe=new bg;xe.setAnimationLoop(H),this.setAnimationLoop=function(G){M=G},this.dispose=function(){}}}const iw=new Wt,Ug=new ft;Ug.set(-1,0,0,0,1,0,0,0,1);function rw(s,e){function t(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function r(x,v){v.color.getRGB(x.fogColor.value,Sg(s)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function o(x,v,T,D,P){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?l(x,v):v.isMeshLambertMaterial?(l(x,v),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(l(x,v),S(x,v)):v.isMeshPhongMaterial?(l(x,v),y(x,v),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(l(x,v),_(x,v),v.isMeshPhysicalMaterial&&E(x,v,P)):v.isMeshMatcapMaterial?(l(x,v),b(x,v)):v.isMeshDepthMaterial?l(x,v):v.isMeshDistanceMaterial?(l(x,v),C(x,v)):v.isMeshNormalMaterial?l(x,v):v.isLineBasicMaterial?(u(x,v),v.isLineDashedMaterial&&h(x,v)):v.isPointsMaterial?p(x,v,T,D):v.isSpriteMaterial?m(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,t(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===$n&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,t(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===$n&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,t(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,t(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const T=e.get(v),D=T.envMap,P=T.envMapRotation;D&&(x.envMap.value=D,x.envMapRotation.value.setFromMatrix4(iw.makeRotationFromEuler(P)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Ug),x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,x.aoMapTransform))}function u(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform))}function h(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function p(x,v,T,D){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*T,x.scale.value=D*.5,v.map&&(x.map.value=v.map,t(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function m(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function y(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function S(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function _(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function E(x,v,T){x.ior.value=v.ior,v.diffuseRoughness>0&&(x.diffuseRoughness.value=v.diffuseRoughness,v.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=v.diffuseRoughnessMap,t(v.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===$n&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.retroreflectivity>0&&(x.retroreflectivity.value=v.retroreflectivity),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=v.iridescenceThicknessMaximum,v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=T.texture,x.transmissionSamplerSize.value.set(T.width,T.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,x.specularIntensityMapTransform))}function b(x,v){v.matcap&&(x.matcap.value=v.matcap)}function C(x,v){const T=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(T.matrixWorld),x.nearDistance.value=T.shadow.camera.near,x.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function sw(s,e,t,r){let o={},l={};function u(T,D){const P=D.program;r.uniformBlockBinding(T,P,o[T.id])}function h(T,D){let P=o[T.id];P===void 0&&(b(T),P=p(T),o[T.id]=P,T.addEventListener("dispose",x));const U=D.program;r.updateUBOMapping(T,U);const O=e.render.frame;l[T.id]!==O&&(m(T),l[T.id]=O)}function p(T){const D=s.createBuffer(),P=T.__size,U=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,P,U),s.bindBuffer(s.UNIFORM_BUFFER,null),D}function m(T){const D=o[T.id],P=T.uniforms,U=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let O=0,w=P.length;O<w;O++){const I=P[O];if(Array.isArray(I))for(let $=0,z=I.length;$<z;$++)y(I[$],O,$,U);else y(I,O,0,U)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(T,D,P,U){if(_(T,D,P,U)===!0){const O=T.__offset,w=T.value;if(Array.isArray(w)){let I=0;for(let $=0;$<w.length;$++){const z=w[$],K=C(z,!0);S(z,T.__data,I),I+=K.storage/Float32Array.BYTES_PER_ELEMENT}}else S(w,T.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,O,T.__data)}}function S(T,D,P){typeof T=="number"||typeof T=="boolean"?D[P]=T:T.isMatrix3?(D[P]=T.elements[0],D[P+1]=T.elements[1],D[P+2]=T.elements[2],D[P+3]=0,D[P+4]=T.elements[3],D[P+5]=T.elements[4],D[P+6]=T.elements[5],D[P+7]=0,D[P+8]=T.elements[6],D[P+9]=T.elements[7],D[P+10]=T.elements[8],D[P+11]=0):ArrayBuffer.isView(T)?D.set(T.subarray(0,D.length-P),P):T.toArray(D,P)}function _(T,D,P,U){const O=T.value,w=D+"_"+P;if(Array.isArray(O)){U[w]===void 0&&(U[w]=[]);const I=U[w];let $=!1;for(let z=0;z<O.length;z++)E(O[z],I,z)===!0&&($=!0);return $}return E(O,U,w)}function E(T,D,P){if(D[P]===void 0)return typeof T=="number"||typeof T=="boolean"?D[P]=T:ArrayBuffer.isView(T)?D[P]=T.slice():D[P]=T.clone(),!0;{const U=D[P];if(typeof T=="number"||typeof T=="boolean"){if(U!==T)return D[P]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(U.equals(T)===!1)return U.copy(T),!0}}return!1}function b(T){const D=T.uniforms;let P=0;const U=16;for(let w=0,I=D.length;w<I;w++){const $=Array.isArray(D[w])?D[w]:[D[w]];for(let z=0,K=$.length;z<K;z++){const ee=$[z],de=Array.isArray(ee.value)?ee.value:[ee.value],V=Array.isArray(D[w])||Array.isArray(ee.value);let oe=P;for(let Y=0,j=de.length;Y<j;Y++){const q=de[Y],L=C(q,V),M=P%U,H=M%L.boundary,xe=M+H;P+=H,xe!==0&&U-xe<L.storage&&(P+=U-xe),Y===0&&(oe=P),P+=L.storage}const Q=ee.type==="int"?Int32Array:ee.type==="uint"?Uint32Array:Float32Array;ee.__data=new Q((P-oe)/Float32Array.BYTES_PER_ELEMENT),ee.__offset=oe}}const O=P%U;return O>0&&(P+=U-O),T.__size=P,T.__cache={},this}function C(T,D){const P={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(P.boundary=4,P.storage=4):T.isVector2?(P.boundary=8,P.storage=8):T.isVector3||T.isColor?(P.boundary=16,P.storage=12):T.isVector4?(P.boundary=16,P.storage=16):T.isMatrix3?(P.boundary=16,P.storage=48):T.isMatrix4?(P.boundary=16,P.storage=64):T.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(P.boundary=16,P.storage=T.byteLength):ct("WebGLRenderer: Unsupported uniform value type.",T),D===!0&&(P.boundary=16,P.storage=Math.ceil(P.storage/16)*16),P}function x(T){const D=T.target;D.removeEventListener("dispose",x),s.deleteBuffer(o[D.id]),delete o[D.id],delete l[D.id]}function v(){for(const T in o)s.deleteBuffer(o[T]);o={},l={}}return{bind:u,update:h,dispose:v}}const aw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fi=null;function ow(){return Fi===null&&(Fi=new ty(aw,16,16,as,ji),Fi.name="DFG_LUT",Fi.minFilter=qn,Fi.magFilter=qn,Fi.wrapS=sr,Fi.wrapT=sr,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}class jf{constructor(e={}){const{canvas:t=x_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:y="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:_=!1,outputBufferType:E=si}=e;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=u;const C=E,x=new Set([Cf,Rf,Af]),v=new Set([si,Vi,so,ea,bf,Tf]),T=new Uint32Array(4),D=new Int32Array(4),P={textures:[],min:[],max:[],resolution:[]};let U=null,O=null;const w=[],I=[];let $=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ar,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let K=!1,ee=null,de=null,V=null,oe=null;this._outputColorSpace=hi;let Q=0,Y=0,j=null,q=-1,L=null;const M=new tn,H=new tn;let xe=null;const G=new At(0);let te=0,fe=t.width,ge=t.height,he=1,Ee=null,et=null;const Ue=new tn(0,0,fe,ge),tt=new tn(0,0,fe,ge);let st=!1;const ke=new lo,Et=new Of;let wt=!1,It=!1;const gt=new Wt,Kt=new ie,pt=new tn,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let cn=!1;function an(){return j===null?he:1}let Z=r;function fn(N,W){return t.getContext(N,W)}let Lt,Rt,Pe,kt,We,it,F,A,re,Te,ye,Ne,De,ve,se,Se,k,_e,me,we,Ce,Ie,Ze;try{const N={alpha:!0,depth:o,stencil:l,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:y,failIfMajorPerformanceCaveat:S};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ef}`),t.addEventListener("webglcontextlost",nt,!1),t.addEventListener("webglcontextrestored",ut,!1),t.addEventListener("webglcontextcreationerror",ze,!1),Z===null){const W="webgl2";if(Z=fn(W,N),Z===null)throw fn(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ht()}catch(N){throw t.removeEventListener("webglcontextlost",nt,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",ze,!1),Ft("WebGLRenderer: "+N.message),N}function ht(){Lt=new dM(Z),Lt.init(),Ce=new JE(Z,Lt),Rt=new eM(Z,Lt,e,Ce),Pe=new KE(Z,Lt),Rt.reversedDepthBuffer&&_&&Pe.buffers.depth.setReversed(!0),de=Z.createFramebuffer(),V=Z.createFramebuffer(),oe=Z.createFramebuffer(),kt=new pM(Z),We=new OE,it=new ZE(Z,Lt,Pe,We,Rt,Ce,kt),F=new uM(z),A=new gy(Z),Ie=new J1(Z,A),re=new fM(Z,A,kt,Ie),Te=new gM(Z,re,A,Ie,kt),_e=new mM(Z,Rt,it),se=new tM(We),ye=new UE(z,F,Lt,Rt,Ie,se),Ne=new rw(z,We),De=new kE,ve=new jE(Lt),k=new Z1(z,F,Pe,Te,b,p),Se=new $E(z,Te,Rt),Ze=new sw(Z,kt,Rt,Pe),me=new Q1(Z,Lt,kt),we=new hM(Z,Lt,kt),kt.programs=ye.programs,z.capabilities=Rt,z.extensions=Lt,z.properties=We,z.renderLists=De,z.shadowMap=Se,z.state=Pe,z.info=kt}C!==si&&($=new vM(C,t.width,t.height,h,o,l));const Ae=new nw(z,Z);this.xr=Ae,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const N=Lt.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=Lt.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(N){N!==void 0&&(he=N,this.setSize(fe,ge,!1))},this.getSize=function(N){return N.set(fe,ge)},this.setSize=function(N,W,ce=!0){if(Ae.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}fe=N,ge=W,t.width=Math.floor(N*he),t.height=Math.floor(W*he),ce===!0&&(t.style.width=N+"px",t.style.height=W+"px"),$!==null&&$.setSize(t.width,t.height),this.setViewport(0,0,N,W)},this.getDrawingBufferSize=function(N){return N.set(fe*he,ge*he).floor()},this.setDrawingBufferSize=function(N,W,ce){fe=N,ge=W,he=ce,t.width=Math.floor(N*ce),t.height=Math.floor(W*ce),this.setViewport(0,0,N,W)},this.setEffects=function(N){if(C===si){Ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let W=0;W<N.length;W++)if(N[W].isOutputPass===!0){ct("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}$.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(M)},this.getViewport=function(N){return N.copy(Ue)},this.setViewport=function(N,W,ce,ae){N.isVector4?Ue.set(N.x,N.y,N.z,N.w):Ue.set(N,W,ce,ae),Pe.viewport(M.copy(Ue).multiplyScalar(an()).round())},this.getScissor=function(N){return N.copy(tt)},this.setScissor=function(N,W,ce,ae){N.isVector4?tt.set(N.x,N.y,N.z,N.w):tt.set(N,W,ce,ae),Pe.scissor(H.copy(tt).multiplyScalar(an()).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(N){Pe.setScissorTest(st=N)},this.setOpaqueSort=function(N){Ee=N},this.setTransparentSort=function(N){et=N},this.getClearColor=function(N){return N.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor(...arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha(...arguments)},this.clear=function(N=!0,W=!0,ce=!0){let ae=0;if(N){let ne=!1;if(j!==null){const Fe=j.texture.format;ne=x.has(Fe)}if(ne){const Fe=j.texture.type,Ve=v.has(Fe),Oe=k.getClearColor(),Be=k.getClearAlpha(),Xe=Oe.r,lt=Oe.g,mt=Oe.b;Ve?(T[0]=Xe,T[1]=lt,T[2]=mt,T[3]=Be,Z.clearBufferuiv(Z.COLOR,0,T)):(D[0]=Xe,D[1]=lt,D[2]=mt,D[3]=Be,Z.clearBufferiv(Z.COLOR,0,D))}else ae|=Z.COLOR_BUFFER_BIT}W&&(ae|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(ae|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&Z.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),ee=N},this.dispose=function(){t.removeEventListener("webglcontextlost",nt,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",ze,!1),k.dispose(),De.dispose(),ve.dispose(),it.dispose(),We.dispose(),F.dispose(),Te.dispose(),re.dispose(),Ie.dispose(),Ze.dispose(),ye.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",po),Ae.removeEventListener("sessionend",Ri),Ci.stop()};function nt(N){N.preventDefault(),Pm("WebGLRenderer: Context Lost."),K=!0}function ut(){Pm("WebGLRenderer: Context Restored."),K=!1;const N=kt.autoReset,W=Se.enabled,ce=Se.autoUpdate,ae=Se.needsUpdate,ne=Se.type;ht(),kt.autoReset=N,Se.enabled=W,Se.autoUpdate=ce,Se.needsUpdate=ae,Se.type=ne}function ze(N){Ft("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Ct(N){const W=N.target;W.removeEventListener("dispose",Ct),Jt(W)}function Jt(N){Kn(N),We.remove(N)}function Kn(N){const W=We.get(N).programs;W!==void 0&&(W.forEach(function(ce){ye.releaseProgram(ce)}),N.isShaderMaterial&&ye.releaseShaderCache(N))}this.renderBufferDirect=function(N,W,ce,ae,ne,Fe){W===null&&(W=Zt);const Ve=ne.isMesh&&ne.matrixWorld.determinantAffine()<0,Oe=ma(N,W,ce,ae,ne);Pe.setMaterial(ae,Ve);let Be=ce.index,Xe=1;if(ae.wireframe===!0){if(Be=re.getWireframeAttribute(ce),Be===void 0)return;Xe=2}const lt=ce.drawRange,mt=ce.attributes.position;let Ye=lt.start*Xe,vt=(lt.start+lt.count)*Xe;Fe!==null&&(Ye=Math.max(Ye,Fe.start*Xe),vt=Math.min(vt,(Fe.start+Fe.count)*Xe)),Be!==null?(Ye=Math.max(Ye,0),vt=Math.min(vt,Be.count)):mt!=null&&(Ye=Math.max(Ye,0),vt=Math.min(vt,mt.count));const Yt=vt-Ye;if(Yt<0||Yt===1/0)return;Ie.setup(ne,ae,Oe,ce,Be);let Bt,Ot=me;if(Be!==null&&(Bt=A.get(Be),Ot=we,Ot.setIndex(Bt)),ne.isMesh)ae.wireframe===!0?(Pe.setLineWidth(ae.wireframeLinewidth*an()),Ot.setMode(Z.LINES)):Ot.setMode(Z.TRIANGLES);else if(ne.isLine){let rn=ae.linewidth;rn===void 0&&(rn=1),Pe.setLineWidth(rn*an()),ne.isLineSegments?Ot.setMode(Z.LINES):ne.isLineLoop?Ot.setMode(Z.LINE_LOOP):Ot.setMode(Z.LINE_STRIP)}else ne.isPoints?Ot.setMode(Z.POINTS):ne.isSprite&&Ot.setMode(Z.TRIANGLES);if(ne.isBatchedMesh)if(Lt.get("WEBGL_multi_draw"))Ot.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const rn=ne._multiDrawStarts,qe=ne._multiDrawCounts,hn=ne._multiDrawCount,Je=Be?A.get(Be).bytesPerElement:1,Ni=We.get(ae).currentProgram.getUniforms();for(let pn=0;pn<hn;pn++)Ni.setValue(Z,"_gl_DrawID",pn),Ot.render(rn[pn]/Je,qe[pn])}else if(ne.isInstancedMesh)Ot.renderInstances(Ye,Yt,ne.count);else if(ce.isInstancedBufferGeometry){const rn=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,qe=Math.min(ce.instanceCount,rn);Ot.renderInstances(Ye,Yt,qe)}else Ot.render(Ye,Yt)};function us(N,W,ce,ae){ee!==null&&N.isNodeMaterial&&ee.setObject(ae,N),wt===!0&&se.setState(N,ce,!1),N.transparent===!0&&N.side===pi&&N.forceSinglePass===!1?(N.side=$n,N.needsUpdate=!0,Hr(N,W,ae),N.side=ss,N.needsUpdate=!0,Hr(N,W,ae),N.side=pi):Hr(N,W,ae)}this.compile=function(N,W,ce=null){ce===null&&(ce=N),ee!==null&&ee.renderStart(N,W,ce),O=ve.get(ce),O.init(W),I.push(O),ce.traverseVisible(function(ne){ne.isLight&&ne.layers.test(W.layers)&&(O.pushLight(ne),ne.castShadow&&O.pushShadow(ne))}),N!==ce&&N.traverseVisible(function(ne){ne.isLight&&ne.layers.test(W.layers)&&(O.pushLight(ne),ne.castShadow&&O.pushShadow(ne))}),O.setupLights(),ee!==null&&ee.updateLights(O.state.lightsArray),It=this.localClippingEnabled,wt=se.init(this.clippingPlanes,It),wt===!0&&se.setGlobalState(this.clippingPlanes,W),ee!==null&&Se.render(O.state.shadowsArray,ce,W);const ae=new Set;return N.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const Fe=ne.material;if(Fe)if(Array.isArray(Fe))for(let Ve=0;Ve<Fe.length;Ve++){const Oe=Fe[Ve];us(Oe,ce,W,ne),ae.add(Oe)}else us(Fe,ce,W,ne),ae.add(Fe)}),O=I.pop(),ee!==null&&ee.renderEnd(),ae},this.compileAsync=function(N,W,ce=null){const ae=this.compile(N,W,ce);return new Promise(ne=>{function Fe(){if(ae.forEach(function(Ve){const Be=We.get(Ve).currentProgram;(Be===void 0||Be.isReady())&&ae.delete(Ve)}),ae.size===0){ne(N);return}setTimeout(Fe,10)}Lt.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let da=null;function Mc(N){da&&da(N)}function po(){Ci.stop()}function Ri(){Ci.start()}const Ci=new bg;Ci.setAnimationLoop(Mc),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(N){da=N,Ae.setAnimationLoop(N),N===null?Ci.stop():Ci.start()},Ae.addEventListener("sessionstart",po),Ae.addEventListener("sessionend",Ri),this.render=function(N,W){if(W!==void 0&&W.isCamera!==!0){Ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(K===!0)return;ee!==null&&ee.renderStart(N,W);const ce=Ae.enabled===!0&&Ae.isPresenting===!0,ae=$!==null&&(j===null||ce)&&$.begin(z,j);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&($===null||$.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(W),W=Ae.getCamera()),N.isScene===!0&&N.onBeforeRender(z,N,W,j),O=ve.get(N,I.length),O.init(W),O.state.textureUnits=it.getTextureUnits(),I.push(O),gt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),W.isArrayCamera?Et.setFromArrayCamera(W):ke.setFromProjectionMatrix(gt,Ai,W.reversedDepth),It=this.localClippingEnabled,wt=se.init(this.clippingPlanes,It),U=De.get(N,w.length),U.init(),w.push(U),this.info.render.frame++,Ae.enabled===!0&&Ae.isPresenting===!0){const Ve=z.xr.getDepthSensingMesh();Ve!==null&&ds(Ve,W,-1/0,z.sortObjects)}ds(N,W,0,z.sortObjects),U.finish(),ee!==null&&ee.updateLights(O.state.lightsArray),z.sortObjects===!0&&U.sort(Ee,et),cn=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,cn&&k.addToRenderList(U,N),this.info.autoReset===!0&&this.info.reset(),wt===!0&&se.beginShadows();const ne=O.state.shadowsArray;if(Se.render(ne,N,W),wt===!0&&se.endShadows(),(ae&&$.hasRenderPass())===!1){const Ve=U.opaque,Oe=U.transmissive;if(O.setupLights(),W.isArrayCamera){const Be=W.cameras;if(Oe.length>0)for(let Xe=0,lt=Be.length;Xe<lt;Xe++){const mt=Be[Xe];fa(Ve,Oe,N,mt)}cn&&k.render(N);for(let Xe=0,lt=Be.length;Xe<lt;Xe++){const mt=Be[Xe];mo(U,N,mt,mt.viewport)}}else Oe.length>0&&fa(Ve,Oe,N,W),cn&&k.render(N),mo(U,N,W)}j!==null&&Y===0&&(it.updateMultisampleRenderTarget(j),it.updateRenderTargetMipmap(j)),ae&&$.end(z),N.isScene===!0&&N.onAfterRender(z,N,W),Ie.resetDefaultState(),q=-1,L=null,I.pop(),I.length>0?(O=I[I.length-1],it.setTextureUnits(O.state.textureUnits),wt===!0&&se.setGlobalState(z.clippingPlanes,O.state.camera)):O=null,w.pop(),w.length>0?U=w[w.length-1]:U=null,ee!==null&&ee.renderEnd()};function ds(N,W,ce,ae){if(N.visible===!1)return;if(N.layers.test(W.layers)){if(N.isGroup)ce=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(W);else if(N.isLight)O.pushLight(N),N.castShadow&&O.pushShadow(N);else if(N.isSprite){const Ve=W.isArrayCamera?Et:ke;if(!N.frustumCulled||N.intersectsFrustum(Ve)){ae&&pt.setFromMatrixPosition(N.matrixWorld).applyMatrix4(gt);const Oe=Te.update(N),Be=N.material;Be.visible&&U.push(N,Oe,Be,ce,pt.z,null,W)}}else if(N.isMesh||N.isLine||N.isPoints){const Ve=W.isArrayCamera?Et:ke;if(!N.frustumCulled||N.intersectsFrustum(Ve)){const Oe=Te.update(N),Be=N.material;if(ae&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),pt.copy(N.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),pt.copy(Oe.boundingSphere.center)),pt.applyMatrix4(N.matrixWorld).applyMatrix4(gt)),Array.isArray(Be)){const Xe=Oe.groups;for(let lt=0,mt=Xe.length;lt<mt;lt++){const Ye=Xe[lt],vt=Be[Ye.materialIndex];vt&&vt.visible&&U.push(N,Oe,vt,ce,pt.z,Ye,W)}}else Be.visible&&U.push(N,Oe,Be,ce,pt.z,null,W)}}}const Fe=N.children;for(let Ve=0,Oe=Fe.length;Ve<Oe;Ve++)ds(Fe[Ve],W,ce,ae)}function mo(N,W,ce,ae){const{opaque:ne,transmissive:Fe,transparent:Ve}=N;O.setupLightsView(ce),wt===!0&&se.setGlobalState(z.clippingPlanes,ce),ae&&Pe.viewport(M.copy(ae)),ne.length>0&&Gr(ne,W,ce),Fe.length>0&&Gr(Fe,W,ce),Ve.length>0&&Gr(Ve,W,ce),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function fa(N,W,ce,ae){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[ae.id]===void 0){const Ye=Lt.has("EXT_color_buffer_half_float")||Lt.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[ae.id]=new Hi(1,1,{generateMipmaps:!0,type:Ye?ji:si,minFilter:Or,samples:Math.max(4,Rt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Nt.workingColorSpace})}const Fe=O.state.transmissionRenderTarget[ae.id],Ve=ae.viewport||M;Fe.setSize(Ve.z*z.transmissionResolutionScale,Ve.w*z.transmissionResolutionScale);const Oe=z.getRenderTarget(),Be=z.getActiveCubeFace(),Xe=z.getActiveMipmapLevel();z.setRenderTarget(Fe),z.getClearColor(G),te=z.getClearAlpha(),te<1&&z.setClearColor(16777215,.5),z.clear(),cn&&k.render(ce);const lt=z.toneMapping;z.toneMapping=ar;const mt=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),O.setupLightsView(ae),wt===!0&&se.setGlobalState(z.clippingPlanes,ae),Gr(N,ce,ae),it.updateMultisampleRenderTarget(Fe),it.updateRenderTargetMipmap(Fe),Lt.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let vt=0,Yt=W.length;vt<Yt;vt++){const Bt=W[vt],{object:Ot,geometry:rn,material:qe,group:hn}=Bt;if(qe.side===pi&&Ot.layers.test(ae.layers)){const Je=qe.side;qe.side=$n,qe.needsUpdate=!0,ha(Ot,ce,ae,rn,qe,hn),qe.side=Je,qe.needsUpdate=!0,Ye=!0}}Ye===!0&&(it.updateMultisampleRenderTarget(Fe),it.updateRenderTargetMipmap(Fe))}z.setRenderTarget(Oe,Be,Xe),z.setClearColor(G,te),mt!==void 0&&(ae.viewport=mt),z.toneMapping=lt}function Gr(N,W,ce){const ae=W.isScene===!0?W.overrideMaterial:null;for(let ne=0,Fe=N.length;ne<Fe;ne++){const Ve=N[ne],{object:Oe,geometry:Be,group:Xe}=Ve;let lt=Ve.material;lt.allowOverride===!0&&ae!==null&&(lt=ae),Oe.layers.test(ce.layers)&&ha(Oe,W,ce,Be,lt,Xe)}}function ha(N,W,ce,ae,ne,Fe){ee!==null&&ne.isNodeMaterial&&ee.setObject(N,ne),N.onBeforeRender(z,W,ce,ae,ne,Fe),N.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),ne.onBeforeRender(z,W,ce,ae,N,Fe),ne.transparent===!0&&ne.side===pi&&ne.forceSinglePass===!1?(ne.side=$n,ne.needsUpdate=!0,z.renderBufferDirect(ce,W,ae,ne,N,Fe),ne.side=ss,ne.needsUpdate=!0,z.renderBufferDirect(ce,W,ae,ne,N,Fe),ne.side=pi):z.renderBufferDirect(ce,W,ae,ne,N,Fe),N.onAfterRender(z,W,ce,ae,ne,Fe)}function pa(N){let W=0;for(const ce of N)ce.texture!==null&&W++;return W}function Hr(N,W,ce){W.isScene!==!0&&(W=Zt);const ae=We.get(N),ne=O.state.lights,Fe=O.state.shadowsArray,Ve=ne.state.version,Oe=ye.getParameters(N,ne.state,Fe,W,ce,O.state.lightProbeGridArray),Be=ye.getProgramCacheKey(Oe);let Xe=ae.programs;ae.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?W.environment:null,ae.fog=W.fog;const lt=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;ae.envMap=F.get(N.envMap||ae.environment,lt),ae.envMapRotation=ae.environment!==null&&N.envMap===null?W.environmentRotation:N.envMapRotation,Xe===void 0&&(N.addEventListener("dispose",Ct),Xe=new Map,ae.programs=Xe,ae.programVariants=new Map);let mt=Xe.get(Be);if(mt!==void 0){if(ae.currentProgram===mt&&ae.lightsStateVersion===Ve)return go(N,Oe),mt}else Oe.uniforms=ye.getUniforms(N),ee!==null&&N.isNodeMaterial&&ee.build(N,ce,Oe),N.onBeforeCompile(Oe,z),mt=ye.acquireProgram(Oe,Be),Xe.set(Be,mt),ae.uniforms=Oe.uniforms;const Ye=ae.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Ye.clippingPlanes=se.uniform),go(N,Oe),ae.needsLights=fs(N),ae.lightsStateVersion=Ve,ae.needsLights&&(Ye.ambientLightColor.value=ne.state.ambient,Ye.lightProbe.value=ne.state.probe,Ye.sunLights.value=ne.state.sun,Ye.sunLightShadows.value=ne.state.sunShadow,Ye.directionalLights.value=ne.state.directional,Ye.directionalLightShadows.value=ne.state.directionalShadow,Ye.spotLights.value=ne.state.spot,Ye.spotLightShadows.value=ne.state.spotShadow,Ye.rectAreaLights.value=ne.state.rectArea,Ye.ltc_1.value=ne.state.rectAreaLTC1,Ye.ltc_2.value=ne.state.rectAreaLTC2,Ye.pointLights.value=ne.state.point,Ye.pointLightShadows.value=ne.state.pointShadow,Ye.hemisphereLights.value=ne.state.hemi,Ye.sunShadowMatrix.value=ne.state.sunShadowMatrix,Ye.sunShadowCascade.value=ne.state.sunShadowCascade,Ye.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Ye.spotLightMatrix.value=ne.state.spotLightMatrix,Ye.spotLightMap.value=ne.state.spotLightMap,Ye.pointShadowMatrix.value=ne.state.pointShadowMatrix),ae.numLightProbeGrids=pa(O.state.lightProbeGridArray),ae.currentProgram=mt,ae.uniformsList=null,mt}function Ec(N,W,ce,ae,ne){const Fe=We.get(N),Ve=Fe.currentProgram.id+","+ae+","+ne;let Oe=Fe.programVariants.get(Ve);return Oe===void 0?(Oe=Hr(N,W,ce),Fe.programVariants.set(Ve,Oe)):(Fe.currentProgram=Oe,Fe.uniformsList=null,Fe.outputColorSpace=ae,Fe.toneMapping=ne),Oe}function Xt(N){if(N.uniformsList===null){const W=N.currentProgram.getUniforms();N.uniformsList=tc.seqWithValue(W.seq,N.uniforms)}return N.uniformsList}function go(N,W){const ce=We.get(N);ce.outputColorSpace=W.outputColorSpace,ce.batching=W.batching,ce.batchingColor=W.batchingColor,ce.instancing=W.instancing,ce.instancingColor=W.instancingColor,ce.instancingMorph=W.instancingMorph,ce.skinning=W.skinning,ce.morphTargets=W.morphTargets,ce.morphNormals=W.morphNormals,ce.morphColors=W.morphColors,ce.morphTargetsCount=W.morphTargetsCount,ce.numClippingPlanes=W.numClippingPlanes,ce.numIntersection=W.numClipIntersection,ce.vertexAlphas=W.vertexAlphas,ce.vertexTangents=W.vertexTangents,ce.toneMapping=W.toneMapping}function ma(N,W,ce,ae,ne){W.isScene!==!0&&(W=Zt),it.resetTextureUnits();const Fe=W.fog,Ve=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?W.environment:null,Oe=j===null?z.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Nt.workingColorSpace,Be=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,Xe=F.get(ae.envMap||Ve,Be),lt=ae.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,mt=!!ce.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Ye=!!ce.morphAttributes.position,vt=!!ce.morphAttributes.normal,Yt=!!ce.morphAttributes.color;let Bt=ar;ae.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Bt=z.toneMapping);const Ot=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,rn=Ot!==void 0?Ot.length:0,qe=We.get(ae),hn=O.state.lights;if(wt===!0&&(It===!0||N!==L)){const Dt=N===L&&ae.id===q;se.setState(ae,N,Dt)}let Je=!1,Ni=!1;ae.version===qe.__version?qe.needsLights&&qe.lightsStateVersion!==hn.state.version||ne.isBatchedMesh&&qe.batching===!1||!ne.isBatchedMesh&&qe.batching===!0||ne.isBatchedMesh&&qe.batchingColor===!0&&ne._colorsTexture===null||ne.isBatchedMesh&&qe.batchingColor===!1&&ne._colorsTexture!==null||ne.isInstancedMesh&&qe.instancing===!1||!ne.isInstancedMesh&&qe.instancing===!0||ne.isSkinnedMesh&&qe.skinning===!1||!ne.isSkinnedMesh&&qe.skinning===!0||ne.isInstancedMesh&&qe.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&qe.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&qe.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&qe.instancingMorph===!1&&ne.morphTexture!==null||qe.envMap!==Xe||ae.fog===!0&&qe.fog!==Fe||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==se.numPlanes||qe.numIntersection!==se.numIntersection)||qe.vertexAlphas!==lt||qe.vertexTangents!==mt||qe.morphTargets!==Ye||qe.morphNormals!==vt||qe.morphColors!==Yt||qe.morphTargetsCount!==rn||qe.numLightProbeGrids!==pa(O.state.lightProbeGridArray)?Je=!0:(qe.outputColorSpace!==Oe||qe.toneMapping!==Bt)&&(Ni=!0):(Je=!0,qe.__version=ae.version);let pn=qe.currentProgram;(Je===!0||Ni===!0)&&(pn=Ni===!0?Ec(ae,W,ne,Oe,Bt):Hr(ae,W,ne),ee&&ae.isNodeMaterial&&ee.onUpdateProgram(ae,pn,qe));let ur=!1,xi=!1,Pi=!1;const bt=pn.getUniforms(),on=qe.uniforms;if(Pe.useProgram(pn.program)&&(ur=!0,xi=!0,Pi=!0),ae.id!==q&&(q=ae.id,xi=!0),ur||L!==N){Pe.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),bt.setValue(Z,"projectionMatrix",N.projectionMatrix),bt.setValue(Z,"viewMatrix",N.matrixWorldInverse);const Gt=bt.map.cameraPosition;Gt!==void 0&&Gt.setValue(Z,Kt.setFromMatrixPosition(N.matrixWorld)),Rt.logarithmicDepthBuffer&&bt.setValue(Z,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&bt.setValue(Z,"isOrthographic",N.isOrthographicCamera===!0),L!==N&&(L=N,xi=!0,Pi=!0)}if(qe.needsLights&&(hn.state.sunShadowMap.length>0&&bt.setValue(Z,"sunShadowMap",hn.state.sunShadowMap,it),hn.state.directionalShadowMap.length>0&&bt.setValue(Z,"directionalShadowMap",hn.state.directionalShadowMap,it),hn.state.spotShadowMap.length>0&&bt.setValue(Z,"spotShadowMap",hn.state.spotShadowMap,it),hn.state.pointShadowMap.length>0&&bt.setValue(Z,"pointShadowMap",hn.state.pointShadowMap,it)),ne.isSkinnedMesh){bt.setOptional(Z,ne,"bindMatrix"),bt.setOptional(Z,ne,"bindMatrixInverse");const Dt=ne.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),bt.setValue(Z,"boneTexture",Dt.boneTexture,it))}ne.isBatchedMesh&&(bt.setOptional(Z,ne,"batchingTexture"),bt.setValue(Z,"batchingTexture",ne._matricesTexture,it),bt.setOptional(Z,ne,"batchingIdTexture"),bt.setValue(Z,"batchingIdTexture",ne._indirectTexture,it),bt.setOptional(Z,ne,"batchingColorTexture"),ne._colorsTexture!==null&&bt.setValue(Z,"batchingColorTexture",ne._colorsTexture,it));const Cn=ce.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&_e.update(ne,ce,pn),(xi||qe.receiveShadow!==ne.receiveShadow)&&(qe.receiveShadow=ne.receiveShadow,bt.setValue(Z,"receiveShadow",ne.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&W.environment!==null&&(on.envMapIntensity.value=W.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=ow()),xi){if(bt.setValue(Z,"toneMappingExposure",z.toneMappingExposure),qe.needsLights&&xo(on,Pi),Fe&&ae.fog===!0&&Ne.refreshFogUniforms(on,Fe),Ne.refreshMaterialUniforms(on,ae,he,ge,O.state.transmissionRenderTarget[N.id]),qe.needsLights&&qe.numLightProbeGrids>0){const Dt=P;let Gt=0;for(const yn of O.state.lightProbeGridArray)yn.texture!==null&&(Dt.textures[Gt]=yn.texture,Dt.min[Gt]=yn.boundingBox.min,Dt.max[Gt]=yn.boundingBox.max,Dt.resolution[Gt]=yn.resolution,Gt++);for(const yn in Dt)Dt[yn].length=Gt;on.probesSH.value=Dt.textures,on.probesMin.value=Dt.min,on.probesMax.value=Dt.max,on.probesResolution.value=Dt.resolution}tc.upload(Z,Xt(qe),on,it)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(tc.upload(Z,Xt(qe),on,it),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&bt.setValue(Z,"center",ne.center),bt.setValue(Z,"modelViewMatrix",ne.modelViewMatrix),bt.setValue(Z,"normalMatrix",ne.normalMatrix),bt.setValue(Z,"modelMatrix",ne.matrixWorld),ae.uniformsGroups!==void 0){const Dt=ae.uniformsGroups;for(let Gt=0,yn=Dt.length;Gt<yn;Gt++){const dr=Dt[Gt];Ze.update(dr,pn),Ze.bind(dr,pn)}}return pn}function xo(N,W){N.ambientLightColor.needsUpdate=W,N.lightProbe.needsUpdate=W,N.sunLights.needsUpdate=W,N.sunLightShadows.needsUpdate=W,N.directionalLights.needsUpdate=W,N.directionalLightShadows.needsUpdate=W,N.pointLights.needsUpdate=W,N.pointLightShadows.needsUpdate=W,N.spotLights.needsUpdate=W,N.spotLightShadows.needsUpdate=W,N.rectAreaLights.needsUpdate=W,N.hemisphereLights.needsUpdate=W}function fs(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(N,W,ce){const ae=We.get(N);ae.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),We.get(N.texture).__webglTexture=W,We.get(N.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:ce,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,W){const ce=We.get(N);ce.__webglFramebuffer=W,ce.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(N,W=0,ce=0){j=N,Q=W,Y=ce;let ae=null,ne=!1,Fe=!1;if(N){const Oe=We.get(N);if(Oe.__useDefaultFramebuffer!==void 0){Pe.bindFramebuffer(Z.FRAMEBUFFER,Oe.__webglFramebuffer),M.copy(N.viewport),H.copy(N.scissor),xe=N.scissorTest,Pe.viewport(M),Pe.scissor(H),Pe.setScissorTest(xe),q=-1;return}else if(Oe.__webglFramebuffer===void 0)it.setupRenderTarget(N);else if(Oe.__hasExternalTextures)it.rebindTextures(N,We.get(N.texture).__webglTexture,We.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const lt=N.depthTexture;if(Oe.__boundDepthTexture!==lt){if(lt!==null&&We.has(lt)&&(N.width!==lt.image.width||N.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");it.setupDepthRenderbuffer(N)}}const Be=N.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Fe=!0);const Xe=We.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Xe[W])?ae=Xe[W][ce]:ae=Xe[W],ne=!0):N.samples>0&&it.useMultisampledRTT(N)===!1?ae=We.get(N).__webglMultisampledFramebuffer:Array.isArray(Xe)?ae=Xe[ce]:ae=Xe,M.copy(N.viewport),H.copy(N.scissor),xe=N.scissorTest}else M.copy(Ue).multiplyScalar(he).floor(),H.copy(tt).multiplyScalar(he).floor(),xe=st;if(ce!==0&&(ae=de),Pe.bindFramebuffer(Z.FRAMEBUFFER,ae)&&Pe.drawBuffers(N,ae),Pe.viewport(M),Pe.scissor(H),Pe.setScissorTest(xe),ne){const Oe=We.get(N.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+W,Oe.__webglTexture,ce)}else if(Fe){const Oe=W;for(let Be=0;Be<N.textures.length;Be++){const Xe=We.get(N.textures[Be]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+Be,Xe.__webglTexture,ce,Oe)}}else if(N!==null&&ce!==0){const Oe=We.get(N.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Oe.__webglTexture,ce)}q=-1};function vo(N){const W=We.get(N);return(W.__readFormat!==N.format||W.__readType!==N.type)&&(W.__readFormat=N.format,W.__readType=N.type,W.__formatReadable=Rt.textureFormatReadable(N.format),W.__typeReadable=Rt.textureTypeReadable(N.type)),W}this.readRenderTargetPixels=function(N,W,ce,ae,ne,Fe,Ve,Oe=0){if(!(N&&N.isWebGLRenderTarget)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=We.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ve!==void 0&&(Be=Be[Ve],Array.isArray(Be)&&(Be=Be[0])),Be){Pe.bindFramebuffer(Z.FRAMEBUFFER,Be);try{const Xe=N.textures[Oe],lt=Xe.format,mt=Xe.type;N.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Oe);const Ye=vo(Xe);if(Ye.__formatReadable===!1){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ye.__typeReadable===!1){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=N.width-ae&&ce>=0&&ce<=N.height-ne&&Z.readPixels(W,ce,ae,ne,Ce.convert(lt),Ce.convert(mt),Fe)}finally{const Xe=j!==null?We.get(j).__webglFramebuffer:null;Pe.bindFramebuffer(Z.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(N,W,ce,ae,ne,Fe,Ve,Oe=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=We.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ve!==void 0&&(Be=Be[Ve],Array.isArray(Be)&&(Be=Be[0])),Be)if(W>=0&&W<=N.width-ae&&ce>=0&&ce<=N.height-ne){Pe.bindFramebuffer(Z.FRAMEBUFFER,Be);const Xe=N.textures[Oe],lt=Xe.format,mt=Xe.type;N.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Oe);const Ye=vo(Xe);if(Ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const vt=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,vt),Z.bufferData(Z.PIXEL_PACK_BUFFER,Fe.byteLength,Z.STREAM_READ),Z.readPixels(W,ce,ae,ne,Ce.convert(lt),Ce.convert(mt),0),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null);const Yt=j!==null?We.get(j).__webglFramebuffer:null;Pe.bindFramebuffer(Z.FRAMEBUFFER,Yt);const Bt=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await v_(Z,Bt,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,vt),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Fe),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null),Z.deleteBuffer(vt),Z.deleteSync(Bt),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,W=null,ce=0){const ae=Math.pow(2,-ce),ne=Math.floor(N.image.width*ae),Fe=Math.floor(N.image.height*ae),Ve=W!==null?W.x:0,Oe=W!==null?W.y:0;it.setTexture2D(N,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,ce,0,0,Ve,Oe,ne,Fe),Pe.unbindTexture()},this.copyTextureToTexture=function(N,W,ce=null,ae=null,ne=0,Fe=0){let Ve,Oe,Be,Xe,lt,mt,Ye,vt,Yt;const Bt=N.isCompressedTexture?N.mipmaps[Fe]:N.image;if(ce!==null)Ve=ce.max.x-ce.min.x,Oe=ce.max.y-ce.min.y,Be=ce.isBox3?ce.max.z-ce.min.z:1,Xe=ce.min.x,lt=ce.min.y,mt=ce.isBox3?ce.min.z:0;else{const bt=Math.pow(2,-ne);Ve=Math.floor(Bt.width*bt),Oe=Math.floor(Bt.height*bt),N.isDataArrayTexture?Be=Bt.depth:N.isData3DTexture?Be=Math.floor(Bt.depth*bt):Be=1,Xe=0,lt=0,mt=0}ae!==null?(Ye=ae.x,vt=ae.y,Yt=ae.z):(Ye=0,vt=0,Yt=0);const Ot=Ce.convert(W.format),rn=Ce.convert(W.type);let qe;W.isData3DTexture?(it.setTexture3D(W,0),qe=Z.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(it.setTexture2DArray(W,0),qe=Z.TEXTURE_2D_ARRAY):(it.setTexture2D(W,0),qe=Z.TEXTURE_2D),Pe.activeTexture(Z.TEXTURE0),Pe.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,W.flipY),Pe.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),Pe.pixelStorei(Z.UNPACK_ALIGNMENT,W.unpackAlignment);const hn=Pe.getParameter(Z.UNPACK_ROW_LENGTH),Je=Pe.getParameter(Z.UNPACK_IMAGE_HEIGHT),Ni=Pe.getParameter(Z.UNPACK_SKIP_PIXELS),pn=Pe.getParameter(Z.UNPACK_SKIP_ROWS),ur=Pe.getParameter(Z.UNPACK_SKIP_IMAGES);Pe.pixelStorei(Z.UNPACK_ROW_LENGTH,Bt.width),Pe.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Bt.height),Pe.pixelStorei(Z.UNPACK_SKIP_PIXELS,Xe),Pe.pixelStorei(Z.UNPACK_SKIP_ROWS,lt),Pe.pixelStorei(Z.UNPACK_SKIP_IMAGES,mt);const xi=N.isDataArrayTexture||N.isData3DTexture,Pi=W.isDataArrayTexture||W.isData3DTexture;if(N.isDepthTexture){const bt=We.get(N),on=We.get(W),Cn=We.get(bt.__renderTarget),Dt=We.get(on.__renderTarget);Pe.bindFramebuffer(Z.READ_FRAMEBUFFER,Cn.__webglFramebuffer),Pe.bindFramebuffer(Z.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let Gt=0;Gt<Be;Gt++)xi&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,We.get(N).__webglTexture,ne,mt+Gt),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,We.get(W).__webglTexture,Fe,Yt+Gt)),Z.blitFramebuffer(Xe,lt,Xe+Ve,lt+Oe,Ye,vt,Ye+Ve,vt+Oe,Z.DEPTH_BUFFER_BIT,Z.NEAREST);Pe.bindFramebuffer(Z.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(ne!==0||N.isRenderTargetTexture||We.has(N)){const bt=We.get(N),on=We.get(W);Pe.bindFramebuffer(Z.READ_FRAMEBUFFER,V),Pe.bindFramebuffer(Z.DRAW_FRAMEBUFFER,oe);for(let Cn=0;Cn<Be;Cn++)xi?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,bt.__webglTexture,ne,mt+Cn):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,bt.__webglTexture,ne),Pi?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,on.__webglTexture,Fe,Yt+Cn):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,on.__webglTexture,Fe),ne!==0?Z.blitFramebuffer(Xe,lt,Xe+Ve,lt+Oe,Ye,vt,Ye+Ve,vt+Oe,Z.COLOR_BUFFER_BIT,Z.NEAREST):Pi?Z.copyTexSubImage3D(qe,Fe,Ye,vt,Yt+Cn,Xe,lt,Ve,Oe):Z.copyTexSubImage2D(qe,Fe,Ye,vt,Xe,lt,Ve,Oe);Pe.bindFramebuffer(Z.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else Pi?N.isDataTexture||N.isData3DTexture?Z.texSubImage3D(qe,Fe,Ye,vt,Yt,Ve,Oe,Be,Ot,rn,Bt.data):W.isCompressedArrayTexture?Z.compressedTexSubImage3D(qe,Fe,Ye,vt,Yt,Ve,Oe,Be,Ot,Bt.data):Z.texSubImage3D(qe,Fe,Ye,vt,Yt,Ve,Oe,Be,Ot,rn,Bt):N.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Fe,Ye,vt,Ve,Oe,Ot,rn,Bt.data):N.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Fe,Ye,vt,Bt.width,Bt.height,Ot,Bt.data):Z.texSubImage2D(Z.TEXTURE_2D,Fe,Ye,vt,Ve,Oe,Ot,rn,Bt);Pe.pixelStorei(Z.UNPACK_ROW_LENGTH,hn),Pe.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Je),Pe.pixelStorei(Z.UNPACK_SKIP_PIXELS,Ni),Pe.pixelStorei(Z.UNPACK_SKIP_ROWS,pn),Pe.pixelStorei(Z.UNPACK_SKIP_IMAGES,ur),Fe===0&&W.generateMipmaps===!0&&W.mipmapsAutoUpdate===!0&&Z.generateMipmap(qe),Pe.unbindTexture()},this.initRenderTarget=function(N){We.get(N).__webglFramebuffer===void 0&&it.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?it.setTextureCube(N,0):N.isData3DTexture?it.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?it.setTexture2DArray(N,0):it.setTexture2D(N,0),Pe.unbindTexture()},this.resetState=function(){Q=0,Y=0,j=null,Pe.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Nt._getUnpackColorSpace()}}class lw{constructor(){this.ctx=null,this.isPlaying=!1,this.masterGain=null,this.droneGain=null,this.osc1=null,this.osc2=null,this.filter=null}init(){if(this.ctx)return;const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.08,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.filter=this.ctx.createBiquadFilter(),this.filter.type="lowpass",this.filter.frequency.setValueAtTime(140,this.ctx.currentTime),this.filter.Q.setValueAtTime(4,this.ctx.currentTime),this.filter.connect(this.masterGain),this.droneGain=this.ctx.createGain(),this.droneGain.gain.setValueAtTime(0,this.ctx.currentTime),this.droneGain.connect(this.filter),this.osc1=this.ctx.createOscillator(),this.osc1.type="sine",this.osc1.frequency.setValueAtTime(55,this.ctx.currentTime),this.osc1.connect(this.droneGain),this.osc1.start(),this.osc2=this.ctx.createOscillator(),this.osc2.type="triangle",this.osc2.frequency.setValueAtTime(82.4,this.ctx.currentTime),this.osc2.connect(this.droneGain),this.osc2.start())}toggle(){return this.ctx||this.init(),this.ctx.state==="suspended"&&this.ctx.resume(),this.isPlaying?(this.droneGain.gain.linearRampToValueAtTime(.001,this.ctx.currentTime+.6),this.isPlaying=!1):(this.droneGain.gain.linearRampToValueAtTime(.4,this.ctx.currentTime+1.2),this.isPlaying=!0,this.playChime(440,.05)),this.isPlaying}playClick(){if(!(!this.isPlaying||!this.ctx))try{const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(1200,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(400,this.ctx.currentTime+.04),t.gain.setValueAtTime(.03,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.04),e.connect(t),t.connect(this.masterGain),e.start(),e.stop(this.ctx.currentTime+.05)}catch{}}playChime(e=520,t=.2){if(!(!this.isPlaying||!this.ctx))try{const r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(e,this.ctx.currentTime),r.frequency.exponentialRampToValueAtTime(e*1.5,this.ctx.currentTime+t),o.gain.setValueAtTime(.05,this.ctx.currentTime),o.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+t),r.connect(o),o.connect(this.masterGain),r.start(),r.stop(this.ctx.currentTime+t)}catch{}}}const nn=new lw;/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Og=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var uw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=rt.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...h},p)=>rt.createElement("svg",{ref:p,...uw,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:Og("lucide",o),...h},[...u.map(([m,y])=>rt.createElement(m,y)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=(s,e)=>{const t=rt.forwardRef(({className:r,...o},l)=>rt.createElement(dw,{ref:l,iconNode:e,className:Og(`lucide-${cw(s)}`,r),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],hw=Mt("ArrowDown",fw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Fg=Mt("ArrowRight",pw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],co=Mt("ArrowUpRight",mw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],dc=Mt("Award",gw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]],vw=Mt("Binary",xw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],kg=Mt("BookOpen",_w);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],Bg=Mt("Box",yw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]],Mw=Mt("Brain",Sw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],ww=Mt("Check",Ew);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],zg=Mt("ChevronRight",bw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Zs=Mt("CircleCheck",Tw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],Rw=Mt("Cloud",Aw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Gg=Mt("Compass",Cw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nw=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Pw=Mt("Copy",Nw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iw=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]],Hg=Mt("Cpu",Iw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lw=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Vg=Mt("ExternalLink",Lw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dw=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]],Uw=Mt("FileCheck",Dw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ow=[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8",key:"pkpw2h"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]],Fw=Mt("FolderGit2",Ow);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kw=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],yc=Mt("Github",kw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],zw=Mt("Globe",Bw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gw=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Wf=Mt("Layers",Gw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hw=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],jg=Mt("Linkedin",Hw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vw=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],jw=Mt("Mail",Vw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ww=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],Xw=Mt("Menu",Ww);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yw=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],qw=Mt("Network",Yw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $w=[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]],Kw=Mt("Radio",$w);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zw=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]],Jw=Mt("Scan",Zw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qw=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],eb=Mt("Send",Qw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],nb=Mt("Server",tb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Wg=Mt("ShieldCheck",ib);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],sb=Mt("Shield",rb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],cr=Mt("Sparkles",ab);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]],Xf=Mt("Terminal",ob);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]],R0=Mt("Trophy",lb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cb=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],fc=Mt("Volume2",cb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],hc=Mt("VolumeX",ub);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Yf=Mt("X",db);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],hb=Mt("Zap",fb);function pb({onOpenMember:s,onOpenProject:e}){const t=rt.useRef(null),[r,o]=rt.useState(0),[l,u]=rt.useState("THE AGE OF GRAVITY"),[h,p]=rt.useState("CHAPTER 1: BØRN AT GL BAJAJ"),[m,y]=rt.useState(!1),S=rt.useRef(!1),_=rt.useRef(0);rt.useEffect(()=>{const x=t.current;if(!x)return;let v=x.clientWidth||window.innerWidth,T=x.clientHeight||window.innerHeight;const D=new Df;D.fog=new Lf(395279,.035);const P=new Yn(50,v/T,.1,100);P.position.set(0,1.6,5);const U=new jf({antialias:!0,alpha:!1});U.setSize(v,T),U.setPixelRatio(Math.min(window.devicePixelRatio,2)),U.toneMapping=mc,U.toneMappingExposure=1.1,x.appendChild(U.domElement);const O=new Gf(1578e3,1.8);D.add(O);const w=new aa(16754470,3.5,25);w.position.set(0,4,2),D.add(w);const I=new aa(61695,3,30);I.position.set(0,3,-18),D.add(I);const $=new ii(14,70),z=new Xn({color:1117448,roughness:.7,metalness:.2}),K=new yt($,z);K.rotation.x=-Math.PI/2,K.position.set(0,0,-25),D.add(K);const ee=new Xn({color:1708556,roughness:.8}),de=new yt(new ii(70,10),ee);de.rotation.y=Math.PI/2,de.position.set(-6,3.5,-25),D.add(de);const V=new yt(new ii(70,10),ee);V.rotation.y=-Math.PI/2,V.position.set(6,3.5,-25),D.add(V);const oe=document.createElement("canvas");oe.width=1024,oe.height=1024;const Q=oe.getContext("2d");Q.fillStyle="#0f0a06",Q.fillRect(0,0,1024,1024),Q.strokeStyle="#ff9800",Q.lineWidth=4,Q.shadowColor="#ffb74d",Q.shadowBlur=12,Q.strokeRect(412,750,200,140),Q.fillStyle="#1e140a",Q.fillRect(412,750,200,140),Q.fillStyle="#ffb74d",Q.font="bold 24px monospace",Q.textAlign="center",Q.fillText("APEX CORE",512,830),Q.beginPath(),Q.moveTo(512,750),Q.lineTo(512,450),Q.moveTo(512,620),Q.lineTo(340,520),Q.lineTo(340,320),Q.lineTo(240,220),Q.moveTo(512,530),Q.lineTo(390,430),Q.lineTo(390,280),Q.moveTo(512,620),Q.lineTo(684,520),Q.lineTo(684,320),Q.lineTo(784,220),Q.moveTo(512,530),Q.lineTo(634,430),Q.lineTo(634,280),Q.stroke();const Y=[[240,220],[340,320],[390,280],[512,380],[512,260],[634,280],[684,320],[784,220],[450,480],[574,480]];Q.fillStyle="#ffcc80",Y.forEach(([se,Se])=>{Q.beginPath(),Q.arc(se,Se,9,0,Math.PI*2),Q.fill()});const j=new Gl(oe),q=new yt(new ii(6,6),new ri({map:j,transparent:!0}));q.rotation.y=Math.PI/2,q.position.set(-5.9,3.5,0),D.add(q);const L=document.createElement("canvas");L.width=1024,L.height=512;const M=L.getContext("2d");M.fillStyle="#17110b",M.fillRect(0,0,1024,512),M.fillStyle="#ff9800",M.font="22px monospace",M.fillText("CHAPTER 1",60,80),M.fillStyle="#ffffff",M.font="bold 54px Orbitron, sans-serif",M.fillText("BØRN AT GL BAJAJ",60,160),M.fillStyle="#cccccc",M.font="22px Space Grotesk, sans-serif",M.fillText("Five curious minds exploring technology, building intelligent solutions,",60,240),M.fillText("and transforming ambitious ideas into meaningful creations.",60,280),M.fillText("Walk forward through the ages to explore our creations & milestones.",60,340),M.fillStyle="#ff9800",M.font="bold 20px monospace",M.fillText("SCROLL OR DRAG RAIL TO VISIT →",60,420);const H=new Gl(L),xe=new yt(new ii(6.5,3.25),new ri({map:H}));xe.position.set(0,3.2,-4),D.add(xe);const G=new Gi;G.position.set(0,3.2,-10);const te=document.createElement("canvas");te.width=1024,te.height=512;const fe=te.getContext("2d"),ge=fe.createLinearGradient(0,0,1024,512);ge.addColorStop(0,"#0a101d"),ge.addColorStop(.5,"#1e140d"),ge.addColorStop(1,"#05070c"),fe.fillStyle=ge,fe.fillRect(0,0,1024,512),fe.fillStyle="#ff9800",fe.font="20px monospace",fe.textAlign="center",fe.fillText("THE ORIGIN",512,100),fe.fillStyle="#ffffff",fe.font="bold 50px Orbitron, sans-serif",fe.fillText("EVERY REVOLUTION HAS AN ORIGIN",512,180),fe.fillStyle="#dddddd",fe.font="24px Space Grotesk, sans-serif",fe.fillText("A spark, five students beneath late-night campus dorms.",512,270),fe.fillText("APEX begins where that ambition catches fire.",512,320);const he=new Gl(te),Ee=new yt(new ii(8,4),new ri({map:he}));G.add(Ee);const et=new rr(new Dr(new ii(8.1,4.1)),new ta({color:16754470,linewidth:3}));G.add(et),D.add(G);const Ue=new Gi;Ue.position.set(0,3.2,-16),D.add(Ue);const tt=14,st=[],ke=new xn,Et=new Float32Array([0,0,0,1.2,3.5,0,-1.2,3.5,0]);ke.setAttribute("position",new gi(Et,3)),ke.computeVertexNormals();const wt=new Xn({color:9069108,roughness:.4,metalness:.6,side:pi});for(let se=0;se<tt;se++){const Se=se/tt*Math.PI*2,k=new yt(ke,wt);k.rotation.z=Se,k.userData={initialRotZ:Se},Ue.add(k),st.push(k)}const It=new yt(new lr(3.6,.15,16,60),new Xn({color:16754470,metalness:.8,roughness:.2}));Ue.add(It);const gt=new Gi;gt.position.set(0,3.2,-26),D.add(gt),[{title:"GOVINNOVATE",sub:"AI / GOVTECH / BLOCKCHAIN",desc:"Sustainathon 2.0 Theme Winner",color:"#00f0ff",x:-3.8},{title:"SUSTAINATHON 2.0",sub:"SHARDA UNIVERSITY",desc:"1st Place Theme-Wise Victory",color:"#ff9800",x:0},{title:"hackFront INDIA",sub:"IIIT DELHI FINALE",desc:"National Finale Golden Ticket",color:"#a855f7",x:3.8}].forEach(se=>{const Se=document.createElement("canvas");Se.width=512,Se.height=700;const k=Se.getContext("2d");k.fillStyle="#080d1a",k.fillRect(0,0,512,700),k.strokeStyle=se.color,k.lineWidth=6,k.strokeRect(20,20,472,660),k.fillStyle=se.color,k.font="bold 22px monospace",k.textAlign="center",k.fillText(se.sub,256,120),k.fillStyle="#ffffff",k.font="bold 38px Orbitron, sans-serif",k.fillText(se.title,256,200),k.fillStyle="#111827",k.fillRect(60,260,392,240),k.strokeStyle=se.color,k.lineWidth=2,k.strokeRect(60,260,392,240),k.fillStyle=se.color,k.font="bold 28px Orbitron, sans-serif",k.fillText("EXHIBIT ARTIFACT",256,390),k.fillStyle="#94a3b8",k.font="22px Space Grotesk, sans-serif",k.fillText(se.desc,256,560),k.fillStyle=se.color,k.font="bold 20px monospace",k.fillText("CLICK TO OPEN DOSSIER",256,620);const _e=new Gl(Se),me=new yt(new ii(2.6,3.6),new ri({map:_e,side:pi}));me.position.set(se.x,0,0);const we=new xn,Ce=new Float32Array([-1.4,1.9,0,-1.1,1.9,0,-1.4,1.9,0,-1.4,1.6,0,1.4,1.9,0,1.1,1.9,0,1.4,1.9,0,1.4,1.6,0,-1.4,-1.9,0,-1.1,-1.9,0,-1.4,-1.9,0,-1.4,-1.6,0,1.4,-1.9,0,1.1,-1.9,0,1.4,-1.9,0,1.4,-1.6,0]);we.setAttribute("position",new gi(Ce,3));const Ie=new rr(we,new ta({color:parseInt(se.color.replace("#","0x"),16),linewidth:3}));me.add(Ie),gt.add(me)});const pt=new Gi;D.add(pt);const Zt=new ii(2.2,22),cn=new Xn({color:12196378,roughness:.6}),an=new yt(Zt,cn);an.rotation.x=-Math.PI/2,an.position.set(0,.02,-41),pt.add(an);const Z=new Xn({color:2366226,roughness:.7,metalness:.1});for(let se=-34;se>=-48;se-=2.8){const Se=new yt(new lr(3,.35,16,40,Math.PI),Z);Se.position.set(0,2.5,se),pt.add(Se);const k=new yt(new zr(.5,3,.5),Z);k.position.set(-3,1.5,se),pt.add(k);const _e=new yt(new zr(.5,3,.5),Z);_e.position.set(3,1.5,se),pt.add(_e)}const fn=new ra(2.5,0),Lt=new Xn({color:330782,emissive:61695,emissiveIntensity:.4,wireframe:!0}),Rt=new yt(fn,Lt);Rt.position.set(0,3.2,-50),D.add(Rt);const Pe=250,kt=new Float32Array(Pe*3);for(let se=0;se<Pe*3;se+=3)kt[se]=(Math.random()-.5)*12,kt[se+1]=Math.random()*6,kt[se+2]=-Math.random()*52;const We=new xn;We.setAttribute("position",new gi(kt,3));const it=new gc({color:16754470,size:.08,transparent:!0,opacity:.75}),F=new Ff(We,it);D.add(F);let A={x:0,y:0,targetX:0,targetY:0};const re=se=>{A.targetX=se.clientX/v*2-1,A.targetY=-(se.clientY/T)*2+1};window.addEventListener("mousemove",re);const Te=se=>{_.current=Math.max(0,Math.min(1,_.current+se.deltaY*7e-4)),o(_.current)};x.addEventListener("wheel",Te,{passive:!0});let ye=new Hf,Ne;const De=()=>{Ne=requestAnimationFrame(De);const se=ye.getElapsedTime();A.x+=(A.targetX-A.x)*.05,A.y+=(A.targetY-A.y)*.05;const Se=4-_.current*48;P.position.z+=(Se-P.position.z)*.08,P.position.x=A.x*.6,P.position.y=1.6+A.y*.35,P.lookAt(A.x*.4,1.6+A.y*.2,P.position.z-5);const k=Math.abs(P.position.z- -16),_e=Math.max(0,1-k/6);st.forEach(we=>{we.rotation.z=we.userData.initialRotZ+_e*1.2,we.position.x=Math.cos(we.userData.initialRotZ)*_e*1.5,we.position.y=Math.sin(we.userData.initialRotZ)*_e*1.5}),Rt.rotation.y=se*.4,Rt.rotation.x=se*.2;const me=We.attributes.position.array;for(let we=1;we<Pe*3;we+=3)me[we]+=Math.sin(se+we)*.005;We.attributes.position.needsUpdate=!0,P.position.z>-6?(u("THE AGE OF GRAVITY"),p("CHAPTER 1: BØRN AT GL BAJAJ")):P.position.z>-16?(u("THE AGE OF CURIOSITY"),p("THE ORIGIN: AMBITIONS AWAKEN")):P.position.z>-32?(u("THE AGE OF IDEAS"),p("THE EXHIBITION: SUSTAINATHON & GOVINNOVATE")):(u("THE AGE OF INNOVATION"),p("THE HORIZON: BEYOND IDEAS")),U.render(D,P)};De();const ve=()=>{x&&(v=x.clientWidth||window.innerWidth,T=x.clientHeight||window.innerHeight,P.aspect=v/T,P.updateProjectionMatrix(),U.setSize(v,T))};return window.addEventListener("resize",ve),()=>{cancelAnimationFrame(Ne),window.removeEventListener("mousemove",re),window.removeEventListener("resize",ve),x.removeEventListener("wheel",Te),x&&U.domElement&&x.removeChild(U.domElement),U.dispose()}},[]);const E=x=>{S.current=!0,b(x)},b=x=>{const v=document.getElementById("corridor-rail");if(!v)return;const T=v.getBoundingClientRect(),D=Math.max(0,Math.min(1,(x.clientX-T.left)/T.width));_.current=D,o(D)};rt.useEffect(()=>{const x=T=>{S.current&&b(T)},v=()=>{S.current=!1};return window.addEventListener("mousemove",x),window.addEventListener("mouseup",v),()=>{window.removeEventListener("mousemove",x),window.removeEventListener("mouseup",v)}},[]);const C=()=>{const x=nn.toggle();y(x)};return d.jsxs("div",{className:"relative w-full h-screen bg-[#06080f] overflow-hidden select-none",children:[d.jsx("div",{ref:t,className:"absolute inset-0 z-0"}),d.jsxs("header",{className:"absolute top-0 left-0 right-0 z-30 px-6 sm:px-10 py-5 flex items-center justify-between pointer-events-auto",children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("div",{className:"w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center font-orbitron font-black text-slate-950 text-lg shadow-[0_0_20px_rgba(0,240,255,0.4)]",children:"A"}),d.jsxs("div",{className:"flex flex-col",children:[d.jsx("span",{className:"font-orbitron font-black text-lg tracking-[0.2em] text-white",children:"APEX'27"}),d.jsx("span",{className:"font-mono text-[9px] text-cyan-400 tracking-widest",children:"INNOVATION COLLECTIVE"})]})]}),d.jsx("nav",{className:"hidden md:flex items-center gap-1 px-5 py-2 rounded-full bg-[#0a0f1d]/90 border border-slate-700/80 backdrop-blur-xl shadow-2xl",children:["ABOUT","TEAM","ACHIEVEMENTS","CREATIONS","FRONTIERS","JOURNEY","CONTACT"].map(x=>d.jsx("button",{onClick:()=>{nn.playClick();const v=document.getElementById(x.toLowerCase());v&&v.scrollIntoView({behavior:"smooth"})},className:"px-3.5 py-1 text-xs font-mono tracking-widest text-slate-300 hover:text-cyan-400 transition-colors uppercase",children:x},x))}),d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("button",{onClick:C,className:"p-2 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-cyan-400 transition-colors",title:"Toggle Atmosphere",children:m?d.jsx(fc,{size:16,className:"text-cyan-400"}):d.jsx(hc,{size:16})}),d.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1e130c]/90 border border-amber-600/50 text-white font-mono text-xs shadow-[0_0_15px_rgba(255,152,0,0.2)]",children:[d.jsx("span",{className:"w-6 h-6 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 text-slate-950 font-bold flex items-center justify-center text-xs",children:"S"}),d.jsx("span",{className:"tracking-wider font-bold",children:"SHASHWAT"})]})]})]}),d.jsxs("div",{className:"absolute bottom-16 right-8 sm:right-16 z-20 flex flex-col items-end gap-2 pointer-events-auto",children:[d.jsx("span",{className:"font-mono text-xs text-amber-300/90 tracking-[0.25em] uppercase font-bold",children:"SCROLL TO VISIT"}),d.jsxs("div",{id:"corridor-rail",onMouseDown:E,className:"relative w-64 sm:w-80 h-1.5 rounded-full bg-slate-800/80 border border-amber-500/40 cursor-pointer shadow-[0_0_15px_rgba(255,152,0,0.2)]",children:[d.jsx("div",{className:"h-full rounded-full bg-gradient-to-r from-amber-500 to-yellow-300",style:{width:`${r*100}%`}}),d.jsx("div",{className:"absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-amber-500 shadow-[0_0_10px_#ffb74d] transition-transform",style:{left:`calc(${r*100}% - 8px)`}})]})]}),d.jsxs("div",{className:"absolute bottom-12 left-8 sm:left-12 z-20 font-mono text-xs pointer-events-none",children:[d.jsxs("div",{className:"text-amber-400 font-bold tracking-[0.25em] uppercase flex items-center gap-2 mb-1",children:[d.jsx("span",{className:"w-2 h-2 rounded-full bg-amber-400 animate-pulse"}),d.jsx("span",{children:l})]}),d.jsx("div",{className:"text-slate-400 text-[11px] tracking-wider uppercase",children:h})]}),d.jsx("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 z-20 font-mono text-[10px] text-slate-500 tracking-widest uppercase pointer-events-none hidden sm:block",children:"USE MOUSE WHEEL OR DRAG SLIDER TO WALK THROUGH 3D CORRIDORS"})]})}function mb(){const s=rt.useRef(null);return rt.useEffect(()=>{const e=s.current;if(!e)return;const t=e.getContext("2d");if(!t)return;let r,o=e.width=window.innerWidth,l=e.height=window.innerHeight;const u=Math.min(Math.floor(o*l/14e3),120),h=[];let p={x:o/2,y:l/2,active:!1};class m{constructor(){this.reset()}reset(){this.x=Math.random()*o,this.y=Math.random()*l,this.z=Math.random()*2+.5,this.vx=(Math.random()-.5)*.4,this.vy=(Math.random()-.5)*.4,this.radius=Math.random()*1.8+.6,this.baseColor=Math.random()>.4?"rgba(0, 240, 255,":"rgba(168, 85, 247,",this.alpha=Math.random()*.6+.2}update(){if(this.x+=this.vx*this.z,this.y+=this.vy*this.z,p.active){const v=p.x-this.x,T=p.y-this.y,D=Math.sqrt(v*v+T*T);if(D<180){const P=(180-D)/180;this.x-=v/D*P*1.5,this.y-=T/D*P*1.5}}this.x<-10&&(this.x=o+10),this.x>o+10&&(this.x=-10),this.y<-10&&(this.y=l+10),this.y>l+10&&(this.y=-10)}draw(){t.beginPath(),t.arc(this.x,this.y,this.radius*this.z*.8,0,Math.PI*2),t.fillStyle=`${this.baseColor}${this.alpha})`,t.shadowColor=this.baseColor.includes("240")?"#00f0ff":"#a855f7",t.shadowBlur=8,t.fill(),t.shadowBlur=0}}for(let x=0;x<u;x++)h.push(new m);const y=()=>{for(let v=0;v<h.length;v++)for(let T=v+1;T<h.length;T++){const D=h[v],P=h[T],U=D.x-P.x,O=D.y-P.y,w=Math.sqrt(U*U+O*O);if(w<140){const I=(1-w/140)*.22;t.beginPath(),t.moveTo(D.x,D.y),t.lineTo(P.x,P.y),t.strokeStyle=`rgba(100, 150, 255, ${I})`,t.lineWidth=.7,t.stroke()}}};let S=0;const _=()=>{S++,t.clearRect(0,0,o,l);const x=t.createRadialGradient(o/2+Math.sin(S*.005)*80,l/3+Math.cos(S*.005)*80,50,o/2,l/2,Math.max(o,l)*.8);x.addColorStop(0,"#060a17"),x.addColorStop(.5,"#030712"),x.addColorStop(1,"#010308"),t.fillStyle=x,t.fillRect(0,0,o,l);const v=t.createRadialGradient(o*.2,l*.4,0,o*.2,l*.4,380);v.addColorStop(0,"rgba(0, 240, 255, 0.04)"),v.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=v,t.fillRect(0,0,o,l);const T=t.createRadialGradient(o*.8,l*.7,0,o*.8,l*.7,420);T.addColorStop(0,"rgba(168, 85, 247, 0.045)"),T.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=T,t.fillRect(0,0,o,l),t.strokeStyle="rgba(30, 41, 59, 0.25)",t.lineWidth=1;const D=70,P=S*.3%D;t.beginPath();for(let U=0;U<o;U+=D)t.moveTo(U,0),t.lineTo(U,l);for(let U=P;U<l;U+=D)t.moveTo(0,U),t.lineTo(o,U);t.stroke(),h.forEach(U=>{U.update(),U.draw()}),y(),r=requestAnimationFrame(_)};_();const E=()=>{o=e.width=window.innerWidth,l=e.height=window.innerHeight},b=x=>{p.x=x.clientX,p.y=x.clientY,p.active=!0},C=()=>{p.active=!1};return window.addEventListener("resize",E),window.addEventListener("mousemove",b),window.addEventListener("mouseleave",C),()=>{cancelAnimationFrame(r),window.removeEventListener("resize",E),window.removeEventListener("mousemove",b),window.removeEventListener("mouseleave",C)}},[]),d.jsx("canvas",{ref:s,className:"fixed inset-0 pointer-events-none z-0 opacity-80",style:{willChange:"transform"}})}function Sc({size:s=42,animated:e=!0,className:t=""}){return d.jsx("div",{className:`relative inline-flex items-center justify-center ${t}`,children:d.jsxs("svg",{width:s,height:s,viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:`${e?"transition-transform duration-500 hover:scale-110":""}`,children:[d.jsxs("defs",{children:[d.jsxs("linearGradient",{id:"apexGrad1",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[d.jsx("stop",{offset:"0%",stopColor:"#00F0FF"}),d.jsx("stop",{offset:"50%",stopColor:"#8B5CF6"}),d.jsx("stop",{offset:"100%",stopColor:"#EC4899"})]}),d.jsxs("linearGradient",{id:"apexCore",x1:"50%",y1:"0%",x2:"50%",y2:"100%",children:[d.jsx("stop",{offset:"0%",stopColor:"#00F0FF",stopOpacity:"0.8"}),d.jsx("stop",{offset:"100%",stopColor:"#6366F1",stopOpacity:"0.1"})]}),d.jsxs("filter",{id:"neonGlow",x:"-20%",y:"-20%",width:"140%",height:"140%",children:[d.jsx("feGaussianBlur",{stdDeviation:"3",result:"blur"}),d.jsxs("feMerge",{children:[d.jsx("feMergeNode",{in:"blur"}),d.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),d.jsx("polygon",{points:"50,8 90,82 10,82",fill:"none",stroke:"url(#apexGrad1)",strokeWidth:"3",strokeLinejoin:"round",filter:"url(#neonGlow)"}),d.jsx("line",{x1:"50",y1:"8",x2:"50",y2:"54",stroke:"#00F0FF",strokeWidth:"2.5",strokeDasharray:"3 2"}),d.jsx("line",{x1:"10",y1:"82",x2:"50",y2:"54",stroke:"#A855F7",strokeWidth:"2"}),d.jsx("line",{x1:"90",y1:"82",x2:"50",y2:"54",stroke:"#00F0FF",strokeWidth:"2"}),d.jsx("line",{x1:"30",y1:"45",x2:"70",y2:"45",stroke:"rgba(255,255,255,0.4)",strokeWidth:"1.5"}),d.jsx("polygon",{points:"50,22 66,54 34,54",fill:"url(#apexCore)"}),d.jsx("circle",{cx:"50",cy:"8",r:"4.5",fill:"#00F0FF",filter:"url(#neonGlow)"}),d.jsx("circle",{cx:"10",cy:"82",r:"4",fill:"#A855F7"}),d.jsx("circle",{cx:"90",cy:"82",r:"4",fill:"#EC4899"}),d.jsx("circle",{cx:"34",cy:"54",r:"3.5",fill:"#F59E0B"}),d.jsx("circle",{cx:"66",cy:"54",r:"3.5",fill:"#10B981"}),d.jsx("circle",{cx:"50",cy:"54",r:"5",fill:"#FFFFFF",filter:"url(#neonGlow)"})]})})}const C0=[{name:"HOME",href:"#home"},{name:"ABOUT",href:"#who-we-are"},{name:"TEAM",href:"#team"},{name:"ACHIEVEMENTS",href:"#achievements"},{name:"CREATIONS",href:"#creations"},{name:"FRONTIERS",href:"#tech-universe"},{name:"JOURNEY",href:"#journey"},{name:"CONTACT",href:"#contact"}];function gb(){const[s,e]=rt.useState(!1),[t,r]=rt.useState("home"),[o,l]=rt.useState(!1),[u,h]=rt.useState(!1);rt.useEffect(()=>{const y=()=>{e(window.scrollY>40);const S=["home","who-we-are","team","achievements","creations","tech-universe","journey","contact"],_=window.scrollY+200;for(const E of S){const b=document.getElementById(E);if(b){const C=b.offsetTop,x=b.offsetHeight;if(_>=C&&_<C+x){r(E);break}}}};return window.addEventListener("scroll",y,{passive:!0}),()=>window.removeEventListener("scroll",y)},[]);const p=y=>{nn.playClick(),l(!1);const S=document.querySelector(y);S&&S.scrollIntoView({behavior:"smooth"})},m=()=>{const y=nn.toggle();h(y)};return d.jsxs(d.Fragment,{children:[d.jsx("header",{className:`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${s?"py-3 bg-[#02050e]/85 backdrop-blur-2xl border-b border-slate-800/80 shadow-[0_4px_30px_rgba(0,0,0,0.7)]":"py-5 bg-transparent"}`,children:d.jsxs("div",{className:"max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between",children:[d.jsxs("a",{href:"#home","data-cursor":"pointer",onClick:y=>{y.preventDefault(),p("#home")},className:"flex items-center gap-3.5 group cursor-pointer",children:[d.jsx(Sc,{size:36}),d.jsxs("div",{className:"flex flex-col",children:[d.jsx("span",{className:"font-orbitron font-extrabold text-xl tracking-[0.25em] text-white group-hover:text-cyan-400 group-hover:tracking-[0.3em] transition-all duration-300",children:"APEX"}),d.jsx("span",{className:"font-mono text-[9px] text-cyan-400/80 tracking-widest hidden sm:block",children:"INNOVATION COLLECTIVE"})]})]}),d.jsx("nav",{className:"hidden lg:flex items-center gap-1 p-1.5 rounded-full bg-slate-900/70 border border-slate-800/90 backdrop-blur-2xl shadow-inner",children:C0.map(y=>{const S=t===y.href.replace("#","");return d.jsxs("button",{onClick:()=>p(y.href),"data-cursor":"pointer",className:`group relative px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 ${S?"text-cyan-300 bg-cyan-950/60 shadow-[0_0_15px_rgba(0,240,255,0.25)] border border-cyan-500/30 tracking-[0.2em] font-bold":"text-slate-400 hover:text-white hover:bg-white/5 border border-transparent tracking-[0.14em] hover:tracking-[0.2em]"}`,children:[d.jsx("span",{className:`absolute bottom-1 left-3 right-3 h-[2px] rounded-full transition-all duration-300 ${S?"bg-cyan-400 shadow-[0_0_8px_#00f0ff] opacity-100":"bg-purple-400 opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_8px_#a855f7]"}`}),d.jsx("span",{children:y.name})]},y.name)})}),d.jsxs("div",{className:"hidden sm:flex items-center gap-3",children:[d.jsx("button",{onClick:m,"data-cursor":"pointer",className:"p-2.5 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all duration-300",title:"Toggle Audio Atmosphere",children:u?d.jsx(fc,{size:16,className:"text-cyan-400"}):d.jsx(hc,{size:16})}),d.jsxs("button",{onClick:()=>p("#contact"),"data-cursor":"pointer",className:"group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full overflow-hidden text-xs font-mono font-bold tracking-widest text-slate-950 transition-all duration-300 bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] hover:scale-105 active:scale-100",children:[d.jsx("span",{children:"CONNECT"}),d.jsx(co,{size:14,className:"transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"})]})]}),d.jsxs("div",{className:"flex lg:hidden items-center gap-2",children:[d.jsx("button",{onClick:m,className:"p-2 rounded-lg border border-slate-800 bg-slate-900/40 text-slate-400",children:u?d.jsx(fc,{size:18,className:"text-cyan-400"}):d.jsx(hc,{size:18})}),d.jsx("button",{onClick:()=>l(!o),className:"p-2 text-slate-300 hover:text-white border border-slate-800 rounded-lg bg-slate-900/60",children:o?d.jsx(Yf,{size:22}):d.jsx(Xw,{size:22})})]})]})}),o&&d.jsxs("div",{className:"fixed inset-0 z-40 bg-[#02050e]/95 backdrop-blur-2xl lg:hidden pt-24 px-8 flex flex-col gap-6 animate-fadeIn",children:[d.jsxs("div",{className:"flex flex-col gap-3",children:[d.jsx("span",{className:"font-mono text-xs text-cyan-400 tracking-widest uppercase",children:"// Navigation Index"}),C0.map(y=>d.jsxs("button",{onClick:()=>p(y.href),className:"text-left font-orbitron text-xl font-bold tracking-wider text-slate-300 hover:text-cyan-400 transition-colors py-2 border-b border-slate-800/60 flex items-center justify-between",children:[d.jsx("span",{children:y.name}),d.jsx(co,{size:16,className:"text-slate-600"})]},y.name))]}),d.jsx("div",{className:"mt-auto pb-10 flex flex-col gap-3",children:d.jsx("button",{onClick:()=>p("#contact"),className:"w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-slate-950 font-mono font-bold text-sm tracking-widest text-center",children:"ENTER CONTACT PROTOCOL"})})]})]})}function xb(){const[s,e]=rt.useState(null),t=()=>{nn.playChime(600,.3);const o=document.getElementById("who-we-are");o&&o.scrollIntoView({behavior:"smooth"})},r=()=>{nn.playClick();const o=document.getElementById("team");o&&o.scrollIntoView({behavior:"smooth"})};return d.jsxs("section",{id:"home",className:"relative min-h-screen flex flex-col justify-center items-center px-6 pt-28 pb-16 overflow-hidden",children:[d.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[550px] sm:h-[750px] bg-gradient-to-tr from-cyan-600/15 via-purple-600/15 to-transparent rounded-full blur-[130px] pointer-events-none -z-10 animate-pulse-slow"}),d.jsxs("div",{className:"absolute top-24 left-8 font-mono text-[10px] text-slate-600 hidden lg:block tracking-widest",children:["SYS_STATUS: ONLINE",d.jsx("br",{}),"LAT: 28.4744° N // LON: 77.5040° E",d.jsx("br",{}),"CORE_INSTITUTE: GL BAJAJ"]}),d.jsxs("div",{className:"absolute top-24 right-8 font-mono text-[10px] text-slate-600 text-right hidden lg:block tracking-widest",children:["SPEC: APEX-V2.7-DEPLOY",d.jsx("br",{}),"ACTIVE_MINDS: 05",d.jsx("br",{}),"PROTOCOL: ZERO_LEGACY"]}),d.jsxs("div",{className:"max-w-5xl mx-auto flex flex-col items-center text-center relative z-10",children:[d.jsxs("div",{"data-cursor":"explore",className:"inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 font-mono text-xs tracking-widest mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(0,240,255,0.15)] animate-float",children:[d.jsxs("span",{className:"relative flex h-2 w-2",children:[d.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"}),d.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-cyan-400"})]}),d.jsx("span",{className:"uppercase text-[11px]",children:"SUSTAINATHON 2.0 THEME WINNER • 5 MINDS AS ONE"})]}),d.jsxs("div",{className:"mb-6 relative group cursor-pointer","data-cursor":"explore",onClick:()=>nn.playChime(700,.25),children:[d.jsx("div",{className:"absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity"}),d.jsx(Sc,{size:110,animated:!0})]}),d.jsx("h1",{className:"font-orbitron font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)] mb-4",children:"APEX"}),d.jsx("div",{className:"font-orbitron font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[0.18em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-300 to-pink-400 uppercase mb-4",children:"BEYOND IDEAS. INTO INNOVATION."}),d.jsx("div",{className:"font-mono text-xs sm:text-sm tracking-[0.3em] text-slate-400 uppercase mb-8",children:"FIVE MINDS • ONE VISION • INFINITE POSSIBILITIES"}),d.jsx("p",{className:"max-w-2xl text-slate-300 text-sm sm:text-base md:text-lg font-light leading-relaxed mb-12",children:'"We are five curious minds exploring technology, building intelligent solutions, and transforming ambitious ideas into meaningful creations."'}),d.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto",children:[d.jsxs("button",{onClick:t,"data-cursor":"pointer",className:"w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-mono font-bold tracking-widest text-slate-950 uppercase bg-gradient-to-r from-cyan-400 via-cyan-300 to-purple-400 hover:shadow-[0_0_35px_rgba(0,240,255,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0",children:[d.jsx(cr,{size:16,className:"text-slate-950"}),d.jsx("span",{children:"ENTER THE APEX EXPERIENCE"}),d.jsx(zg,{size:18,className:"transition-transform group-hover:translate-x-1"})]}),d.jsxs("button",{onClick:r,"data-cursor":"pointer",className:"w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-mono tracking-widest text-slate-300 hover:text-white uppercase bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-purple-500/50 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5",children:[d.jsx(Xf,{size:16,className:"text-purple-400"}),d.jsx("span",{children:"DISCOVER OUR STORY"})]})]}),d.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mt-16 pt-10 border-t border-slate-800/70 w-full max-w-4xl",children:[d.jsxs("div",{className:"flex flex-col items-center",children:[d.jsx("span",{className:"font-orbitron font-bold text-2xl sm:text-3xl text-cyan-400",children:"05"}),d.jsx("span",{className:"font-mono text-[11px] text-slate-400 uppercase tracking-widest mt-1",children:"Core Builders"})]}),d.jsxs("div",{className:"flex flex-col items-center",children:[d.jsx("span",{className:"font-orbitron font-bold text-2xl sm:text-3xl text-purple-400",children:"WINNER"}),d.jsx("span",{className:"font-mono text-[11px] text-slate-400 uppercase tracking-widest mt-1",children:"Sustainathon 2.0"})]}),d.jsxs("div",{className:"flex flex-col items-center",children:[d.jsx("span",{className:"font-orbitron font-bold text-2xl sm:text-3xl text-amber-400",children:"FINALE"}),d.jsx("span",{className:"font-mono text-[11px] text-slate-400 uppercase tracking-widest mt-1",children:"hackFront 2026"})]}),d.jsxs("div",{className:"flex flex-col items-center",children:[d.jsx("span",{className:"font-orbitron font-bold text-2xl sm:text-3xl text-emerald-400",children:"03+"}),d.jsx("span",{className:"font-mono text-[11px] text-slate-400 uppercase tracking-widest mt-1",children:"Deep Platforms"})]})]})]}),d.jsxs("button",{onClick:t,"data-cursor":"pointer","aria-label":"Scroll to Who We Are",className:"absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors cursor-pointer group",children:[d.jsx("span",{className:"font-mono text-[10px] tracking-widest uppercase opacity-75 group-hover:opacity-100",children:"SCROLL TO EXPLORE"}),d.jsx(hw,{size:16,className:"animate-bounce text-cyan-400/70 group-hover:text-cyan-300"})]})]})}function vb(){const s=rt.useRef(null);return rt.useEffect(()=>{const e=s.current;if(!e)return;let t=e.clientWidth||500,r=e.clientHeight||500;const o=new Df,l=new Yn(45,t/r,.1,100);l.position.set(0,0,7.5);const u=new jf({antialias:!0,alpha:!0});u.setSize(t,r),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.toneMapping=mc,u.toneMappingExposure=1.2,e.appendChild(u.domElement);const h=new Gf(659488,2.5);o.add(h);const p=new hy(16777215,2);p.position.set(5,10,7),o.add(p);const m=new aa(61695,4.5,15);m.position.set(-3,2,3),o.add(m);const y=new aa(11032055,4.5,15);y.position.set(3,-2,3),o.add(y);const S=new Gi;o.add(S);const _=new ra(2,0),E=new Xn({color:330782,metalness:.9,roughness:.15,wireframe:!1,transparent:!0,opacity:.88}),b=new yt(_,E);b.rotation.x=.3,b.rotation.z=-.15,S.add(b);const C=new Dr(_),x=new ta({color:61695,linewidth:2}),v=new rr(C,x);b.add(v);const T=new ia(.7,0),D=new Xn({color:11032055,emissive:9133302,emissiveIntensity:.8,wireframe:!0}),P=new yt(T,D);S.add(P);const U=new lr(2.7,.02,16,100),O=new ri({color:61695,transparent:!0,opacity:.6}),w=new yt(U,O);w.rotation.x=Math.PI/3,S.add(w);const I=new lr(3.1,.015,16,100),$=new ri({color:11032055,transparent:!0,opacity:.45}),z=new yt(I,$);z.rotation.y=Math.PI/4,z.rotation.x=-Math.PI/6,S.add(z);const K=[],ee=[new Xn({color:61695,metalness:.9,roughness:.2}),new Xn({color:11032055,metalness:.9,roughness:.2}),new Xn({color:15485081,metalness:.9,roughness:.2}),new Xn({color:3900150,metalness:.9,roughness:.2})];for(let G=0;G<6;G++){const fe=G%2===0?new ia(.28,0):new xc(.22,0),ge=new yt(fe,ee[G%ee.length]),he=G/6*Math.PI*2,Ee=3.2+Math.random()*.8;ge.position.set(Math.cos(he)*Ee,(Math.random()-.5)*2.5,Math.sin(he)*Ee),ge.userData={speed:.008+Math.random()*.012,rotSpeed:.02+Math.random()*.02,initialY:ge.position.y,angle:he,radius:Ee},o.add(ge),K.push(ge)}const de=180,V=new Float32Array(de*3);for(let G=0;G<de*3;G+=3)V[G]=(Math.random()-.5)*14,V[G+1]=(Math.random()-.5)*14,V[G+2]=(Math.random()-.5)*10;const oe=new xn;oe.setAttribute("position",new gi(V,3));const Q=new gc({color:8246268,size:.045,transparent:!0,opacity:.65}),Y=new Ff(oe,Q);o.add(Y);let j={x:0,y:0,targetX:0,targetY:0};const q=G=>{const te=e.getBoundingClientRect(),fe=G.clientX-te.left,ge=G.clientY-te.top;j.targetX=fe/t*2-1,j.targetY=-(ge/r)*2+1};window.addEventListener("mousemove",q);const L=()=>{e&&(t=e.clientWidth||500,r=e.clientHeight||500,l.aspect=t/r,l.updateProjectionMatrix(),u.setSize(t,r))};window.addEventListener("resize",L);let M=new Hf,H;const xe=()=>{H=requestAnimationFrame(xe);const G=M.getElapsedTime();j.x+=(j.targetX-j.x)*.05,j.y+=(j.targetY-j.y)*.05,S.rotation.y=G*.25+j.x*.8,S.rotation.x=Math.sin(G*.4)*.15-j.y*.6,P.rotation.y=-G*.6,P.rotation.z=G*.4,w.rotation.z=G*.15,z.rotation.z=-G*.12,m.position.x=-3+j.x*2.5,m.position.y=2+j.y*2.5,y.position.x=3-j.x*2.5,y.position.y=-2-j.y*2.5,K.forEach(te=>{te.userData.angle+=te.userData.speed,te.position.x=Math.cos(te.userData.angle)*te.userData.radius,te.position.z=Math.sin(te.userData.angle)*te.userData.radius,te.position.y=te.userData.initialY+Math.sin(G*1.5+te.userData.angle)*.35,te.rotation.x+=te.userData.rotSpeed,te.rotation.y+=te.userData.rotSpeed}),l.position.x=j.x*.8,l.position.y=j.y*.8,l.lookAt(0,0,0),u.render(o,l)};return xe(),()=>{cancelAnimationFrame(H),window.removeEventListener("mousemove",q),window.removeEventListener("resize",L),e&&u.domElement&&e.removeChild(u.domElement),u.dispose(),_.dispose(),E.dispose(),C.dispose(),x.dispose(),T.dispose(),D.dispose(),U.dispose(),O.dispose(),I.dispose(),$.dispose(),oe.dispose(),Q.dispose()}},[]),d.jsx("div",{ref:s,className:"w-full h-[450px] sm:h-[550px] lg:h-[620px] relative cursor-grab active:cursor-grabbing flex items-center justify-center","data-cursor":"explore",children:d.jsxs("div",{className:"absolute bottom-4 left-4 font-mono text-[10px] text-slate-500 tracking-widest uppercase pointer-events-none z-10 flex items-center gap-2",children:[d.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"}),d.jsx("span",{children:"INTERACTIVE 3D APEX MONOLITH // MOUSE PARALLAX ACTIVE"})]})})}const N0=[{id:1,title:"System Architecture",owner:"Harsh Vardhan Singh",color:"#a855f7",desc:"Robust full-stack frameworks, cryptography & blockchain auditability.",icon:qw,badge:"ARCHITECT"},{id:2,title:"Strategic Execution",owner:"Shashwat Dubey",color:"#00f0ff",desc:"Problem decomposition, national arena leadership & sprint focus.",icon:hb,badge:"STRATEGIST"},{id:3,title:"Algorithmic Precision",owner:"Shreyansh Baranwal",color:"#f59e0b",desc:"Computational integrity, database pipelines & logic optimization.",icon:vw,badge:"ALGORITHMIC"},{id:4,title:"Interactive Craft",owner:"Ayush Patel",color:"#10b981",desc:"Next-gen frontend flows, sensory polish & rapid product design.",icon:cr,badge:"DEVELOPER"},{id:5,title:"Research & Rigor",owner:"Aditya Shukla",color:"#f43f5e",desc:"Emerging tech exploration, model validation & deep testing.",icon:sb,badge:"RESEARCHER"}];function _b(){const[s,e]=rt.useState(N0[0]),t=r=>{e(r),nn.playClick()};return d.jsx("section",{id:"who-we-are",className:"relative py-28 px-6 overflow-hidden",children:d.jsxs("div",{className:"max-w-7xl mx-auto",children:[d.jsxs("div",{className:"flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-[0.25em] uppercase mb-4 justify-center sm:justify-start",children:[d.jsx("span",{className:"w-8 h-[1px] bg-cyan-400"}),d.jsx("span",{children:"02 // THE IDENTITY & CONVERGENCE"})]}),d.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center",children:[d.jsx("div",{className:"lg:col-span-6 relative",children:d.jsxs("div",{className:"relative rounded-3xl bg-slate-950/70 border border-slate-800/80 shadow-[0_0_50px_rgba(0,240,255,0.12)] overflow-hidden backdrop-blur-xl",children:[d.jsxs("div",{className:"absolute top-4 left-6 right-6 flex items-center justify-between font-mono text-[10px] text-slate-500 z-10 pointer-events-none",children:[d.jsxs("span",{className:"flex items-center gap-1.5 text-cyan-400",children:[d.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"}),"3D_SPACE: LIVE"]}),d.jsx("span",{children:"MESH: APEX_TETRAHEDRON"})]}),d.jsx(vb,{}),d.jsx("div",{className:"absolute bottom-4 right-6 font-mono text-[10px] text-slate-400 z-10 pointer-events-none hidden sm:block",children:"MOVE CURSOR TO PARALLAX 3D SCENE"})]})}),d.jsxs("div",{className:"lg:col-span-6 flex flex-col justify-center",children:[d.jsxs("h2",{className:"font-orbitron font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-wider text-white mb-6",children:["WE ARE ",d.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400",children:"APEX."})]}),d.jsxs("div",{className:"space-y-4 text-slate-300 font-light text-base sm:text-lg leading-relaxed mb-8",children:[d.jsx("p",{className:"border-l-2 border-cyan-400 pl-4 bg-slate-900/30 py-2 rounded-r",children:'"APEX is a team of five technology enthusiasts brought together by curiosity, creativity, and the desire to build something meaningful."'}),d.jsx("p",{className:"text-slate-400 text-sm sm:text-base leading-relaxed",children:"We explore emerging technologies, experiment with ideas, participate in innovation challenges, and transform concepts into practical solutions. We believe great innovation happens when different perspectives work together."})]}),d.jsxs("div",{className:"space-y-2.5",children:[d.jsx("span",{className:"font-mono text-xs text-slate-400 tracking-widest uppercase block mb-3",children:"// FIVE MINDS CONVERGING AS ONE"}),N0.map(r=>{const o=r.icon,l=s.id===r.id;return d.jsxs("div",{onMouseEnter:()=>t(r),"data-cursor":"explore",className:`group p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${l?"bg-slate-900/90 border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.2)] translate-x-2":"bg-slate-950/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40"}`,style:{borderColor:l?r.color:void 0},children:[d.jsxs("div",{className:"flex items-center gap-3.5",children:[d.jsx("div",{className:"p-2.5 rounded-xl transition-colors",style:{backgroundColor:`${r.color}20`,color:r.color},children:d.jsx(o,{size:18})}),d.jsxs("div",{children:[d.jsx("div",{className:"font-orbitron font-bold text-xs sm:text-sm text-white group-hover:text-cyan-300 transition-colors",children:r.title}),d.jsx("div",{className:"font-mono text-[11px] text-slate-400",children:r.owner})]})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("span",{className:"font-mono text-[10px] px-2 py-0.5 rounded-full border hidden sm:inline-block",style:{borderColor:`${r.color}40`,color:r.color,backgroundColor:`${r.color}10`},children:r.badge}),d.jsx(Fg,{size:16,className:`transition-transform ${l?"translate-x-1 text-cyan-400":"text-slate-600"}`})]})]},r.id)})]})]})]})]})})}const yb=[{id:"harsh-vardhan-singh",name:"HARSH VARDHAN SINGH",role:"Full-Stack & Blockchain Lead / System Architect",tagline:"Building resilient distributed architectures and AI-driven governance pipelines.",college:"GL Bajaj Institute of Technology & Management, Greater Noida",education:"B.Tech in Computer Science & Artificial Intelligence (CGPA: 8.0 • Expected: 2029)",location:"Greater Noida, Uttar Pradesh",email:"vardhanharsh012345@gmail.com",phone:"+91 7017752795",color:"#a855f7",glowColor:"rgba(168, 85, 247, 0.4)",badge:"ARCHITECT",photo:null,avatarSvg:'<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="45" stroke="#a855f7" stroke-width="2" stroke-dasharray="4 4"/><path d="M50 20L75 65H25L50 20Z" stroke="#a855f7" stroke-width="3" fill="rgba(168,85,247,0.1)"/><circle cx="50" cy="50" r="10" fill="#a855f7"/><line x1="50" y1="20" x2="50" y2="50" stroke="#00f0ff" stroke-width="2"/></svg>',intro:"Computer Science undergraduate with a deep focus on translating real-world operational friction into elegant, scalable software. Project experience spans full-stack web platforms, AI-assisted workflows, computer vision, automated document scrutiny, and cryptographic auditability.",interests:["Distributed Systems & Blockchain","AI & Computer Vision Workflows","Application Security & Cryptography","Hackathons & Rapid Prototyping","Early-Stage Venture Engineering"],skills:{languages:["C++","Python","JavaScript","TypeScript","Solidity"],frontend:["React","Next.js","Tailwind CSS","HTML5/CSS3"],backend:["FastAPI","Node.js","REST APIs","Supabase","SQLite","PostgreSQL"],tools:["Git","GitHub","Vercel","Render","Hardhat","Postman"],specializations:["DSA Fundamentals","AI Integration","Computer Vision","Blockchain Fundamentals","Application Security"]},projects:[{title:"GovInnovate",tagline:"Startup-Friendly Public Procurement Platform (Sustainathon 2.0 Theme Winner)",category:"GovTech / AI / Blockchain",stack:["Next.js","React","TypeScript","Supabase","Solidity/Hardhat","Tailwind CSS"],summary:"Developed a GovTech prototype enabling government departments to decompose unstructured requirements, discover eligible DPIIT startups, evaluate proposals via a 6-pillar matrix, manage 90-day sandbox pilots, and track scale-up procurement milestones.",highlights:["AI-assisted challenge decomposition and semantic startup matching (pgvector)","Role-based portals for Government Departments, DPIIT Startups, and Evaluators","Tamper-evident blockchain verification module for cryptographic milestone logging"],github:"https://github.com",demo:"https://govinnovate-demo.vercel.app"},{title:"AVASAR",tagline:"AI-Assisted E-Waste Management & Circular Economy Platform",category:"AI / Sustainability / Computer Vision",stack:["React","TypeScript","TensorFlow.js","Gemini API","Leaflet","Tailwind CSS"],summary:"An integrated circular economy platform concept connecting informal e-waste collectors with authorized formal recyclers, featuring citizen and municipal governance workflows.",highlights:["Browser-based waste-object detection and automated AI material classification","Benchmark-driven automated valuation and digital waste-passport issuance","Bilingual English/Hindi interface with voice guidance and offline persistence"],github:"https://github.com",demo:"https://avasar-ewaste.vercel.app"},{title:"AICTE Security Deposit & FDR Management Portal",tagline:"Smart Institutional Compliance & Digital Scrutiny System (SIH Prototype)",category:"FinTech / Cryptography / GovTech",stack:["Python","FastAPI","SQLite","React","TypeScript","OCR","NLP","AES-256-GCM"],summary:"Enterprise-grade prototype digitizing institutional security deposit and fixed deposit receipt lifecycle management from submission to renewal and sanction.",highlights:["OCR-assisted automated document extraction with field-level confidence scoring","AES-256-GCM encrypted document vaults with SHA-256 hash-chained audit trails","Multi-factor authentication, digital signatures, and automated maturity reminders"],github:"https://github.com",demo:"https://aicte-fdr-demo.vercel.app"}],achievements:["Theme Winner — Sustainathon 2.0 at Sharda University (GovInnovate Platform)","Technical Team Member — Udyami (GL Bajaj Entrepreneurship Cell)"],motto:"Code the bedrock. Automate the friction. Verify by design.",social:{github:"https://github.com",linkedin:"https://linkedin.com",email:"mailto:vardhanharsh012345@gmail.com"}},{id:"shashwat-dubey",name:"SHASHWAT DUBEY",role:"System Engineer & Strategy / Core Builder",tagline:"Driving competitive strategy, systems architecture, and relentless engineering.",college:"GL Bajaj Institute of Technology & Management, Greater Noida",education:"B.Tech in Computer Science & Engineering",location:"Greater Noida / Lucknow, Uttar Pradesh",color:"#00f0ff",glowColor:"rgba(0, 240, 255, 0.4)",badge:"STRATEGIST",photo:null,avatarSvg:'<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="25" y="25" width="50" height="50" rx="8" stroke="#00f0ff" stroke-width="2" transform="rotate(45 50 50)"/><circle cx="50" cy="50" r="16" stroke="#00f0ff" stroke-width="2" fill="rgba(0,240,255,0.1)"/><circle cx="50" cy="50" r="4" fill="#00f0ff"/></svg>',intro:"Curious technologist and builder passionate about collaborative technology, high-stakes innovation challenges, and turning ambitious concepts into concrete software solutions. Represented Team APEX as the Builder in securing the prestigious National Finale Golden Ticket at hackFront India 2026.",interests:["Systems Architecture & Scalability","Applied AI Innovations & Agents","Competitive Innovation & Hackathons","Collaborative Product Strategy"],skills:{languages:["Python","C++","JavaScript","TypeScript"],frontend:["React","Tailwind CSS","Modern Web Standards"],backend:["RESTful APIs","Node.js","Relational Databases"],tools:["Git & GitHub","Cloud Workflows","System Design"],specializations:["Problem Decomposition","Sprint Leadership","Team Coordination","Technical Pitching"]},projects:[],achievements:["Golden Ticket Qualifier — hackFront INDIA 2026 National Finale (IIIT Delhi)","Co-Builder — Sustainathon 2.0 Theme Winner (GovInnovate Platform)"],motto:"Curiosity is the engine of creation; discipline is its fuel.",social:{github:"https://github.com",linkedin:"https://linkedin.com",email:"mailto:contact@apexteam.org"}},{id:"shreyansh-baranwal",name:"SHREYANSH BARANWAL",role:"Core Member / Logic & Algorithms",tagline:"Mastering computational rigor, data structures, and algorithmic execution.",college:"GL Bajaj Institute of Technology & Management, Greater Noida",education:"B.Tech in Computer Science & Engineering",location:"Greater Noida, Uttar Pradesh",color:"#f59e0b",glowColor:"rgba(245, 158, 11, 0.4)",badge:"ALGORITHMIC",photo:null,avatarSvg:'<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><polygon points="50,15 85,78 15,78" stroke="#f59e0b" stroke-width="2" fill="rgba(245,158,11,0.08)"/><polygon points="50,40 68,72 32,72" stroke="#f59e0b" stroke-width="1.5"/><circle cx="50" cy="55" r="5" fill="#f59e0b"/></svg>',intro:"Driven by clean logic and computational rigor. Specializes in solving core engineering problems, refining complex logic pipelines, and ensuring software integrity under performance constraints.",interests:["Data Structures & Algorithmic Design","Backend Computational Pipelines","Competitive Programming","Database Optimization"],skills:{languages:["C++","Python","JavaScript","SQL"],frontend:["React","HTML5","CSS3"],backend:["Node.js","Express","Database Management"],tools:["Git","Linux","VS Code"],specializations:["Algorithmic Problem Solving","Time & Space Optimization","Core Logic"]},projects:[],achievements:["Co-Builder — Sustainathon 2.0 Theme Winner (GovInnovate Platform)"],motto:"Precision in logic. Excellence in execution.",social:{github:"https://github.com",linkedin:"https://linkedin.com",email:"mailto:contact@apexteam.org"}},{id:"ayush-patel",name:"AYUSH PATEL",role:"Core Member / Software & AI Exploration",tagline:"Exploring modern interfaces, dynamic user journeys, and emerging AI tooling.",college:"GL Bajaj Institute of Technology & Management, Greater Noida",education:"B.Tech in Computer Science & Engineering",location:"Greater Noida, Uttar Pradesh",color:"#10b981",glowColor:"rgba(16, 185, 129, 0.4)",badge:"DEVELOPER",photo:null,avatarSvg:'<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="35" stroke="#10b981" stroke-width="2"/><line x1="15" y1="50" x2="85" y2="50" stroke="#10b981" stroke-width="1.5"/><line x1="50" y1="15" x2="50" y2="85" stroke="#10b981" stroke-width="1.5"/><rect x="42" y="42" width="16" height="16" fill="#10b981" rx="3"/></svg>',intro:"Creative software technologist focused on crafting seamless interactive flows, exploring generative tools, and translating complex product concepts into intuitive digital experiences.",interests:["Next-Gen Frontend Architectures","Interactive UI/UX & Motion Design","Artificial Intelligence & ML Tools","Rapid Product Iteration"],skills:{languages:["JavaScript","Python","TypeScript"],frontend:["React","Tailwind CSS","CSS Modules"],backend:["Node.js","REST APIs"],tools:["Git","Figma","Vercel"],specializations:["Component Architecture","UI Polish","Rapid Prototyping"]},projects:[],achievements:["Co-Builder — Sustainathon 2.0 Theme Winner (GovInnovate Platform)"],motto:"Great software emerges from fearless experimentation.",social:{github:"https://github.com",linkedin:"https://linkedin.com",email:"mailto:contact@apexteam.org"}},{id:"aditya-shukla",name:"ADITYA SHUKLA",role:"Core Member / Research & Development",tagline:"Investigating emerging technologies, data models, and resilient systems.",college:"GL Bajaj Institute of Technology & Management, Greater Noida",education:"B.Tech in Computer Science & Engineering",location:"Greater Noida, Uttar Pradesh",color:"#f43f5e",glowColor:"rgba(244, 63, 94, 0.4)",badge:"RESEARCHER",photo:null,avatarSvg:'<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><polygon points="50,18 78,34 78,66 50,82 22,66 22,34" stroke="#f43f5e" stroke-width="2" fill="rgba(244,63,94,0.08)"/><line x1="50" y1="18" x2="50" y2="82" stroke="#f43f5e" stroke-width="1.5"/><circle cx="50" cy="50" r="7" fill="#f43f5e"/></svg>',intro:"Analytical researcher dedicated to exploring frontier tech, deep technical requirements, and systematic validation. Passionate about uncovering the architectural nuances that make solutions truly viable.",interests:["Emerging Tech Research","System Reliability & Testing","Data Analytics & Insights","Collaborative Problem Solving"],skills:{languages:["Python","C++","SQL"],frontend:["HTML/CSS","JavaScript Basics"],backend:["Database Concepts","API Integration"],tools:["Git","Jupyter Notebooks","Postman"],specializations:["Technical Research","Requirement Analysis","Documentation Rigor"]},projects:[],achievements:["Co-Builder — Sustainathon 2.0 Theme Winner (GovInnovate Platform)"],motto:"Question assumptions. Build the breakthrough.",social:{github:"https://github.com",linkedin:"https://linkedin.com",email:"mailto:contact@apexteam.org"}}];function Xg({member:s,isHovered:e}){const t=rt.useRef(null),r=rt.useRef(e),o=rt.useRef({x:0,y:0,targetX:0,targetY:0});return rt.useEffect(()=>{r.current=e},[e]),rt.useEffect(()=>{const l=t.current;if(!l)return;const u=l.clientWidth||240,h=l.clientHeight||200,p=new Df,m=new Yn(40,u/h,.1,50);m.position.z=4.8;const y=new jf({antialias:!0,alpha:!0});y.setSize(u,h),y.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.appendChild(y.domElement);const S=parseInt(s.color.replace("#","0x"),16),_=new Gf(16777215,1.2);p.add(_);const E=new aa(S,5,10);E.position.set(2,2,3),p.add(E);const b=new aa(61695,3,8);b.position.set(-2,-2,2),p.add(b);const C=new Gi;p.add(C);let x,v,T,D;const P=new Xn({color:462364,metalness:.85,roughness:.2,transparent:!0,opacity:.9}),U=new ta({color:S,linewidth:2}),O=new ri({color:S,wireframe:!0,transparent:!0,opacity:.45});if(s.id==="harsh-vardhan-singh"){const Y=new ia(1.2,0);x=new yt(Y,P),v=new rr(new Dr(Y),U),x.add(v),C.add(x);const j=new lr(1.7,.02,16,60);D=new yt(j,new ri({color:S,transparent:!0,opacity:.6})),D.rotation.x=Math.PI/3,C.add(D);const q=new zr(.5,.5,.5);T=new yt(q,O),C.add(T)}else if(s.id==="shashwat-dubey"){const Y=new ra(1.3,0);x=new yt(Y,P),v=new rr(new Dr(Y),U),x.add(v),C.add(x);const j=new ra(1.3,0);j.rotateX(Math.PI);const q=new rr(new Dr(j),new ta({color:61695}));C.add(q);const L=new Bf(.2,16,16);T=new yt(L,new ri({color:16777215})),C.add(T)}else if(s.id==="shreyansh-baranwal"){const Y=new xc(1.25,0);x=new yt(Y,P),v=new rr(new Dr(Y),U),x.add(v),C.add(x);const j=new cc(.7,0);T=new yt(j,O),C.add(T)}else if(s.id==="ayush-patel"){const Y=new lr(1.3,.03,16,80);x=new yt(Y,new ri({color:S})),C.add(x);const j=new lr(1.1,.025,16,80);D=new yt(j,new ri({color:61695,transparent:!0,opacity:.7})),D.rotation.x=Math.PI/2,C.add(D);const q=new ia(.65,0);T=new yt(q,P),T.add(new rr(new Dr(q),U)),C.add(T)}else{const Y=new cc(1.2,0);x=new yt(Y,P),v=new rr(new Dr(Y),U),x.add(v),C.add(x);const j=new kf(1.6,1.63,32);D=new yt(j,new ri({color:S,side:pi})),C.add(D)}const w=45,I=new Float32Array(w*3);for(let Y=0;Y<w*3;Y+=3)I[Y]=(Math.random()-.5)*4,I[Y+1]=(Math.random()-.5)*4,I[Y+2]=(Math.random()-.5)*3;const $=new xn;$.setAttribute("position",new gi(I,3));const z=new gc({color:S,size:.05,transparent:!0,opacity:.7}),K=new Ff($,z);C.add(K);const ee=Y=>{const j=l.getBoundingClientRect(),q=Y.clientX-j.left,L=Y.clientY-j.top;o.current.targetX=q/j.width*2-1,o.current.targetY=-(L/j.height)*2+1},de=l.closest("[data-member-card]");de?de.addEventListener("mousemove",ee):l.addEventListener("mousemove",ee);let V=new Hf,oe;const Q=()=>{oe=requestAnimationFrame(Q),V.getDelta();const Y=V.getElapsedTime(),j=o.current;j.x+=(j.targetX-j.x)*.08,j.y+=(j.targetY-j.y)*.08;const q=r.current,L=q?2.4:1;C.rotation.y+=.008*L,C.rotation.x+=.004*L,q?(C.rotation.y=Y*.4+j.x*.9,C.rotation.x=-j.y*.7,C.position.z=Lm.lerp(C.position.z,.4,.1)):C.position.z=Lm.lerp(C.position.z,0,.05),T&&(T.rotation.y-=.015*L,T.rotation.z+=.01*L),D&&(D.rotation.z+=.01*L),E.position.x=2+j.x*2,E.position.y=2+j.y*2,y.render(p,m)};return Q(),()=>{cancelAnimationFrame(oe),de&&de.removeEventListener("mousemove",ee),l&&y.domElement&&l.removeChild(y.domElement),y.dispose(),$.dispose(),z.dispose()}},[s]),d.jsx("div",{ref:t,className:"w-full h-full relative pointer-events-none flex items-center justify-center overflow-hidden"})}function Sb({member:s,onClose:e}){var t,r,o;return rt.useEffect(()=>{const l=u=>{u.key==="Escape"&&e()};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[e]),s?d.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-2xl animate-fadeIn",children:[d.jsx("div",{className:"fixed inset-0 -z-10",onClick:e}),d.jsxs("div",{className:"relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#080d1a] border border-slate-700/80 shadow-[0_25px_60px_rgba(0,0,0,0.9)] p-6 sm:p-10 my-auto text-slate-200",style:{boxShadow:`0 0 50px ${s.glowColor}`},children:[d.jsx("button",{onClick:()=>{nn.playClick(),e()},"data-cursor":"pointer",className:"absolute top-6 right-6 p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-400 hover:text-white hover:border-cyan-400 transition-colors z-20","aria-label":"Close modal",children:d.jsx(Yf,{size:20})}),d.jsxs("div",{className:"flex flex-col md:flex-row gap-8 items-start pb-8 border-b border-slate-800",children:[d.jsxs("div",{className:"relative w-36 h-36 sm:w-48 sm:h-48 rounded-2xl bg-gradient-to-b from-[#091124] to-[#040813] border-2 overflow-hidden flex-shrink-0 flex items-center justify-center shadow-2xl",style:{borderColor:s.color},children:[d.jsx(Xg,{member:s,isHovered:!0}),s.photo&&d.jsx("img",{src:s.photo,alt:s.name,className:"absolute inset-0 w-full h-full object-cover opacity-80"}),d.jsx("div",{className:"absolute top-2 right-2 px-2 py-0.5 rounded font-mono text-[9px] font-bold tracking-wider z-10",style:{backgroundColor:`${s.color}25`,color:s.color,border:`1px solid ${s.color}60`},children:s.badge}),d.jsxs("div",{className:"absolute bottom-2 left-2 font-mono text-[8px] text-cyan-400 tracking-wider z-10 flex items-center gap-1",children:[d.jsx(Bg,{size:9}),d.jsx("span",{children:"INTERACTIVE 3D"})]})]}),d.jsxs("div",{className:"flex-1",children:[d.jsxs("div",{className:"flex items-center gap-2 font-mono text-xs tracking-widest uppercase mb-1",style:{color:s.color},children:[d.jsx("span",{children:"MEMBER DOSSIER"}),d.jsx("span",{children:"//"}),d.jsx("span",{children:s.badge})]}),d.jsx("h2",{className:"font-orbitron font-black text-2xl sm:text-4xl text-white tracking-wide mb-2",children:s.name}),d.jsx("div",{className:"text-sm sm:text-base font-mono text-cyan-400 mb-3",children:s.role}),d.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3 mb-4",children:[d.jsx(kg,{size:18,className:"text-cyan-400 flex-shrink-0 mt-0.5"}),d.jsxs("div",{className:"text-xs",children:[d.jsx("div",{className:"font-medium text-slate-200",children:s.education}),d.jsx("div",{className:"text-slate-400 mt-0.5",children:s.college}),s.location&&d.jsx("div",{className:"text-slate-500 font-mono mt-0.5",children:s.location})]})]}),d.jsxs("blockquote",{className:"italic text-xs sm:text-sm text-slate-300 border-l-2 pl-3 py-1 bg-slate-900/30 rounded-r",style:{borderColor:s.color},children:['"',s.motto,'"']})]})]}),d.jsxs("div",{className:"py-6 border-b border-slate-800",children:[d.jsxs("h3",{className:"font-orbitron font-bold text-sm tracking-wider uppercase text-white mb-2 flex items-center gap-2",children:[d.jsx(cr,{size:14,style:{color:s.color}}),d.jsx("span",{children:"Profile Introduction"})]}),d.jsx("p",{className:"text-sm text-slate-300 leading-relaxed font-light",children:s.intro})]}),d.jsxs("div",{className:"py-6 border-b border-slate-800",children:[d.jsxs("h3",{className:"font-orbitron font-bold text-sm tracking-wider uppercase text-white mb-3 flex items-center gap-2",children:[d.jsx(Xf,{size:14,style:{color:s.color}}),d.jsx("span",{children:"Exploration Areas & Interests"})]}),d.jsx("div",{className:"flex flex-wrap gap-2",children:s.interests.map((l,u)=>d.jsx("span",{className:"px-3 py-1 rounded-full text-xs font-mono bg-slate-900 border border-slate-700 text-slate-300",children:l},u))})]}),d.jsxs("div",{className:"py-6 border-b border-slate-800",children:[d.jsx("h3",{className:"font-orbitron font-bold text-sm tracking-wider uppercase text-white mb-3",children:"Technical Skillset"}),d.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono",children:[s.skills.languages&&d.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/60 border border-slate-800",children:[d.jsx("span",{className:"text-slate-400 block mb-1",children:"LANGUAGES"}),d.jsx("span",{className:"text-cyan-300",children:s.skills.languages.join(" • ")})]}),s.skills.frontend&&d.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/60 border border-slate-800",children:[d.jsx("span",{className:"text-slate-400 block mb-1",children:"FRONTEND & UI"}),d.jsx("span",{className:"text-purple-300",children:s.skills.frontend.join(" • ")})]}),s.skills.backend&&d.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/60 border border-slate-800",children:[d.jsx("span",{className:"text-slate-400 block mb-1",children:"BACKEND & STORAGE"}),d.jsx("span",{className:"text-amber-300",children:s.skills.backend.join(" • ")})]}),s.skills.specializations&&d.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/60 border border-slate-800",children:[d.jsx("span",{className:"text-slate-400 block mb-1",children:"SPECIALIZATIONS"}),d.jsx("span",{className:"text-emerald-300",children:s.skills.specializations.join(" • ")})]})]})]}),s.projects&&s.projects.length>0&&d.jsxs("div",{className:"py-6 border-b border-slate-800",children:[d.jsxs("h3",{className:"font-orbitron font-bold text-sm tracking-wider uppercase text-white mb-3 flex items-center gap-2",children:[d.jsx(Fw,{size:16,className:"text-cyan-400"}),d.jsxs("span",{children:["Project Portfolio (",s.projects.length,")"]})]}),d.jsx("div",{className:"space-y-4",children:s.projects.map((l,u)=>d.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors",children:[d.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2",children:[d.jsx("span",{className:"font-orbitron font-bold text-base text-white",children:l.title}),d.jsx("span",{className:"font-mono text-[10px] px-2 py-0.5 rounded bg-cyan-950 border border-cyan-800 text-cyan-300",children:l.category})]}),d.jsx("p",{className:"text-xs text-slate-300 mb-3",children:l.summary}),l.highlights&&d.jsx("ul",{className:"text-[11px] text-slate-400 space-y-1 mb-3 list-disc pl-4",children:l.highlights.map((h,p)=>d.jsx("li",{children:h},p))}),d.jsx("div",{className:"flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80",children:l.stack.map((h,p)=>d.jsx("span",{className:"px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300",children:h},p))})]},u))})]}),s.achievements&&s.achievements.length>0&&d.jsxs("div",{className:"py-6 border-b border-slate-800",children:[d.jsxs("h3",{className:"font-orbitron font-bold text-sm tracking-wider uppercase text-white mb-3 flex items-center gap-2",children:[d.jsx(dc,{size:16,className:"text-amber-400"}),d.jsx("span",{children:"Confirmed Recognitions"})]}),d.jsx("div",{className:"space-y-2",children:s.achievements.map((l,u)=>d.jsxs("div",{className:"flex items-center gap-3 p-3 rounded-xl bg-amber-950/20 border border-amber-500/30 text-amber-200 text-xs font-mono",children:[d.jsx(dc,{size:16,className:"text-amber-400 flex-shrink-0"}),d.jsx("span",{children:l})]},u))})]}),d.jsxs("div",{className:"pt-6 flex flex-wrap items-center justify-between gap-4",children:[d.jsxs("div",{className:"flex items-center gap-3",children:[((t=s.social)==null?void 0:t.github)&&d.jsx("a",{href:s.social.github,target:"_blank",rel:"noreferrer","data-cursor":"pointer",className:"p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-400 transition-colors",children:d.jsx(yc,{size:16})}),((r=s.social)==null?void 0:r.linkedin)&&d.jsx("a",{href:s.social.linkedin,target:"_blank",rel:"noreferrer","data-cursor":"pointer",className:"p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-400 transition-colors",children:d.jsx(jg,{size:16})}),((o=s.social)==null?void 0:o.email)&&d.jsx("a",{href:s.social.email,"data-cursor":"pointer",className:"p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-400 transition-colors",children:d.jsx(jw,{size:16})})]}),d.jsx("button",{onClick:e,"data-cursor":"pointer",className:"px-6 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono tracking-wider text-white transition-colors",children:"CLOSE DOSSIER"})]})]})]}):null}function Js({children:s,className:e="",style:t={},onClick:r,cursorText:o="EXPLORE",maxTilt:l=10}){const u=rt.useRef(null),[h,p]=rt.useState({x:0,y:0,shineX:50,shineY:50}),[m,y]=rt.useState(!1),S=b=>{const C=u.current;if(!C)return;const x=C.getBoundingClientRect(),v=b.clientX-x.left,T=b.clientY-x.top,D=x.width/2,P=x.height/2,U=(T-P)/P*-l,O=(v-D)/D*l,w=v/x.width*100,I=T/x.height*100;p({x:U,y:O,shineX:w,shineY:I})},_=()=>{y(!0)},E=()=>{y(!1),p({x:0,y:0,shineX:50,shineY:50})};return d.jsxs("div",{ref:u,onClick:r,onMouseMove:S,onMouseEnter:_,onMouseLeave:E,"data-cursor":o,className:`relative transform-gpu transition-all duration-200 ease-out preserve-3d ${e}`,style:{...t,transform:m?`perspective(1000px) rotateX(${h.x}deg) rotateY(${h.y}deg) translateY(-4px)`:"perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)",transformStyle:"preserve-3d"},children:[s,d.jsx("div",{className:"pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300",style:{opacity:m?.18:0,background:`radial-gradient(circle 350px at ${h.shineX}% ${h.shineY}%, rgba(255, 255, 255, 0.8), transparent 70%)`}})]})}function P0(){const[s,e]=rt.useState(null),[t,r]=rt.useState(null),o=l=>{nn.playChime(650,.2),e(l)};return d.jsxs("section",{id:"team",className:"relative py-28 px-6 overflow-hidden",children:[d.jsx("div",{className:"absolute top-1/4 -right-32 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none"}),d.jsx("div",{className:"absolute bottom-1/4 -left-32 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none"}),d.jsxs("div",{className:"max-w-7xl mx-auto",children:[d.jsxs("div",{className:"flex flex-col items-center text-center mb-16",children:[d.jsxs("div",{className:"flex items-center gap-2 font-mono text-xs text-purple-400 tracking-[0.25em] uppercase mb-3",children:[d.jsx("span",{className:"w-8 h-[1px] bg-purple-400"}),d.jsx("span",{children:"03 // THE FIVE ARCHITECTS"}),d.jsx("span",{className:"w-8 h-[1px] bg-purple-400"})]}),d.jsxs("h2",{className:"font-orbitron font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-wider text-white mb-6",children:["MEET THE ",d.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400",children:"FIVE."})]}),d.jsx("p",{className:"max-w-2xl text-slate-300 font-light text-base sm:text-lg leading-relaxed",children:"Hover over any team member to activate their individual interactive 3D holographic structure and spatial depth."}),d.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-purple-500/30 text-purple-300 font-mono text-xs tracking-wider mt-3 shadow-[0_0_20px_rgba(168,85,247,0.15)]",children:[d.jsx(Bg,{size:14,className:"text-cyan-400 animate-spin",style:{animationDuration:"6s"}}),d.jsx("span",{children:"INTERACTIVE REAL-TIME 3D ARCHETYPE FOR EACH MEMBER"})]})]}),d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8",children:yb.map((l,u)=>{const h=t===l.id;return d.jsx(Js,{onClick:()=>o(l),cursorText:"VIEW PROFILE",maxTilt:10,className:"group rounded-3xl p-6 sm:p-8 bg-slate-950/75 border border-slate-800/80 hover:border-cyan-400/80 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden shadow-2xl relative",style:{boxShadow:h?`0 20px 45px rgba(0,0,0,0.8), 0 0 35px ${l.glowColor}`:"0 10px 30px rgba(0,0,0,0.6)"},children:d.jsxs("div",{"data-member-card":!0,className:"w-full h-full flex flex-col justify-between",onMouseEnter:()=>{r(l.id),nn.playClick()},onMouseLeave:()=>r(null),children:[d.jsx("div",{className:"absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none transition-opacity duration-500 group-hover:opacity-50",style:{backgroundColor:l.color}}),d.jsxs("div",{style:{transform:"translateZ(30px)"},className:"transition-transform duration-300",children:[d.jsxs("div",{className:"flex items-center justify-between mb-4",children:[d.jsx("span",{className:"font-mono text-[10px] tracking-widest uppercase px-3 py-1 rounded-full border transition-all duration-300 font-bold",style:{borderColor:`${l.color}60`,color:l.color,backgroundColor:`${l.color}15`,boxShadow:h?`0 0 12px ${l.color}40`:"none"},children:l.badge}),d.jsxs("span",{className:"font-mono text-xs text-slate-500 group-hover:text-cyan-400 transition-colors",children:["// 0",u+1]})]}),d.jsxs("div",{className:"relative w-full h-56 rounded-2xl bg-gradient-to-b from-[#080d1e] to-[#040713] border border-slate-800/90 mb-6 overflow-hidden group-hover:border-slate-700 transition-colors shadow-inner flex items-center justify-center",children:[d.jsx(Xg,{member:l,isHovered:h}),l.photo&&d.jsx("div",{className:"absolute inset-0 transition-opacity duration-500 group-hover:opacity-30",children:d.jsx("img",{src:l.photo,alt:l.name,className:"w-full h-full object-cover"})}),d.jsxs("div",{className:"absolute top-2.5 left-3 font-mono text-[9px] text-slate-500 tracking-wider pointer-events-none z-10 flex items-center gap-1.5",children:[d.jsx("span",{className:"w-1.5 h-1.5 rounded-full",style:{backgroundColor:l.color,boxShadow:h?`0 0 8px ${l.color}`:"none"}}),d.jsxs("span",{className:"opacity-75 group-hover:opacity-100 group-hover:text-slate-300 transition-colors",children:["3D_NODE: ",l.badge]})]}),d.jsxs("div",{className:"absolute bottom-2.5 right-3 font-mono text-[9px] text-cyan-400 tracking-wider pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1",children:[d.jsx(cr,{size:10}),d.jsx("span",{children:"INTERACTIVE 3D PARALLAX"})]}),d.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none opacity-40"})]}),d.jsxs("div",{style:{transform:"translateZ(40px)"},className:"transition-transform duration-300",children:[d.jsx("h3",{className:"font-orbitron font-black text-xl sm:text-2xl text-white tracking-wide group-hover:text-cyan-300 transition-colors mb-1.5",children:l.name}),d.jsx("div",{className:"font-mono text-xs tracking-wider mb-3.5",style:{color:l.color},children:l.role}),d.jsxs("div",{className:"flex items-start gap-2 text-xs text-slate-400 mb-3.5 font-light",children:[d.jsx(kg,{size:14,className:"text-slate-500 flex-shrink-0 mt-0.5"}),d.jsx("span",{className:"line-clamp-1",children:l.college})]}),d.jsx("p",{className:"text-xs text-slate-400 font-light leading-relaxed mb-4 line-clamp-2",children:l.intro}),d.jsx("div",{className:"flex flex-wrap gap-1.5 mb-2",children:l.interests.slice(0,2).map((p,m)=>d.jsx("span",{className:"px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 border border-slate-800 text-slate-300 group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-colors",children:p},m))})]})]}),d.jsxs("div",{style:{transform:"translateZ(35px)"},className:"pt-4 border-t border-slate-800/80 flex items-center justify-between transition-transform duration-300",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[l.projects&&l.projects.length>0&&d.jsxs("span",{className:"font-mono text-[10px] px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 font-medium",children:[l.projects.length," Projects"]}),l.achievements&&l.achievements.length>0&&d.jsxs("span",{className:"font-mono text-[10px] px-2 py-0.5 rounded bg-amber-950/60 border border-amber-800/60 text-amber-300 flex items-center gap-1 font-medium",children:[d.jsx(dc,{size:10}),"Winner"]})]}),d.jsxs("div",{className:"flex items-center gap-1 text-xs font-mono font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors",children:[d.jsx("span",{children:"VIEW PROFILE"}),d.jsx(co,{size:14,className:"transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"})]})]})]})},l.id)})})]}),s&&d.jsx(Sb,{member:s,onClose:()=>e(null)})]})}const I0=[{id:"sustainathon-2-winner",title:"SUSTAINATHON 2.0",institution:"SHARDA UNIVERSITY",year:"2026",status:"CONFIRMED WINNER",recognition:"THEME-WISE WINNER",badgeLabel:"1ST PLACE • THEME WINNER",headline:"Transforming Public Procurement with GovInnovate",projectLinked:"govinnovate",image:null,breakdown:{challenge:"Under traditional Indian General Financial Rules (GFR 2017), government procurement tenders mandate prior multi-year turnover, earnest money deposits (EMD), and 3+ years of operating track records. This structurally disqualifies early-stage deep-tech DPIIT startups with superior, cost-effective innovations from competing for public sector tenders.",idea:"Design a fast-track 'Innovation Sandbox & Public Procurement Pipeline' where government departments publish operational pain points, an AI engine deconstructs them into quantifiable SLAs, matches verified startups, and sanctions 90-day subsidized sandbox pilots before triggering statutory scale-up contracts.",solution:"GovInnovate provides three distinct role-based environments: Government Departments post challenges decomposed by AI; DPIIT Startups apply with one-click turnover exemptions (GFR 149/170); Independent Technical Evaluators score proposals via a standardized 6-Pillar Scorecard. Once a pilot hits on-ground telemetry benchmarks, a scale-up memo is generated and cryptographically etched on an audit ledger.",technologies:["Next.js 16 (App Router)","React 19 & TypeScript 5","Tailwind CSS Design System","Supabase (PostgreSQL & pgvector semantic matching)","Gemini 1.5 Flash AI Engine","Solidity / Hardhat Ethereum Smart Contracts","Cryptographic SHA-256 Audit Trails"],teamContribution:"Team APEX engineered the complete end-to-end prototype: full-stack architecture, AI challenge decomposition, DPIIT GFR compliance automation, interactive 90-day pilot telemetry, and a tamper-evident blockchain verification module within the intensive hackathon timeline.",finalRecognition:"Awarded Theme-Wise Winner out of hundreds of competing engineering teams, praised by academic and industry jury panels for combining real statutory procurement compliance with deep-tech AI and blockchain auditability."},keyMetrics:[{label:"Evaluation Score",value:"95 / 100"},{label:"Pilot Success Rate",value:"99.8% Uptime"},{label:"Turnover Barrier",value:"100% Waived (GFR 149)"},{label:"Scale-Up Scope",value:"5 to 50 Wards"}]},{id:"hackfront-national-finale",title:"hackFront INDIA 2026",institution:"IIIT DELHI, OKHLA",year:"2026",status:"NATIONAL FINALE QUALIFIER",recognition:"GOLDEN TICKET SHORTLIST",badgeLabel:"NATIONAL FINALE • GOLDEN TICKET",headline:"Shortlisted for National Finale among India's Elite Builders",projectLinked:null,image:"/assets/hackfront_golden_ticket.jpg",breakdown:{challenge:"National-scale competitive hackathon organized by Where U Elevate in partnership with tech giants (neo4j, Arduino, ixigo, Sarvam AI, DSCI, IIITD Innovation Center), filtering thousands of engineering applicants across India.",idea:"Deploy high-leverage architectural concepts, intelligent agentic workflows, and deep system design to tackle national digital infrastructure challenges.",solution:"Secured direct entry into the National Finale at IIIT Delhi, scheduled for 21-22 November 2026.",technologies:["Where U Elevate Platform","IIIT Delhi Incubation Ecosystem","Sarvam AI & Neo4j Graph Tech","Distributed Systems & Hardware Interfaces"],teamContribution:"Represented by Shashwat Dubey under Team APEX banner, demonstrating technical acumen, problem solving, and architecture design.",finalRecognition:"Awarded the coveted 'Golden Ticket' invitation to build on-site at IIIT Delhi with top industry mentors and ecosystem partners."},keyMetrics:[{label:"Event Date",value:"21–22 Nov 2026"},{label:"Venue",value:"IIIT Delhi, Okhla"},{label:"Ticket Class",value:"Golden Ticket"},{label:"Builder",value:"Shashwat Dubey"}]}],Mb=[{id:"future-challenge-1",title:"SMART INDIA HACKATHON (SIH)",institution:"AICTE / Ministry of Education",year:"2026–2027",status:"IN PURSUIT",recognition:"PROTOTYPE PHASE",badgeLabel:"TARGET ARENA",headline:"Institutional Compliance & Document Verification (AICTE Portal Prototype)",description:"Engineering advanced document scrutiny, OCR classification, and cryptographically verified audit trails for national regulatory bodies."},{id:"future-challenge-2",title:"GLOBAL OPEN-SOURCE INNOVATION SPRINT",institution:"Web3 & AI Foundation",year:"2027",status:"UPCOMING",recognition:"R&D TRACK",badgeLabel:"FUTURE FRONTIER",headline:"Decentralized Autonomous Verification Protocols",description:"Designing zero-knowledge verification frameworks for privacy-preserving municipal and citizen credentials."}];function L0(){const[s,e]=rt.useState("confirmed"),t=I0.find(o=>o.id==="sustainathon-2-winner"),r=I0.find(o=>o.id==="hackfront-national-finale");return d.jsxs("section",{id:"achievements",className:"relative py-28 px-6 overflow-hidden",children:[d.jsx("div",{className:"absolute top-1/3 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"}),d.jsxs("div",{className:"max-w-7xl mx-auto",children:[d.jsxs("div",{className:"flex flex-col items-center text-center mb-16",children:[d.jsxs("div",{className:"flex items-center gap-2 font-mono text-xs text-amber-400 tracking-[0.25em] uppercase mb-3",children:[d.jsx("span",{className:"w-8 h-[1px] bg-amber-400"}),d.jsx("span",{children:"04 // RECOGNITIONS & ARENA MILESTONES"}),d.jsx("span",{className:"w-8 h-[1px] bg-amber-400"})]}),d.jsxs("h2",{className:"font-orbitron font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-wider text-white mb-6",children:["MILESTONES THAT ",d.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-cyan-400",children:"DEFINE US."})]}),d.jsx("p",{className:"max-w-2xl text-slate-300 font-light text-base sm:text-lg leading-relaxed",children:"Where ideas transform into tested, jury-validated engineering triumphs. Hover across cards for interactive inspection."}),d.jsxs("div",{className:"flex items-center gap-2 mt-8 p-1.5 rounded-full bg-slate-900 border border-slate-800",children:[d.jsx("button",{onClick:()=>{nn.playClick(),e("confirmed")},"data-cursor":"pointer",className:`px-5 py-2 rounded-full font-mono text-xs tracking-wider transition-all duration-300 ${s==="confirmed"?"bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.2)] font-bold":"text-slate-400 hover:text-white"}`,children:"CONFIRMED VICTORIES (02)"}),d.jsx("button",{onClick:()=>{nn.playClick(),e("archive")},"data-cursor":"pointer",className:`px-5 py-2 rounded-full font-mono text-xs tracking-wider transition-all duration-300 ${s==="archive"?"bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(0,240,255,0.2)] font-bold":"text-slate-400 hover:text-white"}`,children:"RECOGNITION ARCHIVE & ROADMAP"})]})]}),s==="confirmed"?d.jsxs("div",{className:"space-y-16",children:[t&&d.jsxs(Js,{cursorText:"DISCOVER",maxTilt:6,className:"rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-slate-950 via-[#0a0f1d] to-[#040813] border-2 border-amber-500/40 shadow-[0_0_50px_rgba(245,158,11,0.15)] group",children:[d.jsx("div",{className:"absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/20 transition-all duration-500"}),d.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-slate-800/80",children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("div",{className:"p-3.5 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.3)] group-hover:scale-110 transition-transform",children:d.jsx(R0,{size:28})}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("span",{className:"font-mono text-xs text-amber-400 tracking-widest uppercase font-bold px-2 py-0.5 rounded bg-amber-950 border border-amber-700",children:"★ WINNER"}),d.jsx("span",{className:"font-mono text-xs text-amber-400 tracking-widest uppercase",children:t.badgeLabel})]}),d.jsx("h3",{className:"font-orbitron font-black text-2xl sm:text-4xl text-white group-hover:text-amber-200 transition-colors mt-1",children:t.title})]})]}),d.jsxs("div",{className:"flex flex-col sm:items-end",children:[d.jsx("span",{className:"font-orbitron font-bold text-lg text-slate-200",children:t.institution}),d.jsx("span",{className:"font-mono text-xs text-slate-400",children:"ACADEMIC & INDUSTRY HACKATHON • 2026"})]})]}),d.jsxs("div",{className:"my-8",children:[d.jsx("div",{className:"font-mono text-xs text-cyan-400 tracking-wider uppercase mb-1",children:"WINNING CREATION: GOVINNOVATE PLATFORM"}),d.jsx("h4",{className:"font-orbitron font-bold text-xl sm:text-2xl text-white",children:t.headline})]}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 my-8",children:[d.jsxs("div",{className:"p-6 rounded-2xl bg-slate-900/60 border border-slate-800 group-hover:border-slate-700 transition-colors",children:[d.jsxs("div",{className:"flex items-center gap-2 font-mono text-xs text-rose-400 font-bold uppercase mb-2",children:[d.jsx(Wg,{size:16}),d.jsx("span",{children:"01. The Challenge"})]}),d.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed font-light",children:t.breakdown.challenge})]}),d.jsxs("div",{className:"p-6 rounded-2xl bg-slate-900/60 border border-slate-800 group-hover:border-slate-700 transition-colors",children:[d.jsxs("div",{className:"flex items-center gap-2 font-mono text-xs text-cyan-400 font-bold uppercase mb-2",children:[d.jsx(cr,{size:16}),d.jsx("span",{children:"02. Our Idea"})]}),d.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed font-light",children:t.breakdown.idea})]}),d.jsxs("div",{className:"p-6 rounded-2xl bg-slate-900/60 border border-slate-800 group-hover:border-slate-700 transition-colors",children:[d.jsxs("div",{className:"flex items-center gap-2 font-mono text-xs text-purple-400 font-bold uppercase mb-2",children:[d.jsx(Wf,{size:16}),d.jsx("span",{children:"03. Our Solution"})]}),d.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed font-light",children:t.breakdown.solution})]}),d.jsxs("div",{className:"p-6 rounded-2xl bg-slate-900/60 border border-slate-800 group-hover:border-slate-700 transition-colors",children:[d.jsxs("div",{className:"flex items-center gap-2 font-mono text-xs text-amber-400 font-bold uppercase mb-2",children:[d.jsx(Uw,{size:16}),d.jsx("span",{children:"04. Technologies Explored"})]}),d.jsx("div",{className:"flex flex-wrap gap-1.5 pt-1",children:t.breakdown.technologies.map((o,l)=>d.jsx("span",{className:"px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60",children:o},l))})]}),d.jsxs("div",{className:"p-6 rounded-2xl bg-slate-900/60 border border-slate-800 group-hover:border-slate-700 transition-colors",children:[d.jsxs("div",{className:"flex items-center gap-2 font-mono text-xs text-emerald-400 font-bold uppercase mb-2",children:[d.jsx(Zs,{size:16}),d.jsx("span",{children:"05. Team Contribution"})]}),d.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed font-light",children:t.breakdown.teamContribution})]}),d.jsxs("div",{className:"p-6 rounded-2xl bg-slate-900/60 border border-amber-500/40 bg-amber-950/10 group-hover:border-amber-400/80 transition-colors",children:[d.jsxs("div",{className:"flex items-center gap-2 font-mono text-xs text-yellow-300 font-bold uppercase mb-2",children:[d.jsx(R0,{size:16}),d.jsx("span",{children:"06. Final Recognition"})]}),d.jsx("p",{className:"text-xs sm:text-sm text-amber-200/90 leading-relaxed font-light",children:t.breakdown.finalRecognition})]})]}),d.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80",children:t.keyMetrics.map((o,l)=>d.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/40 text-center border border-slate-800/60 group-hover:border-slate-700 transition-colors",children:[d.jsx("div",{className:"font-orbitron font-bold text-xl sm:text-2xl text-amber-400",children:o.value}),d.jsx("div",{className:"font-mono text-[10px] text-slate-400 uppercase tracking-wider mt-1",children:o.label})]},l))})]}),r&&d.jsxs(Js,{cursorText:"DISCOVER",maxTilt:6,className:"rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-slate-950 via-[#070d1d] to-[#040814] border-2 border-cyan-500/40 shadow-[0_0_50px_rgba(0,240,255,0.15)] group",children:[d.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-slate-800/80",children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("div",{className:"p-3.5 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.3)] group-hover:scale-110 transition-transform",children:d.jsx(dc,{size:28})}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("span",{className:"font-mono text-xs text-cyan-400 tracking-widest uppercase font-bold px-2 py-0.5 rounded bg-cyan-950 border border-cyan-700",children:"★ QUALIFIER"}),d.jsx("span",{className:"font-mono text-xs text-cyan-400 tracking-widest uppercase",children:r.badgeLabel})]}),d.jsx("h3",{className:"font-orbitron font-black text-2xl sm:text-4xl text-white group-hover:text-cyan-200 transition-colors mt-1",children:r.title})]})]}),d.jsxs("div",{className:"flex flex-col sm:items-end",children:[d.jsx("span",{className:"font-orbitron font-bold text-lg text-slate-200",children:r.institution}),d.jsx("span",{className:"font-mono text-xs text-slate-400",children:"NATIONAL FINALE • 21–22 NOV 2026"})]})]}),d.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-8",children:[d.jsx("div",{className:"lg:col-span-7 rounded-2xl overflow-hidden border-2 border-cyan-500/50 shadow-[0_0_30px_rgba(0,240,255,0.3)] bg-slate-900 group",children:d.jsx("img",{src:r.image,alt:"hackFront INDIA National Finale Golden Ticket - Shashwat Dubey - Team Apex",className:"w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"})}),d.jsxs("div",{className:"lg:col-span-5 space-y-4",children:[d.jsx("div",{className:"font-mono text-xs text-amber-400 uppercase tracking-widest font-bold",children:"★ OFFICIAL QUALIFIER PASS"}),d.jsx("h4",{className:"font-orbitron font-bold text-xl sm:text-2xl text-white",children:r.headline}),d.jsx("p",{className:"text-xs sm:text-sm text-slate-300 font-light leading-relaxed",children:r.breakdown.challenge}),d.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono space-y-1.5 group-hover:border-cyan-500/40 transition-colors",children:[d.jsxs("div",{className:"text-slate-400",children:["BUILDER: ",d.jsx("span",{className:"text-cyan-300 font-bold",children:"SHASHWAT DUBEY"})]}),d.jsxs("div",{className:"text-slate-400",children:["TEAM: ",d.jsx("span",{className:"text-purple-300 font-bold",children:"TEAM APEX"})]}),d.jsxs("div",{className:"text-slate-400",children:["VENUE: ",d.jsx("span",{className:"text-slate-200",children:"IIIT DELHI, OKHLA"})]}),d.jsxs("div",{className:"text-slate-400",children:["DATE: ",d.jsx("span",{className:"text-amber-300 font-bold",children:"21–22 NOV 2026"})]})]})]})]})]})]}):d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:Mb.map(o=>d.jsxs(Js,{cursorText:"EXPLORE",maxTilt:6,className:"p-8 rounded-3xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/40 transition-colors flex flex-col justify-between",children:[d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center justify-between mb-4",children:[d.jsx("span",{className:"font-mono text-xs px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800 text-cyan-300 font-bold",children:o.badgeLabel}),d.jsx("span",{className:"font-mono text-xs text-slate-500",children:o.year})]}),d.jsx("h3",{className:"font-orbitron font-bold text-2xl text-white mb-2",children:o.title}),d.jsx("div",{className:"font-mono text-xs text-slate-400 mb-4",children:o.institution}),d.jsx("p",{className:"text-sm text-slate-300 font-light leading-relaxed mb-6",children:o.description})]}),d.jsxs("div",{className:"pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400",children:[d.jsxs("span",{children:["STATUS: ",o.status]}),d.jsx("span",{className:"text-cyan-400",children:"APEX R&D PIPELINE"})]})]},o.id))})]})]})}const D0=[{id:"govinnovate",featured:!0,title:"GOVINNOVATE",category:"AI / GOVTECH / BLOCKCHAIN",tagline:"Startup-Friendly Public Procurement & Innovation Sandbox Platform",badge:"FLAGSHIP CREATION • SUSTAINATHON 2.0 WINNER",color:"#00f0ff",github:"https://github.com/TeamApex/govinnovate",liveDemo:"https://govinnovate.vercel.app",overview:"GovInnovate is an enterprise GovTech prototype designed to shatter the legacy bureaucratic barriers that prevent deep-tech DPIIT startups from securing government contracts. Aligned with General Financial Rules (GFR 2017) startup exemptions, it bridges the gap through AI problem decomposition, vector-based startup discovery, a 6-pillar objective evaluation scorecard, 90-day sandbox pilots, and a cryptographic blockchain audit ledger.",problemStatement:"Traditional public procurement procedures mandate multi-year turnover, substantial earnest money deposits (EMD), and 3+ years of operating track records. This creates a systemic barrier where early-stage startups with superior technological innovations are shut out from public sector problem solving.",approach:"Instead of subjecting startups to archaic financial filters, GovInnovate establishes an end-to-end Merit & Sandbox Pipeline: Government departments specify unstructured pain points -> AI structures them into quantifiable SLAs -> Startups are matched semantically -> A 90-day sandbox pilot is commissioned -> Validated telemetry automatically triggers statutory scale-up orders under GFR Rule 149/170 relaxations.",keyFeatures:[{title:"AI Challenge Decomposer & Generator",desc:"Transforms ambiguous departmental pain points into formal tenders with quantifiable benchmarks and IS-standard SLAs using Gemini 1.5 Flash."},{title:"Semantic Startup Matcher (pgvector)",desc:"Calculates high-dimensional cosine similarity between challenge specifications and DPIIT startup patent dossiers and hardware specs."},{title:"6-Pillar Committee Evaluation Matrix",desc:"Quantitative 0–20 scoring across Innovation, Feasibility, Impact, Scalability, Cost, and Security with AI risk anomaly detection."},{title:"90-Day Municipal Sandbox Pilot Engine",desc:"Tracks on-ground telemetry (e.g. sensor uptime, alert latencies) across live physical sites before approving scale-up funding."},{title:"Tamper-Evident Blockchain Ledger",desc:"Every scoring movement, pilot milestone, and PFMS treasury disbursement is etched into a cryptographic SHA-256 hash-chained ledger."}],techStack:[{name:"Next.js 16",category:"Framework",purpose:"App router, React Server Components & SSR"},{name:"React 19 & TypeScript 5",category:"Language",purpose:"Strict type safety across bids, SLAs, and ledgers"},{name:"Supabase (pgvector)",category:"Database",purpose:"Vector embeddings & telemetry database"},{name:"Gemini 1.5 Flash",category:"AI / LLM",purpose:"Tender decomposition, synthesis & risk analysis"},{name:"Solidity & Hardhat",category:"Blockchain",purpose:"Smart contracts for milestone escrow & evidence logs"},{name:"Tailwind CSS",category:"Styling",purpose:"Cyber-GovTech UI with high-contrast accessibility"}],teamContributions:"Engineered collaboratively by Team APEX during the intensive 36-hour Sustainathon 2.0 sprint: from ideation and legal GFR 2017 regulatory mapping to full-stack implementation, pgvector integration, blockchain smart contracts, and interactive jury presentations.",metrics:[{label:"Turnover Exemption",value:"100% GFR 149"},{label:"Evaluation Score",value:"95 / 100"},{label:"Pilot Deployment",value:"5 Live Sites"},{label:"Expansion Capacity",value:"50 Wards (10x)"}]},{id:"avasar",featured:!1,title:"AVASAR",category:"AI / COMPUTER VISION / CIRCULAR ECONOMY",tagline:"AI-Assisted E-Waste Management & Formal Recycling Gateway",badge:"CIRCULAR ECONOMY PROTOTYPE",color:"#a855f7",github:"https://github.com/TeamApex/avasar-ewaste",liveDemo:"https://avasar-ewaste.vercel.app",overview:"A comprehensive circular economy web platform bridging informal electronic waste collectors with authorized national recyclers. Combines edge AI computer vision with bilingual voice interfaces to democratize e-waste valuation and recycling workflows.",problemStatement:"Over 90% of e-waste in developing economies is handled through hazardous informal channels lacking proper safety, transparent pricing, or verifiable environmental compliance.",approach:"Provides an easy-to-use edge vision application where collectors snap a photo of discarded electronics. The AI identifies the gadget, classifies core materials (copper, gold, rare earth elements), estimates scrap benchmark value, and logs a digital waste-passport for formal recycling custody.",keyFeatures:[{title:"Browser-Based Object Detection",desc:"On-device lightweight computer vision using TensorFlow.js for real-time electronic device identification."},{title:"Bilingual English / Hindi Voice Interface",desc:"Voice guidance and intuitive iconography enabling informal waste pickers with limited literacy to easily participate."},{title:"Digital Waste Passport",desc:"Verifiable custody tracking from initial doorstep pickup through certified smelting facilities."}],techStack:[{name:"React & TypeScript",category:"Frontend",purpose:"Reactive, mobile-first interface"},{name:"TensorFlow.js",category:"AI / Vision",purpose:"In-browser gadget identification"},{name:"Gemini API",category:"Multimodal AI",purpose:"Component material decomposition & valuation"},{name:"Leaflet",category:"Mapping",purpose:"Collector-to-recycler geographic routing"}],teamContributions:"Created and architected by Harsh Vardhan Singh with Team APEX exploration in computer vision pipelines and user accessibility.",metrics:[{label:"Language Support",value:"English & Hindi"},{label:"Inference Time",value:"< 250ms On-Device"},{label:"Offline Capability",value:"Persistent Cache"},{label:"Classification Accuracy",value:"92.4%"}]},{id:"aicte-fdr-portal",featured:!1,title:"AICTE SECURITY DEPOSIT & FDR PORTAL",category:"FINTECH / CRYPTOGRAPHY / GOVTECH",tagline:"Smart Institutional Compliance & Digital Scrutiny System",badge:"SIH DIGITAL SCRUTINY PROTOTYPE",color:"#f59e0b",github:"https://github.com/TeamApex/aicte-portal",liveDemo:"https://aicte-fdr.vercel.app",overview:"An enterprise institutional compliance platform built to digitize, verify, and monitor billions in security deposits and fixed deposit receipts held by educational institutions across India under AICTE regulatory oversight.",problemStatement:"Manual scrutiny of physical bank FDR certificates across thousands of colleges leads to document tampering, missed maturity renewals, delayed releases, and administrative overhead.",approach:"Replaced manual physical checks with an automated multi-stage digital pipeline featuring OCR document ingestion, cryptographic vault storage, automated maturity reminders, and role-based clearance chains.",keyFeatures:[{title:"OCR Document Extraction",desc:"Extracts FDR number, issuing bank, maturity dates, and amounts with confidence scores and mismatch warnings."},{title:"AES-256-GCM Vault & Hash Chain",desc:"Financial documents are encrypted at rest with SHA-256 audit chaining to prevent unauthorized modifications."},{title:"Automated Maturity & Escalation Reminders",desc:"Multi-tier notification triggers 90, 60, and 30 days prior to FDR expiry to guarantee institutional collateral."}],techStack:[{name:"Python FastAPI",category:"Backend",purpose:"High-throughput asynchronous verification API"},{name:"React & TypeScript",category:"Frontend",purpose:"Administrative scrutinizer dashboard"},{name:"Tesseract OCR & NLP",category:"Document AI",purpose:"Automatic bank certificate parsing"},{name:"AES-256-GCM",category:"Security",purpose:"Military-grade data protection at rest"}],teamContributions:"Architected by Harsh Vardhan Singh; demonstrates APEX's rigorous standards in software security, cryptographic integrity, and compliance automation.",metrics:[{label:"Scrutiny Time",value:"Reduced 90%"},{label:"Audit Integrity",value:"SHA-256 Chained"},{label:"Encryption",value:"AES-256-GCM"},{label:"Role Workflows",value:"College & Bureau"}]}],Eb=[{id:"project-frontier-ai",title:"PROJECT: SYNAPSE",category:"AUTONOMOUS AGENTS",tagline:"Multi-Agent System for High-Stakes Code Generation & Verification",badge:"IN RESEARCH & PROTOTYPING",status:"ACTIVE EXPLORATION"},{id:"project-decentralized-mesh",title:"PROJECT: NEXUS-ZK",category:"DECENTRALIZED PRIVACY",tagline:"Zero-Knowledge Credential Verification for Student Hackers",badge:"CONCEPT STAGE",status:"ROADMAP 2027"}];function wb({project:s,onClose:e}){return rt.useEffect(()=>{const t=r=>{r.key==="Escape"&&e()};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[e]),s?d.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-2xl animate-fadeIn",children:[d.jsx("div",{className:"fixed inset-0 -z-10",onClick:e}),d.jsxs("div",{className:"relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#070b16] border border-slate-700/80 shadow-[0_25px_60px_rgba(0,0,0,0.9)] p-6 sm:p-10 my-auto text-slate-200",style:{boxShadow:"0 0 50px rgba(0, 240, 255, 0.2)"},children:[d.jsx("button",{onClick:()=>{nn.playClick(),e()},className:"absolute top-6 right-6 p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-400 hover:text-white hover:border-cyan-400 transition-colors z-20",children:d.jsx(Yf,{size:20})}),d.jsxs("div",{className:"pb-8 border-b border-slate-800",children:[d.jsxs("div",{className:"flex items-center gap-2 font-mono text-xs tracking-widest text-cyan-400 uppercase mb-2",children:[d.jsx("span",{children:"PROJECT DOSSIER"}),d.jsx("span",{children:"//"}),d.jsx("span",{children:s.category})]}),d.jsx("h2",{className:"font-orbitron font-black text-3xl sm:text-5xl text-white tracking-wide mb-3",children:s.title}),d.jsx("div",{className:"text-sm sm:text-base font-mono text-purple-300 mb-4",children:s.tagline}),d.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[d.jsx("span",{className:"px-3 py-1 rounded-full text-xs font-mono bg-cyan-950 border border-cyan-800 text-cyan-300",children:s.badge}),s.github&&d.jsxs("a",{href:s.github,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white transition-colors",children:[d.jsx(yc,{size:14}),d.jsx("span",{children:"GITHUB REPOSITORY"})]}),s.liveDemo&&d.jsxs("a",{href:s.liveDemo,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/30 transition-colors",children:[d.jsx(Vg,{size:14}),d.jsx("span",{children:"LIVE DEMO PREVIEW"})]})]})]}),d.jsxs("div",{className:"py-8 border-b border-slate-800",children:[d.jsx("h3",{className:"font-orbitron font-bold text-sm tracking-wider uppercase text-white mb-3",children:"Executive Overview"}),d.jsx("p",{className:"text-sm sm:text-base text-slate-300 leading-relaxed font-light",children:s.overview})]}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 py-8 border-b border-slate-800",children:[d.jsxs("div",{className:"p-6 rounded-2xl bg-slate-900/50 border border-slate-800",children:[d.jsx("h4",{className:"font-mono text-xs text-rose-400 uppercase tracking-widest font-bold mb-2",children:"The Problem Statement"}),d.jsx("p",{className:"text-xs sm:text-sm text-slate-300 font-light leading-relaxed",children:s.problemStatement})]}),d.jsxs("div",{className:"p-6 rounded-2xl bg-slate-900/50 border border-slate-800",children:[d.jsx("h4",{className:"font-mono text-xs text-cyan-400 uppercase tracking-widest font-bold mb-2",children:"Our Architectural Approach"}),d.jsx("p",{className:"text-xs sm:text-sm text-slate-300 font-light leading-relaxed",children:s.approach})]})]}),d.jsxs("div",{className:"py-8 border-b border-slate-800",children:[d.jsx("h3",{className:"font-orbitron font-bold text-sm tracking-wider uppercase text-white mb-4",children:"Key Architecture Modules"}),d.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:s.keyFeatures.map((t,r)=>d.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/70 border border-slate-800",children:[d.jsxs("div",{className:"font-orbitron font-bold text-xs sm:text-sm text-white mb-1.5 flex items-center gap-2",children:[d.jsx(Zs,{size:14,className:"text-cyan-400 flex-shrink-0"}),d.jsx("span",{children:t.title})]}),d.jsx("p",{className:"text-xs text-slate-400 leading-relaxed font-light",children:t.desc})]},r))})]}),d.jsxs("div",{className:"py-8 border-b border-slate-800",children:[d.jsx("h3",{className:"font-orbitron font-bold text-sm tracking-wider uppercase text-white mb-4",children:"Technology Stack Decomposition"}),d.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3",children:s.techStack.map((t,r)=>d.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-900/60 border border-slate-800",children:[d.jsx("div",{className:"font-orbitron font-bold text-xs text-white",children:t.name}),d.jsx("div",{className:"font-mono text-[10px] text-cyan-400 uppercase my-0.5",children:t.category}),d.jsx("div",{className:"text-[11px] text-slate-400 font-light",children:t.purpose})]},r))})]}),d.jsxs("div",{className:"py-8 border-b border-slate-800",children:[d.jsx("h3",{className:"font-orbitron font-bold text-sm tracking-wider uppercase text-white mb-2",children:"Team APEX Engineering Contribution"}),d.jsx("p",{className:"text-sm text-slate-300 font-light leading-relaxed",children:s.teamContributions})]}),d.jsxs("div",{className:"pt-6 flex items-center justify-between",children:[d.jsx("div",{className:"text-xs font-mono text-slate-500",children:"APEX CREATIONS ARCHIVE // SPECIFICATION COMPLETE"}),d.jsx("button",{onClick:e,className:"px-6 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono text-white transition-colors",children:"DISMISS DOSSIER"})]})]})]}):null}function U0(){const[s,e]=rt.useState(null),t=D0.find(l=>l.id==="govinnovate"),r=D0.filter(l=>l.id!=="govinnovate"),o=l=>{nn.playChime(620,.25),e(l)};return d.jsxs("section",{id:"creations",className:"relative py-28 px-6 overflow-hidden",children:[d.jsx("div",{className:"absolute top-1/2 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none"}),d.jsxs("div",{className:"max-w-7xl mx-auto",children:[d.jsxs("div",{className:"flex flex-col items-center text-center mb-16",children:[d.jsxs("div",{className:"flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-[0.25em] uppercase mb-3",children:[d.jsx("span",{className:"w-8 h-[1px] bg-cyan-400"}),d.jsx("span",{children:"05 // DIGITAL ARTIFACTS & PLATFORMS"}),d.jsx("span",{className:"w-8 h-[1px] bg-cyan-400"})]}),d.jsxs("h2",{className:"font-orbitron font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-wider text-white mb-6",children:["IDEAS ARE NOTHING WITHOUT ",d.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400",children:"EXECUTION."})]}),d.jsx("p",{className:"max-w-2xl text-slate-300 font-light text-base sm:text-lg leading-relaxed",children:"Move cursor over project cards to experience interactive light reflections and deep architecture details."})]}),t&&d.jsxs(Js,{onClick:()=>o(t),cursorText:"VIEW PROJECT",maxTilt:5,className:"rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-slate-950 via-[#070e1c] to-[#040813] border-2 border-cyan-500/40 shadow-[0_0_60px_rgba(0,240,255,0.15)] mb-16 cursor-pointer group",children:[d.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800",children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("span",{className:"font-mono text-xs px-3 py-1 rounded-full bg-cyan-950 border border-cyan-700 text-cyan-300 font-bold uppercase tracking-wider",children:t.badge}),d.jsxs("span",{className:"font-mono text-xs text-slate-400",children:["// ",t.category]})]}),d.jsxs("div",{className:"flex items-center gap-3",children:[t.github&&d.jsx("a",{href:t.github,target:"_blank",rel:"noreferrer",onClick:l=>l.stopPropagation(),"data-cursor":"pointer",className:"p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-400 transition-colors",title:"GitHub Repository",children:d.jsx(yc,{size:18})}),t.liveDemo&&d.jsx("a",{href:t.liveDemo,target:"_blank",rel:"noreferrer",onClick:l=>l.stopPropagation(),"data-cursor":"pointer",className:"p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/30 transition-colors",title:"Live Demo",children:d.jsx(Vg,{size:18})})]})]}),d.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-8",children:[d.jsxs("div",{className:"lg:col-span-7",children:[d.jsx("h3",{className:"font-orbitron font-black text-3xl sm:text-5xl text-white group-hover:text-cyan-200 transition-colors mb-3",children:t.title}),d.jsx("div",{className:"text-base sm:text-lg font-mono text-cyan-300 mb-6",children:t.tagline}),d.jsx("p",{className:"text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-6",children:t.overview}),d.jsxs("div",{className:"space-y-2 mb-6",children:[d.jsxs("div",{className:"flex items-start gap-2.5 text-xs sm:text-sm text-slate-300",children:[d.jsx(Zs,{size:16,className:"text-cyan-400 flex-shrink-0 mt-0.5"}),d.jsxs("span",{children:[d.jsx("strong",{children:"AI Problem Decomposition:"})," Transforms unstructured notes into tenders with IS 10500 benchmarks."]})]}),d.jsxs("div",{className:"flex items-start gap-2.5 text-xs sm:text-sm text-slate-300",children:[d.jsx(Zs,{size:16,className:"text-cyan-400 flex-shrink-0 mt-0.5"}),d.jsxs("span",{children:[d.jsx("strong",{children:"GFR 149/170 Exemption:"})," Automatically relaxes prior turnover barriers for DPIIT startups."]})]}),d.jsxs("div",{className:"flex items-start gap-2.5 text-xs sm:text-sm text-slate-300",children:[d.jsx(Zs,{size:16,className:"text-cyan-400 flex-shrink-0 mt-0.5"}),d.jsxs("span",{children:[d.jsx("strong",{children:"Cryptographic Audit Ledger:"})," Immutably logs evaluation scores, pilot telemetry & treasury releases."]})]})]}),d.jsx("div",{className:"flex flex-wrap items-center gap-4",children:d.jsxs("span",{className:"inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-slate-950 font-mono font-bold text-xs tracking-widest uppercase shadow-[0_0_20px_rgba(0,240,255,0.3)] group-hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all",children:[d.jsx("span",{children:"CLICK TO OPEN COMPLETE SPECIFICATION"}),d.jsx(co,{size:16,className:"transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"})]})})]}),d.jsxs("div",{className:"lg:col-span-5 rounded-2xl bg-slate-900/90 border border-slate-800 p-6 shadow-2xl relative overflow-hidden group-hover:border-cyan-500/40 transition-colors",children:[d.jsxs("div",{className:"font-mono text-xs text-slate-400 border-b border-slate-800 pb-3 mb-4 flex items-center justify-between",children:[d.jsxs("span",{className:"flex items-center gap-2",children:[d.jsx(Xf,{size:14,className:"text-cyan-400"}),d.jsx("span",{children:"ARCHITECTURE SCHEMATIC"})]}),d.jsx("span",{className:"text-[10px] text-emerald-400",children:"PROTOTYPE_ONLINE"})]}),d.jsxs("div",{className:"space-y-3 font-mono text-xs",children:[d.jsxs("div",{className:"p-3 rounded-xl bg-slate-950/80 border border-cyan-500/30 flex items-center justify-between group-hover:translate-x-1 transition-transform",children:[d.jsxs("div",{children:[d.jsx("div",{className:"text-[10px] text-slate-400",children:"STAKEHOLDER 01"}),d.jsx("div",{className:"text-slate-200 font-bold",children:"Gov Department Portal"})]}),d.jsx("span",{className:"text-[10px] text-cyan-400",children:"AI Challenge Gen"})]}),d.jsxs("div",{className:"p-3 rounded-xl bg-slate-950/80 border border-purple-500/30 flex items-center justify-between group-hover:translate-x-1 transition-transform delay-75",children:[d.jsxs("div",{children:[d.jsx("div",{className:"text-[10px] text-slate-400",children:"STAKEHOLDER 02"}),d.jsx("div",{className:"text-slate-200 font-bold",children:"DPIIT Startup Sandbox"})]}),d.jsx("span",{className:"text-[10px] text-purple-400",children:"1-Click Exemption"})]}),d.jsxs("div",{className:"p-3 rounded-xl bg-slate-950/80 border border-amber-500/30 flex items-center justify-between group-hover:translate-x-1 transition-transform delay-150",children:[d.jsxs("div",{children:[d.jsx("div",{className:"text-[10px] text-slate-400",children:"STAKEHOLDER 03"}),d.jsx("div",{className:"text-slate-200 font-bold",children:"Technical Evaluators"})]}),d.jsx("span",{className:"text-[10px] text-amber-400",children:"6-Pillar Scorecard"})]})]}),d.jsxs("div",{className:"mt-4 pt-4 border-t border-slate-800/80",children:[d.jsxs("div",{className:"text-[10px] font-mono text-slate-400 mb-2 flex items-center justify-between",children:[d.jsx("span",{children:"90-DAY MUNICIPAL TELEMETRY"}),d.jsx("span",{className:"text-emerald-400",children:"BENCHMARK SURPASSED"})]}),d.jsxs("div",{className:"grid grid-cols-2 gap-2 text-center font-mono",children:[d.jsxs("div",{className:"p-2 rounded-lg bg-slate-950 border border-slate-800",children:[d.jsx("div",{className:"text-cyan-400 font-bold text-sm",children:"2.8 MIN"}),d.jsx("div",{className:"text-[9px] text-slate-500",children:"Alert Latency"})]}),d.jsxs("div",{className:"p-2 rounded-lg bg-slate-950 border border-slate-800",children:[d.jsx("div",{className:"text-emerald-400 font-bold text-sm",children:"99.8%"}),d.jsx("div",{className:"text-[9px] text-slate-500",children:"Sensor Uptime"})]})]})]})]})]}),d.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80",children:t.metrics.map((l,u)=>d.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/40 border border-slate-800 text-center group-hover:border-slate-700 transition-colors",children:[d.jsx("div",{className:"font-orbitron font-bold text-lg sm:text-xl text-cyan-300",children:l.value}),d.jsx("div",{className:"font-mono text-[10px] text-slate-400 uppercase mt-0.5",children:l.label})]},u))})]}),d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 mb-16",children:r.map(l=>d.jsxs(Js,{onClick:()=>o(l),cursorText:"VIEW PROJECT",maxTilt:7,className:"p-8 rounded-3xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer flex flex-col justify-between group shadow-xl",children:[d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center justify-between mb-4",children:[d.jsx("span",{className:"font-mono text-xs px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-cyan-400 font-bold",children:l.category}),d.jsx("span",{className:"font-mono text-xs text-slate-500",children:l.badge})]}),d.jsx("h3",{className:"font-orbitron font-bold text-2xl text-white group-hover:text-cyan-300 transition-colors mb-2",children:l.title}),d.jsx("div",{className:"font-mono text-xs text-purple-400 mb-4",children:l.tagline}),d.jsx("p",{className:"text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6",children:l.overview}),d.jsx("div",{className:"flex flex-wrap gap-1.5 mb-6",children:l.techStack.map((u,h)=>d.jsx("span",{className:"px-2.5 py-0.5 rounded text-[10px] font-mono bg-slate-900 border border-slate-800 text-slate-300 group-hover:border-slate-700 transition-colors",children:u.name},h))})]}),d.jsxs("div",{className:"pt-4 border-t border-slate-800/80 flex items-center justify-between",children:[d.jsx("span",{className:"font-mono text-xs text-slate-500",children:"CLICK TO VIEW DOSSIER"}),d.jsxs("div",{className:"flex items-center gap-1 font-mono text-xs font-bold text-cyan-400 group-hover:translate-x-1 transition-transform",children:[d.jsx("span",{children:"VIEW PROJECT"}),d.jsx(co,{size:14})]})]})]},l.id))}),d.jsxs("div",{className:"p-8 rounded-3xl bg-slate-950/40 border border-dashed border-slate-800",children:[d.jsxs("div",{className:"flex items-center justify-between mb-6",children:[d.jsxs("div",{className:"font-mono text-xs text-slate-400 uppercase tracking-widest flex items-center gap-2",children:[d.jsx(cr,{size:14,className:"text-cyan-400"}),d.jsx("span",{children:"Future Creations Pipeline & Active R&D Slots"})]}),d.jsx("span",{className:"font-mono text-[10px] text-slate-500",children:"REUSABLE ARCHIVE"})]}),d.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:Eb.map(l=>d.jsxs("div",{className:"p-5 rounded-2xl bg-slate-900/40 border border-slate-800 flex items-center justify-between",children:[d.jsxs("div",{children:[d.jsx("div",{className:"font-orbitron font-bold text-sm text-slate-200",children:l.title}),d.jsx("div",{className:"font-mono text-[10px] text-purple-400 uppercase mt-0.5",children:l.category}),d.jsx("div",{className:"text-xs text-slate-400 font-light mt-1",children:l.tagline})]}),d.jsx("span",{className:"font-mono text-[10px] px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 whitespace-nowrap ml-4",children:l.badge})]},l.id))})]})]}),s&&d.jsx(wb,{project:s,onClose:()=>e(null)})]})}const O0=[{id:"ai",title:"Artificial Intelligence",tagline:"Intelligent agent architectures and autonomous reasoning pipelines.",description:"Exploring adaptive neural models, heuristic decision engines, and real-time inference at the edge.",technologies:["TensorFlow","PyTorch","Scikit-Learn","Reinforcement Learning"],color:"#00f0ff",level:"Core Exploration",icon:"Brain"},{id:"llms",title:"Large Language Models",tagline:"Prompt engineering, function calling, and domain-tuned retrieval.",description:"Harnessing multimodal Gemini and open-weight models for structured data extraction and reasoning synthesis.",technologies:["Gemini 1.5 Pro/Flash","LangChain","Vector RAG","Prompt Oracles"],color:"#a855f7",level:"Active Application",icon:"Sparkles"},{id:"cybersecurity",title:"Cybersecurity",tagline:"Cryptographic integrity, defensive posture, and access hardening.",description:"Investigating zero-trust architectures, AES-256 vault protections, and secure credential handshakes.",technologies:["AES-256-GCM","SHA-256","OAuth / JWT","Penetration Testing"],color:"#f43f5e",level:"Exploration Area",icon:"ShieldCheck"},{id:"web-dev",title:"Web Development",tagline:"Reactive, high-performance web experiences with cinematic polish.",description:"Building responsive, accessible, micro-animated client and server-rendered applications with modern React ecosystems.",technologies:["React 19","Next.js 16","Tailwind CSS","TypeScript","Vite"],color:"#3b82f6",level:"Primary Craft",icon:"Globe"},{id:"blockchain",title:"Blockchain",tagline:"Decentralized consensus, verifiable state, and smart contracts.",description:"Developing immutable audit trails, milestone escrow logic, and tamper-resistant state verification.",technologies:["Solidity","Hardhat","EVM Networks","Web3.js / Ethers"],color:"#ec4899",level:"Exploration Area",icon:"Cpu"},{id:"computer-vision",title:"Computer Vision",tagline:"Visual perception, real-time object classification, and spatial models.",description:"Deploying browser-native object recognition (TensorFlow.js) and OCR pipeline parsing for real-world automation.",technologies:["OpenCV","TensorFlow.js","Tesseract OCR","YOLOv8"],color:"#10b981",level:"Active Prototype",icon:"Scan"},{id:"backend-engineering",title:"Backend Engineering",tagline:"High-throughput asynchronous APIs and robust database pipelines.",description:"Engineering resilient REST and WebSocket endpoints, schema migrations, and relational relational state management.",technologies:["FastAPI","Node.js / Express","Supabase","PostgreSQL","SQLite"],color:"#f59e0b",level:"Core Capability",icon:"Server"},{id:"cloud-computing",title:"Cloud Computing",tagline:"Edge execution, serverless scaling, and cloud deployment pipelines.",description:"Automating CI/CD workflows, edge function execution, and multi-region asset distribution.",technologies:["Vercel Edge","Render","Docker Basics","Supabase Cloud"],color:"#06b6d4",level:"Deployment Standard",icon:"Cloud"},{id:"software-engineering",title:"Software Engineering",tagline:"Architectural patterns, algorithmic discipline, and clean code principles.",description:"Maintaining modular component trees, type contracts, regression-proof logic, and collaborative Git practices.",technologies:["Design Patterns","Clean Code","Git Workflows","DSA Rigor"],color:"#8b5cf6",level:"Foundational Pillar",icon:"Layers"}],bb={Brain:Mw,Sparkles:cr,ShieldCheck:Wg,Globe:zw,Cpu:Hg,Scan:Jw,Server:nb,Cloud:Rw,Layers:Wf};function F0(){const[s,e]=rt.useState(O0[0]),t=r=>{nn.playClick(),e(r)};return d.jsxs("section",{id:"tech-universe",className:"relative py-28 px-6 overflow-hidden",children:[d.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none"}),d.jsxs("div",{className:"max-w-7xl mx-auto",children:[d.jsxs("div",{className:"flex flex-col items-center text-center mb-16",children:[d.jsxs("div",{className:"flex items-center gap-2 font-mono text-xs text-purple-400 tracking-[0.25em] uppercase mb-3",children:[d.jsx("span",{className:"w-8 h-[1px] bg-purple-400"}),d.jsx("span",{children:"06 // THE EXPLORATION FRONTIER"}),d.jsx("span",{className:"w-8 h-[1px] bg-purple-400"})]}),d.jsxs("h2",{className:"font-orbitron font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-wider text-white mb-6",children:["EXPLORING THE ",d.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400",children:"FRONTIER OF TECHNOLOGY."})]}),d.jsx("p",{className:"max-w-3xl text-slate-300 font-light text-base sm:text-lg leading-relaxed",children:"The domains we explore, dissect, and experiment with. These represent our collective intellectual playground and future innovation vectors."}),d.jsx("div",{className:"font-mono text-xs text-slate-500 mt-2",children:"* PRESENTED AS COLLECTIVE EXPLORATION & RESEARCH INTERESTS"})]}),d.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[d.jsx("div",{className:"lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3.5",children:O0.map(r=>{const o=bb[r.icon]||Hg,l=s.id===r.id;return d.jsxs("button",{onClick:()=>t(r),className:`group p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${l?"bg-slate-900 border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.25)] scale-[1.02]":"bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60"}`,style:{borderColor:l?r.color:void 0},children:[d.jsxs("div",{className:"flex items-center justify-between mb-3",children:[d.jsx("div",{className:"p-2 rounded-xl transition-colors",style:{backgroundColor:`${r.color}15`,color:r.color},children:d.jsx(o,{size:18})}),d.jsx("span",{className:"w-2 h-2 rounded-full",style:{backgroundColor:l?r.color:"transparent",boxShadow:l?`0 0 8px ${r.color}`:"none"}})]}),d.jsxs("div",{children:[d.jsx("h3",{className:"font-orbitron font-bold text-xs sm:text-sm text-white group-hover:text-cyan-300 transition-colors",children:r.title}),d.jsx("div",{className:"font-mono text-[9px] text-slate-400 mt-1 uppercase tracking-wider",children:r.level})]})]},r.id)})}),d.jsxs("div",{className:"lg:col-span-5 p-8 rounded-3xl bg-slate-950/80 border border-slate-800 shadow-2xl relative overflow-hidden backdrop-blur-xl",children:[d.jsxs("div",{className:"flex items-center justify-between pb-6 border-b border-slate-800 font-mono text-xs",children:[d.jsxs("span",{className:"flex items-center gap-2 text-cyan-400",children:[d.jsx(Kw,{size:14,className:"animate-pulse"}),d.jsx("span",{children:"ACTIVE DOMAIN INSPECTOR"})]}),d.jsx("span",{className:"px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold",style:{backgroundColor:`${s.color}20`,color:s.color,border:`1px solid ${s.color}40`},children:s.level})]}),d.jsxs("div",{className:"my-6",children:[d.jsx("h3",{className:"font-orbitron font-black text-2xl sm:text-3xl text-white mb-2",children:s.title}),d.jsx("p",{className:"font-mono text-xs",style:{color:s.color},children:s.tagline})]}),d.jsx("p",{className:"text-sm text-slate-300 font-light leading-relaxed mb-6",children:s.description}),d.jsxs("div",{className:"mb-6",children:[d.jsx("span",{className:"font-mono text-xs text-slate-400 uppercase tracking-widest block mb-3",children:"Key Tooling & Exploration Stack"}),d.jsx("div",{className:"flex flex-wrap gap-2",children:s.technologies.map((r,o)=>d.jsx("span",{className:"px-3 py-1.5 rounded-xl text-xs font-mono bg-slate-900 border border-slate-800 text-slate-200",children:r},o))})]}),d.jsxs("div",{className:"pt-6 border-t border-slate-800/80 flex items-center justify-between font-mono text-xs text-slate-500",children:[d.jsx("span",{children:"EXPLORATION STATUS"}),d.jsxs("span",{className:"text-emerald-400 flex items-center gap-1.5",children:[d.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"}),"ACTIVE PIPELINE"]})]})]})]})]})]})}const k0=[{phase:"01",date:"EARLY 2026",title:"The Genesis of Five Curious Minds",tag:"CONVERGENCE",description:"Five engineering students at GL Bajaj Institute of Technology & Management found common ground: a shared restlessness with textbook theory and an obsession with building impactful software that solves real problems.",highlight:"Initial brainstorming sessions, collaborative Git repos, and late-night architectural debates.",metric:"5 Minds Converged"},{phase:"02",date:"MID 2026",title:"Forging Team APEX",tag:"FOUNDATION",description:"The team officially formalized under the identity of APEX: 'Beyond Ideas. Into Innovation.' Defined core roles spanning system architecture, competitive strategy, algorithms, frontend craft, and deep technical research.",highlight:"Commitment to rapid prototyping, zero-fluff engineering, and tackling difficult civic & technological challenges.",metric:"1 Shared Vision"},{phase:"03",date:"OCTOBER 2026",title:"Sustainathon 2.0 & The Birth of GovInnovate",tag:"CRUCIBLE",description:"Entered Sustainathon 2.0 at Sharda University. Over 36 non-stop hours, the team conceptualized, architected, and built GovInnovate—an AI and blockchain-backed public procurement sandbox enabling DPIIT startups to win government contracts under GFR 149/170 relaxations.",highlight:"Confronted the challenge of rigid public procurement guidelines with an AI-driven SLA decomposer and live municipal pilot telemetry.",metric:"36-Hour Hackathon Sprint"},{phase:"04",date:"OCTOBER 2026",title:"Theme-Wise Victory at Sharda University",tag:"TRIUMPH",description:"GovInnovate was awarded the prestigious Theme-Wise Winner trophy by a jury of senior academicians, government advisors, and enterprise evaluators. The project validated APEX's ability to combine statutory compliance with cutting-edge tech.",highlight:"Jury commendation for realistic GFR 2017 legal mapping, pgvector AI matching, and tamper-evident blockchain audit logs.",metric:"1st Place Theme Award"},{phase:"05",date:"NOVEMBER 2026",title:"The Golden Ticket: hackFront India National Finale",tag:"THE ARENA",description:"Selected from thousands of developers across India to receive the official Golden Ticket for the hackFront India 2026 National Finale at IIIT Delhi, Okhla (21–22 Nov 2026), backed by neo4j, Arduino, ixigo, and Sarvam AI.",highlight:"Builder Shashwat Dubey representing Team APEX on the national stage among the top 1% of Indian student innovators.",metric:"National Finale Entry"},{phase:"06",date:"BEYOND 2026",title:"The Frontier: Production-Grade Collective",tag:"EXPANSION",description:"Evolving from a competitive hackathon team into an elite collective building intelligent software, open-source utilities, and venture-scale prototypes.",highlight:"Advancing SIH prototypes, exploring decentralized credentials, and preparing for national-tier deployments.",metric:"Infinite Possibilities"}];function B0(){const[s,e]=rt.useState(k0[2]),t=r=>{nn.playClick(),e(r)};return d.jsxs("section",{id:"journey",className:"relative py-28 px-6 overflow-hidden",children:[d.jsx("div",{className:"absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none"}),d.jsxs("div",{className:"max-w-7xl mx-auto",children:[d.jsxs("div",{className:"flex flex-col items-center text-center mb-16",children:[d.jsxs("div",{className:"flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-[0.25em] uppercase mb-3",children:[d.jsx("span",{className:"w-8 h-[1px] bg-cyan-400"}),d.jsx("span",{children:"07 // THE EVOLUTION ODYSSEY"}),d.jsx("span",{className:"w-8 h-[1px] bg-cyan-400"})]}),d.jsxs("h2",{className:"font-orbitron font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-wider text-white mb-6",children:["EVERY GREAT JOURNEY STARTS WITH ",d.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400",children:"CURIOSITY."})]}),d.jsx("p",{className:"max-w-2xl text-slate-300 font-light text-base sm:text-lg leading-relaxed",children:"From late-night campus brainstorming to competitive national arenas—our trajectory in real-time."})]}),d.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[d.jsx("div",{className:"lg:col-span-6 space-y-4",children:k0.map(r=>{const o=s.phase===r.phase;return d.jsxs("div",{onClick:()=>t(r),className:`group p-6 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden ${o?"bg-slate-900 border-cyan-400 shadow-[0_0_25px_rgba(0,240,255,0.2)] translate-x-2":"bg-slate-950/60 border-slate-800/80 hover:border-slate-700"}`,children:[d.jsxs("div",{className:"flex items-center justify-between mb-2",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsxs("span",{className:"font-mono text-xs px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-800 text-cyan-300",children:["PHASE ",r.phase]}),d.jsx("span",{className:"font-mono text-[11px] text-slate-400",children:r.date})]}),d.jsx("span",{className:"font-mono text-[10px] text-purple-400 uppercase tracking-widest font-bold",children:r.tag})]}),d.jsx("h3",{className:"font-orbitron font-bold text-lg text-white group-hover:text-cyan-300 transition-colors mb-2",children:r.title}),d.jsx("p",{className:"text-xs text-slate-400 font-light leading-relaxed line-clamp-2",children:r.description}),o&&d.jsx("div",{className:"absolute right-4 top-1/2 -translate-y-1/2 text-cyan-400",children:d.jsx(zg,{size:20})})]},r.phase)})}),d.jsxs("div",{className:"lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-slate-950/90 border border-slate-800 shadow-2xl relative overflow-hidden backdrop-blur-xl",children:[d.jsxs("div",{className:"flex items-center justify-between pb-6 border-b border-slate-800 font-mono text-xs text-slate-400",children:[d.jsxs("span",{className:"flex items-center gap-2 text-cyan-400",children:[d.jsx(Gg,{size:16}),d.jsxs("span",{children:["MILESTONE SPOTLIGHT // PHASE ",s.phase]})]}),d.jsx("span",{className:"text-purple-400 font-bold",children:s.date})]}),d.jsxs("div",{className:"my-6",children:[d.jsxs("span",{className:"font-mono text-xs text-cyan-400 tracking-widest uppercase block mb-1",children:["// ",s.tag]}),d.jsx("h3",{className:"font-orbitron font-black text-2xl sm:text-3xl text-white mb-4",children:s.title}),d.jsx("p",{className:"text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-6",children:s.description})]}),d.jsxs("div",{className:"p-5 rounded-2xl bg-slate-900/80 border border-slate-800 mb-6",children:[d.jsxs("div",{className:"font-mono text-xs text-purple-300 font-bold uppercase mb-2 flex items-center gap-2",children:[d.jsx(cr,{size:14,className:"text-purple-400"}),d.jsx("span",{children:"Critical Turning Point"})]}),d.jsx("p",{className:"text-xs text-slate-300 font-light leading-relaxed",children:s.highlight})]}),d.jsxs("div",{className:"p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/40 flex items-center justify-between text-xs font-mono",children:[d.jsx("span",{className:"text-slate-400",children:"KEY MILESTONE RESULT:"}),d.jsx("span",{className:"text-cyan-300 font-bold",children:s.metric})]}),d.jsxs("div",{className:"mt-8 pt-6 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500",children:[d.jsx("span",{children:"CONTINUOUS EVOLUTION"}),d.jsx("span",{className:"text-slate-400",children:"APEX CHRONICLES"})]})]})]})]})]})}function z0(){const s=()=>{nn.playChime(750,.3);const e=document.getElementById("contact");e&&e.scrollIntoView({behavior:"smooth"})};return d.jsxs("section",{className:"relative py-32 px-6 overflow-hidden",children:[d.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-600/20 via-purple-600/20 to-pink-600/10 rounded-full blur-[150px] pointer-events-none -z-10"}),d.jsxs("div",{className:"max-w-4xl mx-auto flex flex-col items-center text-center relative z-10",children:[d.jsxs("div",{className:"mb-8 relative group cursor-pointer",onClick:()=>nn.playChime(800,.3),children:[d.jsx("div",{className:"absolute -inset-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-2xl opacity-40 group-hover:opacity-75 transition-opacity"}),d.jsx(Sc,{size:90,animated:!0})]}),d.jsx("div",{className:"font-mono text-xs text-cyan-400 tracking-[0.3em] uppercase mb-4",children:"// BEYOND THE HORIZON"}),d.jsxs("h2",{className:"font-orbitron font-black text-4xl sm:text-6xl md:text-7xl tracking-wider text-white mb-6",children:["WE ARE JUST ",d.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400",children:"GETTING STARTED."})]}),d.jsxs("div",{className:"max-w-2xl text-slate-300 text-base sm:text-lg font-light leading-relaxed space-y-4 mb-10",children:[d.jsx("p",{children:'"The next generation of innovation belongs to those who dare to explore, experiment, collaborate, and create."'}),d.jsx("p",{className:"font-orbitron font-bold text-xl sm:text-2xl text-white tracking-widest uppercase",children:"WE ARE APEX."}),d.jsx("p",{className:"font-mono text-xs sm:text-sm text-cyan-300 tracking-[0.2em] uppercase",children:"FIVE MINDS. ONE VISION. INFINITE POSSIBILITIES."})]}),d.jsxs("button",{onClick:s,className:"group relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl text-sm sm:text-base font-mono font-bold tracking-widest text-slate-950 uppercase bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 hover:shadow-[0_0_40px_rgba(0,240,255,0.7)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0",children:[d.jsx(cr,{size:18,className:"text-slate-950"}),d.jsx("span",{children:"LET'S BUILD SOMETHING EXTRAORDINARY"}),d.jsx(Fg,{size:18,className:"transition-transform group-hover:translate-x-1.5"})]})]})]})}var qf={};(function s(e,t,r,o){var l=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),u=typeof Path2D=="function"&&typeof DOMMatrix=="function",h=(function(){if(!e.OffscreenCanvas)return!1;try{var L=new OffscreenCanvas(1,1),M=L.getContext("2d");M.fillRect(0,0,1,1);var H=L.transferToImageBitmap();M.createPattern(H,"no-repeat")}catch{return!1}return!0})();function p(){}function m(L){var M=t.exports.Promise,H=M!==void 0?M:e.Promise;return typeof H=="function"?new H(L):(L(p,p),null)}var y=(function(L,M){return{transform:function(H){if(L)return H;if(M.has(H))return M.get(H);var xe=new OffscreenCanvas(H.width,H.height),G=xe.getContext("2d");return G.drawImage(H,0,0),M.set(H,xe),xe},clear:function(){M.clear()}}})(h,new Map),S=(function(){var L=Math.floor(16.666666666666668),M,H,xe={},G=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(M=function(te){var fe=Math.random();return xe[fe]=requestAnimationFrame(function ge(he){G===he||G+L-1<he?(G=he,delete xe[fe],te()):xe[fe]=requestAnimationFrame(ge)}),fe},H=function(te){xe[te]&&cancelAnimationFrame(xe[te])}):(M=function(te){return setTimeout(te,L)},H=function(te){return clearTimeout(te)}),{frame:M,cancel:H}})(),_=(function(){var L,M,H={};function xe(G){function te(fe,ge){G.postMessage({options:fe||{},callback:ge})}G.init=function(ge){var he=ge.transferControlToOffscreen();G.postMessage({canvas:he},[he])},G.fire=function(ge,he,Ee){if(M)return te(ge,null),M;var et=Math.random().toString(36).slice(2);return M=m(function(Ue){function tt(st){st.data.callback===et&&(delete H[et],G.removeEventListener("message",tt),M=null,y.clear(),Ee(),Ue())}G.addEventListener("message",tt),te(ge,et),H[et]=tt.bind(null,{data:{callback:et}})}),M},G.reset=function(){G.postMessage({reset:!0});for(var ge in H)H[ge](),delete H[ge]}}return function(){if(L)return L;if(!r&&l){var G=["var CONFETTI, SIZE = {}, module = {};","("+s.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{L=new Worker(URL.createObjectURL(new Blob([G])))}catch(te){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",te),null}xe(L)}return L}})(),E={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function b(L,M){return M?M(L):L}function C(L){return L!=null}function x(L,M,H){return b(L&&C(L[M])?L[M]:E[M],H)}function v(L){return L<0?0:Math.floor(L)}function T(L,M){return Math.floor(Math.random()*(M-L))+L}function D(L){return parseInt(L,16)}function P(L){return L.map(U)}function U(L){var M=String(L).replace(/[^0-9a-f]/gi,"");return M.length<6&&(M=M[0]+M[0]+M[1]+M[1]+M[2]+M[2]),{r:D(M.substring(0,2)),g:D(M.substring(2,4)),b:D(M.substring(4,6))}}function O(L){var M=x(L,"origin",Object);return M.x=x(M,"x",Number),M.y=x(M,"y",Number),M}function w(L){L.width=document.documentElement.clientWidth,L.height=document.documentElement.clientHeight}function I(L){var M=L.getBoundingClientRect();L.width=M.width,L.height=M.height}function $(L){var M=document.createElement("canvas");return M.style.position="fixed",M.style.top="0px",M.style.left="0px",M.style.pointerEvents="none",M.style.zIndex=L,M}function z(L,M,H,xe,G,te,fe,ge,he){L.save(),L.translate(M,H),L.rotate(te),L.scale(xe,G),L.arc(0,0,1,fe,ge,he),L.restore()}function K(L){var M=L.angle*(Math.PI/180),H=L.spread*(Math.PI/180);return{x:L.x,y:L.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:L.startVelocity*.5+Math.random()*L.startVelocity,angle2D:-M+(.5*H-Math.random()*H),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:L.color,shape:L.shape,tick:0,totalTicks:L.ticks,decay:L.decay,drift:L.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:L.gravity*3,ovalScalar:.6,scalar:L.scalar,flat:L.flat}}function ee(L,M){M.x+=Math.cos(M.angle2D)*M.velocity+M.drift,M.y+=Math.sin(M.angle2D)*M.velocity+M.gravity,M.velocity*=M.decay,M.flat?(M.wobble=0,M.wobbleX=M.x+10*M.scalar,M.wobbleY=M.y+10*M.scalar,M.tiltSin=0,M.tiltCos=0,M.random=1):(M.wobble+=M.wobbleSpeed,M.wobbleX=M.x+10*M.scalar*Math.cos(M.wobble),M.wobbleY=M.y+10*M.scalar*Math.sin(M.wobble),M.tiltAngle+=.1,M.tiltSin=Math.sin(M.tiltAngle),M.tiltCos=Math.cos(M.tiltAngle),M.random=Math.random()+2);var H=M.tick++/M.totalTicks,xe=M.x+M.random*M.tiltCos,G=M.y+M.random*M.tiltSin,te=M.wobbleX+M.random*M.tiltCos,fe=M.wobbleY+M.random*M.tiltSin;if(L.fillStyle="rgba("+M.color.r+", "+M.color.g+", "+M.color.b+", "+(1-H)+")",L.beginPath(),u&&M.shape.type==="path"&&typeof M.shape.path=="string"&&Array.isArray(M.shape.matrix))L.fill(Y(M.shape.path,M.shape.matrix,M.x,M.y,Math.abs(te-xe)*.1,Math.abs(fe-G)*.1,Math.PI/10*M.wobble));else if(M.shape.type==="bitmap"){var ge=Math.PI/10*M.wobble,he=Math.abs(te-xe)*.1,Ee=Math.abs(fe-G)*.1,et=M.shape.bitmap.width*M.scalar,Ue=M.shape.bitmap.height*M.scalar,tt=new DOMMatrix([Math.cos(ge)*he,Math.sin(ge)*he,-Math.sin(ge)*Ee,Math.cos(ge)*Ee,M.x,M.y]);tt.multiplySelf(new DOMMatrix(M.shape.matrix));var st=L.createPattern(y.transform(M.shape.bitmap),"no-repeat");st.setTransform(tt),L.globalAlpha=1-H,L.fillStyle=st,L.fillRect(M.x-et/2,M.y-Ue/2,et,Ue),L.globalAlpha=1}else if(M.shape==="circle")L.ellipse?L.ellipse(M.x,M.y,Math.abs(te-xe)*M.ovalScalar,Math.abs(fe-G)*M.ovalScalar,Math.PI/10*M.wobble,0,2*Math.PI):z(L,M.x,M.y,Math.abs(te-xe)*M.ovalScalar,Math.abs(fe-G)*M.ovalScalar,Math.PI/10*M.wobble,0,2*Math.PI);else if(M.shape==="star")for(var ke=Math.PI/2*3,Et=4*M.scalar,wt=8*M.scalar,It=M.x,gt=M.y,Kt=5,pt=Math.PI/Kt;Kt--;)It=M.x+Math.cos(ke)*wt,gt=M.y+Math.sin(ke)*wt,L.lineTo(It,gt),ke+=pt,It=M.x+Math.cos(ke)*Et,gt=M.y+Math.sin(ke)*Et,L.lineTo(It,gt),ke+=pt;else L.moveTo(Math.floor(M.x),Math.floor(M.y)),L.lineTo(Math.floor(M.wobbleX),Math.floor(G)),L.lineTo(Math.floor(te),Math.floor(fe)),L.lineTo(Math.floor(xe),Math.floor(M.wobbleY));return L.closePath(),L.fill(),M.tick<M.totalTicks}function de(L,M,H,xe,G){var te=M.slice(),fe=L.getContext("2d"),ge,he,Ee=m(function(et){function Ue(){ge=he=null,fe.clearRect(0,0,xe.width,xe.height),y.clear(),G(),et()}function tt(){r&&!(xe.width===o.width&&xe.height===o.height)&&(xe.width=L.width=o.width,xe.height=L.height=o.height),!xe.width&&!xe.height&&(H(L),xe.width=L.width,xe.height=L.height),fe.clearRect(0,0,xe.width,xe.height),te=te.filter(function(st){return ee(fe,st)}),te.length?ge=S.frame(tt):Ue()}ge=S.frame(tt),he=Ue});return{addFettis:function(et){return te=te.concat(et),Ee},canvas:L,promise:Ee,reset:function(){ge&&S.cancel(ge),he&&he()}}}function V(L,M){var H=!L,xe=!!x(M||{},"resize"),G=!1,te=x(M,"disableForReducedMotion",Boolean),fe=l&&!!x(M||{},"useWorker"),ge=fe?_():null,he=H?w:I,Ee=L&&ge?!!L.__confetti_initialized:!1,et=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Ue;function tt(ke,Et,wt){for(var It=x(ke,"particleCount",v),gt=x(ke,"angle",Number),Kt=x(ke,"spread",Number),pt=x(ke,"startVelocity",Number),Zt=x(ke,"decay",Number),cn=x(ke,"gravity",Number),an=x(ke,"drift",Number),Z=x(ke,"colors",P),fn=x(ke,"ticks",Number),Lt=x(ke,"shapes"),Rt=x(ke,"scalar"),Pe=!!x(ke,"flat"),kt=O(ke),We=It,it=[],F=L.width*kt.x,A=L.height*kt.y;We--;)it.push(K({x:F,y:A,angle:gt,spread:Kt,startVelocity:pt,color:Z[We%Z.length],shape:Lt[T(0,Lt.length)],ticks:fn,decay:Zt,gravity:cn,drift:an,scalar:Rt,flat:Pe}));return Ue?Ue.addFettis(it):(Ue=de(L,it,he,Et,wt),Ue.promise)}function st(ke){var Et=te||x(ke,"disableForReducedMotion",Boolean),wt=x(ke,"zIndex",Number);if(Et&&et)return m(function(pt){pt()});H&&Ue?L=Ue.canvas:H&&!L&&(L=$(wt),document.body.appendChild(L)),xe&&!Ee&&he(L);var It={width:L.width,height:L.height};ge&&!Ee&&ge.init(L),Ee=!0,ge&&(L.__confetti_initialized=!0);function gt(){if(ge){var pt={getBoundingClientRect:function(){if(!H)return L.getBoundingClientRect()}};he(pt),ge.postMessage({resize:{width:pt.width,height:pt.height}});return}It.width=It.height=null}function Kt(){Ue=null,xe&&(G=!1,e.removeEventListener("resize",gt)),H&&L&&(document.body.contains(L)&&document.body.removeChild(L),L=null,Ee=!1)}return xe&&!G&&(G=!0,e.addEventListener("resize",gt,!1)),ge?ge.fire(ke,It,Kt):tt(ke,It,Kt)}return st.reset=function(){ge&&ge.reset(),Ue&&Ue.reset()},st}var oe;function Q(){return oe||(oe=V(null,{useWorker:!0,resize:!0})),oe}function Y(L,M,H,xe,G,te,fe){var ge=new Path2D(L),he=new Path2D;he.addPath(ge,new DOMMatrix(M));var Ee=new Path2D;return Ee.addPath(he,new DOMMatrix([Math.cos(fe)*G,Math.sin(fe)*G,-Math.sin(fe)*te,Math.cos(fe)*te,H,xe])),Ee}function j(L){if(!u)throw new Error("path confetti are not supported in this browser");var M,H;typeof L=="string"?M=L:(M=L.path,H=L.matrix);var xe=new Path2D(M),G=document.createElement("canvas"),te=G.getContext("2d");if(!H){for(var fe=1e3,ge=fe,he=fe,Ee=0,et=0,Ue,tt,st=0;st<fe;st+=2)for(var ke=0;ke<fe;ke+=2)te.isPointInPath(xe,st,ke,"nonzero")&&(ge=Math.min(ge,st),he=Math.min(he,ke),Ee=Math.max(Ee,st),et=Math.max(et,ke));Ue=Ee-ge,tt=et-he;var Et=10,wt=Math.min(Et/Ue,Et/tt);H=[wt,0,0,wt,-Math.round(Ue/2+ge)*wt,-Math.round(tt/2+he)*wt]}return{type:"path",path:M,matrix:H}}function q(L){var M,H=1,xe="#000000",G='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof L=="string"?M=L:(M=L.text,H="scalar"in L?L.scalar:H,G="fontFamily"in L?L.fontFamily:G,xe="color"in L?L.color:xe);var te=10*H,fe=""+te+"px "+G,ge=new OffscreenCanvas(te,te),he=ge.getContext("2d");he.font=fe;var Ee=he.measureText(M),et=Math.ceil(Ee.actualBoundingBoxRight+Ee.actualBoundingBoxLeft),Ue=Math.ceil(Ee.actualBoundingBoxAscent+Ee.actualBoundingBoxDescent),tt=2,st=Ee.actualBoundingBoxLeft+tt,ke=Ee.actualBoundingBoxAscent+tt;et+=tt+tt,Ue+=tt+tt,ge=new OffscreenCanvas(et,Ue),he=ge.getContext("2d"),he.font=fe,he.fillStyle=xe,he.fillText(M,st,ke);var Et=1/H;return{type:"bitmap",bitmap:ge.transferToImageBitmap(),matrix:[Et,0,0,Et,-et*Et/2,-Ue*Et/2]}}t.exports=function(){return Q().apply(this,arguments)},t.exports.reset=function(){Q().reset()},t.exports.create=V,t.exports.shapeFromPath=j,t.exports.shapeFromText=q})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),qf,!1);const Tb=qf.exports;qf.exports.create;function G0(){const[s,e]=rt.useState({name:"",email:"",subject:"",message:""}),[t,r]=rt.useState(!1),[o,l]=rt.useState(!1),u=p=>{p.preventDefault(),nn.playChime(880,.4);try{Tb({particleCount:80,spread:70,origin:{y:.7},colors:["#00F0FF","#A855F7","#EC4899","#3B82F6"]})}catch{}r(!0)},h=()=>{navigator.clipboard.writeText("vardhanharsh012345@gmail.com"),l(!0),nn.playClick(),setTimeout(()=>l(!1),2500)};return d.jsx("footer",{id:"contact",className:"relative pt-24 pb-12 px-6 border-t border-slate-800/80 bg-[#02050c] overflow-hidden",children:d.jsxs("div",{className:"max-w-7xl mx-auto",children:[d.jsxs("div",{className:"flex flex-col items-center text-center mb-16",children:[d.jsxs("div",{className:"flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-[0.25em] uppercase mb-3",children:[d.jsx("span",{className:"w-8 h-[1px] bg-cyan-400"}),d.jsx("span",{children:"08 // TRANSMISSION PROTOCOL"}),d.jsx("span",{className:"w-8 h-[1px] bg-cyan-400"})]}),d.jsxs("h2",{className:"font-orbitron font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-wider text-white mb-6",children:["CONNECT WITH ",d.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400",children:"APEX."})]}),d.jsx("p",{className:"max-w-2xl text-slate-300 font-light text-base sm:text-lg leading-relaxed",children:"Interested in collaboration, hackathon alliances, or tech discussions? Send us a transmission."})]}),d.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20",children:[d.jsx("div",{className:"lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-slate-950/70 border border-slate-800 backdrop-blur-xl",children:t?d.jsxs("div",{className:"py-12 flex flex-col items-center text-center",children:[d.jsx("div",{className:"p-4 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 mb-4 animate-bounce",children:d.jsx(Zs,{size:36})}),d.jsx("h3",{className:"font-orbitron font-bold text-2xl text-white mb-2",children:"TRANSMISSION RECEIVED"}),d.jsx("p",{className:"text-sm text-slate-300 max-w-md font-light mb-6",children:"Thank you for reaching out to Team APEX. Your message has been logged in our secure dispatcher."}),d.jsx("button",{onClick:()=>{r(!1),e({name:"",email:"",subject:"",message:""})},className:"px-6 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-400 hover:text-white transition-colors",children:"SEND ANOTHER TRANSMISSION"})]}):d.jsxs("form",{onSubmit:u,className:"space-y-4",children:[d.jsxs("div",{className:"font-mono text-xs text-slate-400 flex items-center justify-between pb-3 border-b border-slate-800",children:[d.jsx("span",{children:"DISPATCHER // DIRECT_COMM_CHANNEL"}),d.jsx("span",{className:"text-cyan-400",children:"STATUS: OPEN"})]}),d.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block font-mono text-[11px] text-slate-400 uppercase tracking-wider mb-1",children:"Your Name"}),d.jsx("input",{type:"text",required:!0,value:s.name,onChange:p=>e({...s,name:p.target.value}),placeholder:"e.g. Alex Mercer",className:"w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 text-sm font-mono"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block font-mono text-[11px] text-slate-400 uppercase tracking-wider mb-1",children:"Email Address"}),d.jsx("input",{type:"email",required:!0,value:s.email,onChange:p=>e({...s,email:p.target.value}),placeholder:"e.g. alex@frontier.io",className:"w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 text-sm font-mono"})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block font-mono text-[11px] text-slate-400 uppercase tracking-wider mb-1",children:"Transmission Subject"}),d.jsx("input",{type:"text",required:!0,value:s.subject,onChange:p=>e({...s,subject:p.target.value}),placeholder:"e.g. Collaboration on GovTech / SIH Challenge",className:"w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 text-sm font-mono"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block font-mono text-[11px] text-slate-400 uppercase tracking-wider mb-1",children:"Message Body"}),d.jsx("textarea",{rows:4,required:!0,value:s.message,onChange:p=>e({...s,message:p.target.value}),placeholder:"Describe your proposal, query, or invitation...",className:"w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 text-sm font-mono resize-none"})]}),d.jsxs("button",{type:"submit",className:"w-full group inline-flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-slate-950 font-mono font-bold text-xs tracking-widest uppercase hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all",children:[d.jsx(eb,{size:15,className:"transition-transform group-hover:translate-x-1"}),d.jsx("span",{children:"TRANSMIT MESSAGE TO APEX"})]})]})}),d.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[d.jsxs("div",{className:"p-6 rounded-2xl bg-slate-950/70 border border-slate-800",children:[d.jsx("span",{className:"font-mono text-xs text-slate-400 uppercase tracking-wider block mb-2",children:"DIRECT INBOX"}),d.jsxs("div",{className:"flex items-center justify-between gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800",children:[d.jsx("span",{className:"font-mono text-xs text-cyan-300 truncate",children:"vardhanharsh012345@gmail.com"}),d.jsx("button",{onClick:h,className:"p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex-shrink-0",title:"Copy email address",children:o?d.jsx(ww,{size:16,className:"text-emerald-400"}):d.jsx(Pw,{size:16})})]}),o&&d.jsx("span",{className:"text-[10px] font-mono text-emerald-400 mt-1 block",children:"Copied to clipboard!"})]}),d.jsxs("div",{className:"p-6 rounded-2xl bg-slate-950/70 border border-slate-800",children:[d.jsx("span",{className:"font-mono text-xs text-slate-400 uppercase tracking-wider block mb-2",children:"CAMPUS & HEADQUARTERS"}),d.jsx("div",{className:"font-orbitron font-bold text-sm text-white",children:"GL Bajaj Institute of Technology & Management"}),d.jsx("div",{className:"text-xs text-slate-400 font-light mt-1",children:"Knowledge Park III, Greater Noida, Uttar Pradesh, India (PIN 201306)"})]}),d.jsxs("div",{className:"p-6 rounded-2xl bg-slate-950/70 border border-slate-800",children:[d.jsx("span",{className:"font-mono text-xs text-slate-400 uppercase tracking-wider block mb-3",children:"COLLECTIVE PLATFORMS"}),d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsxs("a",{href:"https://github.com",target:"_blank",rel:"noreferrer",className:"flex-1 p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400 flex items-center justify-center gap-2 text-xs font-mono text-slate-300 hover:text-white transition-colors",children:[d.jsx(yc,{size:16}),d.jsx("span",{children:"GITHUB"})]}),d.jsxs("a",{href:"https://linkedin.com",target:"_blank",rel:"noreferrer",className:"flex-1 p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400 flex items-center justify-center gap-2 text-xs font-mono text-slate-300 hover:text-white transition-colors",children:[d.jsx(jg,{size:16}),d.jsx("span",{children:"LINKEDIN"})]})]})]})]})]}),d.jsxs("div",{className:"pt-10 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6",children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx(Sc,{size:32}),d.jsxs("div",{children:[d.jsx("span",{className:"font-orbitron font-black text-lg tracking-widest text-white",children:"APEX"}),d.jsx("span",{className:"font-mono text-[10px] text-slate-500 block",children:"BEYOND IDEAS. INTO INNOVATION."})]})]}),d.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400",children:[d.jsx("a",{href:"#home",className:"hover:text-cyan-400 transition-colors",children:"HOME"}),d.jsx("a",{href:"#who-we-are",className:"hover:text-cyan-400 transition-colors",children:"WHO WE ARE"}),d.jsx("a",{href:"#team",className:"hover:text-cyan-400 transition-colors",children:"TEAM"}),d.jsx("a",{href:"#achievements",className:"hover:text-cyan-400 transition-colors",children:"ACHIEVEMENTS"}),d.jsx("a",{href:"#creations",className:"hover:text-cyan-400 transition-colors",children:"CREATIONS"}),d.jsx("a",{href:"#journey",className:"hover:text-cyan-400 transition-colors",children:"JOURNEY"})]}),d.jsx("div",{className:"font-mono text-xs text-slate-500 text-center md:text-right",children:"© 2026 TEAM APEX • ALL RIGHTS RESERVED"})]})]})})}function Ab(){const[s,e]=rt.useState(!1),t=()=>{const r=nn.toggle();e(r)};return d.jsx("div",{className:"fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-3",children:d.jsxs("button",{onClick:t,className:`group relative flex items-center gap-3 px-4 py-2.5 rounded-full border backdrop-blur-xl transition-all duration-300 shadow-2xl ${s?"bg-cyan-950/40 border-cyan-500/50 text-cyan-300 shadow-cyan-500/20":"bg-slate-900/60 border-slate-700/60 text-slate-400 hover:text-slate-200 hover:border-slate-500"}`,title:s?"Mute Cyber Atmosphere":"Enable Cyber Atmosphere",children:[d.jsxs("span",{className:"relative flex h-2 w-2",children:[s&&d.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"}),d.jsx("span",{className:`relative inline-flex rounded-full h-2 w-2 ${s?"bg-cyan-400":"bg-slate-500"}`})]}),s?d.jsx(fc,{size:16}):d.jsx(hc,{size:16}),d.jsx("div",{className:"flex items-center gap-1 font-mono text-xs uppercase tracking-wider",children:d.jsx("span",{children:s?"ATMOSPHERE: LIVE":"AUDIO: MUTED"})}),s&&d.jsxs("div",{className:"flex items-end gap-0.5 h-3",children:[d.jsx("span",{className:"w-0.5 h-full bg-cyan-400 animate-pulse"}),d.jsx("span",{className:"w-0.5 h-2 bg-purple-400 animate-pulse delay-75"}),d.jsx("span",{className:"w-0.5 h-3.5 bg-cyan-300 animate-pulse delay-150"}),d.jsx("span",{className:"w-0.5 h-1.5 bg-purple-300 animate-pulse delay-200"})]})]})})}function Rb(){const[s,e]=rt.useState("corridor"),t=()=>{nn.playChime(700,.25),e(r=>r==="corridor"?"overview":"corridor")};return d.jsxs("div",{className:"relative min-h-screen bg-[#02040a] text-slate-100 font-space selection:bg-cyan-400 selection:text-slate-950 overflow-x-hidden",children:[d.jsx(Ov,{}),d.jsx("div",{className:"fixed top-20 right-6 z-50 flex items-center gap-2",children:d.jsx("button",{onClick:t,"data-cursor":"pointer",className:"group flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-amber-500/50 text-amber-300 font-mono text-xs tracking-wider backdrop-blur-xl shadow-[0_0_20px_rgba(255,152,0,0.3)] transition-all",children:s==="corridor"?d.jsxs(d.Fragment,{children:[d.jsx(Wf,{size:14,className:"text-cyan-400"}),d.jsx("span",{children:"SWITCH TO OVERVIEW FEED"})]}):d.jsxs(d.Fragment,{children:[d.jsx(Gg,{size:14,className:"text-amber-400 animate-spin",style:{animationDuration:"8s"}}),d.jsx("span",{children:"ENTER 3D CORRIDOR EXPERIENCE"})]})})}),s==="corridor"?d.jsxs("div",{className:"relative w-full",children:[d.jsx(pb,{}),d.jsxs("section",{className:"relative z-10 bg-[#030612] py-20 px-6 border-t border-slate-800 text-center flex flex-col items-center",children:[d.jsx("span",{className:"font-mono text-xs text-cyan-400 tracking-widest uppercase mb-2",children:"// ARCHIVAL RECORD SYSTEM"}),d.jsx("h2",{className:"font-orbitron font-extrabold text-3xl sm:text-4xl text-white mb-6",children:"EXPLORE FULL DOSSIERS & DOCUMENTATION"}),d.jsx("button",{onClick:()=>e("overview"),"data-cursor":"pointer",className:"px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 text-slate-950 font-mono font-bold text-xs tracking-widest uppercase shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:scale-105 transition-all",children:"BROWSE TEAM & PROJECT ARCHIVES"})]}),d.jsx(P0,{}),d.jsx(L0,{}),d.jsx(U0,{}),d.jsx(F0,{}),d.jsx(B0,{}),d.jsx(z0,{}),d.jsx(G0,{})]}):d.jsxs("div",{className:"relative",children:[d.jsx(mb,{}),d.jsx(gb,{}),d.jsxs("main",{className:"relative z-10 flex flex-col",children:[d.jsx(xb,{}),d.jsx(_b,{}),d.jsx(P0,{}),d.jsx(L0,{}),d.jsx(U0,{}),d.jsx(F0,{}),d.jsx(B0,{}),d.jsx(z0,{}),d.jsx(G0,{})]})]}),d.jsx(Ab,{})]})}Uv.createRoot(document.getElementById("root")).render(d.jsx(Rv.StrictMode,{children:d.jsx(Rb,{})}));
