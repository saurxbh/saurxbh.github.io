(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const i=()=>{let s=new Date().getFullYear();document.getElementById("year").textContent=s,Array.from(document.getElementsByClassName("footer__sm")).forEach(n=>{n.addEventListener("mouseover",()=>{n.classList.add("fa-inverse")}),n.addEventListener("mouseout",()=>{n.classList.remove("fa-inverse")})}),document.addEventListener("DOMContentLoaded",function(){window.history.replaceState(null,null,window.location.pathname),window.scroll({top:0,left:0,behavior:"instant"})})},c=()=>{const s=document.querySelector(".header__bars"),o=document.querySelector(".mobile-nav"),n=document.querySelectorAll(".mobile-nav__link");let r=!1;s.addEventListener("click",()=>{r=!r,r?(window.scroll({top:0,left:0,behavior:"instant"}),o.style.display="flex",document.body.style.overflowY="hidden"):(o.style.display="none",document.body.style.overflowY="auto")}),n.forEach(e=>{e.addEventListener("click",()=>{r=!1,o.style.display="none",document.body.style.overflowY="auto"})})};i();c();
