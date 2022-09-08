let navMain = document.querySelector(".main-navigation");
let navToggle = document.querySelector(".main-navigation__toggle");
let welcomeImg = document.querySelector(".welcome");


navMain.classList.remove("main-navigation--nojs");

navToggle.addEventListener("click", function () {
  navMain.classList.toggle("main-navigation--closed");
  navMain.classList.toggle("main-navigation--opened");
  welcomeImg.classList.toggle("welcome--closed");
  welcomeImg.classList.toggle("welcome--opened");
});
