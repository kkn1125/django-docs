import{r as _,a as l,o as a,b as d,w as f,d as p,e as i,f as m,g as v}from"./vendor.d01909ea.js";const h=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const u of t.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}};h();var s=(o,r)=>{const c=o.__vccOpts||o;for(const[n,e]of r)c[n]=e;return c};const y={};function g(o,r){return _(o.$slots,"default")}var b=s(y,[["render",g]]);const E={setup(o){return(r,c)=>{const n=l("router-view");return a(),d(b,null,{default:f(()=>[p(n)]),_:1})}}},x={};function $(o,r){return a(),i("div",null," home ")}var N=s(x,[["render",$]]);const L={};function w(o,r){return a(),i("main",null,"about")}var F=s(L,[["render",w]]);const O={};function k(o,r){return a(),i("main",null,"NotFound")}var A=s(O,[["render",k]]);const B=[{path:"/",name:"home",component:N},{path:"/about",name:"about",component:F},{path:"/404",name:"notFound",component:A},{path:"/:pathMatch(.*)*",redirect:"/404"}];var H=m({history:v(),routes:B});export{E as _,H as r};
