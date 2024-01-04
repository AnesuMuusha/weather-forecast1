import './App.css';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import ForecastDaily from './components/ForecastDaily';
import Location from './components/location';
import Weather from './components/Weather';
function App() {
return (
<div className={`bg-blue-400 text-white mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400`}>

{/*<!--* api.open weather map.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}*!--> */}

<TopButtons></TopButtons>
<Inputs></Inputs>

<TimeAndLocation/>
<Location/>
<Weather/>
<TemperatureAndDetails/>
<weatherServices/>
<Forecast/>
<ForecastDaily/>
 </div>
  );
}
export default App;