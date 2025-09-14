// Slider
const sliderTrack = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('slider-dots');
let currentIndex = 0;
let startX = 0;
let endX = 0;

// Generate dots
if (dotsContainer) {
  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });
}

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
  if (!sliderTrack) return;
  currentIndex = (currentIndex + 1) % slides.length;
  goToSlide(currentIndex);
}, 5000);

// Swipe gesture
if (sliderTrack) {
  sliderTrack.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
  });

  sliderTrack.addEventListener('touchend', e => {
    endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) {
      // swipe left
      currentIndex = (currentIndex + 1) % slides.length;
      goToSlide(currentIndex);
    } else if (endX - startX > 50) {
      // swipe right
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      goToSlide(currentIndex);
    }
  });
}

// Menu
const menuToggle = document.getElementById('menu-toggle');
const slideMenu = document.getElementById('slide-menu');
const overlay = document.getElementById('menu-overlay');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    slideMenu.style.left = '0';
    overlay.style.display = 'block';
  });
}

if (overlay) {
  overlay.addEventListener('click', () => {
    slideMenu.style.left = '-230px';
    overlay.style.display = 'none';
  });
}

// Back to top
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) backToTop.style.display = 'block';
  else backToTop.style.display = 'none';
});
if (backToTop) {
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// Search filter
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
