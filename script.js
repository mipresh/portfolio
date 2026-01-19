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

  console.log("Portfolio website loaded successfully");

  const fadeImages = [
  "./images/side-view-worker-typing-laptop.jpg",
  "./images/laptop1.jpg"
];

const firstImg = document.querySelector(".gallery img.fade");
let index = 0;
const fadeInterval = 3000; // 3s for first image

// Set initial image
firstImg.src = fadeImages[index];

setInterval(() => {
  index = (index + 1) % fadeImages.length;
  firstImg.style.opacity = 0;           // start fade out

  setTimeout(() => {
    firstImg.src = fadeImages[index];   // change image
    firstImg.style.opacity = 1;         // fade in
  }, 500); // match half of transition duration
}, fadeInterval);


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
