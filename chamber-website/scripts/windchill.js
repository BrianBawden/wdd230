const tempDoc = document.querySelector("#temp").textContent;
const windSpeedDoc = document.querySelector("#windSpeed").textContent;
const chillDoc = document.querySelector("#windChill");

if ((tempDoc <= 50) & (windSpeedDoc > 3)) {
  windChill(tempDoc, windSpeedDoc);
} else {
  chillDoc.innerHTML = "N/A";
}

function windChill(t, s) {
  let windChill =
    35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * Math.pow(t, 0.16);

  chillDoc.innerHTML = windChill.toFixed(0);
}
