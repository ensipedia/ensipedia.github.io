var Ot=Array.isArray,Ct=Array.from,Nt=Object.defineProperty,_n=Object.getOwnPropertyDescriptor,zn=Object.getOwnPropertyDescriptors,bt=Object.prototype,qt=Array.prototype,Jn=Object.getPrototypeOf;const Pt=()=>{};function Ft(n){return typeof(n==null?void 0:n.then)=="function"}function Lt(n){return n()}function dn(n){for(var t=0;t<n.length;t++)n[t]()}const y=2,En=4,H=8,en=16,g=32,z=64,S=128,V=256,p=512,k=1024,b=2048,N=4096,j=8192,Wn=16384,yn=32768,Mt=65536,Xn=1<<18,wn=1<<19,cn=Symbol("$state"),Yt=Symbol("legacy props"),Ht=Symbol("");function Tn(n){return n===this.v}function Qn(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function mn(n){return!Qn(n,this.v)}function nt(n){throw new Error("effect_in_teardown")}function tt(){throw new Error("effect_in_unowned_derived")}function rt(n){throw new Error("effect_orphan")}function et(){throw new Error("effect_update_depth_exceeded")}function jt(){throw new Error("hydration_failed")}function Bt(n){throw new Error("props_invalid_value")}function Ut(){throw new Error("state_descriptors_fixed")}function Vt(){throw new Error("state_prototype_fixed")}function st(){throw new Error("state_unsafe_local_read")}function at(){throw new Error("state_unsafe_mutation")}let J=!1;function Gt(){J=!0}function sn(n){return{f:0,v:n,reactions:null,equals:Tn,version:0}}function Kt(n){return gn(sn(n))}function lt(n,t=!1){var e;const r=sn(n);return t||(r.equals=mn),J&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function $t(n,t=!1){return gn(lt(n,t))}function gn(n){return o!==null&&o.f&y&&(m===null?mt([n]):m.push(n)),n}function ut(n,t){return o!==null&&on()&&o.f&(y|en)&&(m===null||!m.includes(n))&&at(),ot(n,t)}function ot(n,t){return n.equals(t)||(n.v=t,n.version=Un(),An(n,k),on()&&u!==null&&u.f&p&&!(u.f&g)&&(c!==null&&c.includes(n)?(T(u,k),W(u)):A===null?gt([n]):A.push(n))),t}function An(n,t){var r=n.reactions;if(r!==null)for(var e=on(),s=r.length,a=0;a<s;a++){var l=r[a],i=l.f;i&k||!e&&l===u||(T(l,t),i&(p|S)&&(i&y?An(l,b):W(l)))}}const Zt=1,zt=2,Jt=16,Wt=1,Xt=2,Qt=4,nr=8,tr=16,rr=1,er=2,it="[",ft="[!",_t="]",kn={},sr=Symbol();function In(n){console.warn("hydration_mismatch")}let R=!1;function ar(n){R=n}let w;function L(n){if(n===null)throw In(),kn;return w=n}function lr(){return L(x(w))}function ur(n){if(R){if(x(w)!==null)throw In(),kn;w=n}}function or(n=1){if(R){for(var t=n,r=w;t--;)r=x(r);w=r}}function ir(){for(var n=0,t=w;;){if(t.nodeType===8){var r=t.data;if(r===_t){if(n===0)return t;n-=1}else(r===it||r===ft)&&(n+=1)}var e=x(t);t.remove(),t=e}}var vn,Rn,Sn;function fr(){if(vn===void 0){vn=window;var n=Element.prototype,t=Node.prototype;Rn=_n(t,"firstChild").get,Sn=_n(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function X(n=""){return document.createTextNode(n)}function Q(n){return Rn.call(n)}function x(n){return Sn.call(n)}function _r(n,t){if(!R)return Q(n);var r=Q(w);if(r===null)r=w.appendChild(X());else if(t&&r.nodeType!==3){var e=X();return r==null||r.before(e),L(e),e}return L(r),r}function cr(n,t){if(!R){var r=Q(n);return r instanceof Comment&&r.data===""?x(r):r}return w}function vr(n,t=1,r=!1){let e=R?w:n;for(var s;t--;)s=e,e=x(e);if(!R)return e;var a=e==null?void 0:e.nodeType;if(r&&a!==3){var l=X();return e===null?s==null||s.after(l):e.before(l),L(l),l}return L(e),e}function pr(n){n.textContent=""}function ct(n){var t=y|k;u===null?t|=S:u.f|=wn;var r=o!==null&&o.f&y?o:null;const e={children:null,ctx:f,deps:null,equals:Tn,f:t,fn:n,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function hr(n){const t=ct(n);return t.equals=mn,t}function xn(n){var t=n.children;if(t!==null){n.children=null;for(var r=0;r<t.length;r+=1){var e=t[r];e.f&y?an(e):P(e)}}}function vt(n){for(var t=n.parent;t!==null;){if(!(t.f&y))return t;t=t.parent}return null}function Dn(n){var t,r=u;Z(vt(n));try{xn(n),t=Vn(n)}finally{Z(r)}return t}function On(n){var t=Dn(n),r=(D||n.f&S)&&n.deps!==null?b:p;T(n,r),n.equals(t)||(n.v=t,n.version=Un())}function an(n){xn(n),Y(n,0),T(n,j),n.v=n.children=n.deps=n.ctx=n.reactions=null}function Cn(n){u===null&&o===null&&rt(),o!==null&&o.f&S&&tt(),un&&nt()}function pt(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function q(n,t,r,e=!0){var s=(n&z)!==0,a=u,l={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:n|k,first:null,fn:t,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var i=O;try{pn(!0),B(l),l.f|=Wn}catch(_){throw P(l),_}finally{pn(i)}}else t!==null&&W(l);var E=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&wn)===0;if(!E&&!s&&e&&(a!==null&&pt(l,a),o!==null&&o.f&y)){var h=o;(h.children??(h.children=[])).push(l)}return l}function dr(n){const t=q(H,null,!1);return T(t,p),t.teardown=n,t}function Er(n){Cn();var t=u!==null&&(u.f&g)!==0&&f!==null&&!f.m;if(t){var r=f;(r.e??(r.e=[])).push({fn:n,effect:u,reaction:o})}else{var e=Nn(n);return e}}function yr(n){return Cn(),ln(n)}function wr(n){const t=q(z,n,!0);return()=>{P(t)}}function Nn(n){return q(En,n,!1)}function Tr(n,t){var r=f,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=ln(()=>{n(),!e.ran&&(e.ran=!0,ut(r.l.r2,!0),xt(t))})}function mr(){var n=f;ln(()=>{if(St(n.l.r2)){for(var t of n.l.r1){var r=t.effect;r.f&p&&T(r,b),F(r)&&B(r),t.ran=!1}n.l.r2.v=!1}})}function ln(n){return q(H,n,!0)}function gr(n){return ht(n)}function ht(n,t=0){return q(H|en|t,n,!0)}function Ar(n,t=!0){return q(H|g,n,!0,t)}function bn(n){var t=n.teardown;if(t!==null){const r=un,e=o;hn(!0),$(null);try{t.call(null)}finally{hn(r),$(e)}}}function qn(n){var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)an(t[r])}}function Pn(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;P(r,t),r=e}}function dt(n){for(var t=n.first;t!==null;){var r=t.next;t.f&g||P(t),t=r}}function P(n,t=!0){var r=!1;if((t||n.f&Xn)&&n.nodes_start!==null){for(var e=n.nodes_start,s=n.nodes_end;e!==null;){var a=e===s?null:x(e);e.remove(),e=a}r=!0}Pn(n,t&&!r),qn(n),Y(n,0),T(n,j);var l=n.transitions;if(l!==null)for(const E of l)E.stop();bn(n);var i=n.parent;i!==null&&i.first!==null&&Fn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.parent=n.fn=n.nodes_start=n.nodes_end=null}function Fn(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function kr(n,t){var r=[];Ln(n,r,!0),Et(r,()=>{P(n),t&&t()})}function Et(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var s of n)s.out(e)}else t()}function Ln(n,t,r){if(!(n.f&N)){if(n.f^=N,n.transitions!==null)for(const l of n.transitions)(l.is_global||r)&&t.push(l);for(var e=n.first;e!==null;){var s=e.next,a=(e.f&yn)!==0||(e.f&g)!==0;Ln(e,t,a?r:!1),e=s}}}function Ir(n){Mn(n,!0)}function Mn(n,t){if(n.f&N){F(n)&&B(n),n.f^=N;for(var r=n.first;r!==null;){var e=r.next,s=(r.f&yn)!==0||(r.f&g)!==0;Mn(r,s?t:!1),r=e}if(n.transitions!==null)for(const a of n.transitions)(a.is_global||t)&&a.in()}}const yt=typeof requestIdleCallback>"u"?n=>setTimeout(n,1):requestIdleCallback;let G=!1,K=!1,nn=[],tn=[];function Yn(){G=!1;const n=nn.slice();nn=[],dn(n)}function Hn(){K=!1;const n=tn.slice();tn=[],dn(n)}function Rr(n){G||(G=!0,queueMicrotask(Yn)),nn.push(n)}function Sr(n){K||(K=!0,yt(Hn)),tn.push(n)}function wt(){G&&Yn(),K&&Hn()}const jn=0,Tt=1;let U=jn,M=!1,O=!1,un=!1;function pn(n){O=n}function hn(n){un=n}let I=[],C=0;let o=null;function $(n){o=n}let u=null;function Z(n){u=n}let m=null;function mt(n){m=n}let c=null,d=0,A=null;function gt(n){A=n}let Bn=0,D=!1,f=null;function xr(n){f=n}function Un(){return++Bn}function on(){return!J||f!==null&&f.l===null}function F(n){var l,i;var t=n.f;if(t&k)return!0;if(t&b){var r=n.deps,e=(t&S)!==0;if(r!==null){var s;if(t&V){for(s=0;s<r.length;s++)((l=r[s]).reactions??(l.reactions=[])).push(n);n.f^=V}for(s=0;s<r.length;s++){var a=r[s];if(F(a)&&On(a),e&&u!==null&&!D&&!((i=a==null?void 0:a.reactions)!=null&&i.includes(n))&&(a.reactions??(a.reactions=[])).push(n),a.version>n.version)return!0}}e||T(n,p)}return!1}function At(n,t,r){throw n}function Vn(n){var fn;var t=c,r=d,e=A,s=o,a=D,l=m,i=f,E=n.f;c=null,d=0,A=null,o=E&(g|z)?null:n,D=!O&&(E&S)!==0,m=null,f=n.ctx;try{var h=(0,n.fn)(),_=n.deps;if(c!==null){var v;if(Y(n,d),_!==null&&d>0)for(_.length=d+c.length,v=0;v<c.length;v++)_[d+v]=c[v];else n.deps=_=c;if(!D)for(v=d;v<_.length;v++)((fn=_[v]).reactions??(fn.reactions=[])).push(n)}else _!==null&&d<_.length&&(Y(n,d),_.length=d);return h}finally{c=t,d=r,A=e,o=s,D=a,m=l,f=i}}function kt(n,t){let r=t.reactions;if(r!==null){var e=r.indexOf(n);if(e!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[e]=r[s],r.pop())}}r===null&&t.f&y&&(c===null||!c.includes(t))&&(T(t,b),t.f&(S|V)||(t.f^=V),Y(t,0))}function Y(n,t){var r=n.deps;if(r!==null)for(var e=t;e<r.length;e++)kt(n,r[e])}function B(n){var t=n.f;if(!(t&j)){T(n,p);var r=u;u=n;try{t&en?dt(n):Pn(n),qn(n),bn(n);var e=Vn(n);n.teardown=typeof e=="function"?e:null,n.version=Bn}catch(s){At(s)}finally{u=r}}}function Gn(){C>1e3&&(C=0,et()),C++}function Kn(n){var t=n.length;if(t!==0){Gn();var r=O;O=!0;try{for(var e=0;e<t;e++){var s=n[e];s.f&p||(s.f^=p);var a=[];$n(s,a),It(a)}}finally{O=r}}}function It(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];!(e.f&(j|N))&&F(e)&&(B(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Fn(e):e.fn=null))}}function Rt(){if(M=!1,C>1001)return;const n=I;I=[],Kn(n),M||(C=0)}function W(n){U===jn&&(M||(M=!0,queueMicrotask(Rt)));for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&(z|g)){if(!(r&p))return;t.f^=p}}I.push(t)}function $n(n,t){var r=n.first,e=[];n:for(;r!==null;){var s=r.f,a=(s&g)!==0,l=a&&(s&p)!==0;if(!l&&!(s&N))if(s&H){a?r.f^=p:F(r)&&B(r);var i=r.first;if(i!==null){r=i;continue}}else s&En&&e.push(r);var E=r.next;if(E===null){let v=r.parent;for(;v!==null;){if(n===v)break n;var h=v.next;if(h!==null){r=h;continue n}v=v.parent}}r=E}for(var _=0;_<e.length;_++)i=e[_],t.push(i),$n(i,t)}function Zn(n){var t=U,r=I;try{Gn();const s=[];U=Tt,I=s,M=!1,Kn(r);var e=n==null?void 0:n();return wt(),(I.length>0||s.length>0)&&Zn(),C=0,e}finally{U=t,I=r}}async function Dr(){await Promise.resolve(),Zn()}function St(n){var _;var t=n.f,r=(t&y)!==0;if(r&&t&j){var e=Dn(n);return an(n),e}if(o!==null){m!==null&&m.includes(n)&&st();var s=o.deps;c===null&&s!==null&&s[d]===n?d++:c===null?c=[n]:c.push(n),A!==null&&u!==null&&u.f&p&&!(u.f&g)&&A.includes(n)&&(T(u,k),W(u))}else if(r&&n.deps===null)for(var a=n,l=a.parent,i=a;l!==null;)if(l.f&y){var E=l;i=E,l=E.parent}else{var h=l;(_=h.deriveds)!=null&&_.includes(i)||(h.deriveds??(h.deriveds=[])).push(i);break}return r&&(a=n,F(a)&&On(a)),n.v}function xt(n){const t=o;try{return o=null,n()}finally{o=t}}const Dt=~(k|b|p);function T(n,t){n.f=n.f&Dt|t}function Or(n,t=!1,r){f={p:f,c:null,e:null,m:!1,s:n,x:null,l:null},J&&!t&&(f.l={s:null,u:null,r1:[],r2:sn(!1)})}function Cr(n){const t=f;if(t!==null){const l=t.e;if(l!==null){var r=u,e=o;t.e=null;try{for(var s=0;s<l.length;s++){var a=l[s];Z(a.effect),$(a.reaction),Nn(a.fn)}}finally{Z(r),$(e)}}f=t.p,t.m=!0}return{}}function Nr(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(cn in n)rn(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&cn in r&&rn(r)}}}function rn(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let e in n)try{rn(n[e],t)}catch{}const r=Jn(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=zn(r);for(let s in e){const a=e[s].get;if(a)try{a.call(n)}catch{}}}}}export{hr as $,bt as A,qt as B,sn as C,Ut as D,ut as E,_n as F,St as G,it as H,Vt as I,Jn as J,Ot as K,Bt as L,Mt as M,mn as N,xt as O,Qt as P,g as Q,z as R,cn as S,Z as T,sr as U,Wt as V,J as W,Xt as X,nr as Y,Yt as Z,ct as _,x as a,tr as a0,lt as a1,yr as a2,Er as a3,Lt as a4,dn as a5,Nr as a6,Gt as a7,ht as a8,P as a9,Ft as aA,ot as aB,xr as aC,N as aD,Ln as aE,Et as aF,zt as aG,Zt as aH,Jt as aI,or as aJ,vn as aK,Qn as aL,Ht as aa,zn as ab,Sr as ac,Ir as ad,kr as ae,yn as af,ft as ag,ir as ah,Tr as ai,mr as aj,$t as ak,Nn as al,ln as am,Rr as an,Zn as ao,Nt as ap,Kt as aq,Dr as ar,$ as as,o as at,dr as au,Xn as av,rr as aw,er as ax,Pt as ay,on as az,kn as b,L as c,w as d,_t as e,In as f,Q as g,lr as h,fr as i,jt as j,pr as k,Ct as l,wr as m,X as n,Ar as o,Or as p,R as q,u as r,ar as s,Cr as t,f as u,cr as v,gr as w,_r as x,ur as y,vr as z};
