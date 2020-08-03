import React from 'react';

import compass from '../assets/img/compass.png';
import '../assets/css/weather.css';

const icons = new Map();
icons
  .set('04d', '☁️')
  .set('04n', '☁️')
  .set('10n', '🌨')
  .set('10d', '🌨')
  .set('01n', '☀️')
  .set('01d', '☀️')
  .set('03d', '⛅️')
  .set('03n', '⛅️')
  .set('02n', '☁️')
  .set('02d', '☁️');

export default function ForecastFiveDays({ date, deg, description, icon, id, speed, temp }) {
  const dateNormalizer = (date) => {
    return date < 10 ? `0${date}` : date;
  };

  return (
    <>
      {id && (
        <ul className="info">
          <li>{`Date: ${dateNormalizer(date.getDate())}.${dateNormalizer(
            date.getMonth(),
          )} Time: ${dateNormalizer(date.getHours())}:${date.getMinutes()}0`}</li>
          <li>Temperature: {temp}</li>
          <li>
            Weather:{`${icons.has(icon) ? icons.get(icon) : 'icon not found'}  |  ${description}`}
          </li>
          <li className="d-flex">
            Wind:
            <img
              src={compass}
              alt={`${deg}`}
              className="image"
              style={{ transform: `rotate(${deg}deg)` }}
            />
            {`  |  ${speed}`}
          </li>
        </ul>
      )}
    </>
  );
}
