// @ts-nocheck
const button = document.querySelectorAll(".question");
const items = document.querySelectorAll(".itemFaq");

button.forEach((btn) => {
  btn.addEventListener("click", () => {
    // 1. Récupérer l'itemFaq parent de ce bouton
    const itemFaq = btn.closest(".itemFaq");
    // 2. Récupère l’icône liée au bouton cliqué
    const currentIcon = itemFaq.querySelector(".icon");
    // 3. Vérifier si cet item est déjà "ouvert"
    const isOpen = itemFaq.classList.contains("isOpen");

    // 4. Si l'item est déjà ouvert :
    if (isOpen) {
      itemFaq.classList.remove("isOpen");
      currentIcon.src = "assets/images/icon-plus.svg";
      return;
    } else {
      items.forEach((item) => {
        item.classList.remove("isOpen");
        const otherIcon = item.querySelector(".icon");
        item.classList.remove("isOpen");
        if (otherIcon) {
          otherIcon.src = "assets/images/icon-plus.svg";
        }
      });
      itemFaq.classList.add("isOpen");
      currentIcon.src = "assets/images/icon-minus.svg";
    }
  });
});
