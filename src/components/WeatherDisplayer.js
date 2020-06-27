import React, { useState } from 'react';
import { timeConverter } from '../utils';
import { Eye, Droplet, Cloud, Sunset, Sunrise } from 'react-feather';

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

export const HighlightsDisplayer = ({ weather: { data, err } }) => {
  return (
    <>
      {err ? (
        <p>Something went wrong</p>
      ) : (
        data && (
          <div className="">
            <h3 className="h3 heading mb-4">Today's Highlights</h3>
            <div className="row no-gutters">
              <div className="col-md-4 p-3">
                <div className="card px-3 py-5 border-0">
                  <h5 className="h6 text-muted">Visibility</h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="icon-container">
                      <Eye />
                    </span>
                    <span className="h3">{data.visibility / 1000} km </span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 p-3">
                <div className="card h-100 px-3 py-5 border-0">
                  <h5 className="h6 text-muted">Wind</h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="icon-container">
                      <Eye />
                    </span>
                    <span className="h3">{data.wind.speed} m/s </span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 p-3">
                <div className="card px-3 py-5 border-0">
                  <h5 className="h6 text-muted">Humidity</h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="icon-container">
                      <Droplet />
                    </span>
                    <span className="h3">{data.main.humidity} %</span>
                  </div>
                </div>
              </div>

              <div className="w-100"></div>

              <div className="col-md-4 p-3">
                <div className="card px-3 py-5 border-0">
                  <h5 className="h6 text-muted">Cloud</h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="icon-container">
                      <Cloud />
                    </span>
                    <span className="h3">{data.clouds.all} %</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 p-3">
                <div className="card px-3 py-5 border-0">
                  <h5 className="h6 text-muted">Sunrise</h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="icon-container">
                      <Sunrise />
                    </span>
                    <span className="h3">
                      {' '}
                      {timeConverter(data.sys.sunrise).time}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 p-3">
                <div className="card px-3 py-5 border-0">
                  <h5 className="h6 text-muted">Cloud</h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="icon-container">
                      <Sunset />
                    </span>
                    <span className="h3">
                      {timeConverter(data.sys.sunset).time}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export const ForecastDisplayer = ({ forecast: { data, err } }) => {
  let daily =
    data &&
    data.list &&
    data.list.filter((item, index, self) => {
      if (index === 0) return true;
      return self[index - 1].dt_txt.split(' ')[0] !== item.dt_txt.split(' ')[0];
    });
  const [showDailyState, setshowDailyState] = useState(false);
  const showDaily = () => setshowDailyState(true);
  const hideDaily = () => setshowDailyState(false);
  if (data && data.list) {
    const { list } = data;
    for (let i = 0; i < list.length; i += 1) {}
  }
  return (
    <>
      {err ? (
        <p>Something went wrong</p>
      ) : (
        data &&
        data.list && (
          <>
            <p className="">
              <span
                className={`btn btn-sm mr-2 ${!showDailyState && 'bg-primary'}`}
                onClick={hideDaily}
              >
                Hourly
              </span>
              <span
                className={`btn btn-sm mr-2 ${showDailyState && 'bg-primary'}`}
                onClick={showDaily}
              >
                Daily
              </span>
            </p>
            <div className=" row no-gutters  flex-nowrap mb-5">
              {!showDailyState
                ? data.list.length > 0 &&
                  data.list.slice(0, 6).map((item, index) => (
                    <div className=" col-md-2 col-xl-2 p-1" key={index}>
                      <div className="card px-2 py-5 text-center d-flex flex-column  border-0">
                        <div className=" text-muted ">
                          <small className="heading">
                            {timeConverter(item.dt).dateString.substring(0, 10)}
                          </small>
                          <br />
                          <span>{timeConverter(item.dt).time}</span>
                        </div>
                        <h3 className="h3 heading my-4">18.65°</h3>
                        <p className="h6 text-muted ">light rain</p>
                      </div>
                    </div>
                  ))
                : daily &&
                  daily.length > 0 &&
                  daily.map((item, index) => (
                    <div className=" col-md-2 col-xl-2 p-1" key={index}>
                      <div className="card px-2 py-5 text-center d-flex flex-column  border-0">
                        <div className=" text-muted ">
                          <small className="heading">
                            {timeConverter(item.dt).dateString.substring(0, 3)}
                          </small>
                        </div>
                        <span>
                          <img
                            className="img-fluid"
                            src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                            alt=""
                          />
                        </span>
                        <h3 className="h6 heading my-4">
                          <span className=" strong">{item.main.temp_max}°</span>{' '}
                          <span className="mx-1">~~</span>
                          <span className="text-muted">
                            {item.main.temp_min}°
                          </span>
                        </h3>
                        <p className="h6 text-muted ">{item.weather[0].main}</p>
                      </div>
                    </div>
                  ))}
            </div>
          </>
        )
      )}
    </>
  );
};
