// src/js/main.js
// Skrip interaktif untuk Natural Aceh
// Mengelola menu responsif, scroll mulus, dan efek hover pada indeks pilar

// Toggle mobile menu
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileBtn && mobileMenu) {
  mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Hover efek pada indeks pilar (menyorot background)
const pillarItems = document.querySelectorAll('section ul li');
pillarItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.classList.add('bg-clay');
  });
  item.addEventListener('mouseleave', () => {
    item.classList.remove('bg-clay');
  });
});

// Optional: fade‑in on scroll using IntersectionObserver
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('opacity-100', 'translate-y-0');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
fadeElements.forEach(el => {
  el.classList.add('opacity-0', 'translate-y-4', 'transition', 'duration-700');
  observer.observe(el);
});
