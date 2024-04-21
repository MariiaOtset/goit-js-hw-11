var p=Object.defineProperty;var g=(t,e,r)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var u=(t,e,r)=>(g(t,typeof e!="symbol"?e+"":e,r),r);import{i as c,S as m}from"./assets/vendor-0fc460d7.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();function f(t){return t.map(e=>`<li class="gallery-item">
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
    </li>`).join("")}const n=class n{static show(){n.spinner.classList.remove("hidden")}static hide(){n.spinner.classList.add("hidden")}};u(n,"spinner",document.querySelector(".loader-backdrop"));let i=n;const y="43490794-44764587ca88d9eedc273b8a9",L="https://pixabay.com/api/?";function w(t){const e=new URLSearchParams({key:y,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return i.show(),fetch(`${L}${e}`).then(r=>{if(!r.ok)throw new Error;return r.json()}).then(r=>r.hits.length===0?(c.error({title:"No Images Found",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),i.hide(),[]):(i.hide(),r.hits)).catch(r=>{console.log("catch",r),c.error({title:"Error",message:"An error occurred while fetching images. Please try again later.",position:"topRight"}),i.hide()})}const S=document.querySelector(".loader"),d=document.querySelector(".gallery"),b=document.querySelector(".search-form");b.addEventListener("submit",q);function q(t){t.preventDefault();let e=t.currentTarget.elements.query.value.trim();t.currentTarget.elements.query.value="",d.innerHTML="",h(),w(e).then(r=>{x({hits:r})}).then(()=>h())}function x(t){if(!t||!t.hits||!t.hits.length){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const{hits:e}=t,r=f(e);d.insertAdjacentHTML("beforeend",r),P.refresh()}const P=new m(".gallery-item a",{captionsData:"alt",captionDelay:200});function h(){S.classList.toggle("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
