import React from 'react';
import './searchBar.css';
function SearchBar(props){
    const {fetchWeather, onChange,city} = props;
    return(
      <div className='search' >
      <form className='search-bar' onSubmit={fetchWeather} >
        <input
          value={city}
          type='text'
          placeholder='enter a city'
          autoComplete='on'
          onChange={onChange}
        />
        <button ><img src={`/icons-search.svg` } alt="search icon"/></button>
        
      </form>
      </div>
    )
  }
  export default SearchBar ;