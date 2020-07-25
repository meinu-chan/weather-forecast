import React, { Component } from "react";

export default class Weather extends Component {
  render() {
    return (
      <div>
        {this.props.name && (
          <>
            <p>
              Country: {this.props.name}, {this.props.country}
            </p>
            <p>Temperature: {this.props.temp}</p>
            <p>Sunrise: {this.props.sunrise}</p>
            <p>Sunset: {this.props.sunset}</p>
          </>
        )}
      </div>
    );
  }
}
