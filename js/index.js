"use strict";

// variable
const img_slider = document.querySelector(".img-slider");
const left_arrow = document.getElementById("left-arrow");
const right_arrow = document.getElementById("right-arrow");
const sliders = document.querySelectorAll(".our-clients-massage-containers");

// background image changer
img_slider.style.backgroundImage = 'url("./images/slider-1.jpg")';
setInterval(
  () =>
    (img_slider.style.backgroundImage =
      img_slider.style.backgroundImage === 'url("../images/slider-1.jpg")'
        ? 'url("./images/slider-2.jpg")'
        : 'url("./images/slider-1.jpg")'),
  5000
);

// clients massage slider
let curSlide = 0;

const goToSlides = function (slide) {
  sliders.forEach(function (el, i) {
    el.style.transform = `translateX(${100 * (i - slide)}%)`;
    el.style.transition = "transform 1s ease-in-out";
  });
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

goToSlides(curSlide);

left_arrow.addEventListener("click", pevPic);
right_arrow.addEventListener("click", nextPic);
