document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const temperature = 12;
const windSpeed = 5.5;

function calculateWindChill(temp, speed) {
  if (temp <= 10 && speed > 4.8) {
    const chill =
      13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) +
      0.3965 * temp * Math.pow(speed, 0.16);
    return chill.toFixed(2);
  } else {
    return "N/A";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".weather li:nth-child(1)").innerHTML = `<strong>Temperature:</strong> ${temperature}°C`;
  document.querySelector(".weather li:nth-child(3)").innerHTML = `<strong>Wind:</strong> ${windSpeed} km/h`;
  document.querySelector(".weather li:nth-child(4)").innerHTML = `<strong>Wind Chill:</strong> ${calculateWindChill(temperature, windSpeed)}°C`;
});