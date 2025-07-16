const buttons = document.querySelectorAll(".question button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("cliqué");
  });
});
