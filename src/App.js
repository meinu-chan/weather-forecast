import React, { Component } from "react";
import axios from "axios";
import Forms from "./Components/Form";
import Weather from "./Components/Weather";

const API_KEY = "809a9d644a33e1d3d06d73be2a7232b1";

export default class App extends Component {
  state = {
    name: "",
    sunrise: 0,
    sunset: 0,
    temp: 0,
    country: "",
  };

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    if (city) {
      await axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        )
        .then((response) => {
          console.log(response);
          this.setState({
            name: response.data.name,
            sunrise: this.giveMeNormalTime(response.data.sys.sunrise),
            sunset: this.giveMeNormalTime(response.data.sys.sunset),
            temp: response.data.main.temp,
            country: response.data.sys.country,
          });
        })
        .catch((error) => {
          console.log("error(36) : ", error);
        });
    }
  };

  giveMeNormalTime = (time) =>{
    var date = new Date();
    date.setTime(time * 1000);

    return date.getHours() + ':' + date.getMinutes();
  }

  render() {
    return (
      <div>
        <Forms weatherMethod={this.gettingWeather} />
        <Weather
          {...this.state}
        />
      </div>
    );
  }
}
