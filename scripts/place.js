window.addEventListener("DOMContentLoaded", () => {
  const temp = 5; // Cambia esto si quieres otro valor
  const windSpeed = 10;
  const conditions = "Clear";

  function calculateWindChill(t, s) {
    return 13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16);
  }

  document.getElementById("Temperature").textContent = `Temperature: ${temp}°C`;
  document.getElementById("Conditions").textContent = `Conditions: ${conditions}`;
  document.getElementById("Wind").textContent = `Wind: ${windSpeed} km/h`;

  let windChillDisplay = "N/A";
  if (temp <= 10 && windSpeed > 4.8) {
    const chill = calculateWindChill(temp, windSpeed).toFixed(1);
    windChillDisplay = `${chill}°C`;
  }

  document.getElementById("Wind Chill").textContent = `Wind Chill: ${windChillDisplay}`;
});

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;