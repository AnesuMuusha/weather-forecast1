import React, { useState } from 'react';
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
  return (
    <div className={`md:text-lg lg:text-xl xl:text-xl text-sm bg-blue-400 text-white mx-auto max-w-screen-md mt-4 py-3 px-5 bg-gradient-to-br  h-fit shadow-x shadow-gray-400`}>
      <Inputs />
      <TopButtons setQuery={setSelectedCity} />
      <TimeAndLocation/>
      <Location />
      
      {selectedCity && <Weather city={selectedCity} />}
    
      <TemperatureAndDetails />
      <Forecast />
      <ForecastDaily />
    </div>
  );
}
export default App;