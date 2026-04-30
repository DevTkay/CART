/* ============================================================
   CART Website — script.js
   Center for Academic Resource and Training
   Modibbo Adama University, Yola
   ============================================================ */

/* =========== MOBILE MENU TOGGLE =========== */
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');

  // Close menu when a link inside it is clicked
  const links = menu.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
    });
  });
}

/* =========== ACTIVE NAV LINK ON SCROLL =========== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navLinks = document.querySelectorAll('nav a');

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });
}

/* =========== STAT BOX HIGHLIGHT ON SCROLL =========== */
function initStatAnimation() {
  const statEls = document.querySelectorAll('.stat-box strong');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.style.transition = 'color 0.5s ease';
        el.style.color = 'var(--gold-dark)';
        setTimeout(() => {
          el.style.color = 'var(--navy)';
        }, 700);
      }
    });
  }, { threshold: 0.5 });

  statEls.forEach(el => observer.observe(el));
}

/* =========== PROGRAM CARDS CLICK NAVIGATION =========== */
function initProgCardNavigation() {
  const progCards = document.querySelectorAll('.prog-card[data-target]');
  progCards.forEach(card => {
    card.addEventListener('click', () => {
      const target = card.getAttribute('data-target');
      if (target) {
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* =========== STICKY HEADER SHADOW ON SCROLL =========== */
function initStickyHeader() {
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.style.boxShadow = '0 4px 24px rgba(11,37,69,0.18)';
    } else {
      header.style.boxShadow = '0 2px 12px rgba(11,37,69,0.10)';
    }
  });
}

/* =========== FADE-IN ON SCROLL (sections) =========== */
function initFadeIn() {
  const fadeEls = document.querySelectorAll(
    '.program-full-card, .unit-card, .event-card, .stat-box'
  );

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  fadeEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

/* =========== INIT ALL ON DOM READY =========== */
document.addEventListener('DOMContentLoaded', () => {
  initScrollSpy();
  initStatAnimation();
  initProgCardNavigation();
  initStickyHeader();
  initFadeIn();
});
