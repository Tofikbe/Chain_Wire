// Dark/Light Mode
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});
if(localStorage.getItem('theme') === 'dark') document.body.classList.add('dark-mode');

// Back to Top
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Search Articles
const searchInput = document.getElementById('search-input');
const articles = document.querySelectorAll('.article-card');
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  articles.forEach(article => {
    article.style.display = article.textContent.toLowerCase().includes(query) ? 'flex' : 'none';
  });
});

// Category Filter
const categoryBtns = document.querySelectorAll('.category-btn');
categoryBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    categoryBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.cat;
    articles.forEach(article => {
      article.style.display = (cat === 'all' || article.dataset.category === cat) ? 'flex' : 'none';
    });
  });
});

// Author Popup
const authorPopup = document.getElementById('author-popup');
const authorNamePopup = document.getElementById('author-popup-name');
authorPopup.addEventListener('click', () => alert('Crypto_King877 is the lead author of Chain Wire'));
authorNamePopup.addEventListener('click', () => alert('Crypto_King877 is the lead author of Chain Wire'));
