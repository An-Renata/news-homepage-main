"use strict";

const menuButtonElement = document.querySelector(".hamburger-menu");
const navigationLinks = document.querySelector(".nav-links");
let menuOpen = false;
menuButtonElement.addEventListener("click", () => {
  navigationLinks.classList.toggle("active");

  if (!menuOpen) {
    menuButtonElement.classList.add("open");
    menuOpen = true;
  } else {
    menuButtonElement.classList.remove("open");
    menuOpen = false;
  }
});
