function showCurrentTime(date) {
  let dayIndex = now.getDay();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[dayIndex];

  return `${day}, ${hours}:${minutes}`;
}

function showCurrentTemperature(response) {
  console.log(response.data);
  document.querySelector("#new-city").innerHTML = response.data.name;
  document.querySelector("#degrees").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function search(event) {
  event.preventDefault();
  let apiKey = "4530d67d9fe78b643b5b9db8a4962219";
  let city = document.querySelector("#input-city").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}`).then(showCurrentTemperature);
}

let now = new Date();
let date = document.querySelector("#date");
date.innerHTML = showCurrentTime(now);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
