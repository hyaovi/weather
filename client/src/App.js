import React, { Component } from 'react';
import WeatherDisplayer from './components/WeatherDisplayer';
import DateDisplayer from './components/dateDisplayer';
import SearchBar from './components/searchBar';
import axios from 'axios';
import './App.css';

const key = process.env.key= '9828381f48a11303aca58c53706d2797';

const APPID = `APPID=${key}`;
const PATH_BASE = 'http://api.openweathermap.org/data/2.5';
const WEATHER_TYPE_REQUEST = '/weather?';
const CITY = 'q=';
const UNITS = 'units=metric';
const MODE = 'mode=json';
//const ICON_URL = 'http://openweathermap.org/img/w/';
let weather = {
  "cod": "200",
  "message": 0.0019,
  "cnt": 40,
  "list": [
      {
          "dt": 1538870400,
          "main": {
              "temp": 9.01,
              "temp_min": 9.01,
              "temp_max": 9.9,
              "pressure": 1010.36,
              "sea_level": 1025.21,
              "grnd_level": 1010.36,
              "humidity": 95,
              "temp_kf": -0.89
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 92
          },
          "wind": {
              "speed": 7.66,
              "deg": 250.503
          },
          "rain": {
              "3h": 1.095
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2018-10-07 00:00:00"
      },
      {
          "dt": 1538881200,
          "main": {
              "temp": 10.53,
              "temp_min": 10.53,
              "temp_max": 11.2,
              "pressure": 1009.89,
              "sea_level": 1024.61,
              "grnd_level": 1009.89,
              "humidity": 95,
              "temp_kf": -0.67
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "clouds": {
              "all": 92
          },
          "wind": {
              "speed": 9.16,
              "deg": 260.002
          },
          "rain": {
              "3h": 1.205
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2018-10-07 03:00:00"
      },
      {
          "dt": 1538892000,
          "main": {
              "temp": 10.46,
              "temp_min": 10.46,
              "temp_max": 10.9,
              "pressure": 1011,
              "sea_level": 1025.62,
              "grnd_level": 1011,
              "humidity": 91,
              "temp_kf": -0.44
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "clouds": {
              "all": 80
          },
          "wind": {
              "speed": 9.57,
              "deg": 263.001
          },
          "rain": {
              "3h": 0.025
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2018-10-07 06:00:00"
      },
      {
          "dt": 1538902800,
          "main": {
              "temp": 11.07,
              "temp_min": 11.07,
              "temp_max": 11.3,
              "pressure": 1012.31,
              "sea_level": 1026.93,
              "grnd_level": 1012.31,
              "humidity": 87,
              "temp_kf": -0.22
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 80
          },
          "wind": {
              "speed": 9.01,
              "deg": 266
          },
          "rain": {},
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2018-10-07 09:00:00"
      },
      {
          "dt": 1538913600,
          "main": {
              "temp": 11.73,
              "temp_min": 11.73,
              "temp_max": 11.73,
              "pressure": 1013.18,
              "sea_level": 1027.87,
              "grnd_level": 1013.18,
              "humidity": 80,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "clouds": {
              "all": 80
          },
          "wind": {
              "speed": 7.02,
              "deg": 266.001
          },
          "rain": {
              "3h": 0.0099999999999998
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2018-10-07 12:00:00"
      },
      {
          "dt": 1538924400,
          "main": {
              "temp": 11.63,
              "temp_min": 11.63,
              "temp_max": 11.63,
              "pressure": 1013.45,
              "sea_level": 1028.29,
              "grnd_level": 1013.45,
              "humidity": 74,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 92
          },
          "wind": {
              "speed": 4.96,
              "deg": 256.505
          },
          "rain": {},
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2018-10-07 15:00:00"
      },
      {
          "dt": 1538935200,
          "main": {
              "temp": 11.01,
              "temp_min": 11.01,
              "temp_max": 11.01,
              "pressure": 1013.36,
              "sea_level": 1028.1,
              "grnd_level": 1013.36,
              "humidity": 75,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 68
          },
          "wind": {
              "speed": 5.28,
              "deg": 236.003
          },
          "rain": {},
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2018-10-07 18:00:00"
      },
      {
          "dt": 1538946000,
          "main": {
              "temp": 10.44,
              "temp_min": 10.44,
              "temp_max": 10.44,
              "pressure": 1012.46,
              "sea_level": 1027.23,
              "grnd_level": 1012.46,
              "humidity": 76,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 88
          },
          "wind": {
              "speed": 5.86,
              "deg": 230.001
          },
          "rain": {},
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2018-10-07 21:00:00"
      },
      {
          "dt": 1538956800,
          "main": {
              "temp": 10.27,
              "temp_min": 10.27,
              "temp_max": 10.27,
              "pressure": 1011.35,
              "sea_level": 1026.09,
              "grnd_level": 1011.35,
              "humidity": 77,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 92
          },
          "wind": {
              "speed": 7.02,
              "deg": 230.002
          },
          "rain": {
              "3h": 0.16
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2018-10-08 00:00:00"
      },
      {
          "dt": 1538967600,
          "main": {
              "temp": 9.99,
              "temp_min": 9.99,
              "temp_max": 9.99,
              "pressure": 1010.04,
              "sea_level": 1024.72,
              "grnd_level": 1010.04,
              "humidity": 80,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 8.3,
              "deg": 232.001
          },
          "rain": {
              "3h": 0.355
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2018-10-08 03:00:00"
      },
      {
          "dt": 1538978400,
          "main": {
              "temp": 10.14,
              "temp_min": 10.14,
              "temp_max": 10.14,
              "pressure": 1008.92,
              "sea_level": 1023.66,
              "grnd_level": 1008.92,
              "humidity": 82,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "clouds": {
              "all": 56
          },
          "wind": {
              "speed": 9.27,
              "deg": 230.002
          },
          "rain": {
              "3h": 0.375
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2018-10-08 06:00:00"
      },
      {
          "dt": 1538989200,
          "main": {
              "temp": 12.8,
              "temp_min": 12.8,
              "temp_max": 12.8,
              "pressure": 1008.42,
              "sea_level": 1023.08,
              "grnd_level": 1008.42,
              "humidity": 77,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "clouds": {
              "all": 92
          },
          "wind": {
              "speed": 11.26,
              "deg": 237.503
          },
          "rain": {
              "3h": 0.13
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2018-10-08 09:00:00"
      },
      {
          "dt": 1539000000,
          "main": {
              "temp": 11.08,
              "temp_min": 11.08,
              "temp_max": 11.08,
              "pressure": 1011,
              "sea_level": 1025.62,
              "grnd_level": 1011,
              "humidity": 78,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "clouds": {
              "all": 12
          },
          "wind": {
              "speed": 11.42,
              "deg": 272.002
          },
          "rain": {
              "3h": 0.39
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2018-10-08 12:00:00"
      },
      {
          "dt": 1539010800,
          "main": {
              "temp": 7.65,
              "temp_min": 7.65,
              "temp_max": 7.65,
              "pressure": 1015.69,
              "sea_level": 1030.62,
              "grnd_level": 1015.69,
              "humidity": 74,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 801,
                  "main": "Clouds",
                  "description": "few clouds",
                  "icon": "02n"
              }
          ],
          "clouds": {
              "all": 20
          },
          "wind": {
              "speed": 9.11,
              "deg": 284.501
          },
          "rain": {},
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2018-10-08 15:00:00"
      },
      {
          "dt": 1539021600,
          "main": {
              "temp": 6.51,
              "temp_min": 6.51,
              "temp_max": 6.51,
              "pressure": 1018.93,
              "sea_level": 1034.09,
              "grnd_level": 1018.93,
              "humidity": 74,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 24
          },
          "wind": {
              "speed": 7.02,
              "deg": 295.003
          },
          "rain": {
              "3h": 0.0099999999999998
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2018-10-08 18:00:00"
      },
      {
          "dt": 1539032400,
          "main": {
              "temp": 5.36,
              "temp_min": 5.36,
              "temp_max": 5.36,
              "pressure": 1021.92,
              "sea_level": 1037.02,
              "grnd_level": 1021.92,
              "humidity": 78,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "02n"
              }
          ],
          "clouds": {
              "all": 8
          },
          "wind": {
              "speed": 5.75,
              "deg": 305.501
          },
          "rain": {},
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2018-10-08 21:00:00"
      },
      {
          "dt": 1539043200,
          "main": {
              "temp": 3.81,
              "temp_min": 3.81,
              "temp_max": 3.81,
              "pressure": 1024.15,
              "sea_level": 1039.53,
              "grnd_level": 1024.15,
              "humidity": 88,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 5.06,
              "deg": 314.001
          },
          "rain": {},
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2018-10-09 00:00:00"
      },
      {
          "dt": 1539054000,
          "main": {
              "temp": 1.94,
              "temp_min": 1.94,
              "temp_max": 1.94,
              "pressure": 1026.37,
              "sea_level": 1041.68,
              "grnd_level": 1026.37,
              "humidity": 100,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 3.67,
              "deg": 320.505
          },
          "rain": {},
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2018-10-09 03:00:00"
      },
      {
          "dt": 1539064800,
          "main": {
              "temp": 5.05,
              "temp_min": 5.05,
              "temp_max": 5.05,
              "pressure": 1028.45,
              "sea_level": 1043.72,
              "grnd_level": 1028.45,
              "humidity": 84,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "02d"
              }
          ],
          "clouds": {
              "all": 8
          },
          "wind": {
              "speed": 3.21,
              "deg": 320.001
          },
          "rain": {},
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2018-10-09 06:00:00"
      },
      {
          "dt": 1539075600,
          "main": {
              "temp": 7.59,
              "temp_min": 7.59,
              "temp_max": 7.59,
              "pressure": 1029.13,
              "sea_level": 1044.3,
              "grnd_level": 1029.13,
              "humidity": 83,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 2.47,
              "deg": 308.502
          },
          "rain": {},
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2018-10-09 09:00:00"
      },
      {
          "dt": 1539086400,
          "main": {
              "temp": 8.45,
              "temp_min": 8.45,
              "temp_max": 8.45,
              "pressure": 1028.83,
              "sea_level": 1044.05,
              "grnd_level": 1028.83,
              "humidity": 73,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 2.52,
              "deg": 297.001
          },
          "rain": {},
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2018-10-09 12:00:00"
      },
      {
          "dt": 1539097200,
          "main": {
              "temp": 3.82,
              "temp_min": 3.82,
              "temp_max": 3.82,
              "pressure": 1029.18,
              "sea_level": 1044.52,
              "grnd_level": 1029.18,
              "humidity": 88,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 801,
                  "main": "Clouds",
                  "description": "few clouds",
                  "icon": "02n"
              }
          ],
          "clouds": {
              "all": 12
          },
          "wind": {
              "speed": 1.67,
              "deg": 264.501
          },
          "rain": {},
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2018-10-09 15:00:00"
      },
      {
          "dt": 1539108000,
          "main": {
              "temp": 1.61,
              "temp_min": 1.61,
              "temp_max": 1.61,
              "pressure": 1029.12,
              "sea_level": 1044.53,
              "grnd_level": 1029.12,
              "humidity": 93,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03n"
              }
          ],
          "clouds": {
              "all": 48
          },
          "wind": {
              "speed": 2.36,
              "deg": 253.004
          },
          "rain": {},
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2018-10-09 18:00:00"
      },
      {
          "dt": 1539118800,
          "main": {
              "temp": 2.09,
              "temp_min": 2.09,
              "temp_max": 2.09,
              "pressure": 1028.97,
              "sea_level": 1044.43,
              "grnd_level": 1028.97,
              "humidity": 97,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 76
          },
          "wind": {
              "speed": 2.12,
              "deg": 234.508
          },
          "rain": {},
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2018-10-09 21:00:00"
      },
      {
          "dt": 1539129600,
          "main": {
              "temp": 2.37,
              "temp_min": 2.37,
              "temp_max": 2.37,
              "pressure": 1028.78,
              "sea_level": 1044.25,
              "grnd_level": 1028.78,
              "humidity": 97,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03n"
              }
          ],
          "clouds": {
              "all": 44
          },
          "wind": {
              "speed": 2.61,
              "deg": 225.001
          },
          "rain": {},
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2018-10-10 00:00:00"
      },
      {
          "dt": 1539140400,
          "main": {
              "temp": 1.1,
              "temp_min": 1.1,
              "temp_max": 1.1,
              "pressure": 1028.67,
              "sea_level": 1044.06,
              "grnd_level": 1028.67,
              "humidity": 97,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "02n"
              }
          ],
          "clouds": {
              "all": 8
          },
          "wind": {
              "speed": 2.61,
              "deg": 226.001
          },
          "rain": {},
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2018-10-10 03:00:00"
      },
      {
          "dt": 1539151200,
          "main": {
              "temp": 6.16,
              "temp_min": 6.16,
              "temp_max": 6.16,
              "pressure": 1027.99,
              "sea_level": 1043.14,
              "grnd_level": 1027.99,
              "humidity": 80,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 3.77,
              "deg": 233.5
          },
          "rain": {},
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2018-10-10 06:00:00"
      },
      {
          "dt": 1539162000,
          "main": {
              "temp": 8.86,
              "temp_min": 8.86,
              "temp_max": 8.86,
              "pressure": 1026.33,
              "sea_level": 1041.33,
              "grnd_level": 1026.33,
              "humidity": 73,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03d"
              }
          ],
          "clouds": {
              "all": 48
          },
          "wind": {
              "speed": 5.83,
              "deg": 235.509
          },
          "rain": {},
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2018-10-10 09:00:00"
      },
      {
          "dt": 1539172800,
          "main": {
              "temp": 9.35,
              "temp_min": 9.35,
              "temp_max": 9.35,
              "pressure": 1023.55,
              "sea_level": 1038.48,
              "grnd_level": 1023.55,
              "humidity": 68,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 801,
                  "main": "Clouds",
                  "description": "few clouds",
                  "icon": "02d"
              }
          ],
          "clouds": {
              "all": 20
          },
          "wind": {
              "speed": 6.96,
              "deg": 233
          },
          "rain": {},
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2018-10-10 12:00:00"
      },
      {
          "dt": 1539183600,
          "main": {
              "temp": 7.85,
              "temp_min": 7.85,
              "temp_max": 7.85,
              "pressure": 1021.02,
              "sea_level": 1036.02,
              "grnd_level": 1021.02,
              "humidity": 66,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 801,
                  "main": "Clouds",
                  "description": "few clouds",
                  "icon": "02n"
              }
          ],
          "clouds": {
              "all": 20
          },
          "wind": {
              "speed": 7.43,
              "deg": 235
          },
          "rain": {},
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2018-10-10 15:00:00"
      },
      {
          "dt": 1539194400,
          "main": {
              "temp": 7.95,
              "temp_min": 7.95,
              "temp_max": 7.95,
              "pressure": 1018.4,
              "sea_level": 1033.38,
              "grnd_level": 1018.4,
              "humidity": 68,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03n"
              }
          ],
          "clouds": {
              "all": 48
          },
          "wind": {
              "speed": 8.14,
              "deg": 247.504
          },
          "rain": {},
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2018-10-10 18:00:00"
      },
      {
          "dt": 1539205200,
          "main": {
              "temp": 8.8,
              "temp_min": 8.8,
              "temp_max": 8.8,
              "pressure": 1015.4,
              "sea_level": 1030.35,
              "grnd_level": 1015.4,
              "humidity": 70,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 92
          },
          "wind": {
              "speed": 9.13,
              "deg": 260.006
          },
          "rain": {},
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2018-10-10 21:00:00"
      },
      {
          "dt": 1539216000,
          "main": {
              "temp": 10.28,
              "temp_min": 10.28,
              "temp_max": 10.28,
              "pressure": 1013.29,
              "sea_level": 1028.12,
              "grnd_level": 1013.29,
              "humidity": 77,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 64
          },
          "wind": {
              "speed": 8.86,
              "deg": 272.503
          },
          "rain": {},
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2018-10-11 00:00:00"
      },
      {
          "dt": 1539226800,
          "main": {
              "temp": 11.5,
              "temp_min": 11.5,
              "temp_max": 11.5,
              "pressure": 1012.75,
              "sea_level": 1027.59,
              "grnd_level": 1012.75,
              "humidity": 78,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 76
          },
          "wind": {
              "speed": 7.67,
              "deg": 289.505
          },
          "rain": {
              "3h": 0.03
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2018-10-11 03:00:00"
      },
      {
          "dt": 1539237600,
          "main": {
              "temp": 12.37,
              "temp_min": 12.37,
              "temp_max": 12.37,
              "pressure": 1014.22,
              "sea_level": 1029.02,
              "grnd_level": 1014.22,
              "humidity": 70,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "clouds": {
              "all": 32
          },
          "wind": {
              "speed": 8.56,
              "deg": 314.501
          },
          "rain": {
              "3h": 0.0099999999999998
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2018-10-11 06:00:00"
      },
      {
          "dt": 1539248400,
          "main": {
              "temp": 11.87,
              "temp_min": 11.87,
              "temp_max": 11.87,
              "pressure": 1016.63,
              "sea_level": 1031.46,
              "grnd_level": 1016.63,
              "humidity": 65,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 9.32,
              "deg": 326.503
          },
          "rain": {},
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2018-10-11 09:00:00"
      },
      {
          "dt": 1539259200,
          "main": {
              "temp": 10.09,
              "temp_min": 10.09,
              "temp_max": 10.09,
              "pressure": 1019.41,
              "sea_level": 1034.17,
              "grnd_level": 1019.41,
              "humidity": 65,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 8.86,
              "deg": 332.003
          },
          "rain": {},
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2018-10-11 12:00:00"
      },
      {
          "dt": 1539270000,
          "main": {
              "temp": 7.31,
              "temp_min": 7.31,
              "temp_max": 7.31,
              "pressure": 1021.62,
              "sea_level": 1036.61,
              "grnd_level": 1021.62,
              "humidity": 67,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 7.25,
              "deg": 332
          },
          "rain": {},
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2018-10-11 15:00:00"
      },
      {
          "dt": 1539280800,
          "main": {
              "temp": 5.79,
              "temp_min": 5.79,
              "temp_max": 5.79,
              "pressure": 1023.1,
              "sea_level": 1038.26,
              "grnd_level": 1023.1,
              "humidity": 71,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 6.61,
              "deg": 332.503
          },
          "rain": {},
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2018-10-11 18:00:00"
      },
      {
          "dt": 1539291600,
          "main": {
              "temp": 4.79,
              "temp_min": 4.79,
              "temp_max": 4.79,
              "pressure": 1023.89,
              "sea_level": 1039.04,
              "grnd_level": 1023.89,
              "humidity": 74,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 6.41,
              "deg": 329.501
          },
          "rain": {},
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2018-10-11 21:00:00"
      }
  ],
  "city": {
      "id": 551487,
      "name": "Kazan",
      "coord": {
          "lat": 55.7824,
          "lon": 49.1242
      },
      "country": "RU",
      "population": 1104738
  }
}
function DailyDsiplayer (props){
  let weatherDaily = [];
  for(let i=8+2; i<42; i=i+8){
    weatherDaily.push( weather.list[i])
  }
  return(
    <div className="daily">
      {weatherDaily.map(item =>{ return(  
        <div>
          <p>{item.dt_txt.substring(5,10)}</p>
          <p>{item.main.temp}&deg;C</p>
          <p>{item.weather[0].description}</p>
        </div>)
      })}
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
      <h1>Weather App</h1>
        <div className="App">
          <header className="App-header">
            <DateDisplayer city={ weather? weather.name:'' } countryCode = {weather? weather.sys.country:''} />
            <SearchBar fetchWeather={this.fetchWeather} city={city||''} onChange={this.onChange} />
          </header>
          {
            weather ? <WeatherDisplayer weather={weather} error={error} > <DailyDsiplayer/></WeatherDisplayer> : <p></p>
          }
         
        </div>
      </div>
    );
  }
}

export default App;
