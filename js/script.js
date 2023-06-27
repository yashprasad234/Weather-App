const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ddf348e218msh797bd40d46c6886p10c315jsn3d7419315b40",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const topCityData = document.querySelector(".topCityData");

const getWeather = (city) => {
  const capitalizedCity = capitalizeCityName(city);
  cityName.innerHTML = capitalizedCity;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      cloud_pct.innerHTML = response.cloud_pct;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
    })
    .catch((err) => {
      getWeather("Delhi");
      console.error(err);
    });
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
  city.value = "";
});

getWeather("Delhi");

const displayCityInTable = (city) => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      const html = `<tr>
      <th scope="row" class="text-start">${city}</th>
      <td>${response.temp}</td>
      <td>${response.humidity}</td>
      <td>${response.feels_like}</td>
      <td>${response.cloud_pct}</td>
      <td>${response.max_temp}</td>
      <td>${response.min_temp}</td>
      <td>${response.sunrise}</td>
      <td>${response.sunset}</td>
      <td>${response.wind_speed}</td>
    </tr>`;
      topCityData.insertAdjacentHTML("beforeend", html);
    })
    .catch((err) => console.error(err));
};

function capitalizeCityName(sentence) {
  if (typeof sentence !== "string" || sentence.length === 0) {
    return sentence; // Return unchanged if input is not a non-empty string
  }

  const words = sentence.split(" ");
  const capitalizedWords = words.map((word) => {
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1).toLowerCase();
    return firstLetter + restOfWord;
  });

  return capitalizedWords.join(" ");
}

displayCityInTable("Shanghai");
displayCityInTable("London");
displayCityInTable("Boston");
displayCityInTable("Lucknow");
displayCityInTable("Copenhagen");
displayCityInTable("Reykjavik");
