const FEtemp = document.querySelector(".temp");
const FEcity = document.querySelector(".city");
const FEcountry = document.querySelector(".country");
const FEhours = document.querySelector(".hours");
const FEminutes = document.querySelector(".minutes");
const greetMsg = document.querySelector(".greetMsg");
const nameForm = document.querySelector(".name-form");
const nameInput = document.querySelector(".greet-name");

// SHOW WEATHER DATA
function showWeather(data) {
  const temp = (data.main.temp - 273.15).toFixed(1);
  const countryName = countries[data.sys.country];
  const city = data.name;

  FEtemp.textContent = temp + "°";
  document.querySelector(".temp-c").textContent = "c";
  FEcity.textContent = city + ",";
  FEcountry.textContent = countryName;
}

//CLOCK FUNCTIONALITY

let h = 0;
let m = 0;

function showTime() {
  const now = new Date();
  h = now.getHours();
  m = now.getMinutes();

  if (h < 10) {
    FEhours.textContent = "0" + h;
  } else {
    FEhours.textContent = h;
  }

  if (m < 10) {
    FEminutes.textContent = "0" + m;
  } else {
    FEminutes.textContent = m;
  }

  greet(h);
}

document.onload = showTime();
setInterval(showTime, 1000);

// GREET FUCNTIONALITY

function greet(h) {
  if (h < 12) {
    greetMsg.textContent = "morning";
  } else if (h < 18) {
    greetMsg.textContent = "afternoon";
  } else {
    greetMsg.textContent = "evening";
  }
}

nameForm.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem("username", nameForm["name"].value.trim());
  nameForm["name"].blur();
  if (localStorage.getItem("username")) {
    nameInput.value = localStorage.getItem("username") + ".";
    nameInput.classList.add("input-hover");
  }
});

if (localStorage.getItem("username")) {
  nameInput.value = localStorage.getItem("username") + ".";
  nameInput.classList.add("input-hover");
}

const optionList = document.querySelector(".btn-list");
optionList.addEventListener("click", (e) => {
  if (e.target.tagName == "BUTTON") {
    e.target.classList.toggle("active");
  }
});
