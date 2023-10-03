import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const WeatherContext = createContext();

const WeatherProvider = ({children}) => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchLocation, setSearchLocation] = useState('delhi');
  const [selectedTime, setSelectedTime] = useState(new Date());

  const updateSearchCity = (city) => {console.log(city, ' City changed for'); setSearchLocation(city);};

  const API_KEY = '0eecc991479ddcc79cce030cd4816957';

  const updateSelectedTime = (time) => {
    setSelectedTime(time);
  };





  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${searchLocation}&appid=${API_KEY}`);
        // console.log(response.data," data res ->> ->> ")
        setWeatherData(response.data.list);
        setLoading(false);
      } catch (error) {console.error('Error fetching weather data:', error);}
    };

    fetchWeatherData();
  }, [searchLocation, selectedTime]);


  // useEffect(() => {
  //   const fetchWeatherData = async () => {
  //     try {
  //       setLoading(true);
  //       const requests = searchLocation.map((location) =>
  //         axios.get(
  //           `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}`
  //         )
  //       );

  //       const responses = await Promise.all(requests);
  //       const filteredData = responses.map((response) => {
  //         const dataForTime = response.data.list.find(
  //           (item) => item.dt_txt.split(' ')[1] === selectedTime
  //         );
  //         return {
  //           searchLocation: response.data.city.name,
  //           weatherData: dataForTime || null,
  //         };
  //       });

  //       setWeatherData(filteredData);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching weather data:', error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchWeatherData();
  // }, [searchLocation, selectedTime]);



  // console.log(weatherData);


  return (
    <WeatherContext.Provider value={{ 
      weatherData, 
      loading, 
      searchLocation, 
      updateSearchCity, 
      // selectedTime, 
      // updateSelectedTime,  
      }}>
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeather() {
  return useContext(WeatherContext);
}

export default WeatherProvider