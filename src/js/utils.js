// Debounce function
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Format date helper
export function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

// Toggle accordion function
export function toggleAccordion(item) {
  const isOpen = item.classList.contains('is-open');
  
  // Close all siblings
  const parent = item.parentElement;
  const siblings = parent.querySelectorAll('.accordion__item');
  siblings.forEach(sibling => {
    if (sibling !== item) {
      sibling.classList.remove('is-open');
    }
  });
  
  // Toggle current item
  item.classList.toggle('is-open');
}

// Initialize accordions
export function initAccordions() {
  const accordionHeaders = document.querySelectorAll('.accordion__header');
  
  accordionHeaders.forEach(header => {
    // Click handler
    header.addEventListener('click', () => {
      const item = header.closest('.accordion__item');
      toggleAccordion(item);
    });
    
    // Keyboard support
    header.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const item = header.closest('.accordion__item');
        toggleAccordion(item);
      }
    });
  });
}
