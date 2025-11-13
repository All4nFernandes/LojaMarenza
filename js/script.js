const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});


const track = document.querySelector(".carousel-track");
const images = document.querySelectorAll(".carousel-image");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

let index = 0;

// Função para mudar slide
function showSlide(i) {
  if (i < 0) index = images.length - 1;
  else if (i >= images.length) index = 0;
  else index = i;

  const offset = -index * 100;
  track.style.transform = `translateX(${offset}%)`;
}

// Botões
nextBtn.addEventListener("click", () => showSlide(index + 1));
prevBtn.addEventListener("click", () => showSlide(index - 1));

// Auto slide
setInterval(() => showSlide(index + 1), 5000);