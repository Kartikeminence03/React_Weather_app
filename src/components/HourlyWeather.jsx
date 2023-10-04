import React, {useEffect, useState} from "react";

import { useWeather } from "./WeatherContext";

function HourlyWeather() {
  const { weatherData, loading, updateSearchCity } = useWeather();
  const [searchCity,setSearchCity]= useState('');
  const [checkDate,setCheckDate]=useState(correct_Date_TimE());
  const [apidata,setApiData]=useState(weatherData);
  const[runEffect,setRunEffect]=useState(true)
  let arr=[2,3,4,5,6]
  useEffect(()=>{
  
    setApiData(weatherData);
  },[runEffect,loading]);
  /*============================ date and time =========================*/

  function correct_Date_TimE() {
    const currentDateAndTime = new Date();
   // currentDateAndTime.setHours('02');
    currentDateAndTime.setMinutes('00');
    currentDateAndTime.setSeconds('00');
    let currentHours = currentDateAndTime.getHours();
    const remainder = currentHours % 3;

    if (remainder !== 0) {
      const adjustment = remainder === 1 ? 2 : 1;
      currentHours += adjustment;
      currentDateAndTime.setHours(currentHours);
    }

    return currentDateAndTime;
  }
  /*================================ date and time ===============================*/

  let city_Nane = weatherData?.city?.name;
console.log(weatherData,'=->>=>');
  const dateChange = (e) => {
    const newDate = (e.target.value);
    checkDate.setDate(newDate.toString());
    setCheckDate(checkDate);
    setRunEffect(!runEffect)
  };

  const timeChange = (e) => {
    const newTime = (e.target.value);
    checkDate.setHours(newTime.toString());
    setCheckDate(checkDate);
    setRunEffect(!runEffect)
  };

  const location_Data = (event) => {
    setSearchCity(event.target.value);
  }

  const Search_Click_data=()=>{
  updateSearchCity(searchCity); 
    setSearchCity('');
  }

  function get_Date(date){
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Add leading zero if needed
    const day = String(date.getDate()).padStart(2, '0'); // Add leading zero if needed
    let formattedDate = `${year}-${month}-${day}`;
     return formattedDate;
        }

        function get_Time(date){
          const hours = String(date.getHours()).padStart(2, '0'); // Add leading zero if needed
          const minutes = String(date.getMinutes()).padStart(2, '0'); // Add leading zero if needed
          const seconds = String(date.getSeconds()).padStart(2, '0'); // Add leading zero if needed
          const formattedTime = `${hours}:${minutes}:${seconds}`;
          return formattedTime;
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
      <h1 className="text-2xl font-bold">Hourly Weather Report {city_Nane}</h1>

      <div className="flex items-center space-x-4">
          <label htmlFor="date" className="text-gray-700 text-sm font-bold">
            Select Date:
          </label>
          <select
            id="date"
            value=''
            onChange={dateChange}
            className="px-4 py-2 border-none bg-teal-400 text-white">
            <option value="">Select date</option>
            <option value="04">2023-10-04</option>
            <option value="05">2023-10-05</option>
            <option value="06">2023-10-06</option>
            <option value="07">2023-10-07</option>
            <option value="08">2023-10-08</option>
          </select>

          <label htmlFor="time" className="text-gray-700 text-sm  font-bold">
            Select Time:
          </label>
          <select
            id="time"
            value=''
            onChange={timeChange}
            className="px-4 py-2 border-none bg-teal-400 text-white">
            <option value=""> Select Time</option>
            <option value="09">09:00:00</option>
            <option value="12">12:00:00</option>
            <option value="15">15:00:00</option>
            <option value="18">18:00:00</option>
            <option value="21">21:00:00</option>
            <option value="00">00:00:00</option>
            <option value="03">03:00:00</option>
            <option value="06">06:00:00</option>
          </select>
        </div>

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

      
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {apidata.list?.map((allWeatherData, index) => { //  formatTimedigit formatDatedigit
          console.log(allWeatherData, checkDate,'->> in map ->>')
         let API_Time =new Date(allWeatherData.dt_txt);
         
           if(API_Time.getFullYear() === checkDate.getFullYear() && API_Time.getMonth() === checkDate.getMonth() &&
           API_Time.getDate() === checkDate.getDate() &&  API_Time.getHours() >= checkDate.getHours() &&
           API_Time.getMinutes() === checkDate.getMinutes()
         ){

          return(
            <li
      key={index}
      className="border rounded-lg shadow-lg bg-sky-200 via-sky-200 to-zinc-500 text-black hover:bg-blue-400 hover:text-rose-500"
    >
      <div className="p-4 space-y-2">
        <p>
          <span className="font-semibold">Date:</span> {get_Date(API_Time)}
        </p>
        <p>
          <span className="font-semibold">Time:</span> {get_Time(API_Time)}
        </p>

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
          )
         }
         
        }
  )}
</ul> 
    </div>
  );
}

export default HourlyWeather;
