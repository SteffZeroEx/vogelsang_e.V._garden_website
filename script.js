// JavaScript für das Abhacken des Textes und das Öffnen des Modals
document.addEventListener("DOMContentLoaded", (event) => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    const content = card.querySelector(".content");
    const fullText = content.textContent;
    const maxLength = 100; // Maximale Zeichenanzahl, die angezeigt werden soll

    if (fullText.length > maxLength) {
      const shortText = fullText.substring(0, maxLength) + "...";
      content.textContent = shortText;
    }

    const modal = document.getElementById("myModal");
    const modalText = modal.querySelector(".full-text");
    const readMoreBtn = card.querySelector(".read-more-btn");

    readMoreBtn.addEventListener("click", () => {
      modalText.textContent = fullText;
      modal.style.display = "block";
    });
  });

  const closeModal = modal.querySelector(".close");
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});
