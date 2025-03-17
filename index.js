import{a as p,S as L,i as n}from"./assets/vendor-30VqbI-A.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))u(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}})();function m(e,t=1){return p.get("https://pixabay.com/api/",{params:{...b,q:e,page:t}})}const b={key:"",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"15"};function f(e){const t=e.map(a=>`<li class="gallery-item">
        <a class="gallery-link" href="${a.largeImageURL}"><img class="gallery-image" src="${a.webformatURL}" alt="${a.tags}" width="300" height="200" data-user="${a.user}"></a>
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
      </li>`);v.gallery.insertAdjacentHTML("beforeend",t.join("")),S.refresh()}const S=new L(".gallery-link",{captionsData:"data-user",captionDelay:250}),v={gallery:document.querySelector(".gallery")},h={class:"message",titleColor:"#fff",titleSize:"16",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16",imageWidth:24,maxWidth:432,theme:"dark",close:!1,position:"topRight",timeout:5e3},$={...h,backgroundColor:"#ef4040",image:"./img/error-message-icon.svg",close:!0},y={...h,backgroundColor:"#0099FF"},l={searchForm:document.querySelector(".form"),gallery:document.querySelector(".gallery"),galleryLoadBtn:document.querySelector(".gallery-load-btn"),loader:document.querySelector(".loader")};let d,i,o;l.searchForm.addEventListener("submit",w);l.galleryLoadBtn.addEventListener("click",x);function w(e){e.preventDefault(),o=e.currentTarget.elements.searchText.value.trim(),M(o)&&(l.gallery.innerHTML="",l.loader.classList.remove("hidden"),m(o).then(t=>{if(t.data.hits.length===0){g("","Sorry, there are no images matching your search query. Please try again!");return}if(f(t.data.hits),d=Math.ceil(t.data.totalHits/15),i=2,d<=1){console.log(n),n.info({...y,message:"We're sorry, but you've reached the end of search results."});return}l.galleryLoadBtn.classList.remove("hidden")}).catch(t=>{g(t.name,`Sorry, the following error occured: ${t.message}`)}).finally(()=>l.loader.classList.add("hidden")))}function x(){l.galleryLoadBtn.classList.add("hidden"),l.loader.classList.remove("hidden"),m(o,i).then(e=>{f(e.data.hits)}).catch(e=>{g(e.name,`Sorry, the following error occured: ${e.message}`)}).finally(()=>{if(l.loader.classList.add("hidden"),i++,i>d){i=2,n.info({...y,message:"We're sorry, but you've reached the end of search results."});return}l.galleryLoadBtn.classList.remove("hidden")})}function M(e){return e!==""}function g(e,t){n.show({...$,title:e,message:t})}
//# sourceMappingURL=index.js.map
