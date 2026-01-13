/* ============================================
   PERSONAL PORTFOLIO - JAVASCRIPT
   ============================================ */

// ========== DOM ELEMENTS ==========
const navLinks = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");
const navLinksContainer = document.getElementById("navLinks");
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

// ========== SMOOTH SCROLLING ==========
/**
 * Handles smooth scrolling to sections when nav links are clicked
 */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");

    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      // Close hamburger menu if open
      navLinksContainer.classList.remove("active");

      // Scroll to target
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Update active nav link
      updateActiveNavLink(targetId);
    }
  });
});

// ========== MOBILE NAVIGATION ==========
/**
 * Toggle mobile navigation menu
 */
hamburger.addEventListener("click", () => {
  navLinksContainer.classList.toggle("active");
});

/**
 * Close mobile menu when a link is clicked
 */
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinksContainer.classList.remove("active");
  });
});

// ========== ACTIVE NAV LINK TRACKING ==========
/**
 * Updates the active nav link based on current scroll position
 */
function updateActiveNavLink(targetId = null) {
  const sections = document.querySelectorAll("section[id]");

  if (targetId) {
    // If specific target provided, use it
    navLinks.forEach((link) => link.classList.remove("active"));
    const activeLink = document.querySelector(`a[href="${targetId}"]`);
    if (activeLink) activeLink.classList.add("active");
  } else {
    // Otherwise, determine based on scroll position
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  }
}

// Update active link on scroll
window.addEventListener("scroll", updateActiveNavLink);

// ========== INTERSECTION OBSERVER FOR ANIMATIONS ==========
/**
 * Trigger fade-in animations when elements come into view
 */
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe fade-in elements
document.querySelectorAll(".fade-in, .fade-in-up").forEach((el) => {
  observer.observe(el);
});

// ========== CONTACT FORM HANDLING ==========
/**
 * Handle contact form submission
 */
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validation
  if (!name || !email || !subject || !message) {
    showFormMessage("Please fill in all fields", "error");
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showFormMessage("Please enter a valid email address", "error");
    return;
  }

  // Since this is a static website without backend,
  // we'll show a success message and prepare email data
  const emailData = {
    to: "sahr67568@gmail.com",
    subject: `New Contact Form Submission: ${subject}`,
    body: `
From: ${name}
Email: ${email}

Message:
${message}
        `,
  };

  // Create mailto link and open it
  const mailtoLink = `mailto:sahr67568@gmail.com?subject=${encodeURIComponent(
    `Contact Form: ${subject}`
  )}&body=${encodeURIComponent(emailData.body)}`;

  // Show success message
  showFormMessage(
    "✓ Message prepared! Your default email client will open.",
    "success"
  );

  // Reset form
  contactForm.reset();

  // Open email client (optional - uncomment if desired)
  // window.location.href = mailtoLink;

  // Log the data for reference
  console.log("Contact Form Data:", {
    name,
    email,
    subject,
    message,
    timestamp: new Date().toLocaleString(),
  });
});

/**
 * Display form message
 */
function showFormMessage(message, type) {
  formNote.textContent = message;
  formNote.className = `form-note ${type}`;

  // Auto-hide success message after 5 seconds
  if (type === "success") {
    setTimeout(() => {
      formNote.className = "form-note";
    }, 5000);
  }
}

// ========== SCROLL TO TOP FUNCTIONALITY ==========
/**
 * Show/hide scroll to top button based on scroll position
 */
window.addEventListener("scroll", () => {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  if (window.scrollY > 300) {
    // Show button if not already visible
    if (!scrollToTopBtn) {
      createScrollToTopButton();
    }
  }
});

/**
 * Create scroll to top button dynamically
 */
function createScrollToTopButton() {
  if (document.getElementById("scrollToTopBtn")) return;

  const btn = document.createElement("button");
  btn.id = "scrollToTopBtn";
  btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  btn.className = "scroll-to-top-btn";
  btn.title = "Scroll to top";

  // Add styling via inline styles
  btn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #00d4ff, #58a6ff);
        color: #0d1117;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999;
        box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
        transition: all 0.3s ease;
        opacity: 1;
    `;

  // Add hover effect
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "translateY(-3px)";
    btn.style.boxShadow = "0 6px 25px rgba(0, 212, 255, 0.5)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translateY(0)";
    btn.style.boxShadow = "0 4px 15px rgba(0, 212, 255, 0.3)";
  });

  // Scroll to top on click
  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  document.body.appendChild(btn);

  // Hide button on scroll to top
  window.addEventListener("scroll", () => {
    if (window.scrollY <= 300) {
      btn.style.opacity = "0";
      btn.style.pointerEvents = "none";
    } else {
      btn.style.opacity = "1";
      btn.style.pointerEvents = "auto";
    }
  });
}

// ========== TYPED TEXT EFFECT ==========
/**
 * Create a simple typing effect (optional enhancement)
 */
function typeWriter(element, text, speed = 50) {
  if (!element) return;

  let i = 0;
  element.textContent = "";

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// ========== PAGE LOAD ANIMATIONS ==========
/**
 * Initialize page with animations on load
 */
window.addEventListener("load", () => {
  // Trigger animations for fade-in elements
  const fadeInElements = document.querySelectorAll(".fade-in, .fade-in-up");
  fadeInElements.forEach((el, index) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    setTimeout(() => {
      el.style.transition = "all 0.8s ease forwards";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, index * 100);
  });

  // Initialize skill bars animation
  animateSkillBars();
});

// ========== SKILL BARS ANIMATION ==========
/**
 * Animate skill progress bars when they come into view
 */
function animateSkillBars() {
  const skillBars = document.querySelectorAll(".skill-progress");

  const skillObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          !entry.target.classList.contains("animated")
        ) {
          const width = entry.target.style.width;
          entry.target.style.width = "0";

          // Trigger animation
          setTimeout(() => {
            entry.target.style.transition = "width 1.5s ease-out";
            entry.target.style.width = width;
          }, 50);

          entry.target.classList.add("animated");
        }
      });
    },
    { threshold: 0.5 }
  );

  skillBars.forEach((bar) => skillObserver.observe(bar));
}

// ========== KEYBOARD SHORTCUTS ==========
/**
 * Add keyboard shortcuts for navigation
 */
document.addEventListener("keydown", (e) => {
  // Home key - scroll to top
  if (e.key === "Home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // End key - scroll to bottom
  if (e.key === "End") {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }
});

// ========== COPY TO CLIPBOARD ==========
/**
 * Copy text to clipboard when clicked
 */
function copyToClipboard(text, element) {
  navigator.clipboard.writeText(text).then(() => {
    const originalText = element.textContent;
    element.textContent = "Copied!";
    setTimeout(() => {
      element.textContent = originalText;
    }, 2000);
  });
}

// ========== DARK MODE TOGGLE (Optional Enhancement) ==========
/**
 * Toggle dark/light mode (optional feature)
 * Uncomment to enable
 */
// function toggleTheme() {
//     document.body.classList.toggle('light-theme');
//     localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
// }

// // Load saved theme preference
// if (localStorage.getItem('theme') === 'light') {
//     document.body.classList.add('light-theme');
// }

// ========== PERFORMANCE OPTIMIZATION ==========
/**
 * Lazy load images (if added in future)
 */
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add("loaded");
        observer.unobserve(img);
      }
    });
  });

  document
    .querySelectorAll("img[data-src]")
    .forEach((img) => imageObserver.observe(img));
}

// ========== CONSOLE WELCOME MESSAGE ==========
/**
 * Fun welcome message in console
 */
console.log(
  "%c Welcome to Rahul's Portfolio! ",
  "background: #00d4ff; color: #0d1117; font-size: 16px; font-weight: bold; padding: 10px;"
);
console.log(
  "%c Feel free to explore the code and get in touch! ",
  "background: #9d4edd; color: #fff; font-size: 12px; padding: 8px;"
);
console.log(
  "%c 📧 Email: sahr67568@gmail.com ",
  "font-size: 12px; color: #00d4ff;"
);
console.log(
  "%c 💼 LinkedIn: linkedin.com/in/rahul-sah-5aa255304 ",
  "font-size: 12px; color: #58a6ff;"
);

// ========== INITIALIZATION ==========
/**
 * Initialize all functionality
 */
function init() {
  // Set initial active link
  updateActiveNavLink();

  // Initialize animations
  if (document.readyState !== "loading") {
    animateSkillBars();
  }
}

// Run initialization when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

// Export functions for external use if needed
window.portfolioHelpers = {
  copyToClipboard,
  typeWriter,
  updateActiveNavLink,
};
