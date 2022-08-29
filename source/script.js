let navMain = document.querySelector(".main-navigation");
let navToggle = document.querySelector(".main-navigation__toggle");
let welcomeImg = document.querySelector(".welcome");


navMain.classList.remove("main-navigation--nojs");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-navigation--closed")) {
    navMain.classList.remove("main-navigation--closed");
    navMain.classList.add("main-navigation--opened");
  } else {
    navMain.classList.add("main-navigation--closed");
    navMain.classList.remove("main-navigation--opened");
  }
  if (welcomeImg.classList.contains("welcome--closed")) {
    welcomeImg.classList.remove("welcome--closed");
    welcomeImg.classList.add("welcome--opened");
  } else {
    welcomeImg.classList.add("welcome--closed");
    welcomeImg.classList.remove("welcome--opened");
  }
});
