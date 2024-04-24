document.addEventListener("DOMContentLoaded", function () {
  let scrollButton = document.getElementById("scrollButton");

  // Aggiungi un listener per l'evento di scroll
  window.addEventListener("scroll", function () {
    // Se lo scroll è superiore a 20px, mostra il pulsante, altrimenti nascondilo
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
  });

  // Aggiungi un listener per l'evento click sul pulsante
  scrollButton.addEventListener("click", function () {
    // Scrolla alla parte superiore della pagina con un'animazione fluida
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// Mi porta alla home page al click

function redirectToHomePage() {
  window.location.href = "./index.html";
}
