(function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},r=function(t){return t&&t.Math==Math&&t};e=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof t&&t)||function(){return this}()||Function("return this")();var n,o;n=!(o=function(t){try{return!!t()}catch(t){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var i,a,c,u={};c=!o((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}));var s=Function.prototype,l=s.call,f=c&&s.bind.bind(l,l);u=c?f:function(t){return function(){return l.apply(t,arguments)}};var p,h={},m="object"==typeof document&&document.all,d=(p={all:m,IS_HTMLDDA:void 0===m&&void 0!==m}).all;h=p.IS_HTMLDDA?function(t){return"function"==typeof t||t===d}:function(t){return"function"==typeof t};var y,v,g,b={};g=function(t){return null==t};var w=TypeError;v=function(t){if(g(t))throw w("Can't call method on "+t);return t};var S=Object;y=function(t){return S(v(t))};var E=u({}.hasOwnProperty);b=Object.hasOwn||function(t,e){return E(y(t),e)};var T,j=Function.prototype,O=n&&Object.getOwnPropertyDescriptor,k=b(j,"name"),L={EXISTS:k,PROPER:k&&"something"===function(){}.name,CONFIGURABLE:k&&(!n||n&&O(j,"name").configurable)}.CONFIGURABLE,A={},x={},C=Object.defineProperty;T=function(t,r){try{C(e,t,{value:r,configurable:!0,writable:!0})}catch(n){e[t]=r}return r};var F="__core-js_shared__",I=e[F]||T(F,{});x=I;var P=u(Function.toString);h(x.inspectSource)||(x.inspectSource=function(t){return P(t)}),A=x.inspectSource;var B,M,_=e.WeakMap;M=h(_)&&/native code/.test(String(_));var D={},N=p.all;D=p.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:h(t)||t===N}:function(t){return"object"==typeof t?null!==t:h(t)};var q,R,G,z={},H=e.document,W=D(H)&&D(H.createElement);G=function(t){return W?H.createElement(t):{}},R=!n&&!o((function(){return 7!=Object.defineProperty(G("div"),"a",{get:function(){return 7}}).a}));var Y;Y=n&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var X,Q=String,U=TypeError;X=function(t){if(D(t))return t;throw U(Q(t)+" is not an object")};var K,V,J={},Z=Function.prototype.call;J=c?Z.bind(Z):function(){return Z.apply(Z,arguments)};var tt,et={},rt=function(t){return h(t)?t:void 0};tt=function(t,r){return arguments.length<2?rt(e[t]):e[t]&&e[t][r]};var nt={};nt=u({}.isPrototypeOf);var ot,it,at,ct={};ct="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var ut,st,lt=e.process,ft=e.Deno,pt=lt&&lt.versions||ft&&ft.version,ht=pt&&pt.v8;ht&&(st=(ut=ht.split("."))[0]>0&&ut[0]<4?1:+(ut[0]+ut[1])),!st&&ct&&(!(ut=ct.match(/Edge\/(\d+)/))||ut[1]>=74)&&(ut=ct.match(/Chrome\/(\d+)/))&&(st=+ut[1]),at=st,ot=(it=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&at&&at<41})))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var mt=Object;et=ot?function(t){return"symbol"==typeof t}:function(t){var e=tt("Symbol");return h(e)&&nt(e.prototype,mt(t))};var dt,yt,vt,gt=String;vt=function(t){try{return gt(t)}catch(t){return"Object"}};var bt=TypeError;yt=function(t){if(h(t))return t;throw bt(vt(t)+" is not a function")},dt=function(t,e){var r=t[e];return g(r)?void 0:yt(r)};var wt,St=TypeError;wt=function(t,e){var r,n;if("string"===e&&h(r=t.toString)&&!D(n=J(r,t)))return n;if(h(r=t.valueOf)&&!D(n=J(r,t)))return n;if("string"!==e&&h(r=t.toString)&&!D(n=J(r,t)))return n;throw St("Can't convert object to primitive value")};var Et;(Et=function(t,e){return x[t]||(x[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.29.0",mode:"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.29.0/LICENSE",source:"https://github.com/zloirock/core-js"});var Tt,jt=0,Ot=Math.random(),kt=u(1..toString);Tt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+kt(++jt+Ot,36)};var Lt=e.Symbol,At=Et("wks"),xt=ot?Lt.for||Lt:Lt&&Lt.withoutSetter||Tt,Ct=TypeError,Ft=function(t){return b(At,t)||(At[t]=it&&b(Lt,t)?Lt[t]:xt("Symbol."+t)),At[t]}("toPrimitive");V=function(t,e){if(!D(t)||et(t))return t;var r,n=dt(t,Ft);if(n){if(void 0===e&&(e="default"),r=J(n,t,e),!D(r)||et(r))return r;throw Ct("Can't convert object to primitive value")}return void 0===e&&(e="number"),wt(t,e)},K=function(t){var e=V(t,"string");return et(e)?e:e+""};var It=TypeError,Pt=Object.defineProperty,Bt=Object.getOwnPropertyDescriptor,Mt="enumerable",_t="configurable",Dt="writable";q=n?Y?function(t,e,r){if(X(t),e=K(e),X(r),"function"==typeof t&&"prototype"===e&&"value"in r&&Dt in r&&!r[Dt]){var n=Bt(t,e);n&&n[Dt]&&(t[e]=r.value,r={configurable:_t in r?r[_t]:n[_t],enumerable:Mt in r?r[Mt]:n[Mt],writable:!1})}return Pt(t,e,r)}:Pt:function(t,e,r){if(X(t),e=K(e),X(r),R)try{return Pt(t,e,r)}catch(t){}if("get"in r||"set"in r)throw It("Accessors not supported");return"value"in r&&(t[e]=r.value),t};var Nt;Nt=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},z=n?function(t,e,r){return q(t,e,Nt(1,r))}:function(t,e,r){return t[e]=r,t};var qt,Rt=Et("keys");qt=function(t){return Rt[t]||(Rt[t]=Tt(t))};var Gt={};Gt={};var zt,Ht,Wt,Yt="Object already initialized",$t=e.TypeError,Xt=e.WeakMap;if(M||x.state){var Qt=x.state||(x.state=new Xt);Qt.get=Qt.get,Qt.has=Qt.has,Qt.set=Qt.set,zt=function(t,e){if(Qt.has(t))throw $t(Yt);return e.facade=t,Qt.set(t,e),e},Ht=function(t){return Qt.get(t)||{}},Wt=function(t){return Qt.has(t)}}else{var Ut=qt("state");Gt[Ut]=!0,zt=function(t,e){if(b(t,Ut))throw $t(Yt);return e.facade=t,z(t,Ut,e),e},Ht=function(t){return b(t,Ut)?t[Ut]:{}},Wt=function(t){return b(t,Ut)}}var Kt=(B={set:zt,get:Ht,has:Wt,enforce:function(t){return Wt(t)?Ht(t):zt(t,{})},getterFor:function(t){return function(e){var r;if(!D(e)||(r=Ht(e)).type!==t)throw $t("Incompatible receiver, "+t+" required");return r}}}).enforce,Vt=B.get,Jt=String,Zt=Object.defineProperty,te=u("".slice),ee=u("".replace),re=u([].join),ne=n&&!o((function(){return 8!==Zt((function(){}),"length",{value:8}).length})),oe=String(String).split("String"),ie=a=function(t,e,r){"Symbol("===te(Jt(e),0,7)&&(e="["+ee(Jt(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!b(t,"name")||L&&t.name!==e)&&(n?Zt(t,"name",{value:e,configurable:!0}):t.name=e),ne&&r&&b(r,"arity")&&t.length!==r.arity&&Zt(t,"length",{value:r.arity});try{r&&b(r,"constructor")&&r.constructor?n&&Zt(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var o=Kt(t);return b(o,"source")||(o.source=re(oe,"string"==typeof e?e:"")),t};Function.prototype.toString=ie((function(){return h(this)&&Vt(this).source||A(this)}),"toString"),i=function(t,e,r){return r.get&&a(r.get,e,{getter:!0}),r.set&&a(r.set,e,{setter:!0}),q(t,e,r)};var ae;ae=function(){var t=X(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e};var ce=e.RegExp,ue=ce.prototype;n&&o((function(){var t=!0;try{ce(".","d")}catch(e){t=!1}var e={},r="",n=t?"dgimsy":"gimsy",o=function(t,n){Object.defineProperty(e,t,{get:function(){return r+=n,!0}})},i={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var a in t&&(i.hasIndices="d"),i)o(a,i[a]);return Object.getOwnPropertyDescriptor(ue,"flags").get.call(e)!==n||r!==n}))&&i(ue,"flags",{configurable:!0,get:ae});var se,le,fe,pe={}.propertyIsEnumerable,he=Object.getOwnPropertyDescriptor,me=he&&!pe.call({1:2},1);fe=me?function(t){var e=he(this,t);return!!e&&e.enumerable}:pe;var de,ye,ve={},ge=u({}.toString),be=u("".slice);ye=function(t){return be(ge(t),8,-1)};var we=Object,Se=u("".split);ve=o((function(){return!we("z").propertyIsEnumerable(0)}))?function(t){return"String"==ye(t)?Se(t,""):we(t)}:we,de=function(t){return ve(v(t))};var Ee,Te=Object.getOwnPropertyDescriptor,je=le=n?Te:function(t,e){if(t=de(t),e=K(e),R)try{return Te(t,e)}catch(t){}if(b(t,e))return Nt(!J(fe,t,e),t[e])};Ee=function(t,e,r,n){n||(n={});var o=n.enumerable,i=void 0!==n.name?n.name:e;if(h(r)&&a(r,i,n),n.global)o?t[e]=r:T(e,r);else{try{n.unsafe?t[e]&&(o=!0):delete t[e]}catch(t){}o?t[e]=r:q(t,e,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return t};var Oe,ke,Le,Ae,xe,Ce={},Fe={},Ie=Math.ceil,Pe=Math.floor;Fe=Math.trunc||function(t){var e=+t;return(e>0?Pe:Ie)(e)},xe=function(t){var e=+t;return e!=e||0===e?0:Fe(e)};var Be=Math.max,Me=Math.min;Ae=function(t,e){var r=xe(t);return r<0?Be(r+e,0):Me(r,e)};var _e,De,Ne=Math.min;De=function(t){return t>0?Ne(xe(t),9007199254740991):0},_e=function(t){return De(t.length)};var qe=function(t){return function(e,r,n){var o,i=de(e),a=_e(i),c=Ae(n,a);if(t&&r!=r){for(;a>c;)if((o=i[c++])!=o)return!0}else for(;a>c;c++)if((t||c in i)&&i[c]===r)return t||c||0;return!t&&-1}},Re={includes:qe(!0),indexOf:qe(!1)}.indexOf,Ge=u([].push);Le=function(t,e){var r,n=de(t),o=0,i=[];for(r in n)!b(Gt,r)&&b(n,r)&&Ge(i,r);for(;e.length>o;)b(n,r=e[o++])&&(~Re(i,r)||Ge(i,r));return i};var ze,He=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");ke=Object.getOwnPropertyNames||function(t){return Le(t,He)},ze=Object.getOwnPropertySymbols;var We=u([].concat);Ce=tt("Reflect","ownKeys")||function(t){var e=ke(X(t));return ze?We(e,ze(t)):e},Oe=function(t,e,r){for(var n=Ce(e),o=q,i=le,a=0;a<n.length;a++){var c=n[a];b(t,c)||r&&b(r,c)||o(t,c,i(e,c))}};var Ye={},$e=/#|\.prototype\./,Xe=function(t,e){var r=Ue[Qe(t)];return r==Ve||r!=Ke&&(h(e)?o(e):!!e)},Qe=Xe.normalize=function(t){return String(t).replace($e,".").toLowerCase()},Ue=Xe.data={},Ke=Xe.NATIVE="N",Ve=Xe.POLYFILL="P";Ye=Xe,se=function(t,r){var n,o,i,a,c,u=t.target,s=t.global,l=t.stat;if(n=s?e:l?e[u]||T(u,{}):(e[u]||{}).prototype)for(o in r){if(a=r[o],i=t.dontCallGetSet?(c=je(n,o))&&c.value:n[o],!Ye(s?o:u+(l?".":"#")+o,t.forced)&&void 0!==i){if(typeof a==typeof i)continue;Oe(a,i)}(t.sham||i&&i.sham)&&z(a,"sham",!0),Ee(n,o,a,t)}};var Je,Ze={},tr=Function.prototype,er=tr.apply,rr=tr.call;Ze="object"==typeof Reflect&&Reflect.apply||(c?rr.bind(er):function(){return rr.apply(er,arguments)});var nr,or,ir=(or=function(t){if("Function"===ye(t))return u(t)})(or.bind);nr=function(t,e){return yt(t),void 0===e?t:c?ir(t,e):function(){return t.apply(e,arguments)}};var ar={};ar=tt("document","documentElement");var cr={};cr=u([].slice);var ur={},sr=TypeError;ur=function(t,e){if(t<e)throw sr("Not enough arguments");return t};var lr;lr=/(?:ipad|iphone|ipod).*applewebkit/i.test(ct);var fr,pr,hr,mr,dr=pr={};function yr(){throw new Error("setTimeout has not been defined")}function vr(){throw new Error("clearTimeout has not been defined")}function gr(t){if(hr===setTimeout)return setTimeout(t,0);if((hr===yr||!hr)&&setTimeout)return hr=setTimeout,setTimeout(t,0);try{return hr(t,0)}catch(e){try{return hr.call(null,t,0)}catch(e){return hr.call(this,t,0)}}}!function(){try{hr="function"==typeof setTimeout?setTimeout:yr}catch(t){hr=yr}try{mr="function"==typeof clearTimeout?clearTimeout:vr}catch(t){mr=vr}}();var br,wr=[],Sr=!1,Er=-1;function Tr(){Sr&&br&&(Sr=!1,br.length?wr=br.concat(wr):Er=-1,wr.length&&jr())}function jr(){if(!Sr){var t=gr(Tr);Sr=!0;for(var e=wr.length;e;){for(br=wr,wr=[];++Er<e;)br&&br[Er].run();Er=-1,e=wr.length}br=null,Sr=!1,function(t){if(mr===clearTimeout)return clearTimeout(t);if((mr===vr||!mr)&&clearTimeout)return mr=clearTimeout,clearTimeout(t);try{return mr(t)}catch(e){try{return mr.call(null,t)}catch(e){return mr.call(this,t)}}}(t)}}function Or(t,e){this.fun=t,this.array=e}function kr(){}dr.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];wr.push(new Or(t,e)),1!==wr.length||Sr||gr(jr)},Or.prototype.run=function(){this.fun.apply(null,this.array)},dr.title="browser",dr.browser=!0,dr.env={},dr.argv=[],dr.version="",dr.versions={},dr.on=kr,dr.addListener=kr,dr.once=kr,dr.off=kr,dr.removeListener=kr,dr.removeAllListeners=kr,dr.emit=kr,dr.prependListener=kr,dr.prependOnceListener=kr,dr.listeners=function(t){return[]},dr.binding=function(t){throw new Error("process.binding is not supported")},dr.cwd=function(){return"/"},dr.chdir=function(t){throw new Error("process.chdir is not supported")},dr.umask=function(){return 0},fr=void 0!==pr&&"process"==ye(pr);var Lr,Ar,xr,Cr,Fr=e.setImmediate,Ir=e.clearImmediate,Pr=e.process,Br=e.Dispatch,Mr=e.Function,_r=e.MessageChannel,Dr=e.String,Nr=0,qr={},Rr="onreadystatechange";o((function(){Lr=e.location}));var Gr=function(t){if(b(qr,t)){var e=qr[t];delete qr[t],e()}},zr=function(t){return function(){Gr(t)}},Hr=function(t){Gr(t.data)},Wr=function(t){e.postMessage(Dr(t),Lr.protocol+"//"+Lr.host)};Fr&&Ir||(Fr=function(t){ur(arguments.length,1);var e=h(t)?t:Mr(t),r=cr(arguments,1);return qr[++Nr]=function(){Ze(e,void 0,r)},Ar(Nr),Nr},Ir=function(t){delete qr[t]},fr?Ar=function(t){Pr.nextTick(zr(t))}:Br&&Br.now?Ar=function(t){Br.now(zr(t))}:_r&&!lr?(Cr=(xr=new _r).port2,xr.port1.onmessage=Hr,Ar=nr(Cr.postMessage,Cr)):e.addEventListener&&h(e.postMessage)&&!e.importScripts&&Lr&&"file:"!==Lr.protocol&&!o(Wr)?(Ar=Wr,e.addEventListener("message",Hr,!1)):Ar=Rr in G("script")?function(t){ar.appendChild(G("script"))[Rr]=function(){ar.removeChild(this),Gr(t)}}:function(t){setTimeout(zr(t),0)});var Yr=(Je={set:Fr,clear:Ir}).clear;se({global:!0,bind:!0,enumerable:!0,forced:e.clearImmediate!==Yr},{clearImmediate:Yr});var $r,Xr,Qr=Je.set;Xr="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var Ur,Kr=e.Function,Vr=/MSIE .\./.test(ct)||Xr&&((Ur=e.Bun.version.split(".")).length<3||0==Ur[0]&&(Ur[1]<3||3==Ur[1]&&0==Ur[2]));$r=function(t,e){var r=e?2:1;return Vr?function(n,o){var i=ur(arguments.length,1)>r,a=h(n)?n:Kr(n),c=i?cr(arguments,r):[],u=i?function(){Ze(a,this,c)}:a;return e?t(u,o):t(u)}:t};var Jr=e.setImmediate?$r(Qr,!1):Qr;se({global:!0,bind:!0,enumerable:!0,forced:e.setImmediate!==Jr},{setImmediate:Jr});var Zr=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof v?e:v,a=Object.create(i.prototype),c=new C(n||[]);return o(a,"_invoke",{value:k(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var p="suspendedStart",h="suspendedYield",m="executing",d="completed",y={};function v(){}function g(){}function b(){}var w={};s(w,a,(function(){return this}));var S=Object.getPrototypeOf,E=S&&S(S(F([])));E&&E!==r&&n.call(E,a)&&(w=E);var T=b.prototype=v.prototype=Object.create(w);function j(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function k(t,e,r){var n=p;return function(o,i){if(n===m)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return I()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===p)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=m;var u=f(t,e,r);if("normal"===u.type){if(n=r.done?d:h,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}function L(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=f(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function F(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:I}}function I(){return{value:e,done:!0}}return g.prototype=b,o(T,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:g,configurable:!0}),g.displayName=s(b,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,u,"GeneratorFunction")),t.prototype=Object.create(T),t},t.awrap=function(t){return{__await:t}},j(O.prototype),s(O.prototype,c,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new O(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(T),s(T,u,"Generator"),s(T,a,(function(){return this})),s(T,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=F,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(x),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:F(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}({});try{regeneratorRuntime=Zr}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=Zr:Function("r","regeneratorRuntime = r")(Zr)}jQuery.loadScript=function(t,e){jQuery.ajax({url:t,dataType:"script",success:e,async:!0})};const tn='[search="form-block"]',en='[search="form"]',rn='[search="component"]',nn='[search="other-elements"], .search-modal_close-button',on='[search="icon"]',an='[search="icon-mount"]',cn='[search="input"]',un='[search="button-wrapper"]',sn='[search="modal-content-wrapper"]',ln='[search="background"]',fn='[search="alternative-background"]',pn='[nav="component"]',hn="/search?query=",mn="#eb145c",dn="#000",yn=.5,vn=1.5,gn=1.2,bn="zoomed",wn="#f8f9d6",Sn="search-data-href-base",En="search-data-error-color",Tn="search-data-resolved-error-color",jn="search-data-showing-error-animation-time",On="search-data-resolving-error-animation-time",kn="search-data-main-animation-time",Ln="search-data-zoomed-class",An="search-data-animation-background-color";function xn(){const t=document.querySelectorAll(rn),e=document.querySelectorAll(nn),r=[];t.forEach((t=>{const e={component:t,formBlock:t.querySelector(tn),form:t.querySelector(en),icon:t.querySelector(on),iconMount:document.querySelector(pn).querySelector(fn).querySelector(an),input:t.querySelector(cn),buttonWrapper:t.querySelector(un),animationBackground:t.closest(sn)||!1,data:{componentInNav:!0}};if(!1===e.animationBackground){const r=t.querySelector(ln);e.animationBackground=r;const n=t.closest("section");null!==n.querySelector(fn)&&(e.animationBackground=n.querySelector(fn)),e.data.componentInNav=!1,e.iconMount=e.animationBackground.querySelector(an)}r.push(e)}));return{nav:document.querySelector(pn),searchInstances:r,otherElements:e}}function Cn(t){const e=t.searchInstances[0].component;return{searchHrefBase:e.getAttribute(Sn)||hn,errorColor:e.getAttribute(En)||mn,resolvedErrorColor:e.getAttribute(Tn)||dn,errorAnimationTime:parseFloat(e.getAttribute(jn)||yn),resolvingAnimationTime:parseFloat(e.getAttribute(On)||vn),mainAnimationTime:parseFloat(e.getAttribute(kn)||gn),animatedStateClass:e.getAttribute(Ln)||bn,animationBackgroundColor:parseFloat(e.getAttribute(An)||wn)}}const Fn=function(t,e=["load"],r=window){if("string"!=typeof e){if("object"!=typeof e)throw new Error("The type of events is neither array nor string.");e.forEach((e=>r.addEventListener(e,t)))}else r.addEventListener(e,t)},In={},Pn=function(){const t=In;t.elements=xn(),t.styles=Cn(t.elements)};var Bn=new class{init(t){const e=this;this.#t=t.styles;(this.#e=t.elements).searchInstances.forEach(((t,r)=>{t.form.onkeypress=function(t){13==(t.charCode||t.keyCode||0)&&(t.preventDefault(),e.#r(r))},this.addHandler((()=>{e.#r(r)}),"click",t.buttonWrapper)}))}#e;#t;#n;#o=!1;#r(t){const e=this.#e.searchInstances[t],r=this.#t;if(""===e.input.value){"object"==typeof this.#n?this.#n.clear():this.#n=gsap.timeline();const t=this.#n;return t.set(e.formBlock,{borderColor:r.errorColor,color:r.errorColor}),t.to(e.formBlock,{borderColor:r.resolvedErrorColor,color:r.resolvedErrorColor,duration:r.resolvingAnimationTime},`+=${r.errorAnimationTime}`),void t.set(e.formBlock,{borderColor:"",color:""})}this.#o||(this.#o=!0,this.#i(t))}#a(t,e){t.parentNode.insertBefore(e,t.nextSibling)}#c(t){const e=window.getComputedStyle(t),r=new DOMMatrixReadOnly(e.transform);return{scale:r.a,translateX:r.m41,translateY:r.m42}}#i(t){const e=this.#e.searchInstances[t],r=this.#t,n=this.#e,o=Object.fromEntries(new FormData(e.form).entries()).Search,i=r.searchHrefBase+o;gsap.to(n.otherElements,{opacity:0,duration:r.mainAnimationTime/2});const a=Flip.getState(e.formBlock);e.formBlock.classList.add(r.animatedStateClass);const c=this.#c(e.formBlock);Flip.from(a,{duration:r.mainAnimationTime}),gsap.to(e.formBlock,{x:c.translateX,scale:c.scale,opacity:0,duration:r.mainAnimationTime});const u=Flip.getState(e.icon);this.#a(e.iconMount,e.icon),e.icon.classList.add(r.animatedStateClass),Flip.from(u,{duration:r.mainAnimationTime}),e.data.componentInNav||(gsap.set(e.animationBackground,{opacity:0,display:"block"}),gsap.fromTo(e.icon,{scale:0,opacity:0},{scale:1,opacity:1,duration:r.mainAnimationTime})),gsap.to(e.animationBackground,{backgroundColor:r.animationBackgroundColor,opacity:1,duration:r.mainAnimationTime}),setTimeout((function(){window.location.href=i}),1e3*r.mainAnimationTime)}addHandler(t,e=["load"],r=window){Fn(t,e,r)}};const Mn=function(){Pn(),Bn.init(In)};!function(t){function e(){"undefined"==typeof Flip?$.loadScript("https://cdn.jsdelivr.net/gh/BarthMedia/js@main/Flip.min.js",(function(){r()})):r()}function r(){gsap.registerPlugin(Flip),t()}"undefined"==typeof gsap?$.loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js",(function(){e()})):e()}((function(){Bn.addHandler(Mn)}));})()