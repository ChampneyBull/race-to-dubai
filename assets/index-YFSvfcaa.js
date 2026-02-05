(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(s){if(s.ep)return;s.ep=!0;const t=n(s);fetch(s.href,t)}})();const o=[{id:1,name:"Phil",subtitle:"(Leader)",earnings:65,monthly:"+ £65 in Jan",image:"./assets/images/golfer_caricature_2_1770326025546.png",photo:"./assets/images/phil_photo.png"},{id:2,name:"Lewis",subtitle:"",earnings:30,monthly:"+ £30 in Jan",image:"./assets/images/golfer_caricature_1_1770326011803.png",photo:"./assets/images/lewis_photo.png"},{id:3,name:"Hulse",subtitle:"",earnings:20,monthly:"+ £20 in Jan",image:"./assets/images/golfer_caricature_2_1770326025546.png",photo:"./assets/images/hulse_photo.png"},{id:4,name:"Bully",subtitle:"",earnings:18.25,monthly:"+ £18.25 in Jan",image:"./assets/images/golfer_caricature_4_1770326053225.png",photo:"./assets/images/bully_photo.jpg"},{id:5,name:"Andy",subtitle:"",earnings:0,monthly:"£0 in Jan",image:"./assets/images/golfer_caricature_3_1770326039558.png",photo:"./assets/images/andy_photo.png"},{id:6,name:"Geoff",subtitle:"",earnings:0,monthly:"£0 in Jan",image:"./assets/images/golfer_caricature_1_1770326011803.png",photo:"./assets/images/geoff_photo.jpg"},{id:7,name:"Tiger",subtitle:"",earnings:0,monthly:"£0 in Jan",image:"./assets/images/golfer_caricature_3_1770326039558.png",photo:"./assets/images/tiger_photo.jpg"},{id:8,name:"Glyn",subtitle:"",earnings:0,monthly:"£0 in Jan",image:"./assets/images/golfer_caricature_4_1770326053225.png",photo:"./assets/images/glyn_photo.png"}],c=250,l=90;function g(){const a=document.getElementById("standings-list");a&&(a.innerHTML=o.sort((e,n)=>n.earnings-e.earnings).map((e,n)=>{const i=n===0,s=n+1,t=i?"Leader":`£${(o[0].earnings-e.earnings).toLocaleString()} behind`;return`
        <div class="standing-card ${i?"is-leader":""}">
          <div class="rank">${s}</div>
          <div class="profile-pic">
            <img src="${e.photo||e.image}" alt="${e.name}">
          </div>
          <div class="player-info">
            <div class="player-name">${e.name} ${e.subtitle}</div>
            <div class="player-sub">${e.monthly}</div>
          </div>
          <div class="earnings">
            <span class="amount">£${e.earnings.toLocaleString()}</span>
            <span class="gap">${t}</span>
          </div>
        </div>
      `}).join(""))}function d(){const a=document.querySelector(".track-grid");a&&(a.innerHTML=o.map((e,n)=>`
      <div class="track-lane">
        <div class="golfer-marker" data-target="${e.earnings/c*l}%" style="left: 0%">
          <div class="name-tag">${e.name} £${e.earnings}</div>
          <img src="${e.image}" class="caricature" alt="${e.name}">
        </div>
      </div>
    `).join(""),setTimeout(()=>{document.querySelectorAll(".golfer-marker").forEach(e=>{e.style.left=e.dataset.target})},500))}document.addEventListener("DOMContentLoaded",()=>{g(),d()});
