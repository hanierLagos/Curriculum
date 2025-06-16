document.addEventListener("DOMContentLoaded", () => {
  // Toggle del sidebar off‑canvas
  const sidebar = document.getElementById('sidebar');
  const pic     = document.querySelector('.profile-pic');
  const cv      = document.querySelector('.cv-container');

  pic.addEventListener('click', e => {
    e.stopPropagation();
    sidebar.classList.toggle('open');
    cv.classList.toggle('shifted');
  });

  // Cerrar al clicar fuera
  document.addEventListener('click', e => {
    if (!sidebar.contains(e.target) && e.target !== pic) {
      sidebar.classList.remove('open');
      cv.classList.remove('shifted');
    }
  });

  // Animar barras de progreso
  const bars = document.querySelectorAll(".bar");
  const animateBars = () => {
    bars.forEach(bar => {
      const pos = bar.getBoundingClientRect();
      if (pos.top < window.innerHeight) {
        bar.style.width = bar.getAttribute("data-width");
      }
    });
  };
  window.addEventListener("scroll", animateBars);
  animateBars();
});

