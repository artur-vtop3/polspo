"use strict";var menuBtn=document.querySelector(".header-menu-button img"),menu=document.querySelector(".header-nav"),body=document.body,bgTexts=document.querySelectorAll(".bg-text"),callback=function(e){e[0].target.classList.add("bg-text-anim")},options={threshold:1},observer=new IntersectionObserver(callback,options),firstAnim=document.querySelector(".bg-text").getBoundingClientRect().height,menuItems=(body.addEventListener("scroll",function(){var e=document.querySelector(".main").getBoundingClientRect();e.top<0&&(menuBtn.src="/assets/img/menu.svg",menu.classList.add("hidden")),e.top-firstAnim/1.6<-100&&bgTexts.forEach(function(e){observer.observe(e)})}),document.querySelectorAll(".menu-item-parent"));menuItems.forEach(function(t){t.querySelector("a").addEventListener("click",function(e){e.preventDefault(),t.classList.contains("active")?t.classList.toggle("active"):(t.parentNode.childNodes.forEach(function(e){e.classList.contains("active")&&e.classList.remove("active")}),t.classList.add("active"))})}),menuBtn.addEventListener("click",function(e){var t="/assets/img/menu.svg";console.log(e.target.src),e.target.src.includes(t)?e.target.src="/assets/img/close.svg":e.target.src=t,menu.classList.toggle("hidden")});
//# sourceMappingURL=sourcemap/news-single.js.map
