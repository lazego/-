// task 1 --------------------
const param = {
  url: "http://api.openweathermap.org/data/2.5/",
  appid: "c15152e0905e407b3ce50967813097e0",
};
function getWeather() {
  const cityId = document.querySelector("#city").value;
  fetch(
    `${param.url}weather?q=${cityId}&units=metric&appid=${param.appid}&lang=ru`
  )
    .then((weather) => {
      return weather.json();
    })
    .then(showWeather);
}
function showWeather(data) {
  //console.log(data);
  document.querySelector(".package-name").textContent = data.name;
  document.querySelector(".price").innerHTML =
    Math.round(data.main.temp) + "&deg;";
  document.querySelector(".disclaimer").textContent =
    data.weather[0]["description"];
  document.querySelector(
    ".features li"
  ).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png">`;
}

getWeather();
document.querySelector("#city").onchange = getWeather;
