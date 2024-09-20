const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

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