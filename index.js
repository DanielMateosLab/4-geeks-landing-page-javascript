document.querySelectorAll(".contactForm").forEach((element) => {
  element.addEventListener("submit", (event) => {
    event.preventDefault();
  });
});
