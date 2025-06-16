document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".bar");

  const animateBars = () => {
    bars.forEach(bar => {
      const position = bar.getBoundingClientRect();
      if (position.top < window.innerHeight) {
        bar.style.width = bar.getAttribute("data-width");
      }
    });
  };

  window.addEventListener("scroll", animateBars);
  animateBars(); // inicial
});
