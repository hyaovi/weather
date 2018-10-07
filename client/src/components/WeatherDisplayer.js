import React from 'react';
import './WeatherDisplayer.css';

//const ICON_URL = 'http://openweathermap.org/img/w/';
const ICON_URL = '/icons/';
function WeatherDisplayer({ weather, error, children }) {
  return (
    error ? <p className="container"> Please enter a correct location</p> :
      <div className="container shadow" >
        <div className="main-info">
          <div className="main-info-details" >

            <p className='temperature'>{weather.main.temp}&deg;C</p>

            <div className="description">
              <p className='description-title'>{weather.weather[0].main}  </p>
              <p className='description-main' >{weather.weather[0].description}  </p>
            </div>
            <div className='extra-info'>
              <p>
                Humidity :
            <b>  {weather.main.humidity} % </b>
              </p>
              <p>
                Wind speed :
            <b>  {weather.wind.speed} m/s</b>
              </p>
              <p>
                Visibility :
            <b>  {weather.visibility / 1000} km </b>
              </p>
            </div>
          </div>
          <div>
            <img className='icon-weather' src={`${ICON_URL}${weather.weather[0].icon}.svg`} alt='weather icon' />
          </div>
        </div>
        {children}
      </div>
  )
}
export default WeatherDisplayer;