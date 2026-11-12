const temperature = 45;
const windSpeed = 8;

function calculateWindChill(temp, speed) {
    return 35.74 + 0.6215 * temp - 35.75 * (speed ** 0.16) + 0.4275 * temp * (speed ** 0.16);
}

const windChill = document.querySelector("#windchill");

if (temperature <= 50 && windSpeed > 3) {
    windChill.textContent = calculateWindChill(temperature, windSpeed).toFixed(1) + " °F";
} else {
    windChill.textContent = "N/A";
}
document.querySelector("#currentyear").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent = document.lastModified;