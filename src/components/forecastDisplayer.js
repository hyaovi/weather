import React from 'react';

function dateConverter(dt) {
  const date = new Date(dt * 1000).toDateString();
  return date.substring(0, 10);
}
function ForecastDisplayer({ weatherforecast }) {
  let weatherDaily = [];
  for (let i = 7; i < 41; i = i + 8) {
    weatherDaily.push(weatherforecast.list[i]);
  }
  return (
    <div className="daily">
      {weatherDaily.slice(0, 4).map(item => {
        return (
          <div className="item" key={item.dt.toLocaleString()}>
            <small className="">
              <strong>{dateConverter(item.dt)}</strong>
            </small>
            <small className="">{item.main.temp}&deg;C</small>
            <small className="">{item.weather[0].description}</small>
          </div>
        );
      })}
    </div>
  );
}

export default ForecastDisplayer;
