import React from 'react';
import './WeatherHour.css';

export default function WeatherHour(props) {
  if (!props.hour) return null;
  const hour = props.hour;

  return (
    <li className="weather-hour-item">
      <ul className="weather-hour">
        <li className="weather-hour__hour">⏱ { hour.dt_txt.split(' ')[1] }</li>
        <li><span className="weather-hour__prop">Temperature:</span> <strong>{hour.main.temp}ºC</strong></li>
        <li><span className="weather-hour__prop">Humidity:</span> <strong>{hour.main.humidity}%</strong></li>
        <li><span className="weather-hour__prop">Weather: </span> <strong>{hour.weather[0].description}</strong></li>
      </ul>
    </li>
  );
};
