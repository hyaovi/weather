import React, { Component } from 'react';
import WeatherDisplayer from './component/WeatherDisplayer';
import DateDisplayer from './component/dateDisplayer';
//import SearchBar from './component/searchBar';
import axios from 'axios';
import './App.css';



const APPID = 'APPID=***************************';
const PATH_BASE = 'http://api.openweathermap.org/data/2.5';
const WEATHER_TYPE_REQUEST = '/weather?';
const CITY = 'q=';
const UNITS = 'units=metric';
const MODE = 'mode=json';
//const ICON_URL = 'http://openweathermap.org/img/w/';


/*const weather = {
  "coord": {
    "lon": 49.12,
    "lat": 55.78
  },
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01n"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 18,
    "pressure": 1011,
    "humidity": 77,
    "temp_min": 18,
    "temp_max": 18
  },
  "visibility": 10000,
  "wind": {
    "speed": 3,
    "deg": 30
  },
  "clouds": {
    "all": 0
  },
  "dt": 1531341000,
  "sys": {
    "type": 1,
    "id": 7335,
    "message": 0.0024,
    "country": "RU",
    "sunrise": 1531268107,
    "sunset": 1531329736
  },
  "id": 551487,
  "name": "Kazan",
  "cod": 200
}*/

function SearchBar(props){
  const {fetchWeather, onChange,city} = props;
  return(
    <div className='search' >
    <form className='search-bar' onSubmit={fetchWeather} >
      <input
        value={city}
        type='text'
        placeholder='Search for a city weather'
        autoComplete='on'
        onChange={onChange}
      />
      <button ><img src={`/icons-search.svg` } alt="search icon"/></button>
      
    </form>
    </div>
  )
}
class App extends Component {
  constructor() {
    super()
    this.state = {
      city: '',
      weather: null,
      error: null,
    }
    this.onChange = this.onChange.bind(this);
    this.fetchWeather = this.fetchWeather.bind(this);
    this.setWeather = this.setWeather.bind(this);
  }
  onChange(event) {
    this.setState({ city: event.target.value })
  }
  fetchWeather(event) {
    axios(`${PATH_BASE}${WEATHER_TYPE_REQUEST}${CITY}${this.state.city}&${UNITS}&${MODE}&${APPID}`)
      .then(response => { this.setWeather(response.data) })
      .catch(error => this.setState({ error }))
    event.preventDefault()
  }
  setWeather(weather) {
    this.setState({ weather, error: false })
  }
  render() {
    const { city, weather, error } = this.state;
    return (
      <div className="frame">
        <div className="App">
          <header className="App-header">
            <DateDisplayer city={ weather? weather.name:'' } countryCode = {weather? weather.sys.country:''} />
            <SearchBar fetchWeather={this.fetchWeather} city={city} onChange={this.onChange} />
          </header>
          {
            weather ? <WeatherDisplayer weather={weather} error={error} /> : <p></p>
          }
        </div>
      </div>
    );
  }
}

export default App;
