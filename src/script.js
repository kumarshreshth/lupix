function navBarClick() {
  const menu = document.getElementById('navBar');
  menu.classList.toggle('hidden');
}

const slides = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('opacity-100', i === index);
    slide.classList.toggle('opacity-0', i !== index);
  });
}

document.getElementById('prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

document.getElementById('next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

showSlide(currentIndex);
