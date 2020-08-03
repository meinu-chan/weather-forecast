import React from 'react';

import { Form, Container } from 'react-bootstrap';

import '../assets/css/weather.css';
import ForecastFiveDays from './ForecastFiveDays';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  const ref = React.useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true,
    className: 'sl',
  };

  return (
    <Container>
      <Form>
        <ul style={style.ul}>
          <li>Country: {country}</li>
          <li>Id: {id}</li>
          <li>Name: {name}</li>
          <li>Sunrise: {sunrise}</li>
          <li>Sunset: {sunset}</li>
        </ul>
        <hr />
        <Slider ref={ref} {...settings} style={{ padding: '10px' }}>
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
        </Slider>
      </Form>
    </Container>
  );
}
