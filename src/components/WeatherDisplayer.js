import React from "react";
import "./WeatherDisplayer.css";
import icons from "./Icons";

function WeatherDisplayer({ weather, error, children }) {
  let icon = weather.weather[0].icon;
  return error ? (
    <p className="container"> Please enter a correct location</p>
  ) : (
    <div className="container shadow">
      <div className="main-info">
        <div className="main-info-details">
          <p className="temperature">{weather.main.temp}&deg;C</p>

          <div className="description">
            <p className="description-title text-muted">
              {weather.weather[0].main}{" "}
            </p>
            <p className="description-main">
              {weather.weather[0].description}{" "}
            </p>
          </div>
          <div className="extra-info">
            <p>
              <span className="text-muted">Humidity :</span>
              <b> {weather.main.humidity} % </b>
            </p>
            <p>
              <span className="text-muted">Wind speed :</span>
              <b> {weather.wind.speed} m/s</b>
            </p>
            <p>
              <span className="text-muted">Visibility :</span>
              <b> {weather.visibility / 1000} km </b>
            </p>
          </div>
        </div>
        <div>
          <img className="icon-weather" src={icons[icon]} alt="weather icon" />
        </div>
      </div>
      {children}
    </div>
  );
}
export default WeatherDisplayer;
