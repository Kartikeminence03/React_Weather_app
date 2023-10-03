import './App.css';
import HourlyWeather from './components/HourlyWeather';
import TimeData from './components/TimeData';
import WeatherProvider from './components/WeatherContext';

function App() {
  return (
    <>
    <WeatherProvider>
    <TimeData/>
      <HourlyWeather/>
    </WeatherProvider>
    </>
  );
}

export default App;
