export function initNavigation() {
  const toggle = document.querySelector('.nav__toggle');
  const navList = document.querySelector('.nav__list');
  const navLinks = document.querySelectorAll('.nav__link');
  
  if (!toggle || !navList) return;
  
  // Mobile menu toggle
  toggle.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen);
    document.body.classList.toggle('nav-open', isOpen);
  });
  
  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.site-nav') && navList.classList.contains('is-open')) {
      navList.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
    }
  });
  
  // Close menu on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navList.classList.contains('is-open')) {
      navList.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
      toggle.focus();
    }
  });
  
  // Close menu when clicking a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navList.classList.contains('is-open')) {
        navList.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-open');
      }
    });
  });
  
  // Set active nav link based on current path
  const currentPath = window.location.pathname;
  navLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname;
    
    // Handle root path
    if (currentPath === '/' || currentPath === '/index.html') {
      if (linkPath === '/' || linkPath === '/index.html') {
        link.classList.add('is-active');
        link.setAttribute('aria-current', 'page');
      }
    } else if (linkPath !== '/' && currentPath.includes(linkPath)) {
      link.classList.add('is-active');
      link.setAttribute('aria-current', 'page');
    }
  });
}
