// variables
let input = document.querySelector("input");
let searchbtn = document.querySelector("button");

// forecast
let forecast = (lat, lon, apiKey) => {
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  fetch(apiUrl)
    .then((data) => data.json())
    .then((item) => {
      console.log(item);
      rightTop(
        item.city.name,
        item.list[0].main.temp,
        item.list[0].wind.speed,
        item.list[0].main.humidity
      );
    });
};
searchbtn.addEventListener("click", () => {
  let apiKey = "6c60fabe649d33c314498b8aba31de6b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`;
  fetch(apiUrl)
    .then((data) => data.json())
    .then((item) => {
      console.log(item);
      let lat = item.coord.lat;
      let lon = item.coord.lon;
      forecast(lat, lon, apiKey);
    });
});

// Right top
let rightTop = (cityname, temp, windspeed, humidity) => {
  let city1 = document.querySelector(".right .top .city");
  let temperature1 = document.querySelector(".right .top .temperature");
  let wind1 = document.querySelector(".right .top .wind");
  let humidity1 = document.querySelector(".right .top .humidity");
  let city2 = document.querySelector(".left .bottom .city-info h1");

  city1.textContent = cityname;
  city2.textContent = cityname;
  temperature1.innerHTML = `Temperature: ${(temp - 273.15).toFixed(2)}°C`;
  wind1.innerHTML = `Wind: ${windspeed} M/S`;
  humidity1.innerHTML = `Humidity: ${humidity}%`;
};
