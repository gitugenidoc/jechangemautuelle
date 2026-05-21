// Smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#") {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

// File upload handler
const fileInput = document.getElementById("cv");
const fileUpload = document.querySelector(".file-upload");

fileUpload.addEventListener("click", () => {
  fileInput.click();
});

fileUpload.addEventListener("dragover", (e) => {
  e.preventDefault();
  fileUpload.style.borderColor = "#ff6b35";
  fileUpload.style.background = "rgba(255, 107, 53, 0.1)";
});

fileUpload.addEventListener("dragleave", () => {
  fileUpload.style.borderColor = "#00a86b";
  fileUpload.style.background = "rgba(0, 168, 107, 0.05)";
});

fileUpload.addEventListener("drop", (e) => {
  e.preventDefault();
  if (e.dataTransfer.files.length > 0) {
    fileInput.files = e.dataTransfer.files;
    updateFileLabel();
  }
  fileUpload.style.borderColor = "#00a86b";
  fileUpload.style.background = "rgba(0, 168, 107, 0.05)";
});

fileInput.addEventListener("change", updateFileLabel);

function updateFileLabel() {
  const fileLabel = document.querySelector(".file-label");
  if (fileInput.files.length > 0) {
    const fileName = fileInput.files[0].name;
    fileLabel.textContent = `✓ ${fileName}`;
    fileLabel.style.color = "#00a86b";
  }
}

// Form submission handling
const form = document.querySelector(".application-form");

form.addEventListener("submit", function (e) {
  const submitButton = document.querySelector(".submit-button");
  const originalText = submitButton.textContent;

  submitButton.textContent = "⏳ Envoi en cours...";
  submitButton.disabled = true;

  // Formspree will handle the submission
  setTimeout(() => {
    submitButton.textContent = originalText;
    submitButton.disabled = false;
  }, 3000);
});

// Add animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Animate feature cards
document.querySelectorAll(".feature-card").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "all 0.6s ease";
  observer.observe(card);
});

// Animate form on scroll
const formContainer = document.querySelector(".form-container");
if (formContainer) {
  formContainer.style.opacity = "0";
  formContainer.style.transform = "translateY(20px)";
  formContainer.style.transition = "all 0.6s ease";
  observer.observe(formContainer);
}

// Navigation highlight on scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Phone input formatter
const phoneInput = document.getElementById("phone");
if (phoneInput) {
  phoneInput.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 0) {
      value = "+33 " + value.slice(-9);
    }
    e.target.value = value;
  });
}

console.log("✅ Je Change Ma Mutuelle - Page chargée avec succès");
