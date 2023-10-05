import React, {useEffect, useState} from "react";

import { useWeather } from "./WeatherContext";

function HourlyWeather() {
  const { weatherData, loading, updateSearchCity } = useWeather();
  const [searchCity,setSearchCity]= useState('');
  const [checkDate,setCheckDate]=useState(correct_Date_TimE());
  const [apidata,setApiData]=useState(weatherData);
  const [searchData, setsearchData] = useState(false)
  const[runEffect,setRunEffect]=useState(true);

const [timeOptions, setTimeOptions] = useState([]);
const [dateOptions, setDateOptions] = useState([]);
const [allData, setAllData] = useState(false);

// console.log(apidata,"==========>>>>Api data");

  let city_Nane = weatherData?.city?.name;
  useEffect(()=>{
  
    setApiData(weatherData);
  },[runEffect,loading, city_Nane]);
  /*============================ date and time =========================*/



  function correct_Date_TimE() {
    const currentDateAndTime = new Date();
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
// console.log(weatherData,'=->>=>');



// Function to generate dynamic time options
const generateTimeOptions = () => {
  let time=checkDate.getHours();
  const options = [];
    // console.log(checkDate,time,"-> h for g");
  // Generate options for every 3 hours
  for (let i = 0; i <= 7; i++) {

    const hour = i * 3;
    if(hour>=time){ //hour>=(time-3)
    const formattedHour = hour.toString().padStart(2, "0");
    options.push(
      <option key={hour} value={formattedHour}>
        {`${formattedHour}:00:00`}
      </option>
    );
    }
  }

  return options;
};


const generateDateOptions = () => {
  let date=checkDate.getDate();
  let month = checkDate.getMonth();
  
  const options = [];
  // Generate options for every 3 hours
  for (let i = 0; i <= 10; i++) {

    const hour = i;
    if(hour>=date){ //hour>=(date-3)
    const formattedHour = hour.toString().padStart(2, "0");
    options.push(
      <option key={hour} value={formattedHour}>
        {`${formattedHour}-${month+1}-2023`}
      </option>
    );
    }
  }

  return options;
};

useEffect(() => {
  // Generate the time options once when the component mounts
  const options = generateTimeOptions();
  const datesOptions = generateDateOptions();
  setTimeOptions(options);
  setDateOptions(datesOptions)
}, []);

function showAllData(){
  setAllData(true)
}



  const dateChange = (e) => {
    setsearchData(true)
    const newDate = (e.target.value);
    checkDate.setDate(newDate.toString());
    setCheckDate(checkDate);
    setRunEffect(!runEffect)
  };

  const timeChange = (e) => {
    setsearchData(true)
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
  }

  function get_Date(date){
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Add leading zero if needed
    const day = String(date.getDate()).padStart(2, '0'); // Add leading zero if needed
    let formattedDate = `${day}-${month}-${year}`;
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
    

    <div className="bg-yellow-500 p-4 text-white shadow-lg">
      <h1 className="text-2xl font-bold">Hourly Weather Report {city_Nane}</h1>

      <div className="flex items-center space-x-4">
          <label htmlFor="date" className="text-gray-700 text-sm font-bold">
            Select Date:
          </label>
          <select
            id="date"
            value=''
            onChange={dateChange}
            className="px-4 py-2 border-none bg-teal-400 text-white hover:bg-blue-700">
            {/* <option value="04">2023-10-04</option> */}
            <option value=""> {get_Date(checkDate) === '00:00:00' ? 'All' : get_Date(checkDate)}</option>
            {dateOptions}
          </select>

          <label htmlFor="time" className="text-gray-700 text-sm  font-bold">
            Select Time:
          </label>
          <select
            id="time"
            value=''
            onChange={timeChange}
            className="px-4 py-2 border-none bg-teal-400 text-white hover:bg-blue-700">
            <option value=""> {get_Time(checkDate)}</option>
           
        {timeOptions}
          </select>

          <button onClick={()=>showAllData()} class="bg-teal-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">All Data</button>
        </div>

      <div className="relative mt-4 mb-4">
        <input
          type="text"
          placeholder="Search location..."
          onChange={location_Data}
          value={searchCity}
          className="py-2 px-4 pr-10 rounded-full border-none outline-none bg-gray-100 text-gray-800"
        />
        <button
          onClick={Search_Click_data}
          className="absolute ml-4 top-0 bottom-0 px-4 py-2 rounded-full bg-teal-400 text-white hover:bg-amber-500"
        >
          Search
        </button>
      </div>

      
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {apidata.list?.map((allWeatherData, index) => { 
         let apiTime =new Date(allWeatherData.dt_txt);
         
         if (apiTime.getFullYear() === checkDate.getFullYear() &&
         apiTime.getDate() === checkDate.getDate() &&
         (
           (!searchData && apiTime.getHours() >= checkDate.getHours()) ||
           (searchData && apiTime.getHours() === checkDate.getHours())
         ) || (allData===true)
        //  apiTime.getMinutes() === checkDate.getMinutes()
       ){

          return(
            <li
      key={index}
      className="border rounded-lg shadow-lg bg-sky-200 via-sky-200 to-zinc-500 text-black hover:bg-blue-400 hover:text-white"
    >
      <div className="p-4 space-y-2">
        <p>
          <span className="font-semibold">Date:</span> {get_Date(apiTime)}
        </p>
        <p>
          <span className="font-semibold">Time:</span> {get_Time(apiTime)}
        </p>

        <p>
        <span className="font-semibold">Wind:</span>
          {Math.round(allWeatherData.wind.speed * 3.6)} km/h
        </p>
        <p>
          <span className="font-semibold">Description:</span> {allWeatherData.weather[0].description}
        </p>
        <p>
          <span className="font-semibold">Temperature:</span> {allWeatherData.main.temp}°C
        </p>
        <p>
          <span className="font-semibold">Visibility:</span> {allWeatherData.visibility}
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
