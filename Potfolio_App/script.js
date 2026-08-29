//    MOBILE NAVIGATION
const menuButton = document.querySelector(".menu-button");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  const icon = menuButton.querySelector("i");

  if (navMenu.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});

//Close mobile menu

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");

    const icon = menuButton.querySelector("i");

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  });
});

//TYPING EFFECT

const typingText = document.querySelector(".typing-text");

const roles = [
  "Web Developer",
  "Frontend Developer",
  "UI Designer",
  "Freelancer",
];

let roleIndex = 0;
let characterIndex = 0;

let deleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (!deleting) {
    typingText.textContent = currentRole.substring(0, characterIndex + 1);

    characterIndex++;

    if (characterIndex === currentRole.length) {
      deleting = true;

      setTimeout(typeEffect, 1500);

      return;
    }
  } else {
    typingText.textContent = currentRole.substring(0, characterIndex - 1);

    characterIndex--;

    if (characterIndex === 0) {
      deleting = false;

      roleIndex++;

      if (roleIndex >= roles.length) {
        roleIndex = 0;
      }
    }
  }

  const typingSpeed = deleting ? 60 : 100;

  setTimeout(typeEffect, typingSpeed);
}

// Start typing effect
typeEffect();

//    ACTIVE NAVIGATION LINK
const sections = document.querySelectorAll("section[id]");

function updateActiveLink() {
  const scrollPosition = window.scrollY + 150;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    const sectionHeight = section.offsetHeight;

    const sectionId = section.getAttribute("id");

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });

      const activeLink = document.querySelector(
        `.nav-link[href="#${sectionId}"]`,
      );

      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
}

window.addEventListener("scroll", updateActiveLink);

//    HEADER SCROLL EFFECT
const header = document.querySelector(".header");

function updateHeader() {
  if (window.scrollY > 50) {
    header.style.background = "rgba(15, 23, 42, 0.97)";
  } else {
    header.style.background = "rgba(15, 23, 42, 0.85)";
  }
}

window.addEventListener("scroll", updateHeader);

//    SCROLL REVEAL

const revealElements = document.querySelectorAll(
  ".section-title, .about-container, .skill-card, .project-card, .contact-container",
);

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");

        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  },
);

revealElements.forEach((element) => {
  element.classList.add("reveal");

  revealObserver.observe(element);
});

//    CONTACT FORM

const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();

  const email = document.querySelector("#email").value.trim();

  const subject = document.querySelector("#subject").value.trim();

  const message = document.querySelector("#message").value.trim();

  if (!name || !email || !subject || !message) {
    alert("Please fill in all fields.");

    return;
  }

  // email validation

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");

    return;
  }

  alert(`Thanks ${name}! Your message has been received.`);

  contactForm.reset();
});

//    CURRENT YEAR

const footerText = document.querySelector(".footer p");

if (footerText) {
  const currentYear = new Date().getFullYear();

  footerText.innerHTML = `© ${currentYear} Your Name. All Rights Reserved.`;
}
