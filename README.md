# 🚀 Rahul Kumar Sah - Professional Portfolio Website

A modern, fully responsive personal portfolio website built with vanilla HTML, CSS, and JavaScript.

## 📋 Project Overview

This portfolio website showcases Rahul Kumar Sah's professional profile as a B.Tech Computer Science & Engineering student and aspiring software engineer. The site features a clean, dark-themed design with smooth animations and interactive elements.

## 📁 Folder Structure

```
Personal Portfolio/
├── index.html          # Main HTML file with all sections
├── style.css           # Complete styling and responsive design
├── script.js           # Interactive functionality and animations
├── resume.pdf          # Resume document (placeholder)
└── README.md           # This file
```

## ✨ Features

### 🎨 Design & UI

- **Modern Dark Theme** - Professional dark background with cyan/blue accent colors
- **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- **Smooth Animations** - Fade-in effects, hover animations, and scroll effects
- **Interactive Elements** - Hover effects on buttons, cards, and links
- **Clean Typography** - Using Google Fonts (Poppins & Inter)
- **Professional Icons** - Font Awesome icons throughout

### 📱 Responsive Breakpoints

- **Desktop**: Full layout with all sections visible
- **Tablet** (768px and below): Optimized grid layouts
- **Mobile** (480px and below): Single-column layout with hamburger navigation

### 🎯 Website Sections

1. **Navigation Bar**

   - Fixed header with logo and navigation links
   - Mobile-friendly hamburger menu
   - Active link indicator

2. **Hero Section**

   - Prominent name and professional title
   - Tagline about interests
   - Call-to-action buttons
   - Animated avatar placeholder
   - Scroll indicator

3. **About Me**

   - Professional summary
   - Education details
   - Key focus areas
   - Statistics cards

4. **Skills**

   - Programming Languages (Python, Java, JavaScript, C)
   - Web Technologies (HTML, CSS, JavaScript, Responsive Design)
   - Tools & Platforms (Git, GitHub, VS Code, MySQL)
   - Animated progress bars

5. **Projects**

   - 6 Project cards with descriptions
   - Technology stack badges
   - GitHub and Live Demo links
   - Hover animations

6. **Certifications & Achievements**

   - AWS Certification
   - Hackathon wins
   - Various courses and certifications
   - Achievement cards

7. **Resume Section**

   - Download button for resume
   - Placeholder for PDF file

8. **Contact Section**

   - Contact information
   - Social media links
   - Interactive contact form
   - Form validation

9. **Footer**
   - Quick links
   - Social media icons
   - Copyright information

## 🚀 How to Run Locally

### Method 1: Using a Local Server (Recommended)

#### With Python:

```bash
# Python 3.x
python -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000
```

Then open your browser and navigate to: `http://localhost:8000`

#### With Node.js (http-server):

```bash
# Install http-server globally (if not already installed)
npm install -g http-server

# Run server in the project directory
http-server

# Visit: http://localhost:8080
```

#### With Live Server (VS Code Extension):

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. Browser opens automatically

### Method 2: Direct File Opening (Limited Support)

- Double-click `index.html` to open in your default browser
- **Note**: Some features may not work properly due to browser security restrictions

### Method 3: Using Windows Explorer

1. Navigate to the portfolio folder
2. Hold Shift and right-click in the folder
3. Select "Open PowerShell window here"
4. Run: `python -m http.server 8000`
5. Open browser to `http://localhost:8000`

## 🔧 Technologies Used

### Frontend

- **HTML5** - Semantic markup with proper SEO meta tags
- **CSS3** - Modern styling with Grid, Flexbox, and animations
- **JavaScript (Vanilla)** - No frameworks, pure ES6+ JavaScript
- **Google Fonts** - Professional typography
- **Font Awesome 6** - Icon library via CDN

### Features

- **Smooth Scrolling** - SPA-like navigation without page reloads
- **Intersection Observer API** - Efficient animation triggering
- **Form Validation** - Client-side validation with feedback
- **Mobile Navigation** - Hamburger menu for mobile devices
- **Lazy Loading Ready** - Structure supports lazy loading
- **Accessibility** - Semantic HTML and keyboard navigation

## 📝 Content Customization

### Update Personal Information

Edit `index.html` and search for:

- Replace `Rahul Kumar Sah` with your name
- Update `sahr67568@gmail.com` with your email
- Update LinkedIn profile URL
- Update GitHub profile URL
- Add your bio and information

### Modify Skills

Find the Skills section in `index.html`:

```html
<div class="skill-item">
  <span class="skill-name">Skill Name</span>
  <div class="skill-bar">
    <div class="skill-progress" style="width: 90%"></div>
  </div>
</div>
```

Update the `width` percentage (0-100%) to reflect your proficiency.

### Add/Edit Projects

Projects are in the Projects section. Each project card follows this structure:

```html
<div class="project-card">
  <div class="project-image">Icon</div>
  <div class="project-content">
    <h3>Project Title</h3>
    <p>Description</p>
    <div class="tech-stack">
      <span class="tech-badge">Technology</span>
    </div>
    <div class="project-links">
      <a href="github-link">View Code</a>
      <a href="live-demo-link">Live Demo</a>
    </div>
  </div>
</div>
```

### Add Resume PDF

1. Add your resume as `resume.pdf` in the same folder
2. The download button will work automatically
3. Users can download your resume directly

### Update Social Links

Find all social media links (search for `href` in the Contact section and Footer):

- Replace LinkedIn URL
- Replace GitHub URL
- Update email address

## 🎨 Customization Guide

### Change Color Scheme

Edit CSS variables in `style.css` (line 8-21):

```css
:root {
  --primary-color: #00d4ff; /* Main accent color */
  --secondary-color: #9d4edd; /* Secondary accent */
  --dark-bg: #0d1117; /* Dark background */
  --light-text: #e6edf3; /* Light text color */
  --muted-text: #8b949e; /* Muted text color */
  /* ... more colors ... */
}
```

### Adjust Spacing & Sizing

Modify the spacing variables in `style.css`:

```css
--spacing-xs: 0.5rem;
--spacing-sm: 1rem;
--spacing-md: 1.5rem;
--spacing-lg: 2rem;
--spacing-xl: 3rem;
--spacing-2xl: 4rem;
```

### Modify Animations

Find `@keyframes` in `style.css` to customize animations:

- `float` - Floating animation
- `pulse` - Pulsing effect
- `scroll` - Scroll indicator
- `fadeInUp` - Fade and slide up
- `fadeIn` - Simple fade

## 📊 Form Handling

The contact form currently:

1. Validates all input fields
2. Checks email format
3. Shows success/error messages
4. Logs data to browser console
5. Prepares a mailto link (can be enabled)

**Note**: To fully handle email submissions, you would need a backend service like:

- Formspree
- EmailJS
- Backend API
- Netlify Forms

Current setup displays a success message and logs data to console.

## 🔍 SEO Features

The website includes:

- Meta description tag
- Meta keywords
- Meta author tag
- Semantic HTML structure
- Proper heading hierarchy
- Alt text ready for images
- Open Graph ready structure

To further improve SEO:

1. Add meta og:image, og:title, og:description
2. Create sitemap.xml
3. Add robots.txt
4. Use Schema.org structured data
5. Ensure fast page load times

## 🎯 Performance Tips

1. **Image Optimization**

   - Use WebP format for better compression
   - Implement lazy loading for images

2. **Caching**

   - Set appropriate cache headers via server
   - Use service workers for offline capability

3. **Minification**

   - Minify CSS and JavaScript for production
   - Use tools like TinyMG for image compression

4. **Code Splitting**
   - Load JavaScript modules separately if needed
   - Defer non-critical CSS

## 🐛 Browser Support

This portfolio works on:

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Optimization

- Hamburger menu for navigation
- Touch-friendly buttons and links
- Optimized font sizes
- Responsive images
- Proper viewport settings
- Fast loading on slow networks

## ♿ Accessibility

Features included:

- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels ready
- Keyboard navigation support
- Color contrast compliance
- Alt text ready for images

## 🚀 Deployment

### Netlify (Recommended - Free)

1. Create account at netlify.com
2. Drag and drop the portfolio folder
3. Instant deployment with HTTPS

### GitHub Pages (Free)

1. Create repository on GitHub
2. Push files to `gh-pages` branch
3. Enable GitHub Pages in settings
4. Access at `username.github.io/portfolio`

### Vercel (Free)

1. Create account at vercel.com
2. Connect GitHub repository
3. Auto-deploy on push
4. Get free domain

### Traditional Hosting

1. Upload files via FTP
2. Point domain to hosting server
3. Set up SSL certificate

## 📚 File Descriptions

### index.html (400+ lines)

- Semantic HTML5 structure
- 8 main sections
- Google Fonts and Font Awesome links
- Meta tags for SEO
- Form elements with validation

### style.css (700+ lines)

- Complete styling system
- CSS Grid and Flexbox layouts
- Responsive design breakpoints
- Animations and transitions
- Dark theme with accent colors
- Mobile-first approach

### script.js (400+ lines)

- Smooth scrolling navigation
- Mobile menu toggle
- Active link tracking
- Contact form validation
- Intersection Observer animations
- Keyboard shortcuts
- Performance optimizations
- Console helper functions

## 🔐 Security Notes

- Contact form validates input
- No external API keys exposed
- HTTPS ready
- No sensitive data in code
- Safe for public repositories

## 📞 Support & Customization

For modifications:

1. Keep file structure consistent
2. Update all links and contact info
3. Test on multiple devices
4. Validate HTML and CSS
5. Check browser compatibility

## 📄 License

This portfolio template is free to use and modify for personal use.

## ✅ Checklist for Launch

- [ ] Update all personal information
- [ ] Replace placeholder email
- [ ] Update social media links
- [ ] Add resume.pdf file
- [ ] Customize colors if desired
- [ ] Test on mobile, tablet, desktop
- [ ] Test contact form
- [ ] Check all links work
- [ ] Validate HTML with W3C
- [ ] Test with Google PageSpeed
- [ ] Deploy to hosting service
- [ ] Set up custom domain (optional)
- [ ] Monitor analytics (optional)

## 🎉 Conclusion

Your portfolio is now ready to showcase your skills and projects! This clean, modern design will impress potential employers and collaborators.

---

**Happy coding! 🚀**

For questions or updates, visit: sahr67568@gmail.com
