const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(0, 0, 0, 0.8)";
  } else {
    navbar.style.background = "rgba(0, 0, 0, 0.5)";
  }
});
