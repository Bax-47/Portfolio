// Mobile menu toggle -- hardened for reliable touch behavior on phones
document.addEventListener('DOMContentLoaded', function () {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileCloseBtn = document.getElementById('mobileCloseBtn');

  function openMenu(e) {
    if (e) e.preventDefault();
    if (mobileMenu) mobileMenu.classList.add('open');
  }

  // Used by the close (X) button and touchend -- safe to preventDefault here,
  // these controls have no href/navigation of their own.
  function closeMenu(e) {
    if (e) e.preventDefault();
    if (mobileMenu) mobileMenu.classList.remove('open');
  }

  // Used when a nav link inside the menu is tapped -- must NOT preventDefault,
  // otherwise the browser cannot jump to the target section.
  function closeMenuAfterNav() {
    if (mobileMenu) mobileMenu.classList.remove('open');
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
    link.addEventListener('click', closeMenuAfterNav);
  });

  // Close the dropdown if the person taps anywhere outside it
  document.addEventListener('click', function (e) {
    if (!mobileMenu || !mobileMenu.classList.contains('open')) return;
    const clickedInsideMenu = mobileMenu.contains(e.target);
    const clickedHamburger = hamburgerBtn && hamburgerBtn.contains(e.target);
    if (!clickedInsideMenu && !clickedHamburger) {
      closeMenuAfterNav();
    }
  });

  // Close automatically if window is resized/rotated past the mobile breakpoint
  window.addEventListener('resize', function () {
    if (window.innerWidth > 860 && mobileMenu) {
      closeMenuAfterNav();
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
