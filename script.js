// @ts-nocheck
const button = document.querySelectorAll(".question");
const items = document.querySelectorAll(".itemFaq");

button.forEach((btn) => {
  btn.addEventListener("click", () => {
    // 1. Récupérer l'itemFaq parent de ce bouton
    const itemFaq = btn.closest(".itemFaq");

    // 2. Vérifier si cet item est déjà "ouvert"
    const isOpen = itemFaq.classList.contains("isOpen");

    // 3. Si l'item est déjà ouvert :
    if (isOpen) {
      itemFaq.classList.remove("isOpen");
    } else {
      items.forEach((item) => {
        item.classList.remove("isOpen");
      });
      itemFaq.classList.add("isOpen");
    }
  });
});
