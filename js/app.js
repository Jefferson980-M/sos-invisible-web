const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");

buttons.forEach(button => {
  if (button !== equals && button !== clear) {
    button.addEventListener("click", () => {
      display.value += button.dataset.value;
    });
  }
});

equals.addEventListener("click", () => {
  if (display.value === "555") {
    alert("¡Alerta secreta activada!");
    display.value = "";
    return;
  }

  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
});

clear.addEventListener("click", () => {
  display.value = "";
});
