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
<div className={`md:text-lg lg:text-xl xl:text-2xl text-sm bg-blue-400 text-white mx-auto max-w-screen-md mt-4 py-3 px-5 bg-gradient-to-br  h-fit shadow-x shadow-gray-400`}>

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