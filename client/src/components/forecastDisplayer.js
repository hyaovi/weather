import React from 'react';

function dateConverter(dt){
    const date = new Date(dt*1000).toDateString();
    return date.substring(0, 10)
}
function ForecastDisplayer ({weatherforecast}){
    let weatherDaily = [];
    for(let i=7; i<41; i=i+8){
      weatherDaily.push( weatherforecast.list[i])
    }
    return(
      <div className="daily">
        {weatherDaily.map(item =>{ return(  
          <div key={item.dt.toLocaleString()} >
            <p>{dateConverter(item.dt)}</p>
            <p>{item.main.temp}&deg;C</p>
            <p>{item.weather[0].description}</p>
          </div>)
        })}
      </div>
    )
  }

  export default ForecastDisplayer;