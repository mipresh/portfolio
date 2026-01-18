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

  const galleryImages = document.querySelectorAll(".gallery img");
  const leftRightImages = Array.from(galleryImages).filter(
    img => !img.classList.contains("fixed")
  );

  const imageSets = [
    ["./images/side-view-worker-typing-laptop.jpg", "./images/bachalpsee-7572681_1280.jpg"],
    ["./images/vecteezy_woman-working-business-paperwork-on-desk-office_3283872.jpg", "./images/side-view-worker-typing-laptop.jpg"]
  ];

  let currentSet = 0;

  function showNextSet() {
    currentSet = (currentSet + 1) % imageSets.length;

    leftRightImages.forEach((img, index) => {
      img.classList.remove("active");

      setTimeout(() => {
        img.src = imageSets[currentSet][index];
        setTimeout(() => {
          img.classList.add("active");
        }, 50);
      }, 500);
    });
  }

  setInterval(showNextSet, 6000);

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
