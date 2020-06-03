// GET USER LOCATION
function getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getWeather);
  } else {
    console.log("Your browser doesnt support Geolocation");
  }
}
getUserLocation();

// FETCH WEATHER DATA
function getWeather(position) {
  const key = "88d9a63c19da758020e9d2fd440bb09a";
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${key}`
  ).then((res) => res.json().then((data) => showWeather(data)));
}
