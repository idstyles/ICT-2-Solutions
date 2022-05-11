const navToggleBTN = document.querySelector(".ctm-navbar-toggler");
const navLinks = document.querySelector(".ctm-navbar-links");

navToggleBTN.addEventListener("click", (e) => {
  navToggleBTN.classList.toggle("active");
  navLinks.classList.toggle("active");
});
