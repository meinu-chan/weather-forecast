import React from 'react';

import compass from '../assets/img/compass.png';

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

export default function ForecastFiveDays({ date, deg, description, icon, id, main, speed, temp }) {
  return (
    <>
      {id && (
        <ul className="info">
          <li>{`Date: ${date.getDate()}.${date.getMonth()} Time: ${date.getHours()}:${date.getMinutes()}0`}</li>
          <li>Temperature: {temp}</li>
          <li>
            Weather:
            {icons.has(icon) ? icons.get(icon) : 'icon not found'}|{description}
          </li>
          <li>
            Wind:
            <img
              src={compass}
              alt={`${deg}`}
              className="image"
              style={{ transform: `rotate(${deg}deg)` }}
            />
            | {speed}
          </li>
        </ul>
      )}
    </>
  );
}
