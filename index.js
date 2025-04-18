import{a as d,S as f,i as n}from"./assets/vendor-Db2TdIkw.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const m="49783483-e7ad609b1a8311ba1b65a0c02",y="https://pixabay.com/api/";async function p(a){const t={key:m,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await d.get(y,{params:t})).data}let g=new f(".gallery a");function h(a){const t=document.querySelector(".gallery"),o=a.map(({webformatURL:i,largeImageURL:e,tags:r,likes:s,views:c,comments:l,downloads:u})=>`<li class="gallery-item">
          <a href="${e}">
            <img src="${i}" alt="${r}" />
          </a>
          <div class="info">
            <p>👍 ${s}</p>
            <p>👁 ${c}</p>
            <p>💬 ${l}</p>
            <p>⬇ ${u}</p>
          </div>
        </li>`).join("");t.insertAdjacentHTML("beforeend",o),g.refresh()}function L(){document.querySelector(".gallery").innerHTML=""}function b(){document.querySelector(".loader").classList.add("visible")}function S(){document.querySelector(".loader").classList.remove("visible")}const q=document.querySelector(".form");q.addEventListener("submit",async a=>{a.preventDefault();const t=a.target.elements["search-text"].value.trim();if(!t){n.error({message:"Please enter a search term!"});return}L(),b();try{const o=await p(t);o.hits.length===0?n.info({message:"Sorry, there are no images matching your search query. Please try again!"}):h(o.hits)}catch{n.error({message:"Something went wrong. Try again later!"})}finally{S()}});
//# sourceMappingURL=index.js.map
