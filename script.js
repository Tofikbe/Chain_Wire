/* Mobile-first interactions: theme, search, categories, back-to-top, small helpers */

// Theme toggle (persist)
function applyTheme(name){
  if(name === 'dark') document.body.classList.add('dark');
  else document.body.classList.remove('dark');
}
const saved = localStorage.getItem('cw-theme');
if(saved) applyTheme(saved);

document.querySelectorAll('#theme-toggle, #theme-toggle-article').forEach(btn=>{
  btn && btn.addEventListener('click', ()=>{
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('cw-theme', isDark ? 'dark' : 'light');
  });
});

// Back to top button show/hide
const back = document.getElementById('back-to-top');
window.addEventListener('scroll', ()=>{
  if(window.scrollY > 300) back.style.display = 'block';
  else back.style.display = 'none';
});
back && back.addEventListener('click', ()=> window.scrollTo({top:0,behavior:'smooth'}));

// Search filter (mobile)
const searchInput = document.getElementById('search-input');
const cards = Array.from(document.querySelectorAll('.article-card'));
if(searchInput){
  searchInput.addEventListener('input', e=>{
    const q = e.target.value.trim().toLowerCase();
    cards.forEach(card=>{
      const txt = (card.textContent || '').toLowerCase();
      card.style.display = q === '' || txt.includes(q) ? 'block' : 'none';
    });
  });
}

// Category filter
document.querySelectorAll('.cat').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.cat').forEach(c=>c.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.cat;
    cards.forEach(card=>{
      if(cat === 'all') card.style.display = 'block';
      else card.style.display = (card.dataset.category === cat) ? 'block' : 'none';
    });
  });
});

// Simple share button handler (opens share links, mobile friendly)
document.querySelectorAll('.share').forEach(s=>{
  s.addEventListener('click', (ev)=>{
    ev.preventDefault();
    const platform = s.dataset.platform;
    const url = encodeURIComponent(location.href);
    let shareUrl = '#';
    if(platform === 'x') shareUrl = `https://x.com/intent/tweet?text=${url}`;
    if(platform === 'discord') shareUrl = `https://discord.com/channels/@me`;
    window.open(shareUrl,'_blank');
  });
});

// small: open author popup on index (if desired)
const mobileLogo = document.querySelector('.mobile-logo');
if(mobileLogo){
  mobileLogo.addEventListener('click', ()=>{
    // tiny helpful info
    if(confirm('Open Crypto_King877 profile on X?')) window.open('https://x.com/Crypto_King877?t=xE-SEtAtuLnZ7Fbr6mgE5A&s=09','_blank');
  });
}
