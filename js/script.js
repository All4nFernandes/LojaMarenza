const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

let index = 0;
const carousel = document.querySelector(".carousel-images");
const images = document.querySelectorAll(".carousel-image");
const total = images.length;

function update() {
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector(".carousel-next").addEventListener("click", () => {
  index = (index + 1) % total;
  update();
});

document.querySelector(".carousel-prev").addEventListener("click", () => {
  index = (index - 1 + total) % total;
  update();
});

// Suporte a toque
let startX = 0;
let endX = 0;

carousel.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

carousel.addEventListener("touchmove", (e) => {
  endX = e.touches[0].clientX;
});

carousel.addEventListener("touchend", () => {
  let diff = startX - endX;

  if (diff > 50) index = (index + 1) % total;
  if (diff < -50) index = (index - 1 + total) % total;

  update();
});

// Auto play
setInterval(nextImage, 7000);
