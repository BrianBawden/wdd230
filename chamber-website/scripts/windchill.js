const tempDoc = document.querySelector("#temp").textContent;
const windSpeedDoc = document.querySelector("#windSpeed").textContent;

console.log(tempDoc, windSpeedDoc)

windChill(tempDoc, windSpeedDoc);

function windChill(t, s){
    let windChill = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * Math.pow(t, 0.16));

    console.log(windChill);
}
