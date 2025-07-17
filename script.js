// @ts-nocheck
const buttons = document.querySelectorAll(".question button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const li = button.closest("li");
    const answer = li.querySelector(".answer");
    console.log(answer);
  });
});
