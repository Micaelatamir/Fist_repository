let currentIndex = 0;
const images = document.querySelectorAll('.carousel-slide a');
const totalImages = images.length;

function changeImage() {
    const carouselSlide = document.querySelector('.carousel-slide');
    const offset = -currentIndex * 100; // Mover para a esquerda uma imagem de cada vez
    carouselSlide.style.transform = `translateX(${offset}%)`; // Desloca o carrossel
}

// Mudar automaticamente as imagens a cada 3 segundos
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalImages; // Avança para a próxima imagem ou volta para a primeira
    changeImage(); // Atualiza a posição das imagens
}, 3000); // A cada 3 segundos
