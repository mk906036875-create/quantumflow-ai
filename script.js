 document.addEventListener("DOMContentLoaded", () => {

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        e.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });


  // Scroll Animation
  const animatedElements = document.querySelectorAll(
    ".card, .feature, .service, .section"
  );

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  animatedElements.forEach(element => {
    observer.observe(element);
  });


  // Back To Top Button
  const backToTop = document.createElement("button");

  backToTop.innerHTML = "↑";
  backToTop.setAttribute("aria-label", "Back to top");

  backToTop.style.position = "fixed";
  backToTop.style.bottom = "25px";
  backToTop.style.right = "25px";
  backToTop.style.width = "45px";
  backToTop.style.height = "45px";
  backToTop.style.borderRadius = "50%";
  backToTop.style.border = "none";
  backToTop.style.cursor = "pointer";
  backToTop.style.display = "none";
  backToTop.style.zIndex = "9999";

  document.body.appendChild(backToTop);


  // Show / Hide Back To Top
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });


  // Back To Top Action
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

});
