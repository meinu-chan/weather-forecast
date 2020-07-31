import React from 'react';

import { Form } from 'react-bootstrap';

import '../assets/css/weather.css';
import compass from '../assets/img/compass.png';

const style = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  // img:{
  //   transform: rotate(wind.deg),
  // }
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
              const { dt_txt, main, weather, wind } = item;
              const [weat] = weather;
              let date = new Date(dt_txt);
              return (
                <ul key={`${index}_${dt_txt}`} className="info">
                  <li>
                    {`Day: ${date.getDate()}.Month: ${date.getMonth()} Time: ${date.getHours()}`}
                  </li>
                  <li>
                    Temperature: {main.temp} | max: {main.temp_max} | min:
                    {main.temp_min}
                  </li>
                  <li>
                    Weather:
                    {icons.has(weat.icon) ? icons.get(weat.icon) : 'icon not found'}|
                    {weat.description}
                  </li>
                  <li>
                    Wind:
                    <img
                      src={compass}
                      alt="help me...."
                      className="image"
                      style={{ transform: `rotate(${wind.deg}deg)` }}
                    />
                    | {wind.speed}
                  </li>
                </ul>
              );
            })}
          </li>
        </ul>
      </Form>
    </div>
  );
}
