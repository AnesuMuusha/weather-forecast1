import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = ({ city, unit }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const apiKey = "9e19ca402b36aa6196530dc9cb735711";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response.data); // Log the response
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, [city, unit]);

  if (!weatherData) {
    return <div></div>;
  }

  return (
    <div className="md:text-lg lg:text-xl xl:text-xl text-white flex flex-col">
      <div>
        <h2>Weather Information for {city}</h2>
        <hr />
        <p>Temperature: {weatherData.main.temp}°{unit === 'metric' ? 'C' : 'F'}</p>
        <p>Feels: {weatherData.main.feels_like}°{unit === 'metric' ? 'C' : 'F'}</p>
        <p>Sea_level: {weatherData.main.sea_level || 'N/A'}ft</p>
        <p>Pressure: {weatherData.main.pressure || 'N/A'}hPa</p>
        <p>Description: {weatherData.weather[0].description}</p>
      </div>
    </div>
  );
};

export default Weather;
