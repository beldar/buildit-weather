import React from 'react';
import WeatherDay from '../WeatherDay';
import './WeatherReport.css';

export const groupByDay = function(list) {
  return list.reduce((obj, cur) => {
    let date = cur.dt_txt.split(' ')[0];
    obj[date] = obj[date] || [];
    obj[date].push(cur);
    return obj;
  }, {});
};

export default function WeatherReport(props) {
  if (!props || !props.list || !props.list.length) return null;

  const days = groupByDay(props.list);

  return (
    <div className="weather-report">
      <ul className="weather-report__days">
        { Object.values(days).map((day, k) => <WeatherDay key={k} day={ day } />) }
      </ul>
    </div>
  )
};
