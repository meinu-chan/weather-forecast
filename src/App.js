import React, { Component } from "react";
import axios from "axios";

import Forms from "./Components/Form";
import Weather from "./Components/Weather";

const API_KEY = "809a9d644a33e1d3d06d73be2a7232b1";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      main: { name: "", sunrise: 0, sunset: 0, temp: 0, country: "" },
      value: "",
    };
  }

  componentDidMount() {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=Kiev&appid=${API_KEY}&units=metric`
      )
      .then((response) => {
        this.setState({
          main: {
            name: response.data.name,
            sunrise: this.giveMeNormalTime(response.data.sys.sunrise),
            sunset: this.giveMeNormalTime(response.data.sys.sunset),
            temp: response.data.main.temp,
            country: response.data.sys.country,
          },
        });
      })
      .catch((err) => {
        console.log(err.response);
        if (err.response) {
          alert(err.response.cod + err.response.message);
        } else if (err.request) {
          alert(err.request.cod + err.request.message);
        } else {
          alert(err);
        }
      });
  }

  handleSearch = (e) => {
    this.setState({ value: e.target.value });
  };

  gettingWeather = async (e) => {
    if (this.state.value) {
      await axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${API_KEY}&units=metric`
        )
        .then((response) => {
          this.setState({
            main: {
              name: response.data.name,
              sunrise: this.giveMeNormalTime(response.data.sys.sunrise),
              sunset: this.giveMeNormalTime(response.data.sys.sunset),
              temp: response.data.main.temp,
              country: response.data.sys.country,
            },
          });
        })
        .catch((err) => {
          if (err.response) {
            alert(err.response.data.cod + " " + err.response.data.message);
            console.log(err.response);
          } else if (err.request) {
            alert(err.request.data.cod + " " + err.request.data.message);
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

    return date.getHours() + ":" + date.getMinutes();
  };

  render() {
    return (
      <div>
        <Forms
          key={this.state.name}
          weatherMethod={this.gettingWeather.bind(this)}
          valueHandler={this.handleSearch}
        />
        <Weather {...this.state.main} />
      </div>
    );
  }
}
