"use strict";

const menuButtonElement = document.querySelector(".hamburger-menu");
const navigationLinks = document.querySelector(".nav-links");
const overlayElement = document.querySelector(".overlay");

let menuOpen = false;
menuButtonElement.addEventListener("click", () => {
  navigationLinks.classList.toggle("active");
  overlayElement.classList.toggle("faded");

  if (!menuOpen) {
    menuButtonElement.classList.add("open");
    menuOpen = true;
  } else {
    menuButtonElement.classList.remove("open");
    menuOpen = false;
  }
});
