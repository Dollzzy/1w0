// Slider automat
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slideInterval = setInterval(nextSlide, 8000);

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', function() {
        this.classList.toggle('open');
        nav.classList.toggle('open');
    });
});
