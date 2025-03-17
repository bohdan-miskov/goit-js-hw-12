import{a as c,S as g,i as m}from"./assets/vendor-30VqbI-A.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();function d(r){return c.get("https://pixabay.com/api/",{params:{q:r,...u}})}const u={key:"",image_type:"photo",orientation:"horizontal",safesearch:"true"};function p(r){const i=r.map(e=>`<li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}"><img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" width="300" height="200" data-user="${e.user}"></a>
        <ul class="gallery-image-description-list">
            <li class="gallery-image-description-item">
                <h3 class="gallery-image-description-title">Likes</h3>
                <p class="gallery-image-description-text">${e.likes}</p>
            </li>
            <li class="gallery-image-description-item">
                <h3 class="gallery-image-description-title">Views</h3>
                <p class="gallery-image-description-text">${e.views}</p>
            </li>
            <li class="gallery-image-description-item">
                <h3 class="gallery-image-description-title">Comments</h3>
                <p class="gallery-image-description-text">${e.comments}</p>
            </li>
            <li class="gallery-image-description-item">
                <h3 class="gallery-image-description-title">Downloads</h3>
                <p class="gallery-image-description-text">${e.downloads}</p>
            </li>
        </ul>
      </li>`);f.gallery.innerHTML=i.join(""),y.refresh()}const y=new g(".gallery-link",{captionsData:"data-user",captionDelay:250}),f={gallery:document.querySelector(".gallery")},h={class:"message",titleColor:"#fff",titleSize:"16",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16",maxWidth:432,theme:"dark",close:!1,position:"topRight",timeout:5e3},L={...h,backgroundColor:"#ef4040",image:"./img/error-message-icon.svg",imageWidth:24,close:!0},a={searchForm:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};a.searchForm.addEventListener("submit",S);function S(r){r.preventDefault();const i=r.currentTarget.elements.searchText.value.trim();$(i)&&(a.gallery.innerHTML="",a.loader.style.display="block",d(i).then(e=>{if(e.data.hits.length===0){n("","Sorry, there are no images matching your search query. Please try again!"),a.loader.style.display="none";return}a.loader.style.display="none",p(e.data.hits)}).catch(e=>{a.loader.style.display="none",n(e.name,`Sorry, the following error occured: ${e.message}`)}))}function $(r){return r!==""}function n(r,i){m.show({...L,title:r,message:i})}
//# sourceMappingURL=index.js.map
