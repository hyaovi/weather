import React from 'react';

function WeatherDisplayer({ weather, error }) {
  return error ? (
    <p> Something went wrong</p>
  ) : (
    <div className="text-dark">
      <div className="actual-weather-block">
        <div className="actual-weather">
          <h2 className="temperature">{weather.main.temp}&deg;C</h2>
          <p className="description text-grey">{weather.weather[0].main} </p>
        </div>
        <small className="feels-like">Feels like:</small>
      </div>
      <div className="extra-description">
        <div className="item">
          <span className="text-grey">Humidity :</span>
          <b> {weather.main.humidity} % </b>
        </div>
        <div className="item">
          <span className="text-grey">Wind speed :</span>
          <b> {weather.wind.speed} m/s</b>
        </div>
        <div className="item">
          <span className="text-grey">Visibility :</span>
          <b> {weather.visibility / 1000} km </b>
        </div>
      </div>
    </div>
  );
}
export default WeatherDisplayer;
