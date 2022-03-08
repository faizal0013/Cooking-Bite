'use strict';

// variable
const go_arrow = document.getElementById('go-arrow');
const header = document.querySelector('.header');

// scroll
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    go_arrow.style.display = 'block';
  } else {
    go_arrow.style.display = 'none';
  }
});

const scrollToUp = function () {
  document.documentElement.scrollTop = 0;
};

go_arrow.addEventListener('click', scrollToUp);

// // header animation
// const haderHover = function (e) {
//   if (e.target.classList.contains("nav-link")) {
//     const link = e.target;
//     const sublink = link.closest("header").querySelectorAll(".nav-links");
//     const logo = link.closest("header").querySelector(".nav-logo");
//     sublink.forEach((el) => {
//       if (el !== this) el.style.opacity = this;
//     });
//     logo.style.opacity = this;
//   }
// };

// header.addEventListener("mouseover", haderHover.bind(0.5));
// header.addEventListener("mouseout", haderHover.bind(1));
