"use strict";function setEqualHeight(i,e){for(var t=arguments.length,n=Array(2<t?t-2:0),l=2;l<t;l++)n[l-2]=arguments[l];if(void 0!==i&&0<n.length){var s=new Object;if(s.global=document.querySelector(i),s.global){s.elements=[];for(var o=0;o<n.length;o++)s.elements.push({height:0,items:s.global.querySelectorAll(n[o])});if(window.innerWidth>e){for(o=0;o<s.elements.length;o++)for(var r=0;r<s.elements[o].items.length;r++){s.elements[o].items[r].style.height="initial";var a=s.elements[o].items[r].offsetHeight;a>s.elements[o].height&&(s.elements[o].height=a)}for(o=0;o<s.elements.length;o++)for(r=0;r<s.elements[o].items.length;r++)s.elements[o].items[r].style.height=s.elements[o].height+"px"}else for(o=0;o<s.elements.length;o++)for(r=0;r<s.elements[o].items.length;r++)s.elements[o].items[r].style.height="initial"}}else console.log("Something went wrong, check arguments that you need to use this function")}function debuggerLayout(){[].forEach.call($$("*"),function(i){i.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)})}function toggleMenu(){menuBurger.classList.toggle("menu__active"),header.classList.toggle("header__active"),container.classList.toggle("burger-container__active"),main.classList.toggle("container__active"),0==document.body.classList.contains("home")?navSlider.classList.toggle("none"):socialNetworks.classList.toggle("none")}if(0==document.body.classList.contains("home"))var calculPosition,slider=document.querySelector(".slider"),sliderEl=slider.children,sliderSize=sliderEl.length,prev=document.querySelector(".slide__left"),next=document.querySelector(".slide__right"),value=slider.style.width=100*sliderSize,sliderWidth=value+"%",initialPosition=slider.style.transform=0,index=1;if(document.body.classList.contains("illus")){var sliderElement=function(i){i.matches?(next.addEventListener("click",function(){index<sliderSize?(initialPosition=calculPosition=initialPosition-100,slider.style.transform="translateX("+initialPosition+"%)",index++):index==sliderSize&&(index=1,initialPosition=slider.style.transform=0,slider.style.transform="translateX("+initialPosition+"%)",calculPosition=0)}),prev.addEventListener("click",function(){1<index?(initialPosition=calculPosition=initialPosition+100,slider.style.transform="translateX("+initialPosition+"%)",index--):1==index&&(initialPosition=-(value-100),slider.style.transform="translateX("+initialPosition+"%)",index=sliderSize,calculPosition=-(value-100))})):(sliderSize=3,next.addEventListener("click",function(){index<sliderSize?(initialPosition=calculPosition=initialPosition-100,slider.style.transform="translateX("+initialPosition+"%)",index++):index==sliderSize&&(index=1,initialPosition=slider.style.transform=0,slider.style.transform="translateX("+initialPosition+"%)",calculPosition=0)}),prev.addEventListener("click",function(){value=slider.style.width=100*sliderSize,1<index?(initialPosition=calculPosition=initialPosition+100,slider.style.transform="translateX("+initialPosition+"%)",index--):1==index&&(initialPosition=-(value-100),slider.style.transform="translateX("+initialPosition+"%)",index=sliderSize,calculPosition=-(value-100))}))},x=window.matchMedia("(max-width: 499px)");x.addListener(sliderElement),sliderElement(x)}else document.body.classList.contains("projets")&&(next.addEventListener("click",function(){index<sliderSize?(initialPosition=calculPosition=initialPosition-100,slider.style.transform="translateX("+initialPosition+"%)",index++):index==sliderSize&&(index=1,initialPosition=slider.style.transform=0,slider.style.transform="translateX("+initialPosition+"%)",calculPosition=0)}),prev.addEventListener("click",function(){1<index?(initialPosition=calculPosition=initialPosition+100,slider.style.transform="translateX("+initialPosition+"%)",index--):1==index&&(initialPosition=-(value-100),slider.style.transform="translateX("+initialPosition+"%)",index=sliderSize,calculPosition=-(value-100))}));var menuBurger=document.querySelector(".menu"),content=document.querySelector(".content"),container=document.querySelector(".burger-container"),header=document.querySelector("header"),main=document.querySelector("main");if(0==document.body.classList.contains("home"))var navSlider=document.querySelector(".slider__nav");else var socialNetworks=document.querySelector(".nav__footer");menuBurger.addEventListener("click",toggleMenu);
//# sourceMappingURL=main.js.map