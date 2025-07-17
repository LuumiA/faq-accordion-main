// @ts-nocheck
const buttons = document.querySelectorAll(".question button");
const answers = document.querySelectorAll(".answer");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const li = button.closest("li");
    const answer = li.querySelector(".answer");
    const openOrClose = answer.classList.contains("open");
    answers.forEach((answer) => {
      answer.classList.remove("open");
    });
    if (!openOrClose) {
      answer.classList.add("open");
    }
  });
});
