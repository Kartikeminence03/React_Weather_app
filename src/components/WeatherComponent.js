// WeatherComponent.js

// import React, { useState } from 'react';
// import { useWeather } from './WeatherContext';

// const WeatherComponent = () => {
//   const { weatherData, loading,updateSearchCity } = useWeather();
//   const [searchCity,setSearchCity]=useState('');
//   let city_Nane=weatherData?.city?.name;
//   console.log(city_Nane,weatherData,"weatherData.data.city.name")

//   const [selectedDate, setSelectedDate] = useState('');
//   const [selectedTime, setSelectedTime] = useState('');

//   const handleDateChange = (e) => {
//     setSelectedDate(e.target.value);
//   };

//   const handleTimeChange = (e) => {
//     setSelectedTime(e.target.value);
//   };

//   const find_City = (event) => {
//     setSearchCity(event.target.value);
//   }
//   const Search_Click=()=>{
//   console.log(searchCity, ' it is clicked '); 
//   updateSearchCity(searchCity); 
//     setSearchCity('');
//   }
//   if (loading) {

//     return (
//       <div className="flex h-screen items-center justify-center">
//         <div className="bg-blue-500 text-white p-4 rounded-lg shadow-lg">
//           <svg className="animate-spin h-8 w-8 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"  strokeWidth="4"
//             ></circle>
//             <path className="opacity-75" fill="currentColor"
//               d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291a7.962 7.962 0 01-2-.291h2v2c0 1.104.896 2 2 2V14H6.001z"
//             ></path> </svg>
//           Loading...
//         </div>
//       </div>
//     );


//   }

//   return (
//     <div>
//       <div className="bg-blue-500 p-4 text-white flex justify-between items-center">
//         <h1 className="text-2xl font-bold">Hourly Weather Report for {city_Nane} </h1>
         
//         <div className="flex items-center space-x-4">
//   <label htmlFor="date" className="text-gray-700 text-sm font-bold">
//     Select Date:
//   </label>
//   <select
//     id="date"
//     value={selectedDate}
//     onChange={handleDateChange}
//     className="px-4 py-2 border-none bg-blue-500 text-gray-700">
//     <option value="">-- Select Date --</option>
//     <option value="2023-10-01">2023-10-01</option>
//     <option value="2023-10-02">2023-10-02</option>
//     <option value="2023-10-03">2023-10-03</option>
//   </select>

//   <label htmlFor="time" className="text-gray-700 text-sm  font-bold">
//     Select Time:
//   </label>
//   <select
//     id="time"
//     value={selectedTime}
//     onChange={handleTimeChange}
//     className="px-4 py-2 border-none text-gray-700 bg-blue-500">
//    <option  value="">-- Select Time --</option>
//   <option  value="09:00:00">09:00:00</option>
//   <option  value="12:00:00">12:00:00</option>
//   <option  value="15:00:00">15:00:00</option>
//   </select>
// </div>

//         <div className="relative">
//           <input
//             type="text"
//             placeholder="Search location..."
//             onChange={(event)=>find_City(event)}
//             value={searchCity}
//             className="py-2 px-4 pr-10 rounded-full border-none outline-none bg-gray-100 text-gray-800"
//           />
//           <button 
//            onClick={Search_Click}
//           className="absolute ml-4 top-0 right-0 bottom-0 px-4 py-2 rounded-full bg-blue-400 text-white hover:bg-blue-600">
//             Search
//           </button>
//         </div>
//       </div>
    
 




      
//       <ul>
//         {weatherData.list?.map((hourlyData, index) => (
//           <li
//             key={index}
//             className="border p-2 m-2 rounded-lg shadow-md bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 text-white hover:bg-blue-400 hover:text-gray-900"
//           >
//             <div className="flex flex-col items-center space-y-2">
//             <p className="text-xl font-semibold">
//   Time: {hourlyData.dt_txt} &nbsp;&nbsp;&nbsp;&nbsp;
//   Description: {hourlyData.weather[0].description} &nbsp;&nbsp;&nbsp;&nbsp;
//   Temperature: {hourlyData.main.temp}°C &nbsp;&nbsp;&nbsp;&nbsp;
//   Wind: {Math.round(hourlyData.wind.speed * 3.6)} km/h
// </p>
//             </div>
//           </li>

//         ))}
//       </ul>
//     </div>
//   );
// };

// export default WeatherComponent;



// <div>
    //   <div className="bg-yellow-500 p-4 text-white flex justify-between items-center">
    //     <h1 className="text-2xl font-bold bg-yellow-500">Hourly Weather Report</h1>

    //     <div className="relative bg-yellow-500">
    //       <input
    //         type="text"
    //         placeholder="Search location..."
    //         onChange={(event)=>location_Data(event)}
    //         value={searchCity}
    //         className="py-2 px-4 pr-10 rounded-full border-none outline-none  bg-gray-100 text-gray-800"
    //       />
    //       <button 
    //        onClick={Search_Click_data}
    //       className="absolute ml-4 top-0 right-0 bottom-0 px-4 py-2 rounded-full bg-teal-400 text-white hover:bg-amber-500">
    //         Search
    //       </button>
    //     </div>
    //   </div>

    //   <ul >
    //     {weatherData.map((allWeatherData, index) => (
    //       <li
    //         key={index}
    //         className="border p-2 m-2 rounded-lg shadow-md bg-gradient-to-r from-zinc-400 via-sky-200 to-zinc-500 text-black hover:bg-blue-400 hover:text-rose-500"
    //       >
    //         <div className="flex flex-col space-y-2">
    //           <p className="text-xl font-semibold">
    //             Time: {allWeatherData.dt_txt} {" "}
    //             Wind: {Math.round(allWeatherData.wind.speed * 3.6)} km/h
    //           </p>
    //           <p className="text-xl font-semibold">Description:{" "}
    //             {allWeatherData.weather[0].description}</p>
    //           <p className="text-xl font-semibold">Wind: {Math.round(allWeatherData.wind.speed * 3.6)} km/h</p>
    //           <p className="text-xl font-semibold">Temperature: {allWeatherData.main.temp}°C </p>
    //           <p className="text-xl font-semibold">visibility: {allWeatherData.visibility}</p>
    //         </div>
    //       </li>
    //     ))}
    //   </ul>
    // </div>




    // WeatherComponent.js


import moment from 'moment';
import React, { useState,useEffect } from 'react';
import { useWeatherContext } from './WeatherContext';

const WeatherComponent = () => {

//   /                  date and time                      /

  function formatDatedigit(dateStr) {
    const [year, month, day] = dateStr.split('-');
    return `${year}${month}${day}`;
  }
  
  // Function to format a time string: "16:30:45" to "163045"
  function formatTimedigit(timeStr) { //  formatTimedigit formatDatedigit
    const [hours, minutes, seconds] = timeStr.split(':');
    return `${hours}`;
  }

  function formatDate(inputDate) {
    const [year, month, day] = inputDate.split('-').map((part) => part.padStart(2, '0'));
    return `${year}-${month}-${day}`;
  }
  function formatTime(inputTime) {
    return inputTime.split(':').map((part) => part.padStart(2, '0')).join(':');
  }
 

  const currentDateAndTime = new Date();

  // Extract date components
  const year = currentDateAndTime.getFullYear(); // Get the current year
  const month = currentDateAndTime.getMonth() + 1; // Get the current month (0-based, so add 1)
  const day = currentDateAndTime.getDate(); // Get the current day of the month
  const hours = currentDateAndTime.getHours(); // Get the current hour (0-23)
  const minutes = currentDateAndTime.getMinutes(); // Get the current minutes (0-59)
  const seconds = currentDateAndTime.getSeconds(); // Get the current seconds (0-59)
const date=formatDate(`${year}-${month}-${day}`)
const time=formatTime(`${hours}:${minutes}:${seconds}`)
  const [currentDate, setCurrentDate] = useState(date);
const [currentTime, setCurrentTime] = useState(time);
const [currentDateTime, setCurrentDateTime] = useState(`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);


useEffect(()=>{
  
},[currentDate,currentTime])

  // Display the current date and time
 // console.log(`Current Date and Time: ${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);


//   /                                   date and time         /

  const { weatherData, loading, updateSearchCity } = useWeatherContext();
  const [searchCity, setSearchCity] = useState('');
  let city_Nane = weatherData?.city?.name;

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');


  const handleDateChange = (e) => {
    const newDate = formatDate(e.target.value);
    setSelectedDate(newDate);
    setCurrentDate(newDate);
    setCurrentDateTime(`${newDate} ${currentTime}`);
  };
  
  const handleTimeChange = (e) => {
    const newTime = formatTime(e.target.value);
    setSelectedTime(newTime);
    setCurrentTime(newTime);
    setCurrentDateTime(`${currentDate} ${newTime}`);
  };

  const find_City = (event) => {
    setSearchCity(event.target.value);
  }
  const Search_Click = () => {


    updateSearchCity(searchCity); //->> Update searchCity with the new value ->> 
    setSearchCity('');
  }
  if (loading) {

    return (
      <div className="flex h-screen items-center justify-center">
        <div className="bg-blue-500 text-white p-4 rounded-lg shadow-lg">
          <svg className="animate-spin h-8 w-8 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"
            ></circle>
            <path className="opacity-75" fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291a7.962 7.962 0 01-2-.291h2v2c0 1.104.896 2 2 2V14H6.001z"
            ></path> </svg>
          Loading...
        </div>
      </div>
    );


  }

  return (
    <div>
      <div className="bg-blue-500 p-4 text-white flex justify-between items-center">
        <h1 className="text-2xl font-bold">Hourly Weather Report for {city_Nane} </h1>

        <div className="flex items-center space-x-4">
          <label htmlFor="date" className="text-gray-700 text-sm font-bold">
            Select Date:
          </label>
          <select
            id="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="px-4 py-2 border-none bg-blue-500 text-gray-700">
            <option value=""> {year}-{month}-{day}</option>
            <option value="2023-10-01">2023-10-04</option>
            <option value="2023-10-02">2023-10-05</option>
            <option value="2023-10-03">2023-10-06</option>
          </select>

          <label htmlFor="time" className="text-gray-700 text-sm  font-bold">
            Select Time:
          </label>
          <select
            id="time"
            value={selectedTime}
            onChange={handleTimeChange}
            className="px-4 py-2 border-none text-gray-700 bg-blue-500">
            <option value=""> {hours}:{minutes}:{seconds}</option>
            <option value="09:00:00">09:00:00</option>
            <option value="12:00:00">12:00:00</option>
            <option value="15:00:00">15:00:00</option>
            <option value="15:00:00">18:00:00</option>
            <option value="15:00:00">21:00:00</option>
            <option value="15:00:00">00:00:00</option>
            <option value="15:00:00">03:00:00</option>
            <option value="15:00:00">06:00:00</option>
          </select>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search location..."
            onChange={(event) => find_City(event)}
            value={searchCity}
            className="py-2 px-4 pr-10 rounded-full border-none outline-none bg-gray-100 text-gray-800"
          />
          <button
            onClick={Search_Click}
            className="absolute ml-4 top-0 right-0 bottom-0 px-4 py-2 rounded-full bg-blue-400 text-white hover:bg-blue-600">
            Search
          </button>
        </div>
      </div>







      <ul>
  {weatherData.list?.map((hourlyData, index) => { //  formatTimedigit formatDatedigit
     const hourlyTimestamp = new Date(hourlyData.dt_txt).getTime();
   
  const [datePart, timePart] = hourlyData.dt_txt.split(' ');
  let[uasedatepart,usetimePart]=currentDateTime.split(' ');
  uasedatepart=formatDate(uasedatepart);
  usetimePart=formatTime(usetimePart)
  const userDateObj = formatDatedigit(uasedatepart);
const apiDateObj = formatDatedigit(datePart)
const userTimeObj=formatTimedigit(usetimePart);
const apiTiimeObje=formatTimedigit(timePart);
 if(userDateObj === apiDateObj){
  //console.log("date  user object",userDateObj," api obje",apiDateObj) 
        if(userTimeObj<apiTiimeObje && (userTimeObj >apiTiimeObje-3)){
  console.log("Time  user object",userTimeObj," api obje",apiTiimeObje)       
             
  return (
      <li
        key={index}
        className="border p-2 m-2 rounded-lg shadow-md bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 text-white hover:bg-blue-400 hover:text-gray-900"
      >
        <div className="flex flex-col items-center space-y-2">
          <p className="text-xl font-semibold">
            Time: {hourlyData.dt_txt} &nbsp;&nbsp;&nbsp;&nbsp;
            Description: {hourlyData.weather[0].description} &nbsp;&nbsp;&nbsp;&nbsp;
            Temperature: {hourlyData.main.temp}°C &nbsp;&nbsp;&nbsp;&nbsp;
            Wind: {Math.round(hourlyData.wind.speed * 3.6)} km/h
          </p>
        </div>
      </li>
    );
  } } // ->> ->> if Cls
  })}
</ul>

    </div >
  );
};

export default WeatherComponent;