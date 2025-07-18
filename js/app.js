const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const emergencyNumber = "3125620680"; // Reemplaza con el tuyo

buttons.forEach((btn) => {
  if (btn.dataset.value) {
    btn.addEventListener("click", () => {
      display.value += btn.dataset.value;
    });
  }
});

document.getElementById("clear").addEventListener("click", () => {
  display.value = "";
});

document.getElementById("equal").addEventListener("click", () => {
  if (display.value === "555") {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const message = `¡Emergencia! Ayúdame. Mi ubicación: https://www.google.com/maps?q=${lat},${lon}`;
          const url = `https://wa.me/${emergencyNumber}?text=${encodeURIComponent(message)}`;
          window.open(url, "_blank");
        },
        () => {
          alert("No se pudo obtener la ubicación.");
        }
      );
    } else {
      alert("Geolocalización no soportada.");
    }
  } else {
    try {
      display.value = eval(display.value);
    } catch {
      alert("Error de cálculo");
    }
  }
});
