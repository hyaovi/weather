import React from 'react';

export default ({ icon }) => (
  <span>
    <img
      className="img-fluid"
      src={`http://openweathermap.org/img/wn/${icon.slice(0, 2)}d@2x.png`}
      alt="weather-icon"
    />
  </span>
);
