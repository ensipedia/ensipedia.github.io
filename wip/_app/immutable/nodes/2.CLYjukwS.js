import{w as Re,d as E,x as Be,y as De,t as M,q as J,v as ie}from"../chunks/disclose-version.B6LugAf-.js";import{i as ne}from"../chunks/legacy.7vacBpij.js";import{q as R,h as lt,a9 as Fe,K as ot,l as qe,ah as ct,ai as Ae,c as Ce,s as pe,d as $,aA as se,ae as Ge,o as xe,af as ut,r as oe,aB as dt,aC as vt,k as ft,aD as pt,aa as Ve,e as ht,au as Ue,a1 as _t,C as ke,aE as gt,aF as mt,aG as bt,a as wt,ag as We,az as ee,am as Ke,O as Ye,aH as yt,aI as xt,a2 as Et,ao as be,aJ as At,at as Le,T as Ne,aK as Ct,an as Xe,av as kt,p as Q,w as U,t as Z,x as T,y as I,aL as Lt,v as V,aM as le,G as L,E as H,al as te,z as O,_ as Je,as as Se,aj as Nt,ak as St}from"../chunks/runtime.D6jQ_P39.js";import{a as Tt,s as ce}from"../chunks/render.DHVLjflk.js";import{c as Qe,i as B,a as It,o as Mt}from"../chunks/index-client.BlCYi9Qu.js";import{h as Ot,s as re,a as Ee,b as ae,r as we}from"../chunks/attributes.0jvbDo0e.js";import{i as zt,p as w,s as Pt}from"../chunks/props.CY9NvwvO.js";function Ht(t,e){return e}function Rt(t,e,r,a){for(var n=[],s=e.length,i=0;i<s;i++)vt(e[i].e,n,!0);var p=s>0&&n.length===0&&r!==null;if(p){var o=r.parentNode;ft(o),o.append(r),a.clear(),K(t,e[0].prev,e[s-1].next)}pt(n,()=>{for(var c=0;c<s;c++){var l=e[c];p||(a.delete(l.k),K(t,l.prev,l.next)),Ve(l.e,!p)}})}function Bt(t,e,r,a,n,s=null){var i=t,p={flags:e,items:new Map,first:null};R&&lt();var o=null,c=!1;Fe(()=>{var l=r(),g=ot(l)?l:l==null?[]:qe(l),v=g.length;if(c&&v===0)return;c=v===0;let u=!1;if(R){var d=i.data===ct;d!==(v===0)&&(i=Ae(),Ce(i),pe(!1),u=!0)}if(R){for(var m=null,y,f=0;f<v;f++){if($.nodeType===8&&$.data===ht){i=$,u=!0,pe(!1);break}var b=g[f],A=a(b,f);y=Ze($,p,m,null,b,A,f,n,e),p.items.set(A,y),m=y}v>0&&Ce(Ae())}if(!R){var _=Ue;Dt(g,p,i,n,e,(_.f&se)!==0,a)}s!==null&&(v===0?o?Ge(o):o=xe(()=>s(i)):o!==null&&ut(o,()=>{o=null})),u&&pe(!0),r()}),R&&(i=$)}function Dt(t,e,r,a,n,s,i){var p=t.length,o=e.items,c=e.first,l=c,g,v=null,u=[],d=[],m,y,f,b;for(b=0;b<p;b+=1){if(m=t[b],y=i(m,b),f=o.get(y),f===void 0){var A=l?l.e.nodes_start:r;v=Ze(A,e,v,v===null?e.first:v.next,m,y,b,a,n),o.set(y,v),u=[],d=[],l=v.next;continue}if(Ft(f,m,b),f.e.f&se&&Ge(f.e),f!==l){if(g!==void 0&&g.has(f)){if(u.length<d.length){var _=d[0],x;v=_.prev;var C=u[0],k=u[u.length-1];for(x=0;x<u.length;x+=1)Te(u[x],_,r);for(x=0;x<d.length;x+=1)g.delete(d[x]);K(e,C.prev,k.next),K(e,v,C),K(e,k,_),l=_,v=k,b-=1,u=[],d=[]}else g.delete(f),Te(f,l,r),K(e,f.prev,f.next),K(e,f,v===null?e.first:v.next),K(e,v,f),v=f;continue}for(u=[],d=[];l!==null&&l.k!==y;)(s||!(l.e.f&se))&&(g??(g=new Set)).add(l),d.push(l),l=l.next;if(l===null)continue;f=l}u.push(f),v=f,l=f.next}if(l!==null||g!==void 0){for(var F=g===void 0?[]:qe(g);l!==null;)(s||!(l.e.f&se))&&F.push(l),l=l.next;var q=F.length;if(q>0){var de=null;Rt(e,F,de,o)}}oe.first=e.first&&e.first.e,oe.last=v&&v.e}function Ft(t,e,r,a){dt(t.v,e),t.i=r}function Ze(t,e,r,a,n,s,i,p,o){var c=(o&mt)!==0,l=(o&bt)===0,g=c?l?_t(n):ke(n):n,v=o&gt?ke(i):i,u={i:v,v:g,k:s,a:null,e:null,prev:r,next:a};try{return u.e=xe(()=>p(t,g,v),R),u.e.prev=r&&r.e,u.e.next=a&&a.e,r===null?e.first=u:(r.next=u,r.e.next=u.e),a!==null&&(a.prev=u,a.e.prev=u.e),u}finally{}}function Te(t,e,r){for(var a=t.next?t.next.e.nodes_start:r,n=e?e.e.nodes_start:r,s=t.e.nodes_start;s!==a;){var i=wt(s);n.before(s),s=i}}function K(t,e,r){e===null?t.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function qt(t,e,...r){var a=t,n=ee,s;Fe(()=>{n!==(n=e())&&(s&&(Ve(s),s=null),s=xe(()=>n(a,...r)))},We),R&&(a=$)}function je(t,e,r){Ke(()=>{var a=Ye(()=>e(t,r==null?void 0:r())||{});if(a!=null&&a.destroy)return()=>a.destroy()})}function Gt(t,e){var r=t.__className,a=$e(e);R&&t.getAttribute("class")===a?t.__className=a:(r!==a||R&&t.getAttribute("class")!==a)&&(a===""?t.removeAttribute("class"):t.setAttribute("class",a),t.__className=a)}function ye(t,e){var r=t.__className,a=$e(e);R&&t.className===a?t.__className=a:(r!==a||R&&t.className!==a)&&(e==null?t.removeAttribute("class"):t.className=a,t.__className=a)}function $e(t){return t??""}function he(t,e,r){if(r){if(t.classList.contains(e))return;t.classList.add(e)}else{if(!t.classList.contains(e))return;t.classList.remove(e)}}function D(t,e,r,a){var n=t.__styles??(t.__styles={});n[e]!==r&&(n[e]=r,r==null?t.style.removeProperty(e):t.style.setProperty(e,r,""))}const Vt=()=>performance.now(),Y={tick:t=>requestAnimationFrame(t),now:()=>Vt(),tasks:new Set};function et(t){Y.tasks.forEach(e=>{e.c(t)||(Y.tasks.delete(e),e.f())}),Y.tasks.size!==0&&Y.tick(et)}function Ut(t){let e;return Y.tasks.size===0&&Y.tick(et),{promise:new Promise(r=>{Y.tasks.add(e={c:t,f:r})}),abort(){Y.tasks.delete(e)}}}function Ie(t,e){t.dispatchEvent(new CustomEvent(e))}function Wt(t){if(t==="float")return"cssFloat";if(t==="offset")return"cssOffset";if(t.startsWith("--"))return t;const e=t.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function Me(t){const e={},r=t.split(";");for(const a of r){const[n,s]=a.split(":");if(!n||s===void 0)break;const i=Wt(n.trim());e[i]=s.trim()}return e}const Kt=t=>t;function Yt(t,e,r,a){var n=(t&At)!==0,s="in",i,p=e.inert,o,c;function l(){var m=Ue,y=oe;Le(null),Ne(null);try{return i??(i=r()(e,(a==null?void 0:a())??{},{direction:s}))}finally{Le(m),Ne(y)}}var g={is_global:n,in(){e.inert=p,o==null||o.abort(),Ie(e,"introstart"),o=tt(e,l(),c,1,()=>{Ie(e,"introend"),o==null||o.abort(),o=i=void 0})},out(m){{m==null||m(),i=void 0;return}},stop:()=>{o==null||o.abort()}},v=oe;if((v.transitions??(v.transitions=[])).push(g),Tt){var u=n;if(!u){for(var d=v.parent;d&&d.f&We;)for(;(d=d.parent)&&!(d.f&yt););u=!d||(d.f&xt)!==0}u&&Ke(()=>{Ye(()=>g.in())})}}function tt(t,e,r,a,n){if(Et(e)){var s,i=!1;return be(()=>{if(!i){var m=e({direction:"in"});s=tt(t,m,r,a,n)}}),{abort:()=>{i=!0,s==null||s.abort()},deactivate:()=>s.deactivate(),reset:()=>s.reset(),t:()=>s.t()}}if(!(e!=null&&e.duration))return n(),{abort:ee,deactivate:ee,reset:ee,t:()=>a};const{delay:p=0,css:o,tick:c,easing:l=Kt}=e;var g=[];if(c&&c(0,1),o){var v=Me(o(0,1));g.push(v,v)}var u=()=>1-a,d=t.animate(g,{duration:p});return d.onfinish=()=>{var m=1-a,y=a-m,f=e.duration*Math.abs(y),b=[];if(f>0){if(o)for(var A=Math.ceil(f/16.666666666666668),_=0;_<=A;_+=1){var x=m+y*l(_/A),C=o(x,1-x);b.push(Me(C))}u=()=>{var k=d.currentTime;return m+y*l(k/f)},c&&Ut(()=>{if(d.playState!=="running")return!1;var k=u();return c(k,1-k),!0})}d=t.animate(b,{duration:f,fill:"forwards"}),d.onfinish=()=>{u=()=>a,c==null||c(a,1-a),n()}},{abort:()=>{d&&(d.cancel(),d.effect=null,d.onfinish=ee)},deactivate:()=>{n=ee},reset:()=>{},t:()=>u()}}function Xt(t,e,r=e){var a=Ct();Re(t,"input",()=>{var n=ge(t)?me(t.value):t.value;r(n),a&&n!==(n=e())&&(t.value=n??"")}),Xe(()=>{var n=e();if(R&&t.defaultValue!==t.value){r(ge(t)?me(t.value):t.value);return}ge(t)&&n===me(t.value)||t.type==="date"&&!n&&!t.value||n!==t.value&&(t.value=n??"")})}const _e=new Set;function Oe(t,e,r,a,n=a){var s=r.getAttribute("type")==="checkbox",i=t;let p=!1;if(e!==null)for(var o of e)i=i[o]??(i[o]=[]);i.push(r),Re(r,"change",()=>{var c=r.__value;s&&(c=ze(i,c,r.checked)),n(c)},()=>n(s?[]:null)),Xe(()=>{var c=a();if(R&&r.defaultChecked!==r.checked){p=!0;return}s?(c=c||[],r.checked=c.includes(r.__value)):r.checked=zt(r.__value,c)}),kt(()=>{var c=i.indexOf(r);c!==-1&&i.splice(c,1)}),_e.has(i)||(_e.add(i),be(()=>{i.sort((c,l)=>c.compareDocumentPosition(l)===4?-1:1),_e.delete(i)})),be(()=>{if(p){var c;if(s)c=ze(i,c,r.checked);else{var l=i.find(g=>g.checked);c=l==null?void 0:l.__value}n(c)}})}function ze(t,e,r){for(var a=new Set,n=0;n<t.length;n+=1)t[n].checked&&a.add(t[n].__value);return r||a.delete(e),Array.from(a)}function ge(t){var e=t.type;return e==="number"||e==="range"}function me(t){return t===""?null:+t}var Jt=Be("<svg><!></svg>");function ue(t,e){Q(e,!1);let r=w(e,"icon",8),a=w(e,"width",8,"1em"),n=w(e,"height",8,"1em"),s=w(e,"class",8,void 0);ne();var i=Jt(),p=T(i);Ot(p,()=>r().body,!0,!1),I(i),U(()=>{re(i,"width",a()),re(i,"height",n()),Gt(i,s()),re(i,"viewBox",`0 0 ${r().width??""} ${r().height??""}`)}),E(t,i),Z()}var Qt=M('<div class="ripple-container broken svelte-1ddto75"></div> <div class="tint svelte-1ddto75"></div>',1);function Zt(t,e){Q(e,!1);let r=te([]);const a=i=>{i.classList.remove("broken");const p=i.parentElement,o=c=>{if(c.button!=0||p instanceof HTMLButtonElement&&p.disabled)return;if(p instanceof HTMLLabelElement){const _=p.control;if(_ instanceof HTMLInputElement&&_.disabled)return}if(p.classList.contains("layer-container")){const _=p.previousElementSibling;if(_ instanceof HTMLInputElement&&_.disabled)return}const l=p.getBoundingClientRect(),g=c.clientX-l.left,v=c.clientY-l.top,u=Math.hypot(Math.max(g,l.width-g),Math.max(v,l.height-v))*2.5,d=Math.max(Math.min(Math.log(u)*50,600),200),m=document.createElementNS("http://www.w3.org/2000/svg","radialGradient");m.id=`ripple-${Date.now()}`,[{offset:"0%",opacity:"0.12"},{offset:"70%",opacity:"0.12"},{offset:"100%",opacity:"0"}].forEach(({offset:_,opacity:x})=>{const C=document.createElementNS("http://www.w3.org/2000/svg","stop");C.setAttribute("offset",_),C.setAttribute("stop-color","currentColor"),C.setAttribute("stop-opacity",x),m.appendChild(C)});const f=document.createElementNS("http://www.w3.org/2000/svg","circle");f.setAttribute("cx",`${u/2}`),f.setAttribute("cy",`${u/2}`),f.setAttribute("r","0"),f.setAttribute("fill",`url(#${m.id})`);const b=document.createElementNS("http://www.w3.org/2000/svg","animate");b.setAttribute("attributeName","r"),b.setAttribute("from","0"),b.setAttribute("to",`${u/2}`),b.setAttribute("dur",`${d}ms`),b.setAttribute("fill","freeze"),b.setAttribute("calcMode","spline"),b.setAttribute("keySplines","0.4 0, 0.2 1"),f.appendChild(b);const A=document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.style.cssText=`
        position: absolute;
        left: ${g-u/2}px;
        top: ${v-u/2}px;
        width: ${u}px;
        height: ${u}px;
        pointer-events: none;
        overflow: visible;
      `,A.appendChild(m),A.appendChild(f),!navigator.userAgent.includes("Firefox")&&!navigator.userAgent.includes("Safari")&&u>100){const _=document.createElementNS("http://www.w3.org/2000/svg","filter");_.id=`noise-${Date.now()}`;const x=document.createElementNS("http://www.w3.org/2000/svg","feTurbulence");x.setAttribute("type","fractalNoise"),x.setAttribute("baseFrequency","0.6"),x.setAttribute("seed",Math.random().toString());const C=document.createElementNS("http://www.w3.org/2000/svg","feDisplacementMap");C.setAttribute("in","SourceGraphic"),C.setAttribute("in2","turbulence"),C.setAttribute("scale",`${u**2*2e-4}`),C.setAttribute("xChannelSelector","R"),C.setAttribute("yChannelSelector","B"),_.appendChild(x),_.appendChild(C),f.setAttribute("filter",`url(#${_.id})`),A.appendChild(_)}i.appendChild(A),L(r).push(()=>{const _=document.createElementNS("http://www.w3.org/2000/svg","animate");_.setAttribute("attributeName","opacity"),_.setAttribute("from","1"),_.setAttribute("to","0"),_.setAttribute("dur","800ms"),_.setAttribute("fill","freeze"),_.setAttribute("calcMode","spline"),_.setAttribute("keySplines","0.4 0, 0.2 1"),f.appendChild(_),_.beginElement(),setTimeout(()=>A.remove(),800)})};return p.addEventListener("pointerdown",o),{destroy(){p.removeEventListener("pointerdown",o)}}};ne();var n=Qt();De("pointerup",Lt,()=>{L(r).forEach(i=>i()),H(r,[])});var s=V(n);je(s,i=>a(i)),le(2),E(t,n),Z()}var jt=M('<div class="tint svelte-knal2s"></div>');function $t(t){var e=jt();E(t,e)}function er(t,e){Q(e,!1);let r=te($t);typeof M3_SVELTE_NO_RIPPLE>"u"&&(typeof window>"u"||!window.matchMedia("(prefers-reduced-motion: reduce)").matches)&&H(r,Zt),ne();var a=J(),n=V(a);Qe(n,()=>L(r),(s,i)=>{i(s,{})}),E(t,a),Z()}var tr=M("<div><!></div>");function rr(t,e){let r=w(e,"display",8,"inline-flex"),a=w(e,"extraOptions",24,()=>({}));var n=tr();let s;var i=T(n);Ee(i,e,"default",{}),I(n),U(()=>s=ae(n,s,{class:"m3-container",style:`display: ${r()??""};`,...a()},"svelte-1xnzut7")),E(t,n)}const ar={width:24,height:24,body:'<path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/>'};var nr=M('<div class="custom icon svelte-1hzdwrv"><!></div>'),ir=M('<div class="end-pad pad svelte-1hzdwrv"></div>'),sr=M('<label><!> <!> <div class="check icon svelte-1hzdwrv"><!></div> <div class="start-pad pad svelte-1hzdwrv"></div> <!> <!></label>');function Pe(t,e){let r=w(e,"display",8,"flex"),a=w(e,"extraOptions",24,()=>({})),n=w(e,"input",8),s=w(e,"icon",8,void 0);var i=sr();let p;var o=T(i);er(o,{});var c=O(o,2);B(c,s,d=>{var m=nr(),y=T(m);ue(y,{get icon(){return s()}}),I(m),E(d,m)});var l=O(c,2),g=T(l);ue(g,{icon:ar}),I(l);var v=O(l,4);Ee(v,e,"default",{});var u=O(v,2);B(u,()=>!s(),d=>{var m=ir();E(d,m)}),I(i),U(()=>p=ae(i,p,{for:n(),class:"m3-font-label-large",style:`display: ${r()??""}; overflow: hidden;`,...a()},"svelte-1hzdwrv")),E(t,i)}var lr=M("<div><!></div>");function or(t,e){let r=w(e,"display",8,"flex"),a=w(e,"extraOptions",24,()=>({})),n=w(e,"type",8);var s=lr();let i;var p=T(s);Ee(p,e,"default",{}),I(s),U(()=>i=ae(s,i,{class:`m3-container type-${n()??""}`,style:`display: ${r()??""};`,...a()},"svelte-aqp8n4")),E(t,s)}const cr=t=>t;function ur(t,{delay:e=0,duration:r=400,easing:a=cr}={}){const n=+getComputedStyle(t).opacity;return{delay:e,duration:r,easing:a,css:s=>`opacity: ${s*n}`}}var dr=Be('<svg><circle cx="24" cy="24" r="20" stroke="rgb(var(--m3-scheme-primary))" stroke-width="4" stroke-dasharray="125.66 125.66" stroke-linecap="round" fill="none" class="svelte-5nogo2"></circle></svg>');function vr(t,e){let r=w(e,"display",8,"inline-flex"),a=w(e,"extraOptions",24,()=>({}));var n=dr();let s;U(()=>s=ae(n,s,{viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",class:"m3-container",style:`display: ${r()??""};`,role:"progressbar",...a()},"svelte-5nogo2",!0)),E(t,n)}var fr=M('<button class="trailing svelte-bpw5x"><!></button>'),pr=M('<div><input> <div class="layer svelte-bpw5x"></div> <label class="m3-font-body-large svelte-bpw5x"> </label> <!> <!></div>');function hr(t,e){Q(e,!1);let r=w(e,"display",8,"inline-flex"),a=w(e,"extraWrapperOptions",24,()=>({})),n=w(e,"extraOptions",24,()=>({})),s=w(e,"name",8),i=w(e,"leadingIcon",8,void 0),p=w(e,"trailingIcon",8,void 0),o=w(e,"disabled",8,!1),c=w(e,"required",8,!1),l=w(e,"error",8,!1),g=w(e,"value",12,"");const v=It(),u=crypto.randomUUID();ne();var d=pr();let m;var y=T(d);we(y);let f;var b=O(y,4);re(b,"for",u);var A=T(b,!0);I(b);var _=O(b,2);B(_,i,C=>{ue(C,{get icon(){return i()},class:"leading"})});var x=O(_,2);B(x,p,C=>{var k=fr(),F=T(k);ue(F,{get icon(){return p()}}),I(k),De("click",k,()=>v("trailingClick")),E(C,k)}),I(d),U(()=>{m=ae(d,m,{class:"m3-container",style:`display: ${r()??""}`,...a()},"svelte-bpw5x"),he(d,"leading-icon",i()),he(d,"trailing-icon",p()),he(d,"error",l()),f=ae(y,f,{class:"m3-font-body-large",placeholder:" ",id:u,disabled:o(),required:c(),...n()},"svelte-bpw5x"),ce(A,s())}),Xt(y,g),E(t,d),Z()}var _r=M("<div> </div>"),gr=M("<div><!></div>");function He(t,e){Q(e,!0);let r=w(e,"placeholder",3,null),a=w(e,"placeholderProps",3,null);const n="svelte-lazy-placeholder";var s=J(),i=V(s);B(i,r,p=>{var o=gr();ye(o,n);var c=T(o);B(c,()=>typeof r()=="string",l=>{var g=_r(),v=T(g,!0);I(g),U(()=>ce(v,r())),E(l,g)},l=>{var g=J(),v=V(g);B(v,()=>["function","object"].includes(typeof r()),u=>{var d=J();const m=Je(r);var y=V(d);Qe(y,()=>L(m),(f,b)=>{b(f,Pt(a))}),E(u,d)},null,!0),E(l,g)}),I(o),E(p,o)}),E(t,s),Z()}var mr=M("<div><!></div> <!>",1),br=M("<div><!></div>");function wr(t,e){Q(e,!0);let r=w(e,"keep",3,!1),a=w(e,"height",3,0),n=w(e,"offset",3,150),s=w(e,"fadeOption",19,()=>({delay:0,duration:400})),i=w(e,"resetHeightDelay",3,0),p=w(e,"onload",3,null),o=w(e,"placeholder",3,null),c=w(e,"placeholderProps",3,null),l=w(e,"class",3,"");const g="svelte-lazy"+(l()?" "+l():""),v="svelte-lazy-content",u=F();let d=Se(!1),m=Se(!0),y=Je(()=>L(m)?"":"display: none");function f(h){q(h);const N=b(h);C(N),setTimeout(()=>{N()});const S=A(h);return{destroy:()=>{k(N),S.unobserve(h)}}}function b(h){return nt(S=>{const z=h.getBoundingClientRect().top,W=h.getBoundingClientRect().bottom,G=at(S)+n();z<=G&&W>0?x(h):r()||_(h)},200)}function A(h,N){const S=new IntersectionObserver(z=>{z[0].isIntersecting&&x(h)});return S.observe(h),S}function _(h){q(h),H(d,!1)}function x(h,N){L(d)||(H(d,!0),de(h),p()&&p()(h))}function C(h){document.addEventListener("scroll",h,!0),window.addEventListener("resize",h)}function k(h){document.removeEventListener("scroll",h,!0),window.removeEventListener("resize",h)}function F(){return typeof a()=="number"?a()+"px":a()}function q(h){a()&&(h.style.height=F())}function de(h){setTimeout(()=>{rt(h)||(h.style.height="auto")},i())}function rt(h){const N=h.querySelector("img");return N?N.complete?N.naturalHeight===0:(H(m,!1),h.addEventListener("load",()=>{H(m,!0),h.style.height="auto"},{capture:!0,once:!0}),h.addEventListener("error",()=>{H(m,!0)},{capture:!0,once:!0}),!0):!1}function at(h){var N;return(N=h==null?void 0:h.target)!=null&&N.getBoundingClientRect?h.target.getBoundingClientRect().bottom:window.innerHeight}function nt(h,N,S){let z,W,G,P=null,X=0;S||(S={});const st=function(){X=S.leading===!1?0:new Date,P=null,G=h.apply(z,W),P||(z=W=null)};return function(Lr){const ve=new Date;!X&&S.leading===!1&&(X=ve);const fe=N-(ve-X);return z=this,W=arguments,fe<=0||fe>N?(P&&(clearTimeout(P),P=null),X=ve,G=h.apply(z,W),P||(z=W=null)):!P&&S.trailing!==!1&&(P=setTimeout(st,fe)),G}}var j=br();ye(j,g),re(j,"style",`height: ${u??""}`);var it=T(j);B(it,()=>L(d),h=>{var N=mr(),S=V(N);ye(S,v);var z=T(S);B(z,()=>e.children,G=>{var P=J(),X=V(P);qt(X,()=>e.children),E(G,P)},G=>{var P=ie("Lazy load content");E(G,P)}),I(S);var W=O(S,2);B(W,()=>!L(m)&&o(),G=>{He(G,{get placeholder(){return o()},get placeholderProps(){return c()}})}),U(()=>re(S,"style",L(y))),Yt(1,S,()=>ur,()=>s()||{}),E(h,N)},h=>{var N=J(),S=V(N);B(S,o,z=>{He(z,{get placeholder(){return o()},get placeholderProps(){return c()}})},null,!0),E(h,N)}),I(j),je(j,h=>f(h)),E(t,j),Z()}var yr=M('<div><img src="favicon.png"> <p1>Ensipedia</p1></div>');function xr(t,e){w(e,"title",8,"Ensipedia"),w(e,"icon",8,"favicon.png");var r=yr();D(r,"text-align","center"),D(r,"margin-bottom","8px");var a=T(r);D(a,"width","64px"),D(a,"vertical-align","middle"),D(a,"margin-right","8px");var n=O(a,2);D(n,"font-size","30px"),D(n,"vertical-align","middle"),I(r),E(t,r)}var Er=M('<input type="radio" id="words"> <!> <input type="radio" id="verbs"> <!>',1),Ar=M("<br><p1> </p1>",1),Cr=M("<div><!></div>"),kr=M("<div><!> <!> <!> <!> <div><!></div></div>");function Pr(t,e){Q(e,!1);const r=[];let a=te(),n=te("words"),s=te(""),i=te();Mt(async()=>{H(n,url.searchParams.get("category")||L(n));const p=await fetch("./data.json");H(a,await p.json())}),Nt(()=>(L(a),L(n),L(s)),()=>{var p,o,c;H(i,((c=(o=(p=L(a))==null?void 0:p[L(n)])==null?void 0:o.filter)==null?void 0:c.call(o,l=>l.toLowerCase().includes(L(s).toLowerCase())))??[])}),St(),ne(),wr(t,{children:(p,o)=>{var c=kr();D(c,"text-align","center");var l=T(c);xr(l,{});var g=O(l,2);hr(g,{get value(){return L(s)},set value(y){H(s,y)},name:"Search",$$legacy:!0});var v=O(g,2);rr(v,{children:(y,f)=>{var b=Er(),A=V(b);we(A),A.value=(A.__value="words")==null?"":"words";var _=O(A,2);Pe(_,{input:"words",children:(k,F)=>{le();var q=ie("Words");E(k,q)},$$slots:{default:!0}});var x=O(_,2);we(x),x.value=(x.__value="verbs")==null?"":"verbs";var C=O(x,2);Pe(C,{input:"verbs",children:(k,F)=>{le();var q=ie("Verbs");E(k,q)},$$slots:{default:!0}}),Oe(r,[],A,()=>L(n),k=>H(n,k)),Oe(r,[],x,()=>L(n),k=>H(n,k)),E(y,b)},$$slots:{default:!0}});var u=O(v,2);B(u,()=>L(a)!=null,y=>{var f=Ar(),b=O(V(f));D(b,"text-align","left");var A=T(b,!0);I(b),U(()=>ce(A,L(i).length?`${L(i).length} items shown`:"No matches")),E(y,f)});var d=O(u,2);D(d,"margin","8px 0px 8px 0px");var m=T(d);B(m,()=>L(a)==null,y=>{vr(y,{})},y=>{var f=J(),b=V(f);Bt(b,1,()=>L(i),Ht,(A,_)=>{var x=Cr();D(x,"text-align","left"),D(x,"margin","8px 0px 8px 0px");var C=T(x);or(C,{type:"outlined",children:(k,F)=>{le();var q=ie();U(()=>ce(q,L(_))),E(k,q)},$$slots:{default:!0}}),I(x),E(A,x)}),E(y,f)}),I(d),I(c),E(p,c)},$$slots:{default:!0}}),Z()}export{Pr as component};
