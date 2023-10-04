import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const WeatherContext = createContext();

const WeatherProvider = ({children}) => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchLocation, setSearchLocation] = useState('delhi');

  const updateSearchCity = (city) => {
    setSearchLocation(city);};

  const API_KEY = '0eecc991479ddcc79cce030cd4816957';


  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${searchLocation}&appid=${API_KEY}`);
          let data = response.data
        setWeatherData(data);
        setLoading(false);
      } catch (error) {console.error('Error fetching weather data:', error);}
    };

    fetchWeatherData();
  }, [searchLocation]);

  return (
    <WeatherContext.Provider value={{ 
      weatherData, 
      loading, 
      searchLocation, 
      updateSearchCity,
      }}>
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeather() {
  return useContext(WeatherContext);
}

export default WeatherProvider
