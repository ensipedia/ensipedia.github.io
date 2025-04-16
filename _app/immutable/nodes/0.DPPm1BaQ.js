import{f as v,g as k,d as h,t as p}from"../chunks/dVFLX6Ad.js";import{i as b}from"../chunks/iueBTBl1.js";import{p as T,a7 as w,a8 as P,a2 as y,u as V,J as j,T as O,a0 as g,a6 as S,a3 as L,D as $,F as x}from"../chunks/fOv5gvNr.js";import{h as B,a as C,b as E}from"../chunks/De9VMb6N.js";import{p as f}from"../chunks/CVCPGu8T.js";const H=!0,K=Object.freeze(Object.defineProperty({__proto__:null,prerender:H},Symbol.toStringTag,{value:"Module"})),D=(t,e)=>{const r=(n,o)=>{const s=n.replace(/[A-Z]/g,d=>`-${d.toLowerCase()}`),c=o>>16&255,m=o>>8&255,u=o&255;return`--m3-scheme-${s}: ${c} ${m} ${u};`},a=Object.entries(t).map(([n,o])=>r(n,o)).join(`
`),i=Object.entries(e).map(([n,o])=>r(n,o)).join(`
`);return`@media (prefers-color-scheme: light) {
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
}`};var F=p('<meta name="theme-color"> <meta name="theme-color" media="(prefers-color-scheme: dark)">',1);function q(t,e){T(e,!1);const r=O();let a=f(e,"lightScheme",8),i=f(e,"darkScheme",8);const l=s=>"#"+((s&16777215)+16777216).toString(16).slice(1);w(()=>(g(a()),g(i())),()=>{j(r,D(a(),i()))}),P(),b();var n=v();k(s=>{var c=F(),m=y(c),u=S(m,2);L((d,_)=>{C(m,"content",d),C(u,"content",_)},[()=>l(a().primary),()=>l(i().primary)],$),h(s,c)});var o=y(n);B(o,()=>`<style>${x(r)}</style>`,!1,!1),h(t,n),V()}function z(t,e){let r=f(e,"lightScheme",8),a=f(e,"darkScheme",8);q(t,{get lightScheme(){return r()},get darkScheme(){return a()}})}var A=p("<!> <!>",1);function N(t,e){var r=A(),a=y(r);z(a,{lightScheme:{primary:4281023052,onPrimary:4294967295,primaryContainer:4282536292,onPrimaryContainer:4290036954,inversePrimary:4290300126,secondary:4284047207,onSecondary:4294967295,secondaryContainer:4292600042,onSecondaryContainer:4284310380,tertiary:4282790470,onTertiary:4294967295,tertiaryContainer:4284369246,onTertiaryContainer:4292197075,error:4290386458,onError:4294967295,errorContainer:4294957782,onErrorContainer:4287823882,background:4294703610,onBackground:4279966493,surface:4294703610,onSurface:4279966493,surfaceVariant:4292928233,onSurfaceVariant:4282664780,inverseSurface:4281348146,inverseOnSurface:4294111474,outline:4285822845,outlineVariant:4291086029,shadow:4278190080,scrim:4278190080,surfaceDim:4292598235,surfaceBright:4294703610,surfaceContainerLowest:4294967295,surfaceContainerLow:4294308852,surfaceContainer:4293914095,surfaceContainerHigh:4293584873,surfaceContainerHighest:4293190371,surfaceTint:4283457651},darkScheme:{primary:4290300126,onPrimary:4280430915,primaryContainer:4282536292,onPrimaryContainer:4290036954,inversePrimary:4283457651,secondary:4290955217,onSecondary:4281020729,secondaryContainer:4282665298,onSecondaryContainer:4289968578,tertiary:4292525783,onTertiary:4282198590,tertiaryContainer:4284369246,onTertiaryContainer:4292197075,error:4294948011,onError:4285071365,errorContainer:4287823882,onErrorContainer:4294957782,background:4279440149,onBackground:4293190371,surface:4279440149,onSurface:4293190371,surfaceVariant:4282664780,onSurfaceVariant:4291086029,inverseSurface:4293190371,inverseOnSurface:4281348146,outline:4287533463,outlineVariant:4282664780,shadow:4278190080,scrim:4278190080,surfaceDim:4279440149,surfaceBright:4281940282,surfaceContainerLowest:4279045647,surfaceContainerLow:4279966493,surfaceContainer:4280229921,surfaceContainerHigh:4280887851,surfaceContainerHighest:4281611574,surfaceTint:4290300126}});var i=S(a,2);E(i,e,"default",{},null),h(t,r)}export{N as component,K as universal};
