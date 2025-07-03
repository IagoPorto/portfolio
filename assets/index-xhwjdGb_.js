(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Xv(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Kf={exports:{}},To={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __;function RS(){if(__)return To;__=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:h,ref:l!==void 0?l:null,props:c}}return To.Fragment=t,To.jsx=i,To.jsxs=i,To}var v_;function wS(){return v_||(v_=1,Kf.exports=RS()),Kf.exports}var Bt=wS(),Qf={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_;function CS(){if(x_)return re;x_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function v(U){return U===null||typeof U!="object"?null:(U=_&&U[_]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,A={};function M(U,$,vt){this.props=U,this.context=$,this.refs=A,this.updater=vt||y}M.prototype.isReactComponent={},M.prototype.setState=function(U,$){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,$,"setState")},M.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function x(){}x.prototype=M.prototype;function P(U,$,vt){this.props=U,this.context=$,this.refs=A,this.updater=vt||y}var N=P.prototype=new x;N.constructor=P,E(N,M.prototype),N.isPureReactComponent=!0;var C=Array.isArray,H={H:null,A:null,T:null,S:null,V:null},z=Object.prototype.hasOwnProperty;function B(U,$,vt,St,Q,pt){return vt=pt.ref,{$$typeof:s,type:U,key:$,ref:vt!==void 0?vt:null,props:pt}}function W(U,$){return B(U.type,$,void 0,void 0,void 0,U.props)}function D(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function w(U){var $={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(vt){return $[vt]})}var V=/\/+/g;function lt(U,$){return typeof U=="object"&&U!==null&&U.key!=null?w(""+U.key):$.toString(36)}function st(){}function _t(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(st,st):(U.status="pending",U.then(function($){U.status==="pending"&&(U.status="fulfilled",U.value=$)},function($){U.status==="pending"&&(U.status="rejected",U.reason=$)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function ht(U,$,vt,St,Q){var pt=typeof U;(pt==="undefined"||pt==="boolean")&&(U=null);var yt=!1;if(U===null)yt=!0;else switch(pt){case"bigint":case"string":case"number":yt=!0;break;case"object":switch(U.$$typeof){case s:case t:yt=!0;break;case g:return yt=U._init,ht(yt(U._payload),$,vt,St,Q)}}if(yt)return Q=Q(U),yt=St===""?"."+lt(U,0):St,C(Q)?(vt="",yt!=null&&(vt=yt.replace(V,"$&/")+"/"),ht(Q,$,vt,"",function(oe){return oe})):Q!=null&&(D(Q)&&(Q=W(Q,vt+(Q.key==null||U&&U.key===Q.key?"":(""+Q.key).replace(V,"$&/")+"/")+yt)),$.push(Q)),1;yt=0;var At=St===""?".":St+":";if(C(U))for(var wt=0;wt<U.length;wt++)St=U[wt],pt=At+lt(St,wt),yt+=ht(St,$,vt,pt,Q);else if(wt=v(U),typeof wt=="function")for(U=wt.call(U),wt=0;!(St=U.next()).done;)St=St.value,pt=At+lt(St,wt++),yt+=ht(St,$,vt,pt,Q);else if(pt==="object"){if(typeof U.then=="function")return ht(_t(U),$,vt,St,Q);throw $=String(U),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return yt}function I(U,$,vt){if(U==null)return U;var St=[],Q=0;return ht(U,St,"","",function(pt){return $.call(vt,pt,Q++)}),St}function Z(U){if(U._status===-1){var $=U._result;$=$(),$.then(function(vt){(U._status===0||U._status===-1)&&(U._status=1,U._result=vt)},function(vt){(U._status===0||U._status===-1)&&(U._status=2,U._result=vt)}),U._status===-1&&(U._status=0,U._result=$)}if(U._status===1)return U._result.default;throw U._result}var Y=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function Mt(){}return re.Children={map:I,forEach:function(U,$,vt){I(U,function(){$.apply(this,arguments)},vt)},count:function(U){var $=0;return I(U,function(){$++}),$},toArray:function(U){return I(U,function($){return $})||[]},only:function(U){if(!D(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},re.Component=M,re.Fragment=i,re.Profiler=l,re.PureComponent=P,re.StrictMode=r,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,re.__COMPILER_RUNTIME={__proto__:null,c:function(U){return H.H.useMemoCache(U)}},re.cache=function(U){return function(){return U.apply(null,arguments)}},re.cloneElement=function(U,$,vt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var St=E({},U.props),Q=U.key,pt=void 0;if($!=null)for(yt in $.ref!==void 0&&(pt=void 0),$.key!==void 0&&(Q=""+$.key),$)!z.call($,yt)||yt==="key"||yt==="__self"||yt==="__source"||yt==="ref"&&$.ref===void 0||(St[yt]=$[yt]);var yt=arguments.length-2;if(yt===1)St.children=vt;else if(1<yt){for(var At=Array(yt),wt=0;wt<yt;wt++)At[wt]=arguments[wt+2];St.children=At}return B(U.type,Q,void 0,void 0,pt,St)},re.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},re.createElement=function(U,$,vt){var St,Q={},pt=null;if($!=null)for(St in $.key!==void 0&&(pt=""+$.key),$)z.call($,St)&&St!=="key"&&St!=="__self"&&St!=="__source"&&(Q[St]=$[St]);var yt=arguments.length-2;if(yt===1)Q.children=vt;else if(1<yt){for(var At=Array(yt),wt=0;wt<yt;wt++)At[wt]=arguments[wt+2];Q.children=At}if(U&&U.defaultProps)for(St in yt=U.defaultProps,yt)Q[St]===void 0&&(Q[St]=yt[St]);return B(U,pt,void 0,void 0,null,Q)},re.createRef=function(){return{current:null}},re.forwardRef=function(U){return{$$typeof:d,render:U}},re.isValidElement=D,re.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:Z}},re.memo=function(U,$){return{$$typeof:p,type:U,compare:$===void 0?null:$}},re.startTransition=function(U){var $=H.T,vt={};H.T=vt;try{var St=U(),Q=H.S;Q!==null&&Q(vt,St),typeof St=="object"&&St!==null&&typeof St.then=="function"&&St.then(Mt,Y)}catch(pt){Y(pt)}finally{H.T=$}},re.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},re.use=function(U){return H.H.use(U)},re.useActionState=function(U,$,vt){return H.H.useActionState(U,$,vt)},re.useCallback=function(U,$){return H.H.useCallback(U,$)},re.useContext=function(U){return H.H.useContext(U)},re.useDebugValue=function(){},re.useDeferredValue=function(U,$){return H.H.useDeferredValue(U,$)},re.useEffect=function(U,$,vt){var St=H.H;if(typeof vt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return St.useEffect(U,$)},re.useId=function(){return H.H.useId()},re.useImperativeHandle=function(U,$,vt){return H.H.useImperativeHandle(U,$,vt)},re.useInsertionEffect=function(U,$){return H.H.useInsertionEffect(U,$)},re.useLayoutEffect=function(U,$){return H.H.useLayoutEffect(U,$)},re.useMemo=function(U,$){return H.H.useMemo(U,$)},re.useOptimistic=function(U,$){return H.H.useOptimistic(U,$)},re.useReducer=function(U,$,vt){return H.H.useReducer(U,$,vt)},re.useRef=function(U){return H.H.useRef(U)},re.useState=function(U){return H.H.useState(U)},re.useSyncExternalStore=function(U,$,vt){return H.H.useSyncExternalStore(U,$,vt)},re.useTransition=function(){return H.H.useTransition()},re.version="19.1.0",re}var S_;function Dd(){return S_||(S_=1,Qf.exports=CS()),Qf.exports}var Vn=Dd();const Er=Xv(Vn);var Jf={exports:{}},bo={},$f={exports:{}},th={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y_;function DS(){return y_||(y_=1,function(s){function t(I,Z){var Y=I.length;I.push(Z);t:for(;0<Y;){var Mt=Y-1>>>1,U=I[Mt];if(0<l(U,Z))I[Mt]=Z,I[Y]=U,Y=Mt;else break t}}function i(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var Z=I[0],Y=I.pop();if(Y!==Z){I[0]=Y;t:for(var Mt=0,U=I.length,$=U>>>1;Mt<$;){var vt=2*(Mt+1)-1,St=I[vt],Q=vt+1,pt=I[Q];if(0>l(St,Y))Q<U&&0>l(pt,St)?(I[Mt]=pt,I[Q]=Y,Mt=Q):(I[Mt]=St,I[vt]=Y,Mt=vt);else if(Q<U&&0>l(pt,Y))I[Mt]=pt,I[Q]=Y,Mt=Q;else break t}}return Z}function l(I,Z){var Y=I.sortIndex-Z.sortIndex;return Y!==0?Y:I.id-Z.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,_=null,v=3,y=!1,E=!1,A=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function C(I){for(var Z=i(p);Z!==null;){if(Z.callback===null)r(p);else if(Z.startTime<=I)r(p),Z.sortIndex=Z.expirationTime,t(m,Z);else break;Z=i(p)}}function H(I){if(A=!1,C(I),!E)if(i(m)!==null)E=!0,z||(z=!0,lt());else{var Z=i(p);Z!==null&&ht(H,Z.startTime-I)}}var z=!1,B=-1,W=5,D=-1;function w(){return M?!0:!(s.unstable_now()-D<W)}function V(){if(M=!1,z){var I=s.unstable_now();D=I;var Z=!0;try{t:{E=!1,A&&(A=!1,P(B),B=-1),y=!0;var Y=v;try{e:{for(C(I),_=i(m);_!==null&&!(_.expirationTime>I&&w());){var Mt=_.callback;if(typeof Mt=="function"){_.callback=null,v=_.priorityLevel;var U=Mt(_.expirationTime<=I);if(I=s.unstable_now(),typeof U=="function"){_.callback=U,C(I),Z=!0;break e}_===i(m)&&r(m),C(I)}else r(m);_=i(m)}if(_!==null)Z=!0;else{var $=i(p);$!==null&&ht(H,$.startTime-I),Z=!1}}break t}finally{_=null,v=Y,y=!1}Z=void 0}}finally{Z?lt():z=!1}}}var lt;if(typeof N=="function")lt=function(){N(V)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,_t=st.port2;st.port1.onmessage=V,lt=function(){_t.postMessage(null)}}else lt=function(){x(V,0)};function ht(I,Z){B=x(function(){I(s.unstable_now())},Z)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(I){I.callback=null},s.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<I?Math.floor(1e3/I):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(I){switch(v){case 1:case 2:case 3:var Z=3;break;default:Z=v}var Y=v;v=Z;try{return I()}finally{v=Y}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(I,Z){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Y=v;v=I;try{return Z()}finally{v=Y}},s.unstable_scheduleCallback=function(I,Z,Y){var Mt=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?Mt+Y:Mt):Y=Mt,I){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=Y+U,I={id:g++,callback:Z,priorityLevel:I,startTime:Y,expirationTime:U,sortIndex:-1},Y>Mt?(I.sortIndex=Y,t(p,I),i(m)===null&&I===i(p)&&(A?(P(B),B=-1):A=!0,ht(H,Y-Mt))):(I.sortIndex=U,t(m,I),E||y||(E=!0,z||(z=!0,lt()))),I},s.unstable_shouldYield=w,s.unstable_wrapCallback=function(I){var Z=v;return function(){var Y=v;v=Z;try{return I.apply(this,arguments)}finally{v=Y}}}}(th)),th}var M_;function US(){return M_||(M_=1,$f.exports=DS()),$f.exports}var eh={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E_;function LS(){if(E_)return wn;E_=1;var s=Dd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,wn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},wn.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},wn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:y}):g==="script"&&r.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},wn.requestFormReset=function(m){r.d.r(m)},wn.unstable_batchedUpdates=function(m,p){return m(p)},wn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},wn.useFormStatus=function(){return h.H.useHostTransitionStatus()},wn.version="19.1.0",wn}var T_;function NS(){if(T_)return eh.exports;T_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),eh.exports=LS(),eh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b_;function OS(){if(b_)return bo;b_=1;var s=US(),t=Dd(),i=NS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(c(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return d(u),e;if(f===o)return d(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=f;else{for(var S=!1,b=u.child;b;){if(b===a){S=!0,a=u,o=f;break}if(b===o){S=!0,o=u,a=f;break}b=b.sibling}if(!S){for(b=f.child;b;){if(b===a){S=!0,a=f,o=u;break}if(b===o){S=!0,o=f,a=u;break}b=b.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),P=Symbol.for("react.consumer"),N=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function lt(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var st=Symbol.for("react.client.reference");function _t(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===st?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case M:return"Profiler";case A:return"StrictMode";case H:return"Suspense";case z:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case y:return"Portal";case N:return(e.displayName||"Context")+".Provider";case P:return(e._context.displayName||"Context")+".Consumer";case C:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return n=e.displayName||null,n!==null?n:_t(e.type)||"Memo";case W:n=e._payload,e=e._init;try{return _t(e(n))}catch{}}return null}var ht=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},Mt=[],U=-1;function $(e){return{current:e}}function vt(e){0>U||(e.current=Mt[U],Mt[U]=null,U--)}function St(e,n){U++,Mt[U]=e.current,e.current=n}var Q=$(null),pt=$(null),yt=$(null),At=$(null);function wt(e,n){switch(St(yt,n),St(pt,e),St(Q,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Wg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Wg(n),e=qg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}vt(Q),St(Q,e)}function oe(){vt(Q),vt(pt),vt(yt)}function Qt(e){e.memoizedState!==null&&St(At,e);var n=Q.current,a=qg(n,e.type);n!==a&&(St(pt,e),St(Q,a))}function Ne(e){pt.current===e&&(vt(Q),vt(pt)),At.current===e&&(vt(At),xo._currentValue=Y)}var Fe=Object.prototype.hasOwnProperty,_e=s.unstable_scheduleCallback,F=s.unstable_cancelCallback,Sn=s.unstable_shouldYield,Te=s.unstable_requestPaint,pe=s.unstable_now,Vt=s.unstable_getCurrentPriorityLevel,ve=s.unstable_ImmediatePriority,jt=s.unstable_UserBlockingPriority,ae=s.unstable_NormalPriority,Qe=s.unstable_LowPriority,L=s.unstable_IdlePriority,T=s.log,et=s.unstable_setDisableYieldValue,ut=null,dt=null;function ot(e){if(typeof T=="function"&&et(e),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(ut,e)}catch{}}var Ot=Math.clz32?Math.clz32:kt,Dt=Math.log,Gt=Math.LN2;function kt(e){return e>>>=0,e===0?32:31-(Dt(e)/Gt|0)|0}var xt=256,Pt=4194304;function qt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Yt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var b=o&134217727;return b!==0?(o=b&~f,o!==0?u=qt(o):(S&=b,S!==0?u=qt(S):a||(a=b&~e,a!==0&&(u=qt(a))))):(b=o&~f,b!==0?u=qt(b):S!==0?u=qt(S):a||(a=o&~e,a!==0&&(u=qt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Rt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ie(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var e=xt;return xt<<=1,(xt&4194048)===0&&(xt=256),e}function Ut(){var e=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),e}function Et(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function It(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function bt(e,n,a,o,u,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,O=e.expirationTimes,J=e.hiddenUpdates;for(a=S&~a;0<a;){var ct=31-Ot(a),mt=1<<ct;b[ct]=0,O[ct]=-1;var nt=J[ct];if(nt!==null)for(J[ct]=null,ct=0;ct<nt.length;ct++){var it=nt[ct];it!==null&&(it.lane&=-536870913)}a&=~mt}o!==0&&gt(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function gt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Ot(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function Ft(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Ot(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function ne(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function De(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function be(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:f_(e.type))}function Xn(e,n){var a=Z.p;try{return Z.p=e,n()}finally{Z.p=a}}var fn=Math.random().toString(36).slice(2),rn="__reactFiber$"+fn,yn="__reactProps$"+fn,Pn="__reactContainer$"+fn,qa="__reactEvents$"+fn,qo="__reactListeners$"+fn,Yo="__reactHandles$"+fn,Ya="__reactResources$"+fn,ua="__reactMarker$"+fn;function fa(e){delete e[rn],delete e[yn],delete e[qa],delete e[qo],delete e[Yo]}function Ni(e){var n=e[rn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Pn]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Kg(e);e!==null;){if(a=e[rn])return a;e=Kg(e)}return n}e=a,a=e.parentNode}return null}function Oi(e){if(e=e[rn]||e[Pn]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function ja(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ha(e){var n=e[Ya];return n||(n=e[Ya]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function tn(e){e[ua]=!0}var jo=new Set,Zo={};function Pi(e,n){R(e,n),R(e+"Capture",n)}function R(e,n){for(Zo[e]=n,e=0;e<n.length;e++)jo.add(n[e])}var q=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),at={},rt={};function j(e){return Fe.call(rt,e)?!0:Fe.call(at,e)?!1:q.test(e)?rt[e]=!0:(at[e]=!0,!1)}function Tt(e,n,a){if(j(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ct(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Nt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var zt,te;function Kt(e){if(zt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);zt=n&&n[1]||"",te=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+zt+e+te}var Xt=!1;function le(e,n){if(!e||Xt)return"";Xt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(it){var nt=it}Reflect.construct(e,[],mt)}else{try{mt.call()}catch(it){nt=it}e.call(mt.prototype)}}else{try{throw Error()}catch(it){nt=it}(mt=e())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(it){if(it&&nt&&typeof it.stack=="string")return[it.stack,nt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),S=f[0],b=f[1];if(S&&b){var O=S.split(`
`),J=b.split(`
`);for(u=o=0;o<O.length&&!O[o].includes("DetermineComponentFrameRoot");)o++;for(;u<J.length&&!J[u].includes("DetermineComponentFrameRoot");)u++;if(o===O.length||u===J.length)for(o=O.length-1,u=J.length-1;1<=o&&0<=u&&O[o]!==J[u];)u--;for(;1<=o&&0<=u;o--,u--)if(O[o]!==J[u]){if(o!==1||u!==1)do if(o--,u--,0>u||O[o]!==J[u]){var ct=`
`+O[o].replace(" at new "," at ");return e.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",e.displayName)),ct}while(1<=o&&0<=u);break}}}finally{Xt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Kt(a):""}function we(e){switch(e.tag){case 26:case 27:case 5:return Kt(e.type);case 16:return Kt("Lazy");case 13:return Kt("Suspense");case 19:return Kt("SuspenseList");case 0:case 15:return le(e.type,!1);case 11:return le(e.type.render,!1);case 1:return le(e.type,!0);case 31:return Kt("Activity");default:return""}}function Xe(e){try{var n="";do n+=we(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function he(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ce(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Zt(e){var n=Ce(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){o=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(S){o=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Oe(e){e._valueTracker||(e._valueTracker=Zt(e))}function xe(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Ce(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function hn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var da=/[\n"\\]/g;function Ve(e){return e.replace(da,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ii(e,n,a,o,u,f,S,b){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+he(n)):e.value!==""+he(n)&&(e.value=""+he(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?An(e,S,he(n)):a!=null?An(e,S,he(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+he(b):e.removeAttribute("name")}function He(e,n,a,o,u,f,S,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+he(a):"",n=n!=null?""+he(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=b?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function An(e,n,a){n==="number"&&hn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function sn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+he(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function dn(e,n,a){if(n!=null&&(n=""+he(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+he(a):""}function Mn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ht(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=he(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Mi(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var zi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Wd(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||zi.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function qd(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Wd(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Wd(e,f,n[f])}function jc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var b0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),A0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ko(e){return A0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Zc=null;function Kc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Rr=null,wr=null;function Yd(e){var n=Oi(e);if(n&&(e=n.stateNode)){var a=e[yn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ii(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ve(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[yn]||null;if(!u)throw Error(r(90));Ii(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&xe(o)}break t;case"textarea":dn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&sn(e,!!a.multiple,n,!1)}}}var Qc=!1;function jd(e,n,a){if(Qc)return e(n,a);Qc=!0;try{var o=e(n);return o}finally{if(Qc=!1,(Rr!==null||wr!==null)&&(Pl(),Rr&&(n=Rr,e=wr,wr=Rr=null,Yd(n),e)))for(n=0;n<e.length;n++)Yd(e[n])}}function Us(e,n){var a=e.stateNode;if(a===null)return null;var o=a[yn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jc=!1;if(Bi)try{var Ls={};Object.defineProperty(Ls,"passive",{get:function(){Jc=!0}}),window.addEventListener("test",Ls,Ls),window.removeEventListener("test",Ls,Ls)}catch{Jc=!1}var pa=null,$c=null,Qo=null;function Zd(){if(Qo)return Qo;var e,n=$c,a=n.length,o,u="value"in pa?pa.value:pa.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===u[f-o];o++);return Qo=u.slice(e,1<o?1-o:void 0)}function Jo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function $o(){return!0}function Kd(){return!1}function In(e){function n(a,o,u,f,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?$o:Kd,this.isPropagationStopped=Kd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=$o)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=$o)},persist:function(){},isPersistent:$o}),n}var Za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tl=In(Za),Ns=g({},Za,{view:0,detail:0}),R0=In(Ns),tu,eu,Os,el=g({},Ns,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:iu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Os&&(Os&&e.type==="mousemove"?(tu=e.screenX-Os.screenX,eu=e.screenY-Os.screenY):eu=tu=0,Os=e),tu)},movementY:function(e){return"movementY"in e?e.movementY:eu}}),Qd=In(el),w0=g({},el,{dataTransfer:0}),C0=In(w0),D0=g({},Ns,{relatedTarget:0}),nu=In(D0),U0=g({},Za,{animationName:0,elapsedTime:0,pseudoElement:0}),L0=In(U0),N0=g({},Za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),O0=In(N0),P0=g({},Za,{data:0}),Jd=In(P0),I0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},z0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function F0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=B0[e])?!!n[e]:!1}function iu(){return F0}var H0=g({},Ns,{key:function(e){if(e.key){var n=I0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Jo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?z0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:iu,charCode:function(e){return e.type==="keypress"?Jo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),G0=In(H0),V0=g({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$d=In(V0),k0=g({},Ns,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:iu}),X0=In(k0),W0=g({},Za,{propertyName:0,elapsedTime:0,pseudoElement:0}),q0=In(W0),Y0=g({},el,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),j0=In(Y0),Z0=g({},Za,{newState:0,oldState:0}),K0=In(Z0),Q0=[9,13,27,32],au=Bi&&"CompositionEvent"in window,Ps=null;Bi&&"documentMode"in document&&(Ps=document.documentMode);var J0=Bi&&"TextEvent"in window&&!Ps,tp=Bi&&(!au||Ps&&8<Ps&&11>=Ps),ep=" ",np=!1;function ip(e,n){switch(e){case"keyup":return Q0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ap(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cr=!1;function $0(e,n){switch(e){case"compositionend":return ap(n);case"keypress":return n.which!==32?null:(np=!0,ep);case"textInput":return e=n.data,e===ep&&np?null:e;default:return null}}function tx(e,n){if(Cr)return e==="compositionend"||!au&&ip(e,n)?(e=Zd(),Qo=$c=pa=null,Cr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return tp&&n.locale!=="ko"?null:n.data;default:return null}}var ex={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ex[e.type]:n==="textarea"}function sp(e,n,a,o){Rr?wr?wr.push(o):wr=[o]:Rr=o,n=Gl(n,"onChange"),0<n.length&&(a=new tl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Is=null,zs=null;function nx(e){Hg(e,0)}function nl(e){var n=ja(e);if(xe(n))return e}function op(e,n){if(e==="change")return n}var lp=!1;if(Bi){var ru;if(Bi){var su="oninput"in document;if(!su){var cp=document.createElement("div");cp.setAttribute("oninput","return;"),su=typeof cp.oninput=="function"}ru=su}else ru=!1;lp=ru&&(!document.documentMode||9<document.documentMode)}function up(){Is&&(Is.detachEvent("onpropertychange",fp),zs=Is=null)}function fp(e){if(e.propertyName==="value"&&nl(zs)){var n=[];sp(n,zs,e,Kc(e)),jd(nx,n)}}function ix(e,n,a){e==="focusin"?(up(),Is=n,zs=a,Is.attachEvent("onpropertychange",fp)):e==="focusout"&&up()}function ax(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return nl(zs)}function rx(e,n){if(e==="click")return nl(n)}function sx(e,n){if(e==="input"||e==="change")return nl(n)}function ox(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Wn=typeof Object.is=="function"?Object.is:ox;function Bs(e,n){if(Wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Fe.call(n,u)||!Wn(e[u],n[u]))return!1}return!0}function hp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dp(e,n){var a=hp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=hp(a)}}function pp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?pp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function mp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=hn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=hn(e.document)}return n}function ou(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var lx=Bi&&"documentMode"in document&&11>=document.documentMode,Dr=null,lu=null,Fs=null,cu=!1;function gp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;cu||Dr==null||Dr!==hn(o)||(o=Dr,"selectionStart"in o&&ou(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Fs&&Bs(Fs,o)||(Fs=o,o=Gl(lu,"onSelect"),0<o.length&&(n=new tl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Dr)))}function Ka(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ur={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionrun:Ka("Transition","TransitionRun"),transitionstart:Ka("Transition","TransitionStart"),transitioncancel:Ka("Transition","TransitionCancel"),transitionend:Ka("Transition","TransitionEnd")},uu={},_p={};Bi&&(_p=document.createElement("div").style,"AnimationEvent"in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),"TransitionEvent"in window||delete Ur.transitionend.transition);function Qa(e){if(uu[e])return uu[e];if(!Ur[e])return e;var n=Ur[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in _p)return uu[e]=n[a];return e}var vp=Qa("animationend"),xp=Qa("animationiteration"),Sp=Qa("animationstart"),cx=Qa("transitionrun"),ux=Qa("transitionstart"),fx=Qa("transitioncancel"),yp=Qa("transitionend"),Mp=new Map,fu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");fu.push("scrollEnd");function ui(e,n){Mp.set(e,n),Pi(n,[e])}var Ep=new WeakMap;function ti(e,n){if(typeof e=="object"&&e!==null){var a=Ep.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Xe(n)},Ep.set(e,n),n)}return{value:e,source:n,stack:Xe(n)}}var ei=[],Lr=0,hu=0;function il(){for(var e=Lr,n=hu=Lr=0;n<e;){var a=ei[n];ei[n++]=null;var o=ei[n];ei[n++]=null;var u=ei[n];ei[n++]=null;var f=ei[n];if(ei[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}f!==0&&Tp(a,u,f)}}function al(e,n,a,o){ei[Lr++]=e,ei[Lr++]=n,ei[Lr++]=a,ei[Lr++]=o,hu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function du(e,n,a,o){return al(e,n,a,o),rl(e)}function Nr(e,n){return al(e,null,null,n),rl(e)}function Tp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Ot(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function rl(e){if(50<uo)throw uo=0,Sf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Or={};function hx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(e,n,a,o){return new hx(e,n,a,o)}function pu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fi(e,n){var a=e.alternate;return a===null?(a=qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function bp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function sl(e,n,a,o,u,f){var S=0;if(o=e,typeof e=="function")pu(e)&&(S=1);else if(typeof e=="string")S=pS(e,a,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=qn(31,a,n,u),e.elementType=D,e.lanes=f,e;case E:return Ja(a.children,u,f,n);case A:S=8,u|=24;break;case M:return e=qn(12,a,n,u|2),e.elementType=M,e.lanes=f,e;case H:return e=qn(13,a,n,u),e.elementType=H,e.lanes=f,e;case z:return e=qn(19,a,n,u),e.elementType=z,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case x:case N:S=10;break t;case P:S=9;break t;case C:S=11;break t;case B:S=14;break t;case W:S=16,o=null;break t}S=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=qn(S,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function Ja(e,n,a,o){return e=qn(7,e,o,n),e.lanes=a,e}function mu(e,n,a){return e=qn(6,e,null,n),e.lanes=a,e}function gu(e,n,a){return n=qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Pr=[],Ir=0,ol=null,ll=0,ni=[],ii=0,$a=null,Hi=1,Gi="";function tr(e,n){Pr[Ir++]=ll,Pr[Ir++]=ol,ol=e,ll=n}function Ap(e,n,a){ni[ii++]=Hi,ni[ii++]=Gi,ni[ii++]=$a,$a=e;var o=Hi;e=Gi;var u=32-Ot(o)-1;o&=~(1<<u),a+=1;var f=32-Ot(n)+u;if(30<f){var S=u-u%5;f=(o&(1<<S)-1).toString(32),o>>=S,u-=S,Hi=1<<32-Ot(n)+u|a<<u|o,Gi=f+e}else Hi=1<<f|a<<u|o,Gi=e}function _u(e){e.return!==null&&(tr(e,1),Ap(e,1,0))}function vu(e){for(;e===ol;)ol=Pr[--Ir],Pr[Ir]=null,ll=Pr[--Ir],Pr[Ir]=null;for(;e===$a;)$a=ni[--ii],ni[ii]=null,Gi=ni[--ii],ni[ii]=null,Hi=ni[--ii],ni[ii]=null}var Un=null,je=null,Re=!1,er=null,Ei=!1,xu=Error(r(519));function nr(e){var n=Error(r(418,""));throw Vs(ti(n,e)),xu}function Rp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[rn]=e,n[yn]=o,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<ho.length;a++)ge(ho[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),He(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Oe(n);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),Mn(n,o.value,o.defaultValue,o.children),Oe(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Xg(n.textContent,a)?(o.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),o.onScroll!=null&&ge("scroll",n),o.onScrollEnd!=null&&ge("scrollend",n),o.onClick!=null&&(n.onclick=Vl),n=!0):n=!1,n||nr(e)}function wp(e){for(Un=e.return;Un;)switch(Un.tag){case 5:case 13:Ei=!1;return;case 27:case 3:Ei=!0;return;default:Un=Un.return}}function Hs(e){if(e!==Un)return!1;if(!Re)return wp(e),Re=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||If(e.type,e.memoizedProps)),a=!a),a&&je&&nr(e),wp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){je=hi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}je=null}}else n===27?(n=je,Da(e.type)?(e=Hf,Hf=null,je=e):je=n):je=Un?hi(e.stateNode.nextSibling):null;return!0}function Gs(){je=Un=null,Re=!1}function Cp(){var e=er;return e!==null&&(Fn===null?Fn=e:Fn.push.apply(Fn,e),er=null),e}function Vs(e){er===null?er=[e]:er.push(e)}var Su=$(null),ir=null,Vi=null;function ma(e,n,a){St(Su,n._currentValue),n._currentValue=a}function ki(e){e._currentValue=Su.current,vt(Su)}function yu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Mu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var S=u.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=u;for(var O=0;O<n.length;O++)if(b.context===n[O]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),yu(f.return,a,e),o||(S=null);break t}f=b.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),yu(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function ks(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var b=u.type;Wn(u.pendingProps.value,S.value)||(e!==null?e.push(b):e=[b])}}else if(u===At.current){if(S=u.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(xo):e=[xo])}u=u.return}e!==null&&Mu(n,e,a,o),n.flags|=262144}function cl(e){for(e=e.firstContext;e!==null;){if(!Wn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ar(e){ir=e,Vi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Rn(e){return Dp(ir,e)}function ul(e,n){return ir===null&&ar(e),Dp(e,n)}function Dp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Vi===null){if(e===null)throw Error(r(308));Vi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Vi=Vi.next=n;return a}var dx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},px=s.unstable_scheduleCallback,mx=s.unstable_NormalPriority,on={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Eu(){return{controller:new dx,data:new Map,refCount:0}}function Xs(e){e.refCount--,e.refCount===0&&px(mx,function(){e.controller.abort()})}var Ws=null,Tu=0,zr=0,Br=null;function gx(e,n){if(Ws===null){var a=Ws=[];Tu=0,zr=Rf(),Br={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Tu++,n.then(Up,Up),n}function Up(){if(--Tu===0&&Ws!==null){Br!==null&&(Br.status="fulfilled");var e=Ws;Ws=null,zr=0,Br=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function _x(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Lp=I.S;I.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&gx(e,n),Lp!==null&&Lp(e,n)};var rr=$(null);function bu(){var e=rr.current;return e!==null?e:ke.pooledCache}function fl(e,n){n===null?St(rr,rr.current):St(rr,n.pool)}function Np(){var e=bu();return e===null?null:{parent:on._currentValue,pool:e}}var qs=Error(r(460)),Op=Error(r(474)),hl=Error(r(542)),Au={then:function(){}};function Pp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function dl(){}function Ip(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(dl,dl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Bp(e),e;default:if(typeof n.status=="string")n.then(dl,dl);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Bp(e),e}throw Ys=n,qs}}var Ys=null;function zp(){if(Ys===null)throw Error(r(459));var e=Ys;return Ys=null,e}function Bp(e){if(e===qs||e===hl)throw Error(r(483))}var ga=!1;function Ru(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _a(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function va(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ue&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=rl(e),Tp(e,null,a),n}return al(e,o,n,a),rl(e)}function js(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ft(e,a)}}function Cu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Du=!1;function Zs(){if(Du){var e=Br;if(e!==null)throw e}}function Ks(e,n,a,o){Du=!1;var u=e.updateQueue;ga=!1;var f=u.firstBaseUpdate,S=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var O=b,J=O.next;O.next=null,S===null?f=J:S.next=J,S=O;var ct=e.alternate;ct!==null&&(ct=ct.updateQueue,b=ct.lastBaseUpdate,b!==S&&(b===null?ct.firstBaseUpdate=J:b.next=J,ct.lastBaseUpdate=O))}if(f!==null){var mt=u.baseState;S=0,ct=J=O=null,b=f;do{var nt=b.lane&-536870913,it=nt!==b.lane;if(it?(Me&nt)===nt:(o&nt)===nt){nt!==0&&nt===zr&&(Du=!0),ct!==null&&(ct=ct.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var ee=e,Jt=b;nt=n;var ze=a;switch(Jt.tag){case 1:if(ee=Jt.payload,typeof ee=="function"){mt=ee.call(ze,mt,nt);break t}mt=ee;break t;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=Jt.payload,nt=typeof ee=="function"?ee.call(ze,mt,nt):ee,nt==null)break t;mt=g({},mt,nt);break t;case 2:ga=!0}}nt=b.callback,nt!==null&&(e.flags|=64,it&&(e.flags|=8192),it=u.callbacks,it===null?u.callbacks=[nt]:it.push(nt))}else it={lane:nt,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ct===null?(J=ct=it,O=mt):ct=ct.next=it,S|=nt;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;it=b,b=it.next,it.next=null,u.lastBaseUpdate=it,u.shared.pending=null}}while(!0);ct===null&&(O=mt),u.baseState=O,u.firstBaseUpdate=J,u.lastBaseUpdate=ct,f===null&&(u.shared.lanes=0),Aa|=S,e.lanes=S,e.memoizedState=mt}}function Fp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Hp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Fp(a[e],n)}var Fr=$(null),pl=$(0);function Gp(e,n){e=Ki,St(pl,e),St(Fr,n),Ki=e|n.baseLanes}function Uu(){St(pl,Ki),St(Fr,Fr.current)}function Lu(){Ki=pl.current,vt(Fr),vt(pl)}var xa=0,fe=null,Pe=null,en=null,ml=!1,Hr=!1,sr=!1,gl=0,Qs=0,Gr=null,vx=0;function Je(){throw Error(r(321))}function Nu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Wn(e[a],n[a]))return!1;return!0}function Ou(e,n,a,o,u,f){return xa=f,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=e===null||e.memoizedState===null?Tm:bm,sr=!1,f=a(o,u),sr=!1,Hr&&(f=kp(n,a,o,u)),Vp(e),f}function Vp(e){I.H=Ml;var n=Pe!==null&&Pe.next!==null;if(xa=0,en=Pe=fe=null,ml=!1,Qs=0,Gr=null,n)throw Error(r(300));e===null||pn||(e=e.dependencies,e!==null&&cl(e)&&(pn=!0))}function kp(e,n,a,o){fe=e;var u=0;do{if(Hr&&(Gr=null),Qs=0,Hr=!1,25<=u)throw Error(r(301));if(u+=1,en=Pe=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}I.H=bx,f=n(a,o)}while(Hr);return f}function xx(){var e=I.H,n=e.useState()[0];return n=typeof n.then=="function"?Js(n):n,e=e.useState()[0],(Pe!==null?Pe.memoizedState:null)!==e&&(fe.flags|=1024),n}function Pu(){var e=gl!==0;return gl=0,e}function Iu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function zu(e){if(ml){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}ml=!1}xa=0,en=Pe=fe=null,Hr=!1,Qs=gl=0,Gr=null}function zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?fe.memoizedState=en=e:en=en.next=e,en}function nn(){if(Pe===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var n=en===null?fe.memoizedState:en.next;if(n!==null)en=n,Pe=e;else{if(e===null)throw fe.alternate===null?Error(r(467)):Error(r(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},en===null?fe.memoizedState=en=e:en=en.next=e}return en}function Bu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Js(e){var n=Qs;return Qs+=1,Gr===null&&(Gr=[]),e=Ip(Gr,e,n),n=fe,(en===null?n.memoizedState:en.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?Tm:bm),e}function _l(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Js(e);if(e.$$typeof===N)return Rn(e)}throw Error(r(438,String(e)))}function Fu(e){var n=null,a=fe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=fe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Bu(),fe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=w;return n.index++,a}function Xi(e,n){return typeof n=="function"?n(e):n}function vl(e){var n=nn();return Hu(n,Pe,e)}function Hu(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var S=u.next;u.next=f.next,f.next=S}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var b=S=null,O=null,J=n,ct=!1;do{var mt=J.lane&-536870913;if(mt!==J.lane?(Me&mt)===mt:(xa&mt)===mt){var nt=J.revertLane;if(nt===0)O!==null&&(O=O.next={lane:0,revertLane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),mt===zr&&(ct=!0);else if((xa&nt)===nt){J=J.next,nt===zr&&(ct=!0);continue}else mt={lane:0,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},O===null?(b=O=mt,S=f):O=O.next=mt,fe.lanes|=nt,Aa|=nt;mt=J.action,sr&&a(f,mt),f=J.hasEagerState?J.eagerState:a(f,mt)}else nt={lane:mt,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},O===null?(b=O=nt,S=f):O=O.next=nt,fe.lanes|=mt,Aa|=mt;J=J.next}while(J!==null&&J!==n);if(O===null?S=f:O.next=b,!Wn(f,e.memoizedState)&&(pn=!0,ct&&(a=Br,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=O,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Gu(e){var n=nn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do f=e(f,S.action),S=S.next;while(S!==u);Wn(f,n.memoizedState)||(pn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Xp(e,n,a){var o=fe,u=nn(),f=Re;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Wn((Pe||u).memoizedState,a);S&&(u.memoizedState=a,pn=!0),u=u.queue;var b=Yp.bind(null,o,u,e);if($s(2048,8,b,[e]),u.getSnapshot!==n||S||en!==null&&en.memoizedState.tag&1){if(o.flags|=2048,Vr(9,xl(),qp.bind(null,o,u,a,n),null),ke===null)throw Error(r(349));f||(xa&124)!==0||Wp(o,n,a)}return a}function Wp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=fe.updateQueue,n===null?(n=Bu(),fe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function qp(e,n,a,o){n.value=a,n.getSnapshot=o,jp(n)&&Zp(e)}function Yp(e,n,a){return a(function(){jp(n)&&Zp(e)})}function jp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Wn(e,a)}catch{return!0}}function Zp(e){var n=Nr(e,2);n!==null&&Qn(n,e,2)}function Vu(e){var n=zn();if(typeof e=="function"){var a=e;if(e=a(),sr){ot(!0);try{a()}finally{ot(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:e},n}function Kp(e,n,a,o){return e.baseState=a,Hu(e,Pe,typeof o=="function"?o:Xi)}function Sx(e,n,a,o,u){if(yl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};I.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Qp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Qp(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=I.T,S={};I.T=S;try{var b=a(u,o),O=I.S;O!==null&&O(S,b),Jp(e,n,b)}catch(J){ku(e,n,J)}finally{I.T=f}}else try{f=a(u,o),Jp(e,n,f)}catch(J){ku(e,n,J)}}function Jp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){$p(e,n,o)},function(o){return ku(e,n,o)}):$p(e,n,a)}function $p(e,n,a){n.status="fulfilled",n.value=a,tm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Qp(e,a)))}function ku(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,tm(n),n=n.next;while(n!==o)}e.action=null}function tm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function em(e,n){return n}function nm(e,n){if(Re){var a=ke.formState;if(a!==null){t:{var o=fe;if(Re){if(je){e:{for(var u=je,f=Ei;u.nodeType!==8;){if(!f){u=null;break e}if(u=hi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){je=hi(u.nextSibling),o=u.data==="F!";break t}}nr(o)}o=!1}o&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:em,lastRenderedState:n},a.queue=o,a=ym.bind(null,fe,o),o.dispatch=a,o=Vu(!1),f=ju.bind(null,fe,!1,o.queue),o=zn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Sx.bind(null,fe,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function im(e){var n=nn();return am(n,Pe,e)}function am(e,n,a){if(n=Hu(e,n,em)[0],e=vl(Xi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Js(n)}catch(S){throw S===qs?hl:S}else o=n;n=nn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(fe.flags|=2048,Vr(9,xl(),yx.bind(null,u,a),null)),[o,f,e]}function yx(e,n){e.action=n}function rm(e){var n=nn(),a=Pe;if(a!==null)return am(n,a,e);nn(),n=n.memoizedState,a=nn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Vr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=fe.updateQueue,n===null&&(n=Bu(),fe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function xl(){return{destroy:void 0,resource:void 0}}function sm(){return nn().memoizedState}function Sl(e,n,a,o){var u=zn();o=o===void 0?null:o,fe.flags|=e,u.memoizedState=Vr(1|n,xl(),a,o)}function $s(e,n,a,o){var u=nn();o=o===void 0?null:o;var f=u.memoizedState.inst;Pe!==null&&o!==null&&Nu(o,Pe.memoizedState.deps)?u.memoizedState=Vr(n,f,a,o):(fe.flags|=e,u.memoizedState=Vr(1|n,f,a,o))}function om(e,n){Sl(8390656,8,e,n)}function lm(e,n){$s(2048,8,e,n)}function cm(e,n){return $s(4,2,e,n)}function um(e,n){return $s(4,4,e,n)}function fm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function hm(e,n,a){a=a!=null?a.concat([e]):null,$s(4,4,fm.bind(null,n,e),a)}function Xu(){}function dm(e,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Nu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function pm(e,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Nu(n,o[1]))return o[0];if(o=e(),sr){ot(!0);try{e()}finally{ot(!1)}}return a.memoizedState=[o,n],o}function Wu(e,n,a){return a===void 0||(xa&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=_g(),fe.lanes|=e,Aa|=e,a)}function mm(e,n,a,o){return Wn(a,n)?a:Fr.current!==null?(e=Wu(e,a,o),Wn(e,n)||(pn=!0),e):(xa&42)===0?(pn=!0,e.memoizedState=a):(e=_g(),fe.lanes|=e,Aa|=e,n)}function gm(e,n,a,o,u){var f=Z.p;Z.p=f!==0&&8>f?f:8;var S=I.T,b={};I.T=b,ju(e,!1,n,a);try{var O=u(),J=I.S;if(J!==null&&J(b,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var ct=_x(O,o);to(e,n,ct,Kn(e))}else to(e,n,o,Kn(e))}catch(mt){to(e,n,{then:function(){},status:"rejected",reason:mt},Kn())}finally{Z.p=f,I.T=S}}function Mx(){}function qu(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=_m(e).queue;gm(e,u,n,Y,a===null?Mx:function(){return vm(e),a(o)})}function _m(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function vm(e){var n=_m(e).next.queue;to(e,n,{},Kn())}function Yu(){return Rn(xo)}function xm(){return nn().memoizedState}function Sm(){return nn().memoizedState}function Ex(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Kn();e=_a(a);var o=va(n,e,a);o!==null&&(Qn(o,n,a),js(o,n,a)),n={cache:Eu()},e.payload=n;return}n=n.return}}function Tx(e,n,a){var o=Kn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},yl(e)?Mm(n,a):(a=du(e,n,a,o),a!==null&&(Qn(a,e,o),Em(a,n,o)))}function ym(e,n,a){var o=Kn();to(e,n,a,o)}function to(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(yl(e))Mm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,b=f(S,a);if(u.hasEagerState=!0,u.eagerState=b,Wn(b,S))return al(e,n,u,0),ke===null&&il(),!1}catch{}finally{}if(a=du(e,n,u,o),a!==null)return Qn(a,e,o),Em(a,n,o),!0}return!1}function ju(e,n,a,o){if(o={lane:2,revertLane:Rf(),action:o,hasEagerState:!1,eagerState:null,next:null},yl(e)){if(n)throw Error(r(479))}else n=du(e,a,o,2),n!==null&&Qn(n,e,2)}function yl(e){var n=e.alternate;return e===fe||n!==null&&n===fe}function Mm(e,n){Hr=ml=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Em(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ft(e,a)}}var Ml={readContext:Rn,use:_l,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je},Tm={readContext:Rn,use:_l,useCallback:function(e,n){return zn().memoizedState=[e,n===void 0?null:n],e},useContext:Rn,useEffect:om,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Sl(4194308,4,fm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Sl(4194308,4,e,n)},useInsertionEffect:function(e,n){Sl(4,2,e,n)},useMemo:function(e,n){var a=zn();n=n===void 0?null:n;var o=e();if(sr){ot(!0);try{e()}finally{ot(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=zn();if(a!==void 0){var u=a(n);if(sr){ot(!0);try{a(n)}finally{ot(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Tx.bind(null,fe,e),[o.memoizedState,e]},useRef:function(e){var n=zn();return e={current:e},n.memoizedState=e},useState:function(e){e=Vu(e);var n=e.queue,a=ym.bind(null,fe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Xu,useDeferredValue:function(e,n){var a=zn();return Wu(a,e,n)},useTransition:function(){var e=Vu(!1);return e=gm.bind(null,fe,e.queue,!0,!1),zn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=fe,u=zn();if(Re){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),ke===null)throw Error(r(349));(Me&124)!==0||Wp(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,om(Yp.bind(null,o,f,e),[e]),o.flags|=2048,Vr(9,xl(),qp.bind(null,o,f,a,n),null),a},useId:function(){var e=zn(),n=ke.identifierPrefix;if(Re){var a=Gi,o=Hi;a=(o&~(1<<32-Ot(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=gl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=vx++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Yu,useFormState:nm,useActionState:nm,useOptimistic:function(e){var n=zn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ju.bind(null,fe,!0,a),a.dispatch=n,[e,n]},useMemoCache:Fu,useCacheRefresh:function(){return zn().memoizedState=Ex.bind(null,fe)}},bm={readContext:Rn,use:_l,useCallback:dm,useContext:Rn,useEffect:lm,useImperativeHandle:hm,useInsertionEffect:cm,useLayoutEffect:um,useMemo:pm,useReducer:vl,useRef:sm,useState:function(){return vl(Xi)},useDebugValue:Xu,useDeferredValue:function(e,n){var a=nn();return mm(a,Pe.memoizedState,e,n)},useTransition:function(){var e=vl(Xi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:Js(e),n]},useSyncExternalStore:Xp,useId:xm,useHostTransitionStatus:Yu,useFormState:im,useActionState:im,useOptimistic:function(e,n){var a=nn();return Kp(a,Pe,e,n)},useMemoCache:Fu,useCacheRefresh:Sm},bx={readContext:Rn,use:_l,useCallback:dm,useContext:Rn,useEffect:lm,useImperativeHandle:hm,useInsertionEffect:cm,useLayoutEffect:um,useMemo:pm,useReducer:Gu,useRef:sm,useState:function(){return Gu(Xi)},useDebugValue:Xu,useDeferredValue:function(e,n){var a=nn();return Pe===null?Wu(a,e,n):mm(a,Pe.memoizedState,e,n)},useTransition:function(){var e=Gu(Xi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:Js(e),n]},useSyncExternalStore:Xp,useId:xm,useHostTransitionStatus:Yu,useFormState:rm,useActionState:rm,useOptimistic:function(e,n){var a=nn();return Pe!==null?Kp(a,Pe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Fu,useCacheRefresh:Sm},kr=null,eo=0;function El(e){var n=eo;return eo+=1,kr===null&&(kr=[]),Ip(kr,e,n)}function no(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Tl(e,n){throw n.$$typeof===_?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Am(e){var n=e._init;return n(e._payload)}function Rm(e){function n(X,G){if(e){var K=X.deletions;K===null?(X.deletions=[G],X.flags|=16):K.push(G)}}function a(X,G){if(!e)return null;for(;G!==null;)n(X,G),G=G.sibling;return null}function o(X){for(var G=new Map;X!==null;)X.key!==null?G.set(X.key,X):G.set(X.index,X),X=X.sibling;return G}function u(X,G){return X=Fi(X,G),X.index=0,X.sibling=null,X}function f(X,G,K){return X.index=K,e?(K=X.alternate,K!==null?(K=K.index,K<G?(X.flags|=67108866,G):K):(X.flags|=67108866,G)):(X.flags|=1048576,G)}function S(X){return e&&X.alternate===null&&(X.flags|=67108866),X}function b(X,G,K,ft){return G===null||G.tag!==6?(G=mu(K,X.mode,ft),G.return=X,G):(G=u(G,K),G.return=X,G)}function O(X,G,K,ft){var Ht=K.type;return Ht===E?ct(X,G,K.props.children,ft,K.key):G!==null&&(G.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===W&&Am(Ht)===G.type)?(G=u(G,K.props),no(G,K),G.return=X,G):(G=sl(K.type,K.key,K.props,null,X.mode,ft),no(G,K),G.return=X,G)}function J(X,G,K,ft){return G===null||G.tag!==4||G.stateNode.containerInfo!==K.containerInfo||G.stateNode.implementation!==K.implementation?(G=gu(K,X.mode,ft),G.return=X,G):(G=u(G,K.children||[]),G.return=X,G)}function ct(X,G,K,ft,Ht){return G===null||G.tag!==7?(G=Ja(K,X.mode,ft,Ht),G.return=X,G):(G=u(G,K),G.return=X,G)}function mt(X,G,K){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=mu(""+G,X.mode,K),G.return=X,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case v:return K=sl(G.type,G.key,G.props,null,X.mode,K),no(K,G),K.return=X,K;case y:return G=gu(G,X.mode,K),G.return=X,G;case W:var ft=G._init;return G=ft(G._payload),mt(X,G,K)}if(ht(G)||lt(G))return G=Ja(G,X.mode,K,null),G.return=X,G;if(typeof G.then=="function")return mt(X,El(G),K);if(G.$$typeof===N)return mt(X,ul(X,G),K);Tl(X,G)}return null}function nt(X,G,K,ft){var Ht=G!==null?G.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Ht!==null?null:b(X,G,""+K,ft);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case v:return K.key===Ht?O(X,G,K,ft):null;case y:return K.key===Ht?J(X,G,K,ft):null;case W:return Ht=K._init,K=Ht(K._payload),nt(X,G,K,ft)}if(ht(K)||lt(K))return Ht!==null?null:ct(X,G,K,ft,null);if(typeof K.then=="function")return nt(X,G,El(K),ft);if(K.$$typeof===N)return nt(X,G,ul(X,K),ft);Tl(X,K)}return null}function it(X,G,K,ft,Ht){if(typeof ft=="string"&&ft!==""||typeof ft=="number"||typeof ft=="bigint")return X=X.get(K)||null,b(G,X,""+ft,Ht);if(typeof ft=="object"&&ft!==null){switch(ft.$$typeof){case v:return X=X.get(ft.key===null?K:ft.key)||null,O(G,X,ft,Ht);case y:return X=X.get(ft.key===null?K:ft.key)||null,J(G,X,ft,Ht);case W:var de=ft._init;return ft=de(ft._payload),it(X,G,K,ft,Ht)}if(ht(ft)||lt(ft))return X=X.get(K)||null,ct(G,X,ft,Ht,null);if(typeof ft.then=="function")return it(X,G,K,El(ft),Ht);if(ft.$$typeof===N)return it(X,G,K,ul(G,ft),Ht);Tl(G,ft)}return null}function ee(X,G,K,ft){for(var Ht=null,de=null,Wt=G,$t=G=0,gn=null;Wt!==null&&$t<K.length;$t++){Wt.index>$t?(gn=Wt,Wt=null):gn=Wt.sibling;var Ae=nt(X,Wt,K[$t],ft);if(Ae===null){Wt===null&&(Wt=gn);break}e&&Wt&&Ae.alternate===null&&n(X,Wt),G=f(Ae,G,$t),de===null?Ht=Ae:de.sibling=Ae,de=Ae,Wt=gn}if($t===K.length)return a(X,Wt),Re&&tr(X,$t),Ht;if(Wt===null){for(;$t<K.length;$t++)Wt=mt(X,K[$t],ft),Wt!==null&&(G=f(Wt,G,$t),de===null?Ht=Wt:de.sibling=Wt,de=Wt);return Re&&tr(X,$t),Ht}for(Wt=o(Wt);$t<K.length;$t++)gn=it(Wt,X,$t,K[$t],ft),gn!==null&&(e&&gn.alternate!==null&&Wt.delete(gn.key===null?$t:gn.key),G=f(gn,G,$t),de===null?Ht=gn:de.sibling=gn,de=gn);return e&&Wt.forEach(function(Pa){return n(X,Pa)}),Re&&tr(X,$t),Ht}function Jt(X,G,K,ft){if(K==null)throw Error(r(151));for(var Ht=null,de=null,Wt=G,$t=G=0,gn=null,Ae=K.next();Wt!==null&&!Ae.done;$t++,Ae=K.next()){Wt.index>$t?(gn=Wt,Wt=null):gn=Wt.sibling;var Pa=nt(X,Wt,Ae.value,ft);if(Pa===null){Wt===null&&(Wt=gn);break}e&&Wt&&Pa.alternate===null&&n(X,Wt),G=f(Pa,G,$t),de===null?Ht=Pa:de.sibling=Pa,de=Pa,Wt=gn}if(Ae.done)return a(X,Wt),Re&&tr(X,$t),Ht;if(Wt===null){for(;!Ae.done;$t++,Ae=K.next())Ae=mt(X,Ae.value,ft),Ae!==null&&(G=f(Ae,G,$t),de===null?Ht=Ae:de.sibling=Ae,de=Ae);return Re&&tr(X,$t),Ht}for(Wt=o(Wt);!Ae.done;$t++,Ae=K.next())Ae=it(Wt,X,$t,Ae.value,ft),Ae!==null&&(e&&Ae.alternate!==null&&Wt.delete(Ae.key===null?$t:Ae.key),G=f(Ae,G,$t),de===null?Ht=Ae:de.sibling=Ae,de=Ae);return e&&Wt.forEach(function(AS){return n(X,AS)}),Re&&tr(X,$t),Ht}function ze(X,G,K,ft){if(typeof K=="object"&&K!==null&&K.type===E&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case v:t:{for(var Ht=K.key;G!==null;){if(G.key===Ht){if(Ht=K.type,Ht===E){if(G.tag===7){a(X,G.sibling),ft=u(G,K.props.children),ft.return=X,X=ft;break t}}else if(G.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===W&&Am(Ht)===G.type){a(X,G.sibling),ft=u(G,K.props),no(ft,K),ft.return=X,X=ft;break t}a(X,G);break}else n(X,G);G=G.sibling}K.type===E?(ft=Ja(K.props.children,X.mode,ft,K.key),ft.return=X,X=ft):(ft=sl(K.type,K.key,K.props,null,X.mode,ft),no(ft,K),ft.return=X,X=ft)}return S(X);case y:t:{for(Ht=K.key;G!==null;){if(G.key===Ht)if(G.tag===4&&G.stateNode.containerInfo===K.containerInfo&&G.stateNode.implementation===K.implementation){a(X,G.sibling),ft=u(G,K.children||[]),ft.return=X,X=ft;break t}else{a(X,G);break}else n(X,G);G=G.sibling}ft=gu(K,X.mode,ft),ft.return=X,X=ft}return S(X);case W:return Ht=K._init,K=Ht(K._payload),ze(X,G,K,ft)}if(ht(K))return ee(X,G,K,ft);if(lt(K)){if(Ht=lt(K),typeof Ht!="function")throw Error(r(150));return K=Ht.call(K),Jt(X,G,K,ft)}if(typeof K.then=="function")return ze(X,G,El(K),ft);if(K.$$typeof===N)return ze(X,G,ul(X,K),ft);Tl(X,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,G!==null&&G.tag===6?(a(X,G.sibling),ft=u(G,K),ft.return=X,X=ft):(a(X,G),ft=mu(K,X.mode,ft),ft.return=X,X=ft),S(X)):a(X,G)}return function(X,G,K,ft){try{eo=0;var Ht=ze(X,G,K,ft);return kr=null,Ht}catch(Wt){if(Wt===qs||Wt===hl)throw Wt;var de=qn(29,Wt,null,X.mode);return de.lanes=ft,de.return=X,de}finally{}}}var Xr=Rm(!0),wm=Rm(!1),ai=$(null),Ti=null;function Sa(e){var n=e.alternate;St(ln,ln.current&1),St(ai,e),Ti===null&&(n===null||Fr.current!==null||n.memoizedState!==null)&&(Ti=e)}function Cm(e){if(e.tag===22){if(St(ln,ln.current),St(ai,e),Ti===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ti=e)}}else ya()}function ya(){St(ln,ln.current),St(ai,ai.current)}function Wi(e){vt(ai),Ti===e&&(Ti=null),vt(ln)}var ln=$(0);function bl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Ff(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Zu(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ku={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Kn(),u=_a(o);u.payload=n,a!=null&&(u.callback=a),n=va(e,u,o),n!==null&&(Qn(n,e,o),js(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Kn(),u=_a(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=va(e,u,o),n!==null&&(Qn(n,e,o),js(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Kn(),o=_a(a);o.tag=2,n!=null&&(o.callback=n),n=va(e,o,a),n!==null&&(Qn(n,e,a),js(n,e,a))}};function Dm(e,n,a,o,u,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,S):n.prototype&&n.prototype.isPureReactComponent?!Bs(a,o)||!Bs(u,f):!0}function Um(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Ku.enqueueReplaceState(n,n.state,null)}function or(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var Al=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Lm(e){Al(e)}function Nm(e){console.error(e)}function Om(e){Al(e)}function Rl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Pm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Qu(e,n,a){return a=_a(a),a.tag=3,a.payload={element:null},a.callback=function(){Rl(e,n)},a}function Im(e){return e=_a(e),e.tag=3,e}function zm(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){Pm(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){Pm(n,a,o),typeof u!="function"&&(Ra===null?Ra=new Set([this]):Ra.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function Ax(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&ks(n,a,u,!0),a=ai.current,a!==null){switch(a.tag){case 13:return Ti===null?Mf():a.alternate===null&&Ze===0&&(Ze=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Au?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Tf(e,o,u)),!1;case 22:return a.flags|=65536,o===Au?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Tf(e,o,u)),!1}throw Error(r(435,a.tag))}return Tf(e,o,u),Mf(),!1}if(Re)return n=ai.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==xu&&(e=Error(r(422),{cause:o}),Vs(ti(e,a)))):(o!==xu&&(n=Error(r(423),{cause:o}),Vs(ti(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ti(o,a),u=Qu(e.stateNode,o,u),Cu(e,u),Ze!==4&&(Ze=2)),!1;var f=Error(r(520),{cause:o});if(f=ti(f,a),co===null?co=[f]:co.push(f),Ze!==4&&(Ze=2),n===null)return!0;o=ti(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Qu(a.stateNode,o,e),Cu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ra===null||!Ra.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Im(u),zm(u,e,a,o),Cu(a,u),!1}a=a.return}while(a!==null);return!1}var Bm=Error(r(461)),pn=!1;function En(e,n,a,o){n.child=e===null?wm(n,null,a,o):Xr(n,e.child,a,o)}function Fm(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var S={};for(var b in o)b!=="ref"&&(S[b]=o[b])}else S=o;return ar(n),o=Ou(e,n,a,S,f,u),b=Pu(),e!==null&&!pn?(Iu(e,n,u),qi(e,n,u)):(Re&&b&&_u(n),n.flags|=1,En(e,n,o,u),n.child)}function Hm(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!pu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Gm(e,n,f,o,u)):(e=sl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!sf(e,u)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Bs,a(S,o)&&e.ref===n.ref)return qi(e,n,u)}return n.flags|=1,e=Fi(f,o),e.ref=n.ref,e.return=n,n.child=e}function Gm(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(Bs(f,o)&&e.ref===n.ref)if(pn=!1,n.pendingProps=o=f,sf(e,u))(e.flags&131072)!==0&&(pn=!0);else return n.lanes=e.lanes,qi(e,n,u)}return Ju(e,n,a,o,u)}function Vm(e,n,a){var o=n.pendingProps,u=o.children,f=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,e!==null){for(u=n.child=e.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return km(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&fl(n,f!==null?f.cachePool:null),f!==null?Gp(n,f):Uu(),Cm(n);else return n.lanes=n.childLanes=536870912,km(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(fl(n,f.cachePool),Gp(n,f),ya(),n.memoizedState=null):(e!==null&&fl(n,null),Uu(),ya());return En(e,n,u,a),n.child}function km(e,n,a,o){var u=bu();return u=u===null?null:{parent:on._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&fl(n,null),Uu(),Cm(n),e!==null&&ks(e,n,o,!0),null}function wl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Ju(e,n,a,o,u){return ar(n),a=Ou(e,n,a,o,void 0,u),o=Pu(),e!==null&&!pn?(Iu(e,n,u),qi(e,n,u)):(Re&&o&&_u(n),n.flags|=1,En(e,n,a,u),n.child)}function Xm(e,n,a,o,u,f){return ar(n),n.updateQueue=null,a=kp(n,o,a,u),Vp(e),o=Pu(),e!==null&&!pn?(Iu(e,n,f),qi(e,n,f)):(Re&&o&&_u(n),n.flags|=1,En(e,n,a,f),n.child)}function Wm(e,n,a,o,u){if(ar(n),n.stateNode===null){var f=Or,S=a.contextType;typeof S=="object"&&S!==null&&(f=Rn(S)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ku,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Ru(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?Rn(S):Or,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Zu(n,a,S,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&Ku.enqueueReplaceState(f,f.state,null),Ks(n,o,f,u),Zs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var b=n.memoizedProps,O=or(a,b);f.props=O;var J=f.context,ct=a.contextType;S=Or,typeof ct=="object"&&ct!==null&&(S=Rn(ct));var mt=a.getDerivedStateFromProps;ct=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ct||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||J!==S)&&Um(n,f,o,S),ga=!1;var nt=n.memoizedState;f.state=nt,Ks(n,o,f,u),Zs(),J=n.memoizedState,b||nt!==J||ga?(typeof mt=="function"&&(Zu(n,a,mt,o),J=n.memoizedState),(O=ga||Dm(n,a,O,o,nt,J,S))?(ct||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=J),f.props=o,f.state=J,f.context=S,o=O):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,wu(e,n),S=n.memoizedProps,ct=or(a,S),f.props=ct,mt=n.pendingProps,nt=f.context,J=a.contextType,O=Or,typeof J=="object"&&J!==null&&(O=Rn(J)),b=a.getDerivedStateFromProps,(J=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==mt||nt!==O)&&Um(n,f,o,O),ga=!1,nt=n.memoizedState,f.state=nt,Ks(n,o,f,u),Zs();var it=n.memoizedState;S!==mt||nt!==it||ga||e!==null&&e.dependencies!==null&&cl(e.dependencies)?(typeof b=="function"&&(Zu(n,a,b,o),it=n.memoizedState),(ct=ga||Dm(n,a,ct,o,nt,it,O)||e!==null&&e.dependencies!==null&&cl(e.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,it,O),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,it,O)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=it),f.props=o,f.state=it,f.context=O,o=ct):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,wl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Xr(n,e.child,null,u),n.child=Xr(n,null,a,u)):En(e,n,a,u),n.memoizedState=f.state,e=n.child):e=qi(e,n,u),e}function qm(e,n,a,o){return Gs(),n.flags|=256,En(e,n,a,o),n.child}var $u={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function tf(e){return{baseLanes:e,cachePool:Np()}}function ef(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ri),e}function Ym(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(ln.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Re){if(u?Sa(n):ya(),Re){var b=je,O;if(O=b){t:{for(O=b,b=Ei;O.nodeType!==8;){if(!b){b=null;break t}if(O=hi(O.nextSibling),O===null){b=null;break t}}b=O}b!==null?(n.memoizedState={dehydrated:b,treeContext:$a!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},O=qn(18,null,null,0),O.stateNode=b,O.return=n,n.child=O,Un=n,je=null,O=!0):O=!1}O||nr(n)}if(b=n.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Ff(b)?n.lanes=32:n.lanes=536870912,null;Wi(n)}return b=o.children,o=o.fallback,u?(ya(),u=n.mode,b=Cl({mode:"hidden",children:b},u),o=Ja(o,u,a,null),b.return=n,o.return=n,b.sibling=o,n.child=b,u=n.child,u.memoizedState=tf(a),u.childLanes=ef(e,S,a),n.memoizedState=$u,o):(Sa(n),nf(n,b))}if(O=e.memoizedState,O!==null&&(b=O.dehydrated,b!==null)){if(f)n.flags&256?(Sa(n),n.flags&=-257,n=af(e,n,a)):n.memoizedState!==null?(ya(),n.child=e.child,n.flags|=128,n=null):(ya(),u=o.fallback,b=n.mode,o=Cl({mode:"visible",children:o.children},b),u=Ja(u,b,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,Xr(n,e.child,null,a),o=n.child,o.memoizedState=tf(a),o.childLanes=ef(e,S,a),n.memoizedState=$u,n=u);else if(Sa(n),Ff(b)){if(S=b.nextSibling&&b.nextSibling.dataset,S)var J=S.dgst;S=J,o=Error(r(419)),o.stack="",o.digest=S,Vs({value:o,source:null,stack:null}),n=af(e,n,a)}else if(pn||ks(e,n,a,!1),S=(a&e.childLanes)!==0,pn||S){if(S=ke,S!==null&&(o=a&-a,o=(o&42)!==0?1:ne(o),o=(o&(S.suspendedLanes|a))!==0?0:o,o!==0&&o!==O.retryLane))throw O.retryLane=o,Nr(e,o),Qn(S,e,o),Bm;b.data==="$?"||Mf(),n=af(e,n,a)}else b.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=O.treeContext,je=hi(b.nextSibling),Un=n,Re=!0,er=null,Ei=!1,e!==null&&(ni[ii++]=Hi,ni[ii++]=Gi,ni[ii++]=$a,Hi=e.id,Gi=e.overflow,$a=n),n=nf(n,o.children),n.flags|=4096);return n}return u?(ya(),u=o.fallback,b=n.mode,O=e.child,J=O.sibling,o=Fi(O,{mode:"hidden",children:o.children}),o.subtreeFlags=O.subtreeFlags&65011712,J!==null?u=Fi(J,u):(u=Ja(u,b,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,b=e.child.memoizedState,b===null?b=tf(a):(O=b.cachePool,O!==null?(J=on._currentValue,O=O.parent!==J?{parent:J,pool:J}:O):O=Np(),b={baseLanes:b.baseLanes|a,cachePool:O}),u.memoizedState=b,u.childLanes=ef(e,S,a),n.memoizedState=$u,o):(Sa(n),a=e.child,e=a.sibling,a=Fi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function nf(e,n){return n=Cl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Cl(e,n){return e=qn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function af(e,n,a){return Xr(n,e.child,null,a),e=nf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function jm(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),yu(e.return,n,a)}function rf(e,n,a,o,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=u)}function Zm(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;if(En(e,n,o.children,a),o=ln.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jm(e,a,n);else if(e.tag===19)jm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(St(ln,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&bl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),rf(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&bl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}rf(n,!0,a,null,f);break;case"together":rf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function qi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Aa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(ks(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Fi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Fi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function sf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&cl(e)))}function Rx(e,n,a){switch(n.tag){case 3:wt(n,n.stateNode.containerInfo),ma(n,on,e.memoizedState.cache),Gs();break;case 27:case 5:Qt(n);break;case 4:wt(n,n.stateNode.containerInfo);break;case 10:ma(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Sa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Ym(e,n,a):(Sa(n),e=qi(e,n,a),e!==null?e.sibling:null);Sa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(ks(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Zm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),St(ln,ln.current),o)break;return null;case 22:case 23:return n.lanes=0,Vm(e,n,a);case 24:ma(n,on,e.memoizedState.cache)}return qi(e,n,a)}function Km(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)pn=!0;else{if(!sf(e,a)&&(n.flags&128)===0)return pn=!1,Rx(e,n,a);pn=(e.flags&131072)!==0}else pn=!1,Re&&(n.flags&1048576)!==0&&Ap(n,ll,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")pu(o)?(e=or(o,e),n.tag=1,n=Wm(null,n,o,e,a)):(n.tag=0,n=Ju(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===C){n.tag=11,n=Fm(null,n,o,e,a);break t}else if(u===B){n.tag=14,n=Hm(null,n,o,e,a);break t}}throw n=_t(o)||o,Error(r(306,n,""))}}return n;case 0:return Ju(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=or(o,n.pendingProps),Wm(e,n,o,u,a);case 3:t:{if(wt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,wu(e,n),Ks(n,o,null,a);var S=n.memoizedState;if(o=S.cache,ma(n,on,o),o!==f.cache&&Mu(n,[on],a,!0),Zs(),o=S.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=qm(e,n,o,a);break t}else if(o!==u){u=ti(Error(r(424)),n),Vs(u),n=qm(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(je=hi(e.firstChild),Un=n,Re=!0,er=null,Ei=!0,a=wm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Gs(),o===u){n=qi(e,n,a);break t}En(e,n,o,a)}n=n.child}return n;case 26:return wl(e,n),e===null?(a=t_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Re||(a=n.type,e=n.pendingProps,o=kl(yt.current).createElement(a),o[rn]=n,o[yn]=e,bn(o,a,e),tn(o),n.stateNode=o):n.memoizedState=t_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Qt(n),e===null&&Re&&(o=n.stateNode=Qg(n.type,n.pendingProps,yt.current),Un=n,Ei=!0,u=je,Da(n.type)?(Hf=u,je=hi(o.firstChild)):je=u),En(e,n,n.pendingProps.children,a),wl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Re&&((u=o=je)&&(o=eS(o,n.type,n.pendingProps,Ei),o!==null?(n.stateNode=o,Un=n,je=hi(o.firstChild),Ei=!1,u=!0):u=!1),u||nr(n)),Qt(n),u=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,o=f.children,If(u,f)?o=null:S!==null&&If(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=Ou(e,n,xx,null,null,a),xo._currentValue=u),wl(e,n),En(e,n,o,a),n.child;case 6:return e===null&&Re&&((e=a=je)&&(a=nS(a,n.pendingProps,Ei),a!==null?(n.stateNode=a,Un=n,je=null,e=!0):e=!1),e||nr(n)),null;case 13:return Ym(e,n,a);case 4:return wt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Xr(n,null,o,a):En(e,n,o,a),n.child;case 11:return Fm(e,n,n.type,n.pendingProps,a);case 7:return En(e,n,n.pendingProps,a),n.child;case 8:return En(e,n,n.pendingProps.children,a),n.child;case 12:return En(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ma(n,n.type,o.value),En(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ar(n),u=Rn(u),o=o(u),n.flags|=1,En(e,n,o,a),n.child;case 14:return Hm(e,n,n.type,n.pendingProps,a);case 15:return Gm(e,n,n.type,n.pendingProps,a);case 19:return Zm(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Cl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Fi(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Vm(e,n,a);case 24:return ar(n),o=Rn(on),e===null?(u=bu(),u===null&&(u=ke,f=Eu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Ru(n),ma(n,on,u)):((e.lanes&a)!==0&&(wu(e,n),Ks(n,null,null,a),Zs()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ma(n,on,o)):(o=f.cache,ma(n,on,o),o!==u.cache&&Mu(n,[on],a,!0))),En(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Yi(e){e.flags|=4}function Qm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!r_(n)){if(n=ai.current,n!==null&&((Me&4194048)===Me?Ti!==null:(Me&62914560)!==Me&&(Me&536870912)===0||n!==Ti))throw Ys=Au,Op;e.flags|=8192}}function Dl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ut():536870912,e.lanes|=n,jr|=n)}function io(e,n){if(!Re)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ye(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function wx(e,n,a){var o=n.pendingProps;switch(vu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(n),null;case 1:return Ye(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ki(on),oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Hs(n)?Yi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Cp())),Ye(n),null;case 26:return a=n.memoizedState,e===null?(Yi(n),a!==null?(Ye(n),Qm(n,a)):(Ye(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Yi(n),Ye(n),Qm(n,a)):(Ye(n),n.flags&=-16777217):(e.memoizedProps!==o&&Yi(n),Ye(n),n.flags&=-16777217),null;case 27:Ne(n),a=yt.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Yi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ye(n),null}e=Q.current,Hs(n)?Rp(n):(e=Qg(u,o,a),n.stateNode=e,Yi(n))}return Ye(n),null;case 5:if(Ne(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Yi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ye(n),null}if(e=Q.current,Hs(n))Rp(n);else{switch(u=kl(yt.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[rn]=n,e[yn]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(bn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Yi(n)}}return Ye(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Yi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=yt.current,Hs(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Un,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[rn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Xg(e.nodeValue,a)),e||nr(n)}else e=kl(e).createTextNode(o),e[rn]=n,n.stateNode=e}return Ye(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Hs(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[rn]=n}else Gs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),u=!1}else u=Cp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Wi(n),n):(Wi(n),null)}if(Wi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Dl(n,n.updateQueue),Ye(n),null;case 4:return oe(),e===null&&Uf(n.stateNode.containerInfo),Ye(n),null;case 10:return ki(n.type),Ye(n),null;case 19:if(vt(ln),u=n.memoizedState,u===null)return Ye(n),null;if(o=(n.flags&128)!==0,f=u.rendering,f===null)if(o)io(u,!1);else{if(Ze!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=bl(e),f!==null){for(n.flags|=128,io(u,!1),e=f.updateQueue,n.updateQueue=e,Dl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)bp(a,e),a=a.sibling;return St(ln,ln.current&1|2),n.child}e=e.sibling}u.tail!==null&&pe()>Nl&&(n.flags|=128,o=!0,io(u,!1),n.lanes=4194304)}else{if(!o)if(e=bl(f),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Dl(n,e),io(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!Re)return Ye(n),null}else 2*pe()-u.renderingStartTime>Nl&&a!==536870912&&(n.flags|=128,o=!0,io(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(e=u.last,e!==null?e.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=pe(),n.sibling=null,e=ln.current,St(ln,o?e&1|2:e&1),n):(Ye(n),null);case 22:case 23:return Wi(n),Lu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ye(n),n.subtreeFlags&6&&(n.flags|=8192)):Ye(n),a=n.updateQueue,a!==null&&Dl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&vt(rr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ki(on),Ye(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Cx(e,n){switch(vu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ki(on),oe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ne(n),null;case 13:if(Wi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Gs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return vt(ln),null;case 4:return oe(),null;case 10:return ki(n.type),null;case 22:case 23:return Wi(n),Lu(),e!==null&&vt(rr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ki(on),null;case 25:return null;default:return null}}function Jm(e,n){switch(vu(n),n.tag){case 3:ki(on),oe();break;case 26:case 27:case 5:Ne(n);break;case 4:oe();break;case 13:Wi(n);break;case 19:vt(ln);break;case 10:ki(n.type);break;case 22:case 23:Wi(n),Lu(),e!==null&&vt(rr);break;case 24:ki(on)}}function ao(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,S=a.inst;o=f(),S.destroy=o}a=a.next}while(a!==u)}}catch(b){Ge(n,n.return,b)}}function Ma(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var S=o.inst,b=S.destroy;if(b!==void 0){S.destroy=void 0,u=n;var O=a,J=b;try{J()}catch(ct){Ge(u,O,ct)}}}o=o.next}while(o!==f)}}catch(ct){Ge(n,n.return,ct)}}function $m(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Hp(n,a)}catch(o){Ge(e,e.return,o)}}}function tg(e,n,a){a.props=or(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ge(e,n,o)}}function ro(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ge(e,n,u)}}function bi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ge(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ge(e,n,u)}else a.current=null}function eg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ge(e,e.return,u)}}function of(e,n,a){try{var o=e.stateNode;Kx(o,e.type,a,n),o[yn]=n}catch(u){Ge(e,e.return,u)}}function ng(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Da(e.type)||e.tag===4}function lf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||ng(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Da(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Vl));else if(o!==4&&(o===27&&Da(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(cf(e,n,a),e=e.sibling;e!==null;)cf(e,n,a),e=e.sibling}function Ul(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Da(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ul(e,n,a),e=e.sibling;e!==null;)Ul(e,n,a),e=e.sibling}function ig(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);bn(n,o,a),n[rn]=e,n[yn]=a}catch(f){Ge(e,e.return,f)}}var ji=!1,$e=!1,uf=!1,ag=typeof WeakSet=="function"?WeakSet:Set,mn=null;function Dx(e,n){if(e=e.containerInfo,Of=Zl,e=mp(e),ou(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,b=-1,O=-1,J=0,ct=0,mt=e,nt=null;e:for(;;){for(var it;mt!==a||u!==0&&mt.nodeType!==3||(b=S+u),mt!==f||o!==0&&mt.nodeType!==3||(O=S+o),mt.nodeType===3&&(S+=mt.nodeValue.length),(it=mt.firstChild)!==null;)nt=mt,mt=it;for(;;){if(mt===e)break e;if(nt===a&&++J===u&&(b=S),nt===f&&++ct===o&&(O=S),(it=mt.nextSibling)!==null)break;mt=nt,nt=mt.parentNode}mt=it}a=b===-1||O===-1?null:{start:b,end:O}}else a=null}a=a||{start:0,end:0}}else a=null;for(Pf={focusedElem:e,selectionRange:a},Zl=!1,mn=n;mn!==null;)if(n=mn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,mn=e;else for(;mn!==null;){switch(n=mn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ee=or(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(ee,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(Jt){Ge(a,a.return,Jt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Bf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Bf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,mn=e;break}mn=n.return}}function rg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ea(e,a),o&4&&ao(5,a);break;case 1:if(Ea(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Ge(a,a.return,S)}else{var u=or(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Ge(a,a.return,S)}}o&64&&$m(a),o&512&&ro(a,a.return);break;case 3:if(Ea(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Hp(e,n)}catch(S){Ge(a,a.return,S)}}break;case 27:n===null&&o&4&&ig(a);case 26:case 5:Ea(e,a),n===null&&o&4&&eg(a),o&512&&ro(a,a.return);break;case 12:Ea(e,a);break;case 13:Ea(e,a),o&4&&lg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Fx.bind(null,a),iS(e,a))));break;case 22:if(o=a.memoizedState!==null||ji,!o){n=n!==null&&n.memoizedState!==null||$e,u=ji;var f=$e;ji=o,($e=n)&&!f?Ta(e,a,(a.subtreeFlags&8772)!==0):Ea(e,a),ji=u,$e=f}break;case 30:break;default:Ea(e,a)}}function sg(e){var n=e.alternate;n!==null&&(e.alternate=null,sg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&fa(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var We=null,Bn=!1;function Zi(e,n,a){for(a=a.child;a!==null;)og(e,n,a),a=a.sibling}function og(e,n,a){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(ut,a)}catch{}switch(a.tag){case 26:$e||bi(a,n),Zi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:$e||bi(a,n);var o=We,u=Bn;Da(a.type)&&(We=a.stateNode,Bn=!1),Zi(e,n,a),mo(a.stateNode),We=o,Bn=u;break;case 5:$e||bi(a,n);case 6:if(o=We,u=Bn,We=null,Zi(e,n,a),We=o,Bn=u,We!==null)if(Bn)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(a.stateNode)}catch(f){Ge(a,n,f)}else try{We.removeChild(a.stateNode)}catch(f){Ge(a,n,f)}break;case 18:We!==null&&(Bn?(e=We,Zg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Eo(e)):Zg(We,a.stateNode));break;case 4:o=We,u=Bn,We=a.stateNode.containerInfo,Bn=!0,Zi(e,n,a),We=o,Bn=u;break;case 0:case 11:case 14:case 15:$e||Ma(2,a,n),$e||Ma(4,a,n),Zi(e,n,a);break;case 1:$e||(bi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&tg(a,n,o)),Zi(e,n,a);break;case 21:Zi(e,n,a);break;case 22:$e=(o=$e)||a.memoizedState!==null,Zi(e,n,a),$e=o;break;default:Zi(e,n,a)}}function lg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Eo(e)}catch(a){Ge(n,n.return,a)}}function Ux(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new ag),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new ag),n;default:throw Error(r(435,e.tag))}}function ff(e,n){var a=Ux(e);n.forEach(function(o){var u=Hx.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function Yn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,S=n,b=S;t:for(;b!==null;){switch(b.tag){case 27:if(Da(b.type)){We=b.stateNode,Bn=!1;break t}break;case 5:We=b.stateNode,Bn=!1;break t;case 3:case 4:We=b.stateNode.containerInfo,Bn=!0;break t}b=b.return}if(We===null)throw Error(r(160));og(f,S,u),We=null,Bn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)cg(n,e),n=n.sibling}var fi=null;function cg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Yn(n,e),jn(e),o&4&&(Ma(3,e,e.return),ao(3,e),Ma(5,e,e.return));break;case 1:Yn(n,e),jn(e),o&512&&($e||a===null||bi(a,a.return)),o&64&&ji&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=fi;if(Yn(n,e),jn(e),o&512&&($e||a===null||bi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ua]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),bn(f,o,a),f[rn]=e,tn(f),o=f;break t;case"link":var S=i_("link","href",u).get(o+(a.href||""));if(S){for(var b=0;b<S.length;b++)if(f=S[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(b,1);break e}}f=u.createElement(o),bn(f,o,a),u.head.appendChild(f);break;case"meta":if(S=i_("meta","content",u).get(o+(a.content||""))){for(b=0;b<S.length;b++)if(f=S[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(b,1);break e}}f=u.createElement(o),bn(f,o,a),u.head.appendChild(f);break;default:throw Error(r(468,o))}f[rn]=e,tn(f),o=f}e.stateNode=o}else a_(u,e.type,e.stateNode);else e.stateNode=n_(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?a_(u,e.type,e.stateNode):n_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&of(e,e.memoizedProps,a.memoizedProps)}break;case 27:Yn(n,e),jn(e),o&512&&($e||a===null||bi(a,a.return)),a!==null&&o&4&&of(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Yn(n,e),jn(e),o&512&&($e||a===null||bi(a,a.return)),e.flags&32){u=e.stateNode;try{Mi(u,"")}catch(it){Ge(e,e.return,it)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,of(e,u,a!==null?a.memoizedProps:u)),o&1024&&(uf=!0);break;case 6:if(Yn(n,e),jn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(it){Ge(e,e.return,it)}}break;case 3:if(ql=null,u=fi,fi=Xl(n.containerInfo),Yn(n,e),fi=u,jn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Eo(n.containerInfo)}catch(it){Ge(e,e.return,it)}uf&&(uf=!1,ug(e));break;case 4:o=fi,fi=Xl(e.stateNode.containerInfo),Yn(n,e),jn(e),fi=o;break;case 12:Yn(n,e),jn(e);break;case 13:Yn(n,e),jn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(_f=pe()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ff(e,o)));break;case 22:u=e.memoizedState!==null;var O=a!==null&&a.memoizedState!==null,J=ji,ct=$e;if(ji=J||u,$e=ct||O,Yn(n,e),$e=ct,ji=J,jn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||O||ji||$e||lr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){O=a=n;try{if(f=O.stateNode,u)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{b=O.stateNode;var mt=O.memoizedProps.style,nt=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;b.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(it){Ge(O,O.return,it)}}}else if(n.tag===6){if(a===null){O=n;try{O.stateNode.nodeValue=u?"":O.memoizedProps}catch(it){Ge(O,O.return,it)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,ff(e,a))));break;case 19:Yn(n,e),jn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ff(e,o)));break;case 30:break;case 21:break;default:Yn(n,e),jn(e)}}function jn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(ng(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=lf(e);Ul(e,f,u);break;case 5:var S=a.stateNode;a.flags&32&&(Mi(S,""),a.flags&=-33);var b=lf(e);Ul(e,b,S);break;case 3:case 4:var O=a.stateNode.containerInfo,J=lf(e);cf(e,J,O);break;default:throw Error(r(161))}}catch(ct){Ge(e,e.return,ct)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function ug(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;ug(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ea(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)rg(e,n.alternate,n),n=n.sibling}function lr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ma(4,n,n.return),lr(n);break;case 1:bi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&tg(n,n.return,a),lr(n);break;case 27:mo(n.stateNode);case 26:case 5:bi(n,n.return),lr(n);break;case 22:n.memoizedState===null&&lr(n);break;case 30:lr(n);break;default:lr(n)}e=e.sibling}}function Ta(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:Ta(u,f,a),ao(4,f);break;case 1:if(Ta(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(J){Ge(o,o.return,J)}if(o=f,u=o.updateQueue,u!==null){var b=o.stateNode;try{var O=u.shared.hiddenCallbacks;if(O!==null)for(u.shared.hiddenCallbacks=null,u=0;u<O.length;u++)Fp(O[u],b)}catch(J){Ge(o,o.return,J)}}a&&S&64&&$m(f),ro(f,f.return);break;case 27:ig(f);case 26:case 5:Ta(u,f,a),a&&o===null&&S&4&&eg(f),ro(f,f.return);break;case 12:Ta(u,f,a);break;case 13:Ta(u,f,a),a&&S&4&&lg(u,f);break;case 22:f.memoizedState===null&&Ta(u,f,a),ro(f,f.return);break;case 30:break;default:Ta(u,f,a)}n=n.sibling}}function hf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Xs(a))}function df(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Xs(e))}function Ai(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)fg(e,n,a,o),n=n.sibling}function fg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ai(e,n,a,o),u&2048&&ao(9,n);break;case 1:Ai(e,n,a,o);break;case 3:Ai(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Xs(e)));break;case 12:if(u&2048){Ai(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,b=f.onPostCommit;typeof b=="function"&&b(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(O){Ge(n,n.return,O)}}else Ai(e,n,a,o);break;case 13:Ai(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Ai(e,n,a,o):so(e,n):f._visibility&2?Ai(e,n,a,o):(f._visibility|=2,Wr(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&hf(S,n);break;case 24:Ai(e,n,a,o),u&2048&&df(n.alternate,n);break;default:Ai(e,n,a,o)}}function Wr(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,S=n,b=a,O=o,J=S.flags;switch(S.tag){case 0:case 11:case 15:Wr(f,S,b,O,u),ao(8,S);break;case 23:break;case 22:var ct=S.stateNode;S.memoizedState!==null?ct._visibility&2?Wr(f,S,b,O,u):so(f,S):(ct._visibility|=2,Wr(f,S,b,O,u)),u&&J&2048&&hf(S.alternate,S);break;case 24:Wr(f,S,b,O,u),u&&J&2048&&df(S.alternate,S);break;default:Wr(f,S,b,O,u)}n=n.sibling}}function so(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:so(a,o),u&2048&&hf(o.alternate,o);break;case 24:so(a,o),u&2048&&df(o.alternate,o);break;default:so(a,o)}n=n.sibling}}var oo=8192;function qr(e){if(e.subtreeFlags&oo)for(e=e.child;e!==null;)hg(e),e=e.sibling}function hg(e){switch(e.tag){case 26:qr(e),e.flags&oo&&e.memoizedState!==null&&gS(fi,e.memoizedState,e.memoizedProps);break;case 5:qr(e);break;case 3:case 4:var n=fi;fi=Xl(e.stateNode.containerInfo),qr(e),fi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=oo,oo=16777216,qr(e),oo=n):qr(e));break;default:qr(e)}}function dg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function lo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];mn=o,mg(o,e)}dg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)pg(e),e=e.sibling}function pg(e){switch(e.tag){case 0:case 11:case 15:lo(e),e.flags&2048&&Ma(9,e,e.return);break;case 3:lo(e);break;case 12:lo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ll(e)):lo(e);break;default:lo(e)}}function Ll(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];mn=o,mg(o,e)}dg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ma(8,n,n.return),Ll(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ll(n));break;default:Ll(n)}e=e.sibling}}function mg(e,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:Ma(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Xs(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,mn=o;else t:for(a=e;mn!==null;){o=mn;var u=o.sibling,f=o.return;if(sg(o),o===a){mn=null;break t}if(u!==null){u.return=f,mn=u;break t}mn=f}}}var Lx={getCacheForType:function(e){var n=Rn(on),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},Nx=typeof WeakMap=="function"?WeakMap:Map,Ue=0,ke=null,me=null,Me=0,Le=0,Zn=null,ba=!1,Yr=!1,pf=!1,Ki=0,Ze=0,Aa=0,cr=0,mf=0,ri=0,jr=0,co=null,Fn=null,gf=!1,_f=0,Nl=1/0,Ol=null,Ra=null,Tn=0,wa=null,Zr=null,Kr=0,vf=0,xf=null,gg=null,uo=0,Sf=null;function Kn(){if((Ue&2)!==0&&Me!==0)return Me&-Me;if(I.T!==null){var e=zr;return e!==0?e:Rf()}return be()}function _g(){ri===0&&(ri=(Me&536870912)===0||Re?k():536870912);var e=ai.current;return e!==null&&(e.flags|=32),ri}function Qn(e,n,a){(e===ke&&(Le===2||Le===9)||e.cancelPendingCommit!==null)&&(Qr(e,0),Ca(e,Me,ri,!1)),It(e,a),((Ue&2)===0||e!==ke)&&(e===ke&&((Ue&2)===0&&(cr|=a),Ze===4&&Ca(e,Me,ri,!1)),Ri(e))}function vg(e,n,a){if((Ue&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Rt(e,n),u=o?Ix(e,n):Ef(e,n,!0),f=o;do{if(u===0){Yr&&!o&&Ca(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Ox(a)){u=Ef(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var b=e;u=co;var O=b.current.memoizedState.isDehydrated;if(O&&(Qr(b,S).flags|=256),S=Ef(b,S,!1),S!==2){if(pf&&!O){b.errorRecoveryDisabledLanes|=f,cr|=f,u=4;break t}f=Fn,Fn=u,f!==null&&(Fn===null?Fn=f:Fn.push.apply(Fn,f))}u=S}if(f=!1,u!==2)continue}}if(u===1){Qr(e,0),Ca(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ca(o,n,ri,!ba);break t;case 2:Fn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=_f+300-pe(),10<u)){if(Ca(o,n,ri,!ba),Yt(o,0,!0)!==0)break t;o.timeoutHandle=Yg(xg.bind(null,o,a,Fn,Ol,gf,n,ri,cr,jr,ba,f,2,-0,0),u);break t}xg(o,a,Fn,Ol,gf,n,ri,cr,jr,ba,f,0,-0,0)}}break}while(!0);Ri(e)}function xg(e,n,a,o,u,f,S,b,O,J,ct,mt,nt,it){if(e.timeoutHandle=-1,mt=n.subtreeFlags,(mt&8192||(mt&16785408)===16785408)&&(vo={stylesheets:null,count:0,unsuspend:mS},hg(n),mt=_S(),mt!==null)){e.cancelPendingCommit=mt(Ag.bind(null,e,n,f,a,o,u,S,b,O,ct,1,nt,it)),Ca(e,f,S,!J);return}Ag(e,n,f,a,o,u,S,b,O)}function Ox(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Wn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ca(e,n,a,o){n&=~mf,n&=~cr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Ot(u),S=1<<f;o[f]=-1,u&=~S}a!==0&&gt(e,a,n)}function Pl(){return(Ue&6)===0?(fo(0),!1):!0}function yf(){if(me!==null){if(Le===0)var e=me.return;else e=me,Vi=ir=null,zu(e),kr=null,eo=0,e=me;for(;e!==null;)Jm(e.alternate,e),e=e.return;me=null}}function Qr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Jx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),yf(),ke=e,me=a=Fi(e.current,null),Me=n,Le=0,Zn=null,ba=!1,Yr=Rt(e,n),pf=!1,jr=ri=mf=cr=Aa=Ze=0,Fn=co=null,gf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Ot(o),f=1<<u;n|=e[u],o&=~f}return Ki=n,il(),a}function Sg(e,n){fe=null,I.H=Ml,n===qs||n===hl?(n=zp(),Le=3):n===Op?(n=zp(),Le=4):Le=n===Bm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,me===null&&(Ze=1,Rl(e,ti(n,e.current)))}function yg(){var e=I.H;return I.H=Ml,e===null?Ml:e}function Mg(){var e=I.A;return I.A=Lx,e}function Mf(){Ze=4,ba||(Me&4194048)!==Me&&ai.current!==null||(Yr=!0),(Aa&134217727)===0&&(cr&134217727)===0||ke===null||Ca(ke,Me,ri,!1)}function Ef(e,n,a){var o=Ue;Ue|=2;var u=yg(),f=Mg();(ke!==e||Me!==n)&&(Ol=null,Qr(e,n)),n=!1;var S=Ze;t:do try{if(Le!==0&&me!==null){var b=me,O=Zn;switch(Le){case 8:yf(),S=6;break t;case 3:case 2:case 9:case 6:ai.current===null&&(n=!0);var J=Le;if(Le=0,Zn=null,Jr(e,b,O,J),a&&Yr){S=0;break t}break;default:J=Le,Le=0,Zn=null,Jr(e,b,O,J)}}Px(),S=Ze;break}catch(ct){Sg(e,ct)}while(!0);return n&&e.shellSuspendCounter++,Vi=ir=null,Ue=o,I.H=u,I.A=f,me===null&&(ke=null,Me=0,il()),S}function Px(){for(;me!==null;)Eg(me)}function Ix(e,n){var a=Ue;Ue|=2;var o=yg(),u=Mg();ke!==e||Me!==n?(Ol=null,Nl=pe()+500,Qr(e,n)):Yr=Rt(e,n);t:do try{if(Le!==0&&me!==null){n=me;var f=Zn;e:switch(Le){case 1:Le=0,Zn=null,Jr(e,n,f,1);break;case 2:case 9:if(Pp(f)){Le=0,Zn=null,Tg(n);break}n=function(){Le!==2&&Le!==9||ke!==e||(Le=7),Ri(e)},f.then(n,n);break t;case 3:Le=7;break t;case 4:Le=5;break t;case 7:Pp(f)?(Le=0,Zn=null,Tg(n)):(Le=0,Zn=null,Jr(e,n,f,7));break;case 5:var S=null;switch(me.tag){case 26:S=me.memoizedState;case 5:case 27:var b=me;if(!S||r_(S)){Le=0,Zn=null;var O=b.sibling;if(O!==null)me=O;else{var J=b.return;J!==null?(me=J,Il(J)):me=null}break e}}Le=0,Zn=null,Jr(e,n,f,5);break;case 6:Le=0,Zn=null,Jr(e,n,f,6);break;case 8:yf(),Ze=6;break t;default:throw Error(r(462))}}zx();break}catch(ct){Sg(e,ct)}while(!0);return Vi=ir=null,I.H=o,I.A=u,Ue=a,me!==null?0:(ke=null,Me=0,il(),Ze)}function zx(){for(;me!==null&&!Sn();)Eg(me)}function Eg(e){var n=Km(e.alternate,e,Ki);e.memoizedProps=e.pendingProps,n===null?Il(e):me=n}function Tg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Xm(a,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=Xm(a,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:zu(n);default:Jm(a,n),n=me=bp(n,Ki),n=Km(a,n,Ki)}e.memoizedProps=e.pendingProps,n===null?Il(e):me=n}function Jr(e,n,a,o){Vi=ir=null,zu(n),kr=null,eo=0;var u=n.return;try{if(Ax(e,u,n,a,Me)){Ze=1,Rl(e,ti(a,e.current)),me=null;return}}catch(f){if(u!==null)throw me=u,f;Ze=1,Rl(e,ti(a,e.current)),me=null;return}n.flags&32768?(Re||o===1?e=!0:Yr||(Me&536870912)!==0?e=!1:(ba=e=!0,(o===2||o===9||o===3||o===6)&&(o=ai.current,o!==null&&o.tag===13&&(o.flags|=16384))),bg(n,e)):Il(n)}function Il(e){var n=e;do{if((n.flags&32768)!==0){bg(n,ba);return}e=n.return;var a=wx(n.alternate,n,Ki);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=e}while(n!==null);Ze===0&&(Ze=5)}function bg(e,n){do{var a=Cx(e.alternate,e);if(a!==null){a.flags&=32767,me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){me=e;return}me=e=a}while(e!==null);Ze=6,me=null}function Ag(e,n,a,o,u,f,S,b,O){e.cancelPendingCommit=null;do zl();while(Tn!==0);if((Ue&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=hu,bt(e,a,f,S,b,O),e===ke&&(me=ke=null,Me=0),Zr=n,wa=e,Kr=a,vf=f,xf=u,gg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Gx(ae,function(){return Ug(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=Z.p,Z.p=2,S=Ue,Ue|=4;try{Dx(e,n,a)}finally{Ue=S,Z.p=u,I.T=o}}Tn=1,Rg(),wg(),Cg()}}function Rg(){if(Tn===1){Tn=0;var e=wa,n=Zr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=Z.p;Z.p=2;var u=Ue;Ue|=4;try{cg(n,e);var f=Pf,S=mp(e.containerInfo),b=f.focusedElem,O=f.selectionRange;if(S!==b&&b&&b.ownerDocument&&pp(b.ownerDocument.documentElement,b)){if(O!==null&&ou(b)){var J=O.start,ct=O.end;if(ct===void 0&&(ct=J),"selectionStart"in b)b.selectionStart=J,b.selectionEnd=Math.min(ct,b.value.length);else{var mt=b.ownerDocument||document,nt=mt&&mt.defaultView||window;if(nt.getSelection){var it=nt.getSelection(),ee=b.textContent.length,Jt=Math.min(O.start,ee),ze=O.end===void 0?Jt:Math.min(O.end,ee);!it.extend&&Jt>ze&&(S=ze,ze=Jt,Jt=S);var X=dp(b,Jt),G=dp(b,ze);if(X&&G&&(it.rangeCount!==1||it.anchorNode!==X.node||it.anchorOffset!==X.offset||it.focusNode!==G.node||it.focusOffset!==G.offset)){var K=mt.createRange();K.setStart(X.node,X.offset),it.removeAllRanges(),Jt>ze?(it.addRange(K),it.extend(G.node,G.offset)):(K.setEnd(G.node,G.offset),it.addRange(K))}}}}for(mt=[],it=b;it=it.parentNode;)it.nodeType===1&&mt.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<mt.length;b++){var ft=mt[b];ft.element.scrollLeft=ft.left,ft.element.scrollTop=ft.top}}Zl=!!Of,Pf=Of=null}finally{Ue=u,Z.p=o,I.T=a}}e.current=n,Tn=2}}function wg(){if(Tn===2){Tn=0;var e=wa,n=Zr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=Z.p;Z.p=2;var u=Ue;Ue|=4;try{rg(e,n.alternate,n)}finally{Ue=u,Z.p=o,I.T=a}}Tn=3}}function Cg(){if(Tn===4||Tn===3){Tn=0,Te();var e=wa,n=Zr,a=Kr,o=gg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Tn=5:(Tn=0,Zr=wa=null,Dg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ra=null),De(a),n=n.stateNode,dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(ut,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,u=Z.p,Z.p=2,I.T=null;try{for(var f=e.onRecoverableError,S=0;S<o.length;S++){var b=o[S];f(b.value,{componentStack:b.stack})}}finally{I.T=n,Z.p=u}}(Kr&3)!==0&&zl(),Ri(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===Sf?uo++:(uo=0,Sf=e):uo=0,fo(0)}}function Dg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Xs(n)))}function zl(e){return Rg(),wg(),Cg(),Ug()}function Ug(){if(Tn!==5)return!1;var e=wa,n=vf;vf=0;var a=De(Kr),o=I.T,u=Z.p;try{Z.p=32>a?32:a,I.T=null,a=xf,xf=null;var f=wa,S=Kr;if(Tn=0,Zr=wa=null,Kr=0,(Ue&6)!==0)throw Error(r(331));var b=Ue;if(Ue|=4,pg(f.current),fg(f,f.current,S,a),Ue=b,fo(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(ut,f)}catch{}return!0}finally{Z.p=u,I.T=o,Dg(e,n)}}function Lg(e,n,a){n=ti(a,n),n=Qu(e.stateNode,n,2),e=va(e,n,2),e!==null&&(It(e,2),Ri(e))}function Ge(e,n,a){if(e.tag===3)Lg(e,e,a);else for(;n!==null;){if(n.tag===3){Lg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ra===null||!Ra.has(o))){e=ti(a,e),a=Im(2),o=va(n,a,2),o!==null&&(zm(a,o,n,e),It(o,2),Ri(o));break}}n=n.return}}function Tf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Nx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(pf=!0,u.add(a),e=Bx.bind(null,e,n,a),n.then(e,e))}function Bx(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ke===e&&(Me&a)===a&&(Ze===4||Ze===3&&(Me&62914560)===Me&&300>pe()-_f?(Ue&2)===0&&Qr(e,0):mf|=a,jr===Me&&(jr=0)),Ri(e)}function Ng(e,n){n===0&&(n=Ut()),e=Nr(e,n),e!==null&&(It(e,n),Ri(e))}function Fx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Ng(e,a)}function Hx(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Ng(e,a)}function Gx(e,n){return _e(e,n)}var Bl=null,$r=null,bf=!1,Fl=!1,Af=!1,ur=0;function Ri(e){e!==$r&&e.next===null&&($r===null?Bl=$r=e:$r=$r.next=e),Fl=!0,bf||(bf=!0,kx())}function fo(e,n){if(!Af&&Fl){Af=!0;do for(var a=!1,o=Bl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var S=o.suspendedLanes,b=o.pingedLanes;f=(1<<31-Ot(42|e)+1)-1,f&=u&~(S&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,zg(o,f))}else f=Me,f=Yt(o,o===ke?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Rt(o,f)||(a=!0,zg(o,f));o=o.next}while(a);Af=!1}}function Vx(){Og()}function Og(){Fl=bf=!1;var e=0;ur!==0&&(Qx()&&(e=ur),ur=0);for(var n=pe(),a=null,o=Bl;o!==null;){var u=o.next,f=Pg(o,n);f===0?(o.next=null,a===null?Bl=u:a.next=u,u===null&&($r=a)):(a=o,(e!==0||(f&3)!==0)&&(Fl=!0)),o=u}fo(e)}function Pg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-Ot(f),b=1<<S,O=u[S];O===-1?((b&a)===0||(b&o)!==0)&&(u[S]=ie(b,n)):O<=n&&(e.expiredLanes|=b),f&=~b}if(n=ke,a=Me,a=Yt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Le===2||Le===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&F(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Rt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&F(o),De(a)){case 2:case 8:a=jt;break;case 32:a=ae;break;case 268435456:a=L;break;default:a=ae}return o=Ig.bind(null,e),a=_e(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&F(o),e.callbackPriority=2,e.callbackNode=null,2}function Ig(e,n){if(Tn!==0&&Tn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(zl()&&e.callbackNode!==a)return null;var o=Me;return o=Yt(e,e===ke?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(vg(e,o,n),Pg(e,pe()),e.callbackNode!=null&&e.callbackNode===a?Ig.bind(null,e):null)}function zg(e,n){if(zl())return null;vg(e,n,!0)}function kx(){$x(function(){(Ue&6)!==0?_e(ve,Vx):Og()})}function Rf(){return ur===0&&(ur=k()),ur}function Bg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ko(""+e)}function Fg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Xx(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=Bg((u[yn]||null).action),S=o.submitter;S&&(n=(n=S[yn]||null)?Bg(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var b=new tl("action","action",null,o,u);e.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ur!==0){var O=S?Fg(u,S):new FormData(u);qu(a,{pending:!0,data:O,method:u.method,action:f},null,O)}}else typeof f=="function"&&(b.preventDefault(),O=S?Fg(u,S):new FormData(u),qu(a,{pending:!0,data:O,method:u.method,action:f},f,O))},currentTarget:u}]})}}for(var wf=0;wf<fu.length;wf++){var Cf=fu[wf],Wx=Cf.toLowerCase(),qx=Cf[0].toUpperCase()+Cf.slice(1);ui(Wx,"on"+qx)}ui(vp,"onAnimationEnd"),ui(xp,"onAnimationIteration"),ui(Sp,"onAnimationStart"),ui("dblclick","onDoubleClick"),ui("focusin","onFocus"),ui("focusout","onBlur"),ui(cx,"onTransitionRun"),ui(ux,"onTransitionStart"),ui(fx,"onTransitionCancel"),ui(yp,"onTransitionEnd"),R("onMouseEnter",["mouseout","mouseover"]),R("onMouseLeave",["mouseout","mouseover"]),R("onPointerEnter",["pointerout","pointerover"]),R("onPointerLeave",["pointerout","pointerover"]),Pi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ho));function Hg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var S=o.length-1;0<=S;S--){var b=o[S],O=b.instance,J=b.currentTarget;if(b=b.listener,O!==f&&u.isPropagationStopped())break t;f=b,u.currentTarget=J;try{f(u)}catch(ct){Al(ct)}u.currentTarget=null,f=O}else for(S=0;S<o.length;S++){if(b=o[S],O=b.instance,J=b.currentTarget,b=b.listener,O!==f&&u.isPropagationStopped())break t;f=b,u.currentTarget=J;try{f(u)}catch(ct){Al(ct)}u.currentTarget=null,f=O}}}}function ge(e,n){var a=n[qa];a===void 0&&(a=n[qa]=new Set);var o=e+"__bubble";a.has(o)||(Gg(n,e,2,!1),a.add(o))}function Df(e,n,a){var o=0;n&&(o|=4),Gg(a,e,o,n)}var Hl="_reactListening"+Math.random().toString(36).slice(2);function Uf(e){if(!e[Hl]){e[Hl]=!0,jo.forEach(function(a){a!=="selectionchange"&&(Yx.has(a)||Df(a,!1,e),Df(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Hl]||(n[Hl]=!0,Df("selectionchange",!1,n))}}function Gg(e,n,a,o){switch(f_(n)){case 2:var u=SS;break;case 8:u=yS;break;default:u=Wf}a=u.bind(null,n,a,e),u=void 0,!Jc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Lf(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var b=o.stateNode.containerInfo;if(b===u)break;if(S===4)for(S=o.return;S!==null;){var O=S.tag;if((O===3||O===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;b!==null;){if(S=Ni(b),S===null)return;if(O=S.tag,O===5||O===6||O===26||O===27){o=f=S;continue t}b=b.parentNode}}o=o.return}jd(function(){var J=f,ct=Kc(a),mt=[];t:{var nt=Mp.get(e);if(nt!==void 0){var it=tl,ee=e;switch(e){case"keypress":if(Jo(a)===0)break t;case"keydown":case"keyup":it=G0;break;case"focusin":ee="focus",it=nu;break;case"focusout":ee="blur",it=nu;break;case"beforeblur":case"afterblur":it=nu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=Qd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=C0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=X0;break;case vp:case xp:case Sp:it=L0;break;case yp:it=q0;break;case"scroll":case"scrollend":it=R0;break;case"wheel":it=j0;break;case"copy":case"cut":case"paste":it=O0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=$d;break;case"toggle":case"beforetoggle":it=K0}var Jt=(n&4)!==0,ze=!Jt&&(e==="scroll"||e==="scrollend"),X=Jt?nt!==null?nt+"Capture":null:nt;Jt=[];for(var G=J,K;G!==null;){var ft=G;if(K=ft.stateNode,ft=ft.tag,ft!==5&&ft!==26&&ft!==27||K===null||X===null||(ft=Us(G,X),ft!=null&&Jt.push(po(G,ft,K))),ze)break;G=G.return}0<Jt.length&&(nt=new it(nt,ee,null,a,ct),mt.push({event:nt,listeners:Jt}))}}if((n&7)===0){t:{if(nt=e==="mouseover"||e==="pointerover",it=e==="mouseout"||e==="pointerout",nt&&a!==Zc&&(ee=a.relatedTarget||a.fromElement)&&(Ni(ee)||ee[Pn]))break t;if((it||nt)&&(nt=ct.window===ct?ct:(nt=ct.ownerDocument)?nt.defaultView||nt.parentWindow:window,it?(ee=a.relatedTarget||a.toElement,it=J,ee=ee?Ni(ee):null,ee!==null&&(ze=c(ee),Jt=ee.tag,ee!==ze||Jt!==5&&Jt!==27&&Jt!==6)&&(ee=null)):(it=null,ee=J),it!==ee)){if(Jt=Qd,ft="onMouseLeave",X="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&(Jt=$d,ft="onPointerLeave",X="onPointerEnter",G="pointer"),ze=it==null?nt:ja(it),K=ee==null?nt:ja(ee),nt=new Jt(ft,G+"leave",it,a,ct),nt.target=ze,nt.relatedTarget=K,ft=null,Ni(ct)===J&&(Jt=new Jt(X,G+"enter",ee,a,ct),Jt.target=K,Jt.relatedTarget=ze,ft=Jt),ze=ft,it&&ee)e:{for(Jt=it,X=ee,G=0,K=Jt;K;K=ts(K))G++;for(K=0,ft=X;ft;ft=ts(ft))K++;for(;0<G-K;)Jt=ts(Jt),G--;for(;0<K-G;)X=ts(X),K--;for(;G--;){if(Jt===X||X!==null&&Jt===X.alternate)break e;Jt=ts(Jt),X=ts(X)}Jt=null}else Jt=null;it!==null&&Vg(mt,nt,it,Jt,!1),ee!==null&&ze!==null&&Vg(mt,ze,ee,Jt,!0)}}t:{if(nt=J?ja(J):window,it=nt.nodeName&&nt.nodeName.toLowerCase(),it==="select"||it==="input"&&nt.type==="file")var Ht=op;else if(rp(nt))if(lp)Ht=sx;else{Ht=ax;var de=ix}else it=nt.nodeName,!it||it.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?J&&jc(J.elementType)&&(Ht=op):Ht=rx;if(Ht&&(Ht=Ht(e,J))){sp(mt,Ht,a,ct);break t}de&&de(e,nt,J),e==="focusout"&&J&&nt.type==="number"&&J.memoizedProps.value!=null&&An(nt,"number",nt.value)}switch(de=J?ja(J):window,e){case"focusin":(rp(de)||de.contentEditable==="true")&&(Dr=de,lu=J,Fs=null);break;case"focusout":Fs=lu=Dr=null;break;case"mousedown":cu=!0;break;case"contextmenu":case"mouseup":case"dragend":cu=!1,gp(mt,a,ct);break;case"selectionchange":if(lx)break;case"keydown":case"keyup":gp(mt,a,ct)}var Wt;if(au)t:{switch(e){case"compositionstart":var $t="onCompositionStart";break t;case"compositionend":$t="onCompositionEnd";break t;case"compositionupdate":$t="onCompositionUpdate";break t}$t=void 0}else Cr?ip(e,a)&&($t="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&($t="onCompositionStart");$t&&(tp&&a.locale!=="ko"&&(Cr||$t!=="onCompositionStart"?$t==="onCompositionEnd"&&Cr&&(Wt=Zd()):(pa=ct,$c="value"in pa?pa.value:pa.textContent,Cr=!0)),de=Gl(J,$t),0<de.length&&($t=new Jd($t,e,null,a,ct),mt.push({event:$t,listeners:de}),Wt?$t.data=Wt:(Wt=ap(a),Wt!==null&&($t.data=Wt)))),(Wt=J0?$0(e,a):tx(e,a))&&($t=Gl(J,"onBeforeInput"),0<$t.length&&(de=new Jd("onBeforeInput","beforeinput",null,a,ct),mt.push({event:de,listeners:$t}),de.data=Wt)),Xx(mt,e,J,a,ct)}Hg(mt,n)})}function po(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Gl(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Us(e,a),u!=null&&o.unshift(po(e,u,f)),u=Us(e,n),u!=null&&o.push(po(e,u,f))),e.tag===3)return o;e=e.return}return[]}function ts(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Vg(e,n,a,o,u){for(var f=n._reactName,S=[];a!==null&&a!==o;){var b=a,O=b.alternate,J=b.stateNode;if(b=b.tag,O!==null&&O===o)break;b!==5&&b!==26&&b!==27||J===null||(O=J,u?(J=Us(a,f),J!=null&&S.unshift(po(a,J,O))):u||(J=Us(a,f),J!=null&&S.push(po(a,J,O)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var jx=/\r\n?/g,Zx=/\u0000|\uFFFD/g;function kg(e){return(typeof e=="string"?e:""+e).replace(jx,`
`).replace(Zx,"")}function Xg(e,n){return n=kg(n),kg(e)===n}function Vl(){}function Ie(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Mi(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Mi(e,""+o);break;case"className":Ct(e,"class",o);break;case"tabIndex":Ct(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ct(e,a,o);break;case"style":qd(e,o,f);break;case"data":if(n!=="object"){Ct(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ko(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ie(e,n,"name",u.name,u,null),Ie(e,n,"formEncType",u.formEncType,u,null),Ie(e,n,"formMethod",u.formMethod,u,null),Ie(e,n,"formTarget",u.formTarget,u,null)):(Ie(e,n,"encType",u.encType,u,null),Ie(e,n,"method",u.method,u,null),Ie(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ko(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Vl);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Ko(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ge("beforetoggle",e),ge("toggle",e),Tt(e,"popover",o);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Tt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=b0.get(a)||a,Tt(e,a,o))}}function Nf(e,n,a,o,u,f){switch(a){case"style":qd(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Mi(e,o):(typeof o=="number"||typeof o=="bigint")&&Mi(e,""+o);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Vl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Zo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[yn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Tt(e,a,o)}}}function bn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ie(e,n,f,S,a,null)}}u&&Ie(e,n,"srcSet",a.srcSet,a,null),o&&Ie(e,n,"src",a.src,a,null);return;case"input":ge("invalid",e);var b=f=S=u=null,O=null,J=null;for(o in a)if(a.hasOwnProperty(o)){var ct=a[o];if(ct!=null)switch(o){case"name":u=ct;break;case"type":S=ct;break;case"checked":O=ct;break;case"defaultChecked":J=ct;break;case"value":f=ct;break;case"defaultValue":b=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(r(137,n));break;default:Ie(e,n,o,ct,a,null)}}He(e,f,b,O,J,S,u,!1),Oe(e);return;case"select":ge("invalid",e),o=S=f=null;for(u in a)if(a.hasOwnProperty(u)&&(b=a[u],b!=null))switch(u){case"value":f=b;break;case"defaultValue":S=b;break;case"multiple":o=b;default:Ie(e,n,u,b,a,null)}n=f,a=S,e.multiple=!!o,n!=null?sn(e,!!o,n,!1):a!=null&&sn(e,!!o,a,!0);return;case"textarea":ge("invalid",e),f=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(b=a[S],b!=null))switch(S){case"value":o=b;break;case"defaultValue":u=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:Ie(e,n,S,b,a,null)}Mn(e,o,u,f),Oe(e);return;case"option":for(O in a)if(a.hasOwnProperty(O)&&(o=a[O],o!=null))switch(O){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ie(e,n,O,o,a,null)}return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(o=0;o<ho.length;o++)ge(ho[o],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(o=a[J],o!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ie(e,n,J,o,a,null)}return;default:if(jc(n)){for(ct in a)a.hasOwnProperty(ct)&&(o=a[ct],o!==void 0&&Nf(e,n,ct,o,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(o=a[b],o!=null&&Ie(e,n,b,o,a,null))}function Kx(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,S=null,b=null,O=null,J=null,ct=null;for(it in a){var mt=a[it];if(a.hasOwnProperty(it)&&mt!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":O=mt;default:o.hasOwnProperty(it)||Ie(e,n,it,null,o,mt)}}for(var nt in o){var it=o[nt];if(mt=a[nt],o.hasOwnProperty(nt)&&(it!=null||mt!=null))switch(nt){case"type":f=it;break;case"name":u=it;break;case"checked":J=it;break;case"defaultChecked":ct=it;break;case"value":S=it;break;case"defaultValue":b=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:it!==mt&&Ie(e,n,nt,it,o,mt)}}Ii(e,S,b,O,J,ct,f,u);return;case"select":it=S=b=nt=null;for(f in a)if(O=a[f],a.hasOwnProperty(f)&&O!=null)switch(f){case"value":break;case"multiple":it=O;default:o.hasOwnProperty(f)||Ie(e,n,f,null,o,O)}for(u in o)if(f=o[u],O=a[u],o.hasOwnProperty(u)&&(f!=null||O!=null))switch(u){case"value":nt=f;break;case"defaultValue":b=f;break;case"multiple":S=f;default:f!==O&&Ie(e,n,u,f,o,O)}n=b,a=S,o=it,nt!=null?sn(e,!!a,nt,!1):!!o!=!!a&&(n!=null?sn(e,!!a,n,!0):sn(e,!!a,a?[]:"",!1));return;case"textarea":it=nt=null;for(b in a)if(u=a[b],a.hasOwnProperty(b)&&u!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ie(e,n,b,null,o,u)}for(S in o)if(u=o[S],f=a[S],o.hasOwnProperty(S)&&(u!=null||f!=null))switch(S){case"value":nt=u;break;case"defaultValue":it=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Ie(e,n,S,u,o,f)}dn(e,nt,it);return;case"option":for(var ee in a)if(nt=a[ee],a.hasOwnProperty(ee)&&nt!=null&&!o.hasOwnProperty(ee))switch(ee){case"selected":e.selected=!1;break;default:Ie(e,n,ee,null,o,nt)}for(O in o)if(nt=o[O],it=a[O],o.hasOwnProperty(O)&&nt!==it&&(nt!=null||it!=null))switch(O){case"selected":e.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Ie(e,n,O,nt,o,it)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in a)nt=a[Jt],a.hasOwnProperty(Jt)&&nt!=null&&!o.hasOwnProperty(Jt)&&Ie(e,n,Jt,null,o,nt);for(J in o)if(nt=o[J],it=a[J],o.hasOwnProperty(J)&&nt!==it&&(nt!=null||it!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:Ie(e,n,J,nt,o,it)}return;default:if(jc(n)){for(var ze in a)nt=a[ze],a.hasOwnProperty(ze)&&nt!==void 0&&!o.hasOwnProperty(ze)&&Nf(e,n,ze,void 0,o,nt);for(ct in o)nt=o[ct],it=a[ct],!o.hasOwnProperty(ct)||nt===it||nt===void 0&&it===void 0||Nf(e,n,ct,nt,o,it);return}}for(var X in a)nt=a[X],a.hasOwnProperty(X)&&nt!=null&&!o.hasOwnProperty(X)&&Ie(e,n,X,null,o,nt);for(mt in o)nt=o[mt],it=a[mt],!o.hasOwnProperty(mt)||nt===it||nt==null&&it==null||Ie(e,n,mt,nt,o,it)}var Of=null,Pf=null;function kl(e){return e.nodeType===9?e:e.ownerDocument}function Wg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function qg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function If(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var zf=null;function Qx(){var e=window.event;return e&&e.type==="popstate"?e===zf?!1:(zf=e,!0):(zf=null,!1)}var Yg=typeof setTimeout=="function"?setTimeout:void 0,Jx=typeof clearTimeout=="function"?clearTimeout:void 0,jg=typeof Promise=="function"?Promise:void 0,$x=typeof queueMicrotask=="function"?queueMicrotask:typeof jg<"u"?function(e){return jg.resolve(null).then(e).catch(tS)}:Yg;function tS(e){setTimeout(function(){throw e})}function Da(e){return e==="head"}function Zg(e,n){var a=n,o=0,u=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var S=e.ownerDocument;if(a&1&&mo(S.documentElement),a&2&&mo(S.body),a&4)for(a=S.head,mo(a),S=a.firstChild;S;){var b=S.nextSibling,O=S.nodeName;S[ua]||O==="SCRIPT"||O==="STYLE"||O==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=b}}if(u===0){e.removeChild(f),Eo(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);Eo(n)}function Bf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Bf(a),fa(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function eS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ua])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=hi(e.nextSibling),e===null)break}return null}function nS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=hi(e.nextSibling),e===null))return null;return e}function Ff(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function iS(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function hi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Hf=null;function Kg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function Qg(e,n,a){switch(n=kl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function mo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);fa(e)}var si=new Map,Jg=new Set;function Xl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Qi=Z.d;Z.d={f:aS,r:rS,D:sS,C:oS,L:lS,m:cS,X:fS,S:uS,M:hS};function aS(){var e=Qi.f(),n=Pl();return e||n}function rS(e){var n=Oi(e);n!==null&&n.tag===5&&n.type==="form"?vm(n):Qi.r(e)}var es=typeof document>"u"?null:document;function $g(e,n,a){var o=es;if(o&&typeof n=="string"&&n){var u=Ve(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Jg.has(u)||(Jg.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),bn(n,"link",e),tn(n),o.head.appendChild(n)))}}function sS(e){Qi.D(e),$g("dns-prefetch",e,null)}function oS(e,n){Qi.C(e,n),$g("preconnect",e,n)}function lS(e,n,a){Qi.L(e,n,a);var o=es;if(o&&e&&n){var u='link[rel="preload"][as="'+Ve(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ve(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ve(a.imageSizes)+'"]')):u+='[href="'+Ve(e)+'"]';var f=u;switch(n){case"style":f=ns(e);break;case"script":f=is(e)}si.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),si.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(go(f))||n==="script"&&o.querySelector(_o(f))||(n=o.createElement("link"),bn(n,"link",e),tn(n),o.head.appendChild(n)))}}function cS(e,n){Qi.m(e,n);var a=es;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ve(o)+'"][href="'+Ve(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=is(e)}if(!si.has(f)&&(e=g({rel:"modulepreload",href:e},n),si.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(_o(f)))return}o=a.createElement("link"),bn(o,"link",e),tn(o),a.head.appendChild(o)}}}function uS(e,n,a){Qi.S(e,n,a);var o=es;if(o&&e){var u=ha(o).hoistableStyles,f=ns(e);n=n||"default";var S=u.get(f);if(!S){var b={loading:0,preload:null};if(S=o.querySelector(go(f)))b.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=si.get(f))&&Gf(e,a);var O=S=o.createElement("link");tn(O),bn(O,"link",e),O._p=new Promise(function(J,ct){O.onload=J,O.onerror=ct}),O.addEventListener("load",function(){b.loading|=1}),O.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Wl(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:b},u.set(f,S)}}}function fS(e,n){Qi.X(e,n);var a=es;if(a&&e){var o=ha(a).hoistableScripts,u=is(e),f=o.get(u);f||(f=a.querySelector(_o(u)),f||(e=g({src:e,async:!0},n),(n=si.get(u))&&Vf(e,n),f=a.createElement("script"),tn(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function hS(e,n){Qi.M(e,n);var a=es;if(a&&e){var o=ha(a).hoistableScripts,u=is(e),f=o.get(u);f||(f=a.querySelector(_o(u)),f||(e=g({src:e,async:!0,type:"module"},n),(n=si.get(u))&&Vf(e,n),f=a.createElement("script"),tn(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function t_(e,n,a,o){var u=(u=yt.current)?Xl(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ns(a.href),a=ha(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ns(a.href);var f=ha(u).hoistableStyles,S=f.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=u.querySelector(go(e)))&&!f._p&&(S.instance=f,S.state.loading=5),si.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},si.set(e,a),f||dS(u,e,a,S.state))),n&&o===null)throw Error(r(528,""));return S}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=is(a),a=ha(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ns(e){return'href="'+Ve(e)+'"'}function go(e){return'link[rel="stylesheet"]['+e+"]"}function e_(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function dS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),bn(n,"link",a),tn(n),e.head.appendChild(n))}function is(e){return'[src="'+Ve(e)+'"]'}function _o(e){return"script[async]"+e}function n_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Ve(a.href)+'"]');if(o)return n.instance=o,tn(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),tn(o),bn(o,"style",u),Wl(o,a.precedence,e),n.instance=o;case"stylesheet":u=ns(a.href);var f=e.querySelector(go(u));if(f)return n.state.loading|=4,n.instance=f,tn(f),f;o=e_(a),(u=si.get(u))&&Gf(o,u),f=(e.ownerDocument||e).createElement("link"),tn(f);var S=f;return S._p=new Promise(function(b,O){S.onload=b,S.onerror=O}),bn(f,"link",o),n.state.loading|=4,Wl(f,a.precedence,e),n.instance=f;case"script":return f=is(a.src),(u=e.querySelector(_o(f)))?(n.instance=u,tn(u),u):(o=a,(u=si.get(f))&&(o=g({},a),Vf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),tn(u),bn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Wl(o,a.precedence,e));return n.instance}function Wl(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,S=0;S<o.length;S++){var b=o[S];if(b.dataset.precedence===n)f=b;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Gf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Vf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ql=null;function i_(e,n,a){if(ql===null){var o=new Map,u=ql=new Map;u.set(a,o)}else u=ql,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[ua]||f[rn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var b=o.get(S);b?b.push(f):o.set(S,[f])}}return o}function a_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function pS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function r_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var vo=null;function mS(){}function gS(e,n,a){if(vo===null)throw Error(r(475));var o=vo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=ns(a.href),f=e.querySelector(go(u));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=Yl.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=f,tn(f);return}f=e.ownerDocument||e,a=e_(a),(u=si.get(u))&&Gf(a,u),f=f.createElement("link"),tn(f);var S=f;S._p=new Promise(function(b,O){S.onload=b,S.onerror=O}),bn(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=Yl.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function _S(){if(vo===null)throw Error(r(475));var e=vo;return e.stylesheets&&e.count===0&&kf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&kf(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Yl(){if(this.count--,this.count===0){if(this.stylesheets)kf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var jl=null;function kf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,jl=new Map,n.forEach(vS,e),jl=null,Yl.call(e))}function vS(e,n){if(!(n.state.loading&4)){var a=jl.get(e);if(a)var o=a.get(null);else{a=new Map,jl.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var S=u[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),f=a.get(S)||o,f===o&&a.set(null,u),a.set(S,u),this.count++,o=Yl.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var xo={$$typeof:N,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function xS(e,n,a,o,u,f,S,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Et(0),this.hiddenUpdates=Et(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function s_(e,n,a,o,u,f,S,b,O,J,ct,mt){return e=new xS(e,n,a,S,b,O,J,mt),n=1,f===!0&&(n|=24),f=qn(3,null,null,n),e.current=f,f.stateNode=e,n=Eu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Ru(f),e}function o_(e){return e?(e=Or,e):Or}function l_(e,n,a,o,u,f){u=o_(u),o.context===null?o.context=u:o.pendingContext=u,o=_a(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=va(e,o,n),a!==null&&(Qn(a,e,n),js(a,e,n))}function c_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Xf(e,n){c_(e,n),(e=e.alternate)&&c_(e,n)}function u_(e){if(e.tag===13){var n=Nr(e,67108864);n!==null&&Qn(n,e,67108864),Xf(e,67108864)}}var Zl=!0;function SS(e,n,a,o){var u=I.T;I.T=null;var f=Z.p;try{Z.p=2,Wf(e,n,a,o)}finally{Z.p=f,I.T=u}}function yS(e,n,a,o){var u=I.T;I.T=null;var f=Z.p;try{Z.p=8,Wf(e,n,a,o)}finally{Z.p=f,I.T=u}}function Wf(e,n,a,o){if(Zl){var u=qf(o);if(u===null)Lf(e,n,o,Kl,a),h_(e,o);else if(ES(u,e,n,a,o))o.stopPropagation();else if(h_(e,o),n&4&&-1<MS.indexOf(e)){for(;u!==null;){var f=Oi(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=qt(f.pendingLanes);if(S!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;S;){var O=1<<31-Ot(S);b.entanglements[1]|=O,S&=~O}Ri(f),(Ue&6)===0&&(Nl=pe()+500,fo(0))}}break;case 13:b=Nr(f,2),b!==null&&Qn(b,f,2),Pl(),Xf(f,2)}if(f=qf(o),f===null&&Lf(e,n,o,Kl,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Lf(e,n,o,null,a)}}function qf(e){return e=Kc(e),Yf(e)}var Kl=null;function Yf(e){if(Kl=null,e=Ni(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Kl=e,null}function f_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Vt()){case ve:return 2;case jt:return 8;case ae:case Qe:return 32;case L:return 268435456;default:return 32}default:return 32}}var jf=!1,Ua=null,La=null,Na=null,So=new Map,yo=new Map,Oa=[],MS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function h_(e,n){switch(e){case"focusin":case"focusout":Ua=null;break;case"dragenter":case"dragleave":La=null;break;case"mouseover":case"mouseout":Na=null;break;case"pointerover":case"pointerout":So.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":yo.delete(n.pointerId)}}function Mo(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Oi(n),n!==null&&u_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function ES(e,n,a,o,u){switch(n){case"focusin":return Ua=Mo(Ua,e,n,a,o,u),!0;case"dragenter":return La=Mo(La,e,n,a,o,u),!0;case"mouseover":return Na=Mo(Na,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return So.set(f,Mo(So.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,yo.set(f,Mo(yo.get(f)||null,e,n,a,o,u)),!0}return!1}function d_(e){var n=Ni(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Xn(e.priority,function(){if(a.tag===13){var o=Kn();o=ne(o);var u=Nr(a,o);u!==null&&Qn(u,a,o),Xf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ql(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=qf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Zc=o,a.target.dispatchEvent(o),Zc=null}else return n=Oi(a),n!==null&&u_(n),e.blockedOn=a,!1;n.shift()}return!0}function p_(e,n,a){Ql(e)&&a.delete(n)}function TS(){jf=!1,Ua!==null&&Ql(Ua)&&(Ua=null),La!==null&&Ql(La)&&(La=null),Na!==null&&Ql(Na)&&(Na=null),So.forEach(p_),yo.forEach(p_)}function Jl(e,n){e.blockedOn===n&&(e.blockedOn=null,jf||(jf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,TS)))}var $l=null;function m_(e){$l!==e&&($l=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){$l===e&&($l=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Yf(o||a)===null)continue;break}var f=Oi(a);f!==null&&(e.splice(n,3),n-=3,qu(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Eo(e){function n(O){return Jl(O,e)}Ua!==null&&Jl(Ua,e),La!==null&&Jl(La,e),Na!==null&&Jl(Na,e),So.forEach(n),yo.forEach(n);for(var a=0;a<Oa.length;a++){var o=Oa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Oa.length&&(a=Oa[0],a.blockedOn===null);)d_(a),a.blockedOn===null&&Oa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],S=u[yn]||null;if(typeof f=="function")S||m_(a);else if(S){var b=null;if(f&&f.hasAttribute("formAction")){if(u=f,S=f[yn]||null)b=S.formAction;else if(Yf(u)!==null)continue}else b=S.action;typeof b=="function"?a[o+1]=b:(a.splice(o,3),o-=3),m_(a)}}}function Zf(e){this._internalRoot=e}tc.prototype.render=Zf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Kn();l_(a,o,e,n,null,null)},tc.prototype.unmount=Zf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;l_(e.current,2,null,e,null,null),Pl(),n[Pn]=null}};function tc(e){this._internalRoot=e}tc.prototype.unstable_scheduleHydration=function(e){if(e){var n=be();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Oa.length&&n!==0&&n<Oa[a].priority;a++);Oa.splice(a,0,e),a===0&&d_(e)}};var g_=t.version;if(g_!=="19.1.0")throw Error(r(527,g_,"19.1.0"));Z.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var bS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ec.isDisabled&&ec.supportsFiber)try{ut=ec.inject(bS),dt=ec}catch{}}return bo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=Lm,f=Nm,S=Om,b=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks)),n=s_(e,1,!1,null,null,a,o,u,f,S,b,null),e[Pn]=n.current,Uf(e),new Zf(n)},bo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",f=Lm,S=Nm,b=Om,O=null,J=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(O=a.unstable_transitionCallbacks),a.formState!==void 0&&(J=a.formState)),n=s_(e,1,!0,n,a??null,o,u,f,S,b,O,J),n.context=o_(null),a=n.current,o=Kn(),o=ne(o),u=_a(o),u.callback=null,va(a,u,o),a=o,n.current.lanes=a,It(n,a),Ri(n),e[Pn]=n.current,Uf(e),new tc(n)},bo.version="19.1.0",bo}var A_;function PS(){if(A_)return Jf.exports;A_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Jf.exports=OS(),Jf.exports}var IS=PS();function zS(){const[s,t]=Vn.useState({x:0,y:0});return Vn.useEffect(()=>{const i=r=>{t({x:r.clientX,y:r.clientY})};return window.addEventListener("pointermove",i),()=>window.removeEventListener("pointermove",i)},[]),Bt.jsx("div",{role:"presentation","data-testid":"mouse-follower",className:"mouse-follower",style:{top:`${s.y}px`,left:`${s.x}px`}})}function BS(){return Bt.jsxs("section",{className:"presentation",children:[Bt.jsx("h1",{children:"Iago Porto"}),Bt.jsx("h2",{children:"Software Engineer"}),Bt.jsxs("p",{children:["I bring ",Bt.jsx("strong",{children:"applications to life"}),", turning ideas into robust systems that process data, solve complex problems, and connect everything happening behind the scenes"]})]})}const nc=["about","experience","projects"];function FS(){const[s,t]=Vn.useState("");Vn.useEffect(()=>{const r=()=>{let l="";nc.forEach(c=>{const h=document.getElementById(c);if(h){const d=h.getBoundingClientRect();d.top<=window.innerHeight/nc.length&&d.bottom>=window.innerHeight/nc.length&&(l=c)}}),t(l)};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]);const i=(r,l)=>{l.preventDefault();const c=document.getElementById(r);c&&c.scrollIntoView({behavior:"smooth",block:"start"})};return Bt.jsx("nav",{className:"menu",children:Bt.jsx("ul",{children:nc.map(r=>Bt.jsx("li",{children:Bt.jsx("a",{href:`#${r}`,className:`menu-item ${s===r?"active":""}`,onClick:l=>i(r,l),children:r.toUpperCase()})},r))})})}function HS(){return Bt.jsxs("section",{id:"about",children:[Bt.jsx("h2",{className:"section-title",children:"About Me"}),Bt.jsx("p",{children:"I'm Iago Porto, a software engineer who loves turning complex requirements into smooth-running systems. Tech stack? I'm tool-agnostic; whether it's Java/Spring, Django or PostgreSQL, I'll pick what fits the task. Early on, I started out tinkering with small projects; now I help design and maintain full-stack platforms for automotive testing and industrial automation."}),Bt.jsx("p",{children:"In my roles at Technica Engineering and Imatia, I've rolled out new features, set up CI/CD pipelines, and bridged backend services with React, JavaFX or Android frontends. Along the way, I've optimized SQL queries, containerized workflows, and even refined user interfaces;always aiming for reliability and a clean developer experience."}),Bt.jsx("p",{children:"I work best in agile teams where collaboration and continuous improvement come first. Whether it's refactoring legacy code, sketching out microservices or experimenting with hexagonal architecture, I'm driven by solving real-world problems and learning the next best practice."})]})}var nh={exports:{}},ih,R_;function GS(){if(R_)return ih;R_=1;var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return ih=s,ih}var ah,w_;function VS(){if(w_)return ah;w_=1;var s=GS();function t(){}function i(){}return i.resetWarningCache=t,ah=function(){function r(h,d,m,p,g,_){if(_!==s){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}r.isRequired=r;function l(){return r}var c={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:l,element:r,elementType:r,instanceOf:l,node:r,objectOf:l,oneOf:l,oneOfType:l,shape:l,exact:l,checkPropTypes:i,resetWarningCache:t};return c.PropTypes=c,c},ah}var C_;function kS(){return C_||(C_=1,nh.exports=VS()()),nh.exports}var XS=kS();const Gn=Xv(XS);function Vh({companyName:s,companyUrl:t,position:i,initDate:r,finalDate:l,details:c}){return Bt.jsxs("div",{className:"job",children:[Bt.jsxs("h3",{children:[i," at"," ",Bt.jsx("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:s})]}),Bt.jsxs("p",{children:[r," - ",l]}),Bt.jsx("ul",{children:c.map((h,d)=>Bt.jsx("li",{children:h},d))})]})}Vh.propTypes={companyName:Gn.string.isRequired,companyUrl:Gn.string.isRequired,position:Gn.string.isRequired,initDate:Gn.string.isRequired,finalDate:Gn.string.isRequired,details:Gn.arrayOf(Gn.string).isRequired};function WS(){return Bt.jsxs("section",{className:"experience",id:"experience",children:[Bt.jsx("h2",{className:"section-title",children:"Experience"}),Bt.jsx(Vh,{position:"Software Engineer",companyName:"Technica Engineering Spain",companyUrl:"https://www.technica-engineering.de/",initDate:"April 2025",finalDate:"Present",details:["Built a full-stack platform for automotive testing with Django on the backend and React on the frontend.","Wired Jenkins pipelines into the UI so engineers can launch vehicle tests with one click.","Set up GitLab CI/CD flows that eliminated manual steps and accelerated our release cadence.","Swapped container-based deployments for native Windows execution to simplify test-bench integration.","Partnered with UX designers and test engineers to streamline interfaces and workflows.","Backed everything up with unit and integration tests (pytest & Vitest) for rock-solid reliability.","Owned Scrum ceremonies, sprint planning, daily stand-ups, retrospectives and drove code reviews."]}),Bt.jsx(Vh,{position:"Software Engineer",companyName:"Imatia Innovation",companyUrl:"https://www.imatia.com/",initDate:"May 2023",finalDate:"March 2025",details:["Designed and deployed Java/Spring microservices and REST APIs for industrial automation.","Refactored legacy modules, boosting performance and easing future maintenance.","Fine-tuned Oracle & PostgreSQL queries and managed schema changes via Liquibase.","Automated truck logistics and hooked up telecom-admin tools for public-sector clients.","Built real-time monitoring panels in JavaFX and Android to visualize system health.","Developed a C++ OCR microservice for license-plate detection, integrated via Spring.","Cut SQL runtimes by over 50% and polished Android app workflows for better UX."]})]})}function Ic({name:s,description:t,url:i,photos:r=[],tecnologies:l}){const[c,h]=Vn.useState(0),d=3e3;return Vn.useEffect(()=>{const m=setInterval(()=>{h(p=>(p+1)%r.length)},d);return()=>clearInterval(m)},[r.length]),Bt.jsxs("div",{className:"project",children:[Bt.jsx("h3",{children:s}),Bt.jsxs("p",{children:[Bt.jsx("strong",{children:"Description:"})," ",t]}),Bt.jsxs("p",{children:[Bt.jsx("strong",{children:"Stack:"})," ",l.join(", ")]}),Bt.jsx("a",{href:i,target:"_blank",rel:"noopener noreferrer",children:r.length>0&&Bt.jsx("img",{src:r[c],alt:`${s} slide ${c+1}`,className:"project-photo"})})]})}Ic.propTypes={name:Gn.string.isRequired,description:Gn.string.isRequired,url:Gn.string.isRequired,photos:Gn.arrayOf(Gn.string),tecnologies:Gn.arrayOf(Gn.string).isRequired};Ic.defaultProps={photos:[]};function qS(){return Bt.jsxs("section",{className:"projects",id:"projects",children:[Bt.jsx("h2",{className:"section-title",children:"Personal Projects"}),Bt.jsx(Ic,{name:"AutoGuard",description:"Real-time Android app that monitors driver attention and drowsiness with MediaPipe Face Mesh, plotting live metrics on MPAndroidChart.",url:"https://github.com/IagoPorto/autoguard",photos:["https://raw.githubusercontent.com/IagoPorto/IagoPorto/main/pictures/logo-completo-color.jpg","https://raw.githubusercontent.com/IagoPorto/AutoGuard/main/pictures/pantalla_monitoreo-2.jpg"],tecnologies:["Android SDK","Java","MediaPipe","MPAndroidChart"]}),Bt.jsx(Ic,{name:"Firefly Drone",description:"Embedded flight controller on Raspberry Pi + Navio, featuring modular C++ PID loops and RTIMULib-based Kalman filtering, with Zenoh-powered telemetry.",url:"https://github.com/IagoPorto/Dron-Firefly",photos:["https://raw.githubusercontent.com/IagoPorto/Dron-Firefly/main/dron2.png","https://raw.githubusercontent.com/IagoPorto/Drone-Firefly/main/dron.jpg"],tecnologies:["C++","Raspberry Pi","Navio","RTIMULib","Zenoh","PID Control"]})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ud="178",YS=0,D_=1,jS=2,Wv=1,ZS=2,aa=3,ca=0,kn=1,ra=2,ka=0,Ss=1,U_=2,L_=3,N_=4,KS=5,xr=100,QS=101,JS=102,$S=103,ty=104,ey=200,ny=201,iy=202,ay=203,kh=204,Xh=205,ry=206,sy=207,oy=208,ly=209,cy=210,uy=211,fy=212,hy=213,dy=214,Wh=0,qh=1,Yh=2,Es=3,jh=4,Zh=5,Kh=6,Qh=7,Ld=0,py=1,my=2,Xa=0,gy=1,_y=2,vy=3,xy=4,Sy=5,yy=6,My=7,qv=300,Ts=301,bs=302,Jh=303,$h=304,Xc=306,zc=1e3,yr=1001,td=1002,xi=1003,Ey=1004,ic=1005,Ci=1006,rh=1007,Mr=1008,Ui=1009,Yv=1010,jv=1011,Io=1012,Nd=1013,Tr=1014,sa=1015,Go=1016,Od=1017,Pd=1018,zo=1020,Zv=35902,Kv=1021,Qv=1022,_i=1023,Bo=1026,Fo=1027,Jv=1028,Id=1029,$v=1030,zd=1031,Bd=1033,Cc=33776,Dc=33777,Uc=33778,Lc=33779,ed=35840,nd=35841,id=35842,ad=35843,rd=36196,sd=37492,od=37496,ld=37808,cd=37809,ud=37810,fd=37811,hd=37812,dd=37813,pd=37814,md=37815,gd=37816,_d=37817,vd=37818,xd=37819,Sd=37820,yd=37821,Nc=36492,Md=36494,Ed=36495,t0=36283,Td=36284,bd=36285,Ad=36286,Ty=3200,by=3201,Fd=0,Ay=1,Va="",vn="srgb",As="srgb-linear",Bc="linear",Be="srgb",as=7680,O_=519,Ry=512,wy=513,Cy=514,e0=515,Dy=516,Uy=517,Ly=518,Ny=519,P_=35044,I_="300 es",oa=2e3,Fc=2001;class ws{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sh=Math.PI/180,Rd=180/Math.PI;function Vo(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]+"-"+Cn[t&255]+Cn[t>>8&255]+"-"+Cn[t>>16&15|64]+Cn[t>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]).toLowerCase()}function ye(s,t,i){return Math.max(t,Math.min(i,s))}function Oy(s,t){return(s%t+t)%t}function oh(s,t,i){return(1-i)*s+i*t}function Ao(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Hn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ee{constructor(t=0,i=0){Ee.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ye(this.x,t.x,i.x),this.y=ye(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ye(this.x,t,i),this.y=ye(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ye(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(ye(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*r-h*l+t.x,this.y=c*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ko{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],g=r[l+2],_=r[l+3];const v=c[h+0],y=c[h+1],E=c[h+2],A=c[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_;return}if(d===1){t[i+0]=v,t[i+1]=y,t[i+2]=E,t[i+3]=A;return}if(_!==A||m!==v||p!==y||g!==E){let M=1-d;const x=m*v+p*y+g*E+_*A,P=x>=0?1:-1,N=1-x*x;if(N>Number.EPSILON){const H=Math.sqrt(N),z=Math.atan2(H,x*P);M=Math.sin(M*z)/H,d=Math.sin(d*z)/H}const C=d*P;if(m=m*M+v*C,p=p*M+y*C,g=g*M+E*C,_=_*M+A*C,M===1-d){const H=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=H,p*=H,g*=H,_*=H}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],_=c[h],v=c[h+1],y=c[h+2],E=c[h+3];return t[i]=d*E+g*_+m*y-p*v,t[i+1]=m*E+g*v+p*_-d*y,t[i+2]=p*E+g*y+d*v-m*_,t[i+3]=g*E-d*_-m*v-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),_=d(c/2),v=m(r/2),y=m(l/2),E=m(c/2);switch(h){case"XYZ":this._x=v*g*_+p*y*E,this._y=p*y*_-v*g*E,this._z=p*g*E+v*y*_,this._w=p*g*_-v*y*E;break;case"YXZ":this._x=v*g*_+p*y*E,this._y=p*y*_-v*g*E,this._z=p*g*E-v*y*_,this._w=p*g*_+v*y*E;break;case"ZXY":this._x=v*g*_-p*y*E,this._y=p*y*_+v*g*E,this._z=p*g*E+v*y*_,this._w=p*g*_-v*y*E;break;case"ZYX":this._x=v*g*_-p*y*E,this._y=p*y*_+v*g*E,this._z=p*g*E-v*y*_,this._w=p*g*_+v*y*E;break;case"YZX":this._x=v*g*_+p*y*E,this._y=p*y*_+v*g*E,this._z=p*g*E-v*y*_,this._w=p*g*_-v*y*E;break;case"XZY":this._x=v*g*_-p*y*E,this._y=p*y*_-v*g*E,this._z=p*g*E+v*y*_,this._w=p*g*_+v*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],_=i[10],v=r+d+_;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-p)*y,this._z=(h-l)*y}else if(r>d&&r>_){const y=2*Math.sqrt(1+r-d-_);this._w=(g-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+p)/y}else if(d>_){const y=2*Math.sqrt(1+d-r-_);this._w=(c-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+_-r-d);this._w=(h-l)/y,this._x=(c+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*d+l*p-c*m,this._y=l*g+h*m+c*d-r*p,this._z=c*g+h*p+r*m-l*d,this._w=h*g-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,h=this._w;let d=h*t._w+r*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),_=Math.sin((1-i)*g)/p,v=Math.sin(i*g)/p;return this._w=h*_+this._w*v,this._x=r*_+this._x*v,this._y=l*_+this._y*v,this._z=c*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class tt{constructor(t=0,i=0,r=0){tt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(z_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(z_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*r),g=2*(d*i-c*l),_=2*(c*r-h*i);return this.x=i+m*p+h*_-d*g,this.y=r+m*g+d*p-c*_,this.z=l+m*_+c*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ye(this.x,t.x,i.x),this.y=ye(this.y,t.y,i.y),this.z=ye(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ye(this.x,t,i),this.y=ye(this.y,t,i),this.z=ye(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ye(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return lh.copy(this).projectOnVector(t),this.sub(lh)}reflect(t){return this.sub(lh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(ye(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lh=new tt,z_=new ko;class se{constructor(t,i,r,l,c,h,d,m,p){se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,m,p)}set(t,i,r,l,c,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],g=r[4],_=r[7],v=r[2],y=r[5],E=r[8],A=l[0],M=l[3],x=l[6],P=l[1],N=l[4],C=l[7],H=l[2],z=l[5],B=l[8];return c[0]=h*A+d*P+m*H,c[3]=h*M+d*N+m*z,c[6]=h*x+d*C+m*B,c[1]=p*A+g*P+_*H,c[4]=p*M+g*N+_*z,c[7]=p*x+g*C+_*B,c[2]=v*A+y*P+E*H,c[5]=v*M+y*N+E*z,c[8]=v*x+y*C+E*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-r*c*g+r*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=g*h-d*p,v=d*m-g*c,y=p*c-h*m,E=i*_+r*v+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=_*A,t[1]=(l*p-g*r)*A,t[2]=(d*r-l*h)*A,t[3]=v*A,t[4]=(g*i-l*m)*A,t[5]=(l*c-d*i)*A,t[6]=y*A,t[7]=(r*m-p*i)*A,t[8]=(h*i-r*c)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(ch.makeScale(t,i)),this}rotate(t){return this.premultiply(ch.makeRotation(-t)),this}translate(t,i){return this.premultiply(ch.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ch=new se;function n0(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ho(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Py(){const s=Ho("canvas");return s.style.display="block",s}const B_={};function ys(s){s in B_||(B_[s]=!0,console.warn(s))}function Iy(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}function zy(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function By(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const F_=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),H_=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fy(){const s={enabled:!0,workingColorSpace:As,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Be&&(l.r=la(l.r),l.g=la(l.g),l.b=la(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Be&&(l.r=Ms(l.r),l.g=Ms(l.g),l.b=Ms(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Va?Bc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return ys("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return ys("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[As]:{primaries:t,whitePoint:r,transfer:Bc,toXYZ:F_,fromXYZ:H_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:vn},outputColorSpaceConfig:{drawingBufferColorSpace:vn}},[vn]:{primaries:t,whitePoint:r,transfer:Be,toXYZ:F_,fromXYZ:H_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:vn}}}),s}const Se=Fy();function la(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ms(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let rs;class Hy{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{rs===void 0&&(rs=Ho("canvas")),rs.width=t.width,rs.height=t.height;const l=rs.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=rs}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Ho("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=la(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(la(i[r]/255)*255):i[r]=la(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Gy=0;class Hd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gy++}),this.uuid=Vo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(uh(l[h].image)):c.push(uh(l[h]))}else c=uh(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function uh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Hy.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vy=0;const fh=new tt;class On extends ws{constructor(t=On.DEFAULT_IMAGE,i=On.DEFAULT_MAPPING,r=yr,l=yr,c=Ci,h=Mr,d=_i,m=Ui,p=On.DEFAULT_ANISOTROPY,g=Va){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=Vo(),this.name="",this.source=new Hd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(fh).x}get height(){return this.source.getSize(fh).y}get depth(){return this.source.getSize(fh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zc:t.x=t.x-Math.floor(t.x);break;case yr:t.x=t.x<0?0:1;break;case td:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zc:t.y=t.y-Math.floor(t.y);break;case yr:t.y=t.y<0?0:1;break;case td:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=qv;On.DEFAULT_ANISOTROPY=1;class Ke{constructor(t=0,i=0,r=0,l=1){Ke.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],g=m[4],_=m[8],v=m[1],y=m[5],E=m[9],A=m[2],M=m[6],x=m[10];if(Math.abs(g-v)<.01&&Math.abs(_-A)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+A)<.1&&Math.abs(E+M)<.1&&Math.abs(p+y+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,C=(y+1)/2,H=(x+1)/2,z=(g+v)/4,B=(_+A)/4,W=(E+M)/4;return N>C&&N>H?N<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(N),l=z/r,c=B/r):C>H?C<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),r=z/l,c=W/l):H<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),r=B/c,l=W/c),this.set(r,l,c,i),this}let P=Math.sqrt((M-E)*(M-E)+(_-A)*(_-A)+(v-g)*(v-g));return Math.abs(P)<.001&&(P=1),this.x=(M-E)/P,this.y=(_-A)/P,this.z=(v-g)/P,this.w=Math.acos((p+y+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ye(this.x,t.x,i.x),this.y=ye(this.y,t.y,i.y),this.z=ye(this.z,t.z,i.z),this.w=ye(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ye(this.x,t,i),this.y=ye(this.y,t,i),this.z=ye(this.z,t,i),this.w=ye(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ye(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ky extends ws{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new Ke(0,0,t,i),this.scissorTest=!1,this.viewport=new Ke(0,0,t,i);const l={width:t,height:i,depth:r.depth},c=new On(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Ci,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Hd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class br extends ky{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class i0 extends On{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=xi,this.minFilter=xi,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xy extends On{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=xi,this.minFilter=xi,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cs{constructor(t=new tt(1/0,1/0,1/0),i=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(di.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(di.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=di.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,di):di.fromBufferAttribute(c,h),di.applyMatrix4(t.matrixWorld),this.expandByPoint(di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ac.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ac.copy(r.boundingBox)),ac.applyMatrix4(t.matrixWorld),this.union(ac)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,di),di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ro),rc.subVectors(this.max,Ro),ss.subVectors(t.a,Ro),os.subVectors(t.b,Ro),ls.subVectors(t.c,Ro),Ia.subVectors(os,ss),za.subVectors(ls,os),fr.subVectors(ss,ls);let i=[0,-Ia.z,Ia.y,0,-za.z,za.y,0,-fr.z,fr.y,Ia.z,0,-Ia.x,za.z,0,-za.x,fr.z,0,-fr.x,-Ia.y,Ia.x,0,-za.y,za.x,0,-fr.y,fr.x,0];return!hh(i,ss,os,ls,rc)||(i=[1,0,0,0,1,0,0,0,1],!hh(i,ss,os,ls,rc))?!1:(sc.crossVectors(Ia,za),i=[sc.x,sc.y,sc.z],hh(i,ss,os,ls,rc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ji),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ji=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],di=new tt,ac=new Cs,ss=new tt,os=new tt,ls=new tt,Ia=new tt,za=new tt,fr=new tt,Ro=new tt,rc=new tt,sc=new tt,hr=new tt;function hh(s,t,i,r,l){for(let c=0,h=s.length-3;c<=h;c+=3){hr.fromArray(s,c);const d=l.x*Math.abs(hr.x)+l.y*Math.abs(hr.y)+l.z*Math.abs(hr.z),m=t.dot(hr),p=i.dot(hr),g=r.dot(hr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const Wy=new Cs,wo=new tt,dh=new tt;class Xo{constructor(t=new tt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):Wy.setFromPoints(t).getCenter(r);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wo.subVectors(t,this.center);const i=wo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(wo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wo.copy(t.center).add(dh)),this.expandByPoint(wo.copy(t.center).sub(dh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const $i=new tt,ph=new tt,oc=new tt,Ba=new tt,mh=new tt,lc=new tt,gh=new tt;class Gd{constructor(t=new tt,i=new tt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$i)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=$i.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):($i.copy(this.origin).addScaledVector(this.direction,i),$i.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){ph.copy(t).add(i).multiplyScalar(.5),oc.copy(i).sub(t).normalize(),Ba.copy(this.origin).sub(ph);const c=t.distanceTo(i)*.5,h=-this.direction.dot(oc),d=Ba.dot(this.direction),m=-Ba.dot(oc),p=Ba.lengthSq(),g=Math.abs(1-h*h);let _,v,y,E;if(g>0)if(_=h*m-d,v=h*d-m,E=c*g,_>=0)if(v>=-E)if(v<=E){const A=1/g;_*=A,v*=A,y=_*(_+h*v+2*d)+v*(h*_+v+2*m)+p}else v=c,_=Math.max(0,-(h*v+d)),y=-_*_+v*(v+2*m)+p;else v=-c,_=Math.max(0,-(h*v+d)),y=-_*_+v*(v+2*m)+p;else v<=-E?(_=Math.max(0,-(-h*c+d)),v=_>0?-c:Math.min(Math.max(-c,-m),c),y=-_*_+v*(v+2*m)+p):v<=E?(_=0,v=Math.min(Math.max(-c,-m),c),y=v*(v+2*m)+p):(_=Math.max(0,-(h*c+d)),v=_>0?c:Math.min(Math.max(-c,-m),c),y=-_*_+v*(v+2*m)+p);else v=h>0?-c:c,_=Math.max(0,-(h*v+d)),y=-_*_+v*(v+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(ph).addScaledVector(oc,v),y}intersectSphere(t,i){$i.subVectors(t.center,this.origin);const r=$i.dot(this.direction),l=$i.dot($i)-r*r,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(r=(t.min.x-v.x)*p,l=(t.max.x-v.x)*p):(r=(t.max.x-v.x)*p,l=(t.min.x-v.x)*p),g>=0?(c=(t.min.y-v.y)*g,h=(t.max.y-v.y)*g):(c=(t.max.y-v.y)*g,h=(t.min.y-v.y)*g),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),_>=0?(d=(t.min.z-v.z)*_,m=(t.max.z-v.z)*_):(d=(t.max.z-v.z)*_,m=(t.min.z-v.z)*_),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,$i)!==null}intersectTriangle(t,i,r,l,c){mh.subVectors(i,t),lc.subVectors(r,t),gh.crossVectors(mh,lc);let h=this.direction.dot(gh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ba.subVectors(this.origin,t);const m=d*this.direction.dot(lc.crossVectors(Ba,lc));if(m<0)return null;const p=d*this.direction.dot(mh.cross(Ba));if(p<0||m+p>h)return null;const g=-d*Ba.dot(gh);return g<0?null:this.at(g/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qe{constructor(t,i,r,l,c,h,d,m,p,g,_,v,y,E,A,M){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,m,p,g,_,v,y,E,A,M)}set(t,i,r,l,c,h,d,m,p,g,_,v,y,E,A,M){const x=this.elements;return x[0]=t,x[4]=i,x[8]=r,x[12]=l,x[1]=c,x[5]=h,x[9]=d,x[13]=m,x[2]=p,x[6]=g,x[10]=_,x[14]=v,x[3]=y,x[7]=E,x[11]=A,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/cs.setFromMatrixColumn(t,0).length(),c=1/cs.setFromMatrixColumn(t,1).length(),h=1/cs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const v=h*g,y=h*_,E=d*g,A=d*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=y+E*p,i[5]=v-A*p,i[9]=-d*m,i[2]=A-v*p,i[6]=E+y*p,i[10]=h*m}else if(t.order==="YXZ"){const v=m*g,y=m*_,E=p*g,A=p*_;i[0]=v+A*d,i[4]=E*d-y,i[8]=h*p,i[1]=h*_,i[5]=h*g,i[9]=-d,i[2]=y*d-E,i[6]=A+v*d,i[10]=h*m}else if(t.order==="ZXY"){const v=m*g,y=m*_,E=p*g,A=p*_;i[0]=v-A*d,i[4]=-h*_,i[8]=E+y*d,i[1]=y+E*d,i[5]=h*g,i[9]=A-v*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const v=h*g,y=h*_,E=d*g,A=d*_;i[0]=m*g,i[4]=E*p-y,i[8]=v*p+A,i[1]=m*_,i[5]=A*p+v,i[9]=y*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const v=h*m,y=h*p,E=d*m,A=d*p;i[0]=m*g,i[4]=A-v*_,i[8]=E*_+y,i[1]=_,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=y*_+E,i[10]=v-A*_}else if(t.order==="XZY"){const v=h*m,y=h*p,E=d*m,A=d*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=v*_+A,i[5]=h*g,i[9]=y*_-E,i[2]=E*_-y,i[6]=d*g,i[10]=A*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qy,t,Yy)}lookAt(t,i,r){const l=this.elements;return Jn.subVectors(t,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Fa.crossVectors(r,Jn),Fa.lengthSq()===0&&(Math.abs(r.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Fa.crossVectors(r,Jn)),Fa.normalize(),cc.crossVectors(Jn,Fa),l[0]=Fa.x,l[4]=cc.x,l[8]=Jn.x,l[1]=Fa.y,l[5]=cc.y,l[9]=Jn.y,l[2]=Fa.z,l[6]=cc.z,l[10]=Jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],g=r[1],_=r[5],v=r[9],y=r[13],E=r[2],A=r[6],M=r[10],x=r[14],P=r[3],N=r[7],C=r[11],H=r[15],z=l[0],B=l[4],W=l[8],D=l[12],w=l[1],V=l[5],lt=l[9],st=l[13],_t=l[2],ht=l[6],I=l[10],Z=l[14],Y=l[3],Mt=l[7],U=l[11],$=l[15];return c[0]=h*z+d*w+m*_t+p*Y,c[4]=h*B+d*V+m*ht+p*Mt,c[8]=h*W+d*lt+m*I+p*U,c[12]=h*D+d*st+m*Z+p*$,c[1]=g*z+_*w+v*_t+y*Y,c[5]=g*B+_*V+v*ht+y*Mt,c[9]=g*W+_*lt+v*I+y*U,c[13]=g*D+_*st+v*Z+y*$,c[2]=E*z+A*w+M*_t+x*Y,c[6]=E*B+A*V+M*ht+x*Mt,c[10]=E*W+A*lt+M*I+x*U,c[14]=E*D+A*st+M*Z+x*$,c[3]=P*z+N*w+C*_t+H*Y,c[7]=P*B+N*V+C*ht+H*Mt,c[11]=P*W+N*lt+C*I+H*U,c[15]=P*D+N*st+C*Z+H*$,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],_=t[6],v=t[10],y=t[14],E=t[3],A=t[7],M=t[11],x=t[15];return E*(+c*m*_-l*p*_-c*d*v+r*p*v+l*d*y-r*m*y)+A*(+i*m*y-i*p*v+c*h*v-l*h*y+l*p*g-c*m*g)+M*(+i*p*_-i*d*y-c*h*_+r*h*y+c*d*g-r*p*g)+x*(-l*d*g-i*m*_+i*d*v+l*h*_-r*h*v+r*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=t[9],v=t[10],y=t[11],E=t[12],A=t[13],M=t[14],x=t[15],P=_*M*p-A*v*p+A*m*y-d*M*y-_*m*x+d*v*x,N=E*v*p-g*M*p-E*m*y+h*M*y+g*m*x-h*v*x,C=g*A*p-E*_*p+E*d*y-h*A*y-g*d*x+h*_*x,H=E*_*m-g*A*m-E*d*v+h*A*v+g*d*M-h*_*M,z=i*P+r*N+l*C+c*H;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/z;return t[0]=P*B,t[1]=(A*v*c-_*M*c-A*l*y+r*M*y+_*l*x-r*v*x)*B,t[2]=(d*M*c-A*m*c+A*l*p-r*M*p-d*l*x+r*m*x)*B,t[3]=(_*m*c-d*v*c-_*l*p+r*v*p+d*l*y-r*m*y)*B,t[4]=N*B,t[5]=(g*M*c-E*v*c+E*l*y-i*M*y-g*l*x+i*v*x)*B,t[6]=(E*m*c-h*M*c-E*l*p+i*M*p+h*l*x-i*m*x)*B,t[7]=(h*v*c-g*m*c+g*l*p-i*v*p-h*l*y+i*m*y)*B,t[8]=C*B,t[9]=(E*_*c-g*A*c-E*r*y+i*A*y+g*r*x-i*_*x)*B,t[10]=(h*A*c-E*d*c+E*r*p-i*A*p-h*r*x+i*d*x)*B,t[11]=(g*d*c-h*_*c-g*r*p+i*_*p+h*r*y-i*d*y)*B,t[12]=H*B,t[13]=(g*A*l-E*_*l+E*r*v-i*A*v-g*r*M+i*_*M)*B,t[14]=(E*d*l-h*A*l-E*r*m+i*A*m+h*r*M-i*d*M)*B,t[15]=(h*_*l-g*d*l+g*r*m-i*_*m-h*r*v+i*d*v)*B,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=t.x,d=t.y,m=t.z,p=c*h,g=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*h,0,p*m-l*d,g*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,h){return this.set(1,r,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,g=h+h,_=d+d,v=c*p,y=c*g,E=c*_,A=h*g,M=h*_,x=d*_,P=m*p,N=m*g,C=m*_,H=r.x,z=r.y,B=r.z;return l[0]=(1-(A+x))*H,l[1]=(y+C)*H,l[2]=(E-N)*H,l[3]=0,l[4]=(y-C)*z,l[5]=(1-(v+x))*z,l[6]=(M+P)*z,l[7]=0,l[8]=(E+N)*B,l[9]=(M-P)*B,l[10]=(1-(v+A))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=cs.set(l[0],l[1],l[2]).length();const h=cs.set(l[4],l[5],l[6]).length(),d=cs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],pi.copy(this);const p=1/c,g=1/h,_=1/d;return pi.elements[0]*=p,pi.elements[1]*=p,pi.elements[2]*=p,pi.elements[4]*=g,pi.elements[5]*=g,pi.elements[6]*=g,pi.elements[8]*=_,pi.elements[9]*=_,pi.elements[10]*=_,i.setFromRotationMatrix(pi),r.x=c,r.y=h,r.z=d,this}makePerspective(t,i,r,l,c,h,d=oa){const m=this.elements,p=2*c/(i-t),g=2*c/(r-l),_=(i+t)/(i-t),v=(r+l)/(r-l);let y,E;if(d===oa)y=-(h+c)/(h-c),E=-2*h*c/(h-c);else if(d===Fc)y=-h/(h-c),E=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=_,m[12]=0,m[1]=0,m[5]=g,m[9]=v,m[13]=0,m[2]=0,m[6]=0,m[10]=y,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,r,l,c,h,d=oa){const m=this.elements,p=1/(i-t),g=1/(r-l),_=1/(h-c),v=(i+t)*p,y=(r+l)*g;let E,A;if(d===oa)E=(h+c)*_,A=-2*_;else if(d===Fc)E=c*_,A=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-v,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-y,m[2]=0,m[6]=0,m[10]=A,m[14]=-E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const cs=new tt,pi=new qe,qy=new tt(0,0,0),Yy=new tt(1,1,1),Fa=new tt,cc=new tt,Jn=new tt,G_=new qe,V_=new ko;class Si{constructor(t=0,i=0,r=0,l=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],_=l[2],v=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(ye(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-ye(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(ye(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return G_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(G_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return V_.setFromEuler(this),this.setFromQuaternion(V_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class a0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let jy=0;const k_=new tt,us=new ko,ta=new qe,uc=new tt,Co=new tt,Zy=new tt,Ky=new ko,X_=new tt(1,0,0),W_=new tt(0,1,0),q_=new tt(0,0,1),Y_={type:"added"},Qy={type:"removed"},fs={type:"childadded",child:null},_h={type:"childremoved",child:null};class xn extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=Vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const t=new tt,i=new Si,r=new ko,l=new tt(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new qe},normalMatrix:{value:new se}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new a0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return us.setFromAxisAngle(t,i),this.quaternion.multiply(us),this}rotateOnWorldAxis(t,i){return us.setFromAxisAngle(t,i),this.quaternion.premultiply(us),this}rotateX(t){return this.rotateOnAxis(X_,t)}rotateY(t){return this.rotateOnAxis(W_,t)}rotateZ(t){return this.rotateOnAxis(q_,t)}translateOnAxis(t,i){return k_.copy(t).applyQuaternion(this.quaternion),this.position.add(k_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(X_,t)}translateY(t){return this.translateOnAxis(W_,t)}translateZ(t){return this.translateOnAxis(q_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ta.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?uc.copy(t):uc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ta.lookAt(Co,uc,this.up):ta.lookAt(uc,Co,this.up),this.quaternion.setFromRotationMatrix(ta),l&&(ta.extractRotation(l.matrixWorld),us.setFromRotationMatrix(ta),this.quaternion.premultiply(us.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Y_),fs.child=t,this.dispatchEvent(fs),fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Qy),_h.child=t,this.dispatchEvent(_h),_h.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ta.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ta.multiply(t.parent.matrixWorld)),t.applyMatrix4(ta),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Y_),fs.child=t,this.dispatchEvent(fs),fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,t,Zy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,Ky,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),_=h(t.shapes),v=h(t.skeletons),y=h(t.animations),E=h(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=l,r;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}xn.DEFAULT_UP=new tt(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new tt,ea=new tt,vh=new tt,na=new tt,hs=new tt,ds=new tt,j_=new tt,xh=new tt,Sh=new tt,yh=new tt,Mh=new Ke,Eh=new Ke,Th=new Ke;class gi{constructor(t=new tt,i=new tt,r=new tt){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),mi.subVectors(t,i),l.cross(mi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){mi.subVectors(l,i),ea.subVectors(r,i),vh.subVectors(t,i);const h=mi.dot(mi),d=mi.dot(ea),m=mi.dot(vh),p=ea.dot(ea),g=ea.dot(vh),_=h*p-d*d;if(_===0)return c.set(0,0,0),null;const v=1/_,y=(p*m-d*g)*v,E=(h*g-d*m)*v;return c.set(1-y-E,E,y)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,na)===null?!1:na.x>=0&&na.y>=0&&na.x+na.y<=1}static getInterpolation(t,i,r,l,c,h,d,m){return this.getBarycoord(t,i,r,l,na)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,na.x),m.addScaledVector(h,na.y),m.addScaledVector(d,na.z),m)}static getInterpolatedAttribute(t,i,r,l,c,h){return Mh.setScalar(0),Eh.setScalar(0),Th.setScalar(0),Mh.fromBufferAttribute(t,i),Eh.fromBufferAttribute(t,r),Th.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Mh,c.x),h.addScaledVector(Eh,c.y),h.addScaledVector(Th,c.z),h}static isFrontFacing(t,i,r,l){return mi.subVectors(r,i),ea.subVectors(t,i),mi.cross(ea).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mi.subVectors(this.c,this.b),ea.subVectors(this.a,this.b),mi.cross(ea).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return gi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return gi.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return gi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let h,d;hs.subVectors(l,r),ds.subVectors(c,r),xh.subVectors(t,r);const m=hs.dot(xh),p=ds.dot(xh);if(m<=0&&p<=0)return i.copy(r);Sh.subVectors(t,l);const g=hs.dot(Sh),_=ds.dot(Sh);if(g>=0&&_<=g)return i.copy(l);const v=m*_-g*p;if(v<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(hs,h);yh.subVectors(t,c);const y=hs.dot(yh),E=ds.dot(yh);if(E>=0&&y<=E)return i.copy(c);const A=y*p-m*E;if(A<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(r).addScaledVector(ds,d);const M=g*E-y*_;if(M<=0&&_-g>=0&&y-E>=0)return j_.subVectors(c,l),d=(_-g)/(_-g+(y-E)),i.copy(l).addScaledVector(j_,d);const x=1/(M+A+v);return h=A*x,d=v*x,i.copy(r).addScaledVector(hs,h).addScaledVector(ds,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const r0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ha={h:0,s:0,l:0},fc={h:0,s:0,l:0};function bh(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class ue{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=vn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Se.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Se.workingColorSpace){return this.r=t,this.g=i,this.b=r,Se.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Se.workingColorSpace){if(t=Oy(t,1),i=ye(i,0,1),r=ye(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=bh(h,c,t+1/3),this.g=bh(h,c,t),this.b=bh(h,c,t-1/3)}return Se.colorSpaceToWorking(this,l),this}setStyle(t,i=vn){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=vn){const r=r0[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=la(t.r),this.g=la(t.g),this.b=la(t.b),this}copyLinearToSRGB(t){return this.r=Ms(t.r),this.g=Ms(t.g),this.b=Ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=vn){return Se.workingToColorSpace(Dn.copy(this),t),Math.round(ye(Dn.r*255,0,255))*65536+Math.round(ye(Dn.g*255,0,255))*256+Math.round(ye(Dn.b*255,0,255))}getHexString(t=vn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Se.workingColorSpace){Se.workingToColorSpace(Dn.copy(this),i);const r=Dn.r,l=Dn.g,c=Dn.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const _=h-d;switch(p=g<=.5?_/(h+d):_/(2-h-d),h){case r:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-r)/_+2;break;case c:m=(r-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Se.workingColorSpace){return Se.workingToColorSpace(Dn.copy(this),i),t.r=Dn.r,t.g=Dn.g,t.b=Dn.b,t}getStyle(t=vn){Se.workingToColorSpace(Dn.copy(this),t);const i=Dn.r,r=Dn.g,l=Dn.b;return t!==vn?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Ha),this.setHSL(Ha.h+t,Ha.s+i,Ha.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Ha),t.getHSL(fc);const r=oh(Ha.h,fc.h,i),l=oh(Ha.s,fc.s,i),c=oh(Ha.l,fc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new ue;ue.NAMES=r0;let Jy=0;class Li extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jy++}),this.uuid=Vo(),this.name="",this.type="Material",this.blending=Ss,this.side=ca,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kh,this.blendDst=Xh,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ue(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=O_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(r.blending=this.blending),this.side!==ca&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==kh&&(r.blendSrc=this.blendSrc),this.blendDst!==Xh&&(r.blendDst=this.blendDst),this.blendEquation!==xr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==O_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(r.stencilFail=this.stencilFail),this.stencilZFail!==as&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class s0 extends Li{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=Ld,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const an=new tt,hc=new Ee;let $y=0;class Di{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$y++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=P_,this.updateRanges=[],this.gpuType=sa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)hc.fromBufferAttribute(this,i),hc.applyMatrix3(t),this.setXY(i,hc.x,hc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyMatrix3(t),this.setXYZ(i,an.x,an.y,an.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyMatrix4(t),this.setXYZ(i,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyNormalMatrix(t),this.setXYZ(i,an.x,an.y,an.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.transformDirection(t),this.setXYZ(i,an.x,an.y,an.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Ao(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Hn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ao(i,this.array)),i}setX(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ao(i,this.array)),i}setY(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ao(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ao(i,this.array)),i}setW(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array),c=Hn(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==P_&&(t.usage=this.usage),t}}class o0 extends Di{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class l0 extends Di{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Nn extends Di{constructor(t,i,r){super(new Float32Array(t),i,r)}}let tM=0;const oi=new qe,Ah=new xn,ps=new tt,$n=new Cs,Do=new Cs,_n=new tt;class yi extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=Vo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(n0(t)?l0:o0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new se().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return oi.makeRotationFromQuaternion(t),this.applyMatrix4(oi),this}rotateX(t){return oi.makeRotationX(t),this.applyMatrix4(oi),this}rotateY(t){return oi.makeRotationY(t),this.applyMatrix4(oi),this}rotateZ(t){return oi.makeRotationZ(t),this.applyMatrix4(oi),this}translate(t,i,r){return oi.makeTranslation(t,i,r),this.applyMatrix4(oi),this}scale(t,i,r){return oi.makeScale(t,i,r),this.applyMatrix4(oi),this}lookAt(t){return Ah.lookAt(t),Ah.updateMatrix(),this.applyMatrix4(Ah.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Nn(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cs);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];$n.setFromBufferAttribute(c),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new tt,1/0);return}if(t){const r=this.boundingSphere.center;if($n.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Do.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors($n.min,Do.min),$n.expandByPoint(_n),_n.addVectors($n.max,Do.max),$n.expandByPoint(_n)):($n.expandByPoint(Do.min),$n.expandByPoint(Do.max))}$n.getCenter(r);let l=0;for(let c=0,h=t.count;c<h;c++)_n.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(_n));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)_n.fromBufferAttribute(d,p),m&&(ps.fromBufferAttribute(t,p),_n.add(ps)),l=Math.max(l,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let W=0;W<r.count;W++)d[W]=new tt,m[W]=new tt;const p=new tt,g=new tt,_=new tt,v=new Ee,y=new Ee,E=new Ee,A=new tt,M=new tt;function x(W,D,w){p.fromBufferAttribute(r,W),g.fromBufferAttribute(r,D),_.fromBufferAttribute(r,w),v.fromBufferAttribute(c,W),y.fromBufferAttribute(c,D),E.fromBufferAttribute(c,w),g.sub(p),_.sub(p),y.sub(v),E.sub(v);const V=1/(y.x*E.y-E.x*y.y);isFinite(V)&&(A.copy(g).multiplyScalar(E.y).addScaledVector(_,-y.y).multiplyScalar(V),M.copy(_).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(V),d[W].add(A),d[D].add(A),d[w].add(A),m[W].add(M),m[D].add(M),m[w].add(M))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let W=0,D=P.length;W<D;++W){const w=P[W],V=w.start,lt=w.count;for(let st=V,_t=V+lt;st<_t;st+=3)x(t.getX(st+0),t.getX(st+1),t.getX(st+2))}const N=new tt,C=new tt,H=new tt,z=new tt;function B(W){H.fromBufferAttribute(l,W),z.copy(H);const D=d[W];N.copy(D),N.sub(H.multiplyScalar(H.dot(D))).normalize(),C.crossVectors(z,D);const V=C.dot(m[W])<0?-1:1;h.setXYZW(W,N.x,N.y,N.z,V)}for(let W=0,D=P.length;W<D;++W){const w=P[W],V=w.start,lt=w.count;for(let st=V,_t=V+lt;st<_t;st+=3)B(t.getX(st+0)),B(t.getX(st+1)),B(t.getX(st+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Di(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,y=r.count;v<y;v++)r.setXYZ(v,0,0,0);const l=new tt,c=new tt,h=new tt,d=new tt,m=new tt,p=new tt,g=new tt,_=new tt;if(t)for(let v=0,y=t.count;v<y;v+=3){const E=t.getX(v+0),A=t.getX(v+1),M=t.getX(v+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,A),h.fromBufferAttribute(i,M),g.subVectors(h,c),_.subVectors(l,c),g.cross(_),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,M),d.add(g),m.add(g),p.add(g),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let v=0,y=i.count;v<y;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),h.fromBufferAttribute(i,v+2),g.subVectors(h,c),_.subVectors(l,c),g.cross(_),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)_n.fromBufferAttribute(t,i),_n.normalize(),t.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,_=d.normalized,v=new p.constructor(m.length*g);let y=0,E=0;for(let A=0,M=m.length;A<M;A++){d.isInterleavedBufferAttribute?y=m[A]*d.data.stride+d.offset:y=m[A]*g;for(let x=0;x<g;x++)v[E++]=p[y++]}return new Di(v,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new yi,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,_=p.length;g<_;g++){const v=p[g],y=t(v,r);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,v=p.length;_<v;_++){const y=p[_];g.push(y.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let v=0,y=_.length;v<y;v++)g.push(_[v].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Z_=new qe,dr=new Gd,dc=new Xo,K_=new tt,pc=new tt,mc=new tt,gc=new tt,Rh=new tt,_c=new tt,Q_=new tt,vc=new tt;class vi extends xn{constructor(t=new yi,i=new s0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){_c.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],_=c[m];g!==0&&(Rh.fromBufferAttribute(_,t),h?_c.addScaledVector(Rh,g):_c.addScaledVector(Rh.sub(i),g))}i.add(_c)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),dc.copy(r.boundingSphere),dc.applyMatrix4(c),dr.copy(t.ray).recast(t.near),!(dc.containsPoint(dr.origin)===!1&&(dr.intersectSphere(dc,K_)===null||dr.origin.distanceToSquared(K_)>(t.far-t.near)**2))&&(Z_.copy(c).invert(),dr.copy(t.ray).applyMatrix4(Z_),!(r.boundingBox!==null&&dr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,dr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,A=v.length;E<A;E++){const M=v[E],x=h[M.materialIndex],P=Math.max(M.start,y.start),N=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let C=P,H=N;C<H;C+=3){const z=d.getX(C),B=d.getX(C+1),W=d.getX(C+2);l=xc(this,x,t,r,p,g,_,z,B,W),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),A=Math.min(d.count,y.start+y.count);for(let M=E,x=A;M<x;M+=3){const P=d.getX(M),N=d.getX(M+1),C=d.getX(M+2);l=xc(this,h,t,r,p,g,_,P,N,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,A=v.length;E<A;E++){const M=v[E],x=h[M.materialIndex],P=Math.max(M.start,y.start),N=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let C=P,H=N;C<H;C+=3){const z=C,B=C+1,W=C+2;l=xc(this,x,t,r,p,g,_,z,B,W),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),A=Math.min(m.count,y.start+y.count);for(let M=E,x=A;M<x;M+=3){const P=M,N=M+1,C=M+2;l=xc(this,h,t,r,p,g,_,P,N,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function eM(s,t,i,r,l,c,h,d){let m;if(t.side===kn?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,t.side===ca,d),m===null)return null;vc.copy(d),vc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(vc);return p<i.near||p>i.far?null:{distance:p,point:vc.clone(),object:s}}function xc(s,t,i,r,l,c,h,d,m,p){s.getVertexPosition(d,pc),s.getVertexPosition(m,mc),s.getVertexPosition(p,gc);const g=eM(s,t,i,r,pc,mc,gc,Q_);if(g){const _=new tt;gi.getBarycoord(Q_,pc,mc,gc,_),l&&(g.uv=gi.getInterpolatedAttribute(l,d,m,p,_,new Ee)),c&&(g.uv1=gi.getInterpolatedAttribute(c,d,m,p,_,new Ee)),h&&(g.normal=gi.getInterpolatedAttribute(h,d,m,p,_,new tt),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:d,b:m,c:p,normal:new tt,materialIndex:0};gi.getNormal(pc,mc,gc,v.normal),g.face=v,g.barycoord=_}return g}class Wo extends yi{constructor(t=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],g=[],_=[];let v=0,y=0;E("z","y","x",-1,-1,r,i,t,h,c,0),E("z","y","x",1,-1,r,i,-t,h,c,1),E("x","z","y",1,1,t,r,i,l,h,2),E("x","z","y",1,-1,t,r,-i,l,h,3),E("x","y","z",1,-1,t,i,r,l,c,4),E("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Nn(p,3)),this.setAttribute("normal",new Nn(g,3)),this.setAttribute("uv",new Nn(_,2));function E(A,M,x,P,N,C,H,z,B,W,D){const w=C/B,V=H/W,lt=C/2,st=H/2,_t=z/2,ht=B+1,I=W+1;let Z=0,Y=0;const Mt=new tt;for(let U=0;U<I;U++){const $=U*V-st;for(let vt=0;vt<ht;vt++){const St=vt*w-lt;Mt[A]=St*P,Mt[M]=$*N,Mt[x]=_t,p.push(Mt.x,Mt.y,Mt.z),Mt[A]=0,Mt[M]=0,Mt[x]=z>0?1:-1,g.push(Mt.x,Mt.y,Mt.z),_.push(vt/B),_.push(1-U/W),Z+=1}}for(let U=0;U<W;U++)for(let $=0;$<B;$++){const vt=v+$+ht*U,St=v+$+ht*(U+1),Q=v+($+1)+ht*(U+1),pt=v+($+1)+ht*U;m.push(vt,St,pt),m.push(St,Q,pt),Y+=6}d.addGroup(y,Y,D),y+=Y,v+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Rs(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Ln(s){const t={};for(let i=0;i<s.length;i++){const r=Rs(s[i]);for(const l in r)t[l]=r[l]}return t}function nM(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function c0(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Se.workingColorSpace}const iM={clone:Rs,merge:Ln};var aM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wa extends Li{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=aM,this.fragmentShader=rM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rs(t.uniforms),this.uniformsGroups=nM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class u0 extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=oa}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ga=new tt,J_=new Ee,$_=new Ee;class ci extends u0{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Rd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(sh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Rd*2*Math.atan(Math.tan(sh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Ga.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ga.x,Ga.y).multiplyScalar(-t/Ga.z),Ga.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ga.x,Ga.y).multiplyScalar(-t/Ga.z)}getViewSize(t,i){return this.getViewBounds(t,J_,$_),i.subVectors($_,J_)}setViewOffset(t,i,r,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(sh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ms=-90,gs=1;class sM extends xn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ci(ms,gs,t,i);l.layers=this.layers,this.add(l);const c=new ci(ms,gs,t,i);c.layers=this.layers,this.add(c);const h=new ci(ms,gs,t,i);h.layers=this.layers,this.add(h);const d=new ci(ms,gs,t,i);d.layers=this.layers,this.add(d);const m=new ci(ms,gs,t,i);m.layers=this.layers,this.add(m);const p=new ci(ms,gs,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===oa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Fc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=A,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(_,v,y),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Vd extends On{constructor(t=[],i=Ts,r,l,c,h,d,m,p,g){super(t,i,r,l,c,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class oM extends br{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Vd(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Wo(5,5,5),c=new Wa({name:"CubemapFromEquirect",uniforms:Rs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:ka});c.uniforms.tEquirect.value=i;const h=new vi(l,c),d=i.minFilter;return i.minFilter===Mr&&(i.minFilter=Ci),new sM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(c)}}class Lo extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lM={type:"move"};class wh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const A of t.hand.values()){const M=i.getJointPose(A,r),x=this._getHandJoint(p,A);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=g.position.distanceTo(_.position),y=.02,E=.005;p.inputState.pinching&&v>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(lM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Lo;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class cM extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ch=new tt,uM=new tt,fM=new se;class _r{constructor(t=new tt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Ch.subVectors(r,i).cross(uM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Ch),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||fM.getNormalMatrix(t),l=this.coplanarPoint(Ch).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pr=new Xo,hM=new Ee(.5,.5),Sc=new tt;class kd{constructor(t=new _r,i=new _r,r=new _r,l=new _r,c=new _r,h=new _r){this.planes=[t,i,r,l,c,h]}set(t,i,r,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=oa){const r=this.planes,l=t.elements,c=l[0],h=l[1],d=l[2],m=l[3],p=l[4],g=l[5],_=l[6],v=l[7],y=l[8],E=l[9],A=l[10],M=l[11],x=l[12],P=l[13],N=l[14],C=l[15];if(r[0].setComponents(m-c,v-p,M-y,C-x).normalize(),r[1].setComponents(m+c,v+p,M+y,C+x).normalize(),r[2].setComponents(m+h,v+g,M+E,C+P).normalize(),r[3].setComponents(m-h,v-g,M-E,C-P).normalize(),r[4].setComponents(m-d,v-_,M-A,C-N).normalize(),i===oa)r[5].setComponents(m+d,v+_,M+A,C+N).normalize();else if(i===Fc)r[5].setComponents(d,_,A,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),pr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),pr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(t){pr.center.set(0,0,0);const i=hM.distanceTo(t.center);return pr.radius=.7071067811865476+i,pr.applyMatrix4(t.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Sc.x=l.normal.x>0?t.max.x:t.min.x,Sc.y=l.normal.y>0?t.max.y:t.min.y,Sc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Sc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Oc extends Li{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Hc=new tt,Gc=new tt,tv=new qe,Uo=new Gd,yc=new Xo,Dh=new tt,ev=new tt;class dM extends xn{constructor(t=new yi,i=new Oc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)Hc.fromBufferAttribute(i,l-1),Gc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Hc.distanceTo(Gc);t.setAttribute("lineDistance",new Nn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),yc.copy(r.boundingSphere),yc.applyMatrix4(l),yc.radius+=c,t.ray.intersectsSphere(yc)===!1)return;tv.copy(l).invert(),Uo.copy(t.ray).applyMatrix4(tv);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=r.index,v=r.attributes.position;if(g!==null){const y=Math.max(0,h.start),E=Math.min(g.count,h.start+h.count);for(let A=y,M=E-1;A<M;A+=p){const x=g.getX(A),P=g.getX(A+1),N=Mc(this,t,Uo,m,x,P,A);N&&i.push(N)}if(this.isLineLoop){const A=g.getX(E-1),M=g.getX(y),x=Mc(this,t,Uo,m,A,M,E-1);x&&i.push(x)}}else{const y=Math.max(0,h.start),E=Math.min(v.count,h.start+h.count);for(let A=y,M=E-1;A<M;A+=p){const x=Mc(this,t,Uo,m,A,A+1,A);x&&i.push(x)}if(this.isLineLoop){const A=Mc(this,t,Uo,m,E-1,y,E-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Mc(s,t,i,r,l,c,h){const d=s.geometry.attributes.position;if(Hc.fromBufferAttribute(d,l),Gc.fromBufferAttribute(d,c),i.distanceSqToSegment(Hc,Gc,Dh,ev)>r)return;Dh.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Dh);if(!(p<t.near||p>t.far))return{distance:p,point:ev.clone().applyMatrix4(s.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:s}}const nv=new tt,iv=new tt;class av extends dM{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[];for(let l=0,c=i.count;l<c;l+=2)nv.fromBufferAttribute(i,l),iv.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+nv.distanceTo(iv);t.setAttribute("lineDistance",new Nn(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class No extends Li{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const rv=new qe,wd=new Gd,Ec=new Xo,Tc=new tt;class Uh extends xn{constructor(t=new yi,i=new No){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ec.copy(r.boundingSphere),Ec.applyMatrix4(l),Ec.radius+=c,t.ray.intersectsSphere(Ec)===!1)return;rv.copy(l).invert(),wd.copy(t.ray).applyMatrix4(rv);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,_=r.attributes.position;if(p!==null){const v=Math.max(0,h.start),y=Math.min(p.count,h.start+h.count);for(let E=v,A=y;E<A;E++){const M=p.getX(E);Tc.fromBufferAttribute(_,M),sv(Tc,M,m,l,t,i,this)}}else{const v=Math.max(0,h.start),y=Math.min(_.count,h.start+h.count);for(let E=v,A=y;E<A;E++)Tc.fromBufferAttribute(_,E),sv(Tc,E,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function sv(s,t,i,r,l,c,h){const d=wd.distanceSqToPoint(s);if(d<i){const m=new tt;wd.closestPointToPoint(s,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class f0 extends On{constructor(t,i,r=Tr,l,c,h,d=xi,m=xi,p,g=Bo,_=1){if(g!==Bo&&g!==Fo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:i,depth:_};super(v,l,c,h,d,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Hd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Wc extends yi{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,_=t/d,v=i/m,y=[],E=[],A=[],M=[];for(let x=0;x<g;x++){const P=x*v-h;for(let N=0;N<p;N++){const C=N*_-c;E.push(C,-P,0),A.push(0,0,1),M.push(N/d),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let P=0;P<d;P++){const N=P+p*x,C=P+p*(x+1),H=P+1+p*(x+1),z=P+1+p*x;y.push(N,C,z),y.push(C,H,z)}this.setIndex(y),this.setAttribute("position",new Nn(E,3)),this.setAttribute("normal",new Nn(A,3)),this.setAttribute("uv",new Nn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wc(t.width,t.height,t.widthSegments,t.heightSegments)}}class pM extends Li{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fd,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class h0 extends Li{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ue(16777215),this.specular=new ue(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fd,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=Ld,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class mM extends Li{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ty,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class gM extends Li{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Po={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class _M{constructor(t,i,r){const l=this;let c=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=r,this.itemStart=function(g){d++,c===!1&&l.onStart!==void 0&&l.onStart(g,h,d),c=!0},this.itemEnd=function(g){h++,l.onProgress!==void 0&&l.onProgress(g,h,d),h===d&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,_){return p.push(g,_),this},this.removeHandler=function(g){const _=p.indexOf(g);return _!==-1&&p.splice(_,2),this},this.getHandler=function(g){for(let _=0,v=p.length;_<v;_+=2){const y=p[_],E=p[_+1];if(y.global&&(y.lastIndex=0),y.test(g))return E}return null}}}const d0=new _M;class Ar{constructor(t){this.manager=t!==void 0?t:d0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const r=this;return new Promise(function(l,c){r.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ar.DEFAULT_MATERIAL_NAME="__DEFAULT";const ia={};class vM extends Error{constructor(t,i){super(t),this.response=i}}class p0 extends Ar{constructor(t){super(t),this.mimeType="",this.responseType=""}load(t,i,r,l){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=Po.get(`file:${t}`);if(c!==void 0)return this.manager.itemStart(t),setTimeout(()=>{i&&i(c),this.manager.itemEnd(t)},0),c;if(ia[t]!==void 0){ia[t].push({onLoad:i,onProgress:r,onError:l});return}ia[t]=[],ia[t].push({onLoad:i,onProgress:r,onError:l});const h=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),d=this.mimeType,m=this.responseType;fetch(h).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const g=ia[t],_=p.body.getReader(),v=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),y=v?parseInt(v):0,E=y!==0;let A=0;const M=new ReadableStream({start(x){P();function P(){_.read().then(({done:N,value:C})=>{if(N)x.close();else{A+=C.byteLength;const H=new ProgressEvent("progress",{lengthComputable:E,loaded:A,total:y});for(let z=0,B=g.length;z<B;z++){const W=g[z];W.onProgress&&W.onProgress(H)}x.enqueue(C),P()}},N=>{x.error(N)})}}});return new Response(M)}else throw new vM(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(m){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(g=>new DOMParser().parseFromString(g,d));case"json":return p.json();default:if(d==="")return p.text();{const _=/charset="?([^;"\s]*)"?/i.exec(d),v=_&&_[1]?_[1].toLowerCase():void 0,y=new TextDecoder(v);return p.arrayBuffer().then(E=>y.decode(E))}}}).then(p=>{Po.add(`file:${t}`,p);const g=ia[t];delete ia[t];for(let _=0,v=g.length;_<v;_++){const y=g[_];y.onLoad&&y.onLoad(p)}}).catch(p=>{const g=ia[t];if(g===void 0)throw this.manager.itemError(t),p;delete ia[t];for(let _=0,v=g.length;_<v;_++){const y=g[_];y.onError&&y.onError(p)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}const _s=new WeakMap;class m0 extends Ar{constructor(t){super(t)}load(t,i,r,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,h=Po.get(`image:${t}`);if(h!==void 0){if(h.complete===!0)c.manager.itemStart(t),setTimeout(function(){i&&i(h),c.manager.itemEnd(t)},0);else{let _=_s.get(h);_===void 0&&(_=[],_s.set(h,_)),_.push({onLoad:i,onError:l})}return h}const d=Ho("img");function m(){g(),i&&i(this);const _=_s.get(this)||[];for(let v=0;v<_.length;v++){const y=_[v];y.onLoad&&y.onLoad(this)}_s.delete(this),c.manager.itemEnd(t)}function p(_){g(),l&&l(_),Po.remove(`image:${t}`);const v=_s.get(this)||[];for(let y=0;y<v.length;y++){const E=v[y];E.onError&&E.onError(_)}_s.delete(this),c.manager.itemError(t),c.manager.itemEnd(t)}function g(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),Po.add(`image:${t}`,d),c.manager.itemStart(t),d.src=t,d}}class xM extends Ar{constructor(t){super(t)}load(t,i,r,l){const c=new Vd;c.colorSpace=vn;const h=new m0(this.manager);h.setCrossOrigin(this.crossOrigin),h.setPath(this.path);let d=0;function m(p){h.load(t[p],function(g){c.images[p]=g,d++,d===6&&(c.needsUpdate=!0,i&&i(c))},void 0,l)}for(let p=0;p<t.length;++p)m(p);return c}}class SM extends Ar{constructor(t){super(t)}load(t,i,r,l){const c=new On,h=new m0(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(t,function(d){c.image=d,c.needsUpdate=!0,i!==void 0&&i(c)},r,l),c}}class g0 extends xn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ue(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Lh=new qe,ov=new tt,lv=new tt;class yM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=Ui,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kd,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;ov.setFromMatrixPosition(t.matrixWorld),i.position.copy(ov),lv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(lv),i.updateMatrixWorld(),Lh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Lh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class _0 extends u0{constructor(t=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,h=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class MM extends yM{constructor(){super(new _0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class EM extends g0{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.shadow=new MM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class TM extends g0{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class bM{static extractUrlBase(t){const i=t.lastIndexOf("/");return i===-1?"./":t.slice(0,i+1)}static resolveURL(t,i){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(i)&&/^\//.test(t)&&(i=i.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:i+t)}}class AM extends ci{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function cv(s,t,i,r){const l=RM(r);switch(i){case Kv:return s*t;case Jv:return s*t/l.components*l.byteLength;case Id:return s*t/l.components*l.byteLength;case $v:return s*t*2/l.components*l.byteLength;case zd:return s*t*2/l.components*l.byteLength;case Qv:return s*t*3/l.components*l.byteLength;case _i:return s*t*4/l.components*l.byteLength;case Bd:return s*t*4/l.components*l.byteLength;case Cc:case Dc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Uc:case Lc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case nd:case ad:return Math.max(s,16)*Math.max(t,8)/4;case ed:case id:return Math.max(s,8)*Math.max(t,8)/2;case rd:case sd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case od:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ld:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case cd:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ud:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case fd:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case hd:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case dd:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case pd:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case md:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case gd:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case _d:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case vd:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case xd:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Sd:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case yd:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Nc:case Md:case Ed:return Math.ceil(s/4)*Math.ceil(t/4)*16;case t0:case Td:return Math.ceil(s/4)*Math.ceil(t/4)*8;case bd:case Ad:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function RM(s){switch(s){case Ui:case Yv:return{byteLength:1,components:1};case Io:case jv:case Go:return{byteLength:2,components:1};case Od:case Pd:return{byteLength:2,components:4};case Tr:case Nd:case sa:return{byteLength:4,components:1};case Zv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ud}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ud);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function v0(){let s=null,t=!1,i=null,r=null;function l(c,h){i(c,h),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function wM(s){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,_=p.byteLength,v=s.createBuffer();s.bindBuffer(m,v),s.bufferData(m,p,g),d.onUploadCallback();let y;if(p instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=s.SHORT;else if(p instanceof Uint32Array)y=s.UNSIGNED_INT;else if(p instanceof Int32Array)y=s.INT;else if(p instanceof Int8Array)y=s.BYTE;else if(p instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,m,p){const g=m.array,_=m.updateRanges;if(s.bindBuffer(p,d),_.length===0)s.bufferSubData(p,0,g);else{_.sort((y,E)=>y.start-E.start);let v=0;for(let y=1;y<_.length;y++){const E=_[v],A=_[y];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++v,_[v]=A)}_.length=v+1;for(let y=0,E=_.length;y<E;y++){const A=_[y];s.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(s.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var CM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,DM=`#ifdef USE_ALPHAHASH
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
#endif`,UM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,LM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,OM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,PM=`#ifdef USE_AOMAP
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
#endif`,IM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zM=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,BM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,FM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,HM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,GM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,VM=`#ifdef USE_IRIDESCENCE
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
#endif`,kM=`#ifdef USE_BUMPMAP
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
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,YM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ZM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,KM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,QM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,JM=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,$M=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tE=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,eE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rE="gl_FragColor = linearToOutputTexel( gl_FragColor );",sE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,oE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cE=`#ifdef USE_ENVMAP
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
#endif`,uE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gE=`#ifdef USE_GRADIENTMAP
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
}`,_E=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,SE=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,yE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ME=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,EE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,TE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,AE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,RE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wE=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,CE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,DE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,UE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,LE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,PE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,IE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,BE=`#if defined( USE_POINTS_UV )
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
#endif`,FE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,HE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,GE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,VE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XE=`#ifdef USE_MORPHTARGETS
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
#endif`,WE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,YE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,QE=`#ifdef USE_NORMALMAP
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
#endif`,JE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$E=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,aT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,fT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,hT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,dT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,pT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mT=`#ifdef USE_SKINNING
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
#endif`,gT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_T=`#ifdef USE_SKINNING
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
#endif`,vT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ST=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,MT=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ET=`#ifdef USE_TRANSMISSION
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
#endif`,TT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,CT=`uniform sampler2D t2D;
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
}`,DT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OT=`#include <common>
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
}`,PT=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,IT=`#define DISTANCE
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
}`,zT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,BT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,FT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HT=`uniform float scale;
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
}`,GT=`uniform vec3 diffuse;
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
}`,VT=`#include <common>
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
}`,kT=`uniform vec3 diffuse;
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
}`,XT=`#define LAMBERT
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
}`,WT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,qT=`#define MATCAP
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
}`,YT=`#define MATCAP
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
}`,jT=`#define NORMAL
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
}`,ZT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,KT=`#define PHONG
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
}`,QT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,JT=`#define STANDARD
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
}`,$T=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,tb=`#define TOON
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
}`,eb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,nb=`uniform float size;
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
}`,ib=`uniform vec3 diffuse;
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
}`,ab=`#include <common>
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
}`,rb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,sb=`uniform float rotation;
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
}`,ob=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:CM,alphahash_pars_fragment:DM,alphamap_fragment:UM,alphamap_pars_fragment:LM,alphatest_fragment:NM,alphatest_pars_fragment:OM,aomap_fragment:PM,aomap_pars_fragment:IM,batching_pars_vertex:zM,batching_vertex:BM,begin_vertex:FM,beginnormal_vertex:HM,bsdfs:GM,iridescence_fragment:VM,bumpmap_pars_fragment:kM,clipping_planes_fragment:XM,clipping_planes_pars_fragment:WM,clipping_planes_pars_vertex:qM,clipping_planes_vertex:YM,color_fragment:jM,color_pars_fragment:ZM,color_pars_vertex:KM,color_vertex:QM,common:JM,cube_uv_reflection_fragment:$M,defaultnormal_vertex:tE,displacementmap_pars_vertex:eE,displacementmap_vertex:nE,emissivemap_fragment:iE,emissivemap_pars_fragment:aE,colorspace_fragment:rE,colorspace_pars_fragment:sE,envmap_fragment:oE,envmap_common_pars_fragment:lE,envmap_pars_fragment:cE,envmap_pars_vertex:uE,envmap_physical_pars_fragment:yE,envmap_vertex:fE,fog_vertex:hE,fog_pars_vertex:dE,fog_fragment:pE,fog_pars_fragment:mE,gradientmap_pars_fragment:gE,lightmap_pars_fragment:_E,lights_lambert_fragment:vE,lights_lambert_pars_fragment:xE,lights_pars_begin:SE,lights_toon_fragment:ME,lights_toon_pars_fragment:EE,lights_phong_fragment:TE,lights_phong_pars_fragment:bE,lights_physical_fragment:AE,lights_physical_pars_fragment:RE,lights_fragment_begin:wE,lights_fragment_maps:CE,lights_fragment_end:DE,logdepthbuf_fragment:UE,logdepthbuf_pars_fragment:LE,logdepthbuf_pars_vertex:NE,logdepthbuf_vertex:OE,map_fragment:PE,map_pars_fragment:IE,map_particle_fragment:zE,map_particle_pars_fragment:BE,metalnessmap_fragment:FE,metalnessmap_pars_fragment:HE,morphinstance_vertex:GE,morphcolor_vertex:VE,morphnormal_vertex:kE,morphtarget_pars_vertex:XE,morphtarget_vertex:WE,normal_fragment_begin:qE,normal_fragment_maps:YE,normal_pars_fragment:jE,normal_pars_vertex:ZE,normal_vertex:KE,normalmap_pars_fragment:QE,clearcoat_normal_fragment_begin:JE,clearcoat_normal_fragment_maps:$E,clearcoat_pars_fragment:tT,iridescence_pars_fragment:eT,opaque_fragment:nT,packing:iT,premultiplied_alpha_fragment:aT,project_vertex:rT,dithering_fragment:sT,dithering_pars_fragment:oT,roughnessmap_fragment:lT,roughnessmap_pars_fragment:cT,shadowmap_pars_fragment:uT,shadowmap_pars_vertex:fT,shadowmap_vertex:hT,shadowmask_pars_fragment:dT,skinbase_vertex:pT,skinning_pars_vertex:mT,skinning_vertex:gT,skinnormal_vertex:_T,specularmap_fragment:vT,specularmap_pars_fragment:xT,tonemapping_fragment:ST,tonemapping_pars_fragment:yT,transmission_fragment:MT,transmission_pars_fragment:ET,uv_pars_fragment:TT,uv_pars_vertex:bT,uv_vertex:AT,worldpos_vertex:RT,background_vert:wT,background_frag:CT,backgroundCube_vert:DT,backgroundCube_frag:UT,cube_vert:LT,cube_frag:NT,depth_vert:OT,depth_frag:PT,distanceRGBA_vert:IT,distanceRGBA_frag:zT,equirect_vert:BT,equirect_frag:FT,linedashed_vert:HT,linedashed_frag:GT,meshbasic_vert:VT,meshbasic_frag:kT,meshlambert_vert:XT,meshlambert_frag:WT,meshmatcap_vert:qT,meshmatcap_frag:YT,meshnormal_vert:jT,meshnormal_frag:ZT,meshphong_vert:KT,meshphong_frag:QT,meshphysical_vert:JT,meshphysical_frag:$T,meshtoon_vert:tb,meshtoon_frag:eb,points_vert:nb,points_frag:ib,shadow_vert:ab,shadow_frag:rb,sprite_vert:sb,sprite_frag:ob},Lt={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},wi={basic:{uniforms:Ln([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:Ln([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ue(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:Ln([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:Ln([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:Ln([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new ue(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:Ln([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:Ln([Lt.points,Lt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:Ln([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:Ln([Lt.common,Lt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:Ln([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:Ln([Lt.sprite,Lt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:Ln([Lt.common,Lt.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:Ln([Lt.lights,Lt.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};wi.physical={uniforms:Ln([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const bc={r:0,b:0,g:0},mr=new Si,lb=new qe;function cb(s,t,i,r,l,c,h){const d=new ue(0);let m=c===!0?0:1,p,g,_=null,v=0,y=null;function E(N){let C=N.isScene===!0?N.background:null;return C&&C.isTexture&&(C=(N.backgroundBlurriness>0?i:t).get(C)),C}function A(N){let C=!1;const H=E(N);H===null?x(d,m):H&&H.isColor&&(x(H,1),C=!0);const z=s.xr.getEnvironmentBlendMode();z==="additive"?r.buffers.color.setClear(0,0,0,1,h):z==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(s.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(N,C){const H=E(C);H&&(H.isCubeTexture||H.mapping===Xc)?(g===void 0&&(g=new vi(new Wo(1,1,1),new Wa({name:"BackgroundCubeMaterial",uniforms:Rs(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(z,B,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),mr.copy(C.backgroundRotation),mr.x*=-1,mr.y*=-1,mr.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),g.material.uniforms.envMap.value=H,g.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(lb.makeRotationFromEuler(mr)),g.material.toneMapped=Se.getTransfer(H.colorSpace)!==Be,(_!==H||v!==H.version||y!==s.toneMapping)&&(g.material.needsUpdate=!0,_=H,v=H.version,y=s.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new vi(new Wc(2,2),new Wa({name:"BackgroundMaterial",uniforms:Rs(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:ca,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=Se.getTransfer(H.colorSpace)!==Be,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(_!==H||v!==H.version||y!==s.toneMapping)&&(p.material.needsUpdate=!0,_=H,v=H.version,y=s.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function x(N,C){N.getRGB(bc,c0(s)),r.buffers.color.setClear(bc.r,bc.g,bc.b,C,h)}function P(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,C=1){d.set(N),m=C,x(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,x(d,m)},render:A,addToRenderList:M,dispose:P}}function ub(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=v(null);let c=l,h=!1;function d(w,V,lt,st,_t){let ht=!1;const I=_(st,lt,V);c!==I&&(c=I,p(c.object)),ht=y(w,st,lt,_t),ht&&E(w,st,lt,_t),_t!==null&&t.update(_t,s.ELEMENT_ARRAY_BUFFER),(ht||h)&&(h=!1,C(w,V,lt,st),_t!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(_t).buffer))}function m(){return s.createVertexArray()}function p(w){return s.bindVertexArray(w)}function g(w){return s.deleteVertexArray(w)}function _(w,V,lt){const st=lt.wireframe===!0;let _t=r[w.id];_t===void 0&&(_t={},r[w.id]=_t);let ht=_t[V.id];ht===void 0&&(ht={},_t[V.id]=ht);let I=ht[st];return I===void 0&&(I=v(m()),ht[st]=I),I}function v(w){const V=[],lt=[],st=[];for(let _t=0;_t<i;_t++)V[_t]=0,lt[_t]=0,st[_t]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:lt,attributeDivisors:st,object:w,attributes:{},index:null}}function y(w,V,lt,st){const _t=c.attributes,ht=V.attributes;let I=0;const Z=lt.getAttributes();for(const Y in Z)if(Z[Y].location>=0){const U=_t[Y];let $=ht[Y];if($===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&($=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&($=w.instanceColor)),U===void 0||U.attribute!==$||$&&U.data!==$.data)return!0;I++}return c.attributesNum!==I||c.index!==st}function E(w,V,lt,st){const _t={},ht=V.attributes;let I=0;const Z=lt.getAttributes();for(const Y in Z)if(Z[Y].location>=0){let U=ht[Y];U===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(U=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(U=w.instanceColor));const $={};$.attribute=U,U&&U.data&&($.data=U.data),_t[Y]=$,I++}c.attributes=_t,c.attributesNum=I,c.index=st}function A(){const w=c.newAttributes;for(let V=0,lt=w.length;V<lt;V++)w[V]=0}function M(w){x(w,0)}function x(w,V){const lt=c.newAttributes,st=c.enabledAttributes,_t=c.attributeDivisors;lt[w]=1,st[w]===0&&(s.enableVertexAttribArray(w),st[w]=1),_t[w]!==V&&(s.vertexAttribDivisor(w,V),_t[w]=V)}function P(){const w=c.newAttributes,V=c.enabledAttributes;for(let lt=0,st=V.length;lt<st;lt++)V[lt]!==w[lt]&&(s.disableVertexAttribArray(lt),V[lt]=0)}function N(w,V,lt,st,_t,ht,I){I===!0?s.vertexAttribIPointer(w,V,lt,_t,ht):s.vertexAttribPointer(w,V,lt,st,_t,ht)}function C(w,V,lt,st){A();const _t=st.attributes,ht=lt.getAttributes(),I=V.defaultAttributeValues;for(const Z in ht){const Y=ht[Z];if(Y.location>=0){let Mt=_t[Z];if(Mt===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(Mt=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(Mt=w.instanceColor)),Mt!==void 0){const U=Mt.normalized,$=Mt.itemSize,vt=t.get(Mt);if(vt===void 0)continue;const St=vt.buffer,Q=vt.type,pt=vt.bytesPerElement,yt=Q===s.INT||Q===s.UNSIGNED_INT||Mt.gpuType===Nd;if(Mt.isInterleavedBufferAttribute){const At=Mt.data,wt=At.stride,oe=Mt.offset;if(At.isInstancedInterleavedBuffer){for(let Qt=0;Qt<Y.locationSize;Qt++)x(Y.location+Qt,At.meshPerAttribute);w.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let Qt=0;Qt<Y.locationSize;Qt++)M(Y.location+Qt);s.bindBuffer(s.ARRAY_BUFFER,St);for(let Qt=0;Qt<Y.locationSize;Qt++)N(Y.location+Qt,$/Y.locationSize,Q,U,wt*pt,(oe+$/Y.locationSize*Qt)*pt,yt)}else{if(Mt.isInstancedBufferAttribute){for(let At=0;At<Y.locationSize;At++)x(Y.location+At,Mt.meshPerAttribute);w.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let At=0;At<Y.locationSize;At++)M(Y.location+At);s.bindBuffer(s.ARRAY_BUFFER,St);for(let At=0;At<Y.locationSize;At++)N(Y.location+At,$/Y.locationSize,Q,U,$*pt,$/Y.locationSize*At*pt,yt)}}else if(I!==void 0){const U=I[Z];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(Y.location,U);break;case 3:s.vertexAttrib3fv(Y.location,U);break;case 4:s.vertexAttrib4fv(Y.location,U);break;default:s.vertexAttrib1fv(Y.location,U)}}}}P()}function H(){W();for(const w in r){const V=r[w];for(const lt in V){const st=V[lt];for(const _t in st)g(st[_t].object),delete st[_t];delete V[lt]}delete r[w]}}function z(w){if(r[w.id]===void 0)return;const V=r[w.id];for(const lt in V){const st=V[lt];for(const _t in st)g(st[_t].object),delete st[_t];delete V[lt]}delete r[w.id]}function B(w){for(const V in r){const lt=r[V];if(lt[w.id]===void 0)continue;const st=lt[w.id];for(const _t in st)g(st[_t].object),delete st[_t];delete lt[w.id]}}function W(){D(),h=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:W,resetDefaultState:D,dispose:H,releaseStatesOfGeometry:z,releaseStatesOfProgram:B,initAttributes:A,enableAttribute:M,disableUnusedAttributes:P}}function fb(s,t,i){let r;function l(p){r=p}function c(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function h(p,g,_){_!==0&&(s.drawArraysInstanced(r,p,g,_),i.update(g,r,_))}function d(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,_);let y=0;for(let E=0;E<_;E++)y+=g[E];i.update(y,r,1)}function m(p,g,_,v){if(_===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<p.length;E++)h(p[E],g[E],v[E]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,g,0,v,0,_);let E=0;for(let A=0;A<_;A++)E+=g[A]*v[A];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function hb(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(B){return!(B!==_i&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const W=B===Go&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==Ui&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==sa&&!W)}function m(B){if(B==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,v=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),P=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),H=E>0,z=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reverseDepthBuffer:v,maxTextures:y,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:P,maxVaryings:N,maxFragmentUniforms:C,vertexTextures:H,maxSamples:z}}function db(s){const t=this;let i=null,r=0,l=!1,c=!1;const h=new _r,d=new se,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const y=_.length!==0||v||r!==0||l;return l=v,r=_.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){i=g(_,v,0)},this.setState=function(_,v,y){const E=_.clippingPlanes,A=_.clipIntersection,M=_.clipShadows,x=s.get(_);if(!l||E===null||E.length===0||c&&!M)c?g(null):p();else{const P=c?0:r,N=P*4;let C=x.clippingState||null;m.value=C,C=g(E,v,N,y);for(let H=0;H!==N;++H)C[H]=i[H];x.clippingState=C,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(_,v,y,E){const A=_!==null?_.length:0;let M=null;if(A!==0){if(M=m.value,E!==!0||M===null){const x=y+A*4,P=v.matrixWorldInverse;d.getNormalMatrix(P),(M===null||M.length<x)&&(M=new Float32Array(x));for(let N=0,C=y;N!==A;++N,C+=4)h.copy(_[N]).applyMatrix4(P,d),h.normal.toArray(M,C),M[C+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,M}}function pb(s){let t=new WeakMap;function i(h,d){return d===Jh?h.mapping=Ts:d===$h&&(h.mapping=bs),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Jh||d===$h)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new oM(m.height);return p.fromEquirectangularTexture(s,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const xs=4,uv=[.125,.215,.35,.446,.526,.582],Sr=20,Nh=new _0,fv=new ue;let Oh=null,Ph=0,Ih=0,zh=!1;const vr=(1+Math.sqrt(5))/2,vs=1/vr,hv=[new tt(-vr,vs,0),new tt(vr,vs,0),new tt(-vs,0,vr),new tt(vs,0,vr),new tt(0,vr,-vs),new tt(0,vr,vs),new tt(-1,1,-1),new tt(1,1,-1),new tt(-1,1,1),new tt(1,1,1)],mb=new tt;class dv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=mb}=c;Oh=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),Ih=this._renderer.getActiveMipmapLevel(),zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Oh,Ph,Ih),this._renderer.xr.enabled=zh,t.scissorTest=!1,Ac(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ts||t.mapping===bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Oh=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),Ih=this._renderer.getActiveMipmapLevel(),zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ci,minFilter:Ci,generateMipmaps:!1,type:Go,format:_i,colorSpace:As,depthBuffer:!1},l=pv(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pv(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gb(c)),this._blurMaterial=_b(c,t,i)}return l}_compileMaterial(t){const i=new vi(this._lodPlanes[0],t);this._renderer.compile(i,Nh)}_sceneToCubeUV(t,i,r,l,c){const m=new ci(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,y=_.toneMapping;_.getClearColor(fv),_.toneMapping=Xa,_.autoClear=!1;const E=new s0({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),A=new vi(new Wo,E);let M=!1;const x=t.background;x?x.isColor&&(E.color.copy(x),t.background=null,M=!0):(E.color.copy(fv),M=!0);for(let P=0;P<6;P++){const N=P%3;N===0?(m.up.set(0,p[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[P],c.y,c.z)):N===1?(m.up.set(0,0,p[P]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[P],c.z)):(m.up.set(0,p[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[P]));const C=this._cubeSize;Ac(l,N*C,P>2?C:0,C,C),_.setRenderTarget(l),M&&_.render(A,m),_.render(t,m)}A.geometry.dispose(),A.material.dispose(),_.toneMapping=y,_.autoClear=v,t.background=x}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Ts||t.mapping===bs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=gv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mv());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new vi(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Ac(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,Nh)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=hv[(l-c-1)%hv.length];this._blur(t,c-1,c,h,d)}i.autoClear=r}_blur(t,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",c),this._halfBlur(h,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new vi(this._lodPlanes[l],p),v=p.uniforms,y=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Sr-1),A=c/E,M=isFinite(c)?1+Math.floor(g*A):Sr;M>Sr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Sr}`);const x=[];let P=0;for(let B=0;B<Sr;++B){const W=B/A,D=Math.exp(-W*W/2);x.push(D),B===0?P+=D:B<M&&(P+=2*D)}for(let B=0;B<x.length;B++)x[B]=x[B]/P;v.envMap.value=t.texture,v.samples.value=M,v.weights.value=x,v.latitudinal.value=h==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:N}=this;v.dTheta.value=E,v.mipInt.value=N-r;const C=this._sizeLods[l],H=3*C*(l>N-xs?l-N+xs:0),z=4*(this._cubeSize-C);Ac(i,H,z,3*C,2*C),m.setRenderTarget(i),m.render(_,Nh)}}function gb(s){const t=[],i=[],r=[];let l=s;const c=s-xs+1+uv.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>s-xs?m=uv[h-s+xs-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,_=1+p,v=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,E=6,A=3,M=2,x=1,P=new Float32Array(A*E*y),N=new Float32Array(M*E*y),C=new Float32Array(x*E*y);for(let z=0;z<y;z++){const B=z%3*2/3-1,W=z>2?0:-1,D=[B,W,0,B+2/3,W,0,B+2/3,W+1,0,B,W,0,B+2/3,W+1,0,B,W+1,0];P.set(D,A*E*z),N.set(v,M*E*z);const w=[z,z,z,z,z,z];C.set(w,x*E*z)}const H=new yi;H.setAttribute("position",new Di(P,A)),H.setAttribute("uv",new Di(N,M)),H.setAttribute("faceIndex",new Di(C,x)),t.push(H),l>xs&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function pv(s,t,i){const r=new br(s,t,i);return r.texture.mapping=Xc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ac(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function _b(s,t,i){const r=new Float32Array(Sr),l=new tt(0,1,0);return new Wa({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function mv(){return new Wa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function gv(){return new Wa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function Xd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function vb(s){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Jh||m===$h,g=m===Ts||m===bs;if(p||g){let _=t.get(d);const v=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return i===null&&(i=new dv(s)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const y=d.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new dv(s)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function xb(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&ys("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function Sb(s,t,i,r){const l={},c=new WeakMap;function h(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",h),delete l[v.id];const y=c.get(v);y&&(t.remove(y),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function d(_,v){return l[v.id]===!0||(v.addEventListener("dispose",h),l[v.id]=!0,i.memory.geometries++),v}function m(_){const v=_.attributes;for(const y in v)t.update(v[y],s.ARRAY_BUFFER)}function p(_){const v=[],y=_.index,E=_.attributes.position;let A=0;if(y!==null){const P=y.array;A=y.version;for(let N=0,C=P.length;N<C;N+=3){const H=P[N+0],z=P[N+1],B=P[N+2];v.push(H,z,z,B,B,H)}}else if(E!==void 0){const P=E.array;A=E.version;for(let N=0,C=P.length/3-1;N<C;N+=3){const H=N+0,z=N+1,B=N+2;v.push(H,z,z,B,B,H)}}else return;const M=new(n0(v)?l0:o0)(v,1);M.version=A;const x=c.get(_);x&&t.remove(x),c.set(_,M)}function g(_){const v=c.get(_);if(v){const y=_.index;y!==null&&v.version<y.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function yb(s,t,i){let r;function l(v){r=v}let c,h;function d(v){c=v.type,h=v.bytesPerElement}function m(v,y){s.drawElements(r,y,c,v*h),i.update(y,r,1)}function p(v,y,E){E!==0&&(s.drawElementsInstanced(r,y,c,v*h,E),i.update(y,r,E))}function g(v,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,v,0,E);let M=0;for(let x=0;x<E;x++)M+=y[x];i.update(M,r,1)}function _(v,y,E,A){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<v.length;x++)p(v[x]/h,y[x],A[x]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,c,v,0,A,0,E);let x=0;for(let P=0;P<E;P++)x+=y[P]*A[P];i.update(x,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function Mb(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case s.TRIANGLES:i.triangles+=d*(c/3);break;case s.LINES:i.lines+=d*(c/2);break;case s.LINE_STRIP:i.lines+=d*(c-1);break;case s.LINE_LOOP:i.lines+=d*c;break;case s.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function Eb(s,t,i){const r=new WeakMap,l=new Ke;function c(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let v=r.get(d);if(v===void 0||v.count!==_){let w=function(){W.dispose(),r.delete(d),d.removeEventListener("dispose",w)};var y=w;v!==void 0&&v.texture.dispose();const E=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let C=0;E===!0&&(C=1),A===!0&&(C=2),M===!0&&(C=3);let H=d.attributes.position.count*C,z=1;H>t.maxTextureSize&&(z=Math.ceil(H/t.maxTextureSize),H=t.maxTextureSize);const B=new Float32Array(H*z*4*_),W=new i0(B,H,z,_);W.type=sa,W.needsUpdate=!0;const D=C*4;for(let V=0;V<_;V++){const lt=x[V],st=P[V],_t=N[V],ht=H*z*4*V;for(let I=0;I<lt.count;I++){const Z=I*D;E===!0&&(l.fromBufferAttribute(lt,I),B[ht+Z+0]=l.x,B[ht+Z+1]=l.y,B[ht+Z+2]=l.z,B[ht+Z+3]=0),A===!0&&(l.fromBufferAttribute(st,I),B[ht+Z+4]=l.x,B[ht+Z+5]=l.y,B[ht+Z+6]=l.z,B[ht+Z+7]=0),M===!0&&(l.fromBufferAttribute(_t,I),B[ht+Z+8]=l.x,B[ht+Z+9]=l.y,B[ht+Z+10]=l.z,B[ht+Z+11]=_t.itemSize===4?l.w:1)}}v={count:_,texture:W,size:new Ee(H,z)},r.set(d,v),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",h.morphTexture,i);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const A=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",A),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:c}}function Tb(s,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;l.get(v)!==p&&(v.update(),l.set(v,p))}return _}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const x0=new On,_v=new f0(1,1),S0=new i0,y0=new Xy,M0=new Vd,vv=[],xv=[],Sv=new Float32Array(16),yv=new Float32Array(9),Mv=new Float32Array(4);function Ds(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=vv[l];if(c===void 0&&(c=new Float32Array(l),vv[l]=c),t!==0){r.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,s[h].toArray(c,d)}return c}function cn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function un(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function qc(s,t){let i=xv[t];i===void 0&&(i=new Int32Array(t),xv[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function bb(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function Ab(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(cn(i,t))return;s.uniform2fv(this.addr,t),un(i,t)}}function Rb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(cn(i,t))return;s.uniform3fv(this.addr,t),un(i,t)}}function wb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(cn(i,t))return;s.uniform4fv(this.addr,t),un(i,t)}}function Cb(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(cn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),un(i,t)}else{if(cn(i,r))return;Mv.set(r),s.uniformMatrix2fv(this.addr,!1,Mv),un(i,r)}}function Db(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(cn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),un(i,t)}else{if(cn(i,r))return;yv.set(r),s.uniformMatrix3fv(this.addr,!1,yv),un(i,r)}}function Ub(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(cn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),un(i,t)}else{if(cn(i,r))return;Sv.set(r),s.uniformMatrix4fv(this.addr,!1,Sv),un(i,r)}}function Lb(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function Nb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(cn(i,t))return;s.uniform2iv(this.addr,t),un(i,t)}}function Ob(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(cn(i,t))return;s.uniform3iv(this.addr,t),un(i,t)}}function Pb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(cn(i,t))return;s.uniform4iv(this.addr,t),un(i,t)}}function Ib(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function zb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(cn(i,t))return;s.uniform2uiv(this.addr,t),un(i,t)}}function Bb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(cn(i,t))return;s.uniform3uiv(this.addr,t),un(i,t)}}function Fb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(cn(i,t))return;s.uniform4uiv(this.addr,t),un(i,t)}}function Hb(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(_v.compareFunction=e0,c=_v):c=x0,i.setTexture2D(t||c,l)}function Gb(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||y0,l)}function Vb(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||M0,l)}function kb(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||S0,l)}function Xb(s){switch(s){case 5126:return bb;case 35664:return Ab;case 35665:return Rb;case 35666:return wb;case 35674:return Cb;case 35675:return Db;case 35676:return Ub;case 5124:case 35670:return Lb;case 35667:case 35671:return Nb;case 35668:case 35672:return Ob;case 35669:case 35673:return Pb;case 5125:return Ib;case 36294:return zb;case 36295:return Bb;case 36296:return Fb;case 35678:case 36198:case 36298:case 36306:case 35682:return Hb;case 35679:case 36299:case 36307:return Gb;case 35680:case 36300:case 36308:case 36293:return Vb;case 36289:case 36303:case 36311:case 36292:return kb}}function Wb(s,t){s.uniform1fv(this.addr,t)}function qb(s,t){const i=Ds(t,this.size,2);s.uniform2fv(this.addr,i)}function Yb(s,t){const i=Ds(t,this.size,3);s.uniform3fv(this.addr,i)}function jb(s,t){const i=Ds(t,this.size,4);s.uniform4fv(this.addr,i)}function Zb(s,t){const i=Ds(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function Kb(s,t){const i=Ds(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function Qb(s,t){const i=Ds(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function Jb(s,t){s.uniform1iv(this.addr,t)}function $b(s,t){s.uniform2iv(this.addr,t)}function t1(s,t){s.uniform3iv(this.addr,t)}function e1(s,t){s.uniform4iv(this.addr,t)}function n1(s,t){s.uniform1uiv(this.addr,t)}function i1(s,t){s.uniform2uiv(this.addr,t)}function a1(s,t){s.uniform3uiv(this.addr,t)}function r1(s,t){s.uniform4uiv(this.addr,t)}function s1(s,t,i){const r=this.cache,l=t.length,c=qc(i,l);cn(r,c)||(s.uniform1iv(this.addr,c),un(r,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||x0,c[h])}function o1(s,t,i){const r=this.cache,l=t.length,c=qc(i,l);cn(r,c)||(s.uniform1iv(this.addr,c),un(r,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||y0,c[h])}function l1(s,t,i){const r=this.cache,l=t.length,c=qc(i,l);cn(r,c)||(s.uniform1iv(this.addr,c),un(r,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||M0,c[h])}function c1(s,t,i){const r=this.cache,l=t.length,c=qc(i,l);cn(r,c)||(s.uniform1iv(this.addr,c),un(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||S0,c[h])}function u1(s){switch(s){case 5126:return Wb;case 35664:return qb;case 35665:return Yb;case 35666:return jb;case 35674:return Zb;case 35675:return Kb;case 35676:return Qb;case 5124:case 35670:return Jb;case 35667:case 35671:return $b;case 35668:case 35672:return t1;case 35669:case 35673:return e1;case 5125:return n1;case 36294:return i1;case 36295:return a1;case 36296:return r1;case 35678:case 36198:case 36298:case 36306:case 35682:return s1;case 35679:case 36299:case 36307:return o1;case 35680:case 36300:case 36308:case 36293:return l1;case 36289:case 36303:case 36311:case 36292:return c1}}class f1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=Xb(i.type)}}class h1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=u1(i.type)}}class d1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],r)}}}const Bh=/(\w+)(\])?(\[|\.)?/g;function Ev(s,t){s.seq.push(t),s.map[t.id]=t}function p1(s,t,i){const r=s.name,l=r.length;for(Bh.lastIndex=0;;){const c=Bh.exec(r),h=Bh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){Ev(i,p===void 0?new f1(d,s,t):new h1(d,s,t));break}else{let _=i.map[d];_===void 0&&(_=new d1(d),Ev(i,_)),i=_}}}class Pc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);p1(c,h,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function Tv(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const m1=37297;let g1=0;function _1(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const bv=new se;function v1(s){Se._getMatrix(bv,Se.workingColorSpace,s);const t=`mat3( ${bv.elements.map(i=>i.toFixed(4))} )`;switch(Se.getTransfer(s)){case Bc:return[t,"LinearTransferOETF"];case Be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Av(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),l=s.getShaderInfoLog(t).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+_1(s.getShaderSource(t),h)}else return l}function x1(s,t){const i=v1(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function S1(s,t){let i;switch(t){case gy:i="Linear";break;case _y:i="Reinhard";break;case vy:i="Cineon";break;case xy:i="ACESFilmic";break;case yy:i="AgX";break;case My:i="Neutral";break;case Sy:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Rc=new tt;function y1(){Se.getLuminanceCoefficients(Rc);const s=Rc.x.toFixed(4),t=Rc.y.toFixed(4),i=Rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function M1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oo).join(`
`)}function E1(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function T1(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),h=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:s.getAttribLocation(t,h),locationSize:d}}return i}function Oo(s){return s!==""}function Rv(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wv(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const b1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cd(s){return s.replace(b1,R1)}const A1=new Map;function R1(s,t){let i=ce[t];if(i===void 0){const r=A1.get(t);if(r!==void 0)i=ce[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Cd(i)}const w1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cv(s){return s.replace(w1,C1)}function C1(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Dv(s){let t=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function D1(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Wv?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===ZS?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===aa&&(t="SHADOWMAP_TYPE_VSM"),t}function U1(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ts:case bs:t="ENVMAP_TYPE_CUBE";break;case Xc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function L1(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case bs:t="ENVMAP_MODE_REFRACTION";break}return t}function N1(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ld:t="ENVMAP_BLENDING_MULTIPLY";break;case py:t="ENVMAP_BLENDING_MIX";break;case my:t="ENVMAP_BLENDING_ADD";break}return t}function O1(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function P1(s,t,i,r){const l=s.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=D1(i),p=U1(i),g=L1(i),_=N1(i),v=O1(i),y=M1(i),E=E1(c),A=l.createProgram();let M,x,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Oo).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Oo).join(`
`),x.length>0&&(x+=`
`)):(M=[Dv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),x=[Dv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xa?"#define TONE_MAPPING":"",i.toneMapping!==Xa?ce.tonemapping_pars_fragment:"",i.toneMapping!==Xa?S1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,x1("linearToOutputTexel",i.outputColorSpace),y1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Oo).join(`
`)),h=Cd(h),h=Rv(h,i),h=wv(h,i),d=Cd(d),d=Rv(d,i),d=wv(d,i),h=Cv(h),d=Cv(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===I_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===I_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const N=P+M+h,C=P+x+d,H=Tv(l,l.VERTEX_SHADER,N),z=Tv(l,l.FRAGMENT_SHADER,C);l.attachShader(A,H),l.attachShader(A,z),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function B(V){if(s.debug.checkShaderErrors){const lt=l.getProgramInfoLog(A).trim(),st=l.getShaderInfoLog(H).trim(),_t=l.getShaderInfoLog(z).trim();let ht=!0,I=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(ht=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,A,H,z);else{const Z=Av(l,H,"vertex"),Y=Av(l,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+lt+`
`+Z+`
`+Y)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(st===""||_t==="")&&(I=!1);I&&(V.diagnostics={runnable:ht,programLog:lt,vertexShader:{log:st,prefix:M},fragmentShader:{log:_t,prefix:x}})}l.deleteShader(H),l.deleteShader(z),W=new Pc(l,A),D=T1(l,A)}let W;this.getUniforms=function(){return W===void 0&&B(this),W};let D;this.getAttributes=function(){return D===void 0&&B(this),D};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(A,m1)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=g1++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=H,this.fragmentShader=z,this}let I1=0;class z1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new B1(t),i.set(t,r)),r}}class B1{constructor(t){this.id=I1++,this.code=t,this.usedTimes=0}}function F1(s,t,i,r,l,c,h){const d=new a0,m=new z1,p=new Set,g=[],_=l.logarithmicDepthBuffer,v=l.vertexTextures;let y=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(D){return p.add(D),D===0?"uv":`uv${D}`}function M(D,w,V,lt,st){const _t=lt.fog,ht=st.geometry,I=D.isMeshStandardMaterial?lt.environment:null,Z=(D.isMeshStandardMaterial?i:t).get(D.envMap||I),Y=Z&&Z.mapping===Xc?Z.image.height:null,Mt=E[D.type];D.precision!==null&&(y=l.getMaxPrecision(D.precision),y!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",y,"instead."));const U=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,$=U!==void 0?U.length:0;let vt=0;ht.morphAttributes.position!==void 0&&(vt=1),ht.morphAttributes.normal!==void 0&&(vt=2),ht.morphAttributes.color!==void 0&&(vt=3);let St,Q,pt,yt;if(Mt){const be=wi[Mt];St=be.vertexShader,Q=be.fragmentShader}else St=D.vertexShader,Q=D.fragmentShader,m.update(D),pt=m.getVertexShaderID(D),yt=m.getFragmentShaderID(D);const At=s.getRenderTarget(),wt=s.state.buffers.depth.getReversed(),oe=st.isInstancedMesh===!0,Qt=st.isBatchedMesh===!0,Ne=!!D.map,Fe=!!D.matcap,_e=!!Z,F=!!D.aoMap,Sn=!!D.lightMap,Te=!!D.bumpMap,pe=!!D.normalMap,Vt=!!D.displacementMap,ve=!!D.emissiveMap,jt=!!D.metalnessMap,ae=!!D.roughnessMap,Qe=D.anisotropy>0,L=D.clearcoat>0,T=D.dispersion>0,et=D.iridescence>0,ut=D.sheen>0,dt=D.transmission>0,ot=Qe&&!!D.anisotropyMap,Ot=L&&!!D.clearcoatMap,Dt=L&&!!D.clearcoatNormalMap,Gt=L&&!!D.clearcoatRoughnessMap,kt=et&&!!D.iridescenceMap,xt=et&&!!D.iridescenceThicknessMap,Pt=ut&&!!D.sheenColorMap,qt=ut&&!!D.sheenRoughnessMap,Yt=!!D.specularMap,Rt=!!D.specularColorMap,ie=!!D.specularIntensityMap,k=dt&&!!D.transmissionMap,Ut=dt&&!!D.thicknessMap,Et=!!D.gradientMap,It=!!D.alphaMap,bt=D.alphaTest>0,gt=!!D.alphaHash,Ft=!!D.extensions;let ne=Xa;D.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(ne=s.toneMapping);const De={shaderID:Mt,shaderType:D.type,shaderName:D.name,vertexShader:St,fragmentShader:Q,defines:D.defines,customVertexShaderID:pt,customFragmentShaderID:yt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:y,batching:Qt,batchingColor:Qt&&st._colorsTexture!==null,instancing:oe,instancingColor:oe&&st.instanceColor!==null,instancingMorph:oe&&st.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:At===null?s.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:As,alphaToCoverage:!!D.alphaToCoverage,map:Ne,matcap:Fe,envMap:_e,envMapMode:_e&&Z.mapping,envMapCubeUVHeight:Y,aoMap:F,lightMap:Sn,bumpMap:Te,normalMap:pe,displacementMap:v&&Vt,emissiveMap:ve,normalMapObjectSpace:pe&&D.normalMapType===Ay,normalMapTangentSpace:pe&&D.normalMapType===Fd,metalnessMap:jt,roughnessMap:ae,anisotropy:Qe,anisotropyMap:ot,clearcoat:L,clearcoatMap:Ot,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Gt,dispersion:T,iridescence:et,iridescenceMap:kt,iridescenceThicknessMap:xt,sheen:ut,sheenColorMap:Pt,sheenRoughnessMap:qt,specularMap:Yt,specularColorMap:Rt,specularIntensityMap:ie,transmission:dt,transmissionMap:k,thicknessMap:Ut,gradientMap:Et,opaque:D.transparent===!1&&D.blending===Ss&&D.alphaToCoverage===!1,alphaMap:It,alphaTest:bt,alphaHash:gt,combine:D.combine,mapUv:Ne&&A(D.map.channel),aoMapUv:F&&A(D.aoMap.channel),lightMapUv:Sn&&A(D.lightMap.channel),bumpMapUv:Te&&A(D.bumpMap.channel),normalMapUv:pe&&A(D.normalMap.channel),displacementMapUv:Vt&&A(D.displacementMap.channel),emissiveMapUv:ve&&A(D.emissiveMap.channel),metalnessMapUv:jt&&A(D.metalnessMap.channel),roughnessMapUv:ae&&A(D.roughnessMap.channel),anisotropyMapUv:ot&&A(D.anisotropyMap.channel),clearcoatMapUv:Ot&&A(D.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&A(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Gt&&A(D.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&A(D.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&A(D.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&A(D.sheenColorMap.channel),sheenRoughnessMapUv:qt&&A(D.sheenRoughnessMap.channel),specularMapUv:Yt&&A(D.specularMap.channel),specularColorMapUv:Rt&&A(D.specularColorMap.channel),specularIntensityMapUv:ie&&A(D.specularIntensityMap.channel),transmissionMapUv:k&&A(D.transmissionMap.channel),thicknessMapUv:Ut&&A(D.thicknessMap.channel),alphaMapUv:It&&A(D.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(pe||Qe),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!ht.attributes.uv&&(Ne||It),fog:!!_t,useFog:D.fog===!0,fogExp2:!!_t&&_t.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:wt,skinning:st.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:vt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:ne,decodeVideoTexture:Ne&&D.map.isVideoTexture===!0&&Se.getTransfer(D.map.colorSpace)===Be,decodeVideoTextureEmissive:ve&&D.emissiveMap.isVideoTexture===!0&&Se.getTransfer(D.emissiveMap.colorSpace)===Be,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ra,flipSided:D.side===kn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Ft&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&D.extensions.multiDraw===!0||Qt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return De.vertexUv1s=p.has(1),De.vertexUv2s=p.has(2),De.vertexUv3s=p.has(3),p.clear(),De}function x(D){const w=[];if(D.shaderID?w.push(D.shaderID):(w.push(D.customVertexShaderID),w.push(D.customFragmentShaderID)),D.defines!==void 0)for(const V in D.defines)w.push(V),w.push(D.defines[V]);return D.isRawShaderMaterial===!1&&(P(w,D),N(w,D),w.push(s.outputColorSpace)),w.push(D.customProgramCacheKey),w.join()}function P(D,w){D.push(w.precision),D.push(w.outputColorSpace),D.push(w.envMapMode),D.push(w.envMapCubeUVHeight),D.push(w.mapUv),D.push(w.alphaMapUv),D.push(w.lightMapUv),D.push(w.aoMapUv),D.push(w.bumpMapUv),D.push(w.normalMapUv),D.push(w.displacementMapUv),D.push(w.emissiveMapUv),D.push(w.metalnessMapUv),D.push(w.roughnessMapUv),D.push(w.anisotropyMapUv),D.push(w.clearcoatMapUv),D.push(w.clearcoatNormalMapUv),D.push(w.clearcoatRoughnessMapUv),D.push(w.iridescenceMapUv),D.push(w.iridescenceThicknessMapUv),D.push(w.sheenColorMapUv),D.push(w.sheenRoughnessMapUv),D.push(w.specularMapUv),D.push(w.specularColorMapUv),D.push(w.specularIntensityMapUv),D.push(w.transmissionMapUv),D.push(w.thicknessMapUv),D.push(w.combine),D.push(w.fogExp2),D.push(w.sizeAttenuation),D.push(w.morphTargetsCount),D.push(w.morphAttributeCount),D.push(w.numDirLights),D.push(w.numPointLights),D.push(w.numSpotLights),D.push(w.numSpotLightMaps),D.push(w.numHemiLights),D.push(w.numRectAreaLights),D.push(w.numDirLightShadows),D.push(w.numPointLightShadows),D.push(w.numSpotLightShadows),D.push(w.numSpotLightShadowsWithMaps),D.push(w.numLightProbes),D.push(w.shadowMapType),D.push(w.toneMapping),D.push(w.numClippingPlanes),D.push(w.numClipIntersection),D.push(w.depthPacking)}function N(D,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),w.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reverseDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),D.push(d.mask)}function C(D){const w=E[D.type];let V;if(w){const lt=wi[w];V=iM.clone(lt.uniforms)}else V=D.uniforms;return V}function H(D,w){let V;for(let lt=0,st=g.length;lt<st;lt++){const _t=g[lt];if(_t.cacheKey===w){V=_t,++V.usedTimes;break}}return V===void 0&&(V=new P1(s,w,D,c),g.push(V)),V}function z(D){if(--D.usedTimes===0){const w=g.indexOf(D);g[w]=g[g.length-1],g.pop(),D.destroy()}}function B(D){m.remove(D)}function W(){m.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:C,acquireProgram:H,releaseProgram:z,releaseShaderCache:B,programs:g,dispose:W}}function H1(){let s=new WeakMap;function t(h){return s.has(h)}function i(h){let d=s.get(h);return d===void 0&&(d={},s.set(h,d)),d}function r(h){s.delete(h)}function l(h,d,m){s.get(h)[d]=m}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function G1(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Uv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Lv(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function h(_,v,y,E,A,M){let x=s[t];return x===void 0?(x={id:_.id,object:_,geometry:v,material:y,groupOrder:E,renderOrder:_.renderOrder,z:A,group:M},s[t]=x):(x.id=_.id,x.object=_,x.geometry=v,x.material=y,x.groupOrder=E,x.renderOrder=_.renderOrder,x.z=A,x.group=M),t++,x}function d(_,v,y,E,A,M){const x=h(_,v,y,E,A,M);y.transmission>0?r.push(x):y.transparent===!0?l.push(x):i.push(x)}function m(_,v,y,E,A,M){const x=h(_,v,y,E,A,M);y.transmission>0?r.unshift(x):y.transparent===!0?l.unshift(x):i.unshift(x)}function p(_,v){i.length>1&&i.sort(_||G1),r.length>1&&r.sort(v||Uv),l.length>1&&l.sort(v||Uv)}function g(){for(let _=t,v=s.length;_<v;_++){const y=s[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function V1(){let s=new WeakMap;function t(r,l){const c=s.get(r);let h;return c===void 0?(h=new Lv,s.set(r,[h])):l>=c.length?(h=new Lv,c.push(h)):h=c[l],h}function i(){s=new WeakMap}return{get:t,dispose:i}}function k1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new tt,color:new ue};break;case"SpotLight":i={position:new tt,direction:new tt,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new tt,color:new ue,distance:0,decay:0};break;case"HemisphereLight":i={direction:new tt,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":i={color:new ue,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return s[t.id]=i,i}}}function X1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let W1=0;function q1(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Y1(s){const t=new k1,i=X1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new tt);const l=new tt,c=new qe,h=new qe;function d(p){let g=0,_=0,v=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let y=0,E=0,A=0,M=0,x=0,P=0,N=0,C=0,H=0,z=0,B=0;p.sort(q1);for(let D=0,w=p.length;D<w;D++){const V=p[D],lt=V.color,st=V.intensity,_t=V.distance,ht=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=lt.r*st,_+=lt.g*st,v+=lt.b*st;else if(V.isLightProbe){for(let I=0;I<9;I++)r.probe[I].addScaledVector(V.sh.coefficients[I],st);B++}else if(V.isDirectionalLight){const I=t.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const Z=V.shadow,Y=i.get(V);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,r.directionalShadow[y]=Y,r.directionalShadowMap[y]=ht,r.directionalShadowMatrix[y]=V.shadow.matrix,P++}r.directional[y]=I,y++}else if(V.isSpotLight){const I=t.get(V);I.position.setFromMatrixPosition(V.matrixWorld),I.color.copy(lt).multiplyScalar(st),I.distance=_t,I.coneCos=Math.cos(V.angle),I.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),I.decay=V.decay,r.spot[A]=I;const Z=V.shadow;if(V.map&&(r.spotLightMap[H]=V.map,H++,Z.updateMatrices(V),V.castShadow&&z++),r.spotLightMatrix[A]=Z.matrix,V.castShadow){const Y=i.get(V);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,r.spotShadow[A]=Y,r.spotShadowMap[A]=ht,C++}A++}else if(V.isRectAreaLight){const I=t.get(V);I.color.copy(lt).multiplyScalar(st),I.halfWidth.set(V.width*.5,0,0),I.halfHeight.set(0,V.height*.5,0),r.rectArea[M]=I,M++}else if(V.isPointLight){const I=t.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),I.distance=V.distance,I.decay=V.decay,V.castShadow){const Z=V.shadow,Y=i.get(V);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,Y.shadowCameraNear=Z.camera.near,Y.shadowCameraFar=Z.camera.far,r.pointShadow[E]=Y,r.pointShadowMap[E]=ht,r.pointShadowMatrix[E]=V.shadow.matrix,N++}r.point[E]=I,E++}else if(V.isHemisphereLight){const I=t.get(V);I.skyColor.copy(V.color).multiplyScalar(st),I.groundColor.copy(V.groundColor).multiplyScalar(st),r.hemi[x]=I,x++}}M>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Lt.LTC_FLOAT_1,r.rectAreaLTC2=Lt.LTC_FLOAT_2):(r.rectAreaLTC1=Lt.LTC_HALF_1,r.rectAreaLTC2=Lt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=v;const W=r.hash;(W.directionalLength!==y||W.pointLength!==E||W.spotLength!==A||W.rectAreaLength!==M||W.hemiLength!==x||W.numDirectionalShadows!==P||W.numPointShadows!==N||W.numSpotShadows!==C||W.numSpotMaps!==H||W.numLightProbes!==B)&&(r.directional.length=y,r.spot.length=A,r.rectArea.length=M,r.point.length=E,r.hemi.length=x,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=C+H-z,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=B,W.directionalLength=y,W.pointLength=E,W.spotLength=A,W.rectAreaLength=M,W.hemiLength=x,W.numDirectionalShadows=P,W.numPointShadows=N,W.numSpotShadows=C,W.numSpotMaps=H,W.numLightProbes=B,r.version=W1++)}function m(p,g){let _=0,v=0,y=0,E=0,A=0;const M=g.matrixWorldInverse;for(let x=0,P=p.length;x<P;x++){const N=p[x];if(N.isDirectionalLight){const C=r.directional[_];C.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(M),_++}else if(N.isSpotLight){const C=r.spot[y];C.position.setFromMatrixPosition(N.matrixWorld),C.position.applyMatrix4(M),C.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(M),y++}else if(N.isRectAreaLight){const C=r.rectArea[E];C.position.setFromMatrixPosition(N.matrixWorld),C.position.applyMatrix4(M),h.identity(),c.copy(N.matrixWorld),c.premultiply(M),h.extractRotation(c),C.halfWidth.set(N.width*.5,0,0),C.halfHeight.set(0,N.height*.5,0),C.halfWidth.applyMatrix4(h),C.halfHeight.applyMatrix4(h),E++}else if(N.isPointLight){const C=r.point[v];C.position.setFromMatrixPosition(N.matrixWorld),C.position.applyMatrix4(M),v++}else if(N.isHemisphereLight){const C=r.hemi[A];C.direction.setFromMatrixPosition(N.matrixWorld),C.direction.transformDirection(M),A++}}}return{setup:d,setupView:m,state:r}}function Nv(s){const t=new Y1(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function h(g){r.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function j1(s){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new Nv(s),t.set(l,[d])):c>=h.length?(d=new Nv(s),h.push(d)):d=h[c],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const Z1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Q1(s,t,i){let r=new kd;const l=new Ee,c=new Ee,h=new Ke,d=new mM({depthPacking:by}),m=new gM,p={},g=i.maxTextureSize,_={[ca]:kn,[kn]:ca,[ra]:ra},v=new Wa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:Z1,fragmentShader:K1}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const E=new yi;E.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new vi(E,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wv;let x=this.type;this.render=function(z,B,W){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||z.length===0)return;const D=s.getRenderTarget(),w=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),lt=s.state;lt.setBlending(ka),lt.buffers.color.setClear(1,1,1,1),lt.buffers.depth.setTest(!0),lt.setScissorTest(!1);const st=x!==aa&&this.type===aa,_t=x===aa&&this.type!==aa;for(let ht=0,I=z.length;ht<I;ht++){const Z=z[ht],Y=Z.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const Mt=Y.getFrameExtents();if(l.multiply(Mt),c.copy(Y.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/Mt.x),l.x=c.x*Mt.x,Y.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/Mt.y),l.y=c.y*Mt.y,Y.mapSize.y=c.y)),Y.map===null||st===!0||_t===!0){const $=this.type!==aa?{minFilter:xi,magFilter:xi}:{};Y.map!==null&&Y.map.dispose(),Y.map=new br(l.x,l.y,$),Y.map.texture.name=Z.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const U=Y.getViewportCount();for(let $=0;$<U;$++){const vt=Y.getViewport($);h.set(c.x*vt.x,c.y*vt.y,c.x*vt.z,c.y*vt.w),lt.viewport(h),Y.updateMatrices(Z,$),r=Y.getFrustum(),C(B,W,Y.camera,Z,this.type)}Y.isPointLightShadow!==!0&&this.type===aa&&P(Y,W),Y.needsUpdate=!1}x=this.type,M.needsUpdate=!1,s.setRenderTarget(D,w,V)};function P(z,B){const W=t.update(A);v.defines.VSM_SAMPLES!==z.blurSamples&&(v.defines.VSM_SAMPLES=z.blurSamples,y.defines.VSM_SAMPLES=z.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new br(l.x,l.y)),v.uniforms.shadow_pass.value=z.map.texture,v.uniforms.resolution.value=z.mapSize,v.uniforms.radius.value=z.radius,s.setRenderTarget(z.mapPass),s.clear(),s.renderBufferDirect(B,null,W,v,A,null),y.uniforms.shadow_pass.value=z.mapPass.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,s.setRenderTarget(z.map),s.clear(),s.renderBufferDirect(B,null,W,y,A,null)}function N(z,B,W,D){let w=null;const V=W.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(V!==void 0)w=V;else if(w=W.isPointLight===!0?m:d,s.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const lt=w.uuid,st=B.uuid;let _t=p[lt];_t===void 0&&(_t={},p[lt]=_t);let ht=_t[st];ht===void 0&&(ht=w.clone(),_t[st]=ht,B.addEventListener("dispose",H)),w=ht}if(w.visible=B.visible,w.wireframe=B.wireframe,D===aa?w.side=B.shadowSide!==null?B.shadowSide:B.side:w.side=B.shadowSide!==null?B.shadowSide:_[B.side],w.alphaMap=B.alphaMap,w.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,w.map=B.map,w.clipShadows=B.clipShadows,w.clippingPlanes=B.clippingPlanes,w.clipIntersection=B.clipIntersection,w.displacementMap=B.displacementMap,w.displacementScale=B.displacementScale,w.displacementBias=B.displacementBias,w.wireframeLinewidth=B.wireframeLinewidth,w.linewidth=B.linewidth,W.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const lt=s.properties.get(w);lt.light=W}return w}function C(z,B,W,D,w){if(z.visible===!1)return;if(z.layers.test(B.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&w===aa)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,z.matrixWorld);const st=t.update(z),_t=z.material;if(Array.isArray(_t)){const ht=st.groups;for(let I=0,Z=ht.length;I<Z;I++){const Y=ht[I],Mt=_t[Y.materialIndex];if(Mt&&Mt.visible){const U=N(z,Mt,D,w);z.onBeforeShadow(s,z,B,W,st,U,Y),s.renderBufferDirect(W,null,st,U,z,Y),z.onAfterShadow(s,z,B,W,st,U,Y)}}}else if(_t.visible){const ht=N(z,_t,D,w);z.onBeforeShadow(s,z,B,W,st,ht,null),s.renderBufferDirect(W,null,st,ht,z,null),z.onAfterShadow(s,z,B,W,st,ht,null)}}const lt=z.children;for(let st=0,_t=lt.length;st<_t;st++)C(lt[st],B,W,D,w)}function H(z){z.target.removeEventListener("dispose",H);for(const W in p){const D=p[W],w=z.target.uuid;w in D&&(D[w].dispose(),delete D[w])}}}const J1={[Wh]:qh,[Yh]:Kh,[jh]:Qh,[Es]:Zh,[qh]:Wh,[Kh]:Yh,[Qh]:jh,[Zh]:Es};function $1(s,t){function i(){let k=!1;const Ut=new Ke;let Et=null;const It=new Ke(0,0,0,0);return{setMask:function(bt){Et!==bt&&!k&&(s.colorMask(bt,bt,bt,bt),Et=bt)},setLocked:function(bt){k=bt},setClear:function(bt,gt,Ft,ne,De){De===!0&&(bt*=ne,gt*=ne,Ft*=ne),Ut.set(bt,gt,Ft,ne),It.equals(Ut)===!1&&(s.clearColor(bt,gt,Ft,ne),It.copy(Ut))},reset:function(){k=!1,Et=null,It.set(-1,0,0,0)}}}function r(){let k=!1,Ut=!1,Et=null,It=null,bt=null;return{setReversed:function(gt){if(Ut!==gt){const Ft=t.get("EXT_clip_control");gt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),Ut=gt;const ne=bt;bt=null,this.setClear(ne)}},getReversed:function(){return Ut},setTest:function(gt){gt?At(s.DEPTH_TEST):wt(s.DEPTH_TEST)},setMask:function(gt){Et!==gt&&!k&&(s.depthMask(gt),Et=gt)},setFunc:function(gt){if(Ut&&(gt=J1[gt]),It!==gt){switch(gt){case Wh:s.depthFunc(s.NEVER);break;case qh:s.depthFunc(s.ALWAYS);break;case Yh:s.depthFunc(s.LESS);break;case Es:s.depthFunc(s.LEQUAL);break;case jh:s.depthFunc(s.EQUAL);break;case Zh:s.depthFunc(s.GEQUAL);break;case Kh:s.depthFunc(s.GREATER);break;case Qh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}It=gt}},setLocked:function(gt){k=gt},setClear:function(gt){bt!==gt&&(Ut&&(gt=1-gt),s.clearDepth(gt),bt=gt)},reset:function(){k=!1,Et=null,It=null,bt=null,Ut=!1}}}function l(){let k=!1,Ut=null,Et=null,It=null,bt=null,gt=null,Ft=null,ne=null,De=null;return{setTest:function(be){k||(be?At(s.STENCIL_TEST):wt(s.STENCIL_TEST))},setMask:function(be){Ut!==be&&!k&&(s.stencilMask(be),Ut=be)},setFunc:function(be,Xn,fn){(Et!==be||It!==Xn||bt!==fn)&&(s.stencilFunc(be,Xn,fn),Et=be,It=Xn,bt=fn)},setOp:function(be,Xn,fn){(gt!==be||Ft!==Xn||ne!==fn)&&(s.stencilOp(be,Xn,fn),gt=be,Ft=Xn,ne=fn)},setLocked:function(be){k=be},setClear:function(be){De!==be&&(s.clearStencil(be),De=be)},reset:function(){k=!1,Ut=null,Et=null,It=null,bt=null,gt=null,Ft=null,ne=null,De=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},_={},v=new WeakMap,y=[],E=null,A=!1,M=null,x=null,P=null,N=null,C=null,H=null,z=null,B=new ue(0,0,0),W=0,D=!1,w=null,V=null,lt=null,st=null,_t=null;const ht=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,Z=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),I=Z>=1):Y.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),I=Z>=2);let Mt=null,U={};const $=s.getParameter(s.SCISSOR_BOX),vt=s.getParameter(s.VIEWPORT),St=new Ke().fromArray($),Q=new Ke().fromArray(vt);function pt(k,Ut,Et,It){const bt=new Uint8Array(4),gt=s.createTexture();s.bindTexture(k,gt),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ft=0;Ft<Et;Ft++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(Ut,0,s.RGBA,1,1,It,0,s.RGBA,s.UNSIGNED_BYTE,bt):s.texImage2D(Ut+Ft,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,bt);return gt}const yt={};yt[s.TEXTURE_2D]=pt(s.TEXTURE_2D,s.TEXTURE_2D,1),yt[s.TEXTURE_CUBE_MAP]=pt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[s.TEXTURE_2D_ARRAY]=pt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),yt[s.TEXTURE_3D]=pt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),At(s.DEPTH_TEST),h.setFunc(Es),Te(!1),pe(D_),At(s.CULL_FACE),F(ka);function At(k){g[k]!==!0&&(s.enable(k),g[k]=!0)}function wt(k){g[k]!==!1&&(s.disable(k),g[k]=!1)}function oe(k,Ut){return _[k]!==Ut?(s.bindFramebuffer(k,Ut),_[k]=Ut,k===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Ut),k===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Qt(k,Ut){let Et=y,It=!1;if(k){Et=v.get(Ut),Et===void 0&&(Et=[],v.set(Ut,Et));const bt=k.textures;if(Et.length!==bt.length||Et[0]!==s.COLOR_ATTACHMENT0){for(let gt=0,Ft=bt.length;gt<Ft;gt++)Et[gt]=s.COLOR_ATTACHMENT0+gt;Et.length=bt.length,It=!0}}else Et[0]!==s.BACK&&(Et[0]=s.BACK,It=!0);It&&s.drawBuffers(Et)}function Ne(k){return E!==k?(s.useProgram(k),E=k,!0):!1}const Fe={[xr]:s.FUNC_ADD,[QS]:s.FUNC_SUBTRACT,[JS]:s.FUNC_REVERSE_SUBTRACT};Fe[$S]=s.MIN,Fe[ty]=s.MAX;const _e={[ey]:s.ZERO,[ny]:s.ONE,[iy]:s.SRC_COLOR,[kh]:s.SRC_ALPHA,[cy]:s.SRC_ALPHA_SATURATE,[oy]:s.DST_COLOR,[ry]:s.DST_ALPHA,[ay]:s.ONE_MINUS_SRC_COLOR,[Xh]:s.ONE_MINUS_SRC_ALPHA,[ly]:s.ONE_MINUS_DST_COLOR,[sy]:s.ONE_MINUS_DST_ALPHA,[uy]:s.CONSTANT_COLOR,[fy]:s.ONE_MINUS_CONSTANT_COLOR,[hy]:s.CONSTANT_ALPHA,[dy]:s.ONE_MINUS_CONSTANT_ALPHA};function F(k,Ut,Et,It,bt,gt,Ft,ne,De,be){if(k===ka){A===!0&&(wt(s.BLEND),A=!1);return}if(A===!1&&(At(s.BLEND),A=!0),k!==KS){if(k!==M||be!==D){if((x!==xr||C!==xr)&&(s.blendEquation(s.FUNC_ADD),x=xr,C=xr),be)switch(k){case Ss:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case U_:s.blendFunc(s.ONE,s.ONE);break;case L_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case N_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ss:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case U_:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case L_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case N_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}P=null,N=null,H=null,z=null,B.set(0,0,0),W=0,M=k,D=be}return}bt=bt||Ut,gt=gt||Et,Ft=Ft||It,(Ut!==x||bt!==C)&&(s.blendEquationSeparate(Fe[Ut],Fe[bt]),x=Ut,C=bt),(Et!==P||It!==N||gt!==H||Ft!==z)&&(s.blendFuncSeparate(_e[Et],_e[It],_e[gt],_e[Ft]),P=Et,N=It,H=gt,z=Ft),(ne.equals(B)===!1||De!==W)&&(s.blendColor(ne.r,ne.g,ne.b,De),B.copy(ne),W=De),M=k,D=!1}function Sn(k,Ut){k.side===ra?wt(s.CULL_FACE):At(s.CULL_FACE);let Et=k.side===kn;Ut&&(Et=!Et),Te(Et),k.blending===Ss&&k.transparent===!1?F(ka):F(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),c.setMask(k.colorWrite);const It=k.stencilWrite;d.setTest(It),It&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ve(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?At(s.SAMPLE_ALPHA_TO_COVERAGE):wt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Te(k){w!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),w=k)}function pe(k){k!==YS?(At(s.CULL_FACE),k!==V&&(k===D_?s.cullFace(s.BACK):k===jS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):wt(s.CULL_FACE),V=k}function Vt(k){k!==lt&&(I&&s.lineWidth(k),lt=k)}function ve(k,Ut,Et){k?(At(s.POLYGON_OFFSET_FILL),(st!==Ut||_t!==Et)&&(s.polygonOffset(Ut,Et),st=Ut,_t=Et)):wt(s.POLYGON_OFFSET_FILL)}function jt(k){k?At(s.SCISSOR_TEST):wt(s.SCISSOR_TEST)}function ae(k){k===void 0&&(k=s.TEXTURE0+ht-1),Mt!==k&&(s.activeTexture(k),Mt=k)}function Qe(k,Ut,Et){Et===void 0&&(Mt===null?Et=s.TEXTURE0+ht-1:Et=Mt);let It=U[Et];It===void 0&&(It={type:void 0,texture:void 0},U[Et]=It),(It.type!==k||It.texture!==Ut)&&(Mt!==Et&&(s.activeTexture(Et),Mt=Et),s.bindTexture(k,Ut||yt[k]),It.type=k,It.texture=Ut)}function L(){const k=U[Mt];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function T(){try{s.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function et(){try{s.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ut(){try{s.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function dt(){try{s.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ot(){try{s.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ot(){try{s.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Dt(){try{s.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Gt(){try{s.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function kt(){try{s.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xt(){try{s.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pt(k){St.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),St.copy(k))}function qt(k){Q.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Q.copy(k))}function Yt(k,Ut){let Et=p.get(Ut);Et===void 0&&(Et=new WeakMap,p.set(Ut,Et));let It=Et.get(k);It===void 0&&(It=s.getUniformBlockIndex(Ut,k.name),Et.set(k,It))}function Rt(k,Ut){const It=p.get(Ut).get(k);m.get(Ut)!==It&&(s.uniformBlockBinding(Ut,It,k.__bindingPointIndex),m.set(Ut,It))}function ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),h.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},Mt=null,U={},_={},v=new WeakMap,y=[],E=null,A=!1,M=null,x=null,P=null,N=null,C=null,H=null,z=null,B=new ue(0,0,0),W=0,D=!1,w=null,V=null,lt=null,st=null,_t=null,St.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:At,disable:wt,bindFramebuffer:oe,drawBuffers:Qt,useProgram:Ne,setBlending:F,setMaterial:Sn,setFlipSided:Te,setCullFace:pe,setLineWidth:Vt,setPolygonOffset:ve,setScissorTest:jt,activeTexture:ae,bindTexture:Qe,unbindTexture:L,compressedTexImage2D:T,compressedTexImage3D:et,texImage2D:kt,texImage3D:xt,updateUBOMapping:Yt,uniformBlockBinding:Rt,texStorage2D:Dt,texStorage3D:Gt,texSubImage2D:ut,texSubImage3D:dt,compressedTexSubImage2D:ot,compressedTexSubImage3D:Ot,scissor:Pt,viewport:qt,reset:ie}}function tA(s,t,i,r,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ee,g=new WeakMap;let _;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,T){return y?new OffscreenCanvas(L,T):Ho("canvas")}function A(L,T,et){let ut=1;const dt=Qe(L);if((dt.width>et||dt.height>et)&&(ut=et/Math.max(dt.width,dt.height)),ut<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ot=Math.floor(ut*dt.width),Ot=Math.floor(ut*dt.height);_===void 0&&(_=E(ot,Ot));const Dt=T?E(ot,Ot):_;return Dt.width=ot,Dt.height=Ot,Dt.getContext("2d").drawImage(L,0,0,ot,Ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+ot+"x"+Ot+")."),Dt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),L;return L}function M(L){return L.generateMipmaps}function x(L){s.generateMipmap(L)}function P(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(L,T,et,ut,dt=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ot=T;if(T===s.RED&&(et===s.FLOAT&&(ot=s.R32F),et===s.HALF_FLOAT&&(ot=s.R16F),et===s.UNSIGNED_BYTE&&(ot=s.R8)),T===s.RED_INTEGER&&(et===s.UNSIGNED_BYTE&&(ot=s.R8UI),et===s.UNSIGNED_SHORT&&(ot=s.R16UI),et===s.UNSIGNED_INT&&(ot=s.R32UI),et===s.BYTE&&(ot=s.R8I),et===s.SHORT&&(ot=s.R16I),et===s.INT&&(ot=s.R32I)),T===s.RG&&(et===s.FLOAT&&(ot=s.RG32F),et===s.HALF_FLOAT&&(ot=s.RG16F),et===s.UNSIGNED_BYTE&&(ot=s.RG8)),T===s.RG_INTEGER&&(et===s.UNSIGNED_BYTE&&(ot=s.RG8UI),et===s.UNSIGNED_SHORT&&(ot=s.RG16UI),et===s.UNSIGNED_INT&&(ot=s.RG32UI),et===s.BYTE&&(ot=s.RG8I),et===s.SHORT&&(ot=s.RG16I),et===s.INT&&(ot=s.RG32I)),T===s.RGB_INTEGER&&(et===s.UNSIGNED_BYTE&&(ot=s.RGB8UI),et===s.UNSIGNED_SHORT&&(ot=s.RGB16UI),et===s.UNSIGNED_INT&&(ot=s.RGB32UI),et===s.BYTE&&(ot=s.RGB8I),et===s.SHORT&&(ot=s.RGB16I),et===s.INT&&(ot=s.RGB32I)),T===s.RGBA_INTEGER&&(et===s.UNSIGNED_BYTE&&(ot=s.RGBA8UI),et===s.UNSIGNED_SHORT&&(ot=s.RGBA16UI),et===s.UNSIGNED_INT&&(ot=s.RGBA32UI),et===s.BYTE&&(ot=s.RGBA8I),et===s.SHORT&&(ot=s.RGBA16I),et===s.INT&&(ot=s.RGBA32I)),T===s.RGB&&et===s.UNSIGNED_INT_5_9_9_9_REV&&(ot=s.RGB9_E5),T===s.RGBA){const Ot=dt?Bc:Se.getTransfer(ut);et===s.FLOAT&&(ot=s.RGBA32F),et===s.HALF_FLOAT&&(ot=s.RGBA16F),et===s.UNSIGNED_BYTE&&(ot=Ot===Be?s.SRGB8_ALPHA8:s.RGBA8),et===s.UNSIGNED_SHORT_4_4_4_4&&(ot=s.RGBA4),et===s.UNSIGNED_SHORT_5_5_5_1&&(ot=s.RGB5_A1)}return(ot===s.R16F||ot===s.R32F||ot===s.RG16F||ot===s.RG32F||ot===s.RGBA16F||ot===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function C(L,T){let et;return L?T===null||T===Tr||T===zo?et=s.DEPTH24_STENCIL8:T===sa?et=s.DEPTH32F_STENCIL8:T===Io&&(et=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Tr||T===zo?et=s.DEPTH_COMPONENT24:T===sa?et=s.DEPTH_COMPONENT32F:T===Io&&(et=s.DEPTH_COMPONENT16),et}function H(L,T){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==xi&&L.minFilter!==Ci?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function z(L){const T=L.target;T.removeEventListener("dispose",z),W(T),T.isVideoTexture&&g.delete(T)}function B(L){const T=L.target;T.removeEventListener("dispose",B),w(T)}function W(L){const T=r.get(L);if(T.__webglInit===void 0)return;const et=L.source,ut=v.get(et);if(ut){const dt=ut[T.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&D(L),Object.keys(ut).length===0&&v.delete(et)}r.remove(L)}function D(L){const T=r.get(L);s.deleteTexture(T.__webglTexture);const et=L.source,ut=v.get(et);delete ut[T.__cacheKey],h.memory.textures--}function w(L){const T=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(T.__webglFramebuffer[ut]))for(let dt=0;dt<T.__webglFramebuffer[ut].length;dt++)s.deleteFramebuffer(T.__webglFramebuffer[ut][dt]);else s.deleteFramebuffer(T.__webglFramebuffer[ut]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[ut])}else{if(Array.isArray(T.__webglFramebuffer))for(let ut=0;ut<T.__webglFramebuffer.length;ut++)s.deleteFramebuffer(T.__webglFramebuffer[ut]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ut=0;ut<T.__webglColorRenderbuffer.length;ut++)T.__webglColorRenderbuffer[ut]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[ut]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const et=L.textures;for(let ut=0,dt=et.length;ut<dt;ut++){const ot=r.get(et[ut]);ot.__webglTexture&&(s.deleteTexture(ot.__webglTexture),h.memory.textures--),r.remove(et[ut])}r.remove(L)}let V=0;function lt(){V=0}function st(){const L=V;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),V+=1,L}function _t(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function ht(L,T){const et=r.get(L);if(L.isVideoTexture&&jt(L),L.isRenderTargetTexture===!1&&L.version>0&&et.__version!==L.version){const ut=L.image;if(ut===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{yt(et,L,T);return}}i.bindTexture(s.TEXTURE_2D,et.__webglTexture,s.TEXTURE0+T)}function I(L,T){const et=r.get(L);if(L.version>0&&et.__version!==L.version){yt(et,L,T);return}i.bindTexture(s.TEXTURE_2D_ARRAY,et.__webglTexture,s.TEXTURE0+T)}function Z(L,T){const et=r.get(L);if(L.version>0&&et.__version!==L.version){yt(et,L,T);return}i.bindTexture(s.TEXTURE_3D,et.__webglTexture,s.TEXTURE0+T)}function Y(L,T){const et=r.get(L);if(L.version>0&&et.__version!==L.version){At(et,L,T);return}i.bindTexture(s.TEXTURE_CUBE_MAP,et.__webglTexture,s.TEXTURE0+T)}const Mt={[zc]:s.REPEAT,[yr]:s.CLAMP_TO_EDGE,[td]:s.MIRRORED_REPEAT},U={[xi]:s.NEAREST,[Ey]:s.NEAREST_MIPMAP_NEAREST,[ic]:s.NEAREST_MIPMAP_LINEAR,[Ci]:s.LINEAR,[rh]:s.LINEAR_MIPMAP_NEAREST,[Mr]:s.LINEAR_MIPMAP_LINEAR},$={[Ry]:s.NEVER,[Ny]:s.ALWAYS,[wy]:s.LESS,[e0]:s.LEQUAL,[Cy]:s.EQUAL,[Ly]:s.GEQUAL,[Dy]:s.GREATER,[Uy]:s.NOTEQUAL};function vt(L,T){if(T.type===sa&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Ci||T.magFilter===rh||T.magFilter===ic||T.magFilter===Mr||T.minFilter===Ci||T.minFilter===rh||T.minFilter===ic||T.minFilter===Mr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,Mt[T.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,Mt[T.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,Mt[T.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,U[T.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,U[T.minFilter]),T.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,$[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===xi||T.minFilter!==ic&&T.minFilter!==Mr||T.type===sa&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");s.texParameterf(L,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function St(L,T){let et=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",z));const ut=T.source;let dt=v.get(ut);dt===void 0&&(dt={},v.set(ut,dt));const ot=_t(T);if(ot!==L.__cacheKey){dt[ot]===void 0&&(dt[ot]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,et=!0),dt[ot].usedTimes++;const Ot=dt[L.__cacheKey];Ot!==void 0&&(dt[L.__cacheKey].usedTimes--,Ot.usedTimes===0&&D(T)),L.__cacheKey=ot,L.__webglTexture=dt[ot].texture}return et}function Q(L,T,et){return Math.floor(Math.floor(L/et)/T)}function pt(L,T,et,ut){const ot=L.updateRanges;if(ot.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,et,ut,T.data);else{ot.sort((xt,Pt)=>xt.start-Pt.start);let Ot=0;for(let xt=1;xt<ot.length;xt++){const Pt=ot[Ot],qt=ot[xt],Yt=Pt.start+Pt.count,Rt=Q(qt.start,T.width,4),ie=Q(Pt.start,T.width,4);qt.start<=Yt+1&&Rt===ie&&Q(qt.start+qt.count-1,T.width,4)===Rt?Pt.count=Math.max(Pt.count,qt.start+qt.count-Pt.start):(++Ot,ot[Ot]=qt)}ot.length=Ot+1;const Dt=s.getParameter(s.UNPACK_ROW_LENGTH),Gt=s.getParameter(s.UNPACK_SKIP_PIXELS),kt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let xt=0,Pt=ot.length;xt<Pt;xt++){const qt=ot[xt],Yt=Math.floor(qt.start/4),Rt=Math.ceil(qt.count/4),ie=Yt%T.width,k=Math.floor(Yt/T.width),Ut=Rt,Et=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ie),s.pixelStorei(s.UNPACK_SKIP_ROWS,k),i.texSubImage2D(s.TEXTURE_2D,0,ie,k,Ut,Et,et,ut,T.data)}L.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Dt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Gt),s.pixelStorei(s.UNPACK_SKIP_ROWS,kt)}}function yt(L,T,et){let ut=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ut=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ut=s.TEXTURE_3D);const dt=St(L,T),ot=T.source;i.bindTexture(ut,L.__webglTexture,s.TEXTURE0+et);const Ot=r.get(ot);if(ot.version!==Ot.__version||dt===!0){i.activeTexture(s.TEXTURE0+et);const Dt=Se.getPrimaries(Se.workingColorSpace),Gt=T.colorSpace===Va?null:Se.getPrimaries(T.colorSpace),kt=T.colorSpace===Va||Dt===Gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let xt=A(T.image,!1,l.maxTextureSize);xt=ae(T,xt);const Pt=c.convert(T.format,T.colorSpace),qt=c.convert(T.type);let Yt=N(T.internalFormat,Pt,qt,T.colorSpace,T.isVideoTexture);vt(ut,T);let Rt;const ie=T.mipmaps,k=T.isVideoTexture!==!0,Ut=Ot.__version===void 0||dt===!0,Et=ot.dataReady,It=H(T,xt);if(T.isDepthTexture)Yt=C(T.format===Fo,T.type),Ut&&(k?i.texStorage2D(s.TEXTURE_2D,1,Yt,xt.width,xt.height):i.texImage2D(s.TEXTURE_2D,0,Yt,xt.width,xt.height,0,Pt,qt,null));else if(T.isDataTexture)if(ie.length>0){k&&Ut&&i.texStorage2D(s.TEXTURE_2D,It,Yt,ie[0].width,ie[0].height);for(let bt=0,gt=ie.length;bt<gt;bt++)Rt=ie[bt],k?Et&&i.texSubImage2D(s.TEXTURE_2D,bt,0,0,Rt.width,Rt.height,Pt,qt,Rt.data):i.texImage2D(s.TEXTURE_2D,bt,Yt,Rt.width,Rt.height,0,Pt,qt,Rt.data);T.generateMipmaps=!1}else k?(Ut&&i.texStorage2D(s.TEXTURE_2D,It,Yt,xt.width,xt.height),Et&&pt(T,xt,Pt,qt)):i.texImage2D(s.TEXTURE_2D,0,Yt,xt.width,xt.height,0,Pt,qt,xt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){k&&Ut&&i.texStorage3D(s.TEXTURE_2D_ARRAY,It,Yt,ie[0].width,ie[0].height,xt.depth);for(let bt=0,gt=ie.length;bt<gt;bt++)if(Rt=ie[bt],T.format!==_i)if(Pt!==null)if(k){if(Et)if(T.layerUpdates.size>0){const Ft=cv(Rt.width,Rt.height,T.format,T.type);for(const ne of T.layerUpdates){const De=Rt.data.subarray(ne*Ft/Rt.data.BYTES_PER_ELEMENT,(ne+1)*Ft/Rt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,bt,0,0,ne,Rt.width,Rt.height,1,Pt,De)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,bt,0,0,0,Rt.width,Rt.height,xt.depth,Pt,Rt.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,bt,Yt,Rt.width,Rt.height,xt.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Et&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,bt,0,0,0,Rt.width,Rt.height,xt.depth,Pt,qt,Rt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,bt,Yt,Rt.width,Rt.height,xt.depth,0,Pt,qt,Rt.data)}else{k&&Ut&&i.texStorage2D(s.TEXTURE_2D,It,Yt,ie[0].width,ie[0].height);for(let bt=0,gt=ie.length;bt<gt;bt++)Rt=ie[bt],T.format!==_i?Pt!==null?k?Et&&i.compressedTexSubImage2D(s.TEXTURE_2D,bt,0,0,Rt.width,Rt.height,Pt,Rt.data):i.compressedTexImage2D(s.TEXTURE_2D,bt,Yt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Et&&i.texSubImage2D(s.TEXTURE_2D,bt,0,0,Rt.width,Rt.height,Pt,qt,Rt.data):i.texImage2D(s.TEXTURE_2D,bt,Yt,Rt.width,Rt.height,0,Pt,qt,Rt.data)}else if(T.isDataArrayTexture)if(k){if(Ut&&i.texStorage3D(s.TEXTURE_2D_ARRAY,It,Yt,xt.width,xt.height,xt.depth),Et)if(T.layerUpdates.size>0){const bt=cv(xt.width,xt.height,T.format,T.type);for(const gt of T.layerUpdates){const Ft=xt.data.subarray(gt*bt/xt.data.BYTES_PER_ELEMENT,(gt+1)*bt/xt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,gt,xt.width,xt.height,1,Pt,qt,Ft)}T.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,Pt,qt,xt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Yt,xt.width,xt.height,xt.depth,0,Pt,qt,xt.data);else if(T.isData3DTexture)k?(Ut&&i.texStorage3D(s.TEXTURE_3D,It,Yt,xt.width,xt.height,xt.depth),Et&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,Pt,qt,xt.data)):i.texImage3D(s.TEXTURE_3D,0,Yt,xt.width,xt.height,xt.depth,0,Pt,qt,xt.data);else if(T.isFramebufferTexture){if(Ut)if(k)i.texStorage2D(s.TEXTURE_2D,It,Yt,xt.width,xt.height);else{let bt=xt.width,gt=xt.height;for(let Ft=0;Ft<It;Ft++)i.texImage2D(s.TEXTURE_2D,Ft,Yt,bt,gt,0,Pt,qt,null),bt>>=1,gt>>=1}}else if(ie.length>0){if(k&&Ut){const bt=Qe(ie[0]);i.texStorage2D(s.TEXTURE_2D,It,Yt,bt.width,bt.height)}for(let bt=0,gt=ie.length;bt<gt;bt++)Rt=ie[bt],k?Et&&i.texSubImage2D(s.TEXTURE_2D,bt,0,0,Pt,qt,Rt):i.texImage2D(s.TEXTURE_2D,bt,Yt,Pt,qt,Rt);T.generateMipmaps=!1}else if(k){if(Ut){const bt=Qe(xt);i.texStorage2D(s.TEXTURE_2D,It,Yt,bt.width,bt.height)}Et&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Pt,qt,xt)}else i.texImage2D(s.TEXTURE_2D,0,Yt,Pt,qt,xt);M(T)&&x(ut),Ot.__version=ot.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function At(L,T,et){if(T.image.length!==6)return;const ut=St(L,T),dt=T.source;i.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+et);const ot=r.get(dt);if(dt.version!==ot.__version||ut===!0){i.activeTexture(s.TEXTURE0+et);const Ot=Se.getPrimaries(Se.workingColorSpace),Dt=T.colorSpace===Va?null:Se.getPrimaries(T.colorSpace),Gt=T.colorSpace===Va||Ot===Dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);const kt=T.isCompressedTexture||T.image[0].isCompressedTexture,xt=T.image[0]&&T.image[0].isDataTexture,Pt=[];for(let gt=0;gt<6;gt++)!kt&&!xt?Pt[gt]=A(T.image[gt],!0,l.maxCubemapSize):Pt[gt]=xt?T.image[gt].image:T.image[gt],Pt[gt]=ae(T,Pt[gt]);const qt=Pt[0],Yt=c.convert(T.format,T.colorSpace),Rt=c.convert(T.type),ie=N(T.internalFormat,Yt,Rt,T.colorSpace),k=T.isVideoTexture!==!0,Ut=ot.__version===void 0||ut===!0,Et=dt.dataReady;let It=H(T,qt);vt(s.TEXTURE_CUBE_MAP,T);let bt;if(kt){k&&Ut&&i.texStorage2D(s.TEXTURE_CUBE_MAP,It,ie,qt.width,qt.height);for(let gt=0;gt<6;gt++){bt=Pt[gt].mipmaps;for(let Ft=0;Ft<bt.length;Ft++){const ne=bt[Ft];T.format!==_i?Yt!==null?k?Et&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft,0,0,ne.width,ne.height,Yt,ne.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft,ie,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Et&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft,0,0,ne.width,ne.height,Yt,Rt,ne.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft,ie,ne.width,ne.height,0,Yt,Rt,ne.data)}}}else{if(bt=T.mipmaps,k&&Ut){bt.length>0&&It++;const gt=Qe(Pt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,It,ie,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(xt){k?Et&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Pt[gt].width,Pt[gt].height,Yt,Rt,Pt[gt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ie,Pt[gt].width,Pt[gt].height,0,Yt,Rt,Pt[gt].data);for(let Ft=0;Ft<bt.length;Ft++){const De=bt[Ft].image[gt].image;k?Et&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft+1,0,0,De.width,De.height,Yt,Rt,De.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft+1,ie,De.width,De.height,0,Yt,Rt,De.data)}}else{k?Et&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Yt,Rt,Pt[gt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ie,Yt,Rt,Pt[gt]);for(let Ft=0;Ft<bt.length;Ft++){const ne=bt[Ft];k?Et&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft+1,0,0,Yt,Rt,ne.image[gt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ft+1,ie,Yt,Rt,ne.image[gt])}}}M(T)&&x(s.TEXTURE_CUBE_MAP),ot.__version=dt.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function wt(L,T,et,ut,dt,ot){const Ot=c.convert(et.format,et.colorSpace),Dt=c.convert(et.type),Gt=N(et.internalFormat,Ot,Dt,et.colorSpace),kt=r.get(T),xt=r.get(et);if(xt.__renderTarget=T,!kt.__hasExternalTextures){const Pt=Math.max(1,T.width>>ot),qt=Math.max(1,T.height>>ot);dt===s.TEXTURE_3D||dt===s.TEXTURE_2D_ARRAY?i.texImage3D(dt,ot,Gt,Pt,qt,T.depth,0,Ot,Dt,null):i.texImage2D(dt,ot,Gt,Pt,qt,0,Ot,Dt,null)}i.bindFramebuffer(s.FRAMEBUFFER,L),ve(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ut,dt,xt.__webglTexture,0,Vt(T)):(dt===s.TEXTURE_2D||dt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ut,dt,xt.__webglTexture,ot),i.bindFramebuffer(s.FRAMEBUFFER,null)}function oe(L,T,et){if(s.bindRenderbuffer(s.RENDERBUFFER,L),T.depthBuffer){const ut=T.depthTexture,dt=ut&&ut.isDepthTexture?ut.type:null,ot=C(T.stencilBuffer,dt),Ot=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Dt=Vt(T);ve(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Dt,ot,T.width,T.height):et?s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt,ot,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ot,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ot,s.RENDERBUFFER,L)}else{const ut=T.textures;for(let dt=0;dt<ut.length;dt++){const ot=ut[dt],Ot=c.convert(ot.format,ot.colorSpace),Dt=c.convert(ot.type),Gt=N(ot.internalFormat,Ot,Dt,ot.colorSpace),kt=Vt(T);et&&ve(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,kt,Gt,T.width,T.height):ve(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,kt,Gt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Gt,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Qt(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ut=r.get(T.depthTexture);ut.__renderTarget=T,(!ut.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ht(T.depthTexture,0);const dt=ut.__webglTexture,ot=Vt(T);if(T.depthTexture.format===Bo)ve(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,dt,0,ot):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,dt,0);else if(T.depthTexture.format===Fo)ve(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,dt,0,ot):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function Ne(L){const T=r.get(L),et=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const ut=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ut){const dt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ut.removeEventListener("dispose",dt)};ut.addEventListener("dispose",dt),T.__depthDisposeCallback=dt}T.__boundDepthTexture=ut}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const ut=L.texture.mipmaps;ut&&ut.length>0?Qt(T.__webglFramebuffer[0],L):Qt(T.__webglFramebuffer,L)}else if(et){T.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[ut]),T.__webglDepthbuffer[ut]===void 0)T.__webglDepthbuffer[ut]=s.createRenderbuffer(),oe(T.__webglDepthbuffer[ut],L,!1);else{const dt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=T.__webglDepthbuffer[ut];s.bindRenderbuffer(s.RENDERBUFFER,ot),s.framebufferRenderbuffer(s.FRAMEBUFFER,dt,s.RENDERBUFFER,ot)}}else{const ut=L.texture.mipmaps;if(ut&&ut.length>0?i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),oe(T.__webglDepthbuffer,L,!1);else{const dt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ot),s.framebufferRenderbuffer(s.FRAMEBUFFER,dt,s.RENDERBUFFER,ot)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Fe(L,T,et){const ut=r.get(L);T!==void 0&&wt(ut.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),et!==void 0&&Ne(L)}function _e(L){const T=L.texture,et=r.get(L),ut=r.get(T);L.addEventListener("dispose",B);const dt=L.textures,ot=L.isWebGLCubeRenderTarget===!0,Ot=dt.length>1;if(Ot||(ut.__webglTexture===void 0&&(ut.__webglTexture=s.createTexture()),ut.__version=T.version,h.memory.textures++),ot){et.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer[Dt]=[];for(let Gt=0;Gt<T.mipmaps.length;Gt++)et.__webglFramebuffer[Dt][Gt]=s.createFramebuffer()}else et.__webglFramebuffer[Dt]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer=[];for(let Dt=0;Dt<T.mipmaps.length;Dt++)et.__webglFramebuffer[Dt]=s.createFramebuffer()}else et.__webglFramebuffer=s.createFramebuffer();if(Ot)for(let Dt=0,Gt=dt.length;Dt<Gt;Dt++){const kt=r.get(dt[Dt]);kt.__webglTexture===void 0&&(kt.__webglTexture=s.createTexture(),h.memory.textures++)}if(L.samples>0&&ve(L)===!1){et.__webglMultisampledFramebuffer=s.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Dt=0;Dt<dt.length;Dt++){const Gt=dt[Dt];et.__webglColorRenderbuffer[Dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,et.__webglColorRenderbuffer[Dt]);const kt=c.convert(Gt.format,Gt.colorSpace),xt=c.convert(Gt.type),Pt=N(Gt.internalFormat,kt,xt,Gt.colorSpace,L.isXRRenderTarget===!0),qt=Vt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,qt,Pt,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Dt,s.RENDERBUFFER,et.__webglColorRenderbuffer[Dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(et.__webglDepthRenderbuffer=s.createRenderbuffer(),oe(et.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ot){i.bindTexture(s.TEXTURE_CUBE_MAP,ut.__webglTexture),vt(s.TEXTURE_CUBE_MAP,T);for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Gt=0;Gt<T.mipmaps.length;Gt++)wt(et.__webglFramebuffer[Dt][Gt],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Gt);else wt(et.__webglFramebuffer[Dt],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);M(T)&&x(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ot){for(let Dt=0,Gt=dt.length;Dt<Gt;Dt++){const kt=dt[Dt],xt=r.get(kt);i.bindTexture(s.TEXTURE_2D,xt.__webglTexture),vt(s.TEXTURE_2D,kt),wt(et.__webglFramebuffer,L,kt,s.COLOR_ATTACHMENT0+Dt,s.TEXTURE_2D,0),M(kt)&&x(s.TEXTURE_2D)}i.unbindTexture()}else{let Dt=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Dt=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Dt,ut.__webglTexture),vt(Dt,T),T.mipmaps&&T.mipmaps.length>0)for(let Gt=0;Gt<T.mipmaps.length;Gt++)wt(et.__webglFramebuffer[Gt],L,T,s.COLOR_ATTACHMENT0,Dt,Gt);else wt(et.__webglFramebuffer,L,T,s.COLOR_ATTACHMENT0,Dt,0);M(T)&&x(Dt),i.unbindTexture()}L.depthBuffer&&Ne(L)}function F(L){const T=L.textures;for(let et=0,ut=T.length;et<ut;et++){const dt=T[et];if(M(dt)){const ot=P(L),Ot=r.get(dt).__webglTexture;i.bindTexture(ot,Ot),x(ot),i.unbindTexture()}}}const Sn=[],Te=[];function pe(L){if(L.samples>0){if(ve(L)===!1){const T=L.textures,et=L.width,ut=L.height;let dt=s.COLOR_BUFFER_BIT;const ot=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ot=r.get(L),Dt=T.length>1;if(Dt)for(let kt=0;kt<T.length;kt++)i.bindFramebuffer(s.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+kt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Ot.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+kt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer);const Gt=L.texture.mipmaps;Gt&&Gt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let kt=0;kt<T.length;kt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(dt|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(dt|=s.STENCIL_BUFFER_BIT)),Dt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ot.__webglColorRenderbuffer[kt]);const xt=r.get(T[kt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,xt,0)}s.blitFramebuffer(0,0,et,ut,0,0,et,ut,dt,s.NEAREST),m===!0&&(Sn.length=0,Te.length=0,Sn.push(s.COLOR_ATTACHMENT0+kt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Sn.push(ot),Te.push(ot),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Te)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Sn))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Dt)for(let kt=0;kt<T.length;kt++){i.bindFramebuffer(s.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+kt,s.RENDERBUFFER,Ot.__webglColorRenderbuffer[kt]);const xt=r.get(T[kt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Ot.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+kt,s.TEXTURE_2D,xt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const T=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Vt(L){return Math.min(l.maxSamples,L.samples)}function ve(L){const T=r.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function jt(L){const T=h.render.frame;g.get(L)!==T&&(g.set(L,T),L.update())}function ae(L,T){const et=L.colorSpace,ut=L.format,dt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||et!==As&&et!==Va&&(Se.getTransfer(et)===Be?(ut!==_i||dt!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),T}function Qe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=st,this.resetTextureUnits=lt,this.setTexture2D=ht,this.setTexture2DArray=I,this.setTexture3D=Z,this.setTextureCube=Y,this.rebindTextures=Fe,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=ve}function eA(s,t){function i(r,l=Va){let c;const h=Se.getTransfer(l);if(r===Ui)return s.UNSIGNED_BYTE;if(r===Od)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Pd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Zv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Yv)return s.BYTE;if(r===jv)return s.SHORT;if(r===Io)return s.UNSIGNED_SHORT;if(r===Nd)return s.INT;if(r===Tr)return s.UNSIGNED_INT;if(r===sa)return s.FLOAT;if(r===Go)return s.HALF_FLOAT;if(r===Kv)return s.ALPHA;if(r===Qv)return s.RGB;if(r===_i)return s.RGBA;if(r===Bo)return s.DEPTH_COMPONENT;if(r===Fo)return s.DEPTH_STENCIL;if(r===Jv)return s.RED;if(r===Id)return s.RED_INTEGER;if(r===$v)return s.RG;if(r===zd)return s.RG_INTEGER;if(r===Bd)return s.RGBA_INTEGER;if(r===Cc||r===Dc||r===Uc||r===Lc)if(h===Be)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Cc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Dc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Uc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Lc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Cc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Dc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Uc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Lc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ed||r===nd||r===id||r===ad)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===ed)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===nd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===id)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ad)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===rd||r===sd||r===od)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===rd||r===sd)return h===Be?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===od)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ld||r===cd||r===ud||r===fd||r===hd||r===dd||r===pd||r===md||r===gd||r===_d||r===vd||r===xd||r===Sd||r===yd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===ld)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===cd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ud)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===fd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===hd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===dd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===pd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===md)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===gd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===_d)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===vd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===xd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Sd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===yd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Nc||r===Md||r===Ed)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===Nc)return h===Be?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Md)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ed)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===t0||r===Td||r===bd||r===Ad)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===Nc)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Td)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===bd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ad)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===zo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const nA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iA=`
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

}`;class aA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new On,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Wa({vertexShader:nA,fragmentShader:iA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new vi(new Wc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rA extends ws{constructor(t,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,g=null,_=null,v=null,y=null,E=null;const A=new aA,M=i.getContextAttributes();let x=null,P=null;const N=[],C=[],H=new Ee;let z=null;const B=new ci;B.viewport=new Ke;const W=new ci;W.viewport=new Ke;const D=[B,W],w=new AM;let V=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let pt=N[Q];return pt===void 0&&(pt=new wh,N[Q]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(Q){let pt=N[Q];return pt===void 0&&(pt=new wh,N[Q]=pt),pt.getGripSpace()},this.getHand=function(Q){let pt=N[Q];return pt===void 0&&(pt=new wh,N[Q]=pt),pt.getHandSpace()};function st(Q){const pt=C.indexOf(Q.inputSource);if(pt===-1)return;const yt=N[pt];yt!==void 0&&(yt.update(Q.inputSource,Q.frame,p||h),yt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function _t(){l.removeEventListener("select",st),l.removeEventListener("selectstart",st),l.removeEventListener("selectend",st),l.removeEventListener("squeeze",st),l.removeEventListener("squeezestart",st),l.removeEventListener("squeezeend",st),l.removeEventListener("end",_t),l.removeEventListener("inputsourceschange",ht);for(let Q=0;Q<N.length;Q++){const pt=C[Q];pt!==null&&(C[Q]=null,N[Q].disconnect(pt))}V=null,lt=null,A.reset(),t.setRenderTarget(x),y=null,v=null,_=null,l=null,P=null,St.stop(),r.isPresenting=!1,t.setPixelRatio(z),t.setSize(H.width,H.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){c=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(x=t.getRenderTarget(),l.addEventListener("select",st),l.addEventListener("selectstart",st),l.addEventListener("selectend",st),l.addEventListener("squeeze",st),l.addEventListener("squeezestart",st),l.addEventListener("squeezeend",st),l.addEventListener("end",_t),l.addEventListener("inputsourceschange",ht),M.xrCompatible!==!0&&await i.makeXRCompatible(),z=t.getPixelRatio(),t.getSize(H),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,At=null,wt=null;M.depth&&(wt=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,yt=M.stencil?Fo:Bo,At=M.stencil?zo:Tr);const oe={colorFormat:i.RGBA8,depthFormat:wt,scaleFactor:c};_=new XRWebGLBinding(l,i),v=_.createProjectionLayer(oe),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),P=new br(v.textureWidth,v.textureHeight,{format:_i,type:Ui,depthTexture:new f0(v.textureWidth,v.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const yt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,yt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),P=new br(y.framebufferWidth,y.framebufferHeight,{format:_i,type:Ui,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),St.setContext(l),St.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function ht(Q){for(let pt=0;pt<Q.removed.length;pt++){const yt=Q.removed[pt],At=C.indexOf(yt);At>=0&&(C[At]=null,N[At].disconnect(yt))}for(let pt=0;pt<Q.added.length;pt++){const yt=Q.added[pt];let At=C.indexOf(yt);if(At===-1){for(let oe=0;oe<N.length;oe++)if(oe>=C.length){C.push(yt),At=oe;break}else if(C[oe]===null){C[oe]=yt,At=oe;break}if(At===-1)break}const wt=N[At];wt&&wt.connect(yt)}}const I=new tt,Z=new tt;function Y(Q,pt,yt){I.setFromMatrixPosition(pt.matrixWorld),Z.setFromMatrixPosition(yt.matrixWorld);const At=I.distanceTo(Z),wt=pt.projectionMatrix.elements,oe=yt.projectionMatrix.elements,Qt=wt[14]/(wt[10]-1),Ne=wt[14]/(wt[10]+1),Fe=(wt[9]+1)/wt[5],_e=(wt[9]-1)/wt[5],F=(wt[8]-1)/wt[0],Sn=(oe[8]+1)/oe[0],Te=Qt*F,pe=Qt*Sn,Vt=At/(-F+Sn),ve=Vt*-F;if(pt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ve),Q.translateZ(Vt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),wt[10]===-1)Q.projectionMatrix.copy(pt.projectionMatrix),Q.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const jt=Qt+Vt,ae=Ne+Vt,Qe=Te-ve,L=pe+(At-ve),T=Fe*Ne/ae*jt,et=_e*Ne/ae*jt;Q.projectionMatrix.makePerspective(Qe,L,T,et,jt,ae),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Mt(Q,pt){pt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(pt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let pt=Q.near,yt=Q.far;A.texture!==null&&(A.depthNear>0&&(pt=A.depthNear),A.depthFar>0&&(yt=A.depthFar)),w.near=W.near=B.near=pt,w.far=W.far=B.far=yt,(V!==w.near||lt!==w.far)&&(l.updateRenderState({depthNear:w.near,depthFar:w.far}),V=w.near,lt=w.far),B.layers.mask=Q.layers.mask|2,W.layers.mask=Q.layers.mask|4,w.layers.mask=B.layers.mask|W.layers.mask;const At=Q.parent,wt=w.cameras;Mt(w,At);for(let oe=0;oe<wt.length;oe++)Mt(wt[oe],At);wt.length===2?Y(w,B,W):w.projectionMatrix.copy(B.projectionMatrix),U(Q,w,At)};function U(Q,pt,yt){yt===null?Q.matrix.copy(pt.matrixWorld):(Q.matrix.copy(yt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(pt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(pt.projectionMatrix),Q.projectionMatrixInverse.copy(pt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Rd*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(v===null&&y===null))return m},this.setFoveation=function(Q){m=Q,v!==null&&(v.fixedFoveation=Q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Q)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(w)};let $=null;function vt(Q,pt){if(g=pt.getViewerPose(p||h),E=pt,g!==null){const yt=g.views;y!==null&&(t.setRenderTargetFramebuffer(P,y.framebuffer),t.setRenderTarget(P));let At=!1;yt.length!==w.cameras.length&&(w.cameras.length=0,At=!0);for(let Qt=0;Qt<yt.length;Qt++){const Ne=yt[Qt];let Fe=null;if(y!==null)Fe=y.getViewport(Ne);else{const F=_.getViewSubImage(v,Ne);Fe=F.viewport,Qt===0&&(t.setRenderTargetTextures(P,F.colorTexture,F.depthStencilTexture),t.setRenderTarget(P))}let _e=D[Qt];_e===void 0&&(_e=new ci,_e.layers.enable(Qt),_e.viewport=new Ke,D[Qt]=_e),_e.matrix.fromArray(Ne.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(Ne.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),Qt===0&&(w.matrix.copy(_e.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),At===!0&&w.cameras.push(_e)}const wt=l.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&_){const Qt=_.getDepthInformation(yt[0]);Qt&&Qt.isValid&&Qt.texture&&A.init(t,Qt,l.renderState)}}for(let yt=0;yt<N.length;yt++){const At=C[yt],wt=N[yt];At!==null&&wt!==void 0&&wt.update(At,pt,p||h)}$&&$(Q,pt),pt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pt}),E=null}const St=new v0;St.setAnimationLoop(vt),this.setAnimationLoop=function(Q){$=Q},this.dispose=function(){}}}const gr=new Si,sA=new qe;function oA(s,t){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function r(M,x){x.color.getRGB(M.fogColor.value,c0(s)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,P,N,C){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(M,x):x.isMeshToonMaterial?(c(M,x),_(M,x)):x.isMeshPhongMaterial?(c(M,x),g(M,x)):x.isMeshStandardMaterial?(c(M,x),v(M,x),x.isMeshPhysicalMaterial&&y(M,x,C)):x.isMeshMatcapMaterial?(c(M,x),E(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),A(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(h(M,x),x.isLineDashedMaterial&&d(M,x)):x.isPointsMaterial?m(M,x,P,N):x.isSpriteMaterial?p(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===kn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===kn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const P=t.get(x),N=P.envMap,C=P.envMapRotation;N&&(M.envMap.value=N,gr.copy(C),gr.x*=-1,gr.y*=-1,gr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),M.envMapRotation.value.setFromMatrix4(sA.makeRotationFromEuler(gr)),M.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function h(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function d(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,P,N){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*P,M.scale.value=N*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function p(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function g(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function _(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function v(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function y(M,x,P){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===kn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=P.texture,M.transmissionSamplerSize.value.set(P.width,P.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,x){x.matcap&&(M.matcap.value=x.matcap)}function A(M,x){const P=t.get(x).light;M.referencePosition.value.setFromMatrixPosition(P.matrixWorld),M.nearDistance.value=P.shadow.camera.near,M.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function lA(s,t,i,r){let l={},c={},h=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,N){const C=N.program;r.uniformBlockBinding(P,C)}function p(P,N){let C=l[P.id];C===void 0&&(E(P),C=g(P),l[P.id]=C,P.addEventListener("dispose",M));const H=N.program;r.updateUBOMapping(P,H);const z=t.render.frame;c[P.id]!==z&&(v(P),c[P.id]=z)}function g(P){const N=_();P.__bindingPointIndex=N;const C=s.createBuffer(),H=P.__size,z=P.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,H,z),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,C),C}function _(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(P){const N=l[P.id],C=P.uniforms,H=P.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let z=0,B=C.length;z<B;z++){const W=Array.isArray(C[z])?C[z]:[C[z]];for(let D=0,w=W.length;D<w;D++){const V=W[D];if(y(V,z,D,H)===!0){const lt=V.__offset,st=Array.isArray(V.value)?V.value:[V.value];let _t=0;for(let ht=0;ht<st.length;ht++){const I=st[ht],Z=A(I);typeof I=="number"||typeof I=="boolean"?(V.__data[0]=I,s.bufferSubData(s.UNIFORM_BUFFER,lt+_t,V.__data)):I.isMatrix3?(V.__data[0]=I.elements[0],V.__data[1]=I.elements[1],V.__data[2]=I.elements[2],V.__data[3]=0,V.__data[4]=I.elements[3],V.__data[5]=I.elements[4],V.__data[6]=I.elements[5],V.__data[7]=0,V.__data[8]=I.elements[6],V.__data[9]=I.elements[7],V.__data[10]=I.elements[8],V.__data[11]=0):(I.toArray(V.__data,_t),_t+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,lt,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(P,N,C,H){const z=P.value,B=N+"_"+C;if(H[B]===void 0)return typeof z=="number"||typeof z=="boolean"?H[B]=z:H[B]=z.clone(),!0;{const W=H[B];if(typeof z=="number"||typeof z=="boolean"){if(W!==z)return H[B]=z,!0}else if(W.equals(z)===!1)return W.copy(z),!0}return!1}function E(P){const N=P.uniforms;let C=0;const H=16;for(let B=0,W=N.length;B<W;B++){const D=Array.isArray(N[B])?N[B]:[N[B]];for(let w=0,V=D.length;w<V;w++){const lt=D[w],st=Array.isArray(lt.value)?lt.value:[lt.value];for(let _t=0,ht=st.length;_t<ht;_t++){const I=st[_t],Z=A(I),Y=C%H,Mt=Y%Z.boundary,U=Y+Mt;C+=Mt,U!==0&&H-U<Z.storage&&(C+=H-U),lt.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),lt.__offset=C,C+=Z.storage}}}const z=C%H;return z>0&&(C+=H-z),P.__size=C,P.__cache={},this}function A(P){const N={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(N.boundary=4,N.storage=4):P.isVector2?(N.boundary=8,N.storage=8):P.isVector3||P.isColor?(N.boundary=16,N.storage=12):P.isVector4?(N.boundary=16,N.storage=16):P.isMatrix3?(N.boundary=48,N.storage=48):P.isMatrix4?(N.boundary=64,N.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),N}function M(P){const N=P.target;N.removeEventListener("dispose",M);const C=h.indexOf(N.__bindingPointIndex);h.splice(C,1),s.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function x(){for(const P in l)s.deleteBuffer(l[P]);h=[],l={},c={}}return{bind:m,update:p,dispose:x}}class cA{constructor(t={}){const{canvas:i=Py(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=h;const E=new Uint32Array(4),A=new Int32Array(4);let M=null,x=null;const P=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let H=!1;this._outputColorSpace=vn;let z=0,B=0,W=null,D=-1,w=null;const V=new Ke,lt=new Ke;let st=null;const _t=new ue(0);let ht=0,I=i.width,Z=i.height,Y=1,Mt=null,U=null;const $=new Ke(0,0,I,Z),vt=new Ke(0,0,I,Z);let St=!1;const Q=new kd;let pt=!1,yt=!1;const At=new qe,wt=new qe,oe=new tt,Qt=new Ke,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function _e(){return W===null?Y:1}let F=r;function Sn(R,q){return i.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ud}`),i.addEventListener("webglcontextlost",It,!1),i.addEventListener("webglcontextrestored",bt,!1),i.addEventListener("webglcontextcreationerror",gt,!1),F===null){const q="webgl2";if(F=Sn(q,R),F===null)throw Sn(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Te,pe,Vt,ve,jt,ae,Qe,L,T,et,ut,dt,ot,Ot,Dt,Gt,kt,xt,Pt,qt,Yt,Rt,ie,k;function Ut(){Te=new xb(F),Te.init(),Rt=new eA(F,Te),pe=new hb(F,Te,t,Rt),Vt=new $1(F,Te),pe.reverseDepthBuffer&&v&&Vt.buffers.depth.setReversed(!0),ve=new Mb(F),jt=new H1,ae=new tA(F,Te,Vt,jt,pe,Rt,ve),Qe=new pb(C),L=new vb(C),T=new wM(F),ie=new ub(F,T),et=new Sb(F,T,ve,ie),ut=new Tb(F,et,T,ve),Pt=new Eb(F,pe,ae),Gt=new db(jt),dt=new F1(C,Qe,L,Te,pe,ie,Gt),ot=new oA(C,jt),Ot=new V1,Dt=new j1(Te),xt=new cb(C,Qe,L,Vt,ut,y,m),kt=new Q1(C,ut,pe),k=new lA(F,ve,pe,Vt),qt=new fb(F,Te,ve),Yt=new yb(F,Te,ve),ve.programs=dt.programs,C.capabilities=pe,C.extensions=Te,C.properties=jt,C.renderLists=Ot,C.shadowMap=kt,C.state=Vt,C.info=ve}Ut();const Et=new rA(C,F);this.xr=Et,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=Te.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Te.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(I,Z,!1))},this.getSize=function(R){return R.set(I,Z)},this.setSize=function(R,q,at=!0){if(Et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=R,Z=q,i.width=Math.floor(R*Y),i.height=Math.floor(q*Y),at===!0&&(i.style.width=R+"px",i.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(I*Y,Z*Y).floor()},this.setDrawingBufferSize=function(R,q,at){I=R,Z=q,Y=at,i.width=Math.floor(R*at),i.height=Math.floor(q*at),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(V)},this.getViewport=function(R){return R.copy($)},this.setViewport=function(R,q,at,rt){R.isVector4?$.set(R.x,R.y,R.z,R.w):$.set(R,q,at,rt),Vt.viewport(V.copy($).multiplyScalar(Y).round())},this.getScissor=function(R){return R.copy(vt)},this.setScissor=function(R,q,at,rt){R.isVector4?vt.set(R.x,R.y,R.z,R.w):vt.set(R,q,at,rt),Vt.scissor(lt.copy(vt).multiplyScalar(Y).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(R){Vt.setScissorTest(St=R)},this.setOpaqueSort=function(R){Mt=R},this.setTransparentSort=function(R){U=R},this.getClearColor=function(R){return R.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor(...arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,at=!0){let rt=0;if(R){let j=!1;if(W!==null){const Tt=W.texture.format;j=Tt===Bd||Tt===zd||Tt===Id}if(j){const Tt=W.texture.type,Ct=Tt===Ui||Tt===Tr||Tt===Io||Tt===zo||Tt===Od||Tt===Pd,Nt=xt.getClearColor(),zt=xt.getClearAlpha(),te=Nt.r,Kt=Nt.g,Xt=Nt.b;Ct?(E[0]=te,E[1]=Kt,E[2]=Xt,E[3]=zt,F.clearBufferuiv(F.COLOR,0,E)):(A[0]=te,A[1]=Kt,A[2]=Xt,A[3]=zt,F.clearBufferiv(F.COLOR,0,A))}else rt|=F.COLOR_BUFFER_BIT}q&&(rt|=F.DEPTH_BUFFER_BIT),at&&(rt|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",It,!1),i.removeEventListener("webglcontextrestored",bt,!1),i.removeEventListener("webglcontextcreationerror",gt,!1),xt.dispose(),Ot.dispose(),Dt.dispose(),jt.dispose(),Qe.dispose(),L.dispose(),ut.dispose(),ie.dispose(),k.dispose(),dt.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",rn),Et.removeEventListener("sessionend",yn),Pn.stop()};function It(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const R=ve.autoReset,q=kt.enabled,at=kt.autoUpdate,rt=kt.needsUpdate,j=kt.type;Ut(),ve.autoReset=R,kt.enabled=q,kt.autoUpdate=at,kt.needsUpdate=rt,kt.type=j}function gt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ft(R){const q=R.target;q.removeEventListener("dispose",Ft),ne(q)}function ne(R){De(R),jt.remove(R)}function De(R){const q=jt.get(R).programs;q!==void 0&&(q.forEach(function(at){dt.releaseProgram(at)}),R.isShaderMaterial&&dt.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,at,rt,j,Tt){q===null&&(q=Ne);const Ct=j.isMesh&&j.matrixWorld.determinant()<0,Nt=ja(R,q,at,rt,j);Vt.setMaterial(rt,Ct);let zt=at.index,te=1;if(rt.wireframe===!0){if(zt=et.getWireframeAttribute(at),zt===void 0)return;te=2}const Kt=at.drawRange,Xt=at.attributes.position;let le=Kt.start*te,we=(Kt.start+Kt.count)*te;Tt!==null&&(le=Math.max(le,Tt.start*te),we=Math.min(we,(Tt.start+Tt.count)*te)),zt!==null?(le=Math.max(le,0),we=Math.min(we,zt.count)):Xt!=null&&(le=Math.max(le,0),we=Math.min(we,Xt.count));const Xe=we-le;if(Xe<0||Xe===1/0)return;ie.setup(j,rt,Nt,at,zt);let he,Ce=qt;if(zt!==null&&(he=T.get(zt),Ce=Yt,Ce.setIndex(he)),j.isMesh)rt.wireframe===!0?(Vt.setLineWidth(rt.wireframeLinewidth*_e()),Ce.setMode(F.LINES)):Ce.setMode(F.TRIANGLES);else if(j.isLine){let Zt=rt.linewidth;Zt===void 0&&(Zt=1),Vt.setLineWidth(Zt*_e()),j.isLineSegments?Ce.setMode(F.LINES):j.isLineLoop?Ce.setMode(F.LINE_LOOP):Ce.setMode(F.LINE_STRIP)}else j.isPoints?Ce.setMode(F.POINTS):j.isSprite&&Ce.setMode(F.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)ys("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ce.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(Te.get("WEBGL_multi_draw"))Ce.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Zt=j._multiDrawStarts,Oe=j._multiDrawCounts,xe=j._multiDrawCount,hn=zt?T.get(zt).bytesPerElement:1,da=jt.get(rt).currentProgram.getUniforms();for(let Ve=0;Ve<xe;Ve++)da.setValue(F,"_gl_DrawID",Ve),Ce.render(Zt[Ve]/hn,Oe[Ve])}else if(j.isInstancedMesh)Ce.renderInstances(le,Xe,j.count);else if(at.isInstancedBufferGeometry){const Zt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Oe=Math.min(at.instanceCount,Zt);Ce.renderInstances(le,Xe,Oe)}else Ce.render(le,Xe)};function be(R,q,at){R.transparent===!0&&R.side===ra&&R.forceSinglePass===!1?(R.side=kn,R.needsUpdate=!0,fa(R,q,at),R.side=ca,R.needsUpdate=!0,fa(R,q,at),R.side=ra):fa(R,q,at)}this.compile=function(R,q,at=null){at===null&&(at=R),x=Dt.get(at),x.init(q),N.push(x),at.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(x.pushLight(j),j.castShadow&&x.pushShadow(j))}),R!==at&&R.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(x.pushLight(j),j.castShadow&&x.pushShadow(j))}),x.setupLights();const rt=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Tt=j.material;if(Tt)if(Array.isArray(Tt))for(let Ct=0;Ct<Tt.length;Ct++){const Nt=Tt[Ct];be(Nt,at,j),rt.add(Nt)}else be(Tt,at,j),rt.add(Tt)}),x=N.pop(),rt},this.compileAsync=function(R,q,at=null){const rt=this.compile(R,q,at);return new Promise(j=>{function Tt(){if(rt.forEach(function(Ct){jt.get(Ct).currentProgram.isReady()&&rt.delete(Ct)}),rt.size===0){j(R);return}setTimeout(Tt,10)}Te.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Xn=null;function fn(R){Xn&&Xn(R)}function rn(){Pn.stop()}function yn(){Pn.start()}const Pn=new v0;Pn.setAnimationLoop(fn),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(R){Xn=R,Et.setAnimationLoop(R),R===null?Pn.stop():Pn.start()},Et.addEventListener("sessionstart",rn),Et.addEventListener("sessionend",yn),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Et.enabled===!0&&Et.isPresenting===!0&&(Et.cameraAutoUpdate===!0&&Et.updateCamera(q),q=Et.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,q,W),x=Dt.get(R,N.length),x.init(q),N.push(x),wt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Q.setFromProjectionMatrix(wt),yt=this.localClippingEnabled,pt=Gt.init(this.clippingPlanes,yt),M=Ot.get(R,P.length),M.init(),P.push(M),Et.enabled===!0&&Et.isPresenting===!0){const Tt=C.xr.getDepthSensingMesh();Tt!==null&&qa(Tt,q,-1/0,C.sortObjects)}qa(R,q,0,C.sortObjects),M.finish(),C.sortObjects===!0&&M.sort(Mt,U),Fe=Et.enabled===!1||Et.isPresenting===!1||Et.hasDepthSensing()===!1,Fe&&xt.addToRenderList(M,R),this.info.render.frame++,pt===!0&&Gt.beginShadows();const at=x.state.shadowsArray;kt.render(at,R,q),pt===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=M.opaque,j=M.transmissive;if(x.setupLights(),q.isArrayCamera){const Tt=q.cameras;if(j.length>0)for(let Ct=0,Nt=Tt.length;Ct<Nt;Ct++){const zt=Tt[Ct];Yo(rt,j,R,zt)}Fe&&xt.render(R);for(let Ct=0,Nt=Tt.length;Ct<Nt;Ct++){const zt=Tt[Ct];qo(M,R,zt,zt.viewport)}}else j.length>0&&Yo(rt,j,R,q),Fe&&xt.render(R),qo(M,R,q);W!==null&&B===0&&(ae.updateMultisampleRenderTarget(W),ae.updateRenderTargetMipmap(W)),R.isScene===!0&&R.onAfterRender(C,R,q),ie.resetDefaultState(),D=-1,w=null,N.pop(),N.length>0?(x=N[N.length-1],pt===!0&&Gt.setGlobalState(C.clippingPlanes,x.state.camera)):x=null,P.pop(),P.length>0?M=P[P.length-1]:M=null};function qa(R,q,at,rt){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)at=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)x.pushLight(R),R.castShadow&&x.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Q.intersectsSprite(R)){rt&&Qt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(wt);const Ct=ut.update(R),Nt=R.material;Nt.visible&&M.push(R,Ct,Nt,at,Qt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Q.intersectsObject(R))){const Ct=ut.update(R),Nt=R.material;if(rt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Qt.copy(R.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Qt.copy(Ct.boundingSphere.center)),Qt.applyMatrix4(R.matrixWorld).applyMatrix4(wt)),Array.isArray(Nt)){const zt=Ct.groups;for(let te=0,Kt=zt.length;te<Kt;te++){const Xt=zt[te],le=Nt[Xt.materialIndex];le&&le.visible&&M.push(R,Ct,le,at,Qt.z,Xt)}}else Nt.visible&&M.push(R,Ct,Nt,at,Qt.z,null)}}const Tt=R.children;for(let Ct=0,Nt=Tt.length;Ct<Nt;Ct++)qa(Tt[Ct],q,at,rt)}function qo(R,q,at,rt){const j=R.opaque,Tt=R.transmissive,Ct=R.transparent;x.setupLightsView(at),pt===!0&&Gt.setGlobalState(C.clippingPlanes,at),rt&&Vt.viewport(V.copy(rt)),j.length>0&&Ya(j,q,at),Tt.length>0&&Ya(Tt,q,at),Ct.length>0&&Ya(Ct,q,at),Vt.buffers.depth.setTest(!0),Vt.buffers.depth.setMask(!0),Vt.buffers.color.setMask(!0),Vt.setPolygonOffset(!1)}function Yo(R,q,at,rt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[rt.id]===void 0&&(x.state.transmissionRenderTarget[rt.id]=new br(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float")?Go:Ui,minFilter:Mr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Se.workingColorSpace}));const Tt=x.state.transmissionRenderTarget[rt.id],Ct=rt.viewport||V;Tt.setSize(Ct.z*C.transmissionResolutionScale,Ct.w*C.transmissionResolutionScale);const Nt=C.getRenderTarget(),zt=C.getActiveCubeFace(),te=C.getActiveMipmapLevel();C.setRenderTarget(Tt),C.getClearColor(_t),ht=C.getClearAlpha(),ht<1&&C.setClearColor(16777215,.5),C.clear(),Fe&&xt.render(at);const Kt=C.toneMapping;C.toneMapping=Xa;const Xt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),x.setupLightsView(rt),pt===!0&&Gt.setGlobalState(C.clippingPlanes,rt),Ya(R,at,rt),ae.updateMultisampleRenderTarget(Tt),ae.updateRenderTargetMipmap(Tt),Te.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let we=0,Xe=q.length;we<Xe;we++){const he=q[we],Ce=he.object,Zt=he.geometry,Oe=he.material,xe=he.group;if(Oe.side===ra&&Ce.layers.test(rt.layers)){const hn=Oe.side;Oe.side=kn,Oe.needsUpdate=!0,ua(Ce,at,rt,Zt,Oe,xe),Oe.side=hn,Oe.needsUpdate=!0,le=!0}}le===!0&&(ae.updateMultisampleRenderTarget(Tt),ae.updateRenderTargetMipmap(Tt))}C.setRenderTarget(Nt,zt,te),C.setClearColor(_t,ht),Xt!==void 0&&(rt.viewport=Xt),C.toneMapping=Kt}function Ya(R,q,at){const rt=q.isScene===!0?q.overrideMaterial:null;for(let j=0,Tt=R.length;j<Tt;j++){const Ct=R[j],Nt=Ct.object,zt=Ct.geometry,te=Ct.group;let Kt=Ct.material;Kt.allowOverride===!0&&rt!==null&&(Kt=rt),Nt.layers.test(at.layers)&&ua(Nt,q,at,zt,Kt,te)}}function ua(R,q,at,rt,j,Tt){R.onBeforeRender(C,q,at,rt,j,Tt),R.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(C,q,at,rt,R,Tt),j.transparent===!0&&j.side===ra&&j.forceSinglePass===!1?(j.side=kn,j.needsUpdate=!0,C.renderBufferDirect(at,q,rt,j,R,Tt),j.side=ca,j.needsUpdate=!0,C.renderBufferDirect(at,q,rt,j,R,Tt),j.side=ra):C.renderBufferDirect(at,q,rt,j,R,Tt),R.onAfterRender(C,q,at,rt,j,Tt)}function fa(R,q,at){q.isScene!==!0&&(q=Ne);const rt=jt.get(R),j=x.state.lights,Tt=x.state.shadowsArray,Ct=j.state.version,Nt=dt.getParameters(R,j.state,Tt,q,at),zt=dt.getProgramCacheKey(Nt);let te=rt.programs;rt.environment=R.isMeshStandardMaterial?q.environment:null,rt.fog=q.fog,rt.envMap=(R.isMeshStandardMaterial?L:Qe).get(R.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,te===void 0&&(R.addEventListener("dispose",Ft),te=new Map,rt.programs=te);let Kt=te.get(zt);if(Kt!==void 0){if(rt.currentProgram===Kt&&rt.lightsStateVersion===Ct)return Oi(R,Nt),Kt}else Nt.uniforms=dt.getUniforms(R),R.onBeforeCompile(Nt,C),Kt=dt.acquireProgram(Nt,zt),te.set(zt,Kt),rt.uniforms=Nt.uniforms;const Xt=rt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Xt.clippingPlanes=Gt.uniform),Oi(R,Nt),rt.needsLights=tn(R),rt.lightsStateVersion=Ct,rt.needsLights&&(Xt.ambientLightColor.value=j.state.ambient,Xt.lightProbe.value=j.state.probe,Xt.directionalLights.value=j.state.directional,Xt.directionalLightShadows.value=j.state.directionalShadow,Xt.spotLights.value=j.state.spot,Xt.spotLightShadows.value=j.state.spotShadow,Xt.rectAreaLights.value=j.state.rectArea,Xt.ltc_1.value=j.state.rectAreaLTC1,Xt.ltc_2.value=j.state.rectAreaLTC2,Xt.pointLights.value=j.state.point,Xt.pointLightShadows.value=j.state.pointShadow,Xt.hemisphereLights.value=j.state.hemi,Xt.directionalShadowMap.value=j.state.directionalShadowMap,Xt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Xt.spotShadowMap.value=j.state.spotShadowMap,Xt.spotLightMatrix.value=j.state.spotLightMatrix,Xt.spotLightMap.value=j.state.spotLightMap,Xt.pointShadowMap.value=j.state.pointShadowMap,Xt.pointShadowMatrix.value=j.state.pointShadowMatrix),rt.currentProgram=Kt,rt.uniformsList=null,Kt}function Ni(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=Pc.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function Oi(R,q){const at=jt.get(R);at.outputColorSpace=q.outputColorSpace,at.batching=q.batching,at.batchingColor=q.batchingColor,at.instancing=q.instancing,at.instancingColor=q.instancingColor,at.instancingMorph=q.instancingMorph,at.skinning=q.skinning,at.morphTargets=q.morphTargets,at.morphNormals=q.morphNormals,at.morphColors=q.morphColors,at.morphTargetsCount=q.morphTargetsCount,at.numClippingPlanes=q.numClippingPlanes,at.numIntersection=q.numClipIntersection,at.vertexAlphas=q.vertexAlphas,at.vertexTangents=q.vertexTangents,at.toneMapping=q.toneMapping}function ja(R,q,at,rt,j){q.isScene!==!0&&(q=Ne),ae.resetTextureUnits();const Tt=q.fog,Ct=rt.isMeshStandardMaterial?q.environment:null,Nt=W===null?C.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:As,zt=(rt.isMeshStandardMaterial?L:Qe).get(rt.envMap||Ct),te=rt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,Kt=!!at.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Xt=!!at.morphAttributes.position,le=!!at.morphAttributes.normal,we=!!at.morphAttributes.color;let Xe=Xa;rt.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Xe=C.toneMapping);const he=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,Ce=he!==void 0?he.length:0,Zt=jt.get(rt),Oe=x.state.lights;if(pt===!0&&(yt===!0||R!==w)){const dn=R===w&&rt.id===D;Gt.setState(rt,R,dn)}let xe=!1;rt.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==Oe.state.version||Zt.outputColorSpace!==Nt||j.isBatchedMesh&&Zt.batching===!1||!j.isBatchedMesh&&Zt.batching===!0||j.isBatchedMesh&&Zt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Zt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Zt.instancing===!1||!j.isInstancedMesh&&Zt.instancing===!0||j.isSkinnedMesh&&Zt.skinning===!1||!j.isSkinnedMesh&&Zt.skinning===!0||j.isInstancedMesh&&Zt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Zt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Zt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Zt.instancingMorph===!1&&j.morphTexture!==null||Zt.envMap!==zt||rt.fog===!0&&Zt.fog!==Tt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==Gt.numPlanes||Zt.numIntersection!==Gt.numIntersection)||Zt.vertexAlphas!==te||Zt.vertexTangents!==Kt||Zt.morphTargets!==Xt||Zt.morphNormals!==le||Zt.morphColors!==we||Zt.toneMapping!==Xe||Zt.morphTargetsCount!==Ce)&&(xe=!0):(xe=!0,Zt.__version=rt.version);let hn=Zt.currentProgram;xe===!0&&(hn=fa(rt,q,j));let da=!1,Ve=!1,Ii=!1;const He=hn.getUniforms(),An=Zt.uniforms;if(Vt.useProgram(hn.program)&&(da=!0,Ve=!0,Ii=!0),rt.id!==D&&(D=rt.id,Ve=!0),da||w!==R){Vt.buffers.depth.getReversed()?(At.copy(R.projectionMatrix),zy(At),By(At),He.setValue(F,"projectionMatrix",At)):He.setValue(F,"projectionMatrix",R.projectionMatrix),He.setValue(F,"viewMatrix",R.matrixWorldInverse);const Mn=He.map.cameraPosition;Mn!==void 0&&Mn.setValue(F,oe.setFromMatrixPosition(R.matrixWorld)),pe.logarithmicDepthBuffer&&He.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&He.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,Ve=!0,Ii=!0)}if(j.isSkinnedMesh){He.setOptional(F,j,"bindMatrix"),He.setOptional(F,j,"bindMatrixInverse");const dn=j.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),He.setValue(F,"boneTexture",dn.boneTexture,ae))}j.isBatchedMesh&&(He.setOptional(F,j,"batchingTexture"),He.setValue(F,"batchingTexture",j._matricesTexture,ae),He.setOptional(F,j,"batchingIdTexture"),He.setValue(F,"batchingIdTexture",j._indirectTexture,ae),He.setOptional(F,j,"batchingColorTexture"),j._colorsTexture!==null&&He.setValue(F,"batchingColorTexture",j._colorsTexture,ae));const sn=at.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&Pt.update(j,at,hn),(Ve||Zt.receiveShadow!==j.receiveShadow)&&(Zt.receiveShadow=j.receiveShadow,He.setValue(F,"receiveShadow",j.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(An.envMap.value=zt,An.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&q.environment!==null&&(An.envMapIntensity.value=q.environmentIntensity),Ve&&(He.setValue(F,"toneMappingExposure",C.toneMappingExposure),Zt.needsLights&&ha(An,Ii),Tt&&rt.fog===!0&&ot.refreshFogUniforms(An,Tt),ot.refreshMaterialUniforms(An,rt,Y,Z,x.state.transmissionRenderTarget[R.id]),Pc.upload(F,Ni(Zt),An,ae)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Pc.upload(F,Ni(Zt),An,ae),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&He.setValue(F,"center",j.center),He.setValue(F,"modelViewMatrix",j.modelViewMatrix),He.setValue(F,"normalMatrix",j.normalMatrix),He.setValue(F,"modelMatrix",j.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const dn=rt.uniformsGroups;for(let Mn=0,Mi=dn.length;Mn<Mi;Mn++){const zi=dn[Mn];k.update(zi,hn),k.bind(zi,hn)}}return hn}function ha(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function tn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(R,q,at){const rt=jt.get(R);rt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),jt.get(R.texture).__webglTexture=q,jt.get(R.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:at,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const at=jt.get(R);at.__webglFramebuffer=q,at.__useDefaultFramebuffer=q===void 0};const jo=F.createFramebuffer();this.setRenderTarget=function(R,q=0,at=0){W=R,z=q,B=at;let rt=!0,j=null,Tt=!1,Ct=!1;if(R){const zt=jt.get(R);if(zt.__useDefaultFramebuffer!==void 0)Vt.bindFramebuffer(F.FRAMEBUFFER,null),rt=!1;else if(zt.__webglFramebuffer===void 0)ae.setupRenderTarget(R);else if(zt.__hasExternalTextures)ae.rebindTextures(R,jt.get(R.texture).__webglTexture,jt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Xt=R.depthTexture;if(zt.__boundDepthTexture!==Xt){if(Xt!==null&&jt.has(Xt)&&(R.width!==Xt.image.width||R.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(R)}}const te=R.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Ct=!0);const Kt=jt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Kt[q])?j=Kt[q][at]:j=Kt[q],Tt=!0):R.samples>0&&ae.useMultisampledRTT(R)===!1?j=jt.get(R).__webglMultisampledFramebuffer:Array.isArray(Kt)?j=Kt[at]:j=Kt,V.copy(R.viewport),lt.copy(R.scissor),st=R.scissorTest}else V.copy($).multiplyScalar(Y).floor(),lt.copy(vt).multiplyScalar(Y).floor(),st=St;if(at!==0&&(j=jo),Vt.bindFramebuffer(F.FRAMEBUFFER,j)&&rt&&Vt.drawBuffers(R,j),Vt.viewport(V),Vt.scissor(lt),Vt.setScissorTest(st),Tt){const zt=jt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+q,zt.__webglTexture,at)}else if(Ct){const zt=jt.get(R.texture),te=q;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,zt.__webglTexture,at,te)}else if(R!==null&&at!==0){const zt=jt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,zt.__webglTexture,at)}D=-1},this.readRenderTargetPixels=function(R,q,at,rt,j,Tt,Ct,Nt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=jt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ct!==void 0&&(zt=zt[Ct]),zt){Vt.bindFramebuffer(F.FRAMEBUFFER,zt);try{const te=R.textures[Nt],Kt=te.format,Xt=te.type;if(!pe.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pe.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-rt&&at>=0&&at<=R.height-j&&(R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Nt),F.readPixels(q,at,rt,j,Rt.convert(Kt),Rt.convert(Xt),Tt))}finally{const te=W!==null?jt.get(W).__webglFramebuffer:null;Vt.bindFramebuffer(F.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(R,q,at,rt,j,Tt,Ct,Nt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=jt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ct!==void 0&&(zt=zt[Ct]),zt)if(q>=0&&q<=R.width-rt&&at>=0&&at<=R.height-j){Vt.bindFramebuffer(F.FRAMEBUFFER,zt);const te=R.textures[Nt],Kt=te.format,Xt=te.type;if(!pe.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const le=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,le),F.bufferData(F.PIXEL_PACK_BUFFER,Tt.byteLength,F.STREAM_READ),R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Nt),F.readPixels(q,at,rt,j,Rt.convert(Kt),Rt.convert(Xt),0);const we=W!==null?jt.get(W).__webglFramebuffer:null;Vt.bindFramebuffer(F.FRAMEBUFFER,we);const Xe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Iy(F,Xe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,le),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Tt),F.deleteBuffer(le),F.deleteSync(Xe),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,at=0){const rt=Math.pow(2,-at),j=Math.floor(R.image.width*rt),Tt=Math.floor(R.image.height*rt),Ct=q!==null?q.x:0,Nt=q!==null?q.y:0;ae.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,at,0,0,Ct,Nt,j,Tt),Vt.unbindTexture()};const Zo=F.createFramebuffer(),Pi=F.createFramebuffer();this.copyTextureToTexture=function(R,q,at=null,rt=null,j=0,Tt=null){Tt===null&&(j!==0?(ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=j,j=0):Tt=0);let Ct,Nt,zt,te,Kt,Xt,le,we,Xe;const he=R.isCompressedTexture?R.mipmaps[Tt]:R.image;if(at!==null)Ct=at.max.x-at.min.x,Nt=at.max.y-at.min.y,zt=at.isBox3?at.max.z-at.min.z:1,te=at.min.x,Kt=at.min.y,Xt=at.isBox3?at.min.z:0;else{const sn=Math.pow(2,-j);Ct=Math.floor(he.width*sn),Nt=Math.floor(he.height*sn),R.isDataArrayTexture?zt=he.depth:R.isData3DTexture?zt=Math.floor(he.depth*sn):zt=1,te=0,Kt=0,Xt=0}rt!==null?(le=rt.x,we=rt.y,Xe=rt.z):(le=0,we=0,Xe=0);const Ce=Rt.convert(q.format),Zt=Rt.convert(q.type);let Oe;q.isData3DTexture?(ae.setTexture3D(q,0),Oe=F.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ae.setTexture2DArray(q,0),Oe=F.TEXTURE_2D_ARRAY):(ae.setTexture2D(q,0),Oe=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,q.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,q.unpackAlignment);const xe=F.getParameter(F.UNPACK_ROW_LENGTH),hn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),da=F.getParameter(F.UNPACK_SKIP_PIXELS),Ve=F.getParameter(F.UNPACK_SKIP_ROWS),Ii=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,he.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,he.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,te),F.pixelStorei(F.UNPACK_SKIP_ROWS,Kt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Xt);const He=R.isDataArrayTexture||R.isData3DTexture,An=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const sn=jt.get(R),dn=jt.get(q),Mn=jt.get(sn.__renderTarget),Mi=jt.get(dn.__renderTarget);Vt.bindFramebuffer(F.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Vt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let zi=0;zi<zt;zi++)He&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,jt.get(R).__webglTexture,j,Xt+zi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,jt.get(q).__webglTexture,Tt,Xe+zi)),F.blitFramebuffer(te,Kt,Ct,Nt,le,we,Ct,Nt,F.DEPTH_BUFFER_BIT,F.NEAREST);Vt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||jt.has(R)){const sn=jt.get(R),dn=jt.get(q);Vt.bindFramebuffer(F.READ_FRAMEBUFFER,Zo),Vt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Pi);for(let Mn=0;Mn<zt;Mn++)He?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,sn.__webglTexture,j,Xt+Mn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,sn.__webglTexture,j),An?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,dn.__webglTexture,Tt,Xe+Mn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,dn.__webglTexture,Tt),j!==0?F.blitFramebuffer(te,Kt,Ct,Nt,le,we,Ct,Nt,F.COLOR_BUFFER_BIT,F.NEAREST):An?F.copyTexSubImage3D(Oe,Tt,le,we,Xe+Mn,te,Kt,Ct,Nt):F.copyTexSubImage2D(Oe,Tt,le,we,te,Kt,Ct,Nt);Vt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else An?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(Oe,Tt,le,we,Xe,Ct,Nt,zt,Ce,Zt,he.data):q.isCompressedArrayTexture?F.compressedTexSubImage3D(Oe,Tt,le,we,Xe,Ct,Nt,zt,Ce,he.data):F.texSubImage3D(Oe,Tt,le,we,Xe,Ct,Nt,zt,Ce,Zt,he):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Tt,le,we,Ct,Nt,Ce,Zt,he.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Tt,le,we,he.width,he.height,Ce,he.data):F.texSubImage2D(F.TEXTURE_2D,Tt,le,we,Ct,Nt,Ce,Zt,he);F.pixelStorei(F.UNPACK_ROW_LENGTH,xe),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,hn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,da),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ve),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ii),Tt===0&&q.generateMipmaps&&F.generateMipmap(Oe),Vt.unbindTexture()},this.copyTextureToTexture3D=function(R,q,at=null,rt=null,j=0){return ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,q,at,rt,j)},this.initRenderTarget=function(R){jt.get(R).__webglFramebuffer===void 0&&ae.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ae.setTextureCube(R,0):R.isData3DTexture?ae.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ae.setTexture2DArray(R,0):ae.setTexture2D(R,0),Vt.unbindTexture()},this.resetState=function(){z=0,B=0,W=null,Vt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Se._getDrawingBufferColorSpace(t),i.unpackColorSpace=Se._getUnpackColorSpace()}}class uA extends Ar{constructor(t){super(t)}load(t,i,r,l){const c=this,h=this.path===""?bM.extractUrlBase(t):this.path,d=new p0(this.manager);d.setPath(this.path),d.setRequestHeader(this.requestHeader),d.setWithCredentials(this.withCredentials),d.load(t,function(m){try{i(c.parse(m,h))}catch(p){l?l(p):console.error(p),c.manager.itemError(t)}},r,l)}setMaterialOptions(t){return this.materialOptions=t,this}parse(t,i){const r=t.split(`
`);let l={};const c=/\s+/,h={};for(let m=0;m<r.length;m++){let p=r[m];if(p=p.trim(),p.length===0||p.charAt(0)==="#")continue;const g=p.indexOf(" ");let _=g>=0?p.substring(0,g):p;_=_.toLowerCase();let v=g>=0?p.substring(g+1):"";if(v=v.trim(),_==="newmtl")l={name:v},h[v]=l;else if(_==="ka"||_==="kd"||_==="ks"||_==="ke"){const y=v.split(c,3);l[_]=[parseFloat(y[0]),parseFloat(y[1]),parseFloat(y[2])]}else l[_]=v}const d=new fA(this.resourcePath||i,this.materialOptions);return d.setCrossOrigin(this.crossOrigin),d.setManager(this.manager),d.setMaterials(h),d}}class fA{constructor(t="",i={}){this.baseUrl=t,this.options=i,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.crossOrigin="anonymous",this.side=this.options.side!==void 0?this.options.side:ca,this.wrap=this.options.wrap!==void 0?this.options.wrap:zc}setCrossOrigin(t){return this.crossOrigin=t,this}setManager(t){this.manager=t}setMaterials(t){this.materialsInfo=this.convert(t),this.materials={},this.materialsArray=[],this.nameLookup={}}convert(t){if(!this.options)return t;const i={};for(const r in t){const l=t[r],c={};i[r]=c;for(const h in l){let d=!0,m=l[h];const p=h.toLowerCase();switch(p){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(m=[m[0]/255,m[1]/255,m[2]/255]),this.options&&this.options.ignoreZeroRGBs&&m[0]===0&&m[1]===0&&m[2]===0&&(d=!1);break}d&&(c[p]=m)}}return i}preload(){for(const t in this.materialsInfo)this.create(t)}getIndex(t){return this.nameLookup[t]}getAsArray(){let t=0;for(const i in this.materialsInfo)this.materialsArray[t]=this.create(i),this.nameLookup[i]=t,t++;return this.materialsArray}create(t){return this.materials[t]===void 0&&this.createMaterial_(t),this.materials[t]}createMaterial_(t){const i=this,r=this.materialsInfo[t],l={name:t,side:this.side};function c(d,m){return typeof m!="string"||m===""?"":/^https?:\/\//i.test(m)?m:d+m}function h(d,m){if(l[d])return;const p=i.getTextureParams(m,l),g=i.loadTexture(c(i.baseUrl,p.url));g.repeat.copy(p.scale),g.offset.copy(p.offset),g.wrapS=i.wrap,g.wrapT=i.wrap,(d==="map"||d==="emissiveMap")&&(g.colorSpace=vn),l[d]=g}for(const d in r){const m=r[d];let p;if(m!=="")switch(d.toLowerCase()){case"kd":l.color=Se.colorSpaceToWorking(new ue().fromArray(m),vn);break;case"ks":l.specular=Se.colorSpaceToWorking(new ue().fromArray(m),vn);break;case"ke":l.emissive=Se.colorSpaceToWorking(new ue().fromArray(m),vn);break;case"map_kd":h("map",m);break;case"map_ks":h("specularMap",m);break;case"map_ke":h("emissiveMap",m);break;case"norm":h("normalMap",m);break;case"map_bump":case"bump":h("bumpMap",m);break;case"disp":h("displacementMap",m);break;case"map_d":h("alphaMap",m),l.transparent=!0;break;case"ns":l.shininess=parseFloat(m);break;case"d":p=parseFloat(m),p<1&&(l.opacity=p,l.transparent=!0);break;case"tr":p=parseFloat(m),this.options&&this.options.invertTrProperty&&(p=1-p),p>0&&(l.opacity=1-p,l.transparent=!0);break}}return this.materials[t]=new h0(l),this.materials[t]}getTextureParams(t,i){const r={scale:new Ee(1,1),offset:new Ee(0,0)},l=t.split(/\s+/);let c;return c=l.indexOf("-bm"),c>=0&&(i.bumpScale=parseFloat(l[c+1]),l.splice(c,2)),c=l.indexOf("-mm"),c>=0&&(i.displacementBias=parseFloat(l[c+1]),i.displacementScale=parseFloat(l[c+2]),l.splice(c,3)),c=l.indexOf("-s"),c>=0&&(r.scale.set(parseFloat(l[c+1]),parseFloat(l[c+2])),l.splice(c,4)),c=l.indexOf("-o"),c>=0&&(r.offset.set(parseFloat(l[c+1]),parseFloat(l[c+2])),l.splice(c,4)),r.url=l.join(" ").trim(),r}loadTexture(t,i,r,l,c){const h=this.manager!==void 0?this.manager:d0;let d=h.getHandler(t);d===null&&(d=new SM(h)),d.setCrossOrigin&&d.setCrossOrigin(this.crossOrigin);const m=d.load(t,r,l,c);return i!==void 0&&(m.mapping=i),m}}const hA=/^[og]\s*(.+)?/,dA=/^mtllib /,pA=/^usemtl /,mA=/^usemap /,Ov=/\s+/,Pv=new tt,Fh=new tt,Iv=new tt,zv=new tt,li=new tt,wc=new ue;function gA(){const s={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,i){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=i!==!1;return}const r=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:i!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(l,c){const h=this._finalize(!1);h&&(h.inherited||h.groupCount<=0)&&this.materials.splice(h.index,1);const d={index:this.materials.length,name:l||"",mtllib:Array.isArray(c)&&c.length>0?c[c.length-1]:"",smooth:h!==void 0?h.smooth:this.smooth,groupStart:h!==void 0?h.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(m){const p={index:typeof m=="number"?m:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return p.clone=this.clone.bind(p),p}};return this.materials.push(d),d},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(l){const c=this.currentMaterial();if(c&&c.groupEnd===-1&&(c.groupEnd=this.geometry.vertices.length/3,c.groupCount=c.groupEnd-c.groupStart,c.inherited=!1),l&&this.materials.length>1)for(let h=this.materials.length-1;h>=0;h--)this.materials[h].groupCount<=0&&this.materials.splice(h,1);return l&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),c}},r&&r.name&&typeof r.clone=="function"){const l=r.clone(0);l.inherited=!0,this.object.materials.push(l)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,i){const r=parseInt(t,10);return(r>=0?r-1:r+i/3)*3},parseNormalIndex:function(t,i){const r=parseInt(t,10);return(r>=0?r-1:r+i/3)*3},parseUVIndex:function(t,i){const r=parseInt(t,10);return(r>=0?r-1:r+i/2)*2},addVertex:function(t,i,r){const l=this.vertices,c=this.object.geometry.vertices;c.push(l[t+0],l[t+1],l[t+2]),c.push(l[i+0],l[i+1],l[i+2]),c.push(l[r+0],l[r+1],l[r+2])},addVertexPoint:function(t){const i=this.vertices;this.object.geometry.vertices.push(i[t+0],i[t+1],i[t+2])},addVertexLine:function(t){const i=this.vertices;this.object.geometry.vertices.push(i[t+0],i[t+1],i[t+2])},addNormal:function(t,i,r){const l=this.normals,c=this.object.geometry.normals;c.push(l[t+0],l[t+1],l[t+2]),c.push(l[i+0],l[i+1],l[i+2]),c.push(l[r+0],l[r+1],l[r+2])},addFaceNormal:function(t,i,r){const l=this.vertices,c=this.object.geometry.normals;Pv.fromArray(l,t),Fh.fromArray(l,i),Iv.fromArray(l,r),li.subVectors(Iv,Fh),zv.subVectors(Pv,Fh),li.cross(zv),li.normalize(),c.push(li.x,li.y,li.z),c.push(li.x,li.y,li.z),c.push(li.x,li.y,li.z)},addColor:function(t,i,r){const l=this.colors,c=this.object.geometry.colors;l[t]!==void 0&&c.push(l[t+0],l[t+1],l[t+2]),l[i]!==void 0&&c.push(l[i+0],l[i+1],l[i+2]),l[r]!==void 0&&c.push(l[r+0],l[r+1],l[r+2])},addUV:function(t,i,r){const l=this.uvs,c=this.object.geometry.uvs;c.push(l[t+0],l[t+1]),c.push(l[i+0],l[i+1]),c.push(l[r+0],l[r+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const i=this.uvs;this.object.geometry.uvs.push(i[t+0],i[t+1])},addFace:function(t,i,r,l,c,h,d,m,p){const g=this.vertices.length;let _=this.parseVertexIndex(t,g),v=this.parseVertexIndex(i,g),y=this.parseVertexIndex(r,g);if(this.addVertex(_,v,y),this.addColor(_,v,y),d!==void 0&&d!==""){const E=this.normals.length;_=this.parseNormalIndex(d,E),v=this.parseNormalIndex(m,E),y=this.parseNormalIndex(p,E),this.addNormal(_,v,y)}else this.addFaceNormal(_,v,y);if(l!==void 0&&l!==""){const E=this.uvs.length;_=this.parseUVIndex(l,E),v=this.parseUVIndex(c,E),y=this.parseUVIndex(h,E),this.addUV(_,v,y),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const i=this.vertices.length;for(let r=0,l=t.length;r<l;r++){const c=this.parseVertexIndex(t[r],i);this.addVertexPoint(c),this.addColor(c)}},addLineGeometry:function(t,i){this.object.geometry.type="Line";const r=this.vertices.length,l=this.uvs.length;for(let c=0,h=t.length;c<h;c++)this.addVertexLine(this.parseVertexIndex(t[c],r));for(let c=0,h=i.length;c<h;c++)this.addUVLine(this.parseUVIndex(i[c],l))}};return s.startObject("",!1),s}class _A extends Ar{constructor(t){super(t),this.materials=null}load(t,i,r,l){const c=this,h=new p0(this.manager);h.setPath(this.path),h.setRequestHeader(this.requestHeader),h.setWithCredentials(this.withCredentials),h.load(t,function(d){try{i(c.parse(d))}catch(m){l?l(m):console.error(m),c.manager.itemError(t)}},r,l)}setMaterials(t){return this.materials=t,this}parse(t){const i=new gA;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const r=t.split(`
`);let l=[];for(let d=0,m=r.length;d<m;d++){const p=r[d].trimStart();if(p.length===0)continue;const g=p.charAt(0);if(g!=="#")if(g==="v"){const _=p.split(Ov);switch(_[0]){case"v":i.vertices.push(parseFloat(_[1]),parseFloat(_[2]),parseFloat(_[3])),_.length>=7?(wc.setRGB(parseFloat(_[4]),parseFloat(_[5]),parseFloat(_[6]),vn),i.colors.push(wc.r,wc.g,wc.b)):i.colors.push(void 0,void 0,void 0);break;case"vn":i.normals.push(parseFloat(_[1]),parseFloat(_[2]),parseFloat(_[3]));break;case"vt":i.uvs.push(parseFloat(_[1]),parseFloat(_[2]));break}}else if(g==="f"){const v=p.slice(1).trim().split(Ov),y=[];for(let A=0,M=v.length;A<M;A++){const x=v[A];if(x.length>0){const P=x.split("/");y.push(P)}}const E=y[0];for(let A=1,M=y.length-1;A<M;A++){const x=y[A],P=y[A+1];i.addFace(E[0],x[0],P[0],E[1],x[1],P[1],E[2],x[2],P[2])}}else if(g==="l"){const _=p.substring(1).trim().split(" ");let v=[];const y=[];if(p.indexOf("/")===-1)v=_;else for(let E=0,A=_.length;E<A;E++){const M=_[E].split("/");M[0]!==""&&v.push(M[0]),M[1]!==""&&y.push(M[1])}i.addLineGeometry(v,y)}else if(g==="p"){const v=p.slice(1).trim().split(" ");i.addPointGeometry(v)}else if((l=hA.exec(p))!==null){const _=(" "+l[0].slice(1).trim()).slice(1);i.startObject(_)}else if(pA.test(p))i.object.startMaterial(p.substring(7).trim(),i.materialLibraries);else if(dA.test(p))i.materialLibraries.push(p.substring(7).trim());else if(mA.test(p))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(g==="s"){if(l=p.split(" "),l.length>1){const v=l[1].trim().toLowerCase();i.object.smooth=v!=="0"&&v!=="off"}else i.object.smooth=!0;const _=i.object.currentMaterial();_&&(_.smooth=i.object.smooth)}else{if(p==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+p+'"')}}i.finalize();const c=new Lo;if(c.materialLibraries=[].concat(i.materialLibraries),!(i.objects.length===1&&i.objects[0].geometry.vertices.length===0)===!0)for(let d=0,m=i.objects.length;d<m;d++){const p=i.objects[d],g=p.geometry,_=p.materials,v=g.type==="Line",y=g.type==="Points";let E=!1;if(g.vertices.length===0)continue;const A=new yi;A.setAttribute("position",new Nn(g.vertices,3)),g.normals.length>0&&A.setAttribute("normal",new Nn(g.normals,3)),g.colors.length>0&&(E=!0,A.setAttribute("color",new Nn(g.colors,3))),g.hasUVIndices===!0&&A.setAttribute("uv",new Nn(g.uvs,2));const M=[];for(let P=0,N=_.length;P<N;P++){const C=_[P],H=C.name+"_"+C.smooth+"_"+E;let z=i.materials[H];if(this.materials!==null){if(z=this.materials.create(C.name),v&&z&&!(z instanceof Oc)){const B=new Oc;Li.prototype.copy.call(B,z),B.color.copy(z.color),z=B}else if(y&&z&&!(z instanceof No)){const B=new No({size:10,sizeAttenuation:!1});Li.prototype.copy.call(B,z),B.color.copy(z.color),B.map=z.map,z=B}}z===void 0&&(v?z=new Oc:y?z=new No({size:1,sizeAttenuation:!1}):z=new h0,z.name=C.name,z.flatShading=!C.smooth,z.vertexColors=E,i.materials[H]=z),M.push(z)}let x;if(M.length>1){for(let P=0,N=_.length;P<N;P++){const C=_[P];A.addGroup(C.groupStart,C.groupCount,P)}v?x=new av(A,M):y?x=new Uh(A,M):x=new vi(A,M)}else v?x=new av(A,M[0]):y?x=new Uh(A,M[0]):x=new vi(A,M[0]);x.name=p.name,c.add(x)}else if(i.vertices.length>0){const d=new No({size:1,sizeAttenuation:!1}),m=new yi;m.setAttribute("position",new Nn(i.vertices,3)),i.colors.length>0&&i.colors[0]!==void 0&&(m.setAttribute("color",new Nn(i.colors,3)),d.vertexColors=!0);const p=new Uh(m,d);c.add(p)}return c}}const Bv=.005,vA=.04,xA=75,SA=.1,Fv=1e3,Hv=5,Hh=16305606,Gv=1,Gh=.02,yA=7,MA=["/portfolio/env/px.jpg","/portfolio/env/nx.jpg","/portfolio/env/py.jpg","/portfolio/env/ny.jpg","/portfolio/env/pz.jpg","/portfolio/env/nz.jpg"],EA=()=>{const s=Vn.useRef(null),t=Vn.useRef(null),i=Vn.useRef(null),r=Vn.useRef(null),l=Vn.useRef(Bv);Vn.useEffect(()=>{const d=s.current,m=d.clientWidth,p=d.clientHeight,g=new cM,_=new ci(xA,m/p,SA,Fv);_.position.set(0,0,Hv),t.current=_;const v=new cA({antialias:!0,alpha:!0});v.setSize(m,p),v.setClearColor(Hh,0),d.appendChild(v.domElement),i.current=v;const y=new TM(Hh,Gv);g.add(y);const E=new EM(Hh,Gv);E.position.set(1,1,1),g.add(E);const M=new xM().load(MA);g.environment=M,new uA().load("/portfolio/3D/cube.mtl",C=>{C.preload();const H=new _A;H.setMaterials(C),H.load("/portfolio/3D/cube.obj",z=>{z.scale.set(Gh,Gh,Gh);const B=new Cs().setFromObject(z),W=new tt;B.getCenter(W),z.position.sub(W),z.traverse(D=>{if(D.isMesh){const w=new pM({color:10404300,metalness:.9,roughness:.1,envMap:M});D.material=w}}),r.current=z,g.add(z)})});const P=()=>{requestAnimationFrame(P),r.current&&(r.current.rotation.y+=l.current),v.render(g,_)};P();const N=()=>{if(!s.current||!t.current||!i.current)return;const C=s.current.clientWidth,H=s.current.clientHeight,z=t.current,B=i.current;z.aspect=C/H,z.updateProjectionMatrix(),B.setSize(C,H);const W=yA*(Fv/C);z.position.z=Math.max(Hv,W)};return window.addEventListener("resize",N),N(),()=>{window.removeEventListener("resize",N),d.removeChild(v.domElement),v.dispose()}},[]);const c=()=>{l.current=vA},h=()=>{l.current=Bv};return Bt.jsx("div",{ref:s,style:{width:"100%",height:"50vh",maxHeight:"600px",minHeight:"300px"},onMouseEnter:c,onMouseLeave:h})};var E0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Vv=Er.createContext&&Er.createContext(E0),TA=["attr","size","title"];function bA(s,t){if(s==null)return{};var i=AA(s,t),r,l;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(s);for(l=0;l<c.length;l++)r=c[l],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(s,r)&&(i[r]=s[r])}return i}function AA(s,t){if(s==null)return{};var i={};for(var r in s)if(Object.prototype.hasOwnProperty.call(s,r)){if(t.indexOf(r)>=0)continue;i[r]=s[r]}return i}function Vc(){return Vc=Object.assign?Object.assign.bind():function(s){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(s[r]=i[r])}return s},Vc.apply(this,arguments)}function kv(s,t){var i=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);t&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(s,l).enumerable})),i.push.apply(i,r)}return i}function kc(s){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?kv(Object(i),!0).forEach(function(r){RA(s,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(i)):kv(Object(i)).forEach(function(r){Object.defineProperty(s,r,Object.getOwnPropertyDescriptor(i,r))})}return s}function RA(s,t,i){return t=wA(t),t in s?Object.defineProperty(s,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):s[t]=i,s}function wA(s){var t=CA(s,"string");return typeof t=="symbol"?t:t+""}function CA(s,t){if(typeof s!="object"||!s)return s;var i=s[Symbol.toPrimitive];if(i!==void 0){var r=i.call(s,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(s)}function T0(s){return s&&s.map((t,i)=>Er.createElement(t.tag,kc({key:i},t.attr),T0(t.child)))}function Yc(s){return t=>Er.createElement(DA,Vc({attr:kc({},s.attr)},t),T0(s.child))}function DA(s){var t=i=>{var{attr:r,size:l,title:c}=s,h=bA(s,TA),d=l||i.size||"1em",m;return i.className&&(m=i.className),s.className&&(m=(m?m+" ":"")+s.className),Er.createElement("svg",Vc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,r,h,{className:m,style:kc(kc({color:s.color||i.color},i.style),s.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&Er.createElement("title",null,c),s.children)};return Vv!==void 0?Er.createElement(Vv.Consumer,null,i=>t(i)):t(E0)}function UA(s){return Yc({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(s)}function LA(s){return Yc({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(s)}function NA(s){return Yc({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(s)}function OA(s){return Yc({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(s)}const PA=()=>Bt.jsxs("div",{className:"contact-icons",children:[Bt.jsx("a",{href:"https://github.com/IagoPorto",target:"_blank",rel:"noopener noreferrer",children:Bt.jsx(UA,{className:"icon"})}),Bt.jsx("a",{href:"https://www.linkedin.com/in/iagoportomontes/",target:"_blank",rel:"noopener noreferrer",children:Bt.jsx(LA,{className:"icon"})}),Bt.jsx("a",{href:"mailto:iagoportomontes@gmail.com",children:Bt.jsx(NA,{className:"icon"})})]});function IA(){return Bt.jsxs("footer",{className:"footer",children:[Bt.jsxs("p",{className:"footer-text",children:["Compiled with"," ",Bt.jsx("a",{href:"https://github.com/IagoPorto/portfolio",target:"_blank",rel:"noopener noreferrer","aria-label":"View portfolio on GitHub",children:Bt.jsx(OA,{className:"icon"})})," ","and caffeine"]}),Bt.jsx("p",{className:"footer-copy",children:"© 2025 Iago Porto. All rights reserved."})]})}const zA=()=>Bt.jsx("div",{className:"bg"});function BA(){return Bt.jsx(Bt.Fragment,{children:Bt.jsxs("div",{className:"layout-container",children:[Bt.jsx(zS,{}),Bt.jsx(zA,{}),Bt.jsxs("aside",{className:"left-section",children:[Bt.jsx(BS,{}),Bt.jsx(FS,{}),Bt.jsx(EA,{}),Bt.jsx(PA,{})]}),Bt.jsxs("div",{className:"right-section",children:[Bt.jsx(HS,{}),Bt.jsx(WS,{}),Bt.jsx(qS,{}),Bt.jsx(IA,{})]})]})})}IS.createRoot(document.getElementById("root")).render(Bt.jsx(Vn.StrictMode,{children:Bt.jsx(BA,{})}));
