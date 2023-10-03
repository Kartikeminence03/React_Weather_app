import React from 'react'
import { useWeather } from './WeatherContext'

const TimeData = () => {
    const { selectedTime, updateSelectedTime } = useWeather();

    const handleTimeChange = (e) => {
        updateSelectedTime(e.target.value);
      };
    
      return (
        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Select a time:
          </label>
          <select
            value={selectedTime}
            onChange={handleTimeChange}
            className="py-2 px-4 rounded-full border outline-none bg-gray-100 text-gray-800"
          >
            <option value="00:00:00">00:00</option>
            <option value="03:00:00">03:00</option>
            <option value="06:00:00">06:00</option>
            <option value="09:00:00">09:00</option>
            <option value="12:00:00">12:00</option>
            <option value="15:00:00">15:00</option>
            <option value="18:00:00">18:00</option>
            <option value="21:00:00">21:00</option>
          </select>
          {/* {formattedTime} */}
        </div>
      );
}

export default TimeData