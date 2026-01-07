
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/xpqwgvrg", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
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

console.log("Portfolio website loaded successfully");
