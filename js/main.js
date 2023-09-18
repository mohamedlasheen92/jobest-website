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

const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  grabCursor: true,
  // spaceBetween: 10,
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


// Validation
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()
