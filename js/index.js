const menuMobile = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenuMobile = document.querySelector(".mobile-menu-close");

menuMobile.addEventListener("click", () => {
  mobileMenu.classList.toggle("mobile-menu-view");
});

closeMenuMobile.addEventListener("click", () => {
  mobileMenu.classList.remove("mobile-menu-view");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 700) {
    mobileMenu.classList.remove("mobile-menu-view");
  }
});
