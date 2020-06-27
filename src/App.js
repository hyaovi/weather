import React, { useEffect, useState } from 'react';
import { getCity, fetchData } from './utils';
import WeatherDisplayer, {
  HighlightsDisplayer,
  ForecastDisplayer,
} from './components/WeatherDisplayer';

const key = process.env.REACT_APP_OPEN_WEAHTER_KEY;
const APPID = `APPID=${key}`;
const PATH_BASE = 'https://api.openweathermap.org/data/2.5';
const WEATHER_TYPE_REQUEST = ['/weather?', '/forecast?'];
const CITY = 'q=';
const UNITS = 'units=metric';
const MODE = 'mode=json';

function App() {
  const [userInput, setuserInput] = useState('');
  const [weatherData, setweatherData] = useState({
    current: { err: false, data: undefined },
    forecast: { err: false, data: undefined },
  });

  const WeatherFromCity = async (city) => {
    const currentWeather = await fetchData(
      `${PATH_BASE}${WEATHER_TYPE_REQUEST[0]}${CITY}${city}&${UNITS}&${MODE}&${APPID}`
    );

    const forecastWeather = await fetchData(
      `${PATH_BASE}${WEATHER_TYPE_REQUEST[1]}${CITY}${city}&${UNITS}&${MODE}&${APPID}`
    );

    setweatherData((PREVSTATE) => ({
      ...PREVSTATE,
      current: currentWeather,
      forecast: forecastWeather,
    }));
    return { currentWeather, forecastWeather };
  };
  const SearchFromInput = (e) => {
    e.preventDefault();
    WeatherFromCity(userInput);
  };
  useEffect(() => {
    const location = async () => {
      const location = await getCity();
      console.log(location.data.city);
      const currentWeather = await fetchData(
        `${PATH_BASE}${WEATHER_TYPE_REQUEST[0]}${CITY}${location.data.city}&${UNITS}&${MODE}&${APPID}`
      );

      const forecastWeather = await fetchData(
        `${PATH_BASE}${WEATHER_TYPE_REQUEST[1]}${CITY}${location.data.city}&${UNITS}&${MODE}&${APPID}`
      );
      setweatherData((PREVSTATE) => ({
        ...PREVSTATE,
        current: currentWeather,
        forecast: forecastWeather,
      }));
    };
    location();
  }, []);
  return (
    <PageWrapper>
      <div className="row  ">
        <div className="col-md-4 col-xl-3 full-height bg-white px-md-4 px-xl-5">
          <div className="py-5 h-100 d-flex flex-column  ">
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
