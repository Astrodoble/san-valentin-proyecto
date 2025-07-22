const btnNo = document.getElementById("btn-no");

function moverAleatoriamente(button) {
  const container = document.querySelector(".container");
  const rect = container.getBoundingClientRect();
  const offset = 100;

  const randomX = Math.floor(Math.random() * (rect.width - offset));
  const randomY = Math.floor(Math.random() * (rect.height - offset));

  button.style.position = "absolute";
  button.style.left = `${randomX}px`;
  button.style.top = `${randomY}px`;
}

btnNo.addEventListener("mouseenter", () => {
  moverAleatoriamente(btnNo);
});

