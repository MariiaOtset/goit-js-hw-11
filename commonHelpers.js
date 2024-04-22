var p=Object.defineProperty;var f=(r,e,t)=>e in r?p(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var l=(r,e,t)=>(f(r,typeof e!="symbol"?e+"":e,t),t);import{i as u,S as m}from"./assets/vendor-0fc460d7.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();function g(r){return r.map(e=>`<li class="gallery-item">
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" loading="lazy" alt="${e.tags}" width="360"
height="282"/>
        <ul class="card-info">
          <li class="text-span">Likes
            <p class="text">${e.likes}</p>
          </li>
          <li class="text-span"> Views
            <p class="text">${e.views}</p>
          </li>
          <li class="text-span"> Comments
            <p class="text">${e.comments}</p>
          </li>
           <li class="text-span"> Downloads
           <p class="text">${e.downloads}</p>
           </li>
        </ul>
      </a>
    </li>`).join("")}const n=class n{static show(){n.spinner.classList.remove("hidden")}static hide(){n.spinner.classList.add("hidden")}};l(n,"spinner",document.querySelector(".loader-backdrop"));let i=n;const y="43490794-44764587ca88d9eedc273b8a9",L="https://pixabay.com/api/?";function w(r){const e=new URLSearchParams({key:y,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return i.show(),fetch(`${L}${e}`).then(t=>{if(!t.ok)throw new Error;return t.json()}).then(t=>t.hits.length===0?(u.error({title:"No Images Found",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),i.hide(),[]):(i.hide(),t.hits)).catch(t=>{console.log("catch",t),u.error({title:"Error",message:"An error occurred while fetching images. Please try again later.",position:"topRight"}),i.hide()})}const S=document.querySelector(".loader"),h=document.querySelector(".gallery"),b=document.querySelector(".search-form");b.addEventListener("submit",x);function x(r){r.preventDefault();let e=r.currentTarget.elements.query.value.trim();r.currentTarget.elements.query.value="",h.innerHTML="",d(),w(e).then(t=>{q({hits:t})}).then(()=>d())}function q(r){const{hits:e}=r,t=g(e);h.insertAdjacentHTML("beforeend",t),P.refresh()}const P=new m(".gallery-item a",{captionsData:"alt",captionDelay:200});function d(){S.classList.toggle("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
