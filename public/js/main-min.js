var swiper=new Swiper(".mySwiper",{spaceBetween:30,loop:!0,pagination:{el:".swiper-pagination",clickable:!0}});const dropdownElement=document.querySelectorAll(".dropdown"),dropdownPlaceholderElement=document.querySelectorAll(".dropdown__placeholder");dropdownPlaceholderElement.forEach(e=>{e.addEventListener("click",()=>{const o=e.closest(".dropdown");dropdownElement.forEach(e=>{e===o?e.classList.toggle("is-open"):e.classList.remove("is-open")})})});const dropdownOptionElement=document.querySelectorAll(".dropdown__list-option"),getHash=()=>window.location.hash.replace(/^#/,"");function changeDropdownValue(e,o,n){if(!e.classList.contains("dropdown--multislect")){e.classList.add("dropdown--selected");const t=o.querySelector(".dropdown__list-option").innerHTML;n.innerHTML=t}e.classList.remove("is-open"),e.classList.add("is-selected")}dropdownOptionElement.forEach(e=>{const o=e.closest(".dropdown"),n=e.closest(".dropdown__list-item"),t=n.querySelector("input"),d=o.querySelector(".dropdown__placeholder-text");t.addEventListener("change",()=>{changeDropdownValue(o,n,d)}),e.addEventListener("click",()=>{changeDropdownValue(o,n,d)}),t.checked&&(d.innerHTML=e.innerHTML,o.classList.remove("is-open"),o.classList.add("is-selected"))}),document.addEventListener("DOMContentLoaded",()=>{const e=getHash();if(e){document.querySelectorAll(`#${e}`).forEach(e=>{e.setAttribute("checked","true");const o=e.closest(".dropdown"),n=e.parentElement.querySelector(".dropdown__list-option"),t=o.querySelector(".dropdown__placeholder"),d=n.innerHTML;t.innerHTML=d})}}),document.addEventListener("click",e=>{const o=document.querySelector(".dropdown.is-open");let n=e.target;do{if(n===o)return;n=n.parentNode}while(n);dropdownElement.forEach(e=>{e.closest(".dropdown").classList.remove("is-open")})}),document.querySelector(".dropdown__close").addEventListener("click",e=>{e.target.closest(".dropdown").classList.remove("is-open")});