import React, { useState, useEffect } from 'react';
import './App.css';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import ForecastDaily from './components/ForecastDaily';
import Location from './components/location';
import Weather from './components/Weather';
import TimeAndLocation from './components/TimeAndLocation';

function App() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [units, setUnits] = useState('metric');
  const [query, setQuery] = useState({
    city: '',
    unit: 'metric',
  });

  const [currentLocationWeather, setCurrentLocationWeather] = useState(null);

  const handleQueryChange = (newQuery) => {
    setQuery(newQuery);
    setSelectedCity(newQuery.city);
  };

  useEffect(() => {
  
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const apiKey = "9e19ca402b36aa6196530dc9cb735711";
          const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;
          fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
              setCurrentLocationWeather(data);
            })
            .catch((error) => {
              console.error('Error fetching weather data for current location:', error);
            });
        },
        (error) => {
          console.error('Error getting current location:', error);
        }
      );
    }
  }, [units]);
  return (
    <div className={`md:text-lg lg:text-xl xl:text-xl text-sm bg-blue-400 text-white mx-auto max-w-screen-md mt-4 py-3 px-5 bg-gradient-to-br  h-fit shadow-x shadow-gray-400`}>
      <Inputs units={units} setUnits={setUnits} setQuery={handleQueryChange} />
      <TopButtons setQuery={setSelectedCity} />
      <TimeAndLocation />
      <Location />
      <div>
        {selectedCity && <Weather query={query} />}
        {currentLocationWeather && (
          <div className="text-white flex flex-col">
            <h2>Weather Information for Your Current Location</h2>
            <hr />
            <p>Temperature: {currentLocationWeather.main.temp}°{units === 'metric' ? 'C' : 'F'}</p>
            <p>Feels: {currentLocationWeather.main.feels_like}°{units === 'metric' ? 'C' : 'F'}</p>
            <p>Sea_level: {currentLocationWeather.main.sea_level || 'N/A'}ft</p>
            <p>Pressure: {currentLocationWeather.main.pressure || 'N/A'}hPa</p>
            <p>Description: {currentLocationWeather.weather[0].description}</p>
          </div>
        )}
      </div>
      <TemperatureAndDetails />
      <Forecast />
      <ForecastDaily />
    </div>
  );
}

export default App;