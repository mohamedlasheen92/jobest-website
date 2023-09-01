let header = document.getElementById("header");
let navBarToggler = document.querySelector("#header .navbar-toggler");


navBarToggler.addEventListener("click", (event) => {
  if (!navBarToggler.classList.contains("collapsed")) header.style.backgroundColor = "#fff";
  else header.style.backgroundColor = "transparent";
})
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) header.style.backgroundColor = 'rgba(249, 250, 253, 0.7)';
  else header.style.backgroundColor = "transparent";
})