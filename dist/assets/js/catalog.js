"use strict";var swiper,menuBtn=document.querySelector(".header-menu-button img"),menu=document.querySelector(".header-nav"),body=document.body,bgTexts=document.querySelectorAll(".bg-text"),callback=function(e){e[0].target.classList.add("bg-text-anim")},options={threshold:1},observer=new IntersectionObserver(callback,options),firstAnim=document.querySelector(".bg-text").getBoundingClientRect().height,menuItems=(body.addEventListener("scroll",function(){var e=document.querySelector(".main").getBoundingClientRect();e.top<0&&(menuBtn.src="/assets/img/menu.svg",menu.classList.add("hidden")),e.top-firstAnim/1.6<-100&&bgTexts.forEach(function(e){observer.observe(e)})}),document.querySelectorAll(".menu-item-parent")),windowInnerWidth=(menuItems.forEach(function(t){t.querySelector("a").addEventListener("click",function(e){e.preventDefault(),t.classList.contains("active")?t.classList.toggle("active"):(t.parentNode.childNodes.forEach(function(e){e.classList.contains("active")&&e.classList.remove("active")}),t.classList.add("active"))})}),menuBtn.addEventListener("click",function(e){var t="/assets/img/menu.svg";console.log(e.target.src),e.target.src.includes(t)?e.target.src="/assets/img/close.svg":e.target.src=t,menu.classList.toggle("hidden")}),window.innerWidth),tabItems=(windowInnerWidth<=620&&(swiper=new Swiper(".products-slider",{wrapperClass:"products-slider-wrapper",slideClass:"products-item",speed:400,autoplay:{delay:5e3},slidesPerView:1,spaceBetween:20})),document.querySelectorAll(".products-tab")),blockItems=document.querySelectorAll(".block"),descBtn=(tabItems.forEach(function(s){s.addEventListener("click",function(e){var t=s.dataset.block;blockItems.forEach(function(e){e.dataset.block===t?e.classList.remove("hidden"):e.classList.add("hidden")}),tabItems.forEach(function(e){e.classList.remove("active")}),s.classList.toggle("active")})}),document.querySelector(".products-desc-button"));descBtn.addEventListener("click",function(){"Свернуть"==descBtn.childNodes[2].textContent?(descBtn.previousElementSibling.setAttribute("style",""),descBtn.childNodes[2].textContent="Подробнее"):(descBtn.previousElementSibling.setAttribute("style","max-height: 100%"),descBtn.childNodes[2].textContent="Свернуть")});
//# sourceMappingURL=sourcemap/catalog.js.map
