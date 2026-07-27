// Mobile menu toggle -- hardened for reliable touch behavior on phones
document.addEventListener('DOMContentLoaded', function () {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileCloseBtn = document.getElementById('mobileCloseBtn');

  function openMenu(e) {
    if (e) e.preventDefault();
    if (mobileMenu) mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu(e) {
    if (e) e.preventDefault();
    if (mobileMenu) mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener('click', openMenu);
    hamburgerBtn.addEventListener('touchend', openMenu, { passive: false });
  }

  if (mobileCloseBtn && mobileMenu) {
    mobileCloseBtn.addEventListener('click', closeMenu);
    mobileCloseBtn.addEventListener('touchend', closeMenu, { passive: false });
  }

  document.querySelectorAll('.mobile-link, .mobile-talk').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Close menu automatically if window is resized/rotated past the mobile breakpoint
  window.addEventListener('resize', function () {
    if (window.innerWidth > 860 && mobileMenu) {
      closeMenu();
    }
  });
});

// Scroll reveal for cards
document.addEventListener('DOMContentLoaded', function () {
  const revealEls = document.querySelectorAll(
    '.tl-card, .work-card, .fw-card, .mini-card, .stat-box, .cert-chip, .process-card'
  );

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
});
