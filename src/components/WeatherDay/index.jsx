import React from 'react';
import moment from 'moment';
import WeatherHour from '../WeatherHour';
import './WeatherDay.css';

const DATE_FORMAT = 'dddd Do of MMMM';
const getDate = (unix) => moment(unix, 'X').format(DATE_FORMAT);


export default function WeatherDay(props) {
  if (!props.day || !props.day.length) return null;

  const dayStr = getDate(props.day[0].dt);

  return (
    <li className="weather-day">
      <h2 className="weather-day__title">{ dayStr }</h2>
      <ul>
        { props.day.map((hour, k) => <WeatherHour key={k} hour={hour} />) }
      </ul>
    </li>
  );
};
