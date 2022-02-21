"use strict";

// variable
const go_arrow = document.getElementById("go-arrow");
const header = document.querySelector(".header");
const img_slider = document.querySelector(".img-slider");
const left_arrow = document.getElementById("left-arrow");
const right_arrow = document.getElementById("right-arrow");
const sliders = document.querySelectorAll(".our-clients-massage-containers");
let curSlide = 0;
const log_in = document.getElementById("log-in");
const show_password = document.getElementById("show-password");

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
if (img_slider) {
  img_slider.style.backgroundImage = 'url("../images/slider-1.jpg")';
  setInterval(
    () =>
      (img_slider.style.backgroundImage =
        img_slider.style.backgroundImage === 'url("../images/slider-1.jpg")'
          ? 'url("../images/slider-2.jpg")'
          : 'url("../images/slider-1.jpg")'),
    5000
  );
}
// clients massage slider
const goToSlides = function (slide) {
  sliders.forEach(function (el, i) {
    el.style.transform = `translateX(${100 * (i - slide)}%)`;
    el.style.transition = "transform 2s ease-in-out";
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

if (left_arrow && right_arrow) {
  left_arrow.addEventListener("click", pevPic);
  right_arrow.addEventListener("click", nextPic);
}

// log in validations
if (show_password) {
  show_password.checked = false;
}

const showPassword = function () {
  const user_password = document.getElementById("user-password");
  user_password.type = show_password.checked ? "text" : "password";
};

const formValidation = function (e) {
  const user_name = document.getElementById("user-name");
  const user_password = document.getElementById("user-password");

  const createErrorMassage = function (currElement, massage) {
    const span = document.createElement("div");

    span.classList.add("massage-error");

    span.innerHTML = "&#128712;".concat(" ").concat(massage);

    currElement.insertAdjacentHTML("afterend", span.outerHTML);
  };

  const massage_error = document.querySelectorAll(".massage-error");
  massage_error.forEach((el) => el.remove());

  if (!user_name.value) {
    createErrorMassage(user_name, "Enter a user name");
  } else if (user_name.value.length < 10) {
    createErrorMassage(user_name, "user name must be at least 10 characters");
  }

  if (!user_password.value) {
    createErrorMassage(user_password, "Enter a password");
  } else if (user_password.value.length < 10) {
    createErrorMassage(
      user_password,
      "password must be at least 10 characters"
    );
  }

  if (document.querySelectorAll(".massage-error").length > 0)
    e.preventDefault();
};

if (show_password && log_in) {
  show_password.addEventListener("click", showPassword);
  log_in.addEventListener("submit", formValidation);
}
