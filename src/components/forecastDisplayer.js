import React, { useState } from 'react';

import WeatherIcon from './WeatherIcon';
import { timeConverter } from '../utils';

export default ({ forecast: { data, err } }) => {
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
            <div className="x-scroll">
              <div className=" row flex-nowrap no-gutters mb-5">
                {!showDailyState
                  ? data.list.length > 0 &&
                    data.list.slice(0, 6).map((item, index) => (
                      <div className=" col-md-2 col-xl-2 p-1" key={index}>
                        <div className="card px-2 py-5 text-center d-flex flex-column  border-0">
                          <div className=" text-muted ">
                            <small className="heading">
                              {timeConverter(item.dt).dateString.substring(
                                0,
                                10
                              )}
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
                              {timeConverter(item.dt).dateString.substring(
                                0,
                                3
                              )}
                            </small>
                          </div>
                          <WeatherIcon icon={item.weather[0].icon} />
                          <h3 className="h6 heading my-4">
                            <span className=" strong">
                              {item.main.temp_max}°
                            </span>{' '}
                            <span className="mx-1">~~</span>
                            <span className="text-muted">
                              {item.main.temp_min}°
                            </span>
                          </h3>
                          <p className="h6 text-muted ">
                            {item.weather[0].main}
                          </p>
                        </div>
                      </div>
                    ))}
              </div>
            </div>
          </>
        )
      )}
    </>
  );
};
