// Toggle hamburger & dropdown
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu");
  const nav     = document.getElementById("header-nav");
  const header  = document.querySelector("header");

  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
    menuBtn.classList.toggle("is-active");
  });

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 10);
  });
});
