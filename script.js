// Terminal typing effect
const typeLine = document.getElementById('typeLine');
const text = "Information Security Grad Student · Cal Poly Pomona";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    typeLine.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 35);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(typeWriter, 500);
});

// Scroll reveal for cards
const revealEls = document.querySelectorAll('.tl-card, .project-card, .mini-card, .stat-card, .cert-chip');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
