/* ===================================================
   ACKERMANN ADVOGADOS — script.js
   =================================================== */

(function () {
  'use strict';

  /* ── Header scroll shadow ── */
  const header = document.getElementById('header');

  function onScroll() {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  /* ── Mobile menu ── */
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  function toggleMenu(open) {
    hamburger.classList.toggle('open', open);
    nav.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  }

  hamburger.addEventListener('click', function () {
    const isOpen = nav.classList.contains('open');
    toggleMenu(!isOpen);
  });

  nav.querySelectorAll('.header__nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      toggleMenu(false);
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      toggleMenu(false);
    }
  });

  /* ── FAQ accordion ── */
  const faqList = document.getElementById('faq-list');

  if (faqList) {
    faqList.addEventListener('click', function (e) {
      const btn = e.target.closest('.faq__question');
      if (!btn) return;

      const item = btn.closest('.faq__item');
      const answer = item.querySelector('.faq__answer');
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      /* Close all others */
      faqList.querySelectorAll('.faq__question').forEach(function (q) {
        if (q !== btn) {
          q.setAttribute('aria-expanded', 'false');
          q.closest('.faq__item').querySelector('.faq__answer').classList.remove('open');
        }
      });

      /* Toggle current */
      btn.setAttribute('aria-expanded', String(!isOpen));
      answer.classList.toggle('open', !isOpen);
    });
  }

  /* ── Smooth scroll for anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = header ? header.offsetHeight + 8 : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  /* ── Scroll reveal (Intersection Observer) ── */
  const revealEls = document.querySelectorAll(
    '.pain__card, .services__card, .differentials__card, .testimonials__card, .process__step, .about__content, .about__photo-wrap'
  );

  if ('IntersectionObserver' in window) {
    revealEls.forEach(function (el, i) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.55s ease ' + (i % 4) * 0.08 + 's, transform 0.55s ease ' + (i % 4) * 0.08 + 's';
    });

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  }
})();
