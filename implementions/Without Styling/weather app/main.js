// https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid={API key}

const key = "3e8a0bbe211322aafb5fdd50c0c3150e";
const input = document.querySelector("input");
const btn = document.querySelector("button");
const city = document.getElementById("city");
const date = document.getElementById("date");
const temp = document.getElementById("temp");
const sunriseDiv = document.querySelector(".sunrise");
const sunsetDiv = document.querySelector(".sunset");
const windDiv = document.querySelector(".wind");
const pressureDiv = document.querySelector(".pressure");
const humidityDiv = document.querySelector(".humidity");
const cloudsDiv = document.querySelector(".clouds");
const helpTextDiv = document.querySelector(".help-text");

const get = () => {
  if (input.value == "") {
    alert("please enter city name !");
  } else {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${key}`
    )
      .then((res) => {
        if (!res.ok) {
          alert("City not found");
        }
        return res.json();
      })
      .then((data) => {
        city.textContent = data.name;
        date.textContent = new Date(data.dt * 1000).toLocaleDateString();
        temp.textContent = `${data.main.temp}°C`;
        sunriseDiv.textContent = `Sunrise: ${new Date(
          data.sys.sunrise * 1000
        ).toLocaleTimeString()}`;
        sunsetDiv.textContent = `Sunset: ${new Date(
          data.sys.sunset * 1000
        ).toLocaleTimeString()}`;
        windDiv.textContent = `Wind Speed: ${data.wind.speed} m/s`;
        pressureDiv.textContent = `Pressure: ${data.main.pressure} hPa`;
        humidityDiv.textContent = `Humidity: ${data.main.humidity}%`;
        cloudsDiv.textContent = `Cloudiness: ${data.clouds.all}%`;
      })
      .catch((error) => {
        console.log(error);
      });
    input.value = "";
  }
};
