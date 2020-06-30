export const IPIFY_URL = 'https://api.ipify.org';
export const HEROKU_CORS_URL = 'https://cors-anywhere.herokuapp.com';
export const IP_STACK_URL = 'http://api.ipstack.com/';
export const IP_STACK_KEY = process.env.REACT_APP_IP_STACK_KEY;
export const IP_STACK_PARAMS = `?access_key=${IP_STACK_KEY}`;


export const KEY = process.env.REACT_APP_OPEN_WEAHTER_KEY;
export const APPID = `APPID=${KEY}`;
export const PATH_BASE = 'https://api.openweathermap.org/data/2.5';
export const CITY = 'q=';
export const UNITS = 'units=metric';
export const MODE = 'mode=json';
export const WEATHER_TYPE_REQUEST = {
  CURRENT: '/weather?',
  FORECAST: '/forecast?',
};
