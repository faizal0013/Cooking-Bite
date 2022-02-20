"use strict";

// variable
const go_arrow = document.getElementById("go-arrow");
const header = document.querySelector(".header");
const img_slider = document.querySelector(".img-slider");
const left_arrow = document.getElementById("left-arrow");
const right_arrow = document.getElementById("right-arrow");
const sliders = document.querySelectorAll(".our-clients-massage-containers");
let curSlide = 0;

// scroll
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    go_arrow.style.display = "block";
  } else {
    go_arrow.style.display = "none";
  }
});

const scrollToUp = function () {
  document.documentElement.scrollTop = 0;
};

go_arrow.addEventListener("click", scrollToUp);

// header animation
const haderHover = function (e) {
  if (e.target.classList.contains("nav-link")) {
    const link = e.target;
    const sublink = link.closest("header").querySelectorAll(".nav-links");
    const logo = link.closest("header").querySelector(".nav-logo");
    sublink.forEach((el) => {
      if (el !== this) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

header.addEventListener("mouseover", haderHover.bind(0.5));
header.addEventListener("mouseout", haderHover.bind(1));

// background changer
img_slider.style.backgroundImage = 'url("../images/slider-1.jpg")';
setInterval(
  () =>
    (img_slider.style.backgroundImage =
      img_slider.style.backgroundImage === 'url("../images/slider-1.jpg")'
        ? 'url("../images/slider-2.jpg")'
        : 'url("../images/slider-1.jpg")'),
  5000
);

// clients massage slider
const goToSlides = function (slide) {
  sliders.forEach(
    (el, i) => (el.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

const nextPic = function () {
  if (curSlide === 2) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlides(curSlide);
};

const pevPic = function () {
  if (curSlide === 0) {
    curSlide = 3;
  }
  curSlide--;
  goToSlides(curSlide);
};

sliders.forEach((el, i) => (el.style.transform = `translateX(${100 * i}%)`));
left_arrow.addEventListener("click", pevPic);
right_arrow.addEventListener("click", nextPic);
