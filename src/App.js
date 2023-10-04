import './App.css';
import HourlyWeather from './components/HourlyWeather';
import WeatherProvider from './components/WeatherContext';

function App() {
  return (
    <>
    <WeatherProvider>
      <HourlyWeather/>
    </WeatherProvider>
    </>
  );
}

export default App;
