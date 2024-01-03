import React, { useEffect, useState } from 'react';
import axios from 'axios';

  const Weather = ({ latitude, longitude }) => {
  const [weatherData, setWeatherData] = useState(null);

useEffect(() => {

    const apiKey = '9e19ca402b36aa6196530dc9cb735711';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=-34.0971488&lon=18.8432772&appid=${apiKey}`;

    axios.get(apiUrl)
      .then(response => {
        setWeatherData(response.data);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }, [latitude, longitude]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-xl text-white">
      <h2>Weather Information</h2>
      <p>____________________</p>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Feels: {weatherData.main.feels_like}°C</p>
      <p>Sea_level: {weatherData.main.sea_level}°C</p>
      <p>Pressure: {weatherData.main.pressure}°C</p>
      <p>Description: {weatherData.weather[0].description}</p>
      {/* weather info commented */}
    </div>
  );
};

export default Weather;