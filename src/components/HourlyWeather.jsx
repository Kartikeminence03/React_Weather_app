import React, {useState} from "react";

import { useWeather } from "./WeatherContext";
import TimeData from "./TimeData";

function HourlyWeather() {
  const { weatherData, loading, updateSearchCity, 
    // selectedTime, updateSelectedTime, 
  } = useWeather();

  const [searchCity,setSearchCity]= useState('');

  const location_Data = (event) => {
    setSearchCity(event.target.value);
  }
  const Search_Click_data=()=>{
  console.log(searchCity, ' it is clicked '); 
  updateSearchCity(searchCity); 
  // updateSelectedTime(searchCity)
    setSearchCity('');
  }
  

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-teal-400">
        <div className="bg-purple-600 text-white p-4 rounded-lg shadow-lg">
          <svg
            className="animate-spin h-8 w-8 mr-3 bg-purple-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291a7.962 7.962 0 01-2-.291h2v2c0 1.104.896 2 2 2V14H6.001z"
            ></path>
          </svg>
          Loading...
        </div>
      </div>
    );
  }

  return (
    

    <div className="bg-yellow-500 p-4 text-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold">Hourly Weather Report</h1>

      <div className="relative mt-4">
        <input
          type="text"
          placeholder="Search location..."
          onChange={location_Data}
          value={searchCity}
          className="py-2 px-4 pr-10 rounded-full border-none outline-none bg-gray-100 text-gray-800"
        />
        <button
          onClick={Search_Click_data}
          className="absolute ml-4 top-0 right-0 bottom-0 px-4 py-2 rounded-full bg-teal-400 text-white hover:bg-amber-500"
        >
          Search
        </button>
      </div>

      

      {/* {timeSearch ( */}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {weatherData.map((allWeatherData, index) => (
    <li
      key={index}
      className="border rounded-lg shadow-lg bg-sky-200 via-sky-200 to-zinc-500 text-black hover:bg-blue-400 hover:text-rose-500"
    >
      <div className="p-4 space-y-2">
        <p className="text-xl font-semibold">
          Time: {allWeatherData.dt_txt} | Wind:{' '}
          {Math.round(allWeatherData.wind.speed * 3.6)} km/h
        </p>
        <p className="text-xl font-semibold">
          Description: {allWeatherData.weather[0].description}
        </p>
        <p className="text-xl font-semibold">
          Wind: {Math.round(allWeatherData.wind.speed * 3.6)} km/h
        </p>
        <p className="text-xl font-semibold">
          Temperature: {allWeatherData.main.temp}°C
        </p>
        <p className="text-xl font-semibold">
          Visibility: {allWeatherData.visibility}
        </p>
      </div>
    </li>
  ))}
</ul> 
{/* )} */}
    </div>
  );
}

export default HourlyWeather;
