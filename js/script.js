const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

let index = 0;
const carousel = document.querySelector(".carousel-images");
const images = document.querySelectorAll(".carousel-image");
const total = images.length;

// --- Buttons ---
document.querySelector(".carousel-next").addEventListener("click", nextImage);
document.querySelector(".carousel-prev").addEventListener("click", prevImage);

function showImage(i) {
  carousel.style.transform = `translateX(-${i * 100}%)`;
}

// --- Lógica de clique ---
function nextImage() {
  index = (index + 1) % total;
  showImage(index);
}

function prevImage() {
  index = (index - 1 + total) % total;
  showImage(index);
}

// --- Lógica de toque (MOBILE) ---
let startX = 0;
let moveX = 0;

// Quando começa o toque
carousel.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

// Quando arrasta o dedo
carousel.addEventListener("touchmove", (e) => {
  moveX = e.touches[0].clientX;
});

// Quando solta o dedo
carousel.addEventListener("touchend", () => {
  let diff = startX - moveX;

  // Arrastou para a esquerda → próxima imagem
  if (diff > 50) {
    nextImage();
  }
  // Arrastou para a direita → imagem anterior
  else if (diff < -50) {
    prevImage();
  }

  // reseta variáveis
  startX = 0;
  moveX = 0;
});

// Auto play (opcional)
setInterval(nextImage, 7000);
