import { initNavigation } from './nav.js';
import { initAnimations } from './animations.js';

function init() {
  initNavigation();
  initAnimations();
  handleHeaderScroll();
  window.addEventListener('scroll', handleHeaderScroll);
}

function handleHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  if (window.scrollY > 10) {
    header.classList.add('is-scrolled');
  } else {
    header.classList.remove('is-scrolled');
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
