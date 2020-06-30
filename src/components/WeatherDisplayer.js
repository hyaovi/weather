import React from 'react';
import { timeConverter } from '../utils';

function WeatherDisplayer({ weather: { data, err } }) {
  return (
    <>
      {err ? (
        <p> Something went wrong</p>
      ) : (
        data && (
          <>
            <div className="current-weather ">
              <h2 className="h2 heading text-primary mb-5">{data.name}</h2>
              <div className="my-5">
                <h1 className=" display-2">{data.main.temp.toFixed(1)} °</h1>
                <p className=" ">
                  Feels like:{' '}
                  <strong>{data.main.feels_like.toFixed(1)} °</strong>
                </p>
              </div>
              <div className="my-auto">
                <p className="heading mb-0">Today</p>
                <p className="text-muted">
                  {timeConverter(data.dt).dateString}
                </p>
                <hr className="" />
              </div>
              <span>
                <img
                  className="img-fluid"
                  src={`http://openweathermap.org/img/wn/${data.weather[0].icon.slice(
                    0,
                    2
                  )}d@2x.png`}
                  alt="weather-icon"
                />
              </span>
              <p>{data.weather[0].description}</p>
            </div>

            <div className="row no-gutters mt-auto">
              <div className="col-4">
                <div className="p-2">
                  <p className="text-muted">Humidity :</p>
                  <h3 className="h5 heading">{data.main.humidity} %</h3>
                </div>
              </div>
              <div className="col-4">
                <div className="p-2">
                  <p className="text-muted">Pressure :</p>
                  <h3 className="h5 heading">{data.main.pressure} hPa</h3>
                </div>
              </div>
              <div className="col-4">
                <div className="p-2">
                  <p className="text-muted">Wind:</p>
                  <h3 className="h5 heading">{data.wind.speed} m/s</h3>
                </div>
              </div>
            </div>
          </>
        )
      )}
    </>
  );
}
export default WeatherDisplayer;
