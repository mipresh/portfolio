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

  function toggleProject(button){

  const details = button.nextElementSibling;

  details.classList.toggle("active");

}


 const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

let menuTimeout;

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");

  // clear previous timer if user clicks again
  clearTimeout(menuTimeout);

  // only start timer if menu is open
  if (navLinks.classList.contains("active")) {
    menuTimeout = setTimeout(() => {
      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
    }, 4000);
  }
});


const modal = document.getElementById("projectModal");

document.addEventListener("click", function(e) {

  // ✅ ONLY OPEN WHEN BUTTON IS CLICKED
  if (e.target.classList.contains("view-btn")) {

    const card = e.target.closest(".project-card");

    modal.classList.add("active");

    document.getElementById("modalImg").src = card.dataset.img;
    document.getElementById("modalTitle").textContent = card.dataset.title;
    document.getElementById("modalDesc").textContent = card.dataset.desc;
    document.getElementById("modalProblem").textContent = "Problem: " + card.dataset.problem;
    document.getElementById("modalSolution").textContent = "Solution: " + card.dataset.solution;
  document.getElementById("modalTech").textContent = "Tech Stack: " + card.dataset.tech;
  
    document.getElementById("modalLive").href = card.dataset.live;
    document.getElementById("modalGithub").href = card.dataset.github;
  }

  // ✅ CLOSE MODAL
  if (e.target.classList.contains("close-btn") || e.target === modal) {
    modal.classList.remove("active");
  }
});


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
