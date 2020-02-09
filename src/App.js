import React, { Component } from 'react';
import WeatherDisplayer from './components/WeatherDisplayer';
import Location from './components/ LocationDisplayer';
import ForecastDisplayer from './components/forecastDisplayer';
import axios from 'axios';
import Loader from './components/Loader';
import { getCity, fetchData } from './utils';

const key = process.env.REACT_APP_OPEN_WEAHTER_KEY;

const APPID = `APPID=${key}`;
const PATH_BASE = 'https://api.openweathermap.org/data/2.5';
const WEATHER_TYPE_REQUEST = ['/weather?', '/forecast?'];
const CITY = 'q=';
const UNITS = 'units=metric';
const MODE = 'mode=json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: '',
      weather: null,
      weatherforecast: null,
      error: null,
      isLoading: false
    };
    this.onChange = this.onChange.bind(this);
    this.fetchWeather = this.fetchWeather.bind(this);
    this.setWeather = this.setWeather.bind(this);
    this.loading = this.loading.bind(this);
  }
  onChange(event) {
    this.setState({ city: event.target.value });
  }
  loading(loadingState) {
    this.setState({ isLoading: loadingState });
  }
  fetchWeather(event) {
    this.loading(true);
    axios(
      `${PATH_BASE}${WEATHER_TYPE_REQUEST[0]}${CITY}${this.state.city}&${UNITS}&${MODE}&${APPID}`
    )
      .then(response => {
        this.setWeather(response.data);
      })
      .then(
        axios(
          `${PATH_BASE}${WEATHER_TYPE_REQUEST[1]}${CITY}${this.state.city}&${UNITS}&${MODE}&${APPID}`
        )
          .then(response => this.setState({ weatherforecast: response.data }))
          .catch(error => this.setState({ error }))
      )
      .catch(error => this.setState({ error }));
    this.loading(false);
    event.preventDefault();
  }

  setWeather(weather) {
    this.setState({ weather, error: false });
  }

  componentDidMount() {
    const getLocation = async () => {
      this.loading(true);
      const response = await getCity();
      const cityName = response.data.city;

      const actualWeather = await fetchData(
        `${PATH_BASE}${WEATHER_TYPE_REQUEST[0]}${CITY}${cityName}&${UNITS}&${MODE}&${APPID}`
      );
      this.setWeather(actualWeather.data);

      const forecastweather = await fetchData(
        `${PATH_BASE}${WEATHER_TYPE_REQUEST[1]}${CITY}${cityName}&${UNITS}&${MODE}&${APPID}`
      );
      this.loading(false);
      this.setState({ weatherforecast: forecastweather.data });
    };

    getLocation();
  }
  render() {
    const { weather, weatherforecast, error, isLoading } = this.state;

    return (
      <div className="app">
        <div className="app-container">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <header className="container-item app-header">
                <Location
                  city={weather ? weather.name : ''}
                  countryCode={weather ? weather.sys.country : ''}
                />
              </header>
              <div className="container-item">
                {weather && (
                  <WeatherDisplayer weather={weather} error={error} />
                )}
              </div>
              <div className="container-item">
                {weatherforecast && (
                  <ForecastDisplayer weatherforecast={weatherforecast} />
                )}
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default App;
