document.addEventListener("DOMContentLoaded", () => {

  /* FORM */
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


  /* HAMBURGER */
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");

  if(hamburger && navLinks){
    hamburger.addEventListener("click", ()=>{
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
    });
  }

 




  /* SCROLL REVEAL */
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("active");
      }
    });
  },{ threshold:0.2 });

  document.querySelectorAll(".reveal-up").forEach(el=>{
    observer.observe(el);
  });


  console.log("Portfolio website loaded successfully");

});
