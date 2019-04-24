import React, { Component } from "react";
import WeatherDisplayer from "./components/WeatherDisplayer";
import DateDisplayer from "./components/dateDisplayer";
import SearchBar from "./components/searchBar";
import ForecastDisplayer from "./components/forecastDisplayer";
import axios from "axios";
import "./App.css";

const key = (process.env.key = "9828381f48a11303aca58c53706d2797");

const APPID = `APPID=${key}`;
const PATH_BASE = "http://api.openweathermap.org/data/2.5";
const WEATHER_TYPE_REQUEST = ["/weather?", "/forecast?"];
const CITY = "q=";
const UNITS = "units=metric";
const MODE = "mode=json";
//const ICON_URL = 'http://openweathermap.org/img/w/';

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: "",
      weather: null,
      weatherforecast: null,
      error: null
    };
    this.onChange = this.onChange.bind(this);
    this.fetchWeather = this.fetchWeather.bind(this);
    this.setWeather = this.setWeather.bind(this);
  }
  onChange(event) {
    this.setState({ city: event.target.value });
  }
  fetchWeather(event) {
    axios(
      `${PATH_BASE}${WEATHER_TYPE_REQUEST[0]}${CITY}${
        this.state.city
      }&${UNITS}&${MODE}&${APPID}`
    )
      .then(response => {
        this.setWeather(response.data);
      })
      .then(
        axios(
          `${PATH_BASE}${WEATHER_TYPE_REQUEST[1]}${CITY}${
            this.state.city
          }&${UNITS}&${MODE}&${APPID}`
        ).then(response => this.setState({ weatherforecast: response.data }))
      )
      .catch(error => this.setState({ error }));
    event.preventDefault();
  }

  setWeather(weather) {
    this.setState({ weather, error: false });
  }
  render() {
    const { city, weather, weatherforecast, error } = this.state;
    return (
      <div className="frame">
        <p>Weather App</p>
        <div className="App">
          <header className="App-header">
            <DateDisplayer
              city={weather ? weather.name : ""}
              countryCode={weather ? weather.sys.country : ""}
            />
            <SearchBar
              fetchWeather={this.fetchWeather}
              city={city || ""}
              onChange={this.onChange}
            />
          </header>
          {weather && weatherforecast ? (
            <WeatherDisplayer weather={weather} error={error}>
              {" "}
              <ForecastDisplayer weatherforecast={weatherforecast} />
            </WeatherDisplayer>
          ) : (
            <p />
          )}
        </div>
      </div>
    );
  }
}

export default App;
