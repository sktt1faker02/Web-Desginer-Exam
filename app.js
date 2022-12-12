const toggleNavIconEl = document.querySelector(".hamburger-icon-menu");
const headerMenuEl = document.querySelector(".header-menu");
const navIcon = document.querySelector(".nav-icon");

toggleNavIconEl.addEventListener("click", function () {
  headerMenuEl.classList.toggle("header-menu-open");
  navIcon.classList.toggle("nav-icon-close");
  document.querySelector("body").classList.toggle("scrollable");
});
