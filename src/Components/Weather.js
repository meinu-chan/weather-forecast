import React from 'react';

import { Form } from 'react-bootstrap';

import '../assets/css/weather.css';
import ForecastFiveDays from './ForecastFiveDays';

const style = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
};

// ☀️⛅️🌥☁️🌦🌧⛈🌩🌨
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

export default function Weather({ country, id, list, name, sunrise, sunset }) {
  return (
    <div>
      <Form inline>
        <ul style={style.ul}>
          <li>Country: {country}</li>
          <li>Id: {id}</li>
          <li>Name: {name}</li>
          <li>Sunrise: {sunrise}</li>
          <li>Sunset: {sunset}</li>
          <hr />
          <li className="d-flex">
            {list.map((item, index) => {
              const { dt_txt, weather, main, wind } = item;
              const [weat] = weather;
              let date = new Date(dt_txt);
              return (
                <ForecastFiveDays
                  key={`${index}_${dt_txt}`}
                  {...weat}
                  date={date}
                  temp={main.temp}
                  {...wind}
                />
              );
            })}
          </li>
        </ul>
      </Form>
    </div>
  );
}
