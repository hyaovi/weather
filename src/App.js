import React, { useEffect, useState } from 'react';

import {
  APPID,
  UNITS,
  PATH_BASE,
  CITY,
  MODE,
  WEATHER_TYPE_REQUEST,
} from './constants';

import { getCity, fetchData } from './utils';

import WeatherDisplayer from './components/WeatherDisplayer';
import ForecastDisplayer from './components/ForecastDisplayer';
import HighlightsDisplayer from './components/HighlightsDisplayer';

function App() {
  const [userInput, setuserInput] = useState('');
  const [weatherData, setweatherData] = useState({
    current: { err: false, data: undefined },
    forecast: { err: false, data: undefined },
  });

  const fetchWeather = async (city) => {
    const currentWeather = await fetchData(
      `${PATH_BASE}${WEATHER_TYPE_REQUEST.CURRENT}${CITY}${city}&${UNITS}&${MODE}&${APPID}`
    );
    const forecastWeather = await fetchData(
      `${PATH_BASE}${WEATHER_TYPE_REQUEST.FORECAST}${CITY}${city}&${UNITS}&${MODE}&${APPID}`
    );
    return { currentWeather, forecastWeather };
  };

  const setData = ({ currentWeather, forecastWeather }) =>
    setweatherData((PREVSTATE) => ({
      ...PREVSTATE,
      current: currentWeather,
      forecast: forecastWeather,
    }));

  const fetchAndSetWeather = async (city) => {
    const { currentWeather, forecastWeather } = await fetchWeather(city);
    setData({ currentWeather, forecastWeather });
  };
  const SearchFromInput = (e) => {
    e.preventDefault();
    fetchAndSetWeather(userInput);
  };
  useEffect(() => {
    const location = async () => {
      const location = await getCity();
      console.log(location.data.city);
      const { currentWeather, forecastWeather } = await fetchWeather(
        location.data.city
      );
      setData({ currentWeather, forecastWeather });
    };
    location();
  }, []);
  return (
    <PageWrapper>
      <div className="row  ">
        <div className="col-md-4 col-xl-3 full-height bg-white px-md-4 px-xl-5">
          <div className="py-5 h-100 d-flex flex-column  ">
            <SearchBar
              userInput={userInput}
              setuserInput={setuserInput}
              SearchFromInput={SearchFromInput}
            />

            <WeatherDisplayer weather={weatherData.current} />
          </div>
        </div>

        <div className="col-md-8 col-xl-9 full-height">
          <div className="py-5 h-100">
            <ForecastDisplayer forecast={weatherData.forecast} />
            <HighlightsDisplayer weather={weatherData.current} />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default App;

const PageWrapper = ({ children }) => (
  <div className="bg-light page-wrapper">
    <div className="container-fluid px-lg-5">{children}</div>
  </div>
);

const SearchBar = ({ SearchFromInput, userInput, setuserInput }) => {
  return (
    <form onSubmit={SearchFromInput}>
      <div className="form-group">
        <input
          type="text"
          className="form-control input-custom"
          id="keyword"
          value={userInput}
          onChange={({ target: { value } }) => setuserInput(value)}
          aria-describedby="emailHelp"
          placeholder="Search for a town ..."
        />
      </div>
    </form>
  );
};
