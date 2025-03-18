import{a as p,S as L,i as g}from"./assets/vendor-30VqbI-A.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))m(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&m(n)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function m(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();function u(t,e=1){return p.get("https://pixabay.com/api/",{params:{...b,q:t,page:e}})}const b={key:"",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"15"};function y(t){const e=t.map(i=>`<li class="gallery-item">
        <a class="gallery-link" href="${i.largeImageURL}"><img class="gallery-image" src="${i.webformatURL}" alt="${i.tags}" width="360" height="200" data-user="${i.user}"></a>
        <ul class="gallery-image-description-list">
            <li class="gallery-image-description-item">
                <h3 class="gallery-image-description-title">Likes</h3>
                <p class="gallery-image-description-text">${i.likes}</p>
            </li>
            <li class="gallery-image-description-item">
                <h3 class="gallery-image-description-title">Views</h3>
                <p class="gallery-image-description-text">${i.views}</p>
            </li>
            <li class="gallery-image-description-item">
                <h3 class="gallery-image-description-title">Comments</h3>
                <p class="gallery-image-description-text">${i.comments}</p>
            </li>
            <li class="gallery-image-description-item">
                <h3 class="gallery-image-description-title">Downloads</h3>
                <p class="gallery-image-description-text">${i.downloads}</p>
            </li>
        </ul>
      </li>`);S.gallery.insertAdjacentHTML("beforeend",e.join("")),w.refresh()}const w=new L(".gallery-link",{captionsData:"data-user",captionDelay:250}),S={gallery:document.querySelector(".gallery")},h={class:"message",titleColor:"#fff",titleSize:"16",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16",imageWidth:24,maxWidth:432,theme:"dark",close:!1,position:"topRight",timeout:5e3},v={...h,backgroundColor:"#ef4040",image:"./img/error-message-icon.svg",close:!0},f={...h,backgroundColor:"#0099FF"},a={searchForm:document.querySelector(".form"),gallery:document.querySelector(".gallery"),galleryLoadBtn:document.querySelector(".gallery-load-btn"),loader:document.querySelector(".loader")};let c,l,o;a.searchForm.addEventListener("submit",$);a.galleryLoadBtn.addEventListener("click",x);async function $(t){if(t.preventDefault(),o=t.currentTarget.elements.searchText.value.trim(),!!q(o)){a.gallery.innerHTML="",a.galleryLoadBtn.classList.add("hidden"),a.loader.classList.remove("hidden");try{const e=await u(o);if(e.data.hits.length===0){d("","Sorry, there are no images matching your search query. Please try again!");return}c=Math.ceil(e.data.totalHits/15),y(e.data.hits)}catch(e){d(e.name,`Sorry, the following error occured: ${e.message}`)}if(a.loader.classList.add("hidden"),l=2,c<=1){g.info({...f,message:"We're sorry, but you've reached the end of search results."});return}a.galleryLoadBtn.classList.remove("hidden")}}async function x(){a.galleryLoadBtn.classList.add("hidden"),a.loader.classList.remove("hidden");try{const t=await u(o,l);y(t.data.hits)}catch(t){d(t.name,`Sorry, the following error occured: ${t.message}`)}if(a.loader.classList.add("hidden"),M(),l++,l>c){l=2,g.info({...f,message:"We're sorry, but you've reached the end of search results."});return}a.galleryLoadBtn.classList.remove("hidden")}function q(t){return t!==""}function d(t,e){g.show({...v,title:t,message:e})}function M(){const e=a.gallery.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
