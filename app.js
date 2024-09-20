// const hamburger = document.querySelector(".hamburger");
// const nav = document.querySelector(".nav");

// hamburger.addEventListener("click", () => nav.classList.toggle("active"));

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-list a");

// Abre/fecha o menu quando o botão hamburger é clicado
hamburger.addEventListener("click", () => nav.classList.toggle("active"));

// Fecha o menu quando um link da nav-list é clicado
navLinks.forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("active"));
});


const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 10,
  slidesPerView: 1.25,
});

const swiperTarefas = new Swiper('.slider-tarefas', {
  // loop: true,
  grabCursor: true,
  spaceBetween: 10,
  slidesPerView: 2.25,
});  