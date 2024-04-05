import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState(null);

  function showWeather(response) {
    setMessage({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "e98397944eb2234d46458f3bc9b7103f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function updateSearch(event) {
    setQuery(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        onChange={updateSearch}
        placeholder="Write a city.."
        autoFocus={true}
      />
      <input type="submit" value="Search" />
    </form>
  );

  if (message) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(message.temperature)}ºC</li>
          <li>Description: {message.description}</li>
          <li>Humidity: {message.humidity} %</li>
          <li>Wind: {Math.round(message.wind)} km/h</li>
          <li>
            <img src={message.icon} alt={message.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
<footer>
  This project was coded by Kristin Kessler and is{" "}
  <a href="https://github.com/Krizz1103/react-week-4-homework">
    {" "}
    open-source code
  </a>
</footer>;
