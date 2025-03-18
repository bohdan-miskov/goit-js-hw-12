import{a as p,S as L,i as n}from"./assets/vendor-30VqbI-A.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))m(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&m(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function m(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();function u(t,e=1){return p.get("https://pixabay.com/api/",{params:{...w,q:t,page:e}})}const w={key:"",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"15"};function y(t){const e=t.map(o=>`<li class="gallery-item">
        <a class="gallery-link" href="${o.largeImageURL}"><img class="gallery-image" src="${o.webformatURL}" alt="${o.tags}" width="360" height="200" data-user="${o.user}"></a>
        <ul class="gallery-image-description-list">
            <li class="gallery-image-description-item">
                <h3 class="gallery-image-description-title">Likes</h3>
                <p class="gallery-image-description-text">${o.likes}</p>
            </li>
            <li class="gallery-image-description-item">
                <h3 class="gallery-image-description-title">Views</h3>
                <p class="gallery-image-description-text">${o.views}</p>
            </li>
            <li class="gallery-image-description-item">
                <h3 class="gallery-image-description-title">Comments</h3>
                <p class="gallery-image-description-text">${o.comments}</p>
            </li>
            <li class="gallery-image-description-item">
                <h3 class="gallery-image-description-title">Downloads</h3>
                <p class="gallery-image-description-text">${o.downloads}</p>
            </li>
        </ul>
      </li>`);S.gallery.insertAdjacentHTML("beforeend",e.join("")),b.refresh()}const b=new L(".gallery-link",{captionsData:"data-user",captionDelay:250}),S={gallery:document.querySelector(".gallery")},h={class:"message",titleColor:"#fff",titleSize:"16",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16",imageWidth:24,maxWidth:432,theme:"dark",close:!1,position:"topRight",timeout:5e3},v={...h,backgroundColor:"#ef4040",image:"./img/error-message-icon.svg",close:!0},f={...h,backgroundColor:"#0099FF"},s={searchForm:document.querySelector(".form"),gallery:document.querySelector(".gallery"),galleryLoadBtn:document.querySelector(".gallery-load-btn"),loader:document.querySelector(".loader")};let d,l,i;s.searchForm.addEventListener("submit",$);s.galleryLoadBtn.addEventListener("click",x);async function $(t){if(t.preventDefault(),s.galleryLoadBtn.classList.add("hidden"),i=t.currentTarget.elements.searchText.value.trim(),!!q(i)){s.gallery.innerHTML="",s.loader.classList.remove("hidden");try{const e=await u(i);if(e.data.hits.length===0){g("","Sorry, there are no images matching your search query. Please try again!");return}d=Math.ceil(e.data.totalHits/15),y(e.data.hits)}catch(e){g(e.name,`Sorry, the following error occured: ${e.message}`)}if(s.loader.classList.add("hidden"),l=2,d<=1){console.log(n),n.info({...f,message:"We're sorry, but you've reached the end of search results."});return}s.galleryLoadBtn.classList.remove("hidden")}}async function x(){s.galleryLoadBtn.classList.add("hidden"),s.loader.classList.remove("hidden");try{const t=await u(i,l);y(t.data.hits)}catch(t){g(t.name,`Sorry, the following error occured: ${t.message}`)}if(s.loader.classList.add("hidden"),M(),l++,l>d){l=2,n.info({...f,message:"We're sorry, but you've reached the end of search results."});return}s.galleryLoadBtn.classList.remove("hidden")}function q(t){return t!==""}function g(t,e){n.show({...v,title:t,message:e})}function M(){const e=s.gallery.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"}),console.log(window)}
//# sourceMappingURL=index.js.map
