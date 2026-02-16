document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");
  const errorMessage = document.getElementById("errorMessage");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(form);

      try {
        const response = await fetch("https://formspree.io/f/xpqwgvrg", {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" }
        });

        if (response.ok) {
          successMessage.style.display = "block";
          errorMessage.style.display = "none";
          form.reset();
        } else {
          throw new Error("Network error");
        }
      } catch (error) {
        errorMessage.style.display = "block";
        successMessage.style.display = "none";
      }
    });
  }

 
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }

});


const scrollContainer = document.getElementById("scrollContainer");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

rightBtn.addEventListener("click", () => {
  scrollContainer.scrollBy({ left: 350, behavior: "smooth" });
});

leftBtn.addEventListener("click", () => {
  scrollContainer.scrollBy({ left: -350, behavior: "smooth" });
});


const revealElements = document.querySelectorAll(".reveal-up");

function revealOnScroll() {
  revealElements.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

 console.log("Portfolio website loaded successfully");