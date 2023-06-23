const tempDoc = document.querySelector("#temp");
const windSpeedDoc = document.querySelector("#windSpeed");
const chillDoc = document.querySelector("#windChill");
const wCondition = document.querySelector("#wCondition");
const wIcon = document.querySelector("#wIcon");

// url for openweather api
const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=40.2970&lon=-111.6968&units=imperial&appid=b288360203608f2b768739c3ac102db2";

// if ((tempDoc <= 50) & (windSpeedDoc > 3)) {
//   windChill(tempDoc, windSpeedDoc);
// } else {
//   chillDoc.innerHTML = "N/A";
// }

function windChill(t, s) {
  let windChill =
    35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * Math.pow(t, 0.16);

  chillDoc.innerHTML = `${windChill.toFixed(0)}&deg; F`;
}


// ********** API code for weather. **************


async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      // console.log(data); // this is for testing the call
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(wData) {
  const iconSrc = `https://openweathermap.org/img/w/${wData.weather[0].icon}.png`;
  const iconAlt = wData.weather[0].description;
  const windSpeed = wData.wind.speed;
  const getTemp = wData.main.temp;

  tempDoc.innerHTML = getTemp.toFixed(0);
  wCondition.innerHTML = wData.weather[0].description;
  wIcon.setAttribute("src", iconSrc);
  wIcon.setAttribute("alt", iconAlt);
  windSpeedDoc.innerHTML = windSpeed;

  if ((getTemp <= 50) & (windSpeed > 3)) {
    windChill(getTemp, windSpeed);
  } else {
    chillDoc.innerHTML = "N/A";
  }
}

apiFetch();