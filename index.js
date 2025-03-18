import{a as h,S as L,i as m}from"./assets/vendor-30VqbI-A.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))g(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&g(o)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function g(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}})();const w={key:"",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"15"};async function b(t,e=1){return(await h.get("https://pixabay.com/api/",{params:{...w,q:t,page:e}})).data}const S=new L(".gallery-link",{captionsData:"data-user",captionDelay:250}),u={gallery:document.querySelector(".gallery")};function v(t){const e=t.map(a=>`<li class="gallery-item">
        <a class="gallery-link" href="${a.largeImageURL}"><img class="gallery-image" src="${a.webformatURL}" alt="${a.tags}" width="360" height="200" data-user="${a.user}"></a>
        <ul class="gallery-image-description-list">
            <li class="gallery-image-description-item">
                <h3 class="gallery-image-description-title">Likes</h3>
                <p class="gallery-image-description-text">${a.likes}</p>
            </li>
            <li class="gallery-image-description-item">
                <h3 class="gallery-image-description-title">Views</h3>
                <p class="gallery-image-description-text">${a.views}</p>
            </li>
            <li class="gallery-image-description-item">
                <h3 class="gallery-image-description-title">Comments</h3>
                <p class="gallery-image-description-text">${a.comments}</p>
            </li>
            <li class="gallery-image-description-item">
                <h3 class="gallery-image-description-title">Downloads</h3>
                <p class="gallery-image-description-text">${a.downloads}</p>
            </li>
        </ul>
      </li>`);u.gallery.insertAdjacentHTML("beforeend",e.join("")),S.refresh()}function $(){u.gallery.innerHTML=""}const y={class:"message",titleColor:"#fff",titleSize:"16",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16",imageWidth:24,maxWidth:432,theme:"dark",close:!1,position:"topRight",timeout:5e3},x={...y,backgroundColor:"#ef4040",image:"./img/error-message-icon.svg",close:!0},M={...y,backgroundColor:"#0099FF"},i={searchForm:document.querySelector(".form"),gallery:document.querySelector(".gallery"),galleryLoadBtn:document.querySelector(".gallery-load-btn"),loader:document.querySelector(".loader")};let n,l,c;i.searchForm.addEventListener("submit",q);i.galleryLoadBtn.addEventListener("click",O);async function q(t){if(t.preventDefault(),c=t.currentTarget.elements.searchText.value.trim(),!D(c))return;$(),i.searchForm.reset();const e=await f();if(e){if(n=Math.ceil(e.totalHits/15),l=2,n<=1){p();return}i.galleryLoadBtn.classList.remove("hidden")}}async function O(){if(await f(l)){if(P(),l++,l>n){l=2,p();return}i.galleryLoadBtn.classList.remove("hidden")}}async function f(t=1){i.galleryLoadBtn.classList.add("hidden"),i.loader.classList.remove("hidden");let e;try{if(e=await b(c,t),e.hits.length===0){d("","Sorry, there are no images matching your search query. Please try again!");return}v(e.hits)}catch(a){d(a.name,`Sorry, the following error occured: ${a.message}`)}finally{i.loader.classList.add("hidden")}return e}function D(t){return t!==""}function d(t,e){m.show({...x,title:t,message:e})}function P(){const e=i.gallery.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}function p(){m.info({...M,message:"We're sorry, but you've reached the end of search results."})}
//# sourceMappingURL=index.js.map
