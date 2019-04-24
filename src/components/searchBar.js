import React from "react";
import "./searchBar.css";
import searchIcon from "../assets/icons-search.svg";
function SearchBar(props) {
  const { fetchWeather, onChange, city } = props;
  return (
    <div className="search">
      <form className="search-bar" onSubmit={fetchWeather}>
        <input
          value={city}
          type="text"
          placeholder="enter a city"
          autoComplete="on"
          onChange={onChange}
        />
        <button>
          <img src={searchIcon} height="16" alt="search icon" />
        </button>
      </form>
    </div>
  );
}
export default SearchBar;
