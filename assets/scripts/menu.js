const menuBurger = document.querySelector(".menu");
var content = document.querySelector(".content");
var container = document.querySelector(".burger-container");
var header = document.querySelector("header");
var main = document.querySelector("main");
// var squareCut = document.querySelector(".square-cut__menu");
// var circleCut = document.querySelector(".circle-cut__menu");
// var circlePurple = document.querySelector(".circle-purple__menu");
// var circleCutPurple = document.querySelector(".circle-cut-purple__menu");
// var squareFull = document.querySelector(".form__menu");
if (document.body.classList.contains("home") == false) {
    var navSlider = document.querySelector(".slider__nav");
} else {
    var socialNetworks = document.querySelector(".nav__footer");
}

menuBurger.addEventListener('click', toggleMenu);

function toggleMenu(){
    menuBurger.classList.toggle("menu__active");
    header.classList.toggle("header__active");
    container.classList.toggle("burger-container__active");
    main.classList.toggle("container__active");
    // squareCut.classList.toggle("square-cut__menu--active");
    // circleCut.classList.toggle("circle-cut__menu--active");
    // circlePurple.classList.toggle("circle-purple__menu--active");
    // circleCutPurple.classList.toggle("circle-cut-purple__menu--active");
    // squareFull.classList.toggle("form__menu--active");
    if (document.body.classList.contains("home") == false) {
        navSlider.classList.toggle("none");
    } else {
        socialNetworks.classList.toggle("none");
    }
}