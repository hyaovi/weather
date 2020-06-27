import React from 'react';
import { Crosshair } from 'react-feather';
import searchIcon from '../assets/icons-search.svg';
function SearchBar(props) {
  const { fetchWeather, onChange, city } = props;
  return (
    <div className="row">
      <div className="col-10">
        <form className="" onSubmit={fetchWeather}>
          <div className="form-row">
            <div className="col form-group">
              <input
                className="form-control mr-sm-2"
                value={city}
                type="text"
                placeholder="enter a city"
                autoComplete="on"
                onChange={onChange}
              />
            </div>
            <div className="col-auto">
              <button className="btn btn-primary">Get weather</button>
            </div>
          </div>
        </form>
      </div>
      <div className="col-2">
        <button className="btn btn-secondary rounded-circle p-2">
          <Crosshair />
        </button>
      </div>
    </div>
  );
}
export default SearchBar;
