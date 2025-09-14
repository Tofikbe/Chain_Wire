// Sidebar toggle
const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("close-sidebar");

if (menuToggle && sidebar) {
  menuToggle.addEventListener("click", () => sidebar.classList.add("active"));
}
if (closeSidebar && sidebar) {
  closeSidebar.addEventListener("click", () => sidebar.classList.remove("active"));
}

// Slider
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  if (index >= slides.length) currentSlide = 0;
  else if (index < 0) currentSlide = slides.length - 1;
  else currentSlide = index;

  document.querySelector(".slides").style.transform = `translateX(-${currentSlide * 100}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[currentSlide].classList.add("active");
}

// Auto slide
setInterval(() => { showSlide(currentSlide + 1); }, 5000);

// Manual dots
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => showSlide(index));
});

// Swipe support for mobile
let startX = 0;
document.querySelector(".slides").addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});
document.querySelector(".slides").addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;
  if (startX > endX + 50) showSlide(currentSlide + 1);
  else if (startX < endX - 50) showSlide(currentSlide - 1);
});
