function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function i(t,e,n,r,o,s,c){const i=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(i){const o=a(e,n,r,c);t.p(o,i)}}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function m(){return h(" ")}function g(){return h("")}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t){return Array.from(t.childNodes)}function b(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):d(e)}function y(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return h(e)}function _(t){return y(t," ")}function E(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function x(t,e=document.body){return Array.from(e.querySelectorAll(t))}let S;function w(t){S=t}function N(){if(!S)throw new Error("Function called outside component initialization");return S}const P=[],A=[],R=[],j=[],L=Promise.resolve();let C=!1;function I(t){R.push(t)}let O=!1;const k=new Set;function T(){if(!O){O=!0;do{for(let t=0;t<P.length;t+=1){const e=P[t];w(e),U(e.$$)}for(w(null),P.length=0;A.length;)A.pop()();for(let t=0;t<R.length;t+=1){const e=R[t];k.has(e)||(k.add(e),e())}R.length=0}while(P.length);for(;j.length;)j.pop()();C=!1,O=!1,k.clear()}}function U(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(I)}}const q=new Set;let J;function B(){J={r:0,c:[],p:J}}function K(){J.r||o(J.c),J=J.p}function M(t,e){t&&t.i&&(q.delete(t),t.i(e))}function V(t,e,n,r){if(t&&t.o){if(q.has(t))return;q.add(t),J.c.push((()=>{q.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function D(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const c=t[s],a=e[s];if(a){for(const t in c)t in a||(r[t]=1);for(const t in a)o[t]||(n[t]=a[t],o[t]=1);t[s]=a}else for(const t in c)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function H(t){return"object"==typeof t&&null!==t?t:{}}function Y(t){t&&t.c()}function z(t,e){t&&t.l(e)}function F(t,e,r,c){const{fragment:a,on_mount:i,on_destroy:l,after_update:u}=t.$$;a&&a.m(e,r),c||I((()=>{const e=i.map(n).filter(s);l?l.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(I)}function G(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function W(t,e){-1===t.$$.dirty[0]&&(P.push(t),C||(C=!0,L.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function X(e,n,s,c,a,i,l=[-1]){const u=S;w(e);const p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:n.context||[]),callbacks:r(),dirty:l,skip_bound:!1};let d=!1;if(p.ctx=s?s(e,n.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&a(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),d&&W(e,t)),n})):[],p.update(),d=!0,o(p.before_update),p.fragment=!!c&&c(p.ctx),n.target){if(n.hydrate){const t=v(n.target);p.fragment&&p.fragment.l(t),t.forEach(f)}else p.fragment&&p.fragment.c();n.intro&&M(e.$$.fragment),F(e,n.target,n.anchor,n.customElement),T()}w(u)}class Q{$destroy(){G(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Z=[];function tt(e,n=t){let r;const o=[];function s(t){if(c(e,t)&&(e=t,r)){const t=!Z.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),Z.push(n,e)}if(t){for(let t=0;t<Z.length;t+=2)Z[t][0](Z[t+1]);Z.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,a=t){const i=[c,a];return o.push(i),1===o.length&&(r=n(s)||t),c(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const et={};function nt(e){let n,r,o,s,c,a,i,p,g,E,x,S,w,N,P,A;return{c(){n=d("nav"),r=d("ul"),o=d("li"),s=d("a"),c=h("home"),i=m(),p=d("li"),g=d("a"),E=h("about"),S=m(),w=d("li"),N=d("a"),P=h("blog"),this.h()},l(t){n=b(t,"NAV",{class:!0});var e=v(n);r=b(e,"UL",{class:!0});var a=v(r);o=b(a,"LI",{class:!0});var l=v(o);s=b(l,"A",{"aria-current":!0,href:!0,class:!0});var u=v(s);c=y(u,"home"),u.forEach(f),l.forEach(f),i=_(a),p=b(a,"LI",{class:!0});var d=v(p);g=b(d,"A",{"aria-current":!0,href:!0,class:!0});var h=v(g);E=y(h,"about"),h.forEach(f),d.forEach(f),S=_(a),w=b(a,"LI",{class:!0});var m=v(w);N=b(m,"A",{rel:!0,"aria-current":!0,href:!0,class:!0});var $=v(N);P=y($,"blog"),$.forEach(f),m.forEach(f),a.forEach(f),e.forEach(f),this.h()},h(){$(s,"aria-current",a=void 0===e[0]?"page":void 0),$(s,"href","."),$(s,"class","svelte-1dbd5up"),$(o,"class","svelte-1dbd5up"),$(g,"aria-current",x="about"===e[0]?"page":void 0),$(g,"href","about"),$(g,"class","svelte-1dbd5up"),$(p,"class","svelte-1dbd5up"),$(N,"rel","prefetch"),$(N,"aria-current",A="blog"===e[0]?"page":void 0),$(N,"href","blog"),$(N,"class","svelte-1dbd5up"),$(w,"class","svelte-1dbd5up"),$(r,"class","svelte-1dbd5up"),$(n,"class","svelte-1dbd5up")},m(t,e){u(t,n,e),l(n,r),l(r,o),l(o,s),l(s,c),l(r,i),l(r,p),l(p,g),l(g,E),l(r,S),l(r,w),l(w,N),l(N,P)},p(t,[e]){1&e&&a!==(a=void 0===t[0]?"page":void 0)&&$(s,"aria-current",a),1&e&&x!==(x="about"===t[0]?"page":void 0)&&$(g,"aria-current",x),1&e&&A!==(A="blog"===t[0]?"page":void 0)&&$(N,"aria-current",A)},i:t,o:t,d(t){t&&f(n)}}}function rt(t,e,n){let{segment:r}=e;return t.$$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class ot extends Q{constructor(t){super(),X(this,t,rt,nt,c,{segment:0})}}function st(t){let e,n,r,o;e=new ot({props:{segment:t[0]}});const s=t[2].default,c=function(t,e,n,r){if(t){const o=a(t,e,n,r);return t[0](o)}}(s,t,t[1],null);return{c(){Y(e.$$.fragment),n=m(),r=d("main"),c&&c.c(),this.h()},l(t){z(e.$$.fragment,t),n=_(t),r=b(t,"MAIN",{class:!0});var o=v(r);c&&c.l(o),o.forEach(f),this.h()},h(){$(r,"class","svelte-1uhnsl8")},m(t,s){F(e,t,s),u(t,n,s),u(t,r,s),c&&c.m(r,null),o=!0},p(t,[n]){const r={};1&n&&(r.segment=t[0]),e.$set(r),c&&c.p&&2&n&&i(c,s,t,t[1],n,null,null)},i(t){o||(M(e.$$.fragment,t),M(c,t),o=!0)},o(t){V(e.$$.fragment,t),V(c,t),o=!1},d(t){G(e,t),t&&f(n),t&&f(r),c&&c.d(t)}}}function ct(t,e,n){let{$$slots:r={},$$scope:o}=e,{segment:s}=e;return t.$$set=t=>{"segment"in t&&n(0,s=t.segment),"$$scope"in t&&n(1,o=t.$$scope)},[s,o,r]}class at extends Q{constructor(t){super(),X(this,t,ct,st,c,{segment:0})}}function it(t){let e,n,r=t[1].stack+"";return{c(){e=d("pre"),n=h(r)},l(t){e=b(t,"PRE",{});var o=v(e);n=y(o,r),o.forEach(f)},m(t,r){u(t,e,r),l(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&E(n,r)},d(t){t&&f(e)}}}function lt(e){let n,r,o,s,c,a,i,p,S,w=e[1].message+"";document.title=n=e[0];let N=e[2]&&e[1].stack&&it(e);return{c(){r=m(),o=d("h1"),s=h(e[0]),c=m(),a=d("p"),i=h(w),p=m(),N&&N.c(),S=g(),this.h()},l(t){x('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(f),r=_(t),o=b(t,"H1",{class:!0});var n=v(o);s=y(n,e[0]),n.forEach(f),c=_(t),a=b(t,"P",{class:!0});var l=v(a);i=y(l,w),l.forEach(f),p=_(t),N&&N.l(t),S=g(),this.h()},h(){$(o,"class","svelte-8od9u6"),$(a,"class","svelte-8od9u6")},m(t,e){u(t,r,e),u(t,o,e),l(o,s),u(t,c,e),u(t,a,e),l(a,i),u(t,p,e),N&&N.m(t,e),u(t,S,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&E(s,t[0]),2&e&&w!==(w=t[1].message+"")&&E(i,w),t[2]&&t[1].stack?N?N.p(t,e):(N=it(t),N.c(),N.m(S.parentNode,S)):N&&(N.d(1),N=null)},i:t,o:t,d(t){t&&f(r),t&&f(o),t&&f(c),t&&f(a),t&&f(p),N&&N.d(t),t&&f(S)}}}function ut(t,e,n){let{status:r}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}class ft extends Q{constructor(t){super(),X(this,t,ut,lt,c,{status:0,error:1})}}function pt(t){let n,r,o;const s=[t[4].props];var c=t[4].component;function a(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return c&&(n=new c(a())),{c(){n&&Y(n.$$.fragment),r=g()},l(t){n&&z(n.$$.fragment,t),r=g()},m(t,e){n&&F(n,t,e),u(t,r,e),o=!0},p(t,e){const o=16&e?D(s,[H(t[4].props)]):{};if(c!==(c=t[4].component)){if(n){B();const t=n;V(t.$$.fragment,1,0,(()=>{G(t,1)})),K()}c?(n=new c(a()),Y(n.$$.fragment),M(n.$$.fragment,1),F(n,r.parentNode,r)):n=null}else c&&n.$set(o)},i(t){o||(n&&M(n.$$.fragment,t),o=!0)},o(t){n&&V(n.$$.fragment,t),o=!1},d(t){t&&f(r),n&&G(n,t)}}}function dt(t){let e,n;return e=new ft({props:{error:t[0],status:t[1]}}),{c(){Y(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){F(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(M(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){G(e,t)}}}function ht(t){let e,n,r,o;const s=[dt,pt],c=[];function a(t,e){return t[0]?0:1}return e=a(t),n=c[e]=s[e](t),{c(){n.c(),r=g()},l(t){n.l(t),r=g()},m(t,n){c[e].m(t,n),u(t,r,n),o=!0},p(t,o){let i=e;e=a(t),e===i?c[e].p(t,o):(B(),V(c[i],1,1,(()=>{c[i]=null})),K(),n=c[e],n?n.p(t,o):(n=c[e]=s[e](t),n.c()),M(n,1),n.m(r.parentNode,r))},i(t){o||(M(n),o=!0)},o(t){V(n),o=!1},d(t){c[e].d(t),t&&f(r)}}}function mt(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[ht]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new at({props:s}),{c(){Y(n.$$.fragment)},l(t){z(n.$$.fragment,t)},m(t,e){F(n,t,e),r=!0},p(t,[e]){const r=12&e?D(o,[4&e&&{segment:t[2][0]},8&e&&H(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(M(n.$$.fragment,t),r=!0)},o(t){V(n.$$.fragment,t),r=!1},d(t){G(n,t)}}}function gt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:c}=e,{level0:a}=e,{level1:i=null}=e,{notify:l}=e;var u,f,p;return u=l,N().$$.after_update.push(u),f=et,p=r,N().$$.context.set(f,p),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,c=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,i=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,c,a,i,r,l]}class $t extends Q{constructor(t){super(),X(this,t,gt,mt,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const vt=[/^\/blog\.json$/,/^\/blog\/([^/]+?)\.json$/],bt=[{js:()=>Promise.all([import("./index.ade356b9.js"),__inject_styles(["client-e118e612.css","index-39716d32.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./about.e97c8bf2.js"),__inject_styles(["client-e118e612.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./index.39882a62.js"),__inject_styles(["client-e118e612.css","index-7ed37c94.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[slug].fac92fe6.js"),__inject_styles(["client-e118e612.css","[slug]-5bc8f95f.css"])]).then((function(t){return t[0]}))}],yt=(_t=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/([^/]+?)\/?$/,parts:[null,{i:3,params:t=>({slug:_t(t[1])})}]}]);var _t;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Et(t,e,n,r){return new(n||(n=Promise))((function(o,s){function c(t){try{i(r.next(t))}catch(t){s(t)}}function a(t){try{i(r.throw(t))}catch(t){s(t)}}function i(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,a)}i((r=r.apply(t,e||[])).next())}))}function xt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let St,wt=1;const Nt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},Pt={};let At,Rt;function jt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach((t=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r})),e}function Lt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(At))return null;let e=t.pathname.slice(At.length);if(""===e&&(e="/"),!vt.some((t=>t.test(e))))for(let n=0;n<yt.length;n+=1){const r=yt[n],o=r.pattern.exec(e);if(o){const n=jt(t.search),s=r.parts[r.parts.length-1],c=s.params?s.params(o):{},a={host:location.host,path:e,query:n,params:c};return{href:t.href,route:r,match:o,page:a}}}}function Ct(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=xt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Lt(o);if(s){kt(s,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),Nt.pushState({id:St},"",o.href)}}function It(){return{x:pageXOffset,y:pageYOffset}}function Ot(t){if(Pt[St]=It(),t.state){const e=Lt(new URL(location.href));e?kt(e,t.state.id):location.href=location.href}else wt=wt+1,function(t){St=t}(wt),Nt.replaceState({id:St},"",location.href)}function kt(t,e,n,r){return Et(this,void 0,void 0,(function*(){const o=!!e;if(o)St=e;else{const t=It();Pt[St]=t,St=e=++wt,Pt[St]=n?t:{x:0,y:0}}if(yield Rt(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=Pt[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),Pt[St]=n,o||t?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Tt(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Ut,qt=null;function Jt(t){const e=xt(t.target);e&&"prefetch"===e.rel&&function(t){const e=Lt(new URL(t,Tt(document)));if(e)qt&&t===qt.href||(qt={href:t,promise:ne(e)}),qt.promise}(e.href)}function Bt(t){clearTimeout(Ut),Ut=setTimeout((()=>{Jt(t)}),20)}function Kt(t,e={noscroll:!1,replaceState:!1}){const n=Lt(new URL(t,Tt(document)));return n?(Nt[e.replaceState?"replaceState":"pushState"]({id:St},"",t),kt(n,null,e.noscroll)):(location.href=t,new Promise((()=>{})))}const Mt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Vt,Dt,Ht,Yt=!1,zt=[],Ft="{}";const Gt={page:function(t){const e=tt(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:tt(null),session:tt(Mt&&Mt.session)};let Wt,Xt,Qt;function Zt(t,e){const{error:n}=t;return Object.assign({error:n},e)}function te(t){return Et(this,void 0,void 0,(function*(){Vt&&Gt.preloading.set(!0);const e=function(t){return qt&&qt.href===t.href?qt.promise:ne(t)}(t),n=Dt={},r=yield e,{redirect:o}=r;if(n===Dt)if(o)yield Kt(o.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield ee(n,e,Zt(e,t.page))}}))}function ee(t,e,n){return Et(this,void 0,void 0,(function*(){Gt.page.set(n),Gt.preloading.set(!1),Vt?Vt.$set(e):(e.stores={page:{subscribe:Gt.page.subscribe},preloading:{subscribe:Gt.preloading.subscribe},session:Gt.session},e.level0={props:yield Ht},e.notify=Gt.page.notify,Vt=new $t({target:Qt,props:e,hydrate:!0})),zt=t,Ft=JSON.stringify(n.query),Yt=!0,Xt=!1}))}function ne(t){return Et(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},c={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!Ht){const t=()=>({});Ht=Mt.preloaded[0]||t.call(c,{host:n.host,path:n.path,query:n.query,params:{}},Wt)}let a,i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;a=yield Promise.all(e.parts.map(((e,a)=>Et(this,void 0,void 0,(function*(){const f=r[a];if(function(t,e,n,r){if(r!==Ft)return!0;const o=zt[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(a,f,l,o)&&(u=!0),s.segments[i]=r[a+1],!e)return{segment:f};const p=i++;if(!Xt&&!u&&zt[a]&&zt[a].part===e.i)return zt[a];u=!1;const{default:d,preload:h}=yield bt[e.i].js();let m;return m=Yt||!Mt.preloaded[a+1]?h?yield h.call(c,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Wt):{}:Mt.preloaded[a+1],s[`level${p}`]={component:d,props:m,segment:f,match:l,part:e.i}})))))}catch(t){s.error=t,s.status=500,a=[]}return{redirect:o,props:s,branch:a}}))}var re,oe,se;Gt.session.subscribe((t=>Et(void 0,void 0,void 0,(function*(){if(Wt=t,!Yt)return;Xt=!0;const e=Lt(new URL(location.href)),n=Dt={},{redirect:r,props:o,branch:s}=yield ne(e);n===Dt&&(r?yield Kt(r.location,{replaceState:!0}):yield ee(s,o,Zt(o,e.page)))})))),re={target:document.querySelector("#sapper")},oe=re.target,Qt=oe,se=Mt.baseUrl,At=se,Rt=te,"scrollRestoration"in Nt&&(Nt.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{Nt.scrollRestoration="auto"})),addEventListener("load",(()=>{Nt.scrollRestoration="manual"})),addEventListener("click",Ct),addEventListener("popstate",Ot),addEventListener("touchstart",Jt),addEventListener("mousemove",Bt),Mt.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:o,status:s,error:c}=Mt;Ht||(Ht=o&&o[0]);const a={error:c,status:s,session:r,level0:{props:Ht},level1:{props:{status:s,error:c},component:ft},segments:o},i=jt(n);ee([],a,{host:t,path:e,query:i,params:{},error:c})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;Nt.replaceState({id:wt},"",e);const n=Lt(new URL(location.href));if(n)return kt(n,wt,!0,t)}));export{Q as S,m as a,b,_ as c,f as d,d as e,v as f,y as g,$ as h,X as i,u as j,l as k,E as l,p as m,t as n,x as q,c as s,h as t};

import __inject_styles from './inject_styles.5607aec6.js';