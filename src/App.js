import React, { Component } from 'react';
import axios from 'axios';

import Forms from './Components/Form';
import Weather from './Components/Weather';

const API_KEY = '809a9d644a33e1d3d06d73be2a7232b1';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      info: {
        country: '',
        id: undefined,
        name: '',
        sunrise: undefined,
        sunset: undefined,
        timezone: undefined,
        list: [],
      },
      value: 'Kiev',
    };
  }

  componentDidMount() {
    this.gettingWeatherForToday();
  }

  handleSearch = (e) => {
    this.setState({ value: e.target.value });
  };

  gettingWeatherForToday = async (e) => {
    if (this.state.value) {
      await axios
        .get(
          `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.value}&appid=${API_KEY}&units=metric`,
        )
        .then((response) => {
          const { city, list } = response.data;
          this.setState({
            info: {
              country: city.country,
              id: city.id,
              name: city.name,
              sunrise: this.giveMeNormalTime(city.sunrise + city.timezone),
              sunset: this.giveMeNormalTime(city.sunset + city.timezone),
              timezone: city.timezone,
              list,
            },
          });
        })
        .catch((err) => {
          if (err.response) {
            alert(err.response.data.cod + ' ' + err.response.data.message);
            console.log(err.response);
          } else if (err.request) {
            alert(err.request.data.cod + ' ' + err.request.data.message);
            console.log(err.request);
          } else {
            alert(err);
            console.log(err);
          }
        });
    }
  };

  giveMeNormalTime = (time) => {
    let date = new Date();
    date.setTime(time * 1000);

    return `${date.getHours()}:${date.getMinutes()}`;
  };

  render() {
    return (
      <div>
        <Forms
          key={this.state.name}
          weatherMethod={this.gettingWeatherForToday.bind(this)}
          valueHandler={this.handleSearch}
        />
        <Weather {...this.state.info} />
      </div>
    );
  }
}
