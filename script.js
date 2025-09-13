// Mobile Slider
const sliderTrack = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('slider-dots');
let currentIndex = 0;

// Generate dots
slides.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(i));
  dotsContainer.appendChild(dot);
});

// Go to slide function
function goToSlide(index) {
  currentIndex = index;
  sliderTrack.style.transform = `translateX(-${index * 100}%)`;
  updateDots();
}

function updateDots() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

// Auto-slide
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  goToSlide(currentIndex);
}, 5000);

// Slide-in menu
const menuToggle = document.getElementById('menu-toggle');
const slideMenu = document.getElementById('slide-menu');
const overlay = document.getElementById('menu-overlay');

menuToggle.addEventListener('click', () => {
  slideMenu.style.left = '0';
  overlay.style.display = 'block';
});

overlay.addEventListener('click', () => {
  slideMenu.style.left = '-220px';
  overlay.style.display = 'none';
});

// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Back to top
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) backToTop.style.display = 'block';
  else backToTop.style.display = 'none';
});
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Search Filter
const searchInput = document.getElementById('search-input');
const articleCards = document.querySelectorAll('.article-card');

if (searchInput) {
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    articleCards.forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(query) ? '' : 'none';
    });
  });
}
