const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const emergencyNumber = "3142211401"; // Reemplaza con tu número real

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
  const value = display.value.trim();

  // Si es el código de alerta
  if (value === "555") {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const message = `¡Emergencia! Necesito ayuda. Mi ubicación: https://www.google.com/maps?q=${lat},${lon}`;
          const url = `https://wa.me/${emergencyNumber}?text=${encodeURIComponent(message)}`;
          window.open(url, "_blank");

          // Limpiar el display luego de enviar el mensaje
          display.value = "";
        },
        () => {
          alert("No se pudo obtener tu ubicación.");
        }
      );
    } else {
      alert("Tu navegador no soporta geolocalización.");
    }

    return; // 🚫 Detenemos aquí, no seguimos al eval
  }

  // Si no es el código de alerta, evaluamos la operación
  try {
    const result = eval(value);
    display.value = result;
  } catch {
    alert("Error de cálculo");
    display.value = "";
  }
});
