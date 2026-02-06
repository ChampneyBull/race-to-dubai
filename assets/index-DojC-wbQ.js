(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const o=[{id:1,name:"Phil",subtitle:"(Leader)",earnings:65,monthly:"+ £65 in Jan",image:"./assets/images/golfer_caricature_2_1770326025546.png",photo:"./assets/images/phil_photo.png"},{id:2,name:"Lewis",subtitle:"",earnings:9,monthly:"+ £9 in Jan",image:"./assets/images/golfer_caricature_1_1770326011803.png",photo:"./assets/images/lewis_photo.png"},{id:3,name:"Hulse",subtitle:"",earnings:0,monthly:"£0 in Jan",image:"./assets/images/golfer_caricature_2_1770326025546.png",photo:"./assets/images/hulse_photo.png"},{id:4,name:"Bully",subtitle:"",earnings:18.25,monthly:"+ £18.25 in Jan",image:"./assets/images/golfer_caricature_4_1770326053225.png",photo:"./assets/images/bully_photo.jpg"},{id:5,name:"Andy",subtitle:"(Has he even played this year?)",earnings:0,monthly:"£0 in Jan",image:"./assets/images/golfer_caricature_3_1770326039558.png",photo:"./assets/images/andy_photo.png"},{id:6,name:"Geoff",subtitle:"",earnings:0,monthly:"£0 in Jan",image:"./assets/images/golfer_caricature_1_1770326011803.png",photo:"./assets/images/geoff_photo.jpg"},{id:7,name:"Tiger",subtitle:"(behind by a nose)",earnings:63.06,monthly:"£63.06 in Jan",image:"./assets/images/golfer_caricature_3_1770326039558.png",photo:"./assets/images/tiger_photo.jpg"},{id:8,name:"Glyn",subtitle:"",earnings:0,monthly:"£0 in Jan",image:"./assets/images/golfer_caricature_4_1770326053225.png",photo:"./assets/images/glyn_photo.png"}],l=250,c=90;function g(){const n=document.getElementById("standings-list");n&&(n.innerHTML=o.sort((e,i)=>i.earnings-e.earnings).map((e,i)=>{const a=i===0,t=i+1,s=a?"Leader":`£${(o[0].earnings-e.earnings).toLocaleString()} behind`;return`
        <div class="standing-card ${a?"is-leader":""}">
          <div class="rank">${t}</div>
          <div class="profile-pic">
            <img src="${e.photo||e.image}" alt="${e.name}">
          </div>
          <div class="player-info">
            <div class="player-name">${e.name} ${e.subtitle}</div>
            <div class="player-sub">${e.monthly}</div>
          </div>
          <div class="earnings">
            <span class="amount">£${e.earnings.toLocaleString()}</span>
            <span class="gap">${s}</span>
          </div>
        </div>
      `}).join(""))}function d(){const n=document.querySelector(".track-grid");n&&(n.innerHTML=o.map((e,i)=>{const a=e.earnings/l*c,s=["Lewis","Andy","Tiger","Glyn"].includes(e.name)?"filter: brightness(1.3) contrast(1.1);":"";return`
      <div class="track-lane">
        <div class="golfer-marker" data-target="${a}%" style="left: 0%">
          <div class="name-tag">${e.name} £${e.earnings}</div>
          <img src="${e.image}" class="caricature" alt="${e.name}" style="${s}">
        </div>
      </div>
    `}).join(""),setTimeout(()=>{document.querySelectorAll(".golfer-marker").forEach(e=>{e.style.left=e.dataset.target})},500))}document.addEventListener("DOMContentLoaded",()=>{g(),d();const n=document.getElementById("theme-btn"),e=document.body;localStorage.getItem("theme")==="light"?(e.classList.add("light-mode"),n.textContent="🌙"):(e.classList.remove("light-mode"),n.textContent="☀️"),n.addEventListener("click",()=>{e.classList.toggle("light-mode");const i=e.classList.contains("light-mode");n.textContent=i?"🌙":"☀️",localStorage.setItem("theme",i?"light":"dark")})});
