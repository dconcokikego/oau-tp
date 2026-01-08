# Telepresence Lectures

## Overview

Telepresence Lectures is a production-ready academic platform delivering university-level lecture content in physics, mathematics, and computer science. This platform provides free, comprehensive educational resources accessible to students, educators, and lifelong learners worldwide.

## Mission

To democratize access to high-quality university-level education by providing rigorous academic content without barriers. Every lecture maintains university standards while remaining accessible to motivated learners at any stage of their academic journey.

## Technology Stack

### Core Technologies
- **HTML5** - Semantic markup for accessibility and SEO
- **CSS3** - Custom design system with CSS variables
- **Vanilla JavaScript** - ES6+ modules, no dependencies
- **Vercel** - Hosting and deployment platform

### Why No Frameworks?

This platform intentionally uses no frameworks or external dependencies:

- **Performance**: Minimal payload, fast loading times
- **Longevity**: No dependency rot or breaking updates
- **Accessibility**: Works on any device with a modern browser
- **Maintainability**: Simple codebase, clear patterns, sustainable long-term
- **Learning**: Demonstrates fundamentals without abstraction layers

## Project Structure

```
oau-tp/
├── index.html                  # Homepage
├── vercel.json                 # Vercel configuration
├── README.md                   # This file
├── .gitignore                  # Git ignore rules
│
├── src/
│   ├── css/
│   │   ├── base.css           # Reset, variables, typography, accessibility
│   │   ├── layout.css         # Header, footer, containers, grids
│   │   ├── components.css     # Buttons, cards, forms, accordions
│   │   ├── animations.css     # Scroll reveals, hover effects
│   │   └── pages.css          # Page-specific styles
│   │
│   └── js/
│       ├── main.js            # Application initialization
│       ├── nav.js             # Navigation and mobile menu
│       ├── animations.js      # IntersectionObserver animations
│       ├── utils.js           # Helper functions, accordions
│       └── filters.js         # Course filtering logic
│
├── pages/
│   ├── about.html             # About page
│   ├── courses.html           # Course catalogue with filters
│   ├── faq.html               # FAQ with accordions
│   ├── contact.html           # Contact form and info
│   ├── phy101.html            # Introduction to Physics
│   ├── phy202.html            # Electromagnetism
│   ├── mat101.html            # Calculus I
│   ├── mat201.html            # Calculus II
│   ├── mat301.html            # Linear Algebra
│   ├── csc150.html            # Computer Science Fundamentals
│   └── csc250.html            # Data Structures and Algorithms
│
└── public/
    └── assets/
        ├── images/            # Image assets
        ├── icons/             # Icon files
        └── fonts/             # Custom fonts (if needed)
```

## Design System

### Color Palette

```css
--color-primary: #2563eb        /* Primary blue for actions */
--color-primary-dark: #1e40af   /* Darker blue for hover states */
--color-success: #10b981        /* Green for success states */
--color-text: #0f172a           /* Primary text color */
--color-text-secondary: #475569 /* Secondary text color */
--color-bg: #ffffff             /* Background color */
--color-bg-secondary: #f8fafc   /* Secondary background */
--color-border: #e2e8f0         /* Border color */
```

### Typography Scale

```css
--font-size-xs: 0.75rem     /* 12px */
--font-size-sm: 0.875rem    /* 14px */
--font-size-base: 1rem      /* 16px */
--font-size-lg: 1.125rem    /* 18px */
--font-size-xl: 1.25rem     /* 20px */
--font-size-2xl: 1.5rem     /* 24px */
--font-size-3xl: 1.875rem   /* 30px */
--font-size-4xl: 2.25rem    /* 36px */
--font-size-5xl: 3rem       /* 48px */
```

### Spacing Scale

Based on 4px increments:
```css
--space-1: 0.25rem   /* 4px */
--space-2: 0.5rem    /* 8px */
--space-3: 0.75rem   /* 12px */
--space-4: 1rem      /* 16px */
--space-6: 1.5rem    /* 24px */
--space-8: 2rem      /* 32px */
--space-12: 3rem     /* 48px */
--space-16: 4rem     /* 64px */
--space-20: 5rem     /* 80px */
```

## Local Development

### Option 1: Python HTTP Server
```bash
python3 -m http.server 8000
```
Navigate to `http://localhost:8000`

### Option 2: Node.js HTTP Server
```bash
npx http-server -p 8000
```
Navigate to `http://localhost:8000`

### Option 3: VS Code Live Server
Install the Live Server extension and click "Go Live" in the status bar.

## Deployment

### Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Vercel GitHub Integration

1. Push code to GitHub repository
2. Import project in Vercel dashboard
3. Automatic deployments on push to main branch

### Configuration

The `vercel.json` file includes:
- Clean URLs (no .html extensions)
- Security headers (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection)
- Cache headers for static assets (CSS, JS, images)

## Adding New Content

### Adding a New Course

1. Create HTML file in `/pages/` directory (e.g., `mat401.html`)
2. Follow existing course page structure
3. Update `/pages/courses.html` with new course card
4. Add navigation links in footer if needed

### Adding a New Lecture

1. Locate the course page HTML file
2. Add new lecture card to the `lectures-grid` section
3. Follow the lecture card template:
```html
<article class="card lecture-card animate-on-scroll">
  <div class="lecture-card__header">
    <span class="badge badge--primary">Lecture X</span>
  </div>
  <h3 class="lecture-card__title">Lecture Title</h3>
  <p class="lecture-card__description">Description text</p>
  <div class="lecture-card__footer">
    <span class="card__meta-item">Duration</span>
    <button class="btn btn--primary btn--sm">View Lecture</button>
  </div>
</article>
```

## Accessibility Features

- Semantic HTML5 elements throughout
- ARIA labels and roles for interactive elements
- Skip to main content link
- Keyboard navigation support for all interactive elements
- Focus visible styles with 2px outline
- Screen reader only text where appropriate
- `prefers-reduced-motion` media query support
- Color contrast ratios meeting WCAG AA standards
- Responsive design supporting screen readers

## Performance

- No external dependencies or frameworks
- Minimal CSS and JavaScript payload
- CSS and JavaScript modules for code organization
- Lazy loading via IntersectionObserver for animations
- Optimized for Core Web Vitals:
  - Fast First Contentful Paint (FCP)
  - Low Cumulative Layout Shift (CLS)
  - Quick Time to Interactive (TTI)

## Browser Support

Tested and supported on:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Testing Checklist

### Functionality
- [ ] Homepage loads correctly with all links working
- [ ] Mobile navigation toggles properly
- [ ] Course filters show/hide correct courses
- [ ] FAQ accordions expand and collapse
- [ ] Contact form fields validate correctly
- [ ] All internal links navigate to correct pages
- [ ] All course pages display lecture lists

### Responsive Design
- [ ] Test on mobile (320px - 480px)
- [ ] Test on tablet (768px - 1024px)
- [ ] Test on desktop (1200px+)
- [ ] Test on large screens (1920px+)
- [ ] Mobile menu works correctly
- [ ] Typography scales appropriately

### Accessibility
- [ ] Keyboard navigation works throughout site
- [ ] Screen reader compatibility verified
- [ ] Focus indicators visible on all interactive elements
- [ ] Color contrast meets WCAG AA standards
- [ ] ARIA labels present where needed
- [ ] Headings follow logical hierarchy

### Performance
- [ ] Page load time under 2 seconds
- [ ] No console errors in browser
- [ ] Animations smooth at 60fps
- [ ] Images optimized (if added)
- [ ] CSS and JS files minified for production

## Maintenance Guidelines

### Code Quality Standards

- No inline styles (use CSS classes)
- No JavaScript in HTML (use external modules)
- Consistent naming conventions (BEM for CSS)
- Comments for complex logic only
- No duplicate CSS rules
- Mobile-first responsive approach

### CSS Organization

- `base.css` - Never modify without careful consideration
- `components.css` - Add new components here
- `pages.css` - Page-specific overrides only
- Use CSS variables for all values
- Follow established patterns

### JavaScript Organization

- Keep modules focused and single-purpose
- Export functions explicitly
- Use ES6+ features consistently
- No global variables
- Event delegation where appropriate

## Content Standards

All course content must:
- Align with standard university curricula
- State clear learning objectives
- Specify prerequisites explicitly
- Use consistent academic terminology
- Provide accurate, up-to-date information
- Maintain appropriate academic rigor for stated level

## Security

- No user data collection or storage
- No tracking scripts or cookies
- Security headers configured in vercel.json
- No external API calls
- Form action ready for Formspree integration

## License

Educational content provided freely for academic use. No restrictions on linking, referencing, or educational use with proper attribution.

## Contact

For questions, content errors, or suggestions:
- Email: contact@telepresencelectures.edu
- Location: Ile-Ife, Nigeria

## Acknowledgments

Built with care for students and educators pursuing knowledge in physics, mathematics, and computer science.

---

**Last Updated**: January 2026
**Version**: 1.0.0
**Status**: Production Ready
