import{q as v,u as k,d as h,t as C}from"../chunks/disclose-version.BJhuGgM0.js";import{i as b}from"../chunks/legacy.1U63oBV4.js";import{q as w,ae as P,af as T,v as d,t as V,w as y,z as S,N as j,ag as O,K as L,ac as g}from"../chunks/runtime.hPq_haoC.js";import{s as $}from"../chunks/slot.B2pOfcTC.js";import{p as f}from"../chunks/props.LCNRqV9t.js";import{h as x,s as p}from"../chunks/attributes.B4vH-xAg.js";const B=!0,G=Object.freeze(Object.defineProperty({__proto__:null,prerender:B},Symbol.toStringTag,{value:"Module"})),E=(n,e)=>{const r=(t,o)=>{const c=t.replace(/[A-Z]/g,_=>`-${_.toLowerCase()}`),s=o>>16&255,m=o>>8&255,u=o&255;return`--m3-scheme-${c}: ${s} ${m} ${u};`},a=Object.entries(n).map(([t,o])=>r(t,o)).join(`
`),i=Object.entries(e).map(([t,o])=>r(t,o)).join(`
`);return`
:root {
  accent-color: rgb(var(--m3-scheme-primary));
}
@media (prefers-color-scheme: light) {
  :root {
    color-scheme: light;
  }
  :root, ::backdrop {
${a}
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
  }
  :root, ::backdrop {
${i}
  }
}`};var H=C('<meta name="theme-color"> <meta name="theme-color" media="(prefers-color-scheme: dark)">',1);function q(n,e){w(e,!1);const r=O();let a=f(e,"lightScheme",8),i=f(e,"darkScheme",8);const l=c=>"#"+((c&16777215)+16777216).toString(16).slice(1);P(()=>(g(a()),g(i())),()=>{L(r,E(a(),i()))}),T(),b();var t=v();k(c=>{var s=H(),m=d(s);y(()=>p(m,"content",l(a().primary)));var u=S(m,2);y(()=>p(u,"content",l(i().primary))),h(c,s)});var o=d(t);x(o,()=>`<style>${j(r)}</style>`,!1,!1),h(n,t),V()}function z(n,e){let r=f(e,"lightScheme",8),a=f(e,"darkScheme",8);q(n,{get lightScheme(){return r()},get darkScheme(){return a()}})}var D=C("<!> <!>",1);function I(n,e){var r=D(),a=d(r);z(a,{lightScheme:{primary:4281023052,onPrimary:4294967295,primaryContainer:4282536292,onPrimaryContainer:4290036954,inversePrimary:4290300126,secondary:4284047207,onSecondary:4294967295,secondaryContainer:4292600042,onSecondaryContainer:4284310380,tertiary:4282790470,onTertiary:4294967295,tertiaryContainer:4284369246,onTertiaryContainer:4292197075,error:4290386458,onError:4294967295,errorContainer:4294957782,onErrorContainer:4287823882,background:4294703610,onBackground:4279966493,surface:4294703610,onSurface:4279966493,surfaceVariant:4292928233,onSurfaceVariant:4282664780,inverseSurface:4281348146,inverseOnSurface:4294111474,outline:4285822845,outlineVariant:4291086029,shadow:4278190080,scrim:4278190080,surfaceDim:4292598235,surfaceBright:4294703610,surfaceContainerLowest:4294967295,surfaceContainerLow:4294308852,surfaceContainer:4293914095,surfaceContainerHigh:4293584873,surfaceContainerHighest:4293190371,surfaceTint:4283457651},darkScheme:{primary:4290300126,onPrimary:4280430915,primaryContainer:4282536292,onPrimaryContainer:4290036954,inversePrimary:4283457651,secondary:4290955217,onSecondary:4281020729,secondaryContainer:4282665298,onSecondaryContainer:4289968578,tertiary:4292525783,onTertiary:4282198590,tertiaryContainer:4284369246,onTertiaryContainer:4292197075,error:4294948011,onError:4285071365,errorContainer:4287823882,onErrorContainer:4294957782,background:4279440149,onBackground:4293190371,surface:4279440149,onSurface:4293190371,surfaceVariant:4282664780,onSurfaceVariant:4291086029,inverseSurface:4293190371,inverseOnSurface:4281348146,outline:4287533463,outlineVariant:4282664780,shadow:4278190080,scrim:4278190080,surfaceDim:4279440149,surfaceBright:4281940282,surfaceContainerLowest:4279045647,surfaceContainerLow:4279966493,surfaceContainer:4280229921,surfaceContainerHigh:4280887851,surfaceContainerHighest:4281611574,surfaceTint:4290300126}});var i=S(a,2);$(i,e,"default",{}),h(n,r)}export{I as component,G as universal};
