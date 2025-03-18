import{a as L,S as b,i as g}from"./assets/vendor-30VqbI-A.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))m(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&m(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function m(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();const w={key:"",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"15"};async function u(t,e=1){return(await L.get("https://pixabay.com/api/",{params:{...w,q:t,page:e}})).data}const S=new b(".gallery-link",{captionsData:"data-user",captionDelay:250}),y={gallery:document.querySelector(".gallery")};function h(t){const e=t.map(s=>`<li class="gallery-item">
        <a class="gallery-link" href="${s.largeImageURL}"><img class="gallery-image" src="${s.webformatURL}" alt="${s.tags}" width="360" height="200" data-user="${s.user}"></a>
        <ul class="gallery-image-description-list">
            <li class="gallery-image-description-item">
                <h3 class="gallery-image-description-title">Likes</h3>
                <p class="gallery-image-description-text">${s.likes}</p>
            </li>
            <li class="gallery-image-description-item">
                <h3 class="gallery-image-description-title">Views</h3>
                <p class="gallery-image-description-text">${s.views}</p>
            </li>
            <li class="gallery-image-description-item">
                <h3 class="gallery-image-description-title">Comments</h3>
                <p class="gallery-image-description-text">${s.comments}</p>
            </li>
            <li class="gallery-image-description-item">
                <h3 class="gallery-image-description-title">Downloads</h3>
                <p class="gallery-image-description-text">${s.downloads}</p>
            </li>
        </ul>
      </li>`);y.gallery.insertAdjacentHTML("beforeend",e.join("")),S.refresh()}function v(){y.gallery.innerHTML=""}const f={class:"message",titleColor:"#fff",titleSize:"16",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16",imageWidth:24,maxWidth:432,theme:"dark",close:!1,position:"topRight",timeout:5e3},$={...f,backgroundColor:"#ef4040",image:"./img/error-message-icon.svg",close:!0},p={...f,backgroundColor:"#0099FF"},a={searchForm:document.querySelector(".form"),gallery:document.querySelector(".gallery"),galleryLoadBtn:document.querySelector(".gallery-load-btn"),loader:document.querySelector(".loader")};let c,l,o;a.searchForm.addEventListener("submit",x);a.galleryLoadBtn.addEventListener("click",q);async function x(t){if(t.preventDefault(),o=t.currentTarget.elements.searchText.value.trim(),!!M(o)){v(),a.galleryLoadBtn.classList.add("hidden"),a.loader.classList.remove("hidden");try{const e=await u(o);if(e.hits.length===0){d("","Sorry, there are no images matching your search query. Please try again!"),a.loader.classList.add("hidden");return}c=Math.ceil(e.totalHits/15),h(e.hits)}catch(e){d(e.name,`Sorry, the following error occured: ${e.message}`)}if(a.loader.classList.add("hidden"),l=2,c<=1){g.info({...p,message:"We're sorry, but you've reached the end of search results."});return}a.galleryLoadBtn.classList.remove("hidden")}}async function q(){a.galleryLoadBtn.classList.add("hidden"),a.loader.classList.remove("hidden");try{const t=await u(o,l);h(t.hits)}catch(t){d(t.name,`Sorry, the following error occured: ${t.message}`)}if(a.loader.classList.add("hidden"),O(),l++,l>c){l=2,g.info({...p,message:"We're sorry, but you've reached the end of search results."});return}a.galleryLoadBtn.classList.remove("hidden")}function M(t){return t!==""}function d(t,e){g.show({...$,title:t,message:e})}function O(){const e=a.gallery.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
